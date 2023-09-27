---
title: MLMeshingMeshInfo

---

# MLMeshingMeshInfo

**Module:** **[Meshing2](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md)**



 [More...](#detailed-description)


`#include <ml_meshing2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[timestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_info.md#mltime-timestamp)**  |
| uint32_t | **[data_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_info.md#uint32-t-data-count)**  |
| [MLMeshingBlockInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_info.md) * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_info.md#mlmeshingblockinfo-data)**  |

## Detailed Description

```cpp
struct MLMeshingMeshInfo;
```


Response structure for the mesh block info. 





-----------
## Public Attributes Documentation

### timestamp {#mltime-timestamp}

```cpp
MLTime timestamp;
```


The response timestamp to a earlier request. 





-----------

### data_count {#uint32-t-data-count}

```cpp
uint32_t data_count;
```


The number of responses in data pointer. 





-----------

### data {#mlmeshingblockinfo-data}

```cpp
MLMeshingBlockInfo * data;
```


The meshinfo returned by the system. 





-----------


