---
title: Result Codes
summary: result codes. 

---

# Result Codes

**Module:** **[Audio](/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)**

RESULT CODES. 

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 3](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-anonymous-enum-3)** <br></br> { <br></br>[MLResultAPIPrefix_Audio](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlresultapiprefix-audio) = ( 0x9e11  << 16)<br></br>} |
| enum | **[MLAudioResult](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult)** <br></br> { <br></br>[MLAudioResult_NotImplemented](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-notimplemented) = MLResultAPIPrefix_Audio,<br></br> [MLAudioResult_HandleNotFound](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-handlenotfound),<br></br> [MLAudioResult_InvalidSampleRate](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-invalidsamplerate),<br></br> [MLAudioResult_InvalidBitsPerSample](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-invalidbitspersample),<br></br> [MLAudioResult_InvalidValidBits](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-invalidvalidbits),<br></br> [MLAudioResult_InvalidSampleFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-invalidsampleformat),<br></br> [MLAudioResult_InvalidChannelCount](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-invalidchannelcount),<br></br> [MLAudioResult_InvalidBufferSize](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-invalidbuffersize),<br></br> [MLAudioResult_BufferNotReady](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-buffernotready),<br></br> [MLAudioResult_FileNotFound](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-filenotfound),<br></br> [MLAudioResult_FileNotRecognized](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-filenotrecognized),<br></br> [MLAudioResult_ResourceNotFound](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-resourcenotfound),<br></br> [MLAudioResult_ResourceDiscarded](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-resourcediscarded),<br></br> [MLAudioResult_OperationUnavailable](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-operationunavailable),<br></br> [MLAudioResult_OperationNotReady](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-operationnotready),<br></br> [MLAudioResult_InternalConfigError](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-internalconfigerror),<br></br> [MLAudioResult_Ensure32Bits](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Return values for Audio Service API calls.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| const char * | **[MLAudioGetResultString](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#const-char-mlaudiogetresultstring)**([MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result_code)<br></br>Returns an ASCII string for each result code.  |

## Enums Documentation

### Anonymous Enum 3 {#enums-anonymous-enum-3}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResultAPIPrefix_Audio |  ( 0x9e11  << 16)| Defines the prefix for MLAudioResult codes. |








-----------

### MLAudioResult {#enums-mlaudioresult}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioResult_NotImplemented |  MLResultAPIPrefix_Audio| Function not implemented. |
| MLAudioResult_HandleNotFound | | Not a valid MLHandle for a sound or input. |
| MLAudioResult_InvalidSampleRate | | Sample rate not supported. |
| MLAudioResult_InvalidBitsPerSample | | Bits per sample not supported. |
| MLAudioResult_InvalidValidBits | | Valid bits per sample not supported. |
| MLAudioResult_InvalidSampleFormat | | Sample format not supported. |
| MLAudioResult_InvalidChannelCount | | Channel count not supported. |
| MLAudioResult_InvalidBufferSize | | Buffer size too small. |
| MLAudioResult_BufferNotReady | | Buffer not ready for read or write. |
| MLAudioResult_FileNotFound | | Specified file not found. |
| MLAudioResult_FileNotRecognized | | Specified file has unsupported format. |
| MLAudioResult_ResourceNotFound | | Specified resource is not on the list. |
| MLAudioResult_ResourceDiscarded | | Data was unloaded or file was closed. |
| MLAudioResult_OperationUnavailable | | Requested operation not possible for given item. |
| MLAudioResult_OperationNotReady | | Requested operation has not yet been processed. |
| MLAudioResult_InternalConfigError | | Internal configuration problem was detected. |
| MLAudioResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Return values for Audio Service API calls. 




**API Level:**
  * 4




-----------



## Functions Documentation

### MLAudioGetResultString {#const-char-mlaudiogetresultstring}

```cpp
const char * MLAudioGetResultString(
    MLResult result_code
)
```

Returns an ASCII string for each result code. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result_code|MLResult to select the result code.|
This call returns strings for all of the MLResult and MLAudioResult codes.



**Return**: ASCII string containing readable version of result code. 



-----------





