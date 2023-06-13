---

title: MLNotificationsNativeBindings.cs

---


# MLNotificationsNativeBindings.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2018-2023) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using UnityEngine.XR.MagicLeap.Native;
namespace UnityEngine.XR.MagicLeap
{
    using System.Runtime.InteropServices;
    public partial class MLNotifications
    {
        private class NativeBindings : Native.MagicLeapNativeBindings
        {

            [DllImport(MLNotificationsManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSystemNotificationManagerCreate(out ulong handle);


            [DllImport(MLNotificationsManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSystemNotificationManagerDestroy(ulong handle);


            [DllImport(MLNotificationsManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSystemNotificationManagerSetNotifications(ulong handle, bool suppress);

        }
    }
}
```




