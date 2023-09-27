---
title: MLPlaneBoundariesList
summary: type to represent polygons of all returned planes. 

---

# MLPlaneBoundariesList

**Module:** **[Planes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/group___planes.md)**



Type to represent polygons of all returned planes.  [More...](#detailed-description)


`#include <ml_planes.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md#uint32-t-version)**  |
| [MLPlaneBoundaries](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries.md) * | **[plane_boundaries](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md#mlplaneboundaries-plane-boundaries)** <br></br>List of [MLPlaneBoundaries](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries.md).  |
| uint32_t | **[plane_boundaries_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md#uint32-t-plane-boundaries-count)** <br></br>Count of [MLPlaneBoundaries](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries.md) in the array.  |

## Detailed Description

```cpp
struct MLPlaneBoundariesList;
```

Type to represent polygons of all returned planes. 




**API Level:**
  * 2




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```






-----------

### plane_boundaries {#mlplaneboundaries-plane-boundaries}

```cpp
MLPlaneBoundaries * plane_boundaries;
```

List of [MLPlaneBoundaries](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries.md). 


| Type | Description |
|--|--|
| [MLPlaneBoundaries](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries.md) * | Type to represent multiple regions on a 2D plane.  |





**API Level:**
  * 2




-----------

### plane_boundaries_count {#uint32-t-plane-boundaries-count}

```cpp
uint32_t plane_boundaries_count;
```

Count of [MLPlaneBoundaries](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries.md) in the array. 




**API Level:**
  * 2




-----------


