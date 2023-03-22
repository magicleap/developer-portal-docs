---
title: Extensions

---

# Extensions










## Public Fields

### Query {#extensionsplanesquery-query}

```csharp

public static Extensions.PlanesQuery Query { get; set; }

```






-----------

## Public Enums

### MLPlanesQueryFlags {#enums-mlplanesqueryflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0| Include no planes.   |
| Vertical | 1 << 0| Include planes whose normal is perpendicular to gravity.   |
| Horizontal | 1 << 1| Include planes whose normal is parallel to gravity.   |
| Arbitrary | 1 << 2| Include planes with arbitrary normals.   |
| AllOrientations | Vertical |
                                   Horizontal |
                                   Arbitrary| Include all plane orientations.   |
| OrientToGravity | 1 << 3| For non-horizontal planes, setting this flag will result in the top of the plane rectangle being perpendicular to gravity.   |
| Inner | 1 << 4| If this flag is set, inner planes will be returned; if it is not set, outer planes will be returned.   |
| Semantic_Ceiling | 1 << 6| Include planes semantically tagged as ceiling.   |
| Semantic_Floor | 1 << 7| Include planes semantically tagged as floor.   |
| Semantic_Wall | 1 << 8| Include planes semantically tagged as wall.   |
| Semantic_All | Semantic_Ceiling |
                                   Semantic_Floor |
                                   Semantic_Wall| Include all planes that are semantically tagged.   |
| Polygons | 1 << 9| Include polygonal planes. (Planes that have more than 4 edges.  &lt;note&gt; The **MLPlanesReleaseBoundariesList**, **MLPlanesQueryGetResultsWithBoundaries**, **MLPlanesQueryGetResults** calls are handled automatically when using the Magic Leap Plane subsystem &lt;/note&gt; When this flag is set: 

* MLPlanesQueryGetResultsWithBoundaries  returns polygons along with other applicable rectangular planes. MLPlanesReleaseBoundariesList MUST be called before the next call to MLPlanesQueryGetResultsWithBoundaries or MLPlanesQueryGetResults, otherwise UnspecifiedFailure will be returned.   
* MLPlanesQueryGetResults  returns just the rectangular planes. polygons (if any) extracted during the query will be discarded. No need to call MLPlanesReleaseBoundariesList before the next MLPlanesQueryGetResultsWithBoundaries or MLPlanesQueryGetResults.   

When this flag is not set: 

* both the APIs  MLPlanesQueryGetResultsWithBoundaries and MLPlanesQueryGetResults returns just rectangular planes. No need to call MLPlanesReleaseBoundariesList.   

/remarks&gt;  |








-----------


