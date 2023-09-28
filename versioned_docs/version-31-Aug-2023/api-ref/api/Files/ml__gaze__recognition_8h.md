---
title: ml_gaze_recognition.h

---

# ml_gaze_recognition.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLGazeRecognitionStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md)** <br></br>Static information about the Gaze Recognition system. Populate with [MLGazeRecognitionGetStaticData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata).  |
| struct | **[MLGazeRecognitionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md)** <br></br>Information about the state of the Gaze Recognition system. This structure must be initialized by calling [MLGazeRecognitionStateInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstateinit) before use.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLGazeRecognitionStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) | **[MLGazeRecognitionStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#struct-mlgazerecognitionstaticdata)** <br></br>Static information about the Gaze Recognition system. Populate with [MLGazeRecognitionGetStaticData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata).  |
| typedef struct [MLGazeRecognitionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) | **[MLGazeRecognitionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#struct-mlgazerecognitionstate)** <br></br>Information about the state of the Gaze Recognition system. This structure must be initialized by calling [MLGazeRecognitionStateInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstateinit) before use.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLGazeRecognitionError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionerror)** <br></br> { <br></br>[MLGazeRecognitionError_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gaze__recognition_8h.md#enums-mlgazerecognitionerror-none),<br></br> [MLGazeRecognitionError_Generic](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gaze__recognition_8h.md#enums-mlgazerecognitionerror-generic),<br></br> [MLGazeRecognitionError_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gaze__recognition_8h.md#enums-mlgazerecognitionerror-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible error codes that the Gaze Recognition system can report.  |
| enum | **[MLGazeRecognitionBehavior](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionbehavior)** <br></br> { <br></br>[MLGazeRecognition_Unknown](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gaze__recognition_8h.md#enums-mlgazerecognition-unknown) = 0,<br></br> [MLGazeRecognition_EyesClosed](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gaze__recognition_8h.md#enums-mlgazerecognition-eyesclosed) = 1,<br></br> [MLGazeRecognition_Blink](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gaze__recognition_8h.md#enums-mlgazerecognition-blink) = 2,<br></br> [MLGazeRecognition_Fixation](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gaze__recognition_8h.md#enums-mlgazerecognition-fixation) = 3,<br></br> [MLGazeRecognition_Pursuit](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gaze__recognition_8h.md#enums-mlgazerecognition-pursuit) = 4,<br></br> [MLGazeRecognition_Saccade](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gaze__recognition_8h.md#enums-mlgazerecognition-saccade) = 5,<br></br> [MLGazeRecognition_BlinkLeft](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gaze__recognition_8h.md#enums-mlgazerecognition-blinkleft) = 6,<br></br> [MLGazeRecognition_BlinkRight](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gaze__recognition_8h.md#enums-mlgazerecognition-blinkright) = 7,<br></br> [MLGazeRecognition_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gaze__recognition_8h.md#enums-mlgazerecognition-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of mutually-exclusive behaviors that the Gaze Recognition system can report.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLGazeRecognitionStaticDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstaticdatainit)**([MLGazeRecognitionStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) * inout_state)<br></br>Initialize [MLGazeRecognitionStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) with version.  |
| void | **[MLGazeRecognitionStateInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstateinit)**([MLGazeRecognitionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) * inout_state)<br></br>Initialize [MLGazeRecognitionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) with version.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGazeRecognitionCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitioncreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create Gaze Recognition.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGazeRecognitionDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiondestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroy Gaze Recognition.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGazeRecognitionGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLGazeRecognitionStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) * out_data)<br></br>Get static information about Gaze Recognition.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGazeRecognitionGetState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLGazeRecognitionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) * out_state)<br></br>Get information about the user's gaze.  |

## Enums Documentation

### MLGazeRecognitionError {#enums-mlgazerecognitionerror}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGazeRecognitionError_None | | No error, tracking is nominal. |
| MLGazeRecognitionError_Generic | | Gaze Recognition system failed. |
| MLGazeRecognitionError_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



