---
title: MLGestureClassificationStaticData
summary: static information about the gesture classification. 

---

# MLGestureClassificationStaticData

**Module:** **[Gesture Classification System](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md)**



Static information about the gesture classification.  [More...](#detailed-description)


`#include <ml_gesture_classification.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md#uint32-t-version)**  |
| [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md)[MLGestureClassificationHandType_Count] | **[hand_interaction](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md#mlcoordinateframeuid-hand-interaction)**  |
| [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md)[MLGestureClassificationHandType_Count] | **[hand_transform](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md#mlcoordinateframeuid-hand-transform)**  |

## Detailed Description

```cpp
struct MLGestureClassificationStaticData;
```

Static information about the gesture classification. 

Populate with [MLGestureClassificationGetStaticData()](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetstaticdata). This structure must be initialized by calling [MLGestureClassificationStaticDataInit()](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#void-mlgestureclassificationstaticdatainit) before use.




**API Level:**
  * 20 




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### hand_interaction {#mlcoordinateframeuid-hand-interaction}

```cpp
MLCoordinateFrameUID[MLGestureClassificationHandType_Count] hand_interaction;
```



| Type | Description |
|--|--|
| [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md)[MLGestureClassificationHandType_Count] | [MLGestureClassificationHandType_Count] |


CFUID for hands' interaction point transform based on the current posture type. 





-----------

### hand_transform {#mlcoordinateframeuid-hand-transform}

```cpp
MLCoordinateFrameUID[MLGestureClassificationHandType_Count] hand_transform;
```



| Type | Description |
|--|--|
| [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md)[MLGestureClassificationHandType_Count] | [MLGestureClassificationHandType_Count] |


CFUID for hands' center point transform. 





-----------

