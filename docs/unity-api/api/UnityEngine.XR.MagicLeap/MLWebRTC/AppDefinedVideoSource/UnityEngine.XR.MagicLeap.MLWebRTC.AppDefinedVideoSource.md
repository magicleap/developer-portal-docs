---
title: AppDefinedVideoSource
summary: class that represents an app defined video source that can be used by the mlwebrtc api. 

---

# AppDefinedVideoSource




Class that represents an app defined video source that can be used by the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.   [More...](#detailed-description)  


Inherits from: <br></br>[AppDefinedSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedSource.md),<br></br>[Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md)

Inherited by: <br></br>[UnityEngine.XR.MagicLeap.MLWebRTC.MLCameraVideoSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.MLCameraVideoSource.md)



## Detailed Description

```csharp
public class AppDefinedVideoSource : AppDefinedSource 
```


**Details**

Class that represents a source used by the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API. 





-----------



## Public Methods

### override [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) DestroyLocal {#override-destroylocal}

Destroys the Track and its associated media source. 

```csharp
public virtual override MLResult DestroyLocal()
```






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 

**Reimplements**: [DestroyLocal](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md#mlresult-destroylocal)



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) InitializeLocal {#mlresult-initializelocal}

Initializes the given [AppDefinedVideoSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedVideoSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource.md) object. 

```csharp
public static MLResult InitializeLocal(
    AppDefinedVideoSource appDefinedVideoSource
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [AppDefinedVideoSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedVideoSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource.md) |appDefinedVideoSource|The [AppDefinedVideoSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedVideoSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource.md) object to initialize.|
|  |result|The [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) object of the inner platform call(s).|






**Returns**: An [AppDefinedVideoSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedVideoSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource.md) object with the given handle.



-----------

## Protected Methods

### PushFrame {#mlresult-pushframe}

Pushes a frame into the defined video source. 

```csharp
protected MLResult PushFrame(
    VideoSink.Frame frame
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [VideoSink.Frame](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.md) |frame|The frame to push to the video source.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInvalidFrameFormat  if an invalid frame format was specified. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInvalidFramePlaneCount  if an invalid plane count was specified for the given frame format. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.WebRTCSendNativeFrameError](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-webrtcsendnativeframeerror)  pushing a native format frame fails. 



-----------

