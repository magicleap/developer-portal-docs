---
title: ml_audio.h

---

# ml_audio.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)** <br></br>Properties specifying a broadband level and three sub-band levels.  |
| struct | **[MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md)**  |
| struct | **[MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md)** <br></br>Properties specifying acoustic reverberation.  |
| struct | **[MLAudioSpatialSoundDistanceProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md)**  |
| struct | **[MLAudioSpatialSoundRadiationProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md)**  |
| struct | **[MLAudioRaycast](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast.md)** <br></br>Two points in space describing a ray.  |
| struct | **[MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md)** <br></br>Obstruction along a ray.  |
| struct | **[MLAudioRaycastRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_request.md)** <br></br>ID-tracked request for a single raycast operation.  |
| struct | **[MLAudioRaycastResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_result.md)** <br></br>ID-tracked result for a single raycast operation.  |
| struct | **[MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md)** <br></br>Buffer format settings for input and output streams.  |
| struct | **[MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md)**  |
| struct | **[MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) | **[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#struct-mlaudiomultibandlevel)** <br></br>Properties specifying a broadband level and three sub-band levels.  |
| typedef struct [MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) | **[MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md#struct-mlaudiodispersionproperties)**  |
| typedef struct [MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) | **[MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md#struct-mlaudioreverbproperties)** <br></br>Properties specifying acoustic reverberation.  |
| typedef struct [MLAudioSpatialSoundDistanceProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md) | **[MLAudioSpatialSoundDistanceProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/group___def_spatial_sound.md#struct-mlaudiospatialsounddistanceproperties)**  |
| typedef struct [MLAudioSpatialSoundRadiationProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md) | **[MLAudioSpatialSoundRadiationProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/group___def_spatial_sound.md#struct-mlaudiospatialsoundradiationproperties)**  |
| typedef struct [MLAudioRaycast](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast.md) | **[MLAudioRaycast](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/group___def_spatial_sound.md#struct-mlaudioraycast)** <br></br>Two points in space describing a ray.  |
| typedef struct [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) | **[MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/group___def_spatial_sound.md#struct-mlaudioobstruction)** <br></br>Obstruction along a ray.  |
| typedef struct [MLAudioRaycastRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_request.md) | **[MLAudioRaycastRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/group___def_spatial_sound.md#struct-mlaudioraycastrequest)** <br></br>ID-tracked request for a single raycast operation.  |
| typedef struct [MLAudioRaycastResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_result.md) | **[MLAudioRaycastResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/group___def_spatial_sound.md#struct-mlaudioraycastresult)** <br></br>ID-tracked result for a single raycast operation.  |
| typedef struct [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) | **[MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#struct-mlaudiobufferformat)** <br></br>Buffer format settings for input and output streams.  |
| typedef struct [MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) | **[MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#struct-mlaudiobuffer)**  |
| typedef struct [MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) | **[MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#struct-mlaudiospectralanalysis)**  |
| typedef void(*)(MLHandle handle, MLAudioSoundEvent event, void *context) | **[MLAudioSoundEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiosoundeventcallback)** <br></br>Callback to notify when a sound event has occurred.  |
| typedef void(*)(MLAudioMediaEvent event, void *context) | **[MLAudioMediaEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomediaeventcallback)** <br></br>Callback to notify when a media event has occurred.  |
| typedef void(*)(MLHandle handle, void *context) | **[MLAudioBufferCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiobuffercallback)** <br></br>Callback to notify when an audio buffer is available for reading or writing.  |
| typedef void(*)(MLHandle resource, void *context) | **[MLAudioResourceDiscardedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudioresourcediscardedcallback)** <br></br>Callback to notify when audio resource data is being discarded to make room for other resource data. Resources that are not being referenced by a sound will be discarded before resources that are being referenced by a sound. Resources that are being played by a sound will not be discarded.  |
| typedef void(*)(float new_volume, void *context) | **[MLAudioMasterVolumeChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomastervolumechangedcallback)** <br></br>Callback to notify when master volume has been changed.  |
| typedef void(*)(bool is_muted, void *context) | **[MLAudioOutputMuteChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiooutputmutechangedcallback)** <br></br>Callback to notify when the global Output Mute has changed.  |
| typedef void(*)(MLAudioOutputDevice current_device, void *context) | **[MLAudioOutputDeviceChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiooutputdevicechangedcallback)** <br></br>Callback to notify when the output device has changed.  |
| typedef void(*)(bool is_muted, void *context) | **[MLAudioMicMuteCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomicmutecallback)** <br></br>Callback to notify when global mic mute has been changed.  |
| typedef void(*)(MLHandle handle, MLAudioTraitAnalysisTarget target, float value, void *context) | **[MLAudioTraitAnalysisCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiotraitanalysiscallback)** <br></br>Callback to provide a changed value for a running trait analysis.  |
| typedef void(*)(MLHandle handle, MLAudioSpectralAnalysisTarget target, MLAudioSpectralAnalysis values, void *context) | **[MLAudioSpectralAnalysisCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiospectralanalysiscallback)** <br></br>Callback to provide a changed value for a running spectral analysis.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLAudioState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiostate)** <br></br> { <br></br>[MLAudioState_Stopped](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiostate-stopped),<br></br> [MLAudioState_Playing](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiostate-playing),<br></br> [MLAudioState_Paused](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiostate-paused),<br></br> [MLAudioState_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiostate-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLAudioSoundEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiosoundevent)** <br></br> { <br></br>[MLAudioSoundEvent_End](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiosoundevent-end),<br></br> [MLAudioSoundEvent_Loop](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiosoundevent-loop),<br></br> [MLAudioSoundEvent_MutedBySystem](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiosoundevent-mutedbysystem),<br></br> [MLAudioSoundEvent_UnmutedBySystem](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiosoundevent-unmutedbysystem),<br></br> [MLAudioSoundEvent_DuckedBySystem](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiosoundevent-duckedbysystem),<br></br> [MLAudioSoundEvent_UnduckedBySystem](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiosoundevent-unduckedbysystem),<br></br> [MLAudioSoundEvent_ResourceDestroyed](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiosoundevent-resourcedestroyed),<br></br> [MLAudioSoundEvent_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiosoundevent-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLAudioMediaEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiomediaevent)** <br></br> { <br></br>[MLAudioMediaEvent_Play](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiomediaevent-play),<br></br> [MLAudioMediaEvent_Stop](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiomediaevent-stop),<br></br> [MLAudioMediaEvent_Pause](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiomediaevent-pause),<br></br> [MLAudioMediaEvent_NextTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiomediaevent-nexttrack),<br></br> [MLAudioMediaEvent_PrevTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiomediaevent-prevtrack),<br></br> [MLAudioMediaEvent_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiomediaevent-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLAudioOutputDevice](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_parameters.md#enums-mlaudiooutputdevice)** <br></br> { <br></br>[MLAudioOutputDevice_Wearable](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiooutputdevice-wearable),<br></br> [MLAudioOutputDevice_USB](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiooutputdevice-usb),<br></br> [MLAudioOutputDevice_Bluetooth](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiooutputdevice-bluetooth),<br></br> [MLAudioOutputDevice_HearingAid](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiooutputdevice-hearingaid),<br></br> [MLAudioOutputDevice_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiooutputdevice-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLAudioMicCaptureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#enums-mlaudiomiccapturetype)** <br></br> { <br></br>[MLAudioMicCaptureType_VoiceComm](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiomiccapturetype-voicecomm),<br></br> [MLAudioMicCaptureType_VoiceCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiomiccapturetype-voicecapture),<br></br> [MLAudioMicCaptureType_WorldCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiomiccapturetype-worldcapture) =4,<br></br> [MLAudioMicCaptureType_RawMicsAndAECRef](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiomiccapturetype-rawmicsandaecref),<br></br> [MLAudioMicCaptureType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiomiccapturetype-ensure32bits) =0x7FFFFFFF<br></br>}<br></br>The type of mic input to capture.  |
| enum | **[MLAudioSampleFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiosampleformat)** <br></br> { <br></br>[MLAudioSampleFormat_Int](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiosampleformat-int),<br></br> [MLAudioSampleFormat_Float](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiosampleformat-float),<br></br> [MLAudioSampleFormat_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiosampleformat-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLAudioChannelFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/group___def_buffering.md#enums-mlaudiochannelformat)** <br></br> { <br></br>[MLAudioChannelFormat_Default](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiochannelformat-default),<br></br> [MLAudioChannelFormat_AmbisonicAmbix](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiochannelformat-ambisonicambix),<br></br> [MLAudioChannelFormat_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiochannelformat-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLAudioTraitAnalysisTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiotraitanalysistarget)** <br></br> { <br></br>[MLAudioTraitAnalysisTarget_AmbientSoundLevelDbfs](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiotraitanalysistarget-ambientsoundleveldbfs),<br></br> [MLAudioTraitAnalysisTarget_UserVoicePresence](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiotraitanalysistarget-uservoicepresence),<br></br> [MLAudioTraitAnalysisTarget_UserVoiceLevelDbfs](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiotraitanalysistarget-uservoiceleveldbfs),<br></br> [MLAudioTraitAnalysisTarget_UserVoicePitch](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiotraitanalysistarget-uservoicepitch),<br></br> [MLAudioTraitAnalysisTarget_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiotraitanalysistarget-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLAudioSpectralAnalysisTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiospectralanalysistarget)** <br></br> { <br></br>[MLAudioSpectralAnalysisTarget_UserVoiceSpectrumMfcc](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiospectralanalysistarget-uservoicespectrummfcc),<br></br> [MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumBark](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiospectralanalysistarget-ambientsoundspectrumbark),<br></br> [MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumMel](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiospectralanalysistarget-ambientsoundspectrummel),<br></br> [MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumThirdOctave](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiospectralanalysistarget-ambientsoundspectrumthirdoctave),<br></br> [MLAudioSpectralAnalysisTarget_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudiospectralanalysistarget-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[Anonymous Enum 3](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-anonymous-enum-3)** <br></br> { <br></br>[MLResultAPIPrefix_Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlresultapiprefix-audio) = ( 0x9e11  << 16)<br></br>} |
| enum | **[MLAudioResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#enums-mlaudioresult)** <br></br> { <br></br>[MLAudioResult_NotImplemented](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-notimplemented) = MLResultAPIPrefix_Audio,<br></br> [MLAudioResult_HandleNotFound](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-handlenotfound),<br></br> [MLAudioResult_InvalidSampleRate](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-invalidsamplerate),<br></br> [MLAudioResult_InvalidBitsPerSample](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-invalidbitspersample),<br></br> [MLAudioResult_InvalidValidBits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-invalidvalidbits),<br></br> [MLAudioResult_InvalidSampleFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-invalidsampleformat),<br></br> [MLAudioResult_InvalidChannelCount](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-invalidchannelcount),<br></br> [MLAudioResult_InvalidBufferSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-invalidbuffersize),<br></br> [MLAudioResult_BufferNotReady](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-buffernotready),<br></br> [MLAudioResult_FileNotFound](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-filenotfound),<br></br> [MLAudioResult_FileNotRecognized](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-filenotrecognized),<br></br> [MLAudioResult_ResourceNotFound](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-resourcenotfound),<br></br> [MLAudioResult_ResourceDiscarded](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-resourcediscarded),<br></br> [MLAudioResult_OperationUnavailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-operationunavailable),<br></br> [MLAudioResult_OperationNotReady](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-operationnotready),<br></br> [MLAudioResult_InternalConfigError](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-internalconfigerror),<br></br> [MLAudioResult_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__audio_8h.md#enums-mlaudioresult-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Return values for Audio Service API calls.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| const char * | **[MLAudioGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_result_codes.md#const-char-mlaudiogetresultstring)**([MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result_code)<br></br>Returns an ASCII string for each result code.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateLoadedResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreateloadedresource)**(int file, bool dynamic_decode, [MLAudioResourceDiscardedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudioresourcediscardedcallback) callback, void * context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_resource)<br></br>Creates a new audio resource that references a loaded audio file.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateStreamedResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreatestreamedresource)**(int file, [MLAudioResourceDiscardedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudioresourcediscardedcallback) callback, void * context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_resource)<br></br>Creates a new audio resource that references a streamed audio file.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCheckResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocheckresource)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) resource, bool * out_is_ready)<br></br>Checks whether an audio resource has been discarded due to memory limits.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetResourceSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiogetresourcesize)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) resource, uint32_t * out_size_in_bytes)<br></br>Returns the size of the memory footprint for a loaded audio resource.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioRefreshResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiorefreshresource)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) resource, int file)<br></br>Refreshes an audio resource whose data was discarded due to memory limits.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioDestroyResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiodestroyresource)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) resource)<br></br>Destroys a previously created audio resource. If there are sounds that are currently playing the resource, they will be stopped, and an event callback will be issued for MLAudioSoundEvent_ResourceDestroyed.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateSoundWithLoadedResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreatesoundwithloadedresource)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) resource, bool auto_destroy, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound output that plays a loaded audio resource.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateSoundWithStreamedResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreatesoundwithstreamedresource)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) resource, bool auto_destroy, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound output that plays a streamed audio resource.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateSoundWithLoadedFile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiocreatesoundwithloadedfile)**(int file, bool auto_destroy, bool dynamic_decode, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound output that plays a loaded file.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateSoundWithStreamedFile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiocreatesoundwithstreamedfile)**(int file, bool auto_destroy, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound output that plays a streamed file.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateSoundWithBufferedOutput](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiocreatesoundwithbufferedoutput)**(const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * format, uint32_t buffer_size_in_bytes, [MLAudioBufferCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiobuffercallback) callback, void * context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound output that plays a buffered audio output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioDestroySound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiodestroysound)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroys a previously created sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioStartSound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiostartsound)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Starts playback for a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioStopSound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiostopsound)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Stops playback for a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioPauseSound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiopausesound)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Pauses playback for a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioResumeSound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudioresumesound)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Resumes playback for a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSoundState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiogetsoundstate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLAudioState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiostate) * out_state)<br></br>Indicates the play state of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSoundFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiogetsoundformat)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * out_format)<br></br>Returns the audio format of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSoundEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiosetsoundeventcallback)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLAudioSoundEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiosoundeventcallback) callback, void * context)<br></br>Registers a callback for events on a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetMediaEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiosetmediaeventcallback)**([MLAudioMediaEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomediaeventcallback) callback, void * context)<br></br>Registers a callback for user-issued media control events.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSoundVolumeLinear](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundvolumelinear)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float volume)<br></br>Sets the volume of a sound output using a linear scale.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSoundVolumeLinear](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundvolumelinear)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float * out_volume)<br></br>Returns the volume of a sound output using a linear scale.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSoundVolumeDb](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundvolumedb)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float volume)<br></br>Sets the volume of a sound output using a decibel scale.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSoundVolumeDb](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundvolumedb)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float * out_volume)<br></br>Returns the volume of a sound output using a decibel scale.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSoundPitch](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundpitch)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float pitch)<br></br>Sets the pitch of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSoundPitch](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundpitch)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float * out_pitch)<br></br>Returns the pitch of a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSoundMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundmute)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, bool is_muted)<br></br>Mutes or un-mutes a sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSoundMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundmute)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, bool * out_is_muted)<br></br>Returns whether a sound output is muted or not.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSoundBypassesMasterVolume](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundbypassesmastervolume)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, bool is_bypassing)<br></br>Sets whether a sound output is exempt from attenuation due to master volume.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSoundBypassesMasterVolume](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundbypassesmastervolume)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, bool * out_is_bypassing)<br></br>Queries whether a sound output is exempt from attenuation due to master volume.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetSoundLooping](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundlooping)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, bool is_looping)<br></br>Sets whether a sound output is looping or not.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSoundLooping](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundlooping)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, bool * out_is_looping)<br></br>Returns whether a sound output is looping or not.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetStreamedFileOffset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetstreamedfileoffset)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t offset_in_msec)<br></br>Sets the playback position for a streamed file.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetStreamedFileOffset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetstreamedfileoffset)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t * out_offset_in_msec)<br></br>Returns the playback position for a streamed file.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetOutputDevice](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetoutputdevice)**([MLAudioOutputDevice](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_parameters.md#enums-mlaudiooutputdevice) * out_current_device)<br></br>Returns which type of sound output device is being used for sound output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetOutputDeviceCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetoutputdevicecallback)**([MLAudioOutputDeviceChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiooutputdevicechangedcallback) callback, void * context)<br></br>Registers a callback for audio output device change.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioResetAcousticScene](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudioresetacousticscene)**()<br></br>Resets the Acoustic Scene associated with the caller.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioBeginAcousticSceneUpdate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiobeginacousticsceneupdate)**()<br></br>Signals beginning of grouped Acoustic parameter multi-update.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioEndAcousticSceneUpdate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudioendacousticsceneupdate)**()<br></br>Signals end of grouped Acoustic parameter multi-update.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetAcousticSceneMapEnable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenemapenable)**(bool is_enabled)<br></br>Enables/disables Acoustic Map data for the Acoustic Scene.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetAcousticSceneMapEnable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenemapenable)**(bool * out_is_enabled)<br></br>Indicates whether Acoustic Map data is enabled for the Acoustic Scene.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetAcousticSceneTransmissionDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenetransmissiondefault)**(const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * transmission)<br></br>Sets amount of sound transmitted through non-Acoustic Element objects.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetAcousticSceneTransmissionDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenetransmissiondefault)**([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * out_transmission)<br></br>Returns amount of sound transmitted through non-Acoustic Element objects.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetAcousticSceneDispersionDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenedispersiondefault)**(const [MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) * properties)<br></br>Sets the fallback room properties to be used when none are otherwise specified.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetAcousticSceneDispersionDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenedispersiondefault)**([MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) * out_properties)<br></br>Returns the default room properties used when none are otherwise specified.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetAcousticSceneReverbDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenereverbdefault)**(const [MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) * properties)<br></br>Sets the fallback room properties to be used when none are otherwise specified.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetAcousticSceneReverbDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenereverbdefault)**([MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) * out_properties)<br></br>Returns the default room properties used when none are otherwise specified.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetChangedAcousticMap](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetchangedacousticmap)**(uint32_t prev_map_tag, uint8_t ** out_map_data, uint32_t * out_map_size_in_bytes, uint32_t * out_map_tag)<br></br>Returns the Acoustic Map if updated since previous call.  |
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
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetBufferedOutputDefaults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetbufferedoutputdefaults)**(uint32_t channel_count, uint32_t samples_per_second, float max_pitch_change, [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * out_format, uint32_t * out_recommended_size_in_bytes, uint32_t * out_min_size_in_bytes)<br></br>Returns the preferred (i.e. best performing) settings for buffered output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetBufferedOutputLatency](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetbufferedoutputlatency)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float * out_latency_in_msec)<br></br>Returns the latency for a buffered output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetBufferedOutputFramesPlayed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetbufferedoutputframesplayed)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t * out_frames_played)<br></br>Returns the number of audio frames played by a buffered output.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetOutputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetoutputbuffer)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) * out_buf)<br></br>Returns an empty buffer for writing more buffered data.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioReleaseOutputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudioreleaseoutputbuffer)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Releases a buffer once it has been filled.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetMasterVolume](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiogetmastervolume)**(float * out_volume)<br></br>Returns the master volume for the audio system.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetMasterVolumeCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiosetmastervolumecallback)**([MLAudioMasterVolumeChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomastervolumechangedcallback) callback, void * context)<br></br>Registers a callback for changes to the master volume.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetOutputMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiogetoutputmute)**(bool * out_is_muted)<br></br>Indicates whether the output mute of the audio system is on or off.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetOutputMuteCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiosetoutputmutecallback)**([MLAudioOutputMuteChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiooutputmutechangedcallback) callback, void * context)<br></br>Registers a callback for audio output mute change.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateInputFromMicCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_allocation.md#mlresult-mlaudiocreateinputfrommiccapture)**([MLAudioMicCaptureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#enums-mlaudiomiccapturetype) mic_capture_type, const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * format, uint32_t buffer_size_in_bytes, [MLAudioBufferCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiobuffercallback) callback, void * context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound input that provides audio from the mics on the wearable.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateInputFromVirtualCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_allocation.md#mlresult-mlaudiocreateinputfromvirtualcapture)**(const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * format, uint32_t buffer_size, [MLAudioBufferCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiobuffercallback) callback, void * callback_context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound input that provides a "virtual capture" stream.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateInputFromMixedCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_allocation.md#mlresult-mlaudiocreateinputfrommixedcapture)**(const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * format, uint32_t buffer_size, [MLAudioBufferCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiobuffercallback) callback, void * callback_context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound input that provides a "mixed capture" stream.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioDestroyInput](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_allocation.md#mlresult-mlaudiodestroyinput)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroys a previously created sound input.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioStartInput](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_control.md#mlresult-mlaudiostartinput)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Starts capture for a sound input.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioStopInput](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_control.md#mlresult-mlaudiostopinput)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Stops capture for a sound input.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetInputState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_control.md#mlresult-mlaudiogetinputstate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLAudioState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiostate) * out_state)<br></br>Indicates the play state of a sound input.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetBufferedInputDefaults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudiogetbufferedinputdefaults)**(uint32_t channel_count, uint32_t samples_per_second, [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * out_format, uint32_t * out_recommended_size_in_bytes, uint32_t * out_min_size_in_bytes)<br></br>Returns the preferred (i.e. best performing) settings for buffered input.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetBufferedInputLatency](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudiogetbufferedinputlatency)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float * out_latency_in_msec)<br></br>Returns the latency for a sound input.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetInputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudiogetinputbuffer)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) * out_buf)<br></br>Returns a full buffer containing captured audio data.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioReleaseInputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudioreleaseinputbuffer)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Releases a buffer once it has been read.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetMicMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_mic_muting.md#mlresult-mlaudiosetmicmute)**(bool is_muted)<br></br>Mutes or un-mutes all microphone capture.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetMicMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_mic_muting.md#mlresult-mlaudiogetmicmute)**(bool * out_is_muted)<br></br>Returns whether all microphone capture is muted or not.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetMicMuteCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_mic_muting.md#mlresult-mlaudiosetmicmutecallback)**([MLAudioMicMuteCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomicmutecallback) callback, void * context)<br></br>Registers a callback for changes to the global mic mute.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioBeginTraitAnalysisFromMicCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiobegintraitanalysisfrommiccapture)**([MLAudioTraitAnalysisTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiotraitanalysistarget) target, [MLAudioTraitAnalysisCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiotraitanalysiscallback) callback, void * callback_context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new analysis input for the specified target.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetTraitAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiogettraitanalysis)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float * out_value)<br></br>Returns the current value of the trait analysis associated with the specified handle.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioEndTraitAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudioendtraitanalysis)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Stops a previously started trait analysis.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioBeginSpectralAnalysisFromMicCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiobeginspectralanalysisfrommiccapture)**([MLAudioSpectralAnalysisTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiospectralanalysistarget) target, [MLAudioSpectralAnalysisCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiospectralanalysiscallback) callback, void * callback_context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Starts a new spectral analysis that provides frequency spectrum energy derived from mic signals.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiogetspectralanalysis)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) * out_values)<br></br>Returns the current value of the spectral analysis associated with the specified handle.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioEndSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudioendspectralanalysis)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Stops a previously started spectral analysis.  |

## Enums Documentation

### MLAudioState {#enums-mlaudiostate}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioState_Stopped | | Stopped, can be started. |
| MLAudioState_Playing | | Playing, can be stopped or paused. |
| MLAudioState_Paused | | Paused, can be resumed or re-started. |
| MLAudioState_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Possible playback states for sounds and inputs. 





-----------

### MLAudioSoundEvent {#enums-mlaudiosoundevent}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioSoundEvent_End | | A sound output has reached the end and is stopping. |
| MLAudioSoundEvent_Loop | | A sound output has reached the end and is is looping. |
| MLAudioSoundEvent_MutedBySystem | | A sound output has been selectively muted due to system conditions. |
| MLAudioSoundEvent_UnmutedBySystem | | A previously muted sound output has been unmuted due to system conditions. |
| MLAudioSoundEvent_DuckedBySystem | | A sound output has been selectively ducked due to system conditions. |
| MLAudioSoundEvent_UnduckedBySystem | | A previously ducked sound output has been unducked due to system conditions. |
| MLAudioSoundEvent_ResourceDestroyed | | The resource used by a sound output has been destroyed. |
| MLAudioSoundEvent_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Possible events for individual sound outputs. 





-----------

### MLAudioMediaEvent {#enums-mlaudiomediaevent}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioMediaEvent_Play | | Indicates a user command to play. |
| MLAudioMediaEvent_Stop | | Indicates a user command to stop. |
| MLAudioMediaEvent_Pause | | Indicates a user command to pause. |
| MLAudioMediaEvent_NextTrack | | Indicates a user command to go to next track. |
| MLAudioMediaEvent_PrevTrack | | Indicates a user command to go to previous track. |
| MLAudioMediaEvent_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Possible media control events initiated by the user. 





-----------

### MLAudioOutputDevice {#enums-mlaudiooutputdevice}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioOutputDevice_Wearable | | Built-in speakers in the wearable. |
| MLAudioOutputDevice_USB | | USB audio from the beltpack. |
| MLAudioOutputDevice_Bluetooth | | A2DP audio via Bluetooth. |
| MLAudioOutputDevice_HearingAid | | Hearing Aid audio via Bluetooth. |
| MLAudioOutputDevice_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




The currently active output device. 





-----------

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

### MLAudioSampleFormat {#enums-mlaudiosampleformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioSampleFormat_Int | | Samples are integer. |
| MLAudioSampleFormat_Float | | Samples are float. Not currently implemented. |
| MLAudioSampleFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Possible sample formats for input and output streams. 





-----------

### MLAudioChannelFormat {#enums-mlaudiochannelformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioChannelFormat_Default | | Infer channel format from buffer format settings. |
| MLAudioChannelFormat_AmbisonicAmbix | | Ambisonic AmbiX format. |
| MLAudioChannelFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Channel formats for buffered outputs, specified in [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) reserved field. 





-----------

### MLAudioTraitAnalysisTarget {#enums-mlaudiotraitanalysistarget}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioTraitAnalysisTarget_AmbientSoundLevelDbfs | | Ambient Sound Level dBFS, a full scale sound level measurement of an ambient mic stream. |
| MLAudioTraitAnalysisTarget_UserVoicePresence | | Voice Presence, indicates absence (0) or presence (1) of voice in a voice mic stream. |
| MLAudioTraitAnalysisTarget_UserVoiceLevelDbfs | | Voice Level dBFS, a full scale sound level measurement of a voice mic stream. |
| MLAudioTraitAnalysisTarget_UserVoicePitch | | Voice Pitch, frequency in hertz of the voice in a voice mic stream. |
| MLAudioTraitAnalysisTarget_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Available trait analyses of an audio stream. 





-----------

### MLAudioSpectralAnalysisTarget {#enums-mlaudiospectralanalysistarget}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioSpectralAnalysisTarget_UserVoiceSpectrumMfcc | | Voice Mel Frequency Cepstral Coefficients, spectral analysis of a voice mic stream. (typically used for lip-sync). |
| MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumBark | | Ambient Sound Spectrum Bark Scale, spectral analysis of ambient mic stream(s) using Bark scale. |
| MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumMel | | Ambient Sound Spectrum Mel Scale, spectral analysis of ambient mic stream(s) using Mel scale. |
| MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumThirdOctave | | Ambient Sound Spectrum Third Octave Scale, spectral analysis of ambient mic stream(s) using Third Octave scale. |
| MLAudioSpectralAnalysisTarget_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Available frequency spectrum analyses of an audio stream. 





-----------

### Anonymous Enum 3 {#enums-anonymous-enum-3}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResultAPIPrefix_Audio |  ( 0x9e11  << 16)| Defines the prefix for MLAudioResult codes. |








-----------

### MLAudioResult {#enums-mlaudioresult}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioResult_NotImplemented |  MLResultAPIPrefix_Audio| Function not implemented. |
| MLAudioResult_HandleNotFound | | Not a valid MLHandle for a sound or input. |
| MLAudioResult_InvalidSampleRate | | Sample rate not supported. |
| MLAudioResult_InvalidBitsPerSample | | Bits per sample not supported. |
| MLAudioResult_InvalidValidBits | | Valid bits per sample not supported. |
| MLAudioResult_InvalidSampleFormat | | Sample format not supported. |
| MLAudioResult_InvalidChannelCount | | Channel count not supported. |
| MLAudioResult_InvalidBufferSize | | Buffer size too small. |
| MLAudioResult_BufferNotReady | | Buffer not ready for read or write. |
| MLAudioResult_FileNotFound | | Specified file not found. |
| MLAudioResult_FileNotRecognized | | Specified file has unsupported format. |
| MLAudioResult_ResourceNotFound | | Specified resource is not on the list. |
| MLAudioResult_ResourceDiscarded | | Data was unloaded or file was closed. |
| MLAudioResult_OperationUnavailable | | Requested operation not possible for given item. |
| MLAudioResult_OperationNotReady | | Requested operation has not yet been processed. |
| MLAudioResult_InternalConfigError | | Internal configuration problem was detected. |
| MLAudioResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Return values for Audio Service API calls. 




**API Level:**
  * 4




-----------


## Types Documentation

### MLAudioMultibandLevel {#struct-mlaudiomultibandlevel}

```cpp
typedef struct MLAudioMultibandLevel MLAudioMultibandLevel;
```

Properties specifying a broadband level and three sub-band levels. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)


**API Level:**
  * 20




-----------

### MLAudioDispersionProperties {#struct-mlaudiodispersionproperties}

```cpp
typedef struct MLAudioDispersionProperties MLAudioDispersionProperties;
```


\briefProperties specifying acoustic dispersion (clustered reflections).



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md)


**API Level:**
  * 20




-----------

### MLAudioReverbProperties {#struct-mlaudioreverbproperties}

```cpp
typedef struct MLAudioReverbProperties MLAudioReverbProperties;
```

Properties specifying acoustic reverberation. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md)


**API Level:**
  * 20




-----------

### MLAudioSpatialSoundDistanceProperties {#struct-mlaudiospatialsounddistanceproperties}

```cpp
typedef struct MLAudioSpatialSoundDistanceProperties MLAudioSpatialSoundDistanceProperties;
```


Properties specifying the distance response of a spatial sound. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md)



-----------

### MLAudioSpatialSoundRadiationProperties {#struct-mlaudiospatialsoundradiationproperties}

```cpp
typedef struct MLAudioSpatialSoundRadiationProperties MLAudioSpatialSoundRadiationProperties;
```


Properties specifying the directivity of a spatial sound. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md)



-----------

### MLAudioRaycast {#struct-mlaudioraycast}

```cpp
typedef struct MLAudioRaycast MLAudioRaycast;
```

Two points in space describing a ray. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast.md)


