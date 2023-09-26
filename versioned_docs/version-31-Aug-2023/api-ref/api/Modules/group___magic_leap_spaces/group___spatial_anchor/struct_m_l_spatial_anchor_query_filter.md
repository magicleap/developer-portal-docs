---
title: MLSpatialAnchorQueryFilter
summary: a collection of filters for spatial anchor queries. 

---

# MLSpatialAnchorQueryFilter

**Module:** **[Magic Leap Spaces](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Spatial Anchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md)**



A collection of filters for Spatial Anchor queries.  [More...](#detailed-description)


`#include <ml_spatial_anchor.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md#uint32-t-version)** <br></br>Version of the structure.  |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[center](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md#mlvec3f-center)** <br></br>The center point of where a spatial query will originate.  |
| float | **[radius_m](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md#float-radius-m)** <br></br>The radius in meters used for a spatial query, relative to the specified center.  |
| const [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) * | **[ids](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md#const-ids)** <br></br>A list of Spatial Anchor IDs to query for.  |
| uint32_t | **[ids_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md#uint32-t-ids-count)** <br></br>The number of IDs provided.  |
| uint32_t | **[max_results](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md#uint32-t-max-results)** <br></br>The upper bound of expected results.  |
| bool | **[sorted](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md#bool-sorted)** <br></br>Indicate whether the results will be returned sorted by distance from center.  |

## Detailed Description

```cpp
struct MLSpatialAnchorQueryFilter;
```

A collection of filters for Spatial Anchor queries. 

Filters that have been set will be combined via logical conjunction. E.g. results must match the ids filter AND fall within the radius constraint when both have been set.

This struct must be initialized by calling [MLSpatialAnchorQueryFilterInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorqueryfilterinit) before use.




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```

Version of the structure. 





-----------

### center {#mlvec3f-center}

```cpp
MLVec3f center;
```

The center point of where a spatial query will originate. 





-----------

### radius_m {#float-radius-m}

```cpp
float radius_m;
```

The radius in meters used for a spatial query, relative to the specified center. 

Only anchors inside this radius will be returned. Set to 0 for unbounded results. 





-----------

### ids {#const-ids}

```cpp
const MLUUID * ids;
```

A list of Spatial Anchor IDs to query for. 





-----------

### ids_count {#uint32-t-ids-count}

```cpp
uint32_t ids_count;
```

The number of IDs provided. 





-----------

### max_results {#uint32-t-max-results}

```cpp
uint32_t max_results;
```

The upper bound of expected results. 

Set to 0 for unbounded results. 





-----------

### sorted {#bool-sorted}

```cpp
bool sorted;
```

Indicate whether the results will be returned sorted by distance from center. 

Sorting results by distance will incur a performance penalty. 





-----------


