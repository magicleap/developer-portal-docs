---

title: MLGazeRecognitionStructs.cs

---


# MLGazeRecognitionStructs.cs









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
    public partial class MLGazeRecognition
    {
        public readonly struct StaticData
        {
            public readonly float EyeHeightMax;

            public readonly float EyeWidthMax;

            public readonly Pose Vergence;

            public StaticData(Pose pose, float eyeHeightMax, float eyeWidthMax)
            {
                this.Vergence = pose;
                this.EyeHeightMax = eyeHeightMax;
                this.EyeWidthMax = eyeWidthMax;
            }
        };

        public readonly struct State
        {
            public readonly MLTime TimeStamp;

            public readonly Error Error;

            public readonly Behavior Behavior;

            public readonly Vector2 EyeLeft;

            public readonly Vector2 EyeRight;

            public readonly float OnsetS;

            public readonly float DurationS;

            public readonly float VelocityDegps;

            public readonly float AmplitudeDeg;

            public readonly float DirectionRadial;

            public override string ToString() => $"Behavior: {Behavior}\nTimeStamp: {TimeStamp}\nAmplitudeDeg: {AmplitudeDeg}\nDirectionRadial: {DirectionRadial}\nDurationS: {DurationS}\nEyeLeft: {EyeLeft}\nEyeRight: {EyeRight}\nOnsetS: {OnsetS}\nVelocityDegps: {VelocityDegps}\n";

            internal State(NativeBindings.MLGazeRecognitionState nativeState)
            {
                this.TimeStamp = nativeState.Timestamp;
                this.Error = nativeState.Error;
                this.Behavior = nativeState.Behavior;
                this.EyeLeft = Native.MLConvert.ToUnity(nativeState.EyeLeft);
                this.EyeRight = Native.MLConvert.ToUnity(nativeState.EyeRight);
                this.OnsetS = nativeState.OnsetS;
                this.DurationS = nativeState.DurationS;
                this.VelocityDegps = nativeState.VelocityDegps;
                this.AmplitudeDeg = nativeState.AmplitudeDeg;
                this.DirectionRadial = nativeState.DirectionRadial;
            }
        }
    }
}
```




