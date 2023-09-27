---
title: ml_time.h

---

# ml_time.h



## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLTimeConvertMLTimeToSystemTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___time/group___time.md#mlresult-mltimeconvertmltimetosystemtime)**([MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) ml_time, struct timespec * out_timespec_time)<br></br>Converts timestamps from MLTime to system time.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLTimeConvertSystemTimeToMLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___time/group___time.md#mlresult-mltimeconvertsystemtimetomltime)**(const struct timespec * timespec_time, [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) * out_ml_time)<br></br>Converts timestamps from system time to MLTime.  |



## Functions Documentation

### MLTimeConvertMLTimeToSystemTime {#mlresult-mltimeconvertmltimetosystemtime}

```cpp
MLResult MLTimeConvertMLTimeToSystemTime(
    MLTime ml_time,
    struct timespec * out_timespec_time
)
```

Converts timestamps from MLTime to system time. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) |ml_time|Timestamp received from elsewhere in the ML system. |
| struct timespec * |out_timespec_time|Pointer to a converted equivalent timestamp as if received from clock_gettime using CLOCK_MONOTONIC.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully converted timestamp. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NULL passed for timespec_time. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to convert timestamp with unknown error.|
**Required Permissions**:

  * None 


See [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) for more details. System time is equivalent to the systems monotonic clock. This can be used to calculate duration between two MLTime values by converting them both to a timespec and subtracting the subsequent values.




**API Level:**
  * 20




-----------

### MLTimeConvertSystemTimeToMLTime {#mlresult-mltimeconvertsystemtimetomltime}

```cpp
MLResult MLTimeConvertSystemTimeToMLTime(
    const struct timespec * timespec_time,
    MLTime * out_ml_time
)
```

Converts timestamps from system time to MLTime. 

**Parameters**

|  |   |   |
|--|--|--|
| const struct timespec * |timespec_time|System clock timestamp as received from clock_gettime using CLOCK_MONOTONIC. |
| [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) * |out_ml_time|Pointer to system timestamp equivalent in MLTime.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully converted timestamp. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NULL passed for ml_time. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to convert timespec with unknown error.|
**Required Permissions**:

  * None 


See [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) for more details. System time is equivalent to the systems monotonic clock.




**API Level:**
  * 20




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2022 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#include <time.h>
#include "ml_api.h"
#include "ml_types.h"

ML_EXTERN_C_BEGIN

ML_API MLResult ML_CALL MLTimeConvertMLTimeToSystemTime(MLTime ml_time, struct timespec *out_timespec_time);

ML_API MLResult ML_CALL MLTimeConvertSystemTimeToMLTime(const struct timespec *timespec_time, MLTime *out_ml_time);

ML_EXTERN_C_END
```




