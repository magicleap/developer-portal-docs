---
title: MLMediaPlayerOnErrorInfo
summary: mediaplayer error callback info. 

---

# MLMediaPlayerOnErrorInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaPlayer Error callback Info.  [More...](#detailed-description)


`#include <ml_media_player.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[result](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_error_info.md#mlresult-result)**  |
| void * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_error_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaPlayerOnErrorInfo;
```

MediaPlayer Error callback Info. 




**API Level:**
  * 2




-----------
## Public Attributes Documentation

### result {#mlresult-result}

```cpp
MLResult result;
```


Error/result code indicating failure reason. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to [MLMediaPlayerSetEventCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerseteventcallbacksex). 





-----------


