---
title: Planes
summary: apis for the planes system. 

---

# Planes

APIs for the Planes system.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLPlane](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md)**  |
| struct | **[MLPolygon](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_polygon.md)** <br></br>Coplanar connected line segments representing the outer boundary of a polygon, an _n_-sided polygon where _n_ is the number of vertices.  |
| struct | **[MLPlaneBoundary](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundary.md)** <br></br>Type used to represent a region boundary on a 2D plane.  |
| struct | **[MLPlaneBoundaries](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries.md)** <br></br>Type to represent multiple regions on a 2D plane.  |
| struct | **[MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md)** <br></br>Type to represent polygons of all returned planes.  |
| struct | **[MLPlanesQuery](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md)** <br></br>Type used to represent a plane query.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLPlane](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md) | **[MLPlane](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#struct-mlplane)**  |
| typedef struct [MLPolygon](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_polygon.md) | **[MLPolygon](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#struct-mlpolygon)** <br></br>Coplanar connected line segments representing the outer boundary of a polygon, an _n_-sided polygon where _n_ is the number of vertices.  |
| typedef struct [MLPlaneBoundary](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundary.md) | **[MLPlaneBoundary](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#struct-mlplaneboundary)** <br></br>Type used to represent a region boundary on a 2D plane.  |
| typedef struct [MLPlaneBoundaries](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries.md) | **[MLPlaneBoundaries](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#struct-mlplaneboundaries)** <br></br>Type to represent multiple regions on a 2D plane.  |
| typedef struct [MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) | **[MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#struct-mlplaneboundarieslist)** <br></br>Type to represent polygons of all returned planes.  |
| typedef struct [MLPlanesQuery](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md) | **[MLPlanesQuery](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#struct-mlplanesquery)** <br></br>Type used to represent a plane query.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLPlanesQueryFlags](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflags)** <br></br> { <br></br>[MLPlanesQueryFlag_Vertical](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflag-vertical) = 1 << 0,<br></br> [MLPlanesQueryFlag_Horizontal](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflag-horizontal) = 1 << 1,<br></br> [MLPlanesQueryFlag_Arbitrary](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflag-arbitrary) = 1 << 2,<br></br> [MLPlanesQueryFlag_AllOrientations](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflag-allorientations) = MLPlanesQueryFlag_Vertical |
                                       MLPlanesQueryFlag_Horizontal |
                                       MLPlanesQueryFlag_Arbitrary,<br></br> [MLPlanesQueryFlag_OrientToGravity](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflag-orienttogravity) = 1 << 3,<br></br> [MLPlanesQueryFlag_Inner](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflag-inner) = 1 << 4,<br></br> [MLPlanesQueryFlag_Semantic_Ceiling](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflag-semantic-ceiling) = 1 << 6,<br></br> [MLPlanesQueryFlag_Semantic_Floor](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflag-semantic-floor) = 1 << 7,<br></br> [MLPlanesQueryFlag_Semantic_Wall](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflag-semantic-wall) = 1 << 8,<br></br> [MLPlanesQueryFlag_Semantic_All](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflag-semantic-all) = MLPlanesQueryFlag_Semantic_Ceiling |
                                       MLPlanesQueryFlag_Semantic_Floor |
                                       MLPlanesQueryFlag_Semantic_Wall,<br></br> [MLPlanesQueryFlag_Polygons](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflag-polygons) = 1 << 9,<br></br> [MLPlanesQueryFlags_Ensure32Bits](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#enums-mlplanesqueryflags-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLPlaneBoundariesListInit](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#void-mlplaneboundarieslistinit)**([MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) * inout_boundaries_list)<br></br>Initializes an [MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) structure.  |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPlanesCreate](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanescreate)**([MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a planes tracker.  |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPlanesDestroy](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesdestroy)**([MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) planes_tracker)<br></br>Destroys a planes tracker.  |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPlanesQueryBegin](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesquerybegin)**([MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) planes_tracker, const [MLPlanesQuery](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md) * query, [MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Initiates a plane query. One of the following flags must be set for the query to be considered valid:  |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPlanesQueryGetResultsWithBoundaries](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesquerygetresultswithboundaries)**([MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) planes_tracker, [MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) planes_query, [MLPlane](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md) * out_results, uint32_t * out_num_results, [MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) * out_boundaries)<br></br>Gets the result of a plane query with boundaries on each plane. After this function has returned successfully, the handle is invalid and should be discarded. Also check MLPlanesQueryFlag_Polygons description for this API's further behavior.  |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPlanesReleaseBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesreleaseboundarieslist)**([MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) planes_tracker, [MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) * plane_boundaries)<br></br>Releases the polygons data owned by the [MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md). Also, check MLPlanesQueryFlag_Polygons description for this API's further behavior.  |

## Detailed Description

APIs for the Planes system. 




**Shared Object:**
  * perception.magicleap 




-----------
## Enums Documentation

### MLPlanesQueryFlags {#enums-mlplanesqueryflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLPlanesQueryFlag_Vertical |  1 << 0| Include planes whose normal is perpendicular to gravity. |
| MLPlanesQueryFlag_Horizontal |  1 << 1| Include planes whose normal is parallel to gravity. |
| MLPlanesQueryFlag_Arbitrary |  1 << 2| Include planes with arbitrary normals. |
| MLPlanesQueryFlag_AllOrientations |  MLPlanesQueryFlag_Vertical |
                                       MLPlanesQueryFlag_Horizontal |
                                       MLPlanesQueryFlag_Arbitrary| Include all plane orientations. |
| MLPlanesQueryFlag_OrientToGravity |  1 << 3| For non-horizontal planes, setting this flag will result in the top of the plane rectangle being perpendicular to gravity. .|
| MLPlanesQueryFlag_Inner |  1 << 4| If this flag is set, inner planes will be returned; if it is not set, outer planes will be returned. .|
| MLPlanesQueryFlag_Semantic_Ceiling |  1 << 6| Include planes semantically tagged as ceiling. |
| MLPlanesQueryFlag_Semantic_Floor |  1 << 7| Include planes semantically tagged as floor. |
| MLPlanesQueryFlag_Semantic_Wall |  1 << 8| Include planes semantically tagged as wall. |
| MLPlanesQueryFlag_Semantic_All |  MLPlanesQueryFlag_Semantic_Ceiling |
                                       MLPlanesQueryFlag_Semantic_Floor |
                                       MLPlanesQueryFlag_Semantic_Wall| Include all planes that are semantically tagged. |
| MLPlanesQueryFlag_Polygons |  1 << 9| Include polygonal planes. .When this flag is set:* MLPlanesQueryGetResultsWithBoundaries returns polygons along with other applicable rectangular planes. MLPlanesReleaseBoundariesList MUST be called before the next call to MLPlanesQueryGetResultsWithBoundaries, otherwise UnspecifiedFailure will be returned.When this flag is not set:* MLPlanesQueryGetResultsWithBoundaries returns just rectangular planes. No need to call MLPlanesReleaseBoundariesList.|
| MLPlanesQueryFlags_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Control flags for plane queries. 





-----------


## Types Documentation

### MLPlane {#struct-mlplane}

```cpp
typedef struct MLPlane  MLPlane;
```


A plane with width and height. 



[More Info](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md)



-----------

### MLPolygon {#struct-mlpolygon}

```cpp
typedef struct MLPolygon  MLPolygon;
```

Coplanar connected line segments representing the outer boundary of a polygon, an _n_-sided polygon where _n_ is the number of vertices. 



[More Info](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_polygon.md)


**API Level:**
  * 2 




-----------

### MLPlaneBoundary {#struct-mlplaneboundary}

```cpp
typedef struct MLPlaneBoundary  MLPlaneBoundary;
```

Type used to represent a region boundary on a 2D plane. 



[More Info](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundary.md)


**API Level:**
  * 2 




-----------

### MLPlaneBoundaries {#struct-mlplaneboundaries}

```cpp
typedef struct MLPlaneBoundaries  MLPlaneBoundaries;
```

Type to represent multiple regions on a 2D plane. 



[More Info](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries.md)


**API Level:**
  * 2 




-----------

### MLPlaneBoundariesList {#struct-mlplaneboundarieslist}

```cpp
typedef struct MLPlaneBoundariesList  MLPlaneBoundariesList;
```

Type to represent polygons of all returned planes. 



[More Info](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md)


**API Level:**
  * 2 




-----------

### MLPlanesQuery {#struct-mlplanesquery}

```cpp
typedef struct MLPlanesQuery  MLPlanesQuery;
```

Type used to represent a plane query. 



[More Info](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md)


**API Level:**
  * 20 




-----------


## Functions Documentation

### MLPlaneBoundariesListInit {#void-mlplaneboundarieslistinit}

```cpp
static inline void MLPlaneBoundariesListInit(
    MLPlaneBoundariesList * inout_boundaries_list
)
```

Initializes an [MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) structure. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) * |inout_boundaries_list|Pointer to a [MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) structure which is initialize with default values.|



**API Level:**
  * 2 




-----------

### MLPlanesCreate {#mlresult-mlplanescreate}

```cpp
MLResult MLPlanesCreate(
    MLHandle * out_handle
)
```

Creates a planes tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain the handle to the planes tracker. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to create planes tracker due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created planes tracker. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|The application lacks permission. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to create planes tracker due to an unknown reason.|
**Required Permissions**:

  * com.magicleap.permission.SPATIAL_MAPPING (protection level: dangerous) 






-----------

### MLPlanesDestroy {#mlresult-mlplanesdestroy}

```cpp
MLResult MLPlanesDestroy(
    MLHandle planes_tracker
)
```

Destroys a planes tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |planes_tracker|[MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to planes tracker to destroy.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed planes tracker. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 






-----------

### MLPlanesQueryBegin {#mlresult-mlplanesquerybegin}

```cpp
MLResult MLPlanesQueryBegin(
    MLHandle planes_tracker,
    const MLPlanesQuery * query,
    MLHandle * out_handle
)
```

Initiates a plane query. One of the following flags must be set for the query to be considered valid: 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |planes_tracker|Handle produced by [MLPlanesCreate()](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanescreate). |
| const [MLPlanesQuery](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md) * |query|Pointer to [MLPlanesQuery](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md) structure containing query parameters. |
| [MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain the handle to the query. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to initiate plane query due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully initiated plane query. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 




* MLPlanesQueryFlag_Vertical flag.
* MLPlanesQueryFlag_Horizontal flag.
* MLPlanesQueryFlag_Arbitrary flag.
* MLPlanesQueryFlag_Semantic_Ceiling flag.
* MLPlanesQueryFlag_Semantic_Floor flag.
* MLPlanesQueryFlag_Semantic_Wall flag.




**API Level:**
  * 20




-----------

### MLPlanesQueryGetResultsWithBoundaries {#mlresult-mlplanesquerygetresultswithboundaries}

```cpp
MLResult MLPlanesQueryGetResultsWithBoundaries(
    MLHandle planes_tracker,
    MLHandle planes_query,
    MLPlane * out_results,
    uint32_t * out_num_results,
    MLPlaneBoundariesList * out_boundaries
)
```

Gets the result of a plane query with boundaries on each plane. After this function has returned successfully, the handle is invalid and should be discarded. Also check MLPlanesQueryFlag_Polygons description for this API's further behavior. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |planes_tracker|Handle produced by [MLPlanesCreate()](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanescreate). |
| [MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |planes_query|Handle produced by [MLPlanesQueryBegin()](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesquerybegin). |
| [MLPlane](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md) * |out_results|An array of [MLPlane](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md) structures. |
| uint32_t * |out_num_results|The count of results pointed to by out_results. |
| [MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) * |out_boundaries|A pointer to [MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) for the returned polygons. If out_boundaries is NULL, the function call will not return any polygons, otherwise *out_boundaries must be zero initialized.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully completed query. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|Query completion is pending. This is not a failure. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|Query timed out due to unknown reason. Make a new query. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to complete query due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 2




-----------

### MLPlanesReleaseBoundariesList {#mlresult-mlplanesreleaseboundarieslist}

```cpp
MLResult MLPlanesReleaseBoundariesList(
    MLHandle planes_tracker,
    MLPlaneBoundariesList * plane_boundaries
)
```

Releases the polygons data owned by the [MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md). Also, check MLPlanesQueryFlag_Polygons description for this API's further behavior. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |planes_tracker|Handle produced by [MLPlanesCreate()](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanescreate). |
| [MLPlaneBoundariesList](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) * |plane_boundaries|Polygons pointer to the #MLPlaneBoundariessList.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to release memory due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released memory. |
| [MLResult](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 





**API Level:**
  * 2




-----------






