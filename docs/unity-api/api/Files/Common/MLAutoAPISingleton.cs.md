---

title: MLAutoAPISingleton.cs

---


# MLAutoAPISingleton.cs









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

namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Reflection;

    [System.AttributeUsage(System.AttributeTargets.Class, AllowMultiple = true, Inherited = true)]
    public class RequireXRLoader : Attribute { }

    public abstract class MLAutoAPISingleton<T> : MLLazySingleton<T> where T : MLAutoAPISingleton<T>, new()
    {
        protected ulong Handle = Native.MagicLeapNativeBindings.InvalidHandle;

        protected readonly object APILock = new object();

        private static readonly bool requiresXRLoader = typeof(T).GetCustomAttribute<RequireXRLoader>() != null;

        sealed protected override void Initialize()
        {
            if (requiresXRLoader && !MLDevice.IsReady())
            {
                MLPluginLog.Error($"Magic Leap XR Loader is not initialized, and the {typeof(T).Name} API must be started afterwards.");
                return;
            }
            else
            {
                Instance.StartInternal();

                MagicLeapXrProviderNativeBindings.InputSetOnPerceptionShutdownCallback(OnPerceptionShutdown);
            }
        }

        public static bool IsStarted { get; private set; } = false;

        protected readonly string DllNotFoundError = $"Failed to start {typeof(T).Name} API. This API is only available on device or when running inside the Unity editor with Magic Leap App Simulator enabled.";

        protected abstract MLResult.Code StartAPI();

        protected abstract MLResult.Code StopAPI();

        protected virtual void Update() { }

        protected virtual void OnApplicationPause(bool pauseStatus) { }

        protected virtual void OnApplicationFocus(bool hasFocus) { }

        protected virtual void OnDeviceStandby() { }

        protected virtual void OnDeviceReality() { }

        protected virtual void OnDeviceActive() { }

        [AOT.MonoPInvokeCallback(typeof(MagicLeapXrProviderNativeBindings.CallOnPerceptionShutdownDelegate))]
        private static void OnPerceptionShutdown() => Instance.StopInternal();

        private void StartInternal()
        {
            MLPluginLog.Debug($"Initializing {typeof(T).Name} API...");

            if (MLResult.DidNativeCallSucceed(StartAPI(), $"{typeof(T).Name} Start"))
            {
                IsStarted = true;
                MLDevice.RegisterUpdate(Instance.Update);
                MLDevice.RegisterApplicationPause(Instance.OnApplicationPause);
                MLDevice.RegisterApplicationFocus(Instance.OnApplicationFocus);
                MLDevice.RegisterDestroy(Instance.StopInternal);
                MLPluginLog.Debug($"{typeof(T).Name} API initialized.");
            }
        }

        private void StopInternal()
        {
            if (IsStarted)
            {
                MLDevice.UnregisterUpdate(Instance.Update);
                MLDevice.UnregisterApplicationPause(Instance.OnApplicationPause);
                MLDevice.UnregisterApplicationFocus(Instance.OnApplicationFocus);
                MLDevice.UnregisterDestroy(Instance.StopInternal);

                MLResult.Code resultCode = Instance.StopAPI();

                if (MLResult.DidNativeCallSucceed(resultCode, $"{typeof(T).Name} Stop"))
                    MLPluginLog.Debug($"{typeof(T).Name} API stopped successfully");

                IsStarted = false;
            }
        }
    }
}
```



