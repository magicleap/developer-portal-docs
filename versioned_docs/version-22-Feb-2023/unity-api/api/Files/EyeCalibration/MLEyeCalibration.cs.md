---

title: MLEyeCalibration.cs

---


# MLEyeCalibration.cs









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
    public partial class MLEyeCalibration : MLAutoAPISingleton<MLEyeCalibration>
    {
        public enum Status
        {
            None,

            Coarse,

            Fine,
        };

        public readonly struct State
        {
            public readonly Status EyeCalibration;

            public readonly long Timestamp;

            internal State(Status status, long timestamp)
            {
                EyeCalibration = status;
                Timestamp = timestamp;
            }
        }

        #region MLAutoAPISingleton
        protected override MLResult.Code StartAPI() => Instance.InternalMLEyeCalibrationCreateClient();

        protected override MLResult.Code StopAPI() => Instance.InternalMLEyeCalibrationDestroyClient();

        protected override void OnApplicationPause(bool pauseStatus)
        {
            base.OnApplicationPause(pauseStatus);
            if (pauseStatus)
            {
                Instance.InternalMLEyeCalibrationDestroyClient();
            }
            else
            {
                Instance.InternalMLEyeCalibrationCreateClient();
            }
        }
        #endregion

        public static MLResult GetState(out State state) => MLResult.Create(Instance.InternalMLEyeCalibrationGetState(out state));

        private MLResult.Code InternalMLEyeCalibrationCreateClient()
        {
            var resultCode = NativeBindings.MLEyeCalibrationCreateClient(out Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLEyeCalibrationCreateClient));
            return resultCode;
        }

        private MLResult.Code InternalMLEyeCalibrationDestroyClient()
        {
            var resultCode = NativeBindings.MLEyeCalibrationDestroyClient(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLEyeCalibrationDestroyClient));
            return resultCode;
        }

        private MLResult.Code InternalMLEyeCalibrationGetState(out State state)
        {
            var nativeState = NativeBindings.MLEyeCalibrationState.Create();
            var resultCode = NativeBindings.MLEyeCalibrationGetState(Handle, out nativeState);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLEyeCalibrationGetState));
            state = new State(nativeState.EyeCalibration, nativeState.EpochTimestampUs);
            return resultCode;
        }
    }
}
```




