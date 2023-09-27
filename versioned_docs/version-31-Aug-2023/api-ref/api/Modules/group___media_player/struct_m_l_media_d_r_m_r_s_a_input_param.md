---
title: MLMediaDRMRSAInputParam

---

# MLMediaDRMRSAInputParam

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



 [More...](#detailed-description)


`#include <ml_media_drm.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| char * | **[algorithm](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_r_s_a_input_param.md#char-algorithm)** <br></br>The MAC algorithm used for padding/signing. The only supported algorithm now is "HmacSHA256".  |
| [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * | **[wrapped_rsa_key](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_r_s_a_input_param.md#mlmediadrmbytearray-wrapped-rsa-key)**  |

## Detailed Description

```cpp
struct MLMediaDRMRSAInputParam;
```


Data type that encapsulates algorithm, wrapped_key for RSA operation. 





-----------
## Public Attributes Documentation

### algorithm {#char-algorithm}

```cpp
char * algorithm;
```

The MAC algorithm used for padding/signing. The only supported algorithm now is "HmacSHA256". 





-----------

### wrapped_rsa_key {#mlmediadrmbytearray-wrapped-rsa-key}

```cpp
MLMediaDRMByteArray * wrapped_rsa_key;
```


The wrapped RSA key to be used. 





-----------


