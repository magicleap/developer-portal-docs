---

title: MLDevice.cs

---


# MLDevice.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2018-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.XR.MagicLeap.Native;
using UnityEngine.XR.Management;
#if UNITY_OPENXR_1_7_0_OR_NEWER
using UnityEngine.XR.OpenXR;
using UnityEngine.XR.OpenXR.Features.MagicLeapSupport;
#endif
namespace UnityEngine.XR.MagicLeap
{
    [DefaultExecutionOrder(ScriptOrder)]
    public class MLDevice : MonoBehaviour
    {
        private const int ScriptOrder = -15001;

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        private static void InstantiateSingleton()
        {
            if (instance == null)
            {
                GameObject go = new GameObject("(MLDevice Singleton)");
                instance = go.AddComponent<MLDevice>();
#if DEBUG
                MLPluginLog.Debug("Creating MLDevice");
#endif

                if (Application.isPlaying)
                {
                    DontDestroyOnLoad(instance.gameObject);
                }
            }
        }

        public const float MinimumNearClipDistance = 0.37f;

        public const float DefaultNearClipDistance = 0.37f;

        public const string MagicLeapDeviceName = "MagicLeap";

        private static MLDevice instance = null;

        private GestureSubsystemComponent gestureSubsystemComponent = null;

        private bool isReady = false;

        private uint gestureSubsystemStartCount = 0;

        private uint? platformLevel = null;

        private List<Action> endOfFrameCallbacks = new List<Action>();

        private Coroutine endOfFrameCoroutine = null;

        public delegate void OnStartEventDelegate();

        public delegate void OnUpdateEventDelegate();

        public delegate void OnDestroyEventDelegate();

        public delegate void OnPauseEventDelegate(bool paused);

        public delegate void OnFocusEventDelegate(bool hasFocus);

        public delegate void OnQuitEventDelegate();

        private event OnStartEventDelegate OnStartEvent = delegate { };

        private event OnUpdateEventDelegate OnUpdateEvent = delegate { };

        private event OnDestroyEventDelegate OnDestroyEvent = delegate { };

        private event OnPauseEventDelegate OnPauseEvent = delegate { };

        private event OnFocusEventDelegate OnFocusEvent = delegate { };

        private event OnQuitEventDelegate OnQuitEvent = delegate { };

        private int mainThreadId = -1;

        private Camera unityCamera;
        
#if UNITY_OPENXR_1_7_0_OR_NEWER
        private MagicLeapFeature mlOpenXrFeature;
#endif

        public static uint PlatformLevel
        {
            get
            {
                if (Instance.platformLevel == null)
                {
                    Instance.GetPlatformLevel();
                }

                return Instance.platformLevel.Value;
            }
        }

        public static GestureSubsystemComponent GestureSubsystemComponent
        {
            get => Instance.gestureSubsystemComponent;
        }

        public static int MainThreadId => Instance.mainThreadId;

        private static MLDevice Instance => instance;

        public static bool IsReady()
        {
            return UnityEngine.XR.XRSettings.enabled && (IsMagicLeapLoaderActive() || IsOpenXRLoaderActive());
        }

        public static bool IsMagicLeapLoaderActive()
        {
#if UNITY_XR_MAGICLEAP_PROVIDER
            if (XRGeneralSettings.Instance != null && XRGeneralSettings.Instance.Manager != null)
            {
                return XRGeneralSettings.Instance.Manager.ActiveLoaderAs<MagicLeapLoader>() != null;
            }
#endif
            return false;
        }

        public static bool IsOpenXRLoaderActive()
        { 
#if UNITY_OPENXR_1_7_0_OR_NEWER
            return Utils.TryGetOpenXRLoader(out _);
#endif
#pragma warning disable CS0162
            return false;
#pragma warning restore CS0162
        }

        public static bool IsMagicLeapOrOpenXRLoaderActive()
        {
            if (XRGeneralSettings.Instance != null && XRGeneralSettings.Instance.Manager != null)
            {
                bool isOpenXRLoaderActive = IsOpenXRLoaderActive();
                bool isXRSDKLoaderActive = IsMagicLeapLoaderActive();
                return isOpenXRLoaderActive || isXRSDKLoaderActive;
            }
            return false;
        }

        public static void RegisterStart(OnStartEventDelegate callback)
        {
            Instance.OnStartEvent += callback;
        }

        public static void RegisterUpdate(OnUpdateEventDelegate callback)
        {
            Instance.OnUpdateEvent += callback;
        }

        public static void RegisterDestroy(OnDestroyEventDelegate callback)
        {
            Instance.OnDestroyEvent += callback;
        }

        public static void RegisterApplicationPause(OnPauseEventDelegate callback)
        {
            Instance.OnPauseEvent += callback;
        }

        public static void RegisterApplicationFocus(OnFocusEventDelegate callback)
        {
            Instance.OnFocusEvent += callback;
        }

        public static void RegisterApplicationQuit(OnQuitEventDelegate callback)
        {
            Instance.OnQuitEvent += callback;
        }

        public static void UnregisterStart(OnStartEventDelegate callback)
        {
            Instance.OnStartEvent -= callback;
        }

