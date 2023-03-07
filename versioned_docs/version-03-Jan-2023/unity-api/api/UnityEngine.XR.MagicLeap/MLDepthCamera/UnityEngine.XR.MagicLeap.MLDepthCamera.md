---
title: MLDepthCamera
summary: apis to access the depth camera data. 

---

# MLDepthCamera



**NameSpace:** 
[MagicLeap](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


APIs to access the depth camera data.   [More...](#detailed-description)  


Inherits from: <br></br>[MLAPIBase](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAPIBase.md)



## Detailed Description

```csharp
public class MLDepthCamera : MLAPIBase 
```


**Details**

This is an experimental API which may be modified or removed without any prior notice.

The API only supports reading data from the depth camera. Apps cannot modify the camera settings, support for the same may be added in a future release.





-----------



## Public Fields

### CurrentSettings {#settings-currentsettings}

The settings the Depth Camera is currently configured with. 

```csharp

public Settings CurrentSettings { get; set; }

```

| Type | Description  | 
|--|--|
| [Settings](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) | Depth Camera [Settings](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) |





-----------

### IsConnected {#bool-isconnected}

```csharp

public bool IsConnected { get; set; }

```






-----------

## Public Methods

### [MLResult](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Connect {#mlresult-connect}

Connect to depth camera. 

```csharp
public MLResult Connect()
```


**Details**

API Level 22

permissions com.magicleap.permission.DEPTH&#95;CAMERA (protection level: dangerous) 





**Returns**: [MLResult.Code.InvalidParam](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam): One of the parameters is invalid.
[MLResult.Code.Ok](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok): Connected to camera device(s) successfully.
[MLResult.Code.PermissionDenied](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied): Necessary permission is missing.

 MLResult.Code.LicenseError: Necessary license is missing.
[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure): The operation failed with an unspecified error. 



-----------

### [MLResult](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Disconnect {#mlresult-disconnect}

Disconnect from depth camera. 

```csharp
public MLResult Disconnect()
```


**Details**

API Level 22

permissions None 





**Returns**: [MLResult.Code.InvalidParam](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam): The camera's handle was invalid.
[MLResult.Code.Ok](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok): Disconnected camera successfully.
[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure): Failed to disconnect camera for some unknown reason. 



-----------

### [MLResult](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetLatestDepthData {#mlresult-getlatestdepthdata}

Poll for Frames. 

```csharp
public MLResult GetLatestDepthData(
    ulong timeoutMs,
    out Data data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |timeoutMs|Timeout in milliseconds.|
| out [Data](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md) |data|Depth camera data. Will be null if no valid data is available when called.|


**Details**

Returns a [Data](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md) object referencing the latest available frame data, if any.

This is a blocking call. API is not thread safe.

If there are no new depth data frames for a given duration (duration determined by the system) then the API will return [MLResult.Code.Timeout](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-timeout).

API Level 22

permissions None 





**Returns**: [MLResult.Code.InvalidParam](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam): The camera's handle was invalid.
[MLResult.Code.Ok](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok): Depth camera data fetched successfully.
[MLResult.Code.Timeout](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-timeout): No frame available within time limit.
[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure): Failed due to internal error. 



-----------

###  MLDepthCamera {#functions-mldepthcamera}

```csharp
public MLDepthCamera(
    Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Settings](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) |settings|Depth Camera [Settings](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md)|






-----------

### [MLResult](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) UpdateSettings {#mlresult-updatesettings}

Update the depth camera settings. 

```csharp
public MLResult UpdateSettings(
    Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Settings](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) |settings|New [Settings](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) for the depth camera.|


**Details**

API Level 22

permissions None 





**Returns**: [MLResult.Code.InvalidParam](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam): The camera's handle was invalid.
[MLResult.Code.Ok](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok): [Settings](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) updated successfully.
[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure): Failed due to internal error. 



-----------

## Protected Methods

### OnApplicationPause {#override-void-onapplicationpause}

Callback sent to all [MagicLeap](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) APIs on application pause. 

```csharp
protected virtual override void OnApplicationPause(
    bool pauseStatus
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |pauseStatus|True if the application is paused, else False. |




**Reimplements**: [OnApplicationPause](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAPIBase.md#void-onapplicationpause)



-----------

## Public Enums

### CaptureFlags {#enums-captureflags}

Flags used to specify what kind of data to request from Depth Camera 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DepthImage | 1 << 0| Enable DepthImage. See [Data.DepthImage](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#framebuffer-depthimage) for more details.   |
| Confidence | 1 << 1| Enable ConfidenceBuffer. See [Data.ConfidenceBuffer](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#framebuffer-confidencebuffer) for more details.   |
| DepthFlags | 1 << 2| Enable DepthFlagsBuffer. See [Data.DepthFlagsBuffer](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#framebuffer-depthflagsbuffer) for more details.   |
| AmbientRawDepthImage | 1 << 3| Enable AmbientRawDepthImage. See [Data.AmbientRawDepthImage](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#framebuffer-ambientrawdepthimage) for more details.   |








-----------

### DepthFlags {#enums-depthflags}

Flags to select data requested from depth camera. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Valid | 0 << 0| Indicates that there is no additional flag data for this pixel.   |
| Invalid | 1 << 0| This bit is set to one to indicate that one or more flags from below have been set. Depending on the use case the application can correlate the flag data and corresponding pixel data to determine how to handle the pixel   |
| Saturated | 1 << 1| The pixel intensity is either below the min or the max threshold value.   |
| Inconsistent | 1 << 2| Inconsistent data received when capturing frames. This can happen due to fast motion.   |
| LowSignal | 1 << 3| Pixel has very low signal to noise ratio. One example of when this can happen is for pixels in far end of the range.   |
| FlyingPixel | 1 << 4| This typically happens when there is step jump in the distance of adjoining pixels in the scene. Example: When you open a door looking into the room the edges along the door's edges can cause flying pixels.   |
| Masked | 1 << 5| If this bit is on it indicates that the corresponding pixel may not be within the projector's illumination cone.   |
| SBI | 1 << 8| This bit will be set when there is high noise.   |
| StrayLight | 1 << 9| This could happen when there is another light source apart from the depth camera projector. This could also lead to LowSignal.   |
| ConnectedComponent | 1 << 10| If a small group of Valid is sorrunded by a set of Invalid then this bit will be set to 1.   |








-----------

### FrameType {#enums-frametype}

Depth Camera frame capture types 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unknown | 0| Unknown or no frame type   |
| LongRange | 1| Frame captured using [Mode.LongRange](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-longrange) mode.   |








-----------

### Mode {#enums-mode}

Depth Camera modes   Future release may add support to other modes. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| LongRange | 1 << 0| Long range mode  Under normal operations long range mode has a maximum frequency of 5fps and a range of up to 5m, in some cases this can go as far 7.5m. |








-----------

