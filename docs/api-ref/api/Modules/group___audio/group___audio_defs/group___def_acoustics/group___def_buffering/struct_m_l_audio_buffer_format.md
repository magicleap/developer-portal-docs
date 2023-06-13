---
title: MLAudioBufferFormat
summary: buffer format settings for input and output streams. 

---

# MLAudioBufferFormat

**Module:** **[Audio](/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)** **/** **[Buffering](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md)**



Buffer format settings for input and output streams.  [More...](#detailed-description)


`#include <ml_audio.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[channel_count](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-channel-count)**  |
| uint32_t | **[samples_per_second](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-samples-per-second)**  |
| uint32_t | **[bits_per_sample](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-bits-per-sample)**  |
| uint32_t | **[valid_bits_per_sample](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-valid-bits-per-sample)**  |
| [MLAudioSampleFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiosampleformat) | **[sample_format](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudiosampleformat-sample-format)**  |
| [MLAudioChannelFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiochannelformat) | **[channel_format](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudiochannelformat-channel-format)**  |

## Detailed Description

```cpp
struct MLAudioBufferFormat;
```

Buffer format settings for input and output streams. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### channel_count {#uint32-t-channel-count}

```cpp
uint32_t channel_count;
```


Number of channels. 





-----------

### samples_per_second {#uint32-t-samples-per-second}

```cpp
uint32_t samples_per_second;
```


Sample rate. 





-----------

### bits_per_sample {#uint32-t-bits-per-sample}

```cpp
uint32_t bits_per_sample;
```


Number of bits per sample. 





-----------

### valid_bits_per_sample {#uint32-t-valid-bits-per-sample}

```cpp
uint32_t valid_bits_per_sample;
```


Number of bits used per sample. 





-----------

### sample_format {#mlaudiosampleformat-sample-format}

```cpp
MLAudioSampleFormat sample_format;
```


Integer or float. Float is not currently implemented. 





-----------

### channel_format {#mlaudiochannelformat-channel-format}

```cpp
MLAudioChannelFormat channel_format;
```


Channel configuration. 





-----------

