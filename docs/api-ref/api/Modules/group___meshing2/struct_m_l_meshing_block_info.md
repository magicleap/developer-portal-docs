---
title: MLMeshingBlockInfo

---

# MLMeshingBlockInfo

**Module:** **[Meshing2](/api-ref/api/Modules/group___meshing2/group___meshing2.md)**



 [More...](#detailed-description)


`#include <ml_meshing2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[id](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_info.md#mlcoordinateframeuid-id)**  |
| [MLMeshingExtents](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_extents.md) | **[extents](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_info.md#mlmeshingextents-extents)**  |
| [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[timestamp](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_info.md#mltime-timestamp)**  |
| [MLMeshingMeshState](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingmeshstate) | **[state](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_info.md#mlmeshingmeshstate-state)**  |

## Detailed Description

```cpp
struct MLMeshingBlockInfo;
```


Representation of a mesh block. 





-----------
## Public Attributes Documentation

### id {#mlcoordinateframeuid-id}

```cpp
MLCoordinateFrameUID id;
```


The coordinate frame UID to represent the block. Note: Not for use with perception snapshot system, purely a unique identifier. 





-----------

### extents {#mlmeshingextents-extents}

```cpp
MLMeshingExtents extents;
```


The extents of the bounding box. 





-----------

### timestamp {#mltime-timestamp}

```cpp
MLTime timestamp;
```


The timestamp when block was updated. 





-----------

### state {#mlmeshingmeshstate-state}

```cpp
MLMeshingMeshState state;
```


The state of the Mesh Block. 





-----------

