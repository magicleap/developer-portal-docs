---
title: MLMediaDRMRequestMessage
summary: data type that encapsulates either of the following along with an url 

---

# MLMediaDRMRequestMessage

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



Data type that encapsulates either of the following along with an URL:  [More...](#detailed-description)


`#include <ml_media_drm.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) | **[request](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md#mlmediadrmbytearray-request)**  |
| char * | **[default_URL](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md#char-default-url)**  |

## Detailed Description

```cpp
struct MLMediaDRMRequestMessage;
```

Data type that encapsulates either of the following along with an URL: 

For Key Request Message: an opaque key request byte array that should be delivered to the license server.

For Provision Request Message: an opaque provision request byte array that should be delivered to the provisioning server. 





-----------
## Public Attributes Documentation

### request {#mlmediadrmbytearray-request}

```cpp
MLMediaDRMByteArray request;
```


The opaque request byte array. 





-----------

### default_URL {#char-default-url}

```cpp
char * default_URL;
```


The recommended URL to deliver the request to. 





-----------


