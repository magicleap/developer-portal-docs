---
title: Event
summary: mediadrm event info associated with a session. 

---

# Event




MediaDRM event info associated with a session.   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### Data {#readonly-byte-data}

Optional data that may be associated with the event. 

```csharp

public readonly byte[] Data;

```






-----------

### Extra {#readonly-int-extra}

Extra Secondary error code. 

```csharp

public readonly int Extra;

```






-----------

### SessionId {#readonly-byte-sessionid}

DRM session id associated with the event. 

```csharp

public readonly byte[] SessionId;

```






-----------

### Type {#readonly-type}

Type of Media DRM event. 

```csharp

public readonly EventType Type;

```

| Type | Description  | 
|--|--|
| readonly [EventType](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md#enums-eventtype) | The type of DRM event.  |





-----------


