---
title: Media Recorder
summary: apis for video and auido recording. 

---

# Media Recorder

APIs for video and auido recording.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLMediaRecorderOnInfo](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_info.md)**  |
| struct | **[MLMediaRecorderOnError](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_error.md)**  |
| struct | **[MLMediaRecorderEventCallbacks](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLMediaRecorderOnInfo](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_info.md) | **[MLMediaRecorderOnInfo](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#struct-mlmediarecorderoninfo)**  |
| typedef struct [MLMediaRecorderOnError](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_error.md) | **[MLMediaRecorderOnError](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#struct-mlmediarecorderonerror)**  |
| typedef struct [MLMediaRecorderEventCallbacks](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) | **[MLMediaRecorderEventCallbacks](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#struct-mlmediarecordereventcallbacks)**  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLMediaRecorderVideoSource](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideosource)** <br></br> { <br></br>[MLMediaRecorderVideoSource_Camera](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideosource-camera) = 1,<br></br> [MLMediaRecorderVideoSource_Ensure32Bits](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideosource-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaRecorderAudioSource](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudiosource)** <br></br> { <br></br>[MLMediaRecorderAudioSource_Voice](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudiosource-voice) = 0,<br></br> [MLMediaRecorderAudioSource_World](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudiosource-world) = 1,<br></br> [MLMediaRecorderAudioSource_Virtual](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudiosource-virtual) = 2,<br></br> [MLMediaRecorderAudioSource_Mixed](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudiosource-mixed) = 3,<br></br> [MLMediaRecorderAudioSource_Ensure32Bits](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudiosource-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaRecorderEvent](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderevent)** <br></br> { <br></br>[MLMediaRecorderEvent_Error](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderevent-error) = 1,<br></br> [MLMediaRecorderEvent_Info](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderevent-info) = 2,<br></br> [MLMediaRecorderTrackEvent_Error](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackevent-error) = 100,<br></br> [MLMediaRecorderTrackEvent_Info](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackevent-info) = 101,<br></br> [MLMediaRecorderTrackEvent_Ensure32Bits](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackevent-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaRecorderInfo](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderinfo)** <br></br> { <br></br>[MLMediaRecorderInfo_Unknown](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderinfo-unknown) = 1,<br></br> [MLMediaRecorderInfo_MaxDurationReached](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderinfo-maxdurationreached) = 800,<br></br> [MLMediaRecorderInfo_MaxFileSizeReached](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderinfo-maxfilesizereached) = 801,<br></br> [MLMediaRecorderInfo_MaxFileSizeApproaching](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderinfo-maxfilesizeapproaching) = 802,<br></br> [MLMediaRecorderTrackInfo_CompletionStatus](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackinfo-completionstatus) = 1000,<br></br> [MLMediaRecorderTrackInfo_ProgressInTime](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackinfo-progressintime) = 1001,<br></br> [MLMediaRecorderTrackInfo_Type](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackinfo-type) = 1002,<br></br> [MLMediaRecorderTrackInfo_DurationMs](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackinfo-durationms) = 1003,<br></br> [MLMediaRecorderTrackInfo_MaxChunkDurationMs](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackinfo-maxchunkdurationms) = 1004,<br></br> [MLMediaRecorderTrackInfo_EncodedFrames](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackinfo-encodedframes) = 1005,<br></br> [MLMediaRecorderTrackInfo_InterChunkTimeUs](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackinfo-interchunktimeus) = 1006,<br></br> [MLMediaRecorderTrackInfo_InitialDelayMs](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackinfo-initialdelayms) = 1007,<br></br> [MLMediaRecorderTrackInfo_StartOffsetMs](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackinfo-startoffsetms) = 1008,<br></br> [MLMediaRecorderTrackInfo_DataKBytes](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackinfo-datakbytes) = 1009,<br></br> [MLMediaRecorderTrackInfo_Ensure32Bits](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackinfo-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaRecorderError](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordererror)** <br></br> { <br></br>[MLMediaRecorderError_Unknown](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordererror-unknown) = 1,<br></br> [MLMediaRecorderError_ServerDied](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordererror-serverdied) = 2,<br></br> [MLMediaRecorderTrackError_General](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackerror-general) = 100,<br></br> [MLMediaRecorderError_VideoNoSyncFrame](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordererror-videonosyncframe) = 200,<br></br> [MLMediaRecorderTrackError_Ensure32Bits](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordertrackerror-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Video recorder error types.  |
| enum | **[MLMediaRecorderOutputFormat](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat)** <br></br> { <br></br>[MLMediaRecorderOutputFormat_DEFAULT](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-default) = 0,<br></br> [MLMediaRecorderOutputFormat_THREE_GPP](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-three-gpp) = 1,<br></br> [MLMediaRecorderOutputFormat_MPEG_4](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-mpeg-4) = 2,<br></br> [MLMediaRecorderOutputFormat_AMR_NB](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-amr-nb) = 3,<br></br> [MLMediaRecorderOutputFormat_AMR_WB](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-amr-wb) = 4,<br></br> [MLMediaRecorderOutputFormat_AAC_ADIF](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-aac-adif) = 5,<br></br> [MLMediaRecorderOutputFormat_AAC_ADTS](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-aac-adts) = 6,<br></br> [MLMediaRecorderOutputFormat_RTP_AVP](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-rtp-avp) = 7,<br></br> [MLMediaRecorderOutputFormat_MPEG2TS](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-mpeg2ts) = 8,<br></br> [MLMediaRecorderOutputFormat_WEBM](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-webm) = 9,<br></br> [MLMediaRecorderOutputFormat_HEIF](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-heif) = 10,<br></br> [MLMediaRecorderOutputFormat_OGG](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-ogg) = 11,<br></br> [MLMediaRecorderOutputFormat_Ensure32Bits](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaRecorderVideoEncoder](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder)** <br></br> { <br></br>[MLMediaRecorderVideoEncoder_Default](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder-default) = 0,<br></br> [MLMediaRecorderVideoEncoder_H263](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder-h263) = 1,<br></br> [MLMediaRecorderVideoEncoder_H264](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder-h264) = 2,<br></br> [MLMediaRecorderVideoEncoder_MPEG_4_SP](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder-mpeg-4-sp) = 3,<br></br> [MLMediaRecorderVideoEncoder_VP8](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder-vp8) = 4,<br></br> [MLMediaRecorderVideoEncoder_HEVC](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder-hevc) = 5,<br></br> [MLMediaRecorderVideoEncoder_Ensure32Bits](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaRecorderAudioEncoder](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder)** <br></br> { <br></br>[MLMediaRecorderAudioEncoder_Default](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder-default) = 0,<br></br> [MLMediaRecorderAudioEncoder_AMR_NB](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder-amr-nb) = 1,<br></br> [MLMediaRecorderAudioEncoder_AMR_WB](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder-amr-wb) = 2,<br></br> [MLMediaRecorderAudioEncoder_AAC](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder-aac) = 3,<br></br> [MLMediaRecorderAudioEncoder_HE_AAC](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder-he-aac) = 4,<br></br> [MLMediaRecorderAudioEncoder_AAC_ELD](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder-aac-eld) = 5,<br></br> [MLMediaRecorderAudioEncoder_VORBIS](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder-vorbis) = 6,<br></br> [MLMediaRecorderAudioEncoder_OPUS](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder-opus) = 7,<br></br> [MLMediaRecorderAudioEncoder_Ensure32Bits](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLMediaRecorderEventCallbacksInit](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-mlmediarecordereventcallbacksinit)**([MLMediaRecorderEventCallbacks](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) * inout_callbacks)<br></br>Initializes MediaRecorderEventCallbacks with default values.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderCreate](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordercreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new MediaRecorder object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderDestroy](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder)<br></br>Destroy a MediaRecorder object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetOutputFileForFD](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputfileforfd)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, int32_t fd)<br></br>Pass in the file descriptor of the file to be written.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetOutputFileForPath](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputfileforpath)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, const char * path)<br></br>Sets the path of the output file to be produced.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetEventCallbacks](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderseteventcallbacks)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, const [MLMediaRecorderEventCallbacks](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) * callbacks, void * data)<br></br>Sets the MediaRecorderListener object that will receive MediaRecorder notifications.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetVideoSource](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetvideosource)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLMediaRecorderVideoSource](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideosource) in_video_source)<br></br>Sets MediaRecorder default video source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetAudioSource](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetaudiosource)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLMediaRecorderAudioSource](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudiosource) in_audio_source)<br></br>Set MediaRecorder audio source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetOutputFormat](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLMediaRecorderOutputFormat](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat) in_format)<br></br>Sets the format of the output file produced during recording.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetVideoEncoder](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetvideoencoder)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLMediaRecorderVideoEncoder](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder) in_video_encoder)<br></br>Sets the video encoder to be used for recording.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetAudioEncoder](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetaudioencoder)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLMediaRecorderAudioEncoder](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder) in_audio_encoder)<br></br>Sets the audio encoder to be used for recording.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetMaxDuration](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetmaxduration)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, int32_t in_max_duration_msec)<br></br>Sets the maximum duration (in ms) of the recording session.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetMaxFileSize](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetmaxfilesize)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, int64_t in_max_file_size)<br></br>Sets the maximum filesize (in bytes) of the recording session.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetGeoLocation](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetgeolocation)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, int64_t in_latitude10000, int64_t in_longitude10000)<br></br>Sets the GEO location for recording.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderPrepare](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) format)<br></br>Prepares the recorder to begin capturing and encoding data for input mediaformat.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderStart](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderstart)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder)<br></br>Begins capturing and encoding data to the specified file.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderGetInputSurface](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordergetinputsurface)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_input_surface_handle)<br></br>Gets the input surface to record from when using SURFACE video source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderGetMaxAmplitude](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordergetmaxamplitude)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, int32_t * inout_max_amp)<br></br>Returns the maximum absolute amplitude that was sampled since the last call to this method.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderStop](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderstop)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder)<br></br>Stops recording.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderReleaseInputSurface](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreleaseinputsurface)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) input_surface_handle)<br></br>Release the surface that was returned by MLMediaRecorderGetInputSurface.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderReset](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreset)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder)<br></br>Restarts the MediaRecorder to its idle state.  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| uint32_t | **[track_id](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#uint32-t-track-id)**  |
| [MLMediaRecorderInfo](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderinfo) | **[info](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlmediarecorderinfo-info)**  |
| int | **[extra](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#int-extra)**  |
| void * | **[data](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-data)**  |
| uint32_t | **[track_id](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#uint32-t-track-id)**  |
| [MLMediaRecorderError](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordererror) | **[error](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlmediarecordererror-error)**  |
| int | **[extra](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#int-extra)**  |
| void * | **[data](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-data)**  |
| uint32_t | **[version](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#uint32-t-version)**  |
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnInfo *info) | **[on_info](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-on-info)** <br></br>MediaRecorder received a general info/warning message.  |
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnInfo *track_info) | **[on_track_info](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-on-track-info)** <br></br>MediaRecorder received a track-related info/warning message.  |
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnError *error) | **[on_error](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-on-error)** <br></br>MediaRecorder received a general error message.  |
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnError *track_error) | **[on_track_error](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-on-track-error)** <br></br>MediaRecorder received a track-related error message.  |

## Detailed Description

APIs for video and auido recording. 




**Shared Object:**
  * media_recorder.magicleap*




-----------
## Enums Documentation

### MLMediaRecorderVideoSource {#enums-mlmediarecordervideosource}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaRecorderVideoSource_Camera |  1| Camera video source. |
| MLMediaRecorderVideoSource_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Media recorder video source. 





-----------

### MLMediaRecorderAudioSource {#enums-mlmediarecorderaudiosource}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaRecorderAudioSource_Voice |  0| Recording voice. |
| MLMediaRecorderAudioSource_World |  1| Recording ambient sounds. |
| MLMediaRecorderAudioSource_Virtual |  2| Recording digital sounds. |
| MLMediaRecorderAudioSource_Mixed |  3| Mixed reality mode: digital + ambient. |
| MLMediaRecorderAudioSource_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Media recorder audio source. 





-----------

### MLMediaRecorderEvent {#enums-mlmediarecorderevent}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaRecorderEvent_Error |  1| Media recorder error. |
| MLMediaRecorderEvent_Info |  2| Media recorder info. |
| MLMediaRecorderTrackEvent_Error |  100| Media recorder track error. |
| MLMediaRecorderTrackEvent_Info |  101| Media recorder track info. |
| MLMediaRecorderTrackEvent_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Media recorder events. 





-----------

### MLMediaRecorderInfo {#enums-mlmediarecorderinfo}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaRecorderInfo_Unknown |  1| |
| MLMediaRecorderInfo_MaxDurationReached |  800| Max duration of the clip is reached. |
| MLMediaRecorderInfo_MaxFileSizeReached |  801| Max file size is reached. |
| MLMediaRecorderInfo_MaxFileSizeApproaching |  802| Max file size is approaching. |
| MLMediaRecorderTrackInfo_CompletionStatus |  1000| Next output file has started.The info about completion status. |
| MLMediaRecorderTrackInfo_ProgressInTime |  1001| The info about progress in time. |
| MLMediaRecorderTrackInfo_Type |  1002| Track info. |
| MLMediaRecorderTrackInfo_DurationMs |  1003| The info about track duration. |
| MLMediaRecorderTrackInfo_MaxChunkDurationMs |  1004| The time to measure the max chunk duration. |
| MLMediaRecorderTrackInfo_EncodedFrames |  1005| The info about encoded frames. |
| MLMediaRecorderTrackInfo_InterChunkTimeUs |  1006| The time to measure how well the audio and video track data interleaved. |
| MLMediaRecorderTrackInfo_InitialDelayMs |  1007| The time to measure system response. |
| MLMediaRecorderTrackInfo_StartOffsetMs |  1008| The time used to compensate for initial A/V sync. |
| MLMediaRecorderTrackInfo_DataKBytes |  1009| Total number of bytes of the media data. |
| MLMediaRecorderTrackInfo_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |








-----------

### MLMediaRecorderError {#enums-mlmediarecordererror}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaRecorderError_Unknown |  1| |
| MLMediaRecorderError_ServerDied |  2| |
| MLMediaRecorderTrackError_General |  100| |
| MLMediaRecorderError_VideoNoSyncFrame |  200| |
| MLMediaRecorderTrackError_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Video recorder error types. 





-----------

### MLMediaRecorderOutputFormat {#enums-mlmediarecorderoutputformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaRecorderOutputFormat_DEFAULT |  0| |
| MLMediaRecorderOutputFormat_THREE_GPP |  1| 3gpp format. |
| MLMediaRecorderOutputFormat_MPEG_4 |  2| MP4 format. |
| MLMediaRecorderOutputFormat_AMR_NB |  3| AMR NB. |
| MLMediaRecorderOutputFormat_AMR_WB |  4| AMR WB. |
| MLMediaRecorderOutputFormat_AAC_ADIF |  5| AAC_ADIF. |
| MLMediaRecorderOutputFormat_AAC_ADTS |  6| AAC_ADTS. |
| MLMediaRecorderOutputFormat_RTP_AVP |  7| Stream over a socket, limited to a single stream. |
| MLMediaRecorderOutputFormat_MPEG2TS |  8| H.264/AAC data encapsulated in MPEG2/TS. |
| MLMediaRecorderOutputFormat_WEBM |  9| VP8/VORBIS data in a WEBM container. |
| MLMediaRecorderOutputFormat_HEIF |  10| HEIC data in a HEIF container. |
| MLMediaRecorderOutputFormat_OGG |  11| Opus data in a OGG container. |
| MLMediaRecorderOutputFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |








-----------

### MLMediaRecorderVideoEncoder {#enums-mlmediarecordervideoencoder}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaRecorderVideoEncoder_Default |  0| |
| MLMediaRecorderVideoEncoder_H263 |  1| H263. This format has support for software encoder. |
| MLMediaRecorderVideoEncoder_H264 |  2| H264. This format has support for hardware encoder. |
| MLMediaRecorderVideoEncoder_MPEG_4_SP |  3| MPEG4 SP. This format has support for software encoder. |
| MLMediaRecorderVideoEncoder_VP8 |  4| VP8. This format has support for software encoder. |
| MLMediaRecorderVideoEncoder_HEVC |  5| HEVC. This format has support for hardware encoder. |
| MLMediaRecorderVideoEncoder_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |








-----------

### MLMediaRecorderAudioEncoder {#enums-mlmediarecorderaudioencoder}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaRecorderAudioEncoder_Default |  0| |
| MLMediaRecorderAudioEncoder_AMR_NB |  1| AMR NB. |
| MLMediaRecorderAudioEncoder_AMR_WB |  2| AMR WB. |
| MLMediaRecorderAudioEncoder_AAC |  3| AAC. |
| MLMediaRecorderAudioEncoder_HE_AAC |  4| HE AAC. |
| MLMediaRecorderAudioEncoder_AAC_ELD |  5| AAC ELD. |
| MLMediaRecorderAudioEncoder_VORBIS |  6| Vorbis. |
| MLMediaRecorderAudioEncoder_OPUS |  7| Opus. |
| MLMediaRecorderAudioEncoder_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |








-----------


## Types Documentation

### MLMediaRecorderOnInfo {#struct-mlmediarecorderoninfo}

```cpp
typedef struct MLMediaRecorderOnInfo MLMediaRecorderOnInfo;
```




[More Info](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_info.md)



-----------

### MLMediaRecorderOnError {#struct-mlmediarecorderonerror}

```cpp
typedef struct MLMediaRecorderOnError MLMediaRecorderOnError;
```




[More Info](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_error.md)



-----------

### MLMediaRecorderEventCallbacks {#struct-mlmediarecordereventcallbacks}

```cpp
typedef struct MLMediaRecorderEventCallbacks MLMediaRecorderEventCallbacks;
```




[More Info](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md)



-----------


## Functions Documentation

### MLMediaRecorderEventCallbacksInit {#void-mlmediarecordereventcallbacksinit}

```cpp
static inline void MLMediaRecorderEventCallbacksInit(
    MLMediaRecorderEventCallbacks * inout_callbacks
)
```

Initializes MediaRecorderEventCallbacks with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaRecorderEventCallbacks](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) * |inout_callbacks|Media Recorder Callback structure defined by [MLMediaRecorderEventCallbacks](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) that needs to be initialized. |




