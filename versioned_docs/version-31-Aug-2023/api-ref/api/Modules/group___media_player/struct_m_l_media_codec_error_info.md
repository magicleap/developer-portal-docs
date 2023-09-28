---
title: MLMediaCodecErrorInfo
summary: mediacodec output format information. 

---

# MLMediaCodecErrorInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaCodec Output Format information.  [More...](#detailed-description)


`#include <ml_media_codec.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int | **[error_code](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_error_info.md#int-error-code)**  |
| void * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_error_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaCodecErrorInfo;
```

MediaCodec Output Format information. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### error_code {#int-error-code}

```cpp
int error_code;
```


Error code. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to [MLMediaCodecSetCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsetcallbacksex). 





-----------


