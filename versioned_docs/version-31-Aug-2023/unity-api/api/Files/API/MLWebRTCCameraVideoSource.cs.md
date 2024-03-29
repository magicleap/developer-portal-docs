---

title: MLWebRTCCameraVideoSource.cs

---


# MLWebRTCCameraVideoSource.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2019-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using UnityEngine.XR.MagicLeap.Native;
using static UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame;


namespace UnityEngine.XR.MagicLeap
{
    public partial class MLWebRTC
    {
        public class MLCameraVideoSource : AppDefinedVideoSource
        {
            private MLCameraVideoSource(MLCamera mlCameraBase, MLCamera.CaptureConfig camCaptureConfig, string trackId, Renderer localRenderer, bool nativeBuffers, bool handlePause)
                : base(trackId)
            {
                camera = mlCameraBase;
                captureConfig = camCaptureConfig;
                useNativeBuffers = nativeBuffers;
                previewRenderer = localRenderer;
                controlCameraPauseState = handlePause;
                
                SetupCameraCallbacks();

                MLDevice.RegisterUpdate(Update);
            }

            ~MLCameraVideoSource()
            {
                MLDevice.UnregisterUpdate(Update);
            }
            
            private CircularBuffer<PlaneInfo[]> imagePlanesBuffer = CircularBuffer<PlaneInfo[]>.Create(
                new PlaneInfo[NativeImagePlanesLength[OutputFormat.YUV_420_888]],
                new PlaneInfo[NativeImagePlanesLength[OutputFormat.YUV_420_888]],
                new PlaneInfo[NativeImagePlanesLength[OutputFormat.YUV_420_888]]);

            private MLCamera camera;
            private MLCamera.CaptureConfig captureConfig;
            private NativeBufferInfo nativeBufferInfo;
            private Renderer previewRenderer;

            private bool isCapturing = false;
            private bool shouldStopCapturing = false;
            private int surfaceFrameAvailable = 0;
            private bool isCapturingPreview = false;
            private float previewAspectRatio = 0;
            private bool useNativeBuffers = true;
            private bool wasPaused = false;
            private bool destroyed = false;
            private bool controlCameraPauseState = false;
            private bool skipThisFrame = false;

            public bool IsCapturing => isCapturing;

            public delegate void CaptureStatusChangedDelegate(bool isDestroying);

            public event CaptureStatusChangedDelegate OnCaptureStatusChanged;

            private static readonly ushort captureBufferCount = 4;
            
            private MLNativeSurface cameraNativeSurface => captureConfig.StreamConfigs[0].Surface;

            public static MLCameraVideoSource CreateLocal(MLCameraBase camera, MLCamera.CaptureConfig captureConfig, out MLResult result, string trackId = "", Renderer localRenderer = null, bool nativeBuffers = true, bool handlePause = true)
            {
                if (camera == null || captureConfig.StreamConfigs == null || captureConfig.StreamConfigs.Length < 1)
                {
                    result = MLResult.Create(MLResult.Code.InvalidParam);
                    return null;
                }

                MLCameraVideoSource mlCameraVideoSource = new MLCameraVideoSource(camera as MLCamera, captureConfig, trackId, localRenderer, nativeBuffers, handlePause);

                result = InitializeLocal(mlCameraVideoSource);
                if (!result.IsOk)
                {
                    Debug.LogError($"MLCameraVideoSource.InitializeLocal failed with result {result}");
                    return null;
                }

                mlCameraVideoSource.StartCapture();

                return mlCameraVideoSource;
            }

            protected override void OnSourceSetEnabled(bool enabled)
            {
                skipThisFrame = true;
                if (enabled)
                {
                    if (!wasPaused)
                    {
                        StartCapture();
                    }
                    else
                    {
                        wasPaused = false;
                    }
                }
                else
                {
                    StopCapture();
                }
            }

            protected override void OnSourceDestroy()
            {
                destroyed = true;
                StopCapture();
                RemoveCameraCallbacks();
            }

            private void ConfigureNativeSurface()
            {
                if (!useNativeBuffers)
                {
                    return;
                }
                
                captureConfig.StreamConfigs[0].Surface = new MLNativeSurface(MLNativeSurface.PixelFormat.Rgba8888, captureBufferCount, (uint)captureConfig.StreamConfigs[0].Width, (uint)captureConfig.StreamConfigs[0].Height);
                captureConfig.StreamConfigs[0].Surface.OnFrameAvailable += CameraNativeSurface_OnFrameAvailable;

                nativeBufferInfo = new NativeBufferInfo
                {
                    Width = (uint)captureConfig.StreamConfigs[0].Width,
                    Height = (uint)captureConfig.StreamConfigs[0].Height,
                    SurfaceHandle = cameraNativeSurface.Handle,
                    Transform = new float[16]
                };
                
                // Initialize with identity matrix incase native call fails and we still end up sending this transform to the shaders.
                Array.Copy(MLConvert.IdentityMatrixColMajor, nativeBufferInfo.Transform, nativeBufferInfo.Transform.Length);

                // The transform matrix we recieve from the underlying stack for "virtual only" camera
                // is incorrect and rotates the texture by 90 degrees instead of flipping it vertically
                // & horizontally. So just for this particular case we use our own matrix i.e.
                // an identity matrix flipped vertically, then horizontally.
                if (camera.ConnectionContext.Flags == MLCamera.ConnectFlag.VirtualOnly)
                {
                    MLConvert.FlipTransformMatrixVertically(nativeBufferInfo.Transform);
                    MLConvert.FlipTransformMatrixHorizontally(nativeBufferInfo.Transform);
                }
            }

