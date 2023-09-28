---
title: MLGestureClassificationState
summary: gesture classification state of a single hand. 

---

# MLGestureClassificationState

**Module:** **[Gesture Classification System](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md)**



Gesture classification state of a single hand.  [More...](#detailed-description)


`#include <ml_gesture_classification.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLGestureClassificationPostureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#enums-mlgestureclassificationposturetype) | **[posture_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationposturetype-posture-type)**  |
| [MLGestureClassificationKeyPoseType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#enums-mlgestureclassificationkeyposetype) | **[keypose_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationkeyposetype-keypose-type)**  |
| [MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | **[thumb](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationfingerstate-thumb)**  |
| [MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | **[index](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationfingerstate-index)**  |
| [MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | **[middle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationfingerstate-middle)**  |
| [MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | **[ring](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationfingerstate-ring)**  |
| [MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | **[pinky](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationfingerstate-pinky)**  |
| float | **[angle_thumb_index_deg](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#float-angle-thumb-index-deg)**  |
| float | **[angle_index_middle_deg](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#float-angle-index-middle-deg)**  |
| float | **[angle_middle_ring_deg](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#float-angle-middle-ring-deg)**  |
| float | **[angle_ring_pinky_deg](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#float-angle-ring-pinky-deg)**  |

## Detailed Description

```cpp
struct MLGestureClassificationState;
```

Gesture classification state of a single hand. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### posture_type {#mlgestureclassificationposturetype-posture-type}

```cpp
MLGestureClassificationPostureType posture_type;
```



| Type | Description |
|--|--|
| [MLGestureClassificationPostureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#enums-mlgestureclassificationposturetype) | System gesture classification posture type.  |


Gesture classification hand posture type. 





-----------

### keypose_type {#mlgestureclassificationkeyposetype-keypose-type}

```cpp
MLGestureClassificationKeyPoseType keypose_type;
```



| Type | Description |
|--|--|
| [MLGestureClassificationKeyPoseType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#enums-mlgestureclassificationkeyposetype) | System gesture classification key pose type.  |


Gesture classification hand key pose type. 





-----------

### thumb {#mlgestureclassificationfingerstate-thumb}

```cpp
MLGestureClassificationFingerState thumb;
```



| Type | Description |
|--|--|
| [MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | Gesture classification state of a single finger.  |


Thumb finger state data. 





-----------

### index {#mlgestureclassificationfingerstate-index}

```cpp
MLGestureClassificationFingerState index;
```



| Type | Description |
|--|--|
| [MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | Gesture classification state of a single finger.  |


Index finger state data. 





-----------

### middle {#mlgestureclassificationfingerstate-middle}

```cpp
MLGestureClassificationFingerState middle;
```



| Type | Description |
|--|--|
| [MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | Gesture classification state of a single finger.  |


Middle finger state data. 





-----------

### ring {#mlgestureclassificationfingerstate-ring}

```cpp
MLGestureClassificationFingerState ring;
```



| Type | Description |
|--|--|
| [MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | Gesture classification state of a single finger.  |


Ring finger state data. 





-----------

### pinky {#mlgestureclassificationfingerstate-pinky}

```cpp
MLGestureClassificationFingerState pinky;
```



| Type | Description |
|--|--|
| [MLGestureClassificationFingerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | Gesture classification state of a single finger.  |


Pinky finger state data. 





-----------

### angle_thumb_index_deg {#float-angle-thumb-index-deg}

```cpp
float angle_thumb_index_deg;
```


Angle between thumb and index (angular) in degrees. 





-----------

### angle_index_middle_deg {#float-angle-index-middle-deg}

```cpp
float angle_index_middle_deg;
```


Angle between index and middle (angular) in degrees. 





-----------

### angle_middle_ring_deg {#float-angle-middle-ring-deg}

```cpp
float angle_middle_ring_deg;
```


Angle between middle and ring (angular) in degrees. 





-----------

### angle_ring_pinky_deg {#float-angle-ring-pinky-deg}

```cpp
float angle_ring_pinky_deg;
```


Angle between ring and pinky (angular) in degrees. 





-----------


