---

title: MLEyeCalibrationNativeBindings.cs

---


# MLEyeCalibrationNativeBindings.cs









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

    public partial class MLEyeCalibration
    {
        private class NativeBindings : Native.MagicLeapNativeBindings
        {
            [StructLayout(LayoutKind.Sequential)]
            public struct MLEyeCalibrationState
            {
                public uint Version;

                public Status EyeCalibration;

                public long EpochTimestampUs;

                public static MLEyeCalibrationState Create() => new() { Version = 1 };
            };

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLEyeCalibrationCreateClient(out ulong OutHandle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLEyeCalibrationDestroyClient(ulong Handle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLEyeCalibrationGetState(ulong Handle, out MLEyeCalibrationState OutState);
        }
    }
}
```