            private void AdjustPreviewDimensions(float textureWidth, float textureHeight, Renderer renderer)
            {
                if (textureHeight == 0)
                {
                    Debug.LogError("AdjustPreviewDimensions can't scale renderer because it received a textureHeight of 0");
                    return;
                }

                float ratio = textureWidth / textureHeight;

                if (Math.Abs(previewAspectRatio - ratio) < float.Epsilon)
                    return;

                previewAspectRatio = ratio;
                var transform = renderer.transform;
                var localScale = transform.localScale;
                localScale = new Vector3(previewAspectRatio * localScale.y, localScale.y, 1);
                transform.localScale = localScale;
            }

            private async void StartCapture()
            {
                if (!isCapturing)
                {
                    Debug.Log("StartCapture with stream config: " + captureConfig.StreamConfigs[0]);

                    if (useNativeBuffers)
                    {
                        ConfigureNativeSurface();
                    }

                    MLResult result = camera.PrepareCapture(captureConfig, cameraMetadata: out _);
                    if (result.IsOk)
                    {
                        camera.PreCaptureAEAWB();
                        if (captureConfig.StreamConfigs.Length == 2 && captureConfig.StreamConfigs[1].CaptureType == MLCamera.CaptureType.Preview)
                        {
                            result = await camera.CapturePreviewStartAsync();
                            if (result.IsOk)
                            {
                                isCapturingPreview = true;
                            }
                        }

                        if (isCapturingPreview && previewRenderer != null)
                        {
                            MLThreadDispatch.ScheduleMain(() =>
                            {
                                AdjustPreviewDimensions(camera.PreviewTexture.width, camera.PreviewTexture.height, previewRenderer);
                                previewRenderer.enabled = true;
                                previewRenderer.material.mainTexture = camera.PreviewTexture;
                            });
                        }

                        result = await camera.CaptureVideoStartAsync();
                        if (!result.IsOk)
                        {
                            Debug.LogError("capture start error: " + result);
                        }
                    }
                    else
                    {
                        Debug.LogError("prepare capture start error: " + result);
                    }

                    isCapturing = result.IsOk;
                    if (IsCapturing)
                    {
                        OnCaptureStatusChanged?.Invoke(false);
                    }
                }
            }

            private void StopCapture()
            {
                if (isCapturing && !wasPaused)
                {
                    shouldStopCapturing = true;
                    if (!useNativeBuffers)
                    {
                        isCapturing = false;
                        TerminateCaptureNow();
                    }
                }
            }

            private void SetupCameraCallbacks()
            {
                if (camera != null)
                {
                    if (!useNativeBuffers)
                    {
                        camera.OnRawVideoFrameAvailable_NativeCallbackThread += Camera_OnRawVideoFrameAvailable_NativeCallbackThread;
                    }
                    else if (cameraNativeSurface != null)
                    {
                        cameraNativeSurface.OnFrameAvailable += CameraNativeSurface_OnFrameAvailable;
                    }
                    camera.OnCaptureAborted += Camera_OnCaptureAborted;
                    camera.OnCaptureFailed += Camera_OnCaptureFailed;
                    camera.OnDeviceDisconnected += Camera_OnDeviceDisconnected;
                    camera.OnDeviceIdle += Camera_OnDeviceIdle;
                    camera.OnDeviceError += Camera_OnDeviceError;
                    camera.OnDeviceStreaming += Camera_OnDeviceStreaming;
                }
            }

            private void RemoveCameraCallbacks()
            {
                if (camera != null)
                {
                    if (!useNativeBuffers)
                    {
                        camera.OnRawVideoFrameAvailable_NativeCallbackThread -= Camera_OnRawVideoFrameAvailable_NativeCallbackThread;
                    }
                    else if (cameraNativeSurface != null)
                    {
                        cameraNativeSurface.OnFrameAvailable -= CameraNativeSurface_OnFrameAvailable;
                    }
                    camera.OnCaptureAborted -= Camera_OnCaptureAborted;
                    camera.OnCaptureFailed -= Camera_OnCaptureFailed;
                    camera.OnDeviceDisconnected -= Camera_OnDeviceDisconnected;
                    camera.OnDeviceIdle -= Camera_OnDeviceIdle;
                    camera.OnDeviceError -= Camera_OnDeviceError;
                    camera.OnDeviceStreaming -= Camera_OnDeviceStreaming;
                }
            }

            protected override void OnApplicationPause(bool pause)
            {
                if (controlCameraPauseState)
                {
                    wasPaused = pause;
                    base.OnApplicationPause(pause);
                }
            }

