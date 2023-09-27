---
title: MLMediaPlayerOnVideoSizeChangedInfo
summary: mediaplayer video size changed callback info. 

---

# MLMediaPlayerOnVideoSizeChangedInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaPlayer Video Size Changed callback Info.  [More...](#detailed-description)


`#include <ml_media_player.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int | **[width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_video_size_changed_info.md#int-width)**  |
| int | **[height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_video_size_changed_info.md#int-height)**  |
| void * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_video_size_changed_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaPlayerOnVideoSizeChangedInfo;
```

MediaPlayer Video Size Changed callback Info. 




**API Level:**
  * 2




-----------
## Public Attributes Documentation

### width {#int-width}

```cpp
int width;
```


The new surface width. 





-----------

### height {#int-height}

```cpp
int height;
```


The new surface height. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to [MLMediaPlayerSetEventCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerseteventcallbacksex). 





-----------


