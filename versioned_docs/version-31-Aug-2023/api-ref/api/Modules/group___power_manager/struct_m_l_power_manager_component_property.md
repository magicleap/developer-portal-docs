---
title: MLPowerManagerComponentProperty
summary: a structure to encapsulate the data for each mlpowermanagerpropertytype. 

---

# MLPowerManagerComponentProperty

**Module:** **[Power Manager](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md)**



A structure to encapsulate the data for each [MLPowerManagerPropertyType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enum-mlpowermanagerpropertytype).  [More...](#detailed-description)


`#include <ml_power_manager.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLPowerManagerPropertyType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpropertytype) | **[property_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_component_property.md#mlpowermanagerpropertytype-property-type)**  |
| union MLPowerManagerComponentProperty::@25 | **[Anonymous 26](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_component_property.md#union-mlpowermanagercomponentproperty-25-anonymous-26)**  |

## Detailed Description

```cpp
struct MLPowerManagerComponentProperty;
```

A structure to encapsulate the data for each [MLPowerManagerPropertyType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enum-mlpowermanagerpropertytype). 

This struct and union is used as a flexible way for each component to output an array containing distinct types of data.

The below code shows how a Controller could output battery_info, battery_level, charging_state or connection_state. Where data is an instance of [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) returned from [MLPowerManagerGetComponentProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetcomponentproperties). 

```cpp
auto properties = data.properties;
  for (int num = 0; num < data.size; num++) {
    switch (properties[num]->property_type) {
      case (MLPowerManagerPropertyType_BatteryInfo):
        // Process properties[num]->battery_info enum
        break;
      case (MLPowerManagerPropertyType_BatteryLevel):
        // Process properties[num]->battery_level as integer
        break;
      case (MLPowerManagerPropertyType_ChargingState):
        // Process properties[num]->charging_state as enum
        break;
      case (MLPowerManagerPropertyType_ConnectionState):
        // Process properties[num]->connection_state as enum
        break;
      default:
        // Error handle if default case
        break;
    }
  }
```




**API Level:**
  * 27




-----------
## Public Attributes Documentation

### property_type {#mlpowermanagerpropertytype-property-type}

```cpp
MLPowerManagerPropertyType property_type;
```



| Type | Description |
|--|--|
| [MLPowerManagerPropertyType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpropertytype) | Power Manager property types. Query [MLPowerManagerGetAvailableProperties()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailableproperties) to determine which Power Manager properties are available for each component.  |


The type of each property. 





-----------

### Anonymous 26 {#union-mlpowermanagercomponentproperty-25-anonymous-26}

```cpp
union MLPowerManagerComponentProperty::@25 Anonymous 26;
```






-----------


