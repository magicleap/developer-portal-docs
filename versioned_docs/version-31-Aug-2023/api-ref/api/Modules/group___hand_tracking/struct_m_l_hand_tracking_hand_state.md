---
title: MLHandTrackingHandState
summary: state of a single hand. 

---

# MLHandTrackingHandState

**Module:** **[Hand Tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md)**



State of a single hand.  [More...](#detailed-description)


`#include <ml_hand_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| bool | **[is_hand_detected](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_hand_state.md#bool-is-hand-detected)** <br></br>Specifies if the hand is detected.  |
| float | **[hand_confidence](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_hand_state.md#float-hand-confidence)** <br></br>The confidence level of a hand is present in the scene.  |
| bool[MLHandTrackingStaticData_MaxKeyPoints] | **[keypoints_mask](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_hand_state.md#bool-keypoints-mask)** <br></br>Mask indicates if a keypoint is present or not.  |

## Detailed Description

```cpp
struct MLHandTrackingHandState;
```

State of a single hand. 

Same for both filtered and unfiltered keypoints.




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### is_hand_detected {#bool-is-hand-detected}

```cpp
bool is_hand_detected;
```

Specifies if the hand is detected. 





-----------

### hand_confidence {#float-hand-confidence}

```cpp
float hand_confidence;
```

The confidence level of a hand is present in the scene. 

Value is between [0, 1], 0 is low, 1 is high degree of confidence. 





-----------

### keypoints_mask {#bool-keypoints-mask}

```cpp
bool[MLHandTrackingStaticData_MaxKeyPoints] keypoints_mask;
```

Mask indicates if a keypoint is present or not. 


| Type | Description |
|--|--|
| bool[MLHandTrackingStaticData_MaxKeyPoints] | [MLHandTrackingStaticData_MaxKeyPoints] |






-----------


