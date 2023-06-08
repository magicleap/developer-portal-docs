---
title: MLHeadsetFitState
summary: headset fit state. 

---

# MLHeadsetFitState

**Module:** **[Headset Fit](/api-ref/api/Modules/group___headset_fit/group___headset_fit.md)**



Headset fit state.  [More...](#detailed-description)


`#include <ml_headset_fit.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md#uint32-t-version)**  |
| [MLHeadsetFitStatus](/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#enums-mlheadsetfitstatus) | **[fit_status](/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md#mlheadsetfitstatus-fit-status)**  |
| int64_t | **[epoch_timestamp_us](/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md#int64-t-epoch-timestamp-us)**  |

## Detailed Description

```cpp
struct MLHeadsetFitState;
```

Headset fit state. 




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

### fit_status {#mlheadsetfitstatus-fit-status}

```cpp
MLHeadsetFitStatus fit_status;
```



| Type | Description |
|--|--|
| [MLHeadsetFitStatus](/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#enums-mlheadsetfitstatus) | Represents the different fit status that the system can report.  |


Headset fit status as defined in [MLHeadsetFitStatus](/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#enum-mlheadsetfitstatus). 





-----------

### epoch_timestamp_us {#int64-t-epoch-timestamp-us}

```cpp
int64_t epoch_timestamp_us;
```


The epoch time of the last update in microseconds. 





-----------

