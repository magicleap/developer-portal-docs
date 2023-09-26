---
title: MLMediaDRMExpirationUpdateInfo
summary: mediadrm expiration update info associated with a session. 

---

# MLMediaDRMExpirationUpdateInfo




MediaDRM expiration update info associated with a session.   





## Public Attributes

### data {#readonly-intptr-data}

User data as passed to MLMediaDRMPlayerSetEventCallbacksEx(). 

```csharp

public readonly IntPtr data;

```






-----------

### expirationTimeMs {#readonly-ulong-expirationtimems}

The new expiration time for the keys in the session. The time is in milliseconds ,relative to the Unix epoch. A time of 0 indicates that the keys never expire. 

```csharp

public readonly ulong expirationTimeMs;

```






-----------

### sessionIdByteArray {#readonly-intptr-sessionidbytearray}

[DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) session id associated with the event. 

```csharp

public readonly IntPtr sessionIdByteArray;

```






-----------


