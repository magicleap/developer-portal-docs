---
title: MLAudioSpatialSoundRadiationProperties

---

# MLAudioSpatialSoundRadiationProperties

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)** **/** **[Spatial Sound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/group___def_spatial_sound.md)**



 [More...](#detailed-description)


`#include <ml_audio.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| float | **[inner_angle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-inner-angle)**  |
| float | **[outer_angle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-outer-angle)**  |
| float | **[outer_gain](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-outer-gain)**  |
| float | **[outer_gain_lf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-outer-gain-lf)**  |
| float | **[outer_gain_mf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-outer-gain-mf)**  |
| float | **[outer_gain_hf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-outer-gain-hf)**  |

## Detailed Description

```cpp
struct MLAudioSpatialSoundRadiationProperties;
```


Properties specifying the directivity of a spatial sound. 





-----------
## Public Attributes Documentation

### inner_angle {#float-inner-angle}

```cpp
float inner_angle;
```


Inner cone angle in degrees, within which there is no radiation attenuation. Range(0,360) Default=50. 





-----------

### outer_angle {#float-outer-angle}

```cpp
float outer_angle;
```


Outer cone angle in degrees, beyond which there is full radiation attenuation. Range(0,360) Default=340. 





-----------

### outer_gain {#float-outer-gain}

```cpp
float outer_gain;
```


Volume scale beyond outer cone for all freqs. Range(0, 1) Default=1. 





-----------

### outer_gain_lf {#float-outer-gain-lf}

```cpp
float outer_gain_lf;
```


Volume scale Beyond outer cone for low freqs. Range(0, 1) Default=0.65. 





-----------

### outer_gain_mf {#float-outer-gain-mf}

```cpp
float outer_gain_mf;
```


Volume scale beyond outer cone for mid freqs. Range(0, 1) Default=0.4. 





-----------

### outer_gain_hf {#float-outer-gain-hf}

```cpp
float outer_gain_hf;
```


Volume scale beyond outer cone for high freqs. Range(0, 1) Default=0.08. 





-----------