        public static void UnregisterUpdate(OnUpdateEventDelegate callback)
        {
            // Check instance instead of the Instance property to prevent
            // creating an instance to unregister something that won't be there.
            if (instance != null)
            {
                instance.OnUpdateEvent -= callback;
            }
        }

        public static void UnregisterDestroy(OnDestroyEventDelegate callback)
        {
            // Check instance instead of the Instance property to prevent
            // creating an instance to unregister something that won't be there.
            if (instance != null)
            {
                instance.OnDestroyEvent -= callback;
            }
        }

        public static void UnregisterApplicationPause(OnPauseEventDelegate callback)
        {
            // Check instance instead of the Instance property to prevent
            // creating an instance to unregister something that won't be there.
            if (instance != null)
            {
                instance.OnPauseEvent -= callback;
            }
        }

        public static void UnregisterApplicationFocus(OnFocusEventDelegate callback)
        {
            // Check instance instead of the Instance property to prevent
            // creating an instance to unregister something that won't be there.
            if (instance != null)
            {
                instance.OnFocusEvent -= callback;
            }
        }

        public static void UnregisterApplicationQuit(OnQuitEventDelegate callback)
        {
            // Check instance instead of the Instance property to prevent
            // creating an instance to unregister something that won't be there.
            if (instance != null)
            {
                instance.OnQuitEvent -= callback;
            }
        }

        public static void RegisterGestureSubsystem()
        {
            // Instance is used on register, to ensure we have a valid instance.
            Instance.gestureSubsystemStartCount++;

            if (instance != null && instance.gestureSubsystemComponent == null)
            {
                instance.gestureSubsystemComponent = instance.gameObject.AddComponent<GestureSubsystemComponent>();
            }
        }

        public static void UnregisterGestureSubsystem()
        {
            if (instance == null)
            {
                return;
            }

            if (instance.gestureSubsystemStartCount > 0)
            {
                instance.gestureSubsystemStartCount--;

                // Only destroy the component when all instances have been removed.
                if (instance.gestureSubsystemStartCount == 0)
                {
                    if (instance.gestureSubsystemComponent != null)
                    {
                        Destroy(instance.gestureSubsystemComponent);
                        instance.gestureSubsystemComponent = null;
                    }
                }
            }
        }

        public static void RegisterEndOfFrameUpdate(Action endOfFrameFunction)
        {
            if (endOfFrameFunction != null)
            {
                Instance.endOfFrameCallbacks.Add(endOfFrameFunction);
            }
        }

        public static void UnregisterEndOfFrameUpdate(Action endOfFrameFunction)
        {
            if (instance != null && endOfFrameFunction != null)
            {
                instance.endOfFrameCallbacks.Remove(endOfFrameFunction);
            }
        }

        protected void Awake()
        {
            this.mainThreadId = System.Threading.Thread.CurrentThread.ManagedThreadId;

#if UNITY_OPENXR_1_7_0_OR_NEWER
            if (IsOpenXRLoaderActive())
            {
                mlOpenXrFeature = OpenXRSettings.Instance.GetFeature<MagicLeapFeature>();
            }
#endif

        }

        protected void OnDestroy()
        {
            if (this.endOfFrameCoroutine != null)
            {
                this.StopCoroutine(this.endOfFrameCoroutine);
            }
            OnDestroyEvent?.Invoke();
        }

        protected void Update()
        {
            if (!this.isReady && !(this.isReady = MLDevice.IsReady()))
            {
                return;
            }

            this.OnUpdateEvent?.Invoke();

            MLThreadDispatch.DispatchAll();
        }

        protected void Start()
        {
            this.endOfFrameCoroutine = this.StartCoroutine(this.EndOfFrameUpdate());
            OnStartEvent();
        }

        private void OnApplicationPause(bool pauseStatus)
        {
            this.OnPauseEvent?.Invoke(pauseStatus);
            MLThreadDispatch.DispatchAll();
        }

        private void OnApplicationFocus(bool hasFocus)
        {
            this.OnFocusEvent?.Invoke(hasFocus);
            MLThreadDispatch.DispatchAll();
        }

        private void OnApplicationQuit()
        {
            this.OnQuitEvent?.Invoke();
        }

        private void GetPlatformLevel()
        {
            try
            {
                uint level = 0;
                MLResult.Code resultCode = MagicLeapNativeBindings.MLPlatformGetAPILevel(ref level);
                if (resultCode != MLResult.Code.Ok)
                {
                    MLPluginLog.ErrorFormat("MLDevice.GetPlatformLevel failed to get platform level. Reason: {0}", resultCode);
                }
                else
                {
                    this.platformLevel = level;
                }
            }
            catch (DllNotFoundException)
            {
                MLPluginLog.ErrorFormat("MLDevice.GetPlatformLevel failed. Reason: {0} library not found", MagicLeapNativeBindings.MLPlatformDll);
            }

            if (this.platformLevel == null)
            {
                this.platformLevel = 0;
            }
        }

        private IEnumerator EndOfFrameUpdate()
        {
            while (true)
            {
                yield return new WaitForEndOfFrame();
                foreach (Action callback in this.endOfFrameCallbacks)
                {
                    callback?.Invoke();
                }
            }
        }
    }
}
```




