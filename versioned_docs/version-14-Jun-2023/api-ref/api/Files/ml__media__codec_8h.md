---
title: ml_media_codec.h

---

# ml_media_codec.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLMediaCodecBufferInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_buffer_info.md)**  |
| struct | **[MLMediaCodecInputBufferInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_input_buffer_info.md)** <br></br>MediaCodec Input buffer information.  |
| struct | **[MLMediaCodecOutputBufferInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_buffer_info.md)** <br></br>MediaCodec Output buffer information.  |
| struct | **[MLMediaCodecOutputFormatInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_format_info.md)** <br></br>MediaCodec Output Format information.  |
| struct | **[MLMediaCodecErrorInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_error_info.md)** <br></br>MediaCodec Output Format information.  |
| struct | **[MLMediaCodecCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md)** <br></br>Callbacks for notifying asynchronously of various codec events to the user/client. If user intends to use codec in asynchronous mode, then the user/client is expected to implement these callbacks and take proper actions where appropriate.  |
| struct | **[MLMediaCodecFrameRenderedInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_frame_rendered_info.md)** <br></br>MediaCodec Output Frame Rendered information.  |
| struct | **[MLMediaCodecOutputFrameListener](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md)** <br></br>Callbacks for notifying when an output frame is available for consumption or has been rendered on the output surface.  |
| struct | **[MLMediaCodecCryptoPattern](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_pattern.md)** <br></br>Metadata describing an encryption pattern for the protected bytes in a subsample.  |
| struct | **[MLMediaCodecCryptoInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md)** <br></br>Metadata describing the structure of a (at least partially) encrypted input sample. A buffer's data is considered to be partitioned into "subSamples", each subSample starts with a (potentially empty) run of plain, unencrypted bytes followed by a (also potentially empty) run of encrypted bytes. If pattern encryption applies, each of the encrypted runs is encrypted only partly, according to a repeating pattern of "encrypt" and "skip" blocks. This information encapsulates per-sample metadata as outlined in ISO/IEC FDIS 23001-7:2011 "Common encryption in ISO base media file format files".  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLMediaCodecBufferInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_buffer_info.md) | **[MLMediaCodecBufferInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodecbufferinfo)**  |
| typedef struct [MLMediaCodecInputBufferInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_input_buffer_info.md) | **[MLMediaCodecInputBufferInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodecinputbufferinfo)** <br></br>MediaCodec Input buffer information.  |
| typedef struct [MLMediaCodecOutputBufferInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_buffer_info.md) | **[MLMediaCodecOutputBufferInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodecoutputbufferinfo)** <br></br>MediaCodec Output buffer information.  |
| typedef struct [MLMediaCodecOutputFormatInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_format_info.md) | **[MLMediaCodecOutputFormatInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodecoutputformatinfo)** <br></br>MediaCodec Output Format information.  |
| typedef struct [MLMediaCodecErrorInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_error_info.md) | **[MLMediaCodecErrorInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodecerrorinfo)** <br></br>MediaCodec Output Format information.  |
| typedef struct [MLMediaCodecCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md) | **[MLMediaCodecCallbacksEx](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodeccallbacksex)** <br></br>Callbacks for notifying asynchronously of various codec events to the user/client. If user intends to use codec in asynchronous mode, then the user/client is expected to implement these callbacks and take proper actions where appropriate.  |
| typedef struct [MLMediaCodecFrameRenderedInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_frame_rendered_info.md) | **[MLMediaCodecFrameRenderedInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodecframerenderedinfo)** <br></br>MediaCodec Output Frame Rendered information.  |
| typedef struct [MLMediaCodecOutputFrameListener](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md) | **[MLMediaCodecOutputFrameListener](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodecoutputframelistener)** <br></br>Callbacks for notifying when an output frame is available for consumption or has been rendered on the output surface.  |
| typedef struct [MLMediaCodecCryptoPattern](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_pattern.md) | **[MLMediaCodecCryptoPattern](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodeccryptopattern)** <br></br>Metadata describing an encryption pattern for the protected bytes in a subsample.  |
| typedef struct [MLMediaCodecCryptoInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md) | **[MLMediaCodecCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodeccryptoinfo)** <br></br>Metadata describing the structure of a (at least partially) encrypted input sample. A buffer's data is considered to be partitioned into "subSamples", each subSample starts with a (potentially empty) run of plain, unencrypted bytes followed by a (also potentially empty) run of encrypted bytes. If pattern encryption applies, each of the encrypted runs is encrypted only partly, according to a repeating pattern of "encrypt" and "skip" blocks. This information encapsulates per-sample metadata as outlined in ISO/IEC FDIS 23001-7:2011 "Common encryption in ISO base media file format files".  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLMediaCodecCreation](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccreation)** <br></br> { <br></br>[MLMediaCodecCreation_ByName](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodeccreation-byname),<br></br> [MLMediaCodecCreation_ByType](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodeccreation-bytype),<br></br> [MLMediaCodecCreation_Ensure32Bits](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodeccreation-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaCodecType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodectype)** <br></br> { <br></br>[MLMediaCodecType_Encoder](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodectype-encoder),<br></br> [MLMediaCodecType_Decoder](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodectype-decoder),<br></br> [MLMediaCodecType_Ensure32Bits](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodectype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaCodecBufferFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag)** <br></br> { <br></br>[MLMediaCodecBufferFlag_KeyFrame](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodecbufferflag-keyframe) = 1,<br></br> [MLMediaCodecBufferFlag_CodecConfig](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodecbufferflag-codecconfig) = 2,<br></br> [MLMediaCodecBufferFlag_EOS](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodecbufferflag-eos) = 4,<br></br> [MLMediaCodecBufferFlag_PartialFrame](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodecbufferflag-partialframe) = 8,<br></br> [MLMediaCodecBufferFlag_MuxerData](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodecbufferflag-muxerdata) = 16,<br></br> [MLMediaCodecBufferFlag_Ensure32Bits](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodecbufferflag-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Indicate the type of data when queuing the input buffer via [MLMediaCodecQueueInputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueueinputbuffer) or [MLMediaCodecQueueSecureInputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueuesecureinputbuffer).  |
| enum | **[MLMediaCodecOutputBufferStatus](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecoutputbufferstatus)** <br></br> { <br></br>[MLMediaCodec_OutputBuffersChanged](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodec-outputbufferschanged) = -1014,<br></br> [MLMediaCodec_FormatChanged](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodec-formatchanged) = -1012,<br></br> [MLMediaCodec_TryAgainLater](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodec-tryagainlater) = -11,<br></br> [MLMediaCodecOutputBufferStatus_Ensure32Bits](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodecoutputbufferstatus-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Other than the normal buffer index, the output of [MLMediaCodecDequeueOutputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueoutputbuffer) can take on one of these statuses.  |
| enum | **[MLMediaCodecCryptoMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccryptomode)** <br></br> { <br></br>[MLMediaCodecCryptoMode_Clear](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodeccryptomode-clear),<br></br> [MLMediaCodecCryptoMode_CTR](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodeccryptomode-ctr),<br></br> [MLMediaCodecCryptoMode_CBC](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodeccryptomode-cbc),<br></br> [MLMediaCodecCryptoMode_Ensure32Bits](/api-ref/api/Files/ml__media__codec_8h.md#enums-mlmediacodeccryptomode-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLMediaCodecCallbacksExInit](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediacodeccallbacksexinit)**([MLMediaCodecCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md) * inout_callbacks)<br></br>Initializes [MLMediaCodecCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md) with default values.  |
| void | **[MLMediaCodecOutputFrameListenerInit](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediacodecoutputframelistenerinit)**([MLMediaCodecOutputFrameListener](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md) * inout_callbacks)<br></br>Initializes [MLMediaCodecOutputFrameListener](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md) with default values.  |
| void | **[MLMediaCodecCryptoInfoInit](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediacodeccryptoinfoinit)**([MLMediaCodecCryptoInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md) * inout_crypto_info)<br></br>Initializes [MLMediaCodecCryptoInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md) with default values.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecCreateCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreatecryptoinfo)**(const [MLMediaCodecCryptoInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md) * crypto_info, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_crypto_info_handle)<br></br>Create a Crypto Info object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecReleaseCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreleasecryptoinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) crypto_info_handle)<br></br>Release the Crypto Info created by [MLMediaCodecCreateCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreatecryptoinfo).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecCreateCodec](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreatecodec)**([MLMediaCodecCreation](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccreation) method, [MLMediaCodecType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodectype) type, const char * name_str, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new MLMediaCodec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroy a MLMediaCodec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecSetCallbacksEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsetcallbacksex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaCodecCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md) * callbacks, void * user_data)<br></br>Set callbacks to notify client codec events. Client needs to implement the callback functions.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecSetOutputFrameListener](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsetoutputframelistener)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaCodecOutputFrameListener](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md) * callbacks, void * user_data)<br></br>Registers a callback to be invoked when an output frame is available or rendered on the output surface.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecGetName](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetname)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, char * out_name)<br></br>Obtain the name of the created codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecConfigure](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecconfigure)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) format_handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) surface_handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) crypto_handle)<br></br>Configure the MLMediaCodec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecStart](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecstart)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Start the codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecStop](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecstop)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Stop the codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecReset](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreset)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Reset the codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecFlush](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecflush)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Flush the both the input and output ports of the codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecSetParameters](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsetparameters)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) format_handle)<br></br>Communicate additional parameter changes to a codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecGetInputBufferPointer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetinputbufferpointer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t buffer_index, uint8_t ** out_buffer_ptr, size_t * out_buffer_size)<br></br>Obtain a writable buffer pointer for a dequeued input buffer index to contain the input data.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecGetOutputBufferPointer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetoutputbufferpointer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t buffer_index, const uint8_t ** out_buffer_ptr, size_t * out_buffer_size)<br></br>Obtain a read-only buffer pointer for a dequeued output buffer index.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecQueueInputBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueueinputbuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t buffer_index, int64_t offset, size_t size, uint64_t time_us, int flags)<br></br>After filling a range of the input buffer at the specified index submit it to the component.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecQueueSecureInputBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueuesecureinputbuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t buffer_index, int64_t offset, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) crypto_info_handle, uint64_t time_us, int flags)<br></br>Similar to queueInputBuffer but submits a buffer that is potentially encrypted.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecDequeueInputBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueinputbuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t timeout_us, int64_t * out_buffer_index)<br></br>Dequeue an input buffer from buffer queue.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecDequeueOutputBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueoutputbuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaCodecBufferInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_buffer_info.md) * out_buffer_info, int64_t timeout_us, int64_t * out_buffer_index)<br></br>Dequeue an output buffer from buffer queue.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecGetInputFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetinputformat)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_format_handle)<br></br>Obtain input format supported by the codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecGetOutputFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetoutputformat)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_format_handle)<br></br>Return output format supported by the codec, or the format to which the configuration has changed.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecCreateInputSurface](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreateinputsurface)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_input_surface_handle)<br></br>Create an input surface for a hardware encoder.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecDestroyInputSurface](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdestroyinputsurface)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) input_surface_handle)<br></br>Release the Surface that was created by [MLMediaCodecCreateInputSurface](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreateinputsurface).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecSignalEndOfInputStream](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecsignalendofinputstream)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Signal end-of-stream on input to a surface.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecReleaseOutputBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreleaseoutputbuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t buffer_index, bool render)<br></br>Release buffer to codec or to render it on output surface.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecReleaseOutputBufferAtTime](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreleaseoutputbufferattime)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t buffer_index, int64_t timestamp_ns)<br></br>Update surface timestamp and returns it to the codec to render it on the output surface. If codec is not configured with output surface, this call simply returns the buffer to codec.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAX_CODEC_NAME_SIZE](/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-codec-name-size)**  |

