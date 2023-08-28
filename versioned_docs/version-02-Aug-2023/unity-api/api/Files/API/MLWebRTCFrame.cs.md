---

title: MLWebRTCFrame.cs

---


# MLWebRTCFrame.cs









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

using System.Collections.Generic;
using System.Runtime.InteropServices;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLWebRTC
    {
        public partial class VideoSink
        {
            public partial struct Frame
            {
                public enum OutputFormat
                {
                    YUV_420_888,

                    RGBA_8888,

                    NativeBuffer
                }

                public static readonly Dictionary<OutputFormat, byte> NativeImagePlanesLength = new Dictionary<OutputFormat, byte>()
                {
                    { OutputFormat.YUV_420_888, 3 },
                    { OutputFormat.RGBA_8888, 1 },
                    { OutputFormat.NativeBuffer, 0 }
                };

                public ulong Id { get; private set; }

                public ulong TimeStampUs { get; private set; }

                public MLWebRTC.VideoSink.Frame.OutputFormat Format { get; private set; }

                public MLWebRTC.VideoSink.Frame.PlaneInfo[] ImagePlanes { get; private set; }

                public NativeBufferInfo NativeFrame { get; private set; }

                public static Frame Create(ulong id, ulong timeStampUs, PlaneInfo[] imagePlanes, OutputFormat format)
                {
                    Frame frame = new Frame()
                    {
                        Id = id,
                        TimeStampUs = timeStampUs,
                        ImagePlanes = imagePlanes,
                        Format = format
                    };

                    return frame;
                }

                public static Frame Create(ulong id, ulong timeStampUs, NativeBufferInfo nativeBufferInfo)
                {
                    Frame frame = new Frame()
                    {
                        Id = id,
                        TimeStampUs = timeStampUs,
                        NativeFrame = nativeBufferInfo,
                        Format = OutputFormat.NativeBuffer
                    };

                    return frame;
                }

                internal static Frame Create(ulong id, NativeBindings.MLWebRTCFrame nativeFrame, PlaneInfo[] imagePlanes = null)
                {
                    Frame frame = new Frame()
                    {
                        Id = id,
                        TimeStampUs = nativeFrame.TimeStamp,
                        Format = nativeFrame.Format
                    };

                    if (frame.Format == OutputFormat.NativeBuffer)
                    {
                        var frameData = Marshal.PtrToStructure<NativeBindings.MLWebRTCNativeFrameInfo>(nativeFrame.FrameData);
                        frame.NativeFrame = NativeBufferInfo.Create(frameData);
                    }
                    else
                    {
                        var frameData = Marshal.PtrToStructure<NativeBindings.MLWebRTCFramePlanes>(nativeFrame.FrameData);
                        frame.ImagePlanes = (imagePlanes == null) ? new PlaneInfo[frameData.PlaneCount] : imagePlanes;
                        for (ushort i = 0; i < frameData.PlaneCount; ++i)
                        {
                            var src = frameData.ImagePlanes[i];
                            frame.ImagePlanes[i] = PlaneInfo.Create(src.Width, src.Height, src.Stride, src.BytesPerPixel, src.Size, src.ImageDataPtr);
                        }
                    }

                    return frame;
                }

                public override string ToString() => $"\nId: {this.Id}, \nTimeStamp (us): {this.TimeStampUs}, \nFormat: {this.Format}";
            }
        }
    }
}
```




