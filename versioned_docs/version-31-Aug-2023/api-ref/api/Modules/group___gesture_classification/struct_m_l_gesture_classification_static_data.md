---
title: MLGestureClassificationStaticData
summary: static information about the gesture classification. 

---

# MLGestureClassificationStaticData

**Module:** **[Gesture Classification System](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md)**



Static information about the gesture classification.  [More...](#detailed-description)


`#include <ml_gesture_classification.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md#uint32-t-version)**  |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md)[MLGestureClassificationHandType_Count] | **[hand_interaction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md#mlcoordinateframeuid-hand-interaction)**  |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md)[MLGestureClassificationHandType_Count] | **[hand_transform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md#mlcoordinateframeuid-hand-transform)**  |

## Detailed Description

```cpp
struct MLGestureClassificationStaticData;
```

Static information about the gesture classification. 

Populate with [MLGestureClassificationGetStaticData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetstaticdata). This structure must be initialized by calling [MLGestureClassificationStaticDataInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#void-mlgestureclassificationstaticdatainit) before use.




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
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md)[MLGestureClassificationHandType_Count] | [MLGestureClassificationHandType_Count] |


CFUID for hands' interaction point transform based on the current posture type. 





-----------

### hand_transform {#mlcoordinateframeuid-hand-transform}

```cpp
MLCoordinateFrameUID[MLGestureClassificationHandType_Count] hand_transform;
```



| Type | Description |
|--|--|
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md)[MLGestureClassificationHandType_Count] | [MLGestureClassificationHandType_Count] |


CFUID for hands' center point transform. 





-----------


