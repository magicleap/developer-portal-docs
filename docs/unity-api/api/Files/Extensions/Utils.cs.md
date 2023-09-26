---

title: Utils.cs

---


# Utils.cs









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

using System;
using System.Collections.Generic;

namespace UnityEngine.XR.MagicLeap
{
    public static partial class InputSubsystem
    {
        public static class Utils
        {
            public static InputDevice FindMagicLeapDevice(InputDeviceCharacteristics inputDeviceCharacteristics)
            {
                List<InputDevice> devices = new List<InputDevice>();
                InputDevices.GetDevicesWithCharacteristics(inputDeviceCharacteristics, devices);
                foreach (InputDevice device in devices)
                {
                    if (device.name.Contains("MagicLeap") && device.isValid)
                    {
                        return device;
                    }
                }

                return new InputDevice();
            }

            public static void PredictSnapshot(long timestamp, bool predictSnapshots) => MagicLeapXrProviderNativeBindings.PredictSnapshot(timestamp, predictSnapshots);
            
            public static void ResetSnapshotPrediction() => MagicLeapXrProviderNativeBindings.ResetSnapshotPrediction();
        }
    }
}
```



