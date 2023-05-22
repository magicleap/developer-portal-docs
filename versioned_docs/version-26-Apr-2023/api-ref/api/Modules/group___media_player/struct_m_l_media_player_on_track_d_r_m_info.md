---
title: MLMediaPlayerOnTrackDRMInfo
summary: mediaplayer track drm info callback info. 

---

# MLMediaPlayerOnTrackDRMInfo

**Module:** **[Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaPlayer Track DRM Info callback Info.  [More...](#detailed-description)


`#include <ml_media_player.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMediaPlayerTrackDRMInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md) * | **[track_info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_track_d_r_m_info.md#mlmediaplayertrackdrminfo-track-info)**  |
| void * | **[data](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_track_d_r_m_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaPlayerOnTrackDRMInfo;
```

MediaPlayer Track DRM Info callback Info. 




**API Level:**
  * 2




-----------
## Public Attributes Documentation

### track_info {#mlmediaplayertrackdrminfo-track-info}

```cpp
MLMediaPlayerTrackDRMInfo * track_info;
```



| Type | Description |
|--|--|
| [MLMediaPlayerTrackDRMInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md) * | MediaPlayer DRM Info for a Media Track.  |


Pointer to [MLMediaPlayerTrackDRMInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md). 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to [MLMediaPlayerSetEventCallbacksEx()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerseteventcallbacksex). 





-----------

