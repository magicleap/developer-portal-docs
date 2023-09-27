---
title: Expiration
summary: mediadrm expiration update info associated with a session. 

---

# Expiration




MediaDRM expiration update info associated with a session.   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### SessionId {#readonly-byte-sessionid}

[DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) session id associated with the event. 

```csharp

public readonly byte [] SessionId;

```






-----------

### TimeMs {#readonly-ulong-timems}

The new expiration time for the keys in the session. The time is in milliseconds ,relative to the Unix epoch. A time of 0 indicates that the keys never expire. 

```csharp

public readonly ulong TimeMs;

```






-----------


