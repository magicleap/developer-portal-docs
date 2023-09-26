---
title: MLControllerSystemState
summary: a structure containing information about the current state of the controller system. 

---

# MLControllerSystemState

**Module:** **[Controller](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md)**



A structure containing information about the current state of the controller system.  [More...](#detailed-description)


`#include <ml_controller.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| struct [MLControllerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md)[MLController_MaxActive] | **[controller_state](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state.md#struct-controller-state)**  |
| [MLControllerCalibAccuracy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy) | **[lightwear_accuracy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state.md#mlcontrollercalibaccuracy-lightwear-accuracy)**  |

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
| struct [MLControllerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md)[MLController_MaxActive] | A structure containing information about the current state of this controller. [MLController_MaxActive] |


State objects for each connected and active controller. 





-----------

### lightwear_accuracy {#mlcontrollercalibaccuracy-lightwear-accuracy}

```cpp
MLControllerCalibAccuracy lightwear_accuracy;
```



| Type | Description |
|--|--|
| [MLControllerCalibAccuracy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy) | Calibration Accuracy levels for controller.  |


Calibration accuracy for the lightwear. 





-----------


