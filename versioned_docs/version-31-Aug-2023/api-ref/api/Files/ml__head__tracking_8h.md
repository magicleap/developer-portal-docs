---
title: ml_head_tracking.h

---

# ml_head_tracking.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLHeadTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_static_data.md)**  |
| struct | **[MLHeadTrackingState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md)** <br></br>A structure containing information on the current state of the Head Tracking system.  |
| struct | **[MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md)** <br></br>Structure containing information on the current state of the Head Tracking system. This structure must be initialized by calling [MLHeadTrackingStateExInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#void-mlheadtrackingstateexinit) before use.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLHeadTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_static_data.md) | **[MLHeadTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#struct-mlheadtrackingstaticdata)**  |
| typedef struct [MLHeadTrackingState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md) | **[MLHeadTrackingState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#struct-mlheadtrackingstate)** <br></br>A structure containing information on the current state of the Head Tracking system.  |
| typedef struct [MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) | **[MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#struct-mlheadtrackingstateex)** <br></br>Structure containing information on the current state of the Head Tracking system. This structure must be initialized by calling [MLHeadTrackingStateExInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#void-mlheadtrackingstateexinit) before use.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLHeadTrackingError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerror)** <br></br> { <br></br>[MLHeadTrackingError_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingerror-none),<br></br> [MLHeadTrackingError_NotEnoughFeatures](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingerror-notenoughfeatures),<br></br> [MLHeadTrackingError_LowLight](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingerror-lowlight),<br></br> [MLHeadTrackingError_Unknown](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingerror-unknown),<br></br> [MLHeadTrackingError_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingerror-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible error conditions that can cause Head Tracking to be less than ideal.  |
| enum | **[MLHeadTrackingErrorFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerrorflag)** <br></br> { <br></br>[MLHeadTrackingErrorFlag_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingerrorflag-none) = 0,<br></br> [MLHeadTrackingErrorFlag_Unknown](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingerrorflag-unknown) = 1 << 0,<br></br> [MLHeadTrackingErrorFlag_NotEnoughFeatures](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingerrorflag-notenoughfeatures) = 1 << 1,<br></br> [MLHeadTrackingErrorFlag_LowLight](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingerrorflag-lowlight) = 1 << 2,<br></br> [MLHeadTrackingErrorFlag_ExcessiveMotion](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingerrorflag-excessivemotion) = 1 << 3,<br></br> [MLHeadTrackingErrorFlag_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingerrorflag-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible error conditions that can cause Head Tracking to be less than ideal.  |
| enum | **[MLHeadTrackingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmode)** <br></br> { <br></br>[MLHeadTrackingMode_6DOF](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingmode-6dof) = 0,<br></br> [MLHeadTrackingMode_Unavailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingmode-unavailable) = 1,<br></br> [MLHeadTrackingMode_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingmode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible tracking modes the Head Tracking system can be in.  |
| enum | **[MLHeadTrackingStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingstatus)** <br></br> { <br></br>[MLHeadTrackingStatus_Invalid](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingstatus-invalid) = 0,<br></br> [MLHeadTrackingStatus_Initializing](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingstatus-initializing) = 1,<br></br> [MLHeadTrackingStatus_Relocalizing](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingstatus-relocalizing) = 2,<br></br> [MLHeadTrackingStatus_Valid](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingstatus-valid) = 100,<br></br> [MLHeadTrackingStatus_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingstatus-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible tracking status for the Head Tracking system.  |
| enum | **[MLHeadTrackingMapEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmapevent)** <br></br> { <br></br>[MLHeadTrackingMapEvent_Lost](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingmapevent-lost) = (1 << 0),<br></br> [MLHeadTrackingMapEvent_Recovered](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingmapevent-recovered) = (1 << 1),<br></br> [MLHeadTrackingMapEvent_RecoveryFailed](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingmapevent-recoveryfailed) = (1 << 2),<br></br> [MLHeadTrackingMapEvent_NewSession](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingmapevent-newsession) = (1 << 3),<br></br> [MLHeadTrackingMapEvent_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__head__tracking_8h.md#enums-mlheadtrackingmapevent-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Different types of map events that can occur that a developer may have to handle.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLHeadTrackingStateExInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#void-mlheadtrackingstateexinit)**([MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) * inout_info)<br></br>Initialize default values for a [MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) structure.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadTrackingCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackingcreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a Head Tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadTrackingDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackingdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) head_tracker)<br></br>Destroys a Head Tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadTrackingGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstaticdata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) head_tracker, [MLHeadTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_static_data.md) * out_data)<br></br>Returns static information about the Head Tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadTrackingGetState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) head_tracker, [MLHeadTrackingState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md) * out_state)<br></br>Returns the most recent head tracking state.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadTrackingGetStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstateex)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) head_tracker, [MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) * out_state)<br></br>Returns the most recent head tracking state.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadTrackingGetMapEvents](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetmapevents)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) head_tracker, uint64_t * out_map_events)<br></br>Gets map events.  |

## Enums Documentation

### MLHeadTrackingError {#enums-mlheadtrackingerror}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLHeadTrackingError_None | | No error, tracking is nominal. |
| MLHeadTrackingError_NotEnoughFeatures | | There are not enough features in the environment. |
| MLHeadTrackingError_LowLight | | Lighting in the environment is not sufficient to track accurately. |
| MLHeadTrackingError_Unknown | | Head tracking failed for an unknown reason. |
| MLHeadTrackingError_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



A set of possible error conditions that can cause Head Tracking to be less than ideal. 



:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal. Replaced by MLHeadTrackingErrorFlag. 
:::


**API Level:**
  * 1




-----------

### MLHeadTrackingErrorFlag {#enums-mlheadtrackingerrorflag}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLHeadTrackingErrorFlag_None |  0| No error, tracking is nominal. |
| MLHeadTrackingErrorFlag_Unknown |  1 << 0| Head tracking failed for an unknown reason. |
| MLHeadTrackingErrorFlag_NotEnoughFeatures |  1 << 1| There are not enough features in the environment. |
| MLHeadTrackingErrorFlag_LowLight |  1 << 2| Lighting in the environment is not sufficient to track accurately. |
| MLHeadTrackingErrorFlag_ExcessiveMotion |  1 << 3| Head tracking failed due to excessive motion. |
| MLHeadTrackingErrorFlag_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



A set of possible error conditions that can cause Head Tracking to be less than ideal. 




**API Level:**
  * 26




-----------

### MLHeadTrackingMode {#enums-mlheadtrackingmode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLHeadTrackingMode_6DOF |  0| Full 6 degrees of freedom tracking (position and orientation). |
| MLHeadTrackingMode_Unavailable |  1| Head tracking is unavailable. |
| MLHeadTrackingMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



A set of possible tracking modes the Head Tracking system can be in. 



:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal. Replaced by MLHeadTrackingStatus. 
:::


**API Level:**
  * 1




-----------

### MLHeadTrackingStatus {#enums-mlheadtrackingstatus}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLHeadTrackingStatus_Invalid |  0| Head tracking is unavailable. |
| MLHeadTrackingStatus_Initializing |  1| Head tracking is initializing. |
| MLHeadTrackingStatus_Relocalizing |  2| Head tracking is relocalizing. |
| MLHeadTrackingStatus_Valid |  100| Valid head tracking data is available. |
| MLHeadTrackingStatus_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



A set of possible tracking status for the Head Tracking system. 




**API Level:**
  * 26




-----------

### MLHeadTrackingMapEvent {#enums-mlheadtrackingmapevent}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLHeadTrackingMapEvent_Lost |  (1 << 0)| Map was lost. It could possibly recover. |
| MLHeadTrackingMapEvent_Recovered |  (1 << 1)| Previous map was recovered. |
| MLHeadTrackingMapEvent_RecoveryFailed |  (1 << 2)| Failed to recover previous map. |
| MLHeadTrackingMapEvent_NewSession |  (1 << 3)| New map session created. |
| MLHeadTrackingMapEvent_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Different types of map events that can occur that a developer may have to handle. 




**API Level:**
  * 2




-----------


## Types Documentation

### MLHeadTrackingStaticData {#struct-mlheadtrackingstaticdata}

```cpp
typedef struct MLHeadTrackingStaticData MLHeadTrackingStaticData;
```


Static information about a Head Tracker. Populate this structure with [MLHeadTrackingGetStaticData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstaticdata). 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_static_data.md)



-----------

### MLHeadTrackingState {#struct-mlheadtrackingstate}

```cpp
typedef struct MLHeadTrackingState MLHeadTrackingState;
```

A structure containing information on the current state of the Head Tracking system. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md)

:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal. Replaced by [MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md). 
:::


**API Level:**
  * 1




-----------

### MLHeadTrackingStateEx {#struct-mlheadtrackingstateex}

```cpp
typedef struct MLHeadTrackingStateEx MLHeadTrackingStateEx;
```

Structure containing information on the current state of the Head Tracking system. This structure must be initialized by calling [MLHeadTrackingStateExInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#void-mlheadtrackingstateexinit) before use. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md)


**API Level:**
  * 26




-----------


## Functions Documentation

### MLHeadTrackingStateExInit {#void-mlheadtrackingstateexinit}

```cpp
static inline void MLHeadTrackingStateExInit(
    MLHeadTrackingStateEx * inout_info
)
```

Initialize default values for a [MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) structure. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) * |inout_info|The object to initialize with default values.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLHeadTrackingCreate {#mlresult-mlheadtrackingcreate}

```cpp
MLResult MLHeadTrackingCreate(
    MLHandle * out_handle
)
```

Creates a Head Tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an MLHandle which will contain the handle of the head tracker. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created head tracker. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to create head tracker due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|The application lacks permission.|
**Required Permissions**:

  * None 






-----------

### MLHeadTrackingDestroy {#mlresult-mlheadtrackingdestroy}

```cpp
MLResult MLHeadTrackingDestroy(
    MLHandle head_tracker
)
```

Destroys a Head Tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |head_tracker|A handle to a Head Tracker created by [MLHeadTrackingCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackingcreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed head tracker. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to destroy head tracker due to an unknown error.|
**Required Permissions**:

  * None 






-----------

### MLHeadTrackingGetStaticData {#mlresult-mlheadtrackinggetstaticdata}

```cpp
MLResult MLHeadTrackingGetStaticData(
    MLHandle head_tracker,
    MLHeadTrackingStaticData * out_data
)
```

Returns static information about the Head Tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |head_tracker|A handle to the tracker. |
| [MLHeadTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_static_data.md) * |out_data|Target to populate the data about that Head Tracker.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to receive static data due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully received static data. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to receive static data due to an unknown error.|
**Required Permissions**:

  * None 






-----------

### MLHeadTrackingGetState {#mlresult-mlheadtrackinggetstate}

```cpp
MLResult MLHeadTrackingGetState(
    MLHandle head_tracker,
    MLHeadTrackingState * out_state
)
```

Returns the most recent head tracking state. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |head_tracker|A handle to the tracker. |
| [MLHeadTrackingState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md) * |out_state|Pointer to valid [MLHeadTrackingState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md) object to be filled with current state information.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to return the most recent head tracking state due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the most recent head tracking state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to return the most recent head tracking state due to an unknown error.|
**Required Permissions**:

  * None 




:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal. Replaced by MLHeadTrackingGetStateEx. 
:::



-----------

### MLHeadTrackingGetStateEx {#mlresult-mlheadtrackinggetstateex}

```cpp
MLResult MLHeadTrackingGetStateEx(
    MLHandle head_tracker,
    MLHeadTrackingStateEx * out_state
)
```

Returns the most recent head tracking state. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |head_tracker|A handle to the tracker. |
| [MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) * |out_state|Pointer to valid [MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) object to be filled with current state information.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to return the most recent head tracking state due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the most recent head tracking state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to return the most recent head tracking state due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLHeadTrackingGetMapEvents {#mlresult-mlheadtrackinggetmapevents}

```cpp
MLResult MLHeadTrackingGetMapEvents(
    MLHandle head_tracker,
    uint64_t * out_map_events
)
```

Gets map events. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |head_tracker|A handle to the tracker. |
| uint64_t * |out_map_events|Pointer to a uint64_t representing a bitmask of MLHeadTrackingMapEvent, allocated by the caller.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to get map events due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully got map events. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to get map events due to an unknown error.|
**Required Permissions**:

  * None 


A developer must be aware of certain events that can occur under degenerative conditions in order to cleanly handle it. The most important event to be aware of is when a map changes.

In the case that a new map session begins, or recovery fails, all formerly cached transform and world reconstruction data (planes, mesh) is invalidated and must be updated.




**API Level:**
  * 2




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

#include <string.h>

ML_EXTERN_C_BEGIN

typedef struct MLHeadTrackingStaticData {
  MLCoordinateFrameUID coord_frame_head;
} MLHeadTrackingStaticData;

typedef enum MLHeadTrackingError {
  MLHeadTrackingError_None,
  MLHeadTrackingError_NotEnoughFeatures,
  MLHeadTrackingError_LowLight,
  MLHeadTrackingError_Unknown,
  MLHeadTrackingError_Ensure32Bits = 0x7FFFFFFF
} MLHeadTrackingError;

typedef enum MLHeadTrackingErrorFlag {
  MLHeadTrackingErrorFlag_None = 0,
  MLHeadTrackingErrorFlag_Unknown = 1 << 0,
  MLHeadTrackingErrorFlag_NotEnoughFeatures = 1 << 1,
  MLHeadTrackingErrorFlag_LowLight = 1 << 2,
  MLHeadTrackingErrorFlag_ExcessiveMotion = 1 << 3,
  MLHeadTrackingErrorFlag_Ensure32Bits = 0x7FFFFFFF
} MLHeadTrackingErrorFlag;

typedef enum MLHeadTrackingMode {
  MLHeadTrackingMode_6DOF = 0,
  MLHeadTrackingMode_Unavailable = 1,
  MLHeadTrackingMode_Ensure32Bits = 0x7FFFFFFF
} MLHeadTrackingMode;

typedef enum MLHeadTrackingStatus {
  MLHeadTrackingStatus_Invalid = 0,
  MLHeadTrackingStatus_Initializing = 1,
  MLHeadTrackingStatus_Relocalizing = 2,
  MLHeadTrackingStatus_Valid = 100,
  MLHeadTrackingStatus_Ensure32Bits = 0x7FFFFFFF
} MLHeadTrackingStatus;


typedef struct MLHeadTrackingState {
  MLHeadTrackingMode mode;
  float confidence;
  MLHeadTrackingError error;
} MLHeadTrackingState;

typedef struct MLHeadTrackingStateEx {
  uint32_t version;
  MLHeadTrackingStatus status;
  float confidence;
  uint32_t error;
} MLHeadTrackingStateEx;

ML_STATIC_INLINE void MLHeadTrackingStateExInit(MLHeadTrackingStateEx *inout_info) {
  if (inout_info != NULL) {
    memset(inout_info, 0, sizeof(MLHeadTrackingStateEx));
    inout_info->version = 1;
  }
}

typedef enum MLHeadTrackingMapEvent {
  MLHeadTrackingMapEvent_Lost = (1 << 0),
  MLHeadTrackingMapEvent_Recovered = (1 << 1),
  MLHeadTrackingMapEvent_RecoveryFailed = (1 << 2),
  MLHeadTrackingMapEvent_NewSession = (1 << 3),
  MLHeadTrackingMapEvent_Ensure32Bits = 0x7FFFFFFF
} MLHeadTrackingMapEvent;

ML_API MLResult ML_CALL MLHeadTrackingCreate(MLHandle *out_handle);

ML_API MLResult ML_CALL MLHeadTrackingDestroy(MLHandle head_tracker);

ML_API MLResult ML_CALL MLHeadTrackingGetStaticData(MLHandle head_tracker, MLHeadTrackingStaticData *out_data);

ML_DEPRECATED_MSG("Replaced by MLHeadTrackingGetStateEx.")
ML_API MLResult ML_CALL MLHeadTrackingGetState(MLHandle head_tracker, MLHeadTrackingState *out_state);

ML_API MLResult ML_CALL MLHeadTrackingGetStateEx(MLHandle head_tracker, MLHeadTrackingStateEx *out_state);


ML_API MLResult ML_CALL MLHeadTrackingGetMapEvents(MLHandle head_tracker, uint64_t *out_map_events);

ML_EXTERN_C_END
```




