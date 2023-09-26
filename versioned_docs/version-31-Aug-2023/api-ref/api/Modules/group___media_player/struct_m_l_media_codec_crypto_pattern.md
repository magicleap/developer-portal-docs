---
title: MLMediaCodecCryptoPattern
summary: metadata describing an encryption pattern for the protected bytes in a subsample. 

---

# MLMediaCodecCryptoPattern

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



Metadata describing an encryption pattern for the protected bytes in a subsample.  [More...](#detailed-description)


`#include <ml_media_codec.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| size_t | **[encrypt_blocks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_pattern.md#size-t-encrypt-blocks)**  |
| size_t | **[skip_blocks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_pattern.md#size-t-skip-blocks)**  |

## Detailed Description

```cpp
struct MLMediaCodecCryptoPattern;
```

Metadata describing an encryption pattern for the protected bytes in a subsample. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### encrypt_blocks {#size-t-encrypt-blocks}

```cpp
size_t encrypt_blocks;
```


Number of blocks to be encrypted in the pattern. If zero, pattern encryption is in-operative. 





-----------

### skip_blocks {#size-t-skip-blocks}

```cpp
size_t skip_blocks;
```


Number of blocks to be skipped (left clear) in the pattern. If zero, pattern encryption is in-operative. 





-----------


