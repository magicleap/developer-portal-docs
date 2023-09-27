---
title: MLMediaPlayerTrackDRMInfo
summary: mediaplayer drm info for a media track. 

---

# MLMediaPlayerTrackDRMInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaPlayer DRM Info for a Media Track.  [More...](#detailed-description)


`#include <ml_media_player.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| size_t | **[pssh_info_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md#size-t-pssh-info-count)**  |
| [MLMediaPlayerPSSHEntry](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaplayerpsshentry) * | **[pssh_info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md#mlmediaplayerpsshentry-pssh-info)**  |
| size_t | **[uuid_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md#size-t-uuid-count)**  |
| [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) * | **[UUIDs](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md#mluuid-uuids)**  |
| [MLMediaPlayerTrackType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype) | **[track_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md#mlmediaplayertracktype-track-type)**  |

## Detailed Description

```cpp
struct MLMediaPlayerTrackDRMInfo;
```

MediaPlayer DRM Info for a Media Track. 




**API Level:**
  * 2




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


Pointer to array of [MLMediaPlayerPSSHEntry](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaplayerpsshentry) of size pssh_info_count. 





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


Pointer to array of [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) of size uuid_count. 





-----------

### track_type {#mlmediaplayertracktype-track-type}

```cpp
MLMediaPlayerTrackType track_type;
```


Media track type, can be either audio or video. 





-----------


