---
title: MediaStream
summary: class that represents a media stream object. 

---

# MediaStream




Class that represents a media stream object.   





## Public Fields

### ActiveAudioTrack {#mediastreamtrack-activeaudiotrack}

Gets the active audio track. 

```csharp

public MediaStream.Track ActiveAudioTrack { get; set; }

```

| Type | Description  | 
|--|--|
| [MediaStream.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) | Struct that represents a media stream track object.  |





-----------

### ActiveVideoTrack {#mediastreamtrack-activevideotrack}

Gets the active video track. 

```csharp

public MediaStream.Track ActiveVideoTrack { get; set; }

```

| Type | Description  | 
|--|--|
| [MediaStream.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) | Struct that represents a media stream track object.  |





-----------

### AudioTracks {#list-audiotracks}

Gets all audio tracks. 

```csharp

public List< MediaStream.Track > AudioTracks { get; set; }

```

| Type | Description  | 
|--|--|
| List&lt; [MediaStream.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) &gt; | Struct that represents a media stream track object.  |





-----------

### Id {#string-id}

Gets the id of this media stream. 

```csharp

public string Id = new HashSet<PeerConnection>() { get; set; }

```






-----------

### IsLocal {#bool-islocal}

Gets a value indicating whether the media stream is local or not. 

```csharp

public bool IsLocal { get; set; }

```






-----------

### ParentConnections {#hashset-parentconnections}

Gets the connections associated with this media stream. Remote media streams will have just 1 connection, while local streams can have more than one, depending on the app setup. 

```csharp

public HashSet< MLWebRTC.PeerConnection > ParentConnections { get; set; }

```

| Type | Description  | 
|--|--|
| HashSet&lt; [MLWebRTC.PeerConnection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) &gt; | Class that represents a connection used by the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.  |





-----------

### Tracks {#list-tracks}

Gets the list of tracks associated with this media stream. 

```csharp

public List< MediaStream.Track > Tracks { get; set; }

```

| Type | Description  | 
|--|--|
| List&lt; [MediaStream.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) &gt; | Struct that represents a media stream track object.  |





-----------

### VideoTracks {#list-videotracks}

Gets all video tracks. 

```csharp

public List< MediaStream.Track > VideoTracks { get; set; }

```

| Type | Description  | 
|--|--|
| List&lt; [MediaStream.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) &gt; | Struct that represents a media stream track object.  |





-----------

## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) AddLocalTrack {#mlresult-addlocaltrack}

Adds a local track to the media stream. 

```csharp
public MLResult AddLocalTrack(
    MLWebRTC.MediaStream.Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.MediaStream.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) |connection|The connection to use.|
|  |track|The local track to add.|






**Returns**: 



-----------

### [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) Create {#mediastream-create}

Creates an initialized local [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) object. 

```csharp
public static MediaStream Create(
    string id
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |id|The id to give the media stream.|






**Returns**: An initialized [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) object.



-----------

### [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) CreateWithAppDefinedVideoTrack {#mediastream-createwithappdefinedvideotrack}

Creates an initialized local [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) object and it's tracks with the given video source. 

```csharp
public static MediaStream CreateWithAppDefinedVideoTrack(
    string id,
    MLWebRTC.AppDefinedVideoSource appDefinedVideoSource,
    Track.AudioType audioType,
    string audioTrackId ="",
    MLWebRTC.AppDefinedAudioSource localDefinedAudioSource =null
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |connection|Connection to use.|
| [MLWebRTC.AppDefinedVideoSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedVideoSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource.md) |id|The id to give the media stream.|
| [Track.AudioType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md#enums-audiotype) |appDefinedVideoSource|The defined video source to use.|
| string |audioTrackId||
| [MLWebRTC.AppDefinedAudioSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedAudioSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedAudioSource.md) |localDefinedAudioSource|Class that represents an app defined video source that can be used by the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API. |






**Returns**: An initialized [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) object.



-----------

### [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) CreateWithBuiltInTracks {#mediastream-createwithbuiltintracks}

Creates an initialized local [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) object and it's tracks with the given video type. Recommended to use [CreateWithAppDefinedVideoTrack()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md#mediastream-createwithappdefinedvideotrack) in production, with sample video sources provided as [MLCameraVideoSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.MLCameraVideoSource.md) and MLMRCameraVideoSource in the [UnityEngine.XR.MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) namespace since those sources provide more information about and control over various error cases and handle special cases like app pause/resume and device standby/reality/active. 

```csharp
public static MediaStream CreateWithBuiltInTracks(
    string id,
    Track.VideoType videoType,
    Track.AudioType audioType,
    string videoTrackId ="",
    string audioTrackId =""
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |connection|Connection to use.|
| [Track.VideoType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md#enums-videotype) |id|The id to give the media stream.|
| [Track.AudioType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md#enums-audiotype) |videoType|The type of video to use.|
| string |videoTrackId||
| string |audioTrackId||






**Returns**: An initialized [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) object.



-----------

### void DestroyLocal {#void-destroylocal}

Destroys this stream and it's associated tracks. 

```csharp
public void DestroyLocal()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) RemoveLocalTrack {#mlresult-removelocaltrack}

Removes a local track from the media stream. 

```csharp
public MLResult RemoveLocalTrack(
    MLWebRTC.MediaStream.Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.MediaStream.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) |connection|The connection to use.|
|  |track|The local track to add.|






**Returns**: 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SelectTrack {#mlresult-selecttrack}

Sets the given track as the active track of it's kind and enables it. 

```csharp
public MLResult SelectTrack(
    MediaStream.Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MediaStream.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) |track|The track to make active.|






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) UnSelectTrack {#mlresult-unselecttrack}

Sets the given track to longer be the active track of it's kind and disables. 

```csharp
public MLResult UnSelectTrack(
    MediaStream.Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MediaStream.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) |track|The track to make inactive.|






-----------