**API Level:**
  * 20




-----------

### MLAudioObstruction {#struct-mlaudioobstruction}

```cpp
typedef struct MLAudioObstruction MLAudioObstruction;
```

Obstruction along a ray. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md)


**API Level:**
  * 20




-----------

### MLAudioRaycastRequest {#struct-mlaudioraycastrequest}

```cpp
typedef struct MLAudioRaycastRequest MLAudioRaycastRequest;
```

ID-tracked request for a single raycast operation. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_request.md)


**API Level:**
  * 20




-----------

### MLAudioRaycastResult {#struct-mlaudioraycastresult}

```cpp
typedef struct MLAudioRaycastResult MLAudioRaycastResult;
```

ID-tracked result for a single raycast operation. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_result.md)


**API Level:**
  * 20




-----------

### MLAudioBufferFormat {#struct-mlaudiobufferformat}

```cpp
typedef struct MLAudioBufferFormat MLAudioBufferFormat;
```

Buffer format settings for input and output streams. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md)


**API Level:**
  * 20




-----------

### MLAudioBuffer {#struct-mlaudiobuffer}

```cpp
typedef struct MLAudioBuffer MLAudioBuffer;
```


An audio buffer for passing data from input streams or to output streams. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md)



-----------

### MLAudioSpectralAnalysis {#struct-mlaudiospectralanalysis}

