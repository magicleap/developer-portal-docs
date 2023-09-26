---
title: MLControllerStateEx
summary: a structure containing information about the current state of this controller. 

---

# MLControllerStateEx

**Module:** **[Controller](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md)**



A structure containing information about the current state of this controller.  [More...](#detailed-description)


`#include <ml_controller.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint8_t | **[controller_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state_ex.md#uint8-t-controller-id)**  |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[coord_frame_controller](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state_ex.md#mlcoordinateframeuid-coord-frame-controller)**  |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[raw_coord_frame_controller](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state_ex.md#mlcoordinateframeuid-raw-coord-frame-controller)**  |
| [MLControllerStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollerstatus) | **[status](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state_ex.md#mlcontrollerstatus-status)**  |

## Detailed Description

```cpp
struct MLControllerStateEx;
```

A structure containing information about the current state of this controller. 




**API Level:**
  * 21




-----------
## Public Attributes Documentation

### controller_id {#uint8-t-controller-id}

```cpp
uint8_t controller_id;
```


ID of this controller. 





-----------

### coord_frame_controller {#mlcoordinateframeuid-coord-frame-controller}

```cpp
MLCoordinateFrameUID coord_frame_controller;
```


Smooth filtered coordinate frame identifier for this Controller. 





-----------

### raw_coord_frame_controller {#mlcoordinateframeuid-raw-coord-frame-controller}

```cpp
MLCoordinateFrameUID raw_coord_frame_controller;
```


Raw coordinate frame identifier for this Controller. 





-----------

### status {#mlcontrollerstatus-status}

```cpp
MLControllerStatus status;
```



| Type | Description |
|--|--|
| [MLControllerStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollerstatus) | Stream mode for controller stream.  |


Current controller stream status. 





-----------


