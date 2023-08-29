---
title: ml_media_extractor.h

---

# ml_media_extractor.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef [MLPSSHEntry](/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md) | **[MLMediaExtractorPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaextractorpsshentry)**  |
| typedef struct [MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) | **[MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaextractordrmschemeinitdata)**  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLMediaExtractorSampleFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorsampleflag)** <br></br> { <br></br>[MLMediaExtractorSampleFlag_Sync](/api-ref/api/Files/ml__media__extractor_8h.md#enums-mlmediaextractorsampleflag-sync) = 1,<br></br> [MLMediaExtractorSampleFlag_Encrypted](/api-ref/api/Files/ml__media__extractor_8h.md#enums-mlmediaextractorsampleflag-encrypted) = 2,<br></br> [MLMediaExtractorSampleFlag_Ensure32Bits](/api-ref/api/Files/ml__media__extractor_8h.md#enums-mlmediaextractorsampleflag-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaExtractorSeekPosition](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorseekposition)** <br></br> { <br></br>[MLMediaExtractorSeekPosition_Previous_Sync](/api-ref/api/Files/ml__media__extractor_8h.md#enums-mlmediaextractorseekposition-previous-sync),<br></br> [MLMediaExtractorSeekPosition_Next_Sync](/api-ref/api/Files/ml__media__extractor_8h.md#enums-mlmediaextractorseekposition-next-sync),<br></br> [MLMediaExtractorSeekPosition_Closest_Sync](/api-ref/api/Files/ml__media__extractor_8h.md#enums-mlmediaextractorseekposition-closest-sync),<br></br> [MLMediaExtractorSeekPosition_Ensure32Bits](/api-ref/api/Files/ml__media__extractor_8h.md#enums-mlmediaextractorseekposition-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorcreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new MLMediaExtractor.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractordestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroy a MLMediaExtractor.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSetDataSourceForPath](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforpath)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const char * path)<br></br>Set a local file path as the data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSetDataSourceForURI](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforuri)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const char * uri)<br></br>Set a URI string as the data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSetDataSourceForURIWithHeaders](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforuriwithheaders)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const char * uri, const char ** headers, size_t len)<br></br>Set a URI string as the data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSetDataSourceForFD](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforfd)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int fd, int64_t offset, int64_t length)<br></br>Set the data source as the file-descriptor to use.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSetMediaDataSource](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetmediadatasource)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_data_source)<br></br>Sets the data source as user defined media data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetDRMInitData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetdrminitdata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) drm_uuid, [MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) * out_drm_init_data)<br></br>Extract DRM initialization data for a given DRM Scheme if it exists.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorReleaseDRMInitData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasedrminitdata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) * drm_init_data)<br></br>Release DRM initialization data which was previously retrieved.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetTrackCount](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgettrackcount)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t * out_track_count)<br></br>Count the number of tracks found in the data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetTrackFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgettrackformat)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, size_t index, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_track_handle)<br></br>Get the track format at the specified index.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSelectTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorselecttrack)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, size_t index)<br></br>Select a track for the subsequent operations.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorUnselectTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorunselecttrack)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, size_t index)<br></br>Unselect a track for the subsequent operations.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSeekTo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorseekto)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t time_us, [MLMediaSeekMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode) mode)<br></br>All selected tracks seek near the requested time according to the specified mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorAdvance](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractoradvance)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Advance to the next sample.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorReadSampleData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreadsampledata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint8_t * byte_buf, size_t buf_size, size_t offset, int64_t * out_data_size)<br></br>Retrieve the current encoded sample and store it in the byte buffer starting at the given offset.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetSampleTrackIndex](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampletrackindex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t * out_track_index)<br></br>Return the track index the current sample originates from.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetSampleTime](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampletime)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t * out_sample_time)<br></br>Return the current sample's presentation time in microseconds.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetSampleFlags](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampleflags)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int * out_sample_flags)<br></br>Return the current sample's flags.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetSampleCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsamplecryptoinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_info_handle)<br></br>Return the current sample's Crypto info if has encrypted sample.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorReleaseCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasecryptoinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * inout_info_handle)<br></br>Release the Crypto Info.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetCachedDuration](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetcachedduration)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t * out_cached_duration)<br></br>Return an estimate of how much data is presently cached in memoryexpressed in microseconds.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorHasCacheReachedEOS](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorhascachereachedeos)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Return `true` if we are caching data and the cache has reached the end of the data stream (for now, a future seek may of course restart the fetching of data).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetPSSHInfoCount](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetpsshinfocount)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, size_t * out_index)<br></br>Get the Number of PSSH info if present.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetPSSHInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetpsshinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, size_t index, [MLMediaExtractorPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaextractorpsshentry) * out_pssh_entry)<br></br>Get the PSSH info if present. The PSSH(Protection System Specific Header) contains a UUID representing a DRM scheme along with opaque data blob used for creating crypto session, which in turn used to configure codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorReleasePSSHInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasepsshinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaExtractorPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaextractorpsshentry) * pssh_entry)<br></br>Clear the PSSH info data.  |

## Enums Documentation

### MLMediaExtractorSampleFlag {#enums-mlmediaextractorsampleflag}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaExtractorSampleFlag_Sync |  1| |
| MLMediaExtractorSampleFlag_Encrypted |  2| |
| MLMediaExtractorSampleFlag_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Sample flag output from [MLMediaExtractorGetSampleFlags](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampleflags). 





-----------

### MLMediaExtractorSeekPosition {#enums-mlmediaextractorseekposition}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaExtractorSeekPosition_Previous_Sync | | |
| MLMediaExtractorSeekPosition_Next_Sync | | |
| MLMediaExtractorSeekPosition_Closest_Sync | | |
| MLMediaExtractorSeekPosition_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Seek mode used by [MLMediaExtractorSeekTo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorseekto). 





-----------


## Types Documentation

### MLMediaExtractorPSSHEntry {#mlpsshentry-mlmediaextractorpsshentry}

```cpp
typedef MLPSSHEntry MLMediaExtractorPSSHEntry;
```




[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md)



-----------

### MLMediaExtractorDRMSchemeInitData {#struct-mlmediaextractordrmschemeinitdata}

```cpp
typedef struct MLMediaExtractorDRMSchemeInitData MLMediaExtractorDRMSchemeInitData;
```


DRM Scheme initialization data. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md)



-----------


## Functions Documentation

### MLMediaExtractorCreate {#mlresult-mlmediaextractorcreate}

```cpp
MLResult MLMediaExtractorCreate(
    MLHandle * out_handle
)
```

Create a new MLMediaExtractor. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created MLMediaExtractor. If there is an error during creation, it will return [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If MediaExtractor handle cannot be allocated. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If out_handle is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorDestroy {#mlresult-mlmediaextractordestroy}

```cpp
MLResult MLMediaExtractorDestroy(
    MLHandle handle
)
```

Destroy a MLMediaExtractor. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If handle is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorSetDataSourceForPath {#mlresult-mlmediaextractorsetdatasourceforpath}

```cpp
MLResult MLMediaExtractorSetDataSourceForPath(
    MLHandle handle,
    const char * path
)
```

Set a local file path as the data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| const char * |path|Content path of the file.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The path should be an absolute path and should reference a world-readable file.





-----------

### MLMediaExtractorSetDataSourceForURI {#mlresult-mlmediaextractorsetdatasourceforuri}

```cpp
MLResult MLMediaExtractorSetDataSourceForURI(
    MLHandle handle,
    const char * uri
)
```

Set a URI string as the data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| const char * |uri|C-style string representing the URI complete string.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * android.permission.INTERNET (protection level: normal) 






-----------

### MLMediaExtractorSetDataSourceForURIWithHeaders {#mlresult-mlmediaextractorsetdatasourceforuriwithheaders}

```cpp
MLResult MLMediaExtractorSetDataSourceForURIWithHeaders(
    MLHandle handle,
    const char * uri,
    const char ** headers,
    size_t len
)
```

Set a URI string as the data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| const char * |uri|C-style string representing the complete URL. |
| const char ** |headers|Array of char * headers to be sent. |
| size_t |len|Number of headers passed-in.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * android.permission.INTERNET (protection level: normal) 






-----------

### MLMediaExtractorSetDataSourceForFD {#mlresult-mlmediaextractorsetdatasourceforfd}

```cpp
MLResult MLMediaExtractorSetDataSourceForFD(
    MLHandle handle,
    int fd,
    int64_t offset,
    int64_t length
)
```

Set the data source as the file-descriptor to use. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle to the MediaExtractor. |
| int |fd|File-descriptor for the file to extract from. |
| int64_t |offset|Offset in bytes into the file where the data to be extracted starts. |
| int64_t |length|Length in bytes of the data to be extracted.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


It is the caller's responsibility to close the file descriptor. It is safe to do so as soon as this call returns.





-----------

### MLMediaExtractorSetMediaDataSource {#mlresult-mlmediaextractorsetmediadatasource}

```cpp
MLResult MLMediaExtractorSetMediaDataSource(
    MLHandle handle,
    MLHandle media_data_source
)
```

Sets the data source as user defined media data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle to the MediaExtractor. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_data_source|MLHandle returned by [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If media_data_source cannot be found.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetDRMInitData {#mlresult-mlmediaextractorgetdrminitdata}

```cpp
MLResult MLMediaExtractorGetDRMInitData(
    MLHandle handle,
    MLUUID drm_uuid,
    MLMediaExtractorDRMSchemeInitData * out_drm_init_data
)
```

Extract DRM initialization data for a given DRM Scheme if it exists. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) |drm_uuid|UUID of the DRM scheme. |
| [MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) * |out_drm_init_data|DRM initialization data pointer. To release the DRM initialization data upon successful return, call [MLMediaExtractorReleaseDRMInitData()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasedrminitdata).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorReleaseDRMInitData {#mlresult-mlmediaextractorreleasedrminitdata}

```cpp
MLResult MLMediaExtractorReleaseDRMInitData(
    MLHandle handle,
    MLMediaExtractorDRMSchemeInitData * drm_init_data
)
```

Release DRM initialization data which was previously retrieved. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| [MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) * |drm_init_data|DRM initialization data that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetTrackCount {#mlresult-mlmediaextractorgettrackcount}

```cpp
MLResult MLMediaExtractorGetTrackCount(
    MLHandle handle,
    uint64_t * out_track_count
)
```

Count the number of tracks found in the data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| uint64_t * |out_track_count|Number of tracks found in data source.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetTrackFormat {#mlresult-mlmediaextractorgettrackformat}

```cpp
MLResult MLMediaExtractorGetTrackFormat(
    MLHandle handle,
    size_t index,
    MLHandle * out_track_handle
)
```

Get the track format at the specified index. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| size_t |index|Index of the track. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_track_handle|MLMediaFormat handle that represents track format.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorSelectTrack {#mlresult-mlmediaextractorselecttrack}

```cpp
MLResult MLMediaExtractorSelectTrack(
    MLHandle handle,
    size_t index
)
```

Select a track for the subsequent operations. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| size_t |index|Index of the track.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Subsequent calls to [MLMediaExtractorReadSampleData()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreadsampledata), [MLMediaExtractorGetSampleTrackIndex()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampletrackindex) and getSampleTime() only retrieve information for the subset of tracks selected. Selecting the same track multiple times has no effect, the track is only selected once.





-----------

### MLMediaExtractorUnselectTrack {#mlresult-mlmediaextractorunselecttrack}

```cpp
MLResult MLMediaExtractorUnselectTrack(
    MLHandle handle,
    size_t index
)
```

Unselect a track for the subsequent operations. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| size_t |index|Index of the track.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Subsequent calls to [MLMediaExtractorReadSampleData()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreadsampledata), [MLMediaExtractorGetSampleTrackIndex()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampletrackindex) and getSampleTime() only retrieve information for the subset of tracks selected.





-----------

### MLMediaExtractorSeekTo {#mlresult-mlmediaextractorseekto}

```cpp
MLResult MLMediaExtractorSeekTo(
    MLHandle handle,
    int64_t time_us,
    MLMediaSeekMode mode
)
```

All selected tracks seek near the requested time according to the specified mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| int64_t |time_us|Seek time. |
| [MLMediaSeekMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode) |mode|Seek mode defined by MLMediaSeekMode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorAdvance {#mlresult-mlmediaextractoradvance}

```cpp
MLResult MLMediaExtractorAdvance(
    MLHandle handle
)
```

Advance to the next sample. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If handle is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_FailedTransaction|If Advance operation failed, no more sample data is available (end of stream).|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorReadSampleData {#mlresult-mlmediaextractorreadsampledata}

```cpp
MLResult MLMediaExtractorReadSampleData(
    MLHandle handle,
    uint8_t * byte_buf,
    size_t buf_size,
    size_t offset,
    int64_t * out_data_size
)
```

Retrieve the current encoded sample and store it in the byte buffer starting at the given offset. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| uint8_t * |byte_buf|Destination byte buffer. |
| size_t |buf_size|Size of the destination buffer. |
| size_t |offset|Offset within the buffer. |
| int64_t * |out_data_size|Sample size or -1 if no more samples are available.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetSampleTrackIndex {#mlresult-mlmediaextractorgetsampletrackindex}

```cpp
MLResult MLMediaExtractorGetSampleTrackIndex(
    MLHandle handle,
    int64_t * out_track_index
)
```

Return the track index the current sample originates from. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| int64_t * |out_track_index|Track index or -1 if no more samples are available.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetSampleTime {#mlresult-mlmediaextractorgetsampletime}

```cpp
MLResult MLMediaExtractorGetSampleTime(
    MLHandle handle,
    int64_t * out_sample_time
)
```

Return the current sample's presentation time in microseconds. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| int64_t * |out_sample_time|Sample time or -1 if no more samples are available.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetSampleFlags {#mlresult-mlmediaextractorgetsampleflags}

```cpp
MLResult MLMediaExtractorGetSampleFlags(
    MLHandle handle,
    int * out_sample_flags
)
```

Return the current sample's flags. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| int * |out_sample_flags|Sample flag defined by [MLMediaExtractorSampleFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorsampleflag), or -1 if on failure.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetSampleCryptoInfo {#mlresult-mlmediaextractorgetsamplecryptoinfo}

```cpp
MLResult MLMediaExtractorGetSampleCryptoInfo(
    MLHandle handle,
    MLHandle * out_info_handle
)
```

Return the current sample's Crypto info if has encrypted sample. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_info_handle|On success it returns handle to Crypto info of the sample.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorReleaseCryptoInfo {#mlresult-mlmediaextractorreleasecryptoinfo}

```cpp
MLResult MLMediaExtractorReleaseCryptoInfo(
    MLHandle handle,
    MLHandle * inout_info_handle
)
```

Release the Crypto Info. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |inout_info_handle|handle to Crypto info that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetCachedDuration {#mlresult-mlmediaextractorgetcachedduration}

```cpp
MLResult MLMediaExtractorGetCachedDuration(
    MLHandle handle,
    int64_t * out_cached_duration
)
```

Return an estimate of how much data is presently cached in memoryexpressed in microseconds. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle to the MLMediaExtractor. |
| int64_t * |out_cached_duration|Cached amount or -1 if that information is unavailable or not applicable (no cache).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorHasCacheReachedEOS {#mlresult-mlmediaextractorhascachereachedeos}

```cpp
MLResult MLMediaExtractorHasCacheReachedEOS(
    MLHandle handle
)
```

Return `true` if we are caching data and the cache has reached the end of the data stream (for now, a future seek may of course restart the fetching of data). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


This API only returns a meaningful result if getCachedDuration() indicates the presence of a cache, i.e. does NOT return -1.





-----------

### MLMediaExtractorGetPSSHInfoCount {#mlresult-mlmediaextractorgetpsshinfocount}

```cpp
MLResult MLMediaExtractorGetPSSHInfoCount(
    MLHandle handle,
    size_t * out_index
)
```

Get the Number of PSSH info if present. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| size_t * |out_index|On successful return contains number of PSSH entries.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The PSSH(Protection System Specific Header) contains a UUID representing a DRM scheme along with opaque data blob used for creating crypto session, which in turn used to configure codec.





-----------

### MLMediaExtractorGetPSSHInfo {#mlresult-mlmediaextractorgetpsshinfo}

```cpp
MLResult MLMediaExtractorGetPSSHInfo(
    MLHandle handle,
    size_t index,
    MLMediaExtractorPSSHEntry * out_pssh_entry
)
```

Get the PSSH info if present. The PSSH(Protection System Specific Header) contains a UUID representing a DRM scheme along with opaque data blob used for creating crypto session, which in turn used to configure codec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| size_t |index|Index of the PSSH info data element being retrieved. |
| [MLMediaExtractorPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaextractorpsshentry) * |out_pssh_entry|Pointer to the PSSH info data element being retrieved.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Upon successful return, if a [MLMediaExtractorPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaextractorpsshentry) is returned, same should be released by calling [MLMediaExtractorReleasePSSHInfo()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasepsshinfo).





-----------

### MLMediaExtractorReleasePSSHInfo {#mlresult-mlmediaextractorreleasepsshinfo}

```cpp
MLResult MLMediaExtractorReleasePSSHInfo(
    MLHandle handle,
    MLMediaExtractorPSSHEntry * pssh_entry
)
```

Clear the PSSH info data. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| [MLMediaExtractorPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaextractorpsshentry) * |pssh_entry|Pointer to the PSSH info data element that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Clears the entire cached PSSH info data in the library.





-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2017 Magic Leap, Inc. All Rights Reserved.
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
#include "ml_media_common.h"
#include "ml_media_data_source.h"
#include "ml_media_error.h"
#include "ml_media_types.h"

ML_EXTERN_C_BEGIN

typedef enum MLMediaExtractorSampleFlag {
  MLMediaExtractorSampleFlag_Sync         = 1,
  MLMediaExtractorSampleFlag_Encrypted    = 2,
  MLMediaExtractorSampleFlag_Ensure32Bits = 0x7FFFFFFF
} MLMediaExtractorSampleFlag;

typedef enum MLMediaExtractorSeekPosition {
  MLMediaExtractorSeekPosition_Previous_Sync,
  MLMediaExtractorSeekPosition_Next_Sync,
  MLMediaExtractorSeekPosition_Closest_Sync,
  MLMediaExtractorSeekPosition_Ensure32Bits = 0x7FFFFFFF
} MLMediaExtractorSeekPosition;

typedef MLPSSHEntry MLMediaExtractorPSSHEntry;

typedef struct MLMediaExtractorDRMSchemeInitData {
  char *mime_type;
  size_t size;
  uint8_t *data;
} MLMediaExtractorDRMSchemeInitData;

ML_API MLResult ML_CALL MLMediaExtractorCreate(MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaExtractorDestroy(MLHandle handle);

ML_API MLResult ML_CALL MLMediaExtractorSetDataSourceForPath(MLHandle handle, const char *path);

ML_API MLResult ML_CALL MLMediaExtractorSetDataSourceForURI(MLHandle handle, const char *uri);

ML_API MLResult ML_CALL MLMediaExtractorSetDataSourceForURIWithHeaders(MLHandle handle, const char *uri, const char **headers, size_t len);

ML_API MLResult ML_CALL MLMediaExtractorSetDataSourceForFD(MLHandle handle, int fd, int64_t offset, int64_t length);

ML_API MLResult ML_CALL MLMediaExtractorSetMediaDataSource(MLHandle handle, MLHandle media_data_source);

ML_API MLResult ML_CALL MLMediaExtractorGetDRMInitData(MLHandle handle, MLUUID drm_uuid, MLMediaExtractorDRMSchemeInitData *out_drm_init_data);

ML_API MLResult ML_CALL MLMediaExtractorReleaseDRMInitData(MLHandle handle, MLMediaExtractorDRMSchemeInitData *drm_init_data);

ML_API MLResult ML_CALL MLMediaExtractorGetTrackCount(MLHandle handle, uint64_t *out_track_count);

ML_API MLResult ML_CALL MLMediaExtractorGetTrackFormat(MLHandle handle, size_t index, MLHandle *out_track_handle);

ML_API MLResult ML_CALL MLMediaExtractorSelectTrack(MLHandle handle, size_t index);

ML_API MLResult ML_CALL MLMediaExtractorUnselectTrack(MLHandle handle, size_t index);

ML_API MLResult ML_CALL MLMediaExtractorSeekTo(MLHandle handle, int64_t time_us, MLMediaSeekMode mode);

ML_API MLResult ML_CALL MLMediaExtractorAdvance(MLHandle handle);

ML_API MLResult ML_CALL MLMediaExtractorReadSampleData(MLHandle handle, uint8_t *byte_buf, size_t buf_size, size_t offset, int64_t *out_data_size);

ML_API MLResult ML_CALL MLMediaExtractorGetSampleTrackIndex(MLHandle handle, int64_t *out_track_index);

ML_API MLResult ML_CALL MLMediaExtractorGetSampleTime(MLHandle handle, int64_t *out_sample_time);

ML_API MLResult ML_CALL MLMediaExtractorGetSampleFlags(MLHandle handle, int *out_sample_flags);

ML_API MLResult ML_CALL MLMediaExtractorGetSampleCryptoInfo(MLHandle handle, MLHandle *out_info_handle);

ML_API MLResult ML_CALL MLMediaExtractorReleaseCryptoInfo(MLHandle handle, MLHandle *inout_info_handle);

ML_API MLResult ML_CALL MLMediaExtractorGetCachedDuration(MLHandle handle, int64_t *out_cached_duration);

ML_API MLResult ML_CALL MLMediaExtractorHasCacheReachedEOS(MLHandle handle);

ML_API MLResult ML_CALL MLMediaExtractorGetPSSHInfoCount(MLHandle handle, size_t *out_index);

ML_API MLResult ML_CALL MLMediaExtractorGetPSSHInfo(MLHandle handle, size_t index, MLMediaExtractorPSSHEntry *out_pssh_entry);

ML_API MLResult ML_CALL MLMediaExtractorReleasePSSHInfo(MLHandle handle, MLMediaExtractorPSSHEntry *pssh_entry);

ML_EXTERN_C_END
```



