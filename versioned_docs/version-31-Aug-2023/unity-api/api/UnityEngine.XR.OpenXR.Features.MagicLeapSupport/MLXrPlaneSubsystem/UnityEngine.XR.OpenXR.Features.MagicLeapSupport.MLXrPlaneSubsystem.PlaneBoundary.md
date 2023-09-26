---
title: PlaneBoundary
summary: container for the boundary of a detected planar surface. this is specific to magic leap because the polygon describing the boundary may be concave, and may contain holes. 

---

# PlaneBoundary




Container for the boundary of a detected planar surface. This is specific to Magic Leap because the polygon describing the boundary may be concave, and may contain holes.   





## Public Attributes

### PolygonVertexCount {#int-polygonvertexcount}

The number of vertices in this boundary's polygon. 

```csharp

public int PolygonVertexCount => (int)Polygon.vertexCountOutput;

```






-----------


