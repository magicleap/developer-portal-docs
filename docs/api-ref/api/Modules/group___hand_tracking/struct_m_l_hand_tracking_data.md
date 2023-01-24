---
title: MLHandTrackingData
summary: data which is received when querying hand tracker from mlhandtrackinggetdata. 

---

# MLHandTrackingData

**Module:** **[Hand Tracking](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md)**



Data which is received when querying hand tracker from [MLHandTrackingGetData()](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetdata).  [More...](#detailed-description)


`#include <ml_hand_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md#uint32-t-version)**  |
| [MLHandTrackingHandState](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_hand_state.md)[MLHandTrackingHandType_Count] | **[hand_state](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md#mlhandtrackinghandstate-hand-state)** <br></br>Hand tracker states of the hands.  |
| [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[timestamp_ns](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md#mltime-timestamp-ns)**  |

## Detailed Description

```cpp
struct MLHandTrackingData;
```

Data which is received when querying hand tracker from [MLHandTrackingGetData()](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetdata). 

This structure must be initialized by calling [MLHandTrackingDataInit()](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#void-mlhandtrackingdatainit) before use.




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

### hand_state {#mlhandtrackinghandstate-hand-state}

```cpp
MLHandTrackingHandState[MLHandTrackingHandType_Count] hand_state;
```

Hand tracker states of the hands. 


| Type | Description |
|--|--|
| [MLHandTrackingHandState](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_hand_state.md)[MLHandTrackingHandType_Count] | State of a single hand. [MLHandTrackingHandType_Count] |


See [MLHandTrackingHandType](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enum-mlhandtrackinghandtype) for more details. 





-----------

### timestamp_ns {#mltime-timestamp-ns}

```cpp
MLTime timestamp_ns;
```


Timestamp of last measurement in nanoseconds. 





-----------