A set of possible error codes that the Gaze Recognition system can report. 




**API Level:**
  * 20




-----------

### MLGazeRecognitionBehavior {#enums-mlgazerecognitionbehavior}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGazeRecognition_Unknown |  0| Unknown. |
| MLGazeRecognition_EyesClosed |  1| Both eyes closed. |
| MLGazeRecognition_Blink |  2| Blink detected. Both eyes open, close, and open. |
| MLGazeRecognition_Fixation |  3| User is fixating, eye position is stable. |
| MLGazeRecognition_Pursuit |  4| User is pursuing, eye velocity is low but nonzero. |
| MLGazeRecognition_Saccade |  5| User is making a saccade, eye velocity is high. |
| MLGazeRecognition_BlinkLeft |  6| Left eye blink, right eye open. |
| MLGazeRecognition_BlinkRight |  7| Right eye blink, left eye open. |
| MLGazeRecognition_Ensure32Bits |  0x7FFFFFFF| |



A set of mutually-exclusive behaviors that the Gaze Recognition system can report. 




**API Level:**
  * 24




-----------


## Types Documentation

### MLGazeRecognitionStaticData {#struct-mlgazerecognitionstaticdata}

```cpp
typedef struct MLGazeRecognitionStaticData MLGazeRecognitionStaticData;
```

Static information about the Gaze Recognition system. Populate with [MLGazeRecognitionGetStaticData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata). 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md)


**API Level:**
  * 27




-----------

### MLGazeRecognitionState {#struct-mlgazerecognitionstate}

```cpp
typedef struct MLGazeRecognitionState MLGazeRecognitionState;
```

Information about the state of the Gaze Recognition system. This structure must be initialized by calling [MLGazeRecognitionStateInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstateinit) before use. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md)


**API Level:**
  * 20




-----------


## Functions Documentation

### MLGazeRecognitionStaticDataInit {#void-mlgazerecognitionstaticdatainit}

```cpp
static inline void MLGazeRecognitionStaticDataInit(
    MLGazeRecognitionStaticData * inout_state
)
```

Initialize [MLGazeRecognitionStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLGazeRecognitionStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) * |inout_state|Sets up the version for inout_state and nulls pointer for the [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md).|
**Required Permissions**:

  * None 





**API Level:**
  * 27




-----------

### MLGazeRecognitionStateInit {#void-mlgazerecognitionstateinit}

```cpp
static inline void MLGazeRecognitionStateInit(
    MLGazeRecognitionState * inout_state
)
```

