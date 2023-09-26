---
title: MLControllerState
summary: a structure containing information about the current state of this controller. 

---

# MLControllerState

**Module:** **[Controller](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md)**



A structure containing information about the current state of this controller.  [More...](#detailed-description)


`#include <ml_controller.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint8_t | **[controller_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md#uint8-t-controller-id)**  |
| struct [MLControllerStream](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_stream.md)[MLControllerMode_Count] | **[stream](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md#struct-stream)**  |
| [MLControllerCalibAccuracy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy) | **[accuracy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md#mlcontrollercalibaccuracy-accuracy)**  |

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
| struct [MLControllerStream](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_stream.md)[MLControllerMode_Count] | A structure containing information about the tracking-stream of this controller. [MLControllerMode_Count] |


Current controller's tracking streams. 





-----------

### accuracy {#mlcontrollercalibaccuracy-accuracy}

```cpp
MLControllerCalibAccuracy accuracy;
```



| Type | Description |
|--|--|
| [MLControllerCalibAccuracy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy) | Calibration Accuracy levels for controller.  |


Calibration accuracy for the current controller. 





-----------


