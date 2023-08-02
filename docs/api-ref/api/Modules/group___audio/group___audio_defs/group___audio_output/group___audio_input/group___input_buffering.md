---
title: Buffering

---

# Buffering

**Module:** **[Audio](/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Audio Output](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_output.md)** **/** **[Audio Input](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___audio_input.md)**

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetBufferedInputDefaults](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudiogetbufferedinputdefaults)**(uint32_t channel_count, uint32_t samples_per_second, [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * out_format, uint32_t * out_recommended_size_in_bytes, uint32_t * out_min_size_in_bytes)<br></br>Returns the preferred (i.e. best performing) settings for buffered input.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetBufferedInputLatency](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudiogetbufferedinputlatency)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float * out_latency_in_msec)<br></br>Returns the latency for a sound input.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetInputBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudiogetinputbuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLAudioBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) * out_buf)<br></br>Returns a full buffer containing captured audio data.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioReleaseInputBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudioreleaseinputbuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Releases a buffer once it has been read.  |

## Detailed Description


BUFFERING. 





-----------


## Functions Documentation

### MLAudioGetBufferedInputDefaults {#mlresult-mlaudiogetbufferedinputdefaults}

```cpp
MLResult MLAudioGetBufferedInputDefaults(
    uint32_t channel_count,
    uint32_t samples_per_second,
    MLAudioBufferFormat * out_format,
    uint32_t * out_recommended_size_in_bytes,
    uint32_t * out_min_size_in_bytes
)
```

Returns the preferred (i.e. best performing) settings for buffered input. 

**Parameters**

|  |   |   |
|--|--|--|
| uint32_t |channel_count|Number of audio channels (e.g. 2 for stereo). |
| uint32_t |samples_per_second|Sample rate for the buffered input. |
| [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * |out_format|Recommended Settings for [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md). |
| uint32_t * |out_recommended_size_in_bytes|Recommended size for the buffers. |
| uint32_t * |out_min_size_in_bytes|Minimum allowable size for the buffers.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the preferred settings for buffered input. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 





**API Level:**
  * 7




-----------

### MLAudioGetBufferedInputLatency {#mlresult-mlaudiogetbufferedinputlatency}

```cpp
MLResult MLAudioGetBufferedInputLatency(
    MLHandle handle,
    float * out_latency_in_msec
)
```

Returns the latency for a sound input. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound input. |
| float * |out_latency_in_msec|Indicates the latency in milliseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the latency for sound input. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


This function returns the latency between the time a sound occurs in the real world and the time it becomes available via MLAudioGetInputBuffer.




**API Level:**
  * 7




-----------

### MLAudioGetInputBuffer {#mlresult-mlaudiogetinputbuffer}

```cpp
MLResult MLAudioGetInputBuffer(
    MLHandle handle,
    MLAudioBuffer * out_buf
)
```

Returns a full buffer containing captured audio data. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound input. |
| [MLAudioBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) * |out_buf|[MLAudioBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) containing the buf to read from.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned full buffer containing captured audio data. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_BufferNotReady|Failed because buffer was not ready. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


This function returns a buffer when one of the input buffers is full and needs to be read. It is possible to call this function in a polling fashion. However for greater efficiency it is recommended to provide a callback to the 'create' function (in which case this function may be called from within the callback).




**API Level:**
  * 7




-----------

### MLAudioReleaseInputBuffer {#mlresult-mlaudioreleaseinputbuffer}

```cpp
MLResult MLAudioReleaseInputBuffer(
    MLHandle handle
)
```

Releases a buffer once it has been read. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound input.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released buffer. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_BufferNotReady|Failed because buffer was not ready. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


After receiving a full buffer from MLAudioGetInputBuffer and reading the audio data from that buffer, call this function to indicate that the buffer has been read and can now be re-used.




**API Level:**
  * 7




-----------





