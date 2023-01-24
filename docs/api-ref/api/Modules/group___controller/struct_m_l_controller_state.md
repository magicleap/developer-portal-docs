---
title: MLControllerState
summary: a structure containing information about the current state of this controller. 

---

# MLControllerState

**Module:** **[Controller](/api-ref/api/Modules/group___controller/group___controller.md)**



A structure containing information about the current state of this controller.  [More...](#detailed-description)


`#include <ml_controller.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint8_t | **[controller_id](/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md#uint8-t-controller-id)**  |
| struct [MLControllerStream](/api-ref/api/Modules/group___controller/struct_m_l_controller_stream.md)[MLControllerMode_Count] | **[stream](/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md#struct-stream)**  |
| [MLControllerCalibAccuracy](/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy) | **[accuracy](/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md#mlcontrollercalibaccuracy-accuracy)**  |

## Detailed Description

```cpp
struct MLControllerState;
```

A structure containing information about the current state of this controller. 



:::caution Deprecated
Deprecated since 1.1.0. Scheduled for removal. 
:::



-----------
## Public Attributes Documentation

### controller_id {#uint8-t-controller-id}

```cpp
uint8_t controller_id;
```


ID of this controller. 





-----------

### stream {#struct-stream}

```cpp
struct MLControllerStream[MLControllerMode_Count] stream;
```



| Type | Description |
|--|--|
| struct [MLControllerStream](/api-ref/api/Modules/group___controller/struct_m_l_controller_stream.md)[MLControllerMode_Count] | A structure containing information about the tracking-stream of this controller. [MLControllerMode_Count] |


Current controller's tracking streams. 





-----------

### accuracy {#mlcontrollercalibaccuracy-accuracy}

```cpp
MLControllerCalibAccuracy accuracy;
```



| Type | Description |
|--|--|
| [MLControllerCalibAccuracy](/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy) | Calibration Accuracy levels for controller.  |


Calibration accuracy for the current controller. 





-----------

