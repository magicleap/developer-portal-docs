---

title: RenderSettingsNativeBindings.cs

---


# RenderSettingsNativeBindings.cs









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
using System.Runtime.InteropServices;
using UnityEngine.XR.MagicLeap.Native;

namespace UnityEngine.XR.MagicLeap
{
    public static partial class MLXrRenderSettings
    {
        private class NativeBindings : MagicLeapNativeBindings
        {
            public const int XR_TYPE_FRAME_END_INFO_ML = 1000135000;
            
            [StructLayout(LayoutKind.Sequential)]
            public readonly struct XrFrameEndInfoML
            {
                public readonly int Type;
                public readonly IntPtr Next;
                public readonly float FocusDistance;
                public readonly FrameEndInfoFlags Flags;

                public XrFrameEndInfoML(float focusDistance, FrameEndInfoFlags flags)
                {
                    Type = XR_TYPE_FRAME_END_INFO_ML;
                    Next = IntPtr.Zero;
                    FocusDistance = focusDistance;
                    Flags = flags;
                }
            }     

            [DllImport(MagicLeapXrProviderNativeBindings.MagicLeapXrProviderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLOpenXRSetEndFrameInfoParams(XrFrameEndInfoML frameEndInfoMl);   
            
            [DllImport(MagicLeapXrProviderNativeBindings.MagicLeapXrProviderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLOpenXRGetRecommendedClippingPlanes(out float nearClipPlane, out float farClipPlane);
        }
    }
}
#endif
```




