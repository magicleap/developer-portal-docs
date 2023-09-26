---
title: ml_media_crypto.h

---

# ml_media_crypto.h



## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCryptoCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptocreate)**([MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * data, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a MLMediaCrypto instance from a UUID.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCryptoRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptorelease)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_crypto)<br></br>Release the MLMediaCrypto instance.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCryptoIsCryptoSchemeSupported](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptoiscryptoschemesupported)**([MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, bool * out_supported)<br></br>Query if the given scheme identified by its UUID is supported on this device.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCryptoRequiresSecureDecoderComponent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptorequiressecuredecodercomponent)**(const char * mime_type, bool * out_required)<br></br>Query if the crypto scheme requires the use of a secure decoder to decode data of the given mime type.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCryptoSetMediaDRMSession](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptosetmediadrmsession)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_crypto, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * session_id)<br></br>Associate a #MediaDRM session with this MLMediaCrypto instance.  |



## Functions Documentation

### MLMediaCryptoCreate {#mlresult-mlmediacryptocreate}

```cpp
MLResult MLMediaCryptoCreate(
    MLUUID uuid,
    const MLMediaDRMByteArray * data,
    MLHandle * out_handle
)
```

Create a MLMediaCrypto instance from a UUID. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) |uuid|The universal unique ID of the crypto scheme. uuid must be 16 bytes. |
| const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |data|Opaque initialization data specific to the crypto scheme, This value must never be NULL. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Upon successful return will point to handle to the created MLMediaCrypto. Or else, it will point to [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaCrypto object was created successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCryptoRelease {#mlresult-mlmediacryptorelease}

```cpp
MLResult MLMediaCryptoRelease(
    MLHandle media_crypto
)
```

Release the MLMediaCrypto instance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_crypto|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCrypto.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLMediaCrypto object is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaCrypto object was successfully destroyed. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCryptoIsCryptoSchemeSupported {#mlresult-mlmediacryptoiscryptoschemesupported}

```cpp
MLResult MLMediaCryptoIsCryptoSchemeSupported(
    MLUUID uuid,
    bool * out_supported
)
```

Query if the given scheme identified by its UUID is supported on this device. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) |uuid|Identifies the universal unique ID of the crypto scheme. uuid must be 16 bytes. |
| bool * |out_supported|On successful return contains `true` or `false` based on whether the given crypto scheme is supported or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query has run successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCryptoRequiresSecureDecoderComponent {#mlresult-mlmediacryptorequiressecuredecodercomponent}

```cpp
MLResult MLMediaCryptoRequiresSecureDecoderComponent(
    const char * mime_type,
    bool * out_required
)
```

Query if the crypto scheme requires the use of a secure decoder to decode data of the given mime type. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |mime_type|The MIME type of the media container, e.g. "video/mp4". |
| bool * |out_required|On successful return contains `true` or `false` based on whether the given mime type requires a secure decoder.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query has run successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCryptoSetMediaDRMSession {#mlresult-mlmediacryptosetmediadrmsession}

```cpp
MLResult MLMediaCryptoSetMediaDRMSession(
    MLHandle media_crypto,
    const MLMediaDRMByteArray * session_id
)
```

Associate a #MediaDRM session with this MLMediaCrypto instance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_crypto|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCrypto. |
| const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |session_id|Session ID for the DRM session.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Media DRM session was set successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2017 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#include "ml_media_drm.h"

ML_EXTERN_C_BEGIN

ML_API MLResult ML_CALL MLMediaCryptoCreate(MLUUID uuid, const MLMediaDRMByteArray *data, MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaCryptoRelease(MLHandle media_crypto);

ML_API MLResult ML_CALL MLMediaCryptoIsCryptoSchemeSupported(MLUUID uuid, bool *out_supported);

ML_API MLResult ML_CALL MLMediaCryptoRequiresSecureDecoderComponent(const char *mime_type, bool *out_required);

ML_API MLResult ML_CALL MLMediaCryptoSetMediaDRMSession(MLHandle media_crypto, const MLMediaDRMByteArray *session_id);

ML_EXTERN_C_END
```




