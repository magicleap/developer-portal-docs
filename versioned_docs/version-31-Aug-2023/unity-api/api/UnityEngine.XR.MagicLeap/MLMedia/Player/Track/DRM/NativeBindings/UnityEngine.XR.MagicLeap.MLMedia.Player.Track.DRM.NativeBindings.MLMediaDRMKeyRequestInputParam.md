---
title: MLMediaDRMKeyRequestInputParam
summary: data type that encapsulates key request input arguments. 

---

# MLMediaDRMKeyRequestInputParam




Data type that encapsulates [Key](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Key.md) Request input arguments.   





## Public Attributes

### InitData {#intptr-initdata}

The container-specific data, its meaning is interpreted based on the mime-type provided in the mime&#95;type parameter. It could contain, for example, the content ID, key ID or other data obtained from the content metadata that is required in generating the key request. 

```csharp

public IntPtr InitData;

```






-----------

### KeyType {#keytype-keytype}

The type of the request. The request may be to acquire keys for streaming or offline content, or to release previously acquired keys, which are identified by a key&#95;set&#95;id. 

```csharp

public KeyType KeyType;

```

| Type | Description  | 
|--|--|
| [KeyType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md#enums-keytype) | Type of [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) key.  |





-----------

### MimeType {#string-mimetype}

The mime type of the content. 

```csharp

public string MimeType;

```






-----------

### OptionalParams {#readonly-intptr-optionalparams}

Optional parameters included in the key request message to allow a client application to provide additional message parameters to the server. 

```csharp

public readonly IntPtr OptionalParams;

```






-----------


