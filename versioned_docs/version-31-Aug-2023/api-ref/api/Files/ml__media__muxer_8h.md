---
title: ml_media_muxer.h

---

# ml_media_muxer.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md)** <br></br>Data type that encapsulates sample data to be written in to MLMediaMuxer.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) | **[MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediamuxersampledata)** <br></br>Data type that encapsulates sample data to be written in to MLMediaMuxer.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLMediaMuxerOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat)** <br></br> { <br></br>[MLMediaMuxerOutputFormat_MPEG4](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__muxer_8h.md#enums-mlmediamuxeroutputformat-mpeg4) = 0,<br></br> [MLMediaMuxerOutputFormat_WEBM](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__muxer_8h.md#enums-mlmediamuxeroutputformat-webm) = 1,<br></br> [MLMediaMuxerOutputFormat_3GPP](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__muxer_8h.md#enums-mlmediamuxeroutputformat-3gpp) = 2,<br></br> [MLMediaMuxerOutputFormat_HEIF](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__muxer_8h.md#enums-mlmediamuxeroutputformat-heif) = 3,<br></br> [MLMediaMuxerOutputFormat_OGG](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__muxer_8h.md#enums-mlmediamuxeroutputformat-ogg) = 4,<br></br> [MLMediaMuxerOutputFormat_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__muxer_8h.md#enums-mlmediamuxeroutputformat-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Output formats for MediaMuxer.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLMediaMuxerSampleDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediamuxersampledatainit)**([MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) * inout_sampledata)<br></br>Initializes [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) with default values.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxercreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a MLMediaMuxer instance.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerrelease)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer)<br></br>Release the MLMediaMuxer instance.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerGetSupportedOutputFormats](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedoutputformats)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, const [MLMediaMuxerOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat) * out_format_list[], size_t * out_format_list_size)<br></br>Get a list of all the supported Media Muxer Output Formats on the Platform.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerGetSupportedMimes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedmimes)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, [MLMediaMuxerOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat) format, const char *const * out_mime_list[], size_t * out_mime_list_size)<br></br>Get a list of all the supported mime-types for a given Media Muxer Output Format on the Platform.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerConfigure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerconfigure)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, [MLMediaMuxerOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat) format, const char * path)<br></br>Configure the MLMediaMuxer for a given Output format with output path.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerAddTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxeraddtrack)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_format, size_t * out_track_index)<br></br>Add a track with given format information.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerSetOrientationHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxersetorientationhint)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, int32_t degrees)<br></br>Set the orientation hint for output video playback.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerSetLocation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxersetlocation)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, float latitude, float longitude)<br></br>Set and store the geodata (latitude and longitude) in the output file.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstart)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer)<br></br>Start muxing.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerWriteSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerwritesampledata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, const [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) * data)<br></br>Writes an encoded sample into the muxer.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstop)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer)<br></br>Stop muxing.  |

## Enums Documentation

### MLMediaMuxerOutputFormat {#enums-mlmediamuxeroutputformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaMuxerOutputFormat_MPEG4 |  0| MP4 format. |
| MLMediaMuxerOutputFormat_WEBM |  1| VP8/VORBIS data in a WEBM container. |
| MLMediaMuxerOutputFormat_3GPP |  2| 3gpp format. |
| MLMediaMuxerOutputFormat_HEIF |  3| HEIC data in a HEIF container. |
| MLMediaMuxerOutputFormat_OGG |  4| Opus data in a OGG container. |
| MLMediaMuxerOutputFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Output formats for MediaMuxer. 

This enumarates list of all the possibly supported output formats for the muxer across all the releases/Platform.

Use [MLMediaMuxerGetSupportedOutputFormats](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedoutputformats) to query for all supported Output formats on the Platform.




**API Level:**
  * 20




-----------


## Types Documentation

### MLMediaMuxerSampleData {#struct-mlmediamuxersampledata}

```cpp
typedef struct MLMediaMuxerSampleData MLMediaMuxerSampleData;
```

Data type that encapsulates sample data to be written in to MLMediaMuxer. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md)


**API Level:**
  * 20




-----------


## Functions Documentation

### MLMediaMuxerSampleDataInit {#void-mlmediamuxersampledatainit}

```cpp
static inline void MLMediaMuxerSampleDataInit(
    MLMediaMuxerSampleData * inout_sampledata
)
```

Initializes [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) * |inout_sampledata|SampleData defined by [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) that needs to be initialized. |




