---

title: MLPowerManager.cs

---


# MLPowerManager.cs









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
    public partial class MLPowerManager : MLAutoAPISingleton<MLPowerManager>
    {

        protected override MLResult.Code StartAPI() => Instance.InternalCreateManager();

        protected override MLResult.Code StopAPI() => Instance.InternalDestroyManager();

        public static MLResult.Code SetPowerState(Settings settings) => Instance.InternalSetPowerState(settings);

        public static MLResult.Code GetComponentProperties(out PropertyData out_properties) => Instance.InternalGetComponentProperties(out out_properties);

        public static MLResult.Code GetAvailablePowerStates(out PowerStateData data) => Instance.InternalGetAvailablePowerStates(out data);

        public static MLResult.Code GetPowerState(out PowerStateData data) => Instance.InternalGetPowerState(out data);

        public static MLResult.Code GetAvailableProperties(out PropertyTypeData data) => Instance.InternalGetAvailableProperties(out data);



        #region Delegates

        private static event OnErrorOccurredDelegate OnErrorOccurredEvent = delegate { };

        public delegate void OnErrorOccurredDelegate(in Error error);

        private static event OnPowerStateChangedDelegate OnPowerStateChangedEvent = delegate { };

        public delegate void OnPowerStateChangedDelegate(in PowerState state);

        private static event OnPropertiesChangedDelegate OnPropertiesChangedEvent = delegate { };

        public delegate void OnPropertiesChangedDelegate(in PropertyData properties);

        public static event OnErrorOccurredDelegate OnErrorOccurred
        {
            add
            {
                OnErrorOccurredEvent += value;
            }
            remove
            {
                OnErrorOccurredEvent -= value;
            }
        }

        public static event OnPowerStateChangedDelegate OnPowerStateChanged
        {
            add
            {
                OnPowerStateChangedEvent += value;
            }
            remove
            {
                OnPowerStateChangedEvent -= value;
            }
        }

        public static event OnPropertiesChangedDelegate OnPropertiesChanged
        {
            add
            {
                OnPropertiesChangedEvent += value;
            }
            remove
            {
                OnPropertiesChangedEvent -= value;
            }
        }
        #endregion

    }
}
```




