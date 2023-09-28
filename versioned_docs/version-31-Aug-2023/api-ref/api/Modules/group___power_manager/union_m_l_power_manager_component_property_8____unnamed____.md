---
title: MLPowerManagerComponentProperty.__unnamed__

---

# MLPowerManagerComponentProperty.__unnamed__

**Module:** **[Power Manager](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md)**





## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLPowerManagerBatteryInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerbatteryinfo) | **[battery_info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/union_m_l_power_manager_component_property_8____unnamed____.md#mlpowermanagerbatteryinfo-battery-info)**  |
| uint8_t | **[battery_level](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/union_m_l_power_manager_component_property_8____unnamed____.md#uint8-t-battery-level)**  |
| [MLPowerManagerChargingState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerchargingstate) | **[charging_state](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/union_m_l_power_manager_component_property_8____unnamed____.md#mlpowermanagerchargingstate-charging-state)**  |
| [MLPowerManagerConnectionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerconnectionstate) | **[connection_state](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/union_m_l_power_manager_component_property_8____unnamed____.md#mlpowermanagerconnectionstate-connection-state)**  |

## Public Attributes Documentation

### battery_info {#mlpowermanagerbatteryinfo-battery-info}

```cpp
MLPowerManagerBatteryInfo battery_info;
```



| Type | Description |
|--|--|
| [MLPowerManagerBatteryInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerbatteryinfo) | Battery info/warning codes.  |


Extra info about battery. 





-----------

### battery_level {#uint8-t-battery-level}

```cpp
uint8_t battery_level;
```


Battery level. Range is between 0 and 100. 





-----------

### charging_state {#mlpowermanagerchargingstate-charging-state}

```cpp
MLPowerManagerChargingState charging_state;
```



| Type | Description |
|--|--|
| [MLPowerManagerChargingState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerchargingstate) | Power Manager charging states.  |


Charging state. 





-----------

### connection_state {#mlpowermanagerconnectionstate-connection-state}

```cpp
MLPowerManagerConnectionState connection_state;
```



| Type | Description |
|--|--|
| [MLPowerManagerConnectionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerconnectionstate) | Connection state of the component.  |


Connection state. 





-----------


