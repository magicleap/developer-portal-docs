---
title: MLWorldCamera
summary: magic leap 2 has three world cameras which it uses for environment tracking. the three cameras area located on the left, center, and right side of the headset. this api will provide a way to query for the frames from these world cameras, at this point the app will not be able to configure the world camera parameters. 

---

# MLWorldCamera



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Magic Leap 2 has three world cameras which it uses for environment tracking. The three cameras area located on the left, center, and right side of the headset. This API will provide a way to query for the frames from these world cameras, at this point the app will not be able to configure the world camera parameters.   [More...](#detailed-description)  


Inherits from: <br></br>[MLAutoAPISingleton< MLWorldCamera >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)



## Detailed Description

```csharp
public class MLWorldCamera : MLAutoAPISingleton< MLWorldCamera > 
```


**Details**

This is an experimental API which may be modified or removed without any prior notice. 





-----------



## Public Fields

### CurrentSettings {#settings-currentsettings}

```csharp

public Settings CurrentSettings { get; set; }

```

| Type | Description  | 
|--|--|
| [Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.Settings.md) | A structure to encapsulate the camera settings.  |





-----------

### IsConnected {#bool-isconnected}

```csharp

public bool IsConnected { get; set; }

```






-----------

## Public Methods

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Connect {#mlresult-connect}

Connect to world cameras. 

```csharp
public MLResult Connect(
    in Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.Settings.md) |settings|A structure to encapsulate the camera settings. |






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Disconnect {#mlresult-disconnect}

Disconnect from world camera. This will disconnect from all the world camera currently connected. 

```csharp
public MLResult Disconnect()
```






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetLatestWorldCameraData {#mlresult-getlatestworldcameradata}

Poll for Frames. Returns #MLWorldCameraData with this latest data when available. The memory is owned by the system. Application should copy the data it needs to cache it and then release the memory by calling #MLWorldCameraReleaseCameraData. This is a blocking call. API is not thread safe. If there are no new world camera data frames for a given duration (duration determined by the system) then the API will return MLResult&#95;Timeout. To Do : Are there any other meaningful return codes that we need to consider. Say something like MLResult&#95;ResourceNotAvailble for cases where the world camera is not ready yet or is not generating any data because its been turned off. 

```csharp
public MLResult GetLatestWorldCameraData(
    out Frame [] data,
    uint timeOutMs =1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [Frame](/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/Frame/UnityEngine.XR.MagicLeap.MLWorldCamera.Frame.md) [] |data|A structure to encapsulate per plane info for each camera frame. |
| uint |timeOutMs||






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) UpdateSettings {#mlresult-updatesettings}

Update the world camera settings. 

```csharp
public MLResult UpdateSettings(
    in Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.Settings.md) |settings|A structure to encapsulate the camera settings. |






-----------

## Protected Methods

### OnApplicationPause {#override-void-onapplicationpause}

Callback sent to all [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) APIs on application pause. 

```csharp
protected virtual override void OnApplicationPause(
    bool pauseStatus
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |pauseStatus|True if the application is paused, else False. |




**Reimplements**: [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#void-onapplicationpause)



-----------

### StartAPI {#override-startapi}

Do API-specific creation/initialization of ML resources for this API, such as creating trackers, etc. Called automatically the first time  Instance  is accessed. Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StartAPI()
```




**Reimplements**: [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

API-specific cleanup. Will be called whenever [MLDevice](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md) is destroyed (at the latest, when the application is shutting down). Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

## Public Enums

### CameraId {#enums-cameraid}

Enumeration of all the available world camera sensors. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Left | 1 << 0| Left World camera.   |
| Right | 1 << 1| Right World camera.   |
| Center | 1 << 2| Center World camera.   |
| All | Left | Right | Center| All World cameras.   |








-----------

### Mode {#enums-mode}

Enumeration of world camera modes. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unknown | 0| None.   |
| LowExposure | 1 << 0| Low exposure mode. This mode is currently only available when the controller is being tracked.   |
| NormalExposure | 1 << 1| Normal exposure mode.   |








-----------

