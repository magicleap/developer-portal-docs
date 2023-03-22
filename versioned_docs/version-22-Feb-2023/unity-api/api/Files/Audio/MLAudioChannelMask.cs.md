---

title: MLAudioChannelMask.cs

---


# MLAudioChannelMask.cs









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

using System;

namespace UnityEngine.XR.MagicLeap
{
    public sealed partial class MLAudioOutput
    {
        [Flags]
        public enum ChannelMask
        {
            None = 0,
            FrontLeft = 0x1,
            FrontRight = 0x2,
            FrontCenter = 0x4,
            LowFrequencyEffects = 0x8,
            BackLeft = 0x10,
            BackRight = 0x20,
            FrontLeftOfCenter = 0x40,
            FrontRightOfCenter = 0x80,
            BackCenter = 0x100,
            SideLeft = 0x200,
            SideRight = 0x400,
            TopCenter = 0x800,
            TopFrontLeft = 0x1000,
            TopFrontCenter = 0x2000,
            TopFrontRight = 0x4000,
            TopBackLeft = 0x8000,
            TopBackCenter = 0x10000,
            TopBackRight = 0x20000,
        }

        public enum ChannelLayouts
        {
            None = ChannelMask.None,

            Mono = ChannelMask.FrontLeft,

            Stereo = ChannelMask.FrontLeft | ChannelMask.FrontRight,

            StereoFrontCenter = Stereo | ChannelMask.FrontCenter,

            Quad = ChannelMask.FrontLeft | ChannelMask.FrontRight |
                   ChannelMask.BackLeft | ChannelMask.BackRight,

            QuadFrontCenter = Quad | ChannelMask.FrontCenter,

            Surround = ChannelMask.FrontLeft | ChannelMask.FrontRight | ChannelMask.FrontCenter
                       | ChannelMask.BackCenter,

            FivePointOne = ChannelMask.FrontLeft | ChannelMask.FrontRight | ChannelMask.FrontCenter
                           | ChannelMask.BackLeft | ChannelMask.BackRight
                           | ChannelMask.LowFrequencyEffects,

            FivePointOneBackCenter = FivePointOne | ChannelMask.BackCenter,

            SevenPointOne = FivePointOne | ChannelMask.FrontLeftOfCenter | ChannelMask.FrontRightOfCenter,

            SevenPointOneSurround = FivePointOne | ChannelMask.SideLeft | ChannelMask.SideRight,
        }
    }
}
```




