---
title: MLMediaCodecOutputFormatInfo
summary: mediacodec output format information. 

---

# MLMediaCodecOutputFormatInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaCodec Output Format information.  [More...](#detailed-description)


`#include <ml_media_codec.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[new_output_format](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_format_info.md#mlhandle-new-output-format)**  |
| void * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_format_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaCodecOutputFormatInfo;
```

MediaCodec Output Format information. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### new_output_format {#mlhandle-new-output-format}

```cpp
MLHandle new_output_format;
```



| Type | Description |
|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |


Handle to the new output format. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to [MLMediaCodecSetCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsetcallbacksex). 





-----------


