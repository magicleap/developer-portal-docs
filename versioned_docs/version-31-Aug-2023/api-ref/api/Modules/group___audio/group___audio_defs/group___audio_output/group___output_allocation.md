---
title: Allocation

---

# Allocation

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Audio Output](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_output.md)**

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateSoundWithLoadedFile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiocreatesoundwithloadedfile)**(int file, bool auto_destroy, bool dynamic_decode, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound output that plays a loaded file.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateSoundWithStreamedFile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiocreatesoundwithstreamedfile)**(int file, bool auto_destroy, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound output that plays a streamed file.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateSoundWithBufferedOutput](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiocreatesoundwithbufferedoutput)**(const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * format, uint32_t buffer_size_in_bytes, [MLAudioBufferCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiobuffercallback) callback, void * context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound output that plays a buffered audio output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioDestroySound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiodestroysound)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroys a previously created sound output.  |

## Detailed Description


ALLOCATION. 





-----------


## Functions Documentation

### MLAudioCreateSoundWithLoadedFile {#mlresult-mlaudiocreatesoundwithloadedfile}

```cpp
MLResult MLAudioCreateSoundWithLoadedFile(
    int file,
    bool auto_destroy,
    bool dynamic_decode,
    MLHandle * out_handle
)
```

Creates a new sound output that plays a loaded file. 

**Parameters**

|  |   |   |
|--|--|--|
| int |file|File descriptor specifying the file to play. |
| bool |auto_destroy|If true, the sound output is destroyed when done playing. |
| bool |dynamic_decode|Not currently implemented. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_FileNotRecognized|Failed because file was not recognized. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBitsPerSample|Failed due to invalid bits per sample. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidValidBits|Failed due to invalid valid bits. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


Creates a sound output and loads the audio file specified by the 'file' argument into memory. After creation the sound can be started by calling MLAudioStartSound. Supported file formats are all file types supported by the Multimedia Service, mono or stereo, sampled with a frequency in the range from 16 kHz - 48 kHz, and represented as 16, 24, or 32 bit integers or 32-bit floats.





-----------

### MLAudioCreateSoundWithStreamedFile {#mlresult-mlaudiocreatesoundwithstreamedfile}

```cpp
MLResult MLAudioCreateSoundWithStreamedFile(
    int file,
    bool auto_destroy,
    MLHandle * out_handle
)
```

Creates a new sound output that plays a streamed file. 

**Parameters**

|  |   |   |
|--|--|--|
| int |file|File descriptor specifying the file to play. |
| bool |auto_destroy|If true, the sound output is destroyed when done playing. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_FileNotFound|Failed because file was missing. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceDiscarded|Failed because file was closed. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


Creates a sound output and prepares to stream the audio file specified by the 'file' argument. After creation the sound can be started by calling MLAudioStartSound. Supported file formats are all file types supported by the Multimedia Service, mono or stereo, sampled with a frequency in the range from 16 kHz - 48 kHz, and represented as 16, 24, or 32 bit integers or 32-bit floats.





-----------

### MLAudioCreateSoundWithBufferedOutput {#mlresult-mlaudiocreatesoundwithbufferedoutput}

```cpp
MLResult MLAudioCreateSoundWithBufferedOutput(
    const MLAudioBufferFormat * format,
    uint32_t buffer_size_in_bytes,
    MLAudioBufferCallback callback,
    void * context,
    MLHandle * out_handle
)
```

Creates a new sound output that plays a buffered audio output. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * |format|[MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) Specifying the audio format of the buffers. |
| uint32_t |buffer_size_in_bytes|Requested size in bytes for each of the output buffers. |
| [MLAudioBufferCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiobuffercallback) |callback|MLAudioBufferCallback function pointer. |
| void * |context|Generic data pointer passed back to callback. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBufferSize|Failed due to an invalid buffer size. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleFormat|Failed due to an invalid sample format. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidValidBits|Failed due to invalid valid bits.|
**Required Permissions**:

  * None 


Creates a sound output and allocates a double-buffer for buffering audio data into it. To write data into the next available buffer call MLAudioGetOutputBuffer to get an empty buffer, then write the data into the buffer, then call MLAudioReleaseOutputBuffer to indicate that the buffer is ready to play. This can be done either on a polling basis or within a callback set via the 'callback' argument. The 'format' argument specifies the format of which the following are supported: Mono, stereo, 6-channel, 8-channel, or 12-channel; 16 bit integer; a sampling rate between 16k - 48k. The 'buffer_size' argument will use the recommended size if 0 is passed in. After creation, one or both buffers can optionally be pre-filled, and the sound can be started by calling MLAudioStartSound.




**API Level:**
  * 7




-----------

### MLAudioDestroySound {#mlresult-mlaudiodestroysound}

```cpp
MLResult MLAudioDestroySound(
    MLHandle handle
)
```

Destroys a previously created sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to destroy sound output due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed to destroy sound output due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed to destroy sound output because feature has not been implemented yet.|
**Required Permissions**:

  * None 






-----------






