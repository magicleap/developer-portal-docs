---
title: MLAudioObstruction
summary: obstruction along a ray. 

---

# MLAudioObstruction

**Module:** **[Audio](/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)** **/** **[Spatial Sound](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/group___def_spatial_sound.md)**



Obstruction along a ray.  [More...](#detailed-description)


`#include <ml_audio.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| float | **[factor](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-factor)**  |
| [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[hit_point](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlvec3f-hit-point)**  |

## Detailed Description

```cpp
struct MLAudioObstruction;
```

Obstruction along a ray. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### factor {#float-factor}

```cpp
float factor;
```


Amount of obstruction [0-1] with 1 = fully obstructed. 





-----------

### hit_point {#mlvec3f-hit-point}

```cpp
MLVec3f hit_point;
```


Location of obstruction. 





-----------

