---
title: Buffering

---

# Buffering

**Module:** **[Audio](/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Audio Output](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_output.md)** **/** **[Acoustics](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md)**

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetBufferedOutputDefaults](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetbufferedoutputdefaults)**(uint32_t channel_count, uint32_t samples_per_second, float max_pitch_change, [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * out_format, uint32_t * out_recommended_size_in_bytes, uint32_t * out_min_size_in_bytes)<br></br>Returns the preferred (i.e. best performing) settings for buffered output.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetBufferedOutputLatency](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetbufferedoutputlatency)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float * out_latency_in_msec)<br></br>Returns the latency for a buffered output.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetBufferedOutputFramesPlayed](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetbufferedoutputframesplayed)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t * out_frames_played)<br></br>Returns the number of audio frames played by a buffered output.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetOutputBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetoutputbuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLAudioBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) * out_buf)<br></br>Returns an empty buffer for writing more buffered data.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioReleaseOutputBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudioreleaseoutputbuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Releases a buffer once it has been filled.  |

## Detailed Description


BUFFERING. 





-----------


## Functions Documentation

### MLAudioGetBufferedOutputDefaults {#mlresult-mlaudiogetbufferedoutputdefaults}

```cpp
MLResult MLAudioGetBufferedOutputDefaults(
    uint32_t channel_count,
    uint32_t samples_per_second,
    float max_pitch_change,
    MLAudioBufferFormat * out_format,
    uint32_t * out_recommended_size_in_bytes,
    uint32_t * out_min_size_in_bytes
)
```

Returns the preferred (i.e. best performing) settings for buffered output. 

**Parameters**

|  |   |   |
|--|--|--|
| uint32_t |channel_count|Number of audio channels (e.g. 2 for stereo). |
| uint32_t |samples_per_second|Sample rate for the buffered output. |
| float |max_pitch_change|Top pitch (1.0 - 2.0) for this sound output. |
| [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * |out_format|Recommended settings for [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md). |
| uint32_t * |out_recommended_size_in_bytes|Recommended size for the buffers. |
| uint32_t * |out_min_size_in_bytes|Minimum allowable size for the buffers.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned preferred settings for buffered output. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 





**API Level:**
  * 7




-----------

### MLAudioGetBufferedOutputLatency {#mlresult-mlaudiogetbufferedoutputlatency}

```cpp
MLResult MLAudioGetBufferedOutputLatency(
    MLHandle handle,
    float * out_latency_in_msec
)
```

Returns the latency for a buffered output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| float * |out_latency_in_msec|Indicates the latency in milliseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned latency for buffered output. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


This function returns the latency between the time a buffer is enqueued via MLAudioReleaseOutputBuffer and the time its audio is heard at the speakers or earphones.




**API Level:**
  * 7




-----------

### MLAudioGetBufferedOutputFramesPlayed {#mlresult-mlaudiogetbufferedoutputframesplayed}

```cpp
MLResult MLAudioGetBufferedOutputFramesPlayed(
    MLHandle handle,
    uint64_t * out_frames_played
)
```

Returns the number of audio frames played by a buffered output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint64_t * |out_frames_played|The number of audio frames played.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned number of audio frames by buffered output. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


This function returns the number of frames that have been sent down to the audio mixer (-not- the number that have been passed to the buffers) since the last time MLAudioStartSound was called for this output. Note that the perceived sound may be slightly behind this value due to the buffer latency (which can be queried by calling MLAudioGetBufferedOutputLatency). Pausing and resuming does not affect the frame count.




**API Level:**
  * 7




-----------

### MLAudioGetOutputBuffer {#mlresult-mlaudiogetoutputbuffer}

```cpp
MLResult MLAudioGetOutputBuffer(
    MLHandle handle,
    MLAudioBuffer * out_buf
)
```

Returns an empty buffer for writing more buffered data. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| [MLAudioBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) * |out_buf|[MLAudioBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) containing the buf to write into.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned empty buffer. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_BufferNotReady|Failed because buffer was not ready. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


This function returns an output buffer when one of the output buffers is empty and needs more data. It is possible to call this function in a polling fashion. However for greater efficiency it is recommended to provide a callback to the 'create' function (in which case this function may be called from within the callback).




**API Level:**
  * 7




-----------

### MLAudioReleaseOutputBuffer {#mlresult-mlaudioreleaseoutputbuffer}

```cpp
MLResult MLAudioReleaseOutputBuffer(
    MLHandle handle
)
```

Releases a buffer once it has been filled. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output.|

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


After receiving an empty buffer from MLAudioGetOutputBuffer and writing audio data into that buffer, call this function to indicate that the buffer has been filled and can now be played.




**API Level:**
  * 7




-----------





