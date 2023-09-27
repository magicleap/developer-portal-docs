---
title: MLPolygon
summary: coplanar connected line segments representing the outer boundary of a polygon, an n-sided polygon where n is the number of vertices. 

---

# MLPolygon

**Module:** **[Planes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/group___planes.md)**



Coplanar connected line segments representing the outer boundary of a polygon, an _n_-sided polygon where _n_ is the number of vertices.  [More...](#detailed-description)


`#include <ml_planes.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) * | **[vertices](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_polygon.md#mlvec3f-vertices)**  |
| uint32_t | **[vertices_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_polygon.md#uint32-t-vertices-count)**  |

## Detailed Description

```cpp
struct MLPolygon;
```

Coplanar connected line segments representing the outer boundary of a polygon, an _n_-sided polygon where _n_ is the number of vertices. 




**API Level:**
  * 2




-----------
## Public Attributes Documentation

### vertices {#mlvec3f-vertices}

```cpp
MLVec3f * vertices;
```


Vertices of all line segments. 





-----------

### vertices_count {#uint32-t-vertices-count}

```cpp
uint32_t vertices_count;
```


Number of vertices. 





-----------


