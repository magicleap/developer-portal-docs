---
title: KeyStatuses
summary: mediadrm session keys status change info. 

---

# KeyStatuses




MediaDRM session keys status change info.   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### HasNewUseableKey {#readonly-bool-hasnewuseablekey}

Indicates if a key has been added that is usable, which may trigger an attempt to resume playback on the media stream if it is currently blocked waiting for a key. 

```csharp

public readonly bool HasNewUseableKey;

```






-----------

### Keys {#readonly-keys}

[Key](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Key.md) entries. 

```csharp

public readonly Key [] Keys;

```

| Type | Description  | 
|--|--|
| readonly [Key](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Key.md) [] | MediaDRM session key info.  |





-----------

### SessionId {#readonly-byte-sessionid}

[DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) session id associated with the event. 

```csharp

public readonly byte [] SessionId;

```






-----------


