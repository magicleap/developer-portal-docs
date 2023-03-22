---
title: MLAudioObstruction
summary: obstruction along a ray. 

---

# MLAudioObstruction

**Module:** **[Audio](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)** **/** **[Spatial Sound](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound.md)**



Obstruction along a ray.  [More...](#detailed-description)


`#include <ml_audio.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| float | **[factor](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-factor)**  |
| [MLVec3f](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[hit_point](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlvec3f-hit-point)**  |

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