```cpp
typedef struct MLAudioSpectralAnalysis MLAudioSpectralAnalysis;
```


A representation of frequency spectrum energy over a window of time. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md)



-----------

### MLAudioSoundEventCallback {#void-mlaudiosoundeventcallback}

```cpp
typedef void(* MLAudioSoundEventCallback) (MLHandle handle, MLAudioSoundEvent event, void *context);
```

Callback to notify when a sound event has occurred. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioMediaEventCallback {#void-mlaudiomediaeventcallback}

```cpp
typedef void(* MLAudioMediaEventCallback) (MLAudioMediaEvent event, void *context);
```

Callback to notify when a media event has occurred. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioBufferCallback {#void-mlaudiobuffercallback}

```cpp
typedef void(* MLAudioBufferCallback) (MLHandle handle, void *context);
```

Callback to notify when an audio buffer is available for reading or writing. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioResourceDiscardedCallback {#void-mlaudioresourcediscardedcallback}

```cpp
typedef void(* MLAudioResourceDiscardedCallback) (MLHandle resource, void *context);
```

Callback to notify when audio resource data is being discarded to make room for other resource data. Resources that are not being referenced by a sound will be discarded before resources that are being referenced by a sound. Resources that are being played by a sound will not be discarded. 




:::note

  * The callback will be called on a separate thread. 
  * The audio data should not be refreshed until needed again. 

:::



-----------

### MLAudioMasterVolumeChangedCallback {#void-mlaudiomastervolumechangedcallback}

```cpp
typedef void(* MLAudioMasterVolumeChangedCallback) (float new_volume, void *context);
```

Callback to notify when master volume has been changed. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioOutputMuteChangedCallback {#void-mlaudiooutputmutechangedcallback}

```cpp
typedef void(* MLAudioOutputMuteChangedCallback) (bool is_muted, void *context);
```

Callback to notify when the global Output Mute has changed. 




:::note

  * The global Output Mute is changed by using voice commands or a bluetooth keyboard with a mute/unmute button. 
  * The callback will be called on a separate thread. 

:::



-----------

### MLAudioOutputDeviceChangedCallback {#void-mlaudiooutputdevicechangedcallback}

```cpp
typedef void(* MLAudioOutputDeviceChangedCallback) (MLAudioOutputDevice current_device, void *context);
```

Callback to notify when the output device has changed. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioMicMuteCallback {#void-mlaudiomicmutecallback}

```cpp
typedef void(* MLAudioMicMuteCallback) (bool is_muted, void *context);
```

Callback to notify when global mic mute has been changed. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioTraitAnalysisCallback {#void-mlaudiotraitanalysiscallback}

```cpp
typedef void(* MLAudioTraitAnalysisCallback) (MLHandle handle, MLAudioTraitAnalysisTarget target, float value, void *context);
```

Callback to provide a changed value for a running trait analysis. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioSpectralAnalysisCallback {#void-mlaudiospectralanalysiscallback}

```cpp
typedef void(* MLAudioSpectralAnalysisCallback) (MLHandle handle, MLAudioSpectralAnalysisTarget target, MLAudioSpectralAnalysis values, void *context);
```

Callback to provide a changed value for a running spectral analysis. 




:::note
The callback will be called on a separate thread. 
:::



-----------


## Functions Documentation

### MLAudioGetResultString {#const-char-mlaudiogetresultstring}

```cpp
const char * MLAudioGetResultString(
    MLResult result_code
)
```

Returns an ASCII string for each result code. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result_code|MLResult to select the result code.|
This call returns strings for all of the MLResult and MLAudioResult codes.



**Return**: ASCII string containing readable version of result code. 



-----------

### MLAudioCreateLoadedResource {#mlresult-mlaudiocreateloadedresource}

```cpp
MLResult MLAudioCreateLoadedResource(
    int file,
    bool dynamic_decode,
    MLAudioResourceDiscardedCallback callback,
    void * context,
    MLHandle * out_resource
)
```

Creates a new audio resource that references a loaded audio file. 

**Parameters**

|  |   |   |
|--|--|--|
| int |file|File descriptor specifying the file to load. |
| bool |dynamic_decode|Not currently implemented. |
| [MLAudioResourceDiscardedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudioresourcediscardedcallback) |callback|MLAudioResourceDiscardedCallback function pointer. |
| void * |context|Generic data pointer passed back to callback. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_resource|MLHandle used in subsequent calls for this resource.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created new audio resource. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_FileNotRecognized|Failed because file was not recognized. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBitsPerSample|Failed due to invalid bits per sample. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


Creates a new audio resource that references the audio file specified by the 'file' argument, which it tries to load during resource creation. An optional MLAudioResourceDiscardedCallback will inform the client if the data later gets discarded due to memory limits (or if it fails to load during creation). After creation the resource can be played by passing its id to MLAudioCreateSoundWithLoadedResource.





-----------

### MLAudioCreateStreamedResource {#mlresult-mlaudiocreatestreamedresource}

```cpp
MLResult MLAudioCreateStreamedResource(
    int file,
    MLAudioResourceDiscardedCallback callback,
    void * context,
    MLHandle * out_resource
)
```

Creates a new audio resource that references a streamed audio file. 

**Parameters**

|  |   |   |
|--|--|--|
| int |file|File descriptor specifying the file to load. |
| [MLAudioResourceDiscardedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudioresourcediscardedcallback) |callback|MLAudioResourceDiscardedCallback Function pointer. |
| void * |context|Generic data pointer passed back to callback. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_resource|MLHandle used in subsequent calls for this resource.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created new audio resource. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because of feature has not been implemented yet.|
**Required Permissions**:

  * None 


Creates a new audio resource that references the audio file specified by the 'file' argument. An optional MLAudioResourceDiscardedCallback will inform the client if the file's file descriptor later gets discarded due to file descriptor limits (or if a file descriptor cannot be generated during resource creation). After creation the resource can be played by passing its id to MLAudioCreateSoundWithStreamedResource.





-----------

### MLAudioCheckResource {#mlresult-mlaudiocheckresource}

```cpp
MLResult MLAudioCheckResource(
    MLHandle resource,
    bool * out_is_ready
)
```

Checks whether an audio resource has been discarded due to memory limits. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |resource|MLHandle used to identify the resource. |
| bool * |out_is_ready|Indicates whether the resource is ready or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully checked audio resource. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because of feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


This call can be used instead of the MLAudioResourceDiscardedCallback to determine whether an audio resource has been discarded. Resources that are not being referenced by a sound will be discarded before resources that are being referenced by a sound. Resources that are being played by a sound will not be discarded. MLAudioCheckResource can be called just before the resource is needed, or at some other appropriate time for accessing data. However it should not be called constantly on a polling basis to instantly refresh resources that get discarded, since that would defeat the purpose of the memory limit.





-----------

### MLAudioGetResourceSize {#mlresult-mlaudiogetresourcesize}

```cpp
MLResult MLAudioGetResourceSize(
    MLHandle resource,
    uint32_t * out_size_in_bytes
)
```

Returns the size of the memory footprint for a loaded audio resource. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |resource|MLHandle used to identify the resource. |
| uint32_t * |out_size_in_bytes|The returned size of the footprint.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained resource size. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


This call tells the owner of a loaded resource what size memory footprint is used by the resource. For a loaded resource that is de-compressed when it gets loaded into memory, the value returned will be the de-compressed size. For a loaded resource that stays compressed when loaded, and gets decoded on the fly (not yet implemented), the value returned will be the compressed size. This call always returns the size of the resource's footprint, even when the resource is temporarily discarded and is using no memory. To determine if the size returned is actually being used in memory, call MLAudioCheckResource to find out if the resource is currently discarded. This call will return with an error if it is called for a streamed resource.




**API Level:**
  * 7




-----------

### MLAudioRefreshResource {#mlresult-mlaudiorefreshresource}

```cpp
MLResult MLAudioRefreshResource(
    MLHandle resource,
    int file
)
```

Refreshes an audio resource whose data was discarded due to memory limits. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |resource|MLHandle used to identify the resource. |
| int |file|File descriptor specifying the audio data to refresh.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully refreshed audio resource. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_FileNotRecognized|Failed because file was not recognized. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBitsPerSample|Failed due to invalid bits per sample. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBufferSize|Failed due to an invalid buffer size. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleFormat|Failed due to an invalid sample format. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidValidBits|Failed due to invalid valid bits. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


This call allows the client to 'refresh' a resource whose data has been discarded. This should be done just prior to the next time the data is needed, or some other convenient time when data access is appropriate, but not right after the data is discarded, as that would defeat the purpose of the memory limit.





-----------

### MLAudioDestroyResource {#mlresult-mlaudiodestroyresource}

```cpp
MLResult MLAudioDestroyResource(
    MLHandle resource
)
```

Destroys a previously created audio resource. If there are sounds that are currently playing the resource, they will be stopped, and an event callback will be issued for MLAudioSoundEvent_ResourceDestroyed. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |resource|MLHandle used to identify the resource.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed audio resource. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 






-----------

### MLAudioCreateSoundWithLoadedResource {#mlresult-mlaudiocreatesoundwithloadedresource}

```cpp
MLResult MLAudioCreateSoundWithLoadedResource(
    MLHandle resource,
    bool auto_destroy,
    MLHandle * out_handle
)
```

Creates a new sound output that plays a loaded audio resource. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |resource|MLHandle specifying the resource to play. |
| bool |auto_destroy|If true, the sound output is destroyed when done playing. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created sound input. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_FileNotRecognized|Failed because file was not recognized. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBitsPerSample|Failed due to invalid bits per sample. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


Creates a sound output to play a loaded audio file referenced as a resource. Loaded resources are created and loaded by calling MLAudioCreateLoadedResource. After sound creation the sound can be started by calling MLAudioStartSound. Supported file formats are all file types supported by the Multimedia Service, mono or stereo, sampled with a frequency in the range from 16 kHz - 48 kHz, and represented as 16, 24, or 32 bit integers or 32-bit floats.





-----------

### MLAudioCreateSoundWithStreamedResource {#mlresult-mlaudiocreatesoundwithstreamedresource}

```cpp
MLResult MLAudioCreateSoundWithStreamedResource(
    MLHandle resource,
    bool auto_destroy,
    MLHandle * out_handle
)
```

Creates a new sound output that plays a streamed audio resource. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |resource|MLHandle specifying the resource to play. |
| bool |auto_destroy|If true, the sound output is destroyed when done playing. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBufferSize|Failed due to an invalid buffer size. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceDiscarded|Failed because file was closed. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


Creates a sound output to play a streamed audio file referenced as a resource. Streamed resources are created by calling MLAudioCreateStreamedResource. After sound creation the sound can be started by calling MLAudioStartSound. Supported file formats are all file types supported by the Multimedia Service, mono or stereo, sampled with a frequency in the range from 16 kHz - 48 kHz, and represented as 16, 24, or 32 bit integers or 32-bit floats.





-----------

### MLAudioCreateSoundWithLoadedFile {#mlresult-mlaudiocreatesoundwithloadedfile}

```cpp
MLResult MLAudioCreateSoundWithLoadedFile(
    int file,
    bool auto_destroy,
    bool dynamic_decode,
    MLHandle * out_handle
)
```

Creates a new sound output that plays a loaded file. 

**Parameters**

|  |   |   |
|--|--|--|
| int |file|File descriptor specifying the file to play. |
| bool |auto_destroy|If true, the sound output is destroyed when done playing. |
| bool |dynamic_decode|Not currently implemented. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_FileNotRecognized|Failed because file was not recognized. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBitsPerSample|Failed due to invalid bits per sample. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidValidBits|Failed due to invalid valid bits. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


Creates a sound output and loads the audio file specified by the 'file' argument into memory. After creation the sound can be started by calling MLAudioStartSound. Supported file formats are all file types supported by the Multimedia Service, mono or stereo, sampled with a frequency in the range from 16 kHz - 48 kHz, and represented as 16, 24, or 32 bit integers or 32-bit floats.





-----------

### MLAudioCreateSoundWithStreamedFile {#mlresult-mlaudiocreatesoundwithstreamedfile}

```cpp
MLResult MLAudioCreateSoundWithStreamedFile(
    int file,
    bool auto_destroy,
    MLHandle * out_handle
)
```

Creates a new sound output that plays a streamed file. 

**Parameters**

|  |   |   |
|--|--|--|
| int |file|File descriptor specifying the file to play. |
| bool |auto_destroy|If true, the sound output is destroyed when done playing. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_FileNotFound|Failed because file was missing. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceDiscarded|Failed because file was closed. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


Creates a sound output and prepares to stream the audio file specified by the 'file' argument. After creation the sound can be started by calling MLAudioStartSound. Supported file formats are all file types supported by the Multimedia Service, mono or stereo, sampled with a frequency in the range from 16 kHz - 48 kHz, and represented as 16, 24, or 32 bit integers or 32-bit floats.





-----------

### MLAudioCreateSoundWithBufferedOutput {#mlresult-mlaudiocreatesoundwithbufferedoutput}

```cpp
MLResult MLAudioCreateSoundWithBufferedOutput(
    const MLAudioBufferFormat * format,
    uint32_t buffer_size_in_bytes,
    MLAudioBufferCallback callback,
    void * context,
    MLHandle * out_handle
)
```

Creates a new sound output that plays a buffered audio output. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * |format|[MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) Specifying the audio format of the buffers. |
| uint32_t |buffer_size_in_bytes|Requested size in bytes for each of the output buffers. |
| [MLAudioBufferCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiobuffercallback) |callback|MLAudioBufferCallback function pointer. |
| void * |context|Generic data pointer passed back to callback. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBufferSize|Failed due to an invalid buffer size. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleFormat|Failed due to an invalid sample format. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidValidBits|Failed due to invalid valid bits.|
**Required Permissions**:

  * None 


Creates a sound output and allocates a double-buffer for buffering audio data into it. To write data into the next available buffer call MLAudioGetOutputBuffer to get an empty buffer, then write the data into the buffer, then call MLAudioReleaseOutputBuffer to indicate that the buffer is ready to play. This can be done either on a polling basis or within a callback set via the 'callback' argument. The 'format' argument specifies the format of which the following are supported: Mono, stereo, 6-channel, 8-channel, or 12-channel; 16 bit integer; a sampling rate between 16k - 48k. The 'buffer_size' argument will use the recommended size if 0 is passed in. After creation, one or both buffers can optionally be pre-filled, and the sound can be started by calling MLAudioStartSound.




**API Level:**
  * 7




-----------

### MLAudioDestroySound {#mlresult-mlaudiodestroysound}

```cpp
MLResult MLAudioDestroySound(
    MLHandle handle
)
```

Destroys a previously created sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to destroy sound output due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed to destroy sound output due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed to destroy sound output because feature has not been implemented yet.|
**Required Permissions**:

  * None 






-----------

### MLAudioStartSound {#mlresult-mlaudiostartsound}

```cpp
MLResult MLAudioStartSound(
    MLHandle handle
)
```

Starts playback for a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully started playback. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceDiscarded|Failed because file was closed. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


When starting playback for a file (loaded, streamed, system sound), playback starts at the beginning of the file (even after a pause). When starting playback for an output stream, the "frames played" counter gets reset to zero (and if the output stream was previously paused the streaming buffers get reset as well).





-----------

### MLAudioStopSound {#mlresult-mlaudiostopsound}

```cpp
MLResult MLAudioStopSound(
    MLHandle handle
)
```

Stops playback for a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully stopped playback. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to stop playback due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed to stop playback due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed to stop playback because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed to stop playback because resource was not found.|
**Required Permissions**:

  * None 


Stops playback for a sound output that's playing or paused.





-----------

### MLAudioPauseSound {#mlresult-mlaudiopausesound}

```cpp
MLResult MLAudioPauseSound(
    MLHandle handle
)
```

Pauses playback for a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully paused playback. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


Pauses playback for a sound output that's playing. If the sound output is not playing, the pause will fail.





-----------

### MLAudioResumeSound {#mlresult-mlaudioresumesound}

```cpp
MLResult MLAudioResumeSound(
    MLHandle handle
)
```

Resumes playback for a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully resumed playback. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


Resumes playback for a sound output that's paused. If the sound output is not paused, the resume will fail.





-----------

### MLAudioGetSoundState {#mlresult-mlaudiogetsoundstate}

```cpp
MLResult MLAudioGetSoundState(
    MLHandle handle,
    MLAudioState * out_state
)
```

Indicates the play state of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| [MLAudioState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiostate) * |out_state|Indicates the current play state.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully indicated the state of sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The MLAudioState indicates whether the sound output is stopped, playing or paused.





-----------

### MLAudioGetSoundFormat {#mlresult-mlaudiogetsoundformat}

```cpp
MLResult MLAudioGetSoundFormat(
    MLHandle handle,
    MLAudioBufferFormat * out_format
)
```

Returns the audio format of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * |out_format|[MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) struct containing the format info.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned audio format. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


The returned information includes the channel count, sample rate and bit depth of the sound's audio data. For Streamed Files, the format is not available until about 100+ milliseconds after playback of the Streamed File is started.





-----------

### MLAudioSetSoundEventCallback {#mlresult-mlaudiosetsoundeventcallback}

```cpp
MLResult MLAudioSetSoundEventCallback(
    MLHandle handle,
    MLAudioSoundEventCallback callback,
    void * context
)
```

Registers a callback for events on a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| [MLAudioSoundEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiosoundeventcallback) |callback|MLAudioSoundEventCallback function pointer. |
| void * |context|Generic data pointer passed back to callback.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully registered callback. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


Events that can result in a callback being called include: Stopping at the end of a file; looping at the end of a file; a sound output having its volume lowered or restored by the audio policy manager; a sound output being muted or unmuted by the audio policy manager. The 'context' argument is passed back to the callback, along with the particular event type (MLAudioSoundEvent) that caused the callback.




**API Level:**
  * 20




-----------

### MLAudioSetMediaEventCallback {#mlresult-mlaudiosetmediaeventcallback}

```cpp
MLResult MLAudioSetMediaEventCallback(
    MLAudioMediaEventCallback callback,
    void * context
)
```

Registers a callback for user-issued media control events. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioMediaEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomediaeventcallback) |callback|MLAudioMediaEventCallback function pointer. |
| void * |context|Generic data pointer passed back to callback.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If memory allocation fails. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Handle not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Internal config error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Internal error.|
**Required Permissions**:

  * None 


Events that can result in a callback being called include: Pressing a play button; pressing a stop button; pressing a pause button; pressing a next track button, pressing a previous track button; The particular event type (MLAudioMediaEvent) that caused the callback is passed to the callback as its first argument.The 'context' argument is passed back to the callback as its second argument.




**API Level:**
  * 20




-----------

### MLAudioSetSoundVolumeLinear {#mlresult-mlaudiosetsoundvolumelinear}

```cpp
MLResult MLAudioSetSoundVolumeLinear(
    MLHandle handle,
    float volume
)
```

Sets the volume of a sound output using a linear scale. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| float |volume|The volume that the sound output will be set to.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set volume of sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The range of the volume is 0 to 8, with 0 for silence, 1 for unity gain, and 8 for 8x gain.





-----------

### MLAudioGetSoundVolumeLinear {#mlresult-mlaudiogetsoundvolumelinear}

```cpp
MLResult MLAudioGetSoundVolumeLinear(
    MLHandle handle,
    float * out_volume
)
```

Returns the volume of a sound output using a linear scale. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| float * |out_volume|The volume that the sound output is set to.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned volume of sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The range of the volume is 0 to 8, with 0 for silence, 1 for unity gain, and 8 for 8x gain.





-----------

### MLAudioSetSoundVolumeDb {#mlresult-mlaudiosetsoundvolumedb}

```cpp
MLResult MLAudioSetSoundVolumeDb(
    MLHandle handle,
    float volume
)
```

Sets the volume of a sound output using a decibel scale. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| float |volume|The volume that the sound output will be set to.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set volume. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The range of the volume is -100 db to +18 dB, with -100 dB for silence, 0 dB for unity gain, and +18 dB for 8x gain.





-----------

### MLAudioGetSoundVolumeDb {#mlresult-mlaudiogetsoundvolumedb}

```cpp
MLResult MLAudioGetSoundVolumeDb(
    MLHandle handle,
    float * out_volume
)
```

Returns the volume of a sound output using a decibel scale. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| float * |out_volume|The volume that the sound output is set to.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned volume. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The range of the volume is -100 db to +18 dB, with -100 dB for silence, 0 dB for unity gain, and +18 dB for 8x gain.





-----------

### MLAudioSetSoundPitch {#mlresult-mlaudiosetsoundpitch}

```cpp
MLResult MLAudioSetSoundPitch(
    MLHandle handle,
    float pitch
)
```

Sets the pitch of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| float |pitch|The pitch that the sound output will be set to.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set pitch of sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBufferSize|Failed due to an invalid buffer size. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The range of the pitch is 0.5 to 2.0, with 0.5 being one octave down and 2.0 being one octave up (i.e., the pitch is a frequency multiple). A pitch of 1.0 is the default and means no change.





-----------

### MLAudioGetSoundPitch {#mlresult-mlaudiogetsoundpitch}

```cpp
MLResult MLAudioGetSoundPitch(
    MLHandle handle,
    float * out_pitch
)
```

Returns the pitch of a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| float * |out_pitch|The pitch that the sound output is set to.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned pitch of sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The range of the pitch is 0.5 to 2.0, with 0.5 being one octave down and 2.0 being one octave up (i.e., the pitch is a frequency multiple). A pitch of 1.0 is the default and means no change.





-----------

### MLAudioSetSoundMute {#mlresult-mlaudiosetsoundmute}

```cpp
MLResult MLAudioSetSoundMute(
    MLHandle handle,
    bool is_muted
)
```

Mutes or un-mutes a sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| bool |is_muted|Determines whether the sound output is muted or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully muted or unmuted sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed sound due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed sound due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed sound due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed sound because feature has not been implemented yet.|
**Required Permissions**:

  * None 


This mute control is entirely under the control of the owner of the sound output, and is separate from any muting done by the audio policy manager.





-----------

### MLAudioGetSoundMute {#mlresult-mlaudiogetsoundmute}

```cpp
MLResult MLAudioGetSoundMute(
    MLHandle handle,
    bool * out_is_muted
)
```

Returns whether a sound output is muted or not. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| bool * |out_is_muted|Indicates whether the sound output is muted or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained mute state of sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


This mute control is entirely under the control of the owner of the sound output, and will not indicate whether the sound output has been muted by the audio policy manager. To find out about the latter, use MLAudioSetSoundEventCallback to register a callback that will provide "policy mute" events.




**API Level:**
  * 20




-----------

### MLAudioSetSoundBypassesMasterVolume {#mlresult-mlaudiosetsoundbypassesmastervolume}

```cpp
MLResult MLAudioSetSoundBypassesMasterVolume(
    MLHandle handle,
    bool is_bypassing
)
```

Sets whether a sound output is exempt from attenuation due to master volume. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| bool |is_bypassing|Sets whether the sound output should bypass master volume or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set the bypassing state of the sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IncompatibleSKU|Failed due to feature not supported on current device version. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configuration error.|
**Required Permissions**:

  * None 


Setting this option on a sound output causes its output to bypass master volume, making it effectively "always audible" (assuming it is neither muted nor set to zero volume on a per-sound basis). This option is available only on certain SKUs; trying to set it when the device is not compatible will produce an error as listed below. In addition, this option only works when a sound is non-spatial; the non-spatial sound parameters volume, pitch, etc remain active for sounds that are bypassing master volume.




**API Level:**
  * 20




-----------

### MLAudioGetSoundBypassesMasterVolume {#mlresult-mlaudiogetsoundbypassesmastervolume}

```cpp
MLResult MLAudioGetSoundBypassesMasterVolume(
    MLHandle handle,
    bool * out_is_bypassing
)
```

Queries whether a sound output is exempt from attenuation due to master volume. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| bool * |out_is_bypassing|Indicates whether the sound output is bypassing master volume or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully queried the bypassing state of the sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IncompatibleSKU|Failed due to feature not supported on current device version. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configuration error.|
**Required Permissions**:

  * None 


This call reports whether a sound output is bypassing master volume, making it effectively "always audible" (assuming it is neither muted nor set to zero volume on a per-sound basis). This option is available only on certain SKUs; trying to query it when the device is not compatible will produce an error as listed below. In addition, this option only works when a sound is non-spatial; the non-spatial sound parameters volume, pitch, etc remain active for sounds that are bypassing master volume.




**API Level:**
  * 20




-----------

### MLAudioSetSoundLooping {#mlresult-mlaudiosetsoundlooping}

```cpp
MLResult MLAudioSetSoundLooping(
    MLHandle handle,
    bool is_looping
)
```

Sets whether a sound output is looping or not. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| bool |is_looping|Determines whether the sound output is looping or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set looping of audio. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


Looping is available for sound outputs that play files (loaded, streamed, system sounds). The loop goes from the very beginning to the very end of the file. Looping does not apply to sound outputs that are output streams.





-----------

### MLAudioGetSoundLooping {#mlresult-mlaudiogetsoundlooping}

```cpp
MLResult MLAudioGetSoundLooping(
    MLHandle handle,
    bool * out_is_looping
)
```

Returns whether a sound output is looping or not. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| bool * |out_is_looping|Indicates whether the sound output is looping or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained looping state of sound output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLAudioSetStreamedFileOffset {#mlresult-mlaudiosetstreamedfileoffset}

```cpp
MLResult MLAudioSetStreamedFileOffset(
    MLHandle handle,
    uint32_t offset_in_msec
)
```

Sets the playback position for a streamed file. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t |offset_in_msec|Sets the new playback position.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set playback position. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


This function will cause a streaming file to jump to a new location. The playback position is specified in milliseconds. This function can be used while a streaming file is playing, paused or stopped.





-----------

### MLAudioGetStreamedFileOffset {#mlresult-mlaudiogetstreamedfileoffset}

```cpp
MLResult MLAudioGetStreamedFileOffset(
    MLHandle handle,
    uint32_t * out_offset_in_msec
)
```

Returns the playback position for a streamed file. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint32_t * |out_offset_in_msec|Indicates the current playback position.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned playback position for streamed file. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


This function can be used while a streaming file is playing, paused or stopped.





-----------

### MLAudioGetOutputDevice {#mlresult-mlaudiogetoutputdevice}

```cpp
MLResult MLAudioGetOutputDevice(
    MLAudioOutputDevice * out_current_device
)
```

Returns which type of sound output device is being used for sound output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioOutputDevice](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_parameters.md#enums-mlaudiooutputdevice) * |out_current_device|Enum indicating what kind of audio output device is currently in use.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully indicated the type of output device. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


This is a global configuration that is not specific to individual sound outputs.





-----------

### MLAudioSetOutputDeviceCallback {#mlresult-mlaudiosetoutputdevicecallback}

```cpp
MLResult MLAudioSetOutputDeviceCallback(
    MLAudioOutputDeviceChangedCallback callback,
    void * context
)
```

Registers a callback for audio output device change. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioOutputDeviceChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiooutputdevicechangedcallback) |callback|MLAudioOutputDeviceChangedCallback function pointer. |
| void * |context|Generic data pointer passed back to callback.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully registered callback. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The callback will be called whenever the output device changes. The current output device is passed back to the callback as its first argument, and the 'context' argument is passed to the callback as its second argument.




**API Level:**
  * 8




-----------

### MLAudioResetAcousticScene {#mlresult-mlaudioresetacousticscene}

```cpp
MLResult MLAudioResetAcousticScene()
```

Resets the Acoustic Scene associated with the caller. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If reset was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|No custom scene exists for client.|
**Required Permissions**:

  * None 


Removes all Acoustic Elements and restores default scene. Resets any modifications to the acoustic scene previously made by the caller.




**API Level:**
  * 20




-----------

### MLAudioBeginAcousticSceneUpdate {#mlresult-mlaudiobeginacousticsceneupdate}

```cpp
MLResult MLAudioBeginAcousticSceneUpdate()
```

Signals beginning of grouped Acoustic parameter multi-update. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


The multi-update parameters include global Acoustic Scene params and Acoustic Element params. Intended to be followed by a call to MLAcousticEndAcousticSceneUpdate signifying the end of the multi-update.




**API Level:**
  * 20




-----------

### MLAudioEndAcousticSceneUpdate {#mlresult-mlaudioendacousticsceneupdate}

```cpp
MLResult MLAudioEndAcousticSceneUpdate()
```

Signals end of grouped Acoustic parameter multi-update. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|No custom scene exists for client.|
**Required Permissions**:

  * None 


The multi-update parameters include global Acoustic Scene params and Acoustic Element params. Intended to be preceded by a call to MLAcousticBeginAcousticSceneUpdate signifying the beginning of the multi-update.




**API Level:**
  * 20




-----------

### MLAudioSetAcousticSceneMapEnable {#mlresult-mlaudiosetacousticscenemapenable}

```cpp
MLResult MLAudioSetAcousticSceneMapEnable(
    bool is_enabled
)
```

Enables/disables Acoustic Map data for the Acoustic Scene. 

**Parameters**

|  |   |   |
|--|--|--|
| bool |is_enabled|Determines whether Acoustic Map is enabled.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Acoustic Map data is a device-curated representation of the acoustics of the local physical environment. Enabling the Acoustic Map makes virtual objects sound as though they exist in the local environment.




**API Level:**
  * 20




-----------

### MLAudioGetAcousticSceneMapEnable {#mlresult-mlaudiogetacousticscenemapenable}

```cpp
MLResult MLAudioGetAcousticSceneMapEnable(
    bool * out_is_enabled
)
```

Indicates whether Acoustic Map data is enabled for the Acoustic Scene. 

**Parameters**

|  |   |   |
|--|--|--|
| bool * |out_is_enabled|Indicates whether Acoustic Map is enabled.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLAudioSetAcousticSceneTransmissionDefault {#mlresult-mlaudiosetacousticscenetransmissiondefault}

```cpp
MLResult MLAudioSetAcousticSceneTransmissionDefault(
    const MLAudioMultibandLevel * transmission
)
```

Sets amount of sound transmitted through non-Acoustic Element objects. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |transmission|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) to set the default transmission.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Transmission is specified using [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md), which includes gain and 3-band EQ. The values [1, (1, 1, 1)] represents fully transmissive while [0, (1, 1, 1)] or [1, (0, 0, 0)] represents fully obstructed.




**API Level:**
  * 20




-----------

### MLAudioGetAcousticSceneTransmissionDefault {#mlresult-mlaudiogetacousticscenetransmissiondefault}

```cpp
MLResult MLAudioGetAcousticSceneTransmissionDefault(
    MLAudioMultibandLevel * out_transmission
)
```

Returns amount of sound transmitted through non-Acoustic Element objects. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |out_transmission|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) to return the default transmission.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Transmission is specified using [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md), which includes gain and 3-band EQ. The values [1, (1, 1, 1)] represents fully transmissive while [0, (1, 1, 1)] or [1, (0, 0, 0)] represents fully obstructed.




**API Level:**
  * 20




-----------

### MLAudioSetAcousticSceneDispersionDefault {#mlresult-mlaudiosetacousticscenedispersiondefault}

```cpp
MLResult MLAudioSetAcousticSceneDispersionDefault(
    const MLAudioDispersionProperties * properties
)
```

Sets the fallback room properties to be used when none are otherwise specified. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) * |properties|[MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) to set the default dispersion properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Dispersion properties are specified using [MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md), which includes reflections gain ([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)) and reflections delay time.




**API Level:**
  * 20




-----------

### MLAudioGetAcousticSceneDispersionDefault {#mlresult-mlaudiogetacousticscenedispersiondefault}

```cpp
MLResult MLAudioGetAcousticSceneDispersionDefault(
    MLAudioDispersionProperties * out_properties
)
```

Returns the default room properties used when none are otherwise specified. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) * |out_properties|[MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) to return the default dispersion properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Dispersion properties are specified using [MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md), which includes reflections gain ([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)) and reflections delay time.




**API Level:**
  * 20




-----------

### MLAudioSetAcousticSceneReverbDefault {#mlresult-mlaudiosetacousticscenereverbdefault}

```cpp
MLResult MLAudioSetAcousticSceneReverbDefault(
    const MLAudioReverbProperties * properties
)
```

Sets the fallback room properties to be used when none are otherwise specified. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) * |properties|[MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) to set the default reverb properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Reverb properties are specified using [MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md), which includes reflections gain ([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)), reflections delay time, reverb gain ([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)), reverb delay time, and frequency-dependent reverb decay times.




**API Level:**
  * 20




-----------

### MLAudioGetAcousticSceneReverbDefault {#mlresult-mlaudiogetacousticscenereverbdefault}

```cpp
MLResult MLAudioGetAcousticSceneReverbDefault(
    MLAudioReverbProperties * out_properties
)
```

Returns the default room properties used when none are otherwise specified. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) * |out_properties|[MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) to return the default reverb properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Reverb properties are specified using [MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md), which includes reverb gain ([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)), reverb delay time, and frequency-dependent reverb decay times.




**API Level:**
  * 20




-----------

### MLAudioGetChangedAcousticMap {#mlresult-mlaudiogetchangedacousticmap}

```cpp
MLResult MLAudioGetChangedAcousticMap(
    uint32_t prev_map_tag,
    uint8_t ** out_map_data,
    uint32_t * out_map_size_in_bytes,
    uint32_t * out_map_tag
)
```

Returns the Acoustic Map if updated since previous call. 

**Parameters**

|  |   |   |
|--|--|--|
| uint32_t |prev_map_tag|The last map tag received in previous call. |
| uint8_t ** |out_map_data|Receives serialized Acoustic Map data if map tag is stale. |
| uint32_t * |out_map_size_in_bytes|Receives length of serialized Acoustic Map data in bytes. |
| uint32_t * |out_map_tag|Receives current map tag, to be passed in following call.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


The Acoustic Map is the system-managed representation of the acoustic environment.



:::note
Caller is responsible for deallocating the memory used by out_partner_crossfeed_handles and out_partner_crossfeed_outputs.
:::


**API Level:**
  * 20




-----------

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

### MLAudioGetBufferedOutputDefaults {#mlresult-mlaudiogetbufferedoutputdefaults}

```cpp
MLResult MLAudioGetBufferedOutputDefaults(
    uint32_t channel_count,
    uint32_t samples_per_second,
    float max_pitch_change,
    MLAudioBufferFormat * out_format,
    uint32_t * out_recommended_size_in_bytes,
    uint32_t * out_min_size_in_bytes
)
```

Returns the preferred (i.e. best performing) settings for buffered output. 

**Parameters**

|  |   |   |
|--|--|--|
| uint32_t |channel_count|Number of audio channels (e.g. 2 for stereo). |
| uint32_t |samples_per_second|Sample rate for the buffered output. |
| float |max_pitch_change|Top pitch (1.0 - 2.0) for this sound output. |
| [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * |out_format|Recommended settings for [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md). |
| uint32_t * |out_recommended_size_in_bytes|Recommended size for the buffers. |
| uint32_t * |out_min_size_in_bytes|Minimum allowable size for the buffers.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned preferred settings for buffered output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 





**API Level:**
  * 7




-----------

### MLAudioGetBufferedOutputLatency {#mlresult-mlaudiogetbufferedoutputlatency}

```cpp
MLResult MLAudioGetBufferedOutputLatency(
    MLHandle handle,
    float * out_latency_in_msec
)
```

Returns the latency for a buffered output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| float * |out_latency_in_msec|Indicates the latency in milliseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned latency for buffered output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


This function returns the latency between the time a buffer is enqueued via MLAudioReleaseOutputBuffer and the time its audio is heard at the speakers or earphones.




**API Level:**
  * 7




-----------

### MLAudioGetBufferedOutputFramesPlayed {#mlresult-mlaudiogetbufferedoutputframesplayed}

```cpp
MLResult MLAudioGetBufferedOutputFramesPlayed(
    MLHandle handle,
    uint64_t * out_frames_played
)
```

Returns the number of audio frames played by a buffered output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| uint64_t * |out_frames_played|The number of audio frames played.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned number of audio frames by buffered output. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


This function returns the number of frames that have been sent down to the audio mixer (-not- the number that have been passed to the buffers) since the last time MLAudioStartSound was called for this output. Note that the perceived sound may be slightly behind this value due to the buffer latency (which can be queried by calling MLAudioGetBufferedOutputLatency). Pausing and resuming does not affect the frame count.




**API Level:**
  * 7




-----------

### MLAudioGetOutputBuffer {#mlresult-mlaudiogetoutputbuffer}

```cpp
MLResult MLAudioGetOutputBuffer(
    MLHandle handle,
    MLAudioBuffer * out_buf
)
```

Returns an empty buffer for writing more buffered data. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output. |
| [MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) * |out_buf|[MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) containing the buf to write into.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned empty buffer. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_BufferNotReady|Failed because buffer was not ready. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


This function returns an output buffer when one of the output buffers is empty and needs more data. It is possible to call this function in a polling fashion. However for greater efficiency it is recommended to provide a callback to the 'create' function (in which case this function may be called from within the callback).




**API Level:**
  * 7




-----------

### MLAudioReleaseOutputBuffer {#mlresult-mlaudioreleaseoutputbuffer}

```cpp
MLResult MLAudioReleaseOutputBuffer(
    MLHandle handle
)
```

Releases a buffer once it has been filled. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released buffer. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_BufferNotReady|Failed because buffer was not ready. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


After receiving an empty buffer from MLAudioGetOutputBuffer and writing audio data into that buffer, call this function to indicate that the buffer has been filled and can now be played.




**API Level:**
  * 7




-----------

### MLAudioGetMasterVolume {#mlresult-mlaudiogetmastervolume}

```cpp
MLResult MLAudioGetMasterVolume(
    float * out_volume
)
```

Returns the master volume for the audio system. 

**Parameters**

|  |   |   |
|--|--|--|
| float * |out_volume|The current setting of master volume.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully return master volume. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The range of the volume is 0-100, with 0 being silent and 100 being full volume.





-----------

### MLAudioSetMasterVolumeCallback {#mlresult-mlaudiosetmastervolumecallback}

```cpp
MLResult MLAudioSetMasterVolumeCallback(
    MLAudioMasterVolumeChangedCallback callback,
    void * context
)
```

Registers a callback for changes to the master volume. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioMasterVolumeChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomastervolumechangedcallback) |callback|MLAudioMasterVolumeChangedCallback function pointer. |
| void * |context|Generic data pointer passed back to callback.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully register callback to the master volume. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The callback will be called whenever the master volume gets changed (even if changed by the owner of the callback). The 'context' argument is passed back to the callback as its first argument, and the new master volume setting is passed to the callback as its second argument.





-----------

### MLAudioGetOutputMute {#mlresult-mlaudiogetoutputmute}

```cpp
MLResult MLAudioGetOutputMute(
    bool * out_is_muted
)
```

Indicates whether the output mute of the audio system is on or off. 

**Parameters**

|  |   |   |
|--|--|--|
| bool * |out_is_muted|Indicates whether the audio output is muted or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully indicated state of output mute. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


Queries the current status of the output mute.




**API Level:**
  * 20




-----------

### MLAudioSetOutputMuteCallback {#mlresult-mlaudiosetoutputmutecallback}

```cpp
MLResult MLAudioSetOutputMuteCallback(
    MLAudioOutputMuteChangedCallback callback,
    void * context
)
```

Registers a callback for audio output mute change. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioOutputMuteChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiooutputmutechangedcallback) |callback|MLAudioOutputMuteChangedCallback function pointer. |
| void * |context|Generic data pointer passed back to callback.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully registered callback for audio output mute change. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The callback will be called whenever the output mute changes (even if changed by the owner of the callback). The output mute setting is passed back to the callback as its first argument, and the 'context' argument is passed to the callback as its second argument.




