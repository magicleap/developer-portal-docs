---
title: MeshingSubsystemComponent

---

# MeshingSubsystemComponent



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 





Inherits from: <br></br>MonoBehaviour




## Public Fields

### PrefabRenderer {#meshrenderer-prefabrenderer}

```csharp

public MeshRenderer PrefabRenderer { get; set; }

```






-----------

### batchSize {#int-batchsize}

How many meshes to update per batch. Larger values are more efficient, but have higher latency. 

```csharp

public int batchSize { get; set; }

```






-----------

### computeNormals {#bool-computenormals}

When enabled, the system will compute the normals for the triangle vertices. 

```csharp

public bool computeNormals { get; set; }

```






-----------

### density {#float-density}

```csharp

public float density { get; set; }

```






-----------

### disconnectedComponentArea {#float-disconnectedcomponentarea}

Any component that is disconnected from the main mesh and which has an area less than this size will be removed. 

```csharp

public float disconnectedComponentArea { get; set; }

```






-----------

### fillHoleLength {#float-fillholelength}

Boundary distance (in meters) of holes you wish to have filled. 

```csharp

public float fillHoleLength { get; set; }

```






-----------

### meshIdToGameObjectMap {#dictionary-meshid,-gameobject-meshidtogameobjectmap}

A  Dictionary  which maps mesh ids to their  GameObject s. 

```csharp

public Dictionary< MeshId, GameObject > meshIdToGameObjectMap { get; set; }

```






-----------

### meshParent {#transform-meshparent}

The parent transform for generated meshes. 

```csharp

public Transform meshParent { get; set; }

```






-----------

### meshPrefab {#gameobject-meshprefab}

Get or set the prefab which should be instantiated to create individual mesh instances. May have a mesh renderer and an optional mesh collider for physics. 

```csharp

public GameObject meshPrefab { get; set; }

```






-----------

### meshQueueSize {#uint-meshqueuesize}

Controls the number of meshes to queue for generation at once. Larger numbers will lead to higher CPU usage. 

```csharp

public uint meshQueueSize { get; set; }

```






-----------

### planarize {#bool-planarize}

When enabled, the system will planarize the returned mesh (planar regions will be smoothed out). 

```csharp

public bool planarize { get; set; }

```






-----------

### pollingRate {#float-pollingrate}

How often to check for updates, in seconds. More frequent updates will increase CPU usage. 

```csharp

public float pollingRate { get; set; }

```






-----------

### removeMeshSkirt {#bool-removemeshskirt}

When enabled, the mesh skirt (overlapping area between two mesh blocks) will be removed. This field is only valid when the Mesh Type is Blocks. 

```csharp

public bool removeMeshSkirt { get; set; }

```






-----------

### requestVertexConfidence {#bool-requestvertexconfidence}

When enabled, the system will generate confidence values for each vertex, ranging from 0-1. 

```csharp

public bool requestVertexConfidence { get; set; }

```




