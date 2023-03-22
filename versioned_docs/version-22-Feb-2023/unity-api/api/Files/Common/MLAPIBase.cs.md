---

title: MLAPIBase.cs

---


# MLAPIBase.cs









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

    public abstract class MLAPIBase
    {
        protected ulong Handle = Native.MagicLeapNativeBindings.InvalidHandle;

        protected readonly object APILock = new object();

        private bool isStarted = false;

        public MLAPIBase()
        {
            StartInternal();
        }

        ~MLAPIBase()
        {
            StopInternal();
        }

        protected virtual void Update() { }

        protected virtual void OnApplicationPause(bool pauseStatus) { }

        protected virtual void OnApplicationFocus(bool hasFocus) { }

        private void StartInternal()
        {
            MLDevice.RegisterUpdate(Update);
            MLDevice.RegisterApplicationPause(OnApplicationPause);
            MLDevice.RegisterApplicationFocus(OnApplicationFocus);
            MLDevice.RegisterDestroy(StopInternal);
            isStarted = true;
        }

        private void StopInternal()
        {
            if (isStarted)
            {
                MLDevice.UnregisterUpdate(Update);
                MLDevice.UnregisterApplicationPause(OnApplicationPause);
                MLDevice.UnregisterApplicationFocus(OnApplicationFocus);
                MLDevice.UnregisterDestroy(StopInternal);
                isStarted = false;
            }
        }
    }
}
```




