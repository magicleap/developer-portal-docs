---

title: MLEyeCamera.cs

---


# MLEyeCamera.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2022-2023 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System;
using System.Runtime.InteropServices;

namespace UnityEngine.XR.MagicLeap
{
    public sealed partial class MLEyeCamera : MLAutoAPISingleton<MLEyeCamera>
    {
        public const int MaxFrameCount = 4;

        public static MLEyeCameraIdentifier ActiveCameras => (MLEyeCameraIdentifier)Instance.settings.Cameras;

        public static int ActiveCamerasCount
        {
            get
            {
                int count = 0;

                if (ActiveCameras.HasFlag(MLEyeCameraIdentifier.LeftTemple))
                    count++;
                if (ActiveCameras.HasFlag(MLEyeCameraIdentifier.LeftNasal))
                    count++;
                if (ActiveCameras.HasFlag(MLEyeCameraIdentifier.RightNasal))
                    count++;
                if (ActiveCameras.HasFlag(MLEyeCameraIdentifier.RightTemple))
                    count++;

                return count;
            }
        }

        public static void CopyImageFrameDataToByteArray(EyeCameraFrameBuffer imageFrame, ref byte[] byteArray) => Marshal.Copy(imageFrame.Data, byteArray, 0, byteArray.Length);

        public static MLResult GetLatestCameraData(out EyeCameraData outData, UInt64 timeoutMS) => Instance.InternalMLEyeCameraGetLatestCameraData(out outData, timeoutMS);

        public static MLResult UpdateSettings(MLEyeCameraIdentifier cameras) => Instance.InternalMLEyeCameraUpdateSettings(cameras);
    }
}
```




