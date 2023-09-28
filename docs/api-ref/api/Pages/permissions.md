---
title: Permissions

---

# Permissions






Global [MLAudioBeginAcousticSceneUpdate](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiobeginacousticsceneupdate)  ()

*  None  

Global [MLAudioBeginSpectralAnalysisFromMicCapture](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiobeginspectralanalysisfrommiccapture)  (MLAudioSpectralAnalysisTarget target, MLAudioSpectralAnalysisCallback callback, void *callback_context, MLHandle *out_handle)

*  None  

Global [MLAudioBeginTraitAnalysisFromMicCapture](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiobegintraitanalysisfrommiccapture)  (MLAudioTraitAnalysisTarget target, MLAudioTraitAnalysisCallback callback, void *callback_context, MLHandle *out_handle)

*  None  

Global [MLAudioCheckResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocheckresource)  (MLHandle resource, bool *out_is_ready)

*  None  

Global [MLAudioCreateInputFromMicCapture](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_allocation.md#mlresult-mlaudiocreateinputfrommiccapture)  (MLAudioMicCaptureType mic_capture_type, const [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *format, uint32_t buffer_size_in_bytes, MLAudioBufferCallback callback, void *context, MLHandle *out_handle)

*  android.permission.RECORD_AUDIO (protection level: dangerous)  

Global [MLAudioCreateInputFromMixedCapture](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_allocation.md#mlresult-mlaudiocreateinputfrommixedcapture)  (const [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *format, uint32_t buffer_size, MLAudioBufferCallback callback, void *callback_context, MLHandle *out_handle)

*  None  

Global [MLAudioCreateInputFromVirtualCapture](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_allocation.md#mlresult-mlaudiocreateinputfromvirtualcapture)  (const [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *format, uint32_t buffer_size, MLAudioBufferCallback callback, void *callback_context, MLHandle *out_handle)

*  None  

Global [MLAudioCreateLoadedResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreateloadedresource)  (int file, bool dynamic_decode, MLAudioResourceDiscardedCallback callback, void *context, MLHandle *out_resource)

*  None  

Global [MLAudioCreateSoundWithBufferedOutput](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiocreatesoundwithbufferedoutput)  (const [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *format, uint32_t buffer_size_in_bytes, MLAudioBufferCallback callback, void *context, MLHandle *out_handle)

*  None  

Global [MLAudioCreateSoundWithLoadedFile](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiocreatesoundwithloadedfile)  (int file, bool auto_destroy, bool dynamic_decode, MLHandle *out_handle)

*  None  

Global [MLAudioCreateSoundWithLoadedResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreatesoundwithloadedresource)  (MLHandle resource, bool auto_destroy, MLHandle *out_handle)

*  None  

Global [MLAudioCreateSoundWithStreamedFile](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiocreatesoundwithstreamedfile)  (int file, bool auto_destroy, MLHandle *out_handle)

*  None  

Global [MLAudioCreateSoundWithStreamedResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreatesoundwithstreamedresource)  (MLHandle resource, bool auto_destroy, MLHandle *out_handle)

*  None  

Global [MLAudioCreateStreamedResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreatestreamedresource)  (int file, MLAudioResourceDiscardedCallback callback, void *context, MLHandle *out_resource)

*  None  

Global [MLAudioDestroyInput](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_allocation.md#mlresult-mlaudiodestroyinput)  (MLHandle handle)

*  None  

Global [MLAudioDestroyResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiodestroyresource)  (MLHandle resource)

*  None  

Global [MLAudioDestroySound](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_allocation.md#mlresult-mlaudiodestroysound)  (MLHandle handle)

*  None  

Global [MLAudioEndAcousticSceneUpdate](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudioendacousticsceneupdate)  ()

*  None  

Global [MLAudioEndSpectralAnalysis](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudioendspectralanalysis)  (MLHandle handle)

*  None  

Global [MLAudioEndTraitAnalysis](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudioendtraitanalysis)  (MLHandle handle)

*  None  

Global [MLAudioGetAcousticSceneDispersionDefault](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenedispersiondefault)  ([MLAudioDispersionProperties](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) *out_properties)

*  None  

Global [MLAudioGetAcousticSceneMapEnable](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenemapenable)  (bool *out_is_enabled)

*  None  

Global [MLAudioGetAcousticSceneReverbDefault](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenereverbdefault)  ([MLAudioReverbProperties](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) *out_properties)

*  None  

Global [MLAudioGetAcousticSceneTransmissionDefault](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenetransmissiondefault)  ([MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *out_transmission)

*  None  

Global [MLAudioGetBufferedInputDefaults](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudiogetbufferedinputdefaults)  (uint32_t channel_count, uint32_t samples_per_second, [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *out_format, uint32_t *out_recommended_size_in_bytes, uint32_t *out_min_size_in_bytes)

*  None  

Global [MLAudioGetBufferedInputLatency](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudiogetbufferedinputlatency)  (MLHandle handle, float *out_latency_in_msec)

*  None  

Global [MLAudioGetBufferedOutputDefaults](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetbufferedoutputdefaults)  (uint32_t channel_count, uint32_t samples_per_second, float max_pitch_change, [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *out_format, uint32_t *out_recommended_size_in_bytes, uint32_t *out_min_size_in_bytes)

*  None  

Global [MLAudioGetBufferedOutputFramesPlayed](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetbufferedoutputframesplayed)  (MLHandle handle, uint64_t *out_frames_played)

*  None  

Global [MLAudioGetBufferedOutputLatency](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetbufferedoutputlatency)  (MLHandle handle, float *out_latency_in_msec)

*  None  

Global [MLAudioGetChangedAcousticMap](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetchangedacousticmap)  (uint32_t prev_map_tag, uint8_t **out_map_data, uint32_t *out_map_size_in_bytes, uint32_t *out_map_tag)

*  None  

Global [MLAudioGetInputBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudiogetinputbuffer)  (MLHandle handle, [MLAudioBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) *out_buf)

*  None  

Global [MLAudioGetInputState](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_control.md#mlresult-mlaudiogetinputstate)  (MLHandle handle, MLAudioState *out_state)

*  None  

Global [MLAudioGetMasterVolume](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiogetmastervolume)  (float *out_volume)

*  None  

Global [MLAudioGetMicMute](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_mic_muting.md#mlresult-mlaudiogetmicmute)  (bool *out_is_muted)

*  android.permission.RECORD_AUDIO (protection level: dangerous)  

Global [MLAudioGetOutputBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudiogetoutputbuffer)  (MLHandle handle, [MLAudioBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer.md) *out_buf)

*  None  

Global [MLAudioGetOutputDevice](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetoutputdevice)  (MLAudioOutputDevice *out_current_device)

*  None  

Global [MLAudioGetOutputMute](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiogetoutputmute)  (bool *out_is_muted)

*  None  

Global [MLAudioGetResourceSize](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiogetresourcesize)  (MLHandle resource, uint32_t *out_size_in_bytes)

*  None  

Global [MLAudioGetSoundBypassesMasterVolume](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundbypassesmastervolume)  (MLHandle handle, bool *out_is_bypassing)

*  None  

Global [MLAudioGetSoundFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiogetsoundformat)  (MLHandle handle, [MLAudioBufferFormat](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_buffering/struct_m_l_audio_buffer_format.md) *out_format)

*  None  

Global [MLAudioGetSoundLooping](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundlooping)  (MLHandle handle, bool *out_is_looping)

*  None  

Global [MLAudioGetSoundMute](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundmute)  (MLHandle handle, bool *out_is_muted)

*  None  

Global [MLAudioGetSoundPitch](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundpitch)  (MLHandle handle, float *out_pitch)

*  None  

Global [MLAudioGetSoundState](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiogetsoundstate)  (MLHandle handle, MLAudioState *out_state)

*  None  

Global [MLAudioGetSoundVolumeDb](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundvolumedb)  (MLHandle handle, float *out_volume)

*  None  

Global [MLAudioGetSoundVolumeLinear](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetsoundvolumelinear)  (MLHandle handle, float *out_volume)

*  None  

Global [MLAudioGetSpatialRaycastRequests](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialraycastrequests)  ([MLAudioRaycastRequest](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_request.md) **out_raycast_requests, uint32_t *out_request_count)

*  None  

Global [MLAudioGetSpatialSoundBillboarding](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundbillboarding)  (MLHandle id, bool *out_is_billboarding)

*  None  

Global [MLAudioGetSpatialSoundDirection](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsounddirection)  (MLHandle handle, uint32_t channel, [MLQuaternionf](/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) *out_direction)

*  None  

Global [MLAudioGetSpatialSoundDirectLevel](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsounddirectlevel)  (MLHandle handle, uint32_t channel, [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *out_level)

*  None  

Global [MLAudioGetSpatialSoundDispersionSendLevel](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsounddispersionsendlevel)  (MLHandle handle, uint32_t channel, [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *out_level)

*  None  

Global [MLAudioGetSpatialSoundDistanceAttenuation](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsounddistanceattenuation)  (MLHandle handle, uint32_t channel, [MLAudioSpatialSoundDistanceProperties](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md) *out_properties)

*  None  

Global [MLAudioGetSpatialSoundEnable](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundenable)  (MLHandle handle, bool *out_is_enabled)

*  None  

Global [MLAudioGetSpatialSoundHeadRelative](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundheadrelative)  (MLHandle handle, bool *out_is_head_relative)

*  None  

Global [MLAudioGetSpatialSoundIndirectLevel](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundindirectlevel)  (MLHandle handle, uint32_t channel, [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *out_level)

*  None  

Global [MLAudioGetSpatialSoundObstruction](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundobstruction)  (MLHandle id, uint32_t channel, [MLAudioObstruction](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) *out_left_ear, [MLAudioObstruction](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) *out_right_ear)

*  None  

Global [MLAudioGetSpatialSoundObstructionOverride](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundobstructionoverride)  (MLHandle id, [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *out_override)

*  None  

Global [MLAudioGetSpatialSoundPosition](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundposition)  (MLHandle handle, uint32_t channel, [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) *out_position)

*  None  

Global [MLAudioGetSpatialSoundRadiation](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundradiation)  (MLHandle handle, uint32_t channel, [MLAudioSpatialSoundRadiationProperties](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md) *out_properties)

*  None  

Global [MLAudioGetSpatialSoundReverbSendLevel](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiogetspatialsoundreverbsendlevel)  (MLHandle handle, uint32_t channel, [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *out_level)

*  None  

Global [MLAudioGetSpectralAnalysis](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiogetspectralanalysis)  (MLHandle handle, [MLAudioSpectralAnalysis](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) *out_values)

*  None  

Global [MLAudioGetStreamedFileOffset](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiogetstreamedfileoffset)  (MLHandle handle, uint32_t *out_offset_in_msec)

*  None  

Global [MLAudioGetTraitAnalysis](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiogettraitanalysis)  (MLHandle handle, float *out_value)

*  None  

Global [MLAudioPauseSound](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiopausesound)  (MLHandle handle)

*  None  

Global [MLAudioRefreshResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiorefreshresource)  (MLHandle resource, int file)

*  None  

Global [MLAudioReleaseInputBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_buffering.md#mlresult-mlaudioreleaseinputbuffer)  (MLHandle handle)

*  None  

Global [MLAudioReleaseOutputBuffer](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md#mlresult-mlaudioreleaseoutputbuffer)  (MLHandle handle)

*  None  

Global [MLAudioResetAcousticScene](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudioresetacousticscene)  ()

*  None  

Global [MLAudioResumeSound](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudioresumesound)  (MLHandle handle)

*  None  

Global [MLAudioSetAcousticSceneDispersionDefault](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenedispersiondefault)  (const [MLAudioDispersionProperties](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) *properties)

*  None  

Global [MLAudioSetAcousticSceneMapEnable](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenemapenable)  (bool is_enabled)

*  None  

Global [MLAudioSetAcousticSceneReverbDefault](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenereverbdefault)  (const [MLAudioReverbProperties](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) *properties)

*  None  

Global [MLAudioSetAcousticSceneTransmissionDefault](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenetransmissiondefault)  (const [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *transmission)

*  None  

Global [MLAudioSetMasterVolumeCallback](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiosetmastervolumecallback)  (MLAudioMasterVolumeChangedCallback callback, void *context)

*  None  

Global [MLAudioSetMediaEventCallback](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiosetmediaeventcallback)  (MLAudioMediaEventCallback callback, void *context)

*  None  

Global [MLAudioSetMicMute](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_mic_muting.md#mlresult-mlaudiosetmicmute)  (bool is_muted)

*  android.permission.RECORD_AUDIO (protection level: dangerous)  

Global [MLAudioSetMicMuteCallback](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_mic_muting.md#mlresult-mlaudiosetmicmutecallback)  (MLAudioMicMuteCallback callback, void *context)

*  android.permission.RECORD_AUDIO (protection level: dangerous)  

Global [MLAudioSetOutputDeviceCallback](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetoutputdevicecallback)  (MLAudioOutputDeviceChangedCallback callback, void *context)

*  None  

Global [MLAudioSetOutputMuteCallback](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiosetoutputmutecallback)  (MLAudioOutputMuteChangedCallback callback, void *context)

*  None  

Global [MLAudioSetSoundBypassesMasterVolume](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundbypassesmastervolume)  (MLHandle handle, bool is_bypassing)

*  None  

Global [MLAudioSetSoundEventCallback](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiosetsoundeventcallback)  (MLHandle handle, MLAudioSoundEventCallback callback, void *context)

*  None  

Global [MLAudioSetSoundLooping](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundlooping)  (MLHandle handle, bool is_looping)

*  None  

Global [MLAudioSetSoundMute](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundmute)  (MLHandle handle, bool is_muted)

*  None  

Global [MLAudioSetSoundPitch](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundpitch)  (MLHandle handle, float pitch)

*  None  

Global [MLAudioSetSoundVolumeDb](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundvolumedb)  (MLHandle handle, float volume)

*  None  

Global [MLAudioSetSoundVolumeLinear](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetsoundvolumelinear)  (MLHandle handle, float volume)

*  None  

Global [MLAudioSetSpatialRaycastResults](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialraycastresults)  ([MLAudioRaycastResult](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_raycast_result.md) *raycast_results, uint32_t result_count)

*  None  

Global [MLAudioSetSpatialSoundBillboarding](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundbillboarding)  (MLHandle id, bool is_billboarding)

*  None  

Global [MLAudioSetSpatialSoundDirection](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsounddirection)  (MLHandle handle, uint32_t channel, const [MLQuaternionf](/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) *direction)

*  None  

Global [MLAudioSetSpatialSoundDirectLevel](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsounddirectlevel)  (MLHandle handle, uint32_t channel, const [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *level)

*  None  

Global [MLAudioSetSpatialSoundDispersionSendLevel](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsounddispersionsendlevel)  (MLHandle handle, uint32_t channel, const [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *level)

*  None  

Global [MLAudioSetSpatialSoundDistanceAttenuation](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsounddistanceattenuation)  (MLHandle handle, uint32_t channel, const [MLAudioSpatialSoundDistanceProperties](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_distance_properties.md) *properties)

*  None  

Global [MLAudioSetSpatialSoundEnable](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundenable)  (MLHandle handle, bool is_enabled)

*  None  

Global [MLAudioSetSpatialSoundHeadRelative](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundheadrelative)  (MLHandle handle, bool is_head_relative)

*  None  

Global [MLAudioSetSpatialSoundIndirectLevel](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundindirectlevel)  (MLHandle handle, uint32_t channel, const [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *level)

*  None  

Global [MLAudioSetSpatialSoundObstruction](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundobstruction)  (MLHandle id, uint32_t channel, const [MLAudioObstruction](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) *left_ear, const [MLAudioObstruction](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_obstruction.md) *right_ear)

*  None  

Global [MLAudioSetSpatialSoundObstructionOverride](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundobstructionoverride)  (MLHandle id, const [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *override)

*  None  

Global [MLAudioSetSpatialSoundPosition](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundposition)  (MLHandle handle, uint32_t channel, const [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) *position)

*  None  

Global [MLAudioSetSpatialSoundRadiation](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundradiation)  (MLHandle handle, uint32_t channel, const [MLAudioSpatialSoundRadiationProperties](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_spatial_sound/struct_m_l_audio_spatial_sound_radiation_properties.md) *properties)

*  None  

Global [MLAudioSetSpatialSoundReverbSendLevel](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md#mlresult-mlaudiosetspatialsoundreverbsendlevel)  (MLHandle handle, uint32_t channel, const [MLAudioMultibandLevel](/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) *level)

*  None  

Global [MLAudioSetStreamedFileOffset](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_parameters.md#mlresult-mlaudiosetstreamedfileoffset)  (MLHandle handle, uint32_t offset_in_msec)

*  None  

Global [MLAudioStartInput](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_control.md#mlresult-mlaudiostartinput)  (MLHandle handle)

*  None  

Global [MLAudioStartSound](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiostartsound)  (MLHandle handle)

*  None  

Global [MLAudioStopInput](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_control.md#mlresult-mlaudiostopinput)  (MLHandle handle)

*  None  

Global [MLAudioStopSound](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_control.md#mlresult-mlaudiostopsound)  (MLHandle handle)

*  None  

Global [MLCameraCaptureCallbacksInit](/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameracapturecallbacksinit)  ([MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) *inout_capture_callbacks)

*  None  

Global [MLCameraCaptureConfigInit](/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameracaptureconfiginit)  ([MLCameraCaptureConfig](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) *inout_config)

*  None  

Global [MLCameraCaptureImage](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracaptureimage)  (MLCameraContext context, uint32_t num_images)

*  None  

Global [MLCameraCapturePreviewStart](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturepreviewstart)  (MLCameraContext context)

*  None  

Global [MLCameraCapturePreviewStop](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturepreviewstop)  (MLCameraContext context)

*  None  

Global [MLCameraCaptureVideoStart](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturevideostart)  (MLCameraContext context)

*  None  

Global [MLCameraCaptureVideoStop](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturevideostop)  (MLCameraContext context)

*  None  

Global [MLCameraConnect](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect)  (const [MLCameraConnectContext](/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) *input_context, MLCameraContext *out_context)

*  android.permission.CAMERA (protection level: dangerous)  

Global [MLCameraConnectContextInit](/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameraconnectcontextinit)  ([MLCameraConnectContext](/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) *inout_context)

*  None  

Global [MLCameraDeInit](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameradeinit)  ()

*  None  

Global [MLCameraDeviceAvailabilityStatusCallbacksInit](/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameradeviceavailabilitystatuscallbacksinit)  ([MLCameraDeviceAvailabilityStatusCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) *inout_device_availability_status_callbacks)

*  None  

Global [MLCameraDeviceStatusCallbacksInit](/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameradevicestatuscallbacksinit)  ([MLCameraDeviceStatusCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) *inout_device_status_callbacks)

*  None  

Global [MLCameraDisconnect](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameradisconnect)  (MLCameraContext context)

*  None  

Global [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics)  (MLCameraContext context, MLHandle *out_characteristics_handle)

*  None  

Global [MLCameraGetDeviceAvailabilityStatus](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetdeviceavailabilitystatus)  (MLCameraIdentifier cam_id, bool *out_device_availability_status)

*  None  

Global [MLCameraGetDeviceStatus](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetdevicestatus)  (MLCameraContext context, uint32_t *out_device_status)

*  None  

Global [MLCameraGetErrorCode](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerageterrorcode)  (MLCameraContext context, MLCameraError *out_error_code)

*  None  

Global [MLCameraGetNumSupportedStreams](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetnumsupportedstreams)  (MLCameraContext context, uint32_t *out_num_supported_streams)

*  None  

Global [MLCameraGetStreamCaps](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetstreamcaps)  (MLCameraContext context, const uint32_t stream_index, uint32_t *inout_num_stream_caps, [MLCameraCaptureStreamCaps](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md) *inout_stream_caps)

*  None  

Global [MLCameraInit](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit)  (const [MLCameraDeviceAvailabilityStatusCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) *device_availability_status_callbacks, void *user_data)

*  android.permission.CAMERA (protection level: dangerous)  

Global [MLCameraMetadataGetAFDistanceRangeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetafdistancerangerequestmetadata)  (MLHandle request_handle, float out_data[2])

*  None  

Global [MLCameraMetadataGetAFDistanceRangeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetafdistancerangeresultmetadata)  (MLHandle result_handle, float out_data[2])

*  None  

Global [MLCameraMetadataGetColorCorrectionAberrationModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionaberrationmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataColorCorrectionAberrationMode *out_data)

*  None  

Global [MLCameraMetadataGetColorCorrectionAberrationModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionaberrationmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataColorCorrectionAberrationMode *out_data)

*  None  

Global [MLCameraMetadataGetColorCorrectionAvailableAberrationModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionavailableaberrationmodes)  (MLHandle characteristics_handle, MLCameraMetadataColorCorrectionAberrationMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetColorCorrectionGainsRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiongainsrequestmetadata)  (MLHandle request_handle, float out_data[4])

*  None  

Global [MLCameraMetadataGetColorCorrectionGainsResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiongainsresultmetadata)  (MLHandle result_handle, float out_data[4])

*  None  

Global [MLCameraMetadataGetColorCorrectionModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataColorCorrectionMode *out_data)

*  None  

Global [MLCameraMetadataGetColorCorrectionModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataColorCorrectionMode *out_data)

*  None  

Global [MLCameraMetadataGetColorCorrectionTransformRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiontransformrequestmetadata)  (MLHandle request_handle, [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) out_data[3][3])

*  None  

Global [MLCameraMetadataGetColorCorrectionTransformResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiontransformresultmetadata)  (MLHandle result_handle, [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) out_data[3][3])

*  None  

Global [MLCameraMetadataGetControlAEAntibandingModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeantibandingmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAEAntibandingMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAEAntibandingModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeantibandingmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAEAntibandingMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAEAvailableAntibandingModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeavailableantibandingmodes)  (MLHandle characteristics_handle, MLCameraMetadataControlAEAntibandingMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAEAvailableModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeavailablemodes)  (MLHandle characteristics_handle, MLCameraMetadataControlAEMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAECompensationRange](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaecompensationrange)  (MLHandle characteristics_handle, int32_t out_data[2])

*  None  

Global [MLCameraMetadataGetControlAECompensationStep](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaecompensationstep)  (MLHandle characteristics_handle, [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) *out_data)

*  None  

Global [MLCameraMetadataGetControlAEExposureCompensationRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeexposurecompensationrequestmetadata)  (MLHandle request_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetControlAEExposureCompensationResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeexposurecompensationresultmetadata)  (MLHandle result_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetControlAELockAvailable](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaelockavailable)  (MLHandle characteristics_handle, MLCameraMetadataControlAELock *out_data)

*  None  

Global [MLCameraMetadataGetControlAELockRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaelockrequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAELock *out_data)

*  None  

Global [MLCameraMetadataGetControlAELockResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaelockresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAELock *out_data)

*  None  

Global [MLCameraMetadataGetControlAEMaxRegions](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaemaxregions)  (MLHandle characteristics_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetControlAEModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaemoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAEMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAEModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaemoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAEMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAERegionsRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeregionsrequestmetadata)  (MLHandle request_handle, int32_t out_data[3][5], uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAERegionsResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeregionsresultmetadata)  (MLHandle result_handle, int32_t out_data[3][5], uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAEStateResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaestateresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAEState *out_data)

*  None  

Global [MLCameraMetadataGetControlAETargetFPSRangeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaetargetfpsrangeresultmetadata)  (MLHandle result_handle, int32_t out_data[2])

*  None  

Global [MLCameraMetadataGetControlAFAvailableModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafavailablemodes)  (MLHandle characteristics_handle, MLCameraMetadataControlAFMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAFMaxRegions](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafmaxregions)  (MLHandle characteristics_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetControlAFModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAFMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAFModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAFMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAFRegionsRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafregionsrequestmetadata)  (MLHandle request_handle, int32_t out_data[3][5], uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAFRegionsResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafregionsresultmetadata)  (MLHandle result_handle, int32_t out_data[3][5], uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAFSceneChangeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafscenechangeresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAFSceneChange *out_data)

*  None  

Global [MLCameraMetadataGetControlAFStateResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafstateresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAFState *out_data)

*  None  

Global [MLCameraMetadataGetControlAFTriggerRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaftriggerrequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAFTrigger *out_data)

*  None  

Global [MLCameraMetadataGetControlAFTriggerResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaftriggerresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAFTrigger *out_data)

*  None  

Global [MLCameraMetadataGetControlAvailableEffectModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolavailableeffectmodes)  (MLHandle characteristics_handle, MLCameraMetadataControlEffectMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAvailableModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolavailablemodes)  (MLHandle characteristics_handle, MLCameraMetadataControlMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAvailableSceneModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolavailablescenemodes)  (MLHandle characteristics_handle, MLCameraMetadataControlSceneMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAWBAvailableModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbavailablemodes)  (MLHandle characteristics_handle, MLCameraMetadataControlAWBMode **out_data, uint32_t *out_count)

*  None  

Global [MLCameraMetadataGetControlAWBLockAvailable](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawblockavailable)  (MLHandle characteristics_handle, MLCameraMetadataControlAWBLock *out_data)

*  None  

Global [MLCameraMetadataGetControlAWBLockRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawblockrequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAWBLock *out_data)

*  None  

Global [MLCameraMetadataGetControlAWBLockResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawblockresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAWBLock *out_data)

*  None  

Global [MLCameraMetadataGetControlAWBModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlAWBMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAWBModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAWBMode *out_data)

*  None  

Global [MLCameraMetadataGetControlAWBStateResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbstateresultmetadata)  (MLHandle result_handle, MLCameraMetadataControlAWBState *out_data)

*  None  

Global [MLCameraMetadataGetControlEffectModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontroleffectmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlEffectMode *out_data)

*  None  

Global [MLCameraMetadataGetControlEffectModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontroleffectmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlEffectMode *out_data)

*  None  

Global [MLCameraMetadataGetControlExposureUpperTimeLimitRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolexposureuppertimelimitrequestmetadata)  (MLHandle request_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetControlExposureUpperTimeLimitResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolexposureuppertimelimitresultmetadata)  (MLHandle result_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetControlForceApplyModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolforceapplymoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlForceApplyMode *out_data)

*  None  

Global [MLCameraMetadataGetControlForceApplyModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolforceapplymoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlForceApplyMode *out_data)

*  None  

Global [MLCameraMetadataGetControlModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolmoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlMode *out_data)

*  None  

Global [MLCameraMetadataGetControlModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolmoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlMode *out_data)

*  None  

Global [MLCameraMetadataGetControlSceneModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolscenemoderequestmetadata)  (MLHandle request_handle, MLCameraMetadataControlSceneMode *out_data)

*  None  

Global [MLCameraMetadataGetControlSceneModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolscenemoderesultmetadata)  (MLHandle result_handle, MLCameraMetadataControlSceneMode *out_data)

*  None  

Global [MLCameraMetadataGetJpegGPSCoordinatesRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpscoordinatesrequestmetadata)  (MLHandle request_handle, double out_data[3])

*  None  

Global [MLCameraMetadataGetJpegGPSCoordinatesResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpscoordinatesresultmetadata)  (MLHandle result_handle, double out_data[3])

*  None  

Global [MLCameraMetadataGetJpegGPSTimestampRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpstimestamprequestmetadata)  (MLHandle request_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetJpegGPSTimestampResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpstimestampresultmetadata)  (MLHandle result_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetJpegQualityRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegqualityrequestmetadata)  (MLHandle request_handle, uint8_t *out_data)

*  None  

Global [MLCameraMetadataGetJpegQualityResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegqualityresultmetadata)  (MLHandle result_handle, uint8_t *out_data)

*  None  

Global [MLCameraMetadataGetJpegThumbnailSizeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegthumbnailsizerequestmetadata)  (MLHandle request_handle, MLCameraMetadataJpegThumbnailSize *out_data)

*  None  

Global [MLCameraMetadataGetJpegThumbnailSizeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegthumbnailsizeresultmetadata)  (MLHandle result_handle, MLCameraMetadataJpegThumbnailSize *out_data)

*  None  

Global [MLCameraMetadataGetLensFocusDistanceRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensfocusdistancerequestmetadata)  (MLHandle request_handle, float *out_data)

*  None  

Global [MLCameraMetadataGetLensFocusDistanceResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensfocusdistanceresultmetadata)  (MLHandle result_handle, float *out_data)

*  None  

Global [MLCameraMetadataGetLensInfoHyperfocalDistance](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensinfohyperfocaldistance)  (MLHandle characteristics_handle, float *out_data)

*  None  

Global [MLCameraMetadataGetLensInfoMinimumFocusDistance](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensinfominimumfocusdistance)  (MLHandle characteristics_handle, float *out_data)

*  None  

Global [MLCameraMetadataGetLensInfoMinimumFocusDistanceIncrement](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensinfominimumfocusdistanceincrement)  (MLHandle characteristics_handle, float *out_data)

*  None  

Global [MLCameraMetadataGetLensStateResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensstateresultmetadata)  (MLHandle result_handle, MLCameraMetadataLensState *out_data)

*  None  

Global [MLCameraMetadataGetPostRawSensitivityBoostRange](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetpostrawsensitivityboostrange)  (MLHandle characteristics_handle, int32_t out_data[2])

*  None  

Global [MLCameraMetadataGetPostRawSensitivityBoostRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetpostrawsensitivityboostrequestmetadata)  (MLHandle request_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetPostRawSensitivityBoostResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetpostrawsensitivityboostresultmetadata)  (MLHandle result_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorExposureTimeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorexposuretimerequestmetadata)  (MLHandle request_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorExposureTimeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorexposuretimeresultmetadata)  (MLHandle result_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorFrameDurationResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorframedurationresultmetadata)  (MLHandle result_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorInfoActiveArraySize](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorinfoactivearraysize)  (MLHandle characteristics_handle, int32_t out_data[4])

*  None  

Global [MLCameraMetadataGetSensorInfoSensitivityRange](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorinfosensitivityrange)  (MLHandle characteristics_handle, int32_t out_data[2])

*  None  

Global [MLCameraMetadataGetSensorOrientation](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensororientation)  (MLHandle characteristics_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorSensitivityRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorsensitivityrequestmetadata)  (MLHandle request_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorSensitivityResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorsensitivityresultmetadata)  (MLHandle result_handle, int32_t *out_data)

*  None  

Global [MLCameraMetadataGetSensorTimestampResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensortimestampresultmetadata)  (MLHandle result_handle, int64_t *out_data)

*  None  

Global [MLCameraMetadataSetAFDistanceRange](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetafdistancerange)  (MLHandle request_handle, const float data[2])

*  None  

Global [MLCameraMetadataSetColorCorrectionAberrationMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectionaberrationmode)  (MLHandle request_handle, const MLCameraMetadataColorCorrectionAberrationMode *data)

*  None  

Global [MLCameraMetadataSetColorCorrectionGains](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectiongains)  (MLHandle request_handle, const float data[4])

*  None  

Global [MLCameraMetadataSetColorCorrectionMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectionmode)  (MLHandle request_handle, const MLCameraMetadataColorCorrectionMode *data)

*  None  

Global [MLCameraMetadataSetColorCorrectionTransform](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectiontransform)  (MLHandle request_handle, const [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) data[3][3])

*  None  

Global [MLCameraMetadataSetControlAEAntibandingMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaeantibandingmode)  (MLHandle request_handle, const MLCameraMetadataControlAEAntibandingMode *data)

*  None  

Global [MLCameraMetadataSetControlAEExposureCompensation](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaeexposurecompensation)  (MLHandle request_handle, const int32_t *data)

*  None  

Global [MLCameraMetadataSetControlAELock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaelock)  (MLHandle request_handle, const MLCameraMetadataControlAELock *data)

*  None  

Global [MLCameraMetadataSetControlAEMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaemode)  (MLHandle request_handle, const MLCameraMetadataControlAEMode *data)

*  None  

Global [MLCameraMetadataSetControlAERegions](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaeregions)  (MLHandle request_handle, const int32_t data[3][5], const uint32_t count)

*  None  

Global [MLCameraMetadataSetControlAFMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolafmode)  (MLHandle request_handle, const MLCameraMetadataControlAFMode *data)

*  None  

Global [MLCameraMetadataSetControlAFRegions](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolafregions)  (MLHandle request_handle, const int32_t data[3][5], const uint32_t count)

*  None  

Global [MLCameraMetadataSetControlAFTrigger](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaftrigger)  (MLHandle request_handle, const MLCameraMetadataControlAFTrigger *data)

*  None  

Global [MLCameraMetadataSetControlAWBLock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolawblock)  (MLHandle request_handle, const MLCameraMetadataControlAWBLock *data)

*  None  

Global [MLCameraMetadataSetControlAWBMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolawbmode)  (MLHandle request_handle, const MLCameraMetadataControlAWBMode *data)

*  None  

Global [MLCameraMetadataSetControlEffectMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontroleffectmode)  (MLHandle request_handle, const MLCameraMetadataControlEffectMode *data)

*  None  

Global [MLCameraMetadataSetControlExposureUpperTimeLimit](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolexposureuppertimelimit)  (MLHandle request_handle, const int64_t *data)

*  None  

Global [MLCameraMetadataSetControlForceApplyMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolforceapplymode)  (MLHandle request_handle, const MLCameraMetadataControlForceApplyMode *data)

*  None  

Global [MLCameraMetadataSetControlMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolmode)  (MLHandle request_handle, const MLCameraMetadataControlMode *data)

*  None  

Global [MLCameraMetadataSetControlSceneMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolscenemode)  (MLHandle request_handle, const MLCameraMetadataControlSceneMode *data)

*  None  

Global [MLCameraMetadataSetJpegGPSCoordinates](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpeggpscoordinates)  (MLHandle request_handle, const double data[3])

*  None  

Global [MLCameraMetadataSetJpegGPSTimestamp](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpeggpstimestamp)  (MLHandle request_handle, const int64_t *data)

*  None  

Global [MLCameraMetadataSetJpegQuality](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpegquality)  (MLHandle request_handle, const uint8_t *data)

*  None  

Global [MLCameraMetadataSetJpegThumbnailSize](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpegthumbnailsize)  (MLHandle request_handle, const MLCameraMetadataJpegThumbnailSize *data)

*  None  

Global [MLCameraMetadataSetLensFocusDistance](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetlensfocusdistance)  (MLHandle request_handle, const float *data)

*  None  

Global [MLCameraMetadataSetPostRawSensitivityBoost](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetpostrawsensitivityboost)  (MLHandle request_handle, const int32_t *data)

*  None  

Global [MLCameraMetadataSetSensorExposureTime](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetsensorexposuretime)  (MLHandle request_handle, const int64_t *data)

*  None  

Global [MLCameraMetadataSetSensorSensitivity](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetsensorsensitivity)  (MLHandle request_handle, const int32_t *data)

*  None  

Global [MLCameraPreCaptureAEAWB](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraprecaptureaeawb)  (MLCameraContext context)

*  None  

Global [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture)  (MLCameraContext context, const [MLCameraCaptureConfig](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) *config, MLHandle *out_request_handle)

*  None  

Global [MLCameraSetCaptureCallbacks](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetcapturecallbacks)  (MLCameraContext context, const [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) *capture_callbacks, void *data)

*  None  

Global [MLCameraSetDeviceStatusCallbacks](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetdevicestatuscallbacks)  (MLCameraContext context, const [MLCameraDeviceStatusCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) *device_status_callbacks, void *data)

*  None  

Global [MLCameraUpdateCaptureSettings](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraupdatecapturesettings)  (MLCameraContext context)

*  None  

Global [MLControllerCreateEx](/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollercreateex)  (const [MLControllerConfiguration](/api-ref/api/Modules/group___controller/struct_m_l_controller_configuration.md) *mode, MLHandle *out_handle)

*  None  

Global [MLControllerDestroy](/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollerdestroy)  (MLHandle tracker)

*  None  

Global [MLControllerGetState](/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollergetstate)  (MLHandle handle, struct [MLControllerSystemState](/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state.md) *out_state)

*  None  

Global [MLControllerGetStateEx](/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollergetstateex)  (MLHandle handle, [MLControllerSystemStateEx](/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md) *out_state)

*  None  

Global [MLCVCameraGetFramePose](/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#mlresult-mlcvcameragetframepose)  (MLHandle camera_handle, MLHandle head_handle, MLCVCameraID id, MLTime camera_timestamp, [MLTransform](/api-ref/api/Modules/group___common/struct_m_l_transform.md) *out_transform)

*  None  

Global [MLCVCameraTrackingCreate](/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#mlresult-mlcvcameratrackingcreate)  (MLHandle *out_handle)

*  android.permission.CAMERA (protection level: dangerous)  

Global [MLCVCameraTrackingDestroy](/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#mlresult-mlcvcameratrackingdestroy)  (MLHandle camera_handle)

*  None  

Global [MLDepthCameraCapabilityFilterInit](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcameracapabilityfilterinit)  ([MLDepthCameraCapabilityFilter](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md) *inout_handle)

*  None  

Global [MLDepthCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect)  (const [MLDepthCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) *settings, MLHandle *out_handle)

*  com.magicleap.permission.DEPTH_CAMERA (protection level: dangerous)  

Global [MLDepthCameraDisconnect](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameradisconnect)  (MLHandle handle)

*  None  

Global [MLDepthCameraGetCapabilities](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities)  (MLHandle handle, const [MLDepthCameraCapabilityFilter](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md) *filter, [MLDepthCameraCapabilityList](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md) *out_caps)

*  None  

Global [MLDepthCameraGetLatestDepthData](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetlatestdepthdata)  (MLHandle handle, uint64_t timeout_ms, [MLDepthCameraData](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) *out_data)

*  None  

Global [MLDepthCameraReleaseCapabilities](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcamerareleasecapabilities)  (MLHandle handle, [MLDepthCameraCapabilityList](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md) *out_caps)

*  None  

Global [MLDepthCameraReleaseDepthData](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcamerareleasedepthdata)  (MLHandle handle, [MLDepthCameraData](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) *depth_camera_data)

*  None  

Global [MLDepthCameraSettingsInit](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcamerasettingsinit)  ([MLDepthCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) *inout_handle)

*  None  

Global [MLDepthCameraUpdateSettings](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraupdatesettings)  (MLHandle handle, const [MLDepthCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) *settings)

*  None  

Global [MLEyeCalibrationCreateClient](/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mlresult-mleyecalibrationcreateclient)  (MLHandle *out_handle)

*  None  

Global [MLEyeCalibrationDestroyClient](/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mlresult-mleyecalibrationdestroyclient)  (MLHandle handle)

*  None  

Global [MLEyeCalibrationGetState](/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mlresult-mleyecalibrationgetstate)  (MLHandle handle, [MLEyeCalibrationState](/api-ref/api/Modules/group___eye_calibration/struct_m_l_eye_calibration_state.md) *out_state)

*  None  

Global [MLEyeCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameraconnect)  (const [MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) *settings, MLHandle *out_handle)

*  com.magicleap.permission.EYE_CAMERA (protection level: dangerous)  

Global [MLEyeCameraDisconnect](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameradisconnect)  (MLHandle handle)

*  None  

Global [MLEyeCameraGetLatestCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameragetlatestcameradata)  (MLHandle handle, uint64_t timeout_ms, [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) *out_data)

*  None  

Global [MLEyeCameraReleaseCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecamerareleasecameradata)  (MLHandle handle, [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) *eye_camera_data)

*  None  

Global [MLEyeCameraSettingsInit](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#void-mleyecamerasettingsinit)  ([MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) *inout_settings)

*  None  

Global [MLEyeCameraUpdateSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameraupdatesettings)  (MLHandle handle, const [MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) *settings)

*  None  

Global [MLEyeTrackingCreate](/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackingcreate)  (MLHandle *out_handle)

*  com.magicleap.permission.EYE_TRACKING (protection level: dangerous)  

Global [MLEyeTrackingDestroy](/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackingdestroy)  (MLHandle eye_tracker)

*  None  

Global [MLEyeTrackingGetStateEx](/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackinggetstateex)  (MLHandle eye_tracker, [MLEyeTrackingStateEx](/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md) *out_state)

*  None  

Global [MLEyeTrackingGetStaticData](/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackinggetstaticdata)  (MLHandle eye_tracker, [MLEyeTrackingStaticData](/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_static_data.md) *out_data)

*  None  

Global [MLFacialExpressionCreateClient](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressioncreateclient)  (const [MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) *settings, MLHandle *out_handle)

*  com.magicleap.permission.FACIAL_EXPRESSION (protection level: dangerous)  

Global [MLFacialExpressionDestroyClient](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressiondestroyclient)  (MLHandle handle)

*  None  

Global [MLFacialExpressionEyeDataInit](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressioneyedatainit)  ([MLFacialExpressionEyeData](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) *inout_eye_data)

*  None  

Global [MLFacialExpressionGetEyeData](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressiongeteyedata)  (MLHandle handle, [MLFacialExpressionEyeData](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) *out_eye_data)

*  None  

Global [MLFacialExpressionGetResultString](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#const-char-mlfacialexpressiongetresultstring)  (MLResult result)

*  None  

Global [MLFacialExpressionSettingsInit](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressionsettingsinit)  ([MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) *inout_settings)

*  None  

Global [MLFacialExpressionUpdateSettings](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressionupdatesettings)  (MLHandle handle, const [MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) *settings)

*  None  

Global [MLGazeRecognitionCreate](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitioncreate)  (MLHandle *out_handle)

*  com.magicleap.permission.EYE_TRACKING (protection level: dangerous)  

Global [MLGazeRecognitionDestroy](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiondestroy)  (MLHandle handle)

*  None  

Global [MLGazeRecognitionGetState](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstate)  (MLHandle handle, [MLGazeRecognitionState](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) *out_state)

*  None  

Global [MLGazeRecognitionGetStaticData](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata)  (MLHandle handle, [MLGazeRecognitionStaticData](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) *out_data)

*  None  

Global [MLGazeRecognitionStateInit](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstateinit)  ([MLGazeRecognitionState](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) *inout_state)

*  None  

Global [MLGazeRecognitionStaticDataInit](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstaticdatainit)  ([MLGazeRecognitionStaticData](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) *inout_state)

*  None  

Global [MLGestureClassificationCreate](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationcreate)  (MLHandle *out_handle)

*  com.magicleap.permission.HAND_TRACKING (protection level: normal)  

Global [MLGestureClassificationDestroy](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationdestroy)  (MLHandle handle)

*  None  

Global [MLGestureClassificationGetData](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetdata)  (MLHandle handle, [MLGestureClassificationData](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_data.md) *out_data)

*  None  

Global [MLGestureClassificationGetStaticData](/api-ref/api/Modules/group___gesture_classification/group___gesture_classification.md#mlresult-mlgestureclassificationgetstaticdata)  (MLHandle handle, [MLGestureClassificationStaticData](/api-ref/api/Modules/group___gesture_classification/struct_m_l_gesture_classification_static_data.md) *out_data)

*  None  

Global [MLGetResultString](/api-ref/api/Modules/group___platform/group___platform.md#const-char-mlgetresultstring)  (MLResult result_code)

*  None  

Global [MLGetVersion](/api-ref/api/Modules/group___platform/group___platform.md#mlversion-mlgetversion)  ()

*  None  

Global [MLGetVersionName](/api-ref/api/Modules/group___platform/group___platform.md#const-char-mlgetversionname)  ()

*  None  

Global [MLGlobalGetResultString](/api-ref/api/Modules/group___platform/group___platform.md#const-char-mlglobalgetresultstring)  (MLResult result_code)

*  None  

Global [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex)  (MLHandle graphics_client, const [MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) *params, [MLGraphicsFrameInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md) *out_frame_info)

*  None  

Global [MLGraphicsCreateClientGL](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicscreateclientgl)  (const [MLGraphicsOptions](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md) *options, MLHandle opengl_context, MLHandle *out_graphics_client)

*  None  

Global [MLGraphicsCreateClientVk](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicscreateclientvk)  (const [MLGraphicsOptions](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md) *options, const VkInstance vulkan_instance, const VkPhysicalDevice vulkan_physical_device, const VkDevice vulkan_logical_device, MLHandle *out_graphics_client)

*  None  

Global [MLGraphicsDestroyClient](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsdestroyclient)  (MLHandle *inout_graphics_client)

*  None  

Global [MLGraphicsEnableBlobCacheGL](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsenableblobcachegl)  (const char *filename, uint32_t max_entry_bytes, uint32_t max_total_bytes)

*  None  

Global [MLGraphicsEndFrame](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsendframe)  (MLHandle graphics_client, MLHandle handle)

*  None  

Global [MLGraphicsEnumerateRequiredVkDeviceExtensionsForMediaHandleImport](/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlgraphicsenumeraterequiredvkdeviceextensionsformediahandleimport)  (VkExtensionProperties *out_required_extension_properties, uint32_t *out_extension_property_count)

*  None  

Global [MLGraphicsFrameParamsExInit](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeparamsexinit)  ([MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) *inout_frame_params)

*  None  

Global [MLGraphicsGetClientPerformanceInfo](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclientperformanceinfo)  (MLHandle graphics_client, [MLGraphicsClientPerformanceInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md) *out_info)

*  None  

Global [MLGraphicsGetClipExtentsEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclipextentsex)  (MLHandle graphics_client, const [MLGraphicsClipExtentsParams](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_params.md) *params, [MLGraphicsClipExtentsInfoArrayEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md) *out_array)

*  None  

Global [MLGraphicsGetRenderTargets](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetrendertargets)  (MLHandle graphics_client, [MLGraphicsRenderTargetsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md) *out_targets)

*  None  

Global [MLGraphicsGLFormatFromMLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#uint32-t-mlgraphicsglformatfrommlsurfaceformat)  (MLSurfaceFormat format)

*  None  

Global [MLGraphicsImportVkImageFromMediaHandle](/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlgraphicsimportvkimagefrommediahandle)  (const VkDevice vulkan_logical_device, uint64_t media_handle, [MLGraphicsImportedMediaSurface](/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md) *out_imported_surface_info)

*  None  

Global [MLGraphicsMLSurfaceFormatFromGLFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#mlsurfaceformat-mlgraphicsmlsurfaceformatfromglformat)  (uint32_t format)

*  None  

Global [MLGraphicsMLSurfaceFormatFromVkFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#mlsurfaceformat-mlgraphicsmlsurfaceformatfromvkformat)  (const VkFormat format)

*  None  

Global [MLGraphicsSetGlobalDimmer](/api-ref/api/Files/ml__graphics_8h.md#mlresult-mlgraphicssetglobaldimmer)  (MLHandle graphics_client, float dimmer_value)

*  None  

Global [MLGraphicsSignalSyncObjectGL](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicssignalsyncobjectgl)  (MLHandle graphics_client, MLHandle sync_object)

*  None  

Global [MLGraphicsVkFormatFromMLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#vkformat-mlgraphicsvkformatfrommlsurfaceformat)  (const MLSurfaceFormat format)

*  None  

Global [MLHandleIsValid](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid)  (MLHandle handle)

*  None  

Global [MLHandTrackingCreate](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreate)  (MLHandle *out_handle)

*  com.magicleap.permission.HAND_TRACKING (protection level: normal)  

Global [MLHandTrackingCreateEx](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingcreateex)  (const [MLHandTrackingSettings](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) *settings, MLHandle *out_handle)

*  com.magicleap.permission.HAND_TRACKING (protection level: normal)  

Global [MLHandTrackingDestroy](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingdestroy)  (MLHandle hand_tracker)

*  None  

Global [MLHandTrackingGetData](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetdata)  (MLHandle hand_tracker, [MLHandTrackingData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_data.md) *out_data)

*  None  

Global [MLHandTrackingGetStaticData](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackinggetstaticdata)  (MLHandle hand_tracker, [MLHandTrackingStaticData](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_static_data.md) *out_data)

*  None  

Global [MLHandTrackingUpdateSettings](/api-ref/api/Modules/group___hand_tracking/group___hand_tracking.md#mlresult-mlhandtrackingupdatesettings)  (MLHandle hand_tracker, const [MLHandTrackingSettings](/api-ref/api/Modules/group___hand_tracking/struct_m_l_hand_tracking_settings.md) *settings)

*  None  

Global [MLHeadsetFitCreateClient](/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#mlresult-mlheadsetfitcreateclient)  (MLHandle *out_handle)

*  None  

Global [MLHeadsetFitDestroyClient](/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#mlresult-mlheadsetfitdestroyclient)  (MLHandle handle)

*  None  

Global [MLHeadsetFitGetState](/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#mlresult-mlheadsetfitgetstate)  (MLHandle handle, [MLHeadsetFitState](/api-ref/api/Modules/group___headset_fit/struct_m_l_headset_fit_state.md) *out_state)

*  None  

Global [MLHeadTrackingCreate](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackingcreate)  (MLHandle *out_handle)

*  None  

Global [MLHeadTrackingDestroy](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackingdestroy)  (MLHandle head_tracker)

*  None  

Global [MLHeadTrackingGetMapEvents](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetmapevents)  (MLHandle head_tracker, uint64_t *out_map_events)

*  None  

Global [MLHeadTrackingGetState](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstate)  (MLHandle head_tracker, [MLHeadTrackingState](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state.md) *out_state)

*  None  

Global [MLHeadTrackingGetStateEx](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstateex)  (MLHandle head_tracker, [MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) *out_state)

*  None  

Global [MLHeadTrackingGetStaticData](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#mlresult-mlheadtrackinggetstaticdata)  (MLHandle head_tracker, [MLHeadTrackingStaticData](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_static_data.md) *out_data)

*  None  

Global [MLHeadTrackingStateExInit](/api-ref/api/Modules/group___head_tracking/group___head_tracking.md#void-mlheadtrackingstateexinit)  ([MLHeadTrackingStateEx](/api-ref/api/Modules/group___head_tracking/struct_m_l_head_tracking_state_ex.md) *inout_info)

*  None  

Global [MLInputCreate](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputcreate)  (MLHandle *out_handle)

*  None  

Global [MLInputCreateCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputcreatecustomhapticspattern)  (MLHandle handle, [MLInputCustomHapticsInfo](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md) *info, uint32_t *inout_pattern_id)

*  None  

Global [MLInputDeleteCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputdeletecustomhapticspattern)  (MLHandle handle, uint32_t pattern_id)

*  None  

Global [MLInputDestroy](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputdestroy)  (MLHandle handle)

*  None  

Global [MLInputGetConnectedDevices](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputgetconnecteddevices)  (MLHandle handle, [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) *inout_devices)

*  None  

Global [MLInputGetControllerState](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputgetcontrollerstate)  (MLHandle handle, struct [MLInputControllerState](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md) out_state[MLInput_MaxControllers])

*  None  

Global [MLInputGetControllerStateEx](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputgetcontrollerstateex)  (MLHandle handle, [MLInputControllerStateEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md) out_state[MLInput_MaxControllers])

*  None  

Global [MLInputGetResultString](/api-ref/api/Modules/group___input/group___input.md#const-char-mlinputgetresultstring)  (MLResult result)

*  None  

Global [MLInputReleaseConnectedDevicesList](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputreleaseconnecteddeviceslist)  (MLHandle handle, [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) *devices)

*  None  

Global [MLInputSetControllerCallbacksEx](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputsetcontrollercallbacksex)  (MLHandle handle, const [MLInputControllerCallbacksEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md) *controller_callbacks, void *user_data)

*  None  

Global [MLInputStartControllerFeedbackBuzzCommand](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstartcontrollerfeedbackbuzzcommand)  (MLHandle handle, uint8_t controller_id, const [MLInputBuzzCommand](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md) *command)

*  None  

Global [MLInputStartControllerFeedbackCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstartcontrollerfeedbackcustomhapticspattern)  (MLHandle handle, uint8_t controller_id, uint32_t pattern_id)

*  None  

Global [MLInputStartControllerFeedbackPreDefinedPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstartcontrollerfeedbackpredefinedpattern)  (MLHandle handle, uint8_t controller_id, [MLInputPreDefinedPattern](/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md) *pattern)

*  None  

Global [MLInputStopControllerFeedback](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstopcontrollerfeedback)  (MLHandle handle, uint8_t controller_id)

*  None  

Global [MLMarkerTrackerCreate](/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#mlresult-mlmarkertrackercreate)  (const [MLMarkerTrackerSettings](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_settings.md) *settings, MLHandle *out_handle)

*  com.magicleap.permission.MARKER_TRACKING (protection level: normal)  

Global [MLMarkerTrackerDestroy](/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#mlresult-mlmarkertrackerdestroy)  (MLHandle tracker_handle)

*  None  

Global [MLMarkerTrackerGetResult](/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#mlresult-mlmarkertrackergetresult)  (MLHandle tracker_handle, [MLMarkerTrackerResultArray](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result_array.md) *out_data)

*  None  

Global [MLMarkerTrackerReleaseResult](/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#mlresult-mlmarkertrackerreleaseresult)  ([MLMarkerTrackerResultArray](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result_array.md) *data)

*  None  

Global [MLMarkerTrackerUpdateSettings](/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#mlresult-mlmarkertrackerupdatesettings)  (MLHandle tracker_handle, const [MLMarkerTrackerSettings](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_settings.md) *tracker_settings)

*  None  

Global [MLMediaCCParserCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparsercreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaCCParserDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparserdestroy)  (MLHandle cc_handle)

*  None  

Global [MLMediaCCParserGetDisplayableEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparsergetdisplayableex)  (MLHandle cc_handle, const uint8_t *subtitle_data, int32_t subtitle_data_size, const [MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md) **out_cc_seg)

*  None  

Global [MLMediaCCParserParse](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparserparse)  (MLHandle cc_handle, const uint8_t *subtitle_data, uint32_t subtitle_data_size)

*  None  

Global [MLMediaCCParserSetDisplayChangedCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparsersetdisplaychangedcallback)  (MLHandle cc_handle, MLMediaCCParserDisplayChangedCallback on_display_changed_callback, void *data)

*  None  

Global [MLMediaCea708ParserCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parsercreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaCea708ParserDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parserdestroy)  (MLHandle cc_handle)

*  None  

Global [MLMediaCea708ParserParse](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parserparse)  (MLHandle cc_handle, const uint8_t *subtitle_data, uint32_t subtitle_data_size)

*  None  

Global [MLMediaCea708ParserSetEmitEventCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parsersetemiteventcallback)  (MLHandle cc_handle, MLMediaCea708ParserEmitEventCallback on_emit_event_callback, void *data)

*  None  

Global [MLMediaCodecBitrateModesRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecbitratemodesrelease)  (MLMediaCodecBitrateMode *bitrate_modes)

*  None  

Global [MLMediaCodecConfigure](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecconfigure)  (MLHandle handle, MLHandle format_handle, MLHandle surface_handle, MLHandle crypto_handle)

*  None  

Global [MLMediaCodecCreateCodec](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreatecodec)  (MLMediaCodecCreation method, MLMediaCodecType type, const char *name_str, MLHandle *out_handle)

*  None  

Global [MLMediaCodecCreateCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreatecryptoinfo)  (const [MLMediaCodecCryptoInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md) *crypto_info, MLHandle *out_crypto_info_handle)

*  None  

Global [MLMediaCodecCreateInputSurface](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreateinputsurface)  (MLHandle handle, MLHandle *out_input_surface_handle)

*  None  

Global [MLMediaCodecDequeueInputBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueinputbuffer)  (MLHandle handle, int64_t timeout_us, int64_t *out_buffer_index)

*  None  

Global [MLMediaCodecDequeueOutputBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueoutputbuffer)  (MLHandle handle, [MLMediaCodecBufferInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_buffer_info.md) *out_buffer_info, int64_t timeout_us, int64_t *out_buffer_index)

*  None  

Global [MLMediaCodecDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdestroy)  (MLHandle handle)

*  None  

Global [MLMediaCodecDestroyInputSurface](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdestroyinputsurface)  (MLHandle handle, MLHandle input_surface_handle)

*  None 

Global [MLMediaCodecFlush](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecflush)  (MLHandle handle)

*  None  

Global [MLMediaCodecGetInputBufferPointer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetinputbufferpointer)  (MLHandle handle, int64_t buffer_index, uint8_t **out_buffer_ptr, size_t *out_buffer_size)

*  None  

Global [MLMediaCodecGetInputFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetinputformat)  (MLHandle handle, MLHandle *out_format_handle)

*  None  

Global [MLMediaCodecGetName](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetname)  (MLHandle handle, char *out_name)

*  None  

Global [MLMediaCodecGetOutputBufferPointer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetoutputbufferpointer)  (MLHandle handle, int64_t buffer_index, const uint8_t **out_buffer_ptr, size_t *out_buffer_size)

*  None  

Global [MLMediaCodecGetOutputFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetoutputformat)  (MLHandle handle, MLHandle *out_format_handle)

*  None  

Global [MLMediaCodecListColorFormatsRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistcolorformatsrelease)  (uint32_t *color_formats)

*  None  

Global [MLMediaCodecListCountCodecs](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistcountcodecs)  (uint64_t *out_codec_count)

*  None  

Global [MLMediaCodecListGetCapabilityFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcapabilityflag)  (uint64_t index, const char *mime, MLMediaCodecListCapabilityFlag *out_capability_flag)

*  None  

Global [MLMediaCodecListGetCodecByName](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcodecbyname)  (const char *name, int64_t *out_index)

*  None  

Global [MLMediaCodecListGetCodecByType](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcodecbytype)  (const char *type, bool is_encoder, uint64_t start_index, int64_t *out_index)

*  None  

Global [MLMediaCodecListGetCodecName](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcodecname)  (uint64_t index, char *out_name)

*  None  

Global [MLMediaCodecListGetMatchingCodecs](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetmatchingcodecs)  (const char *mime, bool is_encoder, MLMediaCodecListCodecTypeFlag flag, [MLMediaCodecListQueryResults](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) *out_matching_codecs)

*  None  

Global [MLMediaCodecListGetSecureCodecName](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsecurecodecname)  (const char *mime, bool is_decoder, char *out_name)

*  None  

Global [MLMediaCodecListGetSupportedBitrateModes](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedbitratemodes)  (uint64_t index, const char *mime, MLMediaCodecBitrateMode **out_bitrate_modes, size_t *out_bitrate_modes_size)

*  None  

Global [MLMediaCodecListGetSupportedColorFormats](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedcolorformats)  (uint64_t index, const char *mime, uint32_t **out_color_formats, size_t *out_color_formats_size)

*  None  

Global [MLMediaCodecListGetSupportedMimes](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedmimes)  (uint64_t index, [MLMediaCodecListQueryResults](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) *out_supported_mimes)

*  None  

Global [MLMediaCodecListGetSupportedProfileLevels](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels)  (uint64_t index, const char *mime, [MLMediaCodecListProfileLevel](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) **out_profile_levels, size_t *out_profile_levels_size)

*  None  

Global [MLMediaCodecListIsAdaptivePlaybackSupported](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisadaptiveplaybacksupported)  (uint64_t index, const char *mime, bool *out_supported)

*  None  

Global [MLMediaCodecListIsEncoder](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisencoder)  (uint64_t index, bool *out_val)

*  None  

Global [MLMediaCodecListIsIntraRefreshSupported](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisintrarefreshsupported)  (uint64_t index, const char *mime, bool *out_supported)

*  None  

Global [MLMediaCodecListIsSecurePlaybackSupported](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistissecureplaybacksupported)  (uint64_t index, const char *mime, bool *out_supported)

*  None  

Global [MLMediaCodecListIsSoftwareCodec](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistissoftwarecodec)  (const char *codec_name, bool *out_val)

*  None  

Global [MLMediaCodecListProfileLevelsRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistprofilelevelsrelease)  ([MLMediaCodecListProfileLevel](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) *profile_levels)

*  None  

Global [MLMediaCodecListQueryResultsRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistqueryresultsrelease)  ([MLMediaCodecListQueryResults](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) *query_results)

*  None  

Global [MLMediaCodecQueueInputBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueueinputbuffer)  (MLHandle handle, int64_t buffer_index, int64_t offset, size_t size, uint64_t time_us, int flags)

*  None  

Global [MLMediaCodecQueueSecureInputBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueuesecureinputbuffer)  (MLHandle handle, int64_t buffer_index, int64_t offset, MLHandle crypto_info_handle, uint64_t time_us, int flags)

*  None  

Global [MLMediaCodecReleaseCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreleasecryptoinfo)  (MLHandle crypto_info_handle)

*  None  

Global [MLMediaCodecReleaseOutputBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreleaseoutputbuffer)  (MLHandle handle, int64_t buffer_index, bool render)

*  None  

Global [MLMediaCodecReleaseOutputBufferAtTime](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreleaseoutputbufferattime)  (MLHandle handle, int64_t buffer_index, int64_t timestamp_ns)

*  None  

Global [MLMediaCodecReset](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreset)  (MLHandle handle)

*  None  

Global [MLMediaCodecSetCallbacksEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsetcallbacksex)  (MLHandle handle, [MLMediaCodecCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md) *callbacks, void *user_data)

*  None  

Global [MLMediaCodecSetOutputFrameListener](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsetoutputframelistener)  (MLHandle handle, [MLMediaCodecOutputFrameListener](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md) *callbacks, void *user_data)

*  None  

Global [MLMediaCodecStart](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecstart)  (MLHandle handle)

*  None  

Global [MLMediaCodecStop](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecstop)  (MLHandle handle)

*  None  

Global [MLMediaCryptoCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptocreate)  ([MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *data, MLHandle *out_handle)

*  None  

Global [MLMediaCryptoIsCryptoSchemeSupported](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptoiscryptoschemesupported)  ([MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, bool *out_supported)

*  None  

Global [MLMediaCryptoRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptorelease)  (MLHandle media_crypto)

*  None  

Global [MLMediaCryptoRequiresSecureDecoderComponent](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptorequiressecuredecodercomponent)  (const char *mime_type, bool *out_required)

*  None  

Global [MLMediaCryptoSetMediaDRMSession](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptosetmediadrmsession)  (MLHandle media_crypto, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id)

*  None  

Global [MLMediaDataSourceCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate)  (MLMediaDataSourceReadAt read_at, MLMediaDataSourceGetSize get_size, MLMediaDataSourceClose close, void *context, MLHandle *out_handle)

*  None  

Global [MLMediaDataSourceDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcedestroy)  (MLHandle media_data_source)

*  None  

Global [MLMediaDRMByteArrayAllocAndCopy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayallocandcopy)  (const uint8_t *copy_from, size_t size, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_array)

*  None  

Global [MLMediaDRMByteArrayAllocate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayallocate)  (size_t size, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_array)

*  None  

Global [MLMediaDRMByteArrayListRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearraylistrelease)  ([MLMediaDRMByteArrayList](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array_list.md) *array)

*  None  

Global [MLMediaDRMByteArrayRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease)  ([MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *array)

*  None  

Global [MLMediaDRMCloseSession](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmclosesession)  (MLHandle media_drm, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id)

*  None  

Global [MLMediaDRMCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmcreate)  ([MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, MLHandle *out_handle)

*  None  

Global [MLMediaDRMDecrypt](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmdecrypt)  (MLHandle media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMCryptoInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md) *crypto_key_param, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *input, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_output)

*  None  

Global [MLMediaDRMEncrypt](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmencrypt)  (MLHandle media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMCryptoInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md) *crypto_key_param, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *input, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_output)

*  None  

Global [MLMediaDRMGetKeyRequest](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetkeyrequest)  (MLHandle media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMKeyRequestInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_request_input_param.md) *key_request_param, [MLMediaDRMRequestMessage](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) *out_key_request)

*  None  

Global [MLMediaDRMGetPropertyByteArray](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetpropertybytearray)  (MLHandle media_drm, MLMediaDRMProperty property_name, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_property_value)

*  None  

Global [MLMediaDRMGetPropertyString](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetpropertystring)  (MLHandle media_drm, MLMediaDRMProperty property_name, char **out_property_value)

*  None  

Global [MLMediaDRMGetProvisionRequest](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetprovisionrequest)  (MLHandle media_drm, const char *cert_type, [MLMediaDRMRequestMessage](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) *out_provision_request)

*  None  

Global [MLMediaDRMGetSecureStop](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetsecurestop)  (MLHandle media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *ss_id, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_secure_stop)

*  None  

Global [MLMediaDRMGetSecureStops](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetsecurestops)  (MLHandle media_drm, [MLMediaDRMByteArrayList](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array_list.md) *out_secure_stops)

*  None  

Global [MLMediaDRMIsCryptoSchemeSupported](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmiscryptoschemesupported)  ([MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, const char *mime_type, bool *out_supported)

*  None  

Global [MLMediaDRMKeyValueArrayAdd](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmkeyvaluearrayadd)  (const [MLMediaDRMKeyValue](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value.md) *pair, [MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) *out_array)

*  None  

Global [MLMediaDRMKeyValueArrayAllocate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmkeyvaluearrayallocate)  (size_t size, [MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) *out_array)

*  None  

Global [MLMediaDRMKeyValueArrayRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmkeyvaluearrayrelease)  ([MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) *array)

*  None  

Global [MLMediaDRMOpenSession](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmopensession)  (MLHandle media_drm, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_session_id)

*  None  

Global [MLMediaDRMProvideKeyResponse](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovidekeyresponse)  (MLHandle media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *response, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_key_set_id)

*  None  

Global [MLMediaDRMProvideProvisionResponse](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovideprovisionresponse)  (MLHandle media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *response, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_certificate, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_wrapped_key)

*  None  

Global [MLMediaDRMQueryKeyStatus](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmquerykeystatus)  (MLHandle media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, [MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) *out_info_map)

*  None  

Global [MLMediaDRMRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmrelease)  (MLHandle media_drm)

*  None  

Global [MLMediaDRMReleaseAllSecureStops](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmreleaseallsecurestops)  (MLHandle media_drm)

*  None  

Global [MLMediaDRMReleaseSecureStops](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmreleasesecurestops)  (MLHandle media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *secure_stop)

*  None  

Global [MLMediaDRMRemoveKeys](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmremovekeys)  (MLHandle media_drm, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *key_set_id)

*  None  

Global [MLMediaDRMRequestMessageRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmrequestmessagerelease)  ([MLMediaDRMRequestMessage](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) *request)

*  None  

Global [MLMediaDRMRestoreKeys](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmrestorekeys)  (MLHandle media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *key_set_id)

*  None  

Global [MLMediaDRMSetOnEventListenerEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsetoneventlistenerex)  (MLHandle media_drm, [MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md) *callbacks, void *data)

*  None  

Global [MLMediaDRMSetPropertyByteArray](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsetpropertybytearray)  (MLHandle media_drm, MLMediaDRMProperty property_name, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *property_value)

*  None  

Global [MLMediaDRMSetPropertyString](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsetpropertystring)  (MLHandle media_drm, MLMediaDRMProperty property_name, const char *property_value)

*  None  

Global [MLMediaDRMSign](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsign)  (MLHandle media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMHMACInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md) *hmac_key_param, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *message, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_signature)

*  None  

Global [MLMediaDRMSignRSA](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsignrsa)  (MLHandle media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMRSAInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_r_s_a_input_param.md) *rsa_key_param, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *message, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *out_signature)

*  None  

Global [MLMediaDRMVerify](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmverify)  (MLHandle media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *session_id, const [MLMediaDRMHMACInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md) *hmac_key_param, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *message, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) *signature, bool *out_match)

*  None  

Global [MLMediaExtractorAdvance](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractoradvance)  (MLHandle handle)

*  None  

Global [MLMediaExtractorCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorcreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaExtractorDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractordestroy)  (MLHandle handle)

*  None  

Global [MLMediaExtractorGetCachedDuration](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetcachedduration)  (MLHandle handle, int64_t *out_cached_duration)

*  None  

Global [MLMediaExtractorGetDRMInitData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetdrminitdata)  (MLHandle handle, [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) drm_uuid, [MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) *out_drm_init_data)

*  None  

Global [MLMediaExtractorGetPSSHInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetpsshinfo)  (MLHandle handle, size_t index, MLMediaExtractorPSSHEntry *out_pssh_entry)

*  None  

Global [MLMediaExtractorGetPSSHInfoCount](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetpsshinfocount)  (MLHandle handle, size_t *out_index)

*  None  

Global [MLMediaExtractorGetSampleCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsamplecryptoinfo)  (MLHandle handle, MLHandle *out_info_handle)

*  None  

Global [MLMediaExtractorGetSampleFlags](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampleflags)  (MLHandle handle, int *out_sample_flags)

*  None  

Global [MLMediaExtractorGetSampleTime](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampletime)  (MLHandle handle, int64_t *out_sample_time)

*  None  

Global [MLMediaExtractorGetSampleTrackIndex](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampletrackindex)  (MLHandle handle, int64_t *out_track_index)

*  None  

Global [MLMediaExtractorGetTrackCount](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgettrackcount)  (MLHandle handle, uint64_t *out_track_count)

*  None  

Global [MLMediaExtractorGetTrackFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgettrackformat)  (MLHandle handle, size_t index, MLHandle *out_track_handle)

*  None  

Global [MLMediaExtractorHasCacheReachedEOS](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorhascachereachedeos)  (MLHandle handle)

*  None  

Global [MLMediaExtractorReadSampleData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreadsampledata)  (MLHandle handle, uint8_t *byte_buf, size_t buf_size, size_t offset, int64_t *out_data_size)

*  None  

Global [MLMediaExtractorReleaseCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasecryptoinfo)  (MLHandle handle, MLHandle *inout_info_handle)

*  None  

Global [MLMediaExtractorReleaseDRMInitData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasedrminitdata)  (MLHandle handle, [MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) *drm_init_data)

*  None  

Global [MLMediaExtractorReleasePSSHInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasepsshinfo)  (MLHandle handle, MLMediaExtractorPSSHEntry *pssh_entry)

*  None  

Global [MLMediaExtractorSeekTo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorseekto)  (MLHandle handle, int64_t time_us, MLMediaSeekMode mode)

*  None  

Global [MLMediaExtractorSelectTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorselecttrack)  (MLHandle handle, size_t index)

*  None  

Global [MLMediaExtractorSetDataSourceForFD](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforfd)  (MLHandle handle, int fd, int64_t offset, int64_t length)

*  None  

Global [MLMediaExtractorSetDataSourceForPath](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforpath)  (MLHandle handle, const char *path)

*  None  

Global [MLMediaExtractorSetDataSourceForURI](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforuri)  (MLHandle handle, const char *uri)

*  android.permission.INTERNET (protection level: normal)  

Global [MLMediaExtractorSetDataSourceForURIWithHeaders](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforuriwithheaders)  (MLHandle handle, const char *uri, const char **headers, size_t len)

*  android.permission.INTERNET (protection level: normal)  

Global [MLMediaExtractorSetMediaDataSource](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetmediadatasource)  (MLHandle handle, MLHandle media_data_source)

*  None  

Global [MLMediaExtractorUnselectTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorunselecttrack)  (MLHandle handle, size_t index)

*  None  

Global [MLMediaFormatCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaFormatCreateAudio](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreateaudio)  (const char *mime_type, int sample_rate, int channel_count, MLHandle *out_handle)

*  None  

Global [MLMediaFormatCreateCopy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatecopy)  (MLHandle handle, MLHandle *out_handle)

*  None  

Global [MLMediaFormatCreateSubtitle](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatesubtitle)  (const char *mime_type, const char *language, MLHandle *out_handle)

*  None  

Global [MLMediaFormatCreateVideo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatevideo)  (const char *mime_type, int width, int height, MLHandle *out_handle)

*  None  

Global [MLMediaFormatDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatdestroy)  (MLHandle handle)

*  None  

Global [MLMediaFormatGetKeyByteBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeybytebuffer)  (MLHandle handle, MLMediaFormatKey name, [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) *out_buffer)

*  None  

Global [MLMediaFormatGetKeySize](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeysize)  (MLHandle handle, MLMediaFormatKey name, size_t *out_size)

*  None  

Global [MLMediaFormatGetKeyString](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeystring)  (MLHandle handle, MLMediaFormatKey name, char *out_string)

*  None  

Global [MLMediaFormatGetKeyValueFloat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeyvaluefloat)  (MLHandle handle, MLMediaFormatKey name, float *out_key)

*  None  

Global [MLMediaFormatGetKeyValueInt32](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeyvalueint32)  (MLHandle handle, MLMediaFormatKey name, int32_t *out_key)

*  None  

Global [MLMediaFormatGetKeyValueInt64](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeyvalueint64)  (MLHandle handle, MLMediaFormatKey name, int64_t *out_key)

*  None  

Global [MLMediaFormatKeyByteBufferRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatkeybytebufferrelease)  (MLHandle handle, [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) *buffer)

*  None  

Global [MLMediaFormatObjectToString](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatobjecttostring)  (MLHandle handle, char *out_string)

*  None  

Global [MLMediaFormatSetKeyByteBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeybytebuffer)  (MLHandle handle, MLMediaFormatKey name, const [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) *buffer)

*  None  

Global [MLMediaFormatSetKeyFloat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeyfloat)  (MLHandle handle, MLMediaFormatKey name, float key_value)

*  None  

Global [MLMediaFormatSetKeyInt32](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeyint32)  (MLHandle handle, MLMediaFormatKey name, int32_t key_value)

*  None  

Global [MLMediaFormatSetKeyInt64](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeyint64)  (MLHandle handle, MLMediaFormatKey name, int64_t key_value)

*  None  

Global [MLMediaFormatSetKeySize](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeysize)  (MLHandle handle, MLMediaFormatKey name, size_t key_size)

*  None  

Global [MLMediaFormatSetKeyString](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeystring)  (MLHandle handle, MLMediaFormatKey name, const char *key_value)

*  None  

Global [MLMediaMuxerAddTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxeraddtrack)  (MLHandle media_muxer, MLHandle media_format, size_t *out_track_index)

*  None  

Global [MLMediaMuxerConfigure](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerconfigure)  (MLHandle media_muxer, MLMediaMuxerOutputFormat format, const char *path)

*  None  

Global [MLMediaMuxerCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxercreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaMuxerGetSupportedMimes](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedmimes)  (MLHandle media_muxer, MLMediaMuxerOutputFormat format, const char *const *out_mime_list[], size_t *out_mime_list_size)

*  None  

Global [MLMediaMuxerGetSupportedOutputFormats](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedoutputformats)  (MLHandle media_muxer, const MLMediaMuxerOutputFormat *out_format_list[], size_t *out_format_list_size)

*  None  

Global [MLMediaMuxerRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerrelease)  (MLHandle media_muxer)

*  None  

Global [MLMediaMuxerSetLocation](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxersetlocation)  (MLHandle media_muxer, float latitude, float longitude)

*  None  

Global [MLMediaMuxerSetOrientationHint](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxersetorientationhint)  (MLHandle media_muxer, int32_t degrees)

*  None  

Global [MLMediaMuxerStart](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstart)  (MLHandle media_muxer)

*  None  

Global [MLMediaMuxerStop](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstop)  (MLHandle media_muxer)

*  None  

Global [MLMediaMuxerWriteSampleData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerwritesampledata)  (MLHandle media_muxer, const [MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) *data)

*  None  

Global [MLMediaPlayerAddTimedTextSourceForFD](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayeraddtimedtextsourceforfd)  (MLHandle media_player, int32_t fd, int64_t offset, int64_t length, const char *mime_type)

*  None  

Global [MLMediaPlayerAddTimedTextSourceForURI](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayeraddtimedtextsourceforuri)  (MLHandle media_player, const char *uri, const char *mime_type)

*  None  

Global [MLMediaPlayerCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayercreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaPlayerDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerdestroy)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerGetAudioHandle](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetaudiohandle)  (MLHandle media_player, MLHandle *out_handle)

*  None  

Global [MLMediaPlayerGetBufferingSettings](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetbufferingsettings)  (MLHandle media_player, [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) *out_buf_settings)

*  None  

Global [MLMediaPlayerGetBufferingUpdate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetbufferingupdate)  (MLHandle media_player, int32_t *out_percentage)

*  None  

Global [MLMediaPlayerGetCurrentPosition](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetcurrentposition)  (MLHandle media_player, int32_t *out_msec)

*  None  

Global [MLMediaPlayerGetDefaultBufferingSettings](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetdefaultbufferingsettings)  (MLHandle media_player, [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) *out_buf_settings)

*  None  

Global [MLMediaPlayerGetDuration](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetduration)  (MLHandle media_player, int32_t *out_msec)

*  None  

Global [MLMediaPlayerGetError](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergeterror)  (MLHandle media_player, MLResult *out_result)

*  None  

Global [MLMediaPlayerGetInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetinfo)  (MLHandle media_player, int32_t *out_code, int32_t *out_extra)

*  None  

Global [MLMediaPlayerGetMetadata](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetmetadata)  (MLHandle media_player, int64_t *out_time, int32_t *out_size, uint8_t **out_buffer)

*  None  

Global [MLMediaPlayerGetMetrics](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetmetrics)  (MLHandle media_player, [MLMediaPlayerMetrics](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_metrics.md) *out_metrics)

*  None  

Global [MLMediaPlayerGetSubtitleEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetsubtitleex)  (MLHandle media_player, [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md) **out_subtitle_data)

*  None  

Global [MLMediaPlayerGetTimedText](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettimedtext)  (MLHandle media_player, const char **out_text, int32_t *out_start, int32_t *out_end)

*  None  

Global [MLMediaPlayerGetTrackCount](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettrackcount)  (MLHandle media_player, uint32_t *out_track_count)

*  None  

Global [MLMediaPlayerGetTrackDRMInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettrackdrminfo)  (MLHandle media_player, const [MLMediaPlayerTrackInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_info.md) *track_info, [MLMediaPlayerTrackDRMInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md) **out_drm_info)

*  None  

Global [MLMediaPlayerGetTrackLanguage](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettracklanguage)  (MLHandle media_player, uint32_t track, char **out_track_language)

*  None  

Global [MLMediaPlayerGetTrackMediaFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettrackmediaformat)  (MLHandle media_player, uint32_t track, MLHandle *out_media_format)

*  None  

Global [MLMediaPlayerGetTrackType](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettracktype)  (MLHandle media_player, uint32_t track, MLMediaPlayerTrackType *out_track_type)

*  None  

Global [MLMediaPlayerGetTTMLData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetttmldata)  (MLHandle media_player, MLHandle timed_text, [MLTTMLData](/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md) **out_ttml_data)

*  None  

Global [MLMediaPlayerGetVideoSize](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetvideosize)  (MLHandle media_player, int32_t *out_width, int32_t *out_height)

*  None  

Global [MLMediaPlayerGetWebVTTData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetwebvttdata)  (MLHandle media_player, MLHandle timed_text, [MLWebVTTData](/api-ref/api/Modules/group___media_player/struct_m_l_web_v_t_t_data.md) **out_webvtt_data)

*  None  

Global [MLMediaPlayerOnMediaTimedTextUpdateCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayeronmediatimedtextupdatecallback)  )(MLHandle media_player, MLHandle timed_text, void *data)

*  None  

Global [MLMediaPlayerPause](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpause)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerPollStates](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpollstates)  (MLHandle media_player, uint16_t mask, uint16_t *out_polled_states)

*  None  

Global [MLMediaPlayerPrepare](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerprepare)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerPrepareAsync](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerprepareasync)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerPrepareTrackDRM](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpreparetrackdrm)  (MLHandle media_player, const [MLMediaPlayerTrackDRMSessionInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md) *drm_session_info)

*  None  

Global [MLMediaPlayerReleaseDRM](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerreleasedrm)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerReleaseSubtitleEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerreleasesubtitleex)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerReset](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerreset)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerResetAsync](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerresetasync)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerSeekTo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerseekto)  (MLHandle media_player, int msec, MLMediaSeekMode mode)

*  None  

Global [MLMediaPlayerSelectTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerselecttrack)  (MLHandle media_player, uint32_t track)

*  None  

Global [MLMediaPlayerSetBufferingSettings](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetbufferingsettings)  (MLHandle media_player, [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) buf_settings)

*  None  

Global [MLMediaPlayerSetDataSourceForFD](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetdatasourceforfd)  (MLHandle media_player, int32_t fd)

*  None  

Global [MLMediaPlayerSetDataSourceForPath](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetdatasourceforpath)  (MLHandle media_player, const char *path)

*  None  

Global [MLMediaPlayerSetDataSourceForURI](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetdatasourceforuri)  (MLHandle media_player, const char *uri)

*  android.permission.INTERNET (protection level: normal)  

Global [MLMediaPlayerSetEventCallbacksEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerseteventcallbacksex)  (MLHandle media_player, const [MLMediaPlayerEventCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md) *callbacks, void *data)

*  None  

Global [MLMediaPlayerSetLooping](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetlooping)  (MLHandle media_player, bool loop)

*  None  

Global [MLMediaPlayerSetMediaDataSource](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetmediadatasource)  (MLHandle media_player, MLHandle media_data_source)

*  None  

Global [MLMediaPlayerSetMediaStreamSource](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetmediastreamsource)  (MLHandle media_player, MLHandle media_stream_source)

*  None  

Global [MLMediaPlayerSetNextPlayer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetnextplayer)  (MLHandle media_player, MLHandle next_media_player)

*  None  

Global [MLMediaPlayerSetOffsetDataSourceForFD](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetoffsetdatasourceforfd)  (MLHandle media_player, int32_t fd, int64_t offset, int64_t length)

*  None  

Global [MLMediaPlayerSetOnMediaSubtitleUpdateCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetonmediasubtitleupdatecallback)  (MLHandle media_player, MLMediaPlayerOnMediaSubtitleUpdateCallback on_media_subtitle_callback, void *data)

*  None  

Global [MLMediaPlayerSetOnMediaTimedTextUpdateCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetonmediatimedtextupdatecallback)  (MLHandle media_player, MLMediaPlayerOnMediaTimedTextUpdateCallback on_media_timed_text_callback, void *data)

*  None  

Global [MLMediaPlayerSetRemoteDataSourceForURI](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetremotedatasourceforuri)  (MLHandle media_player, const char *uri, char **headers, size_t len)

*  android.permission.INTERNET (protection level: normal)  

Global [MLMediaPlayerSetSurface](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetsurface)  (MLHandle media_player, MLHandle surface)

*  None  

Global [MLMediaPlayerSetVideoScalingMode](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetvideoscalingmode)  (MLHandle media_player, MLMediaPlayerVideoScalingMode mode)

*  None  

Global [MLMediaPlayerSetVolume](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetvolume)  (MLHandle media_player, float volume)

*  None  

Global [MLMediaPlayerStart](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerstart)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerStop](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerstop)  (MLHandle media_player)

*  None  

Global [MLMediaPlayerUnselectTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerunselecttrack)  (MLHandle media_player, uint32_t track)

*  None  

Global [MLMediaRecorderCreate](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordercreate)  (MLHandle *out_handle)

*  None  

Global [MLMediaRecorderDestroy](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderdestroy)  (MLHandle media_recorder)

*  None  

Global [MLMediaRecorderGetInputSurface](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordergetinputsurface)  (MLHandle media_recorder, MLHandle *out_input_surface_handle)

*  None  

Global [MLMediaRecorderGetMaxAmplitude](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordergetmaxamplitude)  (MLHandle media_recorder, int32_t *inout_max_amp)

*  None  

Global [MLMediaRecorderPrepare](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare)  (MLHandle media_recorder, MLHandle format)

*  None  

Global [MLMediaRecorderReleaseInputSurface](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreleaseinputsurface)  (MLHandle media_recorder, MLHandle input_surface_handle)

*  None 

Global [MLMediaRecorderReset](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreset)  (MLHandle media_recorder)

*  None  

Global [MLMediaRecorderSetAudioEncoder](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetaudioencoder)  (MLHandle media_recorder, MLMediaRecorderAudioEncoder in_audio_encoder)

*  None  

Global [MLMediaRecorderSetAudioSource](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetaudiosource)  (MLHandle media_recorder, MLMediaRecorderAudioSource in_audio_source)

*  android.permission.RECORD_AUDIO (protection level: dangerous)  

Global [MLMediaRecorderSetEventCallbacks](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderseteventcallbacks)  (MLHandle media_recorder, const [MLMediaRecorderEventCallbacks](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) *callbacks, void *data)

*  None  

Global [MLMediaRecorderSetGeoLocation](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetgeolocation)  (MLHandle media_recorder, int64_t in_latitude10000, int64_t in_longitude10000)

*  None  

Global [MLMediaRecorderSetMaxDuration](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetmaxduration)  (MLHandle media_recorder, int32_t in_max_duration_msec)

*  None  

Global [MLMediaRecorderSetMaxFileSize](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetmaxfilesize)  (MLHandle media_recorder, int64_t in_max_file_size)

*  None  

Global [MLMediaRecorderSetOutputFileForFD](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputfileforfd)  (MLHandle media_recorder, int32_t fd)

*  None  

Global [MLMediaRecorderSetOutputFileForPath](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputfileforpath)  (MLHandle media_recorder, const char *path)

*  None  

Global [MLMediaRecorderSetOutputFormat](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat)  (MLHandle media_recorder, MLMediaRecorderOutputFormat in_format)

*  None  

Global [MLMediaRecorderSetVideoEncoder](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetvideoencoder)  (MLHandle media_recorder, MLMediaRecorderVideoEncoder in_video_encoder)

*  None  

Global [MLMediaRecorderSetVideoSource](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetvideosource)  (MLHandle media_recorder, MLMediaRecorderVideoSource in_video_source)

*  None  

Global [MLMediaRecorderStart](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderstart)  (MLHandle media_recorder)

*  None  

Global [MLMediaRecorderStop](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderstop)  (MLHandle media_recorder)

*  None  

Global [MLMediaResultGetString](/api-ref/api/Modules/group___media_error/group___media_error.md#const-char-mlmediaresultgetstring)  (MLResult code)

*  None  

Global [MLMediaStreamSourceCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate)  (MLMediaStreamSourceOnBufferAvailable on_buffer_available, void *context, MLHandle *out_handle)

*  None  

Global [MLMediaStreamSourceDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcedestroy)  (MLHandle media_stream_source)

*  None  

Global [MLMediaStreamSourceGetBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcegetbuffer)  (MLHandle media_stream_source, size_t *out_id, uint8_t **out_ptr, size_t *out_size)

*  None  

Global [MLMediaStreamSourcePushBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcepushbuffer)  (MLHandle media_stream_source, size_t id, size_t size)

*  None  

Global [MLMediaStreamSourcePushEOS](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcepusheos)  (MLHandle media_stream_source)

*  None  

Global [MLMeshingCreateClient](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingcreateclient)  (MLHandle *out_client_handle, const [MLMeshingSettings](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) *settings)

*  com.magicleap.permission.SPATIAL_MAPPING (protection level: dangerous)  

Global [MLMeshingDestroyClient](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingdestroyclient)  (MLHandle client_handle)

*  None  

Global [MLMeshingFreeResource](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingfreeresource)  (MLHandle client_handle, MLHandle *request_handle)

*  None  

Global [MLMeshingGetMeshInfoResult](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshinggetmeshinforesult)  (MLHandle client_handle, MLHandle request_handle, [MLMeshingMeshInfo](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_info.md) *out_info)

*  None  

Global [MLMeshingGetMeshResult](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshinggetmeshresult)  (MLHandle client_handle, MLHandle request_handle, [MLMeshingMesh](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md) *out_mesh)

*  None  

Global [MLMeshingInitSettings](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshinginitsettings)  ([MLMeshingSettings](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) *out_settings)

*  None  

Global [MLMeshingPopulateDepth](/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlmeshingpopulatedepth)  (MLHandle client_handle, const [MLMeshingDepthBufferInfo](/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md) *info, const [MLMeshingMesh](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md) *meshes)

*  None  

Global [MLMeshingRequestMesh](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingrequestmesh)  (MLHandle client_handle, const [MLMeshingMeshRequest](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_request.md) *request, MLHandle *out_request_handle)

*  None  

Global [MLMeshingRequestMeshInfo](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingrequestmeshinfo)  (MLHandle client_handle, const [MLMeshingExtents](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_extents.md) *extents, MLHandle *out_request_handle)

*  None  

Global [MLMeshingUpdateSettings](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingupdatesettings)  (MLHandle client_handle, const [MLMeshingSettings](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) *settings)

*  None  

Global [MLNativeSurfaceAcquireHardwareBufferFromNativeBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfaceacquirehardwarebufferfromnativebuffer)  (MLHandle handle, MLHandle native_buffer, struct AHardwareBuffer **out_hardware_buffer, uint32_t *out_width, uint32_t *out_height)

*  None  

Global [MLNativeSurfaceAcquireNextAvailableFrame](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfaceacquirenextavailableframe)  (MLHandle handle, MLHandle *out_native_buffer)

*  None  

Global [MLNativeSurfaceCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate)  (const [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) *config_values, MLHandle *out_handle)

*  None  

Global [MLNativeSurfaceGetFrameCropRect](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframecroprect)  (MLHandle handle, [MLRecti](/api-ref/api/Modules/group___common/struct_m_l_recti.md) *out_crop_rect)

*  None  

Global [MLNativeSurfaceGetFrameNumber](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframenumber)  (MLHandle handle, uint64_t *out_number)

*  None  

Global [MLNativeSurfaceGetFrameQueueBufferTimestamp](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframequeuebuffertimestamp)  (MLHandle handle, int64_t *out_timestamp_ns)

*  None  

Global [MLNativeSurfaceGetFrameTimestamp](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframetimestamp)  (MLHandle handle, int64_t *out_timestamp_ns)

*  None  

Global [MLNativeSurfaceGetFrameTransformationMatrix](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframetransformationmatrix)  (MLHandle handle, float out_mtx[16])

*  None  

Global [MLNativeSurfaceGetNativeWindow](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetnativewindow)  (MLHandle handle, MLHandle *out_native_window, int32_t *out_format)

*  None  

Global [MLNativeSurfaceRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacerelease)  (MLHandle handle)

*  None  

Global [MLNativeSurfaceReleaseFrame](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacereleaseframe)  (MLHandle handle, MLHandle native_buffer)

*  None  

Global [MLNativeSurfaceReleaseNativeWindow](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacereleasenativewindow)  (MLHandle handle, MLHandle native_window)

*  None  

Global [MLNativeSurfaceSetOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacesetonframeavailablecallback)  (MLHandle handle, const [MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) *callback, void *user_data)

*  None  

Global [MLNativeSurfaceTextureAttachToGLContext](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetextureattachtoglcontext)  (MLHandle handle, uint32_t texture_id)

*  None  

Global [MLNativeSurfaceTextureCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturecreate)  (const [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) *config_values, MLNativeSurfaceTextureBackend backend, MLHandle *out_handle)

*  None  

Global [MLNativeSurfaceTextureDetachFromGLContext](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturedetachfromglcontext)  (MLHandle handle)

*  None  

Global [MLNativeSurfaceTextureGetTimestamp](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturegettimestamp)  (MLHandle handle, int64_t *out_timestamp_ns)

*  None  

Global [MLNativeSurfaceTextureGetTransformationMatrix](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturegettransformationmatrix)  (MLHandle handle, float out_matrix[16])

*  None  

Global [MLNativeSurfaceTextureRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturerelease)  (MLHandle handle)

*  None  

Global [MLNativeSurfaceTextureSetOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturesetonframeavailablecallback)  (MLHandle handle, const [MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) *callback, void *user_data)

*  None  

Global [MLNativeSurfaceTextureUpdateTexImage](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetextureupdateteximage)  (MLHandle handle)

*  None  

Global [MLOcclusionCreateClient](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusioncreateclient)  (const [MLOcclusionSettings](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) *settings, MLHandle *out_client_handle)

*  com.magicleap.permission.SPATIAL_MAPPING (protection level: dangerous)  

Global [MLOcclusionDestroyClient](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusiondestroyclient)  (MLHandle client_handle)

*  None  

Global [MLOcclusionGetLatestMesh](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusiongetlatestmesh)  (MLHandle handle, const [MLOcclusionMeshQuery](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh_query.md) *mesh_query, [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) *out_mesh_data)

*  None  

Global [MLOcclusionMeshInit](/api-ref/api/Modules/group___occlusion/group___occlusion.md#void-mlocclusionmeshinit)  ([MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) *inout_mesh)

*  None  

Global [MLOcclusionMeshQueryInit](/api-ref/api/Modules/group___occlusion/group___occlusion.md#void-mlocclusionmeshqueryinit)  ([MLOcclusionMeshQuery](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh_query.md) *inout_mesh_query)

*  None  

Global [MLOcclusionReleaseMesh](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusionreleasemesh)  (MLHandle handle, [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) *mesh_data)

*  None  

Global [MLOcclusionSettingsInit](/api-ref/api/Modules/group___occlusion/group___occlusion.md#void-mlocclusionsettingsinit)  ([MLOcclusionSettings](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) *inout_settings)

*  None  

Global [MLOcclusionUpdateSettings](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusionupdatesettings)  (MLHandle handle, const [MLOcclusionSettings](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) *settings)

*  None  

Global [MLPerceptionGetPredictedSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetpredictedsnapshot)  (MLTime timestamp, MLSnapshot **out_snapshot)

*  None  

Global [MLPerceptionGetSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetsnapshot)  (MLSnapshot **out_snapshot)

*  None  

Global [MLPerceptionInitSettings](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptioninitsettings)  ([MLPerceptionSettings](/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) *out_settings)

*  None  

Global [MLPerceptionReleaseSnapshot](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionreleasesnapshot)  (MLSnapshot *snap)

*  None  

Global [MLPerceptionShutdown](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionshutdown)  ()

*  None  

Global [MLPerceptionStartup](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionstartup)  ([MLPerceptionSettings](/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) *settings)

*  None  

Global [MLPlanesCreate](/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanescreate)  (MLHandle *out_handle)

*  com.magicleap.permission.SPATIAL_MAPPING (protection level: dangerous)  

Global [MLPlanesDestroy](/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesdestroy)  (MLHandle planes_tracker)

*  None  

Global [MLPlanesQueryBegin](/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesquerybegin)  (MLHandle planes_tracker, const [MLPlanesQuery](/api-ref/api/Modules/group___planes/struct_m_l_planes_query.md) *query, MLHandle *out_handle)

*  None  

Global [MLPlanesQueryGetResultsWithBoundaries](/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesquerygetresultswithboundaries)  (MLHandle planes_tracker, MLHandle planes_query, [MLPlane](/api-ref/api/Modules/group___planes/struct_m_l_plane.md) *out_results, uint32_t *out_num_results, [MLPlaneBoundariesList](/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) *out_boundaries)

*  None  

Global [MLPlanesReleaseBoundariesList](/api-ref/api/Modules/group___planes/group___planes.md#mlresult-mlplanesreleaseboundarieslist)  (MLHandle planes_tracker, [MLPlaneBoundariesList](/api-ref/api/Modules/group___planes/struct_m_l_plane_boundaries_list.md) *plane_boundaries)

*  None  

Global [MLPlatformGetAPILevel](/api-ref/api/Modules/group___platform/group___platform.md#mlresult-mlplatformgetapilevel)  (uint32_t *out_api_level)

*  None  

Global [MLPowerManagerCreate](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagercreate)  (MLPowerManagerComponent component, MLHandle *out_handle)

*  none  

Global [MLPowerManagerDestroy](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerdestroy)  (MLHandle handle)

*  None  

Global [MLPowerManagerGetAvailablePowerStates](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailablepowerstates)  (MLHandle handle, const [MLPowerManagerPowerStateInfo](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) *in_info, [MLPowerManagerPowerStateData](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) *out_states)

*  None  

Global [MLPowerManagerGetAvailableProperties](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetavailableproperties)  (MLHandle handle, const [MLPowerManagerPropertyTypeInfo](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_info.md) *in_info, [MLPowerManagerPropertyTypeData](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md) *out_properties)

*  None  

Global [MLPowerManagerGetComponentProperties](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetcomponentproperties)  (MLHandle handle, const [MLPowerManagerPropertyInfo](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_info.md) *in_info, [MLPowerManagerPropertyData](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) *out_properties)

*  None 

Global [MLPowerManagerGetPowerState](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagergetpowerstate)  (MLHandle handle, const [MLPowerManagerPowerStateInfo](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_info.md) *in_info, [MLPowerManagerPowerStateData](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) *out_state)

*  None 

Global [MLPowerManagerGetResultString](/api-ref/api/Modules/group___power_manager/group___power_manager.md#const-char-mlpowermanagergetresultstring)  (MLResult result_code)

*  None  

Global [MLPowerManagerReleasePowerStateData](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepowerstatedata)  (MLHandle handle, [MLPowerManagerPowerStateData](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_data.md) *power_states)

*  None  

Global [MLPowerManagerReleasePropertyData](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepropertydata)  (MLHandle handle, [MLPowerManagerPropertyData](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_data.md) *properties)

*  None  

Global [MLPowerManagerReleasePropertyTypeData](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagerreleasepropertytypedata)  (MLHandle handle, [MLPowerManagerPropertyTypeData](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_property_type_data.md) *properties)

*  None  

Global [MLPowerManagerSetCallbacks](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagersetcallbacks)  (MLHandle handle, [MLPowerManagerCallbacks](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_callbacks.md) *cb, void *user_data)

*  None  

Global [MLPowerManagerSetPowerState](/api-ref/api/Modules/group___power_manager/group___power_manager.md#mlresult-mlpowermanagersetpowerstate)  (MLHandle handle, const [MLPowerManagerPowerStateSettings](/api-ref/api/Modules/group___power_manager/struct_m_l_power_manager_power_state_settings.md) *settings)

*  None 

Global [MLSnapshotGetPoseInBase](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgetposeinbase)  (const MLSnapshot *snapshot, const [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) *base_id, const [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) *id, [MLPose](/api-ref/api/Modules/group___common/struct_m_l_pose.md) *out_pose)

*  None  

Global [MLSnapshotGetResultString](/api-ref/api/Modules/group___perception/group___perception.md#const-char-mlsnapshotgetresultstring)  (MLResult result_code)

*  None  

Global [MLSnapshotGetStaticData](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgetstaticdata)  ([MLSnapshotStaticData](/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md) *out_static_data)

*  None  

Global [MLSnapshotGetTransform](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgettransform)  (const MLSnapshot *snapshot, const [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) *id, [MLTransform](/api-ref/api/Modules/group___common/struct_m_l_transform.md) *out_transform)

*  None  

Global [MLSnapshotGetTransformWithDerivatives](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgettransformwithderivatives)  (const MLSnapshot *snapshot, const [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) *id, [MLTransform](/api-ref/api/Modules/group___common/struct_m_l_transform.md) *out_transform, [MLTransformDerivatives](/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md) *out_derivatives)

*  None  

Global [MLSpaceCallbacksInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacecallbacksinit)  ([MLSpaceCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) *inout_callbacks)

*  None  

Global [MLSpaceExportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceexportinfoinit)  ([MLSpaceExportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) *inout_info)

*  None  

Global [MLSpaceExportSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceexportspace)  (const [MLSpaceExportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) *export_info, [MLSpaceExportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) *out_data)

*  com.magicleap.permission.SPACE_IMPORT_EXPORT (protection level: dangerous)  

Global [MLSpaceGetLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacegetlocalizationresult)  (MLHandle handle, [MLSpaceLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) *out_localization_result)

*  None  

Global [MLSpaceGetResultString](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#const-char-mlspacegetresultstring)  (MLResult result)

*  None  

Global [MLSpaceGetSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacegetspacelist)  (MLHandle handle, const [MLSpaceQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) *query_filter, [MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) *out_space_list)

*  None  

Global [MLSpaceImportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit)  ([MLSpaceImportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) *inout_info)

*  None  

Global [MLSpaceImportSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceimportspace)  (const [MLSpaceImportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) *import_info, [MLSpaceImportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_out_data.md) *out_data)

*  com.magicleap.permission.SPACE_IMPORT_EXPORT (protection level: dangerous)  

Global [MLSpaceInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit)  ([MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) *inout_info)

*  None  

Global [MLSpaceListInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelistinit)  ([MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) *inout_info)

*  None  

Global [MLSpaceLocalizationInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationinfoinit)  ([MLSpaceLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) *inout_info)

*  None  

Global [MLSpaceLocalizationResultInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit)  ([MLSpaceLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) *inout_info)

*  None  

Global [MLSpaceManagerCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate)  (const [MLSpaceManagerSettings](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) *settings, MLHandle *out_handle)

*  com.magicleap.permission.SPACE_MANAGER (protection level: normal)  

Global [MLSpaceManagerDestroy](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagerdestroy)  (MLHandle handle)

*  None  

Global [MLSpaceManagerSettingsInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacemanagersettingsinit)  ([MLSpaceManagerSettings](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) *inout_info)

*  None  

Global [MLSpaceQueryFilterInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacequeryfilterinit)  ([MLSpaceQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) *inout_query_filter)

*  None  

Global [MLSpaceReleaseExportData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleaseexportdata)  ([MLSpaceExportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) *space_data)

*  None  

Global [MLSpaceReleaseSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleasespacelist)  (MLHandle handle, [MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) *space_list)

*  None  

Global [MLSpaceRequestLocalization](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacerequestlocalization)  (MLHandle handle, const [MLSpaceLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) *localization_info)

*  None  

Global [MLSpatialAnchorCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorcreate)  (MLHandle handle, const [MLSpatialAnchorCreateInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) *create_info, [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) *out_anchor)

*  None  

Global [MLSpatialAnchorCreateInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorcreateinfoinit)  ([MLSpatialAnchorCreateInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_create_info.md) *inout_info)

*  None  

Global [MLSpatialAnchorDelete](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchordelete)  (MLHandle handle, [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) anchor_id)

*  None  

Global [MLSpatialAnchorGetLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorgetlocalizationinfo)  (MLHandle handle, [MLSpatialAnchorLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) *out_localization_info)

*  None  

Global [MLSpatialAnchorGetResultString](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#const-char-mlspatialanchorgetresultstring)  (MLResult result)

*  None  

Global [MLSpatialAnchorInit](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorinit)  ([MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) *inout_anchor)

*  None  

Global [MLSpatialAnchorLocalizationInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorlocalizationinfoinit)  ([MLSpatialAnchorLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_localization_info.md) *inout_info)

*  None  

Global [MLSpatialAnchorPublish](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorpublish)  (MLHandle handle, [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) anchor_id)

*  None  

Global [MLSpatialAnchorQueryCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerycreate)  (MLHandle handle, const [MLSpatialAnchorQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) *query_filter, MLHandle *out_query_handle, uint32_t *out_results_count)

*  None  

Global [MLSpatialAnchorQueryDestroy](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerydestroy)  (MLHandle handle, MLHandle query_handle)

*  None  

Global [MLSpatialAnchorQueryFilterInit](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#void-mlspatialanchorqueryfilterinit)  ([MLSpatialAnchorQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor_query_filter.md) *inout_query_filter)

*  None  

Global [MLSpatialAnchorQueryGetResult](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorquerygetresult)  (MLHandle handle, MLHandle query_handle, uint32_t first_index, uint32_t last_index, [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) *out_results)

*  None  

Global [MLSpatialAnchorTrackerCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchortrackercreate)  (MLHandle *out_handle)

*  com.magicleap.permission.SPATIAL_ANCHOR (protection level: normal)  

Global [MLSpatialAnchorTrackerDestroy](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchortrackerdestroy)  (MLHandle handle)

*  None  

Global [MLSpatialAnchorUpdate](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md#mlresult-mlspatialanchorupdate)  (MLHandle handle, const [MLSpatialAnchor](/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/struct_m_l_spatial_anchor.md) *anchor)

*  None  

Global [MLSystemNotificationManagerCreate](/api-ref/api/Modules/group___system_notification_manager/group___system_notification_manager.md#mlresult-mlsystemnotificationmanagercreate)  (MLHandle *out_handle)

*  com.magicleap.permission.SYSTEM_NOTIFICATION (protection level: normal)  

Global [MLSystemNotificationManagerDestroy](/api-ref/api/Modules/group___system_notification_manager/group___system_notification_manager.md#mlresult-mlsystemnotificationmanagerdestroy)  (MLHandle handle)

*  None  

Global [MLSystemNotificationManagerSetNotifications](/api-ref/api/Modules/group___system_notification_manager/group___system_notification_manager.md#mlresult-mlsystemnotificationmanagersetnotifications)  (MLHandle handle, bool suppress)

*  None  

Global [MLTimeConvertMLTimeToSystemTime](/api-ref/api/Modules/group___time/group___time.md#mlresult-mltimeconvertmltimetosystemtime)  (MLTime ml_time, struct timespec *out_timespec_time)

*  None  

Global [MLTimeConvertSystemTimeToMLTime](/api-ref/api/Modules/group___time/group___time.md#mlresult-mltimeconvertsystemtimetomltime)  (const struct timespec *timespec_time, MLTime *out_ml_time)

*  None  

Global [MLVoiceGetResultString](/api-ref/api/Modules/group___input/group___input.md#const-char-mlvoicegetresultstring)  (MLResult result)

*  None  

Global [MLVoiceIntentCallbacksInit](/api-ref/api/Modules/group___input/group___input.md#void-mlvoiceintentcallbacksinit)  ([MLVoiceIntentCallbacks](/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md) *inout_callbacks)

*  None  

Global [MLVoiceIntentConfigureSettings](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentconfiguresettings)  (MLHandle handle, const [MLVoiceIntentSettings](/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md) *voice_settings)

*  None  

Global [MLVoiceIntentCreate](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentcreate)  (MLHandle *out_handle)

*  com.magicleap.permission.VOICE_INPUT (protection level: dangerous)  

Global [MLVoiceIntentDestroy](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentdestroy)  (MLHandle handle)

*  None  

Global [MLVoiceIntentIsEnabled](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentisenabled)  (MLHandle handle, bool *out_is_enabled)

*  None  

Global [MLVoiceIntentSetCallbacks](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentsetcallbacks)  (MLHandle handle, const [MLVoiceIntentCallbacks](/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md) *voice_callbacks, void *user_data)

*  None  

Global [MLVoiceIntentSettingsInit](/api-ref/api/Modules/group___input/group___input.md#void-mlvoiceintentsettingsinit)  ([MLVoiceIntentSettings](/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md) *inout_settings)

*  None  

Global [MLVoiceIntentStartProcessing](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentstartprocessing)  (MLHandle handle)

*  None  

Global [MLVoiceIntentStopProcessing](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentstopprocessing)  (MLHandle handle)

*  None  

Global [MLWebViewAcquireNextAvailableFrame](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewacquirenextavailableframe)  (MLHandle web_view, struct AHardwareBuffer **out_native_buffer)

*  None  

Global [MLWebViewCanGoBack](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcangoback)  (MLHandle web_view, bool *out_can_go_back)

*  None  

Global [MLWebViewCanGoForward](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcangoforward)  (MLHandle web_view, bool *out_can_go_forward)

*  None  

Global [MLWebViewClearCache](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewclearcache)  (MLHandle web_view)

*  None  

Global [MLWebViewCreate](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcreate)  (MLHandle *out_handle, const [MLWebViewSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md) *in_settings)

*  com.magicleap.permission.WEBVIEW (protection level: normal)  

Global [MLWebViewCursorStateInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewcursorstateinit)  ([MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) *inout_cursor_state)

*  None  

Global [MLWebViewDestroy](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewdestroy)  (MLHandle handle)

*  None  

Global [MLWebViewEventCallbacksInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebvieweventcallbacksinit)  ([MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) *inout_callback)

*  None  

Global [MLWebViewGetFrameTransformMatrix](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgetframetransformmatrix)  (MLHandle web_view, [MLMat4f](/api-ref/api/Modules/group___common/struct_m_l_mat4f.md) *out_matrix)

*  None  

Global [MLWebViewGetScrollOffset](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgetscrolloffset)  (MLHandle web_view, int32_t *out_x, int32_t *out_y)

*  None  

Global [MLWebViewGetScrollSize](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgetscrollsize)  (MLHandle web_view, int32_t *out_width, int32_t *out_height)

*  None  

Global [MLWebViewGetUrl](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgeturl)  (MLHandle web_view, uint32_t *inout_size, char *inout_url)

*  None  

Global [MLWebViewGetZoomFactor](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgetzoomfactor)  (MLHandle web_view, double *out_zoom_factor)

*  None  

Global [MLWebViewGoBack](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgoback)  (MLHandle web_view)

*  None  

Global [MLWebViewGoForward](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgoforward)  (MLHandle web_view)

*  None  

Global [MLWebViewGoTo](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgoto)  (MLHandle web_view, const char *url)

*  None  

Global [MLWebViewInjectChar](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectchar)  (MLHandle web_view, uint32_t char_utf32)

*  None  

Global [MLWebViewInjectKeyDown](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectkeydown)  (MLHandle web_view, int32_t key_code, uint32_t modifier_mask)

*  None  

Global [MLWebViewInjectKeyUp](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectkeyup)  (MLHandle web_view, int32_t key_code, uint32_t modifier_mask)

*  None  

Global [MLWebViewInjectMouseButtonDown](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectmousebuttondown)  (MLHandle web_view, const [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) *cursor_state)

*  None  

Global [MLWebViewInjectMouseButtonUp](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectmousebuttonup)  (MLHandle web_view, const [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) *cursor_state)

*  None  

Global [MLWebViewInjectMouseMove](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectmousemove)  (MLHandle web_view, const [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) *cursor_state)

*  None  

Global [MLWebViewProcessSettingsInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewprocesssettingsinit)  ([MLWebViewProcessSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md) *inout_settings)

*  None  

Global [MLWebViewReleaseFrame](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewreleaseframe)  (MLHandle web_view, struct AHardwareBuffer *native_buffer)

*  None  

Global [MLWebViewReload](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewreload)  (MLHandle web_view)

*  None  

Global [MLWebViewRemoveAllCookies](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewremoveallcookies)  (MLHandle web_view)

*  None  

Global [MLWebViewResetZoom](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewresetzoom)  (MLHandle web_view)

*  None  

Global [MLWebViewScrollBy](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewscrollby)  (MLHandle web_view, const int32_t x_pixels, const int32_t y_pixels)

*  None  

Global [MLWebViewSetEventCallbacks](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewseteventcallbacks)  (MLHandle web_view, const [MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) *callbacks)

*  None  

Global [MLWebViewSetProcessSettings](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewsetprocesssettings)  (const [MLWebViewProcessSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md) *settings)

*  None 

Global [MLWebViewSettingsInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewsettingsinit)  ([MLWebViewSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md) *inout_settings)

*  None  

Global [MLWebViewZoomIn](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewzoomin)  (MLHandle web_view)

*  None  

Global [MLWebViewZoomOut](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewzoomout)  (MLHandle web_view)

*  None  

Global [MLWorldCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect)  (const [MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) *settings, MLHandle *out_handle)

*  android.permission.CAMERA (protection level: dangerous)  

Global [MLWorldCameraDisconnect](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameradisconnect)  (MLHandle handle)

*  None  

Global [MLWorldCameraGetLatestWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameragetlatestworldcameradata)  (MLHandle handle, uint64_t timeout_ms, [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) **out_data)

*  None  

Global [MLWorldCameraReleaseCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcamerareleasecameradata)  (MLHandle handle, [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) *world_camera_data)

*  None  

Global [MLWorldCameraSettingsInit](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#void-mlworldcamerasettingsinit)  ([MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) *inout_handle)

*  None  

Global [MLWorldCameraUpdateSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraupdatesettings)  (MLHandle handle, const [MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) *settings)

*  None  

Global [MLZIGraphicsEnumerateRequiredVkDeviceExtensions](/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzigraphicsenumeraterequiredvkdeviceextensions)  (VkExtensionProperties *out_required_extension_properties, uint32_t *out_extension_property_count)

*  None  

Global [MLZIGraphicsEnumerateRequiredVkInstanceExtensions](/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzigraphicsenumeraterequiredvkinstanceextensions)  (VkExtensionProperties *out_required_extension_properties, uint32_t *out_extension_property_count)

*  None  

Global [MLZIIsServerConfigured](/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlziisserverconfigured)  (bool *out_is_configured)

*  None  

Global [MLZIPermissionsIsGranted](/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsisgranted)  (const char *permission_name)

*  Any  

Global [MLZIPermissionsRequest](/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsrequest)  (const char *permission_name)

*  None  

Global [MLZIPermissionsStart](/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsstart)  ()

*  None  

Global [MLZIPermissionsStop](/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsstop)  ()

*  None  

Global [MLZISetProgramLabel](/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzisetprogramlabel)  (const char *in_label)

*  None 


