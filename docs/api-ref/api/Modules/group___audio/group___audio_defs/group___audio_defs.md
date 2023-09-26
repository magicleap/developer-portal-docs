---
title: Audio Definitions

---

# Audio Definitions

**Module:** **[Audio](/api-ref/api/Modules/group___audio/group___audio.md)**

 [More...](#detailed-description)

## Modules

| Name           |
| -------------- |
| **[Control](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md)** <br></br>CONTROL.  |
| **[Parameters](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_parameters.md)** <br></br>PARAMETERS.  |
| **[Acoustics](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)** <br></br>ACOUSTICS.  |
| **[Audio Output](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_output.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)** <br></br>Properties specifying a broadband level and three sub-band levels.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) | **[MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#struct-mlaudiomultibandlevel)** <br></br>Properties specifying a broadband level and three sub-band levels.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLAudioMicCaptureType](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#enums-mlaudiomiccapturetype)** <br></br> { <br></br>[MLAudioMicCaptureType_VoiceComm](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#enums-mlaudiomiccapturetype-voicecomm),<br></br> [MLAudioMicCaptureType_VoiceCapture](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#enums-mlaudiomiccapturetype-voicecapture),<br></br> [MLAudioMicCaptureType_WorldCapture](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#enums-mlaudiomiccapturetype-worldcapture) =4,<br></br> [MLAudioMicCaptureType_RawMicsAndAECRef](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#enums-mlaudiomiccapturetype-rawmicsandaecref),<br></br> [MLAudioMicCaptureType_Ensure32Bits](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#enums-mlaudiomiccapturetype-ensure32bits) =0x7FFFFFFF<br></br>}<br></br>The type of mic input to capture.  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| float | **[main](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-main)**  |
| float | **[lf](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-lf)**  |
| float | **[mf](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-mf)**  |
| float | **[hf](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-hf)**  |
| [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) | **[gain](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudiomultibandlevel-gain)**  |
| float | **[pre_delay](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-pre-delay)**  |
| [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) | **[gain](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudiomultibandlevel-gain)**  |
| float | **[pre_delay](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-pre-delay)**  |
| float | **[decay_time](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-decay-time)**  |
| float | **[decay_time_lf_ratio](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-decay-time-lf-ratio)**  |
| float | **[decay_time_hf_ratio](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-decay-time-hf-ratio)**  |
| float | **[min_distance](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-min-distance)**  |
| float | **[max_distance](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-max-distance)**  |
| float | **[rolloff_factor](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-rolloff-factor)**  |
| float | **[inner_angle](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-inner-angle)**  |
| float | **[outer_angle](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-outer-angle)**  |
| float | **[outer_gain](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-outer-gain)**  |
| float | **[outer_gain_lf](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-outer-gain-lf)**  |
| float | **[outer_gain_mf](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-outer-gain-mf)**  |
| float | **[outer_gain_hf](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-outer-gain-hf)**  |
| [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[eye_point](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlvec3f-eye-point)**  |
| [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[end_point](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlvec3f-end-point)**  |
| float | **[factor](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-factor)**  |
| [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[hit_point](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlvec3f-hit-point)**  |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[source_id](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlhandle-source-id)**  |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[image_id](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlhandle-image-id)**  |
| uint32_t | **[leg_index](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-leg-index)**  |
| [MLAudioRaycast](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast.md) | **[ray](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudioraycast-ray)**  |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[source_id](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlhandle-source-id)**  |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[image_id](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlhandle-image-id)**  |
| uint32_t | **[leg_index](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-leg-index)**  |
| [MLAudioRaycast](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast.md) | **[ray](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudioraycast-ray)**  |
| [MLAudioObstruction](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) | **[obstruction](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudioobstruction-obstruction)**  |
| uint32_t | **[channel_count](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-channel-count)**  |
| uint32_t | **[samples_per_second](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-samples-per-second)**  |
| uint32_t | **[bits_per_sample](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-bits-per-sample)**  |
| uint32_t | **[valid_bits_per_sample](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-valid-bits-per-sample)**  |
| [MLAudioSampleFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiosampleformat) | **[sample_format](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudiosampleformat-sample-format)**  |
| [MLAudioChannelFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiochannelformat) | **[channel_format](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#mlaudiochannelformat-channel-format)**  |
| uint8_t * | **[ptr](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint8-t-ptr)**  |
| uint32_t | **[size](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#uint32-t-size)**  |
| float * | **[values](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#float-values)**  |
| int32_t | **[num_columns](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#int32-t-num-columns)**  |
| int32_t | **[num_rows](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#int32-t-num-rows)**  |

## Detailed Description


AUDIO DEFINITIONS. 





-----------
## Enums Documentation

### MLAudioMicCaptureType {#enums-mlaudiomiccapturetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioMicCaptureType_VoiceComm | | User voice, suitable for communications. Mono, 16 bit integer, 16k sampling rate. |
| MLAudioMicCaptureType_VoiceCapture | | High fidelity user voice, suitable for recording. Mono, 16 bit integer, 48k sampling rate. |
| MLAudioMicCaptureType_WorldCapture |  =4| Mic mix representing the user's surroundings. Stereo, 16 bit integer, 48k sampling rate. |
| MLAudioMicCaptureType_RawMicsAndAECRef | | All 4 mics unprocessed (front L/R, side L/R) + AEC return from amp (L/R). Channel layout: 1 - Front L, 2 - Front R, 3 - Side L, 4 - Side R, 5 - AEC return L, 6 - AEC return R. DC Offset and/or background hum may be present on channels 1-4 due to lack of processing. 6-channel, 16 bit integer, 48k sampling rate. |
| MLAudioMicCaptureType_Ensure32Bits |  =0x7FFFFFFF| Ensure enum is represented as 32 bits. |



The type of mic input to capture. 




**API Level:**
  * 29




-----------


## Types Documentation

### MLAudioMultibandLevel {#struct-mlaudiomultibandlevel}

```cpp
typedef struct MLAudioMultibandLevel MLAudioMultibandLevel;
```

Properties specifying a broadband level and three sub-band levels. 



[More Info](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)


**API Level:**
  * 20




-----------



## Attributes Documentation

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

### gain {#mlaudiomultibandlevel-gain}

```cpp
MLAudioMultibandLevel gain;
```



| Type | Description |
|--|--|
| [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) | Properties specifying a broadband level and three sub-band levels.  |


Dispersion output mix level. Range[(0,0,0,0):(8,2,2,2)] Default=[0.25, 1.0, 1.0, 1.0]. 





-----------

### pre_delay {#float-pre-delay}

```cpp
float pre_delay;
```


Delay (secs) from direct sound to earliest reflection cluster onset. Must be <= reverb_delay. Range(0.005,0.1) Default=0.01. 





-----------

### gain {#mlaudiomultibandlevel-gain}

```cpp
MLAudioMultibandLevel gain;
```



| Type | Description |
|--|--|
| [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) | Properties specifying a broadband level and three sub-band levels.  |


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

### source_id {#mlhandle-source-id}

```cpp
MLHandle source_id;
```



| Type | Description |
|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |


Internal identifier. 





-----------

### image_id {#mlhandle-image-id}

```cpp
MLHandle image_id;
```



| Type | Description |
|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |


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
| [MLAudioRaycast](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast.md) | Two points in space describing a ray.  |


Raycast to test for obstruction. 





-----------

### source_id {#mlhandle-source-id}

```cpp
MLHandle source_id;
```



| Type | Description |
|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |


Internal identifier. 





-----------

### image_id {#mlhandle-image-id}

```cpp
MLHandle image_id;
```



| Type | Description |
|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |


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
| [MLAudioRaycast](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast.md) | Two points in space describing a ray.  |


Raycast tested for obstruction. 





-----------

### obstruction {#mlaudioobstruction-obstruction}

```cpp
MLAudioObstruction obstruction;
```



| Type | Description |
|--|--|
| [MLAudioObstruction](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) | Obstruction along a ray.  |


Result of obstruction test. 





-----------

### channel_count {#uint32-t-channel-count}

```cpp
uint32_t channel_count;
```


Number of channels. 





-----------

### samples_per_second {#uint32-t-samples-per-second}

```cpp
uint32_t samples_per_second;
```


Sample rate. 





-----------

### bits_per_sample {#uint32-t-bits-per-sample}

```cpp
uint32_t bits_per_sample;
```


Number of bits per sample. 





-----------

### valid_bits_per_sample {#uint32-t-valid-bits-per-sample}

```cpp
uint32_t valid_bits_per_sample;
```


Number of bits used per sample. 





-----------

### sample_format {#mlaudiosampleformat-sample-format}

```cpp
MLAudioSampleFormat sample_format;
```


Integer or float. Float is not currently implemented. 





-----------

### channel_format {#mlaudiochannelformat-channel-format}

```cpp
MLAudioChannelFormat channel_format;
```


Channel configuration. 





-----------

### ptr {#uint8-t-ptr}

```cpp
uint8_t * ptr;
```


Pointer to audio data. 





-----------

### size {#uint32-t-size}

```cpp
uint32_t size;
```


Size of audio data in bytes. 





-----------

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




