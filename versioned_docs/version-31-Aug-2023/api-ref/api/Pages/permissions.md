---
title: Permissions

---

# Permissions






Global [MLAudioBeginAcousticSceneUpdate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiobeginacousticsceneupdate)  ()

*  None  

Global [MLAudioBeginSpectralAnalysisFromMicCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiobeginspectralanalysisfrommiccapture)  (MLAudioSpectralAnalysisTarget target, MLAudioSpectralAnalysisCallback callback, void *callback_context, MLHandle *out_handle)

*  None  

Global [MLAudioBeginTraitAnalysisFromMicCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiobegintraitanalysisfrommiccapture)  (MLAudioTraitAnalysisTarget target, MLAudioTraitAnalysisCallback callback, void *callback_context, MLHandle *out_handle)

*  None  

Global [MLAudioCheckResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocheckresource)  (MLHandle resource, bool *out_is_ready)

*  None  

Global [MLAudioCreateInputFromMicCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_allocation.md#mlresult-mlaudiocreateinputfrommiccapture)  (MLAudioMicCaptureType mic_capture_type, const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *format, uint32_t buffer_size_in_bytes, MLAudioBufferCallback callback, void *context, MLHandle *out_handle)

*  android.permission.RECORD_AUDIO (protection level: dangerous)  

Global [MLAudioCreateInputFromMixedCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_allocation.md#mlresult-mlaudiocreateinputfrommixedcapture)  (const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *format, uint32_t buffer_size, MLAudioBufferCallback callback, void *callback_context, MLHandle *out_handle)

*  None  

Global [MLAudioCreateInputFromVirtualCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_allocation.md#mlresult-mlaudiocreateinputfromvirtualcapture)  (const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *format, uint32_t buffer_size, MLAudioBufferCallback callback, void *callback_context, MLHandle *out_handle)

*  None  

Global [MLAudioCreateLoadedResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreateloadedresource)  (int file, bool dynamic_decode, MLAudioResourceDiscardedCallback callback, void *context, MLHandle *out_resource)

*  None  

Global [MLAudioCreateSoundWithBufferedOutput](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiocreatesoundwithbufferedoutput)  (const [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *format, uint32_t buffer_size_in_bytes, MLAudioBufferCallback callback, void *context, MLHandle *out_handle)

*  None  

Global [MLAudioCreateSoundWithLoadedFile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiocreatesoundwithloadedfile)  (int file, bool auto_destroy, bool dynamic_decode, MLHandle *out_handle)

*  None  

Global [MLAudioCreateSoundWithLoadedResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreatesoundwithloadedresource)  (MLHandle resource, bool auto_destroy, MLHandle *out_handle)

*  None  

Global [MLAudioCreateSoundWithStreamedFile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiocreatesoundwithstreamedfile)  (int file, bool auto_destroy, MLHandle *out_handle)

*  None  

Global [MLAudioCreateSoundWithStreamedResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreatesoundwithstreamedresource)  (MLHandle resource, bool auto_destroy, MLHandle *out_handle)

*  None  

Global [MLAudioCreateStreamedResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreatestreamedresource)  (int file, MLAudioResourceDiscardedCallback callback, void *context, MLHandle *out_resource)

*  None  

Global [MLAudioDestroyInput](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_allocation.md#mlresult-mlaudiodestroyinput)  (MLHandle handle)

*  None  

Global [MLAudioDestroyResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiodestroyresource)  (MLHandle resource)

*  None  

Global [MLAudioDestroySound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiodestroysound)  (MLHandle handle)

*  None  

Global [MLAudioEndAcousticSceneUpdate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudioendacousticsceneupdate)  ()

*  None  

Global [MLAudioEndSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudioendspectralanalysis)  (MLHandle handle)

*  None  

Global [MLAudioEndTraitAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudioendtraitanalysis)  (MLHandle handle)

*  None  

Global [MLAudioGetAcousticSceneDispersionDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenedispersiondefault)  ([MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) *out_properties)

*  None  

Global [MLAudioGetAcousticSceneMapEnable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenemapenable)  (bool *out_is_enabled)

*  None  

Global [MLAudioGetAcousticSceneReverbDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenereverbdefault)  ([MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) *out_properties)

*  None  

Global [MLAudioGetAcousticSceneTransmissionDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenetransmissiondefault)  ([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *out_transmission)

*  None  

Global [MLAudioGetBufferedInputDefaults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudiogetbufferedinputdefaults)  (uint32_t channel_count, uint32_t samples_per_second, [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *out_format, uint32_t *out_recommended_size_in_bytes, uint32_t *out_min_size_in_bytes)

*  None  

Global [MLAudioGetBufferedInputLatency](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudiogetbufferedinputlatency)  (MLHandle handle, float *out_latency_in_msec)

*  None  

Global [MLAudioGetBufferedOutputDefaults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetbufferedoutputdefaults)  (uint32_t channel_count, uint32_t samples_per_second, float max_pitch_change, [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *out_format, uint32_t *out_recommended_size_in_bytes, uint32_t *out_min_size_in_bytes)

*  None  

Global [MLAudioGetBufferedOutputFramesPlayed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetbufferedoutputframesplayed)  (MLHandle handle, uint64_t *out_frames_played)

*  None  

Global [MLAudioGetBufferedOutputLatency](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetbufferedoutputlatency)  (MLHandle handle, float *out_latency_in_msec)

*  None  

Global [MLAudioGetChangedAcousticMap](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetchangedacousticmap)  (uint32_t prev_map_tag, uint8_t **out_map_data, uint32_t *out_map_size_in_bytes, uint32_t *out_map_tag)

*  None  

Global [MLAudioGetInputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudiogetinputbuffer)  (MLHandle handle, [MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) *out_buf)

*  None  

Global [MLAudioGetInputState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_control.md#mlresult-mlaudiogetinputstate)  (MLHandle handle, MLAudioState *out_state)

*  None  

Global [MLAudioGetMasterVolume](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiogetmastervolume)  (float *out_volume)

*  None  

Global [MLAudioGetMicMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_mic_muting.md#mlresult-mlaudiogetmicmute)  (bool *out_is_muted)

*  android.permission.RECORD_AUDIO (protection level: dangerous)  

Global [MLAudioGetOutputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetoutputbuffer)  (MLHandle handle, [MLAudioBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) *out_buf)

*  None  

Global [MLAudioGetOutputDevice](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetoutputdevice)  (MLAudioOutputDevice *out_current_device)

*  None  

Global [MLAudioGetOutputMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiogetoutputmute)  (bool *out_is_muted)

*  None  

Global [MLAudioGetResourceSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiogetresourcesize)  (MLHandle resource, uint32_t *out_size_in_bytes)

*  None  

Global [MLAudioGetSoundBypassesMasterVolume](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundbypassesmastervolume)  (MLHandle handle, bool *out_is_bypassing)

*  None  

Global [MLAudioGetSoundFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiogetsoundformat)  (MLHandle handle, [MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *out_format)

*  None  

Global [MLAudioGetSoundLooping](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundlooping)  (MLHandle handle, bool *out_is_looping)

*  None  

Global [MLAudioGetSoundMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundmute)  (MLHandle handle, bool *out_is_muted)

*  None  

Global [MLAudioGetSoundPitch](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundpitch)  (MLHandle handle, float *out_pitch)

*  None  

Global [MLAudioGetSoundState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiogetsoundstate)  (MLHandle handle, MLAudioState *out_state)

*  None  

Global [MLAudioGetSoundVolumeDb](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundvolumedb)  (MLHandle handle, float *out_volume)

*  None  

Global [MLAudioGetSoundVolumeLinear](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundvolumelinear)  (MLHandle handle, float *out_volume)

*  None  

Global [MLAudioGetSpatialRaycastRequests](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialraycastrequests)  ([MLAudioRaycastRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_request.md) **out_raycast_requests, uint32_t *out_request_count)

*  None  

Global [MLAudioGetSpatialSoundBillboarding](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundbillboarding)  (MLHandle id, bool *out_is_billboarding)

*  None  

Global [MLAudioGetSpatialSoundDirection](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsounddirection)  (MLHandle handle, uint32_t channel, [MLQuaternionf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) *out_direction)

*  None  

Global [MLAudioGetSpatialSoundDirectLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsounddirectlevel)  (MLHandle handle, uint32_t channel, [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *out_level)

*  None  

Global [MLAudioGetSpatialSoundDispersionSendLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsounddispersionsendlevel)  (MLHandle handle, uint32_t channel, [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *out_level)

*  None  

Global [MLAudioGetSpatialSoundDistanceAttenuation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsounddistanceattenuation)  (MLHandle handle, uint32_t channel, [MLAudioSpatialSoundDistanceProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md) *out_properties)

*  None  

Global [MLAudioGetSpatialSoundEnable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundenable)  (MLHandle handle, bool *out_is_enabled)

*  None  

Global [MLAudioGetSpatialSoundHeadRelative](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundheadrelative)  (MLHandle handle, bool *out_is_head_relative)

*  None  

Global [MLAudioGetSpatialSoundIndirectLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundindirectlevel)  (MLHandle handle, uint32_t channel, [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *out_level)

*  None  

Global [MLAudioGetSpatialSoundObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundobstruction)  (MLHandle id, uint32_t channel, [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) *out_left_ear, [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) *out_right_ear)

*  None  

Global [MLAudioGetSpatialSoundObstructionOverride](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundobstructionoverride)  (MLHandle id, [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *out_override)

*  None  

Global [MLAudioGetSpatialSoundPosition](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundposition)  (MLHandle handle, uint32_t channel, [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) *out_position)

*  None  

Global [MLAudioGetSpatialSoundRadiation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundradiation)  (MLHandle handle, uint32_t channel, [MLAudioSpatialSoundRadiationProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md) *out_properties)

*  None  

Global [MLAudioGetSpatialSoundReverbSendLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundreverbsendlevel)  (MLHandle handle, uint32_t channel, [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *out_level)

*  None  

Global [MLAudioGetSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiogetspectralanalysis)  (MLHandle handle, [MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) *out_values)

*  None  

Global [MLAudioGetStreamedFileOffset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetstreamedfileoffset)  (MLHandle handle, uint32_t *out_offset_in_msec)

*  None  

Global [MLAudioGetTraitAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiogettraitanalysis)  (MLHandle handle, float *out_value)

*  None  

Global [MLAudioPauseSound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiopausesound)  (MLHandle handle)

*  None  

Global [MLAudioRefreshResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiorefreshresource)  (MLHandle resource, int file)

*  None  

Global [MLAudioReleaseInputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudioreleaseinputbuffer)  (MLHandle handle)

*  None  

Global [MLAudioReleaseOutputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudioreleaseoutputbuffer)  (MLHandle handle)

*  None  

Global [MLAudioResetAcousticScene](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudioresetacousticscene)  ()

*  None  

Global [MLAudioResumeSound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudioresumesound)  (MLHandle handle)

*  None  

Global [MLAudioSetAcousticSceneDispersionDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenedispersiondefault)  (const [MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) *properties)

*  None  

Global [MLAudioSetAcousticSceneMapEnable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenemapenable)  (bool is_enabled)

*  None  

Global [MLAudioSetAcousticSceneReverbDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenereverbdefault)  (const [MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) *properties)

*  None  

Global [MLAudioSetAcousticSceneTransmissionDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenetransmissiondefault)  (const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *transmission)

*  None  

Global [MLAudioSetMasterVolumeCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiosetmastervolumecallback)  (MLAudioMasterVolumeChangedCallback callback, void *context)

*  None  

Global [MLAudioSetMediaEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiosetmediaeventcallback)  (MLAudioMediaEventCallback callback, void *context)

*  None  

Global [MLAudioSetMicMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_mic_muting.md#mlresult-mlaudiosetmicmute)  (bool is_muted)

*  android.permission.RECORD_AUDIO (protection level: dangerous)  

Global [MLAudioSetMicMuteCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_mic_muting.md#mlresult-mlaudiosetmicmutecallback)  (MLAudioMicMuteCallback callback, void *context)

*  android.permission.RECORD_AUDIO (protection level: dangerous)  

Global [MLAudioSetOutputDeviceCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetoutputdevicecallback)  (MLAudioOutputDeviceChangedCallback callback, void *context)

*  None  

Global [MLAudioSetOutputMuteCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiosetoutputmutecallback)  (MLAudioOutputMuteChangedCallback callback, void *context)

*  None  

Global [MLAudioSetSoundBypassesMasterVolume](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundbypassesmastervolume)  (MLHandle handle, bool is_bypassing)

*  None  

Global [MLAudioSetSoundEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiosetsoundeventcallback)  (MLHandle handle, MLAudioSoundEventCallback callback, void *context)

*  None  

Global [MLAudioSetSoundLooping](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundlooping)  (MLHandle handle, bool is_looping)

*  None  

Global [MLAudioSetSoundMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundmute)  (MLHandle handle, bool is_muted)

*  None  

Global [MLAudioSetSoundPitch](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundpitch)  (MLHandle handle, float pitch)

*  None  

Global [MLAudioSetSoundVolumeDb](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundvolumedb)  (MLHandle handle, float volume)

*  None  

Global [MLAudioSetSoundVolumeLinear](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundvolumelinear)  (MLHandle handle, float volume)

*  None  

Global [MLAudioSetSpatialRaycastResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialraycastresults)  ([MLAudioRaycastResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_result.md) *raycast_results, uint32_t result_count)

*  None  

Global [MLAudioSetSpatialSoundBillboarding](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundbillboarding)  (MLHandle id, bool is_billboarding)

*  None  

Global [MLAudioSetSpatialSoundDirection](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsounddirection)  (MLHandle handle, uint32_t channel, const [MLQuaternionf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) *direction)

*  None  

Global [MLAudioSetSpatialSoundDirectLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsounddirectlevel)  (MLHandle handle, uint32_t channel, const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *level)

*  None  

Global [MLAudioSetSpatialSoundDispersionSendLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsounddispersionsendlevel)  (MLHandle handle, uint32_t channel, const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *level)

*  None  

Global [MLAudioSetSpatialSoundDistanceAttenuation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsounddistanceattenuation)  (MLHandle handle, uint32_t channel, const [MLAudioSpatialSoundDistanceProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md) *properties)

*  None  

Global [MLAudioSetSpatialSoundEnable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundenable)  (MLHandle handle, bool is_enabled)

*  None  

Global [MLAudioSetSpatialSoundHeadRelative](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundheadrelative)  (MLHandle handle, bool is_head_relative)

*  None  

Global [MLAudioSetSpatialSoundIndirectLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundindirectlevel)  (MLHandle handle, uint32_t channel, const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *level)

*  None  

Global [MLAudioSetSpatialSoundObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundobstruction)  (MLHandle id, uint32_t channel, const [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) *left_ear, const [MLAudioObstruction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) *right_ear)

*  None  

Global [MLAudioSetSpatialSoundObstructionOverride](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundobstructionoverride)  (MLHandle id, const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *override)

*  None  

Global [MLAudioSetSpatialSoundPosition](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundposition)  (MLHandle handle, uint32_t channel, const [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) *position)

*  None  

Global [MLAudioSetSpatialSoundRadiation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundradiation)  (MLHandle handle, uint32_t channel, const [MLAudioSpatialSoundRadiationProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md) *properties)

*  None  

Global [MLAudioSetSpatialSoundReverbSendLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundreverbsendlevel)  (MLHandle handle, uint32_t channel, const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *level)

*  None  

Global [MLAudioSetStreamedFileOffset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetstreamedfileoffset)  (MLHandle handle, uint32_t offset_in_msec)

*  None  

Global [MLAudioStartInput](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_control.md#mlresult-mlaudiostartinput)  (MLHandle handle)

*  None  

Global [MLAudioStartSound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiostartsound)  (MLHandle handle)

*  None  

Global [MLAudioStopInput](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_control.md#mlresult-mlaudiostopinput)  (MLHandle handle)

*  None  

Global [MLAudioStopSound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiostopsound)  (MLHandle handle)

*  None  

Global [MLCameraCaptureCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameracapturecallbacksinit)  ([MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) *inout_capture_callbacks)

*  None  

Global [MLCameraCaptureConfigInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameracaptureconfiginit)  ([MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) *inout_config)

*  None  

Global [MLCameraCaptureImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracaptureimage)  (MLCameraContext context, uint32_t num_images)

*  None  

Global [MLCameraCapturePreviewStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturepreviewstart)  (MLCameraContext context)

*  None  

Global [MLCameraCapturePreviewStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturepreviewstop)  (MLCameraContext context)

*  None  

Global [MLCameraCaptureVideoStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturevideostart)  (MLCameraContext context)

*  None  

Global [MLCameraCaptureVideoStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturevideostop)  (MLCameraContext context)

*  None  

Global [MLCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect)  (const [MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) *input_context, MLCameraContext *out_context)

*  android.permission.CAMERA (protection level: dangerous)  

Global [MLCameraConnectContextInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameraconnectcontextinit)  ([MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) *inout_context)

*  None  

Global [MLCameraDeInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameradeinit)  ()

*  None  

Global [MLCameraDeviceAvailabilityStatusCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameradeviceavailabilitystatuscallbacksinit)  ([MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) *inout_device_availability_status_callbacks)

*  None  

Global [MLCameraDeviceStatusCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameradevicestatuscallbacksinit)  ([MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) *inout_device_status_callbacks)

*  None  

Global [MLCameraDisconnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameradisconnect)  (MLCameraContext context)

*  None  

Global [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics)  (MLCameraContext context, MLHandle *out_characteristics_handle)

*  None  

Global [MLCameraGetDeviceAvailabilityStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetdeviceavailabilitystatus)  (MLCameraIdentifier cam_id, bool *out_device_availability_status)

*  None  

Global [MLCameraGetDeviceStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetdevicestatus)  (MLCameraContext context, uint32_t *out_device_status)

*  None  

Global [MLCameraGetErrorCode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerageterrorcode)  (MLCameraContext context, MLCameraError *out_error_code)

*  None  

Global [MLCameraGetNumSupportedStreams](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetnumsupportedstreams)  (MLCameraContext context, uint32_t *out_num_supported_streams)

*  None  

Global [MLCameraGetStreamCaps](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetstreamcaps)  (MLCameraContext context, const uint32_t stream_index, uint32_t *inout_num_stream_caps, [MLCameraCaptureStreamCaps](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md) *inout_stream_caps)

*  None  

Global [MLCameraInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit)  (const [MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) *device_availability_status_callbacks, void *user_data)

*  android.permission.CAMERA (protection level: dangerous)  

Global [MLCameraMetadataGetAFDistanceRangeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetafdistancerangerequestmetadata)  (MLHandle request_handle, float out_data[2])

*  None  

Global [MLCameraMetadataGetAFDistanceRangeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetafdistancerangeresultmetadata)  (MLHandle result_handle, float out_data[2])

*  None  

Global [MLCameraMetadataGetColorCorrectionAberrationModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionaberrationmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataColorCorrectionAberrationMode *out_data)

*  None  

Global [MLCameraMetadataGetColorCorrectionAberrationModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionaberrationmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataColorCorrectionAberrationMode *out_data)

*  None  

Global [MLCameraMetadataGetColorCorrectionAvailableAberrationModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionavailableaberrationmodes)  (MLHandle characteristics_handle, MLCameraMetadataColorCorrectionAberrationMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetColorCorrectionGainsRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiongainsrequestmetadata)  (MLHandle request_handle, float out_data[4])

*  None  

Global [MLCameraMetadataGetColorCorrectionGainsResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiongainsresultmetadata)  (MLHandle result_handle, float out_data[4])

*  None  

Global [MLCameraMetadataGetColorCorrectionModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataColorCorrectionMode *out_data)

*  None  

Global [MLCameraMetadataGetColorCorrectionModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataColorCorrectionMode *out_data)

*  None  

Global [MLCameraMetadataGetColorCorrectionTransformRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiontransformrequestmetadata)  (MLHandle request_handle, [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) out_data[3][3])

*  None  

Global [MLCameraMetadataGetColorCorrectionTransformResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiontransformresultmetadata)  (MLHandle result_handle, [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) out_data[3][3])

*  None  

Global [MLCameraMetadataGetControlAEAntibandingModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeantibandingmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAEAntibandingMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAEAntibandingModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeantibandingmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAEAntibandingMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAEAvailableAntibandingModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeavailableantibandingmodes)  (MLHandle characteristics_handle, MLCameraMetadataControlAEAntibandingMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAEAvailableModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeavailablemodes)  (MLHandle characteristics_handle, MLCameraMetadataControlAEMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAECompensationRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaecompensationrange)  (MLHandle characteristics_handle, int32_t out_data[2])

*  None  

Global [MLCameraMetadataGetControlAECompensationStep](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaecompensationstep)  (MLHandle characteristics_handle, [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) *out_data)

*  None  

Global [MLCameraMetadataGetControlAEExposureCompensationRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeexposurecompensationrequestmetadata)  (MLHandle request_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetControlAEExposureCompensationResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeexposurecompensationresultmetadata)  (MLHandle result_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetControlAELockAvailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaelockavailable)  (MLHandle characteristics_handle, MLCameraMetadataControlAELock *out_data)

*  None  

Global [MLCameraMetadataGetControlAELockRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaelockrequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAELock *out_data)

*  None  

Global [MLCameraMetadataGetControlAELockResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaelockresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAELock *out_data)

*  None  

Global [MLCameraMetadataGetControlAEMaxRegions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaemaxregions)  (MLHandle characteristics_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetControlAEModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaemoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAEMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAEModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaemoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAEMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAERegionsRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeregionsrequestmetadata)  (MLHandle request_handle, int32_t out_data[3][5], uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAERegionsResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeregionsresultmetadata)  (MLHandle result_handle, int32_t out_data[3][5], uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAEStateResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaestateresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAEState *out_data)

*  None  

Global [MLCameraMetadataGetControlAETargetFPSRangeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaetargetfpsrangeresultmetadata)  (MLHandle result_handle, int32_t out_data[2])

*  None  

Global [MLCameraMetadataGetControlAFAvailableModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafavailablemodes)  (MLHandle characteristics_handle, MLCameraMetadataControlAFMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAFMaxRegions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafmaxregions)  (MLHandle characteristics_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetControlAFModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAFMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAFModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAFMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAFRegionsRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafregionsrequestmetadata)  (MLHandle request_handle, int32_t out_data[3][5], uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAFRegionsResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafregionsresultmetadata)  (MLHandle result_handle, int32_t out_data[3][5], uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAFSceneChangeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafscenechangeresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAFSceneChange *out_data)

*  None  

Global [MLCameraMetadataGetControlAFStateResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafstateresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAFState *out_data)

*  None  

Global [MLCameraMetadataGetControlAFTriggerRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaftriggerrequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAFTrigger *out_data)

*  None  

Global [MLCameraMetadataGetControlAFTriggerResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaftriggerresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAFTrigger *out_data)

*  None  

Global [MLCameraMetadataGetControlAvailableEffectModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolavailableeffectmodes)  (MLHandle characteristics_handle, MLCameraMetadataControlEffectMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAvailableModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolavailablemodes)  (MLHandle characteristics_handle, MLCameraMetadataControlMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAvailableSceneModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolavailablescenemodes)  (MLHandle characteristics_handle, MLCameraMetadataControlSceneMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAWBAvailableModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbavailablemodes)  (MLHandle characteristics_handle, MLCameraMetadataControlAWBMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAWBLockAvailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawblockavailable)  (MLHandle characteristics_handle, MLCameraMetadataControlAWBLock *out_data)

*  None  

Global [MLCameraMetadataGetControlAWBLockRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawblockrequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAWBLock *out_data)

*  None  

Global [MLCameraMetadataGetControlAWBLockResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawblockresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAWBLock *out_data)

*  None  

Global [MLCameraMetadataGetControlAWBModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAWBMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAWBModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAWBMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAWBStateResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbstateresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAWBState *out_data)

*  None  

Global [MLCameraMetadataGetControlEffectModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontroleffectmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlEffectMode *out_data)

*  None  

Global [MLCameraMetadataGetControlEffectModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontroleffectmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlEffectMode *out_data)

*  None  

Global [MLCameraMetadataGetControlExposureUpperTimeLimitRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolexposureuppertimelimitrequestmetadata)  (MLHandle request_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetControlExposureUpperTimeLimitResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolexposureuppertimelimitresultmetadata)  (MLHandle result_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetControlForceApplyModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolforceapplymoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlForceApplyMode *out_data)

*  None  

Global [MLCameraMetadataGetControlForceApplyModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolforceapplymoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlForceApplyMode *out_data)

*  None  

Global [MLCameraMetadataGetControlModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlMode *out_data)

*  None  

Global [MLCameraMetadataGetControlModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlMode *out_data)

*  None  

Global [MLCameraMetadataGetControlSceneModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolscenemoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlSceneMode *out_data)

*  None  

Global [MLCameraMetadataGetControlSceneModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolscenemoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlSceneMode *out_data)

*  None  

Global [MLCameraMetadataGetJpegGPSCoordinatesRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpscoordinatesrequestmetadata)  (MLHandle request_handle, double out_data[3])

*  None  

Global [MLCameraMetadataGetJpegGPSCoordinatesResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpscoordinatesresultmetadata)  (MLHandle result_handle, double out_data[3])

*  None  

Global [MLCameraMetadataGetJpegGPSTimestampRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpstimestamprequestmetadata)  (MLHandle request_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetJpegGPSTimestampResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpstimestampresultmetadata)  (MLHandle result_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetJpegQualityRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegqualityrequestmetadata)  (MLHandle request_handle, uint8_t *out_data)

*  None  

Global [MLCameraMetadataGetJpegQualityResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegqualityresultmetadata)  (MLHandle result_handle, uint8_t *out_data)

*  None  

Global [MLCameraMetadataGetJpegThumbnailSizeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegthumbnailsizerequestmetadata)  (MLHandle request_handle, MLCameraMetadataJpegThumbnailSize *out_data)

*  None  

Global [MLCameraMetadataGetJpegThumbnailSizeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegthumbnailsizeresultmetadata)  (MLHandle result_handle, MLCameraMetadataJpegThumbnailSize *out_data)

*  None  

Global [MLCameraMetadataGetLensFocusDistanceRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensfocusdistancerequestmetadata)  (MLHandle request_handle, float *out_data)

*  None  

Global [MLCameraMetadataGetLensFocusDistanceResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensfocusdistanceresultmetadata)  (MLHandle result_handle, float *out_data)

*  None  

Global [MLCameraMetadataGetLensInfoHyperfocalDistance](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensinfohyperfocaldistance)  (MLHandle characteristics_handle, float *out_data)

*  None  

Global [MLCameraMetadataGetLensInfoMinimumFocusDistance](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensinfominimumfocusdistance)  (MLHandle characteristics_handle, float *out_data)

*  None  

Global [MLCameraMetadataGetLensInfoMinimumFocusDistanceIncrement](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensinfominimumfocusdistanceincrement)  (MLHandle characteristics_handle, float *out_data)

*  None  

Global [MLCameraMetadataGetLensStateResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensstateresultmetadata)  (MLHandle result_handle, MLCameraMetadataLensState *out_data)

*  None  

Global [MLCameraMetadataGetPostRawSensitivityBoostRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetpostrawsensitivityboostrange)  (MLHandle characteristics_handle, int32_t out_data[2])

*  None  

Global [MLCameraMetadataGetPostRawSensitivityBoostRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetpostrawsensitivityboostrequestmetadata)  (MLHandle request_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetPostRawSensitivityBoostResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetpostrawsensitivityboostresultmetadata)  (MLHandle result_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorExposureTimeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorexposuretimerequestmetadata)  (MLHandle request_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorExposureTimeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorexposuretimeresultmetadata)  (MLHandle result_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorFrameDurationResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorframedurationresultmetadata)  (MLHandle result_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorInfoActiveArraySize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorinfoactivearraysize)  (MLHandle characteristics_handle, int32_t out_data[4])

*  None  

Global [MLCameraMetadataGetSensorInfoSensitivityRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorinfosensitivityrange)  (MLHandle characteristics_handle, int32_t out_data[2])

*  None  

Global [MLCameraMetadataGetSensorOrientation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensororientation)  (MLHandle characteristics_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorSensitivityRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorsensitivityrequestmetadata)  (MLHandle request_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorSensitivityResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorsensitivityresultmetadata)  (MLHandle result_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorTimestampResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensortimestampresultmetadata)  (MLHandle result_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataSetAFDistanceRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetafdistancerange)  (MLHandle request_handle, const float data[2])

*  None  

Global [MLCameraMetadataSetColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectionaberrationmode)  (MLHandle request_handle, const MLCameraMetadataColorCorrectionAberrationMode *data)

*  None  

Global [MLCameraMetadataSetColorCorrectionGains](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectiongains)  (MLHandle request_handle, const float data[4])

*  None  

Global [MLCameraMetadataSetColorCorrectionMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectionmode)  (MLHandle request_handle, const MLCameraMetadataColorCorrectionMode *data)

*  None  

Global [MLCameraMetadataSetColorCorrectionTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectiontransform)  (MLHandle request_handle, const [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) data[3][3])

*  None  

Global [MLCameraMetadataSetControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaeantibandingmode)  (MLHandle request_handle, const MLCameraMetadataControlAEAntibandingMode *data)

*  None  

Global [MLCameraMetadataSetControlAEExposureCompensation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaeexposurecompensation)  (MLHandle request_handle, const int32_t *data)

*  None  

Global [MLCameraMetadataSetControlAELock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaelock)  (MLHandle request_handle, const MLCameraMetadataControlAELock *data)

*  None  

Global [MLCameraMetadataSetControlAEMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaemode)  (MLHandle request_handle, const MLCameraMetadataControlAEMode *data)

*  None  

Global [MLCameraMetadataSetControlAERegions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaeregions)  (MLHandle request_handle, const int32_t data[3][5], const uint32_t count)

*  None  

Global [MLCameraMetadataSetControlAFMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolafmode)  (MLHandle request_handle, const MLCameraMetadataControlAFMode *data)

*  None  

Global [MLCameraMetadataSetControlAFRegions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolafregions)  (MLHandle request_handle, const int32_t data[3][5], const uint32_t count)

*  None  

Global [MLCameraMetadataSetControlAFTrigger](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaftrigger)  (MLHandle request_handle, const MLCameraMetadataControlAFTrigger *data)

*  None  

Global [MLCameraMetadataSetControlAWBLock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolawblock)  (MLHandle request_handle, const MLCameraMetadataControlAWBLock *data)

*  None  

Global [MLCameraMetadataSetControlAWBMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolawbmode)  (MLHandle request_handle, const MLCameraMetadataControlAWBMode *data)

*  None  

Global [MLCameraMetadataSetControlEffectMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontroleffectmode)  (MLHandle request_handle, const MLCameraMetadataControlEffectMode *data)

*  None  

Global [MLCameraMetadataSetControlExposureUpperTimeLimit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolexposureuppertimelimit)  (MLHandle request_handle, const int64_t *data)

*  None  

Global [MLCameraMetadataSetControlForceApplyMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolforceapplymode)  (MLHandle request_handle, const MLCameraMetadataControlForceApplyMode *data)

*  None  

Global [MLCameraMetadataSetControlMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolmode)  (MLHandle request_handle, const MLCameraMetadataControlMode *data)

*  None  

Global [MLCameraMetadataSetControlSceneMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolscenemode)  (MLHandle request_handle, const MLCameraMetadataControlSceneMode *data)

*  None  

Global [MLCameraMetadataSetJpegGPSCoordinates](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpeggpscoordinates)  (MLHandle request_handle, const double data[3])

*  None  

Global [MLCameraMetadataSetJpegGPSTimestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpeggpstimestamp)  (MLHandle request_handle, const int64_t *data)

*  None  

Global [MLCameraMetadataSetJpegQuality](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpegquality)  (MLHandle request_handle, const uint8_t *data)

*  None  

Global [MLCameraMetadataSetJpegThumbnailSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpegthumbnailsize)  (MLHandle request_handle, const MLCameraMetadataJpegThumbnailSize *data)

*  None  

Global [MLCameraMetadataSetLensFocusDistance](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetlensfocusdistance)  (MLHandle request_handle, const float *data)

*  None  

Global [MLCameraMetadataSetPostRawSensitivityBoost](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetpostrawsensitivityboost)  (MLHandle request_handle, const int32_t *data)

*  None  

Global [MLCameraMetadataSetSensorExposureTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetsensorexposuretime)  (MLHandle request_handle, const int64_t *data)

*  None  

Global [MLCameraMetadataSetSensorSensitivity](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetsensorsensitivity)  (MLHandle request_handle, const int32_t *data)

*  None  

Global [MLCameraPreCaptureAEAWB](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraprecaptureaeawb)  (MLCameraContext context)

*  None  

Global [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture)  (MLCameraContext context, const [MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) *config, MLHandle *out_request_handle)

*  None  

Global [MLCameraSetCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetcapturecallbacks)  (MLCameraContext context, const [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) *capture_callbacks, void *data)

*  None  

Global [MLCameraSetDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetdevicestatuscallbacks)  (MLCameraContext context, const [MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) *device_status_callbacks, void *data)

*  None  

Global [MLCameraUpdateCaptureSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraupdatecapturesettings)  (MLCameraContext context)

*  None  

Global [MLControllerCreateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollercreateex)  (const [MLControllerConfiguration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_configuration.md) *mode, MLHandle *out_handle)

*  None  

Global [MLControllerDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollerdestroy)  (MLHandle tracker)

*  None  

Global [MLControllerGetState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollergetstate)  (MLHandle handle, struct [MLControllerSystemState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state.md) *out_state)

*  None  

Global [MLControllerGetStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollergetstateex)  (MLHandle handle, [MLControllerSystemStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md) *out_state)

*  None  

Global [MLCVCameraGetFramePose](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#mlresult-mlcvcameragetframepose)  (MLHandle camera_handle, MLHandle head_handle, MLCVCameraID id, MLTime camera_timestamp, [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) *out_transform)

*  None  

Global [MLCVCameraTrackingCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#mlresult-mlcvcameratrackingcreate)  (MLHandle *out_handle)

*  android.permission.CAMERA (protection level: dangerous)  

Global [MLCVCameraTrackingDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#mlresult-mlcvcameratrackingdestroy)  (MLHandle camera_handle)

*  None  

Global [MLDepthCameraCapabilityFilterInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcameracapabilityfilterinit)  ([MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md) *inout_handle)

*  None  

Global [MLDepthCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect)  (const [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) *settings, MLHandle *out_handle)

*  com.magicleap.permission.DEPTH_CAMERA (protection level: dangerous)  

Global [MLDepthCameraDisconnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameradisconnect)  (MLHandle handle)

*  None  

Global [MLDepthCameraGetCapabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities)  (MLHandle handle, const [MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md) *filter, [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md) *out_caps)

*  None  

Global [MLDepthCameraGetLatestDepthData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetlatestdepthdata)  (MLHandle handle, uint64_t timeout_ms, [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) *out_data)

*  None  

Global [MLDepthCameraReleaseCapabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcamerareleasecapabilities)  (MLHandle handle, [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md) *out_caps)

*  None  

Global [MLDepthCameraReleaseDepthData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcamerareleasedepthdata)  (MLHandle handle, [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) *depth_camera_data)

*  None  

Global [MLDepthCameraSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcamerasettingsinit)  ([MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) *inout_handle)

*  None  

Global [MLDepthCameraUpdateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraupdatesettings)  (MLHandle handle, const [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) *settings)

*  None  

Global [MLEyeCalibrationCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mlresult-mleyecalibrationcreateclient)  (MLHandle *out_handle)

*  None  

Global [MLEyeCalibrationDestroyClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mlresult-mleyecalibrationdestroyclient)  (MLHandle handle)

*  None  

Global [MLEyeCalibrationGetState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mlresult-mleyecalibrationgetstate)  (MLHandle handle, [MLEyeCalibrationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/struct_m_l_eye_calibration_state.md) *out_state)

*  None  

Global [MLEyeCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameraconnect)  (const [MLEyeCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) *settings, MLHandle *out_handle)

*  com.magicleap.permission.EYE_CAMERA (protection level: dangerous)  

Global [MLEyeCameraDisconnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameradisconnect)  (MLHandle handle)

*  None  

Global [MLEyeCameraGetLatestCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameragetlatestcameradata)  (MLHandle handle, uint64_t timeout_ms, [MLEyeCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) *out_data)

*  None  

Global [MLEyeCameraReleaseCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecamerareleasecameradata)  (MLHandle handle, [MLEyeCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) *eye_camera_data)

*  None  

Global [MLEyeCameraSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#void-mleyecamerasettingsinit)  ([MLEyeCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) *inout_settings)

*  None  

Global [MLEyeCameraUpdateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameraupdatesettings)  (MLHandle handle, const [MLEyeCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) *settings)

*  None  

Global [MLEyeTrackingCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackingcreate)  (MLHandle *out_handle)

*  com.magicleap.permission.EYE_TRACKING (protection level: dangerous)  

Global [MLEyeTrackingDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackingdestroy)  (MLHandle eye_tracker)

*  None  

Global [MLEyeTrackingGetStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackinggetstateex)  (MLHandle eye_tracker, [MLEyeTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md) *out_state)

*  None  

Global [MLEyeTrackingGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackinggetstaticdata)  (MLHandle eye_tracker, [MLEyeTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_static_data.md) *out_data)

*  None  

Global [MLFacialExpressionCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressioncreateclient)  (const [MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) *settings, MLHandle *out_handle)

*  com.magicleap.permission.FACIAL_EXPRESSION (protection level: dangerous)  

Global [MLFacialExpressionDestroyClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressiondestroyclient)  (MLHandle handle)

*  None  

Global [MLFacialExpressionEyeDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressioneyedatainit)  ([MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) *inout_eye_data)

*  None  

Global [MLFacialExpressionGetEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressiongeteyedata)  (MLHandle handle, [MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) *out_eye_data)

*  None  

Global [MLFacialExpressionGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#const-char-mlfacialexpressiongetresultstring)  (MLResult result)

*  None  

Global [MLFacialExpressionSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressionsettingsinit)  ([MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) *inout_settings)

*  None  

Global [MLFacialExpressionUpdateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressionupdatesettings)  (MLHandle handle, const [MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) *settings)

*  None  

Global [MLGazeRecognitionCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitioncreate)  (MLHandle *out_handle)

*  com.magicleap.permission.EYE_TRACKING (protection level: dangerous)  

Global [MLGazeRecognitionDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiondestroy)  (MLHandle handle)

*  None  

Global [MLGazeRecognitionGetState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstate)  (MLHandle handle, [MLGazeRecognitionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) *out_state)

*  None  

Global [MLGazeRecognitionGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata)  (MLHandle handle, [MLGazeRecognitionStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) *out_data)

*  None  

Global [MLGazeRecognitionStateInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstateinit)  ([MLGazeRecognitionState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) *inout_state)

*  None  

Global [MLGazeRecognitionStaticDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstaticdatainit)  ([MLGazeRecognitionStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) *inout_state)

*  None  

Global [MLGestureClassificationCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationcreate)  (MLHandle *out_handle)

*  com.magicleap.permission.HAND_TRACKING (protection level: normal)  

Global [MLGestureClassificationDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationdestroy)  (MLHandle handle)

*  None  

Global [MLGestureClassificationGetData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetdata)  (MLHandle handle, [MLGestureClassificationData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md) *out_data)

*  None  

Global [MLGestureClassificationGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetstaticdata)  (MLHandle handle, [MLGestureClassificationStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md) *out_data)

*  None  

Global [MLGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#const-char-mlgetresultstring)  (MLResult result_code)

*  None  

Global [MLGetVersion](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#mlversion-mlgetversion)  ()

*  None  

Global [MLGetVersionName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#const-char-mlgetversionname)  ()

*  None  

Global [MLGlobalGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#const-char-mlglobalgetresultstring)  (MLResult result_code)

*  None  

Global [MLGraphicsBeginFrameEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex)  (MLHandle graphics_client, const [MLGraphicsFrameParamsEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) *params, [MLGraphicsFrameInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md) *out_frame_info)

*  None  

Global [MLGraphicsCreateClientGL](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicscreateclientgl)  (const [MLGraphicsOptions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md) *options, MLHandle opengl_context, MLHandle *out_graphics_client)

*  None  

Global [MLGraphicsCreateClientVk](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicscreateclientvk)  (const [MLGraphicsOptions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md) *options, const VkInstance vulkan_instance, const VkPhysicalDevice vulkan_physical_device, const VkDevice vulkan_logical_device, MLHandle *out_graphics_client)

*  None  

Global [MLGraphicsDestroyClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsdestroyclient)  (MLHandle *inout_graphics_client)

*  None  

Global [MLGraphicsEnableBlobCacheGL](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsenableblobcachegl)  (const char *filename, uint32_t max_entry_bytes, uint32_t max_total_bytes)

*  None  

Global [MLGraphicsEndFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsendframe)  (MLHandle graphics_client, MLHandle handle)

*  None  

Global [MLGraphicsEnumerateRequiredVkDeviceExtensionsForMediaHandleImport](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlgraphicsenumeraterequiredvkdeviceextensionsformediahandleimport)  (VkExtensionProperties *out_required_extension_properties, uint32_t *out_extension_property_count)

*  None  

Global [MLGraphicsFrameParamsExInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeparamsexinit)  ([MLGraphicsFrameParamsEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) *inout_frame_params)

*  None  

Global [MLGraphicsGetClientPerformanceInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclientperformanceinfo)  (MLHandle graphics_client, [MLGraphicsClientPerformanceInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md) *out_info)

*  None  

Global [MLGraphicsGetClipExtentsEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclipextentsex)  (MLHandle graphics_client, const [MLGraphicsClipExtentsParams](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_params.md) *params, [MLGraphicsClipExtentsInfoArrayEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md) *out_array)

*  None  

Global [MLGraphicsGetRenderTargets](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetrendertargets)  (MLHandle graphics_client, [MLGraphicsRenderTargetsInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md) *out_targets)

*  None  

Global [MLGraphicsGLFormatFromMLSurfaceFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#uint32-t-mlgraphicsglformatfrommlsurfaceformat)  (MLSurfaceFormat format)

*  None  

Global [MLGraphicsImportVkImageFromMediaHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlgraphicsimportvkimagefrommediahandle)  (const VkDevice vulkan_logical_device, uint64_t media_handle, [MLGraphicsImportedMediaSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md) *out_imported_surface_info)

*  None  

Global [MLGraphicsMLSurfaceFormatFromGLFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlsurfaceformat-mlgraphicsmlsurfaceformatfromglformat)  (uint32_t format)

*  None  

Global [MLGraphicsMLSurfaceFormatFromVkFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlsurfaceformat-mlgraphicsmlsurfaceformatfromvkformat)  (const VkFormat format)

*  None  

Global [MLGraphicsSetGlobalDimmer](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__graphics_8h.md#mlresult-mlgraphicssetglobaldimmer)  (MLHandle graphics_client, float dimmer_value)

*  None  

Global [MLGraphicsSignalSyncObjectGL](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicssignalsyncobjectgl)  (MLHandle graphics_client, MLHandle sync_object)

*  None  

Global [MLGraphicsVkFormatFromMLSurfaceFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#vkformat-mlgraphicsvkformatfrommlsurfaceformat)  (const MLSurfaceFormat format)

*  None  

Global [MLHandleIsValid](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid)  (MLHandle handle)

*  None  

Global [MLHandTrackingCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreate)  (MLHandle *out_handle)

*  com.magicleap.permission.HAND_TRACKING (protection level: normal)  

Global [MLHandTrackingCreateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreateex)  (const [MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) *settings, MLHandle *out_handle)

*  com.magicleap.permission.HAND_TRACKING (protection level: normal)  

Global [MLHandTrackingDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingdestroy)  (MLHandle hand_tracker)

*  None  

Global [MLHandTrackingGetData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetdata)  (MLHandle hand_tracker, [MLHandTrackingData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) *out_data)

*  None  

Global [MLHandTrackingGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetstaticdata)  (MLHandle hand_tracker, [MLHandTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) *out_data)

*  None  

Global [MLHandTrackingUpdateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingupdatesettings)  (MLHandle hand_tracker, const [MLHandTrackingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) *settings)

*  None  

Global [MLHeadsetFitCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#mlresult-mlheadsetfitcreateclient)  (MLHandle *out_handle)

*  None  

Global [MLHeadsetFitDestroyClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#mlresult-mlheadsetfitdestroyclient)  (MLHandle handle)

*  None  

Global [MLHeadsetFitGetState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#mlresult-mlheadsetfitgetstate)  (MLHandle handle, [MLHeadsetFitState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md) *out_state)

*  None  

Global [MLHeadTrackingCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackingcreate)  (MLHandle *out_handle)

*  None  

Global [MLHeadTrackingDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackingdestroy)  (MLHandle head_tracker)

*  None  

Global [MLHeadTrackingGetMapEvents](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetmapevents)  (MLHandle head_tracker, uint64_t *out_map_events)

*  None  

Global [MLHeadTrackingGetState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstate)  (MLHandle head_tracker, [MLHeadTrackingState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md) *out_state)

*  None  

Global [MLHeadTrackingGetStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstateex)  (MLHandle head_tracker, [MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) *out_state)

*  None  

Global [MLHeadTrackingGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstaticdata)  (MLHandle head_tracker, [MLHeadTrackingStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_static_data.md) *out_data)

*  None  

Global [MLHeadTrackingStateExInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#void-mlheadtrackingstateexinit)  ([MLHeadTrackingStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) *inout_info)

*  None  

Global [MLInputCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputcreate)  (MLHandle *out_handle)

*  None  

Global [MLInputCreateCustomHapticsPattern](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputcreatecustomhapticspattern)  (MLHandle handle, [MLInputCustomHapticsInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md) *info, uint32_t *inout_pattern_id)

*  None  

Global [MLInputDeleteCustomHapticsPattern](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputdeletecustomhapticspattern)  (MLHandle handle, uint32_t pattern_id)

*  None  

Global [MLInputDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputdestroy)  (MLHandle handle)

*  None  

Global [MLInputGetConnectedDevices](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputgetconnecteddevices)  (MLHandle handle, [MLInputConnectedDevicesList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) *inout_devices)

*  None  

Global [MLInputGetControllerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputgetcontrollerstate)  (MLHandle handle, struct [MLInputControllerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md) out_state[MLInput_MaxControllers])

*  None  

Global [MLInputGetControllerStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputgetcontrollerstateex)  (MLHandle handle, [MLInputControllerStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md) out_state[MLInput_MaxControllers])

*  None  

Global [MLInputGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#const-char-mlinputgetresultstring)  (MLResult result)

*  None  

Global [MLInputReleaseConnectedDevicesList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputreleaseconnecteddeviceslist)  (MLHandle handle, [MLInputConnectedDevicesList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) *devices)

*  None  

Global [MLInputSetControllerCallbacksEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputsetcontrollercallbacksex)  (MLHandle handle, const [MLInputControllerCallbacksEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md) *controller_callbacks, void *user_data)

*  None  

Global [MLInputStartControllerFeedbackBuzzCommand](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstartcontrollerfeedbackbuzzcommand)  (MLHandle handle, uint8_t controller_id, const [MLInputBuzzCommand](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md) *command)

*  None  

Global [MLInputStartControllerFeedbackCustomHapticsPattern](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstartcontrollerfeedbackcustomhapticspattern)  (MLHandle handle, uint8_t controller_id, uint32_t pattern_id)

*  None  

Global [MLInputStartControllerFeedbackPreDefinedPattern](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstartcontrollerfeedbackpredefinedpattern)  (MLHandle handle, uint8_t controller_id, [MLInputPreDefinedPattern](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md) *pattern)

*  None  

Global [MLInputStopControllerFeedback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstopcontrollerfeedback)  (MLHandle handle, uint8_t controller_id)

*  None  

Global [MLMarkerTrackerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#mlresult-mlmarkertrackercreate)  (const [MLMarkerTrackerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_settings.md) *settings, MLHandle *out_handle)

*  com.magicleap.permission.MARKER_TRACKING (protection level: normal)  

Global [MLMarkerTrackerDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#mlresult-mlmarkertrackerdestroy)  (MLHandle tracker_handle)

*  None  

Global [MLMarkerTrackerGetResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#mlresult-mlmarkertrackergetresult)  (MLHandle tracker_handle, [MLMarkerTrackerResultArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result_array.md) *out_data)

*  None  

Global [MLMarkerTrackerReleaseResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#mlresult-mlmarkertrackerreleaseresult)  ([MLMarkerTrackerResultArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result_array.md) *data)

*  None  

Global [MLMarkerTrackerUpdateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#mlresult-mlmarkertrackerupdatesettings)  (MLHandle tracker_handle, const [MLMarkerTrackerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_settings.md) *tracker_settings)

*  None  

Global [MLMediaCCParserCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparsercreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaCCParserDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparserdestroy)  (MLHandle cc_handle)

*  None  

Global [MLMediaCCParserGetDisplayableEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparsergetdisplayableex)  (MLHandle cc_handle, const uint8_t *subtitle_data, int32_t subtitle_data_size, const [MLCea608CaptionSegmentEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md) **out_cc_seg)

*  None  

Global [MLMediaCCParserParse](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparserparse)  (MLHandle cc_handle, const uint8_t *subtitle_data, uint32_t subtitle_data_size)

*  None  

Global [MLMediaCCParserSetDisplayChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparsersetdisplaychangedcallback)  (MLHandle cc_handle, MLMediaCCParserDisplayChangedCallback on_display_changed_callback, void *data)

*  None  

Global [MLMediaCea708ParserCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parsercreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaCea708ParserDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parserdestroy)  (MLHandle cc_handle)

*  None  

Global [MLMediaCea708ParserParse](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parserparse)  (MLHandle cc_handle, const uint8_t *subtitle_data, uint32_t subtitle_data_size)

*  None  

Global [MLMediaCea708ParserSetEmitEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parsersetemiteventcallback)  (MLHandle cc_handle, MLMediaCea708ParserEmitEventCallback on_emit_event_callback, void *data)

*  None  

Global [MLMediaCodecBitrateModesRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecbitratemodesrelease)  (MLMediaCodecBitrateMode *bitrate_modes)

*  None  

Global [MLMediaCodecConfigure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecconfigure)  (MLHandle handle, MLHandle format_handle, MLHandle surface_handle, MLHandle crypto_handle)

*  None  

Global [MLMediaCodecCreateCodec](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreatecodec)  (MLMediaCodecCreation method, MLMediaCodecType type, const char *name_str, MLHandle *out_handle)

*  None  

Global [MLMediaCodecCreateCryptoInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreatecryptoinfo)  (const [MLMediaCodecCryptoInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md) *crypto_info, MLHandle *out_crypto_info_handle)

*  None  

Global [MLMediaCodecCreateInputSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreateinputsurface)  (MLHandle handle, MLHandle *out_input_surface_handle)

*  None  

Global [MLMediaCodecDequeueInputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueinputbuffer)  (MLHandle handle, int64_t timeout_us, int64_t *out_buffer_index)

*  None  

Global [MLMediaCodecDequeueOutputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueoutputbuffer)  (MLHandle handle, [MLMediaCodecBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_buffer_info.md) *out_buffer_info, int64_t timeout_us, int64_t *out_buffer_index)

*  None  

Global [MLMediaCodecDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdestroy)  (MLHandle handle)

*  None  

Global [MLMediaCodecDestroyInputSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdestroyinputsurface)  (MLHandle handle, MLHandle input_surface_handle)

*  None 

Global [MLMediaCodecFlush](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecflush)  (MLHandle handle)

*  None  

Global [MLMediaCodecGetInputBufferPointer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetinputbufferpointer)  (MLHandle handle, int64_t buffer_index, uint8_t **out_buffer_ptr, size_t *out_buffer_size)

*  None  

Global [MLMediaCodecGetInputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetinputformat)  (MLHandle handle, MLHandle *out_format_handle)

*  None  

Global [MLMediaCodecGetName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetname)  (MLHandle handle, char *out_name)

*  None  

Global [MLMediaCodecGetOutputBufferPointer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetoutputbufferpointer)  (MLHandle handle, int64_t buffer_index, const uint8_t **out_buffer_ptr, size_t *out_buffer_size)

*  None  

Global [MLMediaCodecGetOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetoutputformat)  (MLHandle handle, MLHandle *out_format_handle)

*  None  

Global [MLMediaCodecListColorFormatsRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistcolorformatsrelease)  (uint32_t *color_formats)

*  None  

Global [MLMediaCodecListCountCodecs](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistcountcodecs)  (uint64_t *out_codec_count)

*  None  

Global [MLMediaCodecListGetCapabilityFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcapabilityflag)  (uint64_t index, const char *mime, MLMediaCodecListCapabilityFlag *out_capability_flag)

*  None  

Global [MLMediaCodecListGetCodecByName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcodecbyname)  (const char *name, int64_t *out_index)

*  None  

Global [MLMediaCodecListGetCodecByType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcodecbytype)  (const char *type, bool is_encoder, uint64_t start_index, int64_t *out_index)

*  None  

Global [MLMediaCodecListGetCodecName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcodecname)  (uint64_t index, char *out_name)

*  None  

Global [MLMediaCodecListGetMatchingCodecs](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetmatchingcodecs)  (const char *mime, bool is_encoder, MLMediaCodecListCodecTypeFlag flag, [MLMediaCodecListQueryResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) *out_matching_codecs)

*  None  

Global [MLMediaCodecListGetSecureCodecName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsecurecodecname)  (const char *mime, bool is_decoder, char *out_name)

*  None  

Global [MLMediaCodecListGetSupportedBitrateModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedbitratemodes)  (uint64_t index, const char *mime, MLMediaCodecBitrateMode **out_bitrate_modes, size_t *out_bitrate_modes_size)

*  None  

Global [MLMediaCodecListGetSupportedColorFormats](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedcolorformats)  (uint64_t index, const char *mime, uint32_t **out_color_formats, size_t *out_color_formats_size)

*  None  

Global [MLMediaCodecListGetSupportedMimes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedmimes)  (uint64_t index, [MLMediaCodecListQueryResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) *out_supported_mimes)

*  None  

Global [MLMediaCodecListGetSupportedProfileLevels](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels)  (uint64_t index, const char *mime, [MLMediaCodecListProfileLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) **out_profile_levels, size_t *out_profile_levels_size)

*  None  

Global [MLMediaCodecListIsAdaptivePlaybackSupported](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisadaptiveplaybacksupported)  (uint64_t index, const char *mime, bool *out_supported)

*  None  

Global [MLMediaCodecListIsEncoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisencoder)  (uint64_t index, bool *out_val)

*  None  

Global [MLMediaCodecListIsIntraRefreshSupported](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisintrarefreshsupported)  (uint64_t index, const char *mime, bool *out_supported)

*  None  

Global [MLMediaCodecListIsSecurePlaybackSupported](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistissecureplaybacksupported)  (uint64_t index, const char *mime, bool *out_supported)

*  None  

Global [MLMediaCodecListIsSoftwareCodec](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistissoftwarecodec)  (const char *codec_name, bool *out_val)

*  None  

Global [MLMediaCodecListProfileLevelsRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistprofilelevelsrelease)  ([MLMediaCodecListProfileLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) *profile_levels)

*  None  

Global [MLMediaCodecListQueryResultsRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistqueryresultsrelease)  ([MLMediaCodecListQueryResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) *query_results)

*  None  

Global [MLMediaCodecQueueInputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueueinputbuffer)  (MLHandle handle, int64_t buffer_index, int64_t offset, size_t size, uint64_t time_us, int flags)

*  None  

Global [MLMediaCodecQueueSecureInputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueuesecureinputbuffer)  (MLHandle handle, int64_t buffer_index, int64_t offset, MLHandle crypto_info_handle, uint64_t time_us, int flags)

*  None  

Global [MLMediaCodecReleaseCryptoInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreleasecryptoinfo)  (MLHandle crypto_info_handle)

*  None  

Global [MLMediaCodecReleaseOutputBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreleaseoutputbuffer)  (MLHandle handle, int64_t buffer_index, bool render)

*  None  

Global [MLMediaCodecReleaseOutputBufferAtTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreleaseoutputbufferattime)  (MLHandle handle, int64_t buffer_index, int64_t timestamp_ns)

*  None  

Global [MLMediaCodecReset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreset)  (MLHandle handle)

*  None  

Global [MLMediaCodecSetCallbacksEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsetcallbacksex)  (MLHandle handle, [MLMediaCodecCallbacksEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md) *callbacks, void *user_data)

*  None  

Global [MLMediaCodecSetOutputFrameListener](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsetoutputframelistener)  (MLHandle handle, [MLMediaCodecOutputFrameListener](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md) *callbacks, void *user_data)

*  None  

Global [MLMediaCodecStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecstart)  (MLHandle handle)

*  None  

Global [MLMediaCodecStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecstop)  (MLHandle handle)

*  None  

Global [MLMediaCryptoCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptocreate)  ([MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *data, MLHandle *out_handle)

*  None  

Global [MLMediaCryptoIsCryptoSchemeSupported](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptoiscryptoschemesupported)  ([MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, bool *out_supported)

*  None  

Global [MLMediaCryptoRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptorelease)  (MLHandle media_crypto)

*  None  

Global [MLMediaCryptoRequiresSecureDecoderComponent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptorequiressecuredecodercomponent)  (const char *mime_type, bool *out_required)

*  None  

Global [MLMediaCryptoSetMediaDRMSession](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptosetmediadrmsession)  (MLHandle media_crypto, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id)

*  None  

Global [MLMediaDataSourceCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate)  (MLMediaDataSourceReadAt read_at, MLMediaDataSourceGetSize get_size, MLMediaDataSourceClose close, void *context, MLHandle *out_handle)

*  None  

Global [MLMediaDataSourceDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcedestroy)  (MLHandle media_data_source)

*  None  

Global [MLMediaDRMByteArrayAllocAndCopy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayallocandcopy)  (const uint8_t *copy_from, size_t size, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_array)

*  None  

Global [MLMediaDRMByteArrayAllocate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayallocate)  (size_t size, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_array)

*  None  

Global [MLMediaDRMByteArrayListRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearraylistrelease)  ([MLMediaDRMByteArrayList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array_list.md) *array)

*  None  

Global [MLMediaDRMByteArrayRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease)  ([MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *array)

*  None  

Global [MLMediaDRMCloseSession](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmclosesession)  (MLHandle media_drm, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id)

*  None  

Global [MLMediaDRMCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmcreate)  ([MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, MLHandle *out_handle)

*  None  

Global [MLMediaDRMDecrypt](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmdecrypt)  (MLHandle media_drm, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMCryptoInputParam](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md) *crypto_key_param, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *input, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_output)

*  None  

Global [MLMediaDRMEncrypt](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmencrypt)  (MLHandle media_drm, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMCryptoInputParam](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md) *crypto_key_param, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *input, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_output)

*  None  

Global [MLMediaDRMGetKeyRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetkeyrequest)  (MLHandle media_drm, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMKeyRequestInputParam](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_request_input_param.md) *key_request_param, [MLMediaDRMRequestMessage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) *out_key_request)

*  None  

Global [MLMediaDRMGetPropertyByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetpropertybytearray)  (MLHandle media_drm, MLMediaDRMProperty property_name, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_property_value)

*  None  

Global [MLMediaDRMGetPropertyString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetpropertystring)  (MLHandle media_drm, MLMediaDRMProperty property_name, char **out_property_value)

*  None  

Global [MLMediaDRMGetProvisionRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetprovisionrequest)  (MLHandle media_drm, const char *cert_type, [MLMediaDRMRequestMessage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) *out_provision_request)

*  None  

Global [MLMediaDRMGetSecureStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetsecurestop)  (MLHandle media_drm, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *ss_id, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_secure_stop)

*  None  

Global [MLMediaDRMGetSecureStops](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetsecurestops)  (MLHandle media_drm, [MLMediaDRMByteArrayList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array_list.md) *out_secure_stops)

*  None  

Global [MLMediaDRMIsCryptoSchemeSupported](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmiscryptoschemesupported)  ([MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, const char *mime_type, bool *out_supported)

*  None  

Global [MLMediaDRMKeyValueArrayAdd](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmkeyvaluearrayadd)  (const [MLMediaDRMKeyValue](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value.md) *pair, [MLMediaDRMKeyValueArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) *out_array)

*  None  

Global [MLMediaDRMKeyValueArrayAllocate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmkeyvaluearrayallocate)  (size_t size, [MLMediaDRMKeyValueArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) *out_array)

*  None  

Global [MLMediaDRMKeyValueArrayRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmkeyvaluearrayrelease)  ([MLMediaDRMKeyValueArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) *array)

*  None  

Global [MLMediaDRMOpenSession](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmopensession)  (MLHandle media_drm, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_session_id)

*  None  

Global [MLMediaDRMProvideKeyResponse](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovidekeyresponse)  (MLHandle media_drm, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *response, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_key_set_id)

*  None  

Global [MLMediaDRMProvideProvisionResponse](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovideprovisionresponse)  (MLHandle media_drm, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *response, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_certificate, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_wrapped_key)

*  None  

Global [MLMediaDRMQueryKeyStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmquerykeystatus)  (MLHandle media_drm, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, [MLMediaDRMKeyValueArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) *out_info_map)

*  None  

Global [MLMediaDRMRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmrelease)  (MLHandle media_drm)

*  None  

Global [MLMediaDRMReleaseAllSecureStops](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmreleaseallsecurestops)  (MLHandle media_drm)

*  None  

Global [MLMediaDRMReleaseSecureStops](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmreleasesecurestops)  (MLHandle media_drm, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *secure_stop)

*  None  

Global [MLMediaDRMRemoveKeys](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmremovekeys)  (MLHandle media_drm, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *key_set_id)

*  None  

Global [MLMediaDRMRequestMessageRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmrequestmessagerelease)  ([MLMediaDRMRequestMessage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) *request)

*  None  

Global [MLMediaDRMRestoreKeys](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmrestorekeys)  (MLHandle media_drm, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *key_set_id)

*  None  

Global [MLMediaDRMSetOnEventListenerEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsetoneventlistenerex)  (MLHandle media_drm, [MLMediaDRMEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md) *callbacks, void *data)

*  None  

Global [MLMediaDRMSetPropertyByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsetpropertybytearray)  (MLHandle media_drm, MLMediaDRMProperty property_name, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *property_value)

*  None  

Global [MLMediaDRMSetPropertyString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsetpropertystring)  (MLHandle media_drm, MLMediaDRMProperty property_name, const char *property_value)

*  None  

Global [MLMediaDRMSign](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsign)  (MLHandle media_drm, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMHMACInputParam](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md) *hmac_key_param, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *message, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_signature)

*  None  

Global [MLMediaDRMSignRSA](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsignrsa)  (MLHandle media_drm, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMRSAInputParam](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_r_s_a_input_param.md) *rsa_key_param, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *message, [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_signature)

*  None  

Global [MLMediaDRMVerify](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmverify)  (MLHandle media_drm, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMHMACInputParam](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md) *hmac_key_param, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *message, const [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *signature, bool *out_match)

*  None  

Global [MLMediaExtractorAdvance](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractoradvance)  (MLHandle handle)

*  None  

Global [MLMediaExtractorCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorcreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaExtractorDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractordestroy)  (MLHandle handle)

*  None  

Global [MLMediaExtractorGetCachedDuration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetcachedduration)  (MLHandle handle, int64_t *out_cached_duration)

*  None  

Global [MLMediaExtractorGetDRMInitData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetdrminitdata)  (MLHandle handle, [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) drm_uuid, [MLMediaExtractorDRMSchemeInitData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) *out_drm_init_data)

*  None  

Global [MLMediaExtractorGetPSSHInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetpsshinfo)  (MLHandle handle, size_t index, MLMediaExtractorPSSHEntry *out_pssh_entry)

*  None  

Global [MLMediaExtractorGetPSSHInfoCount](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetpsshinfocount)  (MLHandle handle, size_t *out_index)

*  None  

Global [MLMediaExtractorGetSampleCryptoInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsamplecryptoinfo)  (MLHandle handle, MLHandle *out_info_handle)

*  None  

Global [MLMediaExtractorGetSampleFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampleflags)  (MLHandle handle, int *out_sample_flags)

*  None  

Global [MLMediaExtractorGetSampleTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampletime)  (MLHandle handle, int64_t *out_sample_time)

*  None  

Global [MLMediaExtractorGetSampleTrackIndex](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampletrackindex)  (MLHandle handle, int64_t *out_track_index)

*  None  

Global [MLMediaExtractorGetTrackCount](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgettrackcount)  (MLHandle handle, uint64_t *out_track_count)

*  None  

Global [MLMediaExtractorGetTrackFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgettrackformat)  (MLHandle handle, size_t index, MLHandle *out_track_handle)

*  None  

Global [MLMediaExtractorHasCacheReachedEOS](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorhascachereachedeos)  (MLHandle handle)

*  None  

Global [MLMediaExtractorReadSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreadsampledata)  (MLHandle handle, uint8_t *byte_buf, size_t buf_size, size_t offset, int64_t *out_data_size)

*  None  

Global [MLMediaExtractorReleaseCryptoInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasecryptoinfo)  (MLHandle handle, MLHandle *inout_info_handle)

*  None  

Global [MLMediaExtractorReleaseDRMInitData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasedrminitdata)  (MLHandle handle, [MLMediaExtractorDRMSchemeInitData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) *drm_init_data)

*  None  

Global [MLMediaExtractorReleasePSSHInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasepsshinfo)  (MLHandle handle, MLMediaExtractorPSSHEntry *pssh_entry)

*  None  

Global [MLMediaExtractorSeekTo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorseekto)  (MLHandle handle, int64_t time_us, MLMediaSeekMode mode)

*  None  

Global [MLMediaExtractorSelectTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorselecttrack)  (MLHandle handle, size_t index)

*  None  

Global [MLMediaExtractorSetDataSourceForFD](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforfd)  (MLHandle handle, int fd, int64_t offset, int64_t length)

*  None  

Global [MLMediaExtractorSetDataSourceForPath](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforpath)  (MLHandle handle, const char *path)

*  None  

Global [MLMediaExtractorSetDataSourceForURI](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforuri)  (MLHandle handle, const char *uri)

*  android.permission.INTERNET (protection level: normal)  

Global [MLMediaExtractorSetDataSourceForURIWithHeaders](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforuriwithheaders)  (MLHandle handle, const char *uri, const char **headers, size_t len)

*  android.permission.INTERNET (protection level: normal)  

Global [MLMediaExtractorSetMediaDataSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetmediadatasource)  (MLHandle handle, MLHandle media_data_source)

*  None  

Global [MLMediaExtractorUnselectTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorunselecttrack)  (MLHandle handle, size_t index)

*  None  

Global [MLMediaFormatCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaFormatCreateAudio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreateaudio)  (const char *mime_type, int sample_rate, int channel_count, MLHandle *out_handle)

*  None  

Global [MLMediaFormatCreateCopy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatecopy)  (MLHandle handle, MLHandle *out_handle)

*  None  

Global [MLMediaFormatCreateSubtitle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatesubtitle)  (const char *mime_type, const char *language, MLHandle *out_handle)

*  None  

Global [MLMediaFormatCreateVideo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatevideo)  (const char *mime_type, int width, int height, MLHandle *out_handle)

*  None  

Global [MLMediaFormatDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatdestroy)  (MLHandle handle)

*  None  

Global [MLMediaFormatGetKeyByteBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeybytebuffer)  (MLHandle handle, MLMediaFormatKey name, [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) *out_buffer)

*  None  

Global [MLMediaFormatGetKeySize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeysize)  (MLHandle handle, MLMediaFormatKey name, size_t *out_size)

*  None  

Global [MLMediaFormatGetKeyString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeystring)  (MLHandle handle, MLMediaFormatKey name, char *out_string)

*  None  

Global [MLMediaFormatGetKeyValueFloat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeyvaluefloat)  (MLHandle handle, MLMediaFormatKey name, float *out_key)

*  None  

Global [MLMediaFormatGetKeyValueInt32](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeyvalueint32)  (MLHandle handle, MLMediaFormatKey name, int32_t *out_key)

*  None  

Global [MLMediaFormatGetKeyValueInt64](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeyvalueint64)  (MLHandle handle, MLMediaFormatKey name, int64_t *out_key)

*  None  

Global [MLMediaFormatKeyByteBufferRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatkeybytebufferrelease)  (MLHandle handle, [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) *buffer)

*  None  

Global [MLMediaFormatObjectToString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatobjecttostring)  (MLHandle handle, char *out_string)

*  None  

Global [MLMediaFormatSetKeyByteBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeybytebuffer)  (MLHandle handle, MLMediaFormatKey name, const [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) *buffer)

*  None  

Global [MLMediaFormatSetKeyFloat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeyfloat)  (MLHandle handle, MLMediaFormatKey name, float key_value)

*  None  

Global [MLMediaFormatSetKeyInt32](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeyint32)  (MLHandle handle, MLMediaFormatKey name, int32_t key_value)

*  None  

Global [MLMediaFormatSetKeyInt64](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeyint64)  (MLHandle handle, MLMediaFormatKey name, int64_t key_value)

*  None  

Global [MLMediaFormatSetKeySize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeysize)  (MLHandle handle, MLMediaFormatKey name, size_t key_size)

*  None  

Global [MLMediaFormatSetKeyString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeystring)  (MLHandle handle, MLMediaFormatKey name, const char *key_value)

*  None  

Global [MLMediaMuxerAddTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxeraddtrack)  (MLHandle media_muxer, MLHandle media_format, size_t *out_track_index)

*  None  

Global [MLMediaMuxerConfigure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerconfigure)  (MLHandle media_muxer, MLMediaMuxerOutputFormat format, const char *path)

*  None  

Global [MLMediaMuxerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxercreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaMuxerGetSupportedMimes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedmimes)  (MLHandle media_muxer, MLMediaMuxerOutputFormat format, const char *const *out_mime_list[], size_t *out_mime_list_size)

*  None  

Global [MLMediaMuxerGetSupportedOutputFormats](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedoutputformats)  (MLHandle media_muxer, const MLMediaMuxerOutputFormat *out_format_list[], size_t *out_format_list_size)

*  None  

Global [MLMediaMuxerRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerrelease)  (MLHandle media_muxer)

*  None  

Global [MLMediaMuxerSetLocation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxersetlocation)  (MLHandle media_muxer, float latitude, float longitude)

*  None  

Global [MLMediaMuxerSetOrientationHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxersetorientationhint)  (MLHandle media_muxer, int32_t degrees)

*  None  

Global [MLMediaMuxerStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstart)  (MLHandle media_muxer)

*  None  

Global [MLMediaMuxerStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstop)  (MLHandle media_muxer)

*  None  

Global [MLMediaMuxerWriteSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerwritesampledata)  (MLHandle media_muxer, const [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) *data)

*  None  

Global [MLMediaPlayerAddTimedTextSourceForFD](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayeraddtimedtextsourceforfd)  (MLHandle media_player, int32_t fd, int64_t offset, int64_t length, const char *mime_type)

*  None  

Global [MLMediaPlayerAddTimedTextSourceForURI](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayeraddtimedtextsourceforuri)  (MLHandle media_player, const char *uri, const char *mime_type)

*  None  

Global [MLMediaPlayerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayercreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaPlayerDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerdestroy)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerGetAudioHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetaudiohandle)  (MLHandle media_player, MLHandle *out_handle)

*  None  

Global [MLMediaPlayerGetBufferingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetbufferingsettings)  (MLHandle media_player, [MLMediaPlayerBufferingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) *out_buf_settings)

*  None  

Global [MLMediaPlayerGetBufferingUpdate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetbufferingupdate)  (MLHandle media_player, int32_t *out_percentage)

*  None  

Global [MLMediaPlayerGetCurrentPosition](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetcurrentposition)  (MLHandle media_player, int32_t *out_msec)

*  None  

Global [MLMediaPlayerGetDefaultBufferingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetdefaultbufferingsettings)  (MLHandle media_player, [MLMediaPlayerBufferingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) *out_buf_settings)

*  None  

Global [MLMediaPlayerGetDuration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetduration)  (MLHandle media_player, int32_t *out_msec)

*  None  

Global [MLMediaPlayerGetError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergeterror)  (MLHandle media_player, MLResult *out_result)

*  None  

Global [MLMediaPlayerGetInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetinfo)  (MLHandle media_player, int32_t *out_code, int32_t *out_extra)

*  None  

Global [MLMediaPlayerGetMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetmetadata)  (MLHandle media_player, int64_t *out_time, int32_t *out_size, uint8_t **out_buffer)

*  None  

Global [MLMediaPlayerGetMetrics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetmetrics)  (MLHandle media_player, [MLMediaPlayerMetrics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_metrics.md) *out_metrics)

*  None  

Global [MLMediaPlayerGetSubtitleEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetsubtitleex)  (MLHandle media_player, [MLMediaPlayerSubtitleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md) **out_subtitle_data)

*  None  

Global [MLMediaPlayerGetTimedText](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettimedtext)  (MLHandle media_player, const char **out_text, int32_t *out_start, int32_t *out_end)

*  None  

Global [MLMediaPlayerGetTrackCount](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettrackcount)  (MLHandle media_player, uint32_t *out_track_count)

*  None  

Global [MLMediaPlayerGetTrackDRMInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettrackdrminfo)  (MLHandle media_player, const [MLMediaPlayerTrackInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_info.md) *track_info, [MLMediaPlayerTrackDRMInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md) **out_drm_info)

*  None  

Global [MLMediaPlayerGetTrackLanguage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettracklanguage)  (MLHandle media_player, uint32_t track, char **out_track_language)

*  None  

Global [MLMediaPlayerGetTrackMediaFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettrackmediaformat)  (MLHandle media_player, uint32_t track, MLHandle *out_media_format)

*  None  

Global [MLMediaPlayerGetTrackType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettracktype)  (MLHandle media_player, uint32_t track, MLMediaPlayerTrackType *out_track_type)

*  None  

Global [MLMediaPlayerGetTTMLData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetttmldata)  (MLHandle media_player, MLHandle timed_text, [MLTTMLData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md) **out_ttml_data)

*  None  

Global [MLMediaPlayerGetVideoSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetvideosize)  (MLHandle media_player, int32_t *out_width, int32_t *out_height)

*  None  

Global [MLMediaPlayerGetWebVTTData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetwebvttdata)  (MLHandle media_player, MLHandle timed_text, [MLWebVTTData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_web_v_t_t_data.md) **out_webvtt_data)

*  None  

Global [MLMediaPlayerOnMediaTimedTextUpdateCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayeronmediatimedtextupdatecallback)  )(MLHandle media_player, MLHandle timed_text, void *data)

*  None  

Global [MLMediaPlayerPause](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpause)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerPollStates](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpollstates)  (MLHandle media_player, uint16_t mask, uint16_t *out_polled_states)

*  None  

Global [MLMediaPlayerPrepare](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerprepare)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerPrepareAsync](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerprepareasync)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerPrepareTrackDRM](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpreparetrackdrm)  (MLHandle media_player, const [MLMediaPlayerTrackDRMSessionInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md) *drm_session_info)

*  None  

Global [MLMediaPlayerReleaseDRM](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerreleasedrm)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerReleaseSubtitleEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerreleasesubtitleex)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerReset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerreset)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerResetAsync](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerresetasync)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerSeekTo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerseekto)  (MLHandle media_player, int msec, MLMediaSeekMode mode)

*  None  

Global [MLMediaPlayerSelectTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerselecttrack)  (MLHandle media_player, uint32_t track)

*  None  

Global [MLMediaPlayerSetBufferingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetbufferingsettings)  (MLHandle media_player, [MLMediaPlayerBufferingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) buf_settings)

*  None  

Global [MLMediaPlayerSetDataSourceForFD](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetdatasourceforfd)  (MLHandle media_player, int32_t fd)

*  None  

Global [MLMediaPlayerSetDataSourceForPath](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetdatasourceforpath)  (MLHandle media_player, const char *path)

*  None  

Global [MLMediaPlayerSetDataSourceForURI](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetdatasourceforuri)  (MLHandle media_player, const char *uri)

*  android.permission.INTERNET (protection level: normal)  

Global [MLMediaPlayerSetEventCallbacksEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerseteventcallbacksex)  (MLHandle media_player, const [MLMediaPlayerEventCallbacksEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md) *callbacks, void *data)

*  None  

Global [MLMediaPlayerSetLooping](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetlooping)  (MLHandle media_player, bool loop)

*  None  

Global [MLMediaPlayerSetMediaDataSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetmediadatasource)  (MLHandle media_player, MLHandle media_data_source)

*  None  

Global [MLMediaPlayerSetMediaStreamSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetmediastreamsource)  (MLHandle media_player, MLHandle media_stream_source)

*  None  

Global [MLMediaPlayerSetNextPlayer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetnextplayer)  (MLHandle media_player, MLHandle next_media_player)

*  None  

Global [MLMediaPlayerSetOffsetDataSourceForFD](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetoffsetdatasourceforfd)  (MLHandle media_player, int32_t fd, int64_t offset, int64_t length)

*  None  

Global [MLMediaPlayerSetOnMediaSubtitleUpdateCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetonmediasubtitleupdatecallback)  (MLHandle media_player, MLMediaPlayerOnMediaSubtitleUpdateCallback on_media_subtitle_callback, void *data)

*  None  

Global [MLMediaPlayerSetOnMediaTimedTextUpdateCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetonmediatimedtextupdatecallback)  (MLHandle media_player, MLMediaPlayerOnMediaTimedTextUpdateCallback on_media_timed_text_callback, void *data)

*  None  

Global [MLMediaPlayerSetRemoteDataSourceForURI](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetremotedatasourceforuri)  (MLHandle media_player, const char *uri, char **headers, size_t len)

*  android.permission.INTERNET (protection level: normal)  

Global [MLMediaPlayerSetSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetsurface)  (MLHandle media_player, MLHandle surface)

*  None  

Global [MLMediaPlayerSetVideoScalingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetvideoscalingmode)  (MLHandle media_player, MLMediaPlayerVideoScalingMode mode)

*  None  

Global [MLMediaPlayerSetVolume](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetvolume)  (MLHandle media_player, float volume)

*  None  

Global [MLMediaPlayerStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerstart)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerstop)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerUnselectTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerunselecttrack)  (MLHandle media_player, uint32_t track)

*  None  

Global [MLMediaRecorderCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordercreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaRecorderDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderdestroy)  (MLHandle media_recorder)

*  None  

Global [MLMediaRecorderGetInputSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordergetinputsurface)  (MLHandle media_recorder, MLHandle *out_input_surface_handle)

*  None  

Global [MLMediaRecorderGetMaxAmplitude](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordergetmaxamplitude)  (MLHandle media_recorder, int32_t *inout_max_amp)

*  None  

Global [MLMediaRecorderPrepare](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare)  (MLHandle media_recorder, MLHandle format)

*  None  

Global [MLMediaRecorderReleaseInputSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreleaseinputsurface)  (MLHandle media_recorder, MLHandle input_surface_handle)

*  None 

Global [MLMediaRecorderReset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreset)  (MLHandle media_recorder)

*  None  

Global [MLMediaRecorderSetAudioEncoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetaudioencoder)  (MLHandle media_recorder, MLMediaRecorderAudioEncoder in_audio_encoder)

*  None  

Global [MLMediaRecorderSetAudioSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetaudiosource)  (MLHandle media_recorder, MLMediaRecorderAudioSource in_audio_source)

*  android.permission.RECORD_AUDIO (protection level: dangerous)  

Global [MLMediaRecorderSetEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderseteventcallbacks)  (MLHandle media_recorder, const [MLMediaRecorderEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) *callbacks, void *data)

*  None  

Global [MLMediaRecorderSetGeoLocation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetgeolocation)  (MLHandle media_recorder, int64_t in_latitude10000, int64_t in_longitude10000)

*  None  

Global [MLMediaRecorderSetMaxDuration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetmaxduration)  (MLHandle media_recorder, int32_t in_max_duration_msec)

*  None  

Global [MLMediaRecorderSetMaxFileSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetmaxfilesize)  (MLHandle media_recorder, int64_t in_max_file_size)

*  None  

Global [MLMediaRecorderSetOutputFileForFD](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputfileforfd)  (MLHandle media_recorder, int32_t fd)

*  None  

Global [MLMediaRecorderSetOutputFileForPath](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputfileforpath)  (MLHandle media_recorder, const char *path)

*  None  

Global [MLMediaRecorderSetOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat)  (MLHandle media_recorder, MLMediaRecorderOutputFormat in_format)

*  None  

Global [MLMediaRecorderSetVideoEncoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetvideoencoder)  (MLHandle media_recorder, MLMediaRecorderVideoEncoder in_video_encoder)

*  None  

Global [MLMediaRecorderSetVideoSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetvideosource)  (MLHandle media_recorder, MLMediaRecorderVideoSource in_video_source)

*  None  

Global [MLMediaRecorderStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderstart)  (MLHandle media_recorder)

*  None  

Global [MLMediaRecorderStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderstop)  (MLHandle media_recorder)

*  None  

Global [MLMediaResultGetString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_error/group___media_error.md#const-char-mlmediaresultgetstring)  (MLResult code)

*  None  

Global [MLMediaStreamSourceCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate)  (MLMediaStreamSourceOnBufferAvailable on_buffer_available, void *context, MLHandle *out_handle)

*  None  

Global [MLMediaStreamSourceDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcedestroy)  (MLHandle media_stream_source)

*  None  

Global [MLMediaStreamSourceGetBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcegetbuffer)  (MLHandle media_stream_source, size_t *out_id, uint8_t **out_ptr, size_t *out_size)

*  None  

Global [MLMediaStreamSourcePushBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcepushbuffer)  (MLHandle media_stream_source, size_t id, size_t size)

*  None  

Global [MLMediaStreamSourcePushEOS](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcepusheos)  (MLHandle media_stream_source)

*  None  

Global [MLMeshingCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingcreateclient)  (MLHandle *out_client_handle, const [MLMeshingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) *settings)

*  com.magicleap.permission.SPATIAL_MAPPING (protection level: dangerous)  

Global [MLMeshingDestroyClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingdestroyclient)  (MLHandle client_handle)

*  None  

Global [MLMeshingFreeResource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingfreeresource)  (MLHandle client_handle, MLHandle *request_handle)

*  None  

Global [MLMeshingGetMeshInfoResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshinggetmeshinforesult)  (MLHandle client_handle, MLHandle request_handle, [MLMeshingMeshInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_info.md) *out_info)

*  None  

Global [MLMeshingGetMeshResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshinggetmeshresult)  (MLHandle client_handle, MLHandle request_handle, [MLMeshingMesh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md) *out_mesh)

*  None  

Global [MLMeshingInitSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshinginitsettings)  ([MLMeshingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) *out_settings)

*  None  

Global [MLMeshingPopulateDepth](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlmeshingpopulatedepth)  (MLHandle client_handle, const [MLMeshingDepthBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md) *info, const [MLMeshingMesh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md) *meshes)

*  None  

Global [MLMeshingRequestMesh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingrequestmesh)  (MLHandle client_handle, const [MLMeshingMeshRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_request.md) *request, MLHandle *out_request_handle)

*  None  

Global [MLMeshingRequestMeshInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingrequestmeshinfo)  (MLHandle client_handle, const [MLMeshingExtents](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_extents.md) *extents, MLHandle *out_request_handle)

*  None  

Global [MLMeshingUpdateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingupdatesettings)  (MLHandle client_handle, const [MLMeshingSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) *settings)

*  None  

Global [MLNativeSurfaceAcquireHardwareBufferFromNativeBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfaceacquirehardwarebufferfromnativebuffer)  (MLHandle handle, MLHandle native_buffer, struct AHardwareBuffer **out_hardware_buffer, uint32_t *out_width, uint32_t *out_height)

*  None  

Global [MLNativeSurfaceAcquireNextAvailableFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfaceacquirenextavailableframe)  (MLHandle handle, MLHandle *out_native_buffer)

*  None  

Global [MLNativeSurfaceCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate)  (const [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) *config_values, MLHandle *out_handle)

*  None  

Global [MLNativeSurfaceGetFrameCropRect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframecroprect)  (MLHandle handle, [MLRecti](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_recti.md) *out_crop_rect)

*  None  

Global [MLNativeSurfaceGetFrameNumber](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframenumber)  (MLHandle handle, uint64_t *out_number)

*  None  

Global [MLNativeSurfaceGetFrameQueueBufferTimestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframequeuebuffertimestamp)  (MLHandle handle, int64_t *out_timestamp_ns)

*  None  

Global [MLNativeSurfaceGetFrameTimestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframetimestamp)  (MLHandle handle, int64_t *out_timestamp_ns)

*  None  

Global [MLNativeSurfaceGetFrameTransformationMatrix](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframetransformationmatrix)  (MLHandle handle, float out_mtx[16])

*  None  

Global [MLNativeSurfaceGetNativeWindow](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetnativewindow)  (MLHandle handle, MLHandle *out_native_window, int32_t *out_format)

*  None  

Global [MLNativeSurfaceRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacerelease)  (MLHandle handle)

*  None  

Global [MLNativeSurfaceReleaseFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacereleaseframe)  (MLHandle handle, MLHandle native_buffer)

*  None  

Global [MLNativeSurfaceReleaseNativeWindow](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacereleasenativewindow)  (MLHandle handle, MLHandle native_window)

*  None  

Global [MLNativeSurfaceSetOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacesetonframeavailablecallback)  (MLHandle handle, const [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) *callback, void *user_data)

*  None  

Global [MLNativeSurfaceTextureAttachToGLContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetextureattachtoglcontext)  (MLHandle handle, uint32_t texture_id)

*  None  

Global [MLNativeSurfaceTextureCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturecreate)  (const [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) *config_values, MLNativeSurfaceTextureBackend backend, MLHandle *out_handle)

*  None  

Global [MLNativeSurfaceTextureDetachFromGLContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturedetachfromglcontext)  (MLHandle handle)

*  None  

Global [MLNativeSurfaceTextureGetTimestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturegettimestamp)  (MLHandle handle, int64_t *out_timestamp_ns)

*  None  

Global [MLNativeSurfaceTextureGetTransformationMatrix](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturegettransformationmatrix)  (MLHandle handle, float out_matrix[16])

*  None  

Global [MLNativeSurfaceTextureRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturerelease)  (MLHandle handle)

*  None  

Global [MLNativeSurfaceTextureSetOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturesetonframeavailablecallback)  (MLHandle handle, const [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) *callback, void *user_data)

*  None  

Global [MLNativeSurfaceTextureUpdateTexImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetextureupdateteximage)  (MLHandle handle)

*  None  

Global [MLOcclusionCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusioncreateclient)  (const [MLOcclusionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) *settings, MLHandle *out_client_handle)

*  com.magicleap.permission.SPATIAL_MAPPING (protection level: dangerous)  

Global [MLOcclusionDestroyClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusiondestroyclient)  (MLHandle client_handle)

*  None  

Global [MLOcclusionGetLatestMesh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusiongetlatestmesh)  (MLHandle handle, const [MLOcclusionMeshQuery](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh_query.md) *mesh_query, [MLOcclusionMesh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) *out_mesh_data)

*  None  

Global [MLOcclusionMeshInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/group___occlusion.md#void-mlocclusionmeshinit)  ([MLOcclusionMesh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) *inout_mesh)

*  None  

Global [MLOcclusionMeshQueryInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/group___occlusion.md#void-mlocclusionmeshqueryinit)  ([MLOcclusionMeshQuery](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh_query.md) *inout_mesh_query)

*  None  

Global [MLOcclusionReleaseMesh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusionreleasemesh)  (MLHandle handle, [MLOcclusionMesh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) *mesh_data)

*  None  

Global [MLOcclusionSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/group___occlusion.md#void-mlocclusionsettingsinit)  ([MLOcclusionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) *inout_settings)

*  None  

Global [MLOcclusionUpdateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusionupdatesettings)  (MLHandle handle, const [MLOcclusionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) *settings)

*  None  

Global [MLPerceptionGetPredictedSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetpredictedsnapshot)  (MLTime timestamp, MLSnapshot **out_snapshot)

*  None  

Global [MLPerceptionGetSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetsnapshot)  (MLSnapshot **out_snapshot)

*  None  

Global [MLPerceptionInitSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptioninitsettings)  ([MLPerceptionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) *out_settings)

*  None  

Global [MLPerceptionReleaseSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionreleasesnapshot)  (MLSnapshot *snap)

*  None  

Global [MLPerceptionShutdown](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionshutdown)  ()

*  None  

Global [MLPerceptionStartup](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionstartup)  ([MLPerceptionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) *settings)

*  None  

Global [MLPlanesCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanescreate)  (MLHandle *out_handle)

*  com.magicleap.permission.SPATIAL_MAPPING (protection level: dangerous)  

Global [MLPlanesDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesdestroy)  (MLHandle planes_tracker)

*  None  

Global [MLPlanesQueryBegin](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesquerybegin)  (MLHandle planes_tracker, const [MLPlanesQuery](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md) *query, MLHandle *out_handle)

*  None  

Global [MLPlanesQueryGetResultsWithBoundaries](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesquerygetresultswithboundaries)  (MLHandle planes_tracker, MLHandle planes_query, [MLPlane](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md) *out_results, uint32_t *out_num_results, [MLPlaneBoundariesList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) *out_boundaries)

*  None  

Global [MLPlanesReleaseBoundariesList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesreleaseboundarieslist)  (MLHandle planes_tracker, [MLPlaneBoundariesList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) *plane_boundaries)

*  None  

Global [MLPlatformGetAPILevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#mlresult-mlplatformgetapilevel)  (uint32_t *out_api_level)

*  None  

Global [MLPowerManagerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagercreate)  (MLPowerManagerComponent component, MLHandle *out_handle)

*  none  

Global [MLPowerManagerDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerdestroy)  (MLHandle handle)

*  None  

Global [MLPowerManagerGetAvailablePowerStates](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailablepowerstates)  (MLHandle handle, const [MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) *in_info, [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) *out_states)

*  None  

Global [MLPowerManagerGetAvailableProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailableproperties)  (MLHandle handle, const [MLPowerManagerPropertyTypeInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_info.md) *in_info, [MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md) *out_properties)

*  None  

Global [MLPowerManagerGetComponentProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetcomponentproperties)  (MLHandle handle, const [MLPowerManagerPropertyInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_info.md) *in_info, [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) *out_properties)

*  None 

Global [MLPowerManagerGetPowerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetpowerstate)  (MLHandle handle, const [MLPowerManagerPowerStateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) *in_info, [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) *out_state)

*  None 

Global [MLPowerManagerGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#const-char-mlpowermanagergetresultstring)  (MLResult result_code)

*  None  

Global [MLPowerManagerReleasePowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepowerstatedata)  (MLHandle handle, [MLPowerManagerPowerStateData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) *power_states)

*  None  

Global [MLPowerManagerReleasePropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepropertydata)  (MLHandle handle, [MLPowerManagerPropertyData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) *properties)

*  None  

Global [MLPowerManagerReleasePropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepropertytypedata)  (MLHandle handle, [MLPowerManagerPropertyTypeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md) *properties)

*  None  

Global [MLPowerManagerSetCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagersetcallbacks)  (MLHandle handle, [MLPowerManagerCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md) *cb, void *user_data)

*  None  

Global [MLPowerManagerSetPowerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagersetpowerstate)  (MLHandle handle, const [MLPowerManagerPowerStateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md) *settings)

*  None 

Global [MLSnapshotGetPoseInBase](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgetposeinbase)  (const MLSnapshot *snapshot, const [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) *base_id, const [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) *id, [MLPose](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_pose.md) *out_pose)

*  None  

Global [MLSnapshotGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#const-char-mlsnapshotgetresultstring)  (MLResult result_code)

*  None  

Global [MLSnapshotGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgetstaticdata)  ([MLSnapshotStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md) *out_static_data)

*  None  

Global [MLSnapshotGetTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgettransform)  (const MLSnapshot *snapshot, const [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) *id, [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) *out_transform)

*  None  

Global [MLSnapshotGetTransformWithDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgettransformwithderivatives)  (const MLSnapshot *snapshot, const [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) *id, [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) *out_transform, [MLTransformDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md) *out_derivatives)

*  None  

Global [MLSpaceCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacecallbacksinit)  ([MLSpaceCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) *inout_callbacks)

*  None  

Global [MLSpaceExportInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceexportinfoinit)  ([MLSpaceExportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) *inout_info)

*  None  

Global [MLSpaceExportSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceexportspace)  (const [MLSpaceExportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) *export_info, [MLSpaceExportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) *out_data)

*  com.magicleap.permission.SPACE_IMPORT_EXPORT (protection level: dangerous)  

Global [MLSpaceGetLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacegetlocalizationresult)  (MLHandle handle, [MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) *out_localization_result)

*  None  

Global [MLSpaceGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#const-char-mlspacegetresultstring)  (MLResult result)

*  None  

Global [MLSpaceGetSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacegetspacelist)  (MLHandle handle, const [MLSpaceQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) *query_filter, [MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) *out_space_list)

*  None  

Global [MLSpaceImportInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit)  ([MLSpaceImportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) *inout_info)

*  None  

Global [MLSpaceImportSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceimportspace)  (const [MLSpaceImportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) *import_info, [MLSpaceImportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_out_data.md) *out_data)

*  com.magicleap.permission.SPACE_IMPORT_EXPORT (protection level: dangerous)  

Global [MLSpaceInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit)  ([MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) *inout_info)

*  None  

Global [MLSpaceListInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelistinit)  ([MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) *inout_info)

*  None  

Global [MLSpaceLocalizationInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationinfoinit)  ([MLSpaceLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) *inout_info)

*  None  

Global [MLSpaceLocalizationResultInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit)  ([MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) *inout_info)

*  None  

Global [MLSpaceManagerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate)  (const [MLSpaceManagerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) *settings, MLHandle *out_handle)

*  com.magicleap.permission.SPACE_MANAGER (protection level: normal)  

Global [MLSpaceManagerDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagerdestroy)  (MLHandle handle)

*  None  

Global [MLSpaceManagerSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacemanagersettingsinit)  ([MLSpaceManagerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) *inout_info)

*  None  

Global [MLSpaceQueryFilterInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacequeryfilterinit)  ([MLSpaceQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) *inout_query_filter)

*  None  

Global [MLSpaceReleaseExportData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleaseexportdata)  ([MLSpaceExportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) *space_data)

*  None  

Global [MLSpaceReleaseSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleasespacelist)  (MLHandle handle, [MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) *space_list)

*  None  

Global [MLSpaceRequestLocalization](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacerequestlocalization)  (MLHandle handle, const [MLSpaceLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) *localization_info)

*  None  

Global [MLSpatialAnchorCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorcreate)  (MLHandle handle, const [MLSpatialAnchorCreateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) *create_info, [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) *out_anchor)

*  None  

Global [MLSpatialAnchorCreateInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorcreateinfoinit)  ([MLSpatialAnchorCreateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) *inout_info)

*  None  

Global [MLSpatialAnchorDelete](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchordelete)  (MLHandle handle, [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) anchor_id)

*  None  

Global [MLSpatialAnchorGetLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorgetlocalizationinfo)  (MLHandle handle, [MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) *out_localization_info)

*  None  

Global [MLSpatialAnchorInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorinit)  ([MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) *inout_anchor)

*  None  

Global [MLSpatialAnchorLocalizationInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorlocalizationinfoinit)  ([MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) *inout_info)

*  None  

Global [MLSpatialAnchorPublish](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorpublish)  (MLHandle handle, [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) anchor_id)

*  None  

Global [MLSpatialAnchorQueryCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerycreate)  (MLHandle handle, const [MLSpatialAnchorQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) *query_filter, MLHandle *out_query_handle, uint32_t *out_results_count)

*  None  

Global [MLSpatialAnchorQueryDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerydestroy)  (MLHandle handle, MLHandle query_handle)

*  None  

Global [MLSpatialAnchorQueryFilterInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorqueryfilterinit)  ([MLSpatialAnchorQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) *inout_query_filter)

*  None  

Global [MLSpatialAnchorQueryGetResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerygetresult)  (MLHandle handle, MLHandle query_handle, uint32_t first_index, uint32_t last_index, [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) *out_results)

*  None  

Global [MLSpatialAnchorTrackerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchortrackercreate)  (MLHandle *out_handle)

*  com.magicleap.permission.SPATIAL_ANCHOR (protection level: normal)  

Global [MLSpatialAnchorTrackerDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchortrackerdestroy)  (MLHandle handle)

*  None  

Global [MLSpatialAnchorUpdate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorupdate)  (MLHandle handle, const [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) *anchor)

*  None  

Global [MLSystemNotificationManagerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___system_notification_manager/group___system_notification_manager.md#mlresult-mlsystemnotificationmanagercreate)  (MLHandle *out_handle)

*  com.magicleap.permission.SYSTEM_NOTIFICATION (protection level: normal)  

Global [MLSystemNotificationManagerDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___system_notification_manager/group___system_notification_manager.md#mlresult-mlsystemnotificationmanagerdestroy)  (MLHandle handle)

*  None  

Global [MLSystemNotificationManagerSetNotifications](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___system_notification_manager/group___system_notification_manager.md#mlresult-mlsystemnotificationmanagersetnotifications)  (MLHandle handle, bool suppress)

*  None  

Global [MLTimeConvertMLTimeToSystemTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___time/group___time.md#mlresult-mltimeconvertmltimetosystemtime)  (MLTime ml_time, struct timespec *out_timespec_time)

*  None  

Global [MLTimeConvertSystemTimeToMLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___time/group___time.md#mlresult-mltimeconvertsystemtimetomltime)  (const struct timespec *timespec_time, MLTime *out_ml_time)

*  None  

Global [MLVoiceIntentCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#void-mlvoiceintentcallbacksinit)  ([MLVoiceIntentCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md) *inout_callbacks)

*  None  

Global [MLVoiceIntentConfigureSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentconfiguresettings)  (MLHandle handle, const [MLVoiceIntentSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md) *voice_settings)

*  None  

Global [MLVoiceIntentCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentcreate)  (MLHandle *out_handle)

*  com.magicleap.permission.VOICE_INPUT (protection level: dangerous)  

Global [MLVoiceIntentDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentdestroy)  (MLHandle handle)

*  None  

Global [MLVoiceIntentIsEnabled](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentisenabled)  (MLHandle handle, bool *out_is_enabled)

*  None  

Global [MLVoiceIntentSetCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentsetcallbacks)  (MLHandle handle, const [MLVoiceIntentCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md) *voice_callbacks, void *user_data)

*  None  

Global [MLVoiceIntentSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#void-mlvoiceintentsettingsinit)  ([MLVoiceIntentSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md) *inout_settings)

*  None  

Global [MLVoiceIntentStartProcessing](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentstartprocessing)  (MLHandle handle)

*  None  

Global [MLVoiceIntentStopProcessing](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentstopprocessing)  (MLHandle handle)

*  None  

Global [MLWebViewAcquireNextAvailableFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewacquirenextavailableframe)  (MLHandle web_view, struct AHardwareBuffer **out_native_buffer)

*  None  

Global [MLWebViewCanGoBack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcangoback)  (MLHandle web_view, bool *out_can_go_back)

*  None  

Global [MLWebViewCanGoForward](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcangoforward)  (MLHandle web_view, bool *out_can_go_forward)

*  None  

Global [MLWebViewClearCache](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewclearcache)  (MLHandle web_view)

*  None  

Global [MLWebViewCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcreate)  (MLHandle *out_handle, const [MLWebViewSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md) *in_settings)

*  com.magicleap.permission.WEBVIEW (protection level: normal)  

Global [MLWebViewCursorStateInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewcursorstateinit)  ([MLWebViewCursorState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) *inout_cursor_state)

*  None  

Global [MLWebViewDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewdestroy)  (MLHandle handle)

*  None  

Global [MLWebViewEventCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebvieweventcallbacksinit)  ([MLWebViewEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) *inout_callback)

*  None  

Global [MLWebViewGetFrameTransformMatrix](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgetframetransformmatrix)  (MLHandle web_view, [MLMat4f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_mat4f.md) *out_matrix)

*  None  

Global [MLWebViewGetScrollOffset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgetscrolloffset)  (MLHandle web_view, int32_t *out_x, int32_t *out_y)

*  None  

Global [MLWebViewGetScrollSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgetscrollsize)  (MLHandle web_view, int32_t *out_width, int32_t *out_height)

*  None  

Global [MLWebViewGetUrl](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgeturl)  (MLHandle web_view, uint32_t *inout_size, char *inout_url)

*  None  

Global [MLWebViewGetZoomFactor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgetzoomfactor)  (MLHandle web_view, double *out_zoom_factor)

*  None  

Global [MLWebViewGoBack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgoback)  (MLHandle web_view)

*  None  

Global [MLWebViewGoForward](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgoforward)  (MLHandle web_view)

*  None  

Global [MLWebViewGoTo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgoto)  (MLHandle web_view, const char *url)

*  None  

Global [MLWebViewInjectChar](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectchar)  (MLHandle web_view, uint32_t char_utf32)

*  None  

Global [MLWebViewInjectKeyDown](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectkeydown)  (MLHandle web_view, int32_t key_code, uint32_t modifier_mask)

*  None  

Global [MLWebViewInjectKeyUp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectkeyup)  (MLHandle web_view, int32_t key_code, uint32_t modifier_mask)

*  None  

Global [MLWebViewInjectMouseButtonDown](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectmousebuttondown)  (MLHandle web_view, const [MLWebViewCursorState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) *cursor_state)

*  None  

Global [MLWebViewInjectMouseButtonUp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectmousebuttonup)  (MLHandle web_view, const [MLWebViewCursorState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) *cursor_state)

*  None  

Global [MLWebViewInjectMouseMove](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectmousemove)  (MLHandle web_view, const [MLWebViewCursorState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) *cursor_state)

*  None  

Global [MLWebViewProcessSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewprocesssettingsinit)  ([MLWebViewProcessSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md) *inout_settings)

*  None  

Global [MLWebViewReleaseFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewreleaseframe)  (MLHandle web_view, struct AHardwareBuffer *native_buffer)

*  None  

Global [MLWebViewReload](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewreload)  (MLHandle web_view)

*  None  

Global [MLWebViewRemoveAllCookies](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewremoveallcookies)  (MLHandle web_view)

*  None  

Global [MLWebViewResetZoom](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewresetzoom)  (MLHandle web_view)

*  None  

Global [MLWebViewScrollBy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewscrollby)  (MLHandle web_view, const int32_t x_pixels, const int32_t y_pixels)

*  None  

Global [MLWebViewSetEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewseteventcallbacks)  (MLHandle web_view, const [MLWebViewEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) *callbacks)

*  None  

Global [MLWebViewSetProcessSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewsetprocesssettings)  (const [MLWebViewProcessSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md) *settings)

*  None 

Global [MLWebViewSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewsettingsinit)  ([MLWebViewSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md) *inout_settings)

*  None  

Global [MLWebViewZoomIn](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewzoomin)  (MLHandle web_view)

*  None  

Global [MLWebViewZoomOut](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewzoomout)  (MLHandle web_view)

*  None  

Global [MLWorldCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect)  (const [MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) *settings, MLHandle *out_handle)

*  android.permission.CAMERA (protection level: dangerous)  

Global [MLWorldCameraDisconnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameradisconnect)  (MLHandle handle)

*  None  

Global [MLWorldCameraGetLatestWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameragetlatestworldcameradata)  (MLHandle handle, uint64_t timeout_ms, [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) **out_data)

*  None  

Global [MLWorldCameraReleaseCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcamerareleasecameradata)  (MLHandle handle, [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) *world_camera_data)

*  None  

Global [MLWorldCameraSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#void-mlworldcamerasettingsinit)  ([MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) *inout_handle)

*  None  

Global [MLWorldCameraUpdateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraupdatesettings)  (MLHandle handle, const [MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) *settings)

*  None  

Global [MLZIGraphicsEnumerateRequiredVkDeviceExtensions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzigraphicsenumeraterequiredvkdeviceextensions)  (VkExtensionProperties *out_required_extension_properties, uint32_t *out_extension_property_count)

*  None  

Global [MLZIGraphicsEnumerateRequiredVkInstanceExtensions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzigraphicsenumeraterequiredvkinstanceextensions)  (VkExtensionProperties *out_required_extension_properties, uint32_t *out_extension_property_count)

*  None  

Global [MLZIIsServerConfigured](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlziisserverconfigured)  (bool *out_is_configured)

*  None  

Global [MLZIPermissionsIsGranted](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsisgranted)  (const char *permission_name)

*  Any  

Global [MLZIPermissionsRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsrequest)  (const char *permission_name)

*  None  

Global [MLZIPermissionsStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsstart)  ()

*  None  

Global [MLZIPermissionsStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsstop)  ()

*  None  

Global [MLZISetProgramLabel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzisetprogramlabel)  (const char *in_label)

*  None 



