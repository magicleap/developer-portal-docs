---

title: MLMediaNativeBindings.cs

---


# MLMediaNativeBindings.cs









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
    using System;
    using System.Runtime.InteropServices;

    public sealed partial class MLMedia
    {
        internal partial class NativeBindings : Native.MagicLeapNativeBindings
        {
            public static string GetResultString(MLResult.Code resultCode)
            {
                IntPtr ptr = NativeBindings.MLMediaResultGetString(resultCode);
                return Marshal.PtrToStringAnsi(ptr);
            }

            [DllImport(MLMediaErrorDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr MLMediaResultGetString(MLResult.Code result);
        }
    }
}
```




