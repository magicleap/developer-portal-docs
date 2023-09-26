---
title: MLCameraBase
summary: mlcamera class exposes static functions to query camera related functions. most functions are currently a direct pass through functions to the native c-api functions and incur no overhead. 

---

# MLCameraBase



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


[MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) class exposes static functions to query camera related functions. Most functions are currently a direct pass through functions to the native C-API functions and incur no overhead.   [More...](#detailed-description)  


Inherits from: <br></br>[MLAPIBase](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAPIBase.md)

Inherited by: <br></br>[UnityEngine.XR.MagicLeap.MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md)



## Detailed Description

```csharp
public class MLCameraBase : MLAPIBase 
```


**Details**

APIs for accessing Camera Device and to do Camera Capture. 





-----------



## Public Fields

### OnDeviceAvailable {#mlcameraondeviceavailabilitystatusdelegate-ondeviceavailable}

Camera status callback, device available. 

```csharp

public static MLCamera.OnDeviceAvailabilityStatusDelegate OnDeviceAvailable { get; set; }

```






-----------

### OnDeviceUnavailable {#mlcameraondeviceavailabilitystatusdelegate-ondeviceunavailable}

Camera status callback, device unavailable. 

```csharp

public static MLCamera.OnDeviceAvailabilityStatusDelegate OnDeviceUnavailable { get; set; }

```






-----------

## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) CaptureImage {#mlresult-captureimage}

Capture still image. Result will be availble via the [MLCamera.OnRawImageAvailable](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#mlcameraoncapturedframeavailabledelegate-onrawimageavailable) event. 

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

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) CapturePreviewStart {#mlresult-capturepreviewstart}

Start preview provide raw frames through callback 

```csharp
public MLResult CapturePreviewStart()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) CapturePreviewStop {#mlresult-capturepreviewstop}

Stop preview. 

```csharp
public MLResult CapturePreviewStop()
```






**Returns**: 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) CaptureVideoStart {#mlresult-capturevideostart}

Start video capture. capture either encoded video or YUV/RGBA frames. YUV/RGBA frames are provides through callback. For encoded video capture valid MediaRecorder object should be configured in the [PrepareCapture()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#mlresult-preparecapture) call. The captured video YUV/RGBA frames will be returned via the OnRawVideoFrameAvailable and OnRawVideoFrameAvailable&#95;NativeCallbackThread events. 

```csharp
public MLResult CaptureVideoStart()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) CaptureVideoStop {#mlresult-capturevideostop}

Stop video capture. Should only be called at least 500ms after a [CaptureVideoStart()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#mlresult-capturevideostart). 

```csharp
public MLResult CaptureVideoStop()
```






-----------

### void Cleanup {#void-cleanup}

```csharp
public void Cleanup()
```






-----------

### void ClearPreviewTexture {#void-clearpreviewtexture}

```csharp
public void ClearPreviewTexture()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Connect {#mlresult-connect}

```csharp
public MLResult Connect(
    MLCamera.ConnectContext connectContext
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.ConnectContext](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ConnectContext.md) |connectContext|Camera connection settings. |






-----------

### [MLCameraBase](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md) Create {#mlcamerabase-create}

```csharp
public static MLCameraBase Create()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Disconnect {#mlresult-disconnect}

Disconnect the current camera. Should call MLCamera.Connect() again on this instance or create a new [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) object using [MLCamera.CreateAndConnect()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md#mlcamera-createandconnect) function. 

```csharp
public MLResult Disconnect()
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
| ref [CameraOutput](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.CameraOutput.md) |frame|Contains the information and data of each of the available buffers/planes in a capture Number of planes for JPEG and RGBA captures = 1 Number of planes for YUV captures = 3 |






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetCameraCharacteristics {#mlresult-getcameracharacteristics}

Provides an MLCamera.Metadata object to configure the camera settings. 

```csharp
public MLResult GetCameraCharacteristics(
    out MLCamera.Metadata cameraMetadata
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [MLCamera.Metadata](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md) |cameraMetadata|MLCameraMetadata Summary placeholder. |






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetDeviceAvailabilityStatus {#mlresult-getdeviceavailabilitystatus}

Check availablity of a given camera device. [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) instance should only be created & connected when the device is available. 

```csharp
public static MLResult GetDeviceAvailabilityStatus(
    MLCamera.Identifier camId,
    out bool deviceAvailable
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.Identifier](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-identifier) |camId|Camera id to check availability for|
| out bool |deviceAvailable|True if device is available, false otherwise|






**Returns**: 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetDeviceStatus {#mlresult-getdevicestatus}

Poll camera device status. Use [DeviceStatusFlag](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-devicestatusflag) to view specific status bit. Call GetErrorCode(out ErrorType) to obtain the error code if [DeviceStatusFlag.Error](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-error) bit is set. 

```csharp
public MLResult GetDeviceStatus(
    out MLCamera.DeviceStatusFlag status
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [MLCamera.DeviceStatusFlag](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-devicestatusflag) |status||






**Returns**: 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetErrorCode {#mlresult-geterrorcode}

Obtain device error code. 

```csharp
public MLResult GetErrorCode(
    out MLCamera.ErrorType error
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [MLCamera.ErrorType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-errortype) |error|The [ErrorType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-errortype) which triggered [DeviceStatusFlag.Error](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-error)|






**Returns**: 



-----------

### [StreamCapability](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.StreamCapability.md) [] GetImageStreamCapabilitiesForCamera {#streamcapability-getimagestreamcapabilitiesforcamera}

```csharp
public static StreamCapability [] GetImageStreamCapabilitiesForCamera(
    MLCamera camera,
    params CaptureType [] captureTypes
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) |camera|Provides a multithreadig implementation of the camera api. Handles pause behavior automatically. |
| params [CaptureType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-capturetype) [] |captureTypes|Capture operation type |






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetStreamCapabilities {#mlresult-getstreamcapabilities}

Get the [StreamCapabilitiesInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.StreamCapabilitiesInfo.md) for the connected camera, which contains the [stream capabilities](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.StreamCapability.md) for each supported capture stream. 

```csharp
public MLResult GetStreamCapabilities(
    out MLCamera.StreamCapabilitiesInfo [] streamCapabilities
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [MLCamera.StreamCapabilitiesInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.StreamCapabilitiesInfo.md) [] |streamCapabilities|Each item in the array refers to a possible capture stream. Every index within [StreamCapabilitiesInfo.StreamCapabilities] represents a [StreamCapability](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.StreamCapability.md) of that particular stream.|


**Details**

One camera can support multiple capture streams and each stream has it's own set of [StreamCapabilities](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.StreamCapability.md) (capture types and resolutions). 





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
| [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) |camera|Provides a multithreadig implementation of the camera api. Handles pause behavior automatically. |
| [CaptureType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-capturetype) |captureType|Capture operation type |






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
| [Metadata](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md) |metadataHandle|Handle to metadata of captured frame.|
| [ResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ResultExtras.md) |extra|Carries capture result information of current captured frame.|






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
| [ResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ResultExtras.md) |extra|Carries capture result information of current captured frame.|






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
| [CameraOutput](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.CameraOutput.md) |frameInfo|Frame data|
| [ResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ResultExtras.md) |extra|Carries capture result information of current captured frame.|
| [Metadata](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md) |metadataHandle|MLCameraMetadata Summary placeholder. |






-----------

### delegate void OnDeviceAvailabilityStatusDelegate {#delegate-void-ondeviceavailabilitystatusdelegate}

```csharp
public delegate void OnDeviceAvailabilityStatusDelegate(
    Identifier camId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Identifier](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-identifier) |camId|Logical Camera identifiers available for access. |






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
| [DisconnectReason](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-disconnectreason) |reason|Disconnect reason|






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
| [ErrorType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-errortype) |error|Error code|






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
| [Metadata](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md) |metadataHandle|Handle to metadata of captured frame.|
| [ResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ResultExtras.md) |extra|Carries capture result information of current captured frame.|






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
| [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |result|Result reporting whether the preview capture completed or not.|






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) PreCaptureAEAWB {#mlresult-precaptureaeawb}

Trigger AEAWB Convergence. This API triggers AEAWB sequence and returns when AEAWB convergence has been achieved. The users can either trigger and converge AEAWB metadata settings or use this API. 

```csharp
public MLResult PreCaptureAEAWB()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) PrepareCapture {#mlresult-preparecapture}

Prepare for capture. 

```csharp
public MLResult PrepareCapture(
    MLCamera.CaptureConfig captureConfig,
    out MLCamera.Metadata cameraMetadata
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.CaptureConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.CaptureConfig.md) |captureConfig|Capture configuration.|
| out [MLCamera.Metadata](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md) |cameraMetadata|Camera metadata object to configure the camera for captures.|






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
| [StreamCapability](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.StreamCapability.md) [] |streamCapabilities||
| int |width||
| int |height||
| [CaptureType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-capturetype) |captureType|Capture operation type |
| out [StreamCapability](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.StreamCapability.md) |streamCapability||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Uninitialize {#mlresult-uninitialize}

```csharp
public static MLResult Uninitialize()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) UpdateCaptureSettings {#mlresult-updatecapturesettings}

Update capture setting This API updates the capture settings for an active preview/video stream. The API can be used to update capture settings like exposure compensation manual exposure settings like exposure time, iso setting. The capture settings can be changed in MLCamera.Metadata object returned by [MLCamera.PrepareCapture()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#mlresult-preparecapture) function and then this API can be called to apply the capture settings. 

```csharp
public MLResult UpdateCaptureSettings()
```






-----------

## Protected Methods

### CreatePreviewTexture {#void-createpreviewtexture}

Create a preview texture. 

```csharp
protected void CreatePreviewTexture()
```






-----------

### GLPluginEvent {#void-glpluginevent}

Issues an event when a render event has occurred. 

```csharp
protected void GLPluginEvent()
```






-----------

### HandleOnRawVideoFrameAvailableInternal {#void-handleonrawvideoframeavailableinternal}

Handles the event of a new image getting captured. 

```csharp
protected void HandleOnRawVideoFrameAvailableInternal(
    MLCamera.CameraOutput capturedFrame,
    MLCamera.ResultExtras resultExtras,
    MLCamera.Metadata metadataHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.CameraOutput](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.CameraOutput.md) |imageData|The raw data of the image.|
| [MLCamera.ResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ResultExtras.md) |resultExtras||
| [MLCamera.Metadata](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md) |metadataHandle|MLCameraMetadata Summary placeholder. |






-----------

### InternalCheckCameraPermission {#mlresultcode-internalcheckcamerapermission}

```csharp
protected static MLResult.Code InternalCheckCameraPermission()
```






-----------

### InternalConnect {#mlresultcode-internalconnect}

```csharp
protected MLResult.Code InternalConnect(
    MLCamera.ConnectContext cameraConnectContext
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.ConnectContext](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ConnectContext.md) |cameraConnectContext|Camera connection settings. |






-----------

### InternalDisconnect {#mlresultcode-internaldisconnect}

Disconnect the camera. 

```csharp
protected MLResult.Code InternalDisconnect(
    bool flagsOnly =false
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |flagsOnly|Set to true if you only need to disconect the camera and not stop any ongoing captuers. Useful when disconnecting due to internal errors. False by default.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if completed successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if a required permission is missing. 



-----------

### InternalGetStreamCapabilities {#mlresult-internalgetstreamcapabilities}

```csharp
protected MLResult InternalGetStreamCapabilities(
    out MLCamera.StreamCapabilitiesInfo [] streamCapabilities
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [MLCamera.StreamCapabilitiesInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.StreamCapabilitiesInfo.md) [] |streamCapabilities||






-----------

### InternalInitialize {#mlresult-internalinitialize}

Establish a connection to the camera. 

```csharp
protected static MLResult InternalInitialize()
```






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if connected to camera device successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.MediaGenericUnexpectedNull](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-mediagenericunexpectednull)  if failed to connect to camera device due to null pointer. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Timeout](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-timeout)  if failed connecting the camera due to timeout. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AllocFailed](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-allocfailed)  if failed to allocate memory. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if a required permission is missing. 



-----------

### InternalPrepareCapture {#mlresultcode-internalpreparecapture}

```csharp
protected MLResult.Code InternalPrepareCapture(
    MLCamera.CaptureConfig captureConfig,
    out MLCamera.Metadata cameraMetadata
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.CaptureConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.CaptureConfig.md) |captureConfig||
| out [MLCamera.Metadata](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md) |cameraMetadata|MLCameraMetadata Summary placeholder. |






-----------

### InternalUninitialize {#mlresult-internaluninitialize}

```csharp
protected static MLResult InternalUninitialize()
```






-----------

### MLCameraBase {#functions-mlcamerabase}

```csharp
protected MLCameraBase()
```






-----------

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

## Public Attributes

### ConnectionContext {#mlcameraconnectcontext-connectioncontext}

The connection context used to create this [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) object. 

```csharp

public MLCamera.ConnectContext ConnectionContext => cameraConnectContext;

```

| Type | Description  | 
|--|--|
| [MLCamera.ConnectContext](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ConnectContext.md) | Camera connection settings.  |





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

## Protected Attributes

### byteArrays {#byte-bytearrays}

```csharp

protected byte [][] byteArrays;

```






-----------

### cameraCaptureConfig {#mlcameracaptureconfig-cameracaptureconfig}

Last used camera Capture Config 

```csharp

protected MLCamera.CaptureConfig cameraCaptureConfig;

```






-----------

### cameraConnectContext {#mlcameraconnectcontext-cameraconnectcontext}

camera Connect Context 

```csharp

protected MLCamera.ConnectContext cameraConnectContext;

```

| Type | Description  | 
|--|--|
| [MLCamera.ConnectContext](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ConnectContext.md) | Camera connection settings.  |





-----------

### cameraConnectionEstablished {#bool-cameraconnectionestablished}

Connection status of the camera. 

```csharp

protected bool cameraConnectionEstablished = false;

```






-----------

### cameraInited {#bool-camerainited}

```csharp

protected static bool cameraInited = false;

```






-----------

### currentFPS {#float-currentfps}

Calculated FPS based on recevied frames interval. 

```csharp

protected float currentFPS;

```






-----------

### gcHandle {#gchandle-gchandle}

GC Handle. 

```csharp

protected GCHandle gcHandle;

```






-----------

### internalOnDeviceAvailable {#mlcameraondeviceavailabilitystatusdelegate-internalondeviceavailable}

```csharp

protected static MLCamera.OnDeviceAvailabilityStatusDelegate internalOnDeviceAvailable;

```






-----------

### internalOnDeviceUnavailable {#mlcameraondeviceavailabilitystatusdelegate-internalondeviceunavailable}

```csharp

protected static MLCamera.OnDeviceAvailabilityStatusDelegate internalOnDeviceUnavailable;

```






-----------

### isCapturingPreview {#bool-iscapturingpreview}

Gets a value indicating whether the camera preview is enabled and textures are being rendered. 

```csharp

protected bool isCapturingPreview = false;

```






-----------

### isCapturingVideo {#bool-iscapturingvideo}

Capture status of the camera. 

```csharp

protected bool isCapturingVideo = false;

```






-----------

### previewRenderer {#mlcamerarenderer-previewrenderer}

Preview [Renderer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.Renderer.md); 

```csharp

protected MLCamera.Renderer previewRenderer;

```






-----------

### previewTexture {#rendertexture-previewtexture}

A reference to Camera Preview texture. 

```csharp

protected RenderTexture previewTexture;

```






-----------

### previewTexture2D {#texture2d-previewtexture2d}

The preview texture for the camera captures. 

```csharp

protected Texture2D previewTexture2D = null;

```






-----------

### previousCaptureTimestamp {#long-previouscapturetimestamp}

Timestamp of previously captured frame. needed for FPS calculations. 

```csharp

protected long previousCaptureTimestamp;

```






-----------

### rawVideoFrameQueueLockObject {#object-rawvideoframequeuelockobject}

A raw video queue lock object. 

```csharp

protected static object rawVideoFrameQueueLockObject = new object();

```






-----------

### resumeConnect {#bool-resumeconnect}

The resume connect state of the camera. 

```csharp

protected bool resumeConnect = false;

```






-----------

### resumePreviewCapture {#bool-resumepreviewcapture}

The resume preview state of the camera. 

```csharp

protected bool resumePreviewCapture = false;

```






-----------

### resumeVideoCapture {#bool-resumevideocapture}

The resume raw video capture state of the camera. 

```csharp

protected bool resumeVideoCapture = false;

```






-----------

## Public Events

### OnCaptureAborted {#mlcameraoncaptureaborteddelegate-oncaptureaborted}

Callback is invoked when an ongoing video or preview capture or both are aborteddue to an error. 

```csharp
public MLCamera.OnCaptureAbortedDelegate OnCaptureAborted()
```






-----------

### OnCaptureCompleted {#mlcameraoncapturecompleteddelegate-oncapturecompleted}

Callback is invoked when capturing single frame is completed and result is available. 

```csharp
public MLCamera.OnCaptureCompletedDelegate OnCaptureCompleted()
```






-----------

### OnCaptureFailed {#mlcameraoncapturefaileddelegate-oncapturefailed}

Callback is invoked when a capture has failed when the camera device failed to produce a capture result for the request. 

```csharp
public MLCamera.OnCaptureFailedDelegate OnCaptureFailed()
```






-----------

### OnDeviceDisconnected {#mlcameraondevicedisconnecteddelegate-ondevicedisconnected}

Callback is invoked when the camera is disconnected. 

```csharp
public MLCamera.OnDeviceDisconnectedDelegate OnDeviceDisconnected()
```






-----------

### OnDeviceError {#mlcameraondeviceerrordelegate-ondeviceerror}

Camera status callback, device error. 

```csharp
public MLCamera.OnDeviceErrorDelegate OnDeviceError()
```






-----------

### OnDeviceIdle {#mlcameraondevicestatusdelegate-ondeviceidle}

Callback is invoked when the camera stops streaming. 

```csharp
public MLCamera.OnDeviceStatusDelegate OnDeviceIdle()
```






-----------

### OnDeviceStreaming {#mlcameraondevicestatusdelegate-ondevicestreaming}

Callback is invoked when the camera is streaming. 

```csharp
public MLCamera.OnDeviceStatusDelegate OnDeviceStreaming()
```






-----------

### OnPreviewBufferAvailable {#mlcameraonpreviewbufferavailabledelegate-onpreviewbufferavailable}

Callback is invoked when a captured preview frame buffer is available, invoked on the main thread. 

```csharp
public MLCamera.OnPreviewBufferAvailableDelegate OnPreviewBufferAvailable()
```






-----------

### OnPreviewCaptureCompleted {#mlcameraonpreviewcapturecompleteddelegate-onpreviewcapturecompleted}

Callback is invoked when a preview video frame buffer is available with [MLCamera.CaptureType.Preview](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-preview). Not valid for MR/VR Capture since it does not have preview support. 

```csharp
public MLCamera.OnPreviewCaptureCompletedDelegate OnPreviewCaptureCompleted()
```






-----------

### OnRawImageAvailable {#mlcameraoncapturedframeavailabledelegate-onrawimageavailable}

Callback is invoked when a captured image buffer is available. 

```csharp
public MLCamera.OnCapturedFrameAvailableDelegate OnRawImageAvailable()
```






-----------

### OnRawVideoFrameAvailable {#mlcameraoncapturedframeavailabledelegate-onrawvideoframeavailable}

Callback is invoked when a captured raw/compressed video frame buffer is available, invoked on the main thread. 

```csharp
public MLCamera.OnCapturedFrameAvailableDelegate OnRawVideoFrameAvailable()
```






-----------

### OnRawVideoFrameAvailable_NativeCallbackThread {#mlcameraoncapturedframeavailabledelegate-onrawvideoframeavailable-nativecallbackthread}

Camera capture callback, capture raw video frame, invoked on the same thread as the native callback, allowing the use of the unmanaged native pointer to the frame data memory. 

```csharp
public MLCamera.OnCapturedFrameAvailableDelegate OnRawVideoFrameAvailable_NativeCallbackThread()
```






-----------

## Protected Events

### OnRawVideoFrameAvailableInternal {#mlcameraoncapturedframeavailabledelegate-onrawvideoframeavailableinternal}

Callback is invoked when a captured raw/compressed video frame buffer is available, invoked on the main thread. 

```csharp
protected MLCamera.OnCapturedFrameAvailableDelegate OnRawVideoFrameAvailableInternal()
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
| _1944x2160 | 3| Specifies 1944 x 2160 resolution. Aspect ratio: 9x10. [CaptureFrameRate.&#95;60FPS](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-60fps) is not supported for this quality mode.   |
| _960x720 | 4| Specifies 960 x 720 resolution. Aspect ratio: 4x3.   |
| _1440x1080 | 5| Specifies 1440 x 1080 resolution. Aspect ratio: 4x3.   |
| _2880x2160 | 6| Specifies 2880 x 2160 resolution. Aspect ratio: 4x3. [CaptureFrameRate.&#95;60FPS](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-60fps) is not supported for this quality mode.   |








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