-----------

### MLMediaRecorderCreate {#mlresult-mlmediarecordercreate}

```cpp
MLResult MLMediaRecorderCreate(
    MLHandle * out_handle
)
```

Create a new MediaRecorder object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Handle to the new MediaRecorder object created. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Could not allocate internal MediaRecorder. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Passed out_handle was NULL. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MediaRecorder was created successfully.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaRecorderDestroy {#mlresult-mlmediarecorderdestroy}

```cpp
MLResult MLMediaRecorderDestroy(
    MLHandle media_recorder
)
```

Destroy a MediaRecorder object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder object to destroy.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MediaRecorder was destroyed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaRecorderSetOutputFileForFD {#mlresult-mlmediarecordersetoutputfileforfd}

```cpp
MLResult MLMediaRecorderSetOutputFileForFD(
    MLHandle media_recorder,
    int32_t fd
)
```

Pass in the file descriptor of the file to be written. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder instance. |
| int32_t |fd|The file descriptor for the file you want to write into.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Passed fd does no refer to a valid,open file descriptor or 'media_recorder' was NULL. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Data source was correctly set to passed file descriptor. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Call this after [MLMediaRecorderSetOutputFormat()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat) but before MLMediaRecorderprepare().




**API Level:**
  * 20




-----------

### MLMediaRecorderSetOutputFileForPath {#mlresult-mlmediarecordersetoutputfileforpath}

```cpp
MLResult MLMediaRecorderSetOutputFileForPath(
    MLHandle media_recorder,
    const char * path
)
```

Sets the path of the output file to be produced. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder instance. |
| const char * |path|The linux-style path of the file. Must be a valid and existing path.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Data source was correctly set to passed file path. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Call this after [MLMediaRecorderSetOutputFormat()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat) but before MLMediaRecorderprepare().




**API Level:**
  * 20




-----------

### MLMediaRecorderSetEventCallbacks {#mlresult-mlmediarecorderseteventcallbacks}

```cpp
MLResult MLMediaRecorderSetEventCallbacks(
    MLHandle media_recorder,
    const MLMediaRecorderEventCallbacks * callbacks,
    void * data
)
```

Sets the MediaRecorderListener object that will receive MediaRecorder notifications. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| const [MLMediaRecorderEventCallbacks](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) * |callbacks|Set of event callbacks. Can be set to NULL to unset the callbacks altogether. |
| void * |data|Custom data to be returned when any callback is fired.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The specified callbacks were successfully set/unset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaRecorderSetVideoSource {#mlresult-mlmediarecordersetvideosource}

```cpp
MLResult MLMediaRecorderSetVideoSource(
    MLHandle media_recorder,
    MLMediaRecorderVideoSource in_video_source
)
```

Sets MediaRecorder default video source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| [MLMediaRecorderVideoSource](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideosource) |in_video_source|Type of the MediaRecorderVideoSource.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found or in_video_source is not MLMediaRecorderVideoSource_Camera. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set default video source successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Cannot be called twice (without calling [MLMediaRecorderReset()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreset) in between) because it triggers internal initialization.

Current implementation supports only camera as video source from MediaRecorderVideoSource.





-----------

### MLMediaRecorderSetAudioSource {#mlresult-mlmediarecordersetaudiosource}

```cpp
MLResult MLMediaRecorderSetAudioSource(
    MLHandle media_recorder,
    MLMediaRecorderAudioSource in_audio_source
)
```

Set MediaRecorder audio source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| [MLMediaRecorderAudioSource](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudiosource) |in_audio_source|Type of the MediaRecorderAudioSource.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set audio source successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * android.permission.RECORD_AUDIO (protection level: dangerous) 


Cannot be called twice (without calling [MLMediaRecorderReset()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreset) in between) because it triggers internal initialization.




**API Level:**
  * 20




-----------

### MLMediaRecorderSetOutputFormat {#mlresult-mlmediarecordersetoutputformat}

```cpp
MLResult MLMediaRecorderSetOutputFormat(
    MLHandle media_recorder,
    MLMediaRecorderOutputFormat in_format
)
```

Sets the format of the output file produced during recording. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| [MLMediaRecorderOutputFormat](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat) |in_format|Type of the MLMediaRecorderOutputFormat.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set output format successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaRecorderSetVideoEncoder {#mlresult-mlmediarecordersetvideoencoder}

```cpp
MLResult MLMediaRecorderSetVideoEncoder(
    MLHandle media_recorder,
    MLMediaRecorderVideoEncoder in_video_encoder
)
```

Sets the video encoder to be used for recording. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| [MLMediaRecorderVideoEncoder](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder) |in_video_encoder|Type of the VideoEncoder to use.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set video encoder successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaResult_InvalidCodecParam|requested width height is not supported. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


If this method is not called, the output file will not contain an video track. Call this after [MLMediaRecorderSetOutputFormat()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat) and before [MLMediaRecorderPrepare()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare).

The video source is always set to camera by default.




**API Level:**
  * 20




-----------

### MLMediaRecorderSetAudioEncoder {#mlresult-mlmediarecordersetaudioencoder}

```cpp
MLResult MLMediaRecorderSetAudioEncoder(
    MLHandle media_recorder,
    MLMediaRecorderAudioEncoder in_audio_encoder
)
```

Sets the audio encoder to be used for recording. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| [MLMediaRecorderAudioEncoder](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder) |in_audio_encoder|Type of the MLMediaRecorderAudioEncoder to use.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set audio encoder successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


If this method is not called, the output file will not contain an audio track. Call this after [MLMediaRecorderSetOutputFormat()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat) and before [MLMediaRecorderPrepare()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare).




**API Level:**
  * 20




-----------

### MLMediaRecorderSetMaxDuration {#mlresult-mlmediarecordersetmaxduration}

```cpp
MLResult MLMediaRecorderSetMaxDuration(
    MLHandle media_recorder,
    int32_t in_max_duration_msec
)
```

Sets the maximum duration (in ms) of the recording session. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| int32_t |in_max_duration_msec|The maximum duration in ms (if zero or negative, disables the duration limit).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Max duration was successfully set. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Call this after [MLMediaRecorderSetOutputFormat()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat) and before [MLMediaRecorderPrepare()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare). After recording reaches the specified duration, a notification will be sent via the callback with a MLMediaRecorderInfo code of MLMediaRecorderInfo_MaxDurationReached and recording will be stopped. Stopping happens asynchronously, there is no guarantee that the recorder will have stopped by the time the listener is notified.




**API Level:**
  * 20




-----------

### MLMediaRecorderSetMaxFileSize {#mlresult-mlmediarecordersetmaxfilesize}

```cpp
MLResult MLMediaRecorderSetMaxFileSize(
    MLHandle media_recorder,
    int64_t in_max_file_size
)
```

Sets the maximum filesize (in bytes) of the recording session. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| int64_t |in_max_file_size|MaxFilesizeBytes The maximum filesize in bytes (if zero or negative, disables the limit).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Max file size was successfully set. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 



Call this after [MLMediaRecorderSetOutputFormat()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat) and before [MLMediaRecorderPrepare()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare). After recording reaches the specified filesize, a notification will be sent via the callback with a MLMediaRecorderInfo code of MLMediaRecorderInfo_MaxFileSizeReached and recording will be stopped. Stopping happens asynchronously, there is no guarantee that the recorder will have stopped by the time the listener is notified.




**API Level:**
  * 20




-----------

### MLMediaRecorderSetGeoLocation {#mlresult-mlmediarecordersetgeolocation}

```cpp
MLResult MLMediaRecorderSetGeoLocation(
    MLHandle media_recorder,
    int64_t in_latitude10000,
    int64_t in_longitude10000
)
```

Sets the GEO location for recording. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| int64_t |in_latitude10000|The 10000 multiplies latitude of location. |
| int64_t |in_longitude10000|The 10000 multiplies longitude of location.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|GEO location was successfully set. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaRecorderPrepare {#mlresult-mlmediarecorderprepare}

```cpp
MLResult MLMediaRecorderPrepare(
    MLHandle media_recorder,
    MLHandle format
)
```

Prepares the recorder to begin capturing and encoding data for input mediaformat. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |format|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MediaFormat. MediaFormat object can be created with:

* [MLMediaFormatCreateVideo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatevideo) if we want to record video only.
* [MLMediaFormatCreateAudio](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreateaudio) if we want to record audio only.
* [MLMediaFormatCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreate) if we want to record both video and audio.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Recorder was prepared successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


This method must be called after setting up the desired audio and video sources, encoders, but before start.


Following parameters can be added to MediaFormat handle. Audio Specific parametes:

* [MLMediaFormat_Key_Bit_Rate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-bit-rate) for audio "bitrate".
* [MLMediaFormat_Key_Channel_Count](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-channel-count) for audio "channel-count".
* [MLMediaFormat_Key_Sample_Rate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-sample-rate) for audio "sample-rate".
Video Specific parametes:

* [MLMediaFormat_Key_Width](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-width) for video frame "width".
* [MLMediaFormat_Key_Height](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-height) for video frame "height".
* [MLMediaFormat_Key_Frame_Rate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-frame-rate) for video "frame-rate".
* [MLMediaFormat_Key_Parameter_Video_Bitrate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-video-bitrate) for "video-bitrate".
* [MLMediaFormat_Key_I_Frame_Interval](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-i-frame-interval) for "i-frame-interval".




**API Level:**
  * 20




-----------

### MLMediaRecorderStart {#mlresult-mlmediarecorderstart}

```cpp
MLResult MLMediaRecorderStart(
    MLHandle media_recorder
)
```

Begins capturing and encoding data to the specified file. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Recorder was started successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Call this after [MLMediaRecorderPrepare()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare). The apps should not start another recording session during recording.




**API Level:**
  * 20




-----------

### MLMediaRecorderGetInputSurface {#mlresult-mlmediarecordergetinputsurface}

```cpp
MLResult MLMediaRecorderGetInputSurface(
    MLHandle media_recorder,
    MLHandle * out_input_surface_handle
)
```

Gets the input surface to record from when using SURFACE video source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the Media Recorder instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_input_surface_handle|Handle to the created input native surface.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_OK|input surface was correctly returned. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


May only be called after MLMediaRecorderPrepare. Frames rendered to the producer before [MLMediaRecorderStart()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderstart) is called will be discarded.

When using an input surface, there are no accessible input buffers, as buffers are automatically passed from the other modules to this surface.

The returned input surface can also be passed as a destination surface to

* a video/mixed reality video capture session when calling [MLCameraPrepareCapture()](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture).
Captured raw video frames will be consumed directly as input to an encoder without copying. Caller of this API should release the surface using [MLMediaRecorderReleaseInputSurface()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreleaseinputsurface) on the Surface handle after usage.




**API Level:**
  * 20




-----------

### MLMediaRecorderGetMaxAmplitude {#mlresult-mlmediarecordergetmaxamplitude}

```cpp
MLResult MLMediaRecorderGetMaxAmplitude(
    MLHandle media_recorder,
    int32_t * inout_max_amp
)
```

Returns the maximum absolute amplitude that was sampled since the last call to this method. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the MediaRecorder. |
| int32_t * |inout_max_amp|The maximum absolute amplitude measured since the last call, or 0 when called for the first time.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Mmedia recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Maximum amplitude was returned successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Call this only after the [MLMediaRecorderSetAudioSource()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetaudiosource).




**API Level:**
  * 20




-----------

### MLMediaRecorderStop {#mlresult-mlmediarecorderstop}

```cpp
MLResult MLMediaRecorderStop(
    MLHandle media_recorder
)
```

Stops recording. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the MediaRecorder.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Recorder was stopped successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Call this after [MLMediaRecorderStart()](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderstart). Once recording is stopped, you will have to configure it again as if it has just been constructed.




**API Level:**
  * 20




-----------

### MLMediaRecorderReleaseInputSurface {#mlresult-mlmediarecorderreleaseinputsurface}

```cpp
MLResult MLMediaRecorderReleaseInputSurface(
    MLHandle media_recorder,
    MLHandle input_surface_handle
)
```

Release the surface that was returned by MLMediaRecorderGetInputSurface. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the MediaRecorder. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |input_surface_handle|Handle to the internal surface object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Surface object was successfully released. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|MLMediaCodec was not initialized.|
**Required Permissions**:

  * None





**API Level:**
  * 20




-----------

### MLMediaRecorderReset {#mlresult-mlmediarecorderreset}

```cpp
MLResult MLMediaRecorderReset(
    MLHandle media_recorder
)
```

Restarts the MediaRecorder to its idle state. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Recorder was resetted successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


After calling this method, you will have to configure it again as if it had just been constructed.




**API Level:**
  * 20




-----------


## Attributes Documentation

### track_id {#uint32-t-track-id}

```cpp
uint32_t track_id;
```


Holds valid track id only for track specific info (returned via on_track_info callback.). Holds 0 for the generic info (returned via on_info callback). Refer to MLMediaRecorderInfo for the info. 





-----------

### info {#mlmediarecorderinfo-info}

```cpp
MLMediaRecorderInfo info;
```


The info of MLMediaRecorderInfo. 





-----------

### extra {#int-extra}

```cpp
int extra;
```


The extra info. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to MLMediaRecorderSetEventCallbacks. 





-----------

### track_id {#uint32-t-track-id}

```cpp
uint32_t track_id;
```


Holds valid track id only for track specific errors (returned via on_track_error callback). Holds 0 for the generic errors (returned via on_error callback). Refer to MLMediaRecorderError for the errors. 





-----------

### error {#mlmediarecordererror-error}

```cpp
MLMediaRecorderError error;
```



| Type | Description |
|--|--|
| [MLMediaRecorderError](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordererror) | Video recorder error types.  |


The error of MLMediaRecorderError. 





-----------

### extra {#int-extra}

```cpp
int extra;
```


The extra info. 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to MLMediaRecorderSetEventCallbacks. 





-----------

### version {#uint32-t-version}

```cpp
uint32_t version;
```






-----------

### on_info {#void-on-info}

```cpp
void(*)(MLHandle media_recorder, const MLMediaRecorderOnInfo *info) on_info;
```

MediaRecorder received a general info/warning message. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnInfo *info) | )(MLHandle media_recorder, const MLMediaRecorderOnInfo *info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_recorder|Handle is a MediaRecorder instance on which callback was set. |
|  |pointer|to [MLMediaRecorderOnInfo](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_info.md). |




-----------

### on_track_info {#void-on-track-info}

```cpp
void(*)(MLHandle media_recorder, const MLMediaRecorderOnInfo *track_info) on_track_info;
```

MediaRecorder received a track-related info/warning message. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnInfo *track_info) | )(MLHandle media_recorder, const MLMediaRecorderOnInfo *track_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_recorder|Handle is a MediaRecorder instance on which callback was set. |
|  |track_info|pointer to [MLMediaRecorderOnInfo](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_info.md). |




-----------

### on_error {#void-on-error}

```cpp
void(*)(MLHandle media_recorder, const MLMediaRecorderOnError *error) on_error;
```

MediaRecorder received a general error message. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnError *error) | )(MLHandle media_recorder, const MLMediaRecorderOnError *error) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_recorder|Handle is a MediaRecorder instance on which callback was set. |
|  |pointer|to [MLMediaRecorderOnError](/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_error.md). |




-----------

### on_track_error {#void-on-track-error}

```cpp
void(*)(MLHandle media_recorder, const MLMediaRecorderOnError *track_error) on_track_error;
```

MediaRecorder received a track-related error message. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnError *track_error) | )(MLHandle media_recorder, const MLMediaRecorderOnError *track_error) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_recorder|Handle is a MediaRecorder instance on which callback was set. |
|  |pointer|to MLMediaRecorderError. |




-----------




