---
title: MLOcclusionMesh

---

# MLOcclusionMesh










## Public Methods

### [MLOcclusionMesh](/unity-api/api/UnityEngine.XR.MagicLeap/MLOcclusion/NativeBindings/UnityEngine.XR.MagicLeap.MLOcclusion.NativeBindings.MLOcclusionMesh.md) Init {#mlocclusionmesh-init}

```csharp
public static MLOcclusionMesh Init(
    uint version =1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |version||






-----------

## Public Attributes

### Index {#intptr-index}

Pointer to index buffer. In the index buffer each value is the index of a vertex in the vertex buffer. Three indices define one triangle.For example, the first triangle will have the vertices: vertex[index[0]], vertex[index[1]], vertex[index[2]]. Index order is CW. 

```csharp

public IntPtr Index;

```






-----------

### IndexCount {#uint-indexcount}

The number of indices in index buffer. 

```csharp

public uint IndexCount;

```






-----------

### Timestamp {#ulong-timestamp}

The timestamp when data was generated. 

```csharp

public ulong Timestamp;

```






-----------

### Version {#uint-version}

Struct version. 

```csharp

public uint Version;

```






-----------

### Vertex {#intptr-vertex}

Pointer to the vertex buffer. All vertices are placed w.r.t.world origin. 

```csharp

public IntPtr Vertex;

```






-----------

### VertexCount {#uint-vertexcount}

The number of vertices in vertex buffer. 

```csharp

public uint VertexCount;

```






-----------

