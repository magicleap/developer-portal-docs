---

title: MLCVCameraNativeBindings.cs

---


# MLCVCameraNativeBindings.cs









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
    using System.Runtime.InteropServices;

    public sealed partial class MLCVCamera
    {
        private partial class NativeBindings : Native.MagicLeapNativeBindings
        {
            public const uint MaxDistortionCoefficients = 5;

            public enum CameraID : uint
            {
                ColorCamera = 0,
            }

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCVCameraTrackingCreate(ref ulong cvCameraHandle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCVCameraTrackingDestroy(ulong cvCameraHandle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCVCameraGetFramePose(ulong cvCameraHandle, ulong headHandle, CameraID id, long vcamTimestamp, ref MLTransform outTransform);
        }
    }
}
```




