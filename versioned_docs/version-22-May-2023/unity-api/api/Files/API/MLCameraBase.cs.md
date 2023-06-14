---

title: MLCameraBase.cs

---


# MLCameraBase.cs









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

// ReSharper disable All

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLCameraBase : MLAPIBase
    {
        #region properties

        public bool ConnectionEstablished => cameraConnectionEstablished;

        public RenderTexture PreviewTexture => previewTexture;

        public float CurrentFPS => currentFPS;

        public MLCamera.ConnectContext ConnectionContext => cameraConnectContext;

        #endregion

        public static MLCameraBase Create() => new MLCameraBase();

        public void Cleanup()
        {
            gcHandle.Free();
            InternalDisconnect();
            ClearPreviewTexture();
        }


        public void ClearPreviewTexture()
        {
            if (previewTexture != null)
            {
                GameObject.Destroy(previewTexture);
                previewTexture = null;
            }
        }


        public MLResult CapturePreviewStart()
        {
            CreatePreviewTexture();
            MLResult.Code resultCode = MLCamera.NativeBindings.MLCameraCapturePreviewStart(Handle);
            isCapturingPreview = MLResult.DidNativeCallSucceed(resultCode, nameof(MLCamera.NativeBindings.MLCameraCapturePreviewStart));
            return MLResult.Create(resultCode);
        }

        public MLResult CapturePreviewStop()
        {
            MLResult.Code resultCode = MLCameraBase.NativeBindings.MLCameraCapturePreviewStop(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(MLCamera.NativeBindings.MLCameraCapturePreviewStop));
            isCapturingPreview = false;
            return MLResult.Create(resultCode);
        }

        public static MLResult GetDeviceAvailabilityStatus(MLCamera.Identifier camId, out bool deviceAvailable)
        {
            if (!cameraInited)
            {
                InternalInitialize();
            }

            var resultCode = MLCamera.NativeBindings.MLCameraGetDeviceAvailabilityStatus(camId, out deviceAvailable);
            MLResult.DidNativeCallSucceed(resultCode, nameof(MLCamera.NativeBindings.MLCameraGetDeviceAvailabilityStatus));
            return MLResult.Create(resultCode);
        }

        public MLResult CaptureVideoStart()
        {
            MLResult.Code resultCode = MLCamera.NativeBindings.MLCameraCaptureVideoStart(Handle);
            isCapturingVideo = MLResult.DidNativeCallSucceed(resultCode, nameof(MLCamera.NativeBindings.MLCameraCaptureVideoStart));
            return MLResult.Create(resultCode);
        }

        public MLResult CaptureVideoStop()
        {
            MLResult.Code resultCode = MLCamera.NativeBindings.MLCameraCaptureVideoStop(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(MLCamera.NativeBindings.MLCameraCaptureVideoStop));
            isCapturingVideo = false;
            return MLResult.Create(resultCode);
        }


        public MLResult GetStreamCapabilities(out MLCamera.StreamCapabilitiesInfo[] streamCapabilities) => InternalGetStreamCapabilities(out streamCapabilities);

        public MLResult Disconnect() => MLResult.Create(InternalDisconnect());

        public MLResult Connect(MLCamera.ConnectContext connectContext) => MLResult.Create(InternalConnect(connectContext));

        public static MLResult Uninitialize() => InternalUninitialize();

        public MLResult PrepareCapture(MLCamera.CaptureConfig captureConfig, out MLCamera.Metadata cameraMetadata) => MLResult.Create(InternalPrepareCapture(captureConfig, out cameraMetadata));

        public MLResult PreCaptureAEAWB()
        {
#if UNITY_MAGICLEAP || UNITY_ANDROID
            MLResult.Code resultCode = MLCamera.NativeBindings.MLCameraPreCaptureAEAWB(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(MLCamera.NativeBindings.MLCameraPreCaptureAEAWB));
            return MLResult.Create(resultCode);
#else
            return MLResult.Create(MLResult.Code.NotImplemented);
#endif
        }

        public MLResult UpdateCaptureSettings()
        {
#if UNITY_MAGICLEAP || UNITY_ANDROID
            MLResult.Code resultCode = MLCamera.NativeBindings.MLCameraUpdateCaptureSettings(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(MLCamera.NativeBindings.MLCameraUpdateCaptureSettings));
            return MLResult.Create(resultCode);
#else
            return MLResult.Create(MLResult.Code.NotImplemented);
#endif        
        }

        public MLResult CaptureImage(uint numImages = 1)
        {
#if UNITY_MAGICLEAP || UNITY_ANDROID
            MLResult.Code resultCode = MLCamera.NativeBindings.MLCameraCaptureImage(Handle, numImages);
            MLResult.DidNativeCallSucceed(resultCode, nameof(MLCamera.NativeBindings.MLCameraCaptureImage));
            return MLResult.Create(resultCode);

#else
            return MLResult.Create(MLResult.Code.NotImplemented);
#endif
        }

        public MLResult GetDeviceStatus(out MLCamera.DeviceStatusFlag status)
        {
            status = MLCamera.DeviceStatusFlag.Error;
#if UNITY_MAGICLEAP || UNITY_ANDROID
            MLResult.Code resultCode = MLCamera.NativeBindings.MLCameraGetDeviceStatus(Handle, out uint statusFlags);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(MLCamera.NativeBindings.MLCameraGetDeviceStatus)))
            {
                status = (MLCamera.DeviceStatusFlag)statusFlags;
            }
            return MLResult.Create(resultCode);
#else
            return MLResult.Create(MLResult.Code.NotImplemented);
#endif
        }

        public MLResult GetErrorCode(out MLCamera.ErrorType error)
        {
#if UNITY_MAGICLEAP || UNITY_ANDROID
            MLResult.Code resultCode = MLCamera.NativeBindings.MLCameraGetErrorCode(Handle, out error);
            MLResult.DidNativeCallSucceed(resultCode, nameof(MLCamera.NativeBindings.MLCameraGetErrorCode));
            return MLResult.Create(resultCode);
#else
            error = ErrorType.None;
            return MLResult.Create(MLResult.Code.NotImplemented);
#endif
        }

        public MLResult GetCameraCharacteristics(out MLCamera.Metadata cameraMetadata)
        {
            cameraMetadata = null;
#if UNITY_MAGICLEAP || UNITY_ANDROID
            MLResult.Code resultCode = MLCamera.NativeBindings.MLCameraGetCameraCharacteristics(Handle, out ulong metadataHandle);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(MLCamera.NativeBindings.MLCameraGetErrorCode)))
            {
                cameraMetadata = new MLCamera.Metadata(metadataHandle);
            }
            return MLResult.Create(resultCode);
#else
            return MLResult.Create(MLResult.Code.NotImplemented);
#endif
        }

        protected override void OnApplicationPause(bool pauseStatus)
        {
            if (pauseStatus)
            {
                HandleApplicationPause();
            }
            else
            {
                HandleApplicationUnpause();
            }
        }

        private void HandleApplicationPause()
        {
            if (isCapturingVideo)
            {
                MLResult result = CaptureVideoStop();
                if (result.IsOk)
                {
                    wasCapturingVideo = true;
                }
            }
        }

        private void HandleApplicationUnpause()
        {
            if (wasCapturingVideo)
            {
                MLResult result = CaptureVideoStart();
                if (result.IsOk)
                {
                    wasCapturingVideo = false;
                }
            }
        }
    }
}
```




