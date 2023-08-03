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
    public partial class MLDepthCamera : MLAutoAPISingleton<MLDepthCamera>
    {
        public const int FrameTypeCount = 2;

        public enum Stream
        {
            None = 0,

            LongRange = 1 << 0,

            ShortRange = 1 << 1
        }

        public enum FrameType
        {
            LongRange,

            ShortRange
        }

        public enum FrameRate
        {
            FPS_1,
            FPS_5,
            FPS_25,
            FPS_30,
            FPS_50,
            FPS_60
        }

        [Flags]
        public enum CaptureFlags
        {
            DepthImage = 1 << 0,

            Confidence = 1 << 1,

            DepthFlags = 1 << 2,

            AmbientRawDepthImage = 1 << 3,

            RawDepthImage = 1 << 4
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

        public struct StreamConfig
        {
            public uint Flags;

            public uint Exposure;

            public FrameRate FrameRateConfig;
        }

        public struct Settings
        {
            public Stream Streams;

            public StreamConfig[] StreamConfig;
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

        public struct StreamCapability
        {
            public Stream Stream;

            public uint MinExposure;

            public uint MaxExposure;

            public FrameRate FrameRateCapability;
        }

        public static Settings CurrentSettings { get; private set; }

        public static void SetSettings(Settings settings) => CurrentSettings = settings;

        public static bool IsConnected { get; private set; }

        private bool connectionPaused;

        protected override MLResult.Code StartAPI() => MLResult.Code.Ok;

        protected override MLResult.Code StopAPI()
        {
            var result = MLResult.Code.Ok;

            if (IsConnected)
            {
                result = InternalDisconnect().Result;
            }

            return result;
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

        public static MLResult Connect() => Instance.InternalConnect(CurrentSettings);

        public static MLResult Disconnect() => Instance.InternalDisconnect();

        public static MLResult UpdateSettings(Settings settings) => Instance.InternalUpdateSettings(settings);

        public static MLResult GetLatestDepthData(ulong timeoutMs, out Data data) => Instance.InternalGetLatestDepthData(timeoutMs, out data);

        public static MLResult GetCapabilities(out StreamCapability[] capabilities) => Instance.InternalGetCapabilities(out capabilities);

        #region internal
        private MLResult InternalConnect(Settings settings)
        {
            if (!MLResult.DidNativeCallSucceed(MLPermissions.CheckPermission(MLPermission.DepthCamera).Result))
            {
                MLPluginLog.Error($"{nameof(MLDepthCamera)} requires missing permission {MLPermission.DepthCamera}");
                return MLResult.Create(MLResult.Code.PermissionDenied);
            }

            var camSettings = NativeBindings.MLDepthCameraSettings.Init();
            camSettings.Streams = (uint)settings.Streams;
            camSettings.StreamConfig = settings.StreamConfig;

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
            depthCamSettings.Streams = (uint)settings.Streams;
            depthCamSettings.StreamConfig = settings.StreamConfig;

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

            var resultCode = NativeBindings.MLDepthCameraGetLatestDepthData(Handle, timeoutMs, out depthCamData);

            // in this case, a Timeout is an acceptable result that we don't need to log as an error to the console.
            bool resultIsOk = (resultCode == MLResult.Code.Ok || resultCode == MLResult.Code.Timeout);
            if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLDepthCameraGetLatestDepthData), showError: !resultIsOk))
            {
                data = null;
            }
            else
            {
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

                MarshalUnmananagedArrayToStructArray<NativeBindings.MLDepthCameraFrame>(depthCamData.Frames, depthCamData.FrameCount, out NativeBindings.MLDepthCameraFrame[] managedArray);

                // TODO: Revisit this section if mixed mode (LR+SR) is supported. Currently the array should only have 1 element so it should be safe to assume only the first is needed for now.
                var frame = managedArray[0];

                var depthMap = CreateFromPtr(frame.DepthImageFrameBufferPtr);
                var confidenceMap = CreateFromPtr(frame.ConfidenceBufferFrameBufferPtr);
                var depthFlags = CreateFromPtr(frame.DepthFlagsBufferFrameBufferPtr);
                var aiMap = CreateFromPtr(frame.AmbientRawDepthImageFrameBufferPtr);
                var depthImage = CreateFromPtr(frame.RawDepthImageFrameBufferPtr);

                data = new Data()
                {
                    FrameNumber = frame.FrameNumber,
                    FrameTimestamp = frame.FrameTimestamp,
                    FrameType = frame.FrameType,
                    Position = Native.MLConvert.ToUnity(frame.CameraPose.Position),
                    Rotation = Native.MLConvert.ToUnity(frame.CameraPose.Rotation),
                    Intrinsics = NativeBindings.MLDepthCameraIntrinsics.ToManaged(frame.Intrinsics),
                    DepthImage = (depthMap.Data != null) ? depthMap : null,
                    ConfidenceBuffer = (confidenceMap.Data != null) ? confidenceMap : null,
                    DepthFlagsBuffer = (depthFlags.Data != null) ? depthFlags : null,
                    AmbientRawDepthImage = (aiMap.Data != null) ? aiMap : null,
                    RawDepthImage = (depthImage.Data != null) ? depthImage : null
                };

                // CAPI specifies that Release should be called exactly once for each successful call to GetLatest
                // Since we return a managed "copy" of the data in the out parameter, then we can immediately do this rather than require the application developer to do it themselves.
                var releaseResult = NativeBindings.MLDepthCameraReleaseDepthData(Handle, ref depthCamData);
                MLResult.DidNativeCallSucceed(releaseResult, nameof(NativeBindings.MLDepthCameraReleaseDepthData));
            }

            return MLResult.Create(resultCode);
        }

        private MLResult InternalGetCapabilities(out StreamCapability[] capabilities)
        {
            var filter = NativeBindings.MLDepthCameraCapabilityFilter.Init();
            filter.Streams = (uint)CurrentSettings.Streams;

            var resultCode = NativeBindings.MLDepthCameraGetCapabilities(Handle, ref filter, out NativeBindings.MLDepthCameraCapabilityList outCaps);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLDepthCameraGetCapabilities));

            MarshalUnmananagedArrayToStructArray<NativeBindings.MLDepthCameraCapability>(outCaps.Capabilities, outCaps.Size, out NativeBindings.MLDepthCameraCapability[] managedCapabilitiesArray);

            capabilities = new StreamCapability[outCaps.Size];

            for (int i = 0; i < capabilities.Length; i++)
            {
                MarshalUnmananagedArrayToStructArray<NativeBindings.MLDepthCameraStreamCapability>(managedCapabilitiesArray[i].StreamCapabilities, managedCapabilitiesArray[i].Size, out NativeBindings.MLDepthCameraStreamCapability[] managedStreamCapabilitiesArray);

                // TODO: Revisit this section if mixed mode (LR+SR) is supported. Currently the array should only have 1 element so it should be safe to assume only the first is needed for now.
                capabilities[i] = new StreamCapability();
                capabilities[i].Stream = managedStreamCapabilitiesArray[0].Stream;
                capabilities[i].MinExposure = managedStreamCapabilitiesArray[0].MinExposure;
                capabilities[i].MaxExposure = managedStreamCapabilitiesArray[0].MaxExposure;
                capabilities[i].FrameRateCapability = managedStreamCapabilitiesArray[0].FrameRateCapability;
            }

            var releaseResult = NativeBindings.MLDepthCameraReleaseCapabilities(Handle, ref outCaps);
            MLResult.DidNativeCallSucceed(releaseResult, nameof(NativeBindings.MLDepthCameraReleaseCapabilities));

            return MLResult.Create(resultCode);
        }
        #endregion

        private void MarshalUnmananagedArrayToStructArray<T>(IntPtr unmanagedArray, int length, out T[] mangagedArray)
        {
            var size = Marshal.SizeOf(typeof(T));
            mangagedArray = new T[length];

            for (int i = 0; i < length; i++)
            {
                IntPtr ins = new IntPtr(unmanagedArray.ToInt64() + i * size);
                mangagedArray[i] = Marshal.PtrToStructure<T>(ins);
            }
        }
    }
}
```



