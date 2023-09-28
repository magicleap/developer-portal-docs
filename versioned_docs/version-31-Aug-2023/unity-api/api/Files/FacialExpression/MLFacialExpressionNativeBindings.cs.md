---

title: MLFacialExpressionNativeBindings.cs

---


# MLFacialExpressionNativeBindings.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2018-2023) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using UnityEngine.XR.MagicLeap.Native;
namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;
    public partial class MLFacialExpression
    {
        private class NativeBindings : Native.MagicLeapNativeBindings
        {
            const int MLFacialExpressionEyeExpressionTypeCount = 12;

            [StructLayout(LayoutKind.Sequential)]
            public struct MLFacialExpressionSettings
            {
                public uint Version;

                public bool EnableEyeExpression;

                public static MLFacialExpressionSettings Init(uint version = 1)
                {
                    return new MLFacialExpressionSettings
                    {
                        Version = version,
                        EnableEyeExpression = true
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLFacialExpressionEyeData
            {
                public uint Version;

                public long Timestamp;

                [MarshalAs(UnmanagedType.ByValArray, SizeConst = MLFacialExpressionEyeExpressionTypeCount)]
                public float[] EyeExpressionWeights;

                public static MLFacialExpressionEyeData Init(uint version = 1)
                {
                    return new MLFacialExpressionEyeData
                    {
                        Version = version,
                    };
                }
            }

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLFacialExpressionCreateClient(ref MLFacialExpressionSettings settings, out ulong handle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLFacialExpressionUpdateSettings(ulong handle, in MLFacialExpressionSettings settings);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLFacialExpressionGetEyeData(ulong handle, out MLFacialExpressionEyeData eye_data);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLFacialExpressionDestroyClient(ulong handle);
        }
    }
}
```