            private void Update()
            {
                if (isCapturing)
                {
                    if (useNativeBuffers)
                    {
                        if (skipThisFrame)
                        {
                            skipThisFrame = false;
                            return;
                        }
                        
                        if (shouldStopCapturing)
                        {
                            TerminateCaptureNow();
                        }
                        
                        // This needs to be an atomic operation because CameraRecorderSurface_OnFrameAvailable is called on a different thread than this func.
                        else if (System.Threading.Interlocked.Exchange(ref surfaceFrameAvailable, 0) == 1)
                        {
                            cameraNativeSurface.GetFrameNumber(out ulong frameId);
                            cameraNativeSurface.GetFrameTimestamp(out long timestampNs);
                            
                            // The transform matrix we recieve from the underlying stack for "virtual only" camera
                            // is incorrect and rotates the texture by 90 degrees instead of flipping it vertically
                            // & horizontally. So just for this particular case we use our own matrix i.e.
                            // an identity matrix flipped vertically, then horizontally which is setup at the
                            // ConfigureRecorderSurface() function.
                            if (camera.ConnectionContext.Flags != MLCamera.ConnectFlag.VirtualOnly)
                            {
                                cameraNativeSurface.GetFrameTransformMatrix(nativeBufferInfo.Transform);
                            }
                            
                            // DO NOT release the frame acquired here. It will be done by the underlying webrtc lib.
                            if (cameraNativeSurface.AcquireNextAvailableFrame(out ulong nativeBufferHandle).IsOk)
                            {
                                nativeBufferInfo.NativeBufferHandle = nativeBufferHandle;
                                VideoSink.Frame frame = VideoSink.Frame.Create(frameId, (ulong)timestampNs / 1000, nativeBufferInfo);
                                PushFrame(frame);
                            }
                        }
                    }
                }
            }

            private async void TerminateCaptureNow()
            {
                isCapturing = false;

                await camera.CaptureVideoStopAsync();
                if (isCapturingPreview)
                {
                    await camera.CapturePreviewStopAsync();
                    isCapturingPreview = false;
                }
                shouldStopCapturing = false;
                surfaceFrameAvailable = 0;
                OnCaptureStatusChanged?.Invoke(destroyed);
            }
            
            // When using NativeSurface (HW buffers)
            private void CameraNativeSurface_OnFrameAvailable()
            {
                surfaceFrameAvailable = 1;
            }

            // When not using NativeSurface (SW buffers)
            private void Camera_OnRawVideoFrameAvailable_NativeCallbackThread(MLCamera.CameraOutput cameraOutput, MLCamera.ResultExtras results, MLCamera.Metadata metadataHandle)
            {
                if (useNativeBuffers || !isCapturing)
                {
                    return;
                }

                PlaneInfo[] imagePlaneArray = imagePlanesBuffer.Get();
                for (int i = 0; i < cameraOutput.Planes.Length; ++i)
                {
                    imagePlaneArray[i] = PlaneInfo.Create(cameraOutput.Planes[i].Width, cameraOutput.Planes[i].Height, cameraOutput.Planes[i].Stride, cameraOutput.Planes[i].BytesPerPixel, cameraOutput.Planes[i].Size, cameraOutput.Planes[i].DataPtr);
                }

                OutputFormat outFmt = OutputFormat.YUV_420_888;
                if (cameraOutput.Format == MLCamera.OutputFormat.RGBA_8888)
                {
                    outFmt = OutputFormat.RGBA_8888;
                }

                MLTime.ConvertMLTimeToSystemTime(results.VCamTimestamp, out long nanoseconds);

                var frame = Create((ulong)results.FrameNumber, (ulong)nanoseconds / 1000, imagePlaneArray, outFmt);

                PushFrame(frame);
            }

            private void Camera_OnDeviceError(MLCamera.ErrorType error)
            {
                MLPluginLog.Error($"MLWebRTC.CameraVideoSource camera device error: {error}");
            }

            private void Camera_OnDeviceIdle()
            {
                MLPluginLog.Debug("MLWebRTC.CameraVideoSource camera is idle");
            }

            private void Camera_OnDeviceDisconnected(MLCamera.DisconnectReason reason)
            {
                MLPluginLog.Debug($"MLWebRTC.CameraVideoSource camera disconnected. reason: {reason}");
            }

            private void Camera_OnCaptureFailed(MLCamera.ResultExtras extra)
            {
                MLPluginLog.Error($"MLWebRTC.CameraVideoSource camera capture failed [frame: {extra.FrameNumber} timestamp: {extra.VCamTimestamp}]");
            }

            private void Camera_OnCaptureAborted()
            {
                MLPluginLog.Error($"MLWebRTC.CameraVideoSource camera capture aborted");
            }

            private void Camera_OnDeviceStreaming()
            {
                MLPluginLog.Debug("MLWebRTC.CameraVideoSource camera is streaming.");
            }
            public MLCameraVideoSource(string trackId) : base(trackId)
            {
            }
        }
    }
}
```




