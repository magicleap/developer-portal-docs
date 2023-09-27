---
title: MLMediaCodecOutputBufferInfo
summary: mediacodec output buffer information. 

---

# MLMediaCodecOutputBufferInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaCodec Output buffer information.  [More...](#detailed-description)


`#include <ml_media_codec.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int64_t | **[output_buffer_index](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_buffer_info.md#int64-t-output-buffer-index)**  |
| [MLMediaCodecBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_buffer_info.md) * | **[buffer_info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_buffer_info.md#mlmediacodecbufferinfo-buffer-info)**  |
| void * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_buffer_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaCodecOutputBufferInfo;
```

MediaCodec Output buffer information. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### output_buffer_index {#int64-t-output-buffer-index}

```cpp
int64_t output_buffer_index;
```


The index of the available output buffer. 





-----------

### buffer_info {#mlmediacodecbufferinfo-buffer-info}

```cpp
MLMediaCodecBufferInfo * buffer_info;
```


The buffer info about the available output buffer. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to [MLMediaCodecSetCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsetcallbacksex). 





-----------


