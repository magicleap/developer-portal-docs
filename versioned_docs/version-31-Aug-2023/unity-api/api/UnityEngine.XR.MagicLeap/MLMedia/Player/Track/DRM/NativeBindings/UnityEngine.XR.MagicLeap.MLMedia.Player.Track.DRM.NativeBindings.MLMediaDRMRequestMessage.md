---
title: MLMediaDRMRequestMessage
summary: data type that encapsulates either of the following along with an url for key request message an opaque key request byte array that should be delivered to the license server. for provision request message an opaque provision request byte array that should be delivered to the provisioning server. 

---

# MLMediaDRMRequestMessage




Data type that encapsulates either of the following along with an URL: For [Key](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Key.md) Request Message: an opaque key request byte array that should be delivered to the license server. For Provision Request Message: an opaque provision request byte array that should be delivered to the provisioning server.   





## Public Attributes

### DefaultURL {#readonly-string-defaulturl}

The recommended URL to deliver the request to. 

```csharp

public readonly string DefaultURL;

```






-----------

### Request {#readonly-request}

The opaque request byte array. 

```csharp

public readonly NativeBindings.MLMediaDRMByteArray Request;

```

| Type | Description  | 
|--|--|
| readonly [NativeBindings.MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) | Data type containing byte array buffer and the size.  |





-----------


