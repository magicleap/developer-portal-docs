---
title: MLMediaDRMKeyStatus
summary: mediadrm session key status. 

---

# MLMediaDRMKeyStatus




MediaDRM session key status.   





## Public Fields

### Data {#key-data}

```csharp

public Key Data { get; set; }

```

| Type | Description  | 
|--|--|
| [Key](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Key.md) | MediaDRM session key info.  |





-----------

## Public Attributes

### keyId {#readonly-keyid}

KeyID that belongs to one of th DRM session key. 

```csharp

public readonly MLMediaDRMByteArray keyId;

```

| Type | Description  | 
|--|--|
| readonly [MLMediaDRMByteArray](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) | Data type containing byte array buffer and the size.  |





-----------

### status {#readonly-keystatus-status}

Status code of the corresponding key. 

```csharp

public readonly KeyStatus status;

```






-----------


