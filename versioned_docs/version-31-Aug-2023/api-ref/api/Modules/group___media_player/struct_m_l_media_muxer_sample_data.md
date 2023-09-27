---
title: MLMediaMuxerSampleData
summary: data type that encapsulates sample data to be written in to mlmediamuxer. 

---

# MLMediaMuxerSampleData

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



Data type that encapsulates sample data to be written in to MLMediaMuxer.  [More...](#detailed-description)


`#include <ml_media_muxer.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md#uint32-t-version)**  |
| size_t | **[track_index](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md#size-t-track-index)** <br></br>The track index number, to which to write the sample data into. This should be one of the number returned by [MLMediaMuxerAddTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxeraddtrack).  |
| const uint8_t * | **[buffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md#const-uint8-t-buffer)**  |
| size_t | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md#size-t-size)**  |
| int64_t | **[time_us](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md#int64-t-time-us)**  |
| uint32_t | **[flags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md#uint32-t-flags)** <br></br>The flag about the data. The following flags are supported: [MLMediaCodecBufferFlag_KeyFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-keyframe): if its a sync/key frame. [MLMediaCodecBufferFlag_EOS](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-eos): To notify end of stream. [MLMediaCodecBufferFlag_MuxerData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-muxerdata): if it is muxer data (only Exif data block is supported).  |

## Detailed Description

```cpp
struct MLMediaMuxerSampleData;
```

Data type that encapsulates sample data to be written in to MLMediaMuxer. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### track_index {#size-t-track-index}

```cpp
size_t track_index;
```

The track index number, to which to write the sample data into. This should be one of the number returned by [MLMediaMuxerAddTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxeraddtrack). 





-----------

### buffer {#const-uint8-t-buffer}

```cpp
const uint8_t * buffer;
```


Pointer to the sample buffer/data. 





-----------

### size {#size-t-size}

```cpp
size_t size;
```


Size of the sample buuffer/data. 





-----------

### time_us {#int64-t-time-us}

```cpp
int64_t time_us;
```


The buffer's time stamp in microseconds. 





-----------

### flags {#uint32-t-flags}

```cpp
uint32_t flags;
```

The flag about the data. The following flags are supported: [MLMediaCodecBufferFlag_KeyFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-keyframe): if its a sync/key frame. [MLMediaCodecBufferFlag_EOS](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-eos): To notify end of stream. [MLMediaCodecBufferFlag_MuxerData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-muxerdata): if it is muxer data (only Exif data block is supported). 





-----------


