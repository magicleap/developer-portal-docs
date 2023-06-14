---
title: MLSpatialAnchor
summary: a structure representing a user-defined spatial anchor. 

---

# MLSpatialAnchor




A structure representing a user-defined Spatial [Anchor](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md).   





## Public Methods

###  MLSpatialAnchor {#functions-mlspatialanchor}

```csharp
public MLSpatialAnchor(
    MLAnchors.Anchor anchor
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLAnchors.Anchor](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) |anchor||






-----------

###  MLSpatialAnchor {#functions-mlspatialanchor}

```csharp
public MLSpatialAnchor(
    MLAnchors.Anchor anchor,
    ulong expirationTimeStamp
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLAnchors.Anchor](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) |anchor||
| ulong |expirationTimeStamp||






-----------

## Public Attributes

### Cfuid {#readonly-cfuid}

The coordinate frame identifier of the Spatial [Anchor](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md). This should be passed to MLSnapshotGetTransform to get the anchor's transform. The anchor's transform is set when the anchor is created but may be updated later by the Spatial [Anchor](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) system based on factors such as quality of the mapped space and subsequent localizations. 

```csharp

public readonly NativeBindings.MLCoordinateFrameUID Cfuid;

```

| Type | Description  | 
|--|--|
| readonly [NativeBindings.MLCoordinateFrameUID](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) | A unique identifier which represents a coordinate frame. The unique identifier is comprised of two values.  |





-----------

### ExpirationTimeStamp {#readonly-ulong-expirationtimestamp}

The suggested expiration time for this anchor represented in seconds since the Unix epoch. This is implemented as an expiration timestamp in the future after which the associated anchor should be considered no longer valid and may be removed by the Spatial [Anchor](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) system based on factors such as quality of the mapped space and subsequent localizations. 

```csharp

public readonly ulong ExpirationTimeStamp;

```






-----------

### Id {#readonly-id}

The anchor's unique ID. This is a unique identifier for a single Spatial [Anchor](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) that is generated and managed by the Spatial [Anchor](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) system. The ID is created when MLSpatialAnchorCreate is called. 

```csharp

public readonly MLUUIDBytes Id;

```

| Type | Description  | 
|--|--|
| readonly [MLUUIDBytes](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLUUIDBytes.md) | Universally unique identifier, byte array.  |





-----------

### IsPersisted {#readonly-bool-ispersisted}

Indicates whether or not the anchor has been persisted via a call to [MLSpatialAnchorPublish](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/NativeBindings/UnityEngine.XR.MagicLeap.MLAnchors.NativeBindings.md#mlresultcode-mlspatialanchorpublish). 

```csharp

public readonly bool IsPersisted;

```






-----------

### SpaceId {#readonly-spaceid}

The ID of the space that this anchor belongs to. This is only relevant if IsPersisted is true. 

```csharp

public readonly MLUUIDBytes SpaceId;

```

| Type | Description  | 
|--|--|
| readonly [MLUUIDBytes](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLUUIDBytes.md) | Universally unique identifier, byte array.  |





-----------

### Version {#readonly-uint-version}

Version of the structure. 

```csharp

public readonly uint Version;

```






-----------

