---

title: MLWebRTCAppDefinedSource.cs

---


# MLWebRTCAppDefinedSource.cs









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

    public partial class MLWebRTC
    {
        public abstract partial class AppDefinedSource : MediaStream.Track
        {
            protected GCHandle gcHandle;

            protected abstract void OnSourceDestroy();

            protected abstract void OnSourceSetEnabled(bool enabled);

            public AppDefinedSource(string trackId)
                : base(trackId)
            {}
        }
    }
}
```




