---

title: MLDepthCameraData.cs

---


# MLDepthCameraData.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2022 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLDepthCamera
    {
        public sealed class Data
        {
            public long FrameNumber { get; internal set; }

            public MLTime FrameTimestamp { get; internal set; }

            public FrameType FrameType { get; internal set; }

            public Vector3 Position { get; internal set; }

            public Quaternion Rotation { get; internal set; }

            public Intrinsics Intrinsics { get; internal set; }

            public FrameBuffer? DepthImage { get; internal set; }

            public FrameBuffer? ConfidenceBuffer { get; internal set; }

            public FrameBuffer? DepthFlagsBuffer { get; internal set; }

            public FrameBuffer? AmbientRawDepthImage { get; internal set; }

            public FrameBuffer? RawDepthImage { get; internal set; }
        }
    }
}
```



