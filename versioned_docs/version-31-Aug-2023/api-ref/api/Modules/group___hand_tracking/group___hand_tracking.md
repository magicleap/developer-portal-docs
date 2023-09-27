---
title: Hand Tracking
summary: apis for the hand tracking system. 

---

# Hand Tracking

APIs for the Hand Tracking system.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLHandTrackingCFUIDs](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_c_f_u_i_ds.md)** <br></br>MLCoordinateFrameUIDs for the keypoints.  |
| struct | **[MLHandTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md)** <br></br>Static information about a hand tracker.  |
| struct | **[MLHandTrackingHandState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_hand_state.md)** <br></br>State of a single hand.  |
| struct | **[MLHandTrackingData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md)** <br></br>Data which is received when querying hand tracker from [MLHandTrackingGetData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetdata).  |
| struct | **[MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md)** <br></br>Settings of the hand tracking system.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLHandTrackingCFUIDs](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_c_f_u_i_ds.md) | **[MLHandTrackingCFUIDs](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#struct-mlhandtrackingcfuids)** <br></br>MLCoordinateFrameUIDs for the keypoints.  |
| typedef struct [MLHandTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) | **[MLHandTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#struct-mlhandtrackingstaticdata)** <br></br>Static information about a hand tracker.  |
| typedef struct [MLHandTrackingHandState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_hand_state.md) | **[MLHandTrackingHandState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#struct-mlhandtrackinghandstate)** <br></br>State of a single hand.  |
| typedef struct [MLHandTrackingData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) | **[MLHandTrackingData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#struct-mlhandtrackingdata)** <br></br>Data which is received when querying hand tracker from [MLHandTrackingGetData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetdata).  |
| typedef struct [MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) | **[MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#struct-mlhandtrackingsettings)** <br></br>Settings of the hand tracking system.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLHandTrackingHandType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackinghandtype)** <br></br> { <br></br>[MLHandTrackingHandType_Left](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackinghandtype-left) = 0,<br></br> [MLHandTrackingHandType_Right](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackinghandtype-right) = 1,<br></br> [MLHandTrackingHandType_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackinghandtype-count) = 2,<br></br> [MLHandTrackingHandType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackinghandtype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[Anonymous Enum 12](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-anonymous-enum-12)** <br></br> { <br></br>[MLHandTrackingStaticData_MaxKeyPoints](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingstaticdata-maxkeypoints) = 28<br></br>} |
| enum | **[MLHandTrackingKeyPoint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint)** <br></br> { <br></br>[MLHandTrackingKeyPoint_Thumb_Tip](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-thumb-tip) = 0,<br></br> [MLHandTrackingKeyPoint_Thumb_IP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-thumb-ip),<br></br> [MLHandTrackingKeyPoint_Thumb_MCP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-thumb-mcp),<br></br> [MLHandTrackingKeyPoint_Thumb_CMC](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-thumb-cmc),<br></br> [MLHandTrackingKeyPoint_Index_Tip](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-index-tip),<br></br> [MLHandTrackingKeyPoint_Index_DIP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-index-dip),<br></br> [MLHandTrackingKeyPoint_Index_PIP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-index-pip),<br></br> [MLHandTrackingKeyPoint_Index_MCP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-index-mcp),<br></br> [MLHandTrackingKeyPoint_Middle_Tip](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-middle-tip),<br></br> [MLHandTrackingKeyPoint_Middle_DIP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-middle-dip),<br></br> [MLHandTrackingKeyPoint_Middle_PIP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-middle-pip),<br></br> [MLHandTrackingKeyPoint_Middle_MCP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-middle-mcp),<br></br> [MLHandTrackingKeyPoint_Ring_Tip](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-ring-tip),<br></br> [MLHandTrackingKeyPoint_Ring_DIP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-ring-dip),<br></br> [MLHandTrackingKeyPoint_Ring_PIP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-ring-pip),<br></br> [MLHandTrackingKeyPoint_Ring_MCP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-ring-mcp),<br></br> [MLHandTrackingKeyPoint_Pinky_Tip](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-pinky-tip),<br></br> [MLHandTrackingKeyPoint_Pinky_DIP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-pinky-dip),<br></br> [MLHandTrackingKeyPoint_Pinky_PIP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-pinky-pip),<br></br> [MLHandTrackingKeyPoint_Pinky_MCP](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-pinky-mcp),<br></br> [MLHandTrackingKeyPoint_Wrist_Center](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-wrist-center),<br></br> [MLHandTrackingKeyPoint_Wrist_Ulnar](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-wrist-ulnar),<br></br> [MLHandTrackingKeyPoint_Wrist_Radial](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-wrist-radial),<br></br> [MLHandTrackingKeyPoint_Hand_Center](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-hand-center),<br></br> [MLHandTrackingKeyPoint_Index_Meta](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-index-meta),<br></br> [MLHandTrackingKeyPoint_Middle_Meta](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-middle-meta),<br></br> [MLHandTrackingKeyPoint_Ring_Meta](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-ring-meta),<br></br> [MLHandTrackingKeyPoint_Pinky_Meta](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-pinky-meta),<br></br> [MLHandTrackingKeyPoint_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-count) = MLHandTrackingStaticData_MaxKeyPoints,<br></br> [MLHandTrackingKeyPoint_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingkeypoint-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Keypoint index ordering.  |
| enum | **[MLHandTrackingSettingsFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingsettingsflags)** <br></br> { <br></br>[MLHandTrackingSettingsFlags_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingsettingsflags-none) = 0,<br></br> [MLHandTrackingSettingsFlags_UnfilteredKeypoints](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingsettingsflags-unfilteredkeypoints) = 1 << 0,<br></br> [MLHandTrackingSettingsFlags_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enums-mlhandtrackingsettingsflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of flags to select settings related to hand tracking.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLHandTrackingStaticDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#void-mlhandtrackingstaticdatainit)**([MLHandTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) * inout_attr)<br></br>Initializes default values for [MLHandTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md).  |
| void | **[MLHandTrackingDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#void-mlhandtrackingdatainit)**([MLHandTrackingData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) * inout_attr)<br></br>Initializes values for [MLHandTrackingData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md).  |
| void | **[MLHandTrackingSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#void-mlhandtrackingsettingsinit)**([MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) * inout_settings)<br></br>Initializes default values for [MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHandTrackingCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a hand tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHandTrackingCreateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreateex)**(const [MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) * settings, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a hand tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHandTrackingUpdateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingupdatesettings)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) hand_tracker, const [MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) * settings)<br></br>Updates settings.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHandTrackingDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) hand_tracker)<br></br>Destroys a hand tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHandTrackingGetData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetdata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) hand_tracker, [MLHandTrackingData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) * out_data)<br></br>Queries the state of the hand tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLHandTrackingGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetstaticdata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) hand_tracker, [MLHandTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) * out_data)<br></br>Gets static information about hand tracking system.  |

## Detailed Description

APIs for the Hand Tracking system. 




**Shared Object:**
  * perception.magicleap*




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

### Anonymous Enum 12 {#enums-anonymous-enum-12}

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

### MLHandTrackingSettingsFlags {#enums-mlhandtrackingsettingsflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLHandTrackingSettingsFlags_None |  0| No additional settings used. |
| MLHandTrackingSettingsFlags_UnfilteredKeypoints |  1 << 0| Enable unfiltered keypoints. See [MLHandTrackingGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetstaticdata) for more details. |
| MLHandTrackingSettingsFlags_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of flags to select settings related to hand tracking. 

Filtered keypoints are always available, no matter the settings.




**API Level:**
  * 28




-----------


## Types Documentation

### MLHandTrackingCFUIDs {#struct-mlhandtrackingcfuids}

```cpp
typedef struct MLHandTrackingCFUIDs MLHandTrackingCFUIDs;
```

MLCoordinateFrameUIDs for the keypoints. 

See [MLHandTrackingKeyPoint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enum-mlhandtrackingkeypoint) for more details.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_c_f_u_i_ds.md)


**API Level:**
  * 20




-----------

### MLHandTrackingStaticData {#struct-mlhandtrackingstaticdata}

```cpp
typedef struct MLHandTrackingStaticData MLHandTrackingStaticData;
```

Static information about a hand tracker. 

This structure must be initialized by calling [MLHandTrackingStaticDataInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#void-mlhandtrackingstaticdatainit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md)


**API Level:**
  * 28




-----------

### MLHandTrackingHandState {#struct-mlhandtrackinghandstate}

```cpp
typedef struct MLHandTrackingHandState MLHandTrackingHandState;
```

State of a single hand. 

Same for both filtered and unfiltered keypoints.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_hand_state.md)


**API Level:**
  * 20




-----------

### MLHandTrackingData {#struct-mlhandtrackingdata}

```cpp
typedef struct MLHandTrackingData MLHandTrackingData;
```

Data which is received when querying hand tracker from [MLHandTrackingGetData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetdata). 

This structure must be initialized by calling [MLHandTrackingDataInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#void-mlhandtrackingdatainit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md)


**API Level:**
  * 20




-----------

### MLHandTrackingSettings {#struct-mlhandtrackingsettings}

```cpp
typedef struct MLHandTrackingSettings MLHandTrackingSettings;
```

Settings of the hand tracking system. 

This structure must be initialized by calling [MLHandTrackingSettingsInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#void-mlhandtrackingsettingsinit).



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md)


**API Level:**
  * 28




-----------


## Functions Documentation

### MLHandTrackingStaticDataInit {#void-mlhandtrackingstaticdatainit}

```cpp
static inline void MLHandTrackingStaticDataInit(
    MLHandTrackingStaticData * inout_attr
)
```

Initializes default values for [MLHandTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) * |inout_attr|The object to initialize with default values. |



**API Level:**
  * 28




-----------

### MLHandTrackingDataInit {#void-mlhandtrackingdatainit}

```cpp
static inline void MLHandTrackingDataInit(
    MLHandTrackingData * inout_attr
)
```

Initializes values for [MLHandTrackingData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandTrackingData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) * |inout_attr|The object to initialize. |



**API Level:**
  * 20




-----------

### MLHandTrackingSettingsInit {#void-mlhandtrackingsettingsinit}

```cpp
static inline void MLHandTrackingSettingsInit(
    MLHandTrackingSettings * inout_settings
)
```

Initializes default values for [MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) * |inout_settings|The object to initialize with default settings. |



**API Level:**
  * 28




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain the handle of the hand tracker. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The tracker was created successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|The application lacks the required permission. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to create the tracker.|
**Required Permissions**:

  * com.magicleap.permission.HAND_TRACKING (protection level: normal) 




:::caution Deprecated
Deprecated since 1.3.0. Scheduled for removal. Replaced by MLHandTrackingCreateEx. 
:::


**API Level:**
  * 20




-----------

### MLHandTrackingCreateEx {#mlresult-mlhandtrackingcreateex}

```cpp
MLResult MLHandTrackingCreateEx(
    const MLHandTrackingSettings * settings,
    MLHandle * out_handle
)
```

Creates a hand tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) * |settings|A pointer to a previously initialized [MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) struct. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain the handle of the hand tracker. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The tracker was created successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|The application lacks the required permission. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to create the tracker.|
**Required Permissions**:

  * com.magicleap.permission.HAND_TRACKING (protection level: normal) 





**API Level:**
  * 28




-----------

### MLHandTrackingUpdateSettings {#mlresult-mlhandtrackingupdatesettings}

```cpp
MLResult MLHandTrackingUpdateSettings(
    MLHandle hand_tracker,
    const MLHandTrackingSettings * settings
)
```

Updates settings. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to a Hand Tracker created by [MLHandTrackingCreateEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreateex). |
| const [MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) * |settings|A pointer to a previously initialized [MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) struct.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The settings were updated successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to update the settings.|
**Required Permissions**:

  * None 





**API Level:**
  * 28




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |hand_tracker|A handle to a Hand Tracker created by [MLHandTrackingCreateEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreateex).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|It successfully destroyed the tracker. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to destroy the tracker.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |hand_tracker|A handle to a Hand Tracker created by [MLHandTrackingCreateEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreateex). |
| [MLHandTrackingData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) * |out_data|Pointer to a variable that receives information about the tracked hands.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The hand information was available and the information in out_data is valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to get the hand information.|
**Required Permissions**:

  * None 


The [MLHandTrackingData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) is the same for both filtered and unfiltered keypoints.




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |hand_tracker|A handle to a Hand Tracker created by [MLHandTrackingCreateEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreateex). |
| [MLHandTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) * |out_data|Pointer to a variable that receives static data about the hand tracker.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The hand information was available and the information in out_data is valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to get the hand information.|
**Required Permissions**:

  * None 


See [MLHandTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) for more details.




**API Level:**
  * 20




-----------






