---
title: MLMediaDRMKeyStatusInfo
summary: mediadrm session keys status change info. 

---

# MLMediaDRMKeyStatusInfo




MediaDRM session keys status change info.   





## Public Attributes

### data {#intptr-data}

User data as passed to MLMediaDRMPlayerSetEventCallbacksEx(). 

```csharp

public IntPtr data;

```






-----------

### hasNewUsableKey {#bool-hasnewusablekey}

Indicates if a key has been added that is usable, which may trigger an attempt to resume playback on the media stream if it is currently blocked waiting for a key. 

```csharp

public bool hasNewUsableKey;

```






-----------

### keyStatusCount {#ulong-keystatuscount}

Number of KeyStatus entries. 

```csharp

public ulong keyStatusCount;

```






-----------

### keyStatuses {#intptr-keystatuses}

Pointer to array of size keyStatusCount. 

```csharp

public IntPtr keyStatuses;

```






-----------

### sessionIdByteArray {#intptr-sessionidbytearray}

[DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) session id associated with the event. 

```csharp

public IntPtr sessionIdByteArray;

```






-----------


