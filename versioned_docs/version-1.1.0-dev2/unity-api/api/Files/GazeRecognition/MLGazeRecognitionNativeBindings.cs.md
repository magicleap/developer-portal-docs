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

                public readonly NativeBindings.MLCoordinateFrameUID Vergence;
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
            };

            [DllImport(MLGazeRecognitionDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLGazeRecognitionCreate(out ulong handle);

            [DllImport(MLGazeRecognitionDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLGazeRecognitionDestroy(ulong handle);

            [DllImport(MLGazeRecognitionDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLGazeRecognitionGetState(ulong handle, out MLGazeRecognitionState state);

            [DllImport(MLGazeRecognitionDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLGazeRecognitionGetStaticData(ulong handle, out MLGazeRecognitionStaticData data);
        }
    }
}
```



