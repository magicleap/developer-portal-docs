---
title: MLControllerSystemState
summary: a structure containing information about the current state of the controller system. 

---

# MLControllerSystemState

**Module:** **[Controller](/api-ref/api/Modules/group___controller/group___controller.md)**



A structure containing information about the current state of the controller system.  [More...](#detailed-description)


`#include <ml_controller.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| struct [MLControllerState](/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md)[MLController_MaxActive] | **[controller_state](/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state.md#struct-controller-state)**  |
| [MLControllerCalibAccuracy](/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy) | **[lightwear_accuracy](/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state.md#mlcontrollercalibaccuracy-lightwear-accuracy)**  |

## Detailed Description

```cpp
struct MLControllerSystemState;
```

A structure containing information about the current state of the controller system. 



:::caution Deprecated
Deprecated since 1.1.0. Scheduled for removal.
:::



-----------
## Public Attributes Documentation

### controller_state {#struct-controller-state}

```cpp
struct MLControllerState[MLController_MaxActive] controller_state;
```



| Type | Description |
|--|--|
| struct [MLControllerState](/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md)[MLController_MaxActive] | A structure containing information about the current state of this controller. [MLController_MaxActive] |


State objects for each connected and active controller. 





-----------

### lightwear_accuracy {#mlcontrollercalibaccuracy-lightwear-accuracy}

```cpp
MLControllerCalibAccuracy lightwear_accuracy;
```



| Type | Description |
|--|--|
| [MLControllerCalibAccuracy](/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy) | Calibration Accuracy levels for controller.  |


Calibration accuracy for the lightwear. 





-----------

