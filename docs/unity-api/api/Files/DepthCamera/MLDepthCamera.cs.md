---

title: MLDepthCamera.cs

---


# MLDepthCamera.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2022 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLDepthCamera : MLAPIBase
    {
        public enum Mode
        {
            LongRange = 1 << 0
        }

        public enum FrameType
        {
            Unknown = 0,

            LongRange = 1
        }

        [Flags]
        public enum CaptureFlags
        {
            DepthImage = 1 << 0,

            Confidence = 1 << 1,

            DepthFlags = 1 << 2,

            AmbientRawDepthImage = 1 << 3
        }

        [Flags]
        public enum DepthFlags
        {
            Valid = 0 << 0,

            Invalid = 1 << 0,

            Saturated = 1 << 1,

            Inconsistent = 1 << 2,

            LowSignal = 1 << 3,

            FlyingPixel = 1 << 4,

            Masked = 1 << 5,

            SBI = 1 << 8,

            StrayLight = 1 << 9,

            ConnectedComponent = 1 << 10
        }

        public struct Settings
        {
            public CaptureFlags Flags;

            public Mode Mode;
        }

        public struct Intrinsics
        {
            public uint Width;

            public uint Height;

            public Vector2 FocalLength;

            public Vector2 PrincipalPoint;

            public float FoV;

            public DistortionCoefficients Distortion;

            public List<double> GetDistortionList()
            {
                return new List<double>() { Distortion.K1, Distortion.K2, Distortion.P1, Distortion.P2, Distortion.K3 };
            }
        }

        public readonly struct DistortionCoefficients
        {
            public readonly double K1;

            public readonly double K2;

            public readonly double P1;

            public readonly double P2;

            public readonly double K3;

            public DistortionCoefficients(double[] coefficients)
            {
                if (coefficients == null || coefficients.Length < 5)
                {
                    throw new ArgumentException("DistortionCoefficients constructor must receive an array of 5 values and the array cannot be null.");
                }
                K1 = coefficients[0];
                K2 = coefficients[1];
                P1 = coefficients[2];
                P2 = coefficients[3];
                K3 = coefficients[4];
            }
        }

        public struct FrameBuffer
        {
            public uint Width;

            public uint Height;

            public uint Stride;

            public uint BytesPerUnit;

            public byte[] Data;

            public override string ToString()
            {
                return $"[FrameBuffer W: {Width}, H: {Height}, Stride: {Stride}, BPU: {BytesPerUnit}, Data: {(Data != null ? Data.Length + " bytes" : "null")}]";
            }
        }

        public Settings CurrentSettings { get; private set; }

        public bool IsConnected { get; private set; }

        private bool connectionPaused;

        public MLDepthCamera(Settings settings)
        {
            CurrentSettings = settings;
        }

        protected override void OnApplicationPause(bool pauseStatus)
        {
            base.OnApplicationPause(pauseStatus);

            if (pauseStatus)
            {
                if (IsConnected)
                {
                    InternalDisconnect(true);
                }
            }
            else
            {
                if (connectionPaused)
                {
                    InternalConnect(CurrentSettings);
                }
            }
        }

        public MLResult Connect() => InternalConnect(CurrentSettings);

        public MLResult Disconnect() => InternalDisconnect();

        public MLResult UpdateSettings(Settings settings) => InternalUpdateSettings(settings);

        public MLResult GetLatestDepthData(ulong timeoutMs, out Data data) => InternalGetLatestDepthData(timeoutMs, out data);

        #region internal
        private MLResult InternalConnect(Settings settings)
        {
            if (!MLResult.DidNativeCallSucceed(MLPermissions.CheckPermission(MLPermission.DepthCamera).Result))
            {
                MLPluginLog.Error($"{nameof(MLDepthCamera)} requires missing permission {MLPermission.DepthCamera}");
                return MLResult.Create(MLResult.Code.PermissionDenied);
            }

            var camSettings = NativeBindings.MLDepthCameraSettings.Init();
            camSettings.Flags = (uint)settings.Flags;
            camSettings.Mode = (uint)settings.Mode;
            var resultCode = NativeBindings.MLDepthCameraConnect(in camSettings, out Handle);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLDepthCameraConnect)))
            {
                IsConnected = true;
            }
            return MLResult.Create(resultCode);
        }

        private MLResult InternalDisconnect(bool paused = false)
        {
            var resultCode = NativeBindings.MLDepthCameraDisconnect(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLDepthCameraDisconnect));
            connectionPaused = paused;
            if (!connectionPaused)
            {
                IsConnected = false;
            }
            return MLResult.Create(resultCode);
        }

        private MLResult InternalUpdateSettings(Settings settings)
        {
            var depthCamSettings = NativeBindings.MLDepthCameraSettings.Init();
            depthCamSettings.Flags = (uint)settings.Flags;
            depthCamSettings.Mode = (uint)settings.Mode;
            var resultCode = NativeBindings.MLDepthCameraUpdateSettings(Handle, in depthCamSettings);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLDepthCameraUpdateSettings)))
            {
                CurrentSettings = settings;
            }
            return MLResult.Create(resultCode);
        }

        private MLResult InternalGetLatestDepthData(ulong timeoutMs, out Data data)
        {
            var depthCamData = NativeBindings.MLDepthCameraData.Init();
            IntPtr dataPtr = Marshal.AllocHGlobal(Marshal.SizeOf(depthCamData));
            Marshal.StructureToPtr(depthCamData, dataPtr, false);

            var resultCode = NativeBindings.MLDepthCameraGetLatestDepthData(Handle, timeoutMs, out dataPtr);

            // in this case, a Timeout is an acceptable result that we don't need to log as an error to the console.
            bool resultIsOk = (resultCode == MLResult.Code.Ok || resultCode == MLResult.Code.Timeout);
            if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLDepthCameraGetLatestDepthData), showError: !resultIsOk) || dataPtr == IntPtr.Zero)
            {
                data = null;
            }
            else
            {
                depthCamData = (NativeBindings.MLDepthCameraData)Marshal.PtrToStructure(dataPtr, typeof(NativeBindings.MLDepthCameraData));

                FrameBuffer CreateFromPtr(IntPtr ptr)
                {
                    var result = new FrameBuffer();
                    if (ptr == IntPtr.Zero)
                    {
                        return result;
                    }
                    var plane = (NativeBindings.MLDepthCameraFrameBuffer)Marshal.PtrToStructure(ptr, typeof(NativeBindings.MLDepthCameraFrameBuffer));
                    byte[] bytes = null;
                    if (plane.Data != IntPtr.Zero)
                    {
                        bytes = new byte[plane.Size];
                        Marshal.Copy(plane.Data, bytes, 0, bytes.Length);
                    }
                    result = new FrameBuffer()
                    {
                        Width = plane.Width,
                        Height = plane.Height,
                        Stride = plane.Stride,
                        BytesPerUnit = plane.BytesPerUnit,
                        Data = bytes
                    };

                    return result;
                }

                var depthMap = CreateFromPtr(depthCamData.DepthImageFrameBufferPtr);
                var confidenceMap = CreateFromPtr(depthCamData.ConfidenceBufferFrameBufferPtr);
                var depthFlags = CreateFromPtr(depthCamData.DepthFlagsBufferFrameBufferPtr);
                var aiMap = CreateFromPtr(depthCamData.AmbientRawDepthImageFrameBufferPtr);

                data = new Data()
                {
                    FrameNumber = depthCamData.FrameNumber,
                    FrameTimestamp = depthCamData.FrameTimestamp,
                    FrameType = depthCamData.FrameType,
                    Position = Native.MLConvert.ToUnity(depthCamData.CameraPose.Position),
                    Rotation = Native.MLConvert.ToUnity(depthCamData.CameraPose.Rotation),
                    Intrinsics = NativeBindings.MLDepthCameraIntrinsics.ToManaged(depthCamData.Intrinsics),
                    DepthImage = (depthMap.Data != null) ? depthMap : null,
                    ConfidenceBuffer = (confidenceMap.Data != null) ? confidenceMap : null,
                    DepthFlagsBuffer = (depthFlags.Data != null) ? depthFlags : null,
                    AmbientRawDepthImage = (aiMap.Data != null) ? aiMap : null
                };

                // CAPI specifies that Release should be called exactly once for each successful call to GetLatest
                // Since we return a managed "copy" of the data in the out parameter, then we can immediately do this rather than require the application developer to do it themselves.
                var releaseResult = NativeBindings.MLDepthCameraReleaseDepthData(Handle, dataPtr);
                MLResult.DidNativeCallSucceed(releaseResult, nameof(NativeBindings.MLDepthCameraReleaseDepthData));
            }

            Marshal.FreeHGlobal(dataPtr);
            return MLResult.Create(resultCode);
        }
        #endregion
    }
}
```



