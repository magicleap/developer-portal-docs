---
title: MLAudioReverbProperties
summary: properties specifying acoustic reverberation. 

---

# MLAudioReverbProperties

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)**



Properties specifying acoustic reverberation.  [More...](#detailed-description)


`#include <ml_audio.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) | **[gain](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudiomultibandlevel-gain)**  |
| float | **[pre_delay](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-pre-delay)**  |
| float | **[decay_time](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-decay-time)**  |
| float | **[decay_time_lf_ratio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-decay-time-lf-ratio)**  |
| float | **[decay_time_hf_ratio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-decay-time-hf-ratio)**  |

## Detailed Description

```cpp
struct MLAudioReverbProperties;
```

Properties specifying acoustic reverberation. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### gain {#mlaudiomultibandlevel-gain}

```cpp
MLAudioMultibandLevel gain;
```



| Type | Description |
|--|--|
| [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) | Properties specifying a broadband level and three sub-band levels.  |


Reverb output mix level. Range[(0,0,0,0):(8,2,2,2)] Default=[0.16, 1.0, 1.0, 1.0]. 





-----------

### pre_delay {#float-pre-delay}

```cpp
float pre_delay;
```


Delay (secs) from direct sound to the late reverberation onset. Must be >= reflections_delay. Range(0.02,0.1) Default=0.03. 





-----------

### decay_time {#float-decay-time}

```cpp
float decay_time;
```


Decay time (secs) for late reverberation. Range(0,20) Default=0.7. 





-----------

### decay_time_lf_ratio {#float-decay-time-lf-ratio}

```cpp
float decay_time_lf_ratio;
```


Relative reverberation decay time multiplying factor for low frequencies. Range(0.1, 2) Default=1. 





-----------

### decay_time_hf_ratio {#float-decay-time-hf-ratio}

```cpp
float decay_time_hf_ratio;
```


Relative reverberation decay time multiplying factor for high frequencies. Range(0.1, 2) Default=0.6. 





-----------


