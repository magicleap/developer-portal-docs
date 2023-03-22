---

title: MLPlanesQuery.cs

---


# MLPlanesQuery.cs









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

using System.Runtime.InteropServices;

namespace UnityEngine.XR.MagicLeap
{
    public partial class PlanesSubsystem
    {
        public static partial class Extensions
        {
            [StructLayout(LayoutKind.Sequential)]
            internal readonly struct MLPlanesQuery
            {
                internal readonly PlanesSubsystem.Extensions.MLPlanesQueryFlags flags;
                internal readonly Native.MagicLeapNativeBindings.MLVec3f bounds_center;
                internal readonly Native.MagicLeapNativeBindings.MLQuaternionf bounds_rotation;
                internal readonly Native.MagicLeapNativeBindings.MLVec3f bounds_extents;
                internal readonly uint max_results;
                internal readonly float min_plane_area;

                internal MLPlanesQuery(PlanesSubsystem.Extensions.PlanesQuery planesQuery)
                {
                    this.flags = planesQuery.Flags;
                    this.bounds_center = Native.MLConvert.FromUnity(planesQuery.BoundsCenter);
                    this.bounds_rotation = Native.MLConvert.FromUnity(planesQuery.BoundsRotation);
                    this.bounds_extents = Native.MLConvert.FromUnity(planesQuery.BoundsExtents);
                    this.max_results = planesQuery.MaxResults;
                    this.min_plane_area = planesQuery.MinPlaneArea;
                }
            }
        }
    }
}
```




