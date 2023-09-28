---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLDepthCameraConnect {#mlresultcode-mldepthcameraconnect}

Connect to depth camera. 

```csharp
public MLResult.Code MLDepthCameraConnect(
    in MLDepthCameraSettings settings,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraSettings.md) |settings|A pointer to [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraSettings.md) structure.|
| out ulong |handle|A pointer to camera handle to be used in later APIs.|


**Details**



apilevel: 29 

permissions: com.magicleap.permission.DEPTH&#95;CAMERA (protection level: dangerous) 





**Returns**:  MLResult&#95;InvalidParam : One of the parameters is invalid. 

 MLResult&#95;LicenseError : Necessary license is missing. 

 MLResult&#95;Ok : Connected to camera device(s) successfully. 

 MLResult&#95;PermissionDenied : Necessary permission is missing. 

 MLResult&#95;UnspecifiedFailure : The operation failed with an unspecified error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLDepthCameraDisconnect {#mlresultcode-mldepthcameradisconnect}

Disconnect from depth camera. This will disconnect from the depth camera. 

```csharp
public MLResult.Code MLDepthCameraDisconnect(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Camera handle obtained from MLDepthCameraConnect.|


**Details**



apilevel: 29 

permissions: None 





**Returns**:  MLResult&#95;InvalidParam : Invalid handle. 

 MLResult&#95;Ok : Disconnected camera successfully. 

 MLResult&#95;UnspecifiedFailure : Failed to disconnect camera. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLDepthCameraGetCapabilities {#mlresultcode-mldepthcameragetcapabilities}

Query the depth camera stream capabilities. Retrieves the capabilities supported by the depth camera based on the provided filter. After each call, a corresponding call to MLDepthCameraReleaseCapabilities should be made to release allocated resources. 

```csharp
public MLResult.Code MLDepthCameraGetCapabilities(
    ulong handle,
    ref MLDepthCameraCapabilityFilter filter,
    out MLDepthCameraCapabilityList outCaps
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Camera handle obtained from MLDepthCameraConnect.|
| ref [MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraCapabilityFilter.md) |filter|Pointer to initialized [MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraCapabilityFilter.md) structure. Used for filtering.|
| out [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraCapabilityList.md) |outCaps|Pointer to initialized [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraCapabilityList.md) structure.|


**Details**



apilevel: 29 

permissions: None 





**Returns**:  MLResult&#95;InvalidParam : One of the parameters is invalid. 

 MLResult&#95;Ok : API call completed successfully. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLDepthCameraGetLatestDepthData {#mlresultcode-mldepthcameragetlatestdepthdata}

Poll for Frames. Returns [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraData.md) with this latest data when available. The memory is owned by the system. Application should copy the data it needs to cache it and then release the memory by calling MLDepthCameraReleaseCameraData. This is a blocking call. API is not thread safe. If there are no new depth data frames within the timeoutMs duration then the API will return MLResult&#95;Timeout. 

```csharp
public MLResult.Code MLDepthCameraGetLatestDepthData(
    ulong handle,
    ulong timeoutMs,
    out MLDepthCameraData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Camera handle obtained from MLDepthCameraConnect.|
| ulong |timeoutMs|Timeout in milliseconds.|
| out [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraData.md) |data|Depth camera data. Should be an initialized [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraData.md) object.|


**Details**



apilevel: 29 

permissions: None 





**Returns**:  MLResult&#95;InvalidParam : Invalid handle. 

 MLResult&#95;Ok : Depth camera data fetched successfully. 

 MLResult&#95;Timeout : Returned because no new frame available at this time. 

 MLResult&#95;UnspecifiedFailure : Failed due to internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLDepthCameraReleaseCapabilities {#mlresultcode-mldepthcamerareleasecapabilities}

Release resources allocated with MLDepthCameraGetCapabilities. 

```csharp
public MLResult.Code MLDepthCameraReleaseCapabilities(
    ulong handle,
    ref MLDepthCameraCapabilityList outCaps
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Camera handle obtained from MLDepthCameraConnect.|
| ref [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraCapabilityList.md) |outCaps|Pointer to [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraCapabilityList.md) filled by the call to MLDepthCameraGetCapabilities.|


**Details**



apilevel: 29 

permissions: None 





**Returns**:  MLResult&#95;InvalidParam : One of the parameters is invalid. 

 MLResult&#95;Ok : API call completed successfully. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLDepthCameraReleaseDepthData {#mlresultcode-mldepthcamerareleasedepthdata}

Releases specified [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraData.md) object. This function should be called exactly once for each successfull call to MLDepthCameraGetLatestCameraData. 

```csharp
public MLResult.Code MLDepthCameraReleaseDepthData(
    ulong handle,
    ref MLDepthCameraData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Camera handle obtained from MLDepthCameraConnect.|
| ref [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraData.md) |data|Pointer to a valid [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraData.md) object.|


**Details**



apilevel: 29 

permissions: None 





**Returns**:  MLResult&#95;Ok : Successfully released depth camera data. 

 MLResult&#95;InvalidParam : data parameter was not valid (null). 

 MLResult&#95;UnspecifiedFailure : Failed due to internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLDepthCameraUpdateSettings {#mlresultcode-mldepthcameraupdatesettings}

Update the depth camera settings. 

```csharp
public MLResult.Code MLDepthCameraUpdateSettings(
    ulong handle,
    in MLDepthCameraSettings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Camera handle obtained from MLDepthCameraConnect.|
| in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraSettings.md) |settings|Pointer to [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraSettings.md).|


**Details**



apilevel: 29 

permissions: None 





**Returns**:  MLResult&#95;InvalidParam : Invalid handle. 

 MLResult&#95;Ok : [Settings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) updated successfully. 

 MLResult&#95;UnspecifiedFailure : Failed due to internal error. 



-----------


