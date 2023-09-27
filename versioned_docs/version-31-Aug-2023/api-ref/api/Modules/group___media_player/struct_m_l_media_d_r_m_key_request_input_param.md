---
title: MLMediaDRMKeyRequestInputParam

---

# MLMediaDRMKeyRequestInputParam

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



 [More...](#detailed-description)


`#include <ml_media_drm.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * | **[init_data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_request_input_param.md#mlmediadrmbytearray-init-data)** <br></br>The container-specific data, its meaning is interpreted based on the mime-type provided in the mime_type parameter. It could contain, for example, the content ID, key ID or other data obtained from the content metadata that is required in generating the key request.  |
| char * | **[mime_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_request_input_param.md#char-mime-type)**  |
| [MLMediaDRMKeyType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeytype) | **[key_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_request_input_param.md#mlmediadrmkeytype-key-type)** <br></br>The type of the request. The request may be to acquire keys for streaming or offline content, or to release previously acquired keys, which are identified by a key_set_id.  |
| [MLMediaDRMKeyValueArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) * | **[optional_params](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_request_input_param.md#mlmediadrmkeyvaluearray-optional-params)** <br></br>Optional parameters included in the key request message to allow a client application to provide additional message parameters to the server.  |

## Detailed Description

```cpp
struct MLMediaDRMKeyRequestInputParam;
```


Data type that encapsulates Key Request input arguments. 





-----------
## Public Attributes Documentation

### init_data {#mlmediadrmbytearray-init-data}

```cpp
MLMediaDRMByteArray * init_data;
```

The container-specific data, its meaning is interpreted based on the mime-type provided in the mime_type parameter. It could contain, for example, the content ID, key ID or other data obtained from the content metadata that is required in generating the key request. 





-----------

### mime_type {#char-mime-type}

```cpp
char * mime_type;
```


The mime type of the content. 





-----------

### key_type {#mlmediadrmkeytype-key-type}

```cpp
MLMediaDRMKeyType key_type;
```

The type of the request. The request may be to acquire keys for streaming or offline content, or to release previously acquired keys, which are identified by a key_set_id. 





-----------

### optional_params {#mlmediadrmkeyvaluearray-optional-params}

```cpp
MLMediaDRMKeyValueArray * optional_params;
```

Optional parameters included in the key request message to allow a client application to provide additional message parameters to the server. 





-----------


