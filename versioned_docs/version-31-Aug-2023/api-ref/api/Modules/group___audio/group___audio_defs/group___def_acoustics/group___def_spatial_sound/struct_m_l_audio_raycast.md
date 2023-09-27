---
title: MLAudioRaycast
summary: two points in space describing a ray. 

---

# MLAudioRaycast

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)** **/** **[Spatial Sound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/group___def_spatial_sound.md)**



Two points in space describing a ray.  [More...](#detailed-description)


`#include <ml_audio.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[eye_point](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlvec3f-eye-point)**  |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[end_point](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlvec3f-end-point)**  |

## Detailed Description

```cpp
struct MLAudioRaycast;
```

Two points in space describing a ray. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### eye_point {#mlvec3f-eye-point}

```cpp
MLVec3f eye_point;
```


Starting point of the ray. 





-----------

### end_point {#mlvec3f-end-point}

```cpp
MLVec3f end_point;
```


Ending point of the ray. 





-----------


