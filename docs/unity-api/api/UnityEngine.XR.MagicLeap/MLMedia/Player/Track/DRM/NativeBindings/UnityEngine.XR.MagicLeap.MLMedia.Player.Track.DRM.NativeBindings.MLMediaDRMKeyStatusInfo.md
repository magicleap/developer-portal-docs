---
title: MLMediaDRMKeyStatusInfo
summary: mediadrm session keys status change info. 

---

# MLMediaDRMKeyStatusInfo




MediaDRM session keys status change info.   





## Public Attributes

### sessionIdByteArray {#intptr-sessionidbytearray}

[DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) session id associated with the event. 

```csharp

public IntPtr sessionIdByteArray;

```






-----------

### keyStatuses {#intptr-keystatuses}

Pointer to array of size keyStatusCount. 

```csharp

public IntPtr keyStatuses;

```






-----------

### keyStatusCount {#ulong-keystatuscount}

Number of KeyStatus entries. 

```csharp

public ulong keyStatusCount;

```






-----------

### hasNewUsableKey {#bool-hasnewusablekey}

Indicates if a key has been added that is usable, which may trigger an attempt to resume playback on the media stream if it is currently blocked waiting for a key. 

```csharp

public bool hasNewUsableKey;

```






-----------

### data {#intptr-data}

User data as passed to MLMediaDRMPlayerSetEventCallbacksEx(). 

```csharp

public IntPtr data;

```






-----------

