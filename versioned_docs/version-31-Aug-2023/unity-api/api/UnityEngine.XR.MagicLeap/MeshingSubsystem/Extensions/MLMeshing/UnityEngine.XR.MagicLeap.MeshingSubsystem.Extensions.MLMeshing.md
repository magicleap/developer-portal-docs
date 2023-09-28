---
title: MLMeshing

---

# MLMeshing










## Public Methods

### [LevelOfDetail](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/Extensions/MLMeshing/UnityEngine.XR.MagicLeap.MeshingSubsystem.Extensions.MLMeshing.md#enums-levelofdetail) DensityToLevelOfDetail {#levelofdetail-densitytolevelofdetail}

Step the Level of detail to Minimum, Medium and Maximum 

```csharp
public static LevelOfDetail DensityToLevelOfDetail(
    float density
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |density|float input value|






**Returns**: 



-----------

### float LevelOfDetailToDensity {#float-levelofdetailtodensity}

Convert a LevelOfDetail to a float, ranged between 0 and 1 

```csharp
public static float LevelOfDetailToDensity(
    LevelOfDetail lod
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [LevelOfDetail](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/Extensions/MLMeshing/UnityEngine.XR.MagicLeap.MeshingSubsystem.Extensions.MLMeshing.md#enums-levelofdetail) |lod|Level of detail|






**Returns**: Float value between 0 and 1



-----------

### delegate [MeshingSubsystem.Extensions.MLMeshing.MeshBlockRequest](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/Extensions/MLMeshing/UnityEngine.XR.MagicLeap.MeshingSubsystem.Extensions.MLMeshing.MeshBlockRequest.md) [] OnMeshBlockRequests {#delegate-onmeshblockrequests}

```csharp
public delegate MeshingSubsystem.Extensions.MLMeshing.MeshBlockRequest [] OnMeshBlockRequests(
    MeshingSubsystem.Extensions.MLMeshing.MeshBlockInfo [] blockInfos
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MeshingSubsystem.Extensions.MLMeshing.MeshBlockInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/Extensions/MLMeshing/UnityEngine.XR.MagicLeap.MeshingSubsystem.Extensions.MLMeshing.MeshBlockInfo.md) [] |blockInfos|Representation of a mesh block. |






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


