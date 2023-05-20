---
title: MLPowerManagerCallbacks
summary: a structure containing power manager callback events. individual callbacks which are not required by the power manager can be null. 

---

# MLPowerManagerCallbacks

**Module:** **[Power Manager](/api-ref/api/Modules/group___power_manager/group___power_manager.md)**



A structure containing Power Manager callback events. Individual callbacks which are not required by the Power Manager can be NULL.  [More...](#detailed-description)


`#include <ml_power_manager.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md#uint32-t-version)**  |
| void(*)(MLPowerManagerPowerState state, void *user_data) | **[on_power_state_changed](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md#void-on-power-state-changed)** <br></br>This callback will be invoked when [MLPowerManagerPowerState](/api-ref/api/Modules/group___power_manager/group___power_manager.md#enum-mlpowermanagerpowerstate) changes.  |
| void(*)(const MLPowerManagerPropertyData *properties, void *user_data) | **[on_properties_changed](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md#void-on-properties-changed)** <br></br>This callback will be invoked when [MLPowerManagerPropertyData](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) of a component changes. Only the properties that have changed will be returned, the component may support additional properties which values were not returned.  |
| void(*)(MLPowerManagerError error, void *user_data) | **[on_error_occurred](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md#void-on-error-occurred)** <br></br>This callback will be invoked when an [MLPowerManagerError](/api-ref/api/Modules/group___power_manager/group___power_manager.md#enum-mlpowermanagererror) occurs on one of the components.  |

## Detailed Description

```cpp
struct MLPowerManagerCallbacks;
```

A structure containing Power Manager callback events. Individual callbacks which are not required by the Power Manager can be NULL. 




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

### on_power_state_changed {#void-on-power-state-changed}

```cpp
void(*)(MLPowerManagerPowerState state, void *user_data) on_power_state_changed;
```

This callback will be invoked when [MLPowerManagerPowerState](/api-ref/api/Modules/group___power_manager/group___power_manager.md#enum-mlpowermanagerpowerstate) changes. 


| Type | Description |
|--|--|
| void(*)(MLPowerManagerPowerState state, void *user_data) | )(MLPowerManagerPowerState state, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |state|[MLPowerManagerPowerState](/api-ref/api/Modules/group___power_manager/group___power_manager.md#enum-mlpowermanagerpowerstate) representing the new power state. |
|  |user_data|User data as passed to the [MLPowerManagerSetCallbacks](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagersetcallbacks). |




-----------

### on_properties_changed {#void-on-properties-changed}

```cpp
void(*)(const MLPowerManagerPropertyData *properties, void *user_data) on_properties_changed;
```

This callback will be invoked when [MLPowerManagerPropertyData](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) of a component changes. Only the properties that have changed will be returned, the component may support additional properties which values were not returned. 


| Type | Description |
|--|--|
| void(*)(const MLPowerManagerPropertyData *properties, void *user_data) | )(const MLPowerManagerPropertyData *properties, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |properties|[MLPowerManagerPropertyData](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) struct encapsulating the properties changed. |
|  |user_data|User data as passed to the [MLPowerManagerSetCallbacks](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagersetcallbacks). |




-----------

### on_error_occurred {#void-on-error-occurred}

```cpp
void(*)(MLPowerManagerError error, void *user_data) on_error_occurred;
```

This callback will be invoked when an [MLPowerManagerError](/api-ref/api/Modules/group___power_manager/group___power_manager.md#enum-mlpowermanagererror) occurs on one of the components. 


| Type | Description |
|--|--|
| void(*)(MLPowerManagerError error, void *user_data) | )(MLPowerManagerError error, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |error|The error which has occurred. |
|  |user_data|User data as passed to the [MLPowerManagerSetCallbacks](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagersetcallbacks). |




-----------

