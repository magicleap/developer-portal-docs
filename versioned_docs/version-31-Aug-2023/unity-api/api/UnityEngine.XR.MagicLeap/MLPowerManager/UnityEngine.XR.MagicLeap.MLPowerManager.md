---
title: MLPowerManager

---

# MLPowerManager



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 





Inherits from: <br></br>[MLAutoAPISingleton< MLPowerManager >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)




## Public Fields

### OnErrorOccurred {#onerroroccurreddelegate-onerroroccurred}

Event callback fired when an error occurs. 

```csharp

public static OnErrorOccurredDelegate OnErrorOccurred { get; set; }

```

| Type | Description  | 
|--|--|
| [OnErrorOccurredDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md#delegate-void-onerroroccurreddelegate) | This callback will be invoked when an #MLPowerManagerError occurs on one of the components.  |





-----------

### OnPowerStateChanged {#onpowerstatechangeddelegate-onpowerstatechanged}

Event callback fired when a power state change occurs. 

```csharp

public static OnPowerStateChangedDelegate OnPowerStateChanged { get; set; }

```

| Type | Description  | 
|--|--|
| [OnPowerStateChangedDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md#delegate-void-onpowerstatechangeddelegate) | This callback will be invoked when #MLPowerManagerPowerState changes.  |





-----------

### OnPropertiesChanged {#onpropertieschangeddelegate-onpropertieschanged}

Event callback fired when a property change occurs. 

```csharp

public static OnPropertiesChangedDelegate OnPropertiesChanged { get; set; }

```

| Type | Description  | 
|--|--|
| [OnPropertiesChangedDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md#delegate-void-onpropertieschangeddelegate) | This callback will be invoked when #MLPowerManagerPropertyData of a component changes. Only the properties that have changed will be returned, the component may support additional properties which values were not returned.  |





-----------

## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) GetAvailablePowerStates {#mlresultcode-getavailablepowerstates}

Get available power states for a component. data#PowerStateData holding list of available power states. 

```csharp
public static MLResult.Code GetAvailablePowerStates(
    out PowerStateData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [PowerStateData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.PowerStateData.md) |data|A structure to encapsulate output data when either getting available power states, or the current power state. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) GetAvailableProperties {#mlresultcode-getavailableproperties}

Request a list of the available [PropertyType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md#enums-propertytype). dataInformation about the properties of a component. 

```csharp
public static MLResult.Code GetAvailableProperties(
    out PropertyTypeData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [PropertyTypeData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.PropertyTypeData.md) |data|A structure to encapsulate output data when getting a component's available property types. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) GetComponentProperties {#mlresultcode-getcomponentproperties}

Get controller component properties. out&#95;propertiesInformation about the properties of a component.

```csharp
public static MLResult.Code GetComponentProperties(
    out PropertyData out&#95;properties
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [PropertyData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.PropertyData.md) |out&#95;properties|A structure to encapsulate output data when getting the current properties. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) GetPowerState {#mlresultcode-getpowerstate}

Get the current power state for a component. data#PowerStateData with the current power state of the component. 

```csharp
public static MLResult.Code GetPowerState(
    out PowerStateData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [PowerStateData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.PowerStateData.md) |data|A structure to encapsulate output data when either getting available power states, or the current power state. |






-----------

### delegate void OnErrorOccurredDelegate {#delegate-void-onerroroccurreddelegate}

This callback will be invoked when an #MLPowerManagerError occurs on one of the components. 

```csharp
public delegate void OnErrorOccurredDelegate(
    in Error error
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [Error](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md#enums-error) |error|The error which has occurred.|






-----------

### delegate void OnPowerStateChangedDelegate {#delegate-void-onpowerstatechangeddelegate}

This callback will be invoked when #MLPowerManagerPowerState changes. 

```csharp
public delegate void OnPowerStateChangedDelegate(
    in PowerState state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [PowerState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md#enums-powerstate) |state|#MLPowerManagerPowerState representing the new power state.|






-----------

### delegate void OnPropertiesChangedDelegate {#delegate-void-onpropertieschangeddelegate}

This callback will be invoked when #MLPowerManagerPropertyData of a component changes. Only the properties that have changed will be returned, the component may support additional properties which values were not returned. 

```csharp
public delegate void OnPropertiesChangedDelegate(
    in PropertyData properties
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [PropertyData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.PropertyData.md) |properties|#MLPowerManagerPropertyData struct encapsulating the properties changed.|






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) SetPowerState {#mlresultcode-setpowerstate}

Sets the power state of a component. settings[Settings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.Settings.md) used by the Power Manager updating a component's power state. 

```csharp
public static MLResult.Code SetPowerState(
    Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Settings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.Settings.md) |settings|A structure to encapsulate settings used by the Power Manager when requesting the power state to be changed. |






-----------

## Protected Methods

### StartAPI {#override-startapi}

Start the API. 

```csharp
protected virtual override MLResult.Code StartAPI()
```




**Reimplements**: [StartAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

Stop the API. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

## Public Enums

### BatteryInfo {#enums-batteryinfo}

Battery info/warning codes. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| OK | | No issues reported.   |
| BatteryLow | | Charge the component soon.   |
| BatteryCritical | | Charge the component immediately.   |








-----------

### ChargingState {#enums-chargingstate}

Power Manager charging states. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NotCharging | | Not charging.   |
| ChargingNormally | | Charging normally.   |








-----------

### Component {#enums-component}

Represents the different components which can be accessed/controlled using the Power Manager. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | | Invalid or no component.   |
| Controller | | Controller.   |








-----------

### ConnectionState {#enums-connectionstate}

Connection state of the component. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Connected | | Component is connected.   |
| Disconnected | | Component is disconnected.   |








-----------

### Error {#enums-error}

Power Manager error codes. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| InvalidSKU | | Controller component could not be connected due to Invalid SKU.   |








-----------

### PowerState {#enums-powerstate}

Power states. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | | Invalid or no power state.   |
| Normal | | Normal mode, this is the default or active state of the component.   |
| DisabledWhileCharging | | Charging only mode. When charging component it cannot be used.   |
| Standby | | Standby mode.   |
| Sleep | | Sleep mode.   |








-----------

### PropertyType {#enums-propertytype}

Power Manager property types. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BatteryInfo | | Extra info about battery, as represented by MLPowerManagerBatteryInfo.   |
| BatteryLevel | | Battery level. Range is between 0 and 100.   |
| ChargingState | | Charging state.   |
| ConnectionState | | Connection state.   |








-----------


