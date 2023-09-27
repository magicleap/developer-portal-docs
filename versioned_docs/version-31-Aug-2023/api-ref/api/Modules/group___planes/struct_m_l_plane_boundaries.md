---
title: MLPlaneBoundaries
summary: type to represent multiple regions on a 2d plane. 

---

# MLPlaneBoundaries

**Module:** **[Planes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/group___planes.md)**



Type to represent multiple regions on a 2D plane.  [More...](#detailed-description)


`#include <ml_planes.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries.md#mlhandle-id)**  |
| [MLPlaneBoundary](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundary.md) * | **[boundaries](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries.md#mlplaneboundary-boundaries)**  |
| uint32_t | **[boundaries_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries.md#uint32-t-boundaries-count)**  |

## Detailed Description

```cpp
struct MLPlaneBoundaries;
```

Type to represent multiple regions on a 2D plane. 




**API Level:**
  * 2




-----------
## Public Attributes Documentation

### id {#mlhandle-id}

```cpp
MLHandle id;
```



| Type | Description |
|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |


Plane ID, the same value associating to the ID in [MLPlane](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md) if they belong to the same plane. 





-----------

### boundaries {#mlplaneboundary-boundaries}

```cpp
MLPlaneBoundary * boundaries;
```



| Type | Description |
|--|--|
| [MLPlaneBoundary](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundary.md) * | Type used to represent a region boundary on a 2D plane.  |


The boundaries in a plane. 





-----------

### boundaries_count {#uint32-t-boundaries-count}

```cpp
uint32_t boundaries_count;
```


Count of boundaries. A plane may contain multiple boundaries each of which defines a region. 





-----------


