---
title: MLMeshingBlockMesh

---

# MLMeshingBlockMesh

**Module:** **[Meshing2](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md)**



 [More...](#detailed-description)


`#include <ml_meshing2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMeshingResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingresult) | **[result](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md#mlmeshingresult-result)**  |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md#mlcoordinateframeuid-id)**  |
| [MLMeshingLOD](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshinglod) | **[level](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md#mlmeshinglod-level)**  |
| uint32_t | **[flags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md#uint32-t-flags)**  |
| uint16_t | **[index_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md#uint16-t-index-count)**  |
| uint32_t | **[vertex_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md#uint32-t-vertex-count)**  |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) * | **[vertex](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md#mlvec3f-vertex)**  |
| uint16_t * | **[index](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md#uint16-t-index)** <br></br>Pointer to index buffer. In the index buffer each value is the index of a vertex in the vertex buffer. Three indices define one triangle. For example, the first triangle will have the vertices: vertex[index[0]], vertex[index[1]], vertex[index[2]]. Index order is defined by the MLMeshingFlags_IndexOrderCW flag.  |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) * | **[normal](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md#mlvec3f-normal)**  |
| float * | **[confidence](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md#float-confidence)**  |

## Detailed Description

```cpp
struct MLMeshingBlockMesh;
```


Final structure for a block mesh. 





-----------
## Public Attributes Documentation

### result {#mlmeshingresult-result}

```cpp
MLMeshingResult result;
```


The result of the meshing. 





-----------

### id {#mlcoordinateframeuid-id}

```cpp
MLCoordinateFrameUID id;
```


The coordinate FrameID of the block. Note: Not for use with perception snapshot system, purely a unique identifier. 





-----------

### level {#mlmeshinglod-level}

```cpp
MLMeshingLOD level;
```


The LOD level of the meshing request. 





-----------

### flags {#uint32-t-flags}

```cpp
uint32_t flags;
```


The settings with which meshing took place. 





-----------

### index_count {#uint16-t-index-count}

```cpp
uint16_t index_count;
```


The number of indices in index buffer. 





-----------

### vertex_count {#uint32-t-vertex-count}

```cpp
uint32_t vertex_count;
```


The number of vertices in vertex/normal/confidence buffer. 





-----------

### vertex {#mlvec3f-vertex}

```cpp
MLVec3f * vertex;
```


Pointer to the vertex buffer. 





-----------

### index {#uint16-t-index}

```cpp
uint16_t * index;
```

Pointer to index buffer. In the index buffer each value is the index of a vertex in the vertex buffer. Three indices define one triangle. For example, the first triangle will have the vertices: vertex[index[0]], vertex[index[1]], vertex[index[2]]. Index order is defined by the MLMeshingFlags_IndexOrderCW flag. 





-----------

### normal {#mlvec3f-normal}

```cpp
MLVec3f * normal;
```


Pointer to normals buffer. 





-----------

### confidence {#float-confidence}

```cpp
float * confidence;
```


Pointer to confidence buffer. 





-----------


