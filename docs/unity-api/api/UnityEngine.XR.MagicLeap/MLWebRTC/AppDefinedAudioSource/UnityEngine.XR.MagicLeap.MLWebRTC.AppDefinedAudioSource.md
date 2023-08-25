---
title: AppDefinedAudioSource
summary: class that represents an app defined video source that can be used by the mlwebrtc api. 

---

# AppDefinedAudioSource




Class that represents an app defined video source that can be used by the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.   [More...](#detailed-description)  


Inherits from: <br></br>[AppDefinedSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedSource.md),<br></br>[Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md)



## Detailed Description

```csharp
public class AppDefinedAudioSource : AppDefinedSource 
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
    AppDefinedAudioSource appDefinedAudioSource
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [AppDefinedAudioSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedAudioSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedAudioSource.md) |appDefinedAudioSource|The [AppDefinedVideoSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedVideoSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource.md) object to initialize.|
|  |result|The [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) object of the inner platform call(s).|






**Returns**: An [AppDefinedVideoSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedVideoSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource.md) object with the given handle.



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) PushData {#mlresult-pushdata}

```csharp
public MLResult PushData(
    short [] audioBuffer,
    in MLAudioOutput.BufferFormat audioBufferFormat
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| short [] |audioBuffer||
| in [MLAudioOutput.BufferFormat](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.BufferFormat.md) |audioBufferFormat|[Buffer](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.Buffer.md) format settings for input and output streams. |






-----------

## Protected Methods

### AppDefinedAudioSource {#functions-appdefinedaudiosource}

```csharp
protected AppDefinedAudioSource(
    string trackId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |trackId||






-----------

