---
title: ml_zi_permissions.h

---

# ml_zi_permissions.h



## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIPermissionsStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsstart)**()<br></br>Start the ZI permissions system. This must be called before other permissions calls.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIPermissionsStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsstop)**()<br></br>Stop the ZI permission system. Call to clean up the ZI permission system at application termination.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIPermissionsIsGranted](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsisgranted)**(const char * permission_name)<br></br>Asks if the application has the given permission granted.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIPermissionsRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsrequest)**(const char * permission_name)<br></br>Request the given permission (blocking if pending until user either allows or denies permission). Client code can poll the permission state to see if the permission was granted, denied or still pending.  |



## Functions Documentation

### MLZIPermissionsStart {#mlresult-mlzipermissionsstart}

```cpp
MLResult MLZIPermissionsStart()
```

Start the ZI permissions system. This must be called before other permissions calls. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If query was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|There was an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLZIPermissionsStop {#mlresult-mlzipermissionsstop}

```cpp
MLResult MLZIPermissionsStop()
```

Stop the ZI permission system. Call to clean up the ZI permission system at application termination. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If query was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|There was an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLZIPermissionsIsGranted {#mlresult-mlzipermissionsisgranted}

```cpp
MLResult MLZIPermissionsIsGranted(
    const char * permission_name
)
```

Asks if the application has the given permission granted. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |permission_name|The permission name.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The permission_name parameter is not valid (or null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The permission is granted. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|If permission denied. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If permission request has not been resolved. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|There was an unknown error.|
**Required Permissions**:

  * Any 




**See**: [https://developer.android.com/training/permissions/requesting](https://developer.android.com/training/permissions/requesting)


**API Level:**
  * 20




-----------

### MLZIPermissionsRequest {#mlresult-mlzipermissionsrequest}

```cpp
MLResult MLZIPermissionsRequest(
    const char * permission_name
)
```

Request the given permission (blocking if pending until user either allows or denies permission). Client code can poll the permission state to see if the permission was granted, denied or still pending. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |permission_name|The permission name.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The permission_name parameter is not valid (or null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|There was an unknown error.|
**Required Permissions**:

  * None 




**See**: [https://developer.android.com/training/permissions/requesting](https://developer.android.com/training/permissions/requesting)


**API Level:**
  * 20




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2021 Magic Leap, Inc. All Rights Reserved.
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

ML_EXTERN_C_BEGIN

ML_API MLResult ML_CALL MLZIPermissionsStart();

ML_API MLResult ML_CALL MLZIPermissionsStop();

ML_API MLResult ML_CALL MLZIPermissionsIsGranted(const char *permission_name);

ML_API MLResult ML_CALL MLZIPermissionsRequest(const char *permission_name);

ML_EXTERN_C_END
```




