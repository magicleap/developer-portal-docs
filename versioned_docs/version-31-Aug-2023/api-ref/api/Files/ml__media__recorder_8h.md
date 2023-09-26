---
title: ml_media_recorder.h

---

# ml_media_recorder.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLMediaRecorderOnInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_info.md)**  |
| struct | **[MLMediaRecorderOnError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_error.md)**  |
| struct | **[MLMediaRecorderEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLMediaRecorderOnInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_info.md) | **[MLMediaRecorderOnInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#struct-mlmediarecorderoninfo)**  |
| typedef struct [MLMediaRecorderOnError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_error.md) | **[MLMediaRecorderOnError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#struct-mlmediarecorderonerror)**  |
| typedef struct [MLMediaRecorderEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) | **[MLMediaRecorderEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#struct-mlmediarecordereventcallbacks)**  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLMediaRecorderVideoSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideosource)** <br></br> { <br></br>[MLMediaRecorderVideoSource_Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordervideosource-camera) = 1,<br></br> [MLMediaRecorderVideoSource_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordervideosource-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaRecorderAudioSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudiosource)** <br></br> { <br></br>[MLMediaRecorderAudioSource_Voice](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudiosource-voice) = 0,<br></br> [MLMediaRecorderAudioSource_World](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudiosource-world) = 1,<br></br> [MLMediaRecorderAudioSource_Virtual](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudiosource-virtual) = 2,<br></br> [MLMediaRecorderAudioSource_Mixed](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudiosource-mixed) = 3,<br></br> [MLMediaRecorderAudioSource_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudiosource-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaRecorderEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderevent)** <br></br> { <br></br>[MLMediaRecorderEvent_Error](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderevent-error) = 1,<br></br> [MLMediaRecorderEvent_Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderevent-info) = 2,<br></br> [MLMediaRecorderTrackEvent_Error](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackevent-error) = 100,<br></br> [MLMediaRecorderTrackEvent_Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackevent-info) = 101,<br></br> [MLMediaRecorderTrackEvent_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackevent-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaRecorderInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderinfo)** <br></br> { <br></br>[MLMediaRecorderInfo_Unknown](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderinfo-unknown) = 1,<br></br> [MLMediaRecorderInfo_MaxDurationReached](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderinfo-maxdurationreached) = 800,<br></br> [MLMediaRecorderInfo_MaxFileSizeReached](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderinfo-maxfilesizereached) = 801,<br></br> [MLMediaRecorderInfo_MaxFileSizeApproaching](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderinfo-maxfilesizeapproaching) = 802,<br></br> [MLMediaRecorderTrackInfo_CompletionStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackinfo-completionstatus) = 1000,<br></br> [MLMediaRecorderTrackInfo_ProgressInTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackinfo-progressintime) = 1001,<br></br> [MLMediaRecorderTrackInfo_Type](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackinfo-type) = 1002,<br></br> [MLMediaRecorderTrackInfo_DurationMs](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackinfo-durationms) = 1003,<br></br> [MLMediaRecorderTrackInfo_MaxChunkDurationMs](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackinfo-maxchunkdurationms) = 1004,<br></br> [MLMediaRecorderTrackInfo_EncodedFrames](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackinfo-encodedframes) = 1005,<br></br> [MLMediaRecorderTrackInfo_InterChunkTimeUs](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackinfo-interchunktimeus) = 1006,<br></br> [MLMediaRecorderTrackInfo_InitialDelayMs](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackinfo-initialdelayms) = 1007,<br></br> [MLMediaRecorderTrackInfo_StartOffsetMs](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackinfo-startoffsetms) = 1008,<br></br> [MLMediaRecorderTrackInfo_DataKBytes](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackinfo-datakbytes) = 1009,<br></br> [MLMediaRecorderTrackInfo_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackinfo-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaRecorderError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordererror)** <br></br> { <br></br>[MLMediaRecorderError_Unknown](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordererror-unknown) = 1,<br></br> [MLMediaRecorderError_ServerDied](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordererror-serverdied) = 2,<br></br> [MLMediaRecorderTrackError_General](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackerror-general) = 100,<br></br> [MLMediaRecorderError_VideoNoSyncFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordererror-videonosyncframe) = 200,<br></br> [MLMediaRecorderTrackError_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordertrackerror-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Video recorder error types.  |
| enum | **[MLMediaRecorderOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat)** <br></br> { <br></br>[MLMediaRecorderOutputFormat_DEFAULT](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-default) = 0,<br></br> [MLMediaRecorderOutputFormat_THREE_GPP](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-three-gpp) = 1,<br></br> [MLMediaRecorderOutputFormat_MPEG_4](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-mpeg-4) = 2,<br></br> [MLMediaRecorderOutputFormat_AMR_NB](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-amr-nb) = 3,<br></br> [MLMediaRecorderOutputFormat_AMR_WB](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-amr-wb) = 4,<br></br> [MLMediaRecorderOutputFormat_AAC_ADIF](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-aac-adif) = 5,<br></br> [MLMediaRecorderOutputFormat_AAC_ADTS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-aac-adts) = 6,<br></br> [MLMediaRecorderOutputFormat_RTP_AVP](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-rtp-avp) = 7,<br></br> [MLMediaRecorderOutputFormat_MPEG2TS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-mpeg2ts) = 8,<br></br> [MLMediaRecorderOutputFormat_WEBM](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-webm) = 9,<br></br> [MLMediaRecorderOutputFormat_HEIF](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-heif) = 10,<br></br> [MLMediaRecorderOutputFormat_OGG](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-ogg) = 11,<br></br> [MLMediaRecorderOutputFormat_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderoutputformat-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaRecorderVideoEncoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder)** <br></br> { <br></br>[MLMediaRecorderVideoEncoder_Default](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordervideoencoder-default) = 0,<br></br> [MLMediaRecorderVideoEncoder_H263](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordervideoencoder-h263) = 1,<br></br> [MLMediaRecorderVideoEncoder_H264](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordervideoencoder-h264) = 2,<br></br> [MLMediaRecorderVideoEncoder_MPEG_4_SP](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordervideoencoder-mpeg-4-sp) = 3,<br></br> [MLMediaRecorderVideoEncoder_VP8](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordervideoencoder-vp8) = 4,<br></br> [MLMediaRecorderVideoEncoder_HEVC](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordervideoencoder-hevc) = 5,<br></br> [MLMediaRecorderVideoEncoder_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecordervideoencoder-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaRecorderAudioEncoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder)** <br></br> { <br></br>[MLMediaRecorderAudioEncoder_Default](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudioencoder-default) = 0,<br></br> [MLMediaRecorderAudioEncoder_AMR_NB](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudioencoder-amr-nb) = 1,<br></br> [MLMediaRecorderAudioEncoder_AMR_WB](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudioencoder-amr-wb) = 2,<br></br> [MLMediaRecorderAudioEncoder_AAC](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudioencoder-aac) = 3,<br></br> [MLMediaRecorderAudioEncoder_HE_AAC](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudioencoder-he-aac) = 4,<br></br> [MLMediaRecorderAudioEncoder_AAC_ELD](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudioencoder-aac-eld) = 5,<br></br> [MLMediaRecorderAudioEncoder_VORBIS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudioencoder-vorbis) = 6,<br></br> [MLMediaRecorderAudioEncoder_OPUS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudioencoder-opus) = 7,<br></br> [MLMediaRecorderAudioEncoder_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__recorder_8h.md#enums-mlmediarecorderaudioencoder-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLMediaRecorderEventCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-mlmediarecordereventcallbacksinit)**([MLMediaRecorderEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) * inout_callbacks)<br></br>Initializes MediaRecorderEventCallbacks with default values.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordercreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new MediaRecorder object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder)<br></br>Destroy a MediaRecorder object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetOutputFileForFD](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputfileforfd)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, int32_t fd)<br></br>Pass in the file descriptor of the file to be written.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetOutputFileForPath](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputfileforpath)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, const char * path)<br></br>Sets the path of the output file to be produced.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderseteventcallbacks)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, const [MLMediaRecorderEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) * callbacks, void * data)<br></br>Sets the MediaRecorderListener object that will receive MediaRecorder notifications.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetVideoSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetvideosource)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLMediaRecorderVideoSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideosource) in_video_source)<br></br>Sets MediaRecorder default video source.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetAudioSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetaudiosource)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLMediaRecorderAudioSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudiosource) in_audio_source)<br></br>Set MediaRecorder audio source.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLMediaRecorderOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat) in_format)<br></br>Sets the format of the output file produced during recording.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetVideoEncoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetvideoencoder)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLMediaRecorderVideoEncoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder) in_video_encoder)<br></br>Sets the video encoder to be used for recording.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetAudioEncoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetaudioencoder)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLMediaRecorderAudioEncoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder) in_audio_encoder)<br></br>Sets the audio encoder to be used for recording.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetMaxDuration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetmaxduration)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, int32_t in_max_duration_msec)<br></br>Sets the maximum duration (in ms) of the recording session.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetMaxFileSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetmaxfilesize)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, int64_t in_max_file_size)<br></br>Sets the maximum filesize (in bytes) of the recording session.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderSetGeoLocation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetgeolocation)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, int64_t in_latitude10000, int64_t in_longitude10000)<br></br>Sets the GEO location for recording.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderPrepare](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) format)<br></br>Prepares the recorder to begin capturing and encoding data for input mediaformat.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderstart)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder)<br></br>Begins capturing and encoding data to the specified file.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderGetInputSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordergetinputsurface)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_input_surface_handle)<br></br>Gets the input surface to record from when using SURFACE video source.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderGetMaxAmplitude](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordergetmaxamplitude)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, int32_t * inout_max_amp)<br></br>Returns the maximum absolute amplitude that was sampled since the last call to this method.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderstop)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder)<br></br>Stops recording.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderReleaseInputSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreleaseinputsurface)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) input_surface_handle)<br></br>Release the surface that was returned by MLMediaRecorderGetInputSurface.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaRecorderReset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreset)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_recorder)<br></br>Restarts the MediaRecorder to its idle state.  |

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




[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_info.md)



-----------

### MLMediaRecorderOnError {#struct-mlmediarecorderonerror}

```cpp
typedef struct MLMediaRecorderOnError MLMediaRecorderOnError;
```




[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_error.md)



-----------

### MLMediaRecorderEventCallbacks {#struct-mlmediarecordereventcallbacks}

```cpp
typedef struct MLMediaRecorderEventCallbacks MLMediaRecorderEventCallbacks;
```




[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md)



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
| [MLMediaRecorderEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) * |inout_callbacks|Media Recorder Callback structure defined by [MLMediaRecorderEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) that needs to be initialized. |




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Handle to the new MediaRecorder object created. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Could not allocate internal MediaRecorder. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Passed out_handle was NULL. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MediaRecorder was created successfully.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder object to destroy.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MediaRecorder was destroyed successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder instance. |
| int32_t |fd|The file descriptor for the file you want to write into.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Passed fd does no refer to a valid,open file descriptor or 'media_recorder' was NULL. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Data source was correctly set to passed file descriptor. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Call this after [MLMediaRecorderSetOutputFormat()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat) but before MLMediaRecorderprepare().




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder instance. |
| const char * |path|The linux-style path of the file. Must be a valid and existing path.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Data source was correctly set to passed file path. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Call this after [MLMediaRecorderSetOutputFormat()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat) but before MLMediaRecorderprepare().




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| const [MLMediaRecorderEventCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_event_callbacks.md) * |callbacks|Set of event callbacks. Can be set to NULL to unset the callbacks altogether. |
| void * |data|Custom data to be returned when any callback is fired.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The specified callbacks were successfully set/unset. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| [MLMediaRecorderVideoSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideosource) |in_video_source|Type of the MediaRecorderVideoSource.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found or in_video_source is not MLMediaRecorderVideoSource_Camera. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set default video source successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Cannot be called twice (without calling [MLMediaRecorderReset()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreset) in between) because it triggers internal initialization.

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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| [MLMediaRecorderAudioSource](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudiosource) |in_audio_source|Type of the MediaRecorderAudioSource.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set audio source successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * android.permission.RECORD_AUDIO (protection level: dangerous) 


Cannot be called twice (without calling [MLMediaRecorderReset()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreset) in between) because it triggers internal initialization.




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| [MLMediaRecorderOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderoutputformat) |in_format|Type of the MLMediaRecorderOutputFormat.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set output format successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| [MLMediaRecorderVideoEncoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordervideoencoder) |in_video_encoder|Type of the VideoEncoder to use.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set video encoder successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaResult_InvalidCodecParam|requested width height is not supported. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


If this method is not called, the output file will not contain an video track. Call this after [MLMediaRecorderSetOutputFormat()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat) and before [MLMediaRecorderPrepare()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare).

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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| [MLMediaRecorderAudioEncoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderaudioencoder) |in_audio_encoder|Type of the MLMediaRecorderAudioEncoder to use.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set audio encoder successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


If this method is not called, the output file will not contain an audio track. Call this after [MLMediaRecorderSetOutputFormat()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat) and before [MLMediaRecorderPrepare()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare).




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| int32_t |in_max_duration_msec|The maximum duration in ms (if zero or negative, disables the duration limit).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Max duration was successfully set. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Call this after [MLMediaRecorderSetOutputFormat()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat) and before [MLMediaRecorderPrepare()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare). After recording reaches the specified duration, a notification will be sent via the callback with a MLMediaRecorderInfo code of MLMediaRecorderInfo_MaxDurationReached and recording will be stopped. Stopping happens asynchronously, there is no guarantee that the recorder will have stopped by the time the listener is notified.




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| int64_t |in_max_file_size|MaxFilesizeBytes The maximum filesize in bytes (if zero or negative, disables the limit).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Max file size was successfully set. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 



Call this after [MLMediaRecorderSetOutputFormat()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetoutputformat) and before [MLMediaRecorderPrepare()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare). After recording reaches the specified filesize, a notification will be sent via the callback with a MLMediaRecorderInfo code of MLMediaRecorderInfo_MaxFileSizeReached and recording will be stopped. Stopping happens asynchronously, there is no guarantee that the recorder will have stopped by the time the listener is notified.




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| int64_t |in_latitude10000|The 10000 multiplies latitude of location. |
| int64_t |in_longitude10000|The 10000 multiplies longitude of location.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|GEO location was successfully set. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |format|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MediaFormat. MediaFormat object can be created with:

* [MLMediaFormatCreateVideo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatevideo) if we want to record video only.
* [MLMediaFormatCreateAudio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreateaudio) if we want to record audio only.
* [MLMediaFormatCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreate) if we want to record both video and audio.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Recorder was prepared successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


This method must be called after setting up the desired audio and video sources, encoders, but before start.


Following parameters can be added to MediaFormat handle. Audio Specific parametes:

* [MLMediaFormat_Key_Bit_Rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-bit-rate) for audio "bitrate".
* [MLMediaFormat_Key_Channel_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-channel-count) for audio "channel-count".
* [MLMediaFormat_Key_Sample_Rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-sample-rate) for audio "sample-rate".
Video Specific parametes:

* [MLMediaFormat_Key_Width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-width) for video frame "width".
* [MLMediaFormat_Key_Height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-height) for video frame "height".
* [MLMediaFormat_Key_Frame_Rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-frame-rate) for video "frame-rate".
* [MLMediaFormat_Key_Parameter_Video_Bitrate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-video-bitrate) for "video-bitrate".
* [MLMediaFormat_Key_I_Frame_Interval](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-i-frame-interval) for "i-frame-interval".




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Recorder was started successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Call this after [MLMediaRecorderPrepare()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderprepare). The apps should not start another recording session during recording.




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the Media Recorder instance. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_input_surface_handle|Handle to the created input native surface.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_OK|input surface was correctly returned. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


May only be called after MLMediaRecorderPrepare. Frames rendered to the producer before [MLMediaRecorderStart()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderstart) is called will be discarded.

When using an input surface, there are no accessible input buffers, as buffers are automatically passed from the other modules to this surface.

The returned input surface can also be passed as a destination surface to

* a video/mixed reality video capture session when calling [MLCameraPrepareCapture()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture).
Captured raw video frames will be consumed directly as input to an encoder without copying. Caller of this API should release the surface using [MLMediaRecorderReleaseInputSurface()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderreleaseinputsurface) on the Surface handle after usage.




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the MediaRecorder. |
| int32_t * |inout_max_amp|The maximum absolute amplitude measured since the last call, or 0 when called for the first time.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Mmedia recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Maximum amplitude was returned successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Call this only after the [MLMediaRecorderSetAudioSource()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecordersetaudiosource).




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the MediaRecorder.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Recorder was stopped successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


Call this after [MLMediaRecorderStart()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlresult-mlmediarecorderstart). Once recording is stopped, you will have to configure it again as if it has just been constructed.




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the MediaRecorder. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |input_surface_handle|Handle to the internal surface object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Surface object was successfully released. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|MLMediaCodec was not initialized.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_recorder|Handle to the media recorder.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Media recorder handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Recorder was resetted successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state.|
**Required Permissions**:

  * None 


After calling this method, you will have to configure it again as if it had just been constructed.




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

ML_EXTERN_C_BEGIN
typedef enum MLMediaRecorderVideoSource {
  MLMediaRecorderVideoSource_Camera       = 1,
  MLMediaRecorderVideoSource_Ensure32Bits = 0x7FFFFFFF
} MLMediaRecorderVideoSource;

typedef enum MLMediaRecorderAudioSource {
  MLMediaRecorderAudioSource_Voice        = 0,
  MLMediaRecorderAudioSource_World        = 1,
  MLMediaRecorderAudioSource_Virtual      = 2,
  MLMediaRecorderAudioSource_Mixed        = 3,
  MLMediaRecorderAudioSource_Ensure32Bits = 0x7FFFFFFF
} MLMediaRecorderAudioSource;

typedef enum MLMediaRecorderEvent {
  MLMediaRecorderEvent_Error             = 1,
  MLMediaRecorderEvent_Info              = 2,
  MLMediaRecorderTrackEvent_Error        = 100,
  MLMediaRecorderTrackEvent_Info         = 101,
  MLMediaRecorderTrackEvent_Ensure32Bits = 0x7FFFFFFF
} MLMediaRecorderEvent;

typedef enum MLMediaRecorderInfo {
  MLMediaRecorderInfo_Unknown                 = 1,
  MLMediaRecorderInfo_MaxDurationReached      = 800,
  MLMediaRecorderInfo_MaxFileSizeReached      = 801,
  MLMediaRecorderInfo_MaxFileSizeApproaching  = 802,
  MLMediaRecorderTrackInfo_CompletionStatus   = 1000,
  MLMediaRecorderTrackInfo_ProgressInTime     = 1001,
  MLMediaRecorderTrackInfo_Type               = 1002,
  MLMediaRecorderTrackInfo_DurationMs         = 1003,
  MLMediaRecorderTrackInfo_MaxChunkDurationMs = 1004,
  MLMediaRecorderTrackInfo_EncodedFrames      = 1005,
  MLMediaRecorderTrackInfo_InterChunkTimeUs   = 1006,
  MLMediaRecorderTrackInfo_InitialDelayMs     = 1007,
  MLMediaRecorderTrackInfo_StartOffsetMs      = 1008,
  MLMediaRecorderTrackInfo_DataKBytes         = 1009,
  MLMediaRecorderTrackInfo_Ensure32Bits       = 0x7FFFFFFF
} MLMediaRecorderInfo;

typedef struct MLMediaRecorderOnInfo {
  uint32_t track_id;
  MLMediaRecorderInfo info;
  int extra;
  void *data;
} MLMediaRecorderOnInfo;

typedef enum MLMediaRecorderError {
  MLMediaRecorderError_Unknown           = 1,
  MLMediaRecorderError_ServerDied        = 2,

  MLMediaRecorderTrackError_General      = 100,
  MLMediaRecorderError_VideoNoSyncFrame  = 200,
  MLMediaRecorderTrackError_Ensure32Bits = 0x7FFFFFFF
} MLMediaRecorderError;

typedef struct MLMediaRecorderOnError {
  uint32_t track_id;
  MLMediaRecorderError error;
  int extra;
  void *data;
} MLMediaRecorderOnError;

typedef enum MLMediaRecorderOutputFormat {
  MLMediaRecorderOutputFormat_DEFAULT            = 0,
  MLMediaRecorderOutputFormat_THREE_GPP          = 1,
  MLMediaRecorderOutputFormat_MPEG_4             = 2,
  MLMediaRecorderOutputFormat_AMR_NB             = 3,
  MLMediaRecorderOutputFormat_AMR_WB             = 4,
  MLMediaRecorderOutputFormat_AAC_ADIF           = 5,
  MLMediaRecorderOutputFormat_AAC_ADTS           = 6,
  MLMediaRecorderOutputFormat_RTP_AVP            = 7,
  MLMediaRecorderOutputFormat_MPEG2TS            = 8,
  MLMediaRecorderOutputFormat_WEBM               = 9,
  MLMediaRecorderOutputFormat_HEIF               = 10,
  MLMediaRecorderOutputFormat_OGG                = 11,
  MLMediaRecorderOutputFormat_Ensure32Bits        = 0x7FFFFFFF
} MLMediaRecorderOutputFormat;

typedef enum MLMediaRecorderVideoEncoder {
  MLMediaRecorderVideoEncoder_Default      = 0,
  MLMediaRecorderVideoEncoder_H263         = 1,
  MLMediaRecorderVideoEncoder_H264         = 2,
  MLMediaRecorderVideoEncoder_MPEG_4_SP    = 3,
  MLMediaRecorderVideoEncoder_VP8          = 4,
  MLMediaRecorderVideoEncoder_HEVC         = 5,
  MLMediaRecorderVideoEncoder_Ensure32Bits = 0x7FFFFFFF
} MLMediaRecorderVideoEncoder;

typedef enum MLMediaRecorderAudioEncoder {
  MLMediaRecorderAudioEncoder_Default      = 0,
  MLMediaRecorderAudioEncoder_AMR_NB       = 1,
  MLMediaRecorderAudioEncoder_AMR_WB       = 2,
  MLMediaRecorderAudioEncoder_AAC          = 3,
  MLMediaRecorderAudioEncoder_HE_AAC       = 4,
  MLMediaRecorderAudioEncoder_AAC_ELD      = 5,
  MLMediaRecorderAudioEncoder_VORBIS       = 6,
  MLMediaRecorderAudioEncoder_OPUS         = 7,
  MLMediaRecorderAudioEncoder_Ensure32Bits = 0x7FFFFFFF
} MLMediaRecorderAudioEncoder;

typedef struct MLMediaRecorderEventCallbacks {
  uint32_t version;
  void (*on_info)(MLHandle media_recorder, const MLMediaRecorderOnInfo *info);

  void (*on_track_info)(MLHandle media_recorder, const MLMediaRecorderOnInfo *track_info);
  void (*on_error)(MLHandle media_recorder, const MLMediaRecorderOnError *error);
  void (*on_track_error)(MLHandle media_recorder, const MLMediaRecorderOnError *track_error);
} MLMediaRecorderEventCallbacks;

ML_STATIC_INLINE void MLMediaRecorderEventCallbacksInit(MLMediaRecorderEventCallbacks *inout_callbacks) {
  if (inout_callbacks) {
    inout_callbacks->version = 1;
    inout_callbacks->on_info = NULL;
    inout_callbacks->on_error = NULL;
    inout_callbacks->on_track_error = NULL;
    inout_callbacks->on_track_info = NULL;
  }
}

ML_API MLResult ML_CALL MLMediaRecorderCreate(MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaRecorderDestroy(MLHandle media_recorder);

ML_API MLResult ML_CALL MLMediaRecorderSetOutputFileForFD(MLHandle media_recorder, int32_t fd);

ML_API MLResult ML_CALL MLMediaRecorderSetOutputFileForPath(MLHandle media_recorder, const char *path);

ML_API MLResult ML_CALL MLMediaRecorderSetEventCallbacks(MLHandle media_recorder, const MLMediaRecorderEventCallbacks *callbacks, void *data);

ML_API MLResult ML_CALL MLMediaRecorderSetVideoSource(MLHandle media_recorder, MLMediaRecorderVideoSource in_video_source);

ML_API MLResult ML_CALL MLMediaRecorderSetAudioSource(MLHandle media_recorder, MLMediaRecorderAudioSource in_audio_source);

ML_API MLResult ML_CALL MLMediaRecorderSetOutputFormat(MLHandle media_recorder, MLMediaRecorderOutputFormat in_format);

ML_API MLResult ML_CALL MLMediaRecorderSetVideoEncoder(MLHandle media_recorder, MLMediaRecorderVideoEncoder in_video_encoder);

ML_API MLResult ML_CALL MLMediaRecorderSetAudioEncoder(MLHandle media_recorder, MLMediaRecorderAudioEncoder in_audio_encoder);

ML_API MLResult ML_CALL MLMediaRecorderSetMaxDuration(MLHandle media_recorder, int32_t in_max_duration_msec);

ML_API MLResult ML_CALL MLMediaRecorderSetMaxFileSize(MLHandle media_recorder, int64_t in_max_file_size);

ML_API MLResult ML_CALL MLMediaRecorderSetGeoLocation(MLHandle media_recorder, int64_t in_latitude10000, int64_t in_longitude10000);

ML_API MLResult ML_CALL MLMediaRecorderPrepare(MLHandle media_recorder, MLHandle format);

ML_API MLResult ML_CALL MLMediaRecorderStart(MLHandle media_recorder);

ML_API MLResult ML_CALL MLMediaRecorderGetInputSurface(MLHandle media_recorder, MLHandle *out_input_surface_handle);

ML_API MLResult ML_CALL MLMediaRecorderGetMaxAmplitude(MLHandle media_recorder, int32_t *inout_max_amp);

ML_API MLResult ML_CALL MLMediaRecorderStop(MLHandle media_recorder);

ML_API MLResult ML_CALL MLMediaRecorderReleaseInputSurface(MLHandle media_recorder, MLHandle input_surface_handle);

ML_API MLResult ML_CALL MLMediaRecorderReset(MLHandle media_recorder);

ML_EXTERN_C_END
```