## Enums Documentation

### MLMediaCodecCreation {#enums-mlmediacodeccreation}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecCreation_ByName | | Create by name. |
| MLMediaCodecCreation_ByType | | Create by type. |
| MLMediaCodecCreation_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Media codec creation method. 





-----------

### MLMediaCodecType {#enums-mlmediacodectype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecType_Encoder | | Encoder. |
| MLMediaCodecType_Decoder | | Decoder. |
| MLMediaCodecType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Media codec type. 





-----------

### MLMediaCodecBufferFlag {#enums-mlmediacodecbufferflag}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecBufferFlag_KeyFrame |  1| The (encoded) buffer contains the data for a key frame. |
| MLMediaCodecBufferFlag_CodecConfig |  2| Buffer contains codec initialization OR codec specific data instead of media data. |
| MLMediaCodecBufferFlag_EOS |  4| Signals the end of stream, i.e. no buffers will be available after this. |
| MLMediaCodecBufferFlag_PartialFrame |  8| Buffer only contains part of a frame, and the decoder should batch the data until a buffer without this flag appears before decoding the frame. |
| MLMediaCodecBufferFlag_MuxerData |  16| Buffer contains muxer data - Supported only for Exif data block. |
| MLMediaCodecBufferFlag_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Indicate the type of data when queuing the input buffer via [MLMediaCodecQueueInputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueueinputbuffer) or [MLMediaCodecQueueSecureInputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueuesecureinputbuffer). 





-----------

