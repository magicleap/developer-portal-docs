---

title: MLCameraBaseStructs.cs

---


# MLCameraBaseStructs.cs









## Source code

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLCameraBase
    {
        public struct MRConnectInfo
        {
            public MRQuality MRQuality;

            public MRBlendType MRBlendType;

            public CaptureFrameRate FrameRate;

            public static MRConnectInfo Create()
            {
                return new MRConnectInfo()
                {
                    MRQuality = MRQuality._1440x1080,
                    MRBlendType = MRBlendType.Additive,
                    FrameRate = CaptureFrameRate._30FPS
                };
            }

            public override string ToString()
            {
                return $"Quality : {MRQuality}, BlendType : {MRBlendType}, FrameRate : {FrameRate}";
            }
        }

        public struct ConnectContext
        {
            public Identifier CamId;

            public ConnectFlag Flags;

            public bool EnableVideoStabilization;

            public MRConnectInfo MixedRealityConnectInfo;

            public static ConnectContext Create()
            {
                return new ConnectContext()
                {
                    CamId = Identifier.Main,
                    Flags = ConnectFlag.CamOnly,
                    EnableVideoStabilization = false,
                    MixedRealityConnectInfo = MRConnectInfo.Create()
                };
            }

            public override string ToString()
            {
                return $"CamId : {CamId}, Flags : {Flags}, Stabilization : {EnableVideoStabilization}, MRConnectInfo : {MixedRealityConnectInfo}";
            }
        }

        public struct StreamCapability
        {
            public CaptureType CaptureType;

            public int Width;

            public int Height;

            public override string ToString()
            {
                return $"CaptureType : {CaptureType}, Width : {Width}, Height : {Height}";
            }
        }

        public struct StreamCapabilitiesInfo
        {
            public StreamCapability[] StreamCapabilities;
        }

        public struct CaptureStreamConfig
        {
            public CaptureType CaptureType;

            public int Width;

            public int Height;

            public OutputFormat OutputFormat;

            public MLNativeSurface Surface;

            public static CaptureStreamConfig Create(StreamCapability streamCapability, OutputFormat outputFormat, MLNativeSurface recorderSurface = null)
            {
                return new CaptureStreamConfig()
                {
                    Width = streamCapability.Width,
                    Height = streamCapability.Height,
                    CaptureType = streamCapability.CaptureType,
                    OutputFormat = outputFormat,
                    Surface = recorderSurface
                };
            }

            public override string ToString()
            {
                return $"CaptureType : {CaptureType}, Width : {Width}, Height : {Height}, OutputFormat : {OutputFormat}, MediaRecorder : {(Surface == null ? "NULL" : Surface.Handle.ToString())}";
            }
        }

        public struct CaptureConfig
        {
            public CaptureFrameRate CaptureFrameRate;

            public CaptureStreamConfig[] StreamConfigs;
        }

        public readonly struct IntrinsicCalibrationParameters
        {
            public readonly uint Width;
            public readonly uint Height;
            public readonly Vector2 FocalLength;
            public readonly Vector2 PrincipalPoint;
            public readonly float FOV;

            public readonly double[] Distortion;

            public IntrinsicCalibrationParameters(uint width, uint height, in Vector2 focalLength, in Vector2 principalPoint, float fov, double[] distortion)
            {
                Width = width;
                Height = height;
                FocalLength = focalLength;
                PrincipalPoint = principalPoint;
                FOV = fov;
                Distortion = distortion;
            }

            public override string ToString()
            {
                return $"Width : {Width}, Height : {Height}, FocalLength : {FocalLength}, PrincipalPoint : {PrincipalPoint}, FOV : {FOV}, Distortion : {string.Join(", ", Distortion)}";
            }
        }

        public readonly struct ResultExtras
        {
            public readonly long FrameNumber;

            public readonly MLTime VCamTimestamp;

            public readonly IntrinsicCalibrationParameters? Intrinsics;

            internal ResultExtras(long frameNumber, long vcamTimestampUs, in IntrinsicCalibrationParameters? intrinsics)
            {
                FrameNumber = frameNumber;
                VCamTimestamp = vcamTimestampUs;
                Intrinsics = intrinsics;
            }
        }

        public struct PlaneInfo
        {
            public bool IsValid;

            public uint Width;

            public uint Height;

            public uint Stride;

            public uint BytesPerPixel;

            public uint PixelStride;

            public byte[] Data;

            public IntPtr DataPtr;

            public uint Size;

            public static PlaneInfo Create()
            {
                return new PlaneInfo
                {
                    IsValid = false,
                    Width = 0u,
                    Height = 0u,
                    Stride = 0u,
                    BytesPerPixel = 0u,
                    PixelStride = 0u,
                    Data = new byte[0],
                    Size = 0u
                };
            }

            public override string ToString()
            {
                return $"IsValid: {IsValid}, Width: {Width}, Height: {Height}, Stride: {Stride}, BytesPerPixel: {BytesPerPixel} " +
                    $"PixelStride: {PixelStride}, ByteBufferLength: {Data?.Length}, DataPtr: {DataPtr}, Size: {Size}";
            }
        }

        public struct CameraOutput
        {
            public PlaneInfo[] Planes;

            public OutputFormat Format;

            public override string ToString()
            {
                string result = $"Format: {Format}\n";
                for (int i = 0; i < Planes.Length; ++i)
                {
                    result += $"Plane[{i}]: {Planes[i]}\n";
                }
                return result;
            }
        }
    }
}
```




