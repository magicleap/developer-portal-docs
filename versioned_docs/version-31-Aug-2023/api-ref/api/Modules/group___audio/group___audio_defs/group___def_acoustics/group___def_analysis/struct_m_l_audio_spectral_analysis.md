---
title: MLAudioSpectralAnalysis

---

# MLAudioSpectralAnalysis

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)** **/** **[Analysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md)**



 [More...](#detailed-description)


`#include <ml_audio.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| float * | **[values](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-values)**  |
| int32_t | **[num_columns](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#int32-t-num-columns)**  |
| int32_t | **[num_rows](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#int32-t-num-rows)**  |

## Detailed Description

```cpp
struct MLAudioSpectralAnalysis;
```


A representation of frequency spectrum energy over a window of time. 





-----------
## Public Attributes Documentation

### values {#float-values}

```cpp
float * values;
```


Magnitudes of the spectral energy. Column-major matrix. 





-----------

### num_columns {#int32-t-num-columns}

```cpp
int32_t num_columns;
```


Number of bands of spectral energy. 





-----------

### num_rows {#int32-t-num-rows}

```cpp
int32_t num_rows;
```


Number of divisions of the time window. 





-----------


