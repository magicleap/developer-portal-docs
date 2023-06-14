---

title: MLWorldCameraNativeBindings.cs

---


# MLWorldCameraNativeBindings.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// <copyright file="MLWorldCameraNativeBindings.cs" company="Magic Leap, Inc">
//
// Copyright (c) 2018-present, Magic Leap, Inc. All Rights Reserved.
//
// </copyright>
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%


namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;

    public partial class MLWorldCamera
    {
        internal class NativeBindings : Native.MagicLeapNativeBindings
        {
            private const int MaxRadialDistortionCoefficients = 4;
            private const int MaxTangentialDistortionCoefficients = 2;

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLWorldCameraIntrinsics
            {
                public readonly uint Width;

                public readonly uint Height;

                public readonly Vector2 FocalLength;

                public readonly Vector2 PrincipalPoint;

                public readonly float Fov;

                [MarshalAs(UnmanagedType.ByValArray, SizeConst = MaxRadialDistortionCoefficients)]
                public readonly double[] RadialDistortion;

                [MarshalAs(UnmanagedType.ByValArray, SizeConst = MaxTangentialDistortionCoefficients)]
                public readonly double[] TangentialDistortion;

                public override string ToString() => $"Width:{Width}, Height:{Height}, FOV: {Fov}";
            }


            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLWorldCameraSettings
            {
                public MLWorldCameraSettings(in Settings settings)
                {
                    Version = 1;
                    Mode = (uint)settings.Mode;
                    Cameras = (uint)settings.Cameras;
                }

                public readonly uint Version;

                public readonly uint Mode;

                public readonly uint Cameras;

            };

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLWorldCameraFrameBuffer
            {

                public readonly uint Width;

                public readonly uint Height;

                public readonly uint Stride;

                public readonly uint BytesPerPixel;

                public readonly uint Size;

                public readonly IntPtr Data;

                public override string ToString() => $"Width: {Width}, Height: {Height}, Stride: {Stride}, BytesPerPixel: {BytesPerPixel}, Size: {Size}";
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLWorldCameraFrame
            {
                public readonly MLWorldCamera.CameraId Id;

                public readonly long FrameNumber;

                public readonly long TimeStamp;

                public readonly NativeBindings.MLWorldCameraIntrinsics Intrinsics;

                public readonly MLTransform CameraPose;

                public readonly MLWorldCameraFrameBuffer FrameBuffer;

                public readonly Frame.Type FrameType;

                public override string ToString() => $"Id: {Id}, FrameNumber:{FrameNumber}, Intrinsics: {Intrinsics}, FrameBuffer: {FrameBuffer}, FrameType: {FrameType}";
            }


            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLWorldCameraData
            {
                public readonly uint Version;

                public readonly byte FrameCount;

                public readonly IntPtr Frames;

                public MLWorldCameraData(uint version)
                {
                    Version = version;
                    FrameCount = 0;
                    Frames = IntPtr.Zero;
                }
            };

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWorldCameraConnect(in MLWorldCameraSettings settings, out ulong handle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWorldCameraUpdateSettings(ulong handle, in MLWorldCameraSettings settings);


            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWorldCameraGetLatestWorldCameraData(ulong handle, uint timeOutMs, ref IntPtr cameraData);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWorldCameraReleaseCameraData(ulong handle, IntPtr cameraData);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWorldCameraDisconnect(ulong handle);

        }
    }
}
```




