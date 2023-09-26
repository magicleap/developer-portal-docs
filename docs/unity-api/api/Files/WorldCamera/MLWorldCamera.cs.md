---

title: MLWorldCamera.cs

---


# MLWorldCamera.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// <copyright file="MLWorldCamera.cs" company="Magic Leap, Inc">
//
// Copyright (c) 2018-present, Magic Leap, Inc. All Rights Reserved.
//
// </copyright>
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%


namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;

    public partial class MLWorldCamera : MLAutoAPISingleton<MLWorldCamera>
    {
        [Flags]
        public enum CameraId
        {
            Left = 1 << 0,

            Right = 1 << 1,

            Center = 1 << 2,

            All = Left | Right | Center,
        };

        [Flags]
        public enum Mode
        {
            Unknown = 0,

            LowExposure = 1 << 0,

            NormalExposure = 1 << 1
        };

        public Settings CurrentSettings { get; private set; }

        public bool IsConnected { get; private set; }

        private bool connectionPaused;

        protected override MLResult.Code StartAPI() => MLResult.Code.Ok;

        protected override MLResult.Code StopAPI() => Disconnect().Result;

        public MLResult Connect(in Settings settings) => MLResult.Create(InternalConnect(in settings));

        public MLResult UpdateSettings(in Settings settings) => MLResult.Create(InternalUpdateSettings(in settings));

        public MLResult GetLatestWorldCameraData(out Frame[] data, uint timeOutMs = 1) => MLResult.Create(InternalGetLatestWorldCameraData(timeOutMs, out data));

        public MLResult Disconnect() => MLResult.Create(InternalDisconnect());

        private MLResult.Code InternalConnect(in Settings settings)
        {
            if (IsConnected)
                return MLResult.Code.Ok;

            var nativeSettings = new NativeBindings.MLWorldCameraSettings(in settings);
            var resultCode = NativeBindings.MLWorldCameraConnect(in nativeSettings, out Handle);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWorldCameraConnect)))
            {
                IsConnected = true;
                CurrentSettings = settings;
            }
            return resultCode;
        }

        private MLResult.Code InternalUpdateSettings(in Settings settings)
        {
            var nativeSettings = new NativeBindings.MLWorldCameraSettings(in settings);
            var resultCode = NativeBindings.MLWorldCameraUpdateSettings(Handle, in nativeSettings);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWorldCameraUpdateSettings)))
                CurrentSettings = settings;

            return resultCode;
        }

        private MLResult.Code InternalGetLatestWorldCameraData(uint timeOutMs, out Frame[] data)
        {
            var nativeData = new NativeBindings.MLWorldCameraData(1);
            IntPtr ptr = Marshal.AllocHGlobal(Marshal.SizeOf(nativeData));
            Marshal.StructureToPtr(nativeData, ptr, false);
            var resultCode = NativeBindings.MLWorldCameraGetLatestWorldCameraData(Handle, timeOutMs, ref ptr);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWorldCameraGetLatestWorldCameraData), TimeOutPredicate);
            if (!MLResult.IsOK(resultCode))
            {
                data = new Frame[0];
                return resultCode;
            }

            nativeData = Marshal.PtrToStructure<NativeBindings.MLWorldCameraData>(ptr);
            data = MarshalFrames(in nativeData);
            resultCode = NativeBindings.MLWorldCameraReleaseCameraData(Handle, ptr);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWorldCameraReleaseCameraData));
            Marshal.FreeHGlobal(ptr);

            return resultCode;
        }

        private MLResult.Code InternalDisconnect()
        {
            if (!IsConnected)
                return MLResult.Code.Ok;

            var resultCode = NativeBindings.MLWorldCameraDisconnect(Handle);
            IsConnected = !MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWorldCameraDisconnect));
            return resultCode;
        }

        private Frame[] MarshalFrames(in NativeBindings.MLWorldCameraData data)
        {
            var frames = new Frame[data.FrameCount];
            IntPtr walkPtr = data.Frames;
            for (int i = 0; i < data.FrameCount; ++i)
            {
                var nativeFrame = Marshal.PtrToStructure<NativeBindings.MLWorldCameraFrame>(walkPtr);
                frames[i] = new Frame(nativeFrame);
                walkPtr = new IntPtr(walkPtr.ToInt64() + Marshal.SizeOf<NativeBindings.MLWorldCameraFrame>());
            }

            return frames;
        }

        private bool TimeOutPredicate(MLResult.Code code) => code == MLResult.Code.Ok || code == MLResult.Code.Timeout;

        protected override void OnApplicationPause(bool pauseStatus)
        {
            base.OnApplicationPause(pauseStatus);

            if (pauseStatus)
            {
                if (IsConnected)
                {
                    connectionPaused = true;
                    Disconnect();
                }
            }

            else
            {
                if (connectionPaused)
                {
                    connectionPaused = false;
                    if (MLPermissions.CheckPermission(MLPermission.Camera).IsOk)
                    {
                        var settings = CurrentSettings;
                        Connect(in settings);
                    }
                }
            }
        }
    }
}
```



