---
title: MLMeshingBlockRequest

---

# MLMeshingBlockRequest

**Module:** **[Meshing2](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md)**



 [More...](#detailed-description)


`#include <ml_meshing2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_request.md#mlcoordinateframeuid-id)**  |
| [MLMeshingLOD](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshinglod) | **[level](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_request.md#mlmeshinglod-level)**  |

## Detailed Description

```cpp
struct MLMeshingBlockRequest;
```


Request structure to get the actual mesh for a block. 





-----------
## Public Attributes Documentation

### id {#mlcoordinateframeuid-id}

```cpp
MLCoordinateFrameUID id;
```


The UID to represent the block. Note: Not for use with perception snapshot system, purely a unique identifier. 





-----------

### level {#mlmeshinglod-level}

```cpp
MLMeshingLOD level;
```


The LOD level to request. 





-----------


