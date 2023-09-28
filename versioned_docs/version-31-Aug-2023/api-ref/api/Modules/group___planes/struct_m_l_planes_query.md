---
title: MLPlanesQuery
summary: type used to represent a plane query. 

---

# MLPlanesQuery

**Module:** **[Planes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/group___planes.md)**



Type used to represent a plane query.  [More...](#detailed-description)


`#include <ml_planes.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[flags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md#uint32-t-flags)**  |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[bounds_center](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md#mlvec3f-bounds-center)**  |
| [MLQuaternionf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) | **[bounds_rotation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md#mlquaternionf-bounds-rotation)**  |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[bounds_extents](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md#mlvec3f-bounds-extents)** <br></br>The size of the bounding box where planes extraction will occur. Only planes within 10 meters of the device will be extracted. The maximum value is 20 meters in each direction. A value of (0, 0, 0) will be treated as (20, 20, 20).  |
| uint32_t | **[max_results](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md#uint32-t-max-results)** <br></br>The maximum number of results that should be returned. This is also the minimum expected size of the array of results passed to the MLPlanesGetResult function. In the case where the number of rectangular planes exceed this value, only the largest max_results planes will be returned. This can cause the number of polygons returned to be smaller than max_results, as there can be multiple inner planes per planar surface but only one polygon, and if the rectangular plane of a planar surface is not being returned because max_results have been reached, the corresponding polygon won't be returned.  |
| float | **[min_plane_area](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md#float-min-plane-area)** <br></br>The minimum area (in squared meters) of planes to be returned. This value cannot be lower than 0.04 (lower values will be capped to this minimum). A good default value is 0.25.  |

## Detailed Description

```cpp
struct MLPlanesQuery;
```

Type used to represent a plane query. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### flags {#uint32-t-flags}

```cpp
uint32_t flags;
```


The flags to apply to this query. 





-----------

### bounds_center {#mlvec3f-bounds-center}

```cpp
MLVec3f bounds_center;
```


The center of the bounding box which defines where planes extraction should occur. 





-----------

### bounds_rotation {#mlquaternionf-bounds-rotation}

```cpp
MLQuaternionf bounds_rotation;
```


The rotation of the bounding box where planes extraction will occur. 





-----------

### bounds_extents {#mlvec3f-bounds-extents}

```cpp
MLVec3f bounds_extents;
```

The size of the bounding box where planes extraction will occur. Only planes within 10 meters of the device will be extracted. The maximum value is 20 meters in each direction. A value of (0, 0, 0) will be treated as (20, 20, 20). 





-----------

### max_results {#uint32-t-max-results}

```cpp
uint32_t max_results;
```

The maximum number of results that should be returned. This is also the minimum expected size of the array of results passed to the MLPlanesGetResult function. In the case where the number of rectangular planes exceed this value, only the largest max_results planes will be returned. This can cause the number of polygons returned to be smaller than max_results, as there can be multiple inner planes per planar surface but only one polygon, and if the rectangular plane of a planar surface is not being returned because max_results have been reached, the corresponding polygon won't be returned. 





-----------

### min_plane_area {#float-min-plane-area}

```cpp
float min_plane_area;
```

The minimum area (in squared meters) of planes to be returned. This value cannot be lower than 0.04 (lower values will be capped to this minimum). A good default value is 0.25. 





-----------


