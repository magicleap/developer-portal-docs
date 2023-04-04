---

title: MLCameraBaseNativeStructs.cs

---


# MLCameraBaseNativeStructs.cs









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
using System.Linq;
using System.Runtime.InteropServices;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLCameraBase
    {
        internal partial class NativeBindings
        {
            [StructLayout(LayoutKind.Sequential)]
            public struct MLCameraMRConnectInfo
            {
                public MLCamera.MRQuality MrQuality;

                public MLCamera.MRBlendType MrBlendType;

                public MLCamera.CaptureFrameRate FrameRate;

                public static MLCameraMRConnectInfo Create(MLCamera.MRConnectInfo connectInfo)
                {
                    return new MLCameraMRConnectInfo()
                    {
                        MrQuality = connectInfo.MRQuality,
                        MrBlendType = connectInfo.MRBlendType,
                        FrameRate = connectInfo.FrameRate
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLCameraConnectContext
            {
                public uint Version;

                public  MLCamera.Identifier CamId;

                public MLCamera.ConnectFlag Flags;

                [MarshalAs(UnmanagedType.I1)]
                public bool EnableVideoStab;

                public MLCameraMRConnectInfo MrInfo;

                public static MLCameraConnectContext Create(MLCamera.ConnectContext cameraContext)
                {
                    return new MLCameraConnectContext()
                    {
                        Version = 1,
                        CamId = cameraContext.CamId,
                        Flags = cameraContext.Flags,
                        EnableVideoStab = cameraContext.EnableVideoStabilization,
                        MrInfo = MLCameraMRConnectInfo.Create(cameraContext.MixedRealityConnectInfo)
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLCameraCaptureStreamCaps
            {
                public MLCamera.CaptureType CaptureType;

                public int Width;

                public int Height;

                public static MLCameraCaptureStreamCaps Create()
                {
                    return new MLCameraCaptureStreamCaps()
                    {
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLCameraCaptureStreamConfig
            {

                public MLCamera.CaptureType CaptureType;

                public int Width;

                public int Height;

                public MLCamera.OutputFormat OutputFormat;

                public ulong MediaRecorderSurfaceHandle;

                public static MLCameraCaptureStreamConfig Create()
                {
                    return new MLCameraCaptureStreamConfig()
                    {
                    };
                }

                public static MLCameraCaptureStreamConfig Create(MLCamera.CaptureStreamConfig config)
                {
                    return new MLCameraCaptureStreamConfig()
                    {
                        Height = config.Height,
                        Width = config.Width,
                        CaptureType = config.CaptureType,
                        OutputFormat = config.OutputFormat,
                        MediaRecorderSurfaceHandle = config.Surface?.Handle ?? InvalidHandle,
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLCameraCaptureConfig
            {
                public uint Version;

                public MLCamera.CaptureFrameRate CaptureFrameRate;

                public uint NumStreams;

                [MarshalAs(UnmanagedType.ByValArray, SizeConst = MLCameraMaxStreams)]
                public MLCameraCaptureStreamConfig[] StreamConfig;

                public static MLCameraCaptureConfig Create()
                {
                    return new MLCameraCaptureConfig()
                    {
                        Version = 1,
                        StreamConfig = new MLCameraCaptureStreamConfig[MLCameraMaxStreams]
                    };
                }

                public static MLCameraCaptureConfig Create(MLCamera.CaptureConfig config)
                {
                    MLCameraCaptureConfig nativeConfig = MLCameraCaptureConfig.Create();
                    nativeConfig.NumStreams = (uint)config.StreamConfigs.Length;
                    nativeConfig.CaptureFrameRate = config.CaptureFrameRate;
                    for (var i = 0; i < config.StreamConfigs.Length; i++)
                        nativeConfig.StreamConfig[i] = MLCameraCaptureStreamConfig.Create(config.StreamConfigs[i]);

                    return nativeConfig;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLCameraPlaneInfo
            {
                public uint Version;

                public uint Width;

                public uint Height;

                public uint Stride;

                public uint BytesPerPixel;

                public uint PixelsStride;

                public IntPtr Data;

                public uint Size;

                public static MLCameraPlaneInfo Create()
                {
                    return new MLCameraPlaneInfo
                    {
                        Version = 0u,
                        Width = 0u,
                        Height = 0u,
                        Stride = 0u,
                        BytesPerPixel = 0u,
                        PixelsStride = 0u,
                        Data = IntPtr.Zero,
                        Size = 0u
                    };
                }

                public MLCamera.PlaneInfo CreatePlaneInfo(bool copyToManagedMemory, byte[] byteArrayToUse = null)
                {
                    if (copyToManagedMemory && byteArrayToUse == null)
                    {
                        byteArrayToUse = new byte[Size];
                    }

                    var planeInfo = new MLCamera.PlaneInfo()
                    {
                        IsValid = true,
                        Width = this.Width,
                        Height = this.Height,
                        Stride = this.Stride,
                        BytesPerPixel = this.BytesPerPixel,
                        PixelStride = this.PixelsStride,
                        DataPtr = this.Data,
                        Size = this.Size,
                        Data = (copyToManagedMemory) ? byteArrayToUse : null
                    };

                    if (planeInfo.Data != null)
                    {
                        Marshal.Copy(Data, planeInfo.Data, 0, planeInfo.Data.Length);
                    }

                    return planeInfo;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLCameraOutput
            {
                public uint Version;

                public byte PlaneCount;

                [MarshalAs(UnmanagedType.ByValArray, SizeConst = NativeBindings.MLCameraMaxImagePlanes)]
                public MLCameraPlaneInfo[] Planes;

                public MLCamera.OutputFormat Format;

                public static MLCameraOutput Create()
                {
                    return new MLCameraOutput
                    {
                        Version = 0,
                        PlaneCount = 0,
                        Planes = Enumerable.Repeat(MLCameraPlaneInfo.Create(), NativeBindings.MLCameraMaxImagePlanes).ToArray(),
                        Format = MLCamera.OutputFormat.JPEG
                    };
                }

                public MLCamera.CameraOutput CreateFrameInfo(bool copyToManagedMemory, byte[][] byteArraysToUse = null)
                {
                    var frameInfo = new MLCamera.CameraOutput()
                    {
                        Planes = new MLCamera.PlaneInfo[this.PlaneCount],
                        Format = this.Format
                    };

                    for (int i = 0; i < this.PlaneCount; ++i)
                    {
                        frameInfo.Planes[i] = Planes[i].CreatePlaneInfo(copyToManagedMemory, byteArraysToUse?[i]);
                    }

                    return frameInfo;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLCameraIntrinsicCalibrationParameters
            {
                public readonly uint Version;

                public readonly uint Width;

                public readonly uint Height;

                public readonly MLVec2f FocalLength;

                public readonly MLVec2f PrincipalPoint;

                public readonly float FOV;

                [MarshalAs(UnmanagedType.ByValArray, SizeConst = MLCameraMaxDistortionCoefficients)]
                public readonly double[] Distortion;
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLCameraResultExtras
            {
                public readonly uint Version;

                public readonly long FrameNumber;

                public readonly long VcamTimestamp;

                public readonly IntPtr Intrinsics;
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLCameraDeviceAvailabilityInfo
            {
                public readonly MLCamera.Identifier CamId;
                public readonly IntPtr UserData;
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLCameraDeviceAvailabilityStatusCallbacks
            {

                public uint Version;

                public DeviceAvailabilityStatusDelegate OnDeviceAvailable;

                public DeviceAvailabilityStatusDelegate OnDeviceUnavailable;

                public static MLCameraDeviceAvailabilityStatusCallbacks Create()
                {
                    return new MLCameraDeviceAvailabilityStatusCallbacks()
                    {
                        Version = 1,
                        OnDeviceAvailable = OnDeviceAvailableCallback,
                        OnDeviceUnavailable = OnDeviceUnavailableCallback
                    };
                }

                public static MLCameraDeviceAvailabilityStatusCallbacks CreateUninitialized()
                {
                    return new MLCameraDeviceAvailabilityStatusCallbacks()
                    {
                        Version = 1,
                        OnDeviceAvailable = null,
                        OnDeviceUnavailable = null
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLCameraDeviceStatusCallbacks
            {

                public uint Version;

                public OnDeviceStreamingDelegate OnDeviceStreaming;

                public OnDeviceIdleDelegate OnDeviceIdle;

                public OnDeviceDisconnectedDelegate OnDeviceDisconnected;

                public OnDeviceErrorDelegate OnDeviceError;

                public static MLCameraDeviceStatusCallbacks Create()
                {
                    return new MLCameraDeviceStatusCallbacks()
                    {
                        Version = 1,
                        OnDeviceStreaming = OnDeviceStreamingCallback,
                        OnDeviceIdle = OnDeviceIdleCallback,
                        OnDeviceDisconnected = OnDeviceDisconnectCallback,
                        OnDeviceError = OnDeviceErrorCallback
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLCameraCaptureCallbacks
            {
                public uint Version;

                public OnCaptureFailedDelegate OnCaptureFailed;

                public OnCaptureAbortedDelegate OnCaptureAborted;

                public OnCaptureCompletedDelegate OnCaptureCompleted;

                public OnImageBufferAvailableDelegate OnImageBufferAvailable;

                public OnVideoBufferAvailableDelegate OnVideoBufferAvailable;

                public OnPreviewBufferAvailableDelegate OnPreviewBufferAvailable;

                public static MLCameraCaptureCallbacks Create()
                {
                    return new MLCameraCaptureCallbacks()
                    {
                        Version = 1,
                        OnCaptureFailed = OnCaptureFailCallback,
                        OnCaptureAborted = OnCaptureAbortCallback,
                        OnCaptureCompleted = OnCaptureCompleteCallback,
                        OnImageBufferAvailable = OnImageBufferAvailableCallback,
                        OnVideoBufferAvailable = OnVideoBufferAvailableCallback,
                        OnPreviewBufferAvailable = OnPreviewBufferAvailableCallback
                    };
                }
            }
        }
    }
}
```