**API Level:**
  * 8




-----------

### MLAudioCreateInputFromMicCapture {#mlresult-mlaudiocreateinputfrommiccapture}

```cpp
MLResult MLAudioCreateInputFromMicCapture(
    MLAudioMicCaptureType mic_capture_type,
    const MLAudioBufferFormat * format,
    uint32_t buffer_size_in_bytes,
    MLAudioBufferCallback callback,
    void * context,
    MLHandle * out_handle
)
```

Creates a new sound input that provides audio from the mics on the wearable. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioMicCaptureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md#enums-mlaudiomiccapturetype) |mic_capture_type|MLAudioMicCaptureType specifying the type of mic capture created. |
| const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * |format|[MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) specifying the audio format of the stream. |
| uint32_t |buffer_size_in_bytes|Requested size in bytes for each of the two stream buffers. |
| [MLAudioBufferCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiobuffercallback) |callback|MLAudioBufferCallback function pointer. |
| void * |context|Generic data pointer passed back to callback. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound input.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created new sound input that provides a mic capture stream. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Failed due to lack of permission. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configuration error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBitsPerSample|Failed due to an invalid bits per sample. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBufferSize|Failed due to an invalid buffer size. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleFormat|Failed due to an invalid sample format. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidValidBits|Failed due to an invalid valid bits per sample. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * android.permission.RECORD_AUDIO (protection level: dangerous) 


