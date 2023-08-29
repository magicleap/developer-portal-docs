---
title: MLEyeCamera
summary: mleyecamera class exposes static functions to query eye camera related functions. most functions are currently a direct pass through functions to the native c-api functions and incur no overhead. 

---

# MLEyeCamera



**NameSpace:** 
[MagicLeap](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


MLEyeCamera class exposes static functions to query eye camera related functions. Most functions are currently a direct pass through functions to the native C-API functions and incur no overhead.   


Inherits from: <br></br>[MLAutoAPISingleton< MLEyeCamera >](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)




## Public Fields

### ActiveCameras {#mleyecameraidentifier-activecameras}

The enumerated value representing which eye cameras are currently active. 

```csharp

public static MLEyeCameraIdentifier ActiveCameras { get; set; }

```

| Type | Description  | 
|--|--|
| [MLEyeCameraIdentifier](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/UnityEngine.XR.MagicLeap.MLEyeCamera.md#enums-mleyecameraidentifier) | Enumeration of all the available eye camera sensors.  |





**Returns**: 



-----------

### ActiveCamerasCount {#int-activecamerascount}

The number of active eye cameras. 

```csharp

public static int ActiveCamerasCount { get; set; }

```






-----------

## Public Methods

### void CopyImageFrameDataToByteArray {#void-copyimageframedatatobytearray}

Converts an image frame data pointer into a byte array. 

```csharp
public static void CopyImageFrameDataToByteArray(
    EyeCameraFrameBuffer imageFrame,
    ref byte[] byteArray
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [EyeCameraFrameBuffer](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/UnityEngine.XR.MagicLeap.MLEyeCamera.EyeCameraFrameBuffer.md) |imageFrame|The associated eye camera frame buffer for an eye camera.|
| ref byte[] |byteArray|The image data from the native eye camera data as a byte array.|






-----------

### [MLResult](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetLatestCameraData {#mlresult-getlatestcameradata}

Polls for Frames. Returns EyeCameraData with this latest data when available.    If there are no new camera frames within the timeout&#95;ms duration then the API will return MLResult&#95;Timeout. 

```csharp
public static MLResult GetLatestCameraData(
    out EyeCameraData outData,
    UInt64 timeoutMS
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [EyeCameraData](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/UnityEngine.XR.MagicLeap.MLEyeCamera.EyeCameraData.md) |outData|Eye camera data to be output.|
| UInt64 |timeoutMS|Timeout in milliseconds.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if succesfully fetched the camera frames and released the native data. MLResult.Result will be  MLResult.Code.Timeout  returned because no new frame available at this time. MLResult.Result will be  MLResult.Code.InvalidParam  if one of the parameters is invalid. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if the operation failed due to an internal error. 



-----------

### [MLResult](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) UpdateSettings {#mlresult-updatesettings}

Update the eye camera settings. 

```csharp
public static MLResult UpdateSettings(
    MLEyeCameraIdentifier cameras
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLEyeCameraIdentifier](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/UnityEngine.XR.MagicLeap.MLEyeCamera.md#enums-mleyecameraidentifier) |cameras|The specific eye cameras that will be active with the updated settings.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if the settings updated successfully. MLResult.Result will be  MLResult.Code.InvalidParam  if one of the parameters is invalid. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if the operation failed due to an internal error. 



-----------

## Protected Methods

### StartAPI {#override-startapi}

Do API-specific creation/initialization of ML resources for this API, such as creating trackers, etc. Called automatically the first time  Instance  is accessed. Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StartAPI()
```




**Reimplements**: [StartAPI](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

API-specific cleanup. Will be called whenever MLDevice is destroyed (at the latest, when the application is shutting down). Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

## Public Attributes

### MaxFrameCount {#const-int-maxframecount}

The maximum number of eye camera frames. 

```csharp

public static const int MaxFrameCount = 4;

```






-----------

## Public Enums

### MLEyeCameraIdentifier {#enums-mleyecameraidentifier}

Enumeration of all the available eye camera sensors. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0| None.   |
| LeftTemple | 1 << 0| Left temple eye camera.   |
| LeftNasal | 1 << 1| Left nasal eye camera.   |
| RightNasal | 1 << 2| Right nasal eye camera.   |
| RightTemple | 1 << 3| Right temple eye camera.   |
| All | LeftTemple | LeftNasal | RightNasal | RightTemple| All Eye cameras.   |








-----------


