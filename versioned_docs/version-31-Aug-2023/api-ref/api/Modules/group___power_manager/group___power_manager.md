---
title: Power Manager
summary: power manager provides a set of power management apis that allow applications to receive callbacks when the power state, properties or error conditions of components change, as well as apis to get device components power state and properties, and to set certain component power states. 

---

# Power Manager

Power Manager provides a set of power management APIs that allow applications to receive callbacks when the power state, properties or error conditions of components change, as well as APIs to get device components power state and properties, and to set certain component power states.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLPowerManagerComponentProperty](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_component_property.md)** <br></br>A structure to encapsulate the data for each [MLPowerManagerPropertyType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enum-mlpowermanagerpropertytype).  |
| union | **[MLPowerManagerComponentProperty.__unnamed__](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/union_m_l_power_manager_component_property_8____unnamed____.md)**  |
| struct | **[MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md)** <br></br>A structure to encapsulate output data when getting the current properties.  |
| struct | **[MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md)** <br></br>A structure to encapsulate output data when getting a component's available property types.  |
| struct | **[MLPowerManagerPropertyTypeInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_info.md)** <br></br>A structure to encapsulate information used by the Power Manager when getting the available property types.  |
| struct | **[MLPowerManagerPropertyInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_info.md)** <br></br>A structure to encapsulate info data used by the Power Manager when getting the current properties.  |
| struct | **[MLPowerManagerPowerStateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md)** <br></br>A structure to encapsulate settings used by the Power Manager when requesting the power state to be changed.  |
| struct | **[MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md)** <br></br>A structure to encapsulate info data used by the Power Manager when getting the current power state.  |
| struct | **[MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md)** <br></br>A structure to encapsulate output data when either getting available power states, or the current power state.  |
| struct | **[MLPowerManagerCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md)** <br></br>A structure containing Power Manager callback events. Individual callbacks which are not required by the Power Manager can be NULL.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLPowerManagerComponentProperty](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_component_property.md) | **[MLPowerManagerComponentProperty](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#struct-mlpowermanagercomponentproperty)** <br></br>A structure to encapsulate the data for each [MLPowerManagerPropertyType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enum-mlpowermanagerpropertytype).  |
| typedef struct [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) | **[MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#struct-mlpowermanagerpropertydata)** <br></br>A structure to encapsulate output data when getting the current properties.  |
| typedef struct [MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md) | **[MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#struct-mlpowermanagerpropertytypedata)** <br></br>A structure to encapsulate output data when getting a component's available property types.  |
| typedef struct [MLPowerManagerPropertyTypeInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_info.md) | **[MLPowerManagerPropertyTypeInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#struct-mlpowermanagerpropertytypeinfo)** <br></br>A structure to encapsulate information used by the Power Manager when getting the available property types.  |
| typedef struct [MLPowerManagerPropertyInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_info.md) | **[MLPowerManagerPropertyInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#struct-mlpowermanagerpropertyinfo)** <br></br>A structure to encapsulate info data used by the Power Manager when getting the current properties.  |
| typedef struct [MLPowerManagerPowerStateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md) | **[MLPowerManagerPowerStateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#struct-mlpowermanagerpowerstatesettings)** <br></br>A structure to encapsulate settings used by the Power Manager when requesting the power state to be changed.  |
| typedef struct [MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) | **[MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#struct-mlpowermanagerpowerstateinfo)** <br></br>A structure to encapsulate info data used by the Power Manager when getting the current power state.  |
| typedef struct [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) | **[MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#struct-mlpowermanagerpowerstatedata)** <br></br>A structure to encapsulate output data when either getting available power states, or the current power state.  |
| typedef struct [MLPowerManagerCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md) | **[MLPowerManagerCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#struct-mlpowermanagercallbacks)** <br></br>A structure containing Power Manager callback events. Individual callbacks which are not required by the Power Manager can be NULL.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 24](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-anonymous-enum-24)** <br></br> { <br></br>[MLResultAPIPrefix_PowerManager](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlresultapiprefix-powermanager) = ( 0x4c8a  << 16)<br></br>} |
| enum | **[MLPowerManagerResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerresult)** <br></br> { <br></br>[MLPowerManagerResult_NotConnected](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerresult-notconnected) = MLResultAPIPrefix_PowerManager,<br></br> [MLPowerManagerResult_InvalidStateTransition](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerresult-invalidstatetransition),<br></br> [MLPowerManagerResult_StateTransitionsDisabled](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerresult-statetransitionsdisabled),<br></br> [MLPowerManagerResult_UnsupportedState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerresult-unsupportedstate),<br></br> [MLPowerManagerResult_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerresult-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Power Manager specific return codes.  |
| enum | **[MLPowerManagerComponent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagercomponent)** <br></br> { <br></br>[MLPowerManagerComponent_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagercomponent-none) = 0,<br></br> [MLPowerManagerComponent_Controller](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagercomponent-controller) = 1,<br></br> [MLPowerManagerComponent_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagercomponent-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Represents the different components which can be accessed/controlled using the Power Manager.  |
| enum | **[MLPowerManagerError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagererror)** <br></br> { <br></br>[MLPowerManagerError_InvalidSKU](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagererror-invalidsku) = 0,<br></br> [MLPowerManagerError_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagererror-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Power Manager error codes.  |
| enum | **[MLPowerManagerPowerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpowerstate)** <br></br> { <br></br>[MLPowerManagerPowerState_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpowerstate-none) = 0,<br></br> [MLPowerManagerPowerState_Normal](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpowerstate-normal) = 1,<br></br> [MLPowerManagerPowerState_DisabledWhileCharging](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpowerstate-disabledwhilecharging) = 2,<br></br> [MLPowerManagerPowerState_Standby](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpowerstate-standby) = 3,<br></br> [MLPowerManagerPowerState_Sleep](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpowerstate-sleep) = 4,<br></br> [MLPowerManagerPowerState_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpowerstate-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Power states. Query [MLPowerManagerGetAvailablePowerStates()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailablepowerstates) to determine which power state is available for each component.  |
| enum | **[MLPowerManagerChargingState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerchargingstate)** <br></br> { <br></br>[MLPowerManagerChargingState_NotCharging](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerchargingstate-notcharging) = 0,<br></br> [MLPowerManagerChargingState_ChargingNormally](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerchargingstate-chargingnormally) = 1,<br></br> [MLPowerManagerChargingState_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerchargingstate-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Power Manager charging states.  |
| enum | **[MLPowerManagerConnectionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerconnectionstate)** <br></br> { <br></br>[MLPowerManagerConnectionState_Connected](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerconnectionstate-connected) = 0,<br></br> [MLPowerManagerConnectionState_Disconnected](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerconnectionstate-disconnected) = 1,<br></br> [MLPowerManagerConnectionState_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerconnectionstate-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Connection state of the component.  |
| enum | **[MLPowerManagerBatteryInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerbatteryinfo)** <br></br> { <br></br>[MLPowerManagerBatteryInfo_OK](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerbatteryinfo-ok) = 0,<br></br> [MLPowerManagerBatteryInfo_BatteryLow](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerbatteryinfo-batterylow) = 1,<br></br> [MLPowerManagerBatteryInfo_BatteryCritical](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerbatteryinfo-batterycritical) = 2,<br></br> [MLPowerManagerBatteryInfo_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerbatteryinfo-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Battery info/warning codes.  |
| enum | **[MLPowerManagerPropertyType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpropertytype)** <br></br> { <br></br>[MLPowerManagerPropertyType_BatteryInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpropertytype-batteryinfo) = 0,<br></br> [MLPowerManagerPropertyType_BatteryLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpropertytype-batterylevel) = 1,<br></br> [MLPowerManagerPropertyType_ChargingState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpropertytype-chargingstate) = 2,<br></br> [MLPowerManagerPropertyType_ConnectionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpropertytype-connectionstate) = 3,<br></br> [MLPowerManagerPropertyType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpropertytype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Power Manager property types. Query [MLPowerManagerGetAvailableProperties()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailableproperties) to determine which Power Manager properties are available for each component.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLPowerManagerPropertyTypeInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#void-mlpowermanagerpropertytypeinfoinit)**([MLPowerManagerPropertyTypeInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_info.md) * inout_property_type_info)<br></br>Initializes the default values for [MLPowerManagerPropertyTypeInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_info.md).  |
| void | **[MLPowerManagerPropertyInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#void-mlpowermanagerpropertyinfoinit)**([MLPowerManagerPropertyInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_info.md) * inout_property_info)<br></br>Initializes the default values for [MLPowerManagerPropertyInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_info.md).  |
| void | **[MLPowerManagerPowerStateSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#void-mlpowermanagerpowerstatesettingsinit)**([MLPowerManagerPowerStateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md) * inout_power_settings)<br></br>Initializes the default values for [MLPowerManagerPowerStateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md).  |
| void | **[MLPowerManagerPowerStateInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#void-mlpowermanagerpowerstateinfoinit)**([MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) * inout_power_info)<br></br>Initializes the default values for [MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md).  |
| void | **[MLPowerManagerCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#void-mlpowermanagercallbacksinit)**([MLPowerManagerCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md) * inout_cb)<br></br>Initializes the default values for [MLPowerManagerCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPowerManagerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagercreate)**([MLPowerManagerComponent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagercomponent) component, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a Power Manager handle for a specified component.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPowerManagerDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroys a Power Manager handle.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPowerManagerSetCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagersetcallbacks)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLPowerManagerCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md) * cb, void * user_data)<br></br>Register Power Manager callbacks for a specific handle.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPowerManagerSetPowerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagersetpowerstate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLPowerManagerPowerStateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md) * settings)<br></br>Sets the power state of a component. The new power state of a component will persist if the application loses focus, or exits.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPowerManagerGetComponentProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetcomponentproperties)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLPowerManagerPropertyInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_info.md) * in_info, [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) * out_properties)<br></br>Gets the power manager properties of a component.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPowerManagerReleasePropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepropertydata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) * properties)<br></br>Releases specified [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPowerManagerGetAvailablePowerStates](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailablepowerstates)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) * in_info, [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) * out_states)<br></br>Query available power states for a component.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPowerManagerGetPowerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetpowerstate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) * in_info, [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) * out_state)<br></br>Gets the power state of a component.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPowerManagerReleasePowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepowerstatedata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) * power_states)<br></br>Releases specified [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPowerManagerGetAvailableProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailableproperties)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLPowerManagerPropertyTypeInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_info.md) * in_info, [MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md) * out_properties)<br></br>Request a list of the available [MLPowerManagerPropertyType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpropertytype).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPowerManagerReleasePropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepropertytypedata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md) * properties)<br></br>Releases specified [MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md).  |
| const char * | **[MLPowerManagerGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#const-char-mlpowermanagergetresultstring)**([MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result_code)<br></br>Returns an ASCII string for each result code.  |

## Detailed Description

Power Manager provides a set of power management APIs that allow applications to receive callbacks when the power state, properties or error conditions of components change, as well as APIs to get device components power state and properties, and to set certain component power states. 


The API uses component specific handles, as such an application should create a handle for each kind of component it wishes to get/set power state or properties for. 




**Shared Object:**
  * power_manager.magicleap*




-----------
## Enums Documentation

### Anonymous Enum 24 {#enums-anonymous-enum-24}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResultAPIPrefix_PowerManager |  ( 0x4c8a  << 16)| Defines the prefix for Power Manager return codes. |








-----------

### MLPowerManagerResult {#enums-mlpowermanagerresult}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLPowerManagerResult_NotConnected |  MLResultAPIPrefix_PowerManager| Indicates the component is not connected. |
| MLPowerManagerResult_InvalidStateTransition | | Indicates the component does not currently support transitioning to requested state. |
| MLPowerManagerResult_StateTransitionsDisabled | | Indicates the component does not currently support transitioning to a different state. |
| MLPowerManagerResult_UnsupportedState | | Indicates the component does not support the requested power state. |
| MLPowerManagerResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Power Manager specific return codes. 




**API Level:**
  * 27




-----------

### MLPowerManagerComponent {#enums-mlpowermanagercomponent}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLPowerManagerComponent_None |  0| Invalid or no component. |
| MLPowerManagerComponent_Controller |  1| Controller. |
| MLPowerManagerComponent_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Represents the different components which can be accessed/controlled using the Power Manager. 




**API Level:**
  * 27




-----------

### MLPowerManagerError {#enums-mlpowermanagererror}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLPowerManagerError_InvalidSKU |  0| Controller component could not be connected due to Invalid SKU. |
| MLPowerManagerError_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Power Manager error codes. 




**API Level:**
  * 27




-----------

### MLPowerManagerPowerState {#enums-mlpowermanagerpowerstate}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLPowerManagerPowerState_None |  0| Invalid or no power state. |
| MLPowerManagerPowerState_Normal |  1| Normal mode, this is the default or active state of the component. |
| MLPowerManagerPowerState_DisabledWhileCharging |  2| Charging only mode. When charging component it cannot be used. |
| MLPowerManagerPowerState_Standby |  3| Standby mode. |
| MLPowerManagerPowerState_Sleep |  4| Sleep mode. |
| MLPowerManagerPowerState_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Power states. Query [MLPowerManagerGetAvailablePowerStates()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailablepowerstates) to determine which power state is available for each component. 


| Component  | Power State  | Description  |
|  -------- | -------- | -------- |
| Controller  | Normal  | Controller is active  |
| Disabled While Charging  | Certain SKUs cannot use controller while charging  |
| Standby  | Controller is turned on but inactive, press home button to switch to active manually  |
| Sleep  | Not supported for this component  |




**API Level:**
  * 27




-----------

### MLPowerManagerChargingState {#enums-mlpowermanagerchargingstate}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLPowerManagerChargingState_NotCharging |  0| Not charging. |
| MLPowerManagerChargingState_ChargingNormally |  1| Charging normally. |
| MLPowerManagerChargingState_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Power Manager charging states. 




**API Level:**
  * 27




-----------

### MLPowerManagerConnectionState {#enums-mlpowermanagerconnectionstate}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLPowerManagerConnectionState_Connected |  0| Component is connected. |
| MLPowerManagerConnectionState_Disconnected |  1| Component is disconnected. |
| MLPowerManagerConnectionState_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Connection state of the component. 




**API Level:**
  * 27




-----------

### MLPowerManagerBatteryInfo {#enums-mlpowermanagerbatteryinfo}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLPowerManagerBatteryInfo_OK |  0| No issues reported. |
| MLPowerManagerBatteryInfo_BatteryLow |  1| Charge the component soon. |
| MLPowerManagerBatteryInfo_BatteryCritical |  2| Charge the component immediately. |
| MLPowerManagerBatteryInfo_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Battery info/warning codes. 




**API Level:**
  * 27




-----------

### MLPowerManagerPropertyType {#enums-mlpowermanagerpropertytype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLPowerManagerPropertyType_BatteryInfo |  0| Extra info about battery, as represented by MLPowerManagerBatteryInfo. |
| MLPowerManagerPropertyType_BatteryLevel |  1| Battery level. Range is between 0 and 100. |
| MLPowerManagerPropertyType_ChargingState |  2| Charging state. |
| MLPowerManagerPropertyType_ConnectionState |  3| Connection state. |
| MLPowerManagerPropertyType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Power Manager property types. Query [MLPowerManagerGetAvailableProperties()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailableproperties) to determine which Power Manager properties are available for each component. 




**API Level:**
  * 27




-----------


## Types Documentation

### MLPowerManagerComponentProperty {#struct-mlpowermanagercomponentproperty}

```cpp
typedef struct MLPowerManagerComponentProperty MLPowerManagerComponentProperty;
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



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_component_property.md)


**API Level:**
  * 27




-----------

### MLPowerManagerPropertyData {#struct-mlpowermanagerpropertydata}

```cpp
typedef struct MLPowerManagerPropertyData MLPowerManagerPropertyData;
```

A structure to encapsulate output data when getting the current properties. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md)


**API Level:**
  * 27




-----------

### MLPowerManagerPropertyTypeData {#struct-mlpowermanagerpropertytypedata}

```cpp
typedef struct MLPowerManagerPropertyTypeData MLPowerManagerPropertyTypeData;
```

A structure to encapsulate output data when getting a component's available property types. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md)


**API Level:**
  * 27




-----------

### MLPowerManagerPropertyTypeInfo {#struct-mlpowermanagerpropertytypeinfo}

```cpp
typedef struct MLPowerManagerPropertyTypeInfo MLPowerManagerPropertyTypeInfo;
```

A structure to encapsulate information used by the Power Manager when getting the available property types. 

This structure must be initialized by calling [MLPowerManagerPropertyTypeInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#void-mlpowermanagerpropertytypeinfoinit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_info.md)


**API Level:**
  * 27




-----------

### MLPowerManagerPropertyInfo {#struct-mlpowermanagerpropertyinfo}

```cpp
typedef struct MLPowerManagerPropertyInfo MLPowerManagerPropertyInfo;
```

A structure to encapsulate info data used by the Power Manager when getting the current properties. 

This structure must be initialized by calling [MLPowerManagerPropertyInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#void-mlpowermanagerpropertyinfoinit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_info.md)


**API Level:**
  * 27




-----------

### MLPowerManagerPowerStateSettings {#struct-mlpowermanagerpowerstatesettings}

```cpp
typedef struct MLPowerManagerPowerStateSettings MLPowerManagerPowerStateSettings;
```

A structure to encapsulate settings used by the Power Manager when requesting the power state to be changed. 

This structure must be initialized by calling [MLPowerManagerPowerStateSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#void-mlpowermanagerpowerstatesettingsinit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md)


**API Level:**
  * 27




-----------

### MLPowerManagerPowerStateInfo {#struct-mlpowermanagerpowerstateinfo}

```cpp
typedef struct MLPowerManagerPowerStateInfo MLPowerManagerPowerStateInfo;
```

A structure to encapsulate info data used by the Power Manager when getting the current power state. 

This structure must be initialized by calling [MLPowerManagerPowerStateInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#void-mlpowermanagerpowerstateinfoinit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md)


**API Level:**
  * 27




-----------

### MLPowerManagerPowerStateData {#struct-mlpowermanagerpowerstatedata}

```cpp
typedef struct MLPowerManagerPowerStateData MLPowerManagerPowerStateData;
```

A structure to encapsulate output data when either getting available power states, or the current power state. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md)


**API Level:**
  * 27




-----------

### MLPowerManagerCallbacks {#struct-mlpowermanagercallbacks}

```cpp
typedef struct MLPowerManagerCallbacks MLPowerManagerCallbacks;
```

A structure containing Power Manager callback events. Individual callbacks which are not required by the Power Manager can be NULL. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md)


**API Level:**
  * 27




-----------


## Functions Documentation

### MLPowerManagerPropertyTypeInfoInit {#void-mlpowermanagerpropertytypeinfoinit}

```cpp
static inline void MLPowerManagerPropertyTypeInfoInit(
    MLPowerManagerPropertyTypeInfo * inout_property_type_info
)
```

Initializes the default values for [MLPowerManagerPropertyTypeInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_info.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLPowerManagerPropertyTypeInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_info.md) * |inout_property_type_info|The object to initialize with default values. |



**API Level:**
  * 27




-----------

### MLPowerManagerPropertyInfoInit {#void-mlpowermanagerpropertyinfoinit}

```cpp
static inline void MLPowerManagerPropertyInfoInit(
    MLPowerManagerPropertyInfo * inout_property_info
)
```

Initializes the default values for [MLPowerManagerPropertyInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_info.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLPowerManagerPropertyInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_info.md) * |inout_property_info|The object to initialize with default values. |



**API Level:**
  * 27




-----------

### MLPowerManagerPowerStateSettingsInit {#void-mlpowermanagerpowerstatesettingsinit}

```cpp
static inline void MLPowerManagerPowerStateSettingsInit(
    MLPowerManagerPowerStateSettings * inout_power_settings
)
```

Initializes the default values for [MLPowerManagerPowerStateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLPowerManagerPowerStateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md) * |inout_power_settings|The object to initialize with default values. |



**API Level:**
  * 27




-----------

### MLPowerManagerPowerStateInfoInit {#void-mlpowermanagerpowerstateinfoinit}

```cpp
static inline void MLPowerManagerPowerStateInfoInit(
    MLPowerManagerPowerStateInfo * inout_power_info
)
```

Initializes the default values for [MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) * |inout_power_info|The object to initialize with default values. |



**API Level:**
  * 27




-----------

### MLPowerManagerCallbacksInit {#void-mlpowermanagercallbacksinit}

```cpp
static inline void MLPowerManagerCallbacksInit(
    MLPowerManagerCallbacks * inout_cb
)
```

Initializes the default values for [MLPowerManagerCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLPowerManagerCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md) * |inout_cb|The object to initialize with default values. |



**API Level:**
  * 27




-----------

### MLPowerManagerCreate {#mlresult-mlpowermanagercreate}

```cpp
MLResult MLPowerManagerCreate(
    MLPowerManagerComponent component,
    MLHandle * out_handle
)
```

Creates a Power Manager handle for a specified component. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLPowerManagerComponent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagercomponent) |component|The component specific to the handle to be created. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|The handle to be created.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MlResult_HandleExists|Handle for this component already exists. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Power Manager handle was successfully created. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Power Manager handle failed to be created.|
**Required Permissions**:

  * none 


In a single application multiple calls to this API method, for the same component type will return a new handle each time. The handle is valid until [MLPowerManagerDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerdestroy) for that specific handle is called.




**API Level:**
  * 27




-----------

### MLPowerManagerDestroy {#mlresult-mlpowermanagerdestroy}

```cpp
MLResult MLPowerManagerDestroy(
    MLHandle handle
)
```

Destroys a Power Manager handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|The Power Manager handle for a specific component to be destroyed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Passed handle was invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Power Manager handle was successfully destroyed.|
**Required Permissions**:

  * None 





**API Level:**
  * 27




-----------

### MLPowerManagerSetCallbacks {#mlresult-mlpowermanagersetcallbacks}

```cpp
MLResult MLPowerManagerSetCallbacks(
    MLHandle handle,
    MLPowerManagerCallbacks * cb,
    void * user_data
)
```

Register Power Manager callbacks for a specific handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Power Manager handle for component to set [MLPowerManagerCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md) for. |
| [MLPowerManagerCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md) * |cb|Callbacks to receive Power Manager events. Set this to NULL to unregister callbacks. |
| void * |user_data|The caller can pass in user context data that will be returned in the callback (can be NULL).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The callbacks have been registered. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The [MLPowerManagerCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md) structure can be set for each handle, whether those handles are for the same or different component types.




**API Level:**
  * 27




-----------

### MLPowerManagerSetPowerState {#mlresult-mlpowermanagersetpowerstate}

```cpp
MLResult MLPowerManagerSetPowerState(
    MLHandle handle,
    const MLPowerManagerPowerStateSettings * settings
)
```

Sets the power state of a component. The new power state of a component will persist if the application loses focus, or exits. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Power Manager handle for component to set power state for. |
| const [MLPowerManagerPowerStateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md) * |settings|Settings used by the Power Manager updating a component's power state.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|The component does not support the requested power state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLPowerManagerResult_InvalidStateTransition|The component does not support transitioning to the requested state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLPowerManagerResult_NotConnected|The component is not connected. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The power state of the controller was set successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLPowerManagerResult_StateTransitionsDisabled|The component currently does not support transitioning to a different state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLPowerManagerResult_UnsupportedState|The component does not support the requested power state.|
**Required Permissions**:

  * None





**API Level:**
  * 27




-----------

### MLPowerManagerGetComponentProperties {#mlresult-mlpowermanagergetcomponentproperties}

```cpp
MLResult MLPowerManagerGetComponentProperties(
    MLHandle handle,
    const MLPowerManagerPropertyInfo * in_info,
    MLPowerManagerPropertyData * out_properties
)
```

Gets the power manager properties of a component. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Power Manager handle for component to get properties of. |
| const [MLPowerManagerPropertyInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_info.md) * |in_info|[MLPowerManagerPropertyInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_info.md) struct filled with information about the power manager properties of a component to request. |
| [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) * |out_properties|Information about the properties of a component. Must be released using [MLPowerManagerReleasePropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepropertydata) after each successful call.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The property of the controller was retrieved successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None





**API Level:**
  * 27




-----------

### MLPowerManagerReleasePropertyData {#mlresult-mlpowermanagerreleasepropertydata}

```cpp
MLResult MLPowerManagerReleasePropertyData(
    MLHandle handle,
    MLPowerManagerPropertyData * properties
)
```

Releases specified [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Power Manager handle for component relating to [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md). |
| [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) * |properties|Pointer to a [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) returned from [MLPowerManagerGetComponentProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetcomponentproperties).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|properties parameter was not valid (NULL). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


This function should be called exactly once for each successful call to [MLPowerManagerGetComponentProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetcomponentproperties).





-----------

### MLPowerManagerGetAvailablePowerStates {#mlresult-mlpowermanagergetavailablepowerstates}

```cpp
MLResult MLPowerManagerGetAvailablePowerStates(
    MLHandle handle,
    const MLPowerManagerPowerStateInfo * in_info,
    MLPowerManagerPowerStateData * out_states
)
```

Query available power states for a component. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Power Manager handle for component to get list of all available power states for. |
| const [MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) * |in_info|[MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) struct filled with data to be used by the Power Manager when requesting/receiving all available power states. |
| [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) * |out_states|[MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) holding list of available power states. Must be released using [MLPowerManagerReleasePowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepowerstatedata) after each successful call.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Query completed and out_states has been populated. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 27




-----------

### MLPowerManagerGetPowerState {#mlresult-mlpowermanagergetpowerstate}

```cpp
MLResult MLPowerManagerGetPowerState(
    MLHandle handle,
    const MLPowerManagerPowerStateInfo * in_info,
    MLPowerManagerPowerStateData * out_state
)
```

Gets the power state of a component. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Power Manager handle for component to get power state from. |
| const [MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) * |in_info|[MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) struct filled with data to be used by the Power Manager when requesting/receiving power state. |
| [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) * |power_state|[MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) with the current power state. Must be released using [MLPowerManagerReleasePowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepowerstatedata) after each successful call.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLPowerManagerResult_NotConnected|The component is not connected. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The power state of the controller was retrieved successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None





**API Level:**
  * 27




-----------

### MLPowerManagerReleasePowerStateData {#mlresult-mlpowermanagerreleasepowerstatedata}

```cpp
MLResult MLPowerManagerReleasePowerStateData(
    MLHandle handle,
    MLPowerManagerPowerStateData * power_states
)
```

Releases specified [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Power Manager handle for component relating to [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md). |
| [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) * |power_states|Pointer to a [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|power_states parameter was not valid (NULL). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


This function should be called exactly once for each successful call to [MLPowerManagerGetAvailablePowerStates](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailablepowerstates).





-----------

### MLPowerManagerGetAvailableProperties {#mlresult-mlpowermanagergetavailableproperties}

```cpp
MLResult MLPowerManagerGetAvailableProperties(
    MLHandle handle,
    const MLPowerManagerPropertyTypeInfo * in_info,
    MLPowerManagerPropertyTypeData * out_properties
)
```

Request a list of the available [MLPowerManagerPropertyType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#enums-mlpowermanagerpropertytype). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Power Manager handle for component to get properties from. |
| const [MLPowerManagerPropertyTypeInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_info.md) * |in_info|[MLPowerManagerPropertyTypeInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_info.md) struct filled with data to be used by the Power Manager when requesting/receiving available property types. |
| [MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md) * |out_properties|Information about the properties of a component. Must be released using [MLPowerManagerReleasePropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepropertytypedata) after each successful call.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Query completed and out_properties has been populated. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 27




-----------

### MLPowerManagerReleasePropertyTypeData {#mlresult-mlpowermanagerreleasepropertytypedata}

```cpp
MLResult MLPowerManagerReleasePropertyTypeData(
    MLHandle handle,
    MLPowerManagerPropertyTypeData * properties
)
```

Releases specified [MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Power Manager handle for component relating to [MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md). |
| [MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md) * |properties|Pointer to a [MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully [MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|properties parameter was not valid (NULL). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


This function should be called exactly once for each successful call to [MLPowerManagerGetAvailableProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailableproperties).





-----------

### MLPowerManagerGetResultString {#const-char-mlpowermanagergetresultstring}

```cpp
const char * MLPowerManagerGetResultString(
    MLResult result_code
)
```

Returns an ASCII string for each result code. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result_code|[MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) to select the result code. |

**Returns**

|  |   |   |
|--|--|--|
| const char * |ASCII|string containing readable version of result code.|
**Required Permissions**:

  * None 





**API Level:**
  * 27




-----------






