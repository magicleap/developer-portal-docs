---
title: MLAudioRaycastResult
summary: id-tracked result for a single raycast operation. 

---

# MLAudioRaycastResult

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)** **/** **[Spatial Sound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/group___def_spatial_sound.md)**



ID-tracked result for a single raycast operation.  [More...](#detailed-description)


`#include <ml_audio.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[source_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlhandle-source-id)**  |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[image_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlhandle-image-id)**  |
| uint32_t | **[leg_index](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-leg-index)**  |
| [MLAudioRaycast](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast.md) | **[ray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudioraycast-ray)**  |
| [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) | **[obstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudioobstruction-obstruction)**  |

## Detailed Description

```cpp
struct MLAudioRaycastResult;
```

ID-tracked result for a single raycast operation. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### source_id {#mlhandle-source-id}

```cpp
MLHandle source_id;
```



| Type | Description |
|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |


Internal identifier. 





-----------

### image_id {#mlhandle-image-id}

```cpp
MLHandle image_id;
```



| Type | Description |
|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |


Internal identifier. 





-----------

### leg_index {#uint32-t-leg-index}

```cpp
uint32_t leg_index;
```


Internal identifier. 





-----------

### ray {#mlaudioraycast-ray}

```cpp
MLAudioRaycast ray;
```



| Type | Description |
|--|--|
| [MLAudioRaycast](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast.md) | Two points in space describing a ray.  |


Raycast tested for obstruction. 





-----------

### obstruction {#mlaudioobstruction-obstruction}

```cpp
MLAudioObstruction obstruction;
```



| Type | Description |
|--|--|
| [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) | Obstruction along a ray.  |


Result of obstruction test. 





-----------


