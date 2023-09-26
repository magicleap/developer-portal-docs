---
title: MLPlaneBoundary
summary: type used to represent a region boundary on a 2d plane. 

---

# MLPlaneBoundary

**Module:** **[Planes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/group___planes.md)**



Type used to represent a region boundary on a 2D plane.  [More...](#detailed-description)


`#include <ml_planes.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLPolygon](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) * | **[polygon](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundary.md#mlpolygon-polygon)**  |
| [MLPolygon](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) * | **[holes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundary.md#mlpolygon-holes)**  |
| uint32_t | **[holes_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundary.md#uint32-t-holes-count)**  |

## Detailed Description

```cpp
struct MLPlaneBoundary;
```

Type used to represent a region boundary on a 2D plane. 




**API Level:**
  * 2




-----------
## Public Attributes Documentation

### polygon {#mlpolygon-polygon}

```cpp
MLPolygon * polygon;
```



| Type | Description |
|--|--|
| [MLPolygon](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) * | Coplanar connected line segments representing the outer boundary of a polygon, an _n_-sided polygon where _n_ is the number of vertices.  |


The polygon that defines the region, the boundary vertices in [MLPolygon](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) will be in CCW order. 





-----------

### holes {#mlpolygon-holes}

```cpp
MLPolygon * holes;
```



| Type | Description |
|--|--|
| [MLPolygon](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) * | Coplanar connected line segments representing the outer boundary of a polygon, an _n_-sided polygon where _n_ is the number of vertices.  |


A polygon may contains multiple holes, the boundary vertices in [MLPolygon](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) will be in CW order. 





-----------

### holes_count {#uint32-t-holes-count}

```cpp
uint32_t holes_count;
```


Count of the holes. 





-----------


