---

title: MLEyeCameraEnums.cs

---


# MLEyeCameraEnums.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2022-2023 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

namespace UnityEngine.XR.MagicLeap
{
    using System;

    public sealed partial class MLEyeCamera
    {
        [Flags]
        public enum MLEyeCameraIdentifier
        {
            None = 0,

            LeftTemple = 1 << 0,

            LeftNasal = 1 << 1,

            RightNasal = 1 << 2,

            RightTemple = 1 << 3,

            All = LeftTemple | LeftNasal | RightNasal | RightTemple
        }
    }
}
```




