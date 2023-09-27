---
title: ml_platform.h

---

# ml_platform.h



## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPlatformGetAPILevel](/api-ref/api/Modules/group___platform/group___platform.md#mlresult-mlplatformgetapilevel)**(uint32_t * out_api_level)<br></br>Query the OS for which Platform API Level is supported.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ML_PLATFORM_API_LEVEL](/api-ref/api/Modules/group___platform/group___platform.md#defines-ml-platform-api-level)**  |



## Functions Documentation

### MLPlatformGetAPILevel {#mlresult-mlplatformgetapilevel}

```cpp
MLResult MLPlatformGetAPILevel(
    uint32_t * out_api_level
)
```

Query the OS for which Platform API Level is supported. 

**Parameters**

|  |   |   |
|--|--|--|
| uint32_t * |out_api_level|Pointer to an integer that will store the API level.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Operation completed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|out_platform_level was not valid (null). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedError|Operation failed.|
**Required Permissions**:

  * None 






-----------



## Macros Documentation

### ML_PLATFORM_API_LEVEL {#defines-ml-platform-api-level}

```cpp
#define ML_PLATFORM_API_LEVEL 31
```


Current API Level supported by this Magic Leap SDK. 





-----------

## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2017 Magic Leap, Inc. All Rights Reserved.
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

#define ML_PLATFORM_API_LEVEL 31

ML_API MLResult ML_CALL MLPlatformGetAPILevel(uint32_t *out_api_level);

ML_EXTERN_C_END
```



