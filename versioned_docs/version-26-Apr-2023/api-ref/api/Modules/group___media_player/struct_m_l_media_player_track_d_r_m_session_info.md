---
title: MLMediaPlayerTrackDRMSessionInfo
summary: drm session information for a mediaplayer track. 

---

# MLMediaPlayerTrackDRMSessionInfo

**Module:** **[Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md)**



DRM Session information for a MediaPlayer Track.  [More...](#detailed-description)


`#include <ml_media_player.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md#uint32-t-version)**  |
| [MLMediaPlayerTrackType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype) | **[track_type](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md#mlmediaplayertracktype-track-type)**  |
| const [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) * | **[uuid](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md#const-uuid)**  |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * | **[session_id](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md#const-session-id)**  |

## Detailed Description

```cpp
struct MLMediaPlayerTrackDRMSessionInfo;
```

DRM Session information for a MediaPlayer Track. 




**API Level:**
  * 2




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```






-----------

### track_type {#mlmediaplayertracktype-track-type}

```cpp
MLMediaPlayerTrackType track_type;
```


Media track type, can be either audio or video. 





-----------

### uuid {#const-uuid}

```cpp
const MLUUID * uuid;
```


UUID of the DRM Scheme of type [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md). 





-----------

### session_id {#const-session-id}

```cpp
const MLMediaDRMByteArray * session_id;
```


DRM Session ID of type [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md). 





-----------

