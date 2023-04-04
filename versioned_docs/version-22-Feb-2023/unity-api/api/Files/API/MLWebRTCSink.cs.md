---

title: MLWebRTCSink.cs

---


# MLWebRTCSink.cs









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
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC
    {
        public abstract class Sink
        {
            protected Sink()
            {
            }

            protected Sink(ulong handle)
            {
                this.Handle = handle;
            }

            public MLWebRTC.MediaStream Stream { get; protected set; }

            public MediaStream.Track.Type Type { get; internal set; }

            internal ulong Handle { get; set; }

            public abstract MLResult Destroy();

            protected abstract MLResult SetTrack(MLWebRTC.MediaStream.Track track);

            protected void InvalidateHandle()
            {
                this.Handle = MagicLeapNativeBindings.InvalidHandle;
            }
        }
    }
}
```




