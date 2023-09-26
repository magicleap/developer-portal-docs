---

title: MLEyeCameraNativeBindings.cs

---


# MLEyeCameraNativeBindings.cs









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

namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;

    public sealed partial class MLEyeCamera
    {
        internal partial class NativeBindings : Native.MagicLeapNativeBindings
        {
            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLEyeCameraSettings
            {
                public readonly uint Version;

                public readonly uint Cameras;

                internal MLEyeCameraSettings(uint version, MLEyeCameraIdentifier cameras)
                {
                    Version = version;
                    Cameras = (uint)cameras;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLEyeCameraFrameBuffer
            {
                public readonly uint Width;

                public readonly uint Height;

                public readonly uint Stride;

                public readonly uint BytesPerPixel;

                public readonly uint PixelStride;

                public readonly uint Size;

                public readonly IntPtr Data;
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLEyeCameraData
            {
                public readonly uint Version;

                public readonly byte FrameCount;

                public readonly IntPtr Frames;

                internal MLEyeCameraData(uint version)
                {
                    Version = version;
                    FrameCount = 0;
                    Frames = IntPtr.Zero;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLEyeCameraFrame
            {
                public readonly MLEyeCameraIdentifier CameraID;

                public readonly long FrameNumber;

                public readonly long TimeStamp;

                public readonly MLEyeCameraFrameBuffer FrameBuffer;
            }

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLEyeCameraConnect(ref MLEyeCameraSettings setting, ref ulong outHandle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLEyeCameraUpdateSettings(ulong handle, ref MLEyeCameraSettings settings);


            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLEyeCameraGetLatestCameraData(ulong handle, UInt64 timeoutMS, ref MLEyeCameraData outData);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLEyeCameraReleaseCameraData(ulong handle, ref MLEyeCameraData eyeCameraData);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLEyeCameraDisconnect(ulong handle);
        }
    }
}
```




