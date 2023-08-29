---

title: MLPowerManagerEnums.cs

---


# MLPowerManagerEnums.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2023 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLPowerManager
    {
        public enum Component
        {
            None,

            Controller
        }

        public enum Error
        {
            InvalidSKU
        }

        public enum PowerState
        {
            None,

            Normal,

            DisabledWhileCharging,

            Standby,

            Sleep
        }

        public enum ChargingState
        {
            NotCharging,

            ChargingNormally
        }

        public enum ConnectionState
        {
            Connected,

            Disconnected
        }

        public enum BatteryInfo
        {
            OK,

            BatteryLow,

            BatteryCritical
        }

        public enum PropertyType
        {
            BatteryInfo,

            BatteryLevel,

            ChargingState,

            ConnectionState
        }
    }
}
```




