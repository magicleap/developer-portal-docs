---
title: MLCameraTests

---

# MLCameraTests



**NameSpace:** 
[UnitySDKPlayTests](/versioned_docs/version-31-Aug-2023/unity-api/api/UnitySDKPlayTests/UnitySDKPlayTests.md) 








## Public Methods

### void AddRigToScene {#void-addrigtoscene}

```csharp
public void AddRigToScene()
```






-----------

### IEnumerator MLCamera_ConnectCamera {#ienumerator-mlcamera-connectcamera}

```csharp
public IEnumerator MLCamera_ConnectCamera(
    MLCameraBase.ConnectFlag connectFlag,
    MLCameraBase.MRQuality mrQuality,
    MLCameraBase.CaptureFrameRate frameRate,
    VideoStabilization stabilization
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCameraBase.ConnectFlag](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-connectflag) |connectFlag|Flags to describe various modules in camera pipeline. |
| [MLCameraBase.MRQuality](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-mrquality) |mrQuality|MR Video Quality enumeration |
| [MLCameraBase.CaptureFrameRate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-captureframerate) |frameRate|Capture Frame Rate Call MLCameraPrepareCapture to configure frame rate use FrameRate&#95;None when configuring only Image capture FrameRate&#95;60fps only supported when resolution of captures &lt;= 1080P. |
| VideoStabilization |stabilization||






-----------

### IEnumerator MLCamera_EnableCamera {#ienumerator-mlcamera-enablecamera}

```csharp
public IEnumerator MLCamera_EnableCamera()
```






-----------

### IEnumerator MLCamera_PrepareCaptureForCaptureImage {#ienumerator-mlcamera-preparecaptureforcaptureimage}

```csharp
public IEnumerator MLCamera_PrepareCaptureForCaptureImage(
    MLCameraBase.CaptureType captureType,
    MLCameraBase.ConnectFlag connectFlag,
    MLCameraBase.OutputFormat outputFormat
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCameraBase.CaptureType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-capturetype) |captureType|Capture operation type |
| [MLCameraBase.ConnectFlag](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-connectflag) |connectFlag|Flags to describe various modules in camera pipeline. |
| [MLCameraBase.OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-outputformat) |outputFormat|Captured output format |






-----------

### IEnumerator MLCamera_PrepareCaptureForCapturePreview {#ienumerator-mlcamera-preparecaptureforcapturepreview}

```csharp
public IEnumerator MLCamera_PrepareCaptureForCapturePreview(
    MLCameraBase.CaptureFrameRate frameRate,
    MLCameraBase.ConnectFlag connectFlag,
    MLCameraBase.OutputFormat outputFormat
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCameraBase.CaptureFrameRate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-captureframerate) |frameRate|Capture Frame Rate Call MLCameraPrepareCapture to configure frame rate use FrameRate&#95;None when configuring only Image capture FrameRate&#95;60fps only supported when resolution of captures &lt;= 1080P. |
| [MLCameraBase.ConnectFlag](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-connectflag) |connectFlag|Flags to describe various modules in camera pipeline. |
| [MLCameraBase.OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-outputformat) |outputFormat|Captured output format |






-----------

### IEnumerator MLCamera_PrepareCaptureForStartRecording {#ienumerator-mlcamera-preparecaptureforstartrecording}

```csharp
public IEnumerator MLCamera_PrepareCaptureForStartRecording(
    MLCameraBase.CaptureFrameRate frameRate,
    MLCameraBase.CaptureType captureType,
    MLCameraBase.ConnectFlag connectFlag,
    MLCameraBase.OutputFormat outputFormat
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCameraBase.CaptureFrameRate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-captureframerate) |frameRate|Capture Frame Rate Call MLCameraPrepareCapture to configure frame rate use FrameRate&#95;None when configuring only Image capture FrameRate&#95;60fps only supported when resolution of captures &lt;= 1080P. |
| [MLCameraBase.CaptureType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-capturetype) |captureType|Capture operation type |
| [MLCameraBase.ConnectFlag](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-connectflag) |connectFlag|Flags to describe various modules in camera pipeline. |
| [MLCameraBase.OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-outputformat) |outputFormat|Captured output format |






-----------

### void RemoveRigFromScene {#void-removerigfromscene}

```csharp
public void RemoveRigFromScene()
```






-----------

## Public Enums

### VideoStabilization {#enums-videostabilization}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Stabilization_Enabled | |   |
| Stabilization_Disabled | |   |








-----------


