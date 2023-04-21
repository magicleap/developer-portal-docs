---
title: MLMediaDRMKeyStatus
summary: mediadrm key status. 

---

# MLMediaDRMKeyStatus

**Module:** **[Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md)**



MediaDRM key status.  [More...](#detailed-description)


`#include <ml_media_drm.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) | **[key_id](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status.md#mlmediadrmbytearray-key-id)**  |
| [MLMediaDRMKeyStatusCode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeystatuscode) | **[status_code](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status.md#mlmediadrmkeystatuscode-status-code)**  |

## Detailed Description

```cpp
struct MLMediaDRMKeyStatus;
```

MediaDRM key status. 




**API Level:\n 20**
  * 




-----------
## Public Attributes Documentation

### key_id {#mlmediadrmbytearray-key-id}

```cpp
MLMediaDRMByteArray key_id;
```


KeyID that belongs to one of th DRM session key. 





-----------

### status_code {#mlmediadrmkeystatuscode-status-code}

```cpp
MLMediaDRMKeyStatusCode status_code;
```



| Type | Description |
|--|--|
| [MLMediaDRMKeyStatusCode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeystatuscode) | Status code associated with a DRM session key.  |


Status code of the corresponding key. 





-----------

