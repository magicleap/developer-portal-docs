---
title: ml_system_notification_manager.h

---

# ml_system_notification_manager.h



## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSystemNotificationManagerCreate](/api-ref/api/Modules/group___system_notification_manager/group___system_notification_manager.md#mlresult-mlsystemnotificationmanagercreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a System Notification Manager handle.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSystemNotificationManagerDestroy](/api-ref/api/Modules/group___system_notification_manager/group___system_notification_manager.md#mlresult-mlsystemnotificationmanagerdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroys a System Notification Manager handle.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSystemNotificationManagerSetNotifications](/api-ref/api/Modules/group___system_notification_manager/group___system_notification_manager.md#mlresult-mlsystemnotificationmanagersetnotifications)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, bool suppress)<br></br>Request suppression/unsuppression of system notifications.  |



## Functions Documentation

### MLSystemNotificationManagerCreate {#mlresult-mlsystemnotificationmanagercreate}

```cpp
MLResult MLSystemNotificationManagerCreate(
    MLHandle * out_handle
)
```

Creates a System Notification Manager handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|The handle to be created.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|System Notification Manager handle was successfully created. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|System Notification Manager handle failed to be created.|
**Required Permissions**:

  * com.magicleap.permission.SYSTEM_NOTIFICATION (protection level: normal) 


Multiple calls to this API method from the same applicaiton will return the same handle. The handle is valid for the lifecycle of the application.




**API Level:**
  * 24




-----------

### MLSystemNotificationManagerDestroy {#mlresult-mlsystemnotificationmanagerdestroy}

```cpp
MLResult MLSystemNotificationManagerDestroy(
    MLHandle handle
)
```

Destroys a System Notification Manager handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|The handle to be destroyed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The handle passed in was not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|System Notification Manager handle was successfully destroyed.|
**Required Permissions**:

  * None 





**API Level:**
  * 24




-----------

### MLSystemNotificationManagerSetNotifications {#mlresult-mlsystemnotificationmanagersetnotifications}

```cpp
MLResult MLSystemNotificationManagerSetNotifications(
    MLHandle handle,
    bool suppress
)
```

Request suppression/unsuppression of system notifications. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to System Notification Manager. |
| bool |suppress|True to suppress all notifications, false to unsuppress all notifications.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IncompatibleSKU|Failed due to feature not being supported on current device version. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The handle passed in was not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|All system notifications were successfully suppressed/unsuppressed. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Suppression/Unsuppression of system notifications failed.|
**Required Permissions**:

  * None 


Requests the system to unsuppress/suppress all notifications. This includes notifications, dialogs and alarms from being displayed. Once suppressed, notifications remain suppressed even if the application requesting suppression loses focus (ie: if the user navigates away from the application).

If the calling app is closed for any reason (ie. closed by user action, voice command, terminal command, or crashed) before notifications were unsuppressed the System Notification Manager will automatically unsuppress all notficiations (unless another application was currently suppressing notifications).




**API Level:**
  * 24




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2023 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#include "ml_api.h"
#include "ml_types.h"

ML_EXTERN_C_BEGIN

ML_API MLResult ML_CALL MLSystemNotificationManagerCreate(MLHandle* out_handle);

ML_API MLResult ML_CALL MLSystemNotificationManagerDestroy(MLHandle handle);

ML_API MLResult ML_CALL MLSystemNotificationManagerSetNotifications(MLHandle handle, bool suppress);

ML_EXTERN_C_END
```



