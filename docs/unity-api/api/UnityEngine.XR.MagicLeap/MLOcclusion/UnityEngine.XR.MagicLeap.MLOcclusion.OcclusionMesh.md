---
title: OcclusionMesh

---

# OcclusionMesh










## Public Attributes

### Index {#int-index}

```csharp

public int [] Index;

```






-----------

### IndexCount {#uint-indexcount}

The number of indices in index buffer. 

```csharp

public uint IndexCount;

```






-----------

### Timestamp {#mltime-timestamp}

The timestamp when data was generated. 

```csharp

public MLTime Timestamp;

```

| Type | Description  | 
|--|--|
| [MLTime](/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) | Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. If [OpenXR](/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) is used, [MLTime](/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) is synonymous with the XrTime type.  |





-----------

### Vertex {#vector3-vertex}

// Pointer to the vertex buffer. // All vertices are placed w.r.t.world origin. // 

```csharp

public Vector3 [] Vertex;

```






-----------

### VertexCount {#uint-vertexcount}

The number of vertices in vertex buffer. 

```csharp

public uint VertexCount;

```






-----------

