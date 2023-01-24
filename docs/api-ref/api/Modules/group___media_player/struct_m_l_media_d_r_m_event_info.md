---
title: MLMediaDRMEventInfo
summary: mediadrm event info associated with a session. 

---

# MLMediaDRMEventInfo

**Module:** **[Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaDRM event info associated with a session.  [More...](#detailed-description)


`#include <ml_media_drm.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * | **[session_id](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md#mlmediadrmbytearray-session-id)**  |
| [MLMediaDRMEventType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype) | **[event_type](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md#mlmediadrmeventtype-event-type)**  |
| int | **[extra](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md#int-extra)**  |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * | **[event_data](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md#mlmediadrmbytearray-event-data)**  |
| void * | **[data](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaDRMEventInfo;
```

MediaDRM event info associated with a session. 




**API Level:**
  * 20 




-----------
## Public Attributes Documentation

### session_id {#mlmediadrmbytearray-session-id}

```cpp
MLMediaDRMByteArray * session_id;
```


DRM session id associated with the event. 





-----------

### event_type {#mlmediadrmeventtype-event-type}

```cpp
MLMediaDRMEventType event_type;
```



| Type | Description |
|--|--|
| [MLMediaDRMEventType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype) | Request event types.  |


Type of Media DRM event. 





-----------

### extra {#int-extra}

```cpp
int extra;
```


Extra Secondary error code. 





-----------

### event_data {#mlmediadrmbytearray-event-data}

```cpp
MLMediaDRMByteArray * event_data;
```


Optional data that may be associated with the event. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to MLMediaDRMPlayerSetEventCallbacksEx(). 





-----------

