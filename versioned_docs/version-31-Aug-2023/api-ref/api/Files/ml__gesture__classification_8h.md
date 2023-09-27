---
title: ml_gesture_classification.h

---

# ml_gesture_classification.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLGestureClassificationStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md)** <br></br>Static information about the gesture classification.  |
| struct | **[MLGestureClassificationPostureFingerData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_posture_finger_data.md)** <br></br>Gesture classification posture related finger data.  |
| struct | **[MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md)** <br></br>Gesture classification state of a single finger.  |
| struct | **[MLGestureClassificationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md)** <br></br>Gesture classification state of a single hand.  |
| struct | **[MLGestureClassificationData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md)** <br></br>Data which is received when querying tracker from [MLGestureClassificationGetData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetdata).  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLGestureClassificationStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md) | **[MLGestureClassificationStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#struct-mlgestureclassificationstaticdata)** <br></br>Static information about the gesture classification.  |
| typedef struct [MLGestureClassificationPostureFingerData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_posture_finger_data.md) | **[MLGestureClassificationPostureFingerData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#struct-mlgestureclassificationposturefingerdata)** <br></br>Gesture classification posture related finger data.  |
| typedef struct [MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | **[MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#struct-mlgestureclassificationfingerstate)** <br></br>Gesture classification state of a single finger.  |
| typedef struct [MLGestureClassificationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md) | **[MLGestureClassificationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#struct-mlgestureclassificationstate)** <br></br>Gesture classification state of a single hand.  |
| typedef struct [MLGestureClassificationData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md) | **[MLGestureClassificationData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#struct-mlgestureclassificationdata)** <br></br>Data which is received when querying tracker from [MLGestureClassificationGetData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetdata).  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLGestureClassificationHandType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#enums-mlgestureclassificationhandtype)** <br></br> { <br></br>[MLGestureClassificationHandType_Left](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationhandtype-left) = 0,<br></br> [MLGestureClassificationHandType_Right](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationhandtype-right) = 1,<br></br> [MLGestureClassificationHandType_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationhandtype-count) = 2,<br></br> [MLGestureClassificationHandType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationhandtype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLGestureClassificationPostureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#enums-mlgestureclassificationposturetype)** <br></br> { <br></br>[MLGestureClassificationPostureType_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationposturetype-none) = 0,<br></br> [MLGestureClassificationPostureType_Pinch](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationposturetype-pinch) = 1,<br></br> [MLGestureClassificationPostureType_Point](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationposturetype-point) = 2,<br></br> [MLGestureClassificationPostureType_Grasp](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationposturetype-grasp) = 3,<br></br> [MLGestureClassificationPostureType_Open](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationposturetype-open) = 4,<br></br> [MLGestureClassificationPostureType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationposturetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>System gesture classification posture type.  |
| enum | **[MLGestureClassificationKeyPoseType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#enums-mlgestureclassificationkeyposetype)** <br></br> { <br></br>[MLGestureClassificationKeyPoseType_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationkeyposetype-none) = 0,<br></br> [MLGestureClassificationKeyPoseType_OK](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationkeyposetype-ok) = 1,<br></br> [MLGestureClassificationKeyPoseType_C](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationkeyposetype-c) = 2,<br></br> [MLGestureClassificationKeyPoseType_Pinch](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationkeyposetype-pinch) = 3,<br></br> [MLGestureClassificationKeyPoseType_Finger](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationkeyposetype-finger) = 4,<br></br> [MLGestureClassificationKeyPoseType_L](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationkeyposetype-l) = 5,<br></br> [MLGestureClassificationKeyPoseType_Thumb](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationkeyposetype-thumb) = 6,<br></br> [MLGestureClassificationKeyPoseType_Fist](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationkeyposetype-fist) = 7,<br></br> [MLGestureClassificationKeyPoseType_Open](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationkeyposetype-open) = 8,<br></br> [MLGestureClassificationKeyPoseType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__gesture__classification_8h.md#enums-mlgestureclassificationkeyposetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>System gesture classification key pose type.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLGestureClassificationStaticDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#void-mlgestureclassificationstaticdatainit)**([MLGestureClassificationStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md) * inout_data)<br></br>Initializes default values for [MLGestureClassificationStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md).  |
| void | **[MLGestureClassificationDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#void-mlgestureclassificationdatainit)**([MLGestureClassificationData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md) * inout_data)<br></br>Initializes default values for [MLGestureClassificationData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGestureClassificationCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationcreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a gesture classification tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGestureClassificationDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroys a gesture classification tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGestureClassificationGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetstaticdata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLGestureClassificationStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md) * out_data)<br></br>Gets static information about the gesture classification.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGestureClassificationGetData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetdata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLGestureClassificationData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md) * out_data)<br></br>Queries the state of the gesture classification.  |

## Enums Documentation

### MLGestureClassificationHandType {#enums-mlgestureclassificationhandtype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGestureClassificationHandType_Left |  0| Left hand. |
| MLGestureClassificationHandType_Right |  1| Right hand. |
| MLGestureClassificationHandType_Count |  2| Number of hands. |
| MLGestureClassificationHandType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Available hand types. 





-----------

### MLGestureClassificationPostureType {#enums-mlgestureclassificationposturetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGestureClassificationPostureType_None |  0| None. |
| MLGestureClassificationPostureType_Pinch |  1| Pinch posture. |
| MLGestureClassificationPostureType_Point |  2| Point posture. |
| MLGestureClassificationPostureType_Grasp |  3| Grasp posture. |
| MLGestureClassificationPostureType_Open |  4| Open hand. |
| MLGestureClassificationPostureType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



System gesture classification posture type. 




**API Level:**
  * 20




-----------

### MLGestureClassificationKeyPoseType {#enums-mlgestureclassificationkeyposetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGestureClassificationKeyPoseType_None |  0| None. |
| MLGestureClassificationKeyPoseType_OK |  1| OK pose. |
| MLGestureClassificationKeyPoseType_C |  2| C pose. |
| MLGestureClassificationKeyPoseType_Pinch |  3| Pinch pose. |
| MLGestureClassificationKeyPoseType_Finger |  4| Finger pose. |
| MLGestureClassificationKeyPoseType_L |  5| L pose. |
| MLGestureClassificationKeyPoseType_Thumb |  6| Thumb up pose. |
| MLGestureClassificationKeyPoseType_Fist |  7| Fist pose. |
| MLGestureClassificationKeyPoseType_Open |  8| Open pose. |
| MLGestureClassificationKeyPoseType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



System gesture classification key pose type. 




**API Level:**
  * 20




-----------


## Types Documentation

### MLGestureClassificationStaticData {#struct-mlgestureclassificationstaticdata}

```cpp
typedef struct MLGestureClassificationStaticData MLGestureClassificationStaticData;
```

Static information about the gesture classification. 

Populate with [MLGestureClassificationGetStaticData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetstaticdata). This structure must be initialized by calling [MLGestureClassificationStaticDataInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#void-mlgestureclassificationstaticdatainit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md)


**API Level:**
  * 20




-----------

### MLGestureClassificationPostureFingerData {#struct-mlgestureclassificationposturefingerdata}

```cpp
typedef struct MLGestureClassificationPostureFingerData MLGestureClassificationPostureFingerData;
```

Gesture classification posture related finger data. 

Pinch values are measured between the finger and thumb. In case thumb is the finger, values are same with index's values.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_posture_finger_data.md)


**API Level:**
  * 20




-----------

### MLGestureClassificationFingerState {#struct-mlgestureclassificationfingerstate}

```cpp
typedef struct MLGestureClassificationFingerState MLGestureClassificationFingerState;
```

Gesture classification state of a single finger. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md)


**API Level:**
  * 20




-----------

### MLGestureClassificationState {#struct-mlgestureclassificationstate}

```cpp
typedef struct MLGestureClassificationState MLGestureClassificationState;
```

Gesture classification state of a single hand. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md)


**API Level:**
  * 20




-----------

### MLGestureClassificationData {#struct-mlgestureclassificationdata}

```cpp
typedef struct MLGestureClassificationData MLGestureClassificationData;
```

Data which is received when querying tracker from [MLGestureClassificationGetData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetdata). 

This structure must be initialized by calling [MLGestureClassificationDataInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#void-mlgestureclassificationdatainit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md)


**API Level:**
  * 20




-----------


## Functions Documentation

### MLGestureClassificationStaticDataInit {#void-mlgestureclassificationstaticdatainit}

```cpp
static inline void MLGestureClassificationStaticDataInit(
    MLGestureClassificationStaticData * inout_data
)
```

Initializes default values for [MLGestureClassificationStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLGestureClassificationStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md) * |inout_data|The object to initialize with default settings. |



**API Level:**
  * 20




-----------

### MLGestureClassificationDataInit {#void-mlgestureclassificationdatainit}

```cpp
static inline void MLGestureClassificationDataInit(
    MLGestureClassificationData * inout_data
)
```

Initializes default values for [MLGestureClassificationData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLGestureClassificationData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md) * |inout_data|The object to initialize with default settings. |



**API Level:**
  * 20




-----------

### MLGestureClassificationCreate {#mlresult-mlgestureclassificationcreate}

```cpp
MLResult MLGestureClassificationCreate(
    MLHandle * out_handle
)
```

Creates a gesture classification tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created gesture classification tracker. Only valid if the return value is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to create a tracker due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The tracker was created successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PrivilegeDenied|The application lacks privilege. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * com.magicleap.permission.HAND_TRACKING (protection level: normal) 





**API Level:**
  * 20




-----------

### MLGestureClassificationDestroy {#mlresult-mlgestureclassificationdestroy}

```cpp
MLResult MLGestureClassificationDestroy(
    MLHandle handle
)
```

Destroys a gesture classification tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to a gesture classification tracker created by [MLGestureClassificationCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationcreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to destroy a tracker due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|It successfully destroyed the tracker. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLGestureClassificationGetStaticData {#mlresult-mlgestureclassificationgetstaticdata}

```cpp
MLResult MLGestureClassificationGetStaticData(
    MLHandle handle,
    MLGestureClassificationStaticData * out_data
)
```

Gets static information about the gesture classification. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to a gesture classification tracker created by [MLGestureClassificationCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationcreate). |
| [MLGestureClassificationStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md) * |out_data|Target to populate the data about the gesture classification.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to get static data due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Gesture classification static data was successfully received. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLGestureClassificationGetData {#mlresult-mlgestureclassificationgetdata}

```cpp
MLResult MLGestureClassificationGetData(
    MLHandle handle,
    MLGestureClassificationData * out_data
)
```

Queries the state of the gesture classification. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to a gesture classification tracker created by [MLGestureClassificationCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationcreate). |
| [MLGestureClassificationData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md) * |out_data|Pointer to [MLGestureClassificationData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md) structure.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to retrieve data due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The state information was available and the information in out_data is valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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

typedef enum MLGestureClassificationHandType {
  MLGestureClassificationHandType_Left = 0,
  MLGestureClassificationHandType_Right = 1,
  MLGestureClassificationHandType_Count = 2,
  MLGestureClassificationHandType_Ensure32Bits = 0x7FFFFFFF
} MLGestureClassificationHandType;


typedef struct MLGestureClassificationStaticData {
  uint32_t version;
  MLCoordinateFrameUID hand_interaction[MLGestureClassificationHandType_Count];
  MLCoordinateFrameUID hand_transform[MLGestureClassificationHandType_Count];
} MLGestureClassificationStaticData;

ML_STATIC_INLINE void MLGestureClassificationStaticDataInit(MLGestureClassificationStaticData* inout_data) {
  if (NULL != inout_data) {
    memset(inout_data, 0, sizeof(MLGestureClassificationStaticData));
    inout_data->version = 1u;
  }
}

typedef enum MLGestureClassificationPostureType {
  MLGestureClassificationPostureType_None = 0,
  MLGestureClassificationPostureType_Pinch = 1,
  MLGestureClassificationPostureType_Point = 2,
  MLGestureClassificationPostureType_Grasp = 3,
  MLGestureClassificationPostureType_Open = 4,
  MLGestureClassificationPostureType_Ensure32Bits = 0x7FFFFFFF
} MLGestureClassificationPostureType;

typedef enum MLGestureClassificationKeyPoseType {
  MLGestureClassificationKeyPoseType_None = 0,
  MLGestureClassificationKeyPoseType_OK = 1,
  MLGestureClassificationKeyPoseType_C = 2,
  MLGestureClassificationKeyPoseType_Pinch = 3,
  MLGestureClassificationKeyPoseType_Finger = 4,
  MLGestureClassificationKeyPoseType_L = 5,
  MLGestureClassificationKeyPoseType_Thumb = 6,
  MLGestureClassificationKeyPoseType_Fist = 7,
  MLGestureClassificationKeyPoseType_Open = 8,
  MLGestureClassificationKeyPoseType_Ensure32Bits = 0x7FFFFFFF
} MLGestureClassificationKeyPoseType;

typedef struct MLGestureClassificationPostureFingerData {
  float pinch_normalized_angle;
  float pinch_angle_of_separation_deg;
  float pinch_normalized_distance;
  float pinch_distance_m;
} MLGestureClassificationPostureFingerData;

typedef struct MLGestureClassificationFingerState {
  bool is_extended;
  float length_m;
  float normalized_extension;
  float angle_to_palm;
  MLGestureClassificationPostureFingerData posture_data;
} MLGestureClassificationFingerState;

typedef struct MLGestureClassificationState {
  MLGestureClassificationPostureType posture_type;
  MLGestureClassificationKeyPoseType keypose_type;
  MLGestureClassificationFingerState thumb;
  MLGestureClassificationFingerState index;
  MLGestureClassificationFingerState middle;
  MLGestureClassificationFingerState ring;
  MLGestureClassificationFingerState pinky;
  float angle_thumb_index_deg;
  float angle_index_middle_deg;
  float angle_middle_ring_deg;
  float angle_ring_pinky_deg;
} MLGestureClassificationState;

typedef struct MLGestureClassificationData {
  uint32_t version;
  MLGestureClassificationState hand_state[MLGestureClassificationHandType_Count];
} MLGestureClassificationData;

ML_STATIC_INLINE void MLGestureClassificationDataInit(MLGestureClassificationData* inout_data) {
  if (NULL != inout_data) {
    memset(inout_data, 0, sizeof(MLGestureClassificationData));
    inout_data->version = 1u;
  }
}

ML_API MLResult ML_CALL MLGestureClassificationCreate(MLHandle* out_handle);

ML_API MLResult ML_CALL MLGestureClassificationDestroy(MLHandle handle);

ML_API MLResult ML_CALL MLGestureClassificationGetStaticData(MLHandle handle, MLGestureClassificationStaticData *out_data);

ML_API MLResult ML_CALL MLGestureClassificationGetData(MLHandle handle, MLGestureClassificationData *out_data);

ML_EXTERN_C_END
```




