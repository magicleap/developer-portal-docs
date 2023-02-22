---
title: MLMediaDRMHMACInputParam

---

# MLMediaDRMHMACInputParam

**Module:** **[Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md)**



 [More...](#detailed-description)


`#include <ml_media_drm.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| char * | **[algorithm](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md#char--algorithm)** <br></br>The MAC algorithm used for the MAC-HASH operation. "HmacSHA256" is the only supported algorithm now.  |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * | **[key_set_id](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md#mlmediadrmbytearray-key-set-id)**  |

## Detailed Description

```cpp
struct MLMediaDRMHMACInputParam;
```


Data type that encapsulates algorithm, key_set_id for HMAC based Sign/Verify. 





-----------
## Public Attributes Documentation

### algorithm {#char--algorithm}

```cpp
char * algorithm;
```

The MAC algorithm used for the MAC-HASH operation. "HmacSHA256" is the only supported algorithm now. 





-----------

### key_set_id {#mlmediadrmbytearray-key-set-id}

```cpp
MLMediaDRMByteArray * key_set_id;
```


The identifier for the key to be used. 





-----------

