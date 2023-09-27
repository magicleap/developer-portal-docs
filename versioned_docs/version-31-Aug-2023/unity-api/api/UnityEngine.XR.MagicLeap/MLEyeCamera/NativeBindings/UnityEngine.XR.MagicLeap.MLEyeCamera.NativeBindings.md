---
title: NativeBindings
summary: see ml-eye-camera.h for additional comments. 

---

# NativeBindings




See ml&#95;eye&#95;camera.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLEyeCameraConnect {#mlresultcode-mleyecameraconnect}

Brief connect to eye camera(s). 

```csharp
public MLResult.Code MLEyeCameraConnect(
    ref MLEyeCameraSettings setting,
    ref ulong outHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLEyeCameraSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLEyeCamera.NativeBindings.MLEyeCameraSettings.md) |setting|A pointer to [MLEyeCameraSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLEyeCamera.NativeBindings.MLEyeCameraSettings.md) structure.|
| ref ulong |outHandle|A pointer to camera handle to be used in later APIs.|


**Details**



apilevel 26. permissions android.permission.EYE&#95;CAMERA (protection level: dangerous)





**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if connected to camera device(s) successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.LicenseError](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-licenseerror)  if necessary license is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if one of the parameters is invalid. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if the necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if the operation failed with an unspecified error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLEyeCameraDisconnect {#mlresultcode-mleyecameradisconnect}

Disconnect from eye camera(s). This will disconnect from all the eye camera(s) currently connected. 

```csharp
public MLResult.Code MLEyeCameraDisconnect(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Camera handle obtained from MLEyeCameraConnect.|


**Details**



apilevel 26. permissions None.





**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if disconnected camera(s) successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if invalid context. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed to disconnect camera(s). 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLEyeCameraGetLatestCameraData {#mlresultcode-mleyecameragetlatestcameradata}

Poll for Frames. Returns [MLEyeCameraData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLEyeCamera.NativeBindings.MLEyeCameraData.md) with this latest data when available. The memory is owned by the system. Application should copy the data it needs to cache and release the memory by calling MLEyeCameraReleaseCameraData. This is a blocking call. API is not thread safe. If there are no new camera frames within the timeout&#95;ms duration then the API will return MLResult&#95;Timeout. 

```csharp
public MLResult.Code MLEyeCameraGetLatestCameraData(
    ulong handle,
    UInt64 timeoutMS,
    ref MLEyeCameraData outData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Camera handle obtained from MLEyeCameraConnect.|
| UInt64 |timeoutMS|Timeout in milliseconds.|
| ref [MLEyeCameraData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLEyeCamera.NativeBindings.MLEyeCameraData.md) |outData|Eye camera data. Will be set to NULL if no valid data is available at this time.|


**Details**



apilevel 26. permissions None.





**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if camera frames fetched successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Timeout](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-timeout)  returned because no new frame available at this time. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if one of the parameters is invalid. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if the operation failed due to an internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLEyeCameraReleaseCameraData {#mlresultcode-mleyecamerareleasecameradata}

Releases specified #MLEyeCameraData object. This function should be called exactly once for each call to #MLEyeCameraGetLatestCameraData. [MLEyeCameraData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLEyeCamera.NativeBindings.MLEyeCameraData.md) will be over-written when new data is available. 

```csharp
public MLResult.Code MLEyeCameraReleaseCameraData(
    ulong handle,
    ref MLEyeCameraData eyeCameraData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Camera handle obtained from MLEyeCameraConnect.|
| ref [MLEyeCameraData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLEyeCamera.NativeBindings.MLEyeCameraData.md) |eyeCameraData|Pointer to a valid [MLEyeCameraData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLEyeCamera.NativeBindings.MLEyeCameraData.md) object.|


**Details**



permissions None.





**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successfully released eye camera data. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if eyeCameraData parameter was not valid (NULL). [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if the operation failed due to an internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLEyeCameraUpdateSettings {#mlresultcode-mleyecameraupdatesettings}

Update the eye camera settings. 

```csharp
public MLResult.Code MLEyeCameraUpdateSettings(
    ulong handle,
    ref MLEyeCameraSettings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Camera handle obtained from MLEyeCameraConnect.|
| ref [MLEyeCameraSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLEyeCamera.NativeBindings.MLEyeCameraSettings.md) |settings|Pointer to [MLEyeCameraSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLEyeCamera.NativeBindings.MLEyeCameraSettings.md).|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the settings updated successfully. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if one of the parameters is invalid. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if the operation failed due to an internal error. 



-----------


