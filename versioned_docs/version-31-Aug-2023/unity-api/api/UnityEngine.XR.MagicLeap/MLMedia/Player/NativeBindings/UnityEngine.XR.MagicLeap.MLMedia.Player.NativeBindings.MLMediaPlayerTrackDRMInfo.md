---
title: MLMediaPlayerTrackDRMInfo
summary: mediaplayer drm info for a media track. 

---

# MLMediaPlayerTrackDRMInfo




MediaPlayer DRM Info for a Media [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md).   





## Public Fields

### Data {#mlmediaplayertrackdrminfo-data}

```csharp

public MLMedia.Player.Track.DRM.Info Data { get; set; }

```

| Type | Description  | 
|--|--|
| [MLMedia.Player.Track.DRM.Info](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Info.md) | MediaPlayer [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md)[Info](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Info.md) for a Media [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md).  |





-----------

## Public Attributes

### PsshInfo {#intptr-psshinfo}

Pointer to array of #MLMediaPlayerPSSHEntry of size pssh&#95;info&#95;count. 

```csharp

public IntPtr PsshInfo;

```






-----------

### PsshInfoCount {#ulong-psshinfocount}

Number of PSSH entries. 

```csharp

public ulong PsshInfoCount;

```






-----------

### TrackType {#tracktype-tracktype}

Media track type, can be either audio or video. 

```csharp

public Track.Type TrackType;

```

| Type | Description  | 
|--|--|
| [Track.Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md#enums-type) | Media player track types.  |





-----------

### UUIDs {#intptr-uuids}

Pointer to array of #MLUUID of size uuid&#95;count. 

```csharp

public IntPtr UUIDs;

```






-----------

### UuidCount {#ulong-uuidcount}

Number of supported DRM UUID entries. 

```csharp

public ulong UuidCount;

```






-----------


