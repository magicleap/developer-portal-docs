---

title: MLAudioInput.cs

---


# MLAudioInput.cs









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
    using System.Runtime.InteropServices;

    using UnityEngine.XR.MagicLeap.Native;

    public sealed partial class MLAudioInput : MLAutoAPISingleton<MLAudioInput>
    {
        private bool isMicrophoneMuted;

        public delegate void OnMicrophoneMuteChangedDelegate(bool muted);

        public static event OnMicrophoneMuteChangedDelegate OnMicrophoneMuteChanged = delegate { };

        public static bool MicrophoneMuted
        {
            get
            {
                return Instance.isMicrophoneMuted;
            }

            set
            {
                Instance.InternalSetMicMute(value);
            }
        }


        internal static IntPtr GetResultString(MLResult.Code result)
        {
            nativeGetResultStringPerfMarker.Begin();
            IntPtr ptr = NativeBindings.MLAudioGetResultString(result);
            nativeGetResultStringPerfMarker.End();
            return ptr;
        }

#if !DOXYGEN_SHOULD_SKIP_THIS
        protected override MLResult.Code StartAPI()
        {
            startAPIPerfMarker.Begin();
            MLResult.Code resultCode;

            // Microphone Muted Callback
            resultCode = this.RegisterOnMicrophoneMuteCallback();
            if (resultCode != MLResult.Code.Ok)
            {
                startAPIPerfMarker.End();
                return resultCode;
            }

            // Get the initial IsMicrophoneMuted value.
            resultCode = Instance.GetMicrophoneMuted(out this.isMicrophoneMuted);
            if (resultCode != MLResult.Code.Ok)
            {
                startAPIPerfMarker.End();
                return resultCode;
            }

            startAPIPerfMarker.End();
            return resultCode;
        }
#endif // DOXYGEN_SHOULD_SKIP_THIS

        protected override MLResult.Code StopAPI() => this.UnregisterOnMicrophoneMuteCallback();

        protected override void Update()
        {
        }

        [AOT.MonoPInvokeCallback(typeof(NativeBindings.MLAudioMicMuteCallback))]
        private static void HandleOnMLAudioSetMicMuteCallback([MarshalAs(UnmanagedType.I1)] bool isMuted, IntPtr callback)
        {
            Instance.isMicrophoneMuted = isMuted;

            MLThreadDispatch.Call(isMuted, OnMicrophoneMuteChanged);
        }


        private MLResult.Code GetMicrophoneMuted(out bool isMuted)
        {
            MLResult.Code result;

            try
            {
                nativeIsMicMutedPerfMarker.Begin();
                result = NativeBindings.MLAudioGetMicMute(out isMuted);
                MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLAudioGetMicMute));
                nativeIsMicMutedPerfMarker.End();

                if (result != MLResult.Code.Ok)
                {
                    MLPluginLog.ErrorFormat("MLAudioInput.GetMicrophoneMuted failed to get the value. Reason: {0}", result);
                }
            }
            catch (System.DllNotFoundException)
            {
                // Exception is caught in the Singleton BaseStart().
                throw;
            }

            return result;
        }

        private MLResult.Code RegisterOnMicrophoneMuteCallback()
        {
            MLResult.Code result;

            try
            {
                nativeSetMicMuteCallbackPerfMarker.Begin();
                // Attempt to register the native callback for the volume change event.
                result = NativeBindings.MLAudioSetMicMuteCallback(HandleOnMLAudioSetMicMuteCallback, IntPtr.Zero);
                nativeSetMicMuteCallbackPerfMarker.End();

                if (result != MLResult.Code.Ok)
                {
                    MLPluginLog.ErrorFormat("MLAudioInput.RegisterOnAudioSetMicMuteCallback failed to register callback. Reason: {0}", result);
                }
            }
            catch (System.DllNotFoundException)
            {
                // Exception is caught in the Singleton BaseStart().
                throw;
            }

            return result;
        }

        private MLResult.Code UnregisterOnMicrophoneMuteCallback()
        {
            MLResult.Code result;

            try
            {
                nativeSetMicMuteCallbackPerfMarker.Begin();
                // Unregister the native callback for the microphone mute change event.
                result = NativeBindings.MLAudioSetMicMuteCallback(null, IntPtr.Zero);
                nativeSetMicMuteCallbackPerfMarker.End();

                if (result != MLResult.Code.Ok)
                {
                    MLPluginLog.ErrorFormat("MLAudioInput.UnregisterOnMicrophoneMuteCallback failed to register callback. Reason: {0}", result);
                }
            }
            catch (System.DllNotFoundException)
            {
                MLPluginLog.Error(MLResult.Code.APIDLLNotFound);
                throw;
            }

            return result;
        }

        private void InternalSetMicMute(bool mute)
        {
            try
            {
                nativeSetMicMutePerfMarker.Begin();
                MLResult.Code result = NativeBindings.MLAudioSetMicMute(mute);
                nativeSetMicMutePerfMarker.End();

                if (result != MLResult.Code.Ok)
                {
                    MLPluginLog.ErrorFormat("MLAudioInput.InternalSetMicMute failed to set the value. Reason: {0}", result);
                }

                this.isMicrophoneMuted = mute;
            }
            catch (System.DllNotFoundException)
            {
                MLPluginLog.Error(MLResult.Code.APIDLLNotFound);
                throw;
            }
        }
    }
}
```




