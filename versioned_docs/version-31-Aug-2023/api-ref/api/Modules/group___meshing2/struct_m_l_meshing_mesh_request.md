---
title: MLMeshingMeshRequest

---

# MLMeshingMeshRequest

**Module:** **[Meshing2](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md)**



 [More...](#detailed-description)


`#include <ml_meshing2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int | **[request_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_request.md#int-request-count)**  |
| [MLMeshingBlockRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_request.md) * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_request.md#mlmeshingblockrequest-data)**  |

## Detailed Description

```cpp
struct MLMeshingMeshRequest;
```


Request structure to get the actual mesh for a set of blocks. 





-----------
## Public Attributes Documentation

### request_count {#int-request-count}

```cpp
int request_count;
```


The number of blocks requested. 





-----------

### data {#mlmeshingblockrequest-data}

```cpp
MLMeshingBlockRequest * data;
```


Per block request. 





-----------