-----------

### MLMediaMuxerCreate {#mlresult-mlmediamuxercreate}

```cpp
MLResult MLMediaMuxerCreate(
    MLHandle * out_handle
)
```

Create a MLMediaMuxer instance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Upon successful return will point to handle to the created MLMediaMuxer. Or else, it will point to [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|MLMediaMuxer object creation failed with resource allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaMuxer object was created successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaMuxerRelease {#mlresult-mlmediamuxerrelease}

```cpp
MLResult MLMediaMuxerRelease(
    MLHandle media_muxer
)
```

Release the MLMediaMuxer instance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaMuxer object was released successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaMuxerGetSupportedOutputFormats {#mlresult-mlmediamuxergetsupportedoutputformats}

```cpp
MLResult MLMediaMuxerGetSupportedOutputFormats(
    MLHandle media_muxer,
    const MLMediaMuxerOutputFormat * out_format_list[],
    size_t * out_format_list_size
)
```

Get a list of all the supported Media Muxer Output Formats on the Platform. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance. |
| const [MLMediaMuxerOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat) * |out_format_list|Pointer to MLMediaMuxerOutputFormat. This should not be NULL. |
| size_t * |out_format_list_size|The size of the returned out_format_list. This should not be NULL.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of the parameters are invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully retrieved all the supported Output Formats. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User doesn't own the memory/buffer returned from this API and MUST NOT be freeing or releasing the out_format_list.




**API Level:**
  * 20




-----------

### MLMediaMuxerGetSupportedMimes {#mlresult-mlmediamuxergetsupportedmimes}

```cpp
MLResult MLMediaMuxerGetSupportedMimes(
    MLHandle media_muxer,
    MLMediaMuxerOutputFormat format,
    const char *const * out_mime_list[],
    size_t * out_mime_list_size
)
```

Get a list of all the supported mime-types for a given Media Muxer Output Format on the Platform. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance. |
| [MLMediaMuxerOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat) |format|The Output format, to which we would like to know all the supported mime-types. The format should be one returned from [MLMediaMuxerGetSupportedOutputFormats](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedoutputformats). |
| const char *const * |out_mime_list|Pointer to array of mime-type (char array). This should not be NULL. |
| size_t * |out_mime_list_size|The size of the returned out_mime_list. This should not be NULL.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully retrieved all the supported Output Formats. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User doesn't own the memory/buffer returned from this API and MUST NOT be freeing or releasing the out_mime_list.




**API Level:**
  * 20




-----------

### MLMediaMuxerConfigure {#mlresult-mlmediamuxerconfigure}

```cpp
MLResult MLMediaMuxerConfigure(
    MLHandle media_muxer,
    MLMediaMuxerOutputFormat format,
    const char * path
)
```

Configure the MLMediaMuxer for a given Output format with output path. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance. |
| [MLMediaMuxerOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat) |format|The format of the muxed output media file. The format should be one returned from [MLMediaMuxerGetSupportedOutputFormats](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedoutputformats). |
| const char * |path|The linux-style path for the output media file. This value cannot be empty or NULL.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed to configure the MLMediaMuxer object with resource allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaMuxer object was configured successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaResult_Unsupported|If the format is not supported.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaMuxerAddTrack {#mlresult-mlmediamuxeraddtrack}

```cpp
MLResult MLMediaMuxerAddTrack(
    MLHandle media_muxer,
    MLHandle media_format,
    size_t * out_track_index
)
```

Add a track with given format information. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_format|Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not. |
| size_t * |out_track_index||
This should be called before [MLMediaMuxerStart()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstart) and after [MLMediaMuxerConfigure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerconfigure).

The following media format keys are supported for Audio/Video and Metadata tracks.



------------------


# | Audio Track                     | Video Track                       | Metadata Track         |

| MLMediaFormat_Key_Mime | MLMediaFormat_Key_Mime | MLMediaFormat_Key_Mime | | MLMediaFormat_Key_Sample_Rate | MLMediaFormat_Key_Width | | | MLMediaFormat_Key_Channel_Count | MLMediaFormat_Key_Height | | | MLMediaFormat_Key_CSD0 | MLMediaFormat_Key_Bt_Rate | | | MLMediaFormat_Key_CSD1 | MLMediaFormat_Key_Frame_Rate | | | | MLMediaFormat_Key_Color_Range | | | | MLMediaFormat_Key_Color_Standard | | | | MLMediaFormat_Key_Color_Transfer | | | | MLMediaFormat_Key_HDR_Static_Info | | | | MLMediaFormat_Key_CSD0 | | 


# |                                 | MLMediaFormat_Key_CSD1            |                        |

[MLMediaMuxerGetSupportedMimes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedmimes) can be used to query for all the supported MLMediaFormat_Key_Mime for a given Output Format.

While MLMediaFormat_Key_Mime is must for all tracks, some of the keys aren't mandatory. For Audio track, MLMediaFormat_Key_SAMPLE_RATE and MLMediaFormat_Key_CHANNEL_COUNT is must. For Video track, MLMediaFormat_Key_WIDTH anb MLMediaFormat_Key_HEIGHT are must.

Requierment of providing csd (Codec Specific Data) through MediaFormat is optional for some audio/video mimes where as it is mandatory for some other ones (for example vorbis).

With mp4 container following audio/video and metadata mime types can be supported.



------------------


# | Audio Mimes      | Video Mimes     | Metadata Mimes         |

| audio/3gpp | video/3gpp | application/ | | audio/mp4a-latm | video/mp4v-es | image/vnd.android.heic | | audio/amr-wb | video/avc | | 


# |                  | video/hevc      |                        |

With Webm container following audio/video mime types can be supported.



------------------


# | Audio Mimes      | Video Mimes           |

| audio/vorbis | video/x-vnd.on2.vp8 | 


# | audio/opus       | video/x-vnd.on2.vp9   |

With Ogg container, only supported mime is "audio/opus".

If a mime passed through the MLMediaFormat is not supported, it will return MLMediaResult_Unsupported.

API Level:\n 20

media_muxerHandle to the MLMediaMuxer instance. 

media_format[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat that contains the track's format. 

out_track_indexUpon successful return, this will conatin the index of the track added.

MLResult_InvalidParamOne of the parameters is invalid. 

MLResult_OkIf the operation completes successfully. 

MLResult_UnspecifiedFailureThe operation failed with an unspecified error. 

MLMediaGenericResult_InvalidOperationThe operation is invalid. 

MLMediaResult_UnsupportedIf one of the keys in the format is not supported.

Required PermissionsNone 





-----------

### MLMediaMuxerSetOrientationHint {#mlresult-mlmediamuxersetorientationhint}

```cpp
MLResult MLMediaMuxerSetOrientationHint(
    MLHandle media_muxer,
    int32_t degrees
)
```

Set the orientation hint for output video playback. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance. |
| int32_t |degrees|The rotation degrees. It has to be either 0, 90, 180 or 270.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the operation completes successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|The operation is invalid.|
**Required Permissions**:

  * None 


This should be called before [MLMediaMuxerStart()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstart) and after [MLMediaMuxerConfigure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerconfigure).

Calling this method will not rotate the video frame when muxer is generating the file, but add a composition matrix containing the rotation angle in the output video if the output format is MLMediaMuxerOutputFormat_MPEG4 so that a video player can choose the proper orientation for playback.

Note that some video players may choose to ignore the composition matrix in a video during playback. By default, the rotation degree is 0.




**API Level:**
  * 20




-----------

### MLMediaMuxerSetLocation {#mlresult-mlmediamuxersetlocation}

```cpp
MLResult MLMediaMuxerSetLocation(
    MLHandle media_muxer,
    float latitude,
    float longitude
)
```

Set and store the geodata (latitude and longitude) in the output file. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance. |
| float |latitude|The latitude in degree. Its value must be in the range [-90, 90]. |
| float |longitude|The longitude in degree. Its value must be in the range [-180, 180].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the operation completes successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|The operation is invalid.|
**Required Permissions**:

  * None 


This should be called before [MLMediaMuxerStart()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstart) and after [MLMediaMuxerConfigure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerconfigure).

The geodata is stored in udta box if the output format is MLMediaMuxerOutputFormat_MPEG4, and is ignored for other output formats. The geodata is stored according to ISO-6709 standard.




**API Level:**
  * 20




-----------

### MLMediaMuxerStart {#mlresult-mlmediamuxerstart}

```cpp
MLResult MLMediaMuxerStart(
    MLHandle media_muxer
)
```

Start muxing. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the operation completes successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|The operation is invalid.|
**Required Permissions**:

  * None 


Make sure all the tracks have been added ([MLMediaMuxerAddTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxeraddtrack)) before calling this.




**API Level:**
  * 20




-----------

### MLMediaMuxerWriteSampleData {#mlresult-mlmediamuxerwritesampledata}

```cpp
MLResult MLMediaMuxerWriteSampleData(
    MLHandle media_muxer,
    const MLMediaMuxerSampleData * data
)
```

Writes an encoded sample into the muxer. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance. |
| const [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) * |data|The sample data to be written encapsulated in [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the operation completes successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|The operation is invalid.|
**Required Permissions**:

  * None 


The application needs to make sure that the samples are written into the right tracks. Also, it needs to make sure the samples for each track are written in chronological order (e.g. in the order they are provided by the encoder).

For MPEG4 media format, the duration of the last sample in a track can be set by passing an additional empty buffer) with [MLMediaCodecBufferFlag_EOS](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-eos) flag and a suitable presentation timestamp set in time_us (of [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) structure) as the last sample of that track. This last sample's presentation timestamp shall be a sum of the presentation timestamp and the duration preferred for the original last sample. If no explicit END_OF_STREAM sample was passed, then the duration of the last sample would be the same as that of the sample before that.

The buffer can be reused once this method returns.




**API Level:**
  * 20




-----------

### MLMediaMuxerStop {#mlresult-mlmediamuxerstop}

```cpp
MLResult MLMediaMuxerStop(
    MLHandle media_muxer
)
```

Stop muxing. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the operation completes successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|The operation is invalid.|
**Required Permissions**:

  * None 


Once the muxer stops, it can not be restarted.




**API Level:**
  * 20




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2021 Magic Leap, Inc. All Rights Reserved.
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

ML_EXTERN_C_BEGIN

typedef enum MLMediaMuxerOutputFormat {
  MLMediaMuxerOutputFormat_MPEG4 = 0,
  MLMediaMuxerOutputFormat_WEBM  = 1,
  MLMediaMuxerOutputFormat_3GPP  = 2,
  MLMediaMuxerOutputFormat_HEIF  = 3,
  MLMediaMuxerOutputFormat_OGG   = 4,
  MLMediaMuxerOutputFormat_Ensure32Bits = 0x7FFFFFFF
} MLMediaMuxerOutputFormat;

typedef struct MLMediaMuxerSampleData {
  uint32_t version;
  size_t track_index;
  const uint8_t *buffer;
  size_t size;
  int64_t time_us;
  uint32_t flags;
} MLMediaMuxerSampleData;

ML_STATIC_INLINE void MLMediaMuxerSampleDataInit(MLMediaMuxerSampleData *inout_sampledata) {
  if (inout_sampledata) {
    inout_sampledata->version = 1;
    inout_sampledata->track_index = 0;
    inout_sampledata->buffer = NULL;
    inout_sampledata->size = 0;
    inout_sampledata->time_us = 0;
    inout_sampledata->flags = 0;
  }
}

ML_API MLResult ML_CALL MLMediaMuxerCreate(MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaMuxerRelease(MLHandle media_muxer);

ML_API MLResult ML_CALL MLMediaMuxerGetSupportedOutputFormats(MLHandle media_muxer, const MLMediaMuxerOutputFormat *out_format_list[], size_t *out_format_list_size);

ML_API MLResult ML_CALL MLMediaMuxerGetSupportedMimes(MLHandle media_muxer, MLMediaMuxerOutputFormat format, const char *const *out_mime_list[], size_t *out_mime_list_size);

ML_API MLResult ML_CALL MLMediaMuxerConfigure(MLHandle media_muxer, MLMediaMuxerOutputFormat format, const char *path);

ML_API MLResult ML_CALL MLMediaMuxerAddTrack(MLHandle media_muxer, MLHandle media_format, size_t *out_track_index);

ML_API MLResult ML_CALL MLMediaMuxerSetOrientationHint(MLHandle media_muxer, int32_t degrees);

ML_API MLResult ML_CALL MLMediaMuxerSetLocation(MLHandle media_muxer, float latitude, float longitude);

ML_API MLResult ML_CALL MLMediaMuxerStart(MLHandle media_muxer);

ML_API MLResult ML_CALL MLMediaMuxerWriteSampleData(MLHandle media_muxer, const MLMediaMuxerSampleData *data);

ML_API MLResult ML_CALL MLMediaMuxerStop(MLHandle media_muxer);

ML_EXTERN_C_END
```




