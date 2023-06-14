---

title: MLEyeCameraStructs.cs

---


# MLEyeCameraStructs.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2022-2023 Magic Leap, Inc. All Rights Reserved.
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
    public sealed partial class MLEyeCamera
    {
        public readonly struct EyeCameraData
        {
            public readonly byte FrameCount;

            public readonly EyeCameraFrame[] Frames;

            internal EyeCameraData(NativeBindings.MLEyeCameraData eyeCameraData)
            {
                FrameCount = eyeCameraData.FrameCount;

                // marshal unmanaged array to struct array
                var size = Marshal.SizeOf(typeof(EyeCameraFrame));
                Frames = new EyeCameraFrame[FrameCount];

                for (int i = 0; i < FrameCount; i++)
                {
                    IntPtr ins = new IntPtr(eyeCameraData.Frames.ToInt64() + i * size);
                    Frames[i] = Marshal.PtrToStructure<EyeCameraFrame>(ins);
                }
            }
        }

        public readonly struct EyeCameraFrameBuffer
        {
            public readonly uint Width;

            public readonly uint Height;

            public readonly uint Stride;

            public readonly uint BytesPerPixel;

            public readonly uint PixelStride;

            public readonly uint Size;

            public readonly IntPtr Data;

            internal EyeCameraFrameBuffer(NativeBindings.MLEyeCameraFrameBuffer eyeCameraFrameBuffer)
            {
                Width = eyeCameraFrameBuffer.Width;
                Height = eyeCameraFrameBuffer.Height;
                Stride = eyeCameraFrameBuffer.Stride;
                BytesPerPixel = eyeCameraFrameBuffer.BytesPerPixel;
                PixelStride = eyeCameraFrameBuffer.PixelStride;
                Size = eyeCameraFrameBuffer.Size;
                Data = eyeCameraFrameBuffer.Data;
            }
        }

        public readonly struct EyeCameraFrame
        {
            public readonly MLEyeCameraIdentifier CameraID;

            public readonly long FrameNumber;

            public readonly long TimeStamp;

            public readonly EyeCameraFrameBuffer FrameBuffer;

            internal EyeCameraFrame(NativeBindings.MLEyeCameraFrame eyeCameraFrame)
            {
                CameraID = eyeCameraFrame.CameraID;
                FrameNumber = eyeCameraFrame.FrameNumber;
                TimeStamp = eyeCameraFrame.TimeStamp;
                FrameBuffer = new EyeCameraFrameBuffer(eyeCameraFrame.FrameBuffer);
            }
        }
    }
}
```



