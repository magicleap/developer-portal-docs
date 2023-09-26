---
title: ml_spatial_anchor.h

---

# ml_spatial_anchor.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md)** <br></br>A structure containing information about the device's localization state.  |
| struct | **[MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md)** <br></br>A structure representing a user-defined Spatial Anchor.  |
| struct | **[MLSpatialAnchorCreateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md)** <br></br>A structure used to populate anchor creation info when creating a new Spatial Anchor.  |
| struct | **[MLSpatialAnchorQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md)** <br></br>A collection of filters for Spatial Anchor queries.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) | **[MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#struct-mlspatialanchorlocalizationinfo)** <br></br>A structure containing information about the device's localization state.  |
| typedef struct [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) | **[MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#struct-mlspatialanchor)** <br></br>A structure representing a user-defined Spatial Anchor.  |
| typedef struct [MLSpatialAnchorCreateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) | **[MLSpatialAnchorCreateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#struct-mlspatialanchorcreateinfo)** <br></br>A structure used to populate anchor creation info when creating a new Spatial Anchor.  |
| typedef struct [MLSpatialAnchorQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) | **[MLSpatialAnchorQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#struct-mlspatialanchorqueryfilter)** <br></br>A collection of filters for Spatial Anchor queries.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 29](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-anonymous-enum-29)** <br></br> { <br></br>[MLResultAPIPrefix_SpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlresultapiprefix-spatialanchor) = ( 0x439  << 16),<br></br> [MLSpatialAnchor_MaxSpaceNameLength](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchor-maxspacenamelength) = 64<br></br>} |
| enum | **[MLSpatialAnchorResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorresult)** <br></br> { <br></br>[MLSpatialAnchorResult_MaxAnchorLimitReached](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorresult-maxanchorlimitreached) = MLResultAPIPrefix_SpatialAnchor,<br></br> [MLSpatialAnchorResult_MinDistanceThresholdExceeded](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorresult-mindistancethresholdexceeded),<br></br> [MLSpatialAnchorResult_InsufficientMapping](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorresult-insufficientmapping),<br></br> [MLSpatialAnchorResult_InvalidId](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorresult-invalidid),<br></br> [MLSpatialAnchorResult_InvalidExpirationTimestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorresult-invalidexpirationtimestamp),<br></br> [MLSpatialAnchorResult_NotLocalized](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorresult-notlocalized),<br></br> [MLSpatialAnchorResult_ServerError](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorresult-servererror),<br></br> [MLSpatialAnchorResult_ServiceUnavailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorresult-serviceunavailable),<br></br> [MLSpatialAnchorResult_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorresult-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>SpatialAnchor-specific return codes.  |
| enum | **[MLSpatialAnchorLocalizationStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorlocalizationstatus)** <br></br> { <br></br>[MLSpatialAnchorLocalizationStatus_NotLocalized](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorlocalizationstatus-notlocalized),<br></br> [MLSpatialAnchorLocalizationStatus_Localized](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorlocalizationstatus-localized),<br></br> [MLSpatialAnchorLocalizationStatus_LocalizationPending](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorlocalizationstatus-localizationpending),<br></br> [MLSpatialAnchorLocalizationStatus_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchorlocalizationstatus-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>The current localization status.  |
| enum | **[MLSpatialAnchorMappingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchormappingmode)** <br></br> { <br></br>[MLSpatialAnchorMappingMode_OnDevice](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchormappingmode-ondevice),<br></br> [MLSpatialAnchorMappingMode_ARCloud](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchormappingmode-arcloud),<br></br> [MLSpatialAnchorMappingMode_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__spatial__anchor_8h.md#enums-mlspatialanchormappingmode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Mapping mode.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLSpatialAnchorLocalizationInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorlocalizationinfoinit)**([MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) * inout_info)<br></br>Initialize default values for [MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md).  |
| void | **[MLSpatialAnchorInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorinit)**([MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * inout_anchor)<br></br>Initialize default values for a [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) structure.  |
| void | **[MLSpatialAnchorCreateInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorcreateinfoinit)**([MLSpatialAnchorCreateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) * inout_info)<br></br>Initialize default values for a [MLSpatialAnchorCreateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) structure.  |
| void | **[MLSpatialAnchorQueryFilterInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorqueryfilterinit)**([MLSpatialAnchorQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) * inout_query_filter)<br></br>Initializes the default values for a query filter.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorTrackerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchortrackercreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a Spatial Anchor tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorTrackerDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchortrackerdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroy a previously created Spatial Anchor tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorcreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLSpatialAnchorCreateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) * create_info, [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * out_anchor)<br></br>Create a new local Spatial Anchor at the desired location.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorPublish](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorpublish)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) anchor_id)<br></br>Publish an existing local Spatial Anchor to the persistent backend.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorDelete](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchordelete)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) anchor_id)<br></br>Delete an existing Spatial Anchor.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorUpdate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorupdate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * anchor)<br></br>Update a Spatial Anchor's properties.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorQueryCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerycreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLSpatialAnchorQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) * query_filter, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_query_handle, uint32_t * out_results_count)<br></br>Create a new query for Spatial Anchors in the current space.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorQueryDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerydestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) query_handle)<br></br>Destroy a previously created query handle and release its associated resources.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorQueryGetResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerygetresult)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) query_handle, uint32_t first_index, uint32_t last_index, [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * out_results)<br></br>Get the result of a previous Spatial Anchor query.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorGetLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorgetlocalizationinfo)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) * out_localization_info)<br></br>Get the current localization status of the device.  |

## Enums Documentation

### Anonymous Enum 29 {#enums-anonymous-enum-29}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResultAPIPrefix_SpatialAnchor |  ( 0x439  << 16)| Defines the prefix for MLSpatialAnchorResult codes. |
| MLSpatialAnchor_MaxSpaceNameLength |  64| Maximum size for the name of the space in the [MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) structure. |








-----------

### MLSpatialAnchorResult {#enums-mlspatialanchorresult}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLSpatialAnchorResult_MaxAnchorLimitReached |  MLResultAPIPrefix_SpatialAnchor| The maximum number of anchors for the current space has been reached. |
| MLSpatialAnchorResult_MinDistanceThresholdExceeded | | The minimum distance between anchors was not met. |
| MLSpatialAnchorResult_InsufficientMapping | | The space has not been sufficiently mapped to allow this operation. |
| MLSpatialAnchorResult_InvalidId | | The provided anchor Id was not valid. |
| MLSpatialAnchorResult_InvalidExpirationTimestamp | | The provided expiration suggestion was not valid. |
| MLSpatialAnchorResult_NotLocalized | | The operation cannot be completed because the device has not yet localized. |
| MLSpatialAnchorResult_ServerError | | There was an error communicating with the server. |
| MLSpatialAnchorResult_ServiceUnavailable | | The operation failed because the underlying service is not yet available, retry later. |
| MLSpatialAnchorResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



SpatialAnchor-specific return codes. 




**API Level:**
  * 20




-----------

### MLSpatialAnchorLocalizationStatus {#enums-mlspatialanchorlocalizationstatus}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLSpatialAnchorLocalizationStatus_NotLocalized | | The device is not currently localized. |
| MLSpatialAnchorLocalizationStatus_Localized | | The device has localized successfully. |
| MLSpatialAnchorLocalizationStatus_LocalizationPending | | A localization attempt is currently in progress. |
| MLSpatialAnchorLocalizationStatus_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



The current localization status. 



:::caution Deprecated
Deprecated since 1.3.0. Scheduled for removal. Replaced by MLSpaceLocalizationStatus. 
:::


**API Level:**
  * 20




-----------

### MLSpatialAnchorMappingMode {#enums-mlspatialanchormappingmode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLSpatialAnchorMappingMode_OnDevice | | Using on-device mapping. |
| MLSpatialAnchorMappingMode_ARCloud | | Using cloud-based mapping. |
| MLSpatialAnchorMappingMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Mapping mode. 



:::caution Deprecated
Deprecated since 1.3.0. Scheduled for removal. 
:::


**API Level:**
  * 20




-----------


## Types Documentation

### MLSpatialAnchorLocalizationInfo {#struct-mlspatialanchorlocalizationinfo}

```cpp
typedef struct MLSpatialAnchorLocalizationInfo MLSpatialAnchorLocalizationInfo;
```

A structure containing information about the device's localization state. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md)

:::caution Deprecated
Deprecated since 1.3.0. Scheduled for removal. Replaced by [MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md). 
:::


**API Level:**
  * 20




-----------

### MLSpatialAnchor {#struct-mlspatialanchor}

```cpp
typedef struct MLSpatialAnchor MLSpatialAnchor;
```

A structure representing a user-defined Spatial Anchor. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md)


**API Level:**
  * 20




-----------

### MLSpatialAnchorCreateInfo {#struct-mlspatialanchorcreateinfo}

```cpp
typedef struct MLSpatialAnchorCreateInfo MLSpatialAnchorCreateInfo;
```

A structure used to populate anchor creation info when creating a new Spatial Anchor. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md)


**API Level:**
  * 20




-----------

### MLSpatialAnchorQueryFilter {#struct-mlspatialanchorqueryfilter}

```cpp
typedef struct MLSpatialAnchorQueryFilter MLSpatialAnchorQueryFilter;
```

A collection of filters for Spatial Anchor queries. 

Filters that have been set will be combined via logical conjunction. E.g. results must match the ids filter AND fall within the radius constraint when both have been set.

This struct must be initialized by calling [MLSpatialAnchorQueryFilterInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorqueryfilterinit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md)


**API Level:**
  * 20




-----------


## Functions Documentation

### MLSpatialAnchorLocalizationInfoInit {#void-mlspatialanchorlocalizationinfoinit}

```cpp
static inline void MLSpatialAnchorLocalizationInfoInit(
    MLSpatialAnchorLocalizationInfo * inout_info
)
```

Initialize default values for [MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) * |inout_info|The localization info to initialize.|
**Required Permissions**:

  * None 




:::caution Deprecated
Deprecated since 1.3.0. Scheduled for removal. Replaced by MLSpaceLocalizationResultInit. 
:::


**API Level:**
  * 20




-----------

### MLSpatialAnchorInit {#void-mlspatialanchorinit}

```cpp
static inline void MLSpatialAnchorInit(
    MLSpatialAnchor * inout_anchor
)
```

Initialize default values for a [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) structure. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * |inout_anchor|The anchor to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLSpatialAnchorCreateInfoInit {#void-mlspatialanchorcreateinfoinit}

```cpp
static inline void MLSpatialAnchorCreateInfoInit(
    MLSpatialAnchorCreateInfo * inout_info
)
```

Initialize default values for a [MLSpatialAnchorCreateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) structure. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpatialAnchorCreateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) * |inout_info|The info struct to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLSpatialAnchorQueryFilterInit {#void-mlspatialanchorqueryfilterinit}

```cpp
static inline void MLSpatialAnchorQueryFilterInit(
    MLSpatialAnchorQueryFilter * inout_query_filter
)
```

Initializes the default values for a query filter. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpatialAnchorQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) * |inout_query_filter|The filter to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLSpatialAnchorTrackerCreate {#mlresult-mlspatialanchortrackercreate}

```cpp
MLResult MLSpatialAnchorTrackerCreate(
    MLHandle * out_handle
)
```

Create a Spatial Anchor tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain a handle for a Spatial Anchor tracker if successful, otherwise it will be [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The out_handle parameter was not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created the tracker. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The tracker was not created.|
**Required Permissions**:

  * com.magicleap.permission.SPATIAL_ANCHOR (protection level: normal) 





**API Level:**
  * 20




-----------

### MLSpatialAnchorTrackerDestroy {#mlresult-mlspatialanchortrackerdestroy}

```cpp
MLResult MLSpatialAnchorTrackerDestroy(
    MLHandle handle
)
```

Destroy a previously created Spatial Anchor tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to a Spatial Anchor tracker created by [MLSpatialAnchorCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorcreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The handle parameter was not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed the tracker. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The tracker was not destroyed.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLSpatialAnchorCreate {#mlresult-mlspatialanchorcreate}

```cpp
MLResult MLSpatialAnchorCreate(
    MLHandle handle,
    const MLSpatialAnchorCreateInfo * create_info,
    MLSpatialAnchor * out_anchor
)
```

Create a new local Spatial Anchor at the desired location. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| const [MLSpatialAnchorCreateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) * |create_info|A struct containing the creation info for the new anchor. |
| [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * |out_anchor|The created anchor.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was null. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The anchor was successfully created. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_InsufficientMapping|Insufficient mapping. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_InvalidExpirationTimestamp|Invalid expiration timestamp. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_MaxAnchorLimitReached|Maximum anchor limit reached. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_MinDistanceThresholdExceeded|Minimum distance threshold exceeded.|
**Required Permissions**:

  * None 


On success, out_anchor will be returned with a newly generated ID.

Any unpublished anchor will be lost if the Headpose session is lost. See [MLHeadTrackingGetMapEvents](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetmapevents) for more details.




**API Level:**
  * 20




-----------

### MLSpatialAnchorPublish {#mlresult-mlspatialanchorpublish}

```cpp
MLResult MLSpatialAnchorPublish(
    MLHandle handle,
    MLUUID anchor_id
)
```

Publish an existing local Spatial Anchor to the persistent backend. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) |anchor_id|The Id of the local anchor to publish.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was null. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The anchor was successfully published and persisted. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_NotLocalized|Not localized. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_InvalidId|Invalid Id provided. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_MaxAnchorLimitReached|Maximum anchor limit reached. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_MinDistanceThresholdExceeded|Minimum distance threshold exceeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_ServerError|Server error occurred.|
**Required Permissions**:

  * None 


Depending on the currently selected mapping mode, this can store the anchor locally or in the cloud. This call will fail if the device is not localized to a space.

Any unpublished anchor will be lost if the Headpose session is lost. See [MLHeadTrackingGetMapEvents](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetmapevents) for more details.




**API Level:**
  * 20




-----------

### MLSpatialAnchorDelete {#mlresult-mlspatialanchordelete}

```cpp
MLResult MLSpatialAnchorDelete(
    MLHandle handle,
    MLUUID anchor_id
)
```

Delete an existing Spatial Anchor. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) |anchor_id|The Id of the anchor to delete.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was null. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The anchor was successfully deleted. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_InvalidId|Invalid Id provided. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_ServerError|Server error occurred.|
**Required Permissions**:

  * None 


If successful, this will delete the anchor from persistent storage based on the currently selected mapping mode.




**API Level:**
  * 20




-----------

### MLSpatialAnchorUpdate {#mlresult-mlspatialanchorupdate}

```cpp
MLResult MLSpatialAnchorUpdate(
    MLHandle handle,
    const MLSpatialAnchor * anchor
)
```

Update a Spatial Anchor's properties. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| const [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * |anchor|The anchor containing the desired updated properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was null. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The anchor was successfully updated. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_InvalidId|Invalid Id provided. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_InvalidExpirationTimestamp|Invalid expiration timestamp. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_ServerError|Server error occurred.|
**Required Permissions**:

  * None 


The only property that can currently be updated is the expiration timestamp.




**API Level:**
  * 20




-----------

### MLSpatialAnchorQueryCreate {#mlresult-mlspatialanchorquerycreate}

```cpp
MLResult MLSpatialAnchorQueryCreate(
    MLHandle handle,
    const MLSpatialAnchorQueryFilter * query_filter,
    MLHandle * out_query_handle,
    uint32_t * out_results_count
)
```

Create a new query for Spatial Anchors in the current space. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| const [MLSpatialAnchorQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) * |query_filter|The filter structure for the query. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_query_handle|The handle for this query to be used with MLSpatialAnchorQueryGetResult. |
| uint32_t * |out_results_count|The total number of entries found by the query. This can be any number between 0 and max_results.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was null. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query executed successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Unspecified error occurred. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_NotLocalized|Not localized to a space.|
**Required Permissions**:

  * None 


It is the responsibility of the caller to call [MLSpatialAnchorQueryDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerydestroy) with the query handle returned from this function after the results are no longer needed.




**API Level:**
  * 20




-----------

### MLSpatialAnchorQueryDestroy {#mlresult-mlspatialanchorquerydestroy}

```cpp
MLResult MLSpatialAnchorQueryDestroy(
    MLHandle handle,
    MLHandle query_handle
)
```

Destroy a previously created query handle and release its associated resources. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |query_handle|Handle to a Spatial Anchor query.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was null. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The handle was successfully destroyed.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLSpatialAnchorQueryGetResult {#mlresult-mlspatialanchorquerygetresult}

```cpp
MLResult MLSpatialAnchorQueryGetResult(
    MLHandle handle,
    MLHandle query_handle,
    uint32_t first_index,
    uint32_t last_index,
    MLSpatialAnchor * out_results
)
```

Get the result of a previous Spatial Anchor query. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |query_handle|Handle to a query obtained from MLSpatialAnchorQuery. |
| uint32_t |first_index|The first index. |
| uint32_t |last_index|The last index. |
| [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * |out_results|An array of (last_index - first_index + 1) size to hold the query results.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query executed successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was incorrect. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Unspecified failure occurred. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_NotLocalized|Not localized to a space.|
**Required Permissions**:

  * None 


Putting index bounds on the results allows the caller to only receive a subset of the total number of results generated by the query. This is useful as a form of pagination in the case of a large number of anchors in the current space. Indexing is zero-based so if there are N results in the query, then it is required that 0 <= first_index <= last_index < N.




**API Level:**
  * 20




-----------

### MLSpatialAnchorGetLocalizationInfo {#mlresult-mlspatialanchorgetlocalizationinfo}

```cpp
MLResult MLSpatialAnchorGetLocalizationInfo(
    MLHandle handle,
    MLSpatialAnchorLocalizationInfo * out_localization_info
)
```

Get the current localization status of the device. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| [MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) * |out_localization_info|The localization info structure to be populated.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query executed successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was incorrect. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Unspecified failure occurred.|
**Required Permissions**:

  * None 




:::caution Deprecated
Deprecated since 1.3.0. Scheduled for removal. Replaced by MLSpaceGetLocalizationResult. 
:::


**API Level:**
  * 20




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2022 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#include "ml_api.h"
#include "ml_types.h"

#include <string.h>

ML_EXTERN_C_BEGIN

enum {
  MLResultAPIPrefix_SpatialAnchor = MLRESULT_PREFIX(0x439),

  MLSpatialAnchor_MaxSpaceNameLength = 64,
};

typedef enum MLSpatialAnchorResult {
  MLSpatialAnchorResult_MaxAnchorLimitReached = MLResultAPIPrefix_SpatialAnchor,

  MLSpatialAnchorResult_MinDistanceThresholdExceeded,

  MLSpatialAnchorResult_InsufficientMapping,

  MLSpatialAnchorResult_InvalidId,

  MLSpatialAnchorResult_InvalidExpirationTimestamp,

  MLSpatialAnchorResult_NotLocalized,

  MLSpatialAnchorResult_ServerError,

  MLSpatialAnchorResult_ServiceUnavailable,

  MLSpatialAnchorResult_Ensure32Bits = 0x7FFFFFFF
} MLSpatialAnchorResult;

typedef enum MLSpatialAnchorLocalizationStatus {
  MLSpatialAnchorLocalizationStatus_NotLocalized,

  MLSpatialAnchorLocalizationStatus_Localized,

  MLSpatialAnchorLocalizationStatus_LocalizationPending,

  MLSpatialAnchorLocalizationStatus_Ensure32Bits = 0x7FFFFFFF
} MLSpatialAnchorLocalizationStatus;

typedef enum MLSpatialAnchorMappingMode {
  MLSpatialAnchorMappingMode_OnDevice,

  MLSpatialAnchorMappingMode_ARCloud,

  MLSpatialAnchorMappingMode_Ensure32Bits = 0x7FFFFFFF
} MLSpatialAnchorMappingMode;

typedef ML_DEPRECATED_MSG("Replaced by MLSpaceLocalizationResult.") struct MLSpatialAnchorLocalizationInfo {
  uint32_t version;

  MLSpatialAnchorLocalizationStatus localization_status;

  MLSpatialAnchorMappingMode mapping_mode;

  char space_name[MLSpatialAnchor_MaxSpaceNameLength];

  MLUUID space_id;

  MLCoordinateFrameUID target_space_origin;
} MLSpatialAnchorLocalizationInfo;

ML_DEPRECATED_MSG("Replaced by MLSpaceLocalizationResultInit.")
ML_STATIC_INLINE void MLSpatialAnchorLocalizationInfoInit(MLSpatialAnchorLocalizationInfo *inout_info) {
  if (inout_info != NULL) {
    memset(inout_info, 0, sizeof(MLSpatialAnchorLocalizationInfo));
    inout_info->version = 2;
  }
}

typedef struct MLSpatialAnchor {
  uint32_t version;

  MLUUID id;

  MLCoordinateFrameUID cfuid;

  uint64_t expiration_timestamp_s;

  bool is_persisted;

  MLUUID space_id;
} MLSpatialAnchor;

ML_STATIC_INLINE void MLSpatialAnchorInit(MLSpatialAnchor *inout_anchor) {
  if (inout_anchor != NULL) {
    memset(inout_anchor, 0, sizeof(MLSpatialAnchor));
    inout_anchor->version = 1;
  }
}

typedef struct MLSpatialAnchorCreateInfo {
  uint32_t version;

  MLTransform transform;

  uint64_t expiration_timestamp_s;
} MLSpatialAnchorCreateInfo;

ML_STATIC_INLINE void MLSpatialAnchorCreateInfoInit(MLSpatialAnchorCreateInfo *inout_info) {
  if (inout_info != NULL) {
    memset(inout_info, 0, sizeof(MLSpatialAnchorCreateInfo));
    inout_info->version = 1;
  }
}

typedef struct MLSpatialAnchorQueryFilter {
  uint32_t version;

  MLVec3f center;

  float radius_m;

  const MLUUID *ids;

  uint32_t ids_count;

  uint32_t max_results;

  bool sorted;
} MLSpatialAnchorQueryFilter;

ML_STATIC_INLINE void MLSpatialAnchorQueryFilterInit(MLSpatialAnchorQueryFilter *inout_query_filter) {
  if (inout_query_filter != NULL) {
    memset(inout_query_filter, 0, sizeof(MLSpatialAnchorQueryFilter));
    inout_query_filter->version = 1;
    inout_query_filter->sorted = true;
    inout_query_filter->max_results = 1;
  }
}

ML_API MLResult ML_CALL MLSpatialAnchorTrackerCreate(MLHandle *out_handle);

ML_API MLResult ML_CALL MLSpatialAnchorTrackerDestroy(MLHandle handle);

ML_API MLResult ML_CALL MLSpatialAnchorCreate(MLHandle handle, const MLSpatialAnchorCreateInfo *create_info, MLSpatialAnchor *out_anchor);

ML_API MLResult ML_CALL MLSpatialAnchorPublish(MLHandle handle, MLUUID anchor_id);

ML_API MLResult ML_CALL MLSpatialAnchorDelete(MLHandle handle, MLUUID anchor_id);

ML_API MLResult ML_CALL MLSpatialAnchorUpdate(MLHandle handle, const MLSpatialAnchor *anchor);

ML_API MLResult ML_CALL MLSpatialAnchorQueryCreate(MLHandle handle,
                                                   const MLSpatialAnchorQueryFilter *query_filter,
                                                   MLHandle *out_query_handle,
                                                   uint32_t *out_results_count);

ML_API MLResult ML_CALL MLSpatialAnchorQueryDestroy(MLHandle handle, MLHandle query_handle);

ML_API MLResult ML_CALL MLSpatialAnchorQueryGetResult(MLHandle handle,
                                                      MLHandle query_handle,
                                                      uint32_t first_index,
                                                      uint32_t last_index,
                                                      MLSpatialAnchor* out_results);

ML_DEPRECATED_MSG("Replaced by MLSpaceGetLocalizationResult.")
ML_API MLResult ML_CALL MLSpatialAnchorGetLocalizationInfo(MLHandle handle, MLSpatialAnchorLocalizationInfo* out_localization_info);

ML_EXTERN_C_END
```




