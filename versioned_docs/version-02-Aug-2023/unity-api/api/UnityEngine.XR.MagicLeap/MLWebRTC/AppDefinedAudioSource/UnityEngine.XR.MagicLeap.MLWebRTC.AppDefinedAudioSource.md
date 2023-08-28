---
title: AppDefinedAudioSource
summary: class that represents an app defined video source that can be used by the mlwebrtc api. 

---

# AppDefinedAudioSource




Class that represents an app defined video source that can be used by the MLWebRTC API.   [More...](#detailed-description)  


Inherits from: <br></br>[AppDefinedSource](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedSource.md),<br></br>[Track](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md)



## Detailed Description

```csharp
public class AppDefinedAudioSource : AppDefinedSource 
```


**Details**

Class that represents a source used by the MLWebRTC API. 





-----------



## Public Methods

### override [MLResult](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) DestroyLocal {#override-destroylocal}

Destroys the Track and its associated media source. 

```csharp
public virtual override MLResult DestroyLocal()
```






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if destroying all handles was successful. MLResult.Result will be  MLResult.Code.WebRTCResultInstanceNotCreated  if MLWebRTC instance was not created. MLResult.Result will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 

**Reimplements**: [DestroyLocal](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md#mlresult-destroylocal)



-----------

### [MLResult](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) InitializeLocal {#mlresult-initializelocal}

Initializes the given AppDefinedVideoSource object. 

```csharp
public static MLResult InitializeLocal(
    AppDefinedAudioSource appDefinedAudioSource
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [AppDefinedAudioSource](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedAudioSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedAudioSource.md) |appDefinedAudioSource|The AppDefinedVideoSource object to initialize.|
|  |result|The MLResult object of the inner platform call(s).|






**Returns**: An AppDefinedVideoSource object with the given handle.



-----------

### [MLResult](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) PushData {#mlresult-pushdata}

```csharp
public MLResult PushData(
    short[] audioBuffer,
    in MLAudioOutput.BufferFormat audioBufferFormat
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| short[] |audioBuffer||
| in [MLAudioOutput.BufferFormat](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.BufferFormat.md) |audioBufferFormat|Buffer format settings for input and output streams. |






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


