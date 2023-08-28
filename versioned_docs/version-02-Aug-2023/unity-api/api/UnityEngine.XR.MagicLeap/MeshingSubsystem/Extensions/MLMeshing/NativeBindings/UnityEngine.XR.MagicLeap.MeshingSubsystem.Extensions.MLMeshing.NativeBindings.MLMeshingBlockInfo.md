---
title: MLMeshingBlockInfo
summary: representation of a mesh block. 

---

# MLMeshingBlockInfo




Representation of a mesh block.   





## Public Attributes

### cfuid {#magicleapnativebindingsmlcoordinateframeuid-cfuid}

The coordinate frame UID to represent the block. 

```csharp

public MagicLeapNativeBindings.MLCoordinateFrameUID cfuid;

```

| Type | Description  | 
|--|--|
| [MagicLeapNativeBindings.MLCoordinateFrameUID](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) | A unique identifier which represents a coordinate frame. The unique identifier is comprised of two values.  |





-----------

### extents {#mlmeshingextents-extents}

The extents of the bounding box. 

```csharp

public MLMeshingExtents extents;

```

| Type | Description  | 
|--|--|
| [MLMeshingExtents](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/Extensions/MLMeshing/NativeBindings/UnityEngine.XR.MagicLeap.MeshingSubsystem.Extensions.MLMeshing.NativeBindings.MLMeshingExtents.md) | Axis aligned bounding box for querying updated mesh info.  |





-----------

### state {#meshstate-state}

The state of the Mesh Block. 

```csharp

public MeshState state;

```

| Type | Description  | 
|--|--|
| [MeshState](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/Extensions/MLMeshing/UnityEngine.XR.MagicLeap.MeshingSubsystem.Extensions.MLMeshing.md#enums-meshstate) | State of a block mesh.  |





-----------

### timestamp {#long-timestamp}

The timestamp when block was updated. 

```csharp

public long timestamp;

```






-----------


