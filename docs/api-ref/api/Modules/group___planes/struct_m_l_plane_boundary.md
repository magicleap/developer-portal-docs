---
title: MLPlaneBoundary
summary: type used to represent a region boundary on a 2d plane. 

---

# MLPlaneBoundary

**Module:** **[Planes](/api-ref/api/Modules/group___planes/group___planes.md)**



Type used to represent a region boundary on a 2D plane.  [More...](#detailed-description)


`#include <ml_planes.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLPolygon](/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) * | **[polygon](/api-ref/api/Modules/group___planes/struct_m_l_plane_boundary.md#mlpolygon-polygon)**  |
| [MLPolygon](/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) * | **[holes](/api-ref/api/Modules/group___planes/struct_m_l_plane_boundary.md#mlpolygon-holes)**  |
| uint32_t | **[holes_count](/api-ref/api/Modules/group___planes/struct_m_l_plane_boundary.md#uint32-t-holes-count)**  |

## Detailed Description

```cpp
struct MLPlaneBoundary;
```

Type used to represent a region boundary on a 2D plane. 




**API Level:\n 2**
  * 




-----------
## Public Attributes Documentation

### polygon {#mlpolygon-polygon}

```cpp
MLPolygon * polygon;
```



| Type | Description |
|--|--|
| [MLPolygon](/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) * | Coplanar connected line segments representing the outer boundary of a polygon, an _n_-sided polygon where _n_ is the number of vertices.  |


The polygon that defines the region, the boundary vertices in [MLPolygon](/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) will be in CCW order. 





-----------

### holes {#mlpolygon-holes}

```cpp
MLPolygon * holes;
```



| Type | Description |
|--|--|
| [MLPolygon](/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) * | Coplanar connected line segments representing the outer boundary of a polygon, an _n_-sided polygon where _n_ is the number of vertices.  |


A polygon may contains multiple holes, the boundary vertices in [MLPolygon](/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) will be in CW order. 





-----------

### holes_count {#uint32-t-holes-count}

```cpp
uint32_t holes_count;
```


Count of the holes. 





-----------

