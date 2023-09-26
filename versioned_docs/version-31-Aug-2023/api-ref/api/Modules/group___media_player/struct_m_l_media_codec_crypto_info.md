---
title: MLMediaCodecCryptoInfo
summary: iec fdis 23001-72011 common encryption in iso base media file format files. 

---

# MLMediaCodecCryptoInfo

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



Metadata describing the structure of a (at least partially) encrypted input sample. A buffer's data is considered to be partitioned into "subSamples", each subSample starts with a (potentially empty) run of plain, unencrypted bytes followed by a (also potentially empty) run of encrypted bytes. If pattern encryption applies, each of the encrypted runs is encrypted only partly, according to a repeating pattern of "encrypt" and "skip" blocks. This information encapsulates per-sample metadata as outlined in ISO/IEC FDIS 23001-7:2011 "Common encryption in ISO base media file format files".  [More...](#detailed-description)


`#include <ml_media_codec.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md#uint32-t-version)**  |
| size_t | **[number_of_subsamples](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md#size-t-number-of-subsamples)**  |
| [MLMediaCodecCryptoMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccryptomode) | **[crypto_mode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md#mlmediacodeccryptomode-crypto-mode)**  |
| [MLMediaCodecCryptoPattern](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_pattern.md) | **[crypto_pattern](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md#mlmediacodeccryptopattern-crypto-pattern)**  |
| const uint8_t * | **[key](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md#const-uint8-t-key)**  |
| const uint8_t * | **[iv](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md#const-uint8-t-iv)**  |
| const size_t * | **[bytes_of_clear_data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md#const-size-t-bytes-of-clear-data)**  |
| const size_t * | **[bytes_of_encrypted_data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md#const-size-t-bytes-of-encrypted-data)**  |

## Detailed Description

```cpp
struct MLMediaCodecCryptoInfo;
```

Metadata describing the structure of a (at least partially) encrypted input sample. A buffer's data is considered to be partitioned into "subSamples", each subSample starts with a (potentially empty) run of plain, unencrypted bytes followed by a (also potentially empty) run of encrypted bytes. If pattern encryption applies, each of the encrypted runs is encrypted only partly, according to a repeating pattern of "encrypt" and "skip" blocks. This information encapsulates per-sample metadata as outlined in ISO/IEC FDIS 23001-7:2011 "Common encryption in ISO base media file format files". 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### number_of_subsamples {#size-t-number-of-subsamples}

```cpp
size_t number_of_subsamples;
```


The number of subsamples that make up the buffer's contents. 





-----------

### crypto_mode {#mlmediacodeccryptomode-crypto-mode}

```cpp
MLMediaCodecCryptoMode crypto_mode;
```


Cipher Mode associated with the encrypted blocks. 





-----------

### crypto_pattern {#mlmediacodeccryptopattern-crypto-pattern}

```cpp
MLMediaCodecCryptoPattern crypto_pattern;
```



| Type | Description |
|--|--|
| [MLMediaCodecCryptoPattern](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_pattern.md) | Metadata describing an encryption pattern for the protected bytes in a subsample.  |


Encryption pattern used by the subsample. 





-----------

### key {#const-uint8-t-key}

```cpp
const uint8_t * key;
```


16 bytes of Key used for the encrypted blocks. 





-----------

### iv {#const-uint8-t-iv}

```cpp
const uint8_t * iv;
```


16 bytes of Initialization vector used for the encrypted blocks. 





-----------

### bytes_of_clear_data {#const-size-t-bytes-of-clear-data}

```cpp
const size_t * bytes_of_clear_data;
```


An array of size "number_of_subsamples", that contains the number of leading (potentially none, which is 0) unencrypted bytes in each subsample. 





-----------

### bytes_of_encrypted_data {#const-size-t-bytes-of-encrypted-data}

```cpp
const size_t * bytes_of_encrypted_data;
```


An array of size "number_of_subsamples", that contains the number of trailing (potentially none, which is 0) encrypted bytes in each subsample. 





-----------


