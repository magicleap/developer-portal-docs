---
title: Sink
summary: class that represents a audio sink used by the mlwebrtc api. 

---

# Sink




Class that represents a audio sink used by the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.   


Inherited by: <br></br>[UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.md), <br></br>[UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.md), <br></br>[UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.md)




## Public Fields

### Stream {#mlwebrtcmediastream-stream}

Gets or sets the reference to the stream. 

```csharp

public MLWebRTC.MediaStream Stream { get; set; }

```

| Type | Description  | 
|--|--|
| [MLWebRTC.MediaStream](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) | Class that represents a media stream object.  |





-----------

### Type {#mediastreamtracktype-type}

Gets the type of the sink. 

```csharp

public MediaStream.Track.Type Type { get; set; }

```

| Type | Description  | 
|--|--|
| [MediaStream.Track.Type](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md#enums-type) | Defines the types of tracks that can exist.  |





-----------

## Public Methods

### abstract [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Destroy {#abstract--destroy}

Abstract method for destroying the sink. 

```csharp
public virtual abstract MLResult Destroy()
```






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly--result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly--result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly--result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 

**Reimplemented by**: [Destroy](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.md#override--destroy), [Destroy](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.md#override--destroy)



-----------

## Protected Methods

### InvalidateHandle {#void-invalidatehandle}

Used to invalidate handle by inherited classes. 

```csharp
protected void InvalidateHandle()
```






-----------

### SetTrack {#abstract--settrack}

Abstract method for setting the sink's track. 

```csharp
protected virtual abstract MLResult SetTrack(
    MLWebRTC.MediaStream.Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.MediaStream.Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) |track|The track to set the sink to.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly--result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly--result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly--result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 

**Reimplemented by**: [SetTrack](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.md#override--settrack)



-----------

### Sink {#functions-sink}

Initializes a new instance of the [Sink](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.Sink.md) class. 

```csharp
protected Sink()
```






-----------

### Sink {#functions-sink}

Initializes a new instance of the [Sink](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.Sink.md) class. 

```csharp
protected Sink(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The handle of the sink.|






-----------

