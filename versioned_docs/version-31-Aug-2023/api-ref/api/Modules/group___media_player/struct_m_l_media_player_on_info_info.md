---
title: MLMediaPlayerOnInfoInfo
summary: mediaplayer information callback info. 

---

# MLMediaPlayerOnInfoInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaPlayer Information callback Info.  [More...](#detailed-description)


`#include <ml_media_player.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMediaPlayerInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo) | **[info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_info_info.md#mlmediaplayerinfo-info)**  |
| int | **[extra](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_info_info.md#int-extra)** <br></br>MLMediaPlayerInfo type specific extra information.  |
| void * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_info_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaPlayerOnInfoInfo;
```

MediaPlayer Information callback Info. 




**API Level:**
  * 2




-----------
## Public Attributes Documentation

### info {#mlmediaplayerinfo-info}

```cpp
MLMediaPlayerInfo info;
```



| Type | Description |
|--|--|
| [MLMediaPlayerInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo) | Info and warning codes for the media player framework.  |


Type of informational event. 





-----------

### extra {#int-extra}

```cpp
int extra;
```

MLMediaPlayerInfo type specific extra information. 

When info is MLMediaPlayerInfo_NetworkBandwidth, this holds bandwidth in kbps. It is 0 for others. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to [MLMediaPlayerSetEventCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerseteventcallbacksex). 





-----------


