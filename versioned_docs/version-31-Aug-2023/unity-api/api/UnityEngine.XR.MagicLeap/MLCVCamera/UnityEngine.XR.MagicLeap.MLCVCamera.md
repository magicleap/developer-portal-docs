---
title: MLCVCamera
summary: mlcamera class exposes static functions to query camera related functions. most functions are currently a direct pass through functions to the native c-api functions and incur no overhead. 

---

# MLCVCamera



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


[MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) class exposes static functions to query camera related functions. Most functions are currently a direct pass through functions to the native C-API functions and incur no overhead.   


Inherits from: <br></br>[MLAutoAPISingleton< MLCVCamera >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)




## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetFramePose {#mlresult-getframepose}

Get transform between world origin and the camera. This method relies on a camera timestamp that is normally acquired from the MLCameraResultExtras structure, therefore this method is best used within a capture callback to maintain as much accuracy as possible. Requires ComputerVision permission. 

```csharp
public static MLResult GetFramePose(
    MLTime vcamTimestamp,
    out Matrix4x4 outTransform
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) |vcamTimestamp|Time in nanoseconds to request the transform.|
| out Matrix4x4 |outTransform|Output transformation matrix on success.|


**Details**

tran 





**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if outTransform parameter was not valid (null). [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed to obtain transform due to internal error. 



-----------

## Protected Methods

### OnApplicationPause {#override-void-onapplicationpause}

Callback sent to all [MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) APIs on application pause. 

```csharp
protected virtual override void OnApplicationPause(
    bool pauseStatus
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |pauseStatus|True if the application is paused, else False. |




**Reimplements**: [OnApplicationPause](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#void-onapplicationpause)



-----------

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


