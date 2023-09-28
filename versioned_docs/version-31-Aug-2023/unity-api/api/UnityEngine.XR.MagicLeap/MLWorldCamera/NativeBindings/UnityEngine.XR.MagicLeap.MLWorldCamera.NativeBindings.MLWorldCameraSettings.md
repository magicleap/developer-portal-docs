---
title: MLWorldCameraSettings
summary: a structure to encapsulate the camera settings. 

---

# MLWorldCameraSettings




A structure to encapsulate the camera settings.   





## Public Methods

###  MLWorldCameraSettings {#functions-mlworldcamerasettings}

```csharp
public MLWorldCameraSettings(
    in Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [Settings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.Settings.md) |settings|A structure to encapsulate the camera settings. |






-----------

## Public Attributes

### Cameras {#readonly-uint-cameras}

World cameras that need to be enabled.If you want to request frames from different world camera then "OR" the modes of interest to the app. The system may not be able to service all the requested cameras. This parameter is treated as a hint and data will be provided from the requested world cameras when available. 

```csharp

public readonly uint Cameras;

```






-----------

### Mode {#readonly-uint-mode}

World camera mode. If you want to request frames from different camera modes then "OR" the modes of interest to the app. The system may not be able to service all the requested camera modes. This parameter is treated as a hint and data will be provided for the requested camera modes when available. 

```csharp

public readonly uint Mode;

```






-----------

### Version {#readonly-uint-version}

Version of this structure. 

```csharp

public readonly uint Version;

```






-----------


