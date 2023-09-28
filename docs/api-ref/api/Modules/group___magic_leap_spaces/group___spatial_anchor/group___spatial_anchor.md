---
title: Spatial Anchor
summary: apis for managing spatial anchors. 

---

# Spatial Anchor

**Module:** **[Magic Leap Spaces](/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)**

APIs for managing Spatial Anchors.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLSpatialAnchorLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md)** <br></br>A structure containing information about the device's localization state.  |
| struct | **[MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md)** <br></br>A structure representing a user-defined Spatial Anchor.  |
| struct | **[MLSpatialAnchorCreateInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md)** <br></br>A structure used to populate anchor creation info when creating a new Spatial Anchor.  |
| struct | **[MLSpatialAnchorQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md)** <br></br>A collection of filters for Spatial Anchor queries.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLSpatialAnchorLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) | **[MLSpatialAnchorLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#struct-mlspatialanchorlocalizationinfo)** <br></br>A structure containing information about the device's localization state.  |
| typedef struct [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) | **[MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#struct-mlspatialanchor)** <br></br>A structure representing a user-defined Spatial Anchor.  |
| typedef struct [MLSpatialAnchorCreateInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) | **[MLSpatialAnchorCreateInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#struct-mlspatialanchorcreateinfo)** <br></br>A structure used to populate anchor creation info when creating a new Spatial Anchor.  |
| typedef struct [MLSpatialAnchorQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) | **[MLSpatialAnchorQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#struct-mlspatialanchorqueryfilter)** <br></br>A collection of filters for Spatial Anchor queries.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 29](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-anonymous-enum-29)** <br></br> { <br></br>[MLResultAPIPrefix_SpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlresultapiprefix-spatialanchor) = ( 0x439  << 16),<br></br> [MLSpatialAnchor_MaxSpaceNameLength](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchor-maxspacenamelength) = 64<br></br>} |
| enum | **[MLSpatialAnchorResult](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorresult)** <br></br> { <br></br>[MLSpatialAnchorResult_MaxAnchorLimitReached](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorresult-maxanchorlimitreached) = MLResultAPIPrefix_SpatialAnchor,<br></br> [MLSpatialAnchorResult_MinDistanceThresholdExceeded](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorresult-mindistancethresholdexceeded),<br></br> [MLSpatialAnchorResult_InsufficientMapping](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorresult-insufficientmapping),<br></br> [MLSpatialAnchorResult_InvalidId](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorresult-invalidid),<br></br> [MLSpatialAnchorResult_InvalidExpirationTimestamp](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorresult-invalidexpirationtimestamp),<br></br> [MLSpatialAnchorResult_NotLocalized](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorresult-notlocalized),<br></br> [MLSpatialAnchorResult_ServerError](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorresult-servererror),<br></br> [MLSpatialAnchorResult_ServiceUnavailable](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorresult-serviceunavailable),<br></br> [MLSpatialAnchorResult_Ensure32Bits](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorresult-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>SpatialAnchor-specific return codes.  |
| enum | **[MLSpatialAnchorLocalizationStatus](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorlocalizationstatus)** <br></br> { <br></br>[MLSpatialAnchorLocalizationStatus_NotLocalized](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorlocalizationstatus-notlocalized),<br></br> [MLSpatialAnchorLocalizationStatus_Localized](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorlocalizationstatus-localized),<br></br> [MLSpatialAnchorLocalizationStatus_LocalizationPending](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorlocalizationstatus-localizationpending),<br></br> [MLSpatialAnchorLocalizationStatus_Ensure32Bits](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorlocalizationstatus-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>The current localization status.  |
| enum | **[MLSpatialAnchorMappingMode](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchormappingmode)** <br></br> { <br></br>[MLSpatialAnchorMappingMode_OnDevice](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchormappingmode-ondevice),<br></br> [MLSpatialAnchorMappingMode_ARCloud](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchormappingmode-arcloud),<br></br> [MLSpatialAnchorMappingMode_Ensure32Bits](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchormappingmode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Mapping mode.  |
| enum | **[MLSpatialAnchorQuality](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorquality)** <br></br> { <br></br>[MLSpatialAnchorQuality_Low](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorquality-low),<br></br> [MLSpatialAnchorQuality_Medium](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorquality-medium),<br></br> [MLSpatialAnchorQuality_High](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorquality-high),<br></br> [MLSpatialAnchorQuality_Ensure32Bits](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#enums-mlspatialanchorquality-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>The quality of the local space around the anchor.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLSpatialAnchorLocalizationInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorlocalizationinfoinit)**([MLSpatialAnchorLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) * inout_info)<br></br>Initialize default values for [MLSpatialAnchorLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md).  |
| void | **[MLSpatialAnchorInit](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorinit)**([MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * inout_anchor)<br></br>Initialize default values for a [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) structure.  |
| void | **[MLSpatialAnchorCreateInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorcreateinfoinit)**([MLSpatialAnchorCreateInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) * inout_info)<br></br>Initialize default values for a [MLSpatialAnchorCreateInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) structure.  |
| void | **[MLSpatialAnchorQueryFilterInit](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorqueryfilterinit)**([MLSpatialAnchorQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) * inout_query_filter)<br></br>Initializes the default values for a query filter.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorTrackerCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchortrackercreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a Spatial Anchor tracker.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorTrackerDestroy](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchortrackerdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroy a previously created Spatial Anchor tracker.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorcreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLSpatialAnchorCreateInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) * create_info, [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * out_anchor)<br></br>Create a new local Spatial Anchor at the desired location.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorPublish](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorpublish)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) anchor_id)<br></br>Publish an existing local Spatial Anchor to the persistent backend.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorDelete](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchordelete)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) anchor_id)<br></br>Delete an existing Spatial Anchor.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorUpdate](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorupdate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * anchor)<br></br>Update a Spatial Anchor's properties.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorQueryCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerycreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLSpatialAnchorQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) * query_filter, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_query_handle, uint32_t * out_results_count)<br></br>Create a new query for Spatial Anchors in the current space.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorQueryDestroy](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerydestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) query_handle)<br></br>Destroy a previously created query handle and release its associated resources.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorQueryGetResult](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerygetresult)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) query_handle, uint32_t first_index, uint32_t last_index, [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * out_results)<br></br>Get the result of a previous Spatial Anchor query.  |
| const char * | **[MLSpatialAnchorGetResultString](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#const-char-mlspatialanchorgetresultstring)**([MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result)<br></br>Returns an ASCII string for MLSpatialAnchorResult and MLResult codes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpatialAnchorGetLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorgetlocalizationinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLSpatialAnchorLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) * out_localization_info)<br></br>Get the current localization status of the device.  |

## Detailed Description

APIs for managing Spatial Anchors. 


Spatial Anchor management is closely tied to the selected mapping mode on the device. The modes are mutually exclusive and affect the functionality of these APIs. The available mapping modes are:

On-Device Mode - A persistent mode in which anchors are persisted locally and will be available in multiple sessions when localized to the same space in which they were published.

AR Cloud Mode - A persistent mode in which anchors are persisted in the cloud environment and will be available in multiple sessions to devices that are localized to the same space in which they were published. 




**Shared Object:**
  * perception.magicleap*




-----------
## Enums Documentation

### Anonymous Enum 29 {#enums-anonymous-enum-29}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResultAPIPrefix_SpatialAnchor |  ( 0x439  << 16)| Defines the prefix for MLSpatialAnchorResult codes. |
| MLSpatialAnchor_MaxSpaceNameLength |  64| Maximum size for the name of the space in the [MLSpatialAnchorLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) structure. |








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

### MLSpatialAnchorQuality {#enums-mlspatialanchorquality}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLSpatialAnchorQuality_Low | | Low quality, this anchor can be expected to move significantly. |
| MLSpatialAnchorQuality_Medium | | Medium quality, this anchor may move slightly. |
| MLSpatialAnchorQuality_High | | High quality, this anchor is stable and suitable for digital content attachment. |
| MLSpatialAnchorQuality_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



The quality of the local space around the anchor. 

This can change over time as the user continues to scan the space.




**API Level:**
  * 31




-----------


## Types Documentation

### MLSpatialAnchorLocalizationInfo {#struct-mlspatialanchorlocalizationinfo}

```cpp
typedef struct MLSpatialAnchorLocalizationInfo MLSpatialAnchorLocalizationInfo;
```

A structure containing information about the device's localization state. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md)

:::caution Deprecated
Deprecated since 1.3.0. Scheduled for removal. Replaced by [MLSpaceLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md). 
:::


**API Level:**
  * 20




-----------

### MLSpatialAnchor {#struct-mlspatialanchor}

```cpp
typedef struct MLSpatialAnchor MLSpatialAnchor;
```

A structure representing a user-defined Spatial Anchor. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md)


**API Level:**
  * 31




-----------

### MLSpatialAnchorCreateInfo {#struct-mlspatialanchorcreateinfo}

```cpp
typedef struct MLSpatialAnchorCreateInfo MLSpatialAnchorCreateInfo;
```

A structure used to populate anchor creation info when creating a new Spatial Anchor. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md)


**API Level:**
  * 20




-----------

### MLSpatialAnchorQueryFilter {#struct-mlspatialanchorqueryfilter}

```cpp
typedef struct MLSpatialAnchorQueryFilter MLSpatialAnchorQueryFilter;
```

A collection of filters for Spatial Anchor queries. 

Filters that have been set will be combined via logical conjunction. E.g. results must match the ids filter AND fall within the radius constraint when both have been set.

This struct must be initialized by calling [MLSpatialAnchorQueryFilterInit](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorqueryfilterinit) before use.



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md)


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

Initialize default values for [MLSpatialAnchorLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpatialAnchorLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) * |inout_info|The localization info to initialize.|
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

Initialize default values for a [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) structure. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * |inout_anchor|The anchor to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 31




-----------

### MLSpatialAnchorCreateInfoInit {#void-mlspatialanchorcreateinfoinit}

```cpp
static inline void MLSpatialAnchorCreateInfoInit(
    MLSpatialAnchorCreateInfo * inout_info
)
```

Initialize default values for a [MLSpatialAnchorCreateInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) structure. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpatialAnchorCreateInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) * |inout_info|The info struct to initialize.|
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
| [MLSpatialAnchorQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) * |inout_query_filter|The filter to initialize.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain a handle for a Spatial Anchor tracker if successful, otherwise it will be [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The out_handle parameter was not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created the tracker. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The tracker was not created.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to a Spatial Anchor tracker created by [MLSpatialAnchorCreate()](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorcreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The handle parameter was not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed the tracker. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The tracker was not destroyed.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| const [MLSpatialAnchorCreateInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) * |create_info|A struct containing the creation info for the new anchor. |
| [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * |out_anchor|The created anchor.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was null. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The anchor was successfully created. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_InsufficientMapping|Insufficient mapping. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_InvalidExpirationTimestamp|Invalid expiration timestamp. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_MaxAnchorLimitReached|Maximum anchor limit reached. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_MinDistanceThresholdExceeded|Minimum distance threshold exceeded.|
**Required Permissions**:

  * None 


On success, out_anchor will be returned with a newly generated ID.

Any unpublished anchor will be lost if the Headpose session is lost. See [MLHeadTrackingGetMapEvents](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetmapevents) for more details.




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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) |anchor_id|The Id of the local anchor to publish.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was null. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The anchor was successfully published and persisted. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Unauthenticated|Invalid authentication credentials for this operation. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_NotLocalized|Not localized. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_InvalidId|Invalid Id provided. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_MaxAnchorLimitReached|Maximum anchor limit reached. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_MinDistanceThresholdExceeded|Minimum distance threshold exceeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_ServerError|Server error occurred.|
**Required Permissions**:

  * None 


Depending on the currently selected mapping mode, this can store the anchor locally or in the cloud. This call will fail if the device is not localized to a space.

Any unpublished anchor will be lost if the Headpose session is lost. See [MLHeadTrackingGetMapEvents](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetmapevents) for more details.




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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) |anchor_id|The Id of the anchor to delete.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was null. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The anchor was successfully deleted. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Unauthenticated|Invalid authentication credentials for this operation. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_InvalidId|Invalid Id provided. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_ServerError|Server error occurred.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| const [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * |anchor|The anchor containing the desired updated properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was null. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The anchor was successfully updated. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Unauthenticated|Invalid authentication credentials for this operation. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_InvalidId|Invalid Id provided. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_InvalidExpirationTimestamp|Invalid expiration timestamp. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_ServerError|Server error occurred.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| const [MLSpatialAnchorQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) * |query_filter|The filter structure for the query. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_query_handle|The handle for this query to be used with MLSpatialAnchorQueryGetResult. |
| uint32_t * |out_results_count|The total number of entries found by the query. This can be any number between 0 and max_results.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was null. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query executed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Unspecified error occurred. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_NotLocalized|Not localized to a space.|
**Required Permissions**:

  * None 


It is the responsibility of the caller to call [MLSpatialAnchorQueryDestroy](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerydestroy) with the query handle returned from this function after the results are no longer needed.




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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |query_handle|Handle to a Spatial Anchor query.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was null. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The handle was successfully destroyed.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |query_handle|Handle to a query obtained from MLSpatialAnchorQuery. |
| uint32_t |first_index|The first index. |
| uint32_t |last_index|The last index. |
| [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) * |out_results|An array of (last_index - first_index + 1) size to hold the query results.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query executed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was incorrect. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Unspecified failure occurred. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpatialAnchorResult_NotLocalized|Not localized to a space.|
**Required Permissions**:

  * None 


Putting index bounds on the results allows the caller to only receive a subset of the total number of results generated by the query. This is useful as a form of pagination in the case of a large number of anchors in the current space. Indexing is zero-based so if there are N results in the query, then it is required that 0 <= first_index <= last_index < N.




**API Level:**
  * 20




-----------

### MLSpatialAnchorGetResultString {#const-char-mlspatialanchorgetresultstring}

```cpp
const char * MLSpatialAnchorGetResultString(
    MLResult result
)
```

Returns an ASCII string for MLSpatialAnchorResult and MLResult codes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result|The input MLResult enum from [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) functions. |
**Required Permissions**:

  * None 




**Return**: ASCII string containing readable version of result code.


**API Level:**
  * 31




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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to a Spatial Anchor tracker. |
| [MLSpatialAnchorLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) * |out_localization_info|The localization info structure to be populated.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query executed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters was incorrect. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Unspecified failure occurred.|
**Required Permissions**:

  * None 




:::caution Deprecated
Deprecated since 1.3.0. Scheduled for removal. Replaced by MLSpaceGetLocalizationResult. 
:::


**API Level:**
  * 20




-----------





