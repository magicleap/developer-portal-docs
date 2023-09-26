---
title: MLMeshingMesh

---

# MLMeshingMesh

**Module:** **[Meshing2](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md)**



 [More...](#detailed-description)


`#include <ml_meshing2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMeshingResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingresult) | **[result](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md#mlmeshingresult-result)**  |
| [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[timestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md#mltime-timestamp)**  |
| uint32_t | **[data_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md#uint32-t-data-count)**  |
| [MLMeshingBlockMesh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md) * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md#mlmeshingblockmesh-data)**  |

## Detailed Description

```cpp
struct MLMeshingMesh;
```


Result of a Mesh request. See [MLMeshingGetMeshResult()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshinggetmeshresult) for details. 





-----------
## Public Attributes Documentation

### result {#mlmeshingresult-result}

```cpp
MLMeshingResult result;
```


The result of the meshing. Can have partial updates. 





-----------

### timestamp {#mltime-timestamp}

```cpp
MLTime timestamp;
```


The timestamp when data was generated. 





-----------

### data_count {#uint32-t-data-count}

```cpp
uint32_t data_count;
```


Number of meshes available in data. 





-----------

### data {#mlmeshingblockmesh-data}

```cpp
MLMeshingBlockMesh * data;
```


The mesh data. 





-----------


