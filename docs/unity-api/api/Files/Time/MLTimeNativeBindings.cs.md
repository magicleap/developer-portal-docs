---

title: MLTimeNativeBindings.cs

---


# MLTimeNativeBindings.cs









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

using System;
using System.Runtime.InteropServices;
using UnityEngine.XR.MagicLeap.Native;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLTime
    {
        [StructLayout(LayoutKind.Sequential)]
#if UNITY_OPENXR_1_7_0_OR_NEWER
        public struct TimeSpec
#else
        internal struct TimeSpec
#endif
        {
            public long Seconds;

            public long Nanoseconds;
        }
        
        internal class NativeBindings : MagicLeapNativeBindings
        {
#if UNITY_OPENXR_1_7_0_OR_NEWER
            [DllImport(MagicLeapXrProviderNativeBindings.MagicLeapXrProviderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLOpenXRConvertTimespecTimeToXrTime(TimeSpec timespec, out long mlXrTime);

            [DllImport(MagicLeapXrProviderNativeBindings.MagicLeapXrProviderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLOpenXRConvertXrTimeToTimespecTime(long mlXrTime, out TimeSpec timeSpec);
#else
            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLTimeConvertSystemTimeToMLTime(IntPtr timeSpec, out long mlTime);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLTimeConvertMLTimeToSystemTime(long mlTime, IntPtr timeSpec);
#endif
        }
    }
}
```