Creates a sound input and allocates a double-buffer for streaming audio data from it. The 'mic_capture_type' argument specifies the "flavor" of the microphone capture, and the MLAudioMicCaptureType enum lists the available buffering formats for each flavor. To stream data from the buffers call MLAudioGetInputBuffer to get a full buffer, then read the data from the buffer, then call MLAudioReleaseInputBuffer to indicate that the buffer is ready to re-use. This can be done either on a polling basis or within a callback set via the 'callback' argument. The 'format' argument specifies the format of the buffering which must agree with the selected 'mic_capture_type'. The 'buffer_size' argument will use the recommended size if 0 is passed in. After creation, the input can be started by calling MLAudioStartInput.




**API Level:**
  * 20




-----------

### MLAudioCreateInputFromVirtualCapture {#mlresult-mlaudiocreateinputfromvirtualcapture}

```cpp
MLResult MLAudioCreateInputFromVirtualCapture(
    const MLAudioBufferFormat * format,
    uint32_t buffer_size,
    MLAudioBufferCallback callback,
    void * callback_context,
    MLHandle * out_handle
)
```

Creates a new sound input that provides a "virtual capture" stream. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * |format|[MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) specifying the audio format of the stream. |
| uint32_t |buffer_size|Requested size in bytes for each of the two stream buffers. |
| [MLAudioBufferCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiobuffercallback) |callback|MLAudioBufferCallback function pointer. |
| void * |callback_context|Generic data pointer passed back to callback. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound input.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created new sound input that provides a "virtual capture" stream. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Failed due to lack of permission. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configuration error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBitsPerSample|Failed due to an invalid bits per sample. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBufferSize|Failed due to an invalid buffer size. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleFormat|Failed due to an invalid sample format. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidValidBits|Failed due to an invalid valid bits per sample. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


