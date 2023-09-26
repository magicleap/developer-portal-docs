---
title: NativeBindings
summary: structures in ml-camera.h. 

---

# NativeBindings




This class defines the C# interface to the C functions/structures in "ml&#95;camera.h".   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### delegate void DeviceAvailabilityStatusDelegate {#delegate-void-deviceavailabilitystatusdelegate}

```csharp
public delegate void DeviceAvailabilityStatusDelegate(
    ref MLCameraDeviceAvailabilityInfo info
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLCameraDeviceAvailabilityInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraDeviceAvailabilityInfo.md) |info||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraCaptureImage {#mlresultcode-mlcameracaptureimage}

The output image will be returned in capture callback on&#95;image&#95;buffer&#95;available 

```csharp
public MLResult.Code MLCameraCaptureImage(
    ulong contextHandle,
    uint numImages
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |contextHandle|Context obtained from MLCameraConnect.|
| uint |numImages|no of images to capture valid range is 1-10.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if image was captured successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.MediaGenericInvalidOperation](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-mediagenericinvalidoperation)  if failed to capture image due to on-going video recording. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.MediaGenericUnexpectedNull](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-mediagenericunexpectednull)  if failed to capture image due to null pointer. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed to capture image due to an invalid parameter. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Timeout](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-timeout)  if failed to capture image due to timeout. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if a required permission is missing. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraCaptureVideoStart {#mlresultcode-mlcameracapturevideostart}

Start video capture and save output to a file.  The captured video and audio streams will be encoded with AVC and AAC codecs and packed in mp4 container format and stored into the file specified by the file path.The library is responsible for opening and closing the file.The current supported video resolution is 1080p. If this function is invoked before the camera sensor has locked AE and AWB, it will be blocked till AE, AWB is locked and then starts to capture. MLCameraCaptureVideoStop() needs to be called to stop the capture. 

```csharp
public MLResult.Code MLCameraCaptureVideoStart(
    ulong contextHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |path|File path to store the output video.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if started video recording successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.MediaGenericUnexpectedNull](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-mediagenericunexpectednull)  if failed to start video recording due to null pointer. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed to start video recording due to invalid input parameter. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Timeout](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-timeout)  if failed to start video recording image due to timeout. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AllocFailed](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-allocfailed)  if failed to allocate memory. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if a required permission is missing. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraCaptureVideoStop {#mlresultcode-mlcameracapturevideostop}

Stop video capture.  User should allow some time, i.e., &gt;500ms, after MLCameraCaptureVideoStart and before calling this API, as captured frames are being encoded.Otherwise, MLResult&#95;UnspecifiedFailure will be returned. 

```csharp
public MLResult.Code MLCameraCaptureVideoStop(
    ulong contextHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |contextHandle||






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if stopped video recording successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.MediaGenericUnexpectedNull](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-mediagenericunexpectednull)  if failed to stop video recording due to null pointer. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if a required permission is missing. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraConnect {#mlresultcode-mlcameraconnect}

```csharp
public MLResult.Code MLCameraConnect(
    ref MLCameraConnectContext inputContext,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraConnectContext.md) |inputContext|Structure to encapsulate context for a CameraConnect Request. |
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraDeInit {#mlresultcode-mlcameradeinit}

```csharp
public MLResult.Code MLCameraDeInit()
```






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraDisconnect {#mlresultcode-mlcameradisconnect}

Disconnect from camera device. 

```csharp
public MLResult.Code MLCameraDisconnect(
    ulong contextHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |contextHandle|Capture operation type.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if disconnected from camera device successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if a required permission is missing. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraGetCameraCharacteristics {#mlresultcode-mlcameragetcameracharacteristics}

Obtain handle for retrieving camera characteristics. This API provides the handle for retrieving camera characteristics via APIs defined in ml&#95;camera&#95;metadata.h. 

```csharp
public MLResult.Code MLCameraGetCameraCharacteristics(
    ulong contextHandle,
    out ulong outMetadataHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |outHandle|Handle to access camera characteristic metadata.|
| out ulong |outMetadataHandle||






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if obtained camera characteristic handle successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed to obtain camera characteristic handle due to invalid input parameter. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.MediaGenericUnexpectedNull](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-mediagenericunexpectednull)  if failed to capture raw image due to null pointer. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AllocFailed](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-allocfailed)  if failed to allocate memory. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if a required permission is missing. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraGetDeviceStatus {#mlresultcode-mlcameragetdevicestatus}

Poll camera device status. Use #MLCamera.DeviceStatusFlag to view specific status bit. Call MLCameraGetErrorCode() to obtain the error code if [MLCamera.DeviceStatusFlag.Error](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-error) bit is set. Note: This API can still be used even if MLCameraSetDeviceStatusCallbacks() has been called. 

```csharp
public MLResult.Code MLCameraGetDeviceStatus(
    ulong contextHandle,
    out uint outDeviceStatus
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |contextHandle|Context obtained from MLCameraConnect.|
| out uint |outDeviceStatus|Device status.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if obtained device status successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed to obtain device status due to invalid input parameter. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraGetErrorCode {#mlresultcode-mlcamerageterrorcode}

Obtain device error code. 

```csharp
public MLResult.Code MLCameraGetErrorCode(
    ulong contextHandle,
    out MLCamera.ErrorType outErrorCode
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |outErrorCode|Device error code.|
| out [MLCamera.ErrorType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-errortype) |outErrorCode|Camera errors |






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if obtained device error code successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed to obtain device error code due to invalid input parameter. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraGetNumSupportedStreams {#mlresultcode-mlcameragetnumsupportedstreams}

```csharp
public MLResult.Code MLCameraGetNumSupportedStreams(
    ulong handle,
    out uint numSupportedStreams
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out uint |numSupportedStreams||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraInit {#mlresultcode-mlcamerainit}

```csharp
public MLResult.Code MLCameraInit(
    ref MLCameraDeviceAvailabilityStatusCallbacks deviceAvailabilityStatusCallback,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraDeviceAvailabilityStatusCallbacks.md) |deviceAvailabilityStatusCallback|Device availability status callbacks to be implemented by client to receive device availability status. |
| IntPtr |userData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraPrepareCapture {#mlresultcode-mlcamerapreparecapture}

Prepare for capture. This API prepares capture per specified [MLCamera.CaptureType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-capturetype) by creating a capture request, and a handle to which is returned to the user, who can choose to manipulate the request data(metadata) via APIs defined in ml&#95;camera&#95;metadata.h before performing the capture. Shall be called after MLCameraConnect(). 

```csharp
public MLResult.Code MLCameraPrepareCapture(
    ulong contextHandle,
    ref MLCameraCaptureConfig config,
    out ulong metadataHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |contextHandle|Context obtained from MLCameraConnect.|
| ref [MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraCaptureConfig.md) |config|Capture configuration.|
| out ulong |metadataHandle|Handle to the capture metadata. Only valid if result is MLResult&#95;Ok.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if prepared for capture successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed to prepare for capture due to an invalid parameter. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.MediaGenericUnexpectedNull](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-mediagenericunexpectednull)  if failed to prepare for capture due to null pointer. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.BadType  if failed to prepare for capture due to null pointer. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AllocFailed](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-allocfailed)  if failed to allocate memory. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if a required permission is missing. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraSetDeviceStatusCallbacks {#mlresultcode-mlcamerasetdevicestatuscallbacks}

Set the client-implemented callbacks to convey camera device status. Client needs to implement the callbacks defined by [MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraDeviceStatusCallbacks.md). The library passes the camera device status to the client via those callbacks. Shall be called before MLCameraConnect(). 

```csharp
public MLResult.Code MLCameraSetDeviceStatusCallbacks(
    ulong contextHandle,
    ref MLCameraDeviceStatusCallbacks deviceStatusCallbacks,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |deviceStatusCallbacks|Capture status callbacks.|
| ref [MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraDeviceStatusCallbacks.md) |data|User metadata.|
| IntPtr |data||






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if callbacks were set successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. 



-----------

### delegate void OnCaptureAbortedDelegate {#delegate-void-oncaptureaborteddelegate}

```csharp
public delegate void OnCaptureAbortedDelegate(
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |data||






-----------

### delegate void OnCaptureCompletedDelegate {#delegate-void-oncapturecompleteddelegate}

```csharp
public delegate void OnCaptureCompletedDelegate(
    ulong metadataHandle,
    ref MLCameraResultExtras extra,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |metadataHandle||
| ref [MLCameraResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraResultExtras.md) |extra|[ResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ResultExtras.md) is a structure to encapsulate various indices for a capture result. |
| IntPtr |data||






-----------

### delegate void OnCaptureFailedDelegate {#delegate-void-oncapturefaileddelegate}

```csharp
public delegate void OnCaptureFailedDelegate(
    ref MLCameraResultExtras extra,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLCameraResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraResultExtras.md) |extra|[ResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ResultExtras.md) is a structure to encapsulate various indices for a capture result. |
| IntPtr |data||






-----------

### delegate void OnDataCallback {#delegate-void-ondatacallback}

A generic delegate for camera events. 

```csharp
public delegate void OnDataCallback(
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |data|Custom data returned when the callback is triggered, user metadata.|






-----------

### delegate void OnDeviceDisconnectedDelegate {#delegate-void-ondevicedisconnecteddelegate}

```csharp
public delegate void OnDeviceDisconnectedDelegate(
    MLCamera.DisconnectReason reason,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.DisconnectReason](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-disconnectreason) |reason|Camera Disconnect Reason. |
| IntPtr |data||






-----------

### delegate void OnDeviceErrorDelegate {#delegate-void-ondeviceerrordelegate}

```csharp
public delegate void OnDeviceErrorDelegate(
    MLCamera.ErrorType error,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.ErrorType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-errortype) |error|Camera errors |
| IntPtr |data||






-----------

### delegate void OnDeviceIdleDelegate {#delegate-void-ondeviceidledelegate}

```csharp
public delegate void OnDeviceIdleDelegate(
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |data||






-----------

### delegate void OnDeviceStreamingDelegate {#delegate-void-ondevicestreamingdelegate}

```csharp
public delegate void OnDeviceStreamingDelegate(
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |data||






-----------

### delegate void OnErrorDataCallback {#delegate-void-onerrordatacallback}

A delegate for camera error events. 

```csharp
public delegate void OnErrorDataCallback(
    MLCamera.ErrorType error,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.ErrorType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-errortype) |error|The type of error that was reported.|
| IntPtr |data|Custom data returned when the callback is triggered, user metadata.|






-----------

### delegate void OnHandleAndResultExtrasRefDataCallback {#delegate-void-onhandleandresultextrasrefdatacallback}

A delegate for camera capture events with additional information. 

```csharp
public delegate void OnHandleAndResultExtrasRefDataCallback(
    MLCamera.Metadata metadataHandle,
    ref MLCameraResultExtras extra,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.Metadata](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md) |metadataHandle|A handle to the metadata.|
| ref [MLCameraResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraResultExtras.md) |extra|A structure containing extra result information.|
| IntPtr |data|Custom data returned when the callback is triggered, user metadata.|






-----------

### delegate void OnHandleDataCallback {#delegate-void-onhandledatacallback}

A delegate for camera preview events. 

```csharp
public delegate void OnHandleDataCallback(
    ulong metadataHandle,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |metadataHandle|A handle to the metadata.|
| IntPtr |data|Custom data returned when the callback is triggered, user metadata.|






-----------

### delegate void OnImageBufferAvailableDelegate {#delegate-void-onimagebufferavailabledelegate}

```csharp
public delegate void OnImageBufferAvailableDelegate(
    ref MLCameraOutput output,
    ulong metadataHandle,
    ref MLCameraResultExtras extra,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLCameraOutput](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraOutput.md) |output|Captured output |
| ulong |metadataHandle||
| ref [MLCameraResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraResultExtras.md) |extra|[ResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ResultExtras.md) is a structure to encapsulate various indices for a capture result. |
| IntPtr |data||






-----------

### delegate void OnOutputRefDataCallback {#delegate-void-onoutputrefdatacallback}

A delegate for image buffer events. 

```csharp
public delegate void OnOutputRefDataCallback(
    ref MLCameraOutput output,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLCameraOutput](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraOutput.md) |output|The camera output type.|
| IntPtr |data|Custom data returned when the callback is triggered, user metadata.|






-----------

### delegate void OnPreviewBufferAvailableDelegate {#delegate-void-onpreviewbufferavailabledelegate}

```csharp
public delegate void OnPreviewBufferAvailableDelegate(
    ulong bufferHandle,
    ulong metadataHandle,
    ref MLCameraResultExtras extra,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |bufferHandle||
| ulong |metadataHandle||
| ref [MLCameraResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraResultExtras.md) |extra|[ResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ResultExtras.md) is a structure to encapsulate various indices for a capture result. |
| IntPtr |data||






-----------

### delegate void OnResultExtrasRefDataCallback {#delegate-void-onresultextrasrefdatacallback}

A delegate for camera capture events. 

```csharp
public delegate void OnResultExtrasRefDataCallback(
    ref MLCameraResultExtras extra,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLCameraResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraResultExtras.md) |extra|A structure containing extra result information.|
| IntPtr |data|Custom data returned when the callback is triggered, user metadata.|






-----------

### delegate void OnVideoBufferAvailableDelegate {#delegate-void-onvideobufferavailabledelegate}

```csharp
public delegate void OnVideoBufferAvailableDelegate(
    ref MLCameraOutput output,
    ulong metadataHandle,
    ref MLCameraResultExtras extra,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLCameraOutput](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraOutput.md) |output|Captured output |
| ulong |metadataHandle||
| ref [MLCameraResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraResultExtras.md) |extra|[ResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ResultExtras.md) is a structure to encapsulate various indices for a capture result. |
| IntPtr |data||






-----------

## Public Attributes

### MLCameraMaxImagePlanes {#const-int-mlcameramaximageplanes}

Number of [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) image planes. 

```csharp

public const int MLCameraMaxImagePlanes = 3;

```






-----------


