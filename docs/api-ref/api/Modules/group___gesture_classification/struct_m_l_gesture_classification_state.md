---
title: MLGestureClassificationState
summary: gesture classification state of a single hand. 

---

# MLGestureClassificationState

**Module:** **[Gesture Classification System](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md)**



Gesture classification state of a single hand.  [More...](#detailed-description)


`#include <ml_gesture_classification.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLGestureClassificationPostureType](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#enums-mlgestureclassificationposturetype) | **[posture_type](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationposturetype-posture-type)**  |
| [MLGestureClassificationKeyPoseType](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#enums-mlgestureclassificationkeyposetype) | **[keypose_type](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationkeyposetype-keypose-type)**  |
| [MLGestureClassificationFingerState](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | **[thumb](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationfingerstate-thumb)**  |
| [MLGestureClassificationFingerState](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | **[index](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationfingerstate-index)**  |
| [MLGestureClassificationFingerState](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | **[middle](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationfingerstate-middle)**  |
| [MLGestureClassificationFingerState](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | **[ring](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationfingerstate-ring)**  |
| [MLGestureClassificationFingerState](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | **[pinky](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#mlgestureclassificationfingerstate-pinky)**  |
| float | **[angle_thumb_index_deg](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#float-angle-thumb-index-deg)**  |
| float | **[angle_index_middle_deg](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#float-angle-index-middle-deg)**  |
| float | **[angle_middle_ring_deg](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#float-angle-middle-ring-deg)**  |
| float | **[angle_ring_pinky_deg](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md#float-angle-ring-pinky-deg)**  |

## Detailed Description

```cpp
struct MLGestureClassificationState;
```

Gesture classification state of a single hand. 




**API Level:\n 20**
  * 




-----------
## Public Attributes Documentation

### posture_type {#mlgestureclassificationposturetype-posture-type}

```cpp
MLGestureClassificationPostureType posture_type;
```



| Type | Description |
|--|--|
| [MLGestureClassificationPostureType](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#enums-mlgestureclassificationposturetype) | System gesture classification posture type.  |


Gesture classification hand posture type. 





-----------

### keypose_type {#mlgestureclassificationkeyposetype-keypose-type}

```cpp
MLGestureClassificationKeyPoseType keypose_type;
```



| Type | Description |
|--|--|
| [MLGestureClassificationKeyPoseType](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#enums-mlgestureclassificationkeyposetype) | System gesture classification key pose type.  |


Gesture classification hand key pose type. 





-----------

### thumb {#mlgestureclassificationfingerstate-thumb}

```cpp
MLGestureClassificationFingerState thumb;
```



| Type | Description |
|--|--|
| [MLGestureClassificationFingerState](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | Gesture classification state of a single finger.  |


Thumb finger state data. 





-----------

### index {#mlgestureclassificationfingerstate-index}

```cpp
MLGestureClassificationFingerState index;
```



| Type | Description |
|--|--|
| [MLGestureClassificationFingerState](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | Gesture classification state of a single finger.  |


Index finger state data. 





-----------

### middle {#mlgestureclassificationfingerstate-middle}

```cpp
MLGestureClassificationFingerState middle;
```



| Type | Description |
|--|--|
| [MLGestureClassificationFingerState](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | Gesture classification state of a single finger.  |


Middle finger state data. 





-----------

### ring {#mlgestureclassificationfingerstate-ring}

```cpp
MLGestureClassificationFingerState ring;
```



| Type | Description |
|--|--|
| [MLGestureClassificationFingerState](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | Gesture classification state of a single finger.  |


Ring finger state data. 





-----------

### pinky {#mlgestureclassificationfingerstate-pinky}

```cpp
MLGestureClassificationFingerState pinky;
```



| Type | Description |
|--|--|
| [MLGestureClassificationFingerState](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md) | Gesture classification state of a single finger.  |


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

