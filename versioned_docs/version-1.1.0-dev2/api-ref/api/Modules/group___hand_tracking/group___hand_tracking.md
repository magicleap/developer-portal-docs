---
title: Hand Tracking
summary: apis for the hand tracking system. 

---

# Hand Tracking

APIs for the Hand Tracking system.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLHandTrackingCFUIDs](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_c_f_u_i_ds.md)** <br></br>MLCoordinateFrameUIDs for the keypoints.  |
| struct | **[MLHandTrackingStaticData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md)** <br></br>Static information about a hand tracker.  |
| struct | **[MLHandTrackingHandState](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_hand_state.md)** <br></br>State of a single hand.  |
| struct | **[MLHandTrackingData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md)** <br></br>Data which is received when querying hand tracker from [MLHandTrackingGetData()](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetdata).  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLHandTrackingCFUIDs](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_c_f_u_i_ds.md) | **[MLHandTrackingCFUIDs](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#struct--mlhandtrackingcfuids)** <br></br>MLCoordinateFrameUIDs for the keypoints.  |
| typedef struct [MLHandTrackingStaticData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) | **[MLHandTrackingStaticData](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#struct--mlhandtrackingstaticdata)** <br></br>Static information about a hand tracker.  |
| typedef struct [MLHandTrackingHandState](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_hand_state.md) | **[MLHandTrackingHandState](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#struct--mlhandtrackinghandstate)** <br></br>State of a single hand.  |
| typedef struct [MLHandTrackingData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) | **[MLHandTrackingData](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#struct--mlhandtrackingdata)** <br></br>Data which is received when querying hand tracker from [MLHandTrackingGetData()](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetdata).  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLHandTrackingHandType](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackinghandtype)** <br></br> { <br></br>[MLHandTrackingHandType_Left](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackinghandtype-left) = 0,<br></br> [MLHandTrackingHandType_Right](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackinghandtype-right) = 1,<br></br> [MLHandTrackingHandType_Count](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackinghandtype-count) = 2,<br></br> [MLHandTrackingHandType_Ensure32Bits](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackinghandtype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[Anonymous Enum 10](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-anonymous-enum-10)** <br></br> { <br></br>[MLHandTrackingStaticData_MaxKeyPoints](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingstaticdata-maxkeypoints) = 28<br></br>} |
| enum | **[MLHandTrackingKeyPoint](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint)** <br></br> { <br></br>[MLHandTrackingKeyPoint_Thumb_Tip](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-thumb-tip) = 0,<br></br> [MLHandTrackingKeyPoint_Thumb_IP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-thumb-ip),<br></br> [MLHandTrackingKeyPoint_Thumb_MCP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-thumb-mcp),<br></br> [MLHandTrackingKeyPoint_Thumb_CMC](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-thumb-cmc),<br></br> [MLHandTrackingKeyPoint_Index_Tip](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-index-tip),<br></br> [MLHandTrackingKeyPoint_Index_DIP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-index-dip),<br></br> [MLHandTrackingKeyPoint_Index_PIP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-index-pip),<br></br> [MLHandTrackingKeyPoint_Index_MCP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-index-mcp),<br></br> [MLHandTrackingKeyPoint_Middle_Tip](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-middle-tip),<br></br> [MLHandTrackingKeyPoint_Middle_DIP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-middle-dip),<br></br> [MLHandTrackingKeyPoint_Middle_PIP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-middle-pip),<br></br> [MLHandTrackingKeyPoint_Middle_MCP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-middle-mcp),<br></br> [MLHandTrackingKeyPoint_Ring_Tip](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-ring-tip),<br></br> [MLHandTrackingKeyPoint_Ring_DIP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-ring-dip),<br></br> [MLHandTrackingKeyPoint_Ring_PIP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-ring-pip),<br></br> [MLHandTrackingKeyPoint_Ring_MCP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-ring-mcp),<br></br> [MLHandTrackingKeyPoint_Pinky_Tip](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-pinky-tip),<br></br> [MLHandTrackingKeyPoint_Pinky_DIP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-pinky-dip),<br></br> [MLHandTrackingKeyPoint_Pinky_PIP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-pinky-pip),<br></br> [MLHandTrackingKeyPoint_Pinky_MCP](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-pinky-mcp),<br></br> [MLHandTrackingKeyPoint_Wrist_Center](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-wrist-center),<br></br> [MLHandTrackingKeyPoint_Wrist_Ulnar](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-wrist-ulnar),<br></br> [MLHandTrackingKeyPoint_Wrist_Radial](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-wrist-radial),<br></br> [MLHandTrackingKeyPoint_Hand_Center](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-hand-center),<br></br> [MLHandTrackingKeyPoint_Index_Meta](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-index-meta),<br></br> [MLHandTrackingKeyPoint_Middle_Meta](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-middle-meta),<br></br> [MLHandTrackingKeyPoint_Ring_Meta](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-ring-meta),<br></br> [MLHandTrackingKeyPoint_Pinky_Meta](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-pinky-meta),<br></br> [MLHandTrackingKeyPoint_Count](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-count) = MLHandTrackingStaticData_MaxKeyPoints,<br></br> [MLHandTrackingKeyPoint_Ensure32Bits](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Keypoint index ordering.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLHandTrackingStaticDataInit](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#void-mlhandtrackingstaticdatainit)**([MLHandTrackingStaticData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) * inout_attr)<br></br>Initializes default values for [MLHandTrackingStaticData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md).  |
| void | **[MLHandTrackingDataInit](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#void-mlhandtrackingdatainit)**([MLHandTrackingData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) * inout_attr)<br></br>Initializes values for [MLHandTrackingData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHandTrackingCreate](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a hand tracker.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHandTrackingDestroy](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) hand_tracker)<br></br>Destroys a hand tracker.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHandTrackingGetData](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetdata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) hand_tracker, [MLHandTrackingData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) * out_data)<br></br>Queries the state of the hand tracker.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHandTrackingGetStaticData](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetstaticdata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) hand_tracker, [MLHandTrackingStaticData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) * out_data)<br></br>Gets static information about hand tracking system.  |

## Detailed Description

APIs for the Hand Tracking system. 




**Shared Object:**
  * perception.magicleap 




-----------
## Enums Documentation

### MLHandTrackingHandType {#enums-mlhandtrackinghandtype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLHandTrackingHandType_Left |  0| Left hand. |
| MLHandTrackingHandType_Right |  1| Right hand. |
| MLHandTrackingHandType_Count |  2| Number of hands. |
| MLHandTrackingHandType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Available hand types. 





-----------

### Anonymous Enum 10 {#enums-anonymous-enum-10}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLHandTrackingStaticData_MaxKeyPoints |  28| Maximum number of key points per hand. |








-----------

### MLHandTrackingKeyPoint {#enums-mlhandtrackingkeypoint}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLHandTrackingKeyPoint_Thumb_Tip |  0| |
| MLHandTrackingKeyPoint_Thumb_IP | | |
| MLHandTrackingKeyPoint_Thumb_MCP | | |
| MLHandTrackingKeyPoint_Thumb_CMC | | |
| MLHandTrackingKeyPoint_Index_Tip | | |
| MLHandTrackingKeyPoint_Index_DIP | | |
| MLHandTrackingKeyPoint_Index_PIP | | |
| MLHandTrackingKeyPoint_Index_MCP | | |
| MLHandTrackingKeyPoint_Middle_Tip | | |
| MLHandTrackingKeyPoint_Middle_DIP | | |
| MLHandTrackingKeyPoint_Middle_PIP | | |
| MLHandTrackingKeyPoint_Middle_MCP | | |
| MLHandTrackingKeyPoint_Ring_Tip | | |
| MLHandTrackingKeyPoint_Ring_DIP | | |
| MLHandTrackingKeyPoint_Ring_PIP | | |
| MLHandTrackingKeyPoint_Ring_MCP | | |
| MLHandTrackingKeyPoint_Pinky_Tip | | |
| MLHandTrackingKeyPoint_Pinky_DIP | | |
| MLHandTrackingKeyPoint_Pinky_PIP | | |
| MLHandTrackingKeyPoint_Pinky_MCP | | |
| MLHandTrackingKeyPoint_Wrist_Center | | |
| MLHandTrackingKeyPoint_Wrist_Ulnar | | |
| MLHandTrackingKeyPoint_Wrist_Radial | | |
| MLHandTrackingKeyPoint_Hand_Center | | |
| MLHandTrackingKeyPoint_Index_Meta | | |
| MLHandTrackingKeyPoint_Middle_Meta | | |
| MLHandTrackingKeyPoint_Ring_Meta | | |
| MLHandTrackingKeyPoint_Pinky_Meta | | |
| MLHandTrackingKeyPoint_Count |  MLHandTrackingStaticData_MaxKeyPoints| Maximum number of key points per gesture. |
| MLHandTrackingKeyPoint_Ensure32Bits |  0x7FFFFFFF| |



Keypoint index ordering. 

The index ordering of 28 keypoints exposed in array keypoints_mask[MLHandTrackingStaticData_MaxKeyPoints] and left_frame/right_frame[MLHandTrackingStaticData_MaxKeyPoints].




**API Level:**
  * 7 




-----------


## Types Documentation

### MLHandTrackingCFUIDs {#struct--mlhandtrackingcfuids}

```cpp
typedef struct MLHandTrackingCFUIDs  MLHandTrackingCFUIDs;
```

MLCoordinateFrameUIDs for the keypoints. 

See [MLHandTrackingKeyPoint](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enum--mlhandtrackingkeypoint) for more details.



[More Info](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_c_f_u_i_ds.md)


**API Level:**
  * 20 




-----------

### MLHandTrackingStaticData {#struct--mlhandtrackingstaticdata}

```cpp
typedef struct MLHandTrackingStaticData  MLHandTrackingStaticData;
```

Static information about a hand tracker. 

This structure must be initialized by calling [MLHandTrackingStaticDataInit()](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#void-mlhandtrackingstaticdatainit) before use.



[More Info](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md)


**API Level:**
  * 20 




-----------

### MLHandTrackingHandState {#struct--mlhandtrackinghandstate}

```cpp
typedef struct MLHandTrackingHandState  MLHandTrackingHandState;
```

State of a single hand. 



[More Info](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_hand_state.md)


**API Level:**
  * 20 




-----------

### MLHandTrackingData {#struct--mlhandtrackingdata}

```cpp
typedef struct MLHandTrackingData  MLHandTrackingData;
```

Data which is received when querying hand tracker from [MLHandTrackingGetData()](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetdata). 

This structure must be initialized by calling [MLHandTrackingDataInit()](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#void-mlhandtrackingdatainit) before use.



[More Info](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md)


**API Level:**
  * 20 




-----------


## Functions Documentation

### MLHandTrackingStaticDataInit {#void-mlhandtrackingstaticdatainit}

```cpp
static inline void MLHandTrackingStaticDataInit(
    MLHandTrackingStaticData * inout_attr
)
```

Initializes default values for [MLHandTrackingStaticData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandTrackingStaticData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) * |inout_attr|The object to initialize with default values. |



**API Level:**
  * 20




-----------

### MLHandTrackingDataInit {#void-mlhandtrackingdatainit}

```cpp
static inline void MLHandTrackingDataInit(
    MLHandTrackingData * inout_attr
)
```

Initializes values for [MLHandTrackingData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandTrackingData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) * |inout_attr|The object to initialize. |



**API Level:**
  * 20




-----------

### MLHandTrackingCreate {#mlresult-mlhandtrackingcreate}

```cpp
MLResult MLHandTrackingCreate(
    MLHandle * out_handle
)
```

Creates a hand tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain the handle of the hand tracker. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|out_handle is null. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The tracker was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|The application lacks permission. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|It failed to create the tracker.|
**Required Permissions**:

  * com.magicleap.permission.HAND_TRACKING (protection level: normal) 






-----------

### MLHandTrackingDestroy {#mlresult-mlhandtrackingdestroy}

```cpp
MLResult MLHandTrackingDestroy(
    MLHandle hand_tracker
)
```

Destroys a hand tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |hand_tracker|A handle to a Hand Tracker created by [MLHandTrackingCreate()](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|It successfully destroyed the tracker. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|It failed to destroy the tracker.|
**Required Permissions**:

  * None 






-----------

### MLHandTrackingGetData {#mlresult-mlhandtrackinggetdata}

```cpp
MLResult MLHandTrackingGetData(
    MLHandle hand_tracker,
    MLHandTrackingData * out_data
)
```

Queries the state of the hand tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |hand_tracker|A handle to a Hand Tracker created by [MLHandTrackingCreate()](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreate). |
| [MLHandTrackingData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) * |out_data|Pointer to a variable that receives information about the tracked hands.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|out_data is null or out_data->version is not set. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The hand information was available and the information in out_data is valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|It failed to get the hand information.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLHandTrackingGetStaticData {#mlresult-mlhandtrackinggetstaticdata}

```cpp
MLResult MLHandTrackingGetStaticData(
    MLHandle hand_tracker,
    MLHandTrackingStaticData * out_data
)
```

Gets static information about hand tracking system. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |hand_tracker|A handle to a Hand Tracker created by [MLHandTrackingCreate()](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreate). |
| [MLHandTrackingStaticData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) * |out_data|Pointer to a variable that receives static data about the hand tracker.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|out_data is null or out_data->version is not set. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The hand information was available and the information in out_data is valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|It failed to get the hand information.|
**Required Permissions**:

  * None 


See [MLHandTrackingStaticData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) for more details. .




**API Level:**
  * 20




-----------





