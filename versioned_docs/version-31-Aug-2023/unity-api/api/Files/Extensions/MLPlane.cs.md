---

title: MLPlane.cs

---


# MLPlane.cs









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
            internal readonly struct MLPlane
        {
            internal readonly Vector3 position;
            internal readonly Quaternion rotation;
            internal readonly float width;
            internal readonly float height;
            internal readonly MLPlanesQueryFlags flags;
            internal readonly ulong id;
        }
    }

    }
}
```