**See**: [TryGetConfidence(MeshId, List&lt;float&gt;)](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemComponent.md#bool-trygetconfidence)



-----------

### requestedMeshType {#meshtype-requestedmeshtype}

Request Magic Leap to generate a triangle mesh or point cloud points. 

```csharp

public MeshType requestedMeshType { get; set; }

```

| Type | Description  | 
|--|--|
| [MeshType](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemComponent.md#enums-meshtype) | What type of mesh to generate: a triangle mesh or a point cloud  |





-----------

## Public Methods

### void DestroyAllMeshes {#void-destroyallmeshes}

Destroy all mesh  GameObject s created by this [MeshingSubsystemComponent](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemComponent.md). The [meshIdToGameObjectMap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemComponent.md#dictionary-meshid,-gameobject-meshidtogameobjectmap) will also be cleared. 

```csharp
public void DestroyAllMeshes()
```






-----------

### [MeshingSubsystem.Extensions.MLMeshing.LevelOfDetail](/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/Extensions/MLMeshing/UnityEngine.XR.MagicLeap.MeshingSubsystem.Extensions.MLMeshing.md#enums-levelofdetail) FromDensityToLevelOfDetail {#meshingsubsystemextensionsmlmeshinglevelofdetail-fromdensitytolevelofdetail}

```csharp
public static MeshingSubsystem.Extensions.MLMeshing.LevelOfDetail FromDensityToLevelOfDetail(
    float density
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |density||






-----------

### float FromLevelOfDetailToDensity {#float-fromlevelofdetailtodensity}

```csharp
public static float FromLevelOfDetailToDensity(
    MeshingSubsystem.Extensions.MLMeshing.LevelOfDetail lod
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MeshingSubsystem.Extensions.MLMeshing.LevelOfDetail](/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/Extensions/MLMeshing/UnityEngine.XR.MagicLeap.MeshingSubsystem.Extensions.MLMeshing.md#enums-levelofdetail) |lod|Level of detail of the block mesh. |






-----------

### void OnMeshingPropertyChanged {#void-onmeshingpropertychanged}

```csharp
public void OnMeshingPropertyChanged()
```






-----------

### void RefreshAllMeshes {#void-refreshallmeshes}

'Refresh' all known meshes (meshes that are in [meshIdToGameObjectMap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemComponent.md#dictionary-meshid,-gameobject-meshidtogameobjectmap)). This will force all meshes to be regenerated with the current settings. 

```csharp
public void RefreshAllMeshes()
```






-----------

### void RefreshMesh {#void-refreshmesh}

'Refresh' a single mesh. This forces the mesh to be regenerated with the current settings. 

```csharp
public void RefreshMesh(
    MeshId meshId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| MeshId |meshId|The  MeshId  of the mesh to regenerate.|






-----------

### void SetCustomMeshBlockRequests {#void-setcustommeshblockrequests}

```csharp
public static void SetCustomMeshBlockRequests(
    MeshingSubsystem.Extensions.MLMeshing.OnMeshBlockRequests onBlockRequests
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| MeshingSubsystem.Extensions.MLMeshing.OnMeshBlockRequests |onBlockRequests||






-----------

### bool TryGetConfidence {#bool-trygetconfidence}

Retrieve the confidence values associated with a mesh. Confidence values range from 0..1. [requestVertexConfidence](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemComponent.md#bool-requestvertexconfidence) must be enabled. 

```csharp
public bool TryGetConfidence(
    MeshId meshId,
    List< float > confidenceOut
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| MeshId |meshId|The unique  MeshId  of the mesh.|
| List&lt; float &gt; |confidenceOut|A  List  of floats, one for each vertex in the mesh.|




**See**: [requestVertexConfidence](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemComponent.md#bool-requestvertexconfidence)



**Returns**: True if confidence values were successfully retrieved for the mesh with id _meshId_ .



-----------

## Public Attributes

### currentMeshType {#meshtype-currentmeshtype}

The current mesh type being surfaced by the subsystem provider. 

```csharp

public MeshType currentMeshType => SubsystemFeatures.currentFeatures.HasFlag(Feature.Meshing) ? MeshType.Triangles : MeshType.PointCloud;

```

| Type | Description  | 
|--|--|
| [MeshType](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemComponent.md#enums-meshtype) | What type of mesh to generate: a triangle mesh or a point cloud  |





-----------

## Public Events

### meshAdded {#action-meshid-meshadded}

An event which is invoked whenever a new mesh is added 

```csharp
public Action< MeshId > meshAdded()
```






-----------

### meshRemoved {#action-meshid-meshremoved}

An event which is invoked whenever an existing mesh is removed. 

```csharp
public Action< MeshId > meshRemoved()
```






-----------

### meshUpdated {#action-meshid-meshupdated}

An event which is invoked whenever an existing mesh is updated (regenerated). 

```csharp
public Action< MeshId > meshUpdated()
```






-----------

## Public Enums

### MeshType {#enums-meshtype}

What type of mesh to generate: a triangle mesh or a point cloud 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Triangles | | Generate triangle meshes   |
| PointCloud | | Generate a point cloud (a mesh with  MeshTopology.Points )   |








-----------