### MLMediaCodecOutputBufferStatus {#enums-mlmediacodecoutputbufferstatus}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodec_OutputBuffersChanged |  -1014| Output buffer changed. |
| MLMediaCodec_FormatChanged |  -1012| Format changed. |
| MLMediaCodec_TryAgainLater |  -11| Try again later. |
| MLMediaCodecOutputBufferStatus_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Other than the normal buffer index, the output of [MLMediaCodecDequeueOutputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueoutputbuffer) can take on one of these statuses. 





-----------

### MLMediaCodecCryptoMode {#enums-mlmediacodeccryptomode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecCryptoMode_Clear | | Clear samples. |
| MLMediaCodecCryptoMode_CTR | | Sample encrypted with AES CTR mode. |
| MLMediaCodecCryptoMode_CBC | | Sample encrypted with AES CBC mode. |
| MLMediaCodecCryptoMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Crypto mode using which media samples are encrypted. 





-----------


## Types Documentation

### MLMediaCodecBufferInfo {#struct-mlmediacodecbufferinfo}

```cpp
typedef struct MLMediaCodecBufferInfo MLMediaCodecBufferInfo;
```


Media codec buffer info. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_buffer_info.md)



-----------

### MLMediaCodecInputBufferInfo {#struct-mlmediacodecinputbufferinfo}

```cpp
typedef struct MLMediaCodecInputBufferInfo MLMediaCodecInputBufferInfo;
```

MediaCodec Input buffer information. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_input_buffer_info.md)


**API Level:**
  * 20




-----------

### MLMediaCodecOutputBufferInfo {#struct-mlmediacodecoutputbufferinfo}

```cpp
typedef struct MLMediaCodecOutputBufferInfo MLMediaCodecOutputBufferInfo;
```

MediaCodec Output buffer information. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_buffer_info.md)


**API Level:**
  * 20




-----------

### MLMediaCodecOutputFormatInfo {#struct-mlmediacodecoutputformatinfo}

```cpp
typedef struct MLMediaCodecOutputFormatInfo MLMediaCodecOutputFormatInfo;
```

MediaCodec Output Format information. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_format_info.md)


**API Level:**
  * 20




-----------

### MLMediaCodecErrorInfo {#struct-mlmediacodecerrorinfo}

```cpp
typedef struct MLMediaCodecErrorInfo MLMediaCodecErrorInfo;
```

MediaCodec Output Format information. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_error_info.md)


**API Level:**
  * 20




-----------

### MLMediaCodecCallbacksEx {#struct-mlmediacodeccallbacksex}

```cpp
typedef struct MLMediaCodecCallbacksEx MLMediaCodecCallbacksEx;
```

Callbacks for notifying asynchronously of various codec events to the user/client. If user intends to use codec in asynchronous mode, then the user/client is expected to implement these callbacks and take proper actions where appropriate. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md)


**API Level:**
  * 20




-----------

### MLMediaCodecFrameRenderedInfo {#struct-mlmediacodecframerenderedinfo}

```cpp
typedef struct MLMediaCodecFrameRenderedInfo MLMediaCodecFrameRenderedInfo;
```

MediaCodec Output Frame Rendered information. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_frame_rendered_info.md)


**API Level:**
  * 20




-----------

### MLMediaCodecOutputFrameListener {#struct-mlmediacodecoutputframelistener}

```cpp
typedef struct MLMediaCodecOutputFrameListener MLMediaCodecOutputFrameListener;
```

Callbacks for notifying when an output frame is available for consumption or has been rendered on the output surface. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md)


**API Level:**
  * 20




-----------

### MLMediaCodecCryptoPattern {#struct-mlmediacodeccryptopattern}

```cpp
typedef struct MLMediaCodecCryptoPattern MLMediaCodecCryptoPattern;
```

Metadata describing an encryption pattern for the protected bytes in a subsample. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_pattern.md)


**API Level:**
  * 20




-----------

### MLMediaCodecCryptoInfo {#struct-mlmediacodeccryptoinfo}

```cpp
typedef struct MLMediaCodecCryptoInfo MLMediaCodecCryptoInfo;
```

Metadata describing the structure of a (at least partially) encrypted input sample. A buffer's data is considered to be partitioned into "subSamples", each subSample starts with a (potentially empty) run of plain, unencrypted bytes followed by a (also potentially empty) run of encrypted bytes. If pattern encryption applies, each of the encrypted runs is encrypted only partly, according to a repeating pattern of "encrypt" and "skip" blocks. This information encapsulates per-sample metadata as outlined in ISO/IEC FDIS 23001-7:2011 "Common encryption in ISO base media file format files". 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md)


**API Level:**
  * 20




-----------


## Functions Documentation

### MLMediaCodecCallbacksExInit {#void-mlmediacodeccallbacksexinit}

```cpp
static inline void MLMediaCodecCallbacksExInit(
    MLMediaCodecCallbacksEx * inout_callbacks
)
```

Initializes [MLMediaCodecCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md) with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaCodecCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md) * |inout_callbacks|MediaCodec Callback structure defined by [MLMediaCodecCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md) that needs to be initialized. |




-----------

### MLMediaCodecOutputFrameListenerInit {#void-mlmediacodecoutputframelistenerinit}

```cpp
static inline void MLMediaCodecOutputFrameListenerInit(
    MLMediaCodecOutputFrameListener * inout_callbacks
)
```

Initializes [MLMediaCodecOutputFrameListener](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md) with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaCodecOutputFrameListener](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md) * |inout_callbacks|MediaCodec Callback structure defined by [MLMediaCodecOutputFrameListener](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md) that needs to be initialized. |




-----------

### MLMediaCodecCryptoInfoInit {#void-mlmediacodeccryptoinfoinit}

```cpp
static inline void MLMediaCodecCryptoInfoInit(
    MLMediaCodecCryptoInfo * inout_crypto_info
)
```

Initializes [MLMediaCodecCryptoInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md) with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaCodecCryptoInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md) * |inout_crypto_info|CryptoInfo structure defined by [MLMediaCodecCryptoInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md) that needs to be initialized. |




-----------

### MLMediaCodecCreateCryptoInfo {#mlresult-mlmediacodeccreatecryptoinfo}

```cpp
MLResult MLMediaCodecCreateCryptoInfo(
    const MLMediaCodecCryptoInfo * crypto_info,
    MLHandle * out_crypto_info_handle
)
```

