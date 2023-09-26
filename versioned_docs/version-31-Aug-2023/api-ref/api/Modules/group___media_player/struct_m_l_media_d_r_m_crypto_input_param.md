---
title: MLMediaDRMCryptoInputParam

---

# MLMediaDRMCryptoInputParam

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



 [More...](#detailed-description)


`#include <ml_media_drm.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| char * | **[algorithm](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md#char-algorithm)** <br></br>The cipher mode used for the crypto operation. The only supported algorithm now is "AES/CBC/NoPadding".  |
| [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * | **[key_set_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md#mlmediadrmbytearray-key-set-id)**  |
| [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * | **[iv](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md#mlmediadrmbytearray-iv)**  |

## Detailed Description

```cpp
struct MLMediaDRMCryptoInputParam;
```


Data type that encapsulates algorithm, key_set_id and IV for Encryption/Decryption. 





-----------
## Public Attributes Documentation

### algorithm {#char-algorithm}

```cpp
char * algorithm;
```

The cipher mode used for the crypto operation. The only supported algorithm now is "AES/CBC/NoPadding". 





-----------

### key_set_id {#mlmediadrmbytearray-key-set-id}

```cpp
MLMediaDRMByteArray * key_set_id;
```


The identifier for the key to be used. 





-----------

### iv {#mlmediadrmbytearray-iv}

```cpp
MLMediaDRMByteArray * iv;
```


The initial vector used for the crypto operation. 





-----------