Creates a sound input and allocates a double-buffer for streaming audio data from it. The "virtual capture" stream provides a stereo stream capturing the final audio output mix of all the sounds currently being played by the audio system. To stream data from the buffers call MLAudioGetInputBuffer to get a full buffer, then read the data from the buffer, then call MLAudioReleaseInputBuffer to indicate that the buffer is ready to re-use. This can be done either on a polling basis or within a callback set via the 'callback' argument. The 'format' argument specifies the format of which the following are supported: Two channels (stereo), 16 bit integer, a sampling rate of 48k. The 'buffer_size' argument will use the recommended size if 0 is passed in. After creation, the input can be started by calling MLAudioStartInput.




**API Level:**
  * 8




-----------

### MLAudioCreateInputFromMixedCapture {#mlresult-mlaudiocreateinputfrommixedcapture}

```cpp
MLResult MLAudioCreateInputFromMixedCapture(
    const MLAudioBufferFormat * format,
    uint32_t buffer_size,
    MLAudioBufferCallback callback,
    void * callback_context,
    MLHandle * out_handle
)
```

Creates a new sound input that provides a "mixed capture" stream. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * |format|[MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) specifying the audio format of the stream. |
| uint32_t |buffer_size|Requested size in bytes for each of the two stream buffers. |
| [MLAudioBufferCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiobuffercallback) |callback|MLAudioBufferCallback function pointer. |
| void * |callback_context|Generic data pointer passed back to callback. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound input.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created new sound input that provides a "mixed capture" stream. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Failed due to lack of permission. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configuration error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBitsPerSample|Failed due to an invalid bits per sample. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBufferSize|Failed due to an invalid buffer size. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleFormat|Failed due to an invalid sample format. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidValidBits|Failed due to an invalid valid bits per sample. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


Creates a sound input and allocates a double-buffer for streaming audio data from it. The "mixed capture" stream provides a stereo stream capturing the final audio output mix of all the sounds currently being played by the audio system (same as "virtual capture"), plus the user's voice processed for communications (same as MLAudioMicCaptureType_VoiceComm). To stream data from the buffers call MLAudioGetInputBuffer to get a full buffer, then read the data from the buffer, then call MLAudioReleaseInputBuffer to indicate that the buffer is ready to re-use. This can be done either on a polling basis or within a callback set via the 'callback' argument. The 'format' argument supports a variety of audio formats, and the preferred format can be determined in advance by calling MLAudioGetBufferedInputDefaults. The 'buffer_size' argument will use the recommended size if 0 is passed in. After creation, the input can be started by calling MLAudioStartInput.




**API Level:**
  * 8




-----------

### MLAudioDestroyInput {#mlresult-mlaudiodestroyinput}

```cpp
MLResult MLAudioDestroyInput(
    MLHandle handle
)
```

Destroys a previously created sound input. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound input.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed previously created sound input. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 






-----------

### MLAudioStartInput {#mlresult-mlaudiostartinput}

```cpp
MLResult MLAudioStartInput(
    MLHandle handle
)
```

Starts capture for a sound input. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound input.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully started capture for sound input. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Failed due to lack of permission. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 






-----------

### MLAudioStopInput {#mlresult-mlaudiostopinput}

```cpp
MLResult MLAudioStopInput(
    MLHandle handle
)
```

Stops capture for a sound input. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound input.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully stopped capture for sound input. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Failed due to lack of permission. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 






-----------

### MLAudioGetInputState {#mlresult-mlaudiogetinputstate}

```cpp
MLResult MLAudioGetInputState(
    MLHandle handle,
    MLAudioState * out_state
)
```

Indicates the play state of a sound input. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound input. |
| [MLAudioState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiostate) * |out_state|Indicates the current play state.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully indicated play state of sound input. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


The MLAudioState indicates whether the sound input is stopped or playing.





-----------

### MLAudioGetBufferedInputDefaults {#mlresult-mlaudiogetbufferedinputdefaults}

```cpp
MLResult MLAudioGetBufferedInputDefaults(
    uint32_t channel_count,
    uint32_t samples_per_second,
    MLAudioBufferFormat * out_format,
    uint32_t * out_recommended_size_in_bytes,
    uint32_t * out_min_size_in_bytes
)
```

Returns the preferred (i.e. best performing) settings for buffered input. 

**Parameters**

|  |   |   |
|--|--|--|
| uint32_t |channel_count|Number of audio channels (e.g. 2 for stereo). |
| uint32_t |samples_per_second|Sample rate for the buffered input. |
| [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) * |out_format|Recommended Settings for [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md). |
| uint32_t * |out_recommended_size_in_bytes|Recommended size for the buffers. |
| uint32_t * |out_min_size_in_bytes|Minimum allowable size for the buffers.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the preferred settings for buffered input. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 





**API Level:**
  * 7




-----------

### MLAudioGetBufferedInputLatency {#mlresult-mlaudiogetbufferedinputlatency}

```cpp
MLResult MLAudioGetBufferedInputLatency(
    MLHandle handle,
    float * out_latency_in_msec
)
```

Returns the latency for a sound input. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound input. |
| float * |out_latency_in_msec|Indicates the latency in milliseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the latency for sound input. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


This function returns the latency between the time a sound occurs in the real world and the time it becomes available via MLAudioGetInputBuffer.




**API Level:**
  * 7




-----------

### MLAudioGetInputBuffer {#mlresult-mlaudiogetinputbuffer}

```cpp
MLResult MLAudioGetInputBuffer(
    MLHandle handle,
    MLAudioBuffer * out_buf
)
```

Returns a full buffer containing captured audio data. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound input. |
| [MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) * |out_buf|[MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) containing the buf to read from.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned full buffer containing captured audio data. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_BufferNotReady|Failed because buffer was not ready. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


This function returns a buffer when one of the input buffers is full and needs to be read. It is possible to call this function in a polling fashion. However for greater efficiency it is recommended to provide a callback to the 'create' function (in which case this function may be called from within the callback).




**API Level:**
  * 7




-----------

### MLAudioReleaseInputBuffer {#mlresult-mlaudioreleaseinputbuffer}

```cpp
MLResult MLAudioReleaseInputBuffer(
    MLHandle handle
)
```

Releases a buffer once it has been read. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the sound input.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released buffer. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_BufferNotReady|Failed because buffer was not ready. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


After receiving a full buffer from MLAudioGetInputBuffer and reading the audio data from that buffer, call this function to indicate that the buffer has been read and can now be re-used.




**API Level:**
  * 7




-----------

### MLAudioSetMicMute {#mlresult-mlaudiosetmicmute}

```cpp
MLResult MLAudioSetMicMute(
    bool is_muted
)
```

Mutes or un-mutes all microphone capture. 

**Parameters**

|  |   |   |
|--|--|--|
| bool |is_muted|Determines whether mic capture is muted or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully Successfully muted or unmuted microphone capture. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Failed due to lack of permission. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * android.permission.RECORD_AUDIO (protection level: dangerous) 


