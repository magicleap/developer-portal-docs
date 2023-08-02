---
title: MLAudioMultibandLevel
summary: properties specifying a broadband level and three sub-band levels. 

---

# MLAudioMultibandLevel

**Module:** **[Audio](/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)**



Properties specifying a broadband level and three sub-band levels.  [More...](#detailed-description)


`#include <ml_audio.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| float | **[main](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-main)**  |
| float | **[lf](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-lf)**  |
| float | **[mf](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-mf)**  |
| float | **[hf](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-hf)**  |

## Detailed Description

```cpp
struct MLAudioMultibandLevel;
```

Properties specifying a broadband level and three sub-band levels. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### main {#float-main}

```cpp
float main;
```


Level for all freqs. Range contextual Default=1. 





-----------

### lf {#float-lf}

```cpp
float lf;
```


Level for low freqs. Range contextual Default=1. 





-----------

### mf {#float-mf}

```cpp
float mf;
```


Level for mid freqs. Range contextual Default=1. 





-----------

### hf {#float-hf}

```cpp
float hf;
```


Level for high freqs. Range contextual Default=1. 





-----------

