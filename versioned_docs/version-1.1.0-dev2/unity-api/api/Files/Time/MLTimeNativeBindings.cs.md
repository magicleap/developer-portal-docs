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
        internal class NativeBindings : MagicLeapNativeBindings
        {
            [StructLayout(LayoutKind.Sequential)]
            public struct TimeSpec
            {
                public long Seconds;

                public long Nanoseconds;
            }

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLTimeConvertSystemTimeToMLTime(IntPtr timeSpec, out long mlTime);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLTimeConvertMLTimeToSystemTime(long mlTime, IntPtr timeSpec);
        }
    }
}
```



