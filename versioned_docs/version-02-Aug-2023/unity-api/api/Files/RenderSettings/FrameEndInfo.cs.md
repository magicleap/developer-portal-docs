---

title: FrameEndInfo.cs

---


# FrameEndInfo.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2019-2023) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#if UNITY_OPENXR_1_7_0_OR_NEWER
using System;

namespace UnityEngine.XR.MagicLeap
{
    public static partial class MLXrRenderSettings
    {
        [Flags]
        private enum FrameEndInfoFlags : long
        {
            Protected = 1 << 0,
            Vignette = 1 << 1
        }
        
        public static void SetFrameEndInfoParams(float focusDistance, bool vignette = false, bool protectedFrame = false)
        {
            FrameEndInfoFlags flags = (vignette ? FrameEndInfoFlags.Vignette : 0) | (protectedFrame ? FrameEndInfoFlags.Protected : 0);
            var frameEndInfoStruct = new NativeBindings.XrFrameEndInfoML(focusDistance, flags);
            NativeBindings.MLOpenXRSetEndFrameInfoParams(frameEndInfoStruct);
        }
    }
}
#endif
```




