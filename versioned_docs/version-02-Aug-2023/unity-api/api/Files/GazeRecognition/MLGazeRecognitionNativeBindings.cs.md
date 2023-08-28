---

title: MLGazeRecognitionNativeBindings.cs

---


# MLGazeRecognitionNativeBindings.cs









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
    using System.Runtime.InteropServices;

    public partial class MLGazeRecognition
    {
        internal class NativeBindings : Native.MagicLeapNativeBindings
        {
            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLGazeRecognitionStaticData
            {
                public readonly uint Version;

                public readonly float EyeHeightMax;

                public readonly float EyeWidthMax;

                public readonly NativeBindings.MLCoordinateFrameUID Vergence;

                public MLGazeRecognitionStaticData(uint setVersion)
                {
                    Version = setVersion;
                    Vergence = MLCoordinateFrameUID.EmptyFrame;
                    EyeHeightMax = 0;
                    EyeWidthMax = 0;
                }
            };

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLGazeRecognitionState
            {
                public readonly uint Version;

                public readonly long Timestamp;

                public readonly Error Error;

                public readonly Behavior Behavior;

                public readonly MLVec2f EyeLeft;

                public readonly MLVec2f EyeRight;

                public readonly float OnsetS;

                public readonly float DurationS;

                public readonly float VelocityDegps;

                public readonly float AmplitudeDeg;

                public readonly float DirectionRadial;

                public MLGazeRecognitionState(uint setVersion)
                {
                    Version = setVersion;
                    Timestamp = 0;
                    Error = Error.None;
                    Behavior = Behavior.Unknown;
                    EyeLeft.X = 0.0f;
                    EyeLeft.Y = 0.0f;
                    EyeRight.X = 0.0f;
                    EyeRight.Y = 0.0f;
                    OnsetS = 0.0f;
                    DurationS = 0.0f;
                    VelocityDegps = 0.0f;
                    AmplitudeDeg = 0.0f;
                    DirectionRadial = 0.0f;
                }
            };

            [DllImport(MLGazeRecognitionDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLGazeRecognitionCreate(out ulong handle);

            [DllImport(MLGazeRecognitionDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLGazeRecognitionDestroy(ulong handle);

            [DllImport(MLGazeRecognitionDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLGazeRecognitionGetState(ulong handle, ref MLGazeRecognitionState state);

            [DllImport(MLGazeRecognitionDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLGazeRecognitionGetStaticData(ulong handle, ref MLGazeRecognitionStaticData data);
        }
    }
}
```




