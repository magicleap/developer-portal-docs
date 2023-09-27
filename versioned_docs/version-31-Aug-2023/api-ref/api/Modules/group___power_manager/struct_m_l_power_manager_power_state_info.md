---
title: MLPowerManagerPowerStateInfo
summary: a structure to encapsulate info data used by the power manager when getting the current power state. 

---

# MLPowerManagerPowerStateInfo

**Module:** **[Power Manager](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md)**



A structure to encapsulate info data used by the Power Manager when getting the current power state.  [More...](#detailed-description)


`#include <ml_power_manager.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md#uint32-t-version)**  |

## Detailed Description

```cpp
struct MLPowerManagerPowerStateInfo;
```

A structure to encapsulate info data used by the Power Manager when getting the current power state. 

This structure must be initialized by calling [MLPowerManagerPowerStateInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#void-mlpowermanagerpowerstateinfoinit) before use.




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


