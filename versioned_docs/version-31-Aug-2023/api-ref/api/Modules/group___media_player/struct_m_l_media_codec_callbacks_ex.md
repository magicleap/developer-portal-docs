---
title: MLMediaCodecCallbacksEx
summary: client is expected to implement these callbacks and take proper actions where appropriate. 

---

# MLMediaCodecCallbacksEx

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



Callbacks for notifying asynchronously of various codec events to the user/client. If user intends to use codec in asynchronous mode, then the user/client is expected to implement these callbacks and take proper actions where appropriate.  [More...](#detailed-description)


`#include <ml_media_codec.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md#uint32-t-version)**  |
| void(*)(MLHandle media_codec, const MLMediaCodecInputBufferInfo *info) | **[on_input_buffer_available](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md#void-on-input-buffer-available)** <br></br>This callback function is invoked when an input buffer becomes available.  |
| void(*)(MLHandle media_codec, const MLMediaCodecOutputBufferInfo *info) | **[on_output_buffer_available](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md#void-on-output-buffer-available)** <br></br>This callback function is invoked when an output buffer.  |
| void(*)(MLHandle media_codec, const MLMediaCodecOutputFormatInfo *info) | **[on_output_format_changed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md#void-on-output-format-changed)** <br></br>This callback function is invoked when the output format has changed.  |
| void(*)(MLHandle media_codec, const MLMediaCodecErrorInfo *info) | **[on_error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md#void-on-error)** <br></br>This callback function is invoked when MLMediaCodec encountered an error.  |

## Detailed Description

```cpp
struct MLMediaCodecCallbacksEx;
```

Callbacks for notifying asynchronously of various codec events to the user/client. If user intends to use codec in asynchronous mode, then the user/client is expected to implement these callbacks and take proper actions where appropriate. 




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

### on_input_buffer_available {#void-on-input-buffer-available}

```cpp
void(*)(MLHandle media_codec, const MLMediaCodecInputBufferInfo *info) on_input_buffer_available;
```

This callback function is invoked when an input buffer becomes available. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_codec, const MLMediaCodecInputBufferInfo *info) | )(MLHandle media_codec, const MLMediaCodecInputBufferInfo *info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_codec|MLMediaCodec instance for which callback was called. |
|  |info|Input buffer info as [MLMediaCodecInputBufferInfo()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodecinputbufferinfo). |
This should not be set to NULL as codec will not function properly if client has no means to specify incoming input buffers.



:::note
Client should _not_ call MLMediaCodec APIs from within this callback but rather set internal flags or use synchronization mechanisms to wake up another thread that will queue encoded data into decoder.
:::



-----------

### on_output_buffer_available {#void-on-output-buffer-available}

```cpp
void(*)(MLHandle media_codec, const MLMediaCodecOutputBufferInfo *info) on_output_buffer_available;
```

This callback function is invoked when an output buffer. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_codec, const MLMediaCodecOutputBufferInfo *info) | )(MLHandle media_codec, const MLMediaCodecOutputBufferInfo *info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_codec|MLMediaCodec instance for which callback was called. |
|  |info|Output buffer info as [MLMediaCodecOutputBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_buffer_info.md). |
This should not be set to NULL as codec will not function properly. Typical implementation on on_output_buffer_available is simply to 1) render the buffer to audio subsystem [if codec is audio] 2) release-and-render-to-surface with MLMediaCodecReleaseOutputBuffer(.., true) [if codec is video].



:::note
Client should _not_ call MLMediaCodec APIs from within this callback but rather set internal flags or use synchronization mechanisms to wake up another thread that will dequeue and release the buffer.
:::



-----------

### on_output_format_changed {#void-on-output-format-changed}

```cpp
void(*)(MLHandle media_codec, const MLMediaCodecOutputFormatInfo *info) on_output_format_changed;
```

This callback function is invoked when the output format has changed. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_codec, const MLMediaCodecOutputFormatInfo *info) | )(MLHandle media_codec, const MLMediaCodecOutputFormatInfo *info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_codec|MLMediaCodec instance for which callback was called. |
|  |info|Output format info as [MLMediaCodecOutputFormatInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_format_info.md). |
This can be set to NULL if client is not interested in receiving this callback.



:::note
Client should _not_ call MLMediaCodec APIs from within this callback but rather set internal flags or use synchronization mechanisms to wake up another thread that will handle the change.
:::



-----------

### on_error {#void-on-error}

```cpp
void(*)(MLHandle media_codec, const MLMediaCodecErrorInfo *info) on_error;
```

This callback function is invoked when MLMediaCodec encountered an error. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_codec, const MLMediaCodecErrorInfo *info) | )(MLHandle media_codec, const MLMediaCodecErrorInfo *info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_codec|MLMediaCodec instance for which callback was called. |
|  |info|Codec error info as [MLMediaCodecErrorInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_error_info.md). |
This can be set to NULL if client is not interested in receiving this callback.



:::note
Client should _not_ call MLMediaCodec APIs from within this callback.
:::



-----------


