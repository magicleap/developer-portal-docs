---
title: MLPowerManagerPowerStateData
summary: a structure to encapsulate output data when either getting available power states, or the current power state. 

---

# MLPowerManagerPowerStateData

**Module:** **[Power Manager](/api-ref/api/Modules/group___power_manager/group___power_manager.md)**



A structure to encapsulate output data when either getting available power states, or the current power state.  [More...](#detailed-description)


`#include <ml_power_manager.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint8_t | **[size](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md#uint8-t-size)**  |
| [MLPowerManagerPowerState](/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpowerstate) * | **[power_states](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md#mlpowermanagerpowerstate-power-states)**  |

## Detailed Description

```cpp
struct MLPowerManagerPowerStateData;
```

A structure to encapsulate output data when either getting available power states, or the current power state. 




**API Level:**
  * 27




-----------
## Public Attributes Documentation

### size {#uint8-t-size}

```cpp
uint8_t size;
```


Size of [power_states](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md#mlpowermanagerpowerstate-power-states) array. 





-----------

### power_states {#mlpowermanagerpowerstate-power-states}

```cpp
MLPowerManagerPowerState * power_states;
```



| Type | Description |
|--|--|
| [MLPowerManagerPowerState](/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpowerstate) * | Power states. Query [MLPowerManagerGetAvailablePowerStates()](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailablepowerstates) to determine which power state is available for each component.  |


Array of [MLPowerManagerPowerState](/api-ref/api/Modules/group___power_manager/group___power_manager.md#enum-mlpowermanagerpowerstate) elements. 





-----------

