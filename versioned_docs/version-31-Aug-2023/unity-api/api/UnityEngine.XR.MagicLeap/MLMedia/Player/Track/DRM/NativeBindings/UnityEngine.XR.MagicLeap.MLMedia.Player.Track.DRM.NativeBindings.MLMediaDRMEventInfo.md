---
title: MLMediaDRMEventInfo
summary: mediadrm event info associated with a session. 

---

# MLMediaDRMEventInfo




MediaDRM event info associated with a session.   





## Public Attributes

### data {#readonly-intptr-data}

User data as passed to MLMediaDRMPlayerSetEventCallbacksEx(). 

```csharp

public readonly IntPtr data;

```






-----------

### eventDataByteArray {#readonly-intptr-eventdatabytearray}

Optional data that may be associated with the event. 

```csharp

public readonly IntPtr eventDataByteArray;

```






-----------

### eventType {#readonly-eventtype}

Type of Media [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) event. 

```csharp

public readonly EventType eventType;

```

| Type | Description  | 
|--|--|
| readonly [EventType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md#enums-eventtype) | The type of [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) event.  |





-----------

### extra {#readonly-int-extra}

Extra Secondary error code. 

```csharp

public readonly int extra;

```






-----------

### sessionIdByteArray {#readonly-intptr-sessionidbytearray}

[DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) session id associated with the event. 

```csharp

public readonly IntPtr sessionIdByteArray;

```






-----------


