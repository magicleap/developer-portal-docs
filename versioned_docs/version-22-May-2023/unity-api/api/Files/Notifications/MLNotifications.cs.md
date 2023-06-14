---

title: MLNotifications.cs

---


# MLNotifications.cs









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

using UnityEngine.XR.MagicLeap.Native;
namespace UnityEngine.XR.MagicLeap
{
    public partial class MLNotifications : MLAutoAPISingleton<MLNotifications>
    {
        #region MLAutoAPISingleton
        protected override MLResult.Code StartAPI() => Instance.InternalMLNotificationCreateClient();

        protected override MLResult.Code StopAPI() => Instance.InternalMLNotificationStopClient();
        #endregion


        public static MLResult SetNotifications(bool suppress) => MLResult.Create(Instance.InternalMLNotificationsSuppress(suppress));


        #region internal
        private MLResult.Code InternalMLNotificationCreateClient()
        {
            if (!MLResult.DidNativeCallSucceed(MLPermissions.CheckPermission(MLPermission.SystemNotification).Result))
            {
                MLPluginLog.Error($"{nameof(MLNotifications)} requires missing permission {MLPermission.SystemNotification}");
                return MLResult.Code.PermissionDenied;
            }

            var resultCode = NativeBindings.MLSystemNotificationManagerCreate(out Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLSystemNotificationManagerCreate));
            return resultCode;
        }

        private MLResult.Code InternalMLNotificationStopClient()
        {
            var resultCode = NativeBindings.MLSystemNotificationManagerDestroy(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLSystemNotificationManagerDestroy));
            return resultCode;
        }

        private MLResult.Code InternalMLNotificationsSuppress(bool suppress)
        {
            var resultCode = NativeBindings.MLSystemNotificationManagerSetNotifications(Handle, suppress);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLSystemNotificationManagerSetNotifications));
            return resultCode;
        }
        #endregion
    }
}
```




