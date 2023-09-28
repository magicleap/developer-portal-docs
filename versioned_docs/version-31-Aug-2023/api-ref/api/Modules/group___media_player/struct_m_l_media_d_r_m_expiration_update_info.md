---
title: MLMediaDRMExpirationUpdateInfo
summary: mediadrm expiration update info associated with a session. 

---

# MLMediaDRMExpirationUpdateInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaDRM expiration update info associated with a session.  [More...](#detailed-description)


`#include <ml_media_drm.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * | **[session_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_expiration_update_info.md#mlmediadrmbytearray-session-id)**  |
| uint64_t | **[expiration_time_ms](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_expiration_update_info.md#uint64-t-expiration-time-ms)** <br></br>The new expiration time for the keys in the session. The time is in milliseconds, relative to the Unix epoch. A time of 0 indicates that the keys never expire.  |
| void * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_expiration_update_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaDRMExpirationUpdateInfo;
```

MediaDRM expiration update info associated with a session. 




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

### expiration_time_ms {#uint64-t-expiration-time-ms}

```cpp
uint64_t expiration_time_ms;
```

The new expiration time for the keys in the session. The time is in milliseconds, relative to the Unix epoch. A time of 0 indicates that the keys never expire. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to MLMediaDRMPlayerSetEventCallbacksEx(). 





-----------


