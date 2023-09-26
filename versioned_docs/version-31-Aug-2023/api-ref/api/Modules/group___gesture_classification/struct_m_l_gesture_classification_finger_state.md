---
title: MLGestureClassificationFingerState
summary: gesture classification state of a single finger. 

---

# MLGestureClassificationFingerState

**Module:** **[Gesture Classification System](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md)**



Gesture classification state of a single finger.  [More...](#detailed-description)


`#include <ml_gesture_classification.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| bool | **[is_extended](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md#bool-is-extended)**  |
| float | **[length_m](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md#float-length-m)**  |
| float | **[normalized_extension](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md#float-normalized-extension)**  |
| float | **[angle_to_palm](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md#float-angle-to-palm)**  |
| [MLGestureClassificationPostureFingerData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_posture_finger_data.md) | **[posture_data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_finger_state.md#mlgestureclassificationposturefingerdata-posture-data)**  |

## Detailed Description

```cpp
struct MLGestureClassificationFingerState;
```

Gesture classification state of a single finger. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### is_extended {#bool-is-extended}

```cpp
bool is_extended;
```


State of finger. 





-----------

### length_m {#float-length-m}

```cpp
float length_m;
```


Finger length in meters. 





-----------

### normalized_extension {#float-normalized-extension}

```cpp
float normalized_extension;
```


State of finger extension range 0.0 to 1.0. (0.0 folded, 1.0 fully extended). 





-----------

### angle_to_palm {#float-angle-to-palm}

```cpp
float angle_to_palm;
```


Absolute angle to palm (angular). -1.0 if the value is not valid. 





-----------

### posture_data {#mlgestureclassificationposturefingerdata-posture-data}

```cpp
MLGestureClassificationPostureFingerData posture_data;
```



| Type | Description |
|--|--|
| [MLGestureClassificationPostureFingerData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_posture_finger_data.md) | Gesture classification posture related finger data.  |


Gesture classification posture related finger data. 





-----------


