---
title: MLMediaPlayerOnBufferingUpdateInfo
summary: mediaplayer buffering update callback info. 

---

# MLMediaPlayerOnBufferingUpdateInfo

**Module:** **[Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaPlayer Buffering update callback Info.  [More...](#detailed-description)


`#include <ml_media_player.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int | **[percent](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_buffering_update_info.md#int-percent)**  |
| void * | **[data](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_buffering_update_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaPlayerOnBufferingUpdateInfo;
```

MediaPlayer Buffering update callback Info. 




**API Level:\n 2**
  * 




-----------
## Public Attributes Documentation

### percent {#int-percent}

```cpp
int percent;
```


The new percentage of buffered content. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to [MLMediaPlayerSetEventCallbacksEx()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerseteventcallbacksex). 





-----------

