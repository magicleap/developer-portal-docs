---
title: Media Player
summary: output posistion. position implies, the location of a speaker or a microphone for recording or playback. 

---

# Media Player

Defines Audio Channel Mask to describe the input/output posistion. Position implies, the location of a speaker or a microphone for recording or playback.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLCea608CaptionStyleColor](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_style_color.md)** <br></br>Cea608 caption style and color.  |
| struct | **[MLCea608CaptionPAC](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_p_a_c.md)** <br></br>Cea608 caption preamble address code.  |
| struct | **[MLCea608CaptionLineEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_line_ex.md)** <br></br>Cea608 caption line structure.  |
| struct | **[MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md)** <br></br>Cea608 caption segment structure.  |
| struct | **[MLCea708CaptionColor](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_color.md)** <br></br>Cea708 Caption Color.  |
| struct | **[MLCea708CaptionPenAttr](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_attr.md)** <br></br>Cea708 Caption Pen Attributes.  |
| struct | **[MLCea708CaptionPenColor](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_color.md)** <br></br>Cea708 Caption Pen Color.  |
| struct | **[MLCea708CaptionPenLocation](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_location.md)** <br></br>Cea708 Caption Pen Location.  |
| struct | **[MLCea708CaptionWindowAttr](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window_attr.md)** <br></br>Cea708 Caption Window Attributes.  |
| struct | **[MLCea708CaptionWindow](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window.md)** <br></br>Cea708 Caption Window.  |
| struct | **[MLCea708CaptionEvent](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_event.md)** <br></br>Cea708 Caption Event.  |
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
| struct | **[MLMediaCodecListQueryResults](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md)**  |
| struct | **[MLMediaCodecListProfileLevel](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md)** <br></br>Used to store the list of codec profile levels.  |
| struct | **[MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md)**  |
| struct | **[MLMediaDRMByteArrayList](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array_list.md)**  |
| struct | **[MLMediaDRMKeyValue](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value.md)**  |
| struct | **[MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md)**  |
| struct | **[MLMediaDRMKeyRequestInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_request_input_param.md)**  |
| struct | **[MLMediaDRMRequestMessage](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md)** <br></br>Data type that encapsulates either of the following along with an URL:  |
| struct | **[MLMediaDRMCryptoInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md)**  |
| struct | **[MLMediaDRMHMACInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md)**  |
| struct | **[MLMediaDRMRSAInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_r_s_a_input_param.md)**  |
| struct | **[MLMediaDRMEventInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md)** <br></br>MediaDRM event info associated with a session.  |
| struct | **[MLMediaDRMExpirationUpdateInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_expiration_update_info.md)** <br></br>MediaDRM expiration update info associated with a session.  |
| struct | **[MLMediaDRMKeyStatus](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status.md)** <br></br>MediaDRM key status.  |
| struct | **[MLMediaDRMKeyStatusInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status_info.md)** <br></br>MediaDRM session keys status change info.  |
| struct | **[MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md)** <br></br>Callbacks for notifying client about MLMediaDRM events.  |
| struct | **[MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md)**  |
| struct | **[MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md)**  |
| struct | **[MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md)** <br></br>Data type that encapsulates sample data to be written in to MLMediaMuxer.  |
| struct | **[MLMediaPlayerTrackDRMInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md)** <br></br>MediaPlayer DRM Info for a Media Track.  |
| struct | **[MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md)**  |
| struct | **[MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md)**  |
| struct | **[MLMediaPlayerOnBufferingUpdateInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_buffering_update_info.md)** <br></br>MediaPlayer Buffering update callback Info.  |
| struct | **[MLMediaPlayerOnCompletionInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_completion_info.md)** <br></br>MediaPlayer Playback completion callback Info.  |
| struct | **[MLMediaPlayerOnErrorInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_error_info.md)** <br></br>MediaPlayer Error callback Info.  |
| struct | **[MLMediaPlayerOnInfoInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_info_info.md)** <br></br>MediaPlayer Information callback Info.  |
| struct | **[MLMediaPlayerOnPreparedInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_prepared_info.md)** <br></br>MediaPlayer Playback prepared callback Info.  |
| struct | **[MLMediaPlayerOnSeekCompleteInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_seek_complete_info.md)** <br></br>MediaPlayer Playback seek completion callback Info.  |
| struct | **[MLMediaPlayerOnVideoSizeChangedInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_video_size_changed_info.md)** <br></br>MediaPlayer Video Size Changed callback Info.  |
| struct | **[MLMediaPlayerOnTrackDRMInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_track_d_r_m_info.md)** <br></br>MediaPlayer Track DRM Info callback Info.  |
| struct | **[MLMediaPlayerOnResetCompleteInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_reset_complete_info.md)** <br></br>MediaPlayer reset completion callback Info.  |
| struct | **[MLMediaPlayerOnFramePackingInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_frame_packing_info.md)** <br></br>MediaPlayer frame packing callback Info.  |
| struct | **[MLMediaPlayerEventCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md)** <br></br>Callbacks for notifying client about [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) error events.  |
| struct | **[MLMediaPlayerTrackInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_info.md)** <br></br>MediaPlayer Track Information.  |
| struct | **[MLMediaPlayerTrackDRMSessionInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md)** <br></br>DRM Session information for a MediaPlayer Track.  |
| struct | **[MLMediaPlayerMetrics](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_metrics.md)** <br></br>MediaPlayer metrics data.  |
| struct | **[MLTTMLImage](/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_image.md)** <br></br>Byte data for TTML image cues.  |
| struct | **[MLTTMLData](/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md)** <br></br>TTML data structure.  |
| struct | **[MLPSSHEntry](/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md)**  |
| struct | **[MLWebVTTData](/api-ref/api/Modules/group___media_player/struct_m_l_web_v_t_t_data.md)** <br></br>WebVTT data structure.  |
| struct | **[MLNativeSurfaceFrameAvailableInfo](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_frame_available_info.md)** <br></br>NativeSurface/NativeSurfaceTexture Output Frame Availability information.  |
| struct | **[MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md)** <br></br>Configuration values for creating the Native Surface.  |
| struct | **[MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md)** <br></br>Callbacks for notifying when an output frame is available for consumption.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLCea608CaptionStyleColor](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_style_color.md) | **[MLCea608CaptionStyleColor](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea608captionstylecolor)** <br></br>Cea608 caption style and color.  |
| typedef struct [MLCea608CaptionPAC](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_p_a_c.md) | **[MLCea608CaptionPAC](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea608captionpac)** <br></br>Cea608 caption preamble address code.  |
| typedef struct [MLCea608CaptionLineEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_line_ex.md) | **[MLCea608CaptionLineEx](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea608captionlineex)** <br></br>Cea608 caption line structure.  |
| typedef struct [MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md) | **[MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea608captionsegmentex)** <br></br>Cea608 caption segment structure.  |
| typedef void(*)(MLHandle cc_handle, const MLCea608CaptionSegmentEx *cc_seg, void *data) | **[MLMediaCCParserDisplayChangedCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaccparserdisplaychangedcallback)** <br></br>Callback signature called when Cea608 displayable is changed.  |
| typedef struct [MLCea708CaptionColor](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_color.md) | **[MLCea708CaptionColor](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captioncolor)** <br></br>Cea708 Caption Color.  |
| typedef struct [MLCea708CaptionPenAttr](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_attr.md) | **[MLCea708CaptionPenAttr](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captionpenattr)** <br></br>Cea708 Caption Pen Attributes.  |
| typedef struct [MLCea708CaptionPenColor](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_color.md) | **[MLCea708CaptionPenColor](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captionpencolor)** <br></br>Cea708 Caption Pen Color.  |
| typedef struct [MLCea708CaptionPenLocation](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_location.md) | **[MLCea708CaptionPenLocation](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captionpenlocation)** <br></br>Cea708 Caption Pen Location.  |
| typedef struct [MLCea708CaptionWindowAttr](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window_attr.md) | **[MLCea708CaptionWindowAttr](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captionwindowattr)** <br></br>Cea708 Caption Window Attributes.  |
| typedef struct [MLCea708CaptionWindow](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window.md) | **[MLCea708CaptionWindow](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captionwindow)** <br></br>Cea708 Caption Window.  |
| typedef struct [MLCea708CaptionEvent](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_event.md) | **[MLCea708CaptionEvent](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captionevent)** <br></br>Cea708 Caption Event.  |
| typedef void(*)(MLHandle cc_handle, const MLCea708CaptionEvent *event, void *data) | **[MLMediaCea708ParserEmitEventCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediacea708parseremiteventcallback)** <br></br>Callback signature called when Cea708 parser emits event.  |
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
| typedef struct [MLMediaCodecListQueryResults](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) | **[MLMediaCodecListQueryResults](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodeclistqueryresults)**  |
| typedef struct [MLMediaCodecListProfileLevel](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) | **[MLMediaCodecListProfileLevel](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodeclistprofilelevel)** <br></br>Used to store the list of codec profile levels.  |
| typedef int64_t(*)(MLHandle media_data_source, size_t position, size_t size, uint8_t *buffer, void *context) | **[MLMediaDataSourceReadAt](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-mlmediadatasourcereadat)** <br></br>Called to request data from the given position.  |
| typedef int64_t(*)(MLHandle media_data_source, void *context) | **[MLMediaDataSourceGetSize](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-mlmediadatasourcegetsize)** <br></br>Called to get the size of the data source.  |
| typedef void(*)(MLHandle media_data_source, void *context) | **[MLMediaDataSourceClose](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediadatasourceclose)** <br></br>Called before deleting |this|. The other methods may return errors if they're called after calling close().  |
| typedef struct [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) | **[MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmbytearray)**  |
| typedef struct [MLMediaDRMByteArrayList](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array_list.md) | **[MLMediaDRMByteArrayList](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmbytearraylist)**  |
| typedef struct [MLMediaDRMKeyValue](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value.md) | **[MLMediaDRMKeyValue](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmkeyvalue)**  |
| typedef struct [MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) | **[MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmkeyvaluearray)**  |
| typedef struct [MLMediaDRMKeyRequestInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_request_input_param.md) | **[MLMediaDRMKeyRequestInputParam](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmkeyrequestinputparam)**  |
| typedef struct [MLMediaDRMRequestMessage](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) | **[MLMediaDRMRequestMessage](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmrequestmessage)** <br></br>Data type that encapsulates either of the following along with an URL:  |
| typedef struct [MLMediaDRMCryptoInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md) | **[MLMediaDRMCryptoInputParam](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmcryptoinputparam)**  |
| typedef struct [MLMediaDRMHMACInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md) | **[MLMediaDRMHMACInputParam](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmhmacinputparam)**  |
| typedef struct [MLMediaDRMRSAInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_r_s_a_input_param.md) | **[MLMediaDRMRSAInputParam](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmrsainputparam)**  |
| typedef struct [MLMediaDRMEventInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md) | **[MLMediaDRMEventInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmeventinfo)** <br></br>MediaDRM event info associated with a session.  |
| typedef struct [MLMediaDRMExpirationUpdateInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_expiration_update_info.md) | **[MLMediaDRMExpirationUpdateInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmexpirationupdateinfo)** <br></br>MediaDRM expiration update info associated with a session.  |
| typedef struct [MLMediaDRMKeyStatus](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status.md) | **[MLMediaDRMKeyStatus](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmkeystatus)** <br></br>MediaDRM key status.  |
| typedef struct [MLMediaDRMKeyStatusInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status_info.md) | **[MLMediaDRMKeyStatusInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmkeystatusinfo)** <br></br>MediaDRM session keys status change info.  |
| typedef struct [MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md) | **[MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediadrmeventcallbacks)** <br></br>Callbacks for notifying client about MLMediaDRM events.  |
| typedef [MLPSSHEntry](/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md) | **[MLMediaExtractorPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaextractorpsshentry)**  |
| typedef struct [MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) | **[MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaextractordrmschemeinitdata)**  |
| typedef struct [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) | **[MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaformatbytearray)**  |
| typedef struct [MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) | **[MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediamuxersampledata)** <br></br>Data type that encapsulates sample data to be written in to MLMediaMuxer.  |
| typedef [MLPSSHEntry](/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md) | **[MLMediaPlayerPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaplayerpsshentry)**  |
| typedef struct [MLMediaPlayerTrackDRMInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md) | **[MLMediaPlayerTrackDRMInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayertrackdrminfo)** <br></br>MediaPlayer DRM Info for a Media Track.  |
| typedef struct [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md) | **[MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayersubtitledata)**  |
| typedef struct [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) | **[MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayerbufferingsettings)**  |
| typedef struct [MLMediaPlayerOnBufferingUpdateInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_buffering_update_info.md) | **[MLMediaPlayerOnBufferingUpdateInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayeronbufferingupdateinfo)** <br></br>MediaPlayer Buffering update callback Info.  |
| typedef struct [MLMediaPlayerOnCompletionInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_completion_info.md) | **[MLMediaPlayerOnCompletionInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayeroncompletioninfo)** <br></br>MediaPlayer Playback completion callback Info.  |
| typedef struct [MLMediaPlayerOnErrorInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_error_info.md) | **[MLMediaPlayerOnErrorInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayeronerrorinfo)** <br></br>MediaPlayer Error callback Info.  |
| typedef struct [MLMediaPlayerOnInfoInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_info_info.md) | **[MLMediaPlayerOnInfoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayeroninfoinfo)** <br></br>MediaPlayer Information callback Info.  |
| typedef struct [MLMediaPlayerOnPreparedInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_prepared_info.md) | **[MLMediaPlayerOnPreparedInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayeronpreparedinfo)** <br></br>MediaPlayer Playback prepared callback Info.  |
| typedef struct [MLMediaPlayerOnSeekCompleteInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_seek_complete_info.md) | **[MLMediaPlayerOnSeekCompleteInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayeronseekcompleteinfo)** <br></br>MediaPlayer Playback seek completion callback Info.  |
| typedef struct [MLMediaPlayerOnVideoSizeChangedInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_video_size_changed_info.md) | **[MLMediaPlayerOnVideoSizeChangedInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayeronvideosizechangedinfo)** <br></br>MediaPlayer Video Size Changed callback Info.  |
| typedef struct [MLMediaPlayerOnTrackDRMInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_track_d_r_m_info.md) | **[MLMediaPlayerOnTrackDRMInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayerontrackdrminfo)** <br></br>MediaPlayer Track DRM Info callback Info.  |
| typedef struct [MLMediaPlayerOnResetCompleteInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_reset_complete_info.md) | **[MLMediaPlayerOnResetCompleteInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayeronresetcompleteinfo)** <br></br>MediaPlayer reset completion callback Info.  |
| typedef struct [MLMediaPlayerOnFramePackingInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_frame_packing_info.md) | **[MLMediaPlayerOnFramePackingInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayeronframepackinginfo)** <br></br>MediaPlayer frame packing callback Info.  |
| typedef struct [MLMediaPlayerEventCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md) | **[MLMediaPlayerEventCallbacksEx](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayereventcallbacksex)** <br></br>Callbacks for notifying client about [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) error events.  |
| typedef struct [MLMediaPlayerTrackInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_info.md) | **[MLMediaPlayerTrackInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayertrackinfo)** <br></br>MediaPlayer Track Information.  |
| typedef struct [MLMediaPlayerTrackDRMSessionInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md) | **[MLMediaPlayerTrackDRMSessionInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayertrackdrmsessioninfo)** <br></br>DRM Session information for a MediaPlayer Track.  |
| typedef void(*)(MLHandle media_player, MLMediaPlayerSubtitleData subtitle_data, void *data) | **[MLMediaPlayerOnMediaSubtitleUpdateCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayeronmediasubtitleupdatecallback)** <br></br>Callbacks signature called when subtitle update is available.  |
| typedef void(*)(MLHandle media_player, MLHandle timed_text, void *data) | **[MLMediaPlayerOnMediaTimedTextUpdateCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayeronmediatimedtextupdatecallback)** <br></br>Callbacks signature called when Timed Text update is available.  |
| typedef struct [MLMediaPlayerMetrics](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_metrics.md) | **[MLMediaPlayerMetrics](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaplayermetrics)** <br></br>MediaPlayer metrics data.  |
| typedef void(*)(MLHandle media_stream_source, void *context) | **[MLMediaStreamSourceOnBufferAvailable](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediastreamsourceonbufferavailable)** <br></br>Called when buffers becomes available.  |
| typedef struct [MLTTMLImage](/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_image.md) | **[MLTTMLImage](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlttmlimage)** <br></br>Byte data for TTML image cues.  |
| typedef struct [MLTTMLData](/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md) | **[MLTTMLData](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlttmldata)** <br></br>TTML data structure.  |
| typedef struct [MLPSSHEntry](/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md) | **[MLPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlpsshentry)**  |
| typedef struct [MLWebVTTData](/api-ref/api/Modules/group___media_player/struct_m_l_web_v_t_t_data.md) | **[MLWebVTTData](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlwebvttdata)** <br></br>WebVTT data structure.  |
| typedef struct [MLNativeSurfaceFrameAvailableInfo](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_frame_available_info.md) | **[MLNativeSurfaceFrameAvailableInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlnativesurfaceframeavailableinfo)** <br></br>NativeSurface/NativeSurfaceTexture Output Frame Availability information.  |
| typedef struct [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) | **[MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlnativesurfaceconfig)** <br></br>Configuration values for creating the Native Surface.  |
| typedef struct [MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) | **[MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlnativesurfaceonframeavailablecallback)** <br></br>Callbacks for notifying when an output frame is available for consumption.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLAudioChannelOutMask](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask)** <br></br> { <br></br>[MLAudioChannelOutMask_FrontLeft](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-frontleft) = 0x1,<br></br> [MLAudioChannelOutMask_FrontRight](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-frontright) = 0x2,<br></br> [MLAudioChannelOutMask_FrontCenter](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-frontcenter) = 0x4,<br></br> [MLAudioChannelOutMask_LowFrequency](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-lowfrequency) = 0x8,<br></br> [MLAudioChannelOutMask_BackLeft](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-backleft) = 0x10,<br></br> [MLAudioChannelOutMask_BackRight](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-backright) = 0x20,<br></br> [MLAudioChannelOutMask_FrontLeftOfCenter](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-frontleftofcenter) = 0x40,<br></br> [MLAudioChannelOutMask_FrontRightOfCenter](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-frontrightofcenter) = 0x80,<br></br> [MLAudioChannelOutMask_BackCenter](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-backcenter) = 0x100,<br></br> [MLAudioChannelOutMask_SideLeft](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-sideleft) = 0x200,<br></br> [MLAudioChannelOutMask_SideRight](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-sideright) = 0x400,<br></br> [MLAudioChannelOutMask_TopCenter](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-topcenter) = 0x800,<br></br> [MLAudioChannelOutMask_TopFrontLeft](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-topfrontleft) = 0x1000,<br></br> [MLAudioChannelOutMask_TopFrontCenter](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-topfrontcenter) = 0x2000,<br></br> [MLAudioChannelOutMask_TopFrontRight](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-topfrontright) = 0x4000,<br></br> [MLAudioChannelOutMask_TopBackLeft](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-topbackleft) = 0x8000,<br></br> [MLAudioChannelOutMask_TopBackCenter](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-topbackcenter) = 0x10000,<br></br> [MLAudioChannelOutMask_TopBackRight](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-topbackright) = 0x20000,<br></br> [MLAudioChannelOutMask_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlaudiochanneloutmask-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Audio channel output mask.  |
| enum | **[MLCea608CaptionDimension](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captiondimension)** <br></br> { <br></br>[MLCea608_CCMaxRows](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608-ccmaxrows) = 15,<br></br> [MLCea608_CCMaxCols](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608-ccmaxcols) = 32,<br></br> [MLCea608_CCMaxRowsPlus2](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608-ccmaxrowsplus2) = 17,<br></br> [MLCea608_CCMaxColsPlus2](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608-ccmaxcolsplus2) = 34,<br></br> [MLCea608_CCMaxRowsCols_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608-ccmaxrowscols-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea608 Caption Dimension constants.  |
| enum | **[MLCea608CaptionColor](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captioncolor)** <br></br> { <br></br>[MLCea608CaptionColor_White](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captioncolor-white) = 0,<br></br> [MLCea608CaptionColor_Green](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captioncolor-green) = 1,<br></br> [MLCea608CaptionColor_Blue](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captioncolor-blue) = 2,<br></br> [MLCea608CaptionColor_Cyan](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captioncolor-cyan) = 3,<br></br> [MLCea608CaptionColor_Red](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captioncolor-red) = 4,<br></br> [MLCea608CaptionColor_Yellow](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captioncolor-yellow) = 5,<br></br> [MLCea608CaptionColor_Magenta](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captioncolor-magenta) = 6,<br></br> [MLCea608CaptionColor_Invalide](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captioncolor-invalide) = 7,<br></br> [MLCea608CaptionColor_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captioncolor-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea608 caption color code.  |
| enum | **[MLCea608CaptionStyle](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captionstyle)** <br></br> { <br></br>[MLCea608CaptionStyle_Italics](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captionstyle-italics) = 0x00000001,<br></br> [MLCea608CaptionStyle_Underline](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captionstyle-underline) = 0x00000002,<br></br> [MLCea608CaptionStyle_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captionstyle-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea608 caption style code.  |
| enum | **[Anonymous Enum 16](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-anonymous-enum-16)** <br></br> { <br></br>[MLCea608_TS](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608-ts) = 0x00A0<br></br>} |
| enum | **[Anonymous Enum 17](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-anonymous-enum-17)** <br></br> { <br></br>[MLCea708CaptionWindows_Max](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionwindows-max) = 8<br></br>}<br></br>Cea708 Caption maximum windows constant.  |
| enum | **[Anonymous Enum 18](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-anonymous-enum-18)** <br></br> { <br></br>[MLCea708CaptionEmitCommandBuffer_MaxSize](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommandbuffer-maxsize) = 20<br></br>}<br></br>Maximum size for Cea708 Caption Emit command buffers.  |
| enum | **[MLCea708CaptionEmitCommand](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand)** <br></br> { <br></br>[MLCea708CaptionEmitCommand_Buffer](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-buffer) = 1,<br></br> [MLCea708CaptionEmitCommand_Control](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-control) = 2,<br></br> [MLCea708CaptionEmitCommand_CWX](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-cwx) = 3,<br></br> [MLCea708CaptionEmitCommand_CLW](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-clw) = 4,<br></br> [MLCea708CaptionEmitCommand_DSW](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-dsw) = 5,<br></br> [MLCea708CaptionEmitCommand_HDW](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-hdw) = 6,<br></br> [MLCea708CaptionEmitCommand_TGW](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-tgw) = 7,<br></br> [MLCea708CaptionEmitCommand_DLW](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-dlw) = 8,<br></br> [MLCea708CaptionEmitCommand_DLY](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-dly) = 9,<br></br> [MLCea708CaptionEmitCommand_DLC](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-dlc) = 10,<br></br> [MLCea708CaptionEmitCommand_RST](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-rst) = 11,<br></br> [MLCea708CaptionEmitCommand_SPA](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-spa) = 12,<br></br> [MLCea708CaptionEmitCommand_SPC](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-spc) = 13,<br></br> [MLCea708CaptionEmitCommand_SPL](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-spl) = 14,<br></br> [MLCea708CaptionEmitCommand_SWA](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-swa) = 15,<br></br> [MLCea708CaptionEmitCommand_DFX](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-dfx) = 16,<br></br> [MLCea708CaptionEmitCommand_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea708 Caption Emit Commands constants.  |
| enum | **[MLCea708CaptionEmitCommandControl](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommandcontrol)** <br></br> { <br></br>[MLCea708CaptionEmitCommandControl_ETX](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommandcontrol-etx) = 0x03,<br></br> [MLCea708CaptionEmitCommandControl_BS](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommandcontrol-bs) = 0x08,<br></br> [MLCea708CaptionEmitCommandControl_FF](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommandcontrol-ff) = 0x0c,<br></br> [MLCea708CaptionEmitCommandControl_HCR](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommandcontrol-hcr) = 0x0e,<br></br> [MLCea708CaptionEmitCommandControl_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommandcontrol-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea708 Caption Emit Command Control constants.  |
| enum | **[MLCea708CaptionColorOpacity](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captioncoloropacity)** <br></br> { <br></br>[MLCea708CaptionColorOpacity_SOLID](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captioncoloropacity-solid) = 0,<br></br> [MLCea708CaptionColorOpacity_FLASH](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captioncoloropacity-flash) = 1,<br></br> [MLCea708CaptionColorOpacity_TRANSLUCENT](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captioncoloropacity-translucent) = 2,<br></br> [MLCea708CaptionColorOpacity_TRANSPARENT](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captioncoloropacity-transparent) = 3,<br></br> [MLCea708CaptionColorOpacity_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captioncoloropacity-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea708 Caption Color Opacity constants.  |
| enum | **[MLCea708CaptionPenSize](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionpensize)** <br></br> { <br></br>[MLCea708CaptionPenSize_SMALL](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionpensize-small) = 0,<br></br> [MLCea708CaptionPenSize_STANDARD](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionpensize-standard) = 1,<br></br> [MLCea708CaptionPenSize_LARGE](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionpensize-large) = 2,<br></br> [MLCea708CaptionPenSize_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionpensize-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea708 Caption Pen Size constants.  |
| enum | **[MLCea708CaptionPenOffset](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionpenoffset)** <br></br> { <br></br>[MLCea708CaptionPenOffset_SUBSCRIPT](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionpenoffset-subscript) = 0,<br></br> [MLCea708CaptionPenOffset_NORMAL](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionpenoffset-normal) = 1,<br></br> [MLCea708CaptionPenOffset_SUPERSCRIPT](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionpenoffset-superscript) = 2,<br></br> [MLCea708CaptionPenOffset_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionpenoffset-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea708 Caption Pen Offset constants.  |
| enum | **[MLMediaCodecCreation](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccreation)** <br></br> { <br></br>[MLMediaCodecCreation_ByName](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccreation-byname),<br></br> [MLMediaCodecCreation_ByType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccreation-bytype),<br></br> [MLMediaCodecCreation_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccreation-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaCodecType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodectype)** <br></br> { <br></br>[MLMediaCodecType_Encoder](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodectype-encoder),<br></br> [MLMediaCodecType_Decoder](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodectype-decoder),<br></br> [MLMediaCodecType_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodectype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaCodecBufferFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag)** <br></br> { <br></br>[MLMediaCodecBufferFlag_KeyFrame](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-keyframe) = 1,<br></br> [MLMediaCodecBufferFlag_CodecConfig](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-codecconfig) = 2,<br></br> [MLMediaCodecBufferFlag_EOS](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-eos) = 4,<br></br> [MLMediaCodecBufferFlag_PartialFrame](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-partialframe) = 8,<br></br> [MLMediaCodecBufferFlag_MuxerData](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-muxerdata) = 16,<br></br> [MLMediaCodecBufferFlag_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Indicate the type of data when queuing the input buffer via [MLMediaCodecQueueInputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueueinputbuffer) or [MLMediaCodecQueueSecureInputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueuesecureinputbuffer).  |
| enum | **[MLMediaCodecOutputBufferStatus](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecoutputbufferstatus)** <br></br> { <br></br>[MLMediaCodec_OutputBuffersChanged](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodec-outputbufferschanged) = -1014,<br></br> [MLMediaCodec_FormatChanged](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodec-formatchanged) = -1012,<br></br> [MLMediaCodec_TryAgainLater](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodec-tryagainlater) = -11,<br></br> [MLMediaCodecOutputBufferStatus_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecoutputbufferstatus-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Other than the normal buffer index, the output of [MLMediaCodecDequeueOutputBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecdequeueoutputbuffer) can take on one of these statuses.  |
| enum | **[MLMediaCodecCryptoMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccryptomode)** <br></br> { <br></br>[MLMediaCodecCryptoMode_Clear](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccryptomode-clear),<br></br> [MLMediaCodecCryptoMode_CTR](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccryptomode-ctr),<br></br> [MLMediaCodecCryptoMode_CBC](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccryptomode-cbc),<br></br> [MLMediaCodecCryptoMode_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccryptomode-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaCodecListCodecTypeFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcodectypeflag)** <br></br> { <br></br>[MLMediaCodecListCodecTypeFlag_Software](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcodectypeflag-software) = 1 << 0,<br></br> [MLMediaCodecListCodecTypeFlag_Hardware](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcodectypeflag-hardware) = 1 << 1,<br></br> [MLMediaCodecListCodecTypeFlag_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcodectypeflag-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaCodecListCapabilityFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcapabilityflag)** <br></br> { <br></br>[MLMediaCodecListCapabilityFlag_AdaptivePlayback](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcapabilityflag-adaptiveplayback) = 1 << 0,<br></br> [MLMediaCodecListCapabilityFlag_SecurePlayback](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcapabilityflag-secureplayback) = 1 << 1,<br></br> [MLMediaCodecListCapabilityFlag_TunneledPlayback](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcapabilityflag-tunneledplayback) = 1 << 2,<br></br> [MLMediaCodecListCapabilityFlag_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcapabilityflag-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaCodecColorFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat)** <br></br> { <br></br>[MLMediaCodecColorFormat_Unused](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-unused) = 0,<br></br> [MLMediaCodecColorFormat_Monochrome](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-monochrome) = 1,<br></br> [MLMediaCodecColorFormat_8BitRGB332](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-8bitrgb332) = 2,<br></br> [MLMediaCodecColorFormat_12BitRGB444](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-12bitrgb444) = 3,<br></br> [MLMediaCodecColorFormat_16BitARGB4444](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-16bitargb4444) = 4,<br></br> [MLMediaCodecColorFormat_16BitARGB1555](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-16bitargb1555) = 5,<br></br> [MLMediaCodecColorFormat_16BitRGB565](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-16bitrgb565) = 6,<br></br> [MLMediaCodecColorFormat_16BitBGR565](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-16bitbgr565) = 7,<br></br> [MLMediaCodecColorFormat_18BitRGB666](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-18bitrgb666) = 8,<br></br> [MLMediaCodecColorFormat_18BitARGB1665](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-18bitargb1665) = 9,<br></br> [MLMediaCodecColorFormat_19BitARGB1666](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-19bitargb1666) = 10,<br></br> [MLMediaCodecColorFormat_24BitRGB888](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-24bitrgb888) = 11,<br></br> [MLMediaCodecColorFormat_24BitBGR888](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-24bitbgr888) = 12,<br></br> [MLMediaCodecColorFormat_24BitARGB1887](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-24bitargb1887) = 13,<br></br> [MLMediaCodecColorFormat_25BitARGB1888](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-25bitargb1888) = 14,<br></br> [MLMediaCodecColorFormat_32BitBGRA8888](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-32bitbgra8888) = 15,<br></br> [MLMediaCodecColorFormat_32BitARGB8888](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-32bitargb8888) = 16,<br></br> [MLMediaCodecColorFormat_YUV411Planar](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv411planar) = 17,<br></br> [MLMediaCodecColorFormat_YUV411PackedPlanar](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv411packedplanar) = 18,<br></br> [MLMediaCodecColorFormat_YUV420Planar](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv420planar) = 19,<br></br> [MLMediaCodecColorFormat_YUV420PackedPlanar](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv420packedplanar) = 20,<br></br> [MLMediaCodecColorFormat_YUV420SemiPlanar](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv420semiplanar) = 21,<br></br> [MLMediaCodecColorFormat_YUV422Planar](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv422planar) = 22,<br></br> [MLMediaCodecColorFormat_YUV422PackedPlanar](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv422packedplanar) = 23,<br></br> [MLMediaCodecColorFormat_YUV422SemiPlanar](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv422semiplanar) = 24,<br></br> [MLMediaCodecColorFormat_YCbYCr](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-ycbycr) = 25,<br></br> [MLMediaCodecColorFormat_YCrYCb](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-ycrycb) = 26,<br></br> [MLMediaCodecColorFormat_CbYCrY](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-cbycry) = 27,<br></br> [MLMediaCodecColorFormat_CrYCbY](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-crycby) = 28,<br></br> [MLMediaCodecColorFormat_YUV444Interleaved](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv444interleaved) = 29,<br></br> [MLMediaCodecColorFormat_RawBayer8Bit](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-rawbayer8bit) = 30,<br></br> [MLMediaCodecColorFormat_RawBayer10Bit](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-rawbayer10bit) = 31,<br></br> [MLMediaCodecColorFormat_RawBayer8Bitcompressed](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-rawbayer8bitcompressed) = 32,<br></br> [MLMediaCodecColorFormat_L2](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-l2) = 33,<br></br> [MLMediaCodecColorFormat_L4](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-l4) = 34,<br></br> [MLMediaCodecColorFormat_L8](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-l8) = 35,<br></br> [MLMediaCodecColorFormat_L16](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-l16) = 36,<br></br> [MLMediaCodecColorFormat_L24](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-l24) = 37,<br></br> [MLMediaCodecColorFormat_L32](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-l32) = 38,<br></br> [MLMediaCodecColorFormat_YUV420PackedSemiPlanar](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv420packedsemiplanar),<br></br> [MLMediaCodecColorFormat_YUV422PackedSemiPlanar](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv422packedsemiplanar),<br></br> [MLMediaCodecColorFormat_18BitBGR666](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-18bitbgr666),<br></br> [MLMediaCodecColorFormat_24BitARGB6666](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-24bitargb6666),<br></br> [MLMediaCodecColorFormat_24BitABGR6666](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-24bitabgr6666),<br></br> [MLMediaCodecColorFormat_KhronosExtensions](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-khronosextensions) = 0x6F000000,<br></br> [MLMediaCodecColorFormat_VendorStartUnused](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-vendorstartunused) = 0x7F000000,<br></br> [MLMediaCodecColorFormat_AndroidOpaque](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-androidopaque) = 0x7F000789,<br></br> [MLMediaCodecColorFormat_32BitRGBA8888](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-32bitrgba8888) = 0x7F00A000,<br></br> [MLMediaCodecColorFormat_YUV420Flexible](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv420flexible) = 0x7F420888,<br></br> [MLMediaCodecColorFormat_YUV420Planar16](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv420planar16) = 0x7F42016B,<br></br> [MLMediaCodecColorFormat_YUV444Y410](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-yuv444y410) = 0x7F444AAA,<br></br> [MLMediaCodecColorFormat_TIYUV420PackedSemiPlanar](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-tiyuv420packedsemiplanar) = 0x7F000100,<br></br> [MLMediaCodecColorFormat_QCOMYVU420SemiPlanar](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-qcomyvu420semiplanar) = 0x7FA30C00,<br></br> [MLMediaCodecColorFormat_QCOMYUV420PackedSemiPlanar64x32Tile2m8ka](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-qcomyuv420packedsemiplanar64x32tile2m8ka) = 0x7FA30C03,<br></br> [MLMediaCodecColorFormat_QCOMYUV420PackedSemiPlanar32m](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-qcomyuv420packedsemiplanar32m) = 0x7FA30C04,<br></br> [MLMediaCodecColorFormat_SECNV12Tiled](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-secnv12tiled) = 0x7FC00002,<br></br> [MLMediaCodecColorFormat_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration defining possible uncompressed image/video formats.  |
| enum | **[MLMediaCodecPriority](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecpriority)** <br></br> { <br></br>[MLMediaCodecPriority_RealTime](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecpriority-realtime) = 0,<br></br> [MLMediaCodecPriority_NonRealTime](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecpriority-nonrealtime) = 1,<br></br> [MLMediaCodecPriority_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecpriority-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration defining the Codec priority.  |
| enum | **[MLMediaCodecIntraRefreshMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecintrarefreshmode)** <br></br> { <br></br>[MLMediaCodecIntraRefreshMode_Cyclic](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecintrarefreshmode-cyclic) = 0,<br></br> [MLMediaCodecIntraRefreshMode_Adaptive](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecintrarefreshmode-adaptive) = 1,<br></br> [MLMediaCodecIntraRefreshMode_Both](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecintrarefreshmode-both) = 2,<br></br> [MLMediaCodecIntraRefreshMode_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecintrarefreshmode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of possible methods to use for Intra Refresh.  |
| enum | **[MLMediaCodecBitrateMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode)** <br></br> { <br></br>[MLMediaCodecBitrateMode_CQ](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode-cq) = 0,<br></br> [MLMediaCodecBitrateMode_VBR](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode-vbr) = 1,<br></br> [MLMediaCodecBitrateMode_CBR](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode-cbr) = 2,<br></br> [MLMediaCodecBitrateMode_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration defining Codec Bitrate modes.  |
| enum | **[MLMediaCodecProfileType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype)** <br></br> { <br></br>[MLMediaCodecProfileType_H263Baseline](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-h263baseline) = 0x01,<br></br> [MLMediaCodecProfileType_H263H320Coding](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-h263h320coding) = 0x02,<br></br> [MLMediaCodecProfileType_H263BackwardCompatible](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-h263backwardcompatible) = 0x04,<br></br> [MLMediaCodecProfileType_H263ISWV2](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-h263iswv2) = 0x08,<br></br> [MLMediaCodecProfileType_H263ISWV3](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-h263iswv3) = 0x10,<br></br> [MLMediaCodecProfileType_H263HighCompression](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-h263highcompression) = 0x20,<br></br> [MLMediaCodecProfileType_H263Internet](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-h263internet) = 0x40,<br></br> [MLMediaCodecProfileType_H263Interlace](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-h263interlace) = 0x80,<br></br> [MLMediaCodecProfileType_H263HighLatency](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-h263highlatency) = 0x100,<br></br> [MLMediaCodecProfileType_MPEG2Simple](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg2simple) = 0,<br></br> [MLMediaCodecProfileType_MPEG2Main](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg2main) = 1,<br></br> [MLMediaCodecProfileType_MPEG2422](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg2422) = 2,<br></br> [MLMediaCodecProfileType_MPEG2SNR](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg2snr) = 3,<br></br> [MLMediaCodecProfileType_MPEG2Spatial](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg2spatial) = 4,<br></br> [MLMediaCodecProfileType_MPEG2High](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg2high) = 5,<br></br> [MLMediaCodecProfileType_MPEG4Simple](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4simple) = 0x01,<br></br> [MLMediaCodecProfileType_MPEG4SimpleScalable](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4simplescalable) = 0x02,<br></br> [MLMediaCodecProfileType_MPEG4Core](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4core) = 0x04,<br></br> [MLMediaCodecProfileType_MPEG4Main](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4main) = 0x08,<br></br> [MLMediaCodecProfileType_MPEG4Nbit](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4nbit) = 0x10,<br></br> [MLMediaCodecProfileType_MPEG4ScalableTexture](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4scalabletexture) = 0x20,<br></br> [MLMediaCodecProfileType_MPEG4SimpleFace](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4simpleface) = 0x40,<br></br> [MLMediaCodecProfileType_MPEG4SimpleFBA](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4simplefba) = 0x80,<br></br> [MLMediaCodecProfileType_MPEG4BasicAnimated](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4basicanimated) = 0x100,<br></br> [MLMediaCodecProfileType_MPEG4Hybrid](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4hybrid) = 0x200,<br></br> [MLMediaCodecProfileType_MPEG4AdvancedRealTime](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4advancedrealtime) = 0x400,<br></br> [MLMediaCodecProfileType_MPEG4CoreScalable](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4corescalable) = 0x800,<br></br> [MLMediaCodecProfileType_MPEG4AdvancedCoding](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4advancedcoding) = 0x1000,<br></br> [MLMediaCodecProfileType_MPEG4AdvancedCore](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4advancedcore) = 0x2000,<br></br> [MLMediaCodecProfileType_MPEG4AdvancedScalable](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4advancedscalable) = 0x4000,<br></br> [MLMediaCodecProfileType_MPEG4AdvancedSimple](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-mpeg4advancedsimple) = 0x8000,<br></br> [MLMediaCodecProfileType_AVCBaseline](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-avcbaseline) = 0x01,<br></br> [MLMediaCodecProfileType_AVCMain](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-avcmain) = 0x02,<br></br> [MLMediaCodecProfileType_AVCExtended](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-avcextended) = 0x04,<br></br> [MLMediaCodecProfileType_AVCHigh](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-avchigh) = 0x08,<br></br> [MLMediaCodecProfileType_AVCHigh10](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-avchigh10) = 0x10,<br></br> [MLMediaCodecProfileType_AVCHigh422](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-avchigh422) = 0x20,<br></br> [MLMediaCodecProfileType_AVCHigh444](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-avchigh444) = 0x40,<br></br> [MLMediaCodecProfileType_VP8Main](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-vp8main) = 0x01,<br></br> [MLMediaCodecProfileType_VP90](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-vp90) = 0x01,<br></br> [MLMediaCodecProfileType_VP91](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-vp91) = 0x02,<br></br> [MLMediaCodecProfileType_VP92](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-vp92) = 0x04,<br></br> [MLMediaCodecProfileType_VP93](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-vp93) = 0x08,<br></br> [MLMediaCodecProfileType_VP92HDR](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-vp92hdr) = 0x1000,<br></br> [MLMediaCodecProfileType_VP93HDR](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-vp93hdr) = 0x2000,<br></br> [MLMediaCodecProfileType_VP92HDR10Plus](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-vp92hdr10plus) = 0x4000,<br></br> [MLMediaCodecProfileType_VP93HDR10Plus](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-vp93hdr10plus) = 0x8000,<br></br> [MLMediaCodecProfileType_HEVCMain](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-hevcmain) = 0x01,<br></br> [MLMediaCodecProfileType_HEVCMain10](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-hevcmain10) = 0x02,<br></br> [MLMediaCodecProfileType_HEVCMainStill](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-hevcmainstill) = 0x04,<br></br> [MLMediaCodecProfileType_HEVCMain10HDR10](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-hevcmain10hdr10) = 0x1000,<br></br> [MLMediaCodecProfileType_HEVCMain10HDR10Plus](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-hevcmain10hdr10plus) = 0x2000,<br></br> [MLMediaCodecProfileType_AACObjectNull](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-aacobjectnull) = 0,<br></br> [MLMediaCodecProfileType_AACObjectMain](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-aacobjectmain) = 1,<br></br> [MLMediaCodecProfileType_AACObjectLC](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-aacobjectlc) = 2,<br></br> [MLMediaCodecProfileType_AACObjectSS](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-aacobjectss) = 3,<br></br> [MLMediaCodecProfileType_AACObjectLTP](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-aacobjectltp) = 4,<br></br> [MLMediaCodecProfileType_AACObjectHE](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-aacobjecthe) = 5,<br></br> [MLMediaCodecProfileType_AACObjectScalable](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-aacobjectscalable) = 6,<br></br> [MLMediaCodecProfileType_AACObjectERLC](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-aacobjecterlc) = 17,<br></br> [MLMediaCodecProfileType_AACObjectLD](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-aacobjectld) = 23,<br></br> [MLMediaCodecProfileType_AACObjectHE_PS](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-aacobjecthe-ps) = 29,<br></br> [MLMediaCodecProfileType_WMAProfileUnused](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-wmaprofileunused) = 0,<br></br> [MLMediaCodecProfileType_WMAProfileL1](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-wmaprofilel1) = 1,<br></br> [MLMediaCodecProfileType_WMAProfileL2](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-wmaprofilel2) = 2,<br></br> [MLMediaCodecProfileType_WMAProfileL3](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-wmaprofilel3) = 3,<br></br> [MLMediaCodecProfileType_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration defining Codec profile types.  |
| enum | **[MLMediaCodecLevelType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype)** <br></br> { <br></br>[MLMediaCodecLevelType_H263Level10](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-h263level10) = 0x01,<br></br> [MLMediaCodecLevelType_H263Level20](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-h263level20) = 0x02,<br></br> [MLMediaCodecLevelType_H263Level30](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-h263level30) = 0x04,<br></br> [MLMediaCodecLevelType_H263Level40](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-h263level40) = 0x08,<br></br> [MLMediaCodecLevelType_H263Level45](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-h263level45) = 0x10,<br></br> [MLMediaCodecLevelType_H263Level50](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-h263level50) = 0x20,<br></br> [MLMediaCodecLevelType_H263Level60](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-h263level60) = 0x40,<br></br> [MLMediaCodecLevelType_H263Level70](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-h263level70) = 0x80,<br></br> [MLMediaCodecLevelType_MPEG2LevelLL](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-mpeg2levelll) = 0,<br></br> [MLMediaCodecLevelType_MPEG2LevelML](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-mpeg2levelml) = 1,<br></br> [MLMediaCodecLevelType_MPEG2LevelH14](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-mpeg2levelh14) = 2,<br></br> [MLMediaCodecLevelType_MPEG2LevelHL](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-mpeg2levelhl) = 3,<br></br> [MLMediaCodecLevelType_MPEG4Level0](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-mpeg4level0) = 0x01,<br></br> [MLMediaCodecLevelType_MPEG4Level0b](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-mpeg4level0b) = 0x02,<br></br> [MLMediaCodecLevelType_MPEG4Level1](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-mpeg4level1) = 0x04,<br></br> [MLMediaCodecLevelType_MPEG4Level2](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-mpeg4level2) = 0x08,<br></br> [MLMediaCodecLevelType_MPEG4Level3](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-mpeg4level3) = 0x10,<br></br> [MLMediaCodecLevelType_MPEG4Level4](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-mpeg4level4) = 0x20,<br></br> [MLMediaCodecLevelType_MPEG4Level4a](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-mpeg4level4a) = 0x40,<br></br> [MLMediaCodecLevelType_MPEG4Level5](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-mpeg4level5) = 0x80,<br></br> [MLMediaCodecLevelType_AVCLevel1](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel1) = 0x01,<br></br> [MLMediaCodecLevelType_AVCLevel1b](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel1b) = 0x02,<br></br> [MLMediaCodecLevelType_AVCLevel11](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel11) = 0x04,<br></br> [MLMediaCodecLevelType_AVCLevel12](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel12) = 0x08,<br></br> [MLMediaCodecLevelType_AVCLevel13](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel13) = 0x10,<br></br> [MLMediaCodecLevelType_AVCLevel2](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel2) = 0x20,<br></br> [MLMediaCodecLevelType_AVCLevel21](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel21) = 0x40,<br></br> [MLMediaCodecLevelType_AVCLevel22](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel22) = 0x80,<br></br> [MLMediaCodecLevelType_AVCLevel3](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel3) = 0x100,<br></br> [MLMediaCodecLevelType_AVCLevel31](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel31) = 0x200,<br></br> [MLMediaCodecLevelType_AVCLevel32](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel32) = 0x400,<br></br> [MLMediaCodecLevelType_AVCLevel4](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel4) = 0x800,<br></br> [MLMediaCodecLevelType_AVCLevel41](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel41) = 0x1000,<br></br> [MLMediaCodecLevelType_AVCLevel42](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel42) = 0x2000,<br></br> [MLMediaCodecLevelType_AVCLevel5](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel5) = 0x4000,<br></br> [MLMediaCodecLevelType_AVCLevel51](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-avclevel51) = 0x8000,<br></br> [MLMediaCodecLevelType_VP8LevelVersion0](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp8levelversion0) = 0x01,<br></br> [MLMediaCodecLevelType_VP8LevelVersion1](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp8levelversion1) = 0x02,<br></br> [MLMediaCodecLevelType_VP8LevelVersion2](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp8levelversion2) = 0x04,<br></br> [MLMediaCodecLevelType_VP8LevelVersion3](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp8levelversion3) = 0x08,<br></br> [MLMediaCodecLevelType_VP9Level1](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level1) = 0x1,<br></br> [MLMediaCodecLevelType_VP9Level11](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level11) = 0x2,<br></br> [MLMediaCodecLevelType_VP9Level2](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level2) = 0x4,<br></br> [MLMediaCodecLevelType_VP9Level21](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level21) = 0x8,<br></br> [MLMediaCodecLevelType_VP9Level3](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level3) = 0x10,<br></br> [MLMediaCodecLevelType_VP9Level31](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level31) = 0x20,<br></br> [MLMediaCodecLevelType_VP9Level4](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level4) = 0x40,<br></br> [MLMediaCodecLevelType_VP9Level41](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level41) = 0x80,<br></br> [MLMediaCodecLevelType_VP9Level5](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level5) = 0x100,<br></br> [MLMediaCodecLevelType_VP9Level51](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level51) = 0x200,<br></br> [MLMediaCodecLevelType_VP9Level52](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level52) = 0x400,<br></br> [MLMediaCodecLevelType_VP9Level6](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level6) = 0x800,<br></br> [MLMediaCodecLevelType_VP9Level61](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level61) = 0x1000,<br></br> [MLMediaCodecLevelType_VP9Level62](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-vp9level62) = 0x2000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel1](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel1) = 0x1,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel1](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel1) = 0x2,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel2](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel2) = 0x4,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel2](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel2) = 0x8,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel21](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel21) = 0x10,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel21](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel21) = 0x20,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel3](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel3) = 0x40,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel3](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel3) = 0x80,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel31](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel31) = 0x100,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel31](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel31) = 0x200,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel4](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel4) = 0x400,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel4](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel4) = 0x800,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel41](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel41) = 0x1000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel41](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel41) = 0x2000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel5](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel5) = 0x4000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel5](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel5) = 0x8000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel51](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel51) = 0x10000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel51](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel51) = 0x20000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel52](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel52) = 0x40000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel52](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel52) = 0x80000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel6](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel6) = 0x100000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel6](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel6) = 0x200000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel61](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel61) = 0x400000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel61](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel61) = 0x800000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel62](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevcmaintierlevel62) = 0x1000000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel62](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-hevchightierlevel62) = 0x2000000,<br></br> [MLMediaCodecLevelType_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration defining Codec Level types.  |
| enum | **[MLMediaSeekMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode)** <br></br> { <br></br>[MLMediaSeekMode_Previous_Sync](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode-previous-sync),<br></br> [MLMediaSeekMode_Next_Sync](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode-next-sync),<br></br> [MLMediaSeekMode_Closest_Sync](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode-closest-sync),<br></br> [MLMediaSeekMode_Closest](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode-closest),<br></br> [MLMediaSeekMode_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaDRMKeyType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeytype)** <br></br> { <br></br>[MLMediaDRMKeyType_Streaming](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeytype-streaming) = 1,<br></br> [MLMediaDRMKeyType_Offline](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeytype-offline) = 2,<br></br> [MLMediaDRMKeyType_Release](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeytype-release) = 3,<br></br> [MLMediaDRMKeyType_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeytype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaDRMEventType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype)** <br></br> { <br></br>[MLMediaDRMEventType_ProvisionRequired](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype-provisionrequired) = 1,<br></br> [MLMediaDRMEventType_KeyRequired](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype-keyrequired) = 2,<br></br> [MLMediaDRMEventType_KeyExpired](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype-keyexpired) = 3,<br></br> [MLMediaDRMEventType_VendorDefined](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype-vendordefined) = 4,<br></br> [MLMediaDRMEventType_SessionReclaimed](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype-sessionreclaimed) = 5,<br></br> [MLMediaDRMEventType_ExpirationUpdate](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype-expirationupdate) = 6,<br></br> [MLMediaDRMEventType_KeysChange](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype-keyschange) = 7,<br></br> [MLMediaDRMEventType_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmeventtype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Request event types.  |
| enum | **[MLMediaDRMKeyStatusCode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeystatuscode)** <br></br> { <br></br>[MLMediaDRMKeyStatusCode_KeyStatusUsable](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeystatuscode-keystatususable) = 0,<br></br> [MLMediaDRMKeyStatusCode_KeyStatusExpired](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeystatuscode-keystatusexpired) = 1,<br></br> [MLMediaDRMKeyStatusCode_KeyStatusOutputNotAllowed](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeystatuscode-keystatusoutputnotallowed) = 2,<br></br> [MLMediaDRMKeyStatusCode_KeyStatusPending](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeystatuscode-keystatuspending) = 3,<br></br> [MLMediaDRMKeyStatusCode_KeyStatusInternalError](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeystatuscode-keystatusinternalerror) = 4,<br></br> [MLMediaDRMKeyStatusCode_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediadrmkeystatuscode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Status code associated with a DRM session key.  |
| enum | **[MLMediaExtractorSampleFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorsampleflag)** <br></br> { <br></br>[MLMediaExtractorSampleFlag_Sync](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorsampleflag-sync) = 1,<br></br> [MLMediaExtractorSampleFlag_Encrypted](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorsampleflag-encrypted) = 2,<br></br> [MLMediaExtractorSampleFlag_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorsampleflag-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaExtractorSeekPosition](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorseekposition)** <br></br> { <br></br>[MLMediaExtractorSeekPosition_Previous_Sync](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorseekposition-previous-sync),<br></br> [MLMediaExtractorSeekPosition_Next_Sync](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorseekposition-next-sync),<br></br> [MLMediaExtractorSeekPosition_Closest_Sync](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorseekposition-closest-sync),<br></br> [MLMediaExtractorSeekPosition_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorseekposition-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaFormatAudioEncoding](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaformataudioencoding)** <br></br> { <br></br>[MLMediaFormatAudioEncoding_PCM16Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaformataudioencoding-pcm16bits) = 2,<br></br> [MLMediaFormatAudioEncoding_PCM8Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaformataudioencoding-pcm8bits) = 3,<br></br> [MLMediaFormatAudioEncoding_PCMFloat](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaformataudioencoding-pcmfloat) = 4,<br></br> [MLMediaFormatAudioEncoding_PCM32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaformataudioencoding-pcm32bits) = 201,<br></br> [MLMediaFormatAudioEncoding_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaformataudioencoding-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaMuxerOutputFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat)** <br></br> { <br></br>[MLMediaMuxerOutputFormat_MPEG4](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat-mpeg4) = 0,<br></br> [MLMediaMuxerOutputFormat_WEBM](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat-webm) = 1,<br></br> [MLMediaMuxerOutputFormat_3GPP](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat-3gpp) = 2,<br></br> [MLMediaMuxerOutputFormat_HEIF](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat-heif) = 3,<br></br> [MLMediaMuxerOutputFormat_OGG](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat-ogg) = 4,<br></br> [MLMediaMuxerOutputFormat_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Output formats for MediaMuxer.  |
| enum | **[MLMediaPlayerVideoScalingMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayervideoscalingmode)** <br></br> { <br></br>[MLMediaPlayerVideoScalingMode_ScaleToFit](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayervideoscalingmode-scaletofit) = 1,<br></br> [MLMediaPlayerVideoScalingMode_ScaleToFitWithCropping](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayervideoscalingmode-scaletofitwithcropping) = 2,<br></br> [MLMediaPlayerVideoScalingMode_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayervideoscalingmode-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaPlayerPollingStateFlags](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflags)** <br></br> { <br></br>[MLMediaPlayerPollingStateFlag_IsPlaying](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-isplaying) = 1 << 0,<br></br> [MLMediaPlayerPollingStateFlag_IsLooping](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-islooping) = 1 << 1,<br></br> [MLMediaPlayerPollingStateFlag_HasBeenPrepared](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hasbeenprepared) = 1 << 2,<br></br> [MLMediaPlayerPollingStateFlag_HasPlaybackCompleted](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hasplaybackcompleted) = 1 << 3,<br></br> [MLMediaPlayerPollingStateFlag_HasSeekCompleted](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hasseekcompleted) = 1 << 4,<br></br> [MLMediaPlayerPollingStateFlag_HasSizeChanged](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hassizechanged) = 1 << 5,<br></br> [MLMediaPlayerPollingStateFlag_HasBufferingUpdated](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hasbufferingupdated) = 1 << 6,<br></br> [MLMediaPlayerPollingStateFlag_HasReceivedInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hasreceivedinfo) = 1 << 7,<br></br> [MLMediaPlayerPollingStateFlag_HasReceivedError](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hasreceivederror) = 1 << 8,<br></br> [MLMediaPlayerPollingStateFlag_HasTimedTextUpdated](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hastimedtextupdated) = 1 << 9,<br></br> [MLMediaPlayerPollingStateFlag_HasSubtitleUpdated](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hassubtitleupdated) = 1 << 10,<br></br> [MLMediaPlayerPollingStateFlag_HasMetadataUpdated](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hasmetadataupdated) = 1 << 11,<br></br> [MLMediaPlayerPollingStateFlag_HasDrmInfoUpdated](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hasdrminfoupdated) = 1 << 12,<br></br> [MLMediaPlayerPollingStateFlag_HasResetCompleted](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hasresetcompleted) = 1 << 13,<br></br> [MLMediaPlayerPollingStateFlag_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaPlayerInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo)** <br></br> { <br></br>[MLMediaPlayerInfo_Unknown](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-unknown) = 1,<br></br> [MLMediaPlayerInfo_StartedAsNext](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-startedasnext) = 2,<br></br> [MLMediaPlayerInfo_RenderingStart](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-renderingstart) = 3,<br></br> [MLMediaPlayerInfo_Looping](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-looping) = 4,<br></br> [MLMediaPlayerInfo_Started](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-started) = 5,<br></br> [MLMediaPlayerInfo_Paused](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-paused) = 6,<br></br> [MLMediaPlayerInfo_Stopped](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-stopped) = 7,<br></br> [MLMediaPlayerInfo_StartedBySharedPlayer](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-startedbysharedplayer) = 8,<br></br> [MLMediaPlayerInfo_PausedBySharedPlayer](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-pausedbysharedplayer) = 9,<br></br> [MLMediaPlayerInfo_SeekBySharedPlayer](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-seekbysharedplayer) = 10,<br></br> [MLMediaPlayerInfo_StoppedBySharedPlayer](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-stoppedbysharedplayer) = 11,<br></br> [MLMediaPlayerInfo_SyncStart](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-syncstart) = 12,<br></br> [MLMediaPlayerInfo_SyncComplete](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-synccomplete) = 13,<br></br> [MLMediaPlayerInfo_VideoTrackLagging](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-videotracklagging) = 700,<br></br> [MLMediaPlayerInfo_BufferingStart](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-bufferingstart) = 701,<br></br> [MLMediaPlayerInfo_BufferingEnd](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-bufferingend) = 702,<br></br> [MLMediaPlayerInfo_NetworkBandwidth](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-networkbandwidth) = 703,<br></br> [MLMediaPlayerInfo_BehindLiveWindow](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-behindlivewindow) = 704,<br></br> [MLMediaPlayerInfo_PowerStatePause](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-powerstatepause) = 705,<br></br> [MLMediaPlayerInfo_PowerStateResume](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-powerstateresume) = 706,<br></br> [MLMediaPlayerInfo_BufferedDuration](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-bufferedduration) = 707,<br></br> [MLMediaPlayerInfo_BadInterleaving](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-badinterleaving) = 800,<br></br> [MLMediaPlayerInfo_NotSeekable](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-notseekable) = 801,<br></br> [MLMediaPlayerInfo_MetadataUpdate](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-metadataupdate) = 802,<br></br> [MLMediaPlayerInfo_PlayAudioError](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-playaudioerror) = 804,<br></br> [MLMediaPlayerInfo_PlayVideoError](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-playvideoerror) = 805,<br></br> [MLMediaPlayerInfo_TimedTextError](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-timedtexterror) = 900,<br></br> [MLMediaPlayerInfo_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerinfo-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Info and warning codes for the media player framework.  |
| enum | **[MLMediaPlayerTrackType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype)** <br></br> { <br></br>[MLMediaPlayerTrackType_Unknown](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype-unknown) = 0,<br></br> [MLMediaPlayerTrackType_Video](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype-video) = 1,<br></br> [MLMediaPlayerTrackType_Audio](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype-audio) = 2,<br></br> [MLMediaPlayerTrackType_TimedText](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype-timedtext) = 3,<br></br> [MLMediaPlayerTrackType_Subtitle](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype-subtitle) = 4,<br></br> [MLMediaPlayerTrackType_Metadata](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype-metadata) = 5,<br></br> [MLMediaPlayerTrackType_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaPlayerBufferingMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerbufferingmode)** <br></br> { <br></br>[MLMediaPlayerBufferingMode_None](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerbufferingmode-none) = 0,<br></br> [MLMediaPlayerBufferingMode_TimeOnly](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerbufferingmode-timeonly) = 1,<br></br> [MLMediaPlayerBufferingMode_SizeOnly](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerbufferingmode-sizeonly) = 2,<br></br> [MLMediaPlayerBufferingMode_TimeThenSize](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerbufferingmode-timethensize) = 3,<br></br> [MLMediaPlayerBufferingMode_Count](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerbufferingmode-count) = 4,<br></br> [MLMediaPlayerBufferingMode_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerbufferingmode-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaFramePackingMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode)** <br></br> { <br></br>[MLMediaFramePackingMode_None](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode-none) = 0,<br></br> [MLMediaFramePackingMode_Checkboard](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode-checkboard),<br></br> [MLMediaFramePackingMode_ColumnInterleaved](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode-columninterleaved),<br></br> [MLMediaFramePackingMode_RowInterleaved](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode-rowinterleaved),<br></br> [MLMediaFramePackingMode_SideBySideQuincunx](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode-sidebysidequincunx),<br></br> [MLMediaFramePackingMode_SideBySide](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode-sidebyside),<br></br> [MLMediaFramePackingMode_TopBottom](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode-topbottom),<br></br> [MLMediaFramePackingMode_MultiviewFrameByFrame](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode-multiviewframebyframe),<br></br> [MLMediaFramePackingMode_FrameByFrame](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode-framebyframe),<br></br> [MLMediaFramePackingMode_Anaglyph](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingmode-anaglyph)<br></br>}<br></br>Frame Packing Arrangement for stereoscopic videos.  |
| enum | **[MLMediaFramePackingFlags](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingflags)** <br></br> { <br></br>[MLMediaFramePackingFlags_None](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingflags-none) = 0,<br></br> [MLMediaFramePackingFlags_RightViewFirst](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingflags-rightviewfirst) = 1 << 0,<br></br> [MLMediaFramePackingFlags_LeftFlipped](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingflags-leftflipped) = 1 << 1,<br></br> [MLMediaFramePackingFlags_RightFlipped](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingflags-rightflipped) = 1 << 2,<br></br> [MLMediaFramePackingFlags_Anaglyph_RedCyan](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingflags-anaglyph-redcyan) = 1 << 3,<br></br> [MLMediaFramePackingFlags_Anaglyph_GreenMagenta](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaframepackingflags-anaglyph-greenmagenta) = 1 << 4<br></br>}<br></br>Frame Packing Arrangement flags for stereoscopic videos.  |
| enum | **[MLTTMLLayoutAlignment](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllayoutalignment)** <br></br> { <br></br>[MLTTMLLayoutAlignment_Unspecified](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllayoutalignment-unspecified) = 0x7FFFFFFF,<br></br> [MLTTMLLayoutAlignment_Normal](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllayoutalignment-normal) = 0,<br></br> [MLTTMLLayoutAlignment_Center](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllayoutalignment-center) = 1,<br></br> [MLTTMLLayoutAlignment_Opposite](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllayoutalignment-opposite) = 2,<br></br> [MLTTMLLayoutAlignment_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllayoutalignment-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue text alignment within the cue box.  |
| enum | **[MLTTMLLineType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype)** <br></br> { <br></br>[MLTTMLLineType_Unset](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype-unset) = 0x7FFFFFFF,<br></br> [MLTTMLLineType_Fraction](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype-fraction) = 0,<br></br> [MLTTMLLineType_Number](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype-number) = 1,<br></br> [MLTTMLLineType_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue line type.  |
| enum | **[MLTTMLAnchorType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype)** <br></br> { <br></br>[MLTTMLAnchorType_Unset](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype-unset) = 0x7FFFFFFF,<br></br> [MLTTMLAnchorType_Start](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype-start) = 0,<br></br> [MLTTMLAnchorType_Middle](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype-middle) = 1,<br></br> [MLTTMLAnchorType_End](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype-end) = 2,<br></br> [MLTTMLAnchorType_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue anchor type.  |
| enum | **[MLTTMLTextSizeType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype)** <br></br> { <br></br>[MLTTMLTextSizeType_Unset](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype-unset) = 0x7FFFFFFF,<br></br> [MLTTMLTextSizeType_Fractional](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype-fractional) = 0,<br></br> [MLTTMLTextSizeType_Fractional_Ignore_Padding](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype-fractional-ignore-padding) = 1,<br></br> [MLTTMLTextSizeType_Absolute](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype-absolute) = 2,<br></br> [MLTTMLTextSizeType_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue text size type.  |
| enum | **[MLWebVTTOrientation](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttorientation)** <br></br> { <br></br>[MLWebVTTOrientation_Horizontal](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttorientation-horizontal) = 0,<br></br> [MLWebVTTOrientation_Vertical](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttorientation-vertical) = 1,<br></br> [MLWebVTTOrientation_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttorientation-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue orientation setting.  |
| enum | **[MLWebVTTDirection](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttdirection)** <br></br> { <br></br>[MLWebVTTDirection_Default](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttdirection-default) = 0,<br></br> [MLWebVTTDirection_LeftToRight](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttdirection-lefttoright) = 1,<br></br> [MLWebVTTDirection_RightToLeft](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttdirection-righttoleft) = 2,<br></br> [MLWebVTTDirection_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttdirection-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue direction setting.  |
| enum | **[MLWebVTTAlign](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttalign)** <br></br> { <br></br>[MLWebVTTAlign_Start](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttalign-start) = 0,<br></br> [MLWebVTTAlign_Middle](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttalign-middle) = 1,<br></br> [MLWebVTTAlign_End](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttalign-end) = 2,<br></br> [MLWebVTTAlign_Left](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttalign-left) = 3,<br></br> [MLWebVTTAlign_Right](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttalign-right) = 4,<br></br> [MLWebVTTAlign_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttalign-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue aligment setting.  |
| enum | **[MLNativeSurfaceAcquiredBufferCount](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfaceacquiredbuffercount)** <br></br> { <br></br>[MLNativeSurfaceAcquiredBufferCount_Min](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfaceacquiredbuffercount-min) = 1,<br></br> [MLNativeSurfaceAcquiredBufferCount_Max](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfaceacquiredbuffercount-max) = 16,<br></br> [MLNativeSurfaceAcquiredBufferCount_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfaceacquiredbuffercount-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Number of acquired buffers to be requested in functions [MLNativeSurfaceCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate) and MLNativeSurfaceTextureCreate.  |
| enum | **[MLNativeSurfacePixelFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat)** <br></br> { <br></br>[MLNativeSurfacePixelFormat_Custom](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-custom) = -4,<br></br> [MLNativeSurfacePixelFormat_Translucent](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-translucent) = -3,<br></br> [MLNativeSurfacePixelFormat_Transparent](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-transparent) = -2,<br></br> [MLNativeSurfacePixelFormat_Opaque](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-opaque) = -1,<br></br> [MLNativeSurfacePixelFormat_None](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-none) = 0,<br></br> [MLNativeSurfacePixelFormat_Rgba8888](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-rgba8888) = 1,<br></br> [MLNativeSurfacePixelFormat_Rgbx8888](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-rgbx8888) = 2,<br></br> [MLNativeSurfacePixelFormat_Rgb888](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-rgb888) = 3,<br></br> [MLNativeSurfacePixelFormat_Rgb565](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-rgb565) = 4,<br></br> [MLNativeSurfacePixelFormat_Bgra8888](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-bgra8888) = 5,<br></br> [MLNativeSurfacePixelFormat_RgbaFp16](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-rgbafp16) = 22,<br></br> [MLNativeSurfacePixelFormat_Rgba1010102](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-rgba1010102) = 43,<br></br> [MLNativeSurfacePixelFormat_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Pixel format to use when creating the native surface. Used in functions [MLNativeSurfaceCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate) and MLNativeSurfaceTextureCreate.  |
| enum | **[MLNativeSurfaceTextureBackend](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacetexturebackend)** <br></br> { <br></br>[MLNativeSurfaceTextureBackend_OpenGL](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacetexturebackend-opengl) = 0,<br></br> [MLNativeSurfaceTextureBackend_Ensure32Bits](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacetexturebackend-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCCParserCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparsercreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create internal closed caption parser object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCCParserGetDisplayableEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparsergetdisplayableex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle, const uint8_t * subtitle_data, int32_t subtitle_data_size, const [MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md) ** out_cc_seg)<br></br>Return closed caption for display.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCCParserDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparserdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle)<br></br>Release internal CC parser object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCCParserSetDisplayChangedCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparsersetdisplaychangedcallback)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle, [MLMediaCCParserDisplayChangedCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaccparserdisplaychangedcallback) on_display_changed_callback, void * data)<br></br>Set callback to get notified when a caption displayable has changed.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCCParserParse](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparserparse)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle, const uint8_t * subtitle_data, uint32_t subtitle_data_size)<br></br>Provide Cea608 parser with subtitle raw data for parsing. If the callback has been set by MLMediaCCParserSetDisplayChangedCallback, then its issued to notify the CC Data.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCea708ParserCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parsercreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create Cea708 parser object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCea708ParserParse](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parserparse)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle, const uint8_t * subtitle_data, uint32_t subtitle_data_size)<br></br>Provide Cea708 parser with subtitle raw data for parsing.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCea708ParserDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parserdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle)<br></br>Release Cea708 parser object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCea708ParserSetEmitEventCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parsersetemiteventcallback)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle, [MLMediaCea708ParserEmitEventCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediacea708parseremiteventcallback) on_emit_event_callback, void * data)<br></br>Set callback to get notified when a caption event has generated.  |
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
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListCountCodecs](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistcountcodecs)**(uint64_t * out_codec_count)<br></br>Obtain the number of available codecs.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListIsSoftwareCodec](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistissoftwarecodec)**(const char * codec_name, bool * out_val)<br></br>Determine whether a codec is a software codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetMatchingCodecs](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetmatchingcodecs)**(const char * mime, bool is_encoder, [MLMediaCodecListCodecTypeFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcodectypeflag) flag, [MLMediaCodecListQueryResults](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) * out_matching_codecs)<br></br>Obtain a list of matching codecs for a given codec mime.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetCodecByType](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcodecbytype)**(const char * type, bool is_encoder, uint64_t start_index, int64_t * out_index)<br></br>Obtain the codec matching the given codec type from the codec list.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetCodecByName](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcodecbyname)**(const char * name, int64_t * out_index)<br></br>Obtain the codec from the codec matching the given codec name from the codec list.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListIsEncoder](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisencoder)**(uint64_t index, bool * out_val)<br></br>Confirm whether a component is an Encoder or Decoder.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetCodecName](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcodecname)**(uint64_t index, char * out_name)<br></br>Obtain a codec name.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetSupportedMimes](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedmimes)**(uint64_t index, [MLMediaCodecListQueryResults](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) * out_supported_mimes)<br></br>Obtain the list of mime types supported by a codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetCapabilityFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcapabilityflag)**(uint64_t index, const char * mime, [MLMediaCodecListCapabilityFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcapabilityflag) * out_capability_flag)<br></br>Obtain the capability flag for a codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetSecureCodecName](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsecurecodecname)**(const char * mime, bool is_decoder, char * out_name)<br></br>Obtain the name of a secure codec for the given mime type.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListQueryResultsRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistqueryresultsrelease)**([MLMediaCodecListQueryResults](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) * query_results)<br></br>Release the query results.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetSupportedProfileLevels](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels)**(uint64_t index, const char * mime, [MLMediaCodecListProfileLevel](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) ** out_profile_levels, size_t * out_profile_levels_size)<br></br>Obtain the supported profile levels for a codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListProfileLevelsRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistprofilelevelsrelease)**([MLMediaCodecListProfileLevel](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) * profile_levels)<br></br>Release profile levels.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetSupportedColorFormats](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedcolorformats)**(uint64_t index, const char * mime, uint32_t ** out_color_formats, size_t * out_color_formats_size)<br></br>Obtain the supported color formats for a codec. All the supported color formats are defined by MLMediaCodecColorFormat.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListColorFormatsRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistcolorformatsrelease)**(uint32_t * color_formats)<br></br>Release color formats.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetSupportedBitrateModes](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedbitratemodes)**(uint64_t index, const char * mime, [MLMediaCodecBitrateMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode) ** out_bitrate_modes, size_t * out_bitrate_modes_size)<br></br>Obtain the supported bitrate modes for a codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecBitrateModesRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecbitratemodesrelease)**([MLMediaCodecBitrateMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode) * bitrate_modes)<br></br>Release Bitrate modes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListIsAdaptivePlaybackSupported](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisadaptiveplaybacksupported)**(uint64_t index, const char * mime, bool * out_supported)<br></br>Check whether Adaptive playback is supported.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListIsSecurePlaybackSupported](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistissecureplaybacksupported)**(uint64_t index, const char * mime, bool * out_supported)<br></br>Check whether Secure playback is supported.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListIsIntraRefreshSupported](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisintrarefreshsupported)**(uint64_t index, const char * mime, bool * out_supported)<br></br>Check whether Intra Refresh is supported.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCryptoCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptocreate)**([MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * data, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a MLMediaCrypto instance from a UUID.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCryptoRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptorelease)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_crypto)<br></br>Release the MLMediaCrypto instance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCryptoIsCryptoSchemeSupported](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptoiscryptoschemesupported)**([MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, bool * out_supported)<br></br>Query if the given scheme identified by its UUID is supported on this device.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCryptoRequiresSecureDecoderComponent](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptorequiressecuredecodercomponent)**(const char * mime_type, bool * out_required)<br></br>Query if the crypto scheme requires the use of a secure decoder to decode data of the given mime type.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCryptoSetMediaDRMSession](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacryptosetmediadrmsession)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_crypto, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * session_id)<br></br>Associate a #MediaDRM session with this MLMediaCrypto instance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDataSourceCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate)**([MLMediaDataSourceReadAt](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-mlmediadatasourcereadat) read_at, [MLMediaDataSourceGetSize](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-mlmediadatasourcegetsize) get_size, [MLMediaDataSourceClose](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediadatasourceclose) close, void * context, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new MediaDataSource object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDataSourceDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcedestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_data_source)<br></br>Destroy a #MediaDataSource object.  |
| void | **[MLMediaDRMEventCallbacksInit](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediadrmeventcallbacksinit)**([MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md) * inout_callbacks)<br></br>Initializes [MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md) with default values.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMByteArrayAllocate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayallocate)**(size_t size, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * out_array)<br></br>Allocate byte array buffer.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMByteArrayAllocAndCopy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayallocandcopy)**(const uint8_t * copy_from, size_t size, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * out_array)<br></br>Allocate and Copy to byte array buffer.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMKeyValueArrayAllocate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmkeyvaluearrayallocate)**(size_t size, [MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) * out_array)<br></br>Allocate array of key/value pairs.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmcreate)**([MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a MLMediaDRM instance from a UUID.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmrelease)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm)<br></br>Release the MLMediaDRM instance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMByteArrayRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease)**([MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * array)<br></br>Release byte array buffer.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMByteArrayListRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearraylistrelease)**([MLMediaDRMByteArrayList](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array_list.md) * array)<br></br>Release list of byte array buffer.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMKeyValueArrayRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmkeyvaluearrayrelease)**([MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) * array)<br></br>Release key/value pair array.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMRequestMessageRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmrequestmessagerelease)**([MLMediaDRMRequestMessage](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) * request)<br></br>Release Request Message.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMKeyValueArrayAdd](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmkeyvaluearrayadd)**(const [MLMediaDRMKeyValue](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value.md) * pair, [MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) * out_array)<br></br>Add a key/value pair to the array of key/value pairs.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMIsCryptoSchemeSupported](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmiscryptoschemesupported)**([MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) uuid, const char * mime_type, bool * out_supported)<br></br>Query if the given scheme identified by its UUID is supported on this device. And whether the drm plugin is able to handle the media container format.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMSetOnEventListenerEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsetoneventlistenerex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, [MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md) * callbacks, void * data)<br></br>Register a callback to be invoked when DRM events or updates or status change occurs.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMOpenSession](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmopensession)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * out_session_id)<br></br>Opens a new session. A session ID is returned.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMCloseSession](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmclosesession)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * session_id)<br></br>Closes a session on the MLMediaDRM object that was previously opened with openSession().  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMGetKeyRequest](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetkeyrequest)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * session_id, const [MLMediaDRMKeyRequestInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_request_input_param.md) * key_request_param, [MLMediaDRMRequestMessage](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) * out_key_request)<br></br>A key request/response exchange occurs between the app and a license server to obtain or release keys used to decrypt encrypted content.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMProvideKeyResponse](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovidekeyresponse)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * session_id, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * response, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * out_key_set_id)<br></br>A key response is received from the license server by the app, then it is provided to the DRM engine plugin using [MLMediaDRMProvideKeyResponse()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovidekeyresponse).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMRestoreKeys](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmrestorekeys)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * session_id, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * key_set_id)<br></br>Restore persisted offline keys into a new session. key_set_id identifies the keys to load, obtained from a prior call to [MLMediaDRMProvideKeyResponse()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovidekeyresponse).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMRemoveKeys](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmremovekeys)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * key_set_id)<br></br>Remove the current keys from a session.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMQueryKeyStatus](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmquerykeystatus)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * session_id, [MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) * out_info_map)<br></br>Request an informative description of the key status for the session.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMGetProvisionRequest](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetprovisionrequest)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const char * cert_type, [MLMediaDRMRequestMessage](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) * out_provision_request)<br></br>A provision request/response exchange occurs between the app and a provisioning server to retrieve a device certificate.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMProvideProvisionResponse](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovideprovisionresponse)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * response, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * out_certificate, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * out_wrapped_key)<br></br>After a provision response is received by the app, it is provided to the DRM engine plugin using this method.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMGetSecureStops](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetsecurestops)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, [MLMediaDRMByteArrayList](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array_list.md) * out_secure_stops)<br></br>Access all secure stops.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMGetSecureStop](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetsecurestop)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * ss_id, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * out_secure_stop)<br></br>Access secure stop by secure stop ID.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMReleaseSecureStops](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmreleasesecurestops)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * secure_stop)<br></br>Process the SecureStop server response message. After authenticating the message, remove the SecureStops identified in the response. See [MLMediaDRMGetSecureStops()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetsecurestops) for details.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMReleaseAllSecureStops](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmreleaseallsecurestops)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm)<br></br>Remove all the SecureStops.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMGetPropertyString](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetpropertystring)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) property_name, char ** out_property_value)<br></br>Read a DRM engine plugin String property value, given the property name.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMGetPropertyByteArray](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetpropertybytearray)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) property_name, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * out_property_value)<br></br>Read a DRM engine plugin byte array property value, given the property name.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMSetPropertyString](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsetpropertystring)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) property_name, const char * property_value)<br></br>Set a DRM engine plugin String property value.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMSetPropertyByteArray](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsetpropertybytearray)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) property_name, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * property_value)<br></br>Set a DRM engine plugin byte array property value.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMEncrypt](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmencrypt)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * session_id, const [MLMediaDRMCryptoInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md) * crypto_key_param, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * input, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * out_output)<br></br>Encrypt the data referenced by input using algorithm if specified, and write the encrypted result into output.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMDecrypt](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmdecrypt)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * session_id, const [MLMediaDRMCryptoInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md) * crypto_key_param, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * input, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * out_output)<br></br>Decrypt the data referenced by input using algorithm if specified, and write the encrypted result into output.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMSign](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsign)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * session_id, const [MLMediaDRMHMACInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md) * hmac_key_param, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * message, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * out_signature)<br></br>Generate a signature using the specified algorithm (if provided) over the message data and store the signature.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMVerify](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmverify)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * session_id, const [MLMediaDRMHMACInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md) * hmac_key_param, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * message, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * signature, bool * out_match)<br></br>Perform a signature verification using the specified algorithm (if specified) over the message data referenced by the message parameter.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDRMSignRSA](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmsignrsa)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_drm, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * session_id, const [MLMediaDRMRSAInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_r_s_a_input_param.md) * rsa_key_param, const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * message, [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * out_signature)<br></br>Generate a signature using the specified RSA Key and algorithm.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorcreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new MLMediaExtractor.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractordestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroy a MLMediaExtractor.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSetDataSourceForPath](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforpath)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const char * path)<br></br>Set a local file path as the data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSetDataSourceForURI](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforuri)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const char * uri)<br></br>Set a URI string as the data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSetDataSourceForURIWithHeaders](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforuriwithheaders)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const char * uri, const char ** headers, size_t len)<br></br>Set a URI string as the data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSetDataSourceForFD](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetdatasourceforfd)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int fd, int64_t offset, int64_t length)<br></br>Set the data source as the file-descriptor to use.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSetMediaDataSource](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorsetmediadatasource)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_data_source)<br></br>Sets the data source as user defined media data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetDRMInitData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetdrminitdata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) drm_uuid, [MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) * out_drm_init_data)<br></br>Extract DRM initialization data for a given DRM Scheme if it exists.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorReleaseDRMInitData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasedrminitdata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) * drm_init_data)<br></br>Release DRM initialization data which was previously retrieved.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetTrackCount](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgettrackcount)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t * out_track_count)<br></br>Count the number of tracks found in the data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetTrackFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgettrackformat)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, size_t index, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_track_handle)<br></br>Get the track format at the specified index.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSelectTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorselecttrack)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, size_t index)<br></br>Select a track for the subsequent operations.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorUnselectTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorunselecttrack)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, size_t index)<br></br>Unselect a track for the subsequent operations.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorSeekTo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorseekto)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t time_us, [MLMediaSeekMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode) mode)<br></br>All selected tracks seek near the requested time according to the specified mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorAdvance](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractoradvance)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Advance to the next sample.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorReadSampleData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreadsampledata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint8_t * byte_buf, size_t buf_size, size_t offset, int64_t * out_data_size)<br></br>Retrieve the current encoded sample and store it in the byte buffer starting at the given offset.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetSampleTrackIndex](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampletrackindex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t * out_track_index)<br></br>Return the track index the current sample originates from.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetSampleTime](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampletime)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t * out_sample_time)<br></br>Return the current sample's presentation time in microseconds.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetSampleFlags](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampleflags)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int * out_sample_flags)<br></br>Return the current sample's flags.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetSampleCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsamplecryptoinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_info_handle)<br></br>Return the current sample's Crypto info if has encrypted sample.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorReleaseCryptoInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasecryptoinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * inout_info_handle)<br></br>Release the Crypto Info.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetCachedDuration](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetcachedduration)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t * out_cached_duration)<br></br>Return an estimate of how much data is presently cached in memoryexpressed in microseconds.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorHasCacheReachedEOS](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorhascachereachedeos)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Return `true` if we are caching data and the cache has reached the end of the data stream (for now, a future seek may of course restart the fetching of data).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetPSSHInfoCount](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetpsshinfocount)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, size_t * out_index)<br></br>Get the Number of PSSH info if present.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorGetPSSHInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetpsshinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, size_t index, [MLMediaExtractorPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaextractorpsshentry) * out_pssh_entry)<br></br>Get the PSSH info if present. The PSSH(Protection System Specific Header) contains a UUID representing a DRM scheme along with opaque data blob used for creating crypto session, which in turn used to configure codec.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaExtractorReleasePSSHInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasepsshinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaExtractorPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaextractorpsshentry) * pssh_entry)<br></br>Clear the PSSH info data.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatCreateVideo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatevideo)**(const char * mime_type, int width, int height, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a video format object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatCreateAudio](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreateaudio)**(const char * mime_type, int sample_rate, int channel_count, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a audio format object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatCreateSubtitle](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatesubtitle)**(const char * mime_type, const char * language, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a subtitle format object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create an empty format object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatCreateCopy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatecopy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a copy of the format handle provided.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroy a MLMediaFormat object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatObjectToString](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatobjecttostring)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, char * out_string)<br></br>Obtain the human readable representation of the format.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatGetKeyValueInt32](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeyvalueint32)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, int32_t * out_key)<br></br>Obtain the value of an integer key.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatGetKeyValueInt64](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeyvalueint64)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, int64_t * out_key)<br></br>Obtain the value of a long key.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatGetKeyValueFloat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeyvaluefloat)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, float * out_key)<br></br>Obtain the value of an float key.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatGetKeySize](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeysize)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, size_t * out_size)<br></br>Obtain the size of a key.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatGetKeyString](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeystring)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, char * out_string)<br></br>Obtain the value of a string key.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatGetKeyByteBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeybytebuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) * out_buffer)<br></br>Obtain the value of a ByteBuffer key.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatKeyByteBufferRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatkeybytebufferrelease)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) * buffer)<br></br>Release the ByteBuffer acquired by MLMediaFormatGetKeyByteBuffer.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatSetKeyInt32](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeyint32)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, int32_t key_value)<br></br>Set the value of an integer key.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatSetKeyInt64](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeyint64)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, int64_t key_value)<br></br>Set the value of a long key.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatSetKeyFloat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeyfloat)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, float key_value)<br></br>Set the value of a float key.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatSetKeySize](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeysize)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, size_t key_size)<br></br>Set the size of a key.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatSetKeyString](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeystring)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, const char * key_value)<br></br>Set the value of a string key.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatSetKeyByteBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeybytebuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, const [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) * buffer)<br></br>Set the value of a ByteBuffer key.  |
| void | **[MLMediaMuxerSampleDataInit](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediamuxersampledatainit)**([MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) * inout_sampledata)<br></br>Initializes [MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) with default values.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxercreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a MLMediaMuxer instance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerrelease)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer)<br></br>Release the MLMediaMuxer instance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerGetSupportedOutputFormats](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedoutputformats)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, const [MLMediaMuxerOutputFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat) * out_format_list[], size_t * out_format_list_size)<br></br>Get a list of all the supported Media Muxer Output Formats on the Platform.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerGetSupportedMimes](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedmimes)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, [MLMediaMuxerOutputFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat) format, const char *const * out_mime_list[], size_t * out_mime_list_size)<br></br>Get a list of all the supported mime-types for a given Media Muxer Output Format on the Platform.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerConfigure](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerconfigure)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, [MLMediaMuxerOutputFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat) format, const char * path)<br></br>Configure the MLMediaMuxer for a given Output format with output path.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerAddTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxeraddtrack)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_format, size_t * out_track_index)<br></br>Add a track with given format information.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerSetOrientationHint](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxersetorientationhint)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, int32_t degrees)<br></br>Set the orientation hint for output video playback.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerSetLocation](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxersetlocation)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, float latitude, float longitude)<br></br>Set and store the geodata (latitude and longitude) in the output file.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerStart](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstart)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer)<br></br>Start muxing.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerWriteSampleData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerwritesampledata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer, const [MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) * data)<br></br>Writes an encoded sample into the muxer.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaMuxerStop](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstop)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_muxer)<br></br>Stop muxing.  |
| void | **[MLMediaPlayerEventCallbacksExInit](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayereventcallbacksexinit)**([MLMediaPlayerEventCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md) * inout_callbacks)<br></br>Initializes MediaPlayerEventCallbacks with default values.  |
| void | **[MLMediaPlayerTrackInfoInit](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayertrackinfoinit)**([MLMediaPlayerTrackInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_info.md) * inout_track_info)<br></br>Initializes Media Track Information with default values.  |
| void | **[MLMediaPlayerTrackDRMSessionInfoInit](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayertrackdrmsessioninfoinit)**([MLMediaPlayerTrackDRMSessionInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md) * inout_drm_session_info)<br></br>Initializes Media Track DRM Session Information with defult values.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayercreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player)<br></br>Destroys a MediaPlayer object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetDataSourceForFD](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetdatasourceforfd)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, int32_t fd)<br></br>Sets a file descriptor as the data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetOffsetDataSourceForFD](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetoffsetdatasourceforfd)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, int32_t fd, int64_t offset, int64_t length)<br></br>Sets a file descriptor as the data source with offset.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetDataSourceForPath](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetdatasourceforpath)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, const char * path)<br></br>Sets a local file path as the data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetDataSourceForURI](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetdatasourceforuri)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, const char * uri)<br></br>Sets a URI string as the data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetRemoteDataSourceForURI](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetremotedatasourceforuri)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, const char * uri, char ** headers, size_t len)<br></br>Sets a URI string as the remote data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetMediaDataSource](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetmediadatasource)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_data_source)<br></br>Sets the data source to use.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetMediaStreamSource](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetmediastreamsource)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_stream_source)<br></br>Sets the data source to use.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerAddTimedTextSourceForURI](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayeraddtimedtextsourceforuri)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, const char * uri, const char * mime_type)<br></br>Adds a TimedText source from a URI.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerAddTimedTextSourceForFD](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayeraddtimedtextsourceforfd)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, int32_t fd, int64_t offset, int64_t length, const char * mime_type)<br></br>Adds a TimedText source from a file descriptor.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetNextPlayer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetnextplayer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) next_media_player)<br></br>Sets the 'next' [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) to automatically 'start' when current [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) playback completes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetTrackCount](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettrackcount)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, uint32_t * out_track_count)<br></br>Counts the number of tracks found in the data source.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetTrackType](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettracktype)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, uint32_t track, [MLMediaPlayerTrackType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype) * out_track_type)<br></br>Gets the type of a track.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetTrackLanguage](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettracklanguage)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, uint32_t track, char ** out_track_language)<br></br>Gets the language of a track.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetTrackMediaFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettrackmediaformat)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, uint32_t track, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_media_format)<br></br>Gets the Media Format of a track.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSelectTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerselecttrack)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, uint32_t track)<br></br>Selects a track.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerUnselectTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerunselecttrack)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, uint32_t track)<br></br>Unselects a track.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerPrepare](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerprepare)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player)<br></br>Prepares the player for playback, synchronously.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerPrepareAsync](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerprepareasync)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player)<br></br>Prepares the player for playback, asynchronously.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerStart](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerstart)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player)<br></br>Starts or resumes playback.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerStop](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerstop)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player)<br></br>Stops playback after playback has been started or paused.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerPause](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpause)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player)<br></br>Pauses playback.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerReset](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerreset)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player)<br></br>Resets the [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) to its uninitialized state.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSeekTo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerseekto)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, int msec, [MLMediaSeekMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode) mode)<br></br>Seeks to specified time position.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetEventCallbacksEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerseteventcallbacksex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, const [MLMediaPlayerEventCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md) * callbacks, void * data)<br></br>Sets callbacks to notify clients about player events.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetVideoSize](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetvideosize)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, int32_t * out_width, int32_t * out_height)<br></br>Returns the size of the video frame.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetCurrentPosition](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetcurrentposition)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, int32_t * out_msec)<br></br>Returns current position of playback.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetDuration](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetduration)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, int32_t * out_msec)<br></br>Returns media duration.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetBufferingUpdate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetbufferingupdate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, int32_t * out_percentage)<br></br>Returns current buffering percentage.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, int32_t * out_code, int32_t * out_extra)<br></br>Returns last info received by internal [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetError](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergeterror)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) * out_result)<br></br>Returns last error received by internal [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetTimedText](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettimedtext)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, const char ** out_text, int32_t * out_start, int32_t * out_end)<br></br>Returns last timed text event information.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetSubtitleEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetsubtitleex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md) ** out_subtitle_data)<br></br>Returns last subtitle event information.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerReleaseSubtitleEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerreleasesubtitleex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player)<br></br>Releases last subtitle event information.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetOnMediaSubtitleUpdateCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetonmediasubtitleupdatecallback)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLMediaPlayerOnMediaSubtitleUpdateCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayeronmediasubtitleupdatecallback) on_media_subtitle_callback, void * data)<br></br>Sets callback to get notified when a subtitle update is available along with its data.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetMetadata](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, int64_t * out_time, int32_t * out_size, uint8_t ** out_buffer)<br></br>Returns last metadata event information.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetVideoScalingMode](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetvideoscalingmode)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLMediaPlayerVideoScalingMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayervideoscalingmode) mode)<br></br>Sets video scaling mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetLooping](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetlooping)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, bool loop)<br></br>Sets the looping mode of the player.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetVolume](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetvolume)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, float volume)<br></br>Sets the volume on this player.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetAudioHandle](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetaudiohandle)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Gets the handle of the audio stream.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerPollStates](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpollstates)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, uint16_t mask, uint16_t * out_polled_states)<br></br>Polls the desired states from internal [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetTrackDRMInfo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettrackdrminfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, const [MLMediaPlayerTrackInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_info.md) * track_info, [MLMediaPlayerTrackDRMInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md) ** out_drm_info)<br></br>Gets the DRM info of the selected media (either audio or video) track.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerPrepareTrackDRM](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpreparetrackdrm)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, const [MLMediaPlayerTrackDRMSessionInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md) * drm_session_info)<br></br>Prepares DRM for the selected media (either audio or video) track.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerReleaseDRM](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerreleasedrm)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player)<br></br>Releases DRM.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetDefaultBufferingSettings](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetdefaultbufferingsettings)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) * out_buf_settings)<br></br>Gets default Buffering settings.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetBufferingSettings](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetbufferingsettings)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) * out_buf_settings)<br></br>Gets current Buffering settings.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetBufferingSettings](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetbufferingsettings)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) buf_settings)<br></br>Sets buffering settings.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetOnMediaTimedTextUpdateCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetonmediatimedtextupdatecallback)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLMediaPlayerOnMediaTimedTextUpdateCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayeronmediatimedtextupdatecallback) on_media_timed_text_callback, void * data)<br></br>Set callback to get invoked when a Timed Text update is available along with its data.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetWebVTTData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetwebvttdata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) timed_text, [MLWebVTTData](/api-ref/api/Modules/group___media_player/struct_m_l_web_v_t_t_data.md) ** out_webvtt_data)<br></br>Gets WebVTT data represented by a timed text handle.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetTTMLData](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetttmldata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) timed_text, [MLTTMLData](/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md) ** out_ttml_data)<br></br>Gets TTML data represented by a timed text handle.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerResetAsync](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerresetasync)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player)<br></br>Resets the [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) to its uninitialized state asynchronously.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerGetMetrics](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetmetrics)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLMediaPlayerMetrics](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_metrics.md) * out_metrics)<br></br>Retrieves metrics recorded on the MediaPlayer.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaPlayerSetSurface](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetsurface)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_player, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) surface)<br></br>Sets the Native surface to be used as the sink for displaying the video portion of the media.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaStreamSourceCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate)**([MLMediaStreamSourceOnBufferAvailable](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediastreamsourceonbufferavailable) on_buffer_available, void * context, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new MediaStreamSource object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaStreamSourceDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcedestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_stream_source)<br></br>Destroy a MediaStreamSource object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaStreamSourceGetBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcegetbuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_stream_source, size_t * out_id, uint8_t ** out_ptr, size_t * out_size)<br></br>Get a buffer where data can be written.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaStreamSourcePushBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcepushbuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_stream_source, size_t id, size_t size)<br></br>Push a buffer.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaStreamSourcePushEOS](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcepusheos)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_stream_source)<br></br>Push End-Of-Stream event.  |
| void | **[MLNativeSurfaceConfigInit](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlnativesurfaceconfiginit)**([MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) * inout_config_values)<br></br>Initializes [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) with default values.  |
| void | **[MLNativeSurfaceOnFrameAvailableCallbackInit](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlnativesurfaceonframeavailablecallbackinit)**([MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) * inout_callbacks)<br></br>Initializes [MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) with default values.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate)**(const [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) * config_values, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new NativeSurface.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacerelease)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Release a NativeSurface.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceGetNativeWindow](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetnativewindow)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_native_window, int32_t * out_format)<br></br>Gets an implementation of NativeWindow that feeds graphic buffers into MLNativeSurface.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceReleaseNativeWindow](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacereleasenativewindow)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) native_window)<br></br>Releases NativeWindow previously acquired by [MLNativeSurfaceGetNativeWindow](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetnativewindow).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceAcquireNextAvailableFrame](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfaceacquirenextavailableframe)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_native_buffer)<br></br>Consume next available buffer.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceAcquireHardwareBufferFromNativeBuffer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfaceacquirehardwarebufferfromnativebuffer)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) native_buffer, struct AHardwareBuffer ** out_hardware_buffer, uint32_t * out_width, uint32_t * out_height)<br></br>Acquire an AHardwareBuffer* from a native buffer handle.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceReleaseFrame](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacereleaseframe)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) native_buffer)<br></br>Release a native buffer previously acquired.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceGetFrameTransformationMatrix](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframetransformationmatrix)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float out_mtx[16])<br></br>Retrieves the 4x4 texture coordinate transform matrix associated with the last acquired Frame.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceGetFrameTimestamp](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframetimestamp)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t * out_timestamp_ns)<br></br>Retrieves the timestamp associated with the last acquired frame. The timestamp is in nanoseconds, and is monotonically increasing from beginning of the playback. Its other semantics (zero point, etc) are codec-dependent and should be documented by the codec vendor.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceGetFrameQueueBufferTimestamp](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframequeuebuffertimestamp)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t * out_timestamp_ns)<br></br>Retrieves the QueueBuffer timestamp associated with the last acquired Frame This timestamp is for profiling purposes only and corresponds to the time when this frame was queued by internal Codec's producer code. The timestamp is in nanoseconds, and is monotonically increasing from beginning of playback. Its other semantics (zero point, etc) are codec-dependent and should by documented by the codec vendor.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceGetFrameNumber](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframenumber)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t * out_number)<br></br>Retrieves the last acquired frame number. The frame number is an incrementing counter set to 0 at Codec configuration time.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceGetFrameCropRect](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframecroprect)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLRecti](/api-ref/api/Modules/group___common/struct_m_l_recti.md) * out_crop_rect)<br></br>Retrieves the cropping rectangle of the current frame/buffer.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceSetOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacesetonframeavailablecallback)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) * callback, void * user_data)<br></br>Set callback to notify client when a frame is available.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturecreate)**(const [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) * config_values, [MLNativeSurfaceTextureBackend](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacetexturebackend) backend, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new NativeSurfaceTexture.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureRelease](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturerelease)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Release a NativeSurfaceTexture.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureUpdateTexImage](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetextureupdateteximage)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Update the texture image to the most recent frame from the image stream.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureAttachToGLContext](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetextureattachtoglcontext)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t texture_id)<br></br>Attach the NativeSurfaceTexture to the graphic context that is current on the calling thread.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureDetachFromGLContext](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturedetachfromglcontext)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Detach the NativeSurfaceTexture from the graphic context that owns the graphic texture object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureGetTransformationMatrix](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturegettransformationmatrix)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float out_matrix[16])<br></br>Retrieve the 4x4 texture coordinate transform matrix associated with the texture image set by the most recent call to MLNativeSurfaceTextureUpdateTexImage.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureGetTimestamp](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturegettimestamp)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t * out_timestamp_ns)<br></br>Retrieve the timestamp associated with the texture image set by the most recent call to MLNativeSurfaceTextureUpdateTexImage.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureSetOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturesetonframeavailablecallback)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) * callback, void * user_data)<br></br>Set callback to notify client when a frame is available.  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const typedef char * | **[MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty)**  |
| const typedef char * | **[MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey)**  |
| const int32_t | **[MLAudioChannelOutMono](/api-ref/api/Modules/group___media_player/group___media_player.md#const-int32-t-mlaudiochanneloutmono)**  |
| const int32_t | **[MLAudioChannelOutStereo](/api-ref/api/Modules/group___media_player/group___media_player.md#const-int32-t-mlaudiochanneloutstereo)**  |
| const int32_t | **[MLAudioChannelOutQuad](/api-ref/api/Modules/group___media_player/group___media_player.md#const-int32-t-mlaudiochanneloutquad)**  |
| const int32_t | **[MLAudioChannelOutSurround](/api-ref/api/Modules/group___media_player/group___media_player.md#const-int32-t-mlaudiochanneloutsurround)**  |
| const int32_t | **[MLAudioChannelOut5Point1](/api-ref/api/Modules/group___media_player/group___media_player.md#const-int32-t-mlaudiochannelout5point1)**  |
| const int32_t | **[MLAudioChannelOut7Point1](/api-ref/api/Modules/group___media_player/group___media_player.md#const-int32-t-mlaudiochannelout7point1)**  |
| const int32_t | **[MLAudioChannelOut7Point1Surround](/api-ref/api/Modules/group___media_player/group___media_player.md#const-int32-t-mlaudiochannelout7point1surround)**  |
| [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) | **[MLMediaDRMProperty_Vendor](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediadrmproperty-mlmediadrmproperty-vendor)**  |
| [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) | **[MLMediaDRMProperty_Version](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediadrmproperty-mlmediadrmproperty-version)**  |
| [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) | **[MLMediaDRMProperty_Description](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediadrmproperty-mlmediadrmproperty-description)**  |
| [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) | **[MLMediaDRMProperty_Algorithms](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediadrmproperty-mlmediadrmproperty-algorithms)** <br></br>String property name: a comma-separated list of cipher and mac algorithms supported by #CryptoSession. The list may be empty if the DRM engine plugin does not support #CryptoSession operations.  |
| [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) | **[MLMediaDRMProperty_DeviceUniqueID](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediadrmproperty-mlmediadrmproperty-deviceuniqueid)** <br></br>Byte array property name: the device unique identifier is established during device provisioning and provides a means of uniquely identifying each device.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_Encoded_Target_Level](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-encoded-target-level)** <br></br>The format of media data (video/audio) is specified as key/value pairs. Below is a list of keys used to set/obtain format values.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_DRC_Boost_Factor](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-boost-factor)** <br></br>A key describing the boost factor allowing to adapt the dynamics of the output to the actual listening requirements. This relies on DRC gain sequences that can be transmitted in the encoded bitstream to be able to reduce the dynamics of the output signal upon request. This factor enables the user to select how much of the gains are applied.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_DRC_Attenuation_Factor](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-attenuation-factor)** <br></br>A key describing the attenuation factor allowing to adapt the dynamics of the output to the actual listening requirements.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_DRC_Heavy_Compression](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-heavy-compression)** <br></br>A key describing the selection of the heavy compression profile for DRC.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_DRC_Target_Reference_Level](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-target-reference-level)** <br></br>A key describing a gain to be applied so that the output loudness matches the Target Reference Level. This is typically used to normalize loudness across program items.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_Max_Output_Channel_Count](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-max-output-channel-count)** <br></br>A key describing the maximum number of channels that can be output by the AAC decoder.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_Profile](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-profile)** <br></br>A key describing the AAC profile to be used (AAC audio formats only).  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_SBR_Mode](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-sbr-mode)** <br></br>A key describing the AAC SBR mode to be used (AAC audio formats only).  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Bit_Rate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-bit-rate)** <br></br>A key describing the average bitrate in bits/sec.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Bit_Rate_Mode](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-bit-rate-mode)** <br></br>A key describing the desired bitrate mode to be used by an encoder.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Capture_Rate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-capture-rate)** <br></br>A key describing the capture rate of a video format in frames/sec.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Channel_Count](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-channel-count)** <br></br>A key describing the number of channels in an audio format.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Channel_Mask](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-channel-mask)** <br></br>A key describing the channel composition of audio content.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Color_Format](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-color-format)** <br></br>A key describing the color format of the content in a video format.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Duration](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-duration)** <br></br>A key describing the duration (in microseconds) of the content.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_FLAC_Compression_Level](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-flac-compression-level)** <br></br>A key describing the FLAC compression level to be used (FLAC audio format only).  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Frame_Rate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-frame-rate)** <br></br>A key describing the frame rate of a video format in frames/sec.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Height](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-height)** <br></br>A key describing the height of the content in a video format.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_I_Frame_Interval](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-i-frame-interval)** <br></br>A key describing the frequency of key frames expressed in seconds between key frames.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Intra_Refresh_Period](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-intra-refresh-period)** <br></br>An optional key describing the period of intra refresh in frames.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Is_ADTS](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-is-adts)** <br></br>A key mapping to a value of 1 if the content is AAC audio and audio frames are prefixed with an ADTS header.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Is_Autoselect](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-is-autoselect)** <br></br>A key for boolean AUTOSELECT behavior for the track. Tracks with AUTOSELECT=true are considered when automatically selecting a track without specific user choice, based on the current locale. This is currently only used for subtitle tracks, when the user selected 'Default' for the captioning locale. The associated value is an integer, where non-0 means TRUE. This is an optional field; if not specified, AUTOSELECT defaults to TRUE.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Is_Default](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-is-default)** <br></br>A key for boolean DEFAULT behavior for the track. The track with DEFAULT=true is selected in the absence of a specific user choice.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Is_Forced_Subtitle](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-is-forced-subtitle)** <br></br>A key for the FORCED field for subtitle tracks.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Language](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-language)** <br></br>A key describing the language of the content, using either ISO 639-1 or 639-2/T codes.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_Height](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-height)** <br></br>A key describing the maximum expected height of the content in a video decoder format, in case there are resolution changes in the video content.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_Input_Size](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-input-size)** <br></br>Described by this MediaFormat.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_Width](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-width)** <br></br>A key describing the maximum expected width of the content in a video decoder format, in case there are resolution changes in the video content.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Mime](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-mime)** <br></br>A key describing the mime type of the MediaFormat.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_PCM_Encoding](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-pcm-encoding)** <br></br>A key describing the raw audio sample encoding/format.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Push_Blank_Buffers_On_Stop](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-push-blank-buffers-on-stop)** <br></br>If specified when configuring a video decoder rendering to a surface, causes the decoder to output "blank", i.e. black frames to the surface.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Repeat_Previous_Frame_After](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-repeat-previous-frame-after)** <br></br>Applies only when configuring a video encoder in "surface-input" mode.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Sample_Rate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-sample-rate)** <br></br>A key describing the sample rate of an audio format.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Stride](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-stride)** <br></br>A key describing the stride of the video bytebuffer layout.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Temporal_Layering](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-temporal-layering)** <br></br>A key describing the temporal layering schema.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Width](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-width)** <br></br>A key describing the width of the content in a video format.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crop_Left](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crop-left)** <br></br>The left-coordinate (x) of the crop rectangle.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crop_Right](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crop-right)** <br></br>The right-coordinate (x) MINUS 1 of the crop rectangle.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crop_Bottom](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crop-bottom)** <br></br>The bottom-coordinate (y) MINUS 1 of the crop rectangle.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crop_Top](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crop-top)** <br></br>The top-coordinate (y) of the crop rectangle.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Operating_Rate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-operating-rate)** <br></br>A key describing the desired operating frame rate for video or sample rate for audio that the codec will need to operate at.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Latency](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-latency)** <br></br>An optional key describing the desired encoder latency in frames.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Video_Bitrate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-video-bitrate)** <br></br>A key describing the desired video bitrate.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Request_Sync_Frame](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-request-sync-frame)** <br></br>Request that the encoder produce a sync frame "soon".  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Set_Suspend](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-set-suspend)** <br></br>Temporarily suspend/resume encoding of input data.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Set_Suspend_Time](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-set-suspend-time)** <br></br>When PARAMETER_KEY_SUSPEND is present, the client can also optionally use this key to specify the timestamp (in micro-second) at which the suspend/resume operation takes effect.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Drop_Before](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-drop-before)** <br></br>A key describing the desired before which frames are to be skipped.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Drop_After](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-drop-after)** <br></br>A key describing the desired after which frames are to be skipped.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Offset_Time](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-offset-time)** <br></br>Specify an offset (in micro-second) to be added on top of the timestamps onward.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Priority](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-priority)** <br></br>A key describing the desired codec priority.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_B_Frames](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-b-frames)** <br></br>A key describing the maximum number of B frames between I or P frames, to be used by a video encoder.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Intra_Refresh_Mode](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-intra-refresh-mode)** <br></br>An optional key describing the mode of intra refresh in frames. The associated value is an integer.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Intra_Refresh_CIR_Num](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-intra-refresh-cir-num)** <br></br>Number of consecutive macroblocks to be coded as intra when CIR is enabled.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Intra_Refresh_AIR_Num](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-intra-refresh-air-num)** <br></br>Number of intra macroblocks to refresh in a frame when AIR is enabled.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Intra_Refresh_AIR_Ref](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-intra-refresh-air-ref)** <br></br>Number of times a motion marked macroblock has to be intra coded.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Profile](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-profile)** <br></br>A key describing the desired profile to be used by an encoder.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Level](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-level)** <br></br>A key describing the desired level to be used by an encoder.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Prepend_Header_To_Sync_Frames](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-prepend-header-to-sync-frames)** <br></br>An optional key describing whether encoders prepend headers to sync frames (e.g. SPS and PPS to IDR frames for H.264).  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Color_Range](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-color-range)** <br></br>An optional key describing the range of the component values of the video content.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Color_Standard](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-color-standard)** <br></br>An optional key describing the color primaries, white point and luminance factors for video content.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Color_Transfer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-color-transfer)** <br></br>An optional key describing the opto-electronic transfer function used for the video content.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_HDR_Static_Info](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-hdr-static-info)** <br></br>An optional key describing the static metadata of HDR (high-dynamic-range) video content.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_CSD](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-csd)** <br></br>A key describing the codec specific data.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_CSD0](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-csd0)** <br></br>A key describing the codec specific data buffer #0.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_CSD1](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-csd1)** <br></br>A key describing the codec specific data buffer #1.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_CSD2](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-csd2)** <br></br>A key describing the codec specific data buffer #2.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_CSD_Avc](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-csd-avc)** <br></br>A key describing the codec specific data buffer for AVC (h.264).  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_CSD_Hevc](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-csd-hevc)** <br></br>A key describing the codec specific data buffer for HEVC (h.265).  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Album](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-album)** <br></br>A key describing metadata - album title of the media.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Albumart](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-albumart)** <br></br>A key describing metadata. The artwork for the album of the media's original source as a Bitmap.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Albumartist](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-albumartist)** <br></br>A key describing metadata. The artist for the album of the media's original source.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Artist](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-artist)** <br></br>A key describing metadata. The artist of the media.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Audio_Presentation_Info](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-audio-presentation-info)** <br></br>A key describing metadata. The media presentation info.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Audio_Presentation_Presentation_Id](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-audio-presentation-presentation-id)** <br></br>A key describing metadata. The media presentation Id.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Audio_Presentation_Program_Id](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-audio-presentation-program-id)** <br></br>A key describing metadata. The media program Id.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Audio_Session_Id](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-audio-session-id)** <br></br>A key describing the audio session ID of the AudioTrack associated to a tunneled video codec.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Author](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-author)** <br></br>A key describing metadata. The author of the media.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Bits_Per_Sample](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-bits-per-sample)** <br></br>Key representing media number of bits per sample.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Cdtracknumber](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-cdtracknumber)** <br></br>A key describing metadata. The cd track number.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Compilation](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-compilation)** <br></br>A key describing metadata. The media compilation.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Complexity](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-complexity)** <br></br>A key describing the encoding complexity.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Composer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-composer)** <br></br>A key describing metadata - composer of the media.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Create_Input_Surface_Suspended](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-create-input-surface-suspended)** <br></br>If specified when configuring a video encoder that's in "surface-input" mode, it will instruct the encoder to put the surface source in suspended state when it's connected.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Default_Iv_Size](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-default-iv-size)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Encrypted_Byte_Block](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-encrypted-byte-block)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Encrypted_Sizes](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-encrypted-sizes)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Iv](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-iv)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Key](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-key)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Mode](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-mode)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Plain_Sizes](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-plain-sizes)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Skip_Byte_Block](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-skip-byte-block)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_D263](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-d263)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Date](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-date)** <br></br>A key describing metadata - The date the media was created or published. The format is unspecified but RFC 3339 is recommended.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Discnumber](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-discnumber)** <br></br>A key describing metadata. The disc number for the media's original source.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Display_Crop](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-display-crop)** <br></br>A key describing display crop rectangle.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Display_Height](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-display-height)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Display_Width](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-display-width)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Encoder_Delay](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-encoder-delay)** <br></br>A key describing the number of frames to trim from the start of the decoded audio stream.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Encoder_Padding](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-encoder-padding)** <br></br>A key describing the number of frames to trim from the end of the decoded audio stream.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Esds](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-esds)** <br></br>A key describing the electrostatic discharge and soldering (ESDS).  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Exif_Offset](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-exif-offset)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Exif_Size](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-exif-size)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Frame_Count](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-frame-count)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Genre](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-genre)** <br></br>A key describing metadata. The media genre.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Grid_Columns](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-columns)** <br></br>A key describing the number of grid columns in the content in a MIMETYPE_IMAGE_ANDROID_HEIC track.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Grid_Rows](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-rows)** <br></br>A key describing the number of grid rows in the content in a MIMETYPE_IMAGE_ANDROID_HEIC track.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Haptic_Channel_Count](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-haptic-channel-count)** <br></br>A key describing the number of haptic channels in an audio format.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Hdr10_Plus_Info](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-hdr10-plus-info)** <br></br>An optional key describing the HDR10+ metadata of the video content.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Icc_Profile](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-icc-profile)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Is_Sync_Frame](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-is-sync-frame)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Location](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-location)** <br></br>A key describing metadata. The media location.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Loop](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-loop)** <br></br>A key describing metadata. The media loop.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Lyricist](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-lyricist)** <br></br>A key describing metadata. The media lyricist.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Manufacturer](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-manufacturer)** <br></br>A key describing metadata. The media manufacturer.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_Bit_Rate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-bit-rate)** <br></br>A key describing the max bitrate in bits/sec.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_Fps_To_Encoder](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-fps-to-encoder)** <br></br>Instruct the video encoder in "surface-input" mode to drop excessive frames from the source, so that the input frame rate to the encoder does not exceed the specified fps.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_Pts_Gap_To_Encoder](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-pts-gap-to-encoder)** <br></br>Instruct the video encoder in "surface-input" mode to limit the gap of timestamp between any two adjacent frames fed to the encoder to the specified amount (in micro-second).  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Mpeg_User_Data](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-mpeg-user-data)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Mpeg2_Stream_Header](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-mpeg2-stream-header)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_PCM_Big_Endian](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-pcm-big-endian)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Pssh](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-pssh)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Rotation](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-rotation)** <br></br>A key describing the desired clockwise rotation on an output surface.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Sar_Height](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-sar-height)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Sar_Width](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-sar-width)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Sei](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-sei)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Slice_Height](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-slice-height)** <br></br>A key describing the plane height of a multi-planar (YUV) video bytebuffer layout.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Target_Time](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-target-time)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Temporal_Layer_Count](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-temporal-layer-count)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Temporal_Layer_Id](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-temporal-layer-id)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Text_Format_Data](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-text-format-data)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Thumbnail_CSD_Hevc](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-thumbnail-csd-hevc)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Thumbnail_Height](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-thumbnail-height)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Thumbnail_Time](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-thumbnail-time)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Thumbnail_Width](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-thumbnail-width)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Tile_Height](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-height)** <br></br>A key describing the height (in pixels) of each tile of the content in a MIMETYPE_IMAGE_ANDROID_HEIC track. The associated value is an integer.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Tile_Width](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-width)** <br></br>A key describing the width (in pixels) of each tile of the content in a MIMETYPE_IMAGE_ANDROID_HEIC track. The associated value is an integer.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Time_Us](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-time-us)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Title](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-title)** <br></br>A key describing metadata. The title of the media.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Track_Id](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-track-id)** <br></br>A key describing a unique ID for the content of a media track.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Track_Index](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-track-index)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Valid_Samples](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-valid-samples)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Year](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-year)** <br></br>A key describing metadata. The year the media was created or published as a long.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_DRC_Effect_Type](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-effect-type)** <br></br>A key describing for selecting the DRC effect type for MPEG-D DRC.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Quality](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-quality)** <br></br>A key describing the desired encoding quality.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Output_Reorder_Depth](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-output-reorder-depth)** <br></br>An optional key describing the maximum number of non-display-order coded frames.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Is_Timed_Text](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-is-timed-text)**  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Ca_System_Id](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-ca-system-id)** <br></br>A key describing the system id of the conditional access system used to scramble a media track.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Ca_Session_Id](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-ca-session-id)** <br></br>A key describing the MediaCas.Session object associated with a media track.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Ca_Private_Data](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-ca-private-data)** <br></br>A key describing the private data in the CA_descriptor associated with a media track.  |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Feature_](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-feature-)** <br></br>A key prefix used together with a [MLMediaCodecBitrateMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecbitratemode) feature name describing a required or optional feature for a codec capabilities query.  |
| const float | **[MLTTMLDimen_Unset](/api-ref/api/Modules/group___media_player/group___media_player.md#const-float-mlttmldimen-unset)** <br></br>An unset position, width or size which is negative of maximum finite value of float (-FLT_MAX).  |
| size_t | **[size](/api-ref/api/Modules/group___media_player/group___media_player.md#size-t-size)**  |
| uint8_t * | **[data](/api-ref/api/Modules/group___media_player/group___media_player.md#uint8-t-data)**  |
| int64_t | **[start_time_ms](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-start-time-ms)**  |
| int64_t | **[end_time_ms](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-end-time-ms)**  |
| char * | **[text](/api-ref/api/Modules/group___media_player/group___media_player.md#char-text)**  |
| [MLTTMLLayoutAlignment](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllayoutalignment) | **[text_alignment](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmllayoutalignment-text-alignment)**  |
| [MLTTMLImage](/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_image.md) | **[bitmap](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmlimage-bitmap)**  |
| float | **[line](/api-ref/api/Modules/group___media_player/group___media_player.md#float-line)** <br></br>The position of the [line_anchor](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmlanchortype-line-anchor) of the cue box within the viewport in the direction orthogonal to the writing direction, or MLTTMLDimen_Unset.  |
| [MLTTMLLineType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype) | **[line_type](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmllinetype-line-type)** <br></br>The cue line type.  |
| [MLTTMLAnchorType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype) | **[line_anchor](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmlanchortype-line-anchor)**  |
| float | **[position](/api-ref/api/Modules/group___media_player/group___media_player.md#float-position)** <br></br>The fractional position of the [position_anchor](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmlanchortype-position-anchor) of the cue box within the viewport in the direction orthogonal to [line](/api-ref/api/Modules/group___media_player/group___media_player.md#float-line), or MLTTMLDimen_Unset.  |
| [MLTTMLAnchorType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype) | **[position_anchor](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmlanchortype-position-anchor)**  |
| float | **[size](/api-ref/api/Modules/group___media_player/group___media_player.md#float-size)**  |
| float | **[bitmap_height](/api-ref/api/Modules/group___media_player/group___media_player.md#float-bitmap-height)**  |
| bool | **[window_color_set](/api-ref/api/Modules/group___media_player/group___media_player.md#bool-window-color-set)**  |
| uint32_t | **[window_color](/api-ref/api/Modules/group___media_player/group___media_player.md#uint32-t-window-color)**  |
| [MLTTMLTextSizeType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype) | **[text_size_type](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmltextsizetype-text-size-type)**  |
| float | **[text_size](/api-ref/api/Modules/group___media_player/group___media_player.md#float-text-size)**  |
| int64_t | **[start_time_ms](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-start-time-ms)**  |
| int64_t | **[end_time_ms](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-end-time-ms)**  |
| char * | **[body](/api-ref/api/Modules/group___media_player/group___media_player.md#char-body)**  |
| char * | **[id](/api-ref/api/Modules/group___media_player/group___media_player.md#char-id)**  |
| bool | **[snap_to_lines](/api-ref/api/Modules/group___media_player/group___media_player.md#bool-snap-to-lines)**  |
| [MLWebVTTOrientation](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttorientation) | **[orientation](/api-ref/api/Modules/group___media_player/group___media_player.md#mlwebvttorientation-orientation)**  |
| [MLWebVTTDirection](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttdirection) | **[direction](/api-ref/api/Modules/group___media_player/group___media_player.md#mlwebvttdirection-direction)**  |
| float | **[relative_line_position](/api-ref/api/Modules/group___media_player/group___media_player.md#float-relative-line-position)**  |
| int32_t | **[line_number](/api-ref/api/Modules/group___media_player/group___media_player.md#int32-t-line-number)**  |
| float | **[text_position](/api-ref/api/Modules/group___media_player/group___media_player.md#float-text-position)**  |
| float | **[size](/api-ref/api/Modules/group___media_player/group___media_player.md#float-size)**  |
| [MLWebVTTAlign](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttalign) | **[align](/api-ref/api/Modules/group___media_player/group___media_player.md#mlwebvttalign-align)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAX_CODEC_NAME_SIZE](/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-codec-name-size)**  |
|  | **[MAX_CODEC_NAME_LENGTH](/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-codec-name-length)**  |
|  | **[MAX_FORMAT_STRING_SIZE](/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-format-string-size)**  |
|  | **[MAX_KEY_STRING_SIZE](/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-key-string-size)**  |

## Detailed Description

Defines Audio Channel Mask to describe the input/output posistion. Position implies, the location of a speaker or a microphone for recording or playback. 

APIs for creaitng native surface (or surface texture) that works with graphics.

Data Structure for WebVTT Timed Text.

Data Structure for TTML Timed Text.

APIs for accessing streaming media from memory.

APIs for high level management of media playback.

APIs for MediaMuxer to facilitate muxing of elementary streams.

APIs for creating and retrieving media format information.

APIs for to extracting elementary track from media container.

APIs for MediaDRM to obtain the content keys for decrypting protected media streams, in conjunction with ml_mediacrypto.

APIs for defining an user implemented DataSource that acts as media track source.

APIs for creaitng crypto session for setting up encrypted media playback.

APIs for retrieving all supported encoders and decoders.

APIs for encoding and decoding audio and video buffers.

APIs for CEA708 Closed Captions Parser.

APIs for CEA608 Closed Captions Parser.


Stringify the error codes returned by these APIs, call MLMediaResultGetString.




**Shared Object:**
  * media_ccparser.magicleap*

**Shared Object:**
  * media_cea708parser.magicleap*

**Shared Object:**
  * media_codec.magicleap*

**Shared Object:**
  * media_codeclist.magicleap*

**Shared Object:**
  * media_crypto.magicleap*

**Shared Object:**
  * media_player.magicleap*

**Shared Object:**
  * media_drm.magicleap*

**Shared Object:**
  * media_extractor.magicleap*

**Shared Object:**
  * media_format.magicleap*

**Shared Object:**
  * media_muxer.magicleap*

**Shared Object:**
  * native_surface.magicleap*




-----------
## Enums Documentation

### MLAudioChannelOutMask {#enums-mlaudiochanneloutmask}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioChannelOutMask_FrontLeft |  0x1| |
| MLAudioChannelOutMask_FrontRight |  0x2| |
| MLAudioChannelOutMask_FrontCenter |  0x4| |
| MLAudioChannelOutMask_LowFrequency |  0x8| |
| MLAudioChannelOutMask_BackLeft |  0x10| |
| MLAudioChannelOutMask_BackRight |  0x20| |
| MLAudioChannelOutMask_FrontLeftOfCenter |  0x40| |
| MLAudioChannelOutMask_FrontRightOfCenter |  0x80| |
| MLAudioChannelOutMask_BackCenter |  0x100| |
| MLAudioChannelOutMask_SideLeft |  0x200| |
| MLAudioChannelOutMask_SideRight |  0x400| |
| MLAudioChannelOutMask_TopCenter |  0x800| |
| MLAudioChannelOutMask_TopFrontLeft |  0x1000| |
| MLAudioChannelOutMask_TopFrontCenter |  0x2000| |
| MLAudioChannelOutMask_TopFrontRight |  0x4000| |
| MLAudioChannelOutMask_TopBackLeft |  0x8000| |
| MLAudioChannelOutMask_TopBackCenter |  0x10000| |
| MLAudioChannelOutMask_TopBackRight |  0x20000| |
| MLAudioChannelOutMask_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Audio channel output mask. 

For a channel position mask, each allowed channel position corresponds to a bit in the channel mask. If that channel position is present in the audio frame, that bit is set, otherwise it is zero. The order of the bits (from lsb to msb) corresponds to the order of that position's sample in the audio frame. The canonical channel position masks by channel count are as follows:



------------------


# channel count  channel position mask

1 MLAudioChannelOutMono 2 MLAudioChannelOutStereo 3 MLAudioChannelOutStereo | MLAudioChannelOutMask_FrontCenter 4 MLAudioChannelOutQuad 5 MLAudioChannelOutQuad | MLAudioChannelOutMask_FrontCenter 6 MLAudioChannelOut5Point1 7 MLAudioChannelOut5Point1 | MLAudioChannelOutMask_BackCenter 


# 8    MLAudioChannelOut7Point1Surround

These masks are an ORed composite of individual channel masks. For example MLAudioChannelOutMask_Stereo is composed of MLAudioChannelOutMask_FrontLeft and MLAudioChannelOutMask_FrontRight.

Reference:

* [https://android.googlesource.com/platform/frameworks/base/+/b267554/media/java/android/media/AudioFormat.java](https://android.googlesource.com/platform/frameworks/base/+/b267554/media/java/android/media/AudioFormat.java)
* [https://trac.ffmpeg.org/wiki/AudioChannelManipulation#Listchannelnamesandstandardchannellayouts](https://trac.ffmpeg.org/wiki/AudioChannelManipulation#Listchannelnamesandstandardchannellayouts)





-----------

### MLCea608CaptionDimension {#enums-mlcea608captiondimension}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea608_CCMaxRows |  15| |
| MLCea608_CCMaxCols |  32| |
| MLCea608_CCMaxRowsPlus2 |  17| |
| MLCea608_CCMaxColsPlus2 |  34| |
| MLCea608_CCMaxRowsCols_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea608 Caption Dimension constants. 




**API Level:**
  * 2




-----------

### MLCea608CaptionColor {#enums-mlcea608captioncolor}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea608CaptionColor_White |  0| |
| MLCea608CaptionColor_Green |  1| |
| MLCea608CaptionColor_Blue |  2| |
| MLCea608CaptionColor_Cyan |  3| |
| MLCea608CaptionColor_Red |  4| |
| MLCea608CaptionColor_Yellow |  5| |
| MLCea608CaptionColor_Magenta |  6| |
| MLCea608CaptionColor_Invalide |  7| |
| MLCea608CaptionColor_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea608 caption color code. 




**API Level:**
  * 2




-----------

### MLCea608CaptionStyle {#enums-mlcea608captionstyle}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea608CaptionStyle_Italics |  0x00000001| |
| MLCea608CaptionStyle_Underline |  0x00000002| |
| MLCea608CaptionStyle_Ensure32Bits |  0x7FFFFFFF| |



Cea608 caption style code. 




**API Level:**
  * 2




-----------

### Anonymous Enum 16 {#enums-anonymous-enum-16}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea608_TS |  0x00A0| NO-BREAK SPACE. |








-----------

### Anonymous Enum 17 {#enums-anonymous-enum-17}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionWindows_Max |  8| |



Cea708 Caption maximum windows constant. 




**API Level:**
  * 8




-----------

### Anonymous Enum 18 {#enums-anonymous-enum-18}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionEmitCommandBuffer_MaxSize |  20| |



Maximum size for Cea708 Caption Emit command buffers. 




**API Level:**
  * 8




-----------

### MLCea708CaptionEmitCommand {#enums-mlcea708captionemitcommand}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionEmitCommand_Buffer |  1| Buffer. |
| MLCea708CaptionEmitCommand_Control |  2| Control. |
| MLCea708CaptionEmitCommand_CWX |  3| SetCurrentWindow tells the caption decoder which window the following commands describe: * SetWindowAttributes* SetPenAttributes* SetPenColor* SetPenLocation. If the window specified has not already been created with a DefineWindow command then, SetCurrentWindow and the window property commands can be safely ignored. |
| MLCea708CaptionEmitCommand_CLW |  4| ClearWindows clears all the windows specified in the 8 bit window bitmap. |
| MLCea708CaptionEmitCommand_DSW |  5| DisplayWindows displays all the windows specified in the 8 bit window bitmap. |
| MLCea708CaptionEmitCommand_HDW |  6| HideWindows hides all the windows specified in the 8 bit window bitmap. |
| MLCea708CaptionEmitCommand_TGW |  7| ToggleWindows hides all displayed windows, and displays all hidden windows specified in the 8 bit window bitmap. |
| MLCea708CaptionEmitCommand_DLW |  8| DeleteWindows deletes all the windows specified in the 8 bit window bitmap. If the current window, as specified by the last SetCurrentWindow command, is deleted then the current window becomes undefined and the window attribute commands should have no effect until after the next SetCurrentWindow or DefineWindow command. |
| MLCea708CaptionEmitCommand_DLY |  9| Delay suspends all processing of the current service, except for DelayCancel and Reset scanning. |
| MLCea708CaptionEmitCommand_DLC |  10| DelayCancel terminates any active delay and resumes normal command processing. DelayCancel should be scanned for during a Delay. |
| MLCea708CaptionEmitCommand_RST |  11| Reset deletes all windows, cancels any active delay, and clears the buffer before the Reset command. Reset should be scanned for during a Delay. |
| MLCea708CaptionEmitCommand_SPA |  12| The SetPenAttributes command specifies how certain attributes of subsequent characters are to be rendered in the current window, until the next SetPenAttributes command. |
| MLCea708CaptionEmitCommand_SPC |  13| SetPenColor sets the foreground, background, and edge color for the subsequent characters. |
| MLCea708CaptionEmitCommand_SPL |  14| SetPenLocation sets the location of for the next bit of appended text in the current window. It has two parameters, row and column. |
| MLCea708CaptionEmitCommand_SWA |  15| SetWindowAttributes Sets the window attributes of the current window. |
| MLCea708CaptionEmitCommand_DFX |  16| DefineWindow0-7 creates one of the eight windows used by a caption decoder. |
| MLCea708CaptionEmitCommand_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea708 Caption Emit Commands constants. 




**API Level:**
  * 8




-----------

### MLCea708CaptionEmitCommandControl {#enums-mlcea708captionemitcommandcontrol}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionEmitCommandControl_ETX |  0x03| End of Text. |
| MLCea708CaptionEmitCommandControl_BS |  0x08| |
| MLCea708CaptionEmitCommandControl_FF |  0x0c| |
| MLCea708CaptionEmitCommandControl_HCR |  0x0e| |
| MLCea708CaptionEmitCommandControl_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea708 Caption Emit Command Control constants. 




**API Level:**
  * 8




-----------

### MLCea708CaptionColorOpacity {#enums-mlcea708captioncoloropacity}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionColorOpacity_SOLID |  0| |
| MLCea708CaptionColorOpacity_FLASH |  1| |
| MLCea708CaptionColorOpacity_TRANSLUCENT |  2| |
| MLCea708CaptionColorOpacity_TRANSPARENT |  3| |
| MLCea708CaptionColorOpacity_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea708 Caption Color Opacity constants. 




**API Level:**
  * 8




-----------

### MLCea708CaptionPenSize {#enums-mlcea708captionpensize}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionPenSize_SMALL |  0| |
| MLCea708CaptionPenSize_STANDARD |  1| |
| MLCea708CaptionPenSize_LARGE |  2| |
| MLCea708CaptionPenSize_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea708 Caption Pen Size constants. 




**API Level:**
  * 8




-----------

### MLCea708CaptionPenOffset {#enums-mlcea708captionpenoffset}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionPenOffset_SUBSCRIPT |  0| |
| MLCea708CaptionPenOffset_NORMAL |  1| |
| MLCea708CaptionPenOffset_SUPERSCRIPT |  2| |
| MLCea708CaptionPenOffset_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea708 Caption Pen Offset constants. 




**API Level:**
  * 8




-----------

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

### MLMediaCodecListCodecTypeFlag {#enums-mlmediacodeclistcodectypeflag}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecListCodecTypeFlag_Software |  1 << 0| Software. |
| MLMediaCodecListCodecTypeFlag_Hardware |  1 << 1| Hardware. |
| MLMediaCodecListCodecTypeFlag_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |




Bit mask for specifying the type of codec being queried using [MLMediaCodecListGetMatchingCodecs()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetmatchingcodecs). 





-----------

### MLMediaCodecListCapabilityFlag {#enums-mlmediacodeclistcapabilityflag}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecListCapabilityFlag_AdaptivePlayback |  1 << 0| Adaptive playback. |
| MLMediaCodecListCapabilityFlag_SecurePlayback |  1 << 1| Secure playback. |
| MLMediaCodecListCapabilityFlag_TunneledPlayback |  1 << 2| Tunneled playback. |
| MLMediaCodecListCapabilityFlag_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |




Bit mask for checking the capability of a codec after queried via [MLMediaCodecListGetCapabilityFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcapabilityflag). 





-----------

### MLMediaCodecColorFormat {#enums-mlmediacodeccolorformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecColorFormat_Unused |  0| Unused: Placeholder value when format is N/A. |
| MLMediaCodecColorFormat_Monochrome |  1| Monochrome: black and white. |
| MLMediaCodecColorFormat_8BitRGB332 |  2| 8BitRGB332: Red 7:5, Green 4:2, Blue 1:0. |
| MLMediaCodecColorFormat_12BitRGB444 |  3| 12BitRGB444: Red 11:8, Green 7:4, Blue 3:0. |
| MLMediaCodecColorFormat_16BitARGB4444 |  4| 16BitARGB4444: Alpha 15:12, Red 11:8, Green 7:4, Blue 3:0. |
| MLMediaCodecColorFormat_16BitARGB1555 |  5| 16BitARGB1555: Alpha 15, Red 14:10, Green 9:5, Blue 4:0. |
| MLMediaCodecColorFormat_16BitRGB565 |  6| 16BitRGB565: Red 15:11, Green 10:5, Blue 4:0. |
| MLMediaCodecColorFormat_16BitBGR565 |  7| 16BitBGR565: Blue 15:11, Green 10:5, Red 4:0. |
| MLMediaCodecColorFormat_18BitRGB666 |  8| 18BitRGB666: Red 17:12, Green 11:6, Blue 5:0. |
| MLMediaCodecColorFormat_18BitARGB1665 |  9| 18BitARGB1665: Alpha 17, Red 16:11, Green 10:5, Blue 4:0. |
| MLMediaCodecColorFormat_19BitARGB1666 |  10| 19BitARGB1666: Alpha 18, Red 17:12, Green 11:6, Blue 5:0. |
| MLMediaCodecColorFormat_24BitRGB888 |  11| 24BitRGB888: Red 24:16, Green 15:8, Blue 7:0. |
| MLMediaCodecColorFormat_24BitBGR888 |  12| 24BitBGR888: Blue 24:16, Green 15:8, Red 7:0. |
| MLMediaCodecColorFormat_24BitARGB1887 |  13| 24BitARGB1887: Alpha 23, Red 22:15, Green 14:7, Blue 6:0. |
| MLMediaCodecColorFormat_25BitARGB1888 |  14| 25BitARGB1888: Alpha 24, Red 23:16, Green 15:8, Blue 7:0. |
| MLMediaCodecColorFormat_32BitBGRA8888 |  15| 32BitBGRA8888: Blue 31:24, Green 23:16, Red 15:8, Alpha 7:0. |
| MLMediaCodecColorFormat_32BitARGB8888 |  16| 32BitARGB8888: Alpha 31:24, Red 23:16, Green 15:8, Blue 7:0. |
| MLMediaCodecColorFormat_YUV411Planar |  17| YUV411Planar: U,Y are subsampled by a factor of 4 horizontally. |
| MLMediaCodecColorFormat_YUV411PackedPlanar |  18| YUV411PackedPlanar: packed per payload in planar slices. |
| MLMediaCodecColorFormat_YUV420Planar |  19| YUV420Planar: Three arrays Y,U,V. |
| MLMediaCodecColorFormat_YUV420PackedPlanar |  20| YUV420PackedPlanar: packed per payload in planar slices. |
| MLMediaCodecColorFormat_YUV420SemiPlanar |  21| YUV420SemiPlanar: Two arrays, one is all Y, the other is U and V. |
| MLMediaCodecColorFormat_YUV422Planar |  22| YUV422Planar: Three arrays Y,U,V. |
| MLMediaCodecColorFormat_YUV422PackedPlanar |  23| YUV422PackedPlanar: packed per payload in planar slices. |
| MLMediaCodecColorFormat_YUV422SemiPlanar |  24| YUV422SemiPlanar: Two arrays, one is all Y, the other is U and V. |
| MLMediaCodecColorFormat_YCbYCr |  25| YCbYCr: Organized as 16Bit YUYV (i.e. YCbYCr). |
| MLMediaCodecColorFormat_YCrYCb |  26| YCrYCb: Organized as 16Bit YVYU (i.e. YCrYCb). |
| MLMediaCodecColorFormat_CbYCrY |  27| CbYCrY: Organized as 16Bit UYVY (i.e. CbYCrY). |
| MLMediaCodecColorFormat_CrYCbY |  28| CrYCbY: Organized as 16Bit VYUY (i.e. CrYCbY). |
| MLMediaCodecColorFormat_YUV444Interleaved |  29| YUV444Interleaved: Each pixel contains equal parts YUV. |
| MLMediaCodecColorFormat_RawBayer8Bit |  30| RawBayer8Bit: SMIA camera output format. |
| MLMediaCodecColorFormat_RawBayer10Bit |  31| RawBayer10Bit: SMIA camera output format. |
| MLMediaCodecColorFormat_RawBayer8Bitcompressed |  32| RawBayer8Bitcompressed: SMIA camera output format. |
| MLMediaCodecColorFormat_L2 |  33| Deprecated. Use MLMediaCodecColorFormat_L8. |
| MLMediaCodecColorFormat_L4 |  34| Deprecated. Use MLMediaCodecColorFormat_L8. |
| MLMediaCodecColorFormat_L8 |  35| 8 Bits per pixel Y color format. |
| MLMediaCodecColorFormat_L16 |  36| 16 Bits per pixel, little-endian Y color format. |
| MLMediaCodecColorFormat_L24 |  37| Deprecated. Use MLMediaCodecColorFormat_L16. |
| MLMediaCodecColorFormat_L32 |  38| Deprecated. Use MLMediaCodecColorFormat_L16. |
| MLMediaCodecColorFormat_YUV420PackedSemiPlanar | | YUV420PackedSemiPlanar. |
| MLMediaCodecColorFormat_YUV422PackedSemiPlanar | | YUV422PackedSemiPlanar. |
| MLMediaCodecColorFormat_18BitBGR666 | | 18BitBGR666. |
| MLMediaCodecColorFormat_24BitARGB6666 | | 24BitARGB6666. |
| MLMediaCodecColorFormat_24BitABGR6666 | | 24BitABGR6666. |
| MLMediaCodecColorFormat_KhronosExtensions |  0x6F000000| Reserved region for introducing Khronos Standard Extensions. |
| MLMediaCodecColorFormat_VendorStartUnused |  0x7F000000| Reserved region for introducing Vendor Extensions. |
| MLMediaCodecColorFormat_AndroidOpaque |  0x7F000789| Reserved android opaque color format. Tells the encoder that the actual color format will be relayed by the Graphics memory allocator Buffers. |
| MLMediaCodecColorFormat_32BitRGBA8888 |  0x7F00A000| 32BitRGBA8888. |
| MLMediaCodecColorFormat_YUV420Flexible |  0x7F420888| Flexible 8-bit YUV format. Codec should report this format as being supported if it supports any YUV420 packed planar or semiplanar formats. When port is set to use this format, codec can substitute any YUV420 packed planar or semiplanar format for it. |
| MLMediaCodecColorFormat_YUV420Planar16 |  0x7F42016B| 10-bit or 12-bit YUV format, LSB-justified (0's on higher bits). |
| MLMediaCodecColorFormat_YUV444Y410 |  0x7F444AAA| Packed 10-bit YUV444 representation that includes 2 bits of alpha. Each pixel is 32-bit. Bits 0-9 contain the U sample, bits 10-19 contain the Y sample, bits 20-29 contain the V sample, and bits 30-31 contain the alpha value. |
| MLMediaCodecColorFormat_TIYUV420PackedSemiPlanar |  0x7F000100| TI's YUV420PackedSemiPlanar. |
| MLMediaCodecColorFormat_QCOMYVU420SemiPlanar |  0x7FA30C00| QCOM's YVU420SemiPlanar. |
| MLMediaCodecColorFormat_QCOMYUV420PackedSemiPlanar64x32Tile2m8ka |  0x7FA30C03| QCOM's YUV420PackedSemiPlanar64x32Tile2m8ka. |
| MLMediaCodecColorFormat_QCOMYUV420PackedSemiPlanar32m |  0x7FA30C04| QCOM's YUV420PackedSemiPlanar32m. |
| MLMediaCodecColorFormat_SECNV12Tiled |  0x7FC00002| SEC's NV12Tiled. |
| MLMediaCodecColorFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |



Enumeration defining possible uncompressed image/video formats. 




**API Level:**
  * 9




-----------

### MLMediaCodecPriority {#enums-mlmediacodecpriority}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecPriority_RealTime |  0| Realtime priority. The codec shall support the given performance configuration (e.g. framerate) at realtime. This should only be used by media playback, capture, and possibly by realtime communication scenarios if best effort performance is not suitable. |
| MLMediaCodecPriority_NonRealTime |  1| Non-realtime priority (best effort). |
| MLMediaCodecPriority_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |



Enumeration defining the Codec priority. 




**API Level:**
  * 9




-----------

### MLMediaCodecIntraRefreshMode {#enums-mlmediacodecintrarefreshmode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecIntraRefreshMode_Cyclic |  0| Cyclic. |
| MLMediaCodecIntraRefreshMode_Adaptive |  1| Adaptive. |
| MLMediaCodecIntraRefreshMode_Both |  2| Both. |
| MLMediaCodecIntraRefreshMode_Ensure32Bits |  0x7FFFFFFF| |



Enumeration of possible methods to use for Intra Refresh. 




**API Level:**
  * 9




-----------

### MLMediaCodecBitrateMode {#enums-mlmediacodecbitratemode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecBitrateMode_CQ |  0| Constant quality mode. |
| MLMediaCodecBitrateMode_VBR |  1| Variable bitrate mode. |
| MLMediaCodecBitrateMode_CBR |  2| Constant bitrate mode. |
| MLMediaCodecBitrateMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |



Enumeration defining Codec Bitrate modes. 




**API Level:**
  * 9




-----------

### MLMediaCodecProfileType {#enums-mlmediacodecprofiletype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecProfileType_H263Baseline |  0x01| H263 Baseline Profile: H.263 (V1), no optional modes. |
| MLMediaCodecProfileType_H263H320Coding |  0x02| H263 H.320 Coding Efficiency Backward Compatibility Profile: H.263+ (V2), includes annexes I, J, L.4 and T. |
| MLMediaCodecProfileType_H263BackwardCompatible |  0x04| H263 Backward Compatibility Profile: H.263 (V1), includes annex F. |
| MLMediaCodecProfileType_H263ISWV2 |  0x08| H263 Interactive Streaming Wireless Profile: H.263+ (V2), includes annexes I, J, K and T. |
| MLMediaCodecProfileType_H263ISWV3 |  0x10| H263 Interactive Streaming Wireless Profile: H.263++ (V3), includes profile 3 and annexes V and W.6.3.8. |
| MLMediaCodecProfileType_H263HighCompression |  0x20| H263 Conversational High Compression Profile: H.263++ (V3), includes profiles 1 & 2 and annexes D and U. |
| MLMediaCodecProfileType_H263Internet |  0x40| H263 Conversational Internet Profile: H.263++ (V3), includes profile 5 and annex K. |
| MLMediaCodecProfileType_H263Interlace |  0x80| H263 Conversational Interlace Profile: H.263++ (V3), includes profile 5 and annex W.6.3.11. |
| MLMediaCodecProfileType_H263HighLatency |  0x100| H263 High Latency Profile: H.263++ (V3), includes profile 6 and annexes O.1 and P.5. |
| MLMediaCodecProfileType_MPEG2Simple |  0| MPEG-2 Simple Profile. |
| MLMediaCodecProfileType_MPEG2Main |  1| MPEG-2 Main Profile. |
| MLMediaCodecProfileType_MPEG2422 |  2| MPEG-2 4:2:2 Profile. |
| MLMediaCodecProfileType_MPEG2SNR |  3| MPEG-2 SNR Profile. |
| MLMediaCodecProfileType_MPEG2Spatial |  4| MPEG-2 Spatial Profile. |
| MLMediaCodecProfileType_MPEG2High |  5| MPEG-2 High Profile. |
| MLMediaCodecProfileType_MPEG4Simple |  0x01| MPEG-4 Simple Profile, Levels 1-3. |
| MLMediaCodecProfileType_MPEG4SimpleScalable |  0x02| MPEG-4 Simple Scalable Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4Core |  0x04| MPEG-4 Core Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4Main |  0x08| MPEG-4 Main Profile, Levels 2-4. |
| MLMediaCodecProfileType_MPEG4Nbit |  0x10| MPEG-4 N-bit Profile, Level 2. |
| MLMediaCodecProfileType_MPEG4ScalableTexture |  0x20| MPEG-4 Scalable Texture Profile, Level 1. |
| MLMediaCodecProfileType_MPEG4SimpleFace |  0x40| MPEG-4 Simple Face Animation Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4SimpleFBA |  0x80| MPEG-4 Simple Face and Body Animation (FBA) Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4BasicAnimated |  0x100| MPEG-4 Basic Animated Texture Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4Hybrid |  0x200| MPEG-4 Hybrid Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4AdvancedRealTime |  0x400| MPEG-4 Advanced Real Time Simple Profiles, Levels 1-4. |
| MLMediaCodecProfileType_MPEG4CoreScalable |  0x800| MPEG-4 Core Scalable Profile, Levels 1-3. |
| MLMediaCodecProfileType_MPEG4AdvancedCoding |  0x1000| MPEG-4 Advanced Coding Efficiency Profile, Levels 1-4. |
| MLMediaCodecProfileType_MPEG4AdvancedCore |  0x2000| MPEG-4 Advanced Core Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4AdvancedScalable |  0x4000| MPEG-4 Advanced Scalable Texture, Levels 2-3. |
| MLMediaCodecProfileType_MPEG4AdvancedSimple |  0x8000| MPEG-4 Advanced Simple. |
| MLMediaCodecProfileType_AVCBaseline |  0x01| AVC Baseline profile. |
| MLMediaCodecProfileType_AVCMain |  0x02| AVC Main profile. |
| MLMediaCodecProfileType_AVCExtended |  0x04| AVC Extended profile. |
| MLMediaCodecProfileType_AVCHigh |  0x08| AVC High profile. |
| MLMediaCodecProfileType_AVCHigh10 |  0x10| AVC High 10 profile. |
| MLMediaCodecProfileType_AVCHigh422 |  0x20| AVC High 4:2:2 profile. |
| MLMediaCodecProfileType_AVCHigh444 |  0x40| AVC High 4:4:4 profile. |
| MLMediaCodecProfileType_VP8Main |  0x01| VP8 Main profile. |
| MLMediaCodecProfileType_VP90 |  0x01| VP9 Profile 0 4:2:0 8-bit. |
| MLMediaCodecProfileType_VP91 |  0x02| VP9 Profile 1 4:2:2 8-bit. |
| MLMediaCodecProfileType_VP92 |  0x04| VP9 Profile 2 4:2:0 10-bit. |
| MLMediaCodecProfileType_VP93 |  0x08| VP9 Profile 3 4:2:2 10-bit. |
| MLMediaCodecProfileType_VP92HDR |  0x1000| VP9 Profile 2 4:2:0 10-bit HDR. |
| MLMediaCodecProfileType_VP93HDR |  0x2000| VP9 Profile 3 4:2:2 10-bit HDR. |
| MLMediaCodecProfileType_VP92HDR10Plus |  0x4000| VP9 Profile 2 4:2:0 10-bit HDR10Plus. |
| MLMediaCodecProfileType_VP93HDR10Plus |  0x8000| VP9 Profile 3 4:2:2 10-bit HDR10Plus. |
| MLMediaCodecProfileType_HEVCMain |  0x01| HEVC Main profile. |
| MLMediaCodecProfileType_HEVCMain10 |  0x02| HEVC Main 1.0 profile. |
| MLMediaCodecProfileType_HEVCMainStill |  0x04| HEVC Main Still profile. |
| MLMediaCodecProfileType_HEVCMain10HDR10 |  0x1000| HEVC Main HDR profile. |
| MLMediaCodecProfileType_HEVCMain10HDR10Plus |  0x2000| HEVC Main HDR+ profile. |
| MLMediaCodecProfileType_AACObjectNull |  0| AAC Null, not used. |
| MLMediaCodecProfileType_AACObjectMain |  1| AAC Main object. |
| MLMediaCodecProfileType_AACObjectLC |  2| AAC Low Complexity object (AAC profile). |
| MLMediaCodecProfileType_AACObjectSS |  3| AAC Scalable Sample Rate object. |
| MLMediaCodecProfileType_AACObjectLTP |  4| AAC Long Term Prediction object. |
| MLMediaCodecProfileType_AACObjectHE |  5| AAC High Efficiency (object type SBR, HE-AAC profile). |
| MLMediaCodecProfileType_AACObjectScalable |  6| AAC Scalable object. |
| MLMediaCodecProfileType_AACObjectERLC |  17| ER AAC Low Complexity object (Error Resilient AAC-LC). |
| MLMediaCodecProfileType_AACObjectLD |  23| AAC Low Delay object (Error Resilient). |
| MLMediaCodecProfileType_AACObjectHE_PS |  29| AAC High Efficiency with Parametric Stereo coding (HE-AAC v2, object type PS). |
| MLMediaCodecProfileType_WMAProfileUnused |  0| WMA profile unused or unknown . |
| MLMediaCodecProfileType_WMAProfileL1 |  1| WMA version 9 profile L1. |
| MLMediaCodecProfileType_WMAProfileL2 |  2| WMA version 9 profile L2. |
| MLMediaCodecProfileType_WMAProfileL3 |  3| WMA version 9 profile L3. |
| MLMediaCodecProfileType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |



Enumeration defining Codec profile types. 

This is a consolidated list for all the codecs that support profiles. Each profile indicates support for various performance bounds and different annexes.



:::note
A codec may not support all the profiles and levels listed below. For any given codec, the supported profiles and levels can be queried using [MLMediaCodecListGetSupportedProfileLevels](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels).
:::


**API Level:**
  * 9




-----------

### MLMediaCodecLevelType {#enums-mlmediacodecleveltype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecLevelType_H263Level10 |  0x01| H263 Level 1.0. |
| MLMediaCodecLevelType_H263Level20 |  0x02| H263 Level 2.0. |
| MLMediaCodecLevelType_H263Level30 |  0x04| H263 Level 3.0. |
| MLMediaCodecLevelType_H263Level40 |  0x08| H263 Level 4.0. |
| MLMediaCodecLevelType_H263Level45 |  0x10| H263 Level 4.5. |
| MLMediaCodecLevelType_H263Level50 |  0x20| H263 Level 5.0. |
| MLMediaCodecLevelType_H263Level60 |  0x40| H263 Level 6.0. |
| MLMediaCodecLevelType_H263Level70 |  0x80| H263 Level 7.0. |
| MLMediaCodecLevelType_MPEG2LevelLL |  0| MPEG-2 Low Level. |
| MLMediaCodecLevelType_MPEG2LevelML |  1| MPEG-2 Main Level. |
| MLMediaCodecLevelType_MPEG2LevelH14 |  2| MPEG-2 High 1440. |
| MLMediaCodecLevelType_MPEG2LevelHL |  3| MPEG-2 High Level. |
| MLMediaCodecLevelType_MPEG4Level0 |  0x01| MPEG-4 Level 0. |
| MLMediaCodecLevelType_MPEG4Level0b |  0x02| MPEG-4 Level 0b. |
| MLMediaCodecLevelType_MPEG4Level1 |  0x04| MPEG-4 Level 1. |
| MLMediaCodecLevelType_MPEG4Level2 |  0x08| MPEG-4 Level 2. |
| MLMediaCodecLevelType_MPEG4Level3 |  0x10| MPEG-4 Level 3. |
| MLMediaCodecLevelType_MPEG4Level4 |  0x20| MPEG-4 Level 4. |
| MLMediaCodecLevelType_MPEG4Level4a |  0x40| MPEG-4 Level 4a. |
| MLMediaCodecLevelType_MPEG4Level5 |  0x80| MPEG-4 Level 5. |
| MLMediaCodecLevelType_AVCLevel1 |  0x01| AVC Level 1. |
| MLMediaCodecLevelType_AVCLevel1b |  0x02| AVC Level 1.b. |
| MLMediaCodecLevelType_AVCLevel11 |  0x04| AVC Level 1.1. |
| MLMediaCodecLevelType_AVCLevel12 |  0x08| AVC Level 1.2. |
| MLMediaCodecLevelType_AVCLevel13 |  0x10| AVC Level 1.3. |
| MLMediaCodecLevelType_AVCLevel2 |  0x20| AVC Level 2. |
| MLMediaCodecLevelType_AVCLevel21 |  0x40| AVC Level 2.1. |
| MLMediaCodecLevelType_AVCLevel22 |  0x80| AVC Level 2.2. |
| MLMediaCodecLevelType_AVCLevel3 |  0x100| AVC Level 3. |
| MLMediaCodecLevelType_AVCLevel31 |  0x200| AVC Level 3.1. |
| MLMediaCodecLevelType_AVCLevel32 |  0x400| AVC Level 3.2. |
| MLMediaCodecLevelType_AVCLevel4 |  0x800| AVC Level 4. |
| MLMediaCodecLevelType_AVCLevel41 |  0x1000| AVC Level 4.1. |
| MLMediaCodecLevelType_AVCLevel42 |  0x2000| AVC Level 4.2. |
| MLMediaCodecLevelType_AVCLevel5 |  0x4000| AVC Level 5. |
| MLMediaCodecLevelType_AVCLevel51 |  0x8000| AVC Level 5.1. |
| MLMediaCodecLevelType_VP8LevelVersion0 |  0x01| VP8 Level version 0. |
| MLMediaCodecLevelType_VP8LevelVersion1 |  0x02| VP8 Level version 1. |
| MLMediaCodecLevelType_VP8LevelVersion2 |  0x04| VP8 Level version 2. |
| MLMediaCodecLevelType_VP8LevelVersion3 |  0x08| VP8 Level version 3. |
| MLMediaCodecLevelType_VP9Level1 |  0x1| VP9 Level 5.1. |
| MLMediaCodecLevelType_VP9Level11 |  0x2| VP9 Level 1.1. |
| MLMediaCodecLevelType_VP9Level2 |  0x4| VP9 Level 2. |
| MLMediaCodecLevelType_VP9Level21 |  0x8| VP9 Level 2.1. |
| MLMediaCodecLevelType_VP9Level3 |  0x10| VP9 Level 3. |
| MLMediaCodecLevelType_VP9Level31 |  0x20| VP9 Level 3.1. |
| MLMediaCodecLevelType_VP9Level4 |  0x40| VP9 Level 4. |
| MLMediaCodecLevelType_VP9Level41 |  0x80| VP9 Level 4.1. |
| MLMediaCodecLevelType_VP9Level5 |  0x100| VP9 Level 5. |
| MLMediaCodecLevelType_VP9Level51 |  0x200| VP9 Level 5.1. |
| MLMediaCodecLevelType_VP9Level52 |  0x400| VP9 Level 5.2. |
| MLMediaCodecLevelType_VP9Level6 |  0x800| VP9 Level 6. |
| MLMediaCodecLevelType_VP9Level61 |  0x1000| VP9 Level 6.1. |
| MLMediaCodecLevelType_VP9Level62 |  0x2000| VP9 Level 6.2. |
| MLMediaCodecLevelType_HEVCMainTierLevel1 |  0x1| HEVC Main Level 1. |
| MLMediaCodecLevelType_HEVCHighTierLevel1 |  0x2| HEVC High Level 1. |
| MLMediaCodecLevelType_HEVCMainTierLevel2 |  0x4| HEVC Main Level 2. |
| MLMediaCodecLevelType_HEVCHighTierLevel2 |  0x8| HEVC High Level 2. |
| MLMediaCodecLevelType_HEVCMainTierLevel21 |  0x10| HEVC Main Level 2.1. |
| MLMediaCodecLevelType_HEVCHighTierLevel21 |  0x20| HEVC High Level 2.1. |
| MLMediaCodecLevelType_HEVCMainTierLevel3 |  0x40| HEVC Main Level 3. |
| MLMediaCodecLevelType_HEVCHighTierLevel3 |  0x80| HEVC High Level 3. |
| MLMediaCodecLevelType_HEVCMainTierLevel31 |  0x100| HEVC Main Level 3.1. |
| MLMediaCodecLevelType_HEVCHighTierLevel31 |  0x200| HEVC High Level 3.1. |
| MLMediaCodecLevelType_HEVCMainTierLevel4 |  0x400| HEVC Main Level 4. |
| MLMediaCodecLevelType_HEVCHighTierLevel4 |  0x800| HEVC High Level 4. |
| MLMediaCodecLevelType_HEVCMainTierLevel41 |  0x1000| HEVC Main Level 4.1. |
| MLMediaCodecLevelType_HEVCHighTierLevel41 |  0x2000| HEVC High Level 4.1. |
| MLMediaCodecLevelType_HEVCMainTierLevel5 |  0x4000| HEVC Main Level 5. |
| MLMediaCodecLevelType_HEVCHighTierLevel5 |  0x8000| HEVC High Level 5. |
| MLMediaCodecLevelType_HEVCMainTierLevel51 |  0x10000| HEVC Main Level 5.1. |
| MLMediaCodecLevelType_HEVCHighTierLevel51 |  0x20000| HEVC High Level 5.1. |
| MLMediaCodecLevelType_HEVCMainTierLevel52 |  0x40000| HEVC Main Level 5.2. |
| MLMediaCodecLevelType_HEVCHighTierLevel52 |  0x80000| HEVC High Level 5.2. |
| MLMediaCodecLevelType_HEVCMainTierLevel6 |  0x100000| HEVC Main Level 6. |
| MLMediaCodecLevelType_HEVCHighTierLevel6 |  0x200000| HEVC High Level 6. |
| MLMediaCodecLevelType_HEVCMainTierLevel61 |  0x400000| HEVC Main Level 6.1. |
| MLMediaCodecLevelType_HEVCHighTierLevel61 |  0x800000| HEVC High Level 6.1. |
| MLMediaCodecLevelType_HEVCMainTierLevel62 |  0x1000000| HEVC Main Level 6.2. |
| MLMediaCodecLevelType_HEVCHighTierLevel62 |  0x2000000| HEVC High Level 6.2. |
| MLMediaCodecLevelType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |



Enumeration defining Codec Level types. 

This is a consolidated list for all the codecs that support profiles. Each level indicates support for various frame sizes, bit rates, decoder frame rates.



:::note
A codec may not support all the profiles and levels listed below. For any given codec, the supported profiles and levels can be queried using [MLMediaCodecListGetSupportedProfileLevels](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels).
:::


**API Level:**
  * 9




-----------

### MLMediaSeekMode {#enums-mlmediaseekmode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaSeekMode_Previous_Sync | | Seek to the previous key frame. |
| MLMediaSeekMode_Next_Sync | | Seek to the next key frame. |
| MLMediaSeekMode_Closest_Sync | | Seek to the closest key frame. |
| MLMediaSeekMode_Closest | | Seek to the closest frame, more accurate but slower. |
| MLMediaSeekMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Mode indicating where exactly to seek to. 





-----------

### MLMediaDRMKeyType {#enums-mlmediadrmkeytype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaDRMKeyType_Streaming |  1| This key request type specifies that the keys will be for online use, they will not be saved to the device for subsequent use when the device is not connected to a network. |
| MLMediaDRMKeyType_Offline |  2| This key request type specifies that the keys will be for offline use, they will be saved to the device for use when the device is not connected to a network. |
| MLMediaDRMKeyType_Release |  3| This key request type specifies that previously saved offline keys should be released. |
| MLMediaDRMKeyType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Request types. 





-----------

### MLMediaDRMEventType {#enums-mlmediadrmeventtype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaDRMEventType_ProvisionRequired |  1| This event type indicates that the app needs to request a certificate from the provisioning server. The request message data is obtained using [MLMediaDRMGetProvisionRequest()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetprovisionrequest). |
| MLMediaDRMEventType_KeyRequired |  2| This event type indicates that the app needs to request keys from a license server. The request message data is obtained using [MLMediaDRMGetKeyRequest()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetkeyrequest). |
| MLMediaDRMEventType_KeyExpired |  3| This event type indicates that the licensed usage duration for keys in a session has expired. The keys are no longer valid. |
| MLMediaDRMEventType_VendorDefined |  4| This event may indicate some specific vendor-defined condition, see your DRM provider documentation for details. |
| MLMediaDRMEventType_SessionReclaimed |  5| This event indicates that a session opened by the app has been reclaimed by the resource manager. |
| MLMediaDRMEventType_ExpirationUpdate |  6| This event is issued when a session expiration update occurs, to inform the app about the change in expiration time. If [MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md) is setup with a valid on_expiration_update callback, then this event is not notified. |
| MLMediaDRMEventType_KeysChange |  7| This event is issued when the keys in a session change status, such as when the license is renewed or expires. If [MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md) is setup with a valid on_key_status_change callback, then this event is not notified. |
| MLMediaDRMEventType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Request event types. 




**API Level:**
  * 7




-----------

### MLMediaDRMKeyStatusCode {#enums-mlmediadrmkeystatuscode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaDRMKeyStatusCode_KeyStatusUsable |  0| The key is currently usable to decrypt media data. |
| MLMediaDRMKeyStatusCode_KeyStatusExpired |  1| The key is no longer usable to decrypt media data because its expiration time has passed. |
| MLMediaDRMKeyStatusCode_KeyStatusOutputNotAllowed |  2| The key is not currently usable to decrypt media data because its output requirements cannot currently be met. |
| MLMediaDRMKeyStatusCode_KeyStatusPending |  3| The status of the key is not yet known and is being determined. The status will be updated with the actual status when it has been determined. |
| MLMediaDRMKeyStatusCode_KeyStatusInternalError |  4| The key is not currently usable to decrypt media data because of an internal error in processing unrelated to input parameters. This error is not actionable by an app. |
| MLMediaDRMKeyStatusCode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Status code associated with a DRM session key. 




**API Level:**
  * 20




-----------

### MLMediaExtractorSampleFlag {#enums-mlmediaextractorsampleflag}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaExtractorSampleFlag_Sync |  1| |
| MLMediaExtractorSampleFlag_Encrypted |  2| |
| MLMediaExtractorSampleFlag_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Sample flag output from [MLMediaExtractorGetSampleFlags](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampleflags). 





-----------

### MLMediaExtractorSeekPosition {#enums-mlmediaextractorseekposition}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaExtractorSeekPosition_Previous_Sync | | |
| MLMediaExtractorSeekPosition_Next_Sync | | |
| MLMediaExtractorSeekPosition_Closest_Sync | | |
| MLMediaExtractorSeekPosition_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Seek mode used by [MLMediaExtractorSeekTo](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorseekto). 





-----------

### MLMediaFormatAudioEncoding {#enums-mlmediaformataudioencoding}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaFormatAudioEncoding_PCM16Bits |  2| Audio data format: PCM 16 bits per sample. |
| MLMediaFormatAudioEncoding_PCM8Bits |  3| Audio data format: PCM 8 bits per sample. |
| MLMediaFormatAudioEncoding_PCMFloat |  4| Audio data format: single-precision floating-point per sample. |
| MLMediaFormatAudioEncoding_PCM32Bits |  201| Audio data format: PCM 32 bits per sample. |
| MLMediaFormatAudioEncoding_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |








-----------

### MLMediaMuxerOutputFormat {#enums-mlmediamuxeroutputformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaMuxerOutputFormat_MPEG4 |  0| MP4 format. |
| MLMediaMuxerOutputFormat_WEBM |  1| VP8/VORBIS data in a WEBM container. |
| MLMediaMuxerOutputFormat_3GPP |  2| 3gpp format. |
| MLMediaMuxerOutputFormat_HEIF |  3| HEIC data in a HEIF container. |
| MLMediaMuxerOutputFormat_OGG |  4| Opus data in a OGG container. |
| MLMediaMuxerOutputFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Output formats for MediaMuxer. 

This enumarates list of all the possibly supported output formats for the muxer across all the releases/Platform.

Use [MLMediaMuxerGetSupportedOutputFormats](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedoutputformats) to query for all supported Output formats on the Platform.




**API Level:**
  * 20




-----------

### MLMediaPlayerVideoScalingMode {#enums-mlmediaplayervideoscalingmode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaPlayerVideoScalingMode_ScaleToFit |  1| |
| MLMediaPlayerVideoScalingMode_ScaleToFitWithCropping |  2| |
| MLMediaPlayerVideoScalingMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Codes for setting video scaling mode. 





-----------

### MLMediaPlayerPollingStateFlags {#enums-mlmediaplayerpollingstateflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaPlayerPollingStateFlag_IsPlaying |  1 << 0| Playing. |
| MLMediaPlayerPollingStateFlag_IsLooping |  1 << 1| Looping. |
| MLMediaPlayerPollingStateFlag_HasBeenPrepared |  1 << 2| Prepared. |
| MLMediaPlayerPollingStateFlag_HasPlaybackCompleted |  1 << 3| Playback completed. |
| MLMediaPlayerPollingStateFlag_HasSeekCompleted |  1 << 4| Seek completed. |
| MLMediaPlayerPollingStateFlag_HasSizeChanged |  1 << 5| Size changed. |
| MLMediaPlayerPollingStateFlag_HasBufferingUpdated |  1 << 6| Buffering updated. |
| MLMediaPlayerPollingStateFlag_HasReceivedInfo |  1 << 7| Received info. |
| MLMediaPlayerPollingStateFlag_HasReceivedError |  1 << 8| Received error. |
| MLMediaPlayerPollingStateFlag_HasTimedTextUpdated |  1 << 9| Timed text updated. |
| MLMediaPlayerPollingStateFlag_HasSubtitleUpdated |  1 << 10| Subtitle updated. |
| MLMediaPlayerPollingStateFlag_HasMetadataUpdated |  1 << 11| Metadata updated. |
| MLMediaPlayerPollingStateFlag_HasDrmInfoUpdated |  1 << 12| DRM info updated. |
| MLMediaPlayerPollingStateFlag_HasResetCompleted |  1 << 13| Async Reset completed. |
| MLMediaPlayerPollingStateFlag_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




The state to be polled. 





-----------

### MLMediaPlayerInfo {#enums-mlmediaplayerinfo}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaPlayerInfo_Unknown |  1| Unknown. |
| MLMediaPlayerInfo_StartedAsNext |  2| The player was started because it was used as the next player. |
| MLMediaPlayerInfo_RenderingStart |  3| The player just pushed the very first video frame for rendering. |
| MLMediaPlayerInfo_Looping |  4| The player just reached EOS and started from beginning (loop). |
| MLMediaPlayerInfo_Started |  5| The player acknowledgement that it has started playing. |
| MLMediaPlayerInfo_Paused |  6| The player acknowledgement that it has paused. |
| MLMediaPlayerInfo_Stopped |  7| The player acknowledgement that it has stopped playing. |
| MLMediaPlayerInfo_StartedBySharedPlayer |  8| The player acknowledgement that it has started playing as result of shared player's request. |
| MLMediaPlayerInfo_PausedBySharedPlayer |  9| The player acknowledgement that it has paused playing as result of shared player's request. |
| MLMediaPlayerInfo_SeekBySharedPlayer |  10| The player acknowledgement that it is seeking as result of shared player's request. |
| MLMediaPlayerInfo_StoppedBySharedPlayer |  11| The player acknowledgement that it has stopped playing as result of shared player's request. |
| MLMediaPlayerInfo_SyncStart |  12| The player has started sync'ing with other shared players. |
| MLMediaPlayerInfo_SyncComplete |  13| The player has completed sync'ing with other shared players. |
| MLMediaPlayerInfo_VideoTrackLagging |  700| The video is too complex for the decoder, it can't decode frames fast enough. |
| MLMediaPlayerInfo_BufferingStart |  701| Media player is temporarily pausing playback. |
| MLMediaPlayerInfo_BufferingEnd |  702| Media player is resuming playback after filling buffers. |
| MLMediaPlayerInfo_NetworkBandwidth |  703| Network bandwidth info. |
| MLMediaPlayerInfo_BehindLiveWindow |  704| Dash Live stream is Behind Live Window. |
| MLMediaPlayerInfo_PowerStatePause |  705| Playback Paused because of Power State Transition. |
| MLMediaPlayerInfo_PowerStateResume |  706| Playback Resumed because of Power State Transition. |
| MLMediaPlayerInfo_BufferedDuration |  707| Duration in milliseconds of buffered content. |
| MLMediaPlayerInfo_BadInterleaving |  800| Bad interleaving means that a media has been improperly interleaved. |
| MLMediaPlayerInfo_NotSeekable |  801| The media is not seekable (e.g live stream). |
| MLMediaPlayerInfo_MetadataUpdate |  802| New media metadata is available. |
| MLMediaPlayerInfo_PlayAudioError |  804| Audio can not be played. |
| MLMediaPlayerInfo_PlayVideoError |  805| Video can not be played. |
| MLMediaPlayerInfo_TimedTextError |  900| Media timed text error. |
| MLMediaPlayerInfo_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Info and warning codes for the media player framework. 

These are non fatal, the playback is going on but there might be some user visible issues.

Info and warning messages are communicated back to the client using the on_info callback. In this situation, this method is invoked with the following:

Description of 'what' should be a value from the MLMediaPlayerInfo. Description of 'extra' contains an implementation dependent info code to provide more details. Should default to 0 when not used. 





-----------

### MLMediaPlayerTrackType {#enums-mlmediaplayertracktype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaPlayerTrackType_Unknown |  0| Unknown. |
| MLMediaPlayerTrackType_Video |  1| Video. |
| MLMediaPlayerTrackType_Audio |  2| Audio. |
| MLMediaPlayerTrackType_TimedText |  3| Timed text. |
| MLMediaPlayerTrackType_Subtitle |  4| Subtitle. |
| MLMediaPlayerTrackType_Metadata |  5| Metadata. |
| MLMediaPlayerTrackType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




MediaTrack types returned by [MLMediaPlayerGetTrackType()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergettracktype). 





-----------

### MLMediaPlayerBufferingMode {#enums-mlmediaplayerbufferingmode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaPlayerBufferingMode_None |  0| Do not support buffering. |
| MLMediaPlayerBufferingMode_TimeOnly |  1| Support only time based buffering. |
| MLMediaPlayerBufferingMode_SizeOnly |  2| Support only size based buffering. |
| MLMediaPlayerBufferingMode_TimeThenSize |  3| Support both time and size based buffering, time based calculation precedes size based. Size based calculation will be used only when time information is not available for the stream. |
| MLMediaPlayerBufferingMode_Count |  4| Number of modes. |
| MLMediaPlayerBufferingMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum size is 32 bits. |




Indicate the mode of buffering settings. 





-----------

### MLMediaFramePackingMode {#enums-mlmediaframepackingmode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaFramePackingMode_None |  0| Not a stereoscopic video. |
| MLMediaFramePackingMode_Checkboard | | Checkboard. |
| MLMediaFramePackingMode_ColumnInterleaved | | Column interleaved. |
| MLMediaFramePackingMode_RowInterleaved | | Row interleaved. |
| MLMediaFramePackingMode_SideBySideQuincunx | | Side by side quincunx. |
| MLMediaFramePackingMode_SideBySide | | Side by side. |
| MLMediaFramePackingMode_TopBottom | | Top bottom. |
| MLMediaFramePackingMode_MultiviewFrameByFrame | | Multiview frame by frame. |
| MLMediaFramePackingMode_FrameByFrame | | Frame by frame. |
| MLMediaFramePackingMode_Anaglyph | | Anaglyph. |



Frame Packing Arrangement for stereoscopic videos. 




**API Level:**
  * 8




-----------

### MLMediaFramePackingFlags {#enums-mlmediaframepackingflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaFramePackingFlags_None |  0| No flags. |
| MLMediaFramePackingFlags_RightViewFirst |  1 << 0| Right view first. |
| MLMediaFramePackingFlags_LeftFlipped |  1 << 1| Left view flipped. |
| MLMediaFramePackingFlags_RightFlipped |  1 << 2| Right view flipped. |
| MLMediaFramePackingFlags_Anaglyph_RedCyan |  1 << 3| Anaglyph red/cyan. |
| MLMediaFramePackingFlags_Anaglyph_GreenMagenta |  1 << 4| Anaglyph green/magenta. |



Frame Packing Arrangement flags for stereoscopic videos. 




**API Level:**
  * 8




-----------

### MLTTMLLayoutAlignment {#enums-mlttmllayoutalignment}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLTTMLLayoutAlignment_Unspecified |  0x7FFFFFFF| An unspecified alignment value. |
| MLTTMLLayoutAlignment_Normal |  0| Normal alignment relative to text direction. |
| MLTTMLLayoutAlignment_Center |  1| Centered alignment. |
| MLTTMLLayoutAlignment_Opposite |  2| Opposite alignment relative to text direction. |
| MLTTMLLayoutAlignment_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue text alignment within the cue box. 




**API Level:**
  * 20




-----------

### MLTTMLLineType {#enums-mlttmllinetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLTTMLLineType_Unset |  0x7FFFFFFF| An unset line type value. |
| MLTTMLLineType_Fraction |  0| Line position is fractional position within the viewport. |
| MLTTMLLineType_Number |  1| Line position is number of lines, interpretation also depends on the line anchor type. |
| MLTTMLLineType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue line type. 




**API Level:**
  * 20




-----------

### MLTTMLAnchorType {#enums-mlttmlanchortype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLTTMLAnchorType_Unset |  0x7FFFFFFF| An unset anchor type value. |
| MLTTMLAnchorType_Start |  0| Anchors the left (for horizontal positions) or top (for vertical positions) edge of the cue box. |
| MLTTMLAnchorType_Middle |  1| Anchors the middle of the cue box. |
| MLTTMLAnchorType_End |  2| Anchors the right (for horizontal positions) or bottom (for vertical positions) edge of the cue box. |
| MLTTMLAnchorType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue anchor type. 




**API Level:**
  * 20




-----------

### MLTTMLTextSizeType {#enums-mlttmltextsizetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLTTMLTextSizeType_Unset |  0x7FFFFFFF| An unset text size type value. |
| MLTTMLTextSizeType_Fractional |  0| Text size is measured as a fraction of the viewport size minus the view padding. |
| MLTTMLTextSizeType_Fractional_Ignore_Padding |  1| Text size is measured as a fraction of the viewport size, ignoring the view padding. |
| MLTTMLTextSizeType_Absolute |  2| Text size is measured in number of pixels. |
| MLTTMLTextSizeType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue text size type. 




**API Level:**
  * 20




-----------

### MLWebVTTOrientation {#enums-mlwebvttorientation}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWebVTTOrientation_Horizontal |  0| |
| MLWebVTTOrientation_Vertical |  1| |
| MLWebVTTOrientation_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue orientation setting. 




**API Level:**
  * 4




-----------

### MLWebVTTDirection {#enums-mlwebvttdirection}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWebVTTDirection_Default |  0| |
| MLWebVTTDirection_LeftToRight |  1| |
| MLWebVTTDirection_RightToLeft |  2| |
| MLWebVTTDirection_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue direction setting. 




**API Level:**
  * 4




-----------

### MLWebVTTAlign {#enums-mlwebvttalign}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWebVTTAlign_Start |  0| |
| MLWebVTTAlign_Middle |  1| |
| MLWebVTTAlign_End |  2| |
| MLWebVTTAlign_Left |  3| |
| MLWebVTTAlign_Right |  4| |
| MLWebVTTAlign_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue aligment setting. 




**API Level:**
  * 4




-----------

### MLNativeSurfaceAcquiredBufferCount {#enums-mlnativesurfaceacquiredbuffercount}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLNativeSurfaceAcquiredBufferCount_Min |  1| Min number of buffer count. |
| MLNativeSurfaceAcquiredBufferCount_Max |  16| Max number of buffer count. |
| MLNativeSurfaceAcquiredBufferCount_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Number of acquired buffers to be requested in functions [MLNativeSurfaceCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate) and MLNativeSurfaceTextureCreate. 





-----------

### MLNativeSurfacePixelFormat {#enums-mlnativesurfacepixelformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLNativeSurfacePixelFormat_Custom |  -4| Custom format. |
| MLNativeSurfacePixelFormat_Translucent |  -3| Translucent format. |
| MLNativeSurfacePixelFormat_Transparent |  -2| Transparent format. |
| MLNativeSurfacePixelFormat_Opaque |  -1| Opaque format. |
| MLNativeSurfacePixelFormat_None |  0| None. |
| MLNativeSurfacePixelFormat_Rgba8888 |  1| Below enums should match android_pixel_format_t in graphics-base-v1.0.h header.4x8-bit RGBA format. |
| MLNativeSurfacePixelFormat_Rgbx8888 |  2| 4x8-bit RGBX format. |
| MLNativeSurfacePixelFormat_Rgb888 |  3| 3x8-bit RGB format. |
| MLNativeSurfacePixelFormat_Rgb565 |  4| 16-bit RGB format. |
| MLNativeSurfacePixelFormat_Bgra8888 |  5| 4x8-bit BGRA format. |
| MLNativeSurfacePixelFormat_RgbaFp16 |  22| 64-bit RGBA format. |
| MLNativeSurfacePixelFormat_Rgba1010102 |  43| 32-bit RGBA format. |
| MLNativeSurfacePixelFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Pixel format to use when creating the native surface. Used in functions [MLNativeSurfaceCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate) and MLNativeSurfaceTextureCreate. 





-----------

### MLNativeSurfaceTextureBackend {#enums-mlnativesurfacetexturebackend}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLNativeSurfaceTextureBackend_OpenGL |  0| OpenGL texture. |
| MLNativeSurfaceTextureBackend_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Graphic backend to use.




**API Level:**
  * 20




-----------


## Types Documentation

### MLCea608CaptionStyleColor {#struct-mlcea608captionstylecolor}

```cpp
typedef struct MLCea608CaptionStyleColor MLCea608CaptionStyleColor;
```

Cea608 caption style and color. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_style_color.md)


**API Level:**
  * 2




-----------

### MLCea608CaptionPAC {#struct-mlcea608captionpac}

```cpp
typedef struct MLCea608CaptionPAC MLCea608CaptionPAC;
```

Cea608 caption preamble address code. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_p_a_c.md)


**API Level:**
  * 2




-----------

### MLCea608CaptionLineEx {#struct-mlcea608captionlineex}

```cpp
typedef struct MLCea608CaptionLineEx MLCea608CaptionLineEx;
```

Cea608 caption line structure. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_line_ex.md)


**API Level:**
  * 8




-----------

### MLCea608CaptionSegmentEx {#struct-mlcea608captionsegmentex}

```cpp
typedef struct MLCea608CaptionSegmentEx MLCea608CaptionSegmentEx;
```

Cea608 caption segment structure. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md)


**API Level:**
  * 8




-----------

### MLMediaCCParserDisplayChangedCallback {#void-mlmediaccparserdisplaychangedcallback}

```cpp
typedef void(* MLMediaCCParserDisplayChangedCallback) (MLHandle cc_handle, const MLCea608CaptionSegmentEx *cc_seg, void *data);
```

Callback signature called when Cea608 displayable is changed. 

**Parameters**

|  |   |   |
|--|--|--|
|  |cc_handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a CC Parser instance for which callback was called. |
|  |cc_seg|[MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md) conveys caption displayble to be rendered. |
|  |data|Custom data to be returned when callback is fired. |




**API Level:**
  * 8




-----------

### MLCea708CaptionColor {#struct-mlcea708captioncolor}

```cpp
typedef struct MLCea708CaptionColor MLCea708CaptionColor;
```

Cea708 Caption Color. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_color.md)


**API Level:**
  * 8




-----------

### MLCea708CaptionPenAttr {#struct-mlcea708captionpenattr}

```cpp
typedef struct MLCea708CaptionPenAttr MLCea708CaptionPenAttr;
```

Cea708 Caption Pen Attributes. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_attr.md)


**API Level:**
  * 8




-----------

### MLCea708CaptionPenColor {#struct-mlcea708captionpencolor}

```cpp
typedef struct MLCea708CaptionPenColor MLCea708CaptionPenColor;
```

Cea708 Caption Pen Color. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_color.md)


**API Level:**
  * 8




-----------

### MLCea708CaptionPenLocation {#struct-mlcea708captionpenlocation}

```cpp
typedef struct MLCea708CaptionPenLocation MLCea708CaptionPenLocation;
```

Cea708 Caption Pen Location. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_location.md)


**API Level:**
  * 8




-----------

### MLCea708CaptionWindowAttr {#struct-mlcea708captionwindowattr}

```cpp
typedef struct MLCea708CaptionWindowAttr MLCea708CaptionWindowAttr;
```

Cea708 Caption Window Attributes. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window_attr.md)


**API Level:**
  * 8




-----------

### MLCea708CaptionWindow {#struct-mlcea708captionwindow}

```cpp
typedef struct MLCea708CaptionWindow MLCea708CaptionWindow;
```

Cea708 Caption Window. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window.md)


**API Level:**
  * 8




-----------

### MLCea708CaptionEvent {#struct-mlcea708captionevent}

```cpp
typedef struct MLCea708CaptionEvent MLCea708CaptionEvent;
```

Cea708 Caption Event. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_event.md)


**API Level:**
  * 8




-----------

### MLMediaCea708ParserEmitEventCallback {#void-mlmediacea708parseremiteventcallback}

```cpp
typedef void(* MLMediaCea708ParserEmitEventCallback) (MLHandle cc_handle, const MLCea708CaptionEvent *event, void *data);
```

Callback signature called when Cea708 parser emits event. 

**Parameters**

|  |   |   |
|--|--|--|
|  |cc_handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a Cea708 Parser instance for which callback was called. |
|  |event|[MLCea708CaptionEvent](/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_event.md) conveys caption event to listener. |
|  |data|Custom data to be returned when callback is fired. |




**API Level:**
  * 8




-----------

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

### MLMediaCodecListQueryResults {#struct-mlmediacodeclistqueryresults}

```cpp
typedef struct MLMediaCodecListQueryResults MLMediaCodecListQueryResults;
```


Used to store the list of available codec names or the list of supported mime types. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md)



-----------

### MLMediaCodecListProfileLevel {#struct-mlmediacodeclistprofilelevel}

```cpp
typedef struct MLMediaCodecListProfileLevel MLMediaCodecListProfileLevel;
```

Used to store the list of codec profile levels. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md)


**API Level:**
  * 6




-----------

### MLMediaDataSourceReadAt {#int64-t-mlmediadatasourcereadat}

```cpp
typedef int64_t(* MLMediaDataSourceReadAt) (MLHandle media_data_source, size_t position, size_t size, uint8_t *buffer, void *context);
```

Called to request data from the given position. 

**Parameters**

|  |   |   |
|--|--|--|
|  |media_data_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate). |
|  |position|The position in the data source to read from. |
|  |size|The number of bytes to read. |
|  |buffer|The buffer to read the data into. |
|  |context|User data as passed to [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate).|
Implementations should should write up to `size` bytes into `buffer`, and return the number of bytes written.

Return 0 to indicate that end of stream is reached. Return -1 on error.




**Return**: The number of bytes read, or -1 if there was an error. 



-----------

### MLMediaDataSourceGetSize {#int64-t-mlmediadatasourcegetsize}

```cpp
typedef int64_t(* MLMediaDataSourceGetSize) (MLHandle media_data_source, void *context);
```

Called to get the size of the data source. 

**Parameters**

|  |   |   |
|--|--|--|
|  |media_data_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate). |
|  |context|User data as passed to [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate).|



**Return**: the size of data source in bytes, or -1 if the size is unknown. 



-----------

### MLMediaDataSourceClose {#void-mlmediadatasourceclose}

```cpp
typedef void(* MLMediaDataSourceClose) (MLHandle media_data_source, void *context);
```

Called before deleting |this|. The other methods may return errors if they're called after calling close(). 

**Parameters**

|  |   |   |
|--|--|--|
|  |media_data_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate). |
|  |context|User data as passed to [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate). |





-----------

### MLMediaDRMByteArray {#struct-mlmediadrmbytearray}

```cpp
typedef struct MLMediaDRMByteArray MLMediaDRMByteArray;
```


Data type containing byte array buffer and the size. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md)



-----------

### MLMediaDRMByteArrayList {#struct-mlmediadrmbytearraylist}

```cpp
typedef struct MLMediaDRMByteArrayList MLMediaDRMByteArrayList;
```


Data type containing list of byte array buffers and the size. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array_list.md)



-----------

### MLMediaDRMKeyValue {#struct-mlmediadrmkeyvalue}

```cpp
typedef struct MLMediaDRMKeyValue MLMediaDRMKeyValue;
```


Data type containing key/value pair. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value.md)



-----------

### MLMediaDRMKeyValueArray {#struct-mlmediadrmkeyvaluearray}

```cpp
typedef struct MLMediaDRMKeyValueArray MLMediaDRMKeyValueArray;
```


Data type containing array of key/value pair. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md)



-----------

### MLMediaDRMKeyRequestInputParam {#struct-mlmediadrmkeyrequestinputparam}

```cpp
typedef struct MLMediaDRMKeyRequestInputParam MLMediaDRMKeyRequestInputParam;
```


Data type that encapsulates Key Request input arguments. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_request_input_param.md)



-----------

### MLMediaDRMRequestMessage {#struct-mlmediadrmrequestmessage}

```cpp
typedef struct MLMediaDRMRequestMessage MLMediaDRMRequestMessage;
```

Data type that encapsulates either of the following along with an URL: 

For Key Request Message: an opaque key request byte array that should be delivered to the license server.

For Provision Request Message: an opaque provision request byte array that should be delivered to the provisioning server. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md)



-----------

### MLMediaDRMCryptoInputParam {#struct-mlmediadrmcryptoinputparam}

```cpp
typedef struct MLMediaDRMCryptoInputParam MLMediaDRMCryptoInputParam;
```


Data type that encapsulates algorithm, key_set_id and IV for Encryption/Decryption. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md)



-----------

### MLMediaDRMHMACInputParam {#struct-mlmediadrmhmacinputparam}

```cpp
typedef struct MLMediaDRMHMACInputParam MLMediaDRMHMACInputParam;
```


Data type that encapsulates algorithm, key_set_id for HMAC based Sign/Verify. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md)



-----------

### MLMediaDRMRSAInputParam {#struct-mlmediadrmrsainputparam}

```cpp
typedef struct MLMediaDRMRSAInputParam MLMediaDRMRSAInputParam;
```


Data type that encapsulates algorithm, wrapped_key for RSA operation. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_r_s_a_input_param.md)



-----------

### MLMediaDRMEventInfo {#struct-mlmediadrmeventinfo}

```cpp
typedef struct MLMediaDRMEventInfo MLMediaDRMEventInfo;
```

MediaDRM event info associated with a session. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md)


**API Level:**
  * 20




-----------

### MLMediaDRMExpirationUpdateInfo {#struct-mlmediadrmexpirationupdateinfo}

```cpp
typedef struct MLMediaDRMExpirationUpdateInfo MLMediaDRMExpirationUpdateInfo;
```

MediaDRM expiration update info associated with a session. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_expiration_update_info.md)


**API Level:**
  * 20




-----------

### MLMediaDRMKeyStatus {#struct-mlmediadrmkeystatus}

```cpp
typedef struct MLMediaDRMKeyStatus MLMediaDRMKeyStatus;
```

MediaDRM key status. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status.md)


**API Level:**
  * 20




-----------

### MLMediaDRMKeyStatusInfo {#struct-mlmediadrmkeystatusinfo}

```cpp
typedef struct MLMediaDRMKeyStatusInfo MLMediaDRMKeyStatusInfo;
```

MediaDRM session keys status change info. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status_info.md)


**API Level:**
  * 20




-----------

### MLMediaDRMEventCallbacks {#struct-mlmediadrmeventcallbacks}

```cpp
typedef struct MLMediaDRMEventCallbacks MLMediaDRMEventCallbacks;
```

Callbacks for notifying client about MLMediaDRM events. 

User of MLMediaDRM should implement this.



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md)


**API Level:**
  * 20




-----------

### MLMediaExtractorPSSHEntry {#mlpsshentry-mlmediaextractorpsshentry}

```cpp
typedef MLPSSHEntry MLMediaExtractorPSSHEntry;
```




[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md)



-----------

### MLMediaExtractorDRMSchemeInitData {#struct-mlmediaextractordrmschemeinitdata}

```cpp
typedef struct MLMediaExtractorDRMSchemeInitData MLMediaExtractorDRMSchemeInitData;
```


DRM Scheme initialization data. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md)



-----------

### MLMediaFormatByteArray {#struct-mlmediaformatbytearray}

```cpp
typedef struct MLMediaFormatByteArray MLMediaFormatByteArray;
```


Data type containing byte array buffer and the size. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md)



-----------

### MLMediaMuxerSampleData {#struct-mlmediamuxersampledata}

```cpp
typedef struct MLMediaMuxerSampleData MLMediaMuxerSampleData;
```

Data type that encapsulates sample data to be written in to MLMediaMuxer. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md)


**API Level:**
  * 20




-----------

### MLMediaPlayerPSSHEntry {#mlpsshentry-mlmediaplayerpsshentry}

```cpp
typedef MLPSSHEntry MLMediaPlayerPSSHEntry;
```




[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md)



-----------

### MLMediaPlayerTrackDRMInfo {#struct-mlmediaplayertrackdrminfo}

```cpp
typedef struct MLMediaPlayerTrackDRMInfo MLMediaPlayerTrackDRMInfo;
```

MediaPlayer DRM Info for a Media Track. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md)


**API Level:**
  * 2




-----------

### MLMediaPlayerSubtitleData {#struct-mlmediaplayersubtitledata}

```cpp
typedef struct MLMediaPlayerSubtitleData MLMediaPlayerSubtitleData;
```


MediaPlayer subtitle data. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md)



-----------

### MLMediaPlayerBufferingSettings {#struct-mlmediaplayerbufferingsettings}

```cpp
typedef struct MLMediaPlayerBufferingSettings MLMediaPlayerBufferingSettings;
```


Indicate the buffering settings. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md)



-----------

### MLMediaPlayerOnBufferingUpdateInfo {#struct-mlmediaplayeronbufferingupdateinfo}

```cpp
typedef struct MLMediaPlayerOnBufferingUpdateInfo MLMediaPlayerOnBufferingUpdateInfo;
```

MediaPlayer Buffering update callback Info. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_buffering_update_info.md)


**API Level:**
  * 2




-----------

### MLMediaPlayerOnCompletionInfo {#struct-mlmediaplayeroncompletioninfo}

```cpp
typedef struct MLMediaPlayerOnCompletionInfo MLMediaPlayerOnCompletionInfo;
```

MediaPlayer Playback completion callback Info. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_completion_info.md)


**API Level:**
  * 2




-----------

### MLMediaPlayerOnErrorInfo {#struct-mlmediaplayeronerrorinfo}

```cpp
typedef struct MLMediaPlayerOnErrorInfo MLMediaPlayerOnErrorInfo;
```

MediaPlayer Error callback Info. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_error_info.md)


**API Level:**
  * 2




-----------

### MLMediaPlayerOnInfoInfo {#struct-mlmediaplayeroninfoinfo}

```cpp
typedef struct MLMediaPlayerOnInfoInfo MLMediaPlayerOnInfoInfo;
```

MediaPlayer Information callback Info. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_info_info.md)


**API Level:**
  * 2




-----------

### MLMediaPlayerOnPreparedInfo {#struct-mlmediaplayeronpreparedinfo}

```cpp
typedef struct MLMediaPlayerOnPreparedInfo MLMediaPlayerOnPreparedInfo;
```

MediaPlayer Playback prepared callback Info. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_prepared_info.md)


**API Level:**
  * 2




-----------

### MLMediaPlayerOnSeekCompleteInfo {#struct-mlmediaplayeronseekcompleteinfo}

```cpp
typedef struct MLMediaPlayerOnSeekCompleteInfo MLMediaPlayerOnSeekCompleteInfo;
```

MediaPlayer Playback seek completion callback Info. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_seek_complete_info.md)


**API Level:**
  * 2




-----------

### MLMediaPlayerOnVideoSizeChangedInfo {#struct-mlmediaplayeronvideosizechangedinfo}

```cpp
typedef struct MLMediaPlayerOnVideoSizeChangedInfo MLMediaPlayerOnVideoSizeChangedInfo;
```

MediaPlayer Video Size Changed callback Info. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_video_size_changed_info.md)


**API Level:**
  * 2




-----------

### MLMediaPlayerOnTrackDRMInfo {#struct-mlmediaplayerontrackdrminfo}

```cpp
typedef struct MLMediaPlayerOnTrackDRMInfo MLMediaPlayerOnTrackDRMInfo;
```

MediaPlayer Track DRM Info callback Info. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_track_d_r_m_info.md)


**API Level:**
  * 2




-----------

### MLMediaPlayerOnResetCompleteInfo {#struct-mlmediaplayeronresetcompleteinfo}

```cpp
typedef struct MLMediaPlayerOnResetCompleteInfo MLMediaPlayerOnResetCompleteInfo;
```

MediaPlayer reset completion callback Info. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_reset_complete_info.md)


**API Level:**
  * 8




-----------

### MLMediaPlayerOnFramePackingInfo {#struct-mlmediaplayeronframepackinginfo}

```cpp
typedef struct MLMediaPlayerOnFramePackingInfo MLMediaPlayerOnFramePackingInfo;
```

MediaPlayer frame packing callback Info. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_frame_packing_info.md)


**API Level:**
  * 8




-----------

### MLMediaPlayerEventCallbacksEx {#struct-mlmediaplayereventcallbacksex}

```cpp
typedef struct MLMediaPlayerEventCallbacksEx MLMediaPlayerEventCallbacksEx;
```

Callbacks for notifying client about [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) error events. 

Those are async mechanisms that should not be used in parallel with their sync counterpart, i.e. poll-based queries for the same events using MLMediaPlayerPollStatespoll().



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md)


**API Level:**
  * 8




-----------

### MLMediaPlayerTrackInfo {#struct-mlmediaplayertrackinfo}

```cpp
typedef struct MLMediaPlayerTrackInfo MLMediaPlayerTrackInfo;
```

MediaPlayer Track Information. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_info.md)


**API Level:**
  * 2




-----------

### MLMediaPlayerTrackDRMSessionInfo {#struct-mlmediaplayertrackdrmsessioninfo}

```cpp
typedef struct MLMediaPlayerTrackDRMSessionInfo MLMediaPlayerTrackDRMSessionInfo;
```

DRM Session information for a MediaPlayer Track. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md)


**API Level:**
  * 2




-----------

### MLMediaPlayerOnMediaSubtitleUpdateCallback {#void-mlmediaplayeronmediasubtitleupdatecallback}

```cpp
typedef void(* MLMediaPlayerOnMediaSubtitleUpdateCallback) (MLHandle media_player, MLMediaPlayerSubtitleData subtitle_data, void *data);
```

Callbacks signature called when subtitle update is available. 

**Parameters**

|  |   |   |
|--|--|--|
|  |data|Custom data to be returned when callback is fired. |
|  |media_player|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) instance for which callback was called. |
|  |subtitle_data|[MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md) is the raw subtitle data. |





-----------

### MLMediaPlayerOnMediaTimedTextUpdateCallback {#void-mlmediaplayeronmediatimedtextupdatecallback}

```cpp
typedef void(* MLMediaPlayerOnMediaTimedTextUpdateCallback) (MLHandle media_player, MLHandle timed_text, void *data);
```

Callbacks signature called when Timed Text update is available. 

**Parameters**

|  |   |   |
|--|--|--|
|  |media_player|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) instance for which callback was called. |
|  |timed_text|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is the handle for timed_text data. |
|  |data|Custom data to be delivered when callback is invoked.|
**Required Permissions**:

  * None 






**API Level:**
  * 4




-----------

### MLMediaPlayerMetrics {#struct-mlmediaplayermetrics}

```cpp
typedef struct MLMediaPlayerMetrics MLMediaPlayerMetrics;
```

MediaPlayer metrics data. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_metrics.md)


**API Level:**
  * 8




-----------

### MLMediaStreamSourceOnBufferAvailable {#void-mlmediastreamsourceonbufferavailable}

```cpp
typedef void(* MLMediaStreamSourceOnBufferAvailable) (MLHandle media_stream_source, void *context);
```

Called when buffers becomes available. 

**Parameters**

|  |   |   |
|--|--|--|
|  |media_stream_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaStreamSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate). |
|  |context|User data as passed to [MLMediaStreamSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate). |
Signal that at least one buffer is now available. Application should then call getBuffer() as much as possible until it returns false, or until no more data is currently available in the application.






-----------

### MLTTMLImage {#struct-mlttmlimage}

```cpp
typedef struct MLTTMLImage MLTTMLImage;
```

Byte data for TTML image cues. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_image.md)


**API Level:**
  * 20




-----------

### MLTTMLData {#struct-mlttmldata}

```cpp
typedef struct MLTTMLData MLTTMLData;
```

TTML data structure. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md)


**API Level:**
  * 20




-----------

### MLPSSHEntry {#struct-mlpsshentry}

```cpp
typedef struct MLPSSHEntry MLPSSHEntry;
```


PSSH entry. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md)



-----------

### MLWebVTTData {#struct-mlwebvttdata}

```cpp
typedef struct MLWebVTTData MLWebVTTData;
```

WebVTT data structure. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_web_v_t_t_data.md)


**API Level:**
  * 4




-----------

### MLNativeSurfaceFrameAvailableInfo {#struct-mlnativesurfaceframeavailableinfo}

```cpp
typedef struct MLNativeSurfaceFrameAvailableInfo MLNativeSurfaceFrameAvailableInfo;
```

NativeSurface/NativeSurfaceTexture Output Frame Availability information. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_frame_available_info.md)


**API Level:**
  * 20




-----------

### MLNativeSurfaceConfig {#struct-mlnativesurfaceconfig}

```cpp
typedef struct MLNativeSurfaceConfig MLNativeSurfaceConfig;
```

Configuration values for creating the Native Surface. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md)


**API Level:**
  * 20




-----------

### MLNativeSurfaceOnFrameAvailableCallback {#struct-mlnativesurfaceonframeavailablecallback}

```cpp
typedef struct MLNativeSurfaceOnFrameAvailableCallback MLNativeSurfaceOnFrameAvailableCallback;
```

Callbacks for notifying when an output frame is available for consumption. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md)


**API Level:**
  * 20




-----------


## Functions Documentation

### MLMediaCCParserCreate {#mlresult-mlmediaccparsercreate}

```cpp
MLResult MLMediaCCParserCreate(
    MLHandle * out_handle
)
```

Create internal closed caption parser object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain the handle to the CC parser. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Internal closed caption parser object was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 2




-----------

### MLMediaCCParserGetDisplayableEx {#mlresult-mlmediaccparsergetdisplayableex}

```cpp
MLResult MLMediaCCParserGetDisplayableEx(
    MLHandle cc_handle,
    const uint8_t * subtitle_data,
    int32_t subtitle_data_size,
    const MLCea608CaptionSegmentEx ** out_cc_seg
)
```

Return closed caption for display. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a CC parser. |
| const uint8_t * |subtitle_data|Subtitle data of [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md) structure returned from MLMediaPlayerGetSubtitleEx function. |
| int32_t |subtitle_data_size|Subtitle data size of [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md) structure returned from MLMediaPlayerGetSubtitleEx function. |
| const [MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md) ** |out_cc_seg|The returned [MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md) pointer for CC display. NOTE that user doesn't own this memory.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|one of the arguements is incorrect. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|CC is ready to display and content is stored in out_ccSeg. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|CC parser was not properly built or initialized. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NotEnoughData|more data is required and no displayable CC for now.|
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

### MLMediaCCParserDestroy {#mlresult-mlmediaccparserdestroy}

```cpp
MLResult MLMediaCCParserDestroy(
    MLHandle cc_handle
)
```

Release internal CC parser object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a CC parser.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|internal CC parser object was released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 2




-----------

### MLMediaCCParserSetDisplayChangedCallback {#mlresult-mlmediaccparsersetdisplaychangedcallback}

```cpp
MLResult MLMediaCCParserSetDisplayChangedCallback(
    MLHandle cc_handle,
    MLMediaCCParserDisplayChangedCallback on_display_changed_callback,
    void * data
)
```

Set callback to get notified when a caption displayable has changed. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a CC parser. |
| [MLMediaCCParserDisplayChangedCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaccparserdisplaychangedcallback) |on_display_changed_callback|Function pointer for display changed callback. See [MLMediaCCParserDisplayChangedCallback()](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaccparserdisplaychangedcallback) callback typedef declaration and comments for explanation on expected callback parameters. This can be 'NULL' to unset the callback. |
| void * |data|Custom data to be returned when callback is fired.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Passed `cc_handle` handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Callback was successfully set. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Setting this callback saves application from handling raw subtitle data. Caption will be delivered in this callback at displayable time.




**API Level:**
  * 8




-----------

### MLMediaCCParserParse {#mlresult-mlmediaccparserparse}

```cpp
MLResult MLMediaCCParserParse(
    MLHandle cc_handle,
    const uint8_t * subtitle_data,
    uint32_t subtitle_data_size
)
```

Provide Cea608 parser with subtitle raw data for parsing. If the callback has been set by MLMediaCCParserSetDisplayChangedCallback, then its issued to notify the CC Data. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a Cea608 parser. |
| const uint8_t * |subtitle_data|Subtitle data of [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md). |
| uint32_t |subtitle_data_size|Subtitle data size of [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|the input parameter(s) is(are) wrong. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|the operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Cea708 parser was not properly built or initialized.|
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

### MLMediaCea708ParserCreate {#mlresult-mlmediacea708parsercreate}

```cpp
MLResult MLMediaCea708ParserCreate(
    MLHandle * out_handle
)
```

Create Cea708 parser object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain the handle to the Cea708 parser. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|The operation failed with memory allocation error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|out_handle is null. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Internal Cea708 parser object was created successfully. |
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

### MLMediaCea708ParserParse {#mlresult-mlmediacea708parserparse}

```cpp
MLResult MLMediaCea708ParserParse(
    MLHandle cc_handle,
    const uint8_t * subtitle_data,
    uint32_t subtitle_data_size
)
```

Provide Cea708 parser with subtitle raw data for parsing. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a Cea708 parser. |
| const uint8_t * |subtitle_data|Subtitle data of [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md). |
| uint32_t |subtitle_data_size|Subtitle data size of [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|the input parameter(s) is(are) wrong. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|the operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Cea708 parser was not properly built or initialized.|
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

### MLMediaCea708ParserDestroy {#mlresult-mlmediacea708parserdestroy}

```cpp
MLResult MLMediaCea708ParserDestroy(
    MLHandle cc_handle
)
```

Release Cea708 parser object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a Cea708 parser.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|cc_handle is wrong or not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|internal Cea708 parser object was released successfully.|
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

### MLMediaCea708ParserSetEmitEventCallback {#mlresult-mlmediacea708parsersetemiteventcallback}

```cpp
MLResult MLMediaCea708ParserSetEmitEventCallback(
    MLHandle cc_handle,
    MLMediaCea708ParserEmitEventCallback on_emit_event_callback,
    void * data
)
```

Set callback to get notified when a caption event has generated. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a Cea708 parser. |
| [MLMediaCea708ParserEmitEventCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediacea708parseremiteventcallback) |on_emit_event_callback|Function pointer for event callback. See [MLMediaCea708ParserEmitEventCallback()](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediacea708parseremiteventcallback) callback declaration and comments for explanation on expected callback parameters. This can be 'NULL' to unset the callback. |
| void * |data|Custom data to be returned when callback is fired.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Passed `cc_handle` handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Callback was successfully set.|
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

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

### MLMediaCodecListCountCodecs {#mlresult-mlmediacodeclistcountcodecs}

```cpp
MLResult MLMediaCodecListCountCodecs(
    uint64_t * out_codec_count
)
```

Obtain the number of available codecs. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t * |out_codec_count|Number of available codecs.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListIsSoftwareCodec {#mlresult-mlmediacodeclistissoftwarecodec}

```cpp
MLResult MLMediaCodecListIsSoftwareCodec(
    const char * codec_name,
    bool * out_val
)
```

Determine whether a codec is a software codec. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |codec_name|Name of the codec. |
| bool * |out_val|Returns true if the codec is a software codec and false otherwise.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListGetMatchingCodecs {#mlresult-mlmediacodeclistgetmatchingcodecs}

```cpp
MLResult MLMediaCodecListGetMatchingCodecs(
    const char * mime,
    bool is_encoder,
    MLMediaCodecListCodecTypeFlag flag,
    MLMediaCodecListQueryResults * out_matching_codecs
)
```

Obtain a list of matching codecs for a given codec mime. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |mime|Codec mime. |
| bool |is_encoder|Set to true if querying for encoder and false otherwise. |
| [MLMediaCodecListCodecTypeFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcodectypeflag) |flag|Whether querying for software-only or hardware-only, defined by [MLMediaCodecListCodecTypeFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcodectypeflag). |
| [MLMediaCodecListQueryResults](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) * |out_matching_codecs|List of codecs supporting the given mime.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The memory used to store the list is maintained by the library. User shall call [MLMediaCodecListQueryResultsRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistqueryresultsrelease) to release it.





-----------

### MLMediaCodecListGetCodecByType {#mlresult-mlmediacodeclistgetcodecbytype}

```cpp
MLResult MLMediaCodecListGetCodecByType(
    const char * type,
    bool is_encoder,
    uint64_t start_index,
    int64_t * out_index
)
```

Obtain the codec matching the given codec type from the codec list. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |type|Codec mime. |
| bool |is_encoder|Set to true if querying for encoder and false otherwise. |
| uint64_t |start_index|Index from which to search in the codec list. The number shall be between 0 and number of available codecs. |
| int64_t * |out_index|Index of the matching codec or -2.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListGetCodecByName {#mlresult-mlmediacodeclistgetcodecbyname}

```cpp
MLResult MLMediaCodecListGetCodecByName(
    const char * name,
    int64_t * out_index
)
```

Obtain the codec from the codec matching the given codec name from the codec list. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |name|Codec name. |
| int64_t * |out_index|Index of the matching codec or -2.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListIsEncoder {#mlresult-mlmediacodeclistisencoder}

```cpp
MLResult MLMediaCodecListIsEncoder(
    uint64_t index,
    bool * out_val
)
```

Confirm whether a component is an Encoder or Decoder. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| bool * |out_val|Returns true if the codec is an encoder and false otherwise.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListGetCodecName {#mlresult-mlmediacodeclistgetcodecname}

```cpp
MLResult MLMediaCodecListGetCodecName(
    uint64_t index,
    char * out_name
)
```

Obtain a codec name. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| char * |out_name|Pointer to the user-maintained buffer for storing the output C-style name string.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall allocate at least [MAX_CODEC_NAME_LENGTH](/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-codec-name-length) bytes of memory for storing the output name string.





-----------

### MLMediaCodecListGetSupportedMimes {#mlresult-mlmediacodeclistgetsupportedmimes}

```cpp
MLResult MLMediaCodecListGetSupportedMimes(
    uint64_t index,
    MLMediaCodecListQueryResults * out_supported_mimes
)
```

Obtain the list of mime types supported by a codec. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| [MLMediaCodecListQueryResults](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) * |out_supported_mimes|List of supported mimes.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The memory used to store the list is maintained by the library. User shall call [MLMediaCodecListQueryResultsRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistqueryresultsrelease) to release it.





-----------

### MLMediaCodecListGetCapabilityFlag {#mlresult-mlmediacodeclistgetcapabilityflag}

```cpp
MLResult MLMediaCodecListGetCapabilityFlag(
    uint64_t index,
    const char * mime,
    MLMediaCodecListCapabilityFlag * out_capability_flag
)
```

Obtain the capability flag for a codec. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| [MLMediaCodecListCapabilityFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcapabilityflag) * |out_capability_flag|Codec capability flag defined by [MLMediaCodecListCapabilityFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcapabilityflag).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListGetSecureCodecName {#mlresult-mlmediacodeclistgetsecurecodecname}

```cpp
MLResult MLMediaCodecListGetSecureCodecName(
    const char * mime,
    bool is_decoder,
    char * out_name
)
```

Obtain the name of a secure codec for the given mime type. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |mime|Mime type of the codec. |
| bool |is_decoder|Set to true if querying for decoder and false otherwise. |
| char * |out_name|Pointer to the user-maintained buffer for storing the output C-style name string.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall allocate at least [MAX_CODEC_NAME_LENGTH](/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-codec-name-length) bytes of memory for storing the output name string.





-----------

### MLMediaCodecListQueryResultsRelease {#mlresult-mlmediacodeclistqueryresultsrelease}

```cpp
MLResult MLMediaCodecListQueryResultsRelease(
    MLMediaCodecListQueryResults * query_results
)
```

Release the query results. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaCodecListQueryResults](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) * |query_results|Query results such as the list of codecs acquired by [MLMediaCodecListGetMatchingCodecs()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetmatchingcodecs) or the list of supported mime types acquired by [MLMediaCodecListGetSupportedMimes()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedmimes).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListGetSupportedProfileLevels {#mlresult-mlmediacodeclistgetsupportedprofilelevels}

```cpp
MLResult MLMediaCodecListGetSupportedProfileLevels(
    uint64_t index,
    const char * mime,
    MLMediaCodecListProfileLevel ** out_profile_levels,
    size_t * out_profile_levels_size
)
```

Obtain the supported profile levels for a codec. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| [MLMediaCodecListProfileLevel](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) ** |out_profile_levels|Codec supported profile levels defined by [MLMediaCodecListProfileLevel](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md). |
| size_t * |out_profile_levels_size|Number of profile levels.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall call [MLMediaCodecListProfileLevelsRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistprofilelevelsrelease) to release it.




**API Level:**
  * 6




-----------

### MLMediaCodecListProfileLevelsRelease {#mlresult-mlmediacodeclistprofilelevelsrelease}

```cpp
MLResult MLMediaCodecListProfileLevelsRelease(
    MLMediaCodecListProfileLevel * profile_levels
)
```

Release profile levels. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaCodecListProfileLevel](/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) * |profile_levels|The return value of [MLMediaCodecListGetSupportedProfileLevels()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 6




-----------

### MLMediaCodecListGetSupportedColorFormats {#mlresult-mlmediacodeclistgetsupportedcolorformats}

```cpp
MLResult MLMediaCodecListGetSupportedColorFormats(
    uint64_t index,
    const char * mime,
    uint32_t ** out_color_formats,
    size_t * out_color_formats_size
)
```

Obtain the supported color formats for a codec. All the supported color formats are defined by MLMediaCodecColorFormat. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| uint32_t ** |out_color_formats|Codec supported color formats of type MLMediaCodecColorFormat. |
| size_t * |out_color_formats_size|Number of color formats.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall call [MLMediaCodecListColorFormatsRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistcolorformatsrelease) to release it.




**API Level:**
  * 6




-----------

### MLMediaCodecListColorFormatsRelease {#mlresult-mlmediacodeclistcolorformatsrelease}

```cpp
MLResult MLMediaCodecListColorFormatsRelease(
    uint32_t * color_formats
)
```

Release color formats. 

**Parameters**

|  |   |   |
|--|--|--|
| uint32_t * |color_formats|The return value of [MLMediaCodecListGetSupportedColorFormats()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedcolorformats).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 6




-----------

### MLMediaCodecListGetSupportedBitrateModes {#mlresult-mlmediacodeclistgetsupportedbitratemodes}

```cpp
MLResult MLMediaCodecListGetSupportedBitrateModes(
    uint64_t index,
    const char * mime,
    MLMediaCodecBitrateMode ** out_bitrate_modes,
    size_t * out_bitrate_modes_size
)
```

Obtain the supported bitrate modes for a codec. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| [MLMediaCodecBitrateMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode) ** |out_bitrate_modes|Codec supported Bitrate modes defined by [MLMediaCodecBitrateMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode). |
| size_t * |out_bitrate_modes_size|Number of Bitrate modes.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall call [MLMediaCodecBitrateModesRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecbitratemodesrelease) to release it.




**API Level:**
  * 9




-----------

### MLMediaCodecBitrateModesRelease {#mlresult-mlmediacodecbitratemodesrelease}

```cpp
MLResult MLMediaCodecBitrateModesRelease(
    MLMediaCodecBitrateMode * bitrate_modes
)
```

Release Bitrate modes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaCodecBitrateMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode) * |bitrate_modes|The return value of [MLMediaCodecListGetSupportedBitrateModes()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedbitratemodes).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 9




-----------

### MLMediaCodecListIsAdaptivePlaybackSupported {#mlresult-mlmediacodeclistisadaptiveplaybacksupported}

```cpp
MLResult MLMediaCodecListIsAdaptivePlaybackSupported(
    uint64_t index,
    const char * mime,
    bool * out_supported
)
```

Check whether Adaptive playback is supported. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| bool * |out_supported|Returns true if supported, false otherwise.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


This function is used to query a video decoder to see whether it supports seamless resolution changes through Adaptive streaming. If the component is an audio decoder or encoder, it will always return false.




**API Level:**
  * 9




-----------

### MLMediaCodecListIsSecurePlaybackSupported {#mlresult-mlmediacodeclistissecureplaybacksupported}

```cpp
MLResult MLMediaCodecListIsSecurePlaybackSupported(
    uint64_t index,
    const char * mime,
    bool * out_supported
)
```

Check whether Secure playback is supported. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| bool * |out_supported|Returns true if supported, false otherwise.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


If the component is an encoder, it will always return false.




**API Level:**
  * 9




-----------

### MLMediaCodecListIsIntraRefreshSupported {#mlresult-mlmediacodeclistisintrarefreshsupported}

```cpp
MLResult MLMediaCodecListIsIntraRefreshSupported(
    uint64_t index,
    const char * mime,
    bool * out_supported
)
```

Check whether Intra Refresh is supported. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| bool * |out_supported|Returns true if supported, false otherwise.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


If the component is Decoder, it will always return false.




**API Level:**
  * 9




-----------

### MLMediaCryptoCreate {#mlresult-mlmediacryptocreate}

```cpp
MLResult MLMediaCryptoCreate(
    MLUUID uuid,
    const MLMediaDRMByteArray * data,
    MLHandle * out_handle
)
```

Create a MLMediaCrypto instance from a UUID. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) |uuid|The universal unique ID of the crypto scheme. uuid must be 16 bytes. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |data|Opaque initialization data specific to the crypto scheme, This value must never be NULL. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Upon successful return will point to handle to the created MLMediaCrypto. Or else, it will point to [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaCrypto object was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCryptoRelease {#mlresult-mlmediacryptorelease}

```cpp
MLResult MLMediaCryptoRelease(
    MLHandle media_crypto
)
```

Release the MLMediaCrypto instance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_crypto|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCrypto.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLMediaCrypto object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaCrypto object was successfully destroyed. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCryptoIsCryptoSchemeSupported {#mlresult-mlmediacryptoiscryptoschemesupported}

```cpp
MLResult MLMediaCryptoIsCryptoSchemeSupported(
    MLUUID uuid,
    bool * out_supported
)
```

Query if the given scheme identified by its UUID is supported on this device. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) |uuid|Identifies the universal unique ID of the crypto scheme. uuid must be 16 bytes. |
| bool * |out_supported|On successful return contains `true` or `false` based on whether the given crypto scheme is supported or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query has run successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCryptoRequiresSecureDecoderComponent {#mlresult-mlmediacryptorequiressecuredecodercomponent}

```cpp
MLResult MLMediaCryptoRequiresSecureDecoderComponent(
    const char * mime_type,
    bool * out_required
)
```

Query if the crypto scheme requires the use of a secure decoder to decode data of the given mime type. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |mime_type|The MIME type of the media container, e.g. "video/mp4". |
| bool * |out_required|On successful return contains `true` or `false` based on whether the given mime type requires a secure decoder.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query has run successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCryptoSetMediaDRMSession {#mlresult-mlmediacryptosetmediadrmsession}

```cpp
MLResult MLMediaCryptoSetMediaDRMSession(
    MLHandle media_crypto,
    const MLMediaDRMByteArray * session_id
)
```

Associate a #MediaDRM session with this MLMediaCrypto instance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_crypto|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaCrypto. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |session_id|Session ID for the DRM session.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Media DRM session was set successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDataSourceCreate {#mlresult-mlmediadatasourcecreate}

```cpp
MLResult MLMediaDataSourceCreate(
    MLMediaDataSourceReadAt read_at,
    MLMediaDataSourceGetSize get_size,
    MLMediaDataSourceClose close,
    void * context,
    MLHandle * out_handle
)
```

Create a new MediaDataSource object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaDataSourceReadAt](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-mlmediadatasourcereadat) |read_at|MLMediaDataSourceReadAt callback. |
| [MLMediaDataSourceGetSize](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-mlmediadatasourcegetsize) |get_size|MLMediaDataSourceGetSize callback. |
| [MLMediaDataSourceClose](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediadatasourceclose) |close|MLMediaDataSourceClose callback. |
| void * |context|User data to be passed to callbacks. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|The [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the new source object created. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|if operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDataSourceDestroy {#mlresult-mlmediadatasourcedestroy}

```cpp
MLResult MLMediaDataSourceDestroy(
    MLHandle media_data_source
)
```

Destroy a #MediaDataSource object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_data_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the #MediaDataSource object to destroy.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|if operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMEventCallbacksInit {#void-mlmediadrmeventcallbacksinit}

```cpp
static inline void MLMediaDRMEventCallbacksInit(
    MLMediaDRMEventCallbacks * inout_callbacks
)
```

Initializes [MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md) with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md) * |inout_callbacks|MediaDRM Callback structure defined by [MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md) that needs to be initialized. |




-----------

### MLMediaDRMByteArrayAllocate {#mlresult-mlmediadrmbytearrayallocate}

```cpp
MLResult MLMediaDRMByteArrayAllocate(
    size_t size,
    MLMediaDRMByteArray * out_array
)
```

Allocate byte array buffer. 

**Parameters**

|  |   |   |
|--|--|--|
| size_t |size|Maximum size of the desirable byte array to be allocated. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |out_array|Pointer to byte array buffer that needs to be allocated. To free/release, call [MLMediaDRMByteArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed because of allocation failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Byte Array is allocated successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMByteArrayAllocAndCopy {#mlresult-mlmediadrmbytearrayallocandcopy}

```cpp
MLResult MLMediaDRMByteArrayAllocAndCopy(
    const uint8_t * copy_from,
    size_t size,
    MLMediaDRMByteArray * out_array
)
```

Allocate and Copy to byte array buffer. 

**Parameters**

|  |   |   |
|--|--|--|
| const uint8_t * |copy_from|Buffer from which copy into byte array. |
| size_t |size|Number of bytes to be copied. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |out_array|Pointer to byte array buffer that needs to be allocated and copied to. To free/release, call [MLMediaDRMByteArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed because of allocation failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Byte Array is allocated and copied successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMKeyValueArrayAllocate {#mlresult-mlmediadrmkeyvaluearrayallocate}

```cpp
MLResult MLMediaDRMKeyValueArrayAllocate(
    size_t size,
    MLMediaDRMKeyValueArray * out_array
)
```

Allocate array of key/value pairs. 

**Parameters**

|  |   |   |
|--|--|--|
| size_t |size|Maximum size of the desirable array of key/value pair to be allocated. |
| [MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) * |out_array|Pointer to array of key/value pair that needs to be allocated. To free/release, call [MLMediaDRMKeyValueArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmkeyvaluearrayrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed because of allocation failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Key/value pair array is allocated successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMCreate {#mlresult-mlmediadrmcreate}

```cpp
MLResult MLMediaDRMCreate(
    MLUUID uuid,
    MLHandle * out_handle
)
```

Create a MLMediaDRM instance from a UUID. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) |uuid|The universal unique ID of the crypto scheme. uuid must be 16 bytes. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Upon successful return will point to handle to the created MLMediaDRM. Or else, it will point to [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|MLMediaDRM object creation failed with resource allocation failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM object was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMRelease {#mlresult-mlmediadrmrelease}

```cpp
MLResult MLMediaDRMRelease(
    MLHandle media_drm
)
```

Release the MLMediaDRM instance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM object was released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMByteArrayRelease {#mlresult-mlmediadrmbytearrayrelease}

```cpp
MLResult MLMediaDRMByteArrayRelease(
    MLMediaDRMByteArray * array
)
```

Release byte array buffer. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |array|Byte array buffer that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Byte Array was released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMByteArrayListRelease {#mlresult-mlmediadrmbytearraylistrelease}

```cpp
MLResult MLMediaDRMByteArrayListRelease(
    MLMediaDRMByteArrayList * array
)
```

Release list of byte array buffer. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaDRMByteArrayList](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array_list.md) * |array|List of byte array buffer that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Byte Array List was released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMKeyValueArrayRelease {#mlresult-mlmediadrmkeyvaluearrayrelease}

```cpp
MLResult MLMediaDRMKeyValueArrayRelease(
    MLMediaDRMKeyValueArray * array
)
```

Release key/value pair array. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) * |array|Key/value pair array that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Key/value pair array was released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMRequestMessageRelease {#mlresult-mlmediadrmrequestmessagerelease}

```cpp
MLResult MLMediaDRMRequestMessageRelease(
    MLMediaDRMRequestMessage * request
)
```

Release Request Message. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaDRMRequestMessage](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) * |request|Pointer to Request Message that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|DRM Request Message was released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMKeyValueArrayAdd {#mlresult-mlmediadrmkeyvaluearrayadd}

```cpp
MLResult MLMediaDRMKeyValueArrayAdd(
    const MLMediaDRMKeyValue * pair,
    MLMediaDRMKeyValueArray * out_array
)
```

Add a key/value pair to the array of key/value pairs. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLMediaDRMKeyValue](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value.md) * |pair|The source key/value pair that needs to be added. |
| [MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) * |out_array|Pointer to array of key/value pair to which the pair needs to be added to.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|key/value pair is added successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMIsCryptoSchemeSupported {#mlresult-mlmediadrmiscryptoschemesupported}

```cpp
MLResult MLMediaDRMIsCryptoSchemeSupported(
    MLUUID uuid,
    const char * mime_type,
    bool * out_supported
)
```

Query if the given scheme identified by its UUID is supported on this device. And whether the drm plugin is able to handle the media container format. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) |uuid|Identifies the universal unique ID of the crypto scheme. UUID must be 16 bytes. |
| const char * |mime_type|The MIME type of the media container, e.g. "video/mp4". If mime_type is not known or required, it can be provided as NULL. |
| bool * |out_supported|On successful return contains `true` or `false` based on whether the given crypto scheme is supported or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query has run successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMSetOnEventListenerEx {#mlresult-mlmediadrmsetoneventlistenerex}

```cpp
MLResult MLMediaDRMSetOnEventListenerEx(
    MLHandle media_drm,
    MLMediaDRMEventCallbacks * callbacks,
    void * data
)
```

Register a callback to be invoked when DRM events or updates or status change occurs. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| [MLMediaDRMEventCallbacks](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md) * |callbacks|Set of event callbacks. Can be set to NULL to unset the callbacks altogether. |
| void * |data|Custom data to be returned when any callback is fired.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Event listener was set successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaDRMOpenSession {#mlresult-mlmediadrmopensession}

```cpp
MLResult MLMediaDRMOpenSession(
    MLHandle media_drm,
    MLMediaDRMByteArray * out_session_id
)
```

Opens a new session. A session ID is returned. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |out_session_id|ID of the session created/opened. This byte array will be released when [MLMediaDRMCloseSession()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmclosesession) is called.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM session was opened successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMCloseSession {#mlresult-mlmediadrmclosesession}

```cpp
MLResult MLMediaDRMCloseSession(
    MLHandle media_drm,
    MLMediaDRMByteArray * session_id
)
```

Closes a session on the MLMediaDRM object that was previously opened with openSession(). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |session_id|The session ID for the DRM session, which will be released on return.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM session was closed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMGetKeyRequest {#mlresult-mlmediadrmgetkeyrequest}

```cpp
MLResult MLMediaDRMGetKeyRequest(
    MLHandle media_drm,
    const MLMediaDRMByteArray * session_id,
    const MLMediaDRMKeyRequestInputParam * key_request_param,
    MLMediaDRMRequestMessage * out_key_request
)
```

A key request/response exchange occurs between the app and a license server to obtain or release keys used to decrypt encrypted content. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |session_id|The session ID for the DRM session. |
| const [MLMediaDRMKeyRequestInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_request_input_param.md) * |key_request_param|Placeholder for needed arguments for generating a key request message. |
| [MLMediaDRMRequestMessage](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) * |out_key_request|Upon successful return, contains key request message. To free/release this, call [MLMediaDRMRequestMessageRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmrequestmessagerelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM Key Request message is constructed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


[MLMediaDRMGetKeyRequest()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetkeyrequest) is used to obtain an opaque key request byte array that is delivered to the license server. The opaque key request byte array is returned in out_key_request.request The recommended URL to deliver the key request to is returned in out_key_request.default_URL.

After the app has received the key request response from the server, it should deliver to the response to the DRM engine plugin using the method [MLMediaDRMProvideKeyResponse()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovidekeyresponse).





-----------

### MLMediaDRMProvideKeyResponse {#mlresult-mlmediadrmprovidekeyresponse}

```cpp
MLResult MLMediaDRMProvideKeyResponse(
    MLHandle media_drm,
    const MLMediaDRMByteArray * session_id,
    const MLMediaDRMByteArray * response,
    MLMediaDRMByteArray * out_key_set_id
)
```

A key response is received from the license server by the app, then it is provided to the DRM engine plugin using [MLMediaDRMProvideKeyResponse()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovidekeyresponse). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |session_id|The session ID for the DRM session. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |response|The opaque response from the server. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |out_key_set_id|Upon successful return, contains the key identifier. To free/release this buffer, call [MLMediaDRMByteArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM Key Response message was consumed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


When the response is for an offline key request, a key_set_id is returned that can be used to later restore the keys to a new session with restoreKeys(). When the response is for a streaming or release request, a null key_set_id is returned.





-----------

### MLMediaDRMRestoreKeys {#mlresult-mlmediadrmrestorekeys}

```cpp
MLResult MLMediaDRMRestoreKeys(
    MLHandle media_drm,
    const MLMediaDRMByteArray * session_id,
    const MLMediaDRMByteArray * key_set_id
)
```

Restore persisted offline keys into a new session. key_set_id identifies the keys to load, obtained from a prior call to [MLMediaDRMProvideKeyResponse()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovidekeyresponse). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |session_id|The session ID for the DRM session. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |key_set_id|The saved key set to restore.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM Keys are restored successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMRemoveKeys {#mlresult-mlmediadrmremovekeys}

```cpp
MLResult MLMediaDRMRemoveKeys(
    MLHandle media_drm,
    MLMediaDRMByteArray * key_set_id
)
```

Remove the current keys from a session. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |key_set_id|The keys to remove, which will be released on success.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM Keys are removed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMQueryKeyStatus {#mlresult-mlmediadrmquerykeystatus}

```cpp
MLResult MLMediaDRMQueryKeyStatus(
    MLHandle media_drm,
    const MLMediaDRMByteArray * session_id,
    MLMediaDRMKeyValueArray * out_info_map
)
```

Request an informative description of the key status for the session. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |session_id|The session ID for the DRM session. |
| [MLMediaDRMKeyValueArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_value_array.md) * |out_info_map|The Key-Value pair place-holder for the key status. To release/free this call [MLMediaDRMKeyValueArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmkeyvaluearrayrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Query for MLMediaDRM Key status completed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The status is in the form of key/value pairs. Since DRM license policies vary by vendor, the specific status field names are determined by each DRM vendor. Refer to your DRM provider documentation for definitions of the field names for a particular DRM engine plugin.





-----------

### MLMediaDRMGetProvisionRequest {#mlresult-mlmediadrmgetprovisionrequest}

```cpp
MLResult MLMediaDRMGetProvisionRequest(
    MLHandle media_drm,
    const char * cert_type,
    MLMediaDRMRequestMessage * out_provision_request
)
```

A provision request/response exchange occurs between the app and a provisioning server to retrieve a device certificate. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const char * |cert_type|The device certificate type, which can be "none" or "X.509". |
| [MLMediaDRMRequestMessage](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_request_message.md) * |out_provision_request|Upon successful return, contains provision request message. To free/release this, call [MLMediaDRMRequestMessageRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmrequestmessagerelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Device Provision Request message is constructed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


If provisioning is required, the #EVENT_PROVISION_REQUIRED event will be sent to the event handler. [MLMediaDRMGetProvisionRequest()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetprovisionrequest) is used to obtain the opaque provision request byte array that should be delivered to the provisioning server.





-----------

### MLMediaDRMProvideProvisionResponse {#mlresult-mlmediadrmprovideprovisionresponse}

```cpp
MLResult MLMediaDRMProvideProvisionResponse(
    MLHandle media_drm,
    const MLMediaDRMByteArray * response,
    MLMediaDRMByteArray * out_certificate,
    MLMediaDRMByteArray * out_wrapped_key
)
```

After a provision response is received by the app, it is provided to the DRM engine plugin using this method. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |response|The opaque provisioning response byte array to provide to the DRM engine plugin. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |out_certificate|The device certificate upon sucessful return. To release/free this call [MLMediaDRMByteArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease). |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |out_wrapped_key|The wrapped device key upon sucessful return. To release/free this call [MLMediaDRMByteArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Device Provision Response message is consumed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMGetSecureStops {#mlresult-mlmediadrmgetsecurestops}

```cpp
MLResult MLMediaDRMGetSecureStops(
    MLHandle media_drm,
    MLMediaDRMByteArrayList * out_secure_stops
)
```

Access all secure stops. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| [MLMediaDRMByteArrayList](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array_list.md) * |out_secure_stops|List of all the secure stops upon successful return. To free/release call [MLMediaDRMByteArrayListRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearraylistrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM Secure stops are retrieved successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Secure Stop:

A means of enforcing limits on the number of concurrent streams per subscriber across devices is provided via #SecureStop. This is achieved by securely monitoring the lifetime of sessions.

Information from the server related to the current playback session is written to persistent storage on the device when each #MediaCrypto object is created.

In the normal case, playback will be completed, the session destroyed and the Secure Stops will be queried. The app queries secure stops and forwards the secure stop message to the server which verifies the signature and notifies the server side database that the session destruction has been confirmed.

The persisted record on the client is only removed after positive confirmation that the server received the message using releaseSecureStops().





-----------

### MLMediaDRMGetSecureStop {#mlresult-mlmediadrmgetsecurestop}

```cpp
MLResult MLMediaDRMGetSecureStop(
    MLHandle media_drm,
    const MLMediaDRMByteArray * ss_id,
    MLMediaDRMByteArray * out_secure_stop
)
```

Access secure stop by secure stop ID. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |ss_id|The ID for the DRM securestop session. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |out_secure_stop|The secure stop upon successful return. To free/release call [MLMediaDRMByteArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM Secure stop is retrieved successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 




**See**: [MLMediaDRMGetSecureStops()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetsecurestops).



-----------

### MLMediaDRMReleaseSecureStops {#mlresult-mlmediadrmreleasesecurestops}

```cpp
MLResult MLMediaDRMReleaseSecureStops(
    MLHandle media_drm,
    const MLMediaDRMByteArray * secure_stop
)
```

Process the SecureStop server response message. After authenticating the message, remove the SecureStops identified in the response. See [MLMediaDRMGetSecureStops()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetsecurestops) for details. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |secure_stop|The server response indicating which secure stops to release.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM Secure stops are released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMReleaseAllSecureStops {#mlresult-mlmediadrmreleaseallsecurestops}

```cpp
MLResult MLMediaDRMReleaseAllSecureStops(
    MLHandle media_drm
)
```

Remove all the SecureStops. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|All secure stops for the MLMediaDRM are released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 




**See**: [MLMediaDRMGetSecureStops()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmgetsecurestops).



-----------

### MLMediaDRMGetPropertyString {#mlresult-mlmediadrmgetpropertystring}

```cpp
MLResult MLMediaDRMGetPropertyString(
    MLHandle media_drm,
    MLMediaDRMProperty property_name,
    char ** out_property_value
)
```

Read a DRM engine plugin String property value, given the property name. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) |property_name|The property to query. Standard property names are:

* MLMediaDRMProperty_Vendor.
* MLMediaDRMProperty_Version.
* MLMediaDRMProperty_Description.
* MLMediaDRMProperty_Algorithms. |
| char ** |out_property_value|The property value upon successful return. Ownership is passed, call free(*out_property_value) to free it.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM property is retrieved successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMGetPropertyByteArray {#mlresult-mlmediadrmgetpropertybytearray}

```cpp
MLResult MLMediaDRMGetPropertyByteArray(
    MLHandle media_drm,
    MLMediaDRMProperty property_name,
    MLMediaDRMByteArray * out_property_value
)
```

Read a DRM engine plugin byte array property value, given the property name. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) |property_name|The property to query. Standard property names are:

* MLMediaDRMProperty_DeviceUniqueID. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |out_property_value|The property value upon successful return. To release/free call [MLMediaDRMByteArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM property is retrieved successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMSetPropertyString {#mlresult-mlmediadrmsetpropertystring}

```cpp
MLResult MLMediaDRMSetPropertyString(
    MLHandle media_drm,
    MLMediaDRMProperty property_name,
    const char * property_value
)
```

Set a DRM engine plugin String property value. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) |property_name|The property to query. Standard property names are:

* MLMediaDRMProperty_Vendor.
* MLMediaDRMProperty_Version.
* MLMediaDRMProperty_Description.
* MLMediaDRMProperty_Algorithms. |
| const char * |property_value|The value of the corresponding property.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM property is set successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMSetPropertyByteArray {#mlresult-mlmediadrmsetpropertybytearray}

```cpp
MLResult MLMediaDRMSetPropertyByteArray(
    MLHandle media_drm,
    MLMediaDRMProperty property_name,
    const MLMediaDRMByteArray * property_value
)
```

Set a DRM engine plugin byte array property value. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| [MLMediaDRMProperty](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediadrmproperty) |property_name|The property to query. Standard property names are:

* MLMediaDRMProperty_DeviceUniqueID. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |property_value|The value of the corresponding property.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM property is set successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDRMEncrypt {#mlresult-mlmediadrmencrypt}

```cpp
MLResult MLMediaDRMEncrypt(
    MLHandle media_drm,
    const MLMediaDRMByteArray * session_id,
    const MLMediaDRMCryptoInputParam * crypto_key_param,
    const MLMediaDRMByteArray * input,
    MLMediaDRMByteArray * out_output
)
```

Encrypt the data referenced by input using algorithm if specified, and write the encrypted result into output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |session_id|The session ID for the DRM session. |
| const [MLMediaDRMCryptoInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md) * |crypto_key_param|Pointer to the structure that contains needed crypto arguments for encryption operation. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |input|The data that needs to be encrypted. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |out_output|The encrypted input upon successful return. To free/release this buffer, call [MLMediaDRMByteArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM encryption operation has been completed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The key to use is identified by the 16 byte keyId. The key must have been loaded into the session using [MLMediaDRMProvideKeyResponse()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovidekeyresponse).





-----------

### MLMediaDRMDecrypt {#mlresult-mlmediadrmdecrypt}

```cpp
MLResult MLMediaDRMDecrypt(
    MLHandle media_drm,
    const MLMediaDRMByteArray * session_id,
    const MLMediaDRMCryptoInputParam * crypto_key_param,
    const MLMediaDRMByteArray * input,
    MLMediaDRMByteArray * out_output
)
```

Decrypt the data referenced by input using algorithm if specified, and write the encrypted result into output. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |session_id|The session ID for the DRM session. |
| const [MLMediaDRMCryptoInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_crypto_input_param.md) * |crypto_key_param|Pointer to the structure that contains needed crypto arguments for decryption operation. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |input|The data that needs to be decrypted. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |out_output|The decrypted input upon successful return. To free/release this buffer, call [MLMediaDRMByteArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM decryption operation has been completed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The key to use is identified by the 16 byte keyId. The key must have been loaded into the session using [MLMediaDRMProvideKeyResponse()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovidekeyresponse).





-----------

### MLMediaDRMSign {#mlresult-mlmediadrmsign}

```cpp
MLResult MLMediaDRMSign(
    MLHandle media_drm,
    const MLMediaDRMByteArray * session_id,
    const MLMediaDRMHMACInputParam * hmac_key_param,
    const MLMediaDRMByteArray * message,
    MLMediaDRMByteArray * out_signature
)
```

Generate a signature using the specified algorithm (if provided) over the message data and store the signature. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |session_id|The session ID for the DRM session. |
| const [MLMediaDRMHMACInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md) * |hmac_key_param|Pointer to the structure that contains needed crypto arguments for HMAC operation. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |message|The data that needs to be signed. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |out_signature|The signature of the input message upon success. To free/release this buffer, call [MLMediaDRMByteArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM HMAC Sign operation has been completed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The key to use is identified by the 16 byte keyId. The key must have been loaded into the session using [MLMediaDRMProvideKeyResponse()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovidekeyresponse).





-----------

### MLMediaDRMVerify {#mlresult-mlmediadrmverify}

```cpp
MLResult MLMediaDRMVerify(
    MLHandle media_drm,
    const MLMediaDRMByteArray * session_id,
    const MLMediaDRMHMACInputParam * hmac_key_param,
    const MLMediaDRMByteArray * message,
    const MLMediaDRMByteArray * signature,
    bool * out_match
)
```

Perform a signature verification using the specified algorithm (if specified) over the message data referenced by the message parameter. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |session_id|The session ID for the DRM session. |
| const [MLMediaDRMHMACInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_h_m_a_c_input_param.md) * |hmac_key_param|Pointer to the structure that contains needed crypto arguments for HMAC operation. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |message|The data for which signature needs to be verified. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |signature|The signature of the input message. |
| bool * |out_match|Pointer to bool, which would return "true" if the signature matches, "false" otherwise.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM HMAC Verify operation has been completed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The key must have been loaded into the session using [MLMediaDRMProvideKeyResponse()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmprovidekeyresponse).





-----------

### MLMediaDRMSignRSA {#mlresult-mlmediadrmsignrsa}

```cpp
MLResult MLMediaDRMSignRSA(
    MLHandle media_drm,
    const MLMediaDRMByteArray * session_id,
    const MLMediaDRMRSAInputParam * rsa_key_param,
    const MLMediaDRMByteArray * message,
    MLMediaDRMByteArray * out_signature
)
```

Generate a signature using the specified RSA Key and algorithm. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_drm|Handle to the MLMediaDRM. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |session_id|The session ID for the DRM session. |
| const [MLMediaDRMRSAInputParam](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_r_s_a_input_param.md) * |rsa_key_param|Pointer to the structure that contains needed key arguments for this RSA operation. |
| const [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |message|The data that needs to be signed. |
| [MLMediaDRMByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_byte_array.md) * |out_signature|The signature of the input message upon success. To free/release this buffer, call [MLMediaDRMByteArrayRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadrmbytearrayrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Parameter is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaDRM RSA Sign operation has been completed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorCreate {#mlresult-mlmediaextractorcreate}

```cpp
MLResult MLMediaExtractorCreate(
    MLHandle * out_handle
)
```

Create a new MLMediaExtractor. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created MLMediaExtractor. If there is an error during creation, it will return [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If MediaExtractor handle cannot be allocated. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If out_handle is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorDestroy {#mlresult-mlmediaextractordestroy}

```cpp
MLResult MLMediaExtractorDestroy(
    MLHandle handle
)
```

Destroy a MLMediaExtractor. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If handle is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorSetDataSourceForPath {#mlresult-mlmediaextractorsetdatasourceforpath}

```cpp
MLResult MLMediaExtractorSetDataSourceForPath(
    MLHandle handle,
    const char * path
)
```

Set a local file path as the data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| const char * |path|Content path of the file.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The path should be an absolute path and should reference a world-readable file.





-----------

### MLMediaExtractorSetDataSourceForURI {#mlresult-mlmediaextractorsetdatasourceforuri}

```cpp
MLResult MLMediaExtractorSetDataSourceForURI(
    MLHandle handle,
    const char * uri
)
```

Set a URI string as the data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| const char * |uri|C-style string representing the URI complete string.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * android.permission.INTERNET (protection level: normal) 






-----------

### MLMediaExtractorSetDataSourceForURIWithHeaders {#mlresult-mlmediaextractorsetdatasourceforuriwithheaders}

```cpp
MLResult MLMediaExtractorSetDataSourceForURIWithHeaders(
    MLHandle handle,
    const char * uri,
    const char ** headers,
    size_t len
)
```

Set a URI string as the data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| const char * |uri|C-style string representing the complete URL. |
| const char ** |headers|Array of char * headers to be sent. |
| size_t |len|Number of headers passed-in.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * android.permission.INTERNET (protection level: normal) 






-----------

### MLMediaExtractorSetDataSourceForFD {#mlresult-mlmediaextractorsetdatasourceforfd}

```cpp
MLResult MLMediaExtractorSetDataSourceForFD(
    MLHandle handle,
    int fd,
    int64_t offset,
    int64_t length
)
```

Set the data source as the file-descriptor to use. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle to the MediaExtractor. |
| int |fd|File-descriptor for the file to extract from. |
| int64_t |offset|Offset in bytes into the file where the data to be extracted starts. |
| int64_t |length|Length in bytes of the data to be extracted.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


It is the caller's responsibility to close the file descriptor. It is safe to do so as soon as this call returns.





-----------

### MLMediaExtractorSetMediaDataSource {#mlresult-mlmediaextractorsetmediadatasource}

```cpp
MLResult MLMediaExtractorSetMediaDataSource(
    MLHandle handle,
    MLHandle media_data_source
)
```

Sets the data source as user defined media data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle to the MediaExtractor. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_data_source|MLHandle returned by [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If media_data_source cannot be found.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetDRMInitData {#mlresult-mlmediaextractorgetdrminitdata}

```cpp
MLResult MLMediaExtractorGetDRMInitData(
    MLHandle handle,
    MLUUID drm_uuid,
    MLMediaExtractorDRMSchemeInitData * out_drm_init_data
)
```

Extract DRM initialization data for a given DRM Scheme if it exists. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) |drm_uuid|UUID of the DRM scheme. |
| [MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) * |out_drm_init_data|DRM initialization data pointer. To release the DRM initialization data upon successful return, call [MLMediaExtractorReleaseDRMInitData()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasedrminitdata).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorReleaseDRMInitData {#mlresult-mlmediaextractorreleasedrminitdata}

```cpp
MLResult MLMediaExtractorReleaseDRMInitData(
    MLHandle handle,
    MLMediaExtractorDRMSchemeInitData * drm_init_data
)
```

Release DRM initialization data which was previously retrieved. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| [MLMediaExtractorDRMSchemeInitData](/api-ref/api/Modules/group___media_player/struct_m_l_media_extractor_d_r_m_scheme_init_data.md) * |drm_init_data|DRM initialization data that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetTrackCount {#mlresult-mlmediaextractorgettrackcount}

```cpp
MLResult MLMediaExtractorGetTrackCount(
    MLHandle handle,
    uint64_t * out_track_count
)
```

Count the number of tracks found in the data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| uint64_t * |out_track_count|Number of tracks found in data source.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetTrackFormat {#mlresult-mlmediaextractorgettrackformat}

```cpp
MLResult MLMediaExtractorGetTrackFormat(
    MLHandle handle,
    size_t index,
    MLHandle * out_track_handle
)
```

Get the track format at the specified index. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| size_t |index|Index of the track. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_track_handle|MLMediaFormat handle that represents track format.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorSelectTrack {#mlresult-mlmediaextractorselecttrack}

```cpp
MLResult MLMediaExtractorSelectTrack(
    MLHandle handle,
    size_t index
)
```

Select a track for the subsequent operations. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| size_t |index|Index of the track.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Subsequent calls to [MLMediaExtractorReadSampleData()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreadsampledata), [MLMediaExtractorGetSampleTrackIndex()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampletrackindex) and getSampleTime() only retrieve information for the subset of tracks selected. Selecting the same track multiple times has no effect, the track is only selected once.





-----------

### MLMediaExtractorUnselectTrack {#mlresult-mlmediaextractorunselecttrack}

```cpp
MLResult MLMediaExtractorUnselectTrack(
    MLHandle handle,
    size_t index
)
```

Unselect a track for the subsequent operations. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| size_t |index|Index of the track.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Subsequent calls to [MLMediaExtractorReadSampleData()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreadsampledata), [MLMediaExtractorGetSampleTrackIndex()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorgetsampletrackindex) and getSampleTime() only retrieve information for the subset of tracks selected.





-----------

### MLMediaExtractorSeekTo {#mlresult-mlmediaextractorseekto}

```cpp
MLResult MLMediaExtractorSeekTo(
    MLHandle handle,
    int64_t time_us,
    MLMediaSeekMode mode
)
```

All selected tracks seek near the requested time according to the specified mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| int64_t |time_us|Seek time. |
| [MLMediaSeekMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode) |mode|Seek mode defined by MLMediaSeekMode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorAdvance {#mlresult-mlmediaextractoradvance}

```cpp
MLResult MLMediaExtractorAdvance(
    MLHandle handle
)
```

Advance to the next sample. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If handle is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_FailedTransaction|If Advance operation failed, no more sample data is available (end of stream).|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorReadSampleData {#mlresult-mlmediaextractorreadsampledata}

```cpp
MLResult MLMediaExtractorReadSampleData(
    MLHandle handle,
    uint8_t * byte_buf,
    size_t buf_size,
    size_t offset,
    int64_t * out_data_size
)
```

Retrieve the current encoded sample and store it in the byte buffer starting at the given offset. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| uint8_t * |byte_buf|Destination byte buffer. |
| size_t |buf_size|Size of the destination buffer. |
| size_t |offset|Offset within the buffer. |
| int64_t * |out_data_size|Sample size or -1 if no more samples are available.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetSampleTrackIndex {#mlresult-mlmediaextractorgetsampletrackindex}

```cpp
MLResult MLMediaExtractorGetSampleTrackIndex(
    MLHandle handle,
    int64_t * out_track_index
)
```

Return the track index the current sample originates from. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor. |
| int64_t * |out_track_index|Track index or -1 if no more samples are available.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetSampleTime {#mlresult-mlmediaextractorgetsampletime}

```cpp
MLResult MLMediaExtractorGetSampleTime(
    MLHandle handle,
    int64_t * out_sample_time
)
```

Return the current sample's presentation time in microseconds. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| int64_t * |out_sample_time|Sample time or -1 if no more samples are available.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetSampleFlags {#mlresult-mlmediaextractorgetsampleflags}

```cpp
MLResult MLMediaExtractorGetSampleFlags(
    MLHandle handle,
    int * out_sample_flags
)
```

Return the current sample's flags. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| int * |out_sample_flags|Sample flag defined by [MLMediaExtractorSampleFlag](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaextractorsampleflag), or -1 if on failure.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetSampleCryptoInfo {#mlresult-mlmediaextractorgetsamplecryptoinfo}

```cpp
MLResult MLMediaExtractorGetSampleCryptoInfo(
    MLHandle handle,
    MLHandle * out_info_handle
)
```

Return the current sample's Crypto info if has encrypted sample. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_info_handle|On success it returns handle to Crypto info of the sample.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorReleaseCryptoInfo {#mlresult-mlmediaextractorreleasecryptoinfo}

```cpp
MLResult MLMediaExtractorReleaseCryptoInfo(
    MLHandle handle,
    MLHandle * inout_info_handle
)
```

Release the Crypto Info. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |inout_info_handle|handle to Crypto info that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorGetCachedDuration {#mlresult-mlmediaextractorgetcachedduration}

```cpp
MLResult MLMediaExtractorGetCachedDuration(
    MLHandle handle,
    int64_t * out_cached_duration
)
```

Return an estimate of how much data is presently cached in memoryexpressed in microseconds. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle to the MLMediaExtractor. |
| int64_t * |out_cached_duration|Cached amount or -1 if that information is unavailable or not applicable (no cache).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaExtractorHasCacheReachedEOS {#mlresult-mlmediaextractorhascachereachedeos}

```cpp
MLResult MLMediaExtractorHasCacheReachedEOS(
    MLHandle handle
)
```

Return `true` if we are caching data and the cache has reached the end of the data stream (for now, a future seek may of course restart the fetching of data). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


This API only returns a meaningful result if getCachedDuration() indicates the presence of a cache, i.e. does NOT return -1.





-----------

### MLMediaExtractorGetPSSHInfoCount {#mlresult-mlmediaextractorgetpsshinfocount}

```cpp
MLResult MLMediaExtractorGetPSSHInfoCount(
    MLHandle handle,
    size_t * out_index
)
```

Get the Number of PSSH info if present. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| size_t * |out_index|On successful return contains number of PSSH entries.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The PSSH(Protection System Specific Header) contains a UUID representing a DRM scheme along with opaque data blob used for creating crypto session, which in turn used to configure codec.





-----------

### MLMediaExtractorGetPSSHInfo {#mlresult-mlmediaextractorgetpsshinfo}

```cpp
MLResult MLMediaExtractorGetPSSHInfo(
    MLHandle handle,
    size_t index,
    MLMediaExtractorPSSHEntry * out_pssh_entry
)
```

Get the PSSH info if present. The PSSH(Protection System Specific Header) contains a UUID representing a DRM scheme along with opaque data blob used for creating crypto session, which in turn used to configure codec. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| size_t |index|Index of the PSSH info data element being retrieved. |
| [MLMediaExtractorPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaextractorpsshentry) * |out_pssh_entry|Pointer to the PSSH info data element being retrieved.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Upon successful return, if a [MLMediaExtractorPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaextractorpsshentry) is returned, same should be released by calling [MLMediaExtractorReleasePSSHInfo()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaextractorreleasepsshinfo).





-----------

### MLMediaExtractorReleasePSSHInfo {#mlresult-mlmediaextractorreleasepsshinfo}

```cpp
MLResult MLMediaExtractorReleasePSSHInfo(
    MLHandle handle,
    MLMediaExtractorPSSHEntry * pssh_entry
)
```

Clear the PSSH info data. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaExtractor instance. |
| [MLMediaExtractorPSSHEntry](/api-ref/api/Modules/group___media_player/group___media_player.md#mlpsshentry-mlmediaextractorpsshentry) * |pssh_entry|Pointer to the PSSH info data element that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Clears the entire cached PSSH info data in the library.





-----------

### MLMediaFormatCreateVideo {#mlresult-mlmediaformatcreatevideo}

```cpp
MLResult MLMediaFormatCreateVideo(
    const char * mime_type,
    int width,
    int height,
    MLHandle * out_handle
)
```

Create a video format object. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |mime_type|Mime type of the content. |
| int |width|Width of the content in pixels. |
| int |height|Height of the content in pixels. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created video format object. If there is an error during creation, it will return [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If handle cannot be allocated. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatCreateAudio {#mlresult-mlmediaformatcreateaudio}

```cpp
MLResult MLMediaFormatCreateAudio(
    const char * mime_type,
    int sample_rate,
    int channel_count,
    MLHandle * out_handle
)
```

Create a audio format object. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |mime_type|Mime type of the content. |
| int |sample_rate|Sample rate of the content. |
| int |channel_count|Number of audio channels. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created audio format object. If there is an error during creation, it will return [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If handle cannot be allocated. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatCreateSubtitle {#mlresult-mlmediaformatcreatesubtitle}

```cpp
MLResult MLMediaFormatCreateSubtitle(
    const char * mime_type,
    const char * language,
    MLHandle * out_handle
)
```

Create a subtitle format object. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |mime_type|Mime type of the content. |
| const char * |language|Language of the content, using either ISO 639-1 or 639-2/T codes. Specify null or "und" if language information is only included in the content (This will also work if there are multiple language tracks in the content). |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created subtitle format object. If there is an error during creation, it will return [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If handle cannot be allocated. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatCreate {#mlresult-mlmediaformatcreate}

```cpp
MLResult MLMediaFormatCreate(
    MLHandle * out_handle
)
```

Create an empty format object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created empty format object. If there is an error during creation, it will return [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If handle cannot be allocated. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid.|
**Required Permissions**:

  * None 





**API Level:**
  * 9




-----------

### MLMediaFormatCreateCopy {#mlresult-mlmediaformatcreatecopy}

```cpp
MLResult MLMediaFormatCreateCopy(
    MLHandle handle,
    MLHandle * out_handle
)
```

Create a copy of the format handle provided. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created copy of the format object. If there is an error during creation, it will return [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If handle cannot be allocated. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid.|
**Required Permissions**:

  * None 


This can be particularly useful to persist the media format handle/object that was received through the callbacks (as life cycle of those media format objects are with in the callback context only).

The API call to make a copy ensures that the copied object exists until released with [MLMediaFormatDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatdestroy) call.




**API Level:**
  * 20




-----------

### MLMediaFormatDestroy {#mlresult-mlmediaformatdestroy}

```cpp
MLResult MLMediaFormatDestroy(
    MLHandle handle
)
```

Destroy a MLMediaFormat object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If handle is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If MLMediaCodec object was successfully destroyed. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatObjectToString {#mlresult-mlmediaformatobjecttostring}

```cpp
MLResult MLMediaFormatObjectToString(
    MLHandle handle,
    char * out_string
)
```

Obtain the human readable representation of the format. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| char * |out_string|Buffer to which stringify the media format. Shouldn't be NULL.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall allocate at least [MAX_FORMAT_STRING_SIZE](/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-format-string-size) bytes of memory for storing the output format string. The format string contains a list of key-value pairs, which can be extracted individually via the suitable "GetKeyValue" APIs.





-----------

### MLMediaFormatGetKeyValueInt32 {#mlresult-mlmediaformatgetkeyvalueint32}

```cpp
MLResult MLMediaFormatGetKeyValueInt32(
    MLHandle handle,
    MLMediaFormatKey name,
    int32_t * out_key
)
```

Obtain the value of an integer key. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| int32_t * |out_key|Value of the key.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If name is not one of the media format key name.|
**Required Permissions**:

  * None 


For example, use [MLMediaFormat_Key_Frame_Rate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-frame-rate) key to get the framerate of a video track.





-----------

### MLMediaFormatGetKeyValueInt64 {#mlresult-mlmediaformatgetkeyvalueint64}

```cpp
MLResult MLMediaFormatGetKeyValueInt64(
    MLHandle handle,
    MLMediaFormatKey name,
    int64_t * out_key
)
```

Obtain the value of a long key. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| int64_t * |out_key|Value of the key.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If name is not one of the media format key name.|
**Required Permissions**:

  * None 


For example, use MLMediaFormat_Key_Duration key to get duration of a track.





-----------

### MLMediaFormatGetKeyValueFloat {#mlresult-mlmediaformatgetkeyvaluefloat}

```cpp
MLResult MLMediaFormatGetKeyValueFloat(
    MLHandle handle,
    MLMediaFormatKey name,
    float * out_key
)
```

Obtain the value of an float key. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| float * |out_key|Value of the key.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If name is not one of the media format key name.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatGetKeySize {#mlresult-mlmediaformatgetkeysize}

```cpp
MLResult MLMediaFormatGetKeySize(
    MLHandle handle,
    MLMediaFormatKey name,
    size_t * out_size
)
```

Obtain the size of a key. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| size_t * |out_size|Size of the key.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If name is not one of the media format key name.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatGetKeyString {#mlresult-mlmediaformatgetkeystring}

```cpp
MLResult MLMediaFormatGetKeyString(
    MLHandle handle,
    MLMediaFormatKey name,
    char * out_string
)
```

Obtain the value of a string key. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| char * |out_string|Pointer to the C-string representation of the string key.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If name is not one of the media format key name.|
**Required Permissions**:

  * None 


User shall allocate at least [MAX_KEY_STRING_SIZE](/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-key-string-size) bytes of memory for storing the output key string.





-----------

### MLMediaFormatGetKeyByteBuffer {#mlresult-mlmediaformatgetkeybytebuffer}

```cpp
MLResult MLMediaFormatGetKeyByteBuffer(
    MLHandle handle,
    MLMediaFormatKey name,
    MLMediaFormatByteArray * out_buffer
)
```

Obtain the value of a ByteBuffer key. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) * |out_buffer|Pointer to byte buffer that needs to be allocated and copied to. To free/release, call [MLMediaFormatKeyByteBufferRelease()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatkeybytebufferrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If name is not one of the media format key name.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatKeyByteBufferRelease {#mlresult-mlmediaformatkeybytebufferrelease}

```cpp
MLResult MLMediaFormatKeyByteBufferRelease(
    MLHandle handle,
    MLMediaFormatByteArray * buffer
)
```

Release the ByteBuffer acquired by MLMediaFormatGetKeyByteBuffer. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) * |buffer|Byte buffer that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatSetKeyInt32 {#mlresult-mlmediaformatsetkeyint32}

```cpp
MLResult MLMediaFormatSetKeyInt32(
    MLHandle handle,
    MLMediaFormatKey name,
    int32_t key_value
)
```

Set the value of an integer key. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| int32_t |key_value|Key value.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatSetKeyInt64 {#mlresult-mlmediaformatsetkeyint64}

```cpp
MLResult MLMediaFormatSetKeyInt64(
    MLHandle handle,
    MLMediaFormatKey name,
    int64_t key_value
)
```

Set the value of a long key. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| int64_t |key_value|Key value.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatSetKeyFloat {#mlresult-mlmediaformatsetkeyfloat}

```cpp
MLResult MLMediaFormatSetKeyFloat(
    MLHandle handle,
    MLMediaFormatKey name,
    float key_value
)
```

Set the value of a float key. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| float |key_value|Key value.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatSetKeySize {#mlresult-mlmediaformatsetkeysize}

```cpp
MLResult MLMediaFormatSetKeySize(
    MLHandle handle,
    MLMediaFormatKey name,
    size_t key_size
)
```

Set the size of a key. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| size_t |key_size|Key size.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatSetKeyString {#mlresult-mlmediaformatsetkeystring}

```cpp
MLResult MLMediaFormatSetKeyString(
    MLHandle handle,
    MLMediaFormatKey name,
    const char * key_value
)
```

Set the value of a string key. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| const char * |key_value|C-string representation of key value.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaFormatSetKeyByteBuffer {#mlresult-mlmediaformatsetkeybytebuffer}

```cpp
MLResult MLMediaFormatSetKeyByteBuffer(
    MLHandle handle,
    MLMediaFormatKey name,
    const MLMediaFormatByteArray * buffer
)
```

Set the value of a ByteBuffer key. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| const [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) * |buffer|Pointer to the data buffer for the corresponding key.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaMuxerSampleDataInit {#void-mlmediamuxersampledatainit}

```cpp
static inline void MLMediaMuxerSampleDataInit(
    MLMediaMuxerSampleData * inout_sampledata
)
```

Initializes [MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) * |inout_sampledata|SampleData defined by [MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) that needs to be initialized. |




-----------

### MLMediaMuxerCreate {#mlresult-mlmediamuxercreate}

```cpp
MLResult MLMediaMuxerCreate(
    MLHandle * out_handle
)
```

Create a MLMediaMuxer instance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Upon successful return will point to handle to the created MLMediaMuxer. Or else, it will point to [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|MLMediaMuxer object creation failed with resource allocation failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaMuxer object was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaMuxerRelease {#mlresult-mlmediamuxerrelease}

```cpp
MLResult MLMediaMuxerRelease(
    MLHandle media_muxer
)
```

Release the MLMediaMuxer instance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaMuxer object was released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaMuxerGetSupportedOutputFormats {#mlresult-mlmediamuxergetsupportedoutputformats}

```cpp
MLResult MLMediaMuxerGetSupportedOutputFormats(
    MLHandle media_muxer,
    const MLMediaMuxerOutputFormat * out_format_list[],
    size_t * out_format_list_size
)
```

Get a list of all the supported Media Muxer Output Formats on the Platform. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance. |
| const [MLMediaMuxerOutputFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat) * |out_format_list|Pointer to MLMediaMuxerOutputFormat. This should not be NULL. |
| size_t * |out_format_list_size|The size of the returned out_format_list. This should not be NULL.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of the parameters are invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully retrieved all the supported Output Formats. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User doesn't own the memory/buffer returned from this API and MUST NOT be freeing or releasing the out_format_list.




**API Level:**
  * 20




-----------

### MLMediaMuxerGetSupportedMimes {#mlresult-mlmediamuxergetsupportedmimes}

```cpp
MLResult MLMediaMuxerGetSupportedMimes(
    MLHandle media_muxer,
    MLMediaMuxerOutputFormat format,
    const char *const * out_mime_list[],
    size_t * out_mime_list_size
)
```

Get a list of all the supported mime-types for a given Media Muxer Output Format on the Platform. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance. |
| [MLMediaMuxerOutputFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat) |format|The Output format, to which we would like to know all the supported mime-types. The format should be one returned from [MLMediaMuxerGetSupportedOutputFormats](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedoutputformats). |
| const char *const * |out_mime_list|Pointer to array of mime-type (char array). This should not be NULL. |
| size_t * |out_mime_list_size|The size of the returned out_mime_list. This should not be NULL.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully retrieved all the supported Output Formats. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User doesn't own the memory/buffer returned from this API and MUST NOT be freeing or releasing the out_mime_list.




**API Level:**
  * 20




-----------

### MLMediaMuxerConfigure {#mlresult-mlmediamuxerconfigure}

```cpp
MLResult MLMediaMuxerConfigure(
    MLHandle media_muxer,
    MLMediaMuxerOutputFormat format,
    const char * path
)
```

Configure the MLMediaMuxer for a given Output format with output path. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance. |
| [MLMediaMuxerOutputFormat](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediamuxeroutputformat) |format|The format of the muxed output media file. The format should be one returned from [MLMediaMuxerGetSupportedOutputFormats](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedoutputformats). |
| const char * |path|The linux-style path for the output media file. This value cannot be empty or NULL.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed to configure the MLMediaMuxer object with resource allocation failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLMediaMuxer object was configured successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaResult_Unsupported|If the format is not supported.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLMediaMuxerAddTrack {#mlresult-mlmediamuxeraddtrack}

```cpp
MLResult MLMediaMuxerAddTrack(
    MLHandle media_muxer,
    MLHandle media_format,
    size_t * out_track_index
)
```

Add a track with given format information. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_format|Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not. |
| size_t * |out_track_index||
This should be called before [MLMediaMuxerStart()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstart) and after [MLMediaMuxerConfigure](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerconfigure).

The following media format keys are supported for Audio/Video and Metadata tracks.



------------------


# | Audio Track                     | Video Track                       | Metadata Track         |

| MLMediaFormat_Key_Mime | MLMediaFormat_Key_Mime | MLMediaFormat_Key_Mime | | MLMediaFormat_Key_Sample_Rate | MLMediaFormat_Key_Width | | | MLMediaFormat_Key_Channel_Count | MLMediaFormat_Key_Height | | | MLMediaFormat_Key_CSD0 | MLMediaFormat_Key_Bt_Rate | | | MLMediaFormat_Key_CSD1 | MLMediaFormat_Key_Frame_Rate | | | | MLMediaFormat_Key_Color_Range | | | | MLMediaFormat_Key_Color_Standard | | | | MLMediaFormat_Key_Color_Transfer | | | | MLMediaFormat_Key_HDR_Static_Info | | | | MLMediaFormat_Key_CSD0 | | 


# |                                 | MLMediaFormat_Key_CSD1            |                        |

[MLMediaMuxerGetSupportedMimes](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxergetsupportedmimes) can be used to query for all the supported MLMediaFormat_Key_Mime for a given Output Format.

While MLMediaFormat_Key_Mime is must for all tracks, some of the keys aren't mandatory. For Audio track, MLMediaFormat_Key_SAMPLE_RATE and MLMediaFormat_Key_CHANNEL_COUNT is must. For Video track, MLMediaFormat_Key_WIDTH anb MLMediaFormat_Key_HEIGHT are must.

Requierment of providing csd (Codec Specific Data) through MediaFormat is optional for some audio/video mimes where as it is mandatory for some other ones (for example vorbis).

With mp4 container following audio/video and metadata mime types can be supported.



------------------


# | Audio Mimes      | Video Mimes     | Metadata Mimes         |

| audio/3gpp | video/3gpp | application/ | | audio/mp4a-latm | video/mp4v-es | image/vnd.android.heic | | audio/amr-wb | video/avc | | 


# |                  | video/hevc      |                        |

With Webm container following audio/video mime types can be supported.



------------------


# | Audio Mimes      | Video Mimes           |

| audio/vorbis | video/x-vnd.on2.vp8 | 


# | audio/opus       | video/x-vnd.on2.vp9   |

With Ogg container, only supported mime is "audio/opus".

If a mime passed through the MLMediaFormat is not supported, it will return MLMediaResult_Unsupported.

API Level:\n 20

media_muxerHandle to the MLMediaMuxer instance. 

media_format[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat that contains the track's format. 

out_track_indexUpon successful return, this will conatin the index of the track added.

MLResult_InvalidParamOne of the parameters is invalid. 

MLResult_OkIf the operation completes successfully. 

MLResult_UnspecifiedFailureThe operation failed with an unspecified error. 

MLMediaGenericResult_InvalidOperationThe operation is invalid. 

MLMediaResult_UnsupportedIf one of the keys in the format is not supported.

Required PermissionsNone 





-----------

### MLMediaMuxerSetOrientationHint {#mlresult-mlmediamuxersetorientationhint}

```cpp
MLResult MLMediaMuxerSetOrientationHint(
    MLHandle media_muxer,
    int32_t degrees
)
```

Set the orientation hint for output video playback. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance. |
| int32_t |degrees|The rotation degrees. It has to be either 0, 90, 180 or 270.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the operation completes successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|The operation is invalid.|
**Required Permissions**:

  * None 


This should be called before [MLMediaMuxerStart()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstart) and after [MLMediaMuxerConfigure](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerconfigure).

Calling this method will not rotate the video frame when muxer is generating the file, but add a composition matrix containing the rotation angle in the output video if the output format is MLMediaMuxerOutputFormat_MPEG4 so that a video player can choose the proper orientation for playback.

Note that some video players may choose to ignore the composition matrix in a video during playback. By default, the rotation degree is 0.




**API Level:**
  * 20




-----------

### MLMediaMuxerSetLocation {#mlresult-mlmediamuxersetlocation}

```cpp
MLResult MLMediaMuxerSetLocation(
    MLHandle media_muxer,
    float latitude,
    float longitude
)
```

Set and store the geodata (latitude and longitude) in the output file. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance. |
| float |latitude|The latitude in degree. Its value must be in the range [-90, 90]. |
| float |longitude|The longitude in degree. Its value must be in the range [-180, 180].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the operation completes successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|The operation is invalid.|
**Required Permissions**:

  * None 


This should be called before [MLMediaMuxerStart()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerstart) and after [MLMediaMuxerConfigure](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxerconfigure).

The geodata is stored in udta box if the output format is MLMediaMuxerOutputFormat_MPEG4, and is ignored for other output formats. The geodata is stored according to ISO-6709 standard.




**API Level:**
  * 20




-----------

### MLMediaMuxerStart {#mlresult-mlmediamuxerstart}

```cpp
MLResult MLMediaMuxerStart(
    MLHandle media_muxer
)
```

Start muxing. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the operation completes successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|The operation is invalid.|
**Required Permissions**:

  * None 


Make sure all the tracks have been added ([MLMediaMuxerAddTrack](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediamuxeraddtrack)) before calling this.




**API Level:**
  * 20




-----------

### MLMediaMuxerWriteSampleData {#mlresult-mlmediamuxerwritesampledata}

```cpp
MLResult MLMediaMuxerWriteSampleData(
    MLHandle media_muxer,
    const MLMediaMuxerSampleData * data
)
```

Writes an encoded sample into the muxer. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance. |
| const [MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) * |data|The sample data to be written encapsulated in [MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the operation completes successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|The operation is invalid.|
**Required Permissions**:

  * None 


The application needs to make sure that the samples are written into the right tracks. Also, it needs to make sure the samples for each track are written in chronological order (e.g. in the order they are provided by the encoder).

For MPEG4 media format, the duration of the last sample in a track can be set by passing an additional empty buffer) with [MLMediaCodecBufferFlag_EOS](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbufferflag-eos) flag and a suitable presentation timestamp set in time_us (of [MLMediaMuxerSampleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_muxer_sample_data.md) structure) as the last sample of that track. This last sample's presentation timestamp shall be a sum of the presentation timestamp and the duration preferred for the original last sample. If no explicit END_OF_STREAM sample was passed, then the duration of the last sample would be the same as that of the sample before that.

The buffer can be reused once this method returns.




**API Level:**
  * 20




-----------

### MLMediaMuxerStop {#mlresult-mlmediamuxerstop}

```cpp
MLResult MLMediaMuxerStop(
    MLHandle media_muxer
)
```

Stop muxing. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_muxer|Handle to the MLMediaMuxer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If the operation completes successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|The operation is invalid.|
**Required Permissions**:

  * None 


Once the muxer stops, it can not be restarted.




**API Level:**
  * 20




-----------

### MLMediaPlayerEventCallbacksExInit {#void-mlmediaplayereventcallbacksexinit}

```cpp
static inline void MLMediaPlayerEventCallbacksExInit(
    MLMediaPlayerEventCallbacksEx * inout_callbacks
)
```

Initializes MediaPlayerEventCallbacks with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaPlayerEventCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md) * |inout_callbacks|Media Player Callback structure defined by [MLMediaPlayerEventCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md) that needs to be initialized. |




-----------

### MLMediaPlayerTrackInfoInit {#void-mlmediaplayertrackinfoinit}

```cpp
static inline void MLMediaPlayerTrackInfoInit(
    MLMediaPlayerTrackInfo * inout_track_info
)
```

Initializes Media Track Information with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaPlayerTrackInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_info.md) * |inout_track_info|Media track information defined by [MLMediaPlayerTrackInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_info.md) that needs to be initialized. |




-----------

### MLMediaPlayerTrackDRMSessionInfoInit {#void-mlmediaplayertrackdrmsessioninfoinit}

```cpp
static inline void MLMediaPlayerTrackDRMSessionInfoInit(
    MLMediaPlayerTrackDRMSessionInfo * inout_drm_session_info
)
```

Initializes Media Track DRM Session Information with defult values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaPlayerTrackDRMSessionInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md) * |inout_drm_session_info|Media track DRM Session information defined by [MLMediaPlayerTrackDRMSessionInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md) that needs to be initialized. |




-----------

### MLMediaPlayerCreate {#mlresult-mlmediaplayercreate}

```cpp
MLResult MLMediaPlayerCreate(
    MLHandle * out_handle
)
```

Create a new [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|The [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the new [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) object created. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created MediaPlayer. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 




:::note
This is a blocking sync method. As creating a MediaPlayer object might take some time, make sure to _not_ call this API from your main UI thread.
:::



-----------

### MLMediaPlayerDestroy {#mlresult-mlmediaplayerdestroy}

```cpp
MLResult MLMediaPlayerDestroy(
    MLHandle media_player
)
```

Destroys a MediaPlayer object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) object to destroy.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed MediaPlayer. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 




:::note
This is a blocking sync method. As destroying a MediaPlayer object might take some time, make sure to _not_ call this API from your main UI thread.
:::



-----------

### MLMediaPlayerSetDataSourceForFD {#mlresult-mlmediaplayersetdatasourceforfd}

```cpp
MLResult MLMediaPlayerSetDataSourceForFD(
    MLHandle media_player,
    int32_t fd
)
```

Sets a file descriptor as the data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| int32_t |fd|The file descriptor for the file you want to play.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set file descriptor. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


The file descriptor must be seekable. It is the caller's responsibility to close the file descriptor. It is safe to do so as soon as this call returns.





-----------

### MLMediaPlayerSetOffsetDataSourceForFD {#mlresult-mlmediaplayersetoffsetdatasourceforfd}

```cpp
MLResult MLMediaPlayerSetOffsetDataSourceForFD(
    MLHandle media_player,
    int32_t fd,
    int64_t offset,
    int64_t length
)
```

Sets a file descriptor as the data source with offset. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| int32_t |fd|The file descriptor for the file you want to play. |
| int64_t |offset|The offset (in bytes) of the source's start. |
| int64_t |length|The number of bytes of media to load after offset.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set file descriptor. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


The file descriptor must be seekable. It is the caller's responsibility to close the file descriptor. It is safe to do so as soon as this call returns. This API is useful for specifying playable media located in resource files.





-----------

### MLMediaPlayerSetDataSourceForPath {#mlresult-mlmediaplayersetdatasourceforpath}

```cpp
MLResult MLMediaPlayerSetDataSourceForPath(
    MLHandle media_player,
    const char * path
)
```

Sets a local file path as the data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| const char * |path|The linux-style path of the file.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set local file path. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


The path should be an absolute path and should reference a world-readable file.





-----------

### MLMediaPlayerSetDataSourceForURI {#mlresult-mlmediaplayersetdatasourceforuri}

```cpp
MLResult MLMediaPlayerSetDataSourceForURI(
    MLHandle media_player,
    const char * uri
)
```

Sets a URI string as the data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| const char * |uri|The C-style string representing the URI complete string.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set URI string. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Failed due to lack of permission. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * android.permission.INTERNET (protection level: normal) 


Supported URI schemes are `file`, `http`, `https`, and `rtsp`. If looking to provide headers, use [MLMediaPlayerSetRemoteDataSourceForURI()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayersetremotedatasourceforuri).





-----------

### MLMediaPlayerSetRemoteDataSourceForURI {#mlresult-mlmediaplayersetremotedatasourceforuri}

```cpp
MLResult MLMediaPlayerSetRemoteDataSourceForURI(
    MLHandle media_player,
    const char * uri,
    char ** headers,
    size_t len
)
```

Sets a URI string as the remote data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| const char * |uri|The C-style string representing the complete URL. |
| char ** |headers|Array of char * headers to be sent. |
| size_t |len|Number of headers passed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set URI string. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Failed due to lack of permission. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * android.permission.INTERNET (protection level: normal) 


Supported URI schemes are `file`, `http`, `https`, and `rtsp`.





-----------

### MLMediaPlayerSetMediaDataSource {#mlresult-mlmediaplayersetmediadatasource}

```cpp
MLResult MLMediaPlayerSetMediaDataSource(
    MLHandle media_player,
    MLHandle media_data_source
)
```

Sets the data source to use. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_data_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) returned by [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set the data source to use. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|Failed because no valid source could be found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerSetMediaStreamSource {#mlresult-mlmediaplayersetmediastreamsource}

```cpp
MLResult MLMediaPlayerSetMediaStreamSource(
    MLHandle media_player,
    MLHandle media_stream_source
)
```

Sets the data source to use. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_stream_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) returned by [MLMediaStreamSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set the data source to use. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|Failed because no valid source could be found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerAddTimedTextSourceForURI {#mlresult-mlmediaplayeraddtimedtextsourceforuri}

```cpp
MLResult MLMediaPlayerAddTimedTextSourceForURI(
    MLHandle media_player,
    const char * uri,
    const char * mime_type
)
```

Adds a TimedText source from a URI. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| const char * |uri|The C-style string representing the complete URI. |
| const char * |mime_type|The MIME type of the file.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully added TimedText source from URI. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerAddTimedTextSourceForFD {#mlresult-mlmediaplayeraddtimedtextsourceforfd}

```cpp
MLResult MLMediaPlayerAddTimedTextSourceForFD(
    MLHandle media_player,
    int32_t fd,
    int64_t offset,
    int64_t length,
    const char * mime_type
)
```

Adds a TimedText source from a file descriptor. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| int32_t |fd|The file descriptor for the timed text source. |
| int64_t |offset|The offset (in bytes) of the source's start. Must be >= 0. |
| int64_t |length|The number of bytes of media to load after offset. Must be >= 0. |
| const char * |mime_type|The MIME type of the file.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully added TimedText source from file descriptor. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


The file descriptor must be seekable. It is the caller's responsibility to close the file descriptor. It is safe to do so as soon as this call returns.





-----------

### MLMediaPlayerSetNextPlayer {#mlresult-mlmediaplayersetnextplayer}

```cpp
MLResult MLMediaPlayerSetNextPlayer(
    MLHandle media_player,
    MLHandle next_media_player
)
```

Sets the 'next' [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) to automatically 'start' when current [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) playback completes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |next_media_player|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) of an already created [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) instance. To 'remove' the next player, set next_media_player = 0.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully registered next [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|Failed source because no valid source could be found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetTrackCount {#mlresult-mlmediaplayergettrackcount}

```cpp
MLResult MLMediaPlayerGetTrackCount(
    MLHandle media_player,
    uint32_t * out_track_count
)
```

Counts the number of tracks found in the data source. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| uint32_t * |out_track_count|The number of tracks found in the player source.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the number of tracks. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetTrackType {#mlresult-mlmediaplayergettracktype}

```cpp
MLResult MLMediaPlayerGetTrackType(
    MLHandle media_player,
    uint32_t track,
    MLMediaPlayerTrackType * out_track_type
)
```

Gets the type of a track. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| uint32_t |track|The track number for which type is to be returned. Has to be < TrackCount. |
| [MLMediaPlayerTrackType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayertracktype) * |out_track_type|The returned type for specified track number.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned type for passed track. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|Found track's type was unknown. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetTrackLanguage {#mlresult-mlmediaplayergettracklanguage}

```cpp
MLResult MLMediaPlayerGetTrackLanguage(
    MLHandle media_player,
    uint32_t track,
    char ** out_track_language
)
```

Gets the language of a track. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| uint32_t |track|The track number for which language is to be returned. Has to be < TrackCount. |
| char ** |out_track_language|The returned language of the track. Caller has ownership of that param and has to free it when no longer needed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned language for passed track. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetTrackMediaFormat {#mlresult-mlmediaplayergettrackmediaformat}

```cpp
MLResult MLMediaPlayerGetTrackMediaFormat(
    MLHandle media_player,
    uint32_t track,
    MLHandle * out_media_format
)
```

Gets the Media Format of a track. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| uint32_t |track|The track number for which Media Format is to be returned. Has to be < TrackCount. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_media_format|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to MediaFormat of the track. Caller has ownership of this handle and should call [MLMediaFormatDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatdestroy) to free it when no longer needed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully retreived the media format of passed track. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 





**API Level:**
  * 2




-----------

### MLMediaPlayerSelectTrack {#mlresult-mlmediaplayerselecttrack}

```cpp
MLResult MLMediaPlayerSelectTrack(
    MLHandle media_player,
    uint32_t track
)
```

Selects a track. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| uint32_t |track|Number of the track to select. Has to be < TrackCount.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully selected track. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerUnselectTrack {#mlresult-mlmediaplayerunselecttrack}

```cpp
MLResult MLMediaPlayerUnselectTrack(
    MLHandle media_player,
    uint32_t track
)
```

Unselects a track. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| uint32_t |track|Number of the track to unselect. Has to be < TrackCount.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully unselected track. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerPrepare {#mlresult-mlmediaplayerprepare}

```cpp
MLResult MLMediaPlayerPrepare(
    MLHandle media_player
)
```

Prepares the player for playback, synchronously. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully prepared the player. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. Can only be called after one of the setDataSource methods or in the 'stopped' state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaResult_CannotConnect|Failed becaue MediaPlayer could not connect with the given URL.|
**Required Permissions**:

  * None 


After setting the data source and the #GraphicBufferProducer, you need to either call prepare() or prepareAsync(). For files, it is OK to call prepare(), which blocks until [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) is ready for playback.





-----------

### MLMediaPlayerPrepareAsync {#mlresult-mlmediaplayerprepareasync}

```cpp
MLResult MLMediaPlayerPrepareAsync(
    MLHandle media_player
)
```

Prepares the player for playback, asynchronously. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully prepared the player asynchronously. For result, poll for MLMediaPlayerPollingStateFlag_HasBeenPrepared state or wait for 'on_prepared' callback if already set. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. Can only be called after one of the setDataSource methods or in the 'stopped' state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


After setting the data's source and the #GraphicBufferProducer, you need to either call prepare() or prepareAsync(). For streams, you should call prepareAsync(), which returns immediately, rather than blocking until enough data has been buffered. Prepared state will then be obtained via the 'on_prepared' callback if already registered (see MLMediaPlayerSetEventCallbacksEx), or polled for via the [MLMediaPlayerPollStates()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpollstates) call with the MLMediaPlayerPollingStateFlag_HasBeenPrepared flag set.





-----------

### MLMediaPlayerStart {#mlresult-mlmediaplayerstart}

```cpp
MLResult MLMediaPlayerStart(
    MLHandle media_player
)
```

Starts or resumes playback. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully started/resumed playback. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. Can only be called in one of the following states: 'prepared', 'playback complete', 'paused', 'stopped'. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


If playback had previously been paused, playback will continue from where it was paused. If playback had been stopped, or never started before, playback will start at the beginning.





-----------

### MLMediaPlayerStop {#mlresult-mlmediaplayerstop}

```cpp
MLResult MLMediaPlayerStop(
    MLHandle media_player
)
```

Stops playback after playback has been started or paused. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully stopped playback. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. Can only be called in one of the following states: 'playing', 'paused', 'stopped', 'prepared', 'playback complete'. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerPause {#mlresult-mlmediaplayerpause}

```cpp
MLResult MLMediaPlayerPause(
    MLHandle media_player
)
```

Pauses playback. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully paused playback. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. Can only be called in one of the following states: 'playing', 'paused', 'playback complete'. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


Calling pause() is a NOOP if [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) is in state #MEDIA_PLAYER_PAUSED or #MEDIA_PLAYER_PLAYBACK_COMPLETE.





-----------

### MLMediaPlayerReset {#mlresult-mlmediaplayerreset}

```cpp
MLResult MLMediaPlayerReset(
    MLHandle media_player
)
```

Resets the [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) to its uninitialized state. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully reset MediaPlayer. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. This method can be called anytime except when in 'preparing async'. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


After calling this method, you will have to initialize it again by setting the data source and calling prepare().



:::note
This is a blocking sync method, make sure to _not_ call this API from your main UI thread.
:::



-----------

### MLMediaPlayerSeekTo {#mlresult-mlmediaplayerseekto}

```cpp
MLResult MLMediaPlayerSeekTo(
    MLHandle media_player,
    int msec,
    MLMediaSeekMode mode
)
```

Seeks to specified time position. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| int |msec|The offset in milliseconds from the start, to seek to. |
| [MLMediaSeekMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode) |mode|Seek mode defined by MLMediaSeekMode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully launched seek operation asynchronously. For result, poll for MLMediaPlayerPollingStateFlag_HasSeekCompleted state or wait for the 'on_seek_complete' callback if already set. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. This method can only be called from the following states: 'started', 'prepared', 'paused' and 'playback complete'. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


Note that SeekTo is an async. function and returns immediately. Successful seek result has to be obtained either via the 'on_seek_complete' if already registered (see MLMediaPlayerSetEventCallbacksEx) or by polling for the flag 'MLMediaPlayerPollingStateFlag_HasSeekCompleted' when calling [MLMediaPlayerPollStates()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpollstates).





-----------

### MLMediaPlayerSetEventCallbacksEx {#mlresult-mlmediaplayerseteventcallbacksex}

```cpp
MLResult MLMediaPlayerSetEventCallbacksEx(
    MLHandle media_player,
    const MLMediaPlayerEventCallbacksEx * callbacks,
    void * data
)
```

Sets callbacks to notify clients about player events. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MediaCodec. |
| const [MLMediaPlayerEventCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md) * |callbacks|Set of event callbacks. Can be set to NULL to unset the callbacks altogether. |
| void * |data|Custom data to be returned when any callback is fired.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set/unset the specified callbacks. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 


This structure must be initialized by calling [MLMediaPlayerEventCallbacksExInit()](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayereventcallbacksexinit) before use.

Client needs to implement the callback functions declared in [MLMediaPlayerEventCallbacksEx](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md), but can set to NULL the ones he does not care about.




**API Level:**
  * 2




-----------

### MLMediaPlayerGetVideoSize {#mlresult-mlmediaplayergetvideosize}

```cpp
MLResult MLMediaPlayerGetVideoSize(
    MLHandle media_player,
    int32_t * out_width,
    int32_t * out_height
)
```

Returns the size of the video frame. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| int32_t * |out_width|The returned video width. |
| int32_t * |out_height|The returned video height.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned video size. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetCurrentPosition {#mlresult-mlmediaplayergetcurrentposition}

```cpp
MLResult MLMediaPlayerGetCurrentPosition(
    MLHandle media_player,
    int32_t * out_msec
)
```

Returns current position of playback. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| int32_t * |out_msec|The returned position in milliseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned current position. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetDuration {#mlresult-mlmediaplayergetduration}

```cpp
MLResult MLMediaPlayerGetDuration(
    MLHandle media_player,
    int32_t * out_msec
)
```

Returns media duration. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| int32_t * |out_msec|The returned duration in milliseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the media duration. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. This method can only be called from the following states: 'prepared', 'started', 'paused', 'stopped' and 'playback complete'. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetBufferingUpdate {#mlresult-mlmediaplayergetbufferingupdate}

```cpp
MLResult MLMediaPlayerGetBufferingUpdate(
    MLHandle media_player,
    int32_t * out_percentage
)
```

Returns current buffering percentage. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| int32_t * |out_percentage|The returned buffering percentage in the range [0, 100].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned current buffering percentage. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetInfo {#mlresult-mlmediaplayergetinfo}

```cpp
MLResult MLMediaPlayerGetInfo(
    MLHandle media_player,
    int32_t * out_code,
    int32_t * out_extra
)
```

Returns last info received by internal [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| int32_t * |out_code|The main info code. |
| int32_t * |out_extra|The secondary code/data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the last MediaPlayer. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetError {#mlresult-mlmediaplayergeterror}

```cpp
MLResult MLMediaPlayerGetError(
    MLHandle media_player,
    MLResult * out_result
)
```

Returns last error received by internal [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) * |out_result|The result code.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the last MediaPlayer error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetTimedText {#mlresult-mlmediaplayergettimedtext}

```cpp
MLResult MLMediaPlayerGetTimedText(
    MLHandle media_player,
    const char ** out_text,
    int32_t * out_start,
    int32_t * out_end
)
```

Returns last timed text event information. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| const char ** |out_text|The text of the timed text event. |
| int32_t * |out_start|The start time. |
| int32_t * |out_end|The end time.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the last timedtext entry. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetSubtitleEx {#mlresult-mlmediaplayergetsubtitleex}

```cpp
MLResult MLMediaPlayerGetSubtitleEx(
    MLHandle media_player,
    MLMediaPlayerSubtitleData ** out_subtitle_data
)
```

Returns last subtitle event information. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md) ** |out_subtitle_data|The returned MLMediaPlayerGetSubtitleExArgs pointer.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the last subtitle entry. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 





**API Level:**
  * 2




-----------

### MLMediaPlayerReleaseSubtitleEx {#mlresult-mlmediaplayerreleasesubtitleex}

```cpp
MLResult MLMediaPlayerReleaseSubtitleEx(
    MLHandle media_player
)
```

Releases last subtitle event information. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released the last subtitle entry. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 





**API Level:**
  * 2




-----------

### MLMediaPlayerSetOnMediaSubtitleUpdateCallback {#mlresult-mlmediaplayersetonmediasubtitleupdatecallback}

```cpp
MLResult MLMediaPlayerSetOnMediaSubtitleUpdateCallback(
    MLHandle media_player,
    MLMediaPlayerOnMediaSubtitleUpdateCallback on_media_subtitle_callback,
    void * data
)
```

Sets callback to get notified when a subtitle update is available along with its data. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLMediaPlayerOnMediaSubtitleUpdateCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayeronmediasubtitleupdatecallback) |on_media_subtitle_callback|Function pointer to be called. This can be 'NULL' to unset the callback. See [MLMediaPlayerOnMediaSubtitleUpdateCallback()](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayeronmediasubtitleupdatecallback) callback typedef declaration and comments for explanation on expected callback parameters. |
| void * |data|Custom data to be returned when callback is fired.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set callback. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 



Setting this callback disables use of the poll-based API to query for the [MLMediaPlayerPollingStateFlag_HasSubtitleUpdated](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hassubtitleupdated) flag. [MLMediaPlayerPollStates()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpollstates) will ignore checks for this bit.

This also makes [MLMediaPlayerGetSubtitleEx()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetsubtitleex) redundant as the subtitle data is provided with the callback.




**API Level:**
  * 4




-----------

### MLMediaPlayerGetMetadata {#mlresult-mlmediaplayergetmetadata}

```cpp
MLResult MLMediaPlayerGetMetadata(
    MLHandle media_player,
    int64_t * out_time,
    int32_t * out_size,
    uint8_t ** out_buffer
)
```

Returns last metadata event information. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| int64_t * |out_time|The returned event time. |
| int32_t * |out_size|The returned event buffer size. |
| uint8_t ** |out_buffer|The returned event buffer. This buffer is only valid until the next metadata event arrives, so make a copy if you need to use the buffer later.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned last metadata entry. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerSetVideoScalingMode {#mlresult-mlmediaplayersetvideoscalingmode}

```cpp
MLResult MLMediaPlayerSetVideoScalingMode(
    MLHandle media_player,
    MLMediaPlayerVideoScalingMode mode
)
```

Sets video scaling mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|MLHandle to the MediaPlayer instance. |
| [MLMediaPlayerVideoScalingMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayervideoscalingmode) |mode|The video scaling mode to set. For a list of valid values, see #media_video_scaling_mode_type declaration.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned current video scaling mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. SetDataSource must be called immediately after creation, or after a media player reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerSetLooping {#mlresult-mlmediaplayersetlooping}

```cpp
MLResult MLMediaPlayerSetLooping(
    MLHandle media_player,
    bool loop
)
```

Sets the looping mode of the player. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| bool |loop|The looping mode. Set to true if player should loop to beginning of MediaPlayer when EOS reached. Set to false if MediaPlayer should simply stop playback at end of media.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned current looping mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerSetVolume {#mlresult-mlmediaplayersetvolume}

```cpp
MLResult MLMediaPlayerSetVolume(
    MLHandle media_player,
    float volume
)
```

Sets the volume on this player. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| float |volume|The new volume in the [0.0, 1.0] range.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set the volume. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetAudioHandle {#mlresult-mlmediaplayergetaudiohandle}

```cpp
MLResult MLMediaPlayerGetAudioHandle(
    MLHandle media_player,
    MLHandle * out_handle
)
```

Gets the handle of the audio stream. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|The [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the returned Audio handle. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_NotImplemented|If used in versions starting 1.2.0 or later.|
**Required Permissions**:

  * None 




:::caution Deprecated
Unsupported since 1.2.0. Scheduled for removal. 
:::



-----------

### MLMediaPlayerPollStates {#mlresult-mlmediaplayerpollstates}

```cpp
MLResult MLMediaPlayerPollStates(
    MLHandle media_player,
    uint16_t mask,
    uint16_t * out_polled_states
)
```

Polls the desired states from internal [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| uint16_t |mask|Selection mask for picking which states to retrieve. |
| uint16_t * |out_polled_states|Bitwise OR'ed integer of all the chosen states from bitwise 'mask' and in the range [0 = false : 1 = true].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully polled and returned the selected states. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 


Desired states have to be selected by passing a bitwise OR'ed mask of [MLMediaPlayerPollingStateFlags](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflags) flags.

The "is_XXX" states can be polled multiples times and the return value will be the same if internal state hasn't changed since last call.

When polling the "has_XXX" states however, internal state is set to false, since they mean : has `<state>` happened/changed since I last polled `<state>`.

Two-step state polling : The following states, when returning '1', indicate there is some data ready to be retrieved, by calling a getter function, as explained below.

For '#MLMediaPlayerPollingState_HasSizeChanged', call [MLMediaPlayerGetVideoSize()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetvideosize) to get the new size.

For '#MLMediaPlayerPollingState_HasBufferingUpdated', call [MLMediaPlayerGetBufferingUpdate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergetbufferingupdate) to get buffering progress value.

For '#MLMediaPlayerPollingState_HasReceivedInfo, call [MLMediaPlayerGetError()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergeterror) to get last info code and data.

For '#MLMediaPlayerPollingState_HasReceivedError, call [MLMediaPlayerGetError()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayergeterror) to get last error code and data.

Note: This API can still be used even if an #OnBufferAvailable callback has been set using MLMediaPlayerSetOnBufferAvailableCallback() method.





-----------

### MLMediaPlayerGetTrackDRMInfo {#mlresult-mlmediaplayergettrackdrminfo}

```cpp
MLResult MLMediaPlayerGetTrackDRMInfo(
    MLHandle media_player,
    const MLMediaPlayerTrackInfo * track_info,
    MLMediaPlayerTrackDRMInfo ** out_drm_info
)
```

Gets the DRM info of the selected media (either audio or video) track. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| const [MLMediaPlayerTrackInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_info.md) * |track_info|Media track information defined by [MLMediaPlayerTrackInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_info.md). |
| [MLMediaPlayerTrackDRMInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md) ** |out_drm_info|Pointer to the pointer to [MLMediaPlayerTrackDRMInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_info.md) struct. The caller should not free the pointer returned. The memory will be released in the call to [MLMediaPlayerReleaseDRM()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerreleasedrm).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned the current DRM Info. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|Media Source is not prepared yet. Wait for on_prepared callback and call again. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NotAvailable|DRM Information not available for the given track.|
**Required Permissions**:

  * None 


This function has to be called only after DataSource has been set and the MediaPlayer is completely prepared.




**API Level:**
  * 2




-----------

### MLMediaPlayerPrepareTrackDRM {#mlresult-mlmediaplayerpreparetrackdrm}

```cpp
MLResult MLMediaPlayerPrepareTrackDRM(
    MLHandle media_player,
    const MLMediaPlayerTrackDRMSessionInfo * drm_session_info
)
```

Prepares DRM for the selected media (either audio or video) track. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| const [MLMediaPlayerTrackDRMSessionInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md) * |drm_session_info|DRM Session info for the Media track, as defined by [MLMediaPlayerTrackDRMSessionInfo](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_track_d_r_m_session_info.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully prepared DRM. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 





**API Level:**
  * 2




-----------

### MLMediaPlayerReleaseDRM {#mlresult-mlmediaplayerreleasedrm}

```cpp
MLResult MLMediaPlayerReleaseDRM(
    MLHandle media_player
)
```

Releases DRM. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released DRM. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 






-----------

### MLMediaPlayerGetDefaultBufferingSettings {#mlresult-mlmediaplayergetdefaultbufferingsettings}

```cpp
MLResult MLMediaPlayerGetDefaultBufferingSettings(
    MLHandle media_player,
    MLMediaPlayerBufferingSettings * out_buf_settings
)
```

Gets default Buffering settings. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) * |out_buf_settings|A pointer to [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned default Buffering settings. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_NotImplemented|Feature not implemented in the given model. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


\Attention The API is only implemented in ML1.





-----------

### MLMediaPlayerGetBufferingSettings {#mlresult-mlmediaplayergetbufferingsettings}

```cpp
MLResult MLMediaPlayerGetBufferingSettings(
    MLHandle media_player,
    MLMediaPlayerBufferingSettings * out_buf_settings
)
```

Gets current Buffering settings. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) * |out_buf_settings|A pointer to [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned current Buffering settings. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_NotImplemented|Feature not implemented in the given model. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


\Attention The API is only implemented in ML1.





-----------

### MLMediaPlayerSetBufferingSettings {#mlresult-mlmediaplayersetbufferingsettings}

```cpp
MLResult MLMediaPlayerSetBufferingSettings(
    MLHandle media_player,
    MLMediaPlayerBufferingSettings buf_settings
)
```

Sets buffering settings. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) |buf_settings|An [MLMediaPlayerBufferingSettings](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md) struct.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set buffering settings. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_NotImplemented|Feature not implemented in the given model. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


\Attention The API is only implemented in ML1.





-----------

### MLMediaPlayerSetOnMediaTimedTextUpdateCallback {#mlresult-mlmediaplayersetonmediatimedtextupdatecallback}

```cpp
MLResult MLMediaPlayerSetOnMediaTimedTextUpdateCallback(
    MLHandle media_player,
    MLMediaPlayerOnMediaTimedTextUpdateCallback on_media_timed_text_callback,
    void * data
)
```

Set callback to get invoked when a Timed Text update is available along with its data. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLMediaPlayerOnMediaTimedTextUpdateCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaplayeronmediatimedtextupdatecallback) |on_media_timed_text_callback|Function pointer to be called. This can be 'NULL' to unset the callback. |
| void * |data|Custom data to be returned when callback is fired.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set callback. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 



Setting this callback disables use of the poll-based API to query for the [MLMediaPlayerPollingStateFlag_HasTimedTextUpdated](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerpollingstateflag-hastimedtextupdated) flag. [MLMediaPlayerPollStates()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpollstates) will ignore checks for this bit.




**API Level:**
  * 4




-----------

### MLMediaPlayerGetWebVTTData {#mlresult-mlmediaplayergetwebvttdata}

```cpp
MLResult MLMediaPlayerGetWebVTTData(
    MLHandle media_player,
    MLHandle timed_text,
    MLWebVTTData ** out_webvtt_data
)
```

Gets WebVTT data represented by a timed text handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |timed_text|The Timed Text handle. |
| [MLWebVTTData](/api-ref/api/Modules/group___media_player/struct_m_l_web_v_t_t_data.md) ** |out_webvtt_data|The WebVTT data structure to be returned.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned WebVTT data. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_BadType|Failed because the timed_text handle was not in the WebVTT format. The timed text track's mime type must be "text/vtt". |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


The returned [MLWebVTTData](/api-ref/api/Modules/group___media_player/struct_m_l_web_v_t_t_data.md) structure is valid only in the callback's context.




**API Level:**
  * 4




-----------

### MLMediaPlayerGetTTMLData {#mlresult-mlmediaplayergetttmldata}

```cpp
MLResult MLMediaPlayerGetTTMLData(
    MLHandle media_player,
    MLHandle timed_text,
    MLTTMLData ** out_ttml_data
)
```

Gets TTML data represented by a timed text handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |timed_text|The Timed Text handle. |
| [MLTTMLData](/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md) ** |out_ttml_data|The TTML data structure to be returned.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned TTML data. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_BadType|Failed because the timed_text handle was not in the TTML format. The timed text track's mime type must be "application/ttml+xml". |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


The returned [MLTTMLData](/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md) structure is valid only in the callback's context.




**API Level:**
  * 20




-----------

### MLMediaPlayerResetAsync {#mlresult-mlmediaplayerresetasync}

```cpp
MLResult MLMediaPlayerResetAsync(
    MLHandle media_player
)
```

Resets the [Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md) to its uninitialized state asynchronously. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully launched MediaPlayer reset operation asynchronously. For result, poll for MLMediaPlayerPollingStateFlag_HasResetCompleted or use the 'on_reset_complete' callback if already set. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. This method can be called anytime except when in 'preparing async'. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 


This method is asynchronous and will return immediately. After invocation, you will have to initialize it again by setting the data source and calling prepare() or prepareAsync().

A successful reset result can be obtained either by registering the 'on_reset_complete' callback (see MLMediaPlayerSetEventCallbacksEx) or by polling for the 'MLMediaPlayerPollingStateFlag_HasResetCompleted' flag when calling [MLMediaPlayerPollStates()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerpollstates).




**API Level:**
  * 8




-----------

### MLMediaPlayerGetMetrics {#mlresult-mlmediaplayergetmetrics}

```cpp
MLResult MLMediaPlayerGetMetrics(
    MLHandle media_player,
    MLMediaPlayerMetrics * out_metrics
)
```

Retrieves metrics recorded on the MediaPlayer. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLMediaPlayerMetrics](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_metrics.md) * |out_metrics|See [MLMediaPlayerMetrics](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_metrics.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully received metrics. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed because method was called in the wrong state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Failed because MediaPlayer was not properly initialized.|
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

### MLMediaPlayerSetSurface {#mlresult-mlmediaplayersetsurface}

```cpp
MLResult MLMediaPlayerSetSurface(
    MLHandle media_player,
    MLHandle surface
)
```

Sets the Native surface to be used as the sink for displaying the video portion of the media. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_player|Handle to the MediaPlayer instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |surface|Handle to the MLNativeSurface object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Passed media_player or the surface handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set output surface. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Method was called from the wrong state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|MediaPlayer was not properly built or initialized.|
**Required Permissions**:

  * None 


The surface should be created by [MLNativeSurfaceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate). When called, this method should be called after one of the MLMediaPlayerSetDataSource() API and before [MLMediaPlayerPrepare()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerprepare) or [MLMediaPlayerPrepareAsync()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaplayerprepareasync) Not calling this method or calling this with surface as ML_INVALID_HANDLE will result in only the audio track being played.




**API Level:**
  * 20




-----------

### MLMediaStreamSourceCreate {#mlresult-mlmediastreamsourcecreate}

```cpp
MLResult MLMediaStreamSourceCreate(
    MLMediaStreamSourceOnBufferAvailable on_buffer_available,
    void * context,
    MLHandle * out_handle
)
```

Create a new MediaStreamSource object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaStreamSourceOnBufferAvailable](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediastreamsourceonbufferavailable) |on_buffer_available|[MLMediaStreamSourceOnBufferAvailable](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediastreamsourceonbufferavailable) callback. |
| void * |context|User data to be passed to callbacks. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|The [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the new source object created. Only valid if result is [MLResult_Ok](/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-ok).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaStreamSourceDestroy {#mlresult-mlmediastreamsourcedestroy}

```cpp
MLResult MLMediaStreamSourceDestroy(
    MLHandle media_stream_source
)
```

Destroy a MediaStreamSource object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_stream_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MediaStreamSource object to destroy.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaStreamSourceGetBuffer {#mlresult-mlmediastreamsourcegetbuffer}

```cpp
MLResult MLMediaStreamSourceGetBuffer(
    MLHandle media_stream_source,
    size_t * out_id,
    uint8_t ** out_ptr,
    size_t * out_size
)
```

Get a buffer where data can be written. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_stream_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaStreamSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate). |
| size_t * |out_id|An opaque ID that should be passed to [MLMediaStreamSourcePushBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcepushbuffer). |
| uint8_t ** |out_ptr|The location where to write data. |
| size_t * |out_size|Maximum bytes that can be written in `out_ptr`.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


If a buffer is available, true is returned and `out_id`, `out_ptr` and `out_size` are set. Application can then write up to `out_size` bytes into `out_ptr` and push that data using [MLMediaStreamSourcePushBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcepushbuffer).

If no buffer is available, false is returned and application should wait for [MLMediaStreamSourceOnBufferAvailable()](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediastreamsourceonbufferavailable) to be called before retrying.





-----------

### MLMediaStreamSourcePushBuffer {#mlresult-mlmediastreamsourcepushbuffer}

```cpp
MLResult MLMediaStreamSourcePushBuffer(
    MLHandle media_stream_source,
    size_t id,
    size_t size
)
```

Push a buffer. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_stream_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaStreamSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate). |
| size_t |id|The ID of the buffer as given by [MLMediaStreamSourceGetBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcegetbuffer). |
| size_t |size|The number of bytes actually written in the buffer.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Queue a buffer acquired from [MLMediaStreamSourceGetBuffer()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcegetbuffer) once data has been written.





-----------

### MLMediaStreamSourcePushEOS {#mlresult-mlmediastreamsourcepusheos}

```cpp
MLResult MLMediaStreamSourcePushEOS(
    MLHandle media_stream_source
)
```

Push End-Of-Stream event. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_stream_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaStreamSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Signal that the end of stream is reached and no more data will be pushed.





-----------

### MLNativeSurfaceConfigInit {#void-mlnativesurfaceconfiginit}

```cpp
static inline void MLNativeSurfaceConfigInit(
    MLNativeSurfaceConfig * inout_config_values
)
```

Initializes [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) * |inout_config_values|[MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) structure defined by [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) that needs to be initialized. |




-----------

### MLNativeSurfaceOnFrameAvailableCallbackInit {#void-mlnativesurfaceonframeavailablecallbackinit}

```cpp
static inline void MLNativeSurfaceOnFrameAvailableCallbackInit(
    MLNativeSurfaceOnFrameAvailableCallback * inout_callbacks
)
```

Initializes [MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) * |inout_callbacks|[MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) Callback structure defined by [MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) that needs to be initialized. |




-----------

### MLNativeSurfaceCreate {#mlresult-mlnativesurfacecreate}

```cpp
MLResult MLNativeSurfaceCreate(
    const MLNativeSurfaceConfig * config_values,
    MLHandle * out_handle
)
```

Create a new NativeSurface. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) * |config_values|Configuration values for creating the native surface, refer [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) for more details. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Upon successful return will point to handle to the created NativeSurface. Or else, it will point to [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed to allocate memory for surface. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|NativeSurface object was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The NativeSurface created through this API should be released using MLNativeSurfaceRelease once done using it.




**API Level:**
  * 20




-----------

### MLNativeSurfaceRelease {#mlresult-mlnativesurfacerelease}

```cpp
MLResult MLNativeSurfaceRelease(
    MLHandle handle
)
```

Release a NativeSurface. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurface.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurface object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|NativeSurface object was successfully released. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceGetNativeWindow {#mlresult-mlnativesurfacegetnativewindow}

```cpp
MLResult MLNativeSurfaceGetNativeWindow(
    MLHandle handle,
    MLHandle * out_native_window,
    int32_t * out_format
)
```

Gets an implementation of NativeWindow that feeds graphic buffers into MLNativeSurface. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. This handle can be:

* Surface created on an Encoder using [MLMediaCodecCreateInputSurface](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreateinputsurface).
* The output surface created using [MLNativeSurfaceCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate).
* The output surface created using [MLNativeSurfaceTextureCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturecreate). |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_native_window|Native window as MLHandle on success. |
| int32_t * |out_format|Native window format on success and for valid pointer, which will be used as EGL_NATIVE_VISUAL_ID.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurface object is invalid or out_native_window is NULL. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Native window is successfully retrieved. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


This function returns the platform-dependent native window typically used by Graphics API or HW decoders to render frames.




**API Level:**
  * 20




-----------

### MLNativeSurfaceReleaseNativeWindow {#mlresult-mlnativesurfacereleasenativewindow}

```cpp
MLResult MLNativeSurfaceReleaseNativeWindow(
    MLHandle handle,
    MLHandle native_window
)
```

Releases NativeWindow previously acquired by [MLNativeSurfaceGetNativeWindow](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetnativewindow). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |native_window|Native window handle acquired through [MLNativeSurfaceGetNativeWindow](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetnativewindow).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurface or NativeWindow object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Native window is successfully released. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLNativeSurfaceAcquireNextAvailableFrame {#mlresult-mlnativesurfaceacquirenextavailableframe}

```cpp
MLResult MLNativeSurfaceAcquireNextAvailableFrame(
    MLHandle handle,
    MLHandle * out_native_buffer
)
```

Consume next available buffer. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_native_buffer|A pointer to the acquired native buffer of the frame. When buffer is not required anymore, caller must call [MLNativeSurfaceReleaseFrame()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacereleaseframe) with this nativeBuffer handle to free up queuing space for incoming buffers.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Next available frame is acquired successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NotEnoughData|Native buffer is not available yet to acquire.|
**Required Permissions**:

  * None 


Note: This function is non-blocking and should only be called from the rendering thread _after_ #on_frame_available callback has been fired.

Note: The returned buffer's color format is multi-planar YUV420. Since our underlying hardware interops do not support multiplanar formats, advanced texture features like mipmaping, anisotropic filtering and MSAA will _not_ work on those returned buffers. If such advanced texturing features are required, one has to acquire the YUV buffers as usual and _render_ to an RGB texture and only then, will one be able to enable hardware optimization for such advanced texture features.




**API Level:**
  * 20




-----------

### MLNativeSurfaceAcquireHardwareBufferFromNativeBuffer {#mlresult-mlnativesurfaceacquirehardwarebufferfromnativebuffer}

```cpp
MLResult MLNativeSurfaceAcquireHardwareBufferFromNativeBuffer(
    MLHandle handle,
    MLHandle native_buffer,
    struct AHardwareBuffer ** out_hardware_buffer,
    uint32_t * out_width,
    uint32_t * out_height
)
```

Acquire an AHardwareBuffer* from a native buffer handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. Pass [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle) when using with native buffers acquired without a MLNativeSurface, like in the case of ml_webview api. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |native_buffer|The native buffer handle acquired from a [MLNativeSurfaceAcquireNextAvailableFrame](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfaceacquirenextavailableframe) call. |
| struct AHardwareBuffer ** |out_hardware_buffer|The AHardwareBuffer pointer to the imported surface. |
| uint32_t * |out_width|Width of the imported surface. |
| uint32_t * |out_height|Height of the imported surface.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Import was not performed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Surface was acquired successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Import was not performed due to an unknown error.|
**Required Permissions**:

  * None 



The AHardwareBuffer* can be used with the Vulkan extension VK_ANDROID_external_memory_android_hardware_buffer to get the hardware buffer format properties, which can then be used to bind this hardware buffer to a VkImage. Caller is responsible for releasing the AHardwareBuffer by calling AHardwareBuffer_release() after its usage.




**API Level:**
  * 20




-----------

### MLNativeSurfaceReleaseFrame {#mlresult-mlnativesurfacereleaseframe}

```cpp
MLResult MLNativeSurfaceReleaseFrame(
    MLHandle handle,
    MLHandle native_buffer
)
```

Release a native buffer previously acquired. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |native_buffer|The native buffer for the frame to release.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Frame was released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceGetFrameTransformationMatrix {#mlresult-mlnativesurfacegetframetransformationmatrix}

```cpp
MLResult MLNativeSurfaceGetFrameTransformationMatrix(
    MLHandle handle,
    float out_mtx[16]
)
```

Retrieves the 4x4 texture coordinate transform matrix associated with the last acquired Frame. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| float |out_mtx|A pointer to an array of 16 floats that will receive retrieved transformation matrix.|
**Required Permissions**:

  * None 


This transform matrix maps 2D homogeneous texture coordinates of the form (s, t, 0, 1) with s and t in the inclusive range [0, 1] to the texture coordinate that should be used to sample that location from the texture. Sampling the texture outside of the range of this transform is undefined.

This transform is necessary to compensate for transforms that the stream content producer may implicitly apply to the content. By forcing users of a GLConsumer to apply this transform we avoid performing an extra copy of the data that would be needed to hide the transform from the user.

The matrix is stored in column-major order.



**Return**: 

  * MLResult_InvalidParam One of the parameters is invalid. 
  * MLResult_Ok Transformation matrix was returned.



**API Level:**
  * 20




-----------

### MLNativeSurfaceGetFrameTimestamp {#mlresult-mlnativesurfacegetframetimestamp}

```cpp
MLResult MLNativeSurfaceGetFrameTimestamp(
    MLHandle handle,
    int64_t * out_timestamp_ns
)
```

Retrieves the timestamp associated with the last acquired frame. The timestamp is in nanoseconds, and is monotonically increasing from beginning of the playback. Its other semantics (zero point, etc) are codec-dependent and should be documented by the codec vendor. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| int64_t * |out_timestamp_ns|A pointer to user variable for storing retrieved timestamp.|
**Required Permissions**:

  * None 




**Return**: 

  * MLResult_InvalidParam One of the parameters is invalid. 
  * MLResult_Ok Timestamp was returned.



**API Level:**
  * 20




-----------

### MLNativeSurfaceGetFrameQueueBufferTimestamp {#mlresult-mlnativesurfacegetframequeuebuffertimestamp}

```cpp
MLResult MLNativeSurfaceGetFrameQueueBufferTimestamp(
    MLHandle handle,
    int64_t * out_timestamp_ns
)
```

Retrieves the QueueBuffer timestamp associated with the last acquired Frame This timestamp is for profiling purposes only and corresponds to the time when this frame was queued by internal Codec's producer code. The timestamp is in nanoseconds, and is monotonically increasing from beginning of playback. Its other semantics (zero point, etc) are codec-dependent and should by documented by the codec vendor. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| int64_t * |out_timestamp_ns|A pointer to user variable for storing retrieved timestamp.|
**Required Permissions**:

  * None 




**Return**: 

  * MLResult_InvalidParam One of the parameters is invalid. 
  * MLResult_Ok Timestamp was returned.



**API Level:**
  * 20




-----------

### MLNativeSurfaceGetFrameNumber {#mlresult-mlnativesurfacegetframenumber}

```cpp
MLResult MLNativeSurfaceGetFrameNumber(
    MLHandle handle,
    uint64_t * out_number
)
```

Retrieves the last acquired frame number. The frame number is an incrementing counter set to 0 at Codec configuration time. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| uint64_t * |out_number|A pointer to user variable for storing retrieved frame number.|
**Required Permissions**:

  * None 




**Return**: 

  * MLResult_InvalidParam One of the parameters is invalid. 
  * MLResult_Ok Frame number was returned.



**API Level:**
  * 20




-----------

### MLNativeSurfaceGetFrameCropRect {#mlresult-mlnativesurfacegetframecroprect}

```cpp
MLResult MLNativeSurfaceGetFrameCropRect(
    MLHandle handle,
    MLRecti * out_crop_rect
)
```

Retrieves the cropping rectangle of the current frame/buffer. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| [MLRecti](/api-ref/api/Modules/group___common/struct_m_l_recti.md) * |out_crop_rect|A pointer to user variable for storing retrieved Crop.|
**Required Permissions**:

  * None 


The Frame crop is returned as {left, bottom, width, height}.



**Return**: 

  * MLResult_InvalidParam One of the parameters is invalid. 
  * MLResult_Ok Frame Crop was returned.



**API Level:**
  * 20




-----------

### MLNativeSurfaceSetOnFrameAvailableCallback {#mlresult-mlnativesurfacesetonframeavailablecallback}

```cpp
MLResult MLNativeSurfaceSetOnFrameAvailableCallback(
    MLHandle handle,
    const MLNativeSurfaceOnFrameAvailableCallback * callback,
    void * user_data
)
```

Set callback to notify client when a frame is available. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurface. |
| const [MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) * |callback|A [MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) function. |
| void * |user_data|Pointer to user payload data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLNativeSurface object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Callback was set successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureCreate {#mlresult-mlnativesurfacetexturecreate}

```cpp
MLResult MLNativeSurfaceTextureCreate(
    const MLNativeSurfaceConfig * config_values,
    MLNativeSurfaceTextureBackend backend,
    MLHandle * out_handle
)
```

Create a new NativeSurfaceTexture. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) * |config_values|Configuration values for creating the native surface, refer [MLNativeSurfaceConfig](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) for more details. |
| [MLNativeSurfaceTextureBackend](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacetexturebackend) |backend|The graphic backend to use. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Upon successful return will point to handle to the created NativeSurfaceTexture. Or else, it will point to [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed to allocate memory for surface. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|NativeSurfaceTexture object was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureRelease {#mlresult-mlnativesurfacetexturerelease}

```cpp
MLResult MLNativeSurfaceTextureRelease(
    MLHandle handle
)
```

Release a NativeSurfaceTexture. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|NativeSurfaceTexture object was successfully released. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureUpdateTexImage {#mlresult-mlnativesurfacetextureupdateteximage}

```cpp
MLResult MLNativeSurfaceTextureUpdateTexImage(
    MLHandle handle
)
```

Update the texture image to the most recent frame from the image stream. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|the texture was updated successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


May only be called on the thread with the graphic context that contains the texture object.




**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureAttachToGLContext {#mlresult-mlnativesurfacetextureattachtoglcontext}

```cpp
MLResult MLNativeSurfaceTextureAttachToGLContext(
    MLHandle handle,
    uint32_t texture_id
)
```

Attach the NativeSurfaceTexture to the graphic context that is current on the calling thread. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture. |
| uint32_t |texture_id|The graphic texture object id.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|the texture was detached successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureDetachFromGLContext {#mlresult-mlnativesurfacetexturedetachfromglcontext}

```cpp
MLResult MLNativeSurfaceTextureDetachFromGLContext(
    MLHandle handle
)
```

Detach the NativeSurfaceTexture from the graphic context that owns the graphic texture object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|the texture was detached successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


If called on the thread with graphic context that contains the attached texture object, said texture will be deleted.




**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureGetTransformationMatrix {#mlresult-mlnativesurfacetexturegettransformationmatrix}

```cpp
MLResult MLNativeSurfaceTextureGetTransformationMatrix(
    MLHandle handle,
    float out_matrix[16]
)
```

Retrieve the 4x4 texture coordinate transform matrix associated with the texture image set by the most recent call to MLNativeSurfaceTextureUpdateTexImage. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture. |
| float |out_matrix|A 4x4 matrix stored in column-major order as 16 consecutive values.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureGetTimestamp {#mlresult-mlnativesurfacetexturegettimestamp}

```cpp
MLResult MLNativeSurfaceTextureGetTimestamp(
    MLHandle handle,
    int64_t * out_timestamp_ns
)
```

Retrieve the timestamp associated with the texture image set by the most recent call to MLNativeSurfaceTextureUpdateTexImage. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture. |
| int64_t * |out_timestamp_ns|The timestamp in nanoseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureSetOnFrameAvailableCallback {#mlresult-mlnativesurfacetexturesetonframeavailablecallback}

```cpp
MLResult MLNativeSurfaceTextureSetOnFrameAvailableCallback(
    MLHandle handle,
    const MLNativeSurfaceOnFrameAvailableCallback * callback,
    void * user_data
)
```

Set callback to notify client when a frame is available. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture. |
| const [MLNativeSurfaceOnFrameAvailableCallback](/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) * |callback|A MLNativeSurfaceTextureOnFrameAvailableCallback function. |
| void * |user_data|Pointer to user payload data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Callback was set successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------


## Attributes Documentation

### MLMediaDRMProperty {#const-typedef-char-mlmediadrmproperty}

```cpp
const typedef char * MLMediaDRMProperty;
```






-----------

### MLMediaFormatKey {#const-typedef-char-mlmediaformatkey}

```cpp
const typedef char * MLMediaFormatKey;
```






-----------

### MLAudioChannelOutMono {#const-int32-t-mlaudiochanneloutmono}

```cpp
const int32_t MLAudioChannelOutMono = MLAudioChannelOutMask_FrontLeft;
```


Definition of some of the known Channel Layouts.

Channel Layout for Mono. 





-----------

### MLAudioChannelOutStereo {#const-int32-t-mlaudiochanneloutstereo}

```cpp
const int32_t MLAudioChannelOutStereo = (MLAudioChannelOutMask_FrontLeft | MLAudioChannelOutMask_FrontRight);
```


Channel Layout for Stereo. 





-----------

### MLAudioChannelOutQuad {#const-int32-t-mlaudiochanneloutquad}

```cpp
const int32_t MLAudioChannelOutQuad = (MLAudioChannelOutMask_FrontLeft | MLAudioChannelOutMask_FrontRight |
                                 MLAudioChannelOutMask_BackLeft | MLAudioChannelOutMask_BackRight);
```


Channel Layout for Quad. 





-----------

### MLAudioChannelOutSurround {#const-int32-t-mlaudiochanneloutsurround}

```cpp
const int32_t MLAudioChannelOutSurround = (MLAudioChannelOutMask_FrontLeft | MLAudioChannelOutMask_FrontRight |
                                     MLAudioChannelOutMask_FrontCenter | MLAudioChannelOutMask_BackCenter);
```


Channel Layout for Surround. 





-----------

### MLAudioChannelOut5Point1 {#const-int32-t-mlaudiochannelout5point1}

```cpp
const int32_t MLAudioChannelOut5Point1 = (MLAudioChannelOutMask_FrontLeft | MLAudioChannelOutMask_FrontRight |
                                    MLAudioChannelOutMask_FrontCenter | MLAudioChannelOutMask_LowFrequency |
                                    MLAudioChannelOutMask_BackLeft | MLAudioChannelOutMask_BackRight);
```


Channel Layout for 5.1. 





-----------

### MLAudioChannelOut7Point1 {#const-int32-t-mlaudiochannelout7point1}

```cpp
const int32_t MLAudioChannelOut7Point1 = (MLAudioChannelOutMask_FrontLeft | MLAudioChannelOutMask_FrontRight |
                                    MLAudioChannelOutMask_FrontCenter | MLAudioChannelOutMask_LowFrequency |
                                    MLAudioChannelOutMask_BackLeft | MLAudioChannelOutMask_BackRight |
                                    MLAudioChannelOutMask_FrontLeftOfCenter |
                                    MLAudioChannelOutMask_FrontRightOfCenter);
```


Channel Layout for 7.1. 





-----------

### MLAudioChannelOut7Point1Surround {#const-int32-t-mlaudiochannelout7point1surround}

```cpp
const int32_t MLAudioChannelOut7Point1Surround = (MLAudioChannelOutMask_FrontLeft | MLAudioChannelOutMask_FrontCenter |
                                            MLAudioChannelOutMask_FrontRight |
                                            MLAudioChannelOutMask_SideLeft | MLAudioChannelOutMask_SideRight |
                                            MLAudioChannelOutMask_BackLeft | MLAudioChannelOutMask_BackRight |
                                            MLAudioChannelOutMask_LowFrequency);
```


Channel Layout for 7.1 Surround. 





-----------

### MLMediaDRMProperty_Vendor {#mlmediadrmproperty-mlmediadrmproperty-vendor}

```cpp
MLMediaDRMProperty MLMediaDRMProperty_Vendor;
```


String property name: identifies the maker of the DRM engine plugin. 





-----------

### MLMediaDRMProperty_Version {#mlmediadrmproperty-mlmediadrmproperty-version}

```cpp
MLMediaDRMProperty MLMediaDRMProperty_Version;
```


String property name: identifies the version of the DRM engine plugin. 





-----------

### MLMediaDRMProperty_Description {#mlmediadrmproperty-mlmediadrmproperty-description}

```cpp
MLMediaDRMProperty MLMediaDRMProperty_Description;
```


String property name: describes the DRM engine plugin. 





-----------

### MLMediaDRMProperty_Algorithms {#mlmediadrmproperty-mlmediadrmproperty-algorithms}

```cpp
MLMediaDRMProperty MLMediaDRMProperty_Algorithms;
```

String property name: a comma-separated list of cipher and mac algorithms supported by #CryptoSession. The list may be empty if the DRM engine plugin does not support #CryptoSession operations. 





-----------

### MLMediaDRMProperty_DeviceUniqueID {#mlmediadrmproperty-mlmediadrmproperty-deviceuniqueid}

```cpp
MLMediaDRMProperty MLMediaDRMProperty_DeviceUniqueID;
```

Byte array property name: the device unique identifier is established during device provisioning and provides a means of uniquely identifying each device. 





-----------

### MLMediaFormat_Key_AAC_Encoded_Target_Level {#mlmediaformatkey-mlmediaformat-key-aac-encoded-target-level}

```cpp
MLMediaFormatKey MLMediaFormat_Key_AAC_Encoded_Target_Level;
```

The format of media data (video/audio) is specified as key/value pairs. Below is a list of keys used to set/obtain format values. 

A key describing the target reference level that was assumed at the encoder for calculation of attenuation gains for clipping prevention.

If it is known, this information can be provided as an integer value between 0 and 127, which is calculated as -4 * Encoded Target Level in LKFS. If the Encoded Target Level is unknown, the value can be set to -1. 

The default value is -1 (unknown). 

The value is ignored when heavy compression is used (see {[}). ](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-heavy-compression)This key is only used during decoding.

The associated value is an integer. 





-----------

### MLMediaFormat_Key_AAC_DRC_Boost_Factor {#mlmediaformatkey-mlmediaformat-key-aac-drc-boost-factor}

```cpp
MLMediaFormatKey MLMediaFormat_Key_AAC_DRC_Boost_Factor;
```

A key describing the boost factor allowing to adapt the dynamics of the output to the actual listening requirements. This relies on DRC gain sequences that can be transmitted in the encoded bitstream to be able to reduce the dynamics of the output signal upon request. This factor enables the user to select how much of the gains are applied. 

Positive gains (boost) and negative gains (attenuation, see {[}) can be controlled separately for a better match to different use-cases. ](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-attenuation-factor)Typically, attenuation gains are sent for loud signal segments, and boost gains are sent for soft signal segments. If the output is listened to in a noisy environment, for example, the boost factor is used to enable the positive gains, i.e. to amplify soft signal segments beyond the noise floor. But for listening late at night, the attenuation factor is used to enable the negative gains, to prevent loud signal from surprising the listener. In applications which generally need a low dynamic range, both the boost factor and the attenuation factor are used to enable all DRC gains. 

In order to prevent clipping, it is also recommended to apply the attenuation gains in case of a downmix and/or loudness normalization to high target reference levels. 

Both the boost and the attenuation factor parameters are given as integer values between 0 and 127, representing the range of the factor of 0 (i.e. don't apply) to 1 (i.e. fully apply boost/attenuation gains respectively). 

The default value is 127 (fully apply boost DRC gains). 

This key is only used during decoding.

The associated value is an integer. 





-----------

### MLMediaFormat_Key_AAC_DRC_Attenuation_Factor {#mlmediaformatkey-mlmediaformat-key-aac-drc-attenuation-factor}

```cpp
MLMediaFormatKey MLMediaFormat_Key_AAC_DRC_Attenuation_Factor;
```

A key describing the attenuation factor allowing to adapt the dynamics of the output to the actual listening requirements. 

See {[} for a description of the role of this attenuation factor and the value range. ](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-boost-factor)The default value is 127 (fully apply attenuation DRC gains). 

This key is only used during decoding.

The associated value is an integer. 





-----------

### MLMediaFormat_Key_AAC_DRC_Heavy_Compression {#mlmediaformatkey-mlmediaformat-key-aac-drc-heavy-compression}

```cpp
MLMediaFormatKey MLMediaFormat_Key_AAC_DRC_Heavy_Compression;
```

A key describing the selection of the heavy compression profile for DRC. 

Two separate DRC gain sequences can be transmitted in one bitstream: MPEG-4 DRC light compression, and DVB-specific heavy compression. When selecting the application of the heavy compression, one of the sequences is selected: 

* 0 enables light compression, 
* 1 enables heavy compression instead. 

Note that only light compression offers the features of scaling of DRC gains (see {[} and { #MLMediaFormat_Key_AAC_DRC_Attenuation_Factor} for the boost and attenuation factors, and frequency-selective (multiband) DRC. Light compression usually contains clipping prevention for stereo downmixing while heavy compression, if additionally provided in the bitstream, is usually stronger, and contains clipping prevention for stereo and mono downmixing. ](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-boost-factor)The default is 1 (heavy compression). 

This key is only used during decoding.

The associated value is an integer. 





-----------

### MLMediaFormat_Key_AAC_DRC_Target_Reference_Level {#mlmediaformatkey-mlmediaformat-key-aac-drc-target-reference-level}

```cpp
MLMediaFormatKey MLMediaFormat_Key_AAC_DRC_Target_Reference_Level;
```

A key describing a gain to be applied so that the output loudness matches the Target Reference Level. This is typically used to normalize loudness across program items. 

The gain is derived as the difference between the Target Reference Level and the Program Reference Level. The latter can be given in the bitstream and indicates the actual loudness value of the program item. 

The Target Reference Level controls loudness normalization for both MPEG-4 DRC and MPEG-D DRC. 

The value is given as an integer value between 40 and 127, and is calculated as -4 * Target Reference Level in LKFS. Therefore, it represents the range of -10 to -31.75 LKFS. 

The default value on mobile devices is 64 (-16 LKFS). 

This key is only used during decoding.

The associated value is an integer. 





-----------

### MLMediaFormat_Key_AAC_Max_Output_Channel_Count {#mlmediaformatkey-mlmediaformat-key-aac-max-output-channel-count}

```cpp
MLMediaFormatKey MLMediaFormat_Key_AAC_Max_Output_Channel_Count;
```

A key describing the maximum number of channels that can be output by the AAC decoder. 

By default, the decoder will output the same number of channels as present in the encoded stream, if supported. Set this value to limit the number of output channels, and use the downmix information in the stream, if available. 

Values larger than the number of channels in the content to decode are ignored. 

This key is only used during decoding.

The associated value is an integer. 





-----------

### MLMediaFormat_Key_AAC_Profile {#mlmediaformatkey-mlmediaformat-key-aac-profile}

```cpp
MLMediaFormatKey MLMediaFormat_Key_AAC_Profile;
```

A key describing the AAC profile to be used (AAC audio formats only). 

Constants are declared in [MLMediaCodecListGetSupportedProfileLevels](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels).

The associated value is an integer. 





-----------

### MLMediaFormat_Key_AAC_SBR_Mode {#mlmediaformatkey-mlmediaformat-key-aac-sbr-mode}

```cpp
MLMediaFormatKey MLMediaFormat_Key_AAC_SBR_Mode;
```

A key describing the AAC SBR mode to be used (AAC audio formats only). 

The associated value is an integer and can be set to following values: 

* 0 - no SBR should be applied. 
* 1 - single rate SBR. 
* 2 - double rate SBR. 

Note: If this key is not defined the default SRB mode for the desired AAC profile will be used. 

This key is only used during encoding.

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Bit_Rate {#mlmediaformatkey-mlmediaformat-key-bit-rate}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Bit_Rate;
```

A key describing the average bitrate in bits/sec. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Bit_Rate_Mode {#mlmediaformatkey-mlmediaformat-key-bit-rate-mode}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Bit_Rate_Mode;
```

A key describing the desired bitrate mode to be used by an encoder. 

Constants are declared in [MLMediaCodecBitrateMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecbitratemode). 





-----------

### MLMediaFormat_Key_Capture_Rate {#mlmediaformatkey-mlmediaformat-key-capture-rate}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Capture_Rate;
```

A key describing the capture rate of a video format in frames/sec. 

When capture rate is different than the frame rate, it means that the video is acquired at a different rate than the playback, which produces slow motion or timelapse effect during playback. Application can use the value of this key to tell the relative speed ratio between capture and playback rates when the video was recorded. 

The associated value is an integer or a float. 





-----------

### MLMediaFormat_Key_Channel_Count {#mlmediaformatkey-mlmediaformat-key-channel-count}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Channel_Count;
```

A key describing the number of channels in an audio format. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Channel_Mask {#mlmediaformatkey-mlmediaformat-key-channel-mask}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Channel_Mask;
```

A key describing the channel composition of audio content. 

This mask is composed of bits drawn from channel mask definitions in android.media.AudioFormat.

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Color_Format {#mlmediaformatkey-mlmediaformat-key-color-format}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Color_Format;
```

A key describing the color format of the content in a video format. 

Constants are declared in [MLMediaCodecBitrateMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecbitratemode). 





-----------

### MLMediaFormat_Key_Duration {#mlmediaformatkey-mlmediaformat-key-duration}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Duration;
```

A key describing the duration (in microseconds) of the content. 

The associated value is a long. 





-----------

### MLMediaFormat_Key_FLAC_Compression_Level {#mlmediaformatkey-mlmediaformat-key-flac-compression-level}

```cpp
MLMediaFormatKey MLMediaFormat_Key_FLAC_Compression_Level;
```

A key describing the FLAC compression level to be used (FLAC audio format only). 

The associated value is an integer ranging from 0 (fastest, least compression) to 8 (slowest, most compression). 





-----------

### MLMediaFormat_Key_Frame_Rate {#mlmediaformatkey-mlmediaformat-key-frame-rate}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Frame_Rate;
```

A key describing the frame rate of a video format in frames/sec. 

The associated value is normally an integer when the value is used by the platform, but video codecs also accept float configuration values. Specifically, MLMediaExtractor::getTrackFormat provides an integer value corresponding to the frame rate information of the track if specified and non-zero. Otherwise, this key is not present. MLMediaCodec::configure accepts both float and integer values. This represents the desired operating frame rate if the {[} is not present and { #MLMediaFormat_Key_Priority} is `0` (realtime). For video encoders this value corresponds to the intended frame rate, although encoders are expected to support variable frame rate based on  MLMediaCodec.BufferInfo#presentationTimeUs buffer timestamp. This key is not used in the  MLMediaCodec#getInputFormat input/ MLMediaCodec#getOutputFormat output formats, nor by  MLMediaMuxer#addTrack. ](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-operating-rate)





-----------

### MLMediaFormat_Key_Height {#mlmediaformatkey-mlmediaformat-key-height}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Height;
```

A key describing the height of the content in a video format. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_I_Frame_Interval {#mlmediaformatkey-mlmediaformat-key-i-frame-interval}

```cpp
MLMediaFormatKey MLMediaFormat_Key_I_Frame_Interval;
```

A key describing the frequency of key frames expressed in seconds between key frames. 

This key is used by video encoders. A negative value means no key frames are requested after the first frame. A zero value means a stream containing all key frames is requested. 

Most video encoders will convert this value of the number of non-key-frames between key-frames, using the {[frame rate} information; therefore, if the actual frame rate differs (e.g. input frames are dropped or the frame rate changes), the **time interval** between key frames will not be the configured value. ](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-frame-rate) The associated value is an integer (or float since android.os.Build.VERSION_CODES::N_MR1 ). 





-----------

### MLMediaFormat_Key_Intra_Refresh_Period {#mlmediaformatkey-mlmediaformat-key-intra-refresh-period}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Intra_Refresh_Period;
```

An optional key describing the period of intra refresh in frames. 

This is an optional parameter that applies only to video encoders. If encoder supports it ([MLMediaCodecListIsIntraRefreshSupported](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisintrarefreshsupported)), the whole frame is completely refreshed after the specified period. Also for each frame, a fix subset of macroblocks must be intra coded which leads to a more constant bitrate than inserting a key frame. This key is recommended for video streaming applications as it provides low-delay and good error-resilience. This key is ignored if the video encoder does not support the intra refresh feature. Use the output format to verify that this feature was enabled.

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Is_ADTS {#mlmediaformatkey-mlmediaformat-key-is-adts}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Is_ADTS;
```

A key mapping to a value of 1 if the content is AAC audio and audio frames are prefixed with an ADTS header. 

The associated value is an integer (0 or 1). This key is only supported when _decoding_ content, it cannot be used to configure an encoder to emit ADTS output. 





-----------

### MLMediaFormat_Key_Is_Autoselect {#mlmediaformatkey-mlmediaformat-key-is-autoselect}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Is_Autoselect;
```

A key for boolean AUTOSELECT behavior for the track. Tracks with AUTOSELECT=true are considered when automatically selecting a track without specific user choice, based on the current locale. This is currently only used for subtitle tracks, when the user selected 'Default' for the captioning locale. The associated value is an integer, where non-0 means TRUE. This is an optional field; if not specified, AUTOSELECT defaults to TRUE. 





-----------

### MLMediaFormat_Key_Is_Default {#mlmediaformatkey-mlmediaformat-key-is-default}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Is_Default;
```

A key for boolean DEFAULT behavior for the track. The track with DEFAULT=true is selected in the absence of a specific user choice. 

This is currently used in two scenarios: 

1. For subtitle tracks, when the user selected 'Default' for the captioning locale. 
2. For a MIMETYPE_IMAGE_ANDROID_HEIC track, indicating the image is the primary item in the file. 

The associated value is an integer, where non-0 means TRUE. This is an optional field; if not specified, DEFAULT is considered to be FALSE. 





-----------

### MLMediaFormat_Key_Is_Forced_Subtitle {#mlmediaformatkey-mlmediaformat-key-is-forced-subtitle}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Is_Forced_Subtitle;
```

A key for the FORCED field for subtitle tracks. 

True if it is a forced subtitle track. Forced subtitle tracks are essential for the content and are shown even when the user turns off Captions. They are used for example to translate foreign/alien dialogs or signs. The associated value is an integer, where non-0 means TRUE. This is an optional field; if not specified, FORCED defaults to FALSE. 





-----------

### MLMediaFormat_Key_Language {#mlmediaformatkey-mlmediaformat-key-language}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Language;
```

A key describing the language of the content, using either ISO 639-1 or 639-2/T codes. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Max_Height {#mlmediaformatkey-mlmediaformat-key-max-height}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Max_Height;
```

A key describing the maximum expected height of the content in a video decoder format, in case there are resolution changes in the video content. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Max_Input_Size {#mlmediaformatkey-mlmediaformat-key-max-input-size}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Max_Input_Size;
```

Described by this MediaFormat. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Max_Width {#mlmediaformatkey-mlmediaformat-key-max-width}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Max_Width;
```

A key describing the maximum expected width of the content in a video decoder format, in case there are resolution changes in the video content. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Mime {#mlmediaformatkey-mlmediaformat-key-mime}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Mime;
```

A key describing the mime type of the MediaFormat. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_PCM_Encoding {#mlmediaformatkey-mlmediaformat-key-pcm-encoding}

```cpp
MLMediaFormatKey MLMediaFormat_Key_PCM_Encoding;
```

A key describing the raw audio sample encoding/format. 

The associated value is an integer, using one of the AudioFormat.ENCODING_PCM_ values.

This is an optional key for audio decoders and encoders specifying the desired raw audio sample format during MLMediaCodec::configure MediaCodec.configure() call. Use MLMediaCodec::getInputFormat MediaCodec.getInput / MLMediaCodec::getOutputFormatOutputFormat() to confirm the actual format. For the PCM decoder this key specifies both input and output sample encodings.

This key is also used by MLMediaExtractor to specify the sample format of audio data, if it is specified.

If this key is missing, the raw audio sample format is signed 16-bit short.

The associated value is an integer with keys defined by [MLMediaFormatAudioEncoding](/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediaformataudioencoding). 





-----------

### MLMediaFormat_Key_Push_Blank_Buffers_On_Stop {#mlmediaformatkey-mlmediaformat-key-push-blank-buffers-on-stop}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Push_Blank_Buffers_On_Stop;
```

If specified when configuring a video decoder rendering to a surface, causes the decoder to output "blank", i.e. black frames to the surface. 

when stopped to clear out any previously displayed contents. The associated value is an integer of value 1. 





-----------

### MLMediaFormat_Key_Repeat_Previous_Frame_After {#mlmediaformatkey-mlmediaformat-key-repeat-previous-frame-after}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Repeat_Previous_Frame_After;
```

Applies only when configuring a video encoder in "surface-input" mode. 

The associated value is a long and gives the time in microseconds after which the frame previously submitted to the encoder will be repeated (once) if no new frame became available since. 





-----------

### MLMediaFormat_Key_Sample_Rate {#mlmediaformatkey-mlmediaformat-key-sample-rate}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Sample_Rate;
```

A key describing the sample rate of an audio format. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Stride {#mlmediaformatkey-mlmediaformat-key-stride}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Stride;
```

A key describing the stride of the video bytebuffer layout. 

Stride (or row increment) is the difference between the index of a pixel and that of the pixel directly underneath. For YUV 420 formats, the stride corresponds to the Y plane; the stride of the U and V planes can be calculated based on the color format, though it is generally undefined and depends on the device and release. The associated value is an integer, representing the number of bytes. 





-----------

### MLMediaFormat_Key_Temporal_Layering {#mlmediaformatkey-mlmediaformat-key-temporal-layering}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Temporal_Layering;
```

A key describing the temporal layering schema. 

This is an optional parameter that applies only to video encoders. Use MediaCodec::getOutputFormat after MediaCodec::configure to query if the encoder supports the desired schema. Supported values are `webrtc.vp8.N-layer`, `android.generic.N`, `android.generic.N+M` and `none`, where `N` denotes the total number of non-bidirectional layers (which must be at least 1) and `M` denotes the total number of bidirectional layers (which must be non-negative). 

`android.generic.*` schemas have been added in android.os.Build.VERSION_CODES::N_MR1. 

The encoder may support fewer temporal layers, in which case the output format will contain the configured schema. If the encoder does not support temporal layering, the output format will not have an entry with this key. The associated value is a string. 





-----------

### MLMediaFormat_Key_Width {#mlmediaformatkey-mlmediaformat-key-width}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Width;
```

A key describing the width of the content in a video format. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Crop_Left {#mlmediaformatkey-mlmediaformat-key-crop-left}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crop_Left;
```

The left-coordinate (x) of the crop rectangle. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Crop_Right {#mlmediaformatkey-mlmediaformat-key-crop-right}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crop_Right;
```

The right-coordinate (x) MINUS 1 of the crop rectangle. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Crop_Bottom {#mlmediaformatkey-mlmediaformat-key-crop-bottom}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crop_Bottom;
```

The bottom-coordinate (y) MINUS 1 of the crop rectangle. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Crop_Top {#mlmediaformatkey-mlmediaformat-key-crop-top}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crop_Top;
```

The top-coordinate (y) of the crop rectangle. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Operating_Rate {#mlmediaformatkey-mlmediaformat-key-operating-rate}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Operating_Rate;
```

A key describing the desired operating frame rate for video or sample rate for audio that the codec will need to operate at. 

The associated value is an integer or a float representing frames-per-second or samples-per-second. 

This is used for cases like high-speed/slow-motion video capture, where the video encoder format contains the target playback rate (e.g. 30fps), but the component must be able to handle the high operating capture rate (e.g. 240fps). 

This rate will be used by codec for resource planning and setting the operating points. 





-----------

### MLMediaFormat_Key_Latency {#mlmediaformatkey-mlmediaformat-key-latency}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Latency;
```

An optional key describing the desired encoder latency in frames. 

parameter that applies only to video encoders. If encoder supports it, it should ouput at least one output frame after being queued the specified number of frames. This key is ignored if the video encoder does not support the latency feature. Use the output format to verify that this feature was enabled and the actual value used by the encoder. 

If the key is not specified, the default latency will be implementation specific. The associated value is an integer. 





-----------

### MLMediaFormat_Key_Parameter_Video_Bitrate {#mlmediaformatkey-mlmediaformat-key-parameter-video-bitrate}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Parameter_Video_Bitrate;
```

A key describing the desired video bitrate. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Parameter_Request_Sync_Frame {#mlmediaformatkey-mlmediaformat-key-parameter-request-sync-frame}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Parameter_Request_Sync_Frame;
```

Request that the encoder produce a sync frame "soon". 

Provide an Integer with the value 0. 





-----------

### MLMediaFormat_Key_Parameter_Set_Suspend {#mlmediaformatkey-mlmediaformat-key-parameter-set-suspend}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Parameter_Set_Suspend;
```

Temporarily suspend/resume encoding of input data. 

While suspended input data is effectively discarded instead of being fed into the encoder. This parameter really only makes sense to use with an encoder in "surface-input" mode, as the client code has no control over the input-side of the encoder in that case.

The value is an Integer object containing the value 1 to suspend or the value 0 to resume. 





-----------

### MLMediaFormat_Key_Parameter_Set_Suspend_Time {#mlmediaformatkey-mlmediaformat-key-parameter-set-suspend-time}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Parameter_Set_Suspend_Time;
```

When PARAMETER_KEY_SUSPEND is present, the client can also optionally use this key to specify the timestamp (in micro-second) at which the suspend/resume operation takes effect. 

Note that the specified timestamp must be greater than or equal to the timestamp of any previously queued suspend/resume operations.

The value is a long int, indicating the timestamp to suspend/resume. 





-----------

### MLMediaFormat_Key_Parameter_Drop_Before {#mlmediaformatkey-mlmediaformat-key-parameter-drop-before}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Parameter_Drop_Before;
```

A key describing the desired before which frames are to be skipped. 

The associated value is a long int, indicating the timestamp (in microseconds) to be applied. 





-----------

### MLMediaFormat_Key_Parameter_Drop_After {#mlmediaformatkey-mlmediaformat-key-parameter-drop-after}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Parameter_Drop_After;
```

A key describing the desired after which frames are to be skipped. 

The associated value is a long int, indicating the timestamp (in microseconds) to be applied. 





-----------

### MLMediaFormat_Key_Parameter_Offset_Time {#mlmediaformatkey-mlmediaformat-key-parameter-offset-time}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Parameter_Offset_Time;
```

Specify an offset (in micro-second) to be added on top of the timestamps onward. 

A typical use case is to apply adjustment to the timestamps after a period of pause by the user. This parameter can only be used on an encoder in "surface-input" mode.

The value is a long int, indicating the timestamp offset to be applied. 





-----------

### MLMediaFormat_Key_Priority {#mlmediaformatkey-mlmediaformat-key-priority}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Priority;
```

A key describing the desired codec priority. 

The associated value can be one of the [MLMediaCodecPriority](/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecpriority) enumeration. This is a hint used at codec configuration and resource planning - to understand the realtime requirements of the application; however, due to the nature of media components, performance is not guaranteed. 





-----------

### MLMediaFormat_Key_Max_B_Frames {#mlmediaformatkey-mlmediaformat-key-max-b-frames}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Max_B_Frames;
```

A key describing the maximum number of B frames between I or P frames, to be used by a video encoder. 

The associated value is an integer. The default value is 0, which means that no B frames are allowed. Note that non-zero value does not guarantee B frames; it's up to the encoder to decide. 





-----------

### MLMediaFormat_Key_Intra_Refresh_Mode {#mlmediaformatkey-mlmediaformat-key-intra-refresh-mode}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Intra_Refresh_Mode;
```

An optional key describing the mode of intra refresh in frames. The associated value is an integer. 

This is an optional parameter that applies only to video encoders. If encoder supports it ([MLMediaCodecListIsIntraRefreshSupported](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisintrarefreshsupported)), the whole frame is completely refreshed after the specified period. Also for each frame, a fixed subset of macroblocks must be intra-coded which leads to a more constant bitrate than inserting a key frame. This key is recommended for video streaming applications as it provides low-delay and good error-resilience. This key is ignored if the video encoder does not support the intra refresh feature. Use the output format to verify that this feature was enabled.

The possible values are defined in [MLMediaCodecIntraRefreshMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecintrarefreshmode). 





-----------

### MLMediaFormat_Key_Intra_Refresh_CIR_Num {#mlmediaformatkey-mlmediaformat-key-intra-refresh-cir-num}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Intra_Refresh_CIR_Num;
```

Number of consecutive macroblocks to be coded as intra when CIR is enabled. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Intra_Refresh_AIR_Num {#mlmediaformatkey-mlmediaformat-key-intra-refresh-air-num}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Intra_Refresh_AIR_Num;
```

Number of intra macroblocks to refresh in a frame when AIR is enabled. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Intra_Refresh_AIR_Ref {#mlmediaformatkey-mlmediaformat-key-intra-refresh-air-ref}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Intra_Refresh_AIR_Ref;
```

Number of times a motion marked macroblock has to be intra coded. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Profile {#mlmediaformatkey-mlmediaformat-key-profile}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Profile;
```

A key describing the desired profile to be used by an encoder. 

The associated value is an integer.

The supported profiles can be queries through [MLMediaCodecListGetSupportedProfileLevels](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels). The values are defined in [MLMediaCodecProfileType](/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecprofiletype) enumeration. This key is used as a further hint when specifying a desired profile, and is only supported for codecs that specify a level. This key is ignored if the profile is not specified. 





-----------

### MLMediaFormat_Key_Level {#mlmediaformatkey-mlmediaformat-key-level}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Level;
```

A key describing the desired level to be used by an encoder. 

The associated value is an integer.

The supported profiles can be queries through [MLMediaCodecListGetSupportedProfileLevels](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels). The values are defined in [MLMediaCodecLevelType](/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecleveltype) enumeration. This key is used as a further hint when specifying a desired profile, and is only supported for codecs that specify a level. This key is ignored if the level is not specified. 





-----------

### MLMediaFormat_Key_Prepend_Header_To_Sync_Frames {#mlmediaformatkey-mlmediaformat-key-prepend-header-to-sync-frames}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Prepend_Header_To_Sync_Frames;
```

An optional key describing whether encoders prepend headers to sync frames (e.g. SPS and PPS to IDR frames for H.264). 

This is an optional parameter that applies only to video encoders. A video encoder may not support this feature; the component will fail to configure in that case. For other components, this key is ignored. The value is an integer, with 1 indicating to prepend headers to every sync frame, or 0 otherwise. The default value is 0. 





-----------

### MLMediaFormat_Key_Color_Range {#mlmediaformatkey-mlmediaformat-key-color-range}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Color_Range;
```

An optional key describing the range of the component values of the video content. 

The associated value is an integer: 0 if unspecified, or one of the COLOR_RANGE_ values. 





-----------

### MLMediaFormat_Key_Color_Standard {#mlmediaformatkey-mlmediaformat-key-color-standard}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Color_Standard;
```

An optional key describing the color primaries, white point and luminance factors for video content. 

The associated value is an integer: 0 if unspecified, or one of the COLOR_STANDARD_ values. 





-----------

### MLMediaFormat_Key_Color_Transfer {#mlmediaformatkey-mlmediaformat-key-color-transfer}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Color_Transfer;
```

An optional key describing the opto-electronic transfer function used for the video content. 

The associated value is an integer: 0 if unspecified, or one of the COLOR_TRANSFER_ values. 





-----------

### MLMediaFormat_Key_HDR_Static_Info {#mlmediaformatkey-mlmediaformat-key-hdr-static-info}

```cpp
MLMediaFormatKey MLMediaFormat_Key_HDR_Static_Info;
```

An optional key describing the static metadata of HDR (high-dynamic-range) video content. 

The associated value is a ByteBuffer. This buffer contains the raw contents of the Static Metadata Descriptor (including the descriptor ID) of an HDMI Dynamic Range and Mastering InfoFrame as defined by CTA-861.3. This key must be provided to video decoders for HDR video content unless this information is contained in the bitstream and the video decoder supports an HDR-capable profile. This key must be provided to video encoders for HDR video content. 





-----------

### MLMediaFormat_Key_CSD {#mlmediaformatkey-mlmediaformat-key-csd}

```cpp
MLMediaFormatKey MLMediaFormat_Key_CSD;
```

A key describing the codec specific data. 

Codec-specific data in the format is automatically submitted to the codec upon start(); you MUST NOT submit this data explicitly.

The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_CSD0 {#mlmediaformatkey-mlmediaformat-key-csd0}

```cpp
MLMediaFormatKey MLMediaFormat_Key_CSD0;
```

A key describing the codec specific data buffer #0. 

Codec-specific data in the format is automatically submitted to the codec upon start(); you MUST NOT submit this data explicitly.

The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_CSD1 {#mlmediaformatkey-mlmediaformat-key-csd1}

```cpp
MLMediaFormatKey MLMediaFormat_Key_CSD1;
```

A key describing the codec specific data buffer #1. 

Codec-specific data in the format is automatically submitted to the codec upon start(); you MUST NOT submit this data explicitly.

The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_CSD2 {#mlmediaformatkey-mlmediaformat-key-csd2}

```cpp
MLMediaFormatKey MLMediaFormat_Key_CSD2;
```

A key describing the codec specific data buffer #2. 

Codec-specific data in the format is automatically submitted to the codec upon start(); you MUST NOT submit this data explicitly.

The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_CSD_Avc {#mlmediaformatkey-mlmediaformat-key-csd-avc}

```cpp
MLMediaFormatKey MLMediaFormat_Key_CSD_Avc;
```

A key describing the codec specific data buffer for AVC (h.264). 

Codec-specific data in the format is automatically submitted to the codec upon start(); you MUST NOT submit this data explicitly.

The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_CSD_Hevc {#mlmediaformatkey-mlmediaformat-key-csd-hevc}

```cpp
MLMediaFormatKey MLMediaFormat_Key_CSD_Hevc;
```

A key describing the codec specific data buffer for HEVC (h.265). 

Codec-specific data in the format is automatically submitted to the codec upon start(); you MUST NOT submit this data explicitly.

The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Album {#mlmediaformatkey-mlmediaformat-key-album}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Album;
```

A key describing metadata - album title of the media. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Albumart {#mlmediaformatkey-mlmediaformat-key-albumart}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Albumart;
```

A key describing metadata. The artwork for the album of the media's original source as a Bitmap. 

The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Albumartist {#mlmediaformatkey-mlmediaformat-key-albumartist}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Albumartist;
```

A key describing metadata. The artist for the album of the media's original source. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Artist {#mlmediaformatkey-mlmediaformat-key-artist}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Artist;
```

A key describing metadata. The artist of the media. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Audio_Presentation_Info {#mlmediaformatkey-mlmediaformat-key-audio-presentation-info}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Audio_Presentation_Info;
```

A key describing metadata. The media presentation info. 

The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Audio_Presentation_Presentation_Id {#mlmediaformatkey-mlmediaformat-key-audio-presentation-presentation-id}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Audio_Presentation_Presentation_Id;
```

A key describing metadata. The media presentation Id. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Audio_Presentation_Program_Id {#mlmediaformatkey-mlmediaformat-key-audio-presentation-program-id}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Audio_Presentation_Program_Id;
```

A key describing metadata. The media program Id. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Audio_Session_Id {#mlmediaformatkey-mlmediaformat-key-audio-session-id}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Audio_Session_Id;
```

A key describing the audio session ID of the AudioTrack associated to a tunneled video codec. 

The associated value is an integer.



**See**: MLMediaCodecBitrateMode::FEATURE_TunneledPlayback 



-----------

### MLMediaFormat_Key_Author {#mlmediaformatkey-mlmediaformat-key-author}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Author;
```

A key describing metadata. The author of the media. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Bits_Per_Sample {#mlmediaformatkey-mlmediaformat-key-bits-per-sample}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Bits_Per_Sample;
```

Key representing media number of bits per sample. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Cdtracknumber {#mlmediaformatkey-mlmediaformat-key-cdtracknumber}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Cdtracknumber;
```

A key describing metadata. The cd track number. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Compilation {#mlmediaformatkey-mlmediaformat-key-compilation}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Compilation;
```

A key describing metadata. The media compilation. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Complexity {#mlmediaformatkey-mlmediaformat-key-complexity}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Complexity;
```

A key describing the encoding complexity. 

The associated value is an integer. These values are device and codec specific, but lower values generally result in faster and/or less power-hungry encoding.



**See**: MediaCodecInfo.EncoderCapabilities::getComplexityRange() 



-----------

### MLMediaFormat_Key_Composer {#mlmediaformatkey-mlmediaformat-key-composer}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Composer;
```

A key describing metadata - composer of the media. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Create_Input_Surface_Suspended {#mlmediaformatkey-mlmediaformat-key-create-input-surface-suspended}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Create_Input_Surface_Suspended;
```

If specified when configuring a video encoder that's in "surface-input" mode, it will instruct the encoder to put the surface source in suspended state when it's connected. 

No video frames will be accepted until a resume operation (see MediaCodec::PARAMETER_KEY_SUSPEND ), optionally with timestamp specified via MediaCodec::PARAMETER_KEY_SUSPEND_TIME , is received.

The value is an integer, with 1 indicating to create with the surface source suspended, or 0 otherwise. The default value is 0.

If this key is not set or set to 0, the surface source will accept buffers as soon as it's connected to the encoder (although they may not be encoded immediately). This key can be used when the client wants to prepare the encoder session in advance, but do not want to accept buffers immediately. 





-----------

### MLMediaFormat_Key_Crypto_Default_Iv_Size {#mlmediaformatkey-mlmediaformat-key-crypto-default-iv-size}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crypto_Default_Iv_Size;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Crypto_Encrypted_Byte_Block {#mlmediaformatkey-mlmediaformat-key-crypto-encrypted-byte-block}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crypto_Encrypted_Byte_Block;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Crypto_Encrypted_Sizes {#mlmediaformatkey-mlmediaformat-key-crypto-encrypted-sizes}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crypto_Encrypted_Sizes;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Crypto_Iv {#mlmediaformatkey-mlmediaformat-key-crypto-iv}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crypto_Iv;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Crypto_Key {#mlmediaformatkey-mlmediaformat-key-crypto-key}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crypto_Key;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Crypto_Mode {#mlmediaformatkey-mlmediaformat-key-crypto-mode}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crypto_Mode;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Crypto_Plain_Sizes {#mlmediaformatkey-mlmediaformat-key-crypto-plain-sizes}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crypto_Plain_Sizes;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Crypto_Skip_Byte_Block {#mlmediaformatkey-mlmediaformat-key-crypto-skip-byte-block}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crypto_Skip_Byte_Block;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_D263 {#mlmediaformatkey-mlmediaformat-key-d263}

```cpp
MLMediaFormatKey MLMediaFormat_Key_D263;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Date {#mlmediaformatkey-mlmediaformat-key-date}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Date;
```

A key describing metadata - The date the media was created or published. The format is unspecified but RFC 3339 is recommended. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Discnumber {#mlmediaformatkey-mlmediaformat-key-discnumber}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Discnumber;
```

A key describing metadata. The disc number for the media's original source. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Display_Crop {#mlmediaformatkey-mlmediaformat-key-display-crop}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Display_Crop;
```

A key describing display crop rectangle. 

The associated value is a string of format "Rect %s(%d, %d, %d, %d)" where the value meaning is: "Rect name(left, top, right, bottom)". 





-----------

### MLMediaFormat_Key_Display_Height {#mlmediaformatkey-mlmediaformat-key-display-height}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Display_Height;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Display_Width {#mlmediaformatkey-mlmediaformat-key-display-width}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Display_Width;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Encoder_Delay {#mlmediaformatkey-mlmediaformat-key-encoder-delay}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Encoder_Delay;
```

A key describing the number of frames to trim from the start of the decoded audio stream. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Encoder_Padding {#mlmediaformatkey-mlmediaformat-key-encoder-padding}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Encoder_Padding;
```

A key describing the number of frames to trim from the end of the decoded audio stream. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Esds {#mlmediaformatkey-mlmediaformat-key-esds}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Esds;
```

A key describing the electrostatic discharge and soldering (ESDS). 

The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Exif_Offset {#mlmediaformatkey-mlmediaformat-key-exif-offset}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Exif_Offset;
```


The associated value is a long integer. 





-----------

### MLMediaFormat_Key_Exif_Size {#mlmediaformatkey-mlmediaformat-key-exif-size}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Exif_Size;
```


The associated value is a long integer. 





-----------

### MLMediaFormat_Key_Frame_Count {#mlmediaformatkey-mlmediaformat-key-frame-count}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Frame_Count;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Genre {#mlmediaformatkey-mlmediaformat-key-genre}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Genre;
```

A key describing metadata. The media genre. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Grid_Columns {#mlmediaformatkey-mlmediaformat-key-grid-columns}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Grid_Columns;
```

A key describing the number of grid columns in the content in a MIMETYPE_IMAGE_ANDROID_HEIC track. 

The associated value is an integer.

Refer to MIMETYPE_IMAGE_ANDROID_HEIC on decoding instructions of such tracks.



**See**: 

  * [MLMediaFormat_Key_Tile_Width](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-width)
  * [MLMediaFormat_Key_Tile_Height](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-height)
  * [MLMediaFormat_Key_Grid_Rows](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-rows)




-----------

### MLMediaFormat_Key_Grid_Rows {#mlmediaformatkey-mlmediaformat-key-grid-rows}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Grid_Rows;
```

A key describing the number of grid rows in the content in a MIMETYPE_IMAGE_ANDROID_HEIC track. 

The associated value is an integer.

Refer to MIMETYPE_IMAGE_ANDROID_HEIC on decoding instructions of such tracks.



**See**: 

  * [MLMediaFormat_Key_Tile_Width](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-width)
  * [MLMediaFormat_Key_Tile_Height](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-height)
  * [MLMediaFormat_Key_Grid_Columns](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-columns)




-----------

### MLMediaFormat_Key_Haptic_Channel_Count {#mlmediaformatkey-mlmediaformat-key-haptic-channel-count}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Haptic_Channel_Count;
```

A key describing the number of haptic channels in an audio format. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Hdr10_Plus_Info {#mlmediaformatkey-mlmediaformat-key-hdr10-plus-info}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Hdr10_Plus_Info;
```

An optional key describing the HDR10+ metadata of the video content. 

The associated value is a ByteBuffer containing HDR10+ metadata conforming to the user_data_registered_itu_t_t35() syntax of SEI message for ST 2094-40. This key will be present on: 



* The formats of output buffers of a decoder configured for HDR10+ profiles (such as MLMediaCodecListGetSupportedProfileLevels::VP9Profile2HDR10Plus, MLMediaCodecListGetSupportedProfileLevels::VP9Profile3HDR10Plus or MLMediaCodecListGetSupportedProfileLevels::HEVCProfileMain10HDR10Plus), or 


* The formats of output buffers of an encoder configured for an HDR10+ profiles that uses out-of-band metadata (such as MLMediaCodecListGetSupportedProfileLevels::VP9Profile2HDR10Plus or MLMediaCodecListGetSupportedProfileLevels::VP9Profile3HDR10Plus).



**See**: MediaCodec::PARAMETER_KEY_HDR10_PLUS_INFO. 



-----------

### MLMediaFormat_Key_Icc_Profile {#mlmediaformatkey-mlmediaformat-key-icc-profile}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Icc_Profile;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Is_Sync_Frame {#mlmediaformatkey-mlmediaformat-key-is-sync-frame}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Is_Sync_Frame;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Location {#mlmediaformatkey-mlmediaformat-key-location}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Location;
```

A key describing metadata. The media location. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Loop {#mlmediaformatkey-mlmediaformat-key-loop}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Loop;
```

A key describing metadata. The media loop. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Lyricist {#mlmediaformatkey-mlmediaformat-key-lyricist}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Lyricist;
```

A key describing metadata. The media lyricist. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Manufacturer {#mlmediaformatkey-mlmediaformat-key-manufacturer}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Manufacturer;
```

A key describing metadata. The media manufacturer. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Max_Bit_Rate {#mlmediaformatkey-mlmediaformat-key-max-bit-rate}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Max_Bit_Rate;
```

A key describing the max bitrate in bits/sec. 

This is usually over a one-second sliding window (e.g. over any window of one second). The associated value is an integer. \hide 





-----------

### MLMediaFormat_Key_Max_Fps_To_Encoder {#mlmediaformatkey-mlmediaformat-key-max-fps-to-encoder}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Max_Fps_To_Encoder;
```

Instruct the video encoder in "surface-input" mode to drop excessive frames from the source, so that the input frame rate to the encoder does not exceed the specified fps. 

The associated value is a float, representing the max frame rate to feed the encoder at. 





-----------

### MLMediaFormat_Key_Max_Pts_Gap_To_Encoder {#mlmediaformatkey-mlmediaformat-key-max-pts-gap-to-encoder}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Max_Pts_Gap_To_Encoder;
```

Instruct the video encoder in "surface-input" mode to limit the gap of timestamp between any two adjacent frames fed to the encoder to the specified amount (in micro-second). 

The associated value is a long int. When positive, it represents the max timestamp gap between two adjacent frames fed to the encoder. When negative, the absolute value represents a fixed timestamp gap between any two adjacent frames fed to the encoder. Note that this will also apply even when the original timestamp goes backward in time. Under normal conditions, such frames would be dropped and not sent to the encoder.

The output timestamp will be restored to the original timestamp and will not be affected.

This is used in some special scenarios where input frames arrive sparingly but it's undesirable to allocate more bits to any single frame, or when it's important to ensure all frames are captured (rather than captured in the correct order). 





-----------

### MLMediaFormat_Key_Mpeg_User_Data {#mlmediaformatkey-mlmediaformat-key-mpeg-user-data}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Mpeg_User_Data;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Mpeg2_Stream_Header {#mlmediaformatkey-mlmediaformat-key-mpeg2-stream-header}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Mpeg2_Stream_Header;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_PCM_Big_Endian {#mlmediaformatkey-mlmediaformat-key-pcm-big-endian}

```cpp
MLMediaFormatKey MLMediaFormat_Key_PCM_Big_Endian;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Pssh {#mlmediaformatkey-mlmediaformat-key-pssh}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Pssh;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Rotation {#mlmediaformatkey-mlmediaformat-key-rotation}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Rotation;
```

A key describing the desired clockwise rotation on an output surface. 

This key is only used when the codec is configured using an output surface. The associated value is an integer, representing degrees. Supported values are 0, 90, 180 or 270. This is an optional field; if not specified, rotation defaults to 0.



**See**: MLMediaCodecBitrateMode::profileLevels 



-----------

### MLMediaFormat_Key_Sar_Height {#mlmediaformatkey-mlmediaformat-key-sar-height}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Sar_Height;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Sar_Width {#mlmediaformatkey-mlmediaformat-key-sar-width}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Sar_Width;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Sei {#mlmediaformatkey-mlmediaformat-key-sei}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Sei;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Slice_Height {#mlmediaformatkey-mlmediaformat-key-slice-height}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Slice_Height;
```

A key describing the plane height of a multi-planar (YUV) video bytebuffer layout. 

Slice height (or plane height/vertical stride) is the number of rows that must be skipped to get from the top of the Y plane to the top of the U plane in the bytebuffer. In essence the offset of the U plane is sliceHeight * stride. The height of the U/V planes can be calculated based on the color format, though it is generally undefined and depends on the device and release. The associated value is an integer, representing the number of rows. 





-----------

### MLMediaFormat_Key_Target_Time {#mlmediaformatkey-mlmediaformat-key-target-time}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Target_Time;
```


The associated value is a long integer. 





-----------

### MLMediaFormat_Key_Temporal_Layer_Count {#mlmediaformatkey-mlmediaformat-key-temporal-layer-count}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Temporal_Layer_Count;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Temporal_Layer_Id {#mlmediaformatkey-mlmediaformat-key-temporal-layer-id}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Temporal_Layer_Id;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Text_Format_Data {#mlmediaformatkey-mlmediaformat-key-text-format-data}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Text_Format_Data;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Thumbnail_CSD_Hevc {#mlmediaformatkey-mlmediaformat-key-thumbnail-csd-hevc}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Thumbnail_CSD_Hevc;
```


The associated value is an [MLMediaFormatByteArray](/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Thumbnail_Height {#mlmediaformatkey-mlmediaformat-key-thumbnail-height}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Thumbnail_Height;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Thumbnail_Time {#mlmediaformatkey-mlmediaformat-key-thumbnail-time}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Thumbnail_Time;
```


The associated value is a long integer. 





-----------

### MLMediaFormat_Key_Thumbnail_Width {#mlmediaformatkey-mlmediaformat-key-thumbnail-width}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Thumbnail_Width;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Tile_Height {#mlmediaformatkey-mlmediaformat-key-tile-height}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Tile_Height;
```

A key describing the height (in pixels) of each tile of the content in a MIMETYPE_IMAGE_ANDROID_HEIC track. The associated value is an integer. 

Refer to MIMETYPE_IMAGE_ANDROID_HEIC on decoding instructions of such tracks.



**See**: 

  * [MLMediaFormat_Key_Tile_Width](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-width)
  * [MLMediaFormat_Key_Grid_Rows](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-rows)
  * [MLMediaFormat_Key_Grid_Columns](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-columns)




-----------

### MLMediaFormat_Key_Tile_Width {#mlmediaformatkey-mlmediaformat-key-tile-width}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Tile_Width;
```

A key describing the width (in pixels) of each tile of the content in a MIMETYPE_IMAGE_ANDROID_HEIC track. The associated value is an integer. 

Refer to MIMETYPE_IMAGE_ANDROID_HEIC on decoding instructions of such tracks.



**See**: 

  * [MLMediaFormat_Key_Tile_Height](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-height)
  * [MLMediaFormat_Key_Grid_Rows](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-rows)
  * [MLMediaFormat_Key_Grid_Columns](/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-columns)




-----------

### MLMediaFormat_Key_Time_Us {#mlmediaformatkey-mlmediaformat-key-time-us}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Time_Us;
```


The associated value is a long integer. 





-----------

### MLMediaFormat_Key_Title {#mlmediaformatkey-mlmediaformat-key-title}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Title;
```

A key describing metadata. The title of the media. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_Track_Id {#mlmediaformatkey-mlmediaformat-key-track-id}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Track_Id;
```

A key describing a unique ID for the content of a media track. 

This key is used by MLMediaExtractor. Some extractors provide multiple encodings of the same track (e.g. float audio tracks for FLAC and WAV may be expressed as two tracks via MediaExtractor: a normal PCM track for backward compatibility, and a float PCM track for added fidelity. Similarly, Dolby Vision extractor may provide a baseline SDR version of a DV track.) This key can be used to identify which MediaExtractor tracks refer to the same underlying content. 

The associated value is an integer. 





-----------

### MLMediaFormat_Key_Track_Index {#mlmediaformatkey-mlmediaformat-key-track-index}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Track_Index;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Valid_Samples {#mlmediaformatkey-mlmediaformat-key-valid-samples}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Valid_Samples;
```


The associated value is an integer. 





-----------

### MLMediaFormat_Key_Year {#mlmediaformatkey-mlmediaformat-key-year}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Year;
```

A key describing metadata. The year the media was created or published as a long. 

The associated value is a string. 





-----------

### MLMediaFormat_Key_AAC_DRC_Effect_Type {#mlmediaformatkey-mlmediaformat-key-aac-drc-effect-type}

```cpp
MLMediaFormatKey MLMediaFormat_Key_AAC_DRC_Effect_Type;
```

A key describing for selecting the DRC effect type for MPEG-D DRC. 

The supported values are defined in ISO/IEC 23003-4:2015 and are described as follows: 
| Value | Effect  |
|  -------- | -------- |
| -1 | Off  |
| 0 | None  |
| 1 | Late night  |
| 2 | Noisy environment  |
| 3 | Limited playback range  |
| 4 | Low playback level  |
| 5 | Dialog enhancement  |
| 6 | General compression  |


The value -1 (Off) disables DRC processing, while loudness normalization may still be active and dependent on KEY_AAC_DRC_TARGET_REFERENCE_LEVEL.

 The value 0 (None) automatically enables DRC processing if necessary to prevent signal clipping

 The value 6 (General compression) can be used for enabling MPEG-D DRC without particular DRC effect type request.

 The default DRC effect type is 3 ("Limited playback range") on mobile devices. 

This key is only used during decoding. 





-----------

### MLMediaFormat_Key_Quality {#mlmediaformatkey-mlmediaformat-key-quality}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Quality;
```

A key describing the desired encoding quality. 

The associated value is an integer. This key is only supported for encoders that are configured in constant-quality mode. These values are device and codec specific, but lower values generally result in more efficient (smaller-sized) encoding.



**See**: MediaCodecInfo.EncoderCapabilities::getQualityRange() 



-----------

### MLMediaFormat_Key_Output_Reorder_Depth {#mlmediaformatkey-mlmediaformat-key-output-reorder-depth}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Output_Reorder_Depth;
```

An optional key describing the maximum number of non-display-order coded frames. 

This is an optional parameter that applies only to video encoders. Application should check the value for this key in the output format to see if codec will produce non-display-order coded frames. If encoder supports it, the output frames' order will be different from the display order and each frame's display order could be retrieved from MLMediaCodec.BufferInfo::presentationTimeUs . Before API level 27, application may receive non-display-order coded frames even though the application did not request it. Note: Application should not rearrange the frames to display order before feeding them to MLMediaMuxer::writeSampleData . 

The default value is 0. 





-----------

### MLMediaFormat_Key_Is_Timed_Text {#mlmediaformatkey-mlmediaformat-key-is-timed-text}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Is_Timed_Text;
```


The associated value is an integer. The value should be 0 or 1. 





-----------

### MLMediaFormat_Key_Ca_System_Id {#mlmediaformatkey-mlmediaformat-key-ca-system-id}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Ca_System_Id;
```

A key describing the system id of the conditional access system used to scramble a media track. 

This key is set by MLMediaExtractor if the track is scrambled with a conditional access system, regardless of the presence of a valid MediaCas object. 

The associated value is an integer. \hide 





-----------

### MLMediaFormat_Key_Ca_Session_Id {#mlmediaformatkey-mlmediaformat-key-ca-session-id}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Ca_Session_Id;
```

A key describing the MediaCas.Session object associated with a media track. 

This key is set by MLMediaExtractor if the track is scrambled with a conditional access system, after it receives a valid MediaCas} object. 

The associated value is a ByteBuffer. \hide 





-----------

### MLMediaFormat_Key_Ca_Private_Data {#mlmediaformatkey-mlmediaformat-key-ca-private-data}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Ca_Private_Data;
```

A key describing the private data in the CA_descriptor associated with a media track. 

This key is set by MLMediaExtractor if the track is scrambled with a conditional access system, before it receives a valid MediaCas object. 

The associated value is a ByteBuffer. \hide 





-----------

### MLMediaFormat_Key_Feature_ {#mlmediaformatkey-mlmediaformat-key-feature-}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Feature_;
```

A key prefix used together with a [MLMediaCodecBitrateMode](/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecbitratemode) feature name describing a required or optional feature for a codec capabilities query. 

The associated value is an integer, where non-0 value means the feature is requested to be present, while 0 value means the feature is requested to be not present. 



**See**: 

  * MLMediaCodecList::findDecoderForFormat 
  * MLMediaCodecList::findEncoderForFormat 
  * MLMediaCodecBitrateMode::isFormatSupported \hide 




-----------

### MLTTMLDimen_Unset {#const-float-mlttmldimen-unset}

```cpp
static const float MLTTMLDimen_Unset = -3.402823466e+38F;
```

An unset position, width or size which is negative of maximum finite value of float (-FLT_MAX). 




**API Level:**
  * 20




-----------

### size {#size-t-size}

```cpp
size_t size;
```


Image size in bytes. 





-----------

### data {#uint8-t-data}

```cpp
uint8_t * data;
```


Byte data of the image. 





-----------

### start_time_ms {#int64-t-start-time-ms}

```cpp
int64_t start_time_ms;
```


Track cue start time in milliseconds. 





-----------

### end_time_ms {#int64-t-end-time-ms}

```cpp
int64_t end_time_ms;
```


Track cue end time in milliseconds. 





-----------

### text {#char-text}

```cpp
char * text;
```


The cue text encoded as UTF-8. Or null if this is an image cue. 





-----------

### text_alignment {#mlttmllayoutalignment-text-alignment}

```cpp
MLTTMLLayoutAlignment text_alignment;
```



| Type | Description |
|--|--|
| [MLTTMLLayoutAlignment](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllayoutalignment) | Cue text alignment within the cue box.  |


The alignment of the cue text within the cue box. 





-----------

### bitmap {#mlttmlimage-bitmap}

```cpp
MLTTMLImage bitmap;
```



| Type | Description |
|--|--|
| [MLTTMLImage](/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_image.md) | Byte data for TTML image cues.  |


The cue image if this is an image cue, an empty image otherwise. 





-----------

### line {#float-line}

```cpp
float line;
```

The position of the [line_anchor](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmlanchortype-line-anchor) of the cue box within the viewport in the direction orthogonal to the writing direction, or MLTTMLDimen_Unset. 

When set, the interpretation of the value depends on the value of [line_type](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmllinetype-line-type). For horizontal text and [line_type](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmllinetype-line-type) equal to [MLTTMLLineType_Fraction](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype-fraction), this is the fractional vertical position relative to the top of the viewport. 





-----------

### line_type {#mlttmllinetype-line-type}

```cpp
MLTTMLLineType line_type;
```

The cue line type. 


| Type | Description |
|--|--|
| [MLTTMLLineType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype) | Cue line type.  |


[MLTTMLLineType_Fraction](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype-fraction) indicates that [line](/api-ref/api/Modules/group___media_player/group___media_player.md#float-line) is a fractional position within the viewport.

[MLTTMLLineType_Number](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype-number) indicates that [line](/api-ref/api/Modules/group___media_player/group___media_player.md#float-line) is a line number, where the size of each line is taken to be the size of the first line of the cue. When [line](/api-ref/api/Modules/group___media_player/group___media_player.md#float-line) is greater than or equal to 0 lines count from the start of the viewport, with 0 indicating zero offset from the start edge. When [line](/api-ref/api/Modules/group___media_player/group___media_player.md#float-line) is negative lines count from the end of the viewport, with -1 indicating zero offset from the end edge. For horizontal text the line spacing is the height of the first line of the cue, and the start and end of the viewport are the top and bottom respectively.

Note that it's particularly important to consider the effect of [line_anchor](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmlanchortype-line-anchor) when using [MLTTMLLineType_Number](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype-number).

```cpp

(line == 0 && line_anchor == MLTTMLAnchorType_Start) 
```

 Positions a (potentially multi-line) cue at the very top of the viewport.

```cpp

(line == -1 && line_anchor == MLTTMLAnchorType_EndD) 
```

 Positions a (potentially multi-line) cue at the very bottom of the viewport.

```cpp

(line == 0 && line_anchor == MLTTMLAnchorType_End) 
```

 and ```cpp

(line == -1 && line_anchor == MLTTMLAnchorType_Start) 
```

 Position cues entirely outside of the viewport.

```cpp

(line == 1 && line_anchor == MLTTMLAnchorType_End) 
```

 Positions a cue so that only the last line is visible at the top of the viewport.

```cpp

(line == -2 && line_anchor == MLTTMLAnchorType_Start) 
```

 Position a cue so that only its first line is visible at the bottom of the viewport. 





-----------

### line_anchor {#mlttmlanchortype-line-anchor}

```cpp
MLTTMLAnchorType line_anchor;
```



| Type | Description |
|--|--|
| [MLTTMLAnchorType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype) | Cue anchor type.  |


The cue box anchor in the direction of line. 





-----------

### position {#float-position}

```cpp
float position;
```

The fractional position of the [position_anchor](/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmlanchortype-position-anchor) of the cue box within the viewport in the direction orthogonal to [line](/api-ref/api/Modules/group___media_player/group___media_player.md#float-line), or MLTTMLDimen_Unset. 

For horizontal text, this is the horizontal position relative to the left of the viewport. Note that positioning is relative to the left of the viewport even in the case of right-to-left text. 





-----------

### position_anchor {#mlttmlanchortype-position-anchor}

```cpp
MLTTMLAnchorType position_anchor;
```



| Type | Description |
|--|--|
| [MLTTMLAnchorType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype) | Cue anchor type.  |


The cue box anchor in the direction of position. 





-----------

### size {#float-size}

```cpp
float size;
```


The cue box size in the writing direction, as a fraction of the viewport size or MLTTMLDimen_Unset. 





-----------

### bitmap_height {#float-bitmap-height}

```cpp
float bitmap_height;
```


The cue bitmap height as a fraction of the viewport size or MLTTMLDimen_Unset if the bitmap should be displayed at its natural height given the bitmap dimensions and the specified [size](/api-ref/api/Modules/group___media_player/group___media_player.md#float-size). 





-----------

### window_color_set {#bool-window-color-set}

```cpp
bool window_color_set;
```


Specifies whether or not the [window_color](/api-ref/api/Modules/group___media_player/group___media_player.md#uint32-t-window-color) property is set. 





-----------

### window_color {#uint32-t-window-color}

```cpp
uint32_t window_color;
```


The cue window fill color in ARGB format. 





-----------

### text_size_type {#mlttmltextsizetype-text-size-type}

```cpp
MLTTMLTextSizeType text_size_type;
```



| Type | Description |
|--|--|
| [MLTTMLTextSizeType](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype) | Cue text size type.  |


The cue default text size type, or [MLTTMLTextSizeType_Unset](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype-unset) if this cue has no default text size. 





-----------

### text_size {#float-text-size}

```cpp
float text_size;
```


The cue default text size, or MLTTMLDimen_Unset if this cue has no default. 





-----------

### start_time_ms {#int64-t-start-time-ms}

```cpp
int64_t start_time_ms;
```


Track cue start time in milliseconds. 





-----------

### end_time_ms {#int64-t-end-time-ms}

```cpp
int64_t end_time_ms;
```


Track cue end time in milliseconds. 





-----------

### body {#char-body}

```cpp
char * body;
```


WebVTT file body encoded as UTF-8. 





-----------

### id {#char-id}

```cpp
char * id;
```


A sequence of characters unique amongst all the WebVTT cue identifiers. 





-----------

### snap_to_lines {#bool-snap-to-lines}

```cpp
bool snap_to_lines;
```


A boolean indicating whether the line is an integer number of lines. 





-----------

### orientation {#mlwebvttorientation-orientation}

```cpp
MLWebVTTOrientation orientation;
```



| Type | Description |
|--|--|
| [MLWebVTTOrientation](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttorientation) | Cue orientation setting.  |


Orientation of the cue. 





-----------

### direction {#mlwebvttdirection-direction}

```cpp
MLWebVTTDirection direction;
```



| Type | Description |
|--|--|
| [MLWebVTTDirection](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttdirection) | Cue direction setting.  |


The writing direction. 





-----------

### relative_line_position {#float-relative-line-position}

```cpp
float relative_line_position;
```


Relative cue line position. 





-----------

### line_number {#int32-t-line-number}

```cpp
int32_t line_number;
```


WebVTT cue line number. 





-----------

### text_position {#float-text-position}

```cpp
float text_position;
```


The indent of the cue box in the direction defined by the writing direction. 





-----------

### size {#float-size}

```cpp
float size;
```


WebVTT cue size. 





-----------

### align {#mlwebvttalign-align}

```cpp
MLWebVTTAlign align;
```



| Type | Description |
|--|--|
| [MLWebVTTAlign](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttalign) | Cue aligment setting.  |


WebVTT cue text alignment. 





-----------


## Macros Documentation

### MAX_CODEC_NAME_SIZE {#defines-max-codec-name-size}

```cpp
#define MAX_CODEC_NAME_SIZE 64
```






-----------

### MAX_CODEC_NAME_LENGTH {#defines-max-codec-name-length}

```cpp
#define MAX_CODEC_NAME_LENGTH 64
```






-----------

### MAX_FORMAT_STRING_SIZE {#defines-max-format-string-size}

```cpp
#define MAX_FORMAT_STRING_SIZE 512
```






-----------

### MAX_KEY_STRING_SIZE {#defines-max-key-string-size}

```cpp
#define MAX_KEY_STRING_SIZE 64
```






-----------



