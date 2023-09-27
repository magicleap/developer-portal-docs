---
title: MLSpatialAnchor
summary: a structure representing a user-defined spatial anchor. 

---

# MLSpatialAnchor

**Module:** **[Magic Leap Spaces](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Spatial Anchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md)**



A structure representing a user-defined Spatial Anchor.  [More...](#detailed-description)


`#include <ml_spatial_anchor.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md#uint32-t-version)** <br></br>Version of the structure.  |
| [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) | **[id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md#mluuid-id)** <br></br>The anchor's unique ID.  |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[cfuid](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md#mlcoordinateframeuid-cfuid)** <br></br>The coordinate frame identifier of the Spatial Anchor.  |
| uint64_t | **[expiration_timestamp_s](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md#uint64-t-expiration-timestamp-s)** <br></br>The suggested expiration timestamp for this anchor represented in seconds since the Unix epoch.  |
| bool | **[is_persisted](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md#bool-is-persisted)** <br></br>Indicates whether or not the anchor has been persisted via a call to [MLSpatialAnchorPublish](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorpublish).  |
| [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) | **[space_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md#mluuid-space-id)** <br></br>The ID of the space that this anchor belongs to. This is only relevant if is_persisted is true.  |

## Detailed Description

```cpp
struct MLSpatialAnchor;
```

A structure representing a user-defined Spatial Anchor. 




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

### id {#mluuid-id}

```cpp
MLUUID id;
```

The anchor's unique ID. 

This is a unique identifier for a single Spatial Anchor that is generated and managed by the Spatial Anchor system. The ID is created when MLSpatialAnchorCreate is called. 





-----------

### cfuid {#mlcoordinateframeuid-cfuid}

```cpp
MLCoordinateFrameUID cfuid;
```

The coordinate frame identifier of the Spatial Anchor. 

This should be passed to MLSnapshotGetTransform to get the anchor's transform.

The anchor's transform is set when the anchor is created but may be updated later by the Spatial Anchor system based on factors such as quality of the mapped space and subsequent localizations. 





-----------

### expiration_timestamp_s {#uint64-t-expiration-timestamp-s}

```cpp
uint64_t expiration_timestamp_s;
```

The suggested expiration timestamp for this anchor represented in seconds since the Unix epoch. 

This is implemented as an expiration timestamp in the future after which the associated anchor should be considered no longer valid and may be removed by the Spatial Anchor system. 





-----------

### is_persisted {#bool-is-persisted}

```cpp
bool is_persisted;
```

Indicates whether or not the anchor has been persisted via a call to [MLSpatialAnchorPublish](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorpublish). 





-----------

### space_id {#mluuid-space-id}

```cpp
MLUUID space_id;
```

The ID of the space that this anchor belongs to. This is only relevant if is_persisted is true. 





-----------