This mute control applies to all microphone capture in general (excluding "recognizer voice" which is always active). When mic capture is muted or unmuted by one app, it is muted or unmuted for all apps. Note: This setting is separate from any muting done by the audio policy manager (such as when the "reality
button" is pressed).





-----------

### MLAudioGetMicMute {#mlresult-mlaudiogetmicmute}

```cpp
MLResult MLAudioGetMicMute(
    bool * out_is_muted
)
```

Returns whether all microphone capture is muted or not. 

**Parameters**

|  |   |   |
|--|--|--|
| bool * |out_is_muted|Indicates whether the mic capture is muted or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully indicated whether microphone is muted. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Failed due to lack of permission. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * android.permission.RECORD_AUDIO (protection level: dangerous) 





**API Level:**
  * 20




-----------

### MLAudioSetMicMuteCallback {#mlresult-mlaudiosetmicmutecallback}

```cpp
MLResult MLAudioSetMicMuteCallback(
    MLAudioMicMuteCallback callback,
    void * context
)
```

Registers a callback for changes to the global mic mute. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioMicMuteCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomicmutecallback) |callback|MLAudioMicMuteCallback function pointer. |
| void * |context|Generic data pointer passed back to callback.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully registered callback. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Failed due to lack of permission. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * android.permission.RECORD_AUDIO (protection level: dangerous) 


The callback will be called whenever the global mic mute gets changed (even if changed by the owner of the callback). The 'context' argument is passed back to the callback as its first argument, and the new mic mute setting is passed to the callback as its second argument.





-----------

### MLAudioBeginTraitAnalysisFromMicCapture {#mlresult-mlaudiobegintraitanalysisfrommiccapture}

```cpp
MLResult MLAudioBeginTraitAnalysisFromMicCapture(
    MLAudioTraitAnalysisTarget target,
    MLAudioTraitAnalysisCallback callback,
    void * callback_context,
    MLHandle * out_handle
)
```

Creates a new analysis input for the specified target. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioTraitAnalysisTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiotraitanalysistarget) |target|MLAudioTraitAnalysisTarget specifies the analysis target. |
| [MLAudioTraitAnalysisCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiotraitanalysiscallback) |callback|MLAudioTraitAnalysisCallback function pointer. |
| void * |callback_context|Generic data pointer passed back to callback. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used to identify this analysis in subsequent calls.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set control frequencies. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 


Creates a trait analysis, initializes its connection to the device microphones as the audio data source, and returns a handle in the 'out_handle' argument. The 'target' argument specifies the type of trait analysis, which implies the type of audio content to be analyzed. Trait analysis results are returned as a single float, whose meaning is context dependent based on the target. Results may be acquired either on a polling basis by calling MLAudioGetTraitAnalysis, or via a callback set by the optional 'callback' argument of this function.




**API Level:**
  * 20




-----------

### MLAudioGetTraitAnalysis {#mlresult-mlaudiogettraitanalysis}

```cpp
MLResult MLAudioGetTraitAnalysis(
    MLHandle handle,
    float * out_value
)
```

Returns the current value of the trait analysis associated with the specified handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the analysis. |
| float * |out_value|Current value of analysis.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned control frequencies. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImpelmented|return control frequencies because feature has not been implemented yet.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLAudioEndTraitAnalysis {#mlresult-mlaudioendtraitanalysis}

```cpp
MLResult MLAudioEndTraitAnalysis(
    MLHandle handle
)
```

Stops a previously started trait analysis. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the analysis.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned empty buffe for writing more stream data. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 


Stops the analysis associated with the specified handle.




**API Level:**
  * 20




-----------

### MLAudioBeginSpectralAnalysisFromMicCapture {#mlresult-mlaudiobeginspectralanalysisfrommiccapture}

```cpp
MLResult MLAudioBeginSpectralAnalysisFromMicCapture(
    MLAudioSpectralAnalysisTarget target,
    MLAudioSpectralAnalysisCallback callback,
    void * callback_context,
    MLHandle * out_handle
)
```

Starts a new spectral analysis that provides frequency spectrum energy derived from mic signals. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioSpectralAnalysisTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiospectralanalysistarget) |target|MLAudioSpectralAnalysisTarget specifies the analysis target. |
| [MLAudioSpectralAnalysisCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiospectralanalysiscallback) |callback|MLAudioSpectralAnalysisCallback function pointer. |
| void * |callback_context|Generic data pointer passed back to callback. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used to identify this analysis in subsequent calls.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_OK|Successfully released buffer. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 


Creates a spectral analysis, initializes its connection to the device microphones as the audio data source, and returns a handle in the 'out_handle' argument. The 'target' argument specifies the type of spectral analysis, which implies the type of audio content to be analyzed. Spectral analysis results are returned in the [MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) struct, which contains a time window of spectral analysis values. Results may be acquired either on a polling basis by calling MLAudioGetSpectralAnalysis, or via a callback set by the optional 'callback' argument of this function, triggered whenever new values are available. Cleanup of [MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) passed in the optional callback is handled by the ml_audio library; the caller is not responsible for deallocating memory if the callback is used.




**API Level:**
  * 20




-----------

### MLAudioGetSpectralAnalysis {#mlresult-mlaudiogetspectralanalysis}

```cpp
MLResult MLAudioGetSpectralAnalysis(
    MLHandle handle,
    MLAudioSpectralAnalysis * out_values
)
```

Returns the current value of the spectral analysis associated with the specified handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the analysis. |
| [MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) * |out_values|[MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) containing the current values of a spectral analysis.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned latency for sound input. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


Allocates memory at out_values->values based on the MLAudioSpectralAnalysisTarget associated with the specified handle. The caller is responsible for deallocating this memory after each call to MLAudioGetSpectralAnalysis.




**API Level:**
  * 20




-----------

### MLAudioEndSpectralAnalysis {#mlresult-mlaudioendspectralanalysis}

```cpp
MLResult MLAudioEndSpectralAnalysis(
    MLHandle handle
)
```

Stops a previously started spectral analysis. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the analysis.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_OK|Successfully stopped spectral analysis. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 


Stops the analysis associated with the specified handle.




**API Level:**
  * 20




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2017 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#include "ml_api.h"
#include "ml_types.h"

ML_EXTERN_C_BEGIN



typedef enum MLAudioState {
  MLAudioState_Stopped,
  MLAudioState_Playing,
  MLAudioState_Paused,
  MLAudioState_Ensure32Bits = 0x7FFFFFFF
} MLAudioState;

typedef enum MLAudioSoundEvent {
  MLAudioSoundEvent_End,
  MLAudioSoundEvent_Loop,
  MLAudioSoundEvent_MutedBySystem,
  MLAudioSoundEvent_UnmutedBySystem,
  MLAudioSoundEvent_DuckedBySystem,
  MLAudioSoundEvent_UnduckedBySystem,
  MLAudioSoundEvent_ResourceDestroyed,
  MLAudioSoundEvent_Ensure32Bits = 0x7FFFFFFF
} MLAudioSoundEvent;

typedef enum MLAudioMediaEvent {
  MLAudioMediaEvent_Play,
  MLAudioMediaEvent_Stop,
  MLAudioMediaEvent_Pause,
  MLAudioMediaEvent_NextTrack,
  MLAudioMediaEvent_PrevTrack,
  MLAudioMediaEvent_Ensure32Bits = 0x7FFFFFFF
} MLAudioMediaEvent;

typedef enum MLAudioOutputDevice {
  MLAudioOutputDevice_Wearable,
  MLAudioOutputDevice_USB,
  MLAudioOutputDevice_Bluetooth,
  MLAudioOutputDevice_HearingAid,
  MLAudioOutputDevice_Ensure32Bits = 0x7FFFFFFF
} MLAudioOutputDevice;
typedef enum MLAudioMicCaptureType {
    MLAudioMicCaptureType_VoiceComm,
    MLAudioMicCaptureType_VoiceCapture,
    MLAudioMicCaptureType_WorldCapture=4,
    MLAudioMicCaptureType_RawMicsAndAECRef,
    MLAudioMicCaptureType_Ensure32Bits=0x7FFFFFFF
} MLAudioMicCaptureType;

typedef struct MLAudioMultibandLevel {
  float main;
  float lf;
  float mf;
  float hf;
} MLAudioMultibandLevel;


typedef struct MLAudioDispersionProperties {
    MLAudioMultibandLevel gain;
    float pre_delay;
} MLAudioDispersionProperties;

typedef struct MLAudioReverbProperties {
    MLAudioMultibandLevel gain;
    float pre_delay;
    float decay_time;
    float decay_time_lf_ratio;
    float decay_time_hf_ratio;
} MLAudioReverbProperties;


typedef struct MLAudioSpatialSoundDistanceProperties {
  float min_distance;
  float max_distance;
  float rolloff_factor;
} MLAudioSpatialSoundDistanceProperties;

typedef struct MLAudioSpatialSoundRadiationProperties {
  float inner_angle;
  float outer_angle;
  float outer_gain;
  float outer_gain_lf;
  float outer_gain_mf;
  float outer_gain_hf;
} MLAudioSpatialSoundRadiationProperties;

typedef struct MLAudioRaycast {
    MLVec3f eye_point;
    MLVec3f end_point;
} MLAudioRaycast;

typedef struct MLAudioObstruction {
    float factor;
    MLVec3f hit_point;
}  MLAudioObstruction;

typedef struct MLAudioRaycastRequest {
    MLHandle source_id;
    MLHandle image_id;
    uint32_t leg_index;
    MLAudioRaycast ray;
} MLAudioRaycastRequest;

typedef struct MLAudioRaycastResult {
    MLHandle source_id;
    MLHandle image_id;
    uint32_t leg_index;
    MLAudioRaycast ray;
    MLAudioObstruction obstruction;
} MLAudioRaycastResult;

typedef enum MLAudioSampleFormat {
  MLAudioSampleFormat_Int,
  MLAudioSampleFormat_Float,
  MLAudioSampleFormat_Ensure32Bits = 0x7FFFFFFF
} MLAudioSampleFormat;

typedef enum MLAudioChannelFormat {
    MLAudioChannelFormat_Default,
    MLAudioChannelFormat_AmbisonicAmbix,
    MLAudioChannelFormat_Ensure32Bits = 0x7FFFFFFF,
} MLAudioChannelFormat;

typedef struct MLAudioBufferFormat {
  uint32_t channel_count;
  uint32_t samples_per_second;
  uint32_t bits_per_sample;
  uint32_t valid_bits_per_sample;
  MLAudioSampleFormat sample_format;
  MLAudioChannelFormat channel_format;
} MLAudioBufferFormat;

typedef struct MLAudioBuffer {
  uint8_t *ptr;
  uint32_t size;
} MLAudioBuffer;

typedef enum MLAudioTraitAnalysisTarget {
    MLAudioTraitAnalysisTarget_AmbientSoundLevelDbfs,
    MLAudioTraitAnalysisTarget_UserVoicePresence,
    MLAudioTraitAnalysisTarget_UserVoiceLevelDbfs,
    MLAudioTraitAnalysisTarget_UserVoicePitch,
    MLAudioTraitAnalysisTarget_Ensure32Bits = 0x7FFFFFFF
} MLAudioTraitAnalysisTarget;

typedef enum MLAudioSpectralAnalysisTarget {
    MLAudioSpectralAnalysisTarget_UserVoiceSpectrumMfcc,
    MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumBark,
    MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumMel,
    MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumThirdOctave,
    MLAudioSpectralAnalysisTarget_Ensure32Bits = 0x7FFFFFFF
} MLAudioSpectralAnalysisTarget;

typedef struct MLAudioSpectralAnalysis {
    float *values;
    int32_t num_columns;
    int32_t num_rows;
} MLAudioSpectralAnalysis;

enum {
  MLResultAPIPrefix_Audio = MLRESULT_PREFIX(0x9e11)
};

typedef enum MLAudioResult {
  MLAudioResult_NotImplemented = MLResultAPIPrefix_Audio,
  MLAudioResult_HandleNotFound,
  MLAudioResult_InvalidSampleRate,
  MLAudioResult_InvalidBitsPerSample,
  MLAudioResult_InvalidValidBits,
  MLAudioResult_InvalidSampleFormat,
  MLAudioResult_InvalidChannelCount,
  MLAudioResult_InvalidBufferSize,
  MLAudioResult_BufferNotReady,
  MLAudioResult_FileNotFound,
  MLAudioResult_FileNotRecognized,
  MLAudioResult_ResourceNotFound,
  MLAudioResult_ResourceDiscarded,
  MLAudioResult_OperationUnavailable,
  MLAudioResult_OperationNotReady,
  MLAudioResult_InternalConfigError,
  MLAudioResult_Ensure32Bits = 0x7FFFFFFF
} MLAudioResult;

ML_API const char* ML_CALL MLAudioGetResultString(MLResult result_code);

typedef void (*MLAudioSoundEventCallback)(MLHandle handle, MLAudioSoundEvent event, void *context);

typedef void (*MLAudioMediaEventCallback)(MLAudioMediaEvent event, void *context);

typedef void (*MLAudioBufferCallback)(MLHandle handle, void *context);

typedef void (*MLAudioResourceDiscardedCallback)(MLHandle resource, void *context);

typedef void (*MLAudioMasterVolumeChangedCallback)(float new_volume, void *context);

typedef void (*MLAudioOutputMuteChangedCallback)(bool is_muted, void *context);

typedef void (*MLAudioOutputDeviceChangedCallback)(MLAudioOutputDevice current_device, void *context);

typedef void (*MLAudioMicMuteCallback)(bool is_muted, void *context);

typedef void (*MLAudioTraitAnalysisCallback)(MLHandle handle, MLAudioTraitAnalysisTarget target, float value, void *context);

typedef void (*MLAudioSpectralAnalysisCallback)(MLHandle handle, MLAudioSpectralAnalysisTarget target, MLAudioSpectralAnalysis values, void *context);


