---
title: MLAudioBuffer

---

# MLAudioBuffer

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)** **/** **[Buffering](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md)**



 [More...](#detailed-description)


`#include <ml_audio.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint8_t * | **[ptr](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint8-t-ptr)**  |
| uint32_t | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-size)**  |

## Detailed Description

```cpp
struct MLAudioBuffer;
```


An audio buffer for passing data from input streams or to output streams. 





-----------
## Public Attributes Documentation

### ptr {#uint8-t-ptr}

```cpp
uint8_t * ptr;
```


Pointer to audio data. 





-----------

### size {#uint32-t-size}

```cpp
uint32_t size;
```


Size of audio data in bytes. 





-----------


