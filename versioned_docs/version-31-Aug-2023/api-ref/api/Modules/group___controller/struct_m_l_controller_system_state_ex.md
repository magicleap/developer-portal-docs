---
title: MLControllerSystemStateEx
summary: a structure containing information about the current state of the controller system. 

---

# MLControllerSystemStateEx

**Module:** **[Controller](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md)**



A structure containing information about the current state of the controller system.  [More...](#detailed-description)


`#include <ml_controller.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md#uint32-t-version)**  |
| [MLControllerStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state_ex.md)[MLController_MaxActive] | **[controller_state](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md#mlcontrollerstateex-controller-state)**  |

## Detailed Description

```cpp
struct MLControllerSystemStateEx;
```

A structure containing information about the current state of the controller system. 




**API Level:**
  * 21




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### controller_state {#mlcontrollerstateex-controller-state}

```cpp
MLControllerStateEx[MLController_MaxActive] controller_state;
```



| Type | Description |
|--|--|
| [MLControllerStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state_ex.md)[MLController_MaxActive] | A structure containing information about the current state of this controller. [MLController_MaxActive] |


State objects for each connected and active controller. 





-----------


