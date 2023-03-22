---

title: MLHeadsetFitNativeBindings.cs

---


# MLHeadsetFitNativeBindings.cs









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

    public partial class MLHeadsetFit
    {
        private class NativeBindings : Native.MagicLeapNativeBindings
        {
            [StructLayout(LayoutKind.Sequential)]
            public struct MLHeadsetFitState
            {
                public uint Version;

                public Status FitStatus;

                public long EpochTimestampUs;

                public static MLHeadsetFitState Create() => new() { Version = 1 };
            };

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLHeadsetFitDestroyClient(ulong handle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLHeadsetFitCreateClient(out ulong handle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLHeadsetFitGetState(ulong handle, out MLHeadsetFitState state);
        }
    }
}
```




