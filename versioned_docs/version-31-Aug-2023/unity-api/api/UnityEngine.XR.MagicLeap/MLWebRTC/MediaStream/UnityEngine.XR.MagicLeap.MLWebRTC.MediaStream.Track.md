---
title: Track
summary: struct that represents a media stream track object. 

---

# Track




Struct that represents a media stream track object.   


Inherited by: <br></br>[UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedSource.md)




## Public Fields

### Id {#string-id}

[Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) name 

```csharp

public string Id { get; set; }

```






-----------

### IsLocal {#bool-islocal}

Gets or sets a value indicating whether the track is local or not. 

```csharp

public bool IsLocal { get; set; }

```






-----------

### ParentConnection {#mlwebrtcpeerconnection-parentconnection}

Gets a reference to the associated connection of the track. 

```csharp

public MLWebRTC.PeerConnection ParentConnection { get; set; }

```

| Type | Description  | 
|--|--|
| [MLWebRTC.PeerConnection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) | Class that represents a connection used by the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.  |





-----------

### Streams {#list-streams}

Gets the list of streams associated with this track. 

```csharp

public List< MediaStream > Streams { get; set; }

```

| Type | Description  | 
|--|--|
| List&lt; [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) &gt; | Class that represents a media stream object.  |





-----------

### TrackType {#type-tracktype}

Gets the string that determines the type of track this is. 

```csharp

public Type TrackType { get; set; }

```

| Type | Description  | 
|--|--|
| [Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md#enums-type) | Defines the types of tracks that can exist.  |





-----------

## Public Methods

### [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) CreateAudioTrackFromMicrophone {#track-createaudiotrackfrommicrophone}

Creates an initialized [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) object. 

```csharp
public static Track CreateAudioTrackFromMicrophone(
    out MLResult result,
    string trackId =""
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |result|The [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) object of the inner platform call(s).|
| string |trackId||






**Returns**: An initialized [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) object.



-----------

### [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) CreateAudioTrackFromSource {#track-createaudiotrackfromsource}

Creates an initialized [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) object. 

```csharp
public static Track CreateAudioTrackFromSource(
    out MLResult result,
    string trackId =""
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |result|The [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) object of the inner platform call(s).|
| string |trackId||






**Returns**: An initialized [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) object.



-----------

### [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) CreateVideoTrack {#track-createvideotrack}

Creates an initialized [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) object. Recommended to use app defined video sources in production, with sample sources provided as [MLCameraVideoSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.MLCameraVideoSource.md) and MLMRCameraVideoSource in the [UnityEngine.XR.MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) namespace since those sources provide more information about and control over various error cases and handle special cases like app pause/resume and device standby/reality/active. 

```csharp
public static Track CreateVideoTrack(
    VideoType videoType,
    out MLResult result,
    string trackId =""
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [VideoType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md#enums-videotype) |videoType|The type of video source to use.|
| out [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |result|The [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) object of the inner platform call(s).|
| string |inputContext|The InputContext object to start the MLMRCamera API with.|






**Returns**: An initialized [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) object.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) DestroyLocal {#mlresult-destroylocal}

Destroys the [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) and its associated media source. 

```csharp
public virtual MLResult DestroyLocal()
```






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 

**Reimplemented by**: [DestroyLocal](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedAudioSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedAudioSource.md#override-destroylocal), [DestroyLocal](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedVideoSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource.md#override-destroylocal)



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetEnabled {#mlresult-getenabled}

Gets if a track is currently enabled or not. 

```csharp
public MLResult GetEnabled(
    out bool isEnabled
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out bool |isEnabled|True if the track is enabled.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetEnabled {#mlresult-setenabled}

Sets a track to be enabled or disabled. 

```csharp
public MLResult SetEnabled(
    bool isEnabled
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |isEnabled|True if the track should be enabled.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 



-----------

## Protected Methods

### HandleDeviceActive {#void-handledeviceactive}

Sets this track to enabled during the lifecycle active event. Override for custom behavior. 

```csharp
protected virtual void HandleDeviceActive()
```






-----------

### HandleDeviceReality {#void-handledevicereality}

Disables this track during the lifecycle reality events. Override for custom behavior. 

```csharp
protected virtual void HandleDeviceReality()
```






-----------

### HandleDeviceStandby {#void-handledevicestandby}

Disables this track during the lifecycle standby event. Override for custom behavior. 

```csharp
protected virtual void HandleDeviceStandby()
```






-----------

### OnApplicationPause {#void-onapplicationpause}

Reacts to when the application is paused (after subscribing to [MLDevice](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md)). Override for custom behavior. 

```csharp
protected virtual void OnApplicationPause(
    bool pause
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |pause|True if paused.|




**Reimplemented by**: [OnApplicationPause](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.MLCameraVideoSource.md#override-void-onapplicationpause)



-----------

## Protected Attributes

### wasEnabledBeforeLifecycleStateChange {#bool-wasenabledbeforelifecyclestatechange}

Caches if the track was enabled before a lifestyle event change. 

```csharp

protected bool wasEnabledBeforeLifecycleStateChange = false;

```






-----------

## Public Enums

### AudioType {#enums-audiotype}

Defines the natively supported audio types. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | | No audio source.   |
| Microphone | | Natively uses Microphone as audio source.   |
| Defined | | Uses a custom audio source.   |








-----------

### Type {#enums-type}

Defines the types of tracks that can exist. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Audio | | Audio track type.   |
| Video | | Video track type.   |








-----------

### VideoType {#enums-videotype}

Defines the natively supported video types. It is recommended to use app defined video sources in production, with sample sources provided as [MLWebRTC.MLCameraVideoSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.MLCameraVideoSource.md) in the [UnityEngine.XR.MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) namespace since those sources provide more information about and control over the camera configuration. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | | No video source.   |
| MLCamera | | Natively uses [MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) as video source.   |
| MLMRCamera | | Natively uses MLMRCamera as video source.   |
| VirtualOnly | | Natively uses VirtualOnly as video source.   |








-----------


