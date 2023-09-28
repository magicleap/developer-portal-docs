---
title: MLAnchors
summary: spatial anchor management is closely tied to the selected mapping mode on the device. the modes are mutually exclusive and affect the functionality of these apis. the available mapping modes are 

---

# MLAnchors



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) management is closely tied to the selected mapping mode on the device. The modes are mutually exclusive and affect the functionality of these APIs. The available mapping modes are:   [More...](#detailed-description)  


Inherits from: <br></br>[MLAutoAPISingleton< MLAnchors >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)



## Detailed Description

```csharp
public class MLAnchors : MLAutoAPISingleton< MLAnchors > 
```


**Details**

Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) management is closely tied to the selected mapping mode on the device. The modes are mutually exclusive and affect the functionality of these APIs.For example, publishing an anchor is not available in "per-session" mapping mode.The available mapping modes are: Per-Session Mode - A non-persistent mode in which anchors are only available for the currently active tracking session. On-Device Mode - A persistent mode in which anchors are persisted locally and will be available in multiple sessions when localized to the same space in which they were published. 

On-Device Mode - A persistent mode in which anchors are persisted locally and will be available in multiple sessions when localized to the same space in which they were published.

AR Cloud Mode - A persistent mode in which anchors are persisted in the cloud environment and will be available in multiple sessions to devices that are localized to the same space in which they were published.





-----------



## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetLocalizationInfo {#mlresult-getlocalizationinfo}

```csharp
public static MLResult GetLocalizationInfo(
    out LocalizationInfo info
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [LocalizationInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.LocalizationInfo.md) |info|A structure containing information about the device's localization state. |






-----------

## Protected Methods

### StartAPI {#override-startapi}

Do API-specific creation/initialization of ML resources for this API, such as creating trackers, etc. Called automatically the first time  Instance  is accessed. Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StartAPI()
```




**Reimplements**: [StartAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

API-specific cleanup. Will be called whenever [MLDevice](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md) is destroyed (at the latest, when the application is shutting down). Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

## Public Attributes

### MaxSpaceNameLength {#const-uint-maxspacenamelength}

Maximum size for the name of the space in the #MLSpatialAnchorLocalizationInfo structure. 

```csharp

public const uint MaxSpaceNameLength = 64;

```






-----------

## Public Enums

### LocalizationStatus {#enums-localizationstatus}

LocalizationStatus 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NotLocalized | | The device is not currently localized.   |
| Localized | | The device has localized successfully.   |
| LocalizationPending | | A localization attempt is currently in progress.   |
| LocalizationFailed | | The last localization attempt failed.   |








-----------

### MappingMode {#enums-mappingmode}

The current mapping mode, set via settings. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| OnDevice | | Using on-device mapping .   |
| ARCloud | | Using cloud-based mapping.   |








-----------


