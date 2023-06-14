---
title: MLOcclusionMesh
summary: structure for occlusion mesh data. 

---

# MLOcclusionMesh

**Module:** **[Occlusion](/api-ref/api/Modules/group___occlusion/group___occlusion.md)**



Structure for occlusion mesh data.  [More...](#detailed-description)


`#include <ml_occlusion.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md#uint32-t-version)**  |
| [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[timestamp](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md#mltime-timestamp)**  |
| uint32_t | **[index_count](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md#uint32-t-index-count)**  |
| uint32_t | **[vertex_count](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md#uint32-t-vertex-count)**  |
| [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) * | **[vertex](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md#mlvec3f-vertex)** <br></br>Pointer to the vertex buffer. All vertices are placed w.r.t. world origin.  |
| uint32_t * | **[index](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md#uint32-t-index)** <br></br>Pointer to index buffer. In the index buffer each value is the index of a vertex in the vertex buffer. Three indices define one triangle. For example, the first triangle will have the vertices: vertex[index[0]], vertex[index[1]], vertex[index[2]]. Index order is CW.  |

## Detailed Description

```cpp
struct MLOcclusionMesh;
```

Structure for occlusion mesh data. 




**API Level:**
  * 28




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Struct version. 





-----------

### timestamp {#mltime-timestamp}

```cpp
MLTime timestamp;
```


The timestamp when data was generated. 





-----------

### index_count {#uint32-t-index-count}

```cpp
uint32_t index_count;
```


The number of indices in index buffer. 





-----------

### vertex_count {#uint32-t-vertex-count}

```cpp
uint32_t vertex_count;
```


The number of vertices in vertex buffer. 





-----------

### vertex {#mlvec3f-vertex}

```cpp
MLVec3f * vertex;
```

Pointer to the vertex buffer. All vertices are placed w.r.t. world origin. 





-----------

### index {#uint32-t-index}

```cpp
uint32_t * index;
```

Pointer to index buffer. In the index buffer each value is the index of a vertex in the vertex buffer. Three indices define one triangle. For example, the first triangle will have the vertices: vertex[index[0]], vertex[index[1]], vertex[index[2]]. Index order is CW. 





-----------

