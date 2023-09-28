---
title: ml_headset_fit.h

---

# ml_headset_fit.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLHeadsetFitState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md)** <br></br>Headset fit state.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLHeadsetFitState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md) | **[MLHeadsetFitState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#struct-mlheadsetfitstate)** <br></br>Headset fit state.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLHeadsetFitStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#enums-mlheadsetfitstatus)** <br></br> { <br></br>[MLHeadsetFitStatus_Unknown](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__headset__fit_8h.md#enums-mlheadsetfitstatus-unknown) = 0,<br></br> [MLHeadsetFitStatus_NotWorn](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__headset__fit_8h.md#enums-mlheadsetfitstatus-notworn),<br></br> [MLHeadsetFitStatus_GoodFit](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__headset__fit_8h.md#enums-mlheadsetfitstatus-goodfit),<br></br> [MLHeadsetFitStatus_BadFit](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__headset__fit_8h.md#enums-mlheadsetfitstatus-badfit),<br></br> [MLHeadsetFitStatus_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__headset__fit_8h.md#enums-mlheadsetfitstatus-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Represents the different fit status that the system can report.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLHeadsetFitStateInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#void-mlheadsetfitstateinit)**([MLHeadsetFitState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md) * inout_state)<br></br>Initialize [MLHeadsetFitState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadsetFitCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#mlresult-mlheadsetfitcreateclient)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a headset fit client.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadsetFitDestroyClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#mlresult-mlheadsetfitdestroyclient)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroys headset fit client.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadsetFitGetState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#mlresult-mlheadsetfitgetstate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHeadsetFitState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md) * out_state)<br></br>Gets information about the user's current headset fit.  |

## Enums Documentation

### MLHeadsetFitStatus {#enums-mlheadsetfitstatus}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLHeadsetFitStatus_Unknown |  0| Headset fit status not available for unknown reason. |
| MLHeadsetFitStatus_NotWorn | | Headset not worn. |
| MLHeadsetFitStatus_GoodFit | | Good fit. |
| MLHeadsetFitStatus_BadFit | | Bad fit. |
| MLHeadsetFitStatus_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Represents the different fit status that the system can report. 

If status is neither NotWorn nor Unknown, then headset is being worn.




**API Level:**
  * 20




-----------


## Types Documentation

### MLHeadsetFitState {#struct-mlheadsetfitstate}

```cpp
typedef struct MLHeadsetFitState MLHeadsetFitState;
```

Headset fit state. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md)


**API Level:**
  * 20




-----------


## Functions Documentation

### MLHeadsetFitStateInit {#void-mlheadsetfitstateinit}

```cpp
static inline void MLHeadsetFitStateInit(
    MLHeadsetFitState * inout_state
)
```

Initialize [MLHeadsetFitState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHeadsetFitState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md) * |inout_state|Set up the version for inout_state and zero all other fields. |



**API Level:**
  * 20




-----------

### MLHeadsetFitCreateClient {#mlresult-mlheadsetfitcreateclient}

```cpp
MLResult MLHeadsetFitCreateClient(
    MLHandle * out_handle
)
```

Creates a headset fit client. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an MLHandle to the newly created headset fit client.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to create headset fit client due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created headset fit client. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to create headset fit client due to an unknown failure.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLHeadsetFitDestroyClient {#mlresult-mlheadsetfitdestroyclient}

```cpp
MLResult MLHeadsetFitDestroyClient(
    MLHandle handle
)
```

Destroys headset fit client. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle to the headset fit client created by [MLHeadsetFitCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#mlresult-mlheadsetfitcreateclient).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed headset fit client. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLHandle is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to destroy headset fit client due to an unknown failure.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLHeadsetFitGetState {#mlresult-mlheadsetfitgetstate}

```cpp
MLResult MLHeadsetFitGetState(
    MLHandle handle,
    MLHeadsetFitState * out_state
)
```

Gets information about the user's current headset fit. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the headset fit information created by [MLHeadsetFitCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#mlresult-mlheadsetfitcreateclient). |
| [MLHeadsetFitState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md) * |out_state|Information about headset fit state.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to receive headset fit state due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned headset fit state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to receive headset fit state due to an unknown failure.|
**Required Permissions**:

  * None 





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

#include "ml_api.h"
#include "ml_types.h"

#include <string.h>

ML_EXTERN_C_BEGIN

typedef enum MLHeadsetFitStatus {
  MLHeadsetFitStatus_Unknown = 0,
  MLHeadsetFitStatus_NotWorn,
  MLHeadsetFitStatus_GoodFit,
  MLHeadsetFitStatus_BadFit,
  MLHeadsetFitStatus_Ensure32Bits = 0x7FFFFFFF
} MLHeadsetFitStatus;

typedef struct MLHeadsetFitState {
  uint32_t version;
  MLHeadsetFitStatus fit_status;
  int64_t epoch_timestamp_us;
} MLHeadsetFitState;

ML_STATIC_INLINE void MLHeadsetFitStateInit(MLHeadsetFitState *inout_state) {
  if(inout_state) {
    memset(inout_state, 0, sizeof(MLHeadsetFitState));
    inout_state->version = 1;
  }
}

ML_API MLResult ML_CALL MLHeadsetFitCreateClient(MLHandle *out_handle);

ML_API MLResult ML_CALL MLHeadsetFitDestroyClient(MLHandle handle);

ML_API MLResult ML_CALL MLHeadsetFitGetState(MLHandle handle, MLHeadsetFitState *out_state);

ML_EXTERN_C_END
```




