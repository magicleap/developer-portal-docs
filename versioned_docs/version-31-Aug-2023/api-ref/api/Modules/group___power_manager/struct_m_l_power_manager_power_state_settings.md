---
title: MLPowerManagerPowerStateSettings
summary: a structure to encapsulate settings used by the power manager when requesting the power state to be changed. 

---

# MLPowerManagerPowerStateSettings

**Module:** **[Power Manager](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md)**



A structure to encapsulate settings used by the Power Manager when requesting the power state to be changed.  [More...](#detailed-description)


`#include <ml_power_manager.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md#uint32-t-version)**  |
| [MLPowerManagerPowerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpowerstate) | **[power_state](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md#mlpowermanagerpowerstate-power-state)**  |

## Detailed Description

```cpp
struct MLPowerManagerPowerStateSettings;
```

A structure to encapsulate settings used by the Power Manager when requesting the power state to be changed. 

This structure must be initialized by calling [MLPowerManagerPowerStateSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#void-mlpowermanagerpowerstatesettingsinit) before use.




**API Level:**
  * 27




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### power_state {#mlpowermanagerpowerstate-power-state}

```cpp
MLPowerManagerPowerState power_state;
```



| Type | Description |
|--|--|
| [MLPowerManagerPowerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpowerstate) | Power states. Query [MLPowerManagerGetAvailablePowerStates()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailablepowerstates) to determine which power state is available for each component.  |


New power state to request. 





-----------


