---

title: MLSpaceEnums.cs

---


# MLSpaceEnums.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2018-2023) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLSpace
    {
        public enum Type
        {
            OnDevice,

            ARCloud
        }

        public enum Status
        {
            NotLocalized,

            Localized,

            LocalizationPending,

            SleepingBeforeRetry,
        }


    }
}
```



