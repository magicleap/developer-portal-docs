---

title: MLFacialExpression.cs

---


# MLFacialExpression.cs









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
using UnityEngine.XR.MagicLeap.Native;
namespace UnityEngine.XR.MagicLeap
{
    public partial class MLFacialExpression : MLAutoAPISingleton<MLFacialExpression>
    {
        #region StructsAndEnums
        public enum EyeExpressionType
        {
            BlinkLeft = 0,

            BlinkRight,

            LidTightenerLeft,

            LidTightenerRight,

            EyeOpennessLeft,

            EyeOpennessRight,

            CheekRaiserLeft,

            CheekRaiserRight,

            BrowLowererLeft,

            BrowLowererRight,

            BrowRaiserLeft,

            BrowRaiserRight
        }

        public struct Settings
        {
            public bool EnableEyeExpression;
        }

        public struct EyeData
        {
            public MLTime Timestamp;

            public float[] EyeExpressionWeights;
        }
        #endregion

        protected override MLResult.Code StartAPI() => Instance.InternalMLFacialExpressionCreate();

        protected override MLResult.Code StopAPI() => Instance.InternalMLFacialExpressionStop();

        public static MLResult.Code UpdateSettings(in Settings settings) => Instance.InternalUpdateSettings(settings);

        public static MLResult.Code GetEyeData(out EyeData data) => Instance.InternalGetEyeData(out data);
        
        #region InternalMethods
        private MLResult.Code InternalMLFacialExpressionCreate()
        {
            if (!MLResult.DidNativeCallSucceed(MLPermissions.CheckPermission(MLPermission.FacialExpression).Result))
            {
                MLPluginLog.Error($"{nameof(MLFacialExpression)} requires missing permission {MLPermission.FacialExpression}");
                return MLResult.Code.PermissionDenied;
            }

            NativeBindings.MLFacialExpressionSettings settings = NativeBindings.MLFacialExpressionSettings.Init();
            MLResult.Code resultCode = NativeBindings.MLFacialExpressionCreateClient(ref settings, out Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLFacialExpressionCreateClient));

            return resultCode;
        }

        private MLResult.Code InternalMLFacialExpressionStop()
        {
            var resultCode = NativeBindings.MLFacialExpressionDestroyClient(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLFacialExpressionDestroyClient));
            return resultCode;
        }

        private MLResult.Code InternalUpdateSettings(Settings settings)
        {
            NativeBindings.MLFacialExpressionSettings newSettings = NativeBindings.MLFacialExpressionSettings.Init();
            newSettings.EnableEyeExpression = settings.EnableEyeExpression;
            var resultCode = NativeBindings.MLFacialExpressionUpdateSettings(Handle, newSettings);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLFacialExpressionDestroyClient));

            return resultCode;
        }

        private MLResult.Code InternalGetEyeData(out EyeData data)
        {

            data = new();
            NativeBindings.MLFacialExpressionEyeData outData = NativeBindings.MLFacialExpressionEyeData.Init();
            var resultCode = NativeBindings.MLFacialExpressionGetEyeData(Handle, out outData);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLFacialExpressionGetEyeData)))
            {
                data.EyeExpressionWeights = outData.EyeExpressionWeights;
                data.Timestamp = outData.Timestamp;
            }

            return resultCode;
        }
        #endregion
    }
}
```




