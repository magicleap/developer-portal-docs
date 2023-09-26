---
title: MLHeadTrackingState
summary: a structure containing information on the current state of the head tracking system. 

---

# MLHeadTrackingState

**Module:** **[Head Tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md)**



A structure containing information on the current state of the Head Tracking system.  [More...](#detailed-description)


`#include <ml_head_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLHeadTrackingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmode) | **[mode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md#mlheadtrackingmode-mode)**  |
| float | **[confidence](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md#float-confidence)**  |
| [MLHeadTrackingError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerror) | **[error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md#mlheadtrackingerror-error)**  |

## Detailed Description

```cpp
struct MLHeadTrackingState;
```

A structure containing information on the current state of the Head Tracking system. 



:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal. Replaced by [MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md). 
:::


**API Level:**
  * 1




-----------
## Public Attributes Documentation

### mode {#mlheadtrackingmode-mode}

```cpp
MLHeadTrackingMode mode;
```



| Type | Description |
|--|--|
| [MLHeadTrackingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmode) | A set of possible tracking modes the Head Tracking system can be in.  |


What tracking mode the Head Tracking system is currently in. 





-----------

### confidence {#float-confidence}

```cpp
float confidence;
```


A confidence value (from [0, 1]) representing the confidence in the current pose estimation. 





-----------

### error {#mlheadtrackingerror-error}

```cpp
MLHeadTrackingError error;
```



| Type | Description |
|--|--|
| [MLHeadTrackingError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerror) | A set of possible error conditions that can cause Head Tracking to be less than ideal.  |


Represents what tracking error (if any) is present. 





-----------


