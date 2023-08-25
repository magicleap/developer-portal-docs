---
title: MeshBlockInfo
summary: representation of a mesh block. 

---

# MeshBlockInfo




Representation of a mesh block.   





## Public Attributes

### extents {#readonly-vector3-extents}

The extents of the bounding box. 

```csharp

public readonly Vector3 extents;

```






-----------

### id {#readonly-string-id}

The coordinate frame UID to represent the block. 

```csharp

public readonly string id;

```






-----------

### pose {#readonly-pose-pose}

The pose of the mesh block. 

```csharp

public readonly Pose pose;

```






-----------

### state {#readonly-state}

The state of the mesh block. 

```csharp

public readonly MeshState state;

```

| Type | Description  | 
|--|--|
| readonly [MeshState](/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/Extensions/MLMeshing/UnityEngine.XR.MagicLeap.MeshingSubsystem.Extensions.MLMeshing.md#enums-meshstate) | State of a block mesh.  |





-----------

### timestamp {#readonly-timestamp}

The timestamp when block was updated. 

```csharp

public readonly MLTime timestamp;

```

| Type | Description  | 
|--|--|
| readonly [MLTime](/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) | Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. If [OpenXR](/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) is used, [MLTime](/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) is synonymous with the XrTime type.  |





-----------

