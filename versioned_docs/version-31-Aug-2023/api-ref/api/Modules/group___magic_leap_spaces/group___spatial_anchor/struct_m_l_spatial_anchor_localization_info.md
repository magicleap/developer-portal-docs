---
title: MLSpatialAnchorLocalizationInfo
summary: a structure containing information about the device's localization state. 

---

# MLSpatialAnchorLocalizationInfo

**Module:** **[Magic Leap Spaces](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Spatial Anchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md)**



A structure containing information about the device's localization state.  [More...](#detailed-description)


`#include <ml_spatial_anchor.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md#uint32-t-version)** <br></br>Version of the structure.  |
| [MLSpatialAnchorLocalizationStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorlocalizationstatus) | **[localization_status](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md#mlspatialanchorlocalizationstatus-localization-status)** <br></br>The localization status at the time this structure was returned.  |
| [MLSpatialAnchorMappingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchormappingmode) | **[mapping_mode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md#mlspatialanchormappingmode-mapping-mode)** <br></br>The current mapping mode.  |
| char[MLSpatialAnchor_MaxSpaceNameLength] | **[space_name](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md#char-space-name)** <br></br>If localized, this will contain the name of the current space.  |
| [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) | **[space_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md#mluuid-space-id)** <br></br>If localized, this will contain the unique ID of the current space.  |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[target_space_origin](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md#mlcoordinateframeuid-target-space-origin)** <br></br>If localized, this will contain the identifier of the transform of the target space's origin relative to the world origin.  |

## Detailed Description

```cpp
struct MLSpatialAnchorLocalizationInfo;
```

A structure containing information about the device's localization state. 



:::caution Deprecated
Deprecated since 1.3.0. Scheduled for removal. Replaced by [MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md). 
:::


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

### localization_status {#mlspatialanchorlocalizationstatus-localization-status}

```cpp
MLSpatialAnchorLocalizationStatus localization_status;
```

The localization status at the time this structure was returned. 


| Type | Description |
|--|--|
| [MLSpatialAnchorLocalizationStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorlocalizationstatus) | The current localization status.  |






-----------

### mapping_mode {#mlspatialanchormappingmode-mapping-mode}

```cpp
MLSpatialAnchorMappingMode mapping_mode;
```

The current mapping mode. 


| Type | Description |
|--|--|
| [MLSpatialAnchorMappingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchormappingmode) | Mapping mode.  |






-----------

### space_name {#char-space-name}

```cpp
char[MLSpatialAnchor_MaxSpaceNameLength] space_name;
```

If localized, this will contain the name of the current space. 


| Type | Description |
|--|--|
| char[MLSpatialAnchor_MaxSpaceNameLength] | [MLSpatialAnchor_MaxSpaceNameLength] |






-----------

### space_id {#mluuid-space-id}

```cpp
MLUUID space_id;
```

If localized, this will contain the unique ID of the current space. 





-----------

### target_space_origin {#mlcoordinateframeuid-target-space-origin}

```cpp
MLCoordinateFrameUID target_space_origin;
```

If localized, this will contain the identifier of the transform of the target space's origin relative to the world origin. 





-----------


