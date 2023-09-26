---
title: NativeBindings
summary: see ml-cv-camera.h for additional comments. 

---

# NativeBindings




See ml&#95;cv&#95;camera.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCVCameraGetFramePose {#mlresultcode-mlcvcameragetframepose}

Get the camera pose in the world coordinate system. 

```csharp
public MLResult.Code MLCVCameraGetFramePose(
    ulong cvCameraHandle,
    ulong headHandle,
    CameraID id,
    long vcamTimestamp,
    ref MLTransform outTransform
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |cvCameraHandle|MLHandle previously created with MLCVCameraTrackingCreate.|
| ulong |headHandle|MLHandle previously created with MLHeadCameraCreate.|
| CameraID |id|The camera id.|
| long |vcamTimestamp|The timestamp of the frame pose.|
| ref [MLTransform](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) |outTransform|The transform of the frame pose.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCVCameraTrackingCreate {#mlresultcode-mlcvcameratrackingcreate}

Create Camera Tracker. 

```csharp
public MLResult.Code MLCVCameraTrackingCreate(
    ref ulong cvCameraHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref ulong |cvCameraHandle|tracker Handle.|






**Returns**: MLResult&#95;Ok On success. MLResult&#95;PermissionDenied Necessary permission is missing. MLResult&#95;UnspecifiedFailure Unable to create tracker.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCVCameraTrackingDestroy {#mlresultcode-mlcvcameratrackingdestroy}

Destroy Tracker after usage. 

```csharp
public MLResult.Code MLCVCameraTrackingDestroy(
    ulong cvCameraHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |cvCameraHandle|MLHandle previously created with MLCVCameraTrackingCreate.|






**Returns**: MLResult&#95;Ok On success. MLResult&#95;PermissionDenied Necessary permission is missing. MLResult&#95;UnspecifiedFailure Unable to create tracker. 



-----------

## Public Attributes

### MaxDistortionCoefficients {#const-uint-maxdistortioncoefficients}

 MLCVCameraIntrinsics&#95;MaxDistortionCoefficients  from ml&#95;cv&#95;camera.h 

```csharp

public const uint MaxDistortionCoefficients = 5;

```






-----------

## Public Enums

### CameraID {#enums-cameraid}

MLCVCameraID enum from ml&#95;cv&#95;camera.h 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ColorCamera | 0| RGB Camera.   |








-----------


