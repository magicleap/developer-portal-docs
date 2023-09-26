---
title: Spatial Sound

---

# Spatial Sound

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Audio Output](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_output.md)** **/** **[Acoustics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md)**

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundEnable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundenable)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, bool is_enabled)<br></br>Enables/disables 3D audio processing for a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundEnable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundenable)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, bool * out_is_enabled)<br></br>Indicates whether 3D audio processing is enabled for a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundPosition](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundposition)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, const [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) * position)<br></br>Sets the 3D position for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundPosition](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundposition)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) * out_position)<br></br>Returns the 3D position for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundDirection](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsounddirection)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, const [MLQuaternionf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) * direction)<br></br>Sets the radiation direction for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundDirection](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsounddirection)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, [MLQuaternionf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) * out_direction)<br></br>Returns the radiation direction for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundBillboarding](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundbillboarding)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) id, bool is_billboarding)<br></br>Sets a mode where the sound always faces the listener.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundBillboarding](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundbillboarding)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) id, bool * out_is_billboarding)<br></br>Indicates whether the sound automatically faces the listener.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundobstruction)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) id, uint32_t channel, const [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) * left_ear, const [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) * right_ear)<br></br>Sets the direct path obstruction for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundobstruction)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) id, uint32_t channel, [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) * out_left_ear, [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) * out_right_ear)<br></br>Returns the direct path obstruction for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundObstructionOverride](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundobstructionoverride)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) id, const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * override)<br></br>Sets an override that enables the sound to pass through obstructions.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundObstructionOverride](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundobstructionoverride)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) id, [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * out_override)<br></br>Returns the amount of the sound obstruction override.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundDistanceAttenuation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsounddistanceattenuation)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, const [MLAudioSpatialSoundDistanceProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md) * properties)<br></br>Sets the distance properties for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundDistanceAttenuation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsounddistanceattenuation)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, [MLAudioSpatialSoundDistanceProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md) * out_properties)<br></br>Returns the distance properties for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundRadiation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundradiation)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, const [MLAudioSpatialSoundRadiationProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md) * properties)<br></br>Sets the radiation properties for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundRadiation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundradiation)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, [MLAudioSpatialSoundRadiationProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md) * out_properties)<br></br>Returns the radiation properties for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundDirectLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsounddirectlevel)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * level)<br></br>Sets the direct sound level for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundDirectLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsounddirectlevel)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * out_level)<br></br>Returns the direct sound level for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundIndirectLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundindirectlevel)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * level)<br></br>Sets the indirect sound level for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundIndirectLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundindirectlevel)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * out_level)<br></br>Returns the indirect sound level for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundDispersionSendLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsounddispersionsendlevel)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * level)<br></br>Sets the dispersion level for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundDispersionSendLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsounddispersionsendlevel)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * out_level)<br></br>Returns the dispersion level for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundReverbSendLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundreverbsendlevel)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * level)<br></br>Sets the reverb level for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundReverbSendLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundreverbsendlevel)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t channel, [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * out_level)<br></br>Returns the reverb level for one channel of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialSoundHeadRelative](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundheadrelative)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, bool is_head_relative)<br></br>Sets whether the coordinates for a sound output are head relative.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialSoundHeadRelative](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundheadrelative)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, bool * out_is_head_relative)<br></br>Returns whether the coordinates for a sound output are head relative.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpatialRaycastRequests](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialraycastrequests)**([MLAudioRaycastRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_request.md) ** out_raycast_requests, uint32_t * out_request_count)<br></br>Returns a list of ID-tracked requests for raycast operations.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSpatialRaycastResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialraycastresults)**([MLAudioRaycastResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_result.md) * raycast_results, uint32_t result_count)<br></br>Sets the ID-tracked results for previously requested raycast operations.  |

## Detailed Description


SPATIAL SOUND. 





-----------


## Functions Documentation

### MLAudioSetSpatialSoundEnable {#mlresult-mlaudiosetspatialsoundenable}

```cpp
MLResult MLAudioSetSpatialSoundEnable(
    MLHandle handle,
    bool is_enabled
)
```

Enables/disables 3D audio processing for a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| bool |is_enabled|Determines whether 3D processing is on or off.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully enabled or disabled 3D audio processing. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The 3D audio processing for a sound output can be turned on or off by this function (default is off). When 3D processing is enabled, the 3D position should be set by calling MLAudioSetSpatialSoundPosition. When 3D processing is disabled, stereo sounds will play their left and right channels directly to the left and right speakers or earphones, and mono sounds will be panned center.





-----------

### MLAudioGetSpatialSoundEnable {#mlresult-mlaudiogetspatialsoundenable}

```cpp
MLResult MLAudioGetSpatialSoundEnable(
    MLHandle handle,
    bool * out_is_enabled
)
```

Indicates whether 3D audio processing is enabled for a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| bool * |out_is_enabled|Indicates whether 3D processing is on or off.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed is enabled due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully indicated whether 3D audio processing is enabled. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed is enabled due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed is enabled due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed is enabled due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed is enabled because feature has not been implemented yet.|
**Required Permissions**:

  * None 






-----------

### MLAudioSetSpatialSoundPosition {#mlresult-mlaudiosetspatialsoundposition}

```cpp
MLResult MLAudioSetSpatialSoundPosition(
    MLHandle handle,
    uint32_t channel,
    const MLVec3f * position
)
```

Sets the 3D position for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose position is being set. |
| const [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) * |position|[MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) struct to set the position.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set 3D position of audio channel. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


When 3D audio processing is enabled for a sound output (see MLAudioSetSpatialSoundEnable) this funtions sets the perceived position within the user's environment. Multi-channel sounds require the 3D position to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right. Positive x is right. Positive y is up. Positive z is back.





-----------

### MLAudioGetSpatialSoundPosition {#mlresult-mlaudiogetspatialsoundposition}

```cpp
MLResult MLAudioGetSpatialSoundPosition(
    MLHandle handle,
    uint32_t channel,
    MLVec3f * out_position
)
```

Returns the 3D position for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose position is being read. |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) * |out_position|[MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) struct to return the position.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned 3D position of audio channel. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


Multi-channel sounds require the 3D position to be read individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right. Positive x is right. Positive y is up. Positive z is back.





-----------

### MLAudioSetSpatialSoundDirection {#mlresult-mlaudiosetspatialsounddirection}

```cpp
MLResult MLAudioSetSpatialSoundDirection(
    MLHandle handle,
    uint32_t channel,
    const MLQuaternionf * direction
)
```

Sets the radiation direction for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose direction is being set. |
| const [MLQuaternionf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) * |direction|[MLQuaternionf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) struct to set the direction.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set radiation direction. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed to set radiation directionS due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


For sounds that have been set to radiate in a directional way by MLAudioSetSpatialSoundRadiation, this function sets the direction of the radiation. Multi-channel sounds require the radiation direction to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.





-----------

### MLAudioGetSpatialSoundDirection {#mlresult-mlaudiogetspatialsounddirection}

```cpp
MLResult MLAudioGetSpatialSoundDirection(
    MLHandle handle,
    uint32_t channel,
    MLQuaternionf * out_direction
)
```

Returns the radiation direction for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose direction is being read. |
| [MLQuaternionf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) * |out_direction|[MLQuaternionf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) struct to return the direction.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned radiation direction. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


Multi-channel sounds require the radiation direction to be read individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.





-----------

### MLAudioSetSpatialSoundBillboarding {#mlresult-mlaudiosetspatialsoundbillboarding}

```cpp
MLResult MLAudioSetSpatialSoundBillboarding(
    MLHandle id,
    bool is_billboarding
)
```

Sets a mode where the sound always faces the listener. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |id|MLHandle Used to identify the sound output. |
| bool |is_billboarding|Determines whether the sound always faces the listener.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_OK|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Unable to find resource handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Unavailable for this sound.|
**Required Permissions**:

  * None 


When 3D audio processing is enabled for a sound output (see MLAudioSetSpatialSoundEnable) this call can be used to ensure a spatial sound always faces the listener. This allows the sound's radiation pattern to be used for proper acoustic propagation, while always ensuring the listener hears the sound head on. While this setting is enabled, values set by MLAudioSetSpatialSoundDirection are unused.




**API Level:**
  * 20




-----------

### MLAudioGetSpatialSoundBillboarding {#mlresult-mlaudiogetspatialsoundbillboarding}

```cpp
MLResult MLAudioGetSpatialSoundBillboarding(
    MLHandle id,
    bool * out_is_billboarding
)
```

Indicates whether the sound automatically faces the listener. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |id|MLHandle Used to identify the sound output. |
| bool * |out_is_billboarding|Indicates whether the sound automatically faces the listener.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_OK|Successfully returned distance properties. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Unavailable for this sound.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLAudioSetSpatialSoundObstruction {#mlresult-mlaudiosetspatialsoundobstruction}

```cpp
MLResult MLAudioSetSpatialSoundObstruction(
    MLHandle id,
    uint32_t channel,
    const MLAudioObstruction * left_ear,
    const MLAudioObstruction * right_ear
)
```

Sets the direct path obstruction for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |id|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose obstruction is being set. |
| const [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) * |left_ear|[MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) for the direct path to left ear. |
| const [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) * |right_ear|[MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) for the direct path to right ear.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Handle not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Unavailable for this sound. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 


When 3D audio processing is enabled for a sound output (see MLAudioSetSpatialSoundEnable) this call sets the obstruction of the direct path from that source to each ear of the listener. Multi-channel sounds require the ear obstructions to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.



:::note
This API property is not intended to be user-specified, but rather set as part of a physics update.
:::


**API Level:**
  * 20




-----------

### MLAudioGetSpatialSoundObstruction {#mlresult-mlaudiogetspatialsoundobstruction}

```cpp
MLResult MLAudioGetSpatialSoundObstruction(
    MLHandle id,
    uint32_t channel,
    MLAudioObstruction * out_left_ear,
    MLAudioObstruction * out_right_ear
)
```

Returns the direct path obstruction for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |id|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose obstruction is being set. |
| [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) * |out_left_ear|[MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) to return the obstruction for left ear. |
| [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) * |out_right_ear|[MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) to return the obstruction for right ear.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Handle not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Unavailable for this sound. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 


Multi-channel sounds require the ear obstructions to be read individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.



:::note
This API property is not intended to be user-specified, but rather set as part of a physics update.
:::


**API Level:**
  * 20




-----------

### MLAudioSetSpatialSoundObstructionOverride {#mlresult-mlaudiosetspatialsoundobstructionoverride}

```cpp
MLResult MLAudioSetSpatialSoundObstructionOverride(
    MLHandle id,
    const MLAudioMultibandLevel * override
)
```

Sets an override that enables the sound to pass through obstructions. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |id|MLHandle Used to identify the sound output. |
| const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |override|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) used to set the override.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_OK|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Unable to find resource handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Unavailable for this sound. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 


When 3D audio processing is enabled for a sound output (see MLAudioSetSpatialSoundEnable) this call can be used to vary the degree to which the sound passes through obstructions. A MultibandLevel is used to set the override values, 0 representing no change, 1 representing fully transmissive, per band. For multi-channel sounds, all channels are affected equally by the single obstruction override for the sound.




**API Level:**
  * 20




-----------

### MLAudioGetSpatialSoundObstructionOverride {#mlresult-mlaudiogetspatialsoundobstructionoverride}

```cpp
MLResult MLAudioGetSpatialSoundObstructionOverride(
    MLHandle id,
    MLAudioMultibandLevel * out_override
)
```

Returns the amount of the sound obstruction override. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |id|MLHandle Used to identify the sound output. |
| [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |out_override|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) used to return the override.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_OK|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Unable to find resource handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Unavailable for this sound. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 


Obstruction override is returned as a MultibandLevel, with 0 representing no change and 1 representing fully transmissive, per band. For multi-channel sounds, all channels are affected equally by the single obstruction override for the sound.




**API Level:**
  * 20




-----------

### MLAudioSetSpatialSoundDistanceAttenuation {#mlresult-mlaudiosetspatialsounddistanceattenuation}

```cpp
MLResult MLAudioSetSpatialSoundDistanceAttenuation(
    MLHandle handle,
    uint32_t channel,
    const MLAudioSpatialSoundDistanceProperties * properties
)
```

Sets the distance properties for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose distance properties are being set. |
| const [MLAudioSpatialSoundDistanceProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md) * |properties|[MLAudioSpatialSoundDistanceProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md) struct to set the properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Handle not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 


When 3D audio processing is enabled for a sound output (see MLAudioSetSpatialSoundEnable) this function sets the way in which distance affects sound volume. Multi-channel sounds require the distance properties to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.




**API Level:**
  * 20




-----------

### MLAudioGetSpatialSoundDistanceAttenuation {#mlresult-mlaudiogetspatialsounddistanceattenuation}

```cpp
MLResult MLAudioGetSpatialSoundDistanceAttenuation(
    MLHandle handle,
    uint32_t channel,
    MLAudioSpatialSoundDistanceProperties * out_properties
)
```

Returns the distance properties for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose distance properties are being read. |
| [MLAudioSpatialSoundDistanceProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md) * |out_properties|[MLAudioSpatialSoundDistanceProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md) struct to return the properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Handle not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 


Multi-channel sounds require the distance properties to be read individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.




**API Level:**
  * 20




-----------

### MLAudioSetSpatialSoundRadiation {#mlresult-mlaudiosetspatialsoundradiation}

```cpp
MLResult MLAudioSetSpatialSoundRadiation(
    MLHandle handle,
    uint32_t channel,
    const MLAudioSpatialSoundRadiationProperties * properties
)
```

Sets the radiation properties for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose radiation properties are being set. |
| const [MLAudioSpatialSoundRadiationProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md) * |properties|[MLAudioSpatialSoundRadiationProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md) struct to set the properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set radiation properties. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


When 3D audio processing is enabled for a sound output (see MLAudioSetSpatialSoundEnable) this function sets the degree of directionality in the sound projection. The default setting is for sounds to be omnidirectional (equal projection in all directions). Multi-channel sounds require the radiation properties to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.




**API Level:**
  * 20




-----------

### MLAudioGetSpatialSoundRadiation {#mlresult-mlaudiogetspatialsoundradiation}

```cpp
MLResult MLAudioGetSpatialSoundRadiation(
    MLHandle handle,
    uint32_t channel,
    MLAudioSpatialSoundRadiationProperties * out_properties
)
```

Returns the radiation properties for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose radiation properties are being set. |
| [MLAudioSpatialSoundRadiationProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md) * |out_properties|[MLAudioSpatialSoundRadiationProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md) struct to return the properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned radiation properties. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


Multi-channel sounds require the radiation properties to be read individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.




**API Level:**
  * 20




-----------

### MLAudioSetSpatialSoundDirectLevel {#mlresult-mlaudiosetspatialsounddirectlevel}

```cpp
MLResult MLAudioSetSpatialSoundDirectLevel(
    MLHandle handle,
    uint32_t channel,
    const MLAudioMultibandLevel * level
)
```

Sets the direct sound level for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose direct level is being set. |
| const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |level|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) struct to set the gain and eq.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set direct send levels. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


When 3D audio processing is enabled for a sound output (see MLAudioSetSpatialSoundEnable) this function sets gain and 3-band eq for the direct component of the sound, i.e., the audio mix for the part of the sound not affected by room acoustics. Multi-channel sounds require the direct send levels to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.




**API Level:**
  * 20




-----------

### MLAudioGetSpatialSoundDirectLevel {#mlresult-mlaudiogetspatialsounddirectlevel}

```cpp
MLResult MLAudioGetSpatialSoundDirectLevel(
    MLHandle handle,
    uint32_t channel,
    MLAudioMultibandLevel * out_level
)
```

Returns the direct sound level for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose direct level is being read. |
| [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |out_level|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) struct to return the gain and eq.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned direct send levels. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


Multi-channel sounds require the direct sound level to be read individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.




**API Level:**
  * 20




-----------

### MLAudioSetSpatialSoundIndirectLevel {#mlresult-mlaudiosetspatialsoundindirectlevel}

```cpp
MLResult MLAudioSetSpatialSoundIndirectLevel(
    MLHandle handle,
    uint32_t channel,
    const MLAudioMultibandLevel * level
)
```

Sets the indirect sound level for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose indirect sound level is being set. |
| const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |level|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) struct to set the gain and eq.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Handle not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 


When 3D audio processing is enabled for a sound output (see MLAudioSetSpatialSoundEnable) this function sets gain and 3-band eq for the indirect component of the sound, i.e., the audio mix for the part of the sound that's affected by room acoustics (includes reflections and reverb). Multi-channel sounds require the indirect sound level to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.




**API Level:**
  * 20




-----------

### MLAudioGetSpatialSoundIndirectLevel {#mlresult-mlaudiogetspatialsoundindirectlevel}

```cpp
MLResult MLAudioGetSpatialSoundIndirectLevel(
    MLHandle handle,
    uint32_t channel,
    MLAudioMultibandLevel * out_level
)
```

Returns the indirect sound level for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose indirect sound level is being read. |
| [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |out_level|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) struct to return the gain and eq.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Handle not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 


Multi-channel sounds require the indirect sound level to be read individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.




**API Level:**
  * 20




-----------

### MLAudioSetSpatialSoundDispersionSendLevel {#mlresult-mlaudiosetspatialsounddispersionsendlevel}

```cpp
MLResult MLAudioSetSpatialSoundDispersionSendLevel(
    MLHandle handle,
    uint32_t channel,
    const MLAudioMultibandLevel * level
)
```

Sets the dispersion level for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose dispersion level is being set. |
| const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |level|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) struct to set the gain and eq.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set room send levels. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


When 3D audio processing is enabled for a sound output (see MLAudioSetSpatialSoundEnable) this function sets gain and 3-band eq for the dispersion component of the sound, i.e., the audio mix for late clustered reflections caused by room acoustics (also controlled by MLAudioSetSpatialSoundIndirectLevel). Multi-channel sounds require the dispersion level to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.




**API Level:**
  * 20




-----------

### MLAudioGetSpatialSoundDispersionSendLevel {#mlresult-mlaudiogetspatialsounddispersionsendlevel}

```cpp
MLResult MLAudioGetSpatialSoundDispersionSendLevel(
    MLHandle handle,
    uint32_t channel,
    MLAudioMultibandLevel * out_level
)
```

Returns the dispersion level for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose dispersion level is being read. |
| [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |out_level|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) struct to return the gain and eq.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned room send levels. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


Multi-channel sounds require the dispersion level to be read individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.




**API Level:**
  * 20




-----------

### MLAudioSetSpatialSoundReverbSendLevel {#mlresult-mlaudiosetspatialsoundreverbsendlevel}

```cpp
MLResult MLAudioSetSpatialSoundReverbSendLevel(
    MLHandle handle,
    uint32_t channel,
    const MLAudioMultibandLevel * level
)
```

Sets the reverb level for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose reverb level is being set. |
| const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |level|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) struct to set the gain and eq.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Handle not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 


When 3D audio processing is enabled for a sound output (see MLAudioSetSpatialSoundEnable) this function sets gain and 3-band eq for the reverb component of the sound, i.e., the audio mix for late reverberation caused by room acoustics (also controlled by MLAudioSetSpatialSoundIndirectLevel). Multi-channel sounds require the reverb level to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.




**API Level:**
  * 20




-----------

### MLAudioGetSpatialSoundReverbSendLevel {#mlresult-mlaudiogetspatialsoundreverbsendlevel}

```cpp
MLResult MLAudioGetSpatialSoundReverbSendLevel(
    MLHandle handle,
    uint32_t channel,
    MLAudioMultibandLevel * out_level
)
```

Returns the reverb level for one channel of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |channel|Selects the channel whose reverb level is being read. |
| [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |out_level|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) struct to return the gain and eq.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Handle not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 


Multi-channel sounds require the reverb level to be read individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.




**API Level:**
  * 20




-----------

### MLAudioSetSpatialSoundHeadRelative {#mlresult-mlaudiosetspatialsoundheadrelative}

```cpp
MLResult MLAudioSetSpatialSoundHeadRelative(
    MLHandle handle,
    bool is_head_relative
)
```

Sets whether the coordinates for a sound output are head relative. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle Used to identify the sound output. |
| bool |is_head_relative|Determines whether the coordinates are head relative.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set the relative state of coordinates. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


This call can be used to make the coordinate system of the specified sound be head relative, in which case the user's head position and orientation are ignored when simulating the sound's spatial position and direction. This is useful for sounds attached to graphics objects that don't use headpose, or when the desired effect is for sound position and direction to be fixed relative to the head. Head relative sounds always point at the user's head like "billboarding" graphics. If a sound is not explicitly told to use head relative coordinates, world coordinates are used by default.




**API Level:**
  * 7




-----------

### MLAudioGetSpatialSoundHeadRelative {#mlresult-mlaudiogetspatialsoundheadrelative}

```cpp
MLResult MLAudioGetSpatialSoundHeadRelative(
    MLHandle handle,
    bool * out_is_head_relative
)
```

Returns whether the coordinates for a sound output are head relative. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle Used to identify the sound output. |
| bool * |out_is_head_relative|Indicates whether the coordinates are head relative.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned whether coordinates are head relative. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


This call can be used to determine if the coordinate system of the specified sound has been set to be head relative.




**API Level:**
  * 20




-----------

### MLAudioGetSpatialRaycastRequests {#mlresult-mlaudiogetspatialraycastrequests}

```cpp
MLResult MLAudioGetSpatialRaycastRequests(
    MLAudioRaycastRequest ** out_raycast_requests,
    uint32_t * out_request_count
)
```

Returns a list of ID-tracked requests for raycast operations. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioRaycastRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_request.md) ** |out_raycast_requests|Returns list of requests for raycast operation. |
| uint32_t * |out_request_count|Returns number of raycast operations requested.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 




:::note

  * This function is not intended to be called directly by developers. 
  * The caller is responsible for deallocating the memory containing the raycast requests.

:::


**API Level:**
  * 20




-----------

### MLAudioSetSpatialRaycastResults {#mlresult-mlaudiosetspatialraycastresults}

```cpp
MLResult MLAudioSetSpatialRaycastResults(
    MLAudioRaycastResult * raycast_results,
    uint32_t result_count
)
```

Sets the ID-tracked results for previously requested raycast operations. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioRaycastResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_result.md) * |raycast_results|Sets the list of raycast operation results. |
| uint32_t |result_count|Sets the number of raycast results.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 




:::note
This function is not intended to be called directly by developers.
:::


**API Level:**
  * 20




-----------






