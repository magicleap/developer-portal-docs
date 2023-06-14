---

title: MLAudioOutput.cs

---


# MLAudioOutput.cs









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

    public sealed partial class MLAudioOutput : MLAutoAPISingleton<MLAudioOutput>
    {
        private Device audioDevice = Device.Wearable;

        private Device lastAudioDevice = Device.Wearable;

        private float masterVolume;

        public delegate void OnMasterVolumeChangedDelegate(float volume);

        public delegate void OnAudioOutputDeviceChangedDelegate(Device device);

        public delegate void MLAudioMediaEventDelegate(MediaEvent mediaEvent);

        public static event OnMasterVolumeChangedDelegate OnMasterVolumeChanged = delegate { };

        public static event OnAudioOutputDeviceChangedDelegate OnAudioOutputDeviceChanged = delegate { };

        public static event MLAudioMediaEventDelegate OnMediaEvent = delegate { };

        public enum Device : uint
        {
            Wearable,

            AnalogJack
        }

        public enum MediaEvent
        {

            Play,

            Stop,

            Pause,

            NextTrack,

            PrevTrack,

        };

        public static Device AudioOutputDevice
        {
            get
            {
                audioOutputDevicePerfMarker.Begin();
                Device device = Instance.InternalGetOutputDevice();
                audioOutputDevicePerfMarker.End();
                return device;
            }
        }

        public static float MasterVolume
        {
            get { return Instance.masterVolume; }
        }

        public static MLResult SetSoundBypassesMasterVolume(bool isBypassing) => MLResult.Create(Instance.SetSoundBypassesMasterVolumeInternal(isBypassing));

        public static MLResult GetSoundBypassesMasterVolume(out bool isBypassing) => MLResult.Create(Instance.GetSoundBypassesMasterVolumeInternal(out isBypassing));

        private MLResult.Code SetSoundBypassesMasterVolumeInternal(bool isBypassing)
        {
            ulong audioHandle = NativeBindings.MLUnityAudioGetHandle();
            var resultCode = NativeBindings.MLAudioSetSoundBypassesMasterVolume(audioHandle, isBypassing);
            MLResult.DidNativeCallSucceed(resultCode, nameof(MLAudioOutput.NativeBindings.MLAudioSetSoundBypassesMasterVolume));
            return resultCode;
        }

        private MLResult.Code GetSoundBypassesMasterVolumeInternal(out bool isBypassing)
        {
            ulong audioHandle = NativeBindings.MLUnityAudioGetHandle();
            var resultCode = NativeBindings.MLAudioGetSoundBypassesMasterVolume(audioHandle, out isBypassing);
            MLResult.DidNativeCallSucceed(resultCode, nameof(MLAudioOutput.NativeBindings.MLAudioGetSoundBypassesMasterVolume));
            return resultCode;
        }

        internal static string GetResultString(MLResult.Code resultCode)
        {
            try
            {
                return Marshal.PtrToStringAnsi(NativeBindings.MLAudioGetResultString(resultCode));
            }
            catch (System.DllNotFoundException)
            {
                MLPluginLog.Error("MLAudioOutput.GetResultString failed. Reason: MLAudio API is currently available only on device.");
            }
            catch (System.EntryPointNotFoundException)
            {
                MLPluginLog.Error("MLAudioOutput.GetResultString failed. Reason: API symbols not found");
            }

            return string.Empty;
        }

#if !DOXYGEN_SHOULD_SKIP_THIS
        protected override MLResult.Code StartAPI()
        {
            startAPIPerfMarker.Begin();
            // Set the initial audio device.
            Instance.lastAudioDevice = Instance.InternalGetOutputDevice();

            MLResult.Code resultCode;

            // Master Volume Callback
            resultCode = this.RegisterCallbacks();
            if (resultCode != MLResult.Code.Ok)
            {
                startAPIPerfMarker.End();
                return resultCode;
            }

            // Get the initial MasterVolume value.
            resultCode = Instance.GetMasterVolume(out this.masterVolume);
            if (resultCode != MLResult.Code.Ok)
            {
                startAPIPerfMarker.End();
                return resultCode;
            }

            startAPIPerfMarker.End();
            return resultCode;
        }
#endif // DOXYGEN_SHOULD_SKIP_THIS

        protected override MLResult.Code StopAPI()
        {
            try
            {
                return UnregisterCallbacks();
            }
            catch (System.DllNotFoundException)
            {
                MLPluginLog.Error(MLResult.Code.APIDLLNotFound);
                throw;
            }
        }

        protected override void Update()
        {
            updatePerfMarker.Begin();
            if (this.lastAudioDevice != Instance.InternalGetOutputDevice())
            {
                Instance.lastAudioDevice = Instance.audioDevice;

                // Notify event listeners.
                // Callback is not needed to be in the queue because it is in Update.
                OnAudioOutputDeviceChanged?.Invoke(Instance.lastAudioDevice);
            }
            updatePerfMarker.End();
        }

        [AOT.MonoPInvokeCallback(typeof(NativeBindings.MLAudioMasterVolumeChangedCallback))]
        private static void HandleOnMLAudioSetMasterVolumeCallback(float volume, IntPtr callback)
        {
            Instance.masterVolume = volume;

            MLThreadDispatch.Call(volume, OnMasterVolumeChanged);
        }

        [AOT.MonoPInvokeCallback(typeof(NativeBindings.MLAudioMediaEventCallback))]
        private static void HandleOnMediaEventCallback(MediaEvent mediaEvent, IntPtr callback)
        {
            MLThreadDispatch.Call(mediaEvent, OnMediaEvent);
        }

        private MLResult.Code GetMasterVolume(out float volume)
        {
            MLResult.Code result;

            try
            {
                nativeGetMasterVolumePerfMarker.Begin();
                result = NativeBindings.MLAudioGetMasterVolume(out volume);
                MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLAudioGetMasterVolume));
                nativeGetMasterVolumePerfMarker.End();
                if (result != MLResult.Code.Ok)
                {
                    MLPluginLog.ErrorFormat("MLAudioOutput.GetMasterVolume failed to get the volume. Reason: {0}", result);
                }
            }
            catch (System.DllNotFoundException)
            {
                // Exception is caught in the Singleton BaseStart().
                throw;
            }

            return result;
        }

        private MLResult.Code RegisterCallbacks()
        {
            MLResult.Code result;

            nativeSetMasterVolumeCallbackPerfMarker.Begin();
            // Attempt to register the native callback for the volume change event.
            result = NativeBindings.MLAudioSetMasterVolumeCallback(HandleOnMLAudioSetMasterVolumeCallback, IntPtr.Zero);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLAudioSetMasterVolumeCallback));
            nativeSetMasterVolumeCallbackPerfMarker.End();

            if (result != MLResult.Code.Ok)
            {
                MLPluginLog.ErrorFormat("MLAudioOutput.RegisterOnVolumeChangeCallback failed to register callback. Reason: {0}", result);
                return result;
            }

            nativeMediaEventCallbackPerfMarker.Begin();
            // Attempt to register the native callback for the media event change event.
            result = NativeBindings.MLAudioSetMediaEventCallback(HandleOnMediaEventCallback, IntPtr.Zero);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLAudioSetMediaEventCallback));
            nativeMediaEventCallbackPerfMarker.End();

            if (result != MLResult.Code.Ok)
            {
                MLPluginLog.ErrorFormat("MLAudioOutput.MLAudioSetMediaEventCallback failed to register callback. Reason: {0}", result);
                return result;
            }

            return result;
        }

        private MLResult.Code UnregisterCallbacks()
        {
            MLResult.Code result;

            nativeSetMasterVolumeCallbackPerfMarker.Begin();
            // Unregister the native callback for the volume change event.
            result = NativeBindings.MLAudioSetMasterVolumeCallback(null, IntPtr.Zero);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLAudioSetMasterVolumeCallback));
            nativeSetMasterVolumeCallbackPerfMarker.End();

            if (result != MLResult.Code.Ok)
            {
                MLPluginLog.ErrorFormat("MLAudioOutput.UnregisterOnVolumeChangeCallback failed to register callback. Reason: {0}", result);
            }

            nativeMediaEventCallbackPerfMarker.Begin();
            // Attempt to register the native callback for the volume change event.
            result = NativeBindings.MLAudioSetMediaEventCallback(null, IntPtr.Zero);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLAudioSetMediaEventCallback));
            nativeMediaEventCallbackPerfMarker.End();

            if (result != MLResult.Code.Ok)
            {
                MLPluginLog.ErrorFormat("MLAudioOutput.RegisterOnMediaEventCallback failed to register callback. Reason: {0}", result);
            }

            return result;
        }

        private MLAudioOutput.Device InternalGetOutputDevice()
        {
            try
            {
                nativeGetOutputDevicePerfMarker.Begin();
                MLResult.Code result = NativeBindings.MLAudioGetOutputDevice(out Instance.audioDevice);
                MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLAudioGetOutputDevice));
                nativeGetOutputDevicePerfMarker.End();
                if (result != MLResult.Code.Ok)
                {
                    MLPluginLog.ErrorFormat("MLAudioOutpu.InternalGetOutputDevice failed to get the audio output device. Reason: {0}", result);
                }
            }
            catch (System.DllNotFoundException)
            {
                MLPluginLog.Error(this.DllNotFoundError);
                throw;
            }

            return Instance.audioDevice;
        }
    }
}
```




