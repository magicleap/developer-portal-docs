---
title: MLSpatialAnchorCreateInfo
summary: a structure used to populate anchor creation info when creating a new spatial anchor. 

---

# MLSpatialAnchorCreateInfo

**Module:** **[Magic Leap Spaces](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Spatial Anchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md)**



A structure used to populate anchor creation info when creating a new Spatial Anchor.  [More...](#detailed-description)


`#include <ml_spatial_anchor.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md#uint32-t-version)** <br></br>Version of the structure.  |
| [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) | **[transform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md#mltransform-transform)** <br></br>The desired transform of the new Spatial Anchor.  |
| uint64_t | **[expiration_timestamp_s](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md#uint64-t-expiration-timestamp-s)** <br></br>The suggested expiration timestamp for this anchor represented in seconds since the Unix epoch.  |

## Detailed Description

```cpp
struct MLSpatialAnchorCreateInfo;
```

A structure used to populate anchor creation info when creating a new Spatial Anchor. 




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

### transform {#mltransform-transform}

```cpp
MLTransform transform;
```

The desired transform of the new Spatial Anchor. 

The anchor's transform is set when the anchor is created but may be updated later by the Spatial Anchor system based on factors such as quality of the mapped space and subsequent localizations. 





-----------

### expiration_timestamp_s {#uint64-t-expiration-timestamp-s}

```cpp
uint64_t expiration_timestamp_s;
```

The suggested expiration timestamp for this anchor represented in seconds since the Unix epoch. 

This is implemented as an expiration timestamp in the future after which the associated anchor should be considered no longer valid and may be removed by the Spatial Anchor system. If the timestamp is set to zero in this struct, the anchor will never expire. 





-----------


