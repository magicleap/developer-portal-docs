---

title: MLCameraAsync.cs

---


# MLCameraAsync.cs









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

using System.Threading.Tasks;
using UnityEngine.XR.MagicLeap.Native;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLCamera
    {
        public static Task<MLCamera> CreateAndConnectAsync(ConnectContext connectContext)
        {
            if (InternalCheckCameraPermission() == MLResult.Code.Ok)
            {
                var camera = new MLCamera()
                {
#if !UNITY_EDITOR   // preview rendering not supported under Magic Leap App Simulator
                    previewRenderer = new Renderer()
#endif
                };
                return Task.Run(() =>
                {
                    var resultCode = camera.InternalConnect(connectContext);
                    return resultCode == MLResult.Code.Ok ? camera : null;
                });
            }
            else
            {
                return new Task<MLCamera>(() => { return null; });
            }
        }

        public Task<MLResult> DisconnectAsync()
        {
            return Task.Run(() =>
            {
                var resultCode = InternalDisconnect();
                return MLResult.Create(resultCode);
            });
        }

        public Task<MLResult> PreCaptureAEAWBAsync()
        {
            return Task.Run(() =>
            {
                lock (apiLock)
                {
                    MLResult.Code resultCode = NativeBindings.MLCameraPreCaptureAEAWB(Handle);
                    MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraPreCaptureAEAWB));
                    return MLResult.Create(resultCode);
                }
            });
        }

        public Task<MLResult> CaptureVideoStartAsync()
        {
            return Task.Run(() =>
            {
                MLResult.Code resultCode = MLResult.Code.Ok;
                lock (apiLock)
                {
                    if (!isCapturingVideo)
                    {
                        resultCode = NativeBindings.MLCameraCaptureVideoStart(Handle);
                        isCapturingVideo = MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraCaptureVideoStart));
                    }
                }
                return MLResult.Create(resultCode);
            });
        }

        public Task<MLResult> CaptureVideoStopAsync()
        {
            return Task.Run(() =>
            {
                MLResult.Code resultCode = MLResult.Code.Ok;
                lock (apiLock)
                {
                    if (isCapturingVideo)
                    {
                        resultCode = NativeBindings.MLCameraCaptureVideoStop(Handle);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraCaptureVideoStop));
                        isCapturingVideo = false;
                    }
                }
                return MLResult.Create(resultCode);
            });
        }

        public Task<MLResult> CapturePreviewStartAsync()
        {
            // this has to be called on main thread
            CreatePreviewTexture();
            return Task.Run(() =>
            {
                MLResult.Code resultCode = MLResult.Code.Ok;
                lock (apiLock)
                {
                    if (!isCapturingPreview)
                    {
                        resultCode = NativeBindings.MLCameraCapturePreviewStart(Handle);
                        isCapturingPreview = MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraCapturePreviewStart));
                    }
                }
                return MLResult.Create(resultCode);
            });
        }

        public Task<MLResult> CapturePreviewStopAsync()
        {
            return Task.Run(() =>
            {
                MLResult.Code resultCode = MLResult.Code.Ok;
                lock (apiLock)
                {
                    if (isCapturingPreview)
                    {
                        resultCode = NativeBindings.MLCameraCapturePreviewStop(Handle);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraCapturePreviewStop));
                        isCapturingPreview = false;
                    }
                    MLThreadDispatch.ScheduleMain(ClearPreviewTexture);
                }
                return MLResult.Create(resultCode);
            });
        }

        public Task<MLResult> CaptureImageAsync(uint numImages = 1)
        {
            return Task.Run(() =>
            {
                MLResult.Code resultCode = MLResult.Code.Ok;
                lock (apiLock)
                {
                    resultCode = NativeBindings.MLCameraCaptureImage(Handle, numImages);
                    MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraCaptureImage));
                }
                return MLResult.Create(resultCode);
            });
        }
    }
}
```



