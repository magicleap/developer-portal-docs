---
title: MLMediaCodecInputBufferInfo
summary: mediacodec input buffer information. 

---

# MLMediaCodecInputBufferInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaCodec Input buffer information.  [More...](#detailed-description)


`#include <ml_media_codec.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int64_t | **[input_buffer_index](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_input_buffer_info.md#int64-t-input-buffer-index)**  |
| void * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_input_buffer_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaCodecInputBufferInfo;
```

MediaCodec Input buffer information. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### input_buffer_index {#int64-t-input-buffer-index}

```cpp
int64_t input_buffer_index;
```


The index of the available input buffer. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to [MLMediaCodecSetCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsetcallbacksex). 





-----------


