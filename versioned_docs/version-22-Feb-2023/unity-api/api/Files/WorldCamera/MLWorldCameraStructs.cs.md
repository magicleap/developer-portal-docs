---

title: MLWorldCameraStructs.cs

---


# MLWorldCameraStructs.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// <copyright file="MLWorldCameraStructs.cs" company="Magic Leap, Inc">
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
    using System.Text;
    using Native;
    public partial class MLWorldCamera
    {
        [Serializable]
        public struct Settings
        {
            public Settings(Mode mode, CameraId cameras)
            {
                this.mode = mode;
                this.cameras = cameras;
            }

            public Mode Mode => mode;

            public CameraId Cameras => cameras;

            [SerializeField]
            private Mode mode;

            [SerializeField]
            private CameraId cameras;

            public override string ToString() => $"Mode: {mode}, Cameras: {cameras}";
        }

        public readonly struct Frame
        {
            public enum Type
            {
                Unkown,

                LowExposure,

                NormalExposure,
            };

            internal Frame(NativeBindings.MLWorldCameraFrame nativeFrame)
            {
                CameraId = nativeFrame.Id;
                CameraPose = new Pose(MLConvert.ToUnity(nativeFrame.CameraPose.Position), MLConvert.ToUnity(nativeFrame.CameraPose.Rotation));
                CameraIntrinsics = new CameraIntrinsics(nativeFrame.Intrinsics);
                FrameNumber = nativeFrame.FrameNumber;
                FrameType = nativeFrame.FrameType;
                FrameBuffer = new Buffer(nativeFrame.FrameBuffer);
                MLTime.ConvertSystemTimeToMLTime(nativeFrame.TimeStamp, out TimeStamp);
            }

            public readonly CameraId CameraId;

            public readonly Pose CameraPose;

            public readonly CameraIntrinsics CameraIntrinsics;

            public readonly long FrameNumber;

            public readonly Type FrameType;

            public readonly Buffer FrameBuffer;

            public readonly MLTime TimeStamp;

            public override string ToString() => $"Id: {CameraId}, Pose: {CameraPose}, Intrinsics: {CameraIntrinsics}, FrameBufferInfo: {FrameBuffer}, TimeStamp: {TimeStamp}";

            public readonly struct Buffer
            {
                internal Buffer(NativeBindings.MLWorldCameraFrameBuffer nativeFrameBuffer)
                {
                    Width = nativeFrameBuffer.Width;
                    Height = nativeFrameBuffer.Height;
                    Stride = nativeFrameBuffer.Stride;
                    BytesPerPixel = nativeFrameBuffer.BytesPerPixel;
                    Data = nativeFrameBuffer.Data;
                    DataSize = (int)nativeFrameBuffer.Size;
                }

                public readonly uint Width;

                public readonly uint Height;

                public readonly uint Stride;

                public readonly uint BytesPerPixel;

                public readonly int DataSize;

                public readonly IntPtr Data;

                public override string ToString() => $"Width: {Width}, Height: {Height}, Stride: {Stride}, BytesPerPixel: {BytesPerPixel}, Size: {DataSize}";
            };
        }

        public readonly struct CameraIntrinsics
        {
            internal CameraIntrinsics(in NativeBindings.MLWorldCameraIntrinsics nativeIntrinsics)
            {
                Width = nativeIntrinsics.Width;
                Height = nativeIntrinsics.Height;
                FocalLength = nativeIntrinsics.FocalLength;
                PrincipalPoint = nativeIntrinsics.PrincipalPoint;
                Fov = nativeIntrinsics.Fov;
                RadialDistortion = nativeIntrinsics.RadialDistortion;
                TangentialDistortion = nativeIntrinsics.TangentialDistortion;
            }

            public readonly uint Width;

            public readonly uint Height;

            public readonly Vector2 FocalLength;

            public readonly Vector2 PrincipalPoint;

            public readonly float Fov;

            public readonly double[] RadialDistortion;

            public readonly double[] TangentialDistortion;

            public override string ToString() => $"Width:{Width}, Height:{Height}, FocalLength: {FocalLength}, PrincipalPoint: {PrincipalPoint} , FOV: {Fov}, RadialDistortion: {GetArrayAsString(RadialDistortion)}, TangentialDistortion: {GetArrayAsString(TangentialDistortion)}";

            private string GetArrayAsString(double[] distortions)
            {
                StringBuilder sb = new StringBuilder("[");
                for (int i = 0; i < distortions.Length; ++i)
                {
                    var value = distortions[i];
                    sb.Append($"{value}");
                    if (i < distortions.Length - 1)
                        sb.Append(", ");
                }

                sb.Append("]");

                return sb.ToString();
            }
        }
    }
}
```




