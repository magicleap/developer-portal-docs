---

title: MLWebRTCFrameNativeBindings.cs

---


# MLWebRTCFrameNativeBindings.cs









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
    using System.Collections.Generic;
    using System.Runtime.InteropServices;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC
    {
        public partial class VideoSink
        {
            public partial struct Frame
            {
                internal class NativeBindings : MagicLeapNativeBindings
                {
                    [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                    public static extern MLResult.Code MLWebRTCFrameGetData(ulong frameHandle, ref MLWebRTCFrame frame);

                    private static readonly CircularBuffer<ImagePlaneInfoNative[]> nativeImagePlanesBuffer = CircularBuffer<ImagePlaneInfoNative[]>.Create(
                        new ImagePlaneInfoNative[PlaneInfo.MaxImagePlanes],
                        new ImagePlaneInfoNative[PlaneInfo.MaxImagePlanes],
                        new ImagePlaneInfoNative[PlaneInfo.MaxImagePlanes]);

                    private const int TransformMatrixLength = 16;

                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLWebRTCFrame
                    {
                        public uint Version;

                        public IntPtr FrameData;

                        public ulong TimeStamp;

                        public OutputFormat Format;

                        public static MLWebRTCFrame Create(OutputFormat format)
                        {
                            MLWebRTCFrame frameNative = new MLWebRTCFrame();
                            frameNative.Version = 2;
                            frameNative.Format = format;
                            return frameNative;
                        }

                        public static MLWebRTCFrame Create(MLWebRTC.VideoSink.Frame frame)
                        {
                            MLWebRTCFrame frameNative = Create(frame.Format);
                            frameNative.TimeStamp = frame.TimeStampUs;
                            if (frame.Format == OutputFormat.NativeBuffer)
                            {
                                MLWebRTCNativeFrameInfo frameData = new MLWebRTCNativeFrameInfo()
                                {
                                    Width = frame.NativeFrame.Width,
                                    Height = frame.NativeFrame.Height,
                                    SurfaceHandle = frame.NativeFrame.SurfaceHandle,
                                    NativeBufferHandle = frame.NativeFrame.NativeBufferHandle,
                                    Transform = new float[frame.NativeFrame.Transform.Length]
                                };
                                Array.Copy(frame.NativeFrame.Transform, frameData.Transform, frame.NativeFrame.Transform.Length);

                                frameNative.FrameData = Marshal.AllocHGlobal(Marshal.SizeOf(frameData));
                                Marshal.StructureToPtr(frameData, frameNative.FrameData, false);
                            }
                            else
                            {
                                MLWebRTCFramePlanes frameData = new MLWebRTCFramePlanes()
                                {
                                    PlaneCount = (byte)((frame.Format == OutputFormat.YUV_420_888) ? 3 : 1),
                                    ImagePlanes = nativeImagePlanesBuffer.Get()
                                };
                                for (int i = 0; i < frame.ImagePlanes.Length; i++)
                                {
                                    frameData.ImagePlanes[i] = new ImagePlaneInfoNative(frame.ImagePlanes[i]);
                                }

                                frameNative.FrameData = Marshal.AllocHGlobal(Marshal.SizeOf(frameData));
                                Marshal.StructureToPtr(frameData, frameNative.FrameData, false);
                            }

                            return frameNative;
                        }

                        public void FreeUnmanagedMemory()
                        {
                            if (FrameData != IntPtr.Zero)
                            {
                                Marshal.FreeHGlobal(FrameData);
                                FrameData = IntPtr.Zero;
                            }
                        }

                        public override string ToString()
                        {
                            var str = new System.Text.StringBuilder($"[MLWebRTCFrame: Version={Version}, TimeStamp={TimeStamp}, Format={Format}\n");
                            str.AppendLine($"\tFrameData:\n\t\t{FrameData}\n]");
                            return str.ToString();
                        }
                    }

                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLWebRTCFramePlanes
                    {
                        public byte PlaneCount;

                        [MarshalAs(UnmanagedType.ByValArray, SizeConst = PlaneInfo.MaxImagePlanes)]
                        public ImagePlaneInfoNative[] ImagePlanes;
                    }

                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLWebRTCNativeFrameInfo
                    {
                        public uint Width;

                        public uint Height;

                        [MarshalAs(UnmanagedType.ByValArray, SizeConst = TransformMatrixLength)]
                        public float[] Transform;

                        public ulong SurfaceHandle;

                        public ulong NativeBufferHandle;

                        public override string ToString()
                        {
                            return $"[MLWebRTCNativeFrameInfo: Width={Width}, Height={Height},\n\t\t\tTransform=({string.Join(',', Transform)}),\n\t\t\tSurfaceHandle={SurfaceHandle}, NativeBufferHandle={NativeBufferHandle}]";
                        }
                    }

                    [StructLayout(LayoutKind.Sequential)]
                    public struct ImagePlaneInfoNative
                    {
                        public uint Width;

                        public uint Height;

                        public uint Stride;

                        public uint BytesPerPixel;

                        public IntPtr ImageDataPtr;

                        public uint Size;

                        public ImagePlaneInfoNative(PlaneInfo planeInfo)
                        {
                            Width = planeInfo.Width;
                            Height = planeInfo.Height;
                            Stride = planeInfo.Stride;
                            BytesPerPixel = planeInfo.BytesPerPixel;
                            ImageDataPtr = planeInfo.DataPtr;
                            Size = planeInfo.Size;
                        }

                        public override string ToString()
                        {
                            return $"[Width={Width}, Height={Height}, Stride={Stride}, BytesPerPixel={BytesPerPixel}, DataPtr={ImageDataPtr}, Size={Size}]";
                        }
                    }
                }
            }
        }
    }
}
```




