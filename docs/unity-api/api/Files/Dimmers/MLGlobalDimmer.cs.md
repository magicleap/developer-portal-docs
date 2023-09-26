---

title: MLGlobalDimmer.cs

---


# MLGlobalDimmer.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2019-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%
#if UNITY_OPENXR_1_7_0_OR_NEWER
using UnityEngine.XR.OpenXR.Features.MagicLeapSupport;
#endif

namespace UnityEngine.XR.MagicLeap
{
    public static partial class MLGlobalDimmer
    {
#if UNITY_OPENXR_1_7_0_OR_NEWER
        public static MLResult.Code SetValue(float dimmerValue, bool enabled)
        {
            float clampedValue = Mathf.Clamp(dimmerValue, 0.0f, 1.0f);
            var dimmerInfoStruct = new NativeBindings.XrGlobalDimmerFrameEndInfoML(clampedValue, enabled);
            
            var resultCode = NativeBindings.MLOpenXRSetGlobalDimmerFrameEndInfoParams(dimmerInfoStruct);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLOpenXRSetGlobalDimmerFrameEndInfoParams));
            
            return resultCode;
        }
#else
        public static MLResult SetValue(float dimmerValue, bool enabled = true)
        {
            float clampedValue = Mathf.Clamp(dimmerValue, 0.0f, 1.0f);
            NativeBindings.UnityMagicLeap_RenderingSetGlobalDimmerValue(clampedValue);
            return MLResult.Create(MLResult.Code.Ok);
        }
#endif
    }
}
```



