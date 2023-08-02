---
title: MLGestureClassificationData
summary: data which is received when querying tracker from mlgestureclassificationgetdata. 

---

# MLGestureClassificationData

**Module:** **[Gesture Classification System](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md)**



Data which is received when querying tracker from [MLGestureClassificationGetData()](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetdata).  [More...](#detailed-description)


`#include <ml_gesture_classification.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md#uint32-t-version)**  |
| [MLGestureClassificationState](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md)[MLGestureClassificationHandType_Count] | **[hand_state](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md#mlgestureclassificationstate-hand-state)**  |

## Detailed Description

```cpp
struct MLGestureClassificationData;
```

Data which is received when querying tracker from [MLGestureClassificationGetData()](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetdata). 

This structure must be initialized by calling [MLGestureClassificationDataInit()](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#void-mlgestureclassificationdatainit) before use.




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

### hand_state {#mlgestureclassificationstate-hand-state}

```cpp
MLGestureClassificationState[MLGestureClassificationHandType_Count] hand_state;
```



| Type | Description |
|--|--|
| [MLGestureClassificationState](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_state.md)[MLGestureClassificationHandType_Count] | Gesture classification state of a single hand. [MLGestureClassificationHandType_Count] |


Gesture classification state of the left and right hand. 





-----------

