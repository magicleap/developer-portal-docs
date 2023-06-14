---

title: MLWebRTCFrameImagePlane.cs

---


# MLWebRTCFrameImagePlane.cs









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

    public partial class MLWebRTC
    {
        public partial class VideoSink
        {
            public partial struct Frame
            {
                public struct PlaneInfo
                {
                    public const int MaxImagePlanes = 3;

                    public uint Width { get; private set; }

                    public uint Height { get; private set; }

                    public uint Stride { get; private set; }

                    public uint BytesPerPixel { get; private set; }

                    public uint Size { get; private set; }

                    public IntPtr DataPtr { get; private set; }

                    public static PlaneInfo Create(uint width, uint height, uint stride, uint bytesPerPixel, uint size, IntPtr dataPtr)
                    {
                        PlaneInfo imagePlane = new PlaneInfo()
                        {
                            Width = width,
                            Height = height,
                            Stride = stride,
                            BytesPerPixel = bytesPerPixel,
                            Size = size,
                            DataPtr = dataPtr
                        };

                        return imagePlane;
                    }

                    public override string ToString() => $"\nWidth: {this.Width} pixels, \nHeight: {this.Height} pixels, \nBytes Per Pixel:{this.BytesPerPixel} bytes, \nStride: {this.Stride} bytes per row, \nSize: {this.Size} total bytes";
                }

                public struct NativeBufferInfo
                {
                    public uint Width { get; set; }

                    public uint Height { get; set; }

                    public float[] Transform { get; set; }

                    public ulong SurfaceHandle { get; set; }

                    public ulong NativeBufferHandle { get; set; }

                    internal static NativeBufferInfo Create(NativeBindings.MLWebRTCNativeFrameInfo nativeFrameInfo)
                    {
                        NativeBufferInfo nativeBufferInfo = new NativeBufferInfo()
                        {
                            Width = nativeFrameInfo.Width,
                            Height = nativeFrameInfo.Height,
                            Transform = nativeFrameInfo.Transform,
                            SurfaceHandle = nativeFrameInfo.SurfaceHandle,
                            NativeBufferHandle = nativeFrameInfo.NativeBufferHandle
                        };

                        return nativeBufferInfo;
                    }

                    public override string ToString() => $"\nWidth: {this.Width} pixels, \nHeight: {this.Height} pixels, \nSurfaceHandle:{this.SurfaceHandle}, \nNativeBufferHandle: {this.NativeBufferHandle}";
                }
            }
        }
    }
}
```




