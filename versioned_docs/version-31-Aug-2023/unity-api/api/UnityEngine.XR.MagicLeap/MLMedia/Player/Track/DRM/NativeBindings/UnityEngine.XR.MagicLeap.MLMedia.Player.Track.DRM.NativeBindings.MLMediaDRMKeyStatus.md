---
title: MLMediaDRMKeyStatus
summary: mediadrm session key status. 

---

# MLMediaDRMKeyStatus




MediaDRM session key status.   





## Public Attributes

### Data {#key-data}

```csharp

public Key Data => new Key(this.keyId.Bytes, this.status);

```

| Type | Description  | 
|--|--|
| [Key](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Key.md) | MediaDRM session key info.  |





-----------

### keyId {#readonly-keyid}

KeyID that belongs to one of th [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) session key. 

```csharp

public readonly MLMediaDRMByteArray keyId;

```

| Type | Description  | 
|--|--|
| readonly [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) | Data type containing byte array buffer and the size.  |





-----------

### status {#readonly-keystatus-status}

Status code of the corresponding key. 

```csharp

public readonly KeyStatus status;

```






-----------


