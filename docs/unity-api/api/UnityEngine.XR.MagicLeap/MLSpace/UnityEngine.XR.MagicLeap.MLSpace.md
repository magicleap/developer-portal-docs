---
title: MLSpace

---

# MLSpace



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 





Inherits from: <br></br>[MLAutoAPISingleton< MLSpace >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLAutoAPISingleton< MLSpace >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)




## Public Fields

### OnLocalizationEvent {#onlocalizationdelegate-onlocalizationevent}

Event callback fired when a space event occurs. 

```csharp

public static OnLocalizationDelegate OnLocalizationEvent { get; set; }

```






-----------

## Public Methods

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) ExportSpace {#mlresultcode-exportspace}

Export an on device Magic Leap [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). 

```csharp
public static MLResult.Code ExportSpace(
    in SpaceInfo info,
    out SpaceData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [SpaceInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceInfo.md) |info|[Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) data returned when we successfully import space. |
| out [SpaceData](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceData.md) |data|[Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) data used when importing a space. |






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) GetLocalizationResult {#mlresultcode-getlocalizationresult}

Requests the localization info. 

```csharp
public static MLResult.Code GetLocalizationResult(
    out LocalizationResult result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [LocalizationResult](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.LocalizationResult.md) |result|A structure containing information about the device's localization state. |






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) GetSpaceList {#mlresultcode-getspacelist}

Get the list of available spaces. The list of spaces returned will depend on the current device mapping mode. Only the Spaces associated with the current mapping mode will be returned by this call.Device mapping mode can be changed via the system application(s). 

```csharp
public static MLResult.Code GetSpaceList(
    out Space [] spaceList
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) [] |spaceList|A structure containing information about a Magic Leap [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). This structure must be initialized by calling #MLSpaceInit before use. |






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) ImportSpace {#mlresultcode-importspace}

Import a Magic Leap [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). 

```csharp
public static MLResult.Code ImportSpace(
    in SpaceData data,
    out SpaceInfo id
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [SpaceData](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceData.md) |data|[Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) data used when importing a space. |
| out [SpaceInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceInfo.md) |id|[Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) data returned when we successfully import space. |






-----------

### void LocalizationChanged {#void-localizationchanged}

```csharp
public static void LocalizationChanged(
    ref SpaceLocalizationResult result,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [SpaceLocalizationResult](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceLocalizationResult.md) |result|A structure containing information about the device's localization state. This structure must be initialized by calling #MLSpaceLocalizationResultInit before usebefore use. |
| IntPtr |data||






-----------

### delegate void MLSpaceDelegate {#delegate-void-mlspacedelegate}

```csharp
public delegate void MLSpaceDelegate(
    ref SpaceLocalizationResult result,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [SpaceLocalizationResult](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceLocalizationResult.md) |result|A structure containing information about the device's localization state. This structure must be initialized by calling #MLSpaceLocalizationResultInit before usebefore use. |
| IntPtr |data||






-----------

### delegate void OnLocalizationDelegate {#delegate-void-onlocalizationdelegate}

```csharp
public delegate void OnLocalizationDelegate(
    LocalizationResult result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [LocalizationResult](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.LocalizationResult.md) |result|A structure containing information about the device's localization state. |






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) RequestLocalization {#mlresultcode-requestlocalization}

Requests the localization info. 

```csharp
public static MLResult.Code RequestLocalization(
    ref SpaceInfo info
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [SpaceInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceInfo.md) |info|[Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) data returned when we successfully import space. |






-----------

## Protected Methods

### StartAPI {#override-startapi}

Start the API. 

```csharp
protected virtual override MLResult.Code StartAPI()
```


**Details**

permissions com.magicleap.permission.SPACE&#95;MANAGER (protection level: normal) 



**Reimplements**: [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

Stop the API. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

## Public Attributes

### MaxSpaceNameLength {#const-uint-maxspacenamelength}

Maximum size for the name of a Magic Leap [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). 

```csharp

public const uint MaxSpaceNameLength = 64;

```






-----------

## Public Enums

### Status {#enums-status}

The current localization status. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NotLocalized | | The device is currently not localized.   |
| Localized | | The device has localized successfully.   |
| LocalizationPending | | Localization attempt is currently in progress.   |
| SleepingBeforeRetry | | The device will attempt to localize after sleep duration is complete.   |








-----------

### Type {#enums-type}

Indicates the type of the [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| OnDevice | | On device space.   |
| ARCloud | | AR Cloud based space.   |








-----------

