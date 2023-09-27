---
title: MLMediaDRMEventInfo
summary: mediadrm event info associated with a session. 

---

# MLMediaDRMEventInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaDRM event info associated with a session.  [More...](#detailed-description)


`#include <ml_media_drm.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * | **[session_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md#mlmediadrmbytearray-session-id)**  |
| [MLMediaDRMEventType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype) | **[event_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md#mlmediadrmeventtype-event-type)**  |
| int | **[extra](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md#int-extra)**  |
| [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * | **[event_data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md#mlmediadrmbytearray-event-data)**  |
| void * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md#void-data)**  |

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
| [MLMediaDRMEventType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype) | Request event types.  |


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


