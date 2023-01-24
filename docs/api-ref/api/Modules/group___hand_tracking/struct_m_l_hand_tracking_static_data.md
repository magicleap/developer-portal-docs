---
title: MLHandTrackingStaticData
summary: static information about a hand tracker. 

---

# MLHandTrackingStaticData

**Module:** **[Hand Tracking](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md)**



Static information about a hand tracker.  [More...](#detailed-description)


`#include <ml_hand_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md#uint32-t-version)**  |
| [MLHandTrackingCFUIDs](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_c_f_u_i_ds.md)[MLHandTrackingHandType_Count] | **[hand_cfuids](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md#mlhandtrackingcfuids-hand-cfuids)** <br></br>MLCoordinateFrameUIDs of left and right hands.  |

## Detailed Description

```cpp
struct MLHandTrackingStaticData;
```

Static information about a hand tracker. 

This structure must be initialized by calling [MLHandTrackingStaticDataInit()](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#void-mlhandtrackingstaticdatainit) before use.




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

### hand_cfuids {#mlhandtrackingcfuids-hand-cfuids}

```cpp
MLHandTrackingCFUIDs[MLHandTrackingHandType_Count] hand_cfuids;
```

MLCoordinateFrameUIDs of left and right hands. 


| Type | Description |
|--|--|
| [MLHandTrackingCFUIDs](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_c_f_u_i_ds.md)[MLHandTrackingHandType_Count] | MLCoordinateFrameUIDs for the keypoints. [MLHandTrackingHandType_Count] |


See [MLHandTrackingHandType](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#enum-mlhandtrackinghandtype) for more details. 





-----------

