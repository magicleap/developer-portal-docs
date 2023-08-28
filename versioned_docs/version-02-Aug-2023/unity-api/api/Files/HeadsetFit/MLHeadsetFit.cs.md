---

title: MLHeadsetFit.cs

---


# MLHeadsetFit.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2022 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLHeadsetFit : MLAutoAPISingleton<MLHeadsetFit>
    {
        public enum Status
        {
            Unknown = 0,

            NotWorn,

            GoodFit,

            BadFit,
        };

        public readonly struct State
        {
            public readonly Status FitStatus;

            public readonly long Timestamp;

            internal State(Status status, long timestamp)
            {
                FitStatus = status;
                Timestamp = timestamp;
            }
        }

        #region MLAutoAPISingleton
        protected override MLResult.Code StartAPI() => Instance.InternalMLHeadsetFitCreateClient();

        protected override MLResult.Code StopAPI() => Instance.InternalMLHeadsetFitDestroyClient();

        protected override void OnApplicationPause(bool pauseStatus)
        {
            base.OnApplicationPause(pauseStatus);
            if (pauseStatus)
            {
                Instance.InternalMLHeadsetFitDestroyClient();
            }
            else
            {
                Instance.InternalMLHeadsetFitCreateClient();
            }
        }
        #endregion

        public static MLResult GetState(out State state) => MLResult.Create(Instance.InternalMLHeadsetFitGetState(out state));

        private MLResult.Code InternalMLHeadsetFitCreateClient()
        {
            var resultCode = NativeBindings.MLHeadsetFitCreateClient(out Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLHeadsetFitCreateClient));
            return resultCode;
        }

        private MLResult.Code InternalMLHeadsetFitDestroyClient()
        {
            var resultCode = NativeBindings.MLHeadsetFitDestroyClient(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLHeadsetFitDestroyClient));
            return resultCode;
        }

        private MLResult.Code InternalMLHeadsetFitGetState(out State state)
        {
            var nativeState = NativeBindings.MLHeadsetFitState.Create();
            var resultCode = NativeBindings.MLHeadsetFitGetState(Handle, out nativeState);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLHeadsetFitGetState));
            state = new State(nativeState.FitStatus, nativeState.EpochTimestampUs);
            return resultCode;
        }
    }
}
```




