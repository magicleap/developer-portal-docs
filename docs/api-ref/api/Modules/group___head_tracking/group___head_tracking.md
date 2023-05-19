---
title: Head Tracking
summary: apis for the head tracking system. 

---

# Head Tracking

APIs for the Head Tracking system.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLHeadTrackingStaticData](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_static_data.md)**  |
| struct | **[MLHeadTrackingState](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md)** <br></br>A structure containing information on the current state of the Head Tracking system.  |
| struct | **[MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md)** <br></br>Structure containing information on the current state of the Head Tracking system. This structure must be initialized by calling [MLHeadTrackingStateExInit](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#void-mlheadtrackingstateexinit) before use.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLHeadTrackingStaticData](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_static_data.md) | **[MLHeadTrackingStaticData](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#struct-mlheadtrackingstaticdata)**  |
| typedef struct [MLHeadTrackingState](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md) | **[MLHeadTrackingState](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#struct-mlheadtrackingstate)** <br></br>A structure containing information on the current state of the Head Tracking system.  |
| typedef struct [MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) | **[MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#struct-mlheadtrackingstateex)** <br></br>Structure containing information on the current state of the Head Tracking system. This structure must be initialized by calling [MLHeadTrackingStateExInit](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#void-mlheadtrackingstateexinit) before use.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLHeadTrackingError](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerror)** <br></br> { <br></br>[MLHeadTrackingError_None](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerror-none),<br></br> [MLHeadTrackingError_NotEnoughFeatures](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerror-notenoughfeatures),<br></br> [MLHeadTrackingError_LowLight](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerror-lowlight),<br></br> [MLHeadTrackingError_Unknown](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerror-unknown),<br></br> [MLHeadTrackingError_Ensure32Bits](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerror-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible error conditions that can cause Head Tracking to be less than ideal.  |
| enum | **[MLHeadTrackingErrorFlag](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerrorflag)** <br></br> { <br></br>[MLHeadTrackingErrorFlag_None](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerrorflag-none) = 0,<br></br> [MLHeadTrackingErrorFlag_Unknown](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerrorflag-unknown) = 1 << 0,<br></br> [MLHeadTrackingErrorFlag_NotEnoughFeatures](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerrorflag-notenoughfeatures) = 1 << 1,<br></br> [MLHeadTrackingErrorFlag_LowLight](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerrorflag-lowlight) = 1 << 2,<br></br> [MLHeadTrackingErrorFlag_ExcessiveMotion](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerrorflag-excessivemotion) = 1 << 3,<br></br> [MLHeadTrackingErrorFlag_Ensure32Bits](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerrorflag-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible error conditions that can cause Head Tracking to be less than ideal.  |
| enum | **[MLHeadTrackingMode](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmode)** <br></br> { <br></br>[MLHeadTrackingMode_6DOF](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmode-6dof) = 0,<br></br> [MLHeadTrackingMode_Unavailable](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmode-unavailable) = 1,<br></br> [MLHeadTrackingMode_Ensure32Bits](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible tracking modes the Head Tracking system can be in.  |
| enum | **[MLHeadTrackingStatus](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingstatus)** <br></br> { <br></br>[MLHeadTrackingStatus_Invalid](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingstatus-invalid) = 0,<br></br> [MLHeadTrackingStatus_Initializing](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingstatus-initializing) = 1,<br></br> [MLHeadTrackingStatus_Relocalizing](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingstatus-relocalizing) = 2,<br></br> [MLHeadTrackingStatus_Valid](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingstatus-valid) = 100,<br></br> [MLHeadTrackingStatus_Ensure32Bits](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingstatus-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible tracking status for the Head Tracking system.  |
| enum | **[MLHeadTrackingMapEvent](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmapevent)** <br></br> { <br></br>[MLHeadTrackingMapEvent_Lost](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmapevent-lost) = (1 << 0),<br></br> [MLHeadTrackingMapEvent_Recovered](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmapevent-recovered) = (1 << 1),<br></br> [MLHeadTrackingMapEvent_RecoveryFailed](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmapevent-recoveryfailed) = (1 << 2),<br></br> [MLHeadTrackingMapEvent_NewSession](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmapevent-newsession) = (1 << 3),<br></br> [MLHeadTrackingMapEvent_Ensure32Bits](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmapevent-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Different types of map events that can occur that a developer may have to handle.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLHeadTrackingStateExInit](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#void-mlheadtrackingstateexinit)**([MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) * inout_info)<br></br>Initialize default values for a [MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) structure.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadTrackingCreate](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackingcreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a Head Tracker.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadTrackingDestroy](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackingdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) head_tracker)<br></br>Destroys a Head Tracker.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadTrackingGetStaticData](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstaticdata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) head_tracker, [MLHeadTrackingStaticData](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_static_data.md) * out_data)<br></br>Returns static information about the Head Tracker.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadTrackingGetState](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) head_tracker, [MLHeadTrackingState](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md) * out_state)<br></br>Returns the most recent head tracking state.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadTrackingGetStateEx](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstateex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) head_tracker, [MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) * out_state)<br></br>Returns the most recent head tracking state.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHeadTrackingGetMapEvents](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetmapevents)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) head_tracker, uint64_t * out_map_events)<br></br>Gets map events.  |

## Detailed Description

APIs for the Head Tracking system. 




**Shared Object:**
  * perception.magicleap*




-----------
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


Static information about a Head Tracker. Populate this structure with [MLHeadTrackingGetStaticData()](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstaticdata). 



[More Info](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_static_data.md)



-----------

### MLHeadTrackingState {#struct-mlheadtrackingstate}

```cpp
typedef struct MLHeadTrackingState MLHeadTrackingState;
```

A structure containing information on the current state of the Head Tracking system. 



[More Info](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md)

:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal. Replaced by [MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md). 
:::


**API Level:**
  * 1




-----------

### MLHeadTrackingStateEx {#struct-mlheadtrackingstateex}

```cpp
typedef struct MLHeadTrackingStateEx MLHeadTrackingStateEx;
```

Structure containing information on the current state of the Head Tracking system. This structure must be initialized by calling [MLHeadTrackingStateExInit](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#void-mlheadtrackingstateexinit) before use. 



[More Info](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md)


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

Initialize default values for a [MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) structure. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) * |inout_info|The object to initialize with default values.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an MLHandle which will contain the handle of the head tracker. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created head tracker. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to create head tracker due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|The application lacks permission.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |head_tracker|A handle to a Head Tracker created by [MLHeadTrackingCreate()](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackingcreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed head tracker. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to destroy head tracker due to an unknown error.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |head_tracker|A handle to the tracker. |
| [MLHeadTrackingStaticData](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_static_data.md) * |out_data|Target to populate the data about that Head Tracker.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to receive static data due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully received static data. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to receive static data due to an unknown error.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |head_tracker|A handle to the tracker. |
| [MLHeadTrackingState](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md) * |out_state|Pointer to valid [MLHeadTrackingState](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md) object to be filled with current state information.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to return the most recent head tracking state due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the most recent head tracking state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to return the most recent head tracking state due to an unknown error.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |head_tracker|A handle to the tracker. |
| [MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) * |out_state|Pointer to valid [MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) object to be filled with current state information.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to return the most recent head tracking state due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the most recent head tracking state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to return the most recent head tracking state due to an unknown error.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |head_tracker|A handle to the tracker. |
| uint64_t * |out_map_events|Pointer to a uint64_t representing a bitmask of MLHeadTrackingMapEvent, allocated by the caller.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to get map events due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully got map events. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to get map events due to an unknown error.|
**Required Permissions**:

  * None 


A developer must be aware of certain events that can occur under degenerative conditions in order to cleanly handle it. The most important event to be aware of is when a map changes.

In the case that a new map session begins, or recovery fails, all formerly cached transform and world reconstruction data (planes, mesh) is invalidated and must be updated.




**API Level:**
  * 2




-----------





