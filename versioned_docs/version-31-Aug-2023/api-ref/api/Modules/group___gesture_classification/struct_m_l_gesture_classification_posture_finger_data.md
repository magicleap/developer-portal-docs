---
title: MLGestureClassificationPostureFingerData
summary: gesture classification posture related finger data. 

---

# MLGestureClassificationPostureFingerData

**Module:** **[Gesture Classification System](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md)**



Gesture classification posture related finger data.  [More...](#detailed-description)


`#include <ml_gesture_classification.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| float | **[pinch_normalized_angle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_posture_finger_data.md#float-pinch-normalized-angle)**  |
| float | **[pinch_angle_of_separation_deg](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_posture_finger_data.md#float-pinch-angle-of-separation-deg)**  |
| float | **[pinch_normalized_distance](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_posture_finger_data.md#float-pinch-normalized-distance)**  |
| float | **[pinch_distance_m](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_posture_finger_data.md#float-pinch-distance-m)**  |

## Detailed Description

```cpp
struct MLGestureClassificationPostureFingerData;
```

Gesture classification posture related finger data. 

Pinch values are measured between the finger and thumb. In case thumb is the finger, values are same with index's values.




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### pinch_normalized_angle {#float-pinch-normalized-angle}

```cpp
float pinch_normalized_angle;
```


Normalized pinch angle (range 0.0 ~ 1.0). -1.0 if the value is not valid. 





-----------

### pinch_angle_of_separation_deg {#float-pinch-angle-of-separation-deg}

```cpp
float pinch_angle_of_separation_deg;
```


Absolute pinch angle (angular) in degrees. -1.0 if the value is not valid. 





-----------

### pinch_normalized_distance {#float-pinch-normalized-distance}

```cpp
float pinch_normalized_distance;
```


Normalized pinch distance (range 0.0 ~ 1.0). -1.0 if the value is not valid. 





-----------

### pinch_distance_m {#float-pinch-distance-m}

```cpp
float pinch_distance_m;
```


Absolute pinch distance (euclidean) in meters. -1.0 if the value is not valid. 





-----------


