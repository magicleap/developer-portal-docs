---
title: MLMediaPlayerOnFramePackingInfo
summary: mediaplayer frame packing callback info. 

---

# MLMediaPlayerOnFramePackingInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaPlayer frame packing callback Info.  [More...](#detailed-description)


`#include <ml_media_player.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMediaFramePackingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode) | **[mode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_frame_packing_info.md#mlmediaframepackingmode-mode)**  |
| [MLMediaFramePackingFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingflags) | **[flags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_frame_packing_info.md#mlmediaframepackingflags-flags)**  |
| void * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_frame_packing_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaPlayerOnFramePackingInfo;
```

MediaPlayer frame packing callback Info. 




**API Level:**
  * 8




-----------
## Public Attributes Documentation

### mode {#mlmediaframepackingmode-mode}

```cpp
MLMediaFramePackingMode mode;
```



| Type | Description |
|--|--|
| [MLMediaFramePackingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode) | Frame Packing Arrangement for stereoscopic videos.  |


Frame packing more. 





-----------

### flags {#mlmediaframepackingflags-flags}

```cpp
MLMediaFramePackingFlags flags;
```



| Type | Description |
|--|--|
| [MLMediaFramePackingFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingflags) | Frame Packing Arrangement flags for stereoscopic videos.  |


Frame packing flag. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to [MLMediaPlayerSetEventCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerseteventcallbacksex). 





-----------


