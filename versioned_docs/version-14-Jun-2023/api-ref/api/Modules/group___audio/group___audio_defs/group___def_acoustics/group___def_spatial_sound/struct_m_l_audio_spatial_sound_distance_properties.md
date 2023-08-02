---
title: MLAudioSpatialSoundDistanceProperties

---

# MLAudioSpatialSoundDistanceProperties

**Module:** **[Audio](/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)** **/** **[Spatial Sound](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/group___def_spatial_sound.md)**



 [More...](#detailed-description)


`#include <ml_audio.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| float | **[min_distance](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-min-distance)**  |
| float | **[max_distance](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-max-distance)**  |
| float | **[rolloff_factor](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-rolloff-factor)**  |

## Detailed Description

```cpp
struct MLAudioSpatialSoundDistanceProperties;
```


Properties specifying the distance response of a spatial sound. 





-----------
## Public Attributes Documentation

### min_distance {#float-min-distance}

```cpp
float min_distance;
```


Distance at which sound is at full volume. Range(0, FLT_MAX) Default=1. 





-----------

### max_distance {#float-max-distance}

```cpp
float max_distance;
```


Distance beyond which sound gets no quieter. Range(min_distance, FLT_MAX) Default=FLT_MAX. 





-----------

### rolloff_factor {#float-rolloff-factor}

```cpp
float rolloff_factor;
```


Modification to real-world distance response. Range(0, FLT_MAX) Default=1. 





-----------

