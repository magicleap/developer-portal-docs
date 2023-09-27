---

title: MLPowerManagerStructs.cs

---


# MLPowerManagerStructs.cs









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

using System;
using System.Runtime.InteropServices;
using static UnityEngine.XR.MagicLeap.MLPowerManager;
using static UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLPowerManager
    {
        [StructLayout(LayoutKind.Explicit)]
        public struct ComponentPropertyData
        {
            [FieldOffset(0)]
            public BatteryInfo BatteryInfo;

            [FieldOffset(0)]
            public byte BatteryLevel;

            [FieldOffset(0)]
            public ChargingState ChargingState;

            [FieldOffset(0)]
            public ConnectionState ConnectionState;
        }

        public struct ComponentProperty
        {
            public PropertyType Type;

            public ComponentPropertyData Data;
        }

        public struct PropertyData
        {
            public ComponentProperty[] Properties;
        }

        public struct PropertyTypeData
        {
            public PropertyType[] PropertyTypes;
        }

        public struct Settings
        {
            public PowerState State;
        }

        public struct PowerStateData
        {
            public PowerState[] PowerStates;
        }
    }
}
```




