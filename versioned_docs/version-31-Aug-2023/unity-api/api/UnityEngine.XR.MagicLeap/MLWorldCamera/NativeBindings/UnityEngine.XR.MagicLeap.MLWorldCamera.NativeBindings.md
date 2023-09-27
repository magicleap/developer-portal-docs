---
title: NativeBindings
summary: see ml-world-camera.h for additional comments. 

---

# NativeBindings




See ml&#95;world&#95;camera.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWorldCameraConnect {#mlresultcode-mlworldcameraconnect}

Connect to world cameras. 

```csharp
public MLResult.Code MLWorldCameraConnect(
    in MLWorldCameraSettings settings,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLWorldCamera.NativeBindings.MLWorldCameraSettings.md) |settings|A structure to encapsulate the camera settings. |
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWorldCameraDisconnect {#mlresultcode-mlworldcameradisconnect}

Disconnect from world camera. This will disconnect from all the world camera currently connected. 

```csharp
public MLResult.Code MLWorldCameraDisconnect(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWorldCameraGetLatestWorldCameraData {#mlresultcode-mlworldcameragetlatestworldcameradata}

Poll for Frames. Returns #MLWorldCameraData with this latest data when available. The memory is owned by the system. Application should copy the data it needs to cache it and then release the memory by calling #MLWorldCameraReleaseCameraData. This is a blocking call. API is not thread safe. If there are no new world camera data frames for a given duration (duration determined by the system) then the API will return MLResult&#95;Timeout. 

```csharp
public MLResult.Code MLWorldCameraGetLatestWorldCameraData(
    ulong handle,
    uint timeOutMs,
    ref IntPtr cameraData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| uint |timeOutMs||
| ref IntPtr |cameraData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWorldCameraReleaseCameraData {#mlresultcode-mlworldcamerareleasecameradata}

Releases specified #MLWorldCameraData object. This function should be called exactly once for each call to #MLWorldCameraGetLatestCameraData. 

```csharp
public MLResult.Code MLWorldCameraReleaseCameraData(
    ulong handle,
    IntPtr cameraData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| IntPtr |cameraData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWorldCameraUpdateSettings {#mlresultcode-mlworldcameraupdatesettings}

Update the world camera settings. 

```csharp
public MLResult.Code MLWorldCameraUpdateSettings(
    ulong handle,
    in MLWorldCameraSettings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| in [MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLWorldCamera.NativeBindings.MLWorldCameraSettings.md) |settings|A structure to encapsulate the camera settings. |






-----------