Create a Crypto Info object. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLMediaCodecCryptoInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_crypto_info.md) * |crypto_info|Input Structure that encapsulates sample crypto info. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_crypto_info_handle|Upon successful return will point to handle to the created Crypto info. Or else, it will point to [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded.|
**Required Permissions**:

  * None 


The CryptoInfo object should be released by calling [MLMediaCodecReleaseCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecreleasecryptoinfo).




**API Level:**
  * 20




-----------

### MLMediaCodecReleaseCryptoInfo {#mlresult-mlmediacodecreleasecryptoinfo}

```cpp
MLResult MLMediaCodecReleaseCryptoInfo(
    MLHandle crypto_info_handle
)
```

Release the Crypto Info created by [MLMediaCodecCreateCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreatecryptoinfo). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |crypto_info_handle|Handle to Crypto info that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaCodecCreateCodec {#mlresult-mlmediacodeccreatecodec}

```cpp
MLResult MLMediaCodecCreateCodec(
    MLMediaCodecCreation method,
    MLMediaCodecType type,
    const char * name_str,
    MLHandle * out_handle
)
```

Create a new MLMediaCodec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaCodecCreation](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccreation) |method|One of the creation methods defined by [MLMediaCodecCreation](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccreation). |
| [MLMediaCodecType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodectype) |type|One of the codec types defined by [MLMediaCodecType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodectype). |
| const char * |name_str|If creating a codec by name, this is the name of the codec. If creating a codec by type, this is the mime type of the codec. Refer to APIs in MLMediaCodecList for retrieving the list of names and mime types of supported codecs. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Upon successful return will point to handle to the created MLMediaCodec. Or else, it will point to [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaCodec object was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecDestroy {#mlresult-mlmediacodecdestroy}

```cpp
MLResult MLMediaCodecDestroy(
    MLHandle handle
)
```

Destroy a MLMediaCodec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLMediaCodec object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaCodec object was successfully destroyed. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecSetCallbacksEx {#mlresult-mlmediacodecsetcallbacksex}

```cpp
MLResult MLMediaCodecSetCallbacksEx(
    MLHandle handle,
    MLMediaCodecCallbacksEx * callbacks,
    void * user_data
)
```

Set callbacks to notify client codec events. Client needs to implement the callback functions. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| [MLMediaCodecCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_callbacks_ex.md) * |callbacks|Set of codec callbacks. Can be set to NULL to unset all the callback altogether. |
| void * |user_data|Pointer to user payload data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLMediaCodec object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|callback was set successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


If the client intends to use the codec component in asynchronous mode, a valid callback should be provided before MLMediaCodecConfigure is called. When asynchronous callback is enabled, the client should not call:

* MLMediaCodecDequeueInputBuffer
* MLMediaCodecDequeueOutputBuffer Calling those functions will return MLMediaGenericResult_InvalidOperation.
Also, [MLMediaCodecFlush()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecflush) behaves differently in asynchronous mode. After calling MLMediaCodecFlush, you must call [MLMediaCodecStart()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecstart) to "resume" receiving input buffers, even if an input surface was created.




**API Level:**
  * 20




-----------

### MLMediaCodecSetOutputFrameListener {#mlresult-mlmediacodecsetoutputframelistener}

```cpp
MLResult MLMediaCodecSetOutputFrameListener(
    MLHandle handle,
    MLMediaCodecOutputFrameListener * callbacks,
    void * user_data
)
```

Registers a callback to be invoked when an output frame is available or rendered on the output surface. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| [MLMediaCodecOutputFrameListener](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md) * |callbacks|Set of codec callbacks. Can be set to NULL to unset all the callback altogether. |
| void * |user_data|Pointer to user payload data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLMediaCodec object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|callback was set successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


This method can be called in any codec state, but will only have an effect in the "Executing" state for codecs that render buffers to the output surface.

Note:

* This callback is for informational purposes only: to get precise render timing samples, and can be significantly delayed and batched. Some frames may have been rendered even if there was no callback generated.
* This callback doesn't set the codec to operate in asynchrous mode.
* Since audio codec doesn't use Surface, this callback as no effect when audio codec is instantiated.




**API Level:**
  * 20




-----------

### MLMediaCodecGetName {#mlresult-mlmediacodecgetname}

```cpp
MLResult MLMediaCodecGetName(
    MLHandle handle,
    char * out_name
)
```

Obtain the name of the created codec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| char * |out_name|Pointer to the user-maintained buffer for storing the output C-style name string.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaCodec name was retrieved successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall allocate at least [MAX_CODEC_NAME_SIZE](/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-codec-name-size) bytes of memory for storing the output name string.





-----------

### MLMediaCodecConfigure {#mlresult-mlmediacodecconfigure}

```cpp
MLResult MLMediaCodecConfigure(
    MLHandle handle,
    MLHandle format_handle,
    MLHandle surface_handle,
    MLHandle crypto_handle
)
```

Configure the MLMediaCodec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |format_handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the #MediaFormat object. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |surface_handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the Surface object. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |crypto_handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the #MediaCrypto object. Pass 0 for clear content.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaCodec was configured successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Encoder configuration: surface_handle and crypto_handle should be 0. Decoder Configuration: The surface_handle should be provided if using output surface. The crypto_handle should be provided for encrypted content.

The output surface can be:

* Native surface created by [MLNativeSurfaceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate).
* Native surface texture created by [MLNativeSurfaceTextureCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturecreate).
* The surface object created on an encoder using [MLMediaCodecCreateInputSurface()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreateinputsurface).
* Pass 0 or ML_INVALID_HANDLE if the codec does not generate raw video output (e.g. not a video decoder) and/or if you want to configure the codec with CPU bound output buffers. NOTE that:


1. For the first 3 cases (above), the decoded output of the decoder will be consumed direclty by the surface. This allows implementation of fast, zero-copy raw video consumption operation. Also, calling [MLMediaCodecGetOutputBufferPointer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetoutputbufferpointer) will return MLMediaGenericResult_InvalidOperation
2. For the last case, user will have to explictly consume the output of the decoder by calling [MLMediaCodecGetOutputBufferPointer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetoutputbufferpointer).




**API Level:**
  * 6




-----------

### MLMediaCodecStart {#mlresult-mlmediacodecstart}

```cpp
MLResult MLMediaCodecStart(
    MLHandle handle
)
```

Start the codec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLMediaCodec object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaCodec was started successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Shall be called upon successful configuration.





-----------

### MLMediaCodecStop {#mlresult-mlmediacodecstop}

```cpp
MLResult MLMediaCodecStop(
    MLHandle handle
)
```

Stop the codec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLMediaCodec object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaCodec was stopped successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Codec is stopped and not destroyed, therefore can be started again.





-----------

### MLMediaCodecReset {#mlresult-mlmediacodecreset}

```cpp
MLResult MLMediaCodecReset(
    MLHandle handle
)
```

Reset the codec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLMediaCodec object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaCodec was stopped successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


This will reset the codec to initial (Uninitialized) state. Call this when:

* Input or output queuing operation fails.
* An error is notified through the asynchronous event MLMediaCodecCallbacks.on_error.
Resetting a codec can fail when an unrecoverable error occurs (which is Hardare codec implementation specific), in which case codec will be in unusable state and should be destroyed using [MLMediaCodecDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdestroy).




**API Level:**
  * 20




-----------

### MLMediaCodecFlush {#mlresult-mlmediacodecflush}

```cpp
MLResult MLMediaCodecFlush(
    MLHandle handle
)
```

Flush the both the input and output ports of the codec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLMediaCodec object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaCodec was flushed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Upon return, all indices previously returned in calls to [MLMediaCodecDequeueInputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueinputbuffer) and [MLMediaCodecDequeueOutputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueoutputbuffer) become invalid, and all buffers are owned by the codec.





-----------

### MLMediaCodecSetParameters {#mlresult-mlmediacodecsetparameters}

```cpp
MLResult MLMediaCodecSetParameters(
    MLHandle handle,
    MLHandle format_handle
)
```

Communicate additional parameter changes to a codec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |format_handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat containing the parameters to set.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|At least one of the input parameters or one of the format parameter values is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|At least one format parameter is not applicable. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|MLMediaCodec was not initialized. |
Dynamically modify or add configuration parameters to a configured or started codec.

Create an empty MLMediaFormat object using [MLMediaFormatCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreate) and set the appropriate parameters. For more details, refer to [ml_media_format.h](/api-ref/api/Files/ml__media__format_8h.md#files-ml-media-format.h).


Parameters and associated values that may be applied are:

* MLMediaFormat_Key_Parameter_Video_Bitrate: Dynamically change the video encoder's target bitrate. Associated value is an int32_t representing the new encode bitrate in bits-per-second. Applicable to any video encoder.
* MLMediaFormat_Key_Parameter_Request_Sync_Frame: Communicate to the encoder to produce a sync frame soon. Associated value is an int32_t with the value 0. Applicable to any video encoder.
* MLMediaFormat_Key_Parameter_Drop_After: Set the time after which samples should be dropped and not submitted to the encoder. Associated value is an int64_t value representing the system time in micro-seconds. Applicable to an encoder receiving input from a surface.
* MLMediaFormat_Key_Parameter_Drop_Before: Set the time before which samples should be dropped and not submitted to the encoder. Associated value is an int64_t value representing the system time in micro-seconds. Applicable to an encoder receiving input from a surface.
* MLMediaFormat_Key_Parameter_Set_Suspend: Temporarily suspend or resume video encoding of input data. When suspended, all incoming buffers are discarded until suspension is lifted. Used in conjunction with MLMediaFormat_Key_Parameter_Set_Suspend_Time to speficy the time of suspension or resumption. Associated value is an int32_t value with the value 1 or 0 to suspend or resume, respectively. Applicable to an encoder receiving input from a surface.
* MLMediaFormat_Key_Parameter_Set_Suspend_Time: Specifies the time when the action associated with the value of MLMediaFormat_Key_Parameter_Set_Suspend should take effect. Associated value is an int64_t value representing the system time, in micro-seconds, indicating when suspendion or resumption takes effect. Applicable to an encoder receiving input from a surface.
* MLMediaFormat_Key_Parameter_Time_Offset: Describes an offset to adjust timestamps going forward on a video endcoder. Associated value is an int64_t value representing the offset timestamp, in micro-seconds. Applicable to an encoder receiving input from a surface.
* MLMediaFormat_Key_Operating_Rate: Describes the rate at which a codec is expected to operate. For video, this is the operating frame rate; for audio, this is the sample rate. Associated value is a float value representing either the frames-per-second or the samples-per-second for video or audio, respectively. Applicable to any codec. Note: This key is ignored if it fails to apply. Note: This key can also be set as part of the MLMediaFormat provided at configure-time.
* MLMediaFormat_Key_Intra_Refresh_Period: Describes the period of intra refresh in frames. Associated value is a int32_t value representing the period in frames after which the whole frame is completely refreshed. Applicable to any video encoder. Note: This key is ignored if not supported by the codec or it fails to apply. Note: This key can also be set as part of the MLMediaFormat provided at configure-time.
* MLMediaFormat_Key_Latency: Describes the latency, in frames, a video encoder should have queued up before outputting at least one output frame. Associated value is an int32_t value representing the latency, in number of frames. Applicable to any video encoder. Note: This key is ignored if not supported by the codec or it fails to apply. Note: This key can also be set as part of the MLMediaFormat provided at configure-time.



:::note
Some of these parameter changes may silently fail to apply. Unless specified below, an error will be returned on unsuccesful application.
:::


**API Level:**
  * 9




-----------

### MLMediaCodecGetInputBufferPointer {#mlresult-mlmediacodecgetinputbufferpointer}

```cpp
MLResult MLMediaCodecGetInputBufferPointer(
    MLHandle handle,
    int64_t buffer_index,
    uint8_t ** out_buffer_ptr,
    size_t * out_buffer_size
)
```

Obtain a writable buffer pointer for a dequeued input buffer index to contain the input data. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| int64_t |buffer_index|The index of a client-owned input buffer previously returned from a call to [MLMediaCodecDequeueInputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueinputbuffer). |
| uint8_t ** |out_buffer_ptr|Pointer to returned input buffer. |
| size_t * |out_buffer_size|Size of returned input buffer.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Input buffer pointer is retrieved successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Buffer pointer could not be retrieved. Note that this API returns MLMediaGenericResult_InvalidOperation especially if video encoder has hardware input surface (see [MLMediaCodecCreateInputSurface](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreateinputsurface)), and thus, out_buffer_ptr will be set to NULL and out_buffer_size set to 0.|
**Required Permissions**:

  * None 


After calling this method any buffer pointer previously returned for the same input index MUST no longer be used.

Note: For VIDEO encoder, this API will fail if an input surface was created by [MLMediaCodecCreateInputSurface](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreateinputsurface) (see return value documentation below).




**API Level:**
  * 20




-----------

### MLMediaCodecGetOutputBufferPointer {#mlresult-mlmediacodecgetoutputbufferpointer}

```cpp
MLResult MLMediaCodecGetOutputBufferPointer(
    MLHandle handle,
    int64_t buffer_index,
    const uint8_t ** out_buffer_ptr,
    size_t * out_buffer_size
)
```

Obtain a read-only buffer pointer for a dequeued output buffer index. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| int64_t |buffer_index|The index of a client-owned output buffer previously returned from a call to [MLMediaCodecDequeueOutputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueoutputbuffer). |
| const uint8_t ** |out_buffer_ptr|Pointer to returned output buffer. |
| size_t * |out_buffer_size|Size of returned output buffer.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Output buffer pointer is retrieved successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Buffer pointer could not be retrieved. Note that this API returns MLMediaGenericResult_InvalidOperation especially if codec was VIDEO and configured with a hardware surface using [MLMediaCodecConfigure()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecconfigure), and thus, out_buffer_ptr will be set to NULL and out_buffer_size set to 0 since decoded buffer lives in GPU memory and is not accessible via a pointer.|
**Required Permissions**:

  * None 


The position and limit of the returned buffer are set to the valid output data. After calling this method any buffer pointer previously returned for the same output index MUST no longer be used.

Note: For VIDEO decoder, this API will fail if codec was configured with a hardware surface (see return value documentation below).




**API Level:**
  * 20




-----------

### MLMediaCodecQueueInputBuffer {#mlresult-mlmediacodecqueueinputbuffer}

```cpp
MLResult MLMediaCodecQueueInputBuffer(
    MLHandle handle,
    int64_t buffer_index,
    int64_t offset,
    size_t size,
    uint64_t time_us,
    int flags
)
```

After filling a range of the input buffer at the specified index submit it to the component. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| int64_t |buffer_index|Index of a client-owned input buffer previously returned in a call to [MLMediaCodecDequeueInputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueinputbuffer). |
| int64_t |offset|Byte offset into the input buffer at which the data starts. |
| size_t |size|Number of bytes of valid input data. |
| uint64_t |time_us|Presentation timestamp in microseconds for this buffer. This is normally the media time at which this buffer should be presented (rendered). |
| int |flags|A bitmask of flags defined by [MLMediaCodecBufferFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag). While not prohibited, most codecs do not use the [MLMediaCodecBufferFlag_KeyFrame](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-keyframe) flag for input buffers.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Intput buffer is queued successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Once an input buffer is queued to the codec, it MUST NOT be used until it is later retrieved by [MLMediaCodecGetInputBufferPointer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetinputbufferpointer) in response to a [MLMediaCodecDequeueInputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueinputbuffer) return value.




**API Level:**
  * 20




-----------

### MLMediaCodecQueueSecureInputBuffer {#mlresult-mlmediacodecqueuesecureinputbuffer}

```cpp
MLResult MLMediaCodecQueueSecureInputBuffer(
    MLHandle handle,
    int64_t buffer_index,
    int64_t offset,
    MLHandle crypto_info_handle,
    uint64_t time_us,
    int flags
)
```

Similar to queueInputBuffer but submits a buffer that is potentially encrypted. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| int64_t |buffer_index|Index of a client-owned input buffer previously returned in a call to [MLMediaCodecDequeueInputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueinputbuffer). |
| int64_t |offset|Byte offset into the input buffer at which the data starts. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |crypto_info_handle|Metadata required to facilitate decryption, the object can be reused immediately after this call returns. |
| uint64_t |time_us|Presentation timestamp in microseconds for this buffer. This is normally the media time at which this buffer should be presented (rendered). |
| int |flags|A bitmask of flags defined by [MLMediaCodecBufferFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag). While not prohibited, most codecs do not use the [MLMediaCodecBufferFlag_KeyFrame](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-keyframe) flag for input buffers.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Secure Intput buffer is queued successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaCodecDequeueInputBuffer {#mlresult-mlmediacodecdequeueinputbuffer}

```cpp
MLResult MLMediaCodecDequeueInputBuffer(
    MLHandle handle,
    int64_t timeout_us,
    int64_t * out_buffer_index
)
```

Dequeue an input buffer from buffer queue. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| int64_t |timeout_us|Timeout in microseconds. Negative timeout indicates "infinite". |
| int64_t * |out_buffer_index|Index of an Input buffer from buffer queue, or [MLMediaCodec_TryAgainLater](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodec-tryagainlater) status.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Intput buffer is dequeued successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|if the codec is configured to operate in async mode.|
**Required Permissions**:

  * None 


This method will return immediately if timeoutUs == 0, wait indefinitely for the availability of an input buffer if timeoutUs < 0 or wait up to "timeoutUs" microseconds if timeoutUs > 0.




**API Level:**
  * 20




-----------

### MLMediaCodecDequeueOutputBuffer {#mlresult-mlmediacodecdequeueoutputbuffer}

```cpp
MLResult MLMediaCodecDequeueOutputBuffer(
    MLHandle handle,
    MLMediaCodecBufferInfo * out_buffer_info,
    int64_t timeout_us,
    int64_t * out_buffer_index
)
```

Dequeue an output buffer from buffer queue. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| [MLMediaCodecBufferInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_buffer_info.md) * |out_buffer_info|Will be filled with buffer meta data. |
| int64_t |timeout_us|Timeout in microseconds. Negative timeout indicates "infinite". |
| int64_t * |out_buffer_index|Index of an output buffer from buffer queue, or one of the statuses defined by [MLMediaCodecOutputBufferStatus](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecoutputbufferstatus).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Output buffer is dequeued successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|if the codec is configured to operate in async mode.|
**Required Permissions**:

  * None 


This method will return immediately if timeoutUs == 0, wait indefinitely for the availability of an input buffer if timeoutUs < 0 or wait up to "timeoutUs" microseconds if timeoutUs > 0.




**API Level:**
  * 20




-----------

### MLMediaCodecGetInputFormat {#mlresult-mlmediacodecgetinputformat}

```cpp
MLResult MLMediaCodecGetInputFormat(
    MLHandle handle,
    MLHandle * out_format_handle
)
```

Obtain input format supported by the codec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_format_handle|Input format supported by the codec.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Input Media format is retrieved successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Call this function, after successful codec configuration, to determine what optional configuration parameters were supported by the codec.





-----------

### MLMediaCodecGetOutputFormat {#mlresult-mlmediacodecgetoutputformat}

```cpp
MLResult MLMediaCodecGetOutputFormat(
    MLHandle handle,
    MLHandle * out_format_handle
)
```

Return output format supported by the codec, or the format to which the configuration has changed. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_format_handle|Output format supported by the codec, or the format to which the configuration has changed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Output Media format is retrieved successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecCreateInputSurface {#mlresult-mlmediacodeccreateinputsurface}

```cpp
MLResult MLMediaCodecCreateInputSurface(
    MLHandle handle,
    MLHandle * out_input_surface_handle
)
```

Create an input surface for a hardware encoder. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_input_surface_handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to created input native surface. Valid only if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|The operation failed to allocate the surface. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Input input surface was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_AlreadyExists|An input surface has already been created for the given handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|MLMediaCodec is not an encoder. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|MLMediaCodec was not initialized. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_UnspecifiedFailure|Input surface could not be created.|
**Required Permissions**:

  * None 


Requests an input surface to use as the input to an encoder, in place of input buffers.

This API must only be called after [MLMediaCodecConfigure()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecconfigure) and before [MLMediaCodecStart()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecstart) otherwise the operation will fail and an input surface cannot be created.

An input surface allows video consumers, such as a video encoder, to process raw input video buffers natively. The input surface is intended to act as a destination surface for your input data.

When using an input surface, there are no accessible input buffers, as buffers are automatically passed from the input surface to the codec. In synchronous mode, calling [MLMediaCodecDequeueInputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueinputbuffer) will return MLMediaGenericResult_InvalidOperation. In asynchronous mode, the client will not be notified when an input buffer is available (i.e. the on_input_buffer_available callback will not fire).

The returned input surface can be passed as a destination surface to a decoder when calling [MLMediaCodecConfigure()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecconfigure). Decoded output of the decoder can be consumed direclty as input to an encoder without copying. This allows implementation of fast, zero-copy transcoding.

The returned input surface can also be passed as a destination surface to:

* A video capture session when using [MLCameraConnectFlag_CamOnly](/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag-camonly).
* A virtual capture session when using [MLCameraConnectFlag_VirtualOnly](/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag-virtualonly) .
* A mixed reality capture session when using [MLCameraConnectFlag_MR](/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag-mr). Captured raw video frames will be consumed directly as input to an encoder without copying.
The user of this API is responsible for calling #MLMediaCodecReleaseSurface() on the Surface when done.




**API Level:**
  * 9




-----------

### MLMediaCodecDestroyInputSurface {#mlresult-mlmediacodecdestroyinputsurface}

```cpp
MLResult MLMediaCodecDestroyInputSurface(
    MLHandle handle,
    MLHandle input_surface_handle
)
```

Release the Surface that was created by [MLMediaCodecCreateInputSurface](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreateinputsurface). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |input_surface_handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the internal Surface object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Surface object was successfully released. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|MLMediaCodec is not an encoder. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|MLMediaCodec was not initialized.|
**Required Permissions**:

  * None





**API Level:**
  * 9




-----------

### MLMediaCodecSignalEndOfInputStream {#mlresult-mlmediacodecsignalendofinputstream}

```cpp
MLResult MLMediaCodecSignalEndOfInputStream(
    MLHandle handle
)
```

Signal end-of-stream on input to a surface. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidOperation|MLMediaCodec is not an encoder or MLMediaCodec is not receving input from a surface. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|MLMediaCodec was not initialized. |
This may only be used with encoders receiving input from a surface created by [MLMediaCodecCreateInputSurface()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreateinputsurface).

Equivalent to submitting an empty buffer with MLMediaCodecBufferFlag_EOS set when queueing an input buffer.




**API Level:**
  * 9




-----------

### MLMediaCodecReleaseOutputBuffer {#mlresult-mlmediacodecreleaseoutputbuffer}

```cpp
MLResult MLMediaCodecReleaseOutputBuffer(
    MLHandle handle,
    int64_t buffer_index,
    bool render
)
```

Release buffer to codec or to render it on output surface. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec object. |
| int64_t |buffer_index|Index of a client-owned output buffer previously returned from a call to [MLMediaCodecDequeueOutputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueoutputbuffer). |
| bool |render|If a valid surface was specified when configuring the codec, passing `true` renders this output buffer to the surface.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Output buffer was released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


If codec is configured with an output surface, setting render to `true` will send the buffer to that output surface. The surface will release the buffer back to the codec once it is no longer used/displayed.

Once an output buffer is released to codec, it MUST NOT be used until it is later retrieved by [MLMediaCodecGetOutputBufferPointer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecgetoutputbufferpointer) in response to a [MLMediaCodecDequeueOutputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueoutputbuffer) return value.




**API Level:**
  * 20




-----------

### MLMediaCodecReleaseOutputBufferAtTime {#mlresult-mlmediacodecreleaseoutputbufferattime}

```cpp
MLResult MLMediaCodecReleaseOutputBufferAtTime(
    MLHandle handle,
    int64_t buffer_index,
    int64_t timestamp_ns
)
```

Update surface timestamp and returns it to the codec to render it on the output surface. If codec is not configured with output surface, this call simply returns the buffer to codec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCodec object. |
| int64_t |buffer_index|Index of a client-owned output buffer previously returned from a call to [MLMediaCodecDequeueOutputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueoutputbuffer). |
| int64_t |timestamp_ns|The timestamp in nanoseconds to associate with this buffer when it is sent to the Surface.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Output buffer was released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The timestamp may have special meaning depending on the destination surface.




**API Level:**
  * 20




-----------



## Macros Documentation

### MAX_CODEC_NAME_SIZE {#defines-max-codec-name-size}

```cpp
#define MAX_CODEC_NAME_SIZE 64
```






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

typedef struct MLMediaCodecBufferInfo {
  size_t offset;
  size_t size;
  size_t flags;
  int64_t presentation_time_us;
} MLMediaCodecBufferInfo;

typedef enum MLMediaCodecCreation {
  MLMediaCodecCreation_ByName,
  MLMediaCodecCreation_ByType,
  MLMediaCodecCreation_Ensure32Bits = 0x7FFFFFFF
} MLMediaCodecCreation;

typedef enum MLMediaCodecType {
  MLMediaCodecType_Encoder,
  MLMediaCodecType_Decoder,
  MLMediaCodecType_Ensure32Bits = 0x7FFFFFFF
} MLMediaCodecType;

typedef enum MLMediaCodecBufferFlag {
  MLMediaCodecBufferFlag_KeyFrame     = 1,
  MLMediaCodecBufferFlag_CodecConfig  = 2,
  MLMediaCodecBufferFlag_EOS          = 4,
  MLMediaCodecBufferFlag_PartialFrame = 8,
  MLMediaCodecBufferFlag_MuxerData = 16,
  MLMediaCodecBufferFlag_Ensure32Bits = 0x7FFFFFFF
} MLMediaCodecBufferFlag;

typedef enum MLMediaCodecOutputBufferStatus {
  MLMediaCodec_OutputBuffersChanged           = -1014,
  MLMediaCodec_FormatChanged                  = -1012,
  MLMediaCodec_TryAgainLater                  = -11,
  MLMediaCodecOutputBufferStatus_Ensure32Bits = 0x7FFFFFFF
} MLMediaCodecOutputBufferStatus;

#define MAX_CODEC_NAME_SIZE 64

typedef struct MLMediaCodecInputBufferInfo {
  int64_t input_buffer_index;
  void *data;
} MLMediaCodecInputBufferInfo;

typedef struct MLMediaCodecOutputBufferInfo {
  int64_t output_buffer_index;
  MLMediaCodecBufferInfo *buffer_info;
  void *data;
} MLMediaCodecOutputBufferInfo;

typedef struct MLMediaCodecOutputFormatInfo {
  MLHandle new_output_format;
  void *data;
} MLMediaCodecOutputFormatInfo;

typedef struct MLMediaCodecErrorInfo {
  int error_code;
  void *data;
} MLMediaCodecErrorInfo;

typedef struct MLMediaCodecCallbacksEx {
  uint32_t version;

  void (*on_input_buffer_available)(MLHandle media_codec, const MLMediaCodecInputBufferInfo *info);

  void (*on_output_buffer_available)(MLHandle media_codec, const MLMediaCodecOutputBufferInfo *info);

  void (*on_output_format_changed)(MLHandle media_codec, const MLMediaCodecOutputFormatInfo *info);

  void (*on_error)(MLHandle media_codec, const MLMediaCodecErrorInfo *info);
} MLMediaCodecCallbacksEx;

ML_STATIC_INLINE void MLMediaCodecCallbacksExInit(MLMediaCodecCallbacksEx *inout_callbacks) {
  if (inout_callbacks) {
    inout_callbacks->version = 1;
    inout_callbacks->on_input_buffer_available = NULL;
    inout_callbacks->on_output_buffer_available = NULL;
    inout_callbacks->on_output_format_changed = NULL;
    inout_callbacks->on_error = NULL;
  }
}

typedef struct MLMediaCodecFrameRenderedInfo {
  int64_t presentation_time_us;
  int64_t system_time_nano;
  void *data;
} MLMediaCodecFrameRenderedInfo;

typedef struct MLMediaCodecOutputFrameListener {
  uint32_t version;

  void (*on_frame_rendered)(MLHandle media_codec, const MLMediaCodecFrameRenderedInfo *info);
} MLMediaCodecOutputFrameListener;

ML_STATIC_INLINE void MLMediaCodecOutputFrameListenerInit(MLMediaCodecOutputFrameListener *inout_callbacks) {
  if (inout_callbacks) {
    inout_callbacks->version = 1;
    inout_callbacks->on_frame_rendered = NULL;
  }
}

typedef enum MLMediaCodecCryptoMode {
  MLMediaCodecCryptoMode_Clear,
  MLMediaCodecCryptoMode_CTR,
  MLMediaCodecCryptoMode_CBC,
  MLMediaCodecCryptoMode_Ensure32Bits = 0x7FFFFFFF
} MLMediaCodecCryptoMode;

typedef struct MLMediaCodecCryptoPattern {
  size_t encrypt_blocks;
  size_t skip_blocks;
} MLMediaCodecCryptoPattern;

typedef struct MLMediaCodecCryptoInfo {
  uint32_t version;

  size_t                    number_of_subsamples;
  MLMediaCodecCryptoMode    crypto_mode;
  MLMediaCodecCryptoPattern crypto_pattern;
  const uint8_t*            key;
  const uint8_t*            iv;
  const size_t*             bytes_of_clear_data;
  const size_t*             bytes_of_encrypted_data;
} MLMediaCodecCryptoInfo;

ML_STATIC_INLINE void MLMediaCodecCryptoInfoInit(MLMediaCodecCryptoInfo *inout_crypto_info) {
  if (inout_crypto_info) {
    inout_crypto_info->version = 1;
    inout_crypto_info->number_of_subsamples = 0;
    inout_crypto_info->crypto_mode = MLMediaCodecCryptoMode_Clear;
    inout_crypto_info->crypto_pattern.encrypt_blocks = 0;
    inout_crypto_info->crypto_pattern.skip_blocks = 0;
    inout_crypto_info->key = NULL;
    inout_crypto_info->iv = NULL;
    inout_crypto_info->bytes_of_clear_data = NULL;
    inout_crypto_info->bytes_of_encrypted_data = NULL;
  }
}

ML_API MLResult ML_CALL MLMediaCodecCreateCryptoInfo(const MLMediaCodecCryptoInfo *crypto_info, MLHandle *out_crypto_info_handle);

ML_API MLResult ML_CALL MLMediaCodecReleaseCryptoInfo(MLHandle crypto_info_handle);

ML_API MLResult ML_CALL MLMediaCodecCreateCodec(MLMediaCodecCreation method, MLMediaCodecType type, const char *name_str, MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaCodecDestroy(MLHandle handle);

ML_API MLResult ML_CALL MLMediaCodecSetCallbacksEx(MLHandle handle, MLMediaCodecCallbacksEx *callbacks, void *user_data);

ML_API MLResult ML_CALL MLMediaCodecSetOutputFrameListener(MLHandle handle, MLMediaCodecOutputFrameListener *callbacks, void *user_data);

ML_API MLResult ML_CALL MLMediaCodecGetName(MLHandle handle, char *out_name);

ML_API MLResult ML_CALL MLMediaCodecConfigure(MLHandle handle, MLHandle format_handle, MLHandle surface_handle, MLHandle crypto_handle);

ML_API MLResult ML_CALL MLMediaCodecStart(MLHandle handle);

ML_API MLResult ML_CALL MLMediaCodecStop(MLHandle handle);

ML_API MLResult ML_CALL MLMediaCodecReset(MLHandle handle);

ML_API MLResult ML_CALL MLMediaCodecFlush(MLHandle handle);

ML_API MLResult ML_CALL MLMediaCodecSetParameters(MLHandle handle, MLHandle format_handle);

ML_API MLResult ML_CALL MLMediaCodecGetInputBufferPointer(MLHandle handle, int64_t buffer_index, uint8_t **out_buffer_ptr, size_t *out_buffer_size);

ML_API MLResult ML_CALL MLMediaCodecGetOutputBufferPointer(MLHandle handle, int64_t buffer_index, const uint8_t **out_buffer_ptr, size_t *out_buffer_size);

ML_API MLResult ML_CALL MLMediaCodecQueueInputBuffer(MLHandle handle, int64_t buffer_index, int64_t offset, size_t size, uint64_t time_us, int flags);

ML_API MLResult ML_CALL MLMediaCodecQueueSecureInputBuffer(MLHandle handle, int64_t buffer_index, int64_t offset, MLHandle crypto_info_handle, uint64_t time_us, int flags);

ML_API MLResult ML_CALL MLMediaCodecDequeueInputBuffer(MLHandle handle, int64_t timeout_us, int64_t *out_buffer_index);

ML_API MLResult ML_CALL MLMediaCodecDequeueOutputBuffer(MLHandle handle, MLMediaCodecBufferInfo *out_buffer_info, int64_t timeout_us, int64_t *out_buffer_index);

ML_API MLResult ML_CALL MLMediaCodecGetInputFormat(MLHandle handle, MLHandle *out_format_handle);

ML_API MLResult ML_CALL MLMediaCodecGetOutputFormat(MLHandle handle, MLHandle *out_format_handle);

ML_API MLResult ML_CALL MLMediaCodecCreateInputSurface(MLHandle handle, MLHandle *out_input_surface_handle);

ML_API MLResult ML_CALL MLMediaCodecDestroyInputSurface(MLHandle handle, MLHandle input_surface_handle);

ML_API MLResult ML_CALL MLMediaCodecSignalEndOfInputStream(MLHandle handle);

ML_API MLResult ML_CALL MLMediaCodecReleaseOutputBuffer(MLHandle handle, int64_t buffer_index, bool render);

ML_API MLResult ML_CALL MLMediaCodecReleaseOutputBufferAtTime(MLHandle handle, int64_t buffer_index, int64_t timestamp_ns);

ML_EXTERN_C_END
```



