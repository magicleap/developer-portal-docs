---
title: MLHeadTrackingStateEx
summary: structure containing information on the current state of the head tracking system. this structure must be initialized by calling mlheadtrackingstateexinit before use. 

---

# MLHeadTrackingStateEx

**Module:** **[Head Tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md)**



Structure containing information on the current state of the Head Tracking system. This structure must be initialized by calling [MLHeadTrackingStateExInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#void-mlheadtrackingstateexinit) before use.  [More...](#detailed-description)


`#include <ml_head_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md#uint32-t-version)**  |
| [MLHeadTrackingStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingstatus) | **[status](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md#mlheadtrackingstatus-status)**  |
| float | **[confidence](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md#float-confidence)**  |
| uint32_t | **[error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md#uint32-t-error)**  |

## Detailed Description

```cpp
struct MLHeadTrackingStateEx;
```

Structure containing information on the current state of the Head Tracking system. This structure must be initialized by calling [MLHeadTrackingStateExInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#void-mlheadtrackingstateexinit) before use. 




**API Level:**
  * 26




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### status {#mlheadtrackingstatus-status}

```cpp
MLHeadTrackingStatus status;
```



| Type | Description |
|--|--|
| [MLHeadTrackingStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enums-mlheadtrackingstatus) | A set of possible tracking status for the Head Tracking system.  |


Current status of the Head Tracking system. 





-----------

### confidence {#float-confidence}

```cpp
float confidence;
```


Confidence value (from [0, 1]) representing the confidence in the current pose. 





-----------

### error {#uint32-t-error}

```cpp
uint32_t error;
```


Represents a bitmask of [MLHeadTrackingErrorFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#enum-mlheadtrackingerrorflag). 





-----------


