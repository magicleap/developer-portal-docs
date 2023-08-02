---
title: MLMeshing

---

# MLMeshing










## Public Methods

### delegate [MeshingSubsystem.Extensions.MLMeshing.MeshBlockRequest](/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/Extensions/MLMeshing/UnityEngine.XR.MagicLeap.MeshingSubsystem.Extensions.MLMeshing.MeshBlockRequest.md) [] OnMeshBlockRequests {#delegate-onmeshblockrequests}

```csharp
public delegate MeshingSubsystem.Extensions.MLMeshing.MeshBlockRequest [] OnMeshBlockRequests(
    MeshingSubsystem.Extensions.MLMeshing.MeshBlockInfo [] blockInfos
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MeshingSubsystem.Extensions.MLMeshing.MeshBlockInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/Extensions/MLMeshing/UnityEngine.XR.MagicLeap.MeshingSubsystem.Extensions.MLMeshing.MeshBlockInfo.md) [] |blockInfos|Representation of a mesh block. |






-----------

## Public Enums

### LevelOfDetail {#enums-levelofdetail}

Level of detail of the block mesh. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Minimum | | Minimum Level of Detail (LOD) for the mesh.   |
| Medium | | Medium Level of Detail (LOD) for the mesh.   |
| Maximum | | Maximum Level of Detail (LOD) for the mesh.   |








-----------

### MeshState {#enums-meshstate}

State of a block mesh. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| New | | Mesh has been created.   |
| Updated | | Mesh has been updated.   |
| Deleted | | Mesh has been deleted.   |
| Unchanged | | Mesh is unchanged.   |








-----------

