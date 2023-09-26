---
title: Settings
summary: a structure to encapsulate the camera settings. 

---

# Settings




A structure to encapsulate the camera settings.   





## Public Methods

###  Settings {#functions-settings}

```csharp
public Settings(
    Mode mode,
    CameraId cameras
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Mode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md#enums-mode) |mode|Enumeration of world camera modes. |
| [CameraId](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md#enums-cameraid) |cameras|Enumeration of all the available world camera sensors. |






-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### Cameras {#cameraid-cameras}

```csharp

public CameraId Cameras => cameras;

```

| Type | Description  | 
|--|--|
| [CameraId](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md#enums-cameraid) | Enumeration of all the available world camera sensors.  |





-----------

### Mode {#mode-mode}

```csharp

public Mode Mode => mode;

```

| Type | Description  | 
|--|--|
| [Mode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md#enums-mode) | Enumeration of world camera modes.  |





-----------


