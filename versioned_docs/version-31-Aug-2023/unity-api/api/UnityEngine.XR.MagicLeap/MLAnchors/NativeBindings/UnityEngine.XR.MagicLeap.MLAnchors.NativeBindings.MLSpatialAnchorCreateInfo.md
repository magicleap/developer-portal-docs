---
title: MLSpatialAnchorCreateInfo
summary: a structure used to populate anchor creation info when creating a new spatial anchor. 

---

# MLSpatialAnchorCreateInfo




A structure used to populate anchor creation info when creating a new Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md).   





## Public Methods

###  MLSpatialAnchorCreateInfo {#functions-mlspatialanchorcreateinfo}

```csharp
public MLSpatialAnchorCreateInfo(
    Pose Pose,
    ulong ExpirationTimestamp
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Pose |Pose||
| ulong |ExpirationTimestamp||






-----------

## Public Attributes

### ExpirationTimestamp {#readonly-ulong-expirationtimestamp}

The suggested expiration time for this anchor represented in seconds since the Unix epoch. This is implemented as an expiration timestamp in the future after which the associated anchor should be considered no longer valid and may be removed by the Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) system. If the timestamp is set to zero in this struct, it will default to one year from when the anchor is created. 

```csharp

public readonly ulong ExpirationTimestamp;

```






-----------

### Transform {#readonly-transform}

The desired transform of the new Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md). The anchor's transform is set when the anchor is created but may be updated later by the Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) system based on factors such as quality of the mapped space and subsequent localizations. 

```csharp

public readonly NativeBindings.MLTransform Transform;

```

| Type | Description  | 
|--|--|
| readonly [NativeBindings.MLTransform](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) | Information used to transform from one coordinate frame to another.  |





-----------

### Version {#readonly-uint-version}

Version of the structure. 

```csharp

public readonly uint Version;

```






-----------


