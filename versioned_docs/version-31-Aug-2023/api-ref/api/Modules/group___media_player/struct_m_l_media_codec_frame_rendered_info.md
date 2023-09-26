---
title: MLMediaCodecFrameRenderedInfo
summary: mediacodec output frame rendered information. 

---

# MLMediaCodecFrameRenderedInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaCodec Output Frame Rendered information.  [More...](#detailed-description)


`#include <ml_media_codec.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int64_t | **[presentation_time_us](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_frame_rendered_info.md#int64-t-presentation-time-us)**  |
| int64_t | **[system_time_nano](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_frame_rendered_info.md#int64-t-system-time-nano)**  |
| void * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_frame_rendered_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaCodecFrameRenderedInfo;
```

MediaCodec Output Frame Rendered information. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### presentation_time_us {#int64-t-presentation-time-us}

```cpp
int64_t presentation_time_us;
```


The presentation time (media time) in microseconds of the frame rendered. 





-----------

### system_time_nano {#int64-t-system-time-nano}

```cpp
int64_t system_time_nano;
```


System time when the frame was rendered. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to [MLMediaCodecSetOutputFrameListener()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsetoutputframelistener). 





-----------


