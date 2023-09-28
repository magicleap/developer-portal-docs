---
title: MLControllerStream
summary: a structure containing information about the tracking-stream of this controller. 

---

# MLControllerStream

**Module:** **[Controller](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md)**



A structure containing information about the tracking-stream of this controller.  [More...](#detailed-description)


`#include <ml_controller.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[coord_frame_controller](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_stream.md#mlcoordinateframeuid-coord-frame-controller)**  |
| bool | **[is_active](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_stream.md#bool-is-active)**  |
| [MLControllerMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollermode) | **[mode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_stream.md#mlcontrollermode-mode)** <br></br>Mode of the given controller stream.  |

## Detailed Description

```cpp
struct MLControllerStream;
```

A structure containing information about the tracking-stream of this controller. 



:::caution Deprecated
Deprecated since 1.1.0. Scheduled for removal.
:::



-----------
## Public Attributes Documentation

### coord_frame_controller {#mlcoordinateframeuid-coord-frame-controller}

```cpp
MLCoordinateFrameUID coord_frame_controller;
```


Smooth filtered coordinate frame identifier for this Controller. 





-----------

### is_active {#bool-is-active}

```cpp
bool is_active;
```


Flag to indicate if tracking-stream is active. 





-----------

### mode {#mlcontrollermode-mode}

```cpp
MLControllerMode mode;
```

Mode of the given controller stream. 


| Type | Description |
|--|--|
| [MLControllerMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollermode) | A set of possible tracking modes for the Controller system.  |


Note that the controller mode can switch depending on current environmental conditions. In 6dof mode both rotation and translation are available. In 3dof mode only rotation is available. 





-----------


