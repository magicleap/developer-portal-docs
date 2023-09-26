---
title: VideoSink
summary: class that represents a video sink used by the mlwebrtc api. video sinks are fed data by media sources and produces frames to render. 

---

# VideoSink




Class that represents a video sink used by the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API. Video sinks are fed data by media sources and produces frames to render.   [More...](#detailed-description)  


Inherits from: <br></br>[Sink](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.Sink.md),<br></br>[Sink](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.Sink.md)



## Detailed Description

```csharp
public class VideoSink : Sink 
```


**Details**

Class that represents a source used by the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API. 





-----------



## Public Methods

### bool AcquireNextAvailableFrame {#bool-acquirenextavailableframe}

```csharp
public bool AcquireNextAvailableFrame(
    out Frame newFrame
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [Frame](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.md) |newFrame|Struct representing a captured camera frame. |






-----------

### [VideoSink](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.md) Create {#videosink-create}

Creates an initialized [VideoSink](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.md) object. 

```csharp
public static VideoSink Create(
    out MLResult result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |result|The [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) object of the inner platform call(s).|






**Returns**: An initialized [VideoSink](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.md) object.



-----------

### override [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Destroy {#override-destroy}

Destroys the video sink. 

```csharp
public virtual override MLResult Destroy()
```






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 

**Reimplements**: [Destroy](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.Sink.md#abstract-destroy)



-----------

### bool IsNewFrameAvailable {#bool-isnewframeavailable}

```csharp
public bool IsNewFrameAvailable()
```






-----------

### delegate void OnDestroySinkDelegate {#delegate-void-ondestroysinkdelegate}

```csharp
public delegate void OnDestroySinkDelegate(
    VideoSink videoSink
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [VideoSink](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.md) |videoSink|Class that represents a video sink used by the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API. Video sinks are fed data by media sources and produces frames to render. |






-----------

### delegate void OnFrameResolutionChangedDelegate {#delegate-void-onframeresolutionchangeddelegate}

```csharp
public delegate void OnFrameResolutionChangedDelegate(
    uint newWidth,
    uint newHeight
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |newWidth||
| uint |newHeight||






-----------

### delegate void OnStreamChangedDelegate {#delegate-void-onstreamchangeddelegate}

```csharp
public delegate void OnStreamChangedDelegate(
    MediaStream stream
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) |stream|Class that represents a media stream object. |






-----------

### void ReleaseFrame {#void-releaseframe}

```csharp
public void ReleaseFrame()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetStream {#mlresult-setstream}

Sets the stream of the video sink sink. 

```csharp
public MLResult SetStream(
    MediaStream stream
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) |stream|The stream to use.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 



-----------

## Protected Methods

### SetTrack {#override-settrack}

Sets the track of the video sink. 

```csharp
protected override MLResult SetTrack(
    MediaStream.Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MediaStream.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) |track|The track to use.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 



-----------

## Public Events

### OnDestroySink {#ondestroysinkdelegate-ondestroysink}

```csharp
public OnDestroySinkDelegate OnDestroySink()
```






-----------

### OnFrameResolutionChanged {#onframeresolutionchangeddelegate-onframeresolutionchanged}

```csharp
public OnFrameResolutionChangedDelegate OnFrameResolutionChanged()
```






-----------

### OnStreamChanged {#onstreamchangeddelegate-onstreamchanged}

```csharp
public OnStreamChangedDelegate OnStreamChanged()
```






-----------


