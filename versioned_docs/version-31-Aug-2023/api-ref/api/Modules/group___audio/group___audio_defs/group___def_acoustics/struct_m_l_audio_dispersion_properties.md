---
title: MLAudioDispersionProperties

---

# MLAudioDispersionProperties

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)**



 [More...](#detailed-description)


`#include <ml_audio.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) | **[gain](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudiomultibandlevel-gain)**  |
| float | **[pre_delay](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-pre-delay)**  |

## Detailed Description

```cpp
struct MLAudioDispersionProperties;
```


\briefProperties specifying acoustic dispersion (clustered reflections).




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


Dispersion output mix level. Range[(0,0,0,0):(8,2,2,2)] Default=[0.25, 1.0, 1.0, 1.0]. 





-----------

### pre_delay {#float-pre-delay}

```cpp
float pre_delay;
```


Delay (secs) from direct sound to earliest reflection cluster onset. Must be <= reverb_delay. Range(0.005,0.1) Default=0.01. 





-----------


