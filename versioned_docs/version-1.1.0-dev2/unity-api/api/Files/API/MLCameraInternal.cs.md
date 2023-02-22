---

title: MLCameraInternal.cs

---


# MLCameraInternal.cs









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

using UnityEngine.Android;

namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Collections.Generic;
    using System.Runtime.InteropServices;
    using System.Threading;
    using System.Threading.Tasks;
    using UnityEngine.XR.MagicLeap.Native;

    public sealed partial class MLCamera
    {
        #region properties

        private static bool cameraInited = false;

        private static object rawVideoFrameQueueLockObject = new object();

        private AutoResetEvent cameraDisconnectWaitHandle = new AutoResetEvent(true);

        private MLCamera.Renderer previewRenderer;

        private GCHandle gcHandle;

        private RenderTexture previewTexture;

        private bool cameraConnectionEstablished = false;

        private long previousCaptureTimestamp;

        private float currentFPS;

        private bool isCapturingVideo = false;

        private bool isCapturingPreview = false;

        private Texture2D previewTexture2D = null;

        private bool resumeConnect = false;

        private bool resumePreviewCapture = false;

        private bool resumeVideoCapture = false;

        private ConnectContext cameraConnectContext;

        private MLCamera.CaptureConfig cameraCaptureConfig;

        private static readonly object apiLock = new object();

        private Texture2D PreviewTexture2D
        {
            get => isCapturingPreview ? previewTexture2D : null;

            set => previewTexture2D = value;
        }

        private byte[][] byteArrays;

        #endregion

        private MLCamera()
        {
            gcHandle = GCHandle.Alloc(this, GCHandleType.Weak);
            Handle = Native.MagicLeapNativeBindings.InvalidHandle;
            byteArrays = new byte[NativeBindings.MLCameraMaxImagePlanes][];
        }

        ~MLCamera()
        {
            gcHandle.Free();
            cameraDisconnectWaitHandle.WaitOne();
            Disconnect();
            InternalUninitialize();
            ClearPreviewTexture();
        }

        private void CreatePreviewTexture()
        {
            int width = cameraCaptureConfig.StreamConfigs[0].Width;
            int height = cameraCaptureConfig.StreamConfigs[0].Height;

            if (previewTexture != null && (previewTexture.width != width || previewTexture.height != height))
            {
                ClearPreviewTexture();
            }
            if (previewTexture == null)
            {
                previewTexture = new RenderTexture(width, height, 0, RenderTextureFormat.ARGB32);
            }

            // preview rendering not supported under Magic Leap App Simulator
#if !UNITY_EDITOR
            previewRenderer?.Cleanup();
            previewRenderer = new MLCamera.Renderer();
            previewRenderer.SetRenderBuffer(previewTexture);
#endif
        }

        private MLResult InternalCapturePreviewStart()
        {
            lock (apiLock)
            {
                MLResult.Code resultCode = NativeBindings.MLCameraCapturePreviewStart(Handle);
                isCapturingPreview = MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraCapturePreviewStart));
                return MLResult.Create(resultCode);
            }
        }

        private void ClearPreviewTexture()
        {
            if (previewTexture != null)
            {
                GameObject.Destroy(previewTexture);
                previewTexture = null;
            }
        }

        private void ReleaseCaptureBuffers()
        {
            for (int i = 0; i < byteArrays.Length; ++i)
            {
                byteArrays[i] = null;
            }
        }

        private void GLPluginEvent()
        {
            // preview rendering not supported under Magic Leap App Simulator
#if !UNITY_EDITOR
            previewRenderer?.Render();
#endif
        }

        protected async override void OnApplicationPause(bool pauseStatus)
        {
            applicationPausePerfMarker.Begin();
            MLResult.Code result = pauseStatus ? await InternalPause() : await InternalResume();
            applicationPausePerfMarker.End();
            if (result != MLResult.Code.Ok)
            {
                Debug.LogErrorFormat("MLCamera.ApplicationPause failed to {0} the camera. Reason: {1}",
                    pauseStatus ? "pause" : "resume", result);
            }
        }

        private async Task<MLResult.Code> InternalPause(bool flagsOnly = false)
        {
            MLResult.Code result = MLResult.Code.Ok;

            if (cameraConnectionEstablished)
            {
                resumeConnect = true;
                resumePreviewCapture = isCapturingPreview;
                resumeVideoCapture = isCapturingVideo;

                result = await Task.Run(() => InternalDisconnect(flagsOnly));
                if (!MLResult.IsOK(result))
                {
                    return result;
                }
            }

            return result;
        }

        private async Task<MLResult.Code> InternalResume()
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

                    await PreCaptureAEAWBAsync();

                    resultCode = (await CapturePreviewStartAsync()).Result;

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

                    await PreCaptureAEAWBAsync();
                    resultCode = (await CaptureVideoStartAsync()).Result;

                    resumeVideoCapture = false;
                    if (!MLResult.IsOK(MLResult.Code.Ok))
                    {
                        MLPluginLog.ErrorFormat("MLCamera.Resume failed to start camera preview. Reason: {0}", resultCode);
                        return resultCode;
                    }
                }
            }

            return resultCode;
        }

        private MLResult.Code DisconnectNative()
        {
            var resultCode = NativeBindings.MLCameraDisconnect(Handle);

#if !UNITY_EDITOR
            // preview rendering not supported under Magic Leap App Simulator
            MLThreadDispatch.ScheduleMain(() => previewRenderer?.Cleanup());
#endif
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraDisconnect));

            return resultCode;
        }

        private static MLResult InternalInitialize()
        {
            MLResult.Code resultCode = MLResult.Code.Ok;
            lock (apiLock)
            {
                if (!cameraInited)
                {
                    NativeBindings.MLCameraDeviceAvailabilityStatusCallbacks callbacks =
                        NativeBindings.MLCameraDeviceAvailabilityStatusCallbacks.Create();
                    resultCode = NativeBindings.MLCameraInit(ref callbacks, IntPtr.Zero);
                    cameraInited = MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraInit));
                }
            }

            return MLResult.Create(resultCode);
        }

        private static MLResult InternalUninitialize()
        {
            if (!cameraInited)  // already uninited
                return MLResult.Create(MLResult.Code.Ok);

            cameraInited = false;
            NativeBindings.MLCameraDeviceAvailabilityStatusCallbacks callbacks =
                NativeBindings.MLCameraDeviceAvailabilityStatusCallbacks.CreateUninitialized();
            var resultCode = NativeBindings.MLCameraDeInit();
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraDeInit));
            return MLResult.Create(resultCode);
        }

        private static MLResult.Code InternalCheckCameraPermission()
        {
            var check = MLPermissions.CheckPermission(MLPermission.Camera);
            if (!MLResult.DidNativeCallSucceed(check.Result, nameof(MLPermissions.CheckPermission)))
            {
                return MLResult.Code.PermissionDenied;
            }
            return MLResult.Code.Ok;
        }

        private MLResult.Code InternalConnect(ConnectContext cameraConnectContext)
        {
            this.cameraConnectContext = cameraConnectContext;

            NativeBindings.MLCameraConnectContext context = NativeBindings.MLCameraConnectContext.Create(cameraConnectContext);

            MLResult.Code resultCode = MLResult.Code.Ok;

            lock (apiLock)
            {
                if (!cameraConnectionEstablished)
                {
                    resultCode = NativeBindings.MLCameraConnect(ref context, out Handle);

                    if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraConnect)))
                    {
                        Debug.LogErrorFormat("MLCamera.Connect failed connecting to the camera. Reason: {0}", resultCode);
                        connectPerfMarker.End();
                        return resultCode;
                    }

                    NativeBindings.MLCameraCaptureCallbacks captureCallbacks = NativeBindings.MLCameraCaptureCallbacks.Create();

                    if (!MLResult.DidNativeCallSucceed(NativeBindings.MLCameraSetCaptureCallbacks(Handle, ref captureCallbacks, GCHandle.ToIntPtr(gcHandle)), nameof(NativeBindings.MLCameraSetCaptureCallbacks)))
                    {
                        MLPluginLog.ErrorFormat("MLCamera.CaptureCallbacks failed seting the capture callbacks. Reason: {0}", resultCode);
                        connectPerfMarker.End();
                        return resultCode;
                    }

                    NativeBindings.MLCameraDeviceStatusCallbacks deviceCallbacks = NativeBindings.MLCameraDeviceStatusCallbacks.Create();

                    if (!MLResult.DidNativeCallSucceed(NativeBindings.MLCameraSetDeviceStatusCallbacks(Handle, ref deviceCallbacks, GCHandle.ToIntPtr(gcHandle)), nameof(NativeBindings.MLCameraSetDeviceStatusCallbacks)))
                    {
                        MLPluginLog.ErrorFormat("MLCamera.DeviceStatusCallbacks failed setting the device callbacks. Reason: {0}", resultCode);
                        connectPerfMarker.End();
                        return resultCode;
                    }

                    cameraConnectionEstablished = MLResult.IsOK(resultCode);
                }
            }
            if (!MLResult.IsOK(resultCode))
            {
                MLPluginLog.ErrorFormat("MLCamera.InternalConnect failed to populate characteristics for MLCamera. Reason: {0}", resultCode);
                connectPerfMarker.End();
                return resultCode;
            }

            connectPerfMarker.End();
            return resultCode;
        }

        private MLResult.Code InternalDisconnect(bool flagsOnly = false)
        {
            disconnectPerfMarker.Begin();

            if (this.cameraConnectionEstablished)
            {
                if (this.isCapturingVideo && !flagsOnly)
                {
                    var stopResult = CaptureVideoStop();
                    if (stopResult.IsOk)
                    {
                        this.isCapturingVideo = false;
                    }
                }

                if (this.isCapturingPreview && !flagsOnly)
                {
                    var stopResult = CapturePreviewStop();
                    if (stopResult.IsOk)
                    {
                        isCapturingPreview = false;
                    }
                }

                MLResult.Code result = DisconnectNative();

                // Assume that connection is no longer established
                // even if there is some failure disconnecting.
                this.cameraConnectionEstablished = false;
            }

            ReleaseCaptureBuffers();
            disconnectPerfMarker.Begin();

            return MLResult.Code.Ok;
        }

        private MLResult InternalGetStreamCapabilities(out StreamCapabilitiesInfo[] streamCapabilities)
        {
            streamCapabilities = null;

            var resultCode = NativeBindings.MLCameraGetNumSupportedStreams(Handle, out uint supportedStreams);
            if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraGetNumSupportedStreams)))
            {
                return MLResult.Create(resultCode);
            }

            streamCapabilities = new StreamCapabilitiesInfo[supportedStreams];
            int sizeOfStruct = Marshal.SizeOf(typeof(NativeBindings.MLCameraCaptureStreamCaps));

            for (uint i = 0; i < supportedStreams; i++)
            {
                streamCapabilities[i] = new StreamCapabilitiesInfo();
                uint streamCapsMax = 0;

                resultCode = NativeBindings.MLCameraGetStreamCaps(Handle, i, ref streamCapsMax, IntPtr.Zero);
                if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraGetStreamCaps)))
                {
                    return MLResult.Create(resultCode);
                }

                streamCapabilities[i].StreamCapabilities = new StreamCapability[streamCapsMax];
                IntPtr pointer = Marshal.AllocHGlobal((int)streamCapsMax *
                    Marshal.SizeOf(typeof(NativeBindings.MLCameraCaptureStreamCaps)));
                resultCode = NativeBindings.MLCameraGetStreamCaps(Handle, i, ref streamCapsMax, pointer);
                if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraGetStreamCaps)))
                {
                    Marshal.FreeHGlobal(pointer);
                    return MLResult.Create(resultCode);
                }

                for (int j = 0; j < streamCapsMax; j++)
                {
                    NativeBindings.MLCameraCaptureStreamCaps nativeStreamCap =
                        Marshal.PtrToStructure<NativeBindings.MLCameraCaptureStreamCaps>(pointer);

                    streamCapabilities[i].StreamCapabilities[j] = new StreamCapability()
                    {
                        Width = nativeStreamCap.Width,
                        Height = nativeStreamCap.Height,
                        CaptureType = nativeStreamCap.CaptureType
                    };

                    pointer += sizeOfStruct;
                }
            }

            return MLResult.Create(resultCode);
        }

        private MLResult.Code InternalPrepareCapture(CaptureConfig captureConfig, out Metadata cameraMetadata)
        {
            cameraCaptureConfig = captureConfig;
            cameraMetadata = null;

            MLResult.Code resultCode = MLResult.Code.Ok;
            NativeBindings.MLCameraCaptureConfig nativeCaptureConfig = NativeBindings.MLCameraCaptureConfig.Create(captureConfig);
            resultCode = NativeBindings.MLCameraPrepareCapture(Handle, ref nativeCaptureConfig, out ulong metadataHandle);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLCameraPrepareCapture)))
            {
                cameraMetadata = new Metadata(metadataHandle);
            }
            return resultCode;
        }
    }
}
```



