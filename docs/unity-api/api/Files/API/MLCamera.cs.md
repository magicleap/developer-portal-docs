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


namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Threading;
    using System.Threading.Tasks;
    using Native;

    public sealed partial class MLCamera : MLCameraBase
    {
        public event Action OnCameraPaused;
        
        public event Action OnCameraResumed;
        
        public bool IsPaused { get; private set; }
        
        private static int instanceCounter = 0;

        private MLCamera() : base() => Interlocked.Increment(ref instanceCounter);

        ~MLCamera()
        {
            Cleanup();
            cameraDisconnectWaitHandle.WaitOne();
            if (Interlocked.Decrement(ref instanceCounter) == 0)
                InternalUninitialize();
        }

        new public static MLCamera Create() => new MLCamera();

        private AutoResetEvent cameraDisconnectWaitHandle = new AutoResetEvent(true);

        private static readonly object apiLock = new object();

        private Texture2D PreviewTexture2D
        {
            get => isCapturingPreview ? previewTexture2D : null;
            set => previewTexture2D = value;
        }

        public static MLCamera CreateAndConnect(ConnectContext connectContext)
        {
            var camera = MLCamera.Create();
            return camera.InternalConnect(connectContext) == MLResult.Code.Ok ? camera : null;
        }


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
            MLThreadDispatch.ScheduleMain(CreatePreviewTexture);

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


        protected override void OnApplicationPause(bool pauseStatus)
        {
            applicationPausePerfMarker.Begin();
            MLResult.Code result = MLResult.Code.Ok;
            if (pauseStatus)
            {
                result = Pause();
            }
            else
            {
                Resume();
            }
            applicationPausePerfMarker.End();
            if (result != MLResult.Code.Ok)
            {
                Debug.LogErrorFormat("MLCamera.ApplicationPause failed to {0} the camera. Reason: {1}",
                    pauseStatus ? "pause" : "resume", result);
            }
        }

        private MLResult.Code Pause(bool flagsOnly = false)
        {
            OnCameraPaused?.Invoke();
            IsPaused = true;
            MLResult.Code result = MLResult.Code.Ok;

            if (cameraConnectionEstablished)
            {
                resumeConnect = true;
                resumePreviewCapture = isCapturingPreview;
                resumeVideoCapture = isCapturingVideo;

                result = InternalDisconnect(flagsOnly);
                if (!MLResult.IsOK(result))
                {
                    return result;
                }
            }

            return result;
        }

        private MLResult.Code Resume()
        {
            MLResult.Code resultCode = MLResult.Code.Ok;

            if (resumeConnect)
            {
                if (InternalCheckCameraPermission() != MLResult.Code.Ok)
                {
                    return MLResult.Code.PermissionDenied;
                }

                resultCode = InternalConnect(cameraConnectContext);

                resumeConnect = false;
                if (!MLResult.IsOK(resultCode))
                {
                    MLPluginLog.ErrorFormat("MLCamera.Resume failed to connect camera. Reason: {0}", resultCode);
                    return resultCode;
                }

                if (resumePreviewCapture)
                {
                    resultCode = InternalPrepareCapture(cameraCaptureConfig, out MLCamera.Metadata _);

                    if (!MLResult.IsOK(resultCode))
                    {
                        MLPluginLog.ErrorFormat("MLCamera.Resume failed to prepare capture. Reason: {0}", resultCode);
                        return resultCode;
                    }

                    PreCaptureAEAWB();

                    resultCode = CapturePreviewStart().Result;

                    resumePreviewCapture = false;
                    if (!MLResult.IsOK(MLResult.Code.Ok))
                    {
                        MLPluginLog.ErrorFormat("MLCamera.Resume failed to start camera preview. Reason: {0}", resultCode);
                        return resultCode;
                    }
                }
                else if (resumeVideoCapture)
                {
                    PrepareCapture(cameraCaptureConfig, out Metadata _);

                    if (!MLResult.IsOK(resultCode))
                    {
                        MLPluginLog.ErrorFormat("MLCamera.Resume failed to prepare capture. Reason: {0}", resultCode);
                        return resultCode;
                    }

                    PreCaptureAEAWB();
                    resultCode = CaptureVideoStart().Result;

                    resumeVideoCapture = false;
                    if (!MLResult.IsOK(MLResult.Code.Ok))
                    {
                        MLPluginLog.ErrorFormat("MLCamera.Resume failed to start camera preview. Reason: {0}", resultCode);
                        return resultCode;
                    }
                }
            }

            IsPaused = false;
            OnCameraResumed?.Invoke();
            return resultCode;
        }

        private void ReleaseCaptureBuffers()
        {
            for (int i = 0; i < byteArrays.Length; ++i)
            {
                byteArrays[i] = null;
            }
        }
    }
}
```



