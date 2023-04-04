---

title: MLPlanesQueryFlags.cs

---


# MLPlanesQueryFlags.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2021-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System;
using UnityEngine.XR.ARSubsystems;

namespace UnityEngine.XR.MagicLeap
{
    public partial class PlanesSubsystem
    {
        public static partial class Extensions
        {
            [Flags]
            public enum MLPlanesQueryFlags : uint
            {
                None = 0,
                Vertical = 1 << 0,
                Horizontal = 1 << 1,
                Arbitrary = 1 << 2,
                AllOrientations = Vertical |
                                   Horizontal |
                                   Arbitrary,
                OrientToGravity = 1 << 3,
                Inner = 1 << 4,
                Semantic_Ceiling = 1 << 6,
                Semantic_Floor = 1 << 7,
                Semantic_Wall = 1 << 8,
                Semantic_All = Semantic_Ceiling |
                                   Semantic_Floor |
                                   Semantic_Wall,
                Polygons = 1 << 9,
            }
        }
    }

    public static class MLPlanesQueryFlagsAndPlaneDetectionModeExtensions
    {
        public static PlaneDetectionMode ToPlaneDetectionMode(this PlanesSubsystem.Extensions.MLPlanesQueryFlags MLPlanesQueryFlags)
        {
            var outDetectionMode = PlaneDetectionMode.None;
            if ((MLPlanesQueryFlags & PlanesSubsystem.Extensions.MLPlanesQueryFlags.Horizontal) != 0)
                outDetectionMode |= PlaneDetectionMode.Horizontal;
            if ((MLPlanesQueryFlags & PlanesSubsystem.Extensions.MLPlanesQueryFlags.Vertical) != 0)
                outDetectionMode |= PlaneDetectionMode.Vertical;
            return outDetectionMode;
        }

        public static PlanesSubsystem.Extensions.MLPlanesQueryFlags ToMLQueryFlags(this PlaneDetectionMode planeDetectionMode)
        {
            var outFlags = PlanesSubsystem.Extensions.MLPlanesQueryFlags.None;
            if ((planeDetectionMode & PlaneDetectionMode.Horizontal) != 0)
                outFlags |= PlanesSubsystem.Extensions.MLPlanesQueryFlags.Horizontal;
            if ((planeDetectionMode & PlaneDetectionMode.Vertical) != 0)
                outFlags |= PlanesSubsystem.Extensions.MLPlanesQueryFlags.Vertical;
            return outFlags;
        }
    }

}
```




