---
title: MLMeshingExtents

---

# MLMeshingExtents

**Module:** **[Meshing2](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md)**



 [More...](#detailed-description)


`#include <ml_meshing2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[center](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_extents.md#mlvec3f-center)**  |
| [MLQuaternionf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) | **[rotation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_extents.md#mlquaternionf-rotation)**  |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[extents](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_extents.md#mlvec3f-extents)** <br></br>The size of the bounding box. When a mesh request is complete all mesh blocks within 10 meters of the device that intersect with the extents provided here will be returned in [MLMeshingMeshInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_info.md).  |

## Detailed Description

```cpp
struct MLMeshingExtents;
```


Axis aligned bounding box for querying updated mesh info. 





-----------
## Public Attributes Documentation

### center {#mlvec3f-center}

```cpp
MLVec3f center;
```


The center of the bounding box. 





-----------

### rotation {#mlquaternionf-rotation}

```cpp
MLQuaternionf rotation;
```


The rotation of the bounding box. 





-----------

### extents {#mlvec3f-extents}

```cpp
MLVec3f extents;
```

The size of the bounding box. When a mesh request is complete all mesh blocks within 10 meters of the device that intersect with the extents provided here will be returned in [MLMeshingMeshInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_info.md). 





-----------