ML_API MLResult ML_CALL MLAudioCreateLoadedResource(int file, bool dynamic_decode, MLAudioResourceDiscardedCallback callback, void *context, MLHandle *out_resource);

ML_API MLResult ML_CALL MLAudioCreateStreamedResource(int file, MLAudioResourceDiscardedCallback callback, void *context, MLHandle *out_resource);

ML_API MLResult ML_CALL MLAudioCheckResource(MLHandle resource, bool *out_is_ready);

ML_API MLResult ML_CALL MLAudioGetResourceSize(MLHandle resource, uint32_t *out_size_in_bytes);

ML_API MLResult ML_CALL MLAudioRefreshResource(MLHandle resource, int file);

ML_API MLResult ML_CALL MLAudioDestroyResource(MLHandle resource);

ML_API MLResult ML_CALL MLAudioCreateSoundWithLoadedResource(MLHandle resource, bool auto_destroy, MLHandle *out_handle);

ML_API MLResult ML_CALL MLAudioCreateSoundWithStreamedResource(MLHandle resource, bool auto_destroy, MLHandle *out_handle);

ML_API MLResult ML_CALL MLAudioCreateSoundWithLoadedFile(int file, bool auto_destroy, bool dynamic_decode, MLHandle *out_handle);

ML_API MLResult ML_CALL MLAudioCreateSoundWithStreamedFile(int file, bool auto_destroy, MLHandle *out_handle);

ML_API MLResult ML_CALL MLAudioCreateSoundWithBufferedOutput(const MLAudioBufferFormat *format, uint32_t buffer_size_in_bytes, MLAudioBufferCallback callback, void *context, MLHandle *out_handle);

ML_API MLResult ML_CALL MLAudioDestroySound(MLHandle handle);

ML_API MLResult ML_CALL MLAudioStartSound(MLHandle handle);

ML_API MLResult ML_CALL MLAudioStopSound(MLHandle handle);

ML_API MLResult ML_CALL MLAudioPauseSound(MLHandle handle);

ML_API MLResult ML_CALL MLAudioResumeSound(MLHandle handle);

ML_API MLResult ML_CALL MLAudioGetSoundState(MLHandle handle, MLAudioState *out_state);

ML_API MLResult ML_CALL MLAudioGetSoundFormat(MLHandle handle, MLAudioBufferFormat *out_format);

ML_API MLResult ML_CALL MLAudioSetSoundEventCallback(MLHandle handle, MLAudioSoundEventCallback callback, void *context);

ML_API MLResult ML_CALL MLAudioSetMediaEventCallback(MLAudioMediaEventCallback callback, void *context);


ML_API MLResult ML_CALL MLAudioSetSoundVolumeLinear(MLHandle handle, float volume);

ML_API MLResult ML_CALL MLAudioGetSoundVolumeLinear(MLHandle handle, float *out_volume);

ML_API MLResult ML_CALL MLAudioSetSoundVolumeDb(MLHandle handle, float volume);

ML_API MLResult ML_CALL MLAudioGetSoundVolumeDb(MLHandle handle, float *out_volume);

ML_API MLResult ML_CALL MLAudioSetSoundPitch(MLHandle handle, float pitch);

ML_API MLResult ML_CALL MLAudioGetSoundPitch(MLHandle handle, float *out_pitch);

ML_API MLResult ML_CALL MLAudioSetSoundMute(MLHandle handle, bool is_muted);

ML_API MLResult ML_CALL MLAudioGetSoundMute(MLHandle handle, bool *out_is_muted);

ML_API MLResult ML_CALL MLAudioSetSoundBypassesMasterVolume(MLHandle handle, bool is_bypassing);

ML_API MLResult ML_CALL MLAudioGetSoundBypassesMasterVolume(MLHandle handle, bool *out_is_bypassing);

ML_API MLResult ML_CALL MLAudioSetSoundLooping(MLHandle handle, bool is_looping);

ML_API MLResult ML_CALL MLAudioGetSoundLooping(MLHandle handle, bool *out_is_looping);

ML_API MLResult ML_CALL MLAudioSetStreamedFileOffset(MLHandle handle, uint32_t offset_in_msec);

ML_API MLResult ML_CALL MLAudioGetStreamedFileOffset(MLHandle handle, uint32_t *out_offset_in_msec);

ML_API MLResult ML_CALL MLAudioGetOutputDevice(MLAudioOutputDevice *out_current_device);

ML_API MLResult ML_CALL MLAudioSetOutputDeviceCallback(MLAudioOutputDeviceChangedCallback callback, void *context);

ML_API MLResult ML_CALL MLAudioResetAcousticScene();

ML_API MLResult ML_CALL MLAudioBeginAcousticSceneUpdate();

ML_API MLResult ML_CALL MLAudioEndAcousticSceneUpdate();

ML_API MLResult ML_CALL MLAudioSetAcousticSceneMapEnable(bool is_enabled);

ML_API MLResult ML_CALL MLAudioGetAcousticSceneMapEnable(bool *out_is_enabled);

ML_API MLResult ML_CALL MLAudioSetAcousticSceneTransmissionDefault(const MLAudioMultibandLevel *transmission);

ML_API MLResult ML_CALL MLAudioGetAcousticSceneTransmissionDefault(MLAudioMultibandLevel *out_transmission);

ML_API MLResult ML_CALL MLAudioSetAcousticSceneDispersionDefault(const MLAudioDispersionProperties *properties);

ML_API MLResult ML_CALL MLAudioGetAcousticSceneDispersionDefault(MLAudioDispersionProperties *out_properties);

ML_API MLResult ML_CALL MLAudioSetAcousticSceneReverbDefault(const MLAudioReverbProperties *properties);

ML_API MLResult ML_CALL MLAudioGetAcousticSceneReverbDefault(MLAudioReverbProperties *out_properties);

ML_API MLResult ML_CALL MLAudioGetChangedAcousticMap(uint32_t prev_map_tag, uint8_t **out_map_data, uint32_t *out_map_size_in_bytes, uint32_t *out_map_tag);


ML_API MLResult ML_CALL MLAudioSetSpatialSoundEnable(MLHandle handle, bool is_enabled);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundEnable(MLHandle handle, bool *out_is_enabled);

ML_API MLResult ML_CALL MLAudioSetSpatialSoundPosition(MLHandle handle, uint32_t channel, const MLVec3f *position);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundPosition(MLHandle handle, uint32_t channel, MLVec3f *out_position);

ML_API MLResult ML_CALL MLAudioSetSpatialSoundDirection(MLHandle handle, uint32_t channel, const MLQuaternionf *direction);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundDirection(MLHandle handle, uint32_t channel, MLQuaternionf *out_direction);

ML_API MLResult ML_CALL MLAudioSetSpatialSoundBillboarding(MLHandle id, bool is_billboarding);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundBillboarding(MLHandle id, bool *out_is_billboarding);

ML_API MLResult ML_CALL MLAudioSetSpatialSoundObstruction(MLHandle id, uint32_t channel, const MLAudioObstruction *left_ear, const MLAudioObstruction *right_ear);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundObstruction(MLHandle id, uint32_t channel, MLAudioObstruction *out_left_ear, MLAudioObstruction *out_right_ear);

ML_API MLResult ML_CALL MLAudioSetSpatialSoundObstructionOverride(MLHandle id, const MLAudioMultibandLevel *override);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundObstructionOverride(MLHandle id, MLAudioMultibandLevel *out_override);

ML_API MLResult ML_CALL MLAudioSetSpatialSoundDistanceAttenuation(MLHandle handle, uint32_t channel, const MLAudioSpatialSoundDistanceProperties *properties);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundDistanceAttenuation(MLHandle handle, uint32_t channel, MLAudioSpatialSoundDistanceProperties *out_properties);

ML_API MLResult ML_CALL MLAudioSetSpatialSoundRadiation(MLHandle handle, uint32_t channel, const MLAudioSpatialSoundRadiationProperties *properties);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundRadiation(MLHandle handle, uint32_t channel, MLAudioSpatialSoundRadiationProperties *out_properties);

ML_API MLResult ML_CALL MLAudioSetSpatialSoundDirectLevel(MLHandle handle, uint32_t channel, const MLAudioMultibandLevel *level);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundDirectLevel(MLHandle handle, uint32_t channel, MLAudioMultibandLevel *out_level);

ML_API MLResult ML_CALL MLAudioSetSpatialSoundIndirectLevel(MLHandle handle, uint32_t channel, const MLAudioMultibandLevel *level);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundIndirectLevel(MLHandle handle, uint32_t channel, MLAudioMultibandLevel *out_level);

ML_API MLResult ML_CALL MLAudioSetSpatialSoundDispersionSendLevel(MLHandle handle, uint32_t channel, const MLAudioMultibandLevel *level);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundDispersionSendLevel(MLHandle handle, uint32_t channel, MLAudioMultibandLevel *out_level);

ML_API MLResult ML_CALL MLAudioSetSpatialSoundReverbSendLevel(MLHandle handle, uint32_t channel, const MLAudioMultibandLevel *level);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundReverbSendLevel(MLHandle handle, uint32_t channel, MLAudioMultibandLevel *out_level);

ML_API MLResult ML_CALL MLAudioSetSpatialSoundHeadRelative(MLHandle handle, bool is_head_relative);

ML_API MLResult ML_CALL MLAudioGetSpatialSoundHeadRelative(MLHandle handle, bool *out_is_head_relative);

ML_API MLResult ML_CALL MLAudioGetSpatialRaycastRequests(MLAudioRaycastRequest ** out_raycast_requests, uint32_t *out_request_count);

ML_API MLResult ML_CALL MLAudioSetSpatialRaycastResults(MLAudioRaycastResult * raycast_results, uint32_t result_count);

ML_API MLResult ML_CALL MLAudioGetBufferedOutputDefaults(uint32_t channel_count, uint32_t samples_per_second, float max_pitch_change, MLAudioBufferFormat *out_format, uint32_t *out_recommended_size_in_bytes, uint32_t *out_min_size_in_bytes);

ML_API MLResult ML_CALL MLAudioGetBufferedOutputLatency(MLHandle handle, float *out_latency_in_msec);

ML_API MLResult ML_CALL MLAudioGetBufferedOutputFramesPlayed(MLHandle handle, uint64_t *out_frames_played);

ML_API MLResult ML_CALL MLAudioGetOutputBuffer(MLHandle handle, MLAudioBuffer *out_buf);

ML_API MLResult ML_CALL MLAudioReleaseOutputBuffer(MLHandle handle);

ML_API MLResult ML_CALL MLAudioGetMasterVolume(float *out_volume);

ML_API MLResult ML_CALL MLAudioSetMasterVolumeCallback(MLAudioMasterVolumeChangedCallback callback, void *context);

ML_API MLResult ML_CALL MLAudioGetOutputMute(bool *out_is_muted);

ML_API MLResult ML_CALL MLAudioSetOutputMuteCallback(MLAudioOutputMuteChangedCallback callback, void *context);


ML_API MLResult ML_CALL MLAudioCreateInputFromMicCapture(MLAudioMicCaptureType mic_capture_type, const MLAudioBufferFormat *format, uint32_t buffer_size_in_bytes, MLAudioBufferCallback callback, void *context, MLHandle *out_handle);

ML_API MLResult ML_CALL MLAudioCreateInputFromVirtualCapture(const MLAudioBufferFormat *format, uint32_t buffer_size, MLAudioBufferCallback callback, void *callback_context, MLHandle *out_handle);

ML_API MLResult ML_CALL MLAudioCreateInputFromMixedCapture(const MLAudioBufferFormat *format, uint32_t buffer_size, MLAudioBufferCallback callback, void *callback_context, MLHandle *out_handle);

ML_API MLResult ML_CALL MLAudioDestroyInput(MLHandle handle);

ML_API MLResult ML_CALL MLAudioStartInput(MLHandle handle);

ML_API MLResult ML_CALL MLAudioStopInput(MLHandle handle);

ML_API MLResult ML_CALL MLAudioGetInputState(MLHandle handle, MLAudioState *out_state);

ML_API MLResult ML_CALL MLAudioGetBufferedInputDefaults(uint32_t channel_count, uint32_t samples_per_second, MLAudioBufferFormat *out_format, uint32_t *out_recommended_size_in_bytes, uint32_t *out_min_size_in_bytes);

ML_API MLResult ML_CALL MLAudioGetBufferedInputLatency(MLHandle handle, float *out_latency_in_msec);

ML_API MLResult ML_CALL MLAudioGetInputBuffer(MLHandle handle, MLAudioBuffer *out_buf);

ML_API MLResult ML_CALL MLAudioReleaseInputBuffer(MLHandle handle);

ML_API MLResult ML_CALL MLAudioSetMicMute(bool is_muted);

ML_API MLResult ML_CALL MLAudioGetMicMute(bool *out_is_muted);

ML_API MLResult ML_CALL MLAudioSetMicMuteCallback(MLAudioMicMuteCallback callback, void *context);

ML_API MLResult ML_CALL MLAudioBeginTraitAnalysisFromMicCapture(MLAudioTraitAnalysisTarget target, MLAudioTraitAnalysisCallback callback, void *callback_context, MLHandle *out_handle);

ML_API MLResult ML_CALL MLAudioGetTraitAnalysis(MLHandle handle, float *out_value);

ML_API MLResult ML_CALL MLAudioEndTraitAnalysis(MLHandle handle);

ML_API MLResult ML_CALL MLAudioBeginSpectralAnalysisFromMicCapture(MLAudioSpectralAnalysisTarget target, MLAudioSpectralAnalysisCallback callback, void *callback_context, MLHandle *out_handle);

ML_API MLResult ML_CALL MLAudioGetSpectralAnalysis(MLHandle handle, MLAudioSpectralAnalysis *out_values);

ML_API MLResult ML_CALL MLAudioEndSpectralAnalysis(MLHandle handle);

ML_EXTERN_C_END
```




