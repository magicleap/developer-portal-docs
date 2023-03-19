---

title: TouchpadGesture.cs

---


# TouchpadGesture.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2019-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System.Runtime.InteropServices;
using UnityEngine.XR.MagicLeap.Native;

namespace UnityEngine.XR.MagicLeap
{
    public static partial class InputSubsystem
    {
        public static partial class Extensions
        {
            public static class TouchpadGesture
            {
                public enum State : uint
                {
                    End = 0,

                    Continue,

                    Start
                }

                public enum Type : uint
                {
                    None = 0,

                    Tap,

                    ForceTapDown,

                    ForceTapUp,

                    ForceDwell,

                    SecondForceDown,

                    RadialScroll,

                    Swipe,
                }

                public enum Direction : uint
                {
                    None = 0,

                    Up,

                    Down,

                    Left,

                    Right,

                    Clockwise,

                    CounterClockwise
                }

                public struct Data
                {
                    public Vector3 PositionAndForce;

                    public Type Type;

                    public Direction Direction;

                    public float Speed;

                    public float Distance;

                    public float Radius;

                    public float Angle;

                    public override string ToString() => $"PositionAndForce: {PositionAndForce},  Type: {Type}, Direction: {Direction}, Speed: {Speed}, Distance: {Distance}, Radius: {Radius}, Angle: {Angle}";
                }
            }
        }
    }
}
```




