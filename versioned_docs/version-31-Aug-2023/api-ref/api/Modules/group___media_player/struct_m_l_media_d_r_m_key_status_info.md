---
title: MLMediaDRMKeyStatusInfo
summary: mediadrm session keys status change info. 

---

# MLMediaDRMKeyStatusInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaDRM session keys status change info.  [More...](#detailed-description)


`#include <ml_media_drm.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * | **[session_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status_info.md#mlmediadrmbytearray-session-id)**  |
| size_t | **[key_status_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status_info.md#size-t-key-status-count)**  |
| [MLMediaDRMKeyStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status.md) * | **[key_status](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status_info.md#mlmediadrmkeystatus-key-status)**  |
| bool | **[has_new_usable_key](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status_info.md#bool-has-new-usable-key)** <br></br>Indicates if a key has been added that is usable, which may trigger an attempt to resume playback on the media stream if it is currently blocked waiting for a key.  |
| void * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status_info.md#void-data)**  |

## Detailed Description

```cpp
struct MLMediaDRMKeyStatusInfo;
```

MediaDRM session keys status change info. 




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

### key_status_count {#size-t-key-status-count}

```cpp
size_t key_status_count;
```


Number of KeyStatus entries. 





-----------

### key_status {#mlmediadrmkeystatus-key-status}

```cpp
MLMediaDRMKeyStatus * key_status;
```



| Type | Description |
|--|--|
| [MLMediaDRMKeyStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status.md) * | MediaDRM key status.  |


Pointer to array of [MLMediaDRMKeyStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status.md) of size key_status_count. 





-----------

### has_new_usable_key {#bool-has-new-usable-key}

```cpp
bool has_new_usable_key;
```

Indicates if a key has been added that is usable, which may trigger an attempt to resume playback on the media stream if it is currently blocked waiting for a key. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to MLMediaDRMPlayerSetEventCallbacksEx(). 





-----------


