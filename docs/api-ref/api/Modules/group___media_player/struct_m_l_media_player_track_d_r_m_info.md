---
title: MLMediaPlayerTrackDRMInfo
summary: mediaplayer drm info for a media track. 

---

# MLMediaPlayerTrackDRMInfo

**Module:** **[Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaPlayer DRM Info for a Media Track.  [More...](#detailed-description)


`#include <ml_media_player.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| size_t | **[pssh_info_count](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md#size-t-pssh-info-count)**  |
| [MLMediaPlayerPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaplayerpsshentry) * | **[pssh_info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md#mlmediaplayerpsshentry-pssh-info)**  |
| size_t | **[uuid_count](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md#size-t-uuid-count)**  |
| [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) * | **[UUIDs](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md#mluuid-uuids)**  |
| [MLMediaPlayerTrackType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype) | **[track_type](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md#mlmediaplayertracktype-track-type)**  |

## Detailed Description

```cpp
struct MLMediaPlayerTrackDRMInfo;
```

MediaPlayer DRM Info for a Media Track. 




**API Level:
 2**
  * 




-----------
## Public Attributes Documentation

### pssh_info_count {#size-t-pssh-info-count}

```cpp
size_t pssh_info_count;
```


Number of PSSH entries. 





-----------

### pssh_info {#mlmediaplayerpsshentry-pssh-info}

```cpp
MLMediaPlayerPSSHEntry * pssh_info;
```


Pointer to array of [MLMediaPlayerPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaplayerpsshentry) of size pssh_info_count. 





-----------

### uuid_count {#size-t-uuid-count}

```cpp
size_t uuid_count;
```


Number of supported DRM UUID entries. 





-----------

### UUIDs {#mluuid-uuids}

```cpp
MLUUID * UUIDs;
```


Pointer to array of [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) of size uuid_count. 





-----------

### track_type {#mlmediaplayertracktype-track-type}

```cpp
MLMediaPlayerTrackType track_type;
```


Media track type, can be either audio or video. 





-----------

