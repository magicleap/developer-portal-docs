---
title: MLPowerManagerPropertyData
summary: a structure to encapsulate output data when getting the current properties. 

---

# MLPowerManagerPropertyData

**Module:** **[Power Manager](/versioned_docs/version-02-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md)**



A structure to encapsulate output data when getting the current properties.  [More...](#detailed-description)


`#include <ml_power_manager.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint8_t | **[size](/versioned_docs/version-02-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md#uint8-t-size)**  |
| [MLPowerManagerComponentProperty](/versioned_docs/version-02-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_component_property.md) * | **[properties](/versioned_docs/version-02-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md#mlpowermanagercomponentproperty-properties)**  |

## Detailed Description

```cpp
struct MLPowerManagerPropertyData;
```

A structure to encapsulate output data when getting the current properties. 




**API Level:**
  * 27




-----------
## Public Attributes Documentation

### size {#uint8-t-size}

```cpp
uint8_t size;
```


Size of [properties](/versioned_docs/version-02-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md#mlpowermanagercomponentproperty-properties) array. 





-----------

### properties {#mlpowermanagercomponentproperty-properties}

```cpp
MLPowerManagerComponentProperty * properties;
```



| Type | Description |
|--|--|
| [MLPowerManagerComponentProperty](/versioned_docs/version-02-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_component_property.md) * | A structure to encapsulate the data for each [MLPowerManagerPropertyType](/versioned_docs/version-02-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enum-mlpowermanagerpropertytype).  |


Array of [MLPowerManagerComponentProperty](/versioned_docs/version-02-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_component_property.md) elements. 





-----------


