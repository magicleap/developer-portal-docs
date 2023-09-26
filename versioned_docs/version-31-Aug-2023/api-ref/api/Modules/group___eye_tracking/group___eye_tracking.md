---
title: Eye Tracking
summary: apis for the eye tracking system. 

---

# Eye Tracking

APIs for the Eye Tracking system.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLEyeTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_static_data.md)** <br></br>Static information about the eye tracking.  |
| struct | **[MLEyeTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md)** <br></br>Information about the state of the eye tracking system.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLEyeTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_static_data.md) | **[MLEyeTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#struct-mleyetrackingstaticdata)** <br></br>Static information about the eye tracking.  |
| typedef struct [MLEyeTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md) | **[MLEyeTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#struct-mleyetrackingstateex)** <br></br>Information about the state of the eye tracking system.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLEyeTrackingError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#enums-mleyetrackingerror)** <br></br> { <br></br>[MLEyeTrackingError_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#enums-mleyetrackingerror-none),<br></br> [MLEyeTrackingError_Generic](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#enums-mleyetrackingerror-generic),<br></br> [MLEyeTrackingError_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#enums-mleyetrackingerror-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLEyeTrackingStateInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#void-mleyetrackingstateinit)**([MLEyeTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md) * inout_state)<br></br>Initialize [MLEyeTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md) with version.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLEyeTrackingCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackingcreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates an eye tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLEyeTrackingDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackingdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) eye_tracker)<br></br>Destroys an eye tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLEyeTrackingGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackinggetstaticdata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) eye_tracker, [MLEyeTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_static_data.md) * out_data)<br></br>Gets static information about the eye tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLEyeTrackingGetStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackinggetstateex)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) eye_tracker, [MLEyeTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md) * out_state)<br></br>Gets information about the user's eyes.  |

## Detailed Description

APIs for the Eye Tracking system. 




**Shared Object:**
  * perception.magicleap*




-----------
## Enums Documentation

### MLEyeTrackingError {#enums-mleyetrackingerror}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLEyeTrackingError_None | | No error, tracking is nominal. |
| MLEyeTrackingError_Generic | | Eye Tracker failed. |
| MLEyeTrackingError_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




A set of possible error codes that the Eye Tracking system can report. 





-----------


## Types Documentation

### MLEyeTrackingStaticData {#struct-mleyetrackingstaticdata}

```cpp
typedef struct MLEyeTrackingStaticData MLEyeTrackingStaticData;
```

Static information about the eye tracking. 

Populate with [MLEyeTrackingGetStaticData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackinggetstaticdata).



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_static_data.md)


**API Level:**
  * 20




-----------

### MLEyeTrackingStateEx {#struct-mleyetrackingstateex}

```cpp
typedef struct MLEyeTrackingStateEx MLEyeTrackingStateEx;
```

Information about the state of the eye tracking system. 

This structure must be initialized by calling [MLEyeTrackingStateInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#void-mleyetrackingstateinit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md)


**API Level:**
  * 26




-----------


## Functions Documentation

### MLEyeTrackingStateInit {#void-mleyetrackingstateinit}

```cpp
static inline void MLEyeTrackingStateInit(
    MLEyeTrackingStateEx * inout_state
)
```

Initialize [MLEyeTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLEyeTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md) * |inout_state|Set up the version for inout_state and zero all other fields. |



**API Level:**
  * 26




-----------

### MLEyeTrackingCreate {#mlresult-mleyetrackingcreate}

```cpp
MLResult MLEyeTrackingCreate(
    MLHandle * out_handle
)
```

Creates an eye tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain the handle of the eye tracker. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to create eye tracker due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created eye tracker. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFaiure|Failed to create eye tracker due to an unknown failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|The application lacks permission.|
**Required Permissions**:

  * com.magicleap.permission.EYE_TRACKING (protection level: dangerous) 






-----------

### MLEyeTrackingDestroy {#mlresult-mleyetrackingdestroy}

```cpp
MLResult MLEyeTrackingDestroy(
    MLHandle eye_tracker
)
```

Destroys an eye tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |eye_tracker|A handle to an Eye Tracker created by [MLEyeTrackingCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackingcreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed eye tracker. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFaiure|Failed to destroy eye tracker due to an unknown failure.|
**Required Permissions**:

  * None 






-----------

### MLEyeTrackingGetStaticData {#mlresult-mleyetrackinggetstaticdata}

```cpp
MLResult MLEyeTrackingGetStaticData(
    MLHandle eye_tracker,
    MLEyeTrackingStaticData * out_data
)
```

Gets static information about the eye tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |eye_tracker|A handle to an Eye Tracker created by [MLEyeTrackingCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackingcreate). |
| [MLEyeTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_static_data.md) * |out_data|Target to populate the data about the eye tracker.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The out_data parameter was not valid (null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Eye tracking static data was successfully received. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to receive eye tracking static data.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLEyeTrackingGetStateEx {#mlresult-mleyetrackinggetstateex}

```cpp
MLResult MLEyeTrackingGetStateEx(
    MLHandle eye_tracker,
    MLEyeTrackingStateEx * out_state
)
```

Gets information about the user's eyes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |eye_tracker|A handle to an Eye Tracker created by [MLEyeTrackingCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackingcreate). |
| [MLEyeTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md) * |out_state|Information about the eyes.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to receive eye tracking state due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully received eye tracking state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to receive eye tracking state due to an unknown failure.|
**Required Permissions**:

  * None 


NOTE: To ensure a clean trace of any eye state, it is important to monitor the confidence value of that eye to reject frames where confidence is 0 (or employ another fallback strategy like propagating the last high confidence value).




**API Level:**
  * 9




-----------