Initialize [MLGazeRecognitionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLGazeRecognitionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) * |inout_state|Sets up the version for inout_state and zeros all the fields.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLGazeRecognitionCreate {#mlresult-mlgazerecognitioncreate}

```cpp
MLResult MLGazeRecognitionCreate(
    MLHandle * out_handle
)
```

Create Gaze Recognition. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain a handle to Gaze Recognition. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The out_handle parameter was not valid (null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Gaze Recognition was successfully created. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|The application lacks permission. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFaiure|Gaze Recognition was not created successfully.|
**Required Permissions**:

  * com.magicleap.permission.EYE_TRACKING (protection level: dangerous) 





**API Level:**
  * 20




-----------

### MLGazeRecognitionDestroy {#mlresult-mlgazerecognitiondestroy}

```cpp
MLResult MLGazeRecognitionDestroy(
    MLHandle handle
)
```

Destroy Gaze Recognition. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to Gaze Recognition created by [MLGazeRecognitionCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitioncreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The Gaze Recognition handle was not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The Gaze Recognition was successfully destroyed. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The Gaze Recognition was not successfully destroyed.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLGazeRecognitionGetStaticData {#mlresult-mlgazerecognitiongetstaticdata}

```cpp
MLResult MLGazeRecognitionGetStaticData(
    MLHandle handle,
    MLGazeRecognitionStaticData * out_data
)
```

Get static information about Gaze Recognition. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to Gaze Recognition created by [MLGazeRecognitionCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitioncreate). |
| [MLGazeRecognitionStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) * |out_data|Target to populate the data about Gaze Recognition.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The out_data parameter was not valid (null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Gaze Recognition static data was successfully received. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to receive Gaze Recognition static data.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLGazeRecognitionGetState {#mlresult-mlgazerecognitiongetstate}

```cpp
MLResult MLGazeRecognitionGetState(
    MLHandle handle,
    MLGazeRecognitionState * out_state
)
```

Get information about the user's gaze. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to Gaze Recognition created by [MLGazeRecognitionCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitioncreate). |
| [MLGazeRecognitionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) * |out_state|Information about the gaze.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The out_state parameter was not valid (null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|gaze Recognition state was successfully received. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to receive gaze Recognition state data.|
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
#include "ml_types.h"

ML_EXTERN_C_BEGIN

typedef enum MLGazeRecognitionError {
  MLGazeRecognitionError_None,
  MLGazeRecognitionError_Generic,
  MLGazeRecognitionError_Ensure32Bits = 0x7FFFFFFF
} MLGazeRecognitionError;

typedef enum MLGazeRecognitionBehavior {
  MLGazeRecognition_Unknown = 0,
  MLGazeRecognition_EyesClosed = 1,
  MLGazeRecognition_Blink = 2,
  MLGazeRecognition_Fixation = 3,
  MLGazeRecognition_Pursuit = 4,
  MLGazeRecognition_Saccade = 5,
  MLGazeRecognition_BlinkLeft = 6,
  MLGazeRecognition_BlinkRight = 7,
  MLGazeRecognition_Ensure32Bits = 0x7FFFFFFF
} MLGazeRecognitionBehavior;

typedef struct MLGazeRecognitionStaticData {
  uint32_t version;
  float eye_height_max;
  float eye_width_max;
  MLCoordinateFrameUID vergence;
} MLGazeRecognitionStaticData;

ML_STATIC_INLINE void MLGazeRecognitionStaticDataInit(MLGazeRecognitionStaticData *inout_state) {
  if (inout_state) {
    inout_state->version = 2u;
  }
}

typedef struct MLGazeRecognitionState {
  uint32_t version;
  MLTime timestamp;
  MLGazeRecognitionError error;
  MLGazeRecognitionBehavior behavior;
  MLVec2f eye_left;
  MLVec2f eye_right;
  float onset_s;
  float duration_s;
  float velocity_degps;
  float amplitude_deg;
  float direction_radial;
} MLGazeRecognitionState;

ML_STATIC_INLINE void MLGazeRecognitionStateInit(MLGazeRecognitionState *inout_state) {
  if (inout_state) {
    inout_state->version = 1u;
    inout_state->timestamp = 0;
    inout_state->error = MLGazeRecognitionError_None;
    inout_state->behavior = MLGazeRecognition_Unknown;
    inout_state->eye_left.x = 0.0f;
    inout_state->eye_left.y = 0.0f;
    inout_state->eye_right.x = 0.0f;
    inout_state->eye_right.y = 0.0f;
    inout_state->onset_s = 0.0f;
    inout_state->duration_s = 0.0f;
    inout_state->velocity_degps = 0.0f;
    inout_state->amplitude_deg = 0.0f;
    inout_state->direction_radial = 0.0f;
  }
}

ML_API MLResult ML_CALL MLGazeRecognitionCreate(MLHandle *out_handle);

ML_API MLResult ML_CALL MLGazeRecognitionDestroy(MLHandle handle);

ML_API MLResult ML_CALL MLGazeRecognitionGetStaticData(MLHandle handle,
                                                   MLGazeRecognitionStaticData *out_data);

ML_API MLResult ML_CALL MLGazeRecognitionGetState(MLHandle handle,
                                              MLGazeRecognitionState *out_state);

ML_EXTERN_C_END
```




