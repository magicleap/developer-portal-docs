---
title: MLHeadTrackingState

---

# MLHeadTrackingState

**Module:** **[Head Tracking](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md)**



 [More...](#detailed-description)


`#include <ml_head_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLHeadTrackingMode](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingmode) | **[mode](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md#mlheadtrackingmode-mode)**  |
| float | **[confidence](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md#float-confidence)**  |
| [MLHeadTrackingError](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingerror) | **[error](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md#mlheadtrackingerror-error)**  |

## Detailed Description

```cpp
struct MLHeadTrackingState;
```


A structure containing information on the current state of the Head Tracking system. 





-----------
## Public Attributes Documentation

### mode {#mlheadtrackingmode-mode}

```cpp
MLHeadTrackingMode mode;
```


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


Represents what tracking error (if any) is present. 





-----------

