---
title: MLDepthCamera
summary: apis to access the depth camera data. 

---

# MLDepthCamera



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


APIs to access the depth camera data.   [More...](#detailed-description)  


Inherits from: <br></br>[MLAutoAPISingleton< MLDepthCamera >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)



## Detailed Description

```csharp
public class MLDepthCamera : MLAutoAPISingleton< MLDepthCamera > 
```


**Details**

This is an experimental API which may be modified or removed without any prior notice.

The API only supports reading data from the depth camera. Apps cannot modify the camera settings, support for the same may be added in a future release.





-----------



## Public Fields

### CurrentSettings {#settings-currentsettings}

The settings the Depth Camera is currently configured with. 

```csharp

public static Settings CurrentSettings { get; set; }

```

| Type | Description  | 
|--|--|
| [Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) | Depth Camera [Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) |





-----------

### IsConnected {#bool-isconnected}

```csharp

public static bool IsConnected { get; set; }

```






-----------

## Public Methods

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Connect {#mlresult-connect}

Connect to depth camera. 

```csharp
public static MLResult Connect()
```


**Details**

API Level 29

permissions com.magicleap.permission.DEPTH&#95;CAMERA (protection level: dangerous) 





**Returns**: [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam): One of the parameters is invalid.
[MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok): Connected to camera device(s) successfully.
[MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied): Necessary permission is missing.
[MLResult.Code.LicenseError](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-licenseerror): Necessary license is missing.
[MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure): The operation failed with an unspecified error. 



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Disconnect {#mlresult-disconnect}

Disconnect from depth camera. 

```csharp
public static MLResult Disconnect()
```


**Details**

API Level 29

permissions None 





**Returns**: [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam): The camera's handle was invalid.
[MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok): Disconnected camera successfully.
[MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure): Failed to disconnect camera for some unknown reason. 



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetCapabilities {#mlresult-getcapabilities}

```csharp
public static MLResult GetCapabilities(
    out StreamCapability [] capabilities
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [StreamCapability](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.StreamCapability.md) [] |capabilities|Structure to encapsulate a possible configuration for a single stream. Can be used to understand possible values for a specific [StreamConfig](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.StreamConfig.md) element in MLDepthCameraSettings. The capabilities supported by the depth camera can be queried with InternalGetCapabilities(). |






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetLatestDepthData {#mlresult-getlatestdepthdata}

Poll for Frames. 

```csharp
public static MLResult GetLatestDepthData(
    ulong timeoutMs,
    out Data data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |timeoutMs|Timeout in milliseconds.|
| out [Data](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md) |data|Depth camera data. Will be null if no valid data is available when called.|


**Details**

Returns a [Data](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md) object referencing the latest available frame data, if any.

This is a blocking call. API is not thread safe.

If there are no new depth data frames for a given duration (duration determined by the system) then the API will return [MLResult.Code.Timeout](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-timeout).

API Level 29

permissions None 





**Returns**: [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam): The camera's handle was invalid.
[MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok): Depth camera data fetched successfully.
[MLResult.Code.Timeout](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-timeout): No frame available within time limit.
[MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure): Failed due to internal error. 



-----------

### void SetSettings {#void-setsettings}

Sets the current settings of Depth Camera. 

```csharp
public static void SetSettings(
    Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) |settings||






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) UpdateSettings {#mlresult-updatesettings}

Update the depth camera settings. 

```csharp
public static MLResult UpdateSettings(
    Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) |settings|New [Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) for the depth camera.|


**Details**

API Level 29

permissions None 





**Returns**: [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam): The camera's handle was invalid.
[MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok): [Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md) updated successfully.
[MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure): Failed due to internal error. 



-----------

## Protected Methods

### OnApplicationPause {#override-void-onapplicationpause}

Callback sent to all [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) APIs on application pause. 

```csharp
protected virtual override void OnApplicationPause(
    bool pauseStatus
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |pauseStatus|True if the application is paused, else False. |




**Reimplements**: [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#void-onapplicationpause)



-----------

### StartAPI {#override-startapi}

Do API-specific creation/initialization of ML resources for this API, such as creating trackers, etc. Called automatically the first time  Instance  is accessed. Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StartAPI()
```




**Reimplements**: [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

API-specific cleanup. Will be called whenever [MLDevice](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md) is destroyed (at the latest, when the application is shutting down). Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

## Public Attributes

### FrameTypeCount {#const-int-frametypecount}

```csharp

public const int FrameTypeCount = 2;

```






-----------

## Public Enums

### CaptureFlags {#enums-captureflags}

Flags used to specify what kind of data to request from Depth Camera 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DepthImage | 1 << 0| Enable DepthImage. See [Data.DepthImage](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#framebuffer-depthimage) for more details.   |
| Confidence | 1 << 1| Enable ConfidenceBuffer. See [Data.ConfidenceBuffer](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#framebuffer-confidencebuffer) for more details.   |
| DepthFlags | 1 << 2| Enable DepthFlagsBuffer. See [Data.DepthFlagsBuffer](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#framebuffer-depthflagsbuffer) for more details.   |
| AmbientRawDepthImage | 1 << 3| Enable AmbientRawDepthImage. See [Data.AmbientRawDepthImage](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#framebuffer-ambientrawdepthimage) for more details.   |
| RawDepthImage | 1 << 4| Enable RawDepthImage. See [Data.RawDepthImage](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#framebuffer-rawdepthimage) for more details.   |








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

### FrameRate {#enums-framerate}

Enumeration of possible frame rates 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FPS_1 | |   |
| FPS_5 | |   |
| FPS_25 | |   |
| FPS_30 | |   |
| FPS_50 | |   |
| FPS_60 | |   |








-----------

### FrameType {#enums-frametype}

Depth Camera frame capture types 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| LongRange | | Frame captured using [Stream.LongRange](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-longrange) mode.   |
| ShortRange | | Frame captured using [Stream.ShortRange](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-shortrange) mode.   |








-----------

### Stream {#enums-stream}

Depth Camera modes   Future release may add support to other modes. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0|   |
| LongRange | 1 << 0| Long range mode  Under normal operations long range mode has a maximum frequency of 5fps and a range of up to 5m, in some cases this can go as far 7.5m. |
| ShortRange | 1 << 1| Short range mode  Under normal operations short range stream has a maximum frequency of 60fps and a range from 0.2m up to 0.9m. |








-----------

