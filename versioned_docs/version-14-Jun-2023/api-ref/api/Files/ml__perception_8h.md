---
title: ml_perception.h

---

# ml_perception.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLPerceptionSettings](/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLPerceptionSettings](/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) | **[MLPerceptionSettings](/api-ref/api/Modules/group___perception/group___perception.md#struct-mlperceptionsettings)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPerceptionInitSettings](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptioninitsettings)**([MLPerceptionSettings](/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) * out_settings)<br></br>Initializes the perception system with the passed in settings.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPerceptionStartup](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionstartup)**([MLPerceptionSettings](/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) * settings)<br></br>Starts the perception system.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPerceptionShutdown](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionshutdown)**()<br></br>Shuts down the perception system and cleans up all resources used by it.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPerceptionGetSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetsnapshot)**([MLSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) ** out_snapshot)<br></br>Pulls in the latest state of all persistent transforms and all enabled trackers extrapolated to the next frame time.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPerceptionGetPredictedSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetpredictedsnapshot)**([MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) timestamp, [MLSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) ** out_snapshot)<br></br>Pulls in the state of all persistent transforms and all enabled trackers extrapolated to the provided timestamp.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPerceptionReleaseSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionreleasesnapshot)**([MLSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) * snap)<br></br>Releases specified `#MLSnapshot` object.  |


## Types Documentation

### MLPerceptionSettings {#struct-mlperceptionsettings}

```cpp
typedef struct MLPerceptionSettings MLPerceptionSettings;
```


Settings for initializing the perception system. 



[More Info](/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md)



-----------


## Functions Documentation

### MLPerceptionInitSettings {#mlresult-mlperceptioninitsettings}

```cpp
MLResult MLPerceptionInitSettings(
    MLPerceptionSettings * out_settings
)
```

Initializes the perception system with the passed in settings. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLPerceptionSettings](/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) * |out_settings|Initializes the perception system with these settings.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to initialize the perception settings due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully initialized the perception settings. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to initialize the perception settings due to an unknown error.|
**Required Permissions**:

  * None 






-----------

### MLPerceptionStartup {#mlresult-mlperceptionstartup}

```cpp
MLResult MLPerceptionStartup(
    MLPerceptionSettings * settings
)
```

Starts the perception system. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLPerceptionSettings](/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) * |settings|The perception system starts with these settings.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully started perception system. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to start perception system due to an unknown failure.|
**Required Permissions**:

  * None 


This function should be called before any perception functions are called.





-----------

### MLPerceptionShutdown {#mlresult-mlperceptionshutdown}

```cpp
MLResult MLPerceptionShutdown()
```

Shuts down the perception system and cleans up all resources used by it. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully shut down the perception system. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to shut down the perception system because of an uknown failure.|
**Required Permissions**:

  * None 


This function should be called prior to exiting the program if a call to `[MLPerceptionStartup()](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionstartup)` was called.





-----------

### MLPerceptionGetSnapshot {#mlresult-mlperceptiongetsnapshot}

```cpp
MLResult MLPerceptionGetSnapshot(
    MLSnapshot ** out_snapshot
)
```

Pulls in the latest state of all persistent transforms and all enabled trackers extrapolated to the next frame time. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) ** |out_snapshot|Pointer to a pointer containing an [MLSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) on success.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created snapshot. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|out_snapshot parameter was not valid (null). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 


Returns a [MLSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) with this latest state. This snap should be used for the duration of the frame being constructed and then released with a call to `[MLPerceptionReleaseSnapshot()](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionreleasesnapshot)`.





-----------

### MLPerceptionGetPredictedSnapshot {#mlresult-mlperceptiongetpredictedsnapshot}

```cpp
MLResult MLPerceptionGetPredictedSnapshot(
    MLTime timestamp,
    MLSnapshot ** out_snapshot
)
```

Pulls in the state of all persistent transforms and all enabled trackers extrapolated to the provided timestamp. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) |timestamp|Timestamp representing the time for which to predict poses. |
| [MLSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) ** |out_snapshot|Pointer to a pointer containing an [MLSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) on success.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created snapshot. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidTimestamp|Timestamp is either more than 100ms in the future or too old for cached state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Output parameter was not valid (null). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 


This timestamp typically comes from out_frame_info.predicted_display_time out parameter from the MLGraphicsBeginFrameEx function.

Returns a [MLSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) with this latest state. This snap should be used for the duration of the frame being constructed and then released with a call to `[MLPerceptionReleaseSnapshot()](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionreleasesnapshot)`.




**API Level:**
  * 27




-----------

### MLPerceptionReleaseSnapshot {#mlresult-mlperceptionreleasesnapshot}

```cpp
MLResult MLPerceptionReleaseSnapshot(
    MLSnapshot * snap
)
```

Releases specified `#MLSnapshot` object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) * |snap|Pointer to a valid snap object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released snapshot. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|snapshot parameter was not valid (null). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 


This function should be called exactly once for each call to `[MLPerceptionGetSnapshot()](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetsnapshot)`.





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
#include "ml_snapshot.h"

ML_EXTERN_C_BEGIN

typedef struct MLPerceptionSettings {
  uint16_t override_port;
} MLPerceptionSettings;

ML_API MLResult ML_CALL MLPerceptionInitSettings(MLPerceptionSettings *out_settings);

ML_API MLResult ML_CALL MLPerceptionStartup(MLPerceptionSettings *settings);

ML_API MLResult ML_CALL MLPerceptionShutdown();

ML_API MLResult ML_CALL MLPerceptionGetSnapshot(MLSnapshot **out_snapshot);

ML_API MLResult ML_CALL MLPerceptionGetPredictedSnapshot(MLTime timestamp, MLSnapshot **out_snapshot);

ML_API MLResult ML_CALL MLPerceptionReleaseSnapshot(MLSnapshot *snap);

ML_EXTERN_C_END
```



