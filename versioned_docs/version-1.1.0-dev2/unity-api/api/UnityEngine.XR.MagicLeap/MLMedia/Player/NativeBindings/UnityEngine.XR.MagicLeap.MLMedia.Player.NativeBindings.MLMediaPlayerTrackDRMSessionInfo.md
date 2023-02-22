---
title: MLMediaPlayerTrackDRMSessionInfo
summary: drm session information for a mediaplayer track. 

---

# MLMediaPlayerTrackDRMSessionInfo




DRM Session information for a MediaPlayer [Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md).   





## Public Attributes

### SessionId {#intptr-sessionid}

DRM Session ID of type #MLMediaDRMByteArray. 

```csharp

public IntPtr SessionId;

```






-----------

### TrackType {#tracktype-tracktype}

Media track type, can be either audio or video. 

```csharp

public Track.Type TrackType;

```

| Type | Description  | 
|--|--|
| [Track.Type](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md#enums-type) | Media player track types.  |





-----------

### Uuid {#intptr-uuid}

UUID of the DRM Scheme of type #MLUUID. 

```csharp

public IntPtr Uuid;

```






-----------

### Version {#uint-version}

```csharp

public uint Version;

```






-----------

