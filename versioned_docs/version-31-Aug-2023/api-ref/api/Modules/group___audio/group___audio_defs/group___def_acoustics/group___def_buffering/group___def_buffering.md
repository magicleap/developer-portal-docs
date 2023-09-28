---
title: Buffering
summary: buffering. 

---

# Buffering

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)**

BUFFERING. 

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md)** <br></br>Buffer format settings for input and output streams.  |
| struct | **[MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) | **[MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#struct-mlaudiobufferformat)** <br></br>Buffer format settings for input and output streams.  |
| typedef struct [MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) | **[MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#struct-mlaudiobuffer)**  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLAudioSampleFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiosampleformat)** <br></br> { <br></br>[MLAudioSampleFormat_Int](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiosampleformat-int),<br></br> [MLAudioSampleFormat_Float](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiosampleformat-float),<br></br> [MLAudioSampleFormat_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiosampleformat-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLAudioChannelFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiochannelformat)** <br></br> { <br></br>[MLAudioChannelFormat_Default](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiochannelformat-default),<br></br> [MLAudioChannelFormat_AmbisonicAmbix](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiochannelformat-ambisonicambix),<br></br> [MLAudioChannelFormat_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiochannelformat-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Enums Documentation

### MLAudioSampleFormat {#enums-mlaudiosampleformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioSampleFormat_Int | | Samples are integer. |
| MLAudioSampleFormat_Float | | Samples are float. Not currently implemented. |
| MLAudioSampleFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Possible sample formats for input and output streams. 





-----------

### MLAudioChannelFormat {#enums-mlaudiochannelformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioChannelFormat_Default | | Infer channel format from buffer format settings. |
| MLAudioChannelFormat_AmbisonicAmbix | | Ambisonic AmbiX format. |
| MLAudioChannelFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Channel formats for buffered outputs, specified in [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) reserved field. 





-----------


## Types Documentation

### MLAudioBufferFormat {#struct-mlaudiobufferformat}

```cpp
typedef struct MLAudioBufferFormat MLAudioBufferFormat;
```

Buffer format settings for input and output streams. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md)


**API Level:**
  * 20




-----------

### MLAudioBuffer {#struct-mlaudiobuffer}

```cpp
typedef struct MLAudioBuffer MLAudioBuffer;
```


An audio buffer for passing data from input streams or to output streams. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md)



-----------







