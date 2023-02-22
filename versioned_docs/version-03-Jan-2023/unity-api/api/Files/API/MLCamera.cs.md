---

title: MLCamera.cs

---


# MLCamera.cs









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
using System.Runtime.InteropServices;

namespace UnityEngine.XR.MagicLeap
{
    public sealed partial class MLCamera : MLAPIBase
    {
        public bool ConnectionEstablished => cameraConnectionEstablished;

        public RenderTexture PreviewTexture => previewTexture;

        public float CurrentFPS => currentFPS;

        public ConnectContext ConnectionContext => cameraConnectContext;

        public static MLCamera CreateAndConnect(ConnectContext connectContext)
        {
            return CreateAndConnectAsync(connectContext).Result;
        }

        public MLResult GetStreamCapabilities(out StreamCapabilitiesInfo[] streamCapabilities)
        {
            return InternalGetStreamCapabilities(out streamCapabilities);
        }

        public MLResult Disconnect()
        {
            return DisconnectAsync().Result;
        }

        public static MLResult Uninitialize()
        {
            return InternalUninitialize();
        }

        public MLResult PrepareCapture(CaptureConfig captureConfig, out Metadata cameraMetadata)
        {
            return MLResult.Create(InternalPrepareCapture(captureConfig, out cameraMetadata));
        }

        public MLResult PreCaptureAEAWB()
        {
            return PreCaptureAEAWBAsync().Result;
        }

        public MLResult UpdateCaptureSettings()
        {
            MLResult.Code resultCode = NativeBindings.MLCameraUpdateCaptureSettings(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraUpdateCaptureSettings));
            return MLResult.Create(resultCode);
        }

        public MLResult CaptureImage(uint numImages = 1)
        {
            return CaptureImageAsync(numImages).Result;
        }

        public MLResult CaptureVideoStart()
        {
            return CaptureVideoStartAsync().Result;
        }

        public MLResult CaptureVideoStop()
        {
            return CaptureVideoStopAsync().Result;
        }

        public MLResult CapturePreviewStart()
        {
            return CapturePreviewStartAsync().Result;
        }

        public MLResult CapturePreviewStop()
        {
            return CapturePreviewStopAsync().Result;
        }

        public MLResult GetDeviceStatus(out DeviceStatusFlag status)
        {
            status = DeviceStatusFlag.Error;

            MLResult.Code resultCode = NativeBindings.MLCameraGetDeviceStatus(Handle, out uint statusFlags);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraGetDeviceStatus)))
            {
                status = (DeviceStatusFlag)statusFlags;
            }
            return MLResult.Create(resultCode);
        }

        public MLResult GetErrorCode(out ErrorType error)
        {
            MLResult.Code resultCode = NativeBindings.MLCameraGetErrorCode(Handle, out error);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraGetErrorCode));
            return MLResult.Create(resultCode);
        }

        public MLResult GetCameraCharacteristics(out Metadata cameraMetadata)
        {
            cameraMetadata = null;

            MLResult.Code resultCode = NativeBindings.MLCameraGetCameraCharacteristics(Handle, out ulong metadataHandle);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraGetErrorCode)))
            {
                cameraMetadata = new Metadata(metadataHandle);
            }
            return MLResult.Create(resultCode);
        }

        public static MLResult GetDeviceAvailabilityStatus(Identifier camId, out bool deviceAvailable)
        {
            if (!cameraInited)
            {
                InternalInitialize();
            }

            var resultCode = NativeBindings.MLCameraGetDeviceAvailabilityStatus(camId, out deviceAvailable);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraGetDeviceAvailabilityStatus));
            return MLResult.Create(resultCode);
        }
    }
}
```



