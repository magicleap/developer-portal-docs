---
title: NativeBindings
summary: see ml-power-manager.h for additional comments. 

---

# NativeBindings




See ml&#95;power&#95;manager.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### void HandleOnErrorOccurred {#void-handleonerroroccurred}

```csharp
public static void HandleOnErrorOccurred(
    Error error,
    in IntPtr user&#95;data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Error](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md#enums-error) |error|Power Manager error codes. |
| in IntPtr |user&#95;data||






-----------

### void HandleOnPowerChanged {#void-handleonpowerchanged}

```csharp
public static void HandleOnPowerChanged(
    PowerState state,
    in IntPtr user&#95;data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PowerState](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md#enums-powerstate) |state|Power states. |
| in IntPtr |user&#95;data||






-----------

### void HandleOnPropertiesChanged {#void-handleonpropertieschanged}

```csharp
public static void HandleOnPropertiesChanged(
    in MLPowerManagerPropertyData properties,
    in IntPtr user&#95;data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [MLPowerManagerPropertyData](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPropertyData.md) |properties|A structure to encapsulate output data when getting the current properties. |
| in IntPtr |user&#95;data||






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPowerManagerCreate {#mlresultcode-mlpowermanagercreate}

Creates a Power Manager handle for a specified component. 

```csharp
public static MLResult.Code MLPowerManagerCreate(
    Component component,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Component](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md#enums-component) |component|The component specific to the handle to be created.|
| out ulong |handle|The handle to be created.|






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPowerManagerDestroy {#mlresultcode-mlpowermanagerdestroy}

Destroys a Power Manager handle. 

```csharp
public static MLResult.Code MLPowerManagerDestroy(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The Power Manager handle for a specific component to be destroyed.|






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPowerManagerGetAvailablePowerStates {#mlresultcode-mlpowermanagergetavailablepowerstates}

Query available power states for a component. 

```csharp
public static MLResult.Code MLPowerManagerGetAvailablePowerStates(
    ulong handle,
    in MLPowerManagerPowerStateInfo in&#95;info,
    out MLPowerManagerPowerStateData out&#95;states
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Power Manager handle for component to get list of all available power states for.|
| in [MLPowerManagerPowerStateInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPowerStateInfo.md) |in&#95;info|#MLPowerManagerPowerStateInfo struct filled with data to be used by the Power Manager when requesting/receiving all available power states. |
| out [MLPowerManagerPowerStateData](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPowerStateData.md) |out&#95;states|#MLPowerManagerPowerStateData holding list of available power states.|






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPowerManagerGetAvailableProperties {#mlresultcode-mlpowermanagergetavailableproperties}

Request a list of the available #MLPowerManagerPropertyType. 

```csharp
public static MLResult.Code MLPowerManagerGetAvailableProperties(
    ulong handle,
    in MLPowerManagerPropertyTypeInfo in&#95;info,
    out MLPowerManagerPropertyTypeData out&#95;properties
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Power Manager handle for component to get properties from.|
| in [MLPowerManagerPropertyTypeInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPropertyTypeInfo.md) |in&#95;info|#MLPowerManagerPropertyTypeInfo struct filled with data to be used by the Power Manager when requesting/receiving available property types. |
| out [MLPowerManagerPropertyTypeData](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPropertyTypeData.md) |out&#95;properties|Information about the properties of a component. Must be released using #MLPowerManagerReleasePropertyTypeData after each successful call. |






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPowerManagerGetComponentProperties {#mlresultcode-mlpowermanagergetcomponentproperties}

Gets the power manager properties of a component. 

```csharp
public static MLResult.Code MLPowerManagerGetComponentProperties(
    ulong handle,
    in MLPowerManagerPropertyInfo in&#95;info,
    out MLPowerManagerPropertyData out&#95;properties
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Power Manager handle for component to get properties of.|
| in [MLPowerManagerPropertyInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPropertyInfo.md) |in&#95;info|#MLPowerManagerPropertyInfo struct filled with information about the power manager properties of a component to request. |
| out [MLPowerManagerPropertyData](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPropertyData.md) |out&#95;properties|Information about the properties of a component. Must be released using #MLPowerManagerReleasePropertyData after each successful call. |






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPowerManagerGetPowerState {#mlresultcode-mlpowermanagergetpowerstate}

Gets the power state of a component. 

```csharp
public static MLResult.Code MLPowerManagerGetPowerState(
    ulong handle,
    in MLPowerManagerPowerStateInfo in&#95;info,
    out MLPowerManagerPowerStateData out&#95;state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Power Manager handle for component to get power state from.|
| in [MLPowerManagerPowerStateInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPowerStateInfo.md) |in&#95;info|#MLPowerManagerPowerStateInfo struct filled with data to be used by the Power Manager when requesting/receiving power state. |
| out [MLPowerManagerPowerStateData](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPowerStateData.md) |out&#95;state|#MLPowerManagerPowerStateData with the current power state.Must be released using #MLPowerManagerReleasePowerStateData after each successful call. |






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPowerManagerReleasePowerStateData {#mlresultcode-mlpowermanagerreleasepowerstatedata}

Releases specified #MLPowerManagerPowerStateData. 

```csharp
public static MLResult.Code MLPowerManagerReleasePowerStateData(
    ulong handle,
    in MLPowerManagerPowerStateData power&#95;states
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Power Manager handle for component relating to #MLPowerManagerPowerStateData.|
| in [MLPowerManagerPowerStateData](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPowerStateData.md) |power&#95;states|Pointer to a #MLPowerManagerPowerStateData.|






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPowerManagerReleasePropertyData {#mlresultcode-mlpowermanagerreleasepropertydata}

Releases specified #MLPowerManagerPropertyData. 

```csharp
public static MLResult.Code MLPowerManagerReleasePropertyData(
    ulong handle,
    in MLPowerManagerPropertyData properties
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Power Manager handle for component relating to #MLPowerManagerPropertyData.|
| in [MLPowerManagerPropertyData](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPropertyData.md) |properties|Pointer to a #MLPowerManagerPropertyData returned from #MLPowerManagerGetComponentProperties. |






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPowerManagerReleasePropertyTypeData {#mlresultcode-mlpowermanagerreleasepropertytypedata}

Releases specified #MLPowerManagerPropertyTypeData. 

```csharp
public static MLResult.Code MLPowerManagerReleasePropertyTypeData(
    ulong handle,
    in MLPowerManagerPropertyTypeData properties
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Power Manager handle for component relating to #MLPowerManagerPropertyTypeData.|
| in [MLPowerManagerPropertyTypeData](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPropertyTypeData.md) |properties|Pointer to a #MLPowerManagerPropertyTypeData.|






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPowerManagerSetCallbacks {#mlresultcode-mlpowermanagersetcallbacks}

Register Power Manager callbacks for a specific handle. 

```csharp
public static MLResult.Code MLPowerManagerSetCallbacks(
    ulong handle,
    in MLPowerManagerCallbacks callbacks,
    in IntPtr user&#95;data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Power Manager handle for component to set #MLPowerManagerCallbacks for.|
| in [MLPowerManagerCallbacks](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerCallbacks.md) |callbacks|Callbacks to receive Power Manager events. Set this to NULL to unregister callbacks.|
| in IntPtr |user&#95;data|The caller can pass in user context data that will be returned in the callback(can be NULL). |






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPowerManagerSetPowerState {#mlresultcode-mlpowermanagersetpowerstate}

Sets the power state of a component. 

```csharp
public static MLResult.Code MLPowerManagerSetPowerState(
    ulong handle,
    in MLPowerManagerPowerStateSettings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Power Manager handle for component to set power state for.|
| in [MLPowerManagerPowerStateSettings](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPowerStateSettings.md) |settings|[Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.Settings.md) used by the Power Manager updating a component's power state.|






-----------

