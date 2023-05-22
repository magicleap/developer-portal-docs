---
title: MLPowerManagerPropertyTypeData
summary: a structure to encapsulate output data when getting a component's available property types. 

---

# MLPowerManagerPropertyTypeData

**Module:** **[Power Manager](/api-ref/api/Modules/group___power_manager/group___power_manager.md)**



A structure to encapsulate output data when getting a component's available property types.  [More...](#detailed-description)


`#include <ml_power_manager.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint8_t | **[size](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md#uint8-t-size)**  |
| [MLPowerManagerPropertyType](/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpropertytype) * | **[property_types](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md#mlpowermanagerpropertytype-property-types)**  |

## Detailed Description

```cpp
struct MLPowerManagerPropertyTypeData;
```

A structure to encapsulate output data when getting a component's available property types. 




**API Level:**
  * 27




-----------
## Public Attributes Documentation

### size {#uint8-t-size}

```cpp
uint8_t size;
```


Size of [property_types](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md#mlpowermanagerpropertytype-property-types) array. 





-----------

### property_types {#mlpowermanagerpropertytype-property-types}

```cpp
MLPowerManagerPropertyType * property_types;
```



| Type | Description |
|--|--|
| [MLPowerManagerPropertyType](/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpropertytype) * | Power Manager property types. Query [MLPowerManagerGetAvailableProperties()](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailableproperties) to determine which Power Manager properties are available for each component.  |


Array of [MLPowerManagerPropertyType](/api-ref/api/Modules/group___power_manager/group___power_manager.md#enum-mlpowermanagerpropertytype) elements. 





-----------

