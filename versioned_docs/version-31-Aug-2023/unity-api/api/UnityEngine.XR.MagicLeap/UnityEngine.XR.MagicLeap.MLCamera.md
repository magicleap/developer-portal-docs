---
title: MLCamera
summary: provides a multithreadig implementation of the camera api. handles pause behavior automatically. 

---

# MLCamera



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Provides a multithreadig implementation of the camera api. Handles pause behavior automatically.   


Inherits from: <br></br>[MLCameraBase](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md),<br></br>[MLAPIBase](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAPIBase.md)




## Public Methods

### Task&lt; [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; CaptureImageAsync {#task-captureimageasync}

Asynchronously capture still image. Result will be availble via the [MLCamera.OnRawImageAvailable](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#mlcameraoncapturedframeavailabledelegate-onrawimageavailable) event. 

```csharp
public Task< MLResult > CaptureImageAsync(
    uint numImages =1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |numImages|Number of images to capture. Valid range is 1-10|






-----------

### Task&lt; [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; CapturePreviewStartAsync {#task-capturepreviewstartasync}

Asynchronously start preview capture The captured preview YUV frames will be returned to the application via [OnPreviewCaptureCompleted](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#mlcameraonpreviewcapturecompleteddelegate-onpreviewcapturecompleted). Use [CapturePreviewStop](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#mlresult-capturepreviewstop) or [CapturePreviewStopAsync](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md#task-capturepreviewstopasync) to stop the capture. 

```csharp
public Task< MLResult > CapturePreviewStartAsync()
```






-----------

### Task&lt; [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; CapturePreviewStopAsync {#task-capturepreviewstopasync}

Asynchronously stop preview capture. 

```csharp
public Task< MLResult > CapturePreviewStopAsync()
```






-----------

### Task&lt; [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; CaptureVideoStartAsync {#task-capturevideostartasync}

Asynchronously start video capture of either encoded video or YUV/RGBA frames. YUV/RGBA frames are provides through callback. For encoded video capture valid MediaRecorder object should be configured in the PrepareCapture(CaptureConfig, out Metadata) call. The captured video YUV/RGBA frames will be returned via the OnRawVideoFrameAvailable and OnRawVideoFrameAvailable&#95;NativeCallbackThread events. 

```csharp
public Task< MLResult > CaptureVideoStartAsync()
```






-----------

### Task&lt; [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; CaptureVideoStopAsync {#task-capturevideostopasync}

Asynchronously stop video capture. Should only be called at least 500ms after [CaptureVideoStart](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#mlresult-capturevideostart) or [CaptureVideoStartAsync](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md#task-capturevideostartasync). 

```csharp
public Task< MLResult > CaptureVideoStopAsync()
```






-----------

### new static [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) Create {#new-static-create}

```csharp
public static new static MLCamera Create()
```






-----------

### [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) CreateAndConnect {#mlcamera-createandconnect}

Creates an [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) instance and connects the camera device. Will return null if the [ConnectContext] is incorrectly configured. For example, if the context's [Flags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ConnectContext.md#connectflag-flags) are set to [MLCamera.ConnectFlag.VirtualOnly](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-connectflag) when targeting the [CV camera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-cv). 

```csharp
public static MLCamera CreateAndConnect(
    ConnectContext connectContext
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ConnectContext](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ConnectContext.md) |connectContext|Connection settings|






**Returns**: [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) instance if connection was successful, null otherwise



-----------

### Task&lt; [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) &gt; CreateAndConnectAsync {#task-createandconnectasync}

Asynchronously creates an [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) instance and connects the camera device. Will return null if the [ConnectContext] is incorrectly configured. For example, if the context's [Flags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ConnectContext.md#connectflag-flags) are set to [MLCamera.ConnectFlag.VirtualOnly](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-connectflag) when targeting the [CV camera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-cv). 

```csharp
public static Task< MLCamera > CreateAndConnectAsync(
    ConnectContext connectContext
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ConnectContext](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ConnectContext.md) |connectContext|Connection settings|






**Returns**: [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) instance if connection was successful, null otherwise



-----------

### Task&lt; [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; DisconnectAsync {#task-disconnectasync}

Asynchronously isconnect the camera. Should call MLCamera.Connect() again on this instance or create a new [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) object using [MLCamera.CreateAndConnect()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md#mlcamera-createandconnect) function. 

```csharp
public Task< MLResult > DisconnectAsync()
```






-----------

### Task&lt; [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; PreCaptureAEAWBAsync {#task-precaptureaeawbasync}

Trigger asynchronous AEAWB Convergence. This API triggers AEAWB sequence and completes when AEAWB convergence has been achieved. The users can either trigger and converge AEAWB metadata settings or use this API. 

```csharp
public Task< MLResult > PreCaptureAEAWBAsync()
```






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




**Reimplements**: [OnApplicationPause](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAPIBase.md#void-onapplicationpause)



-----------


