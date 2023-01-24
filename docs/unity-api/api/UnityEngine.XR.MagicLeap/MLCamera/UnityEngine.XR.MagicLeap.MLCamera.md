---
title: MLCamera
summary: apis for accessing camera device and to do camera capture. 

---

# MLCamera



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


APIs for accessing Camera Device and to do Camera Capture.   [More...](#detailed-description)  


Inherits from: <br></br>[MLAPIBase](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAPIBase.md)



## Detailed Description

```csharp
public class MLCamera : MLAPIBase 
```


**Details**

[MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) class exposes static functions to query camera related functions. Most functions are currently a direct pass through functions to the native C-API functions and incur no overhead. 





-----------



## Public Fields

### OnDeviceAvailable {#ondeviceavailabilitystatusdelegate-ondeviceavailable}

Camera status callback, device available. 

```csharp

public static OnDeviceAvailabilityStatusDelegate OnDeviceAvailable { get; set; }

```

| Type | Description  | 
|--|--|
| [OnDeviceAvailabilityStatusDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#delegate-void-ondeviceavailabilitystatusdelegate) | Delegate to notify the app about camera device availability.  |





-----------

### OnDeviceUnavailable {#ondeviceavailabilitystatusdelegate-ondeviceunavailable}

Camera status callback, device unavailable. 

```csharp

public static OnDeviceAvailabilityStatusDelegate OnDeviceUnavailable { get; set; }

```

| Type | Description  | 
|--|--|
| [OnDeviceAvailabilityStatusDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#delegate-void-ondeviceavailabilitystatusdelegate) | Delegate to notify the app about camera device availability.  |





-----------

## Public Methods

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) CaptureImage {#mlresult-captureimage}

Capture still image. Result will be availble via the [MLCamera.OnRawImageAvailable](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#oncapturedframeavailabledelegate-onrawimageavailable) event. 

```csharp
public MLResult CaptureImage(
    uint numImages =1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |numImages|no of images to capture valid range is 1-10|






-----------

### Task&lt; [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; CaptureImageAsync {#task-captureimageasync}

Asynchronously capture still image. Result will be availble via the [MLCamera.OnRawImageAvailable](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#oncapturedframeavailabledelegate-onrawimageavailable) event. 

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

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) CapturePreviewStart {#mlresult-capturepreviewstart}

Start preview provide raw frames through callback 

```csharp
public MLResult CapturePreviewStart()
```






-----------

### Task&lt; [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; CapturePreviewStartAsync {#task-capturepreviewstartasync}

Asynchronously start preview capture The captured preview YUV frames will be returned to the application via [OnPreviewCaptureCompleted](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#onpreviewcapturecompleteddelegate-onpreviewcapturecompleted). Use [CapturePreviewStop](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#mlresult-capturepreviewstop) or [CapturePreviewStopAsync](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#task-capturepreviewstopasync) to stop the capture. 

```csharp
public Task< MLResult > CapturePreviewStartAsync()
```






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) CapturePreviewStop {#mlresult-capturepreviewstop}

Stop preview. 

```csharp
public MLResult CapturePreviewStop()
```






**Returns**: 



-----------

### Task&lt; [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; CapturePreviewStopAsync {#task-capturepreviewstopasync}

Asynchronously stop preview capture. 

```csharp
public Task< MLResult > CapturePreviewStopAsync()
```






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) CaptureVideoStart {#mlresult-capturevideostart}

Start video capture. capture either encoded video or YUV/RGBA frames. YUV/RGBA frames are provides through callback. For encoded video capture valid MediaRecorder object should be configured in the [PrepareCapture()](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#mlresult-preparecapture) call. The captured video YUV/RGBA frames will be returned via the OnRawVideoFrameAvailable and OnRawVideoFrameAvailable&#95;NativeCallbackThread events. 

```csharp
public MLResult CaptureVideoStart()
```






-----------

### Task&lt; [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; CaptureVideoStartAsync {#task-capturevideostartasync}

Asynchronously start video capture of either encoded video or YUV/RGBA frames. YUV/RGBA frames are provides through callback. For encoded video capture valid MediaRecorder object should be configured in the [PrepareCapture(CaptureConfig, out Metadata)](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#mlresult-preparecapture) call. The captured video YUV/RGBA frames will be returned via the OnRawVideoFrameAvailable and OnRawVideoFrameAvailable&#95;NativeCallbackThread events. 

```csharp
public Task< MLResult > CaptureVideoStartAsync()
```






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) CaptureVideoStop {#mlresult-capturevideostop}

Stop video capture. Should only be called at least 500ms after a [CaptureVideoStart()](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#mlresult-capturevideostart). 

```csharp
public MLResult CaptureVideoStop()
```






-----------

### Task&lt; [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; CaptureVideoStopAsync {#task-capturevideostopasync}

Asynchronously stop video capture. Should only be called at least 500ms after [CaptureVideoStart](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#mlresult-capturevideostart) or [CaptureVideoStartAsync](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#task-capturevideostartasync). 

```csharp
public Task< MLResult > CaptureVideoStopAsync()
```






-----------

### [MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) CreateAndConnect {#mlcamera-createandconnect}

Creates an [MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) instance and connects the camera device. Will return null if the [ConnectContext](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ConnectContext.md) is incorrectly configured. For example, if the context's [Flags](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ConnectContext.md#connectflag-flags) are set to [MLCamera.ConnectFlag.VirtualOnly](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-connectflag) when targeting the [CV camera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-cv). 

```csharp
public static MLCamera CreateAndConnect(
    ConnectContext connectContext
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ConnectContext](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ConnectContext.md) |connectContext|Connection settings|






**Returns**: [MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) instance if connection was successful, null otherwise



-----------

### Task&lt; [MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) &gt; CreateAndConnectAsync {#task-createandconnectasync}

Asynchronously creates an [MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) instance and connects the camera device. Will return null if the [ConnectContext](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ConnectContext.md) is incorrectly configured. For example, if the context's [Flags](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ConnectContext.md#connectflag-flags) are set to [MLCamera.ConnectFlag.VirtualOnly](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-connectflag) when targeting the [CV camera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-cv). 

```csharp
public static Task< MLCamera > CreateAndConnectAsync(
    ConnectContext connectContext
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ConnectContext](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ConnectContext.md) |connectContext|Connection settings|






**Returns**: [MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) instance if connection was successful, null otherwise



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Disconnect {#mlresult-disconnect}

Disconnect the current camera. Should call MLCamera.Connect() again on this instance or create a new [MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) object using [MLCamera.CreateAndConnect()](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#mlcamera-createandconnect) function. 

```csharp
public MLResult Disconnect()
```






-----------

### Task&lt; [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; DisconnectAsync {#task-disconnectasync}

Asynchronously isconnect the camera. Should call MLCamera.Connect() again on this instance or create a new [MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) object using [MLCamera.CreateAndConnect()](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#mlcamera-createandconnect) function. 

```csharp
public Task< MLResult > DisconnectAsync()
```






-----------

### void FlipFrameVertically {#void-flipframevertically}

```csharp
public static void FlipFrameVertically(
    ref CameraOutput frame
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [CameraOutput](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.CameraOutput.md) |frame|Contains the information and data of each of the available buffers/planes in a capture Number of planes for JPEG and RGBA captures = 1 Number of planes for YUV captures = 3 |






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetCameraCharacteristics {#mlresult-getcameracharacteristics}

Provides an [MLCamera.Metadata](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/Metadata/UnityEngine.XR.MagicLeap.MLCamera.Metadata.md) object to configure the camera settings. 

```csharp
public MLResult GetCameraCharacteristics(
    out Metadata cameraMetadata
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [Metadata](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/Metadata/UnityEngine.XR.MagicLeap.MLCamera.Metadata.md) |cameraMetadata|MLCameraMetadata Summary placeholder. |






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetDeviceAvailabilityStatus {#mlresult-getdeviceavailabilitystatus}

Check availablity of a given camera device. [MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) instance should only be created & connected when the device is available. 

```csharp
public static MLResult GetDeviceAvailabilityStatus(
    Identifier camId,
    out bool deviceAvailable
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Identifier](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-identifier) |camId|Camera id to check availability for|
| out bool |deviceAvailable|True if device is available, false otherwise|






**Returns**: 



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetDeviceStatus {#mlresult-getdevicestatus}

Poll camera device status. Use [DeviceStatusFlag](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-devicestatusflag) to view specific status bit. Call [GetErrorCode(out ErrorType)](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#mlresult-geterrorcode) to obtain the error code if [DeviceStatusFlag.Error](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-error) bit is set. 

```csharp
public MLResult GetDeviceStatus(
    out DeviceStatusFlag status
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [DeviceStatusFlag](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-devicestatusflag) |status||






**Returns**: 



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetErrorCode {#mlresult-geterrorcode}

Obtain device error code. 

```csharp
public MLResult GetErrorCode(
    out ErrorType error
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [ErrorType](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-errortype) |error|The [ErrorType](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-errortype) which triggered [DeviceStatusFlag.Error](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-error)|






**Returns**: 



-----------

### [StreamCapability](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.StreamCapability.md) [] GetImageStreamCapabilitiesForCamera {#streamcapability-getimagestreamcapabilitiesforcamera}

```csharp
public static StreamCapability [] GetImageStreamCapabilitiesForCamera(
    MLCamera camera,
    params CaptureType [] captureTypes
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) |camera|APIs for accessing Camera Device and to do Camera Capture. |
| params [CaptureType](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-capturetype) [] |captureTypes|Capture operation type |






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetStreamCapabilities {#mlresult-getstreamcapabilities}

Get the [StreamCapabilitiesInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.StreamCapabilitiesInfo.md) for the connected camera, which contains the [stream capabilities](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.StreamCapability.md) for each supported capture stream. 

```csharp
public MLResult GetStreamCapabilities(
    out StreamCapabilitiesInfo [] streamCapabilities
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [StreamCapabilitiesInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.StreamCapabilitiesInfo.md) [] |streamCapabilities|Each item in the array refers to a possible capture stream. Every index within [StreamCapabilitiesInfo.StreamCapabilities] represents a [StreamCapability](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.StreamCapability.md) of that particular stream.|


**Details**

One camera can support multiple capture streams and each stream has it's own set of [StreamCapabilities](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.StreamCapability.md) (capture types and resolutions). 





-----------

### bool IsCaptureTypeSupported {#bool-iscapturetypesupported}

```csharp
public static bool IsCaptureTypeSupported(
    MLCamera camera,
    CaptureType captureType
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) |camera|APIs for accessing Camera Device and to do Camera Capture. |
| [CaptureType](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-capturetype) |captureType|Capture operation type |






-----------

### delegate void OnCaptureAbortedDelegate {#delegate-void-oncaptureaborteddelegate}

Delegate to notify the app when a capture request is aborted. 

```csharp
public delegate void OnCaptureAbortedDelegate()
```






-----------

### delegate void OnCaptureCompletedDelegate {#delegate-void-oncapturecompleteddelegate}

Delegate to notify the app when a capture request is completed. 

```csharp
public delegate void OnCaptureCompletedDelegate(
    Metadata metadataHandle,
    ResultExtras extra
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Metadata](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/Metadata/UnityEngine.XR.MagicLeap.MLCamera.Metadata.md) |metadataHandle|Handle to metadata of captured frame.|
| [ResultExtras](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ResultExtras.md) |extra|Carries capture result information of current captured frame.|






-----------

### delegate void OnCaptureFailedDelegate {#delegate-void-oncapturefaileddelegate}

Delegate to notify the app when a capture request fails. 

```csharp
public delegate void OnCaptureFailedDelegate(
    ResultExtras extra
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ResultExtras](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ResultExtras.md) |extra|Carries capture result information of current captured frame.|






-----------

### delegate void OnCapturedFrameAvailableDelegate {#delegate-void-oncapturedframeavailabledelegate}

Delegate to notify the app when the frame data of a capture is available. 

```csharp
public delegate void OnCapturedFrameAvailableDelegate(
    CameraOutput frameInfo,
    ResultExtras resultExtras,
    Metadata metadataHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [CameraOutput](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.CameraOutput.md) |frameInfo|Frame data|
| [ResultExtras](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ResultExtras.md) |extra|Carries capture result information of current captured frame.|
| [Metadata](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/Metadata/UnityEngine.XR.MagicLeap.MLCamera.Metadata.md) |metadataHandle|MLCameraMetadata Summary placeholder. |






-----------

### delegate void OnDeviceAvailabilityStatusDelegate {#delegate-void-ondeviceavailabilitystatusdelegate}

Delegate to notify the app about camera device availability. 

```csharp
public delegate void OnDeviceAvailabilityStatusDelegate(
    Identifier camId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Identifier](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-identifier) |camId|Identifier for the camera device which is available.|






-----------

### delegate void OnDeviceDisconnectedDelegate {#delegate-void-ondevicedisconnecteddelegate}

Delegate to notify the app when the camera device disconnects. 

```csharp
public delegate void OnDeviceDisconnectedDelegate(
    DisconnectReason reason
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [DisconnectReason](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-disconnectreason) |reason|Disconnect reason|






-----------

### delegate void OnDeviceErrorDelegate {#delegate-void-ondeviceerrordelegate}

Delegate to notify the app about camera device error 

```csharp
public delegate void OnDeviceErrorDelegate(
    ErrorType error
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ErrorType](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-errortype) |error|Error code|






-----------

### delegate void OnDeviceStatusDelegate {#delegate-void-ondevicestatusdelegate}

Delegate to notify the app about camera device status (idle or streaming) 

```csharp
public delegate void OnDeviceStatusDelegate()
```






-----------

### delegate void OnPreviewBufferAvailableDelegate {#delegate-void-onpreviewbufferavailabledelegate}

Delegate to notify the app when the frame data of a preview is available. 

```csharp
public delegate void OnPreviewBufferAvailableDelegate(
    Metadata metadataHandle,
    ResultExtras extra
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Metadata](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/Metadata/UnityEngine.XR.MagicLeap.MLCamera.Metadata.md) |metadataHandle|Handle to metadata of captured frame.|
| [ResultExtras](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ResultExtras.md) |extra|Carries capture result information of current captured frame.|






-----------

### delegate void OnPreviewCaptureCompletedDelegate {#delegate-void-onpreviewcapturecompleteddelegate}

Delegate to notify the app when the result of a preview capture is available. 

```csharp
public delegate void OnPreviewCaptureCompletedDelegate(
    MLResult result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |result|Result reporting whether the preview capture completed or not.|






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) PreCaptureAEAWB {#mlresult-precaptureaeawb}

Trigger AEAWB Convergence. This API triggers AEAWB sequence and returns when AEAWB convergence has been achieved. The users can either trigger and converge AEAWB metadata settings or use this API. 

```csharp
public MLResult PreCaptureAEAWB()
```






-----------

### Task&lt; [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) &gt; PreCaptureAEAWBAsync {#task-precaptureaeawbasync}

Trigger asynchronous AEAWB Convergence. This API triggers AEAWB sequence and completes when AEAWB convergence has been achieved. The users can either trigger and converge AEAWB metadata settings or use this API. 

```csharp
public Task< MLResult > PreCaptureAEAWBAsync()
```






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) PrepareCapture {#mlresult-preparecapture}

Prepare for capture. 

```csharp
public MLResult PrepareCapture(
    CaptureConfig captureConfig,
    out Metadata cameraMetadata
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [CaptureConfig](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.CaptureConfig.md) |captureConfig|Capture configuration.|
| out [Metadata](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/Metadata/UnityEngine.XR.MagicLeap.MLCamera.Metadata.md) |cameraMetadata|Camera metadata object to configure the camera for captures.|






-----------

### bool TryGetBestFitStreamCapabilityFromCollection {#bool-trygetbestfitstreamcapabilityfromcollection}

```csharp
public static bool TryGetBestFitStreamCapabilityFromCollection(
    StreamCapability [] streamCapabilities,
    int width,
    int height,
    CaptureType captureType,
    out StreamCapability streamCapability
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [StreamCapability](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.StreamCapability.md) [] |streamCapabilities||
| int |width||
| int |height||
| [CaptureType](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-capturetype) |captureType|Capture operation type |
| out [StreamCapability](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.StreamCapability.md) |streamCapability||






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Uninitialize {#mlresult-uninitialize}

```csharp
public static MLResult Uninitialize()
```






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) UpdateCaptureSettings {#mlresult-updatecapturesettings}

Update capture setting This API updates the capture settings for an active preview/video stream. The API can be used to update capture settings like exposure compensation manual exposure settings like exposure time, iso setting. The capture settings can be changed in [MLCamera.Metadata](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/Metadata/UnityEngine.XR.MagicLeap.MLCamera.Metadata.md) object returned by [MLCamera.PrepareCapture()](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#mlresult-preparecapture) function and then this API can be called to apply the capture settings. 

```csharp
public MLResult UpdateCaptureSettings()
```






-----------

## Protected Methods

### OnApplicationPause {#async-override-void-onapplicationpause}

Callback sent to all [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) APIs on application pause. 

```csharp
protected virtual async override void OnApplicationPause(
    bool pauseStatus
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |pauseStatus|True if the application is paused, else False. |




**Reimplements**: [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAPIBase.md#void-onapplicationpause)



-----------

## Public Attributes

### ConnectionContext {#connectcontext-connectioncontext}

The connection context used to create this [MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md) object. 

```csharp

public ConnectContext ConnectionContext => cameraConnectContext;

```

| Type | Description  | 
|--|--|
| [ConnectContext](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ConnectContext.md) | Camera connection settings.  |





-----------

### ConnectionEstablished {#bool-connectionestablished}

Connection status of the camera. 

```csharp

public bool ConnectionEstablished => cameraConnectionEstablished;

```






-----------

### CurrentFPS {#float-currentfps}

```csharp

public float CurrentFPS => currentFPS;

```






-----------

### PreviewTexture {#rendertexture-previewtexture}

A reference to Camera Preview texture. 

```csharp

public RenderTexture PreviewTexture => previewTexture;

```






-----------

## Public Events

### OnCaptureAborted {#oncaptureaborteddelegate-oncaptureaborted}

Callback is invoked when an ongoing video or preview capture or both are aborteddue to an error. 

```csharp
public OnCaptureAbortedDelegate OnCaptureAborted()
```






-----------

### OnCaptureCompleted {#oncapturecompleteddelegate-oncapturecompleted}

Callback is invoked when capturing single frame is completed and result is available. 

```csharp
public OnCaptureCompletedDelegate OnCaptureCompleted()
```






-----------

### OnCaptureFailed {#oncapturefaileddelegate-oncapturefailed}

Callback is invoked when a capture has failed when the camera device failed to produce a capture result for the request. 

```csharp
public OnCaptureFailedDelegate OnCaptureFailed()
```






-----------

### OnDeviceDisconnected {#ondevicedisconnecteddelegate-ondevicedisconnected}

Callback is invoked when the camera is disconnected. 

```csharp
public OnDeviceDisconnectedDelegate OnDeviceDisconnected()
```






-----------

### OnDeviceError {#ondeviceerrordelegate-ondeviceerror}

Camera status callback, device error. 

```csharp
public OnDeviceErrorDelegate OnDeviceError()
```






-----------

### OnDeviceIdle {#ondevicestatusdelegate-ondeviceidle}

Callback is invoked when the camera stops streaming. 

```csharp
public OnDeviceStatusDelegate OnDeviceIdle()
```






-----------

### OnDeviceStreaming {#ondevicestatusdelegate-ondevicestreaming}

Callback is invoked when the camera is streaming. 

```csharp
public OnDeviceStatusDelegate OnDeviceStreaming()
```






-----------

### OnPreviewBufferAvailable {#onpreviewbufferavailabledelegate-onpreviewbufferavailable}

Callback is invoked when a captured preview frame buffer is available, invoked on the main thread. 

```csharp
public OnPreviewBufferAvailableDelegate OnPreviewBufferAvailable()
```






-----------

### OnPreviewCaptureCompleted {#onpreviewcapturecompleteddelegate-onpreviewcapturecompleted}

Callback is invoked when a preview video frame buffer is available with [MLCamera.CaptureType.Preview](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-preview). Not valid for MR/VR Capture since it does not have preview support. 

```csharp
public OnPreviewCaptureCompletedDelegate OnPreviewCaptureCompleted()
```






-----------

### OnRawImageAvailable {#oncapturedframeavailabledelegate-onrawimageavailable}

Callback is invoked when a captured image buffer is available. 

```csharp
public OnCapturedFrameAvailableDelegate OnRawImageAvailable()
```






-----------

### OnRawVideoFrameAvailable {#oncapturedframeavailabledelegate-onrawvideoframeavailable}

Callback is invoked when a captured raw/compressed video frame buffer is available, invoked on the main thread. 

```csharp
public OnCapturedFrameAvailableDelegate OnRawVideoFrameAvailable()
```






-----------

### OnRawVideoFrameAvailable_NativeCallbackThread {#oncapturedframeavailabledelegate-onrawvideoframeavailable-nativecallbackthread}

Camera capture callback, capture raw video frame, invoked on the same thread as the native callback, allowing the use of the unmanaged native pointer to the frame data memory. 

```csharp
public OnCapturedFrameAvailableDelegate OnRawVideoFrameAvailable_NativeCallbackThread()
```






-----------

## Public Enums

### CaptureFrameRate {#enums-captureframerate}

Capture Frame Rate Call MLCameraPrepareCapture to configure frame rate use FrameRate&#95;None when configuring only Image capture FrameRate&#95;60fps only supported when resolution of captures &lt;= 1080P. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | | None Still Capture   |
| _15FPS | | Specified 15FPS   |
| _30FPS | | Specified 30FPS   |
| _60FPS | | Specified 60FPS   |








-----------

### CaptureType {#enums-capturetype}

Capture operation type 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Image | | To capture an image   |
| Video | | To capture a video   |
| Preview | | To capture a video and and access the raw buffer of the frames.   |








-----------

### ConnectFlag {#enums-connectflag}

Flags to describe various modules in camera pipeline. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CamOnly | | Camera only frame capture   |
| VirtualOnly | | virtual only capture   |
| MR | | Mixed Reality capture   |








-----------

### DeviceStatusFlag {#enums-devicestatusflag}

Client can implement polling mechanism to retrieve device status and use these masks to view device status. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Connected | 1 << 0| Connected   |
| Idle | 1 << 1| Idle   |
| Streaming | 1 << 2| Opened.   |
| Disconnected | 1 << 3| Disconnected.   |
| Error | 1 << 4| Error. Call MLCameraGetErrorCode() to obtain the error code.   |








-----------

### DisconnectReason {#enums-disconnectreason}

Camera Disconnect Reason. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DeviceLost | | Device Lost.   |
| PriorityLost | | Priority Lost.   |








-----------

### ErrorType {#enums-errortype}

Camera errors 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0| No error   |
| Invalid | | Invalid state   |
| Disabled | | Camera disabled   |
| DeviceFailed | | Camera device failed   |
| ServiceFailed | | Camera service failed   |
| CaptureFailed | | Capture failed   |








-----------

### Identifier {#enums-identifier}

Logical Camera identifiers available for access. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Main | 0| x86 logical camera   |
| CV | | CV logical camera   |








-----------

### MRBlendType {#enums-mrblendtype}

Comment Needed! 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Additive | 1| Additive Blend Type. It simply adds pixel values of real world and virtual layer.   |








-----------

### MRQuality {#enums-mrquality}

MR Video Quality enumeration 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| _648x720 | 1| Specifies 648 x 720 resolution. Aspect ratio: 9x10.   |
| _972x1080 | 2| Specifies 972 x 1080 resolution. Aspect ratio: 9x10.   |
| _1944x2160 | 3| Specifies 1944 x 2160 resolution. Aspect ratio: 9x10. [CaptureFrameRate.&#95;60FPS](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-60fps) is not supported for this quality mode.   |
| _960x720 | 4| Specifies 960 x 720 resolution. Aspect ratio: 4x3.   |
| _1440x1080 | 5| Specifies 1440 x 1080 resolution. Aspect ratio: 4x3.   |
| _2880x2160 | 6| Specifies 2880 x 2160 resolution. Aspect ratio: 4x3. [CaptureFrameRate.&#95;60FPS](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-60fps) is not supported for this quality mode.   |








-----------

### MetadataColorCorrectionAberrationMode {#enums-metadatacolorcorrectionaberrationmode}

The metadata for the color correction aberration mode. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Off | 0| The color correction aberration mode: Off.   |
| Fast | | The color correction aberration mode: Fast.   |
| HighQuality | | The color correction aberration mode: High Quality.   |








-----------

### MetadataColorCorrectionMode {#enums-metadatacolorcorrectionmode}

The metadata for the color correction mode. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TransformMatrix | 0| The color correction mode: Transform Matrix   |
| Fast | | The color correction mode: Fast   |
| HighQuality | | The color correction mode: High Quality   |








-----------

### MetadataControlAEAntibandingMode {#enums-metadatacontrolaeantibandingmode}

The metadata for the control AE anti banding mode. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Off | 0| The control AE anti banding mode: Off   |
| FiftyHz | | The control AE anti banding mode: 50hz   |
| SixtyHz | | The control AE anti banding mode: 60hz   |
| Auto | | The control AE anti banding mode: Auto   |








-----------

### MetadataControlAELock {#enums-metadatacontrolaelock}

The metadata for the control AE lock. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Off | 0| The control AE lock: Off   |
| On | | The control AE lock: On   |








-----------

### MetadataControlAEMode {#enums-metadatacontrolaemode}

The metadata for the control AE mode. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Off | 0| The control AE mode: Off.   |
| On | | The control AE mode: On.   |








-----------

### MetadataControlAEState {#enums-metadatacontrolaestate}

The metadata for the control AE state. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Inactive | 0| The control AE state: Inactive   |
| Searching | | The control AE state: Searching   |
| Converged | | The control AE state: Converged   |
| Locked | | The control AE state: Locked   |
| FlashRequired | | The control AE state: Flash Required   |
| PreCapture | | The control AE state: Pre-capture   |








-----------

### MetadataControlAWBLock {#enums-metadatacontrolawblock}

The metadata for the control AWB lock. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Off | 0| The control AWB lock: Off   |
| On | | The control AWB lock: On   |








-----------

### MetadataControlAWBMode {#enums-metadatacontrolawbmode}

The metadata for the control AWB mode. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Off | 0| The control AWB mode: Off   |
| Auto | | The control AWB mode: Auto   |
| Incandescent | | The control AWB mode: Incandescent   |
| Fluorescent | | The control AWB mode: Fluorescent   |
| WarmFluorescent | | The control AWB mode: Warm Fluorescent   |
| Daylight | | The control AWB mode: Daylight   |
| CloudyDaylight | | The control AWB mode: Cloudy Day Light   |
| Twilight | | The control AWB mode: Twilight   |
| Shade | | The control AWB mode: Shade   |








-----------

### MetadataControlAWBState {#enums-metadatacontrolawbstate}

The metadata for the control AWB state. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Inactive | 0| The control AWB state: Inactive   |
| Searching | | The control AWB state: Searching   |
| Converged | | The control AWB state: Converged   |
| Locked | | The control AWB state: Locked   |








-----------

### MetadataScalerAvailableFormats {#enums-metadatascaleravailableformats}

The metadata for  scaler  available formats. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| RAW16 | 0x20| RAW16 Format   |
| RAW_OPAQUE | 0x24| RAW OPAQUE Format   |
| YV12 | 0x32315659| YV12 Format   |
| YCrCb_420_SP | 0x11|  YCrCb 420 SP Format   |
| IMPLEMENTATION_DEFINED | 0x22| Implementation Defined   |
| YCbCr_420_888 | 0x23|  YCbCr 420 888 Format   |
| BLOB | 0x21| BLOB Format   |








-----------

### MetadataScalerAvailableStreamConfigurations {#enums-metadatascaleravailablestreamconfigurations}

The metadata for  scaler  available stream configurations. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| OUTPUT | 0| The  scaler  available stream configuration: Output   |
| INPUT | | The  scaler  available stream configuration: Input   |








-----------

### OutputFormat {#enums-outputformat}

Captured output format 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| YUV_420_888 | 1| YUV planar format.   |
| JPEG | | Compressed output stream.   |
| RGBA_8888 | | RGB32 format.   |








-----------

