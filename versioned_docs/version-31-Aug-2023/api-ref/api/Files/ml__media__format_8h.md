---
title: ml_media_format.h

---

# ml_media_format.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) | **[MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediaformatbytearray)**  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLMediaFormatAudioEncoding](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaformataudioencoding)** <br></br> { <br></br>[MLMediaFormatAudioEncoding_PCM16Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__format_8h.md#enums-mlmediaformataudioencoding-pcm16bits) = 2,<br></br> [MLMediaFormatAudioEncoding_PCM8Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__format_8h.md#enums-mlmediaformataudioencoding-pcm8bits) = 3,<br></br> [MLMediaFormatAudioEncoding_PCMFloat](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__format_8h.md#enums-mlmediaformataudioencoding-pcmfloat) = 4,<br></br> [MLMediaFormatAudioEncoding_PCM32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__format_8h.md#enums-mlmediaformataudioencoding-pcm32bits) = 201,<br></br> [MLMediaFormatAudioEncoding_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__format_8h.md#enums-mlmediaformataudioencoding-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatCreateVideo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatevideo)**(const char * mime_type, int width, int height, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a video format object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatCreateAudio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreateaudio)**(const char * mime_type, int sample_rate, int channel_count, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a audio format object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatCreateSubtitle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatesubtitle)**(const char * mime_type, const char * language, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a subtitle format object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create an empty format object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatCreateCopy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatcreatecopy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a copy of the format handle provided.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroy a MLMediaFormat object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatObjectToString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatobjecttostring)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, char * out_string)<br></br>Obtain the human readable representation of the format.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatGetKeyValueInt32](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeyvalueint32)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, int32_t * out_key)<br></br>Obtain the value of an integer key.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatGetKeyValueInt64](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeyvalueint64)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, int64_t * out_key)<br></br>Obtain the value of a long key.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatGetKeyValueFloat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeyvaluefloat)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, float * out_key)<br></br>Obtain the value of an float key.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatGetKeySize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeysize)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, size_t * out_size)<br></br>Obtain the size of a key.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatGetKeyString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeystring)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, char * out_string)<br></br>Obtain the value of a string key.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatGetKeyByteBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatgetkeybytebuffer)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) * out_buffer)<br></br>Obtain the value of a ByteBuffer key.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatKeyByteBufferRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatkeybytebufferrelease)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) * buffer)<br></br>Release the ByteBuffer acquired by MLMediaFormatGetKeyByteBuffer.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatSetKeyInt32](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeyint32)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, int32_t key_value)<br></br>Set the value of an integer key.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatSetKeyInt64](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeyint64)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, int64_t key_value)<br></br>Set the value of a long key.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatSetKeyFloat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeyfloat)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, float key_value)<br></br>Set the value of a float key.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatSetKeySize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeysize)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, size_t key_size)<br></br>Set the size of a key.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatSetKeyString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeystring)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, const char * key_value)<br></br>Set the value of a string key.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaFormatSetKeyByteBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatsetkeybytebuffer)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) name, const [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) * buffer)<br></br>Set the value of a ByteBuffer key.  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const typedef char * | **[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_Encoded_Target_Level](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-encoded-target-level)** <br></br>The format of media data (video/audio) is specified as key/value pairs. Below is a list of keys used to set/obtain format values.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_DRC_Boost_Factor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-boost-factor)** <br></br>A key describing the boost factor allowing to adapt the dynamics of the output to the actual listening requirements. This relies on DRC gain sequences that can be transmitted in the encoded bitstream to be able to reduce the dynamics of the output signal upon request. This factor enables the user to select how much of the gains are applied.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_DRC_Attenuation_Factor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-attenuation-factor)** <br></br>A key describing the attenuation factor allowing to adapt the dynamics of the output to the actual listening requirements.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_DRC_Heavy_Compression](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-heavy-compression)** <br></br>A key describing the selection of the heavy compression profile for DRC.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_DRC_Target_Reference_Level](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-target-reference-level)** <br></br>A key describing a gain to be applied so that the output loudness matches the Target Reference Level. This is typically used to normalize loudness across program items.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_Max_Output_Channel_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-max-output-channel-count)** <br></br>A key describing the maximum number of channels that can be output by the AAC decoder.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_Profile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-profile)** <br></br>A key describing the AAC profile to be used (AAC audio formats only).  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_SBR_Mode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-sbr-mode)** <br></br>A key describing the AAC SBR mode to be used (AAC audio formats only).  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Bit_Rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-bit-rate)** <br></br>A key describing the average bitrate in bits/sec.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Bit_Rate_Mode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-bit-rate-mode)** <br></br>A key describing the desired bitrate mode to be used by an encoder.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Capture_Rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-capture-rate)** <br></br>A key describing the capture rate of a video format in frames/sec.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Channel_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-channel-count)** <br></br>A key describing the number of channels in an audio format.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Channel_Mask](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-channel-mask)** <br></br>A key describing the channel composition of audio content.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Color_Format](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-color-format)** <br></br>A key describing the color format of the content in a video format.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Duration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-duration)** <br></br>A key describing the duration (in microseconds) of the content.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_FLAC_Compression_Level](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-flac-compression-level)** <br></br>A key describing the FLAC compression level to be used (FLAC audio format only).  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Frame_Rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-frame-rate)** <br></br>A key describing the frame rate of a video format in frames/sec.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-height)** <br></br>A key describing the height of the content in a video format.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_I_Frame_Interval](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-i-frame-interval)** <br></br>A key describing the frequency of key frames expressed in seconds between key frames.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Intra_Refresh_Period](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-intra-refresh-period)** <br></br>An optional key describing the period of intra refresh in frames.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Is_ADTS](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-is-adts)** <br></br>A key mapping to a value of 1 if the content is AAC audio and audio frames are prefixed with an ADTS header.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Is_Autoselect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-is-autoselect)** <br></br>A key for boolean AUTOSELECT behavior for the track. Tracks with AUTOSELECT=true are considered when automatically selecting a track without specific user choice, based on the current locale. This is currently only used for subtitle tracks, when the user selected 'Default' for the captioning locale. The associated value is an integer, where non-0 means TRUE. This is an optional field; if not specified, AUTOSELECT defaults to TRUE.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Is_Default](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-is-default)** <br></br>A key for boolean DEFAULT behavior for the track. The track with DEFAULT=true is selected in the absence of a specific user choice.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Is_Forced_Subtitle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-is-forced-subtitle)** <br></br>A key for the FORCED field for subtitle tracks.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Language](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-language)** <br></br>A key describing the language of the content, using either ISO 639-1 or 639-2/T codes.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_Height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-height)** <br></br>A key describing the maximum expected height of the content in a video decoder format, in case there are resolution changes in the video content.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_Input_Size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-input-size)** <br></br>Described by this MediaFormat.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_Width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-width)** <br></br>A key describing the maximum expected width of the content in a video decoder format, in case there are resolution changes in the video content.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Mime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-mime)** <br></br>A key describing the mime type of the MediaFormat.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_PCM_Encoding](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-pcm-encoding)** <br></br>A key describing the raw audio sample encoding/format.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Push_Blank_Buffers_On_Stop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-push-blank-buffers-on-stop)** <br></br>If specified when configuring a video decoder rendering to a surface, causes the decoder to output "blank", i.e. black frames to the surface.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Repeat_Previous_Frame_After](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-repeat-previous-frame-after)** <br></br>Applies only when configuring a video encoder in "surface-input" mode.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Sample_Rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-sample-rate)** <br></br>A key describing the sample rate of an audio format.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Stride](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-stride)** <br></br>A key describing the stride of the video bytebuffer layout.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Temporal_Layering](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-temporal-layering)** <br></br>A key describing the temporal layering schema.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-width)** <br></br>A key describing the width of the content in a video format.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crop_Left](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crop-left)** <br></br>The left-coordinate (x) of the crop rectangle.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crop_Right](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crop-right)** <br></br>The right-coordinate (x) MINUS 1 of the crop rectangle.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crop_Bottom](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crop-bottom)** <br></br>The bottom-coordinate (y) MINUS 1 of the crop rectangle.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crop_Top](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crop-top)** <br></br>The top-coordinate (y) of the crop rectangle.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Operating_Rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-operating-rate)** <br></br>A key describing the desired operating frame rate for video or sample rate for audio that the codec will need to operate at.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Latency](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-latency)** <br></br>An optional key describing the desired encoder latency in frames.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Video_Bitrate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-video-bitrate)** <br></br>A key describing the desired video bitrate.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Request_Sync_Frame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-request-sync-frame)** <br></br>Request that the encoder produce a sync frame "soon".  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Set_Suspend](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-set-suspend)** <br></br>Temporarily suspend/resume encoding of input data.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Set_Suspend_Time](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-set-suspend-time)** <br></br>When PARAMETER_KEY_SUSPEND is present, the client can also optionally use this key to specify the timestamp (in micro-second) at which the suspend/resume operation takes effect.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Drop_Before](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-drop-before)** <br></br>A key describing the desired before which frames are to be skipped.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Drop_After](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-drop-after)** <br></br>A key describing the desired after which frames are to be skipped.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Parameter_Offset_Time](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-parameter-offset-time)** <br></br>Specify an offset (in micro-second) to be added on top of the timestamps onward.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Priority](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-priority)** <br></br>A key describing the desired codec priority.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_B_Frames](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-b-frames)** <br></br>A key describing the maximum number of B frames between I or P frames, to be used by a video encoder.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Intra_Refresh_Mode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-intra-refresh-mode)** <br></br>An optional key describing the mode of intra refresh in frames. The associated value is an integer.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Intra_Refresh_CIR_Num](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-intra-refresh-cir-num)** <br></br>Number of consecutive macroblocks to be coded as intra when CIR is enabled.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Intra_Refresh_AIR_Num](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-intra-refresh-air-num)** <br></br>Number of intra macroblocks to refresh in a frame when AIR is enabled.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Intra_Refresh_AIR_Ref](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-intra-refresh-air-ref)** <br></br>Number of times a motion marked macroblock has to be intra coded.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Profile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-profile)** <br></br>A key describing the desired profile to be used by an encoder.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Level](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-level)** <br></br>A key describing the desired level to be used by an encoder.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Prepend_Header_To_Sync_Frames](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-prepend-header-to-sync-frames)** <br></br>An optional key describing whether encoders prepend headers to sync frames (e.g. SPS and PPS to IDR frames for H.264).  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Color_Range](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-color-range)** <br></br>An optional key describing the range of the component values of the video content.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Color_Standard](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-color-standard)** <br></br>An optional key describing the color primaries, white point and luminance factors for video content.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Color_Transfer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-color-transfer)** <br></br>An optional key describing the opto-electronic transfer function used for the video content.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_HDR_Static_Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-hdr-static-info)** <br></br>An optional key describing the static metadata of HDR (high-dynamic-range) video content.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_CSD](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-csd)** <br></br>A key describing the codec specific data.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_CSD0](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-csd0)** <br></br>A key describing the codec specific data buffer #0.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_CSD1](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-csd1)** <br></br>A key describing the codec specific data buffer #1.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_CSD2](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-csd2)** <br></br>A key describing the codec specific data buffer #2.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_CSD_Avc](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-csd-avc)** <br></br>A key describing the codec specific data buffer for AVC (h.264).  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_CSD_Hevc](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-csd-hevc)** <br></br>A key describing the codec specific data buffer for HEVC (h.265).  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Album](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-album)** <br></br>A key describing metadata - album title of the media.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Albumart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-albumart)** <br></br>A key describing metadata. The artwork for the album of the media's original source as a Bitmap.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Albumartist](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-albumartist)** <br></br>A key describing metadata. The artist for the album of the media's original source.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Artist](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-artist)** <br></br>A key describing metadata. The artist of the media.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Audio_Presentation_Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-audio-presentation-info)** <br></br>A key describing metadata. The media presentation info.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Audio_Presentation_Presentation_Id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-audio-presentation-presentation-id)** <br></br>A key describing metadata. The media presentation Id.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Audio_Presentation_Program_Id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-audio-presentation-program-id)** <br></br>A key describing metadata. The media program Id.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Audio_Session_Id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-audio-session-id)** <br></br>A key describing the audio session ID of the AudioTrack associated to a tunneled video codec.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Author](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-author)** <br></br>A key describing metadata. The author of the media.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Bits_Per_Sample](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-bits-per-sample)** <br></br>Key representing media number of bits per sample.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Cdtracknumber](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-cdtracknumber)** <br></br>A key describing metadata. The cd track number.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Compilation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-compilation)** <br></br>A key describing metadata. The media compilation.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Complexity](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-complexity)** <br></br>A key describing the encoding complexity.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Composer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-composer)** <br></br>A key describing metadata - composer of the media.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Create_Input_Surface_Suspended](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-create-input-surface-suspended)** <br></br>If specified when configuring a video encoder that's in "surface-input" mode, it will instruct the encoder to put the surface source in suspended state when it's connected.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Default_Iv_Size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-default-iv-size)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Encrypted_Byte_Block](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-encrypted-byte-block)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Encrypted_Sizes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-encrypted-sizes)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Iv](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-iv)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Key](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-key)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Mode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-mode)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Plain_Sizes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-plain-sizes)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Crypto_Skip_Byte_Block](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-crypto-skip-byte-block)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_D263](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-d263)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Date](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-date)** <br></br>A key describing metadata - The date the media was created or published. The format is unspecified but RFC 3339 is recommended.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Discnumber](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-discnumber)** <br></br>A key describing metadata. The disc number for the media's original source.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Display_Crop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-display-crop)** <br></br>A key describing display crop rectangle.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Display_Height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-display-height)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Display_Width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-display-width)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Encoder_Delay](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-encoder-delay)** <br></br>A key describing the number of frames to trim from the start of the decoded audio stream.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Encoder_Padding](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-encoder-padding)** <br></br>A key describing the number of frames to trim from the end of the decoded audio stream.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Esds](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-esds)** <br></br>A key describing the electrostatic discharge and soldering (ESDS).  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Exif_Offset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-exif-offset)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Exif_Size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-exif-size)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Frame_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-frame-count)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Genre](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-genre)** <br></br>A key describing metadata. The media genre.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Grid_Columns](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-columns)** <br></br>A key describing the number of grid columns in the content in a MIMETYPE_IMAGE_ANDROID_HEIC track.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Grid_Rows](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-rows)** <br></br>A key describing the number of grid rows in the content in a MIMETYPE_IMAGE_ANDROID_HEIC track.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Haptic_Channel_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-haptic-channel-count)** <br></br>A key describing the number of haptic channels in an audio format.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Hdr10_Plus_Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-hdr10-plus-info)** <br></br>An optional key describing the HDR10+ metadata of the video content.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Icc_Profile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-icc-profile)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Is_Sync_Frame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-is-sync-frame)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Location](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-location)** <br></br>A key describing metadata. The media location.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Loop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-loop)** <br></br>A key describing metadata. The media loop.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Lyricist](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-lyricist)** <br></br>A key describing metadata. The media lyricist.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Manufacturer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-manufacturer)** <br></br>A key describing metadata. The media manufacturer.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_Bit_Rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-bit-rate)** <br></br>A key describing the max bitrate in bits/sec.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_Fps_To_Encoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-fps-to-encoder)** <br></br>Instruct the video encoder in "surface-input" mode to drop excessive frames from the source, so that the input frame rate to the encoder does not exceed the specified fps.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Max_Pts_Gap_To_Encoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-max-pts-gap-to-encoder)** <br></br>Instruct the video encoder in "surface-input" mode to limit the gap of timestamp between any two adjacent frames fed to the encoder to the specified amount (in micro-second).  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Mpeg_User_Data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-mpeg-user-data)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Mpeg2_Stream_Header](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-mpeg2-stream-header)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_PCM_Big_Endian](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-pcm-big-endian)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Pssh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-pssh)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Rotation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-rotation)** <br></br>A key describing the desired clockwise rotation on an output surface.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Sar_Height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-sar-height)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Sar_Width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-sar-width)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Sei](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-sei)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Slice_Height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-slice-height)** <br></br>A key describing the plane height of a multi-planar (YUV) video bytebuffer layout.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Target_Time](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-target-time)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Temporal_Layer_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-temporal-layer-count)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Temporal_Layer_Id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-temporal-layer-id)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Text_Format_Data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-text-format-data)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Thumbnail_CSD_Hevc](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-thumbnail-csd-hevc)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Thumbnail_Height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-thumbnail-height)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Thumbnail_Time](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-thumbnail-time)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Thumbnail_Width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-thumbnail-width)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Tile_Height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-height)** <br></br>A key describing the height (in pixels) of each tile of the content in a MIMETYPE_IMAGE_ANDROID_HEIC track. The associated value is an integer.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Tile_Width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-width)** <br></br>A key describing the width (in pixels) of each tile of the content in a MIMETYPE_IMAGE_ANDROID_HEIC track. The associated value is an integer.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Time_Us](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-time-us)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Title](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-title)** <br></br>A key describing metadata. The title of the media.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Track_Id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-track-id)** <br></br>A key describing a unique ID for the content of a media track.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Track_Index](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-track-index)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Valid_Samples](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-valid-samples)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Year](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-year)** <br></br>A key describing metadata. The year the media was created or published as a long.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_AAC_DRC_Effect_Type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-effect-type)** <br></br>A key describing for selecting the DRC effect type for MPEG-D DRC.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Quality](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-quality)** <br></br>A key describing the desired encoding quality.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Output_Reorder_Depth](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-output-reorder-depth)** <br></br>An optional key describing the maximum number of non-display-order coded frames.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Is_Timed_Text](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-is-timed-text)**  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Ca_System_Id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-ca-system-id)** <br></br>A key describing the system id of the conditional access system used to scramble a media track.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Ca_Session_Id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-ca-session-id)** <br></br>A key describing the MediaCas.Session object associated with a media track.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Ca_Private_Data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-ca-private-data)** <br></br>A key describing the private data in the CA_descriptor associated with a media track.  |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) | **[MLMediaFormat_Key_Feature_](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-feature-)** <br></br>A key prefix used together with a [MLMediaCodecBitrateMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecbitratemode) feature name describing a required or optional feature for a codec capabilities query.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAX_FORMAT_STRING_SIZE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-format-string-size)**  |
|  | **[MAX_KEY_STRING_SIZE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-key-string-size)**  |

## Enums Documentation

### MLMediaFormatAudioEncoding {#enums-mlmediaformataudioencoding}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaFormatAudioEncoding_PCM16Bits |  2| Audio data format: PCM 16 bits per sample. |
| MLMediaFormatAudioEncoding_PCM8Bits |  3| Audio data format: PCM 8 bits per sample. |
| MLMediaFormatAudioEncoding_PCMFloat |  4| Audio data format: single-precision floating-point per sample. |
| MLMediaFormatAudioEncoding_PCM32Bits |  201| Audio data format: PCM 32 bits per sample. |
| MLMediaFormatAudioEncoding_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |








-----------


## Types Documentation

### MLMediaFormatByteArray {#struct-mlmediaformatbytearray}

```cpp
typedef struct MLMediaFormatByteArray MLMediaFormatByteArray;
```


Data type containing byte array buffer and the size. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md)



-----------


## Functions Documentation

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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created video format object. If there is an error during creation, it will return [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If handle cannot be allocated. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created audio format object. If there is an error during creation, it will return [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If handle cannot be allocated. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created subtitle format object. If there is an error during creation, it will return [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If handle cannot be allocated. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created empty format object. If there is an error during creation, it will return [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If handle cannot be allocated. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created copy of the format object. If there is an error during creation, it will return [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|If handle cannot be allocated. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid.|
**Required Permissions**:

  * None 


This can be particularly useful to persist the media format handle/object that was received through the callbacks (as life cycle of those media format objects are with in the callback context only).

The API call to make a copy ensures that the copied object exists until released with [MLMediaFormatDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatdestroy) call.




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If handle is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If MLMediaCodec object was successfully destroyed. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| char * |out_string|Buffer to which stringify the media format. Shouldn't be NULL.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall allocate at least [MAX_FORMAT_STRING_SIZE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-format-string-size) bytes of memory for storing the output format string. The format string contains a list of key-value pairs, which can be extracted individually via the suitable "GetKeyValue" APIs.





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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| int32_t * |out_key|Value of the key.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If name is not one of the media format key name.|
**Required Permissions**:

  * None 


For example, use [MLMediaFormat_Key_Frame_Rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-frame-rate) key to get the framerate of a video track.





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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| int64_t * |out_key|Value of the key.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If name is not one of the media format key name.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| float * |out_key|Value of the key.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If name is not one of the media format key name.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| size_t * |out_size|Size of the key.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If name is not one of the media format key name.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| char * |out_string|Pointer to the C-string representation of the string key.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If name is not one of the media format key name.|
**Required Permissions**:

  * None 


User shall allocate at least [MAX_KEY_STRING_SIZE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-key-string-size) bytes of memory for storing the output key string.





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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) * |out_buffer|Pointer to byte buffer that needs to be allocated and copied to. To free/release, call [MLMediaFormatKeyByteBufferRelease()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaformatkeybytebufferrelease).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NameNotFound|If name is not one of the media format key name.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) * |buffer|Byte buffer that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| int32_t |key_value|Key value.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| int64_t |key_value|Key value.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| float |key_value|Key value.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| size_t |key_size|Key size.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| const char * |key_value|C-string representation of key value.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLMediaFormat object. |
| [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) |name|C-string representation of the key. Must be one of the [MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-typedef-char-mlmediaformatkey) tags defined above. |
| const [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md) * |buffer|Pointer to the data buffer for the corresponding key.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If one of parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation succeeded. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------


## Attributes Documentation

### MLMediaFormatKey {#const-typedef-char-mlmediaformatkey}

```cpp
const typedef char * MLMediaFormatKey;
```






-----------

### MLMediaFormat_Key_AAC_Encoded_Target_Level {#mlmediaformatkey-mlmediaformat-key-aac-encoded-target-level}

```cpp
MLMediaFormatKey MLMediaFormat_Key_AAC_Encoded_Target_Level;
```

The format of media data (video/audio) is specified as key/value pairs. Below is a list of keys used to set/obtain format values. 

A key describing the target reference level that was assumed at the encoder for calculation of attenuation gains for clipping prevention.

If it is known, this information can be provided as an integer value between 0 and 127, which is calculated as -4 * Encoded Target Level in LKFS. If the Encoded Target Level is unknown, the value can be set to -1. 

The default value is -1 (unknown). 

The value is ignored when heavy compression is used (see {[}). ](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-heavy-compression)This key is only used during decoding.

The associated value is an integer. 





-----------

### MLMediaFormat_Key_AAC_DRC_Boost_Factor {#mlmediaformatkey-mlmediaformat-key-aac-drc-boost-factor}

```cpp
MLMediaFormatKey MLMediaFormat_Key_AAC_DRC_Boost_Factor;
```

A key describing the boost factor allowing to adapt the dynamics of the output to the actual listening requirements. This relies on DRC gain sequences that can be transmitted in the encoded bitstream to be able to reduce the dynamics of the output signal upon request. This factor enables the user to select how much of the gains are applied. 

Positive gains (boost) and negative gains (attenuation, see {[}) can be controlled separately for a better match to different use-cases. ](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-attenuation-factor)Typically, attenuation gains are sent for loud signal segments, and boost gains are sent for soft signal segments. If the output is listened to in a noisy environment, for example, the boost factor is used to enable the positive gains, i.e. to amplify soft signal segments beyond the noise floor. But for listening late at night, the attenuation factor is used to enable the negative gains, to prevent loud signal from surprising the listener. In applications which generally need a low dynamic range, both the boost factor and the attenuation factor are used to enable all DRC gains. 

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

See {[} for a description of the role of this attenuation factor and the value range. ](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-boost-factor)The default value is 127 (fully apply attenuation DRC gains). 

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

Note that only light compression offers the features of scaling of DRC gains (see {[} and { #MLMediaFormat_Key_AAC_DRC_Attenuation_Factor} for the boost and attenuation factors, and frequency-selective (multiband) DRC. Light compression usually contains clipping prevention for stereo downmixing while heavy compression, if additionally provided in the bitstream, is usually stronger, and contains clipping prevention for stereo and mono downmixing. ](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-aac-drc-boost-factor)The default is 1 (heavy compression). 

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

Constants are declared in [MLMediaCodecListGetSupportedProfileLevels](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels).

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

Constants are declared in [MLMediaCodecBitrateMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecbitratemode). 





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

Constants are declared in [MLMediaCodecBitrateMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecbitratemode). 





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

The associated value is normally an integer when the value is used by the platform, but video codecs also accept float configuration values. Specifically, MLMediaExtractor::getTrackFormat provides an integer value corresponding to the frame rate information of the track if specified and non-zero. Otherwise, this key is not present. MLMediaCodec::configure accepts both float and integer values. This represents the desired operating frame rate if the {[} is not present and { #MLMediaFormat_Key_Priority} is `0` (realtime). For video encoders this value corresponds to the intended frame rate, although encoders are expected to support variable frame rate based on  MLMediaCodec.BufferInfo#presentationTimeUs buffer timestamp. This key is not used in the  MLMediaCodec#getInputFormat input/ MLMediaCodec#getOutputFormat output formats, nor by  MLMediaMuxer#addTrack. ](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-operating-rate)





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

Most video encoders will convert this value of the number of non-key-frames between key-frames, using the {[frame rate} information; therefore, if the actual frame rate differs (e.g. input frames are dropped or the frame rate changes), the **time interval** between key frames will not be the configured value. ](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-frame-rate) The associated value is an integer (or float since android.os.Build.VERSION_CODES::N_MR1 ). 





-----------

### MLMediaFormat_Key_Intra_Refresh_Period {#mlmediaformatkey-mlmediaformat-key-intra-refresh-period}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Intra_Refresh_Period;
```

An optional key describing the period of intra refresh in frames. 

This is an optional parameter that applies only to video encoders. If encoder supports it ([MLMediaCodecListIsIntraRefreshSupported](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisintrarefreshsupported)), the whole frame is completely refreshed after the specified period. Also for each frame, a fix subset of macroblocks must be intra coded which leads to a more constant bitrate than inserting a key frame. This key is recommended for video streaming applications as it provides low-delay and good error-resilience. This key is ignored if the video encoder does not support the intra refresh feature. Use the output format to verify that this feature was enabled.

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

The associated value is an integer with keys defined by [MLMediaFormatAudioEncoding](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediaformataudioencoding). 





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

The associated value can be one of the [MLMediaCodecPriority](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecpriority) enumeration. This is a hint used at codec configuration and resource planning - to understand the realtime requirements of the application; however, due to the nature of media components, performance is not guaranteed. 





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

This is an optional parameter that applies only to video encoders. If encoder supports it ([MLMediaCodecListIsIntraRefreshSupported](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisintrarefreshsupported)), the whole frame is completely refreshed after the specified period. Also for each frame, a fixed subset of macroblocks must be intra-coded which leads to a more constant bitrate than inserting a key frame. This key is recommended for video streaming applications as it provides low-delay and good error-resilience. This key is ignored if the video encoder does not support the intra refresh feature. Use the output format to verify that this feature was enabled.

The possible values are defined in [MLMediaCodecIntraRefreshMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecintrarefreshmode). 





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

The supported profiles can be queries through [MLMediaCodecListGetSupportedProfileLevels](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels). The values are defined in [MLMediaCodecProfileType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecprofiletype) enumeration. This key is used as a further hint when specifying a desired profile, and is only supported for codecs that specify a level. This key is ignored if the profile is not specified. 





-----------

### MLMediaFormat_Key_Level {#mlmediaformatkey-mlmediaformat-key-level}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Level;
```

A key describing the desired level to be used by an encoder. 

The associated value is an integer.

The supported profiles can be queries through [MLMediaCodecListGetSupportedProfileLevels](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels). The values are defined in [MLMediaCodecLevelType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecleveltype) enumeration. This key is used as a further hint when specifying a desired profile, and is only supported for codecs that specify a level. This key is ignored if the level is not specified. 





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

The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_CSD0 {#mlmediaformatkey-mlmediaformat-key-csd0}

```cpp
MLMediaFormatKey MLMediaFormat_Key_CSD0;
```

A key describing the codec specific data buffer #0. 

Codec-specific data in the format is automatically submitted to the codec upon start(); you MUST NOT submit this data explicitly.

The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_CSD1 {#mlmediaformatkey-mlmediaformat-key-csd1}

```cpp
MLMediaFormatKey MLMediaFormat_Key_CSD1;
```

A key describing the codec specific data buffer #1. 

Codec-specific data in the format is automatically submitted to the codec upon start(); you MUST NOT submit this data explicitly.

The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_CSD2 {#mlmediaformatkey-mlmediaformat-key-csd2}

```cpp
MLMediaFormatKey MLMediaFormat_Key_CSD2;
```

A key describing the codec specific data buffer #2. 

Codec-specific data in the format is automatically submitted to the codec upon start(); you MUST NOT submit this data explicitly.

The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_CSD_Avc {#mlmediaformatkey-mlmediaformat-key-csd-avc}

```cpp
MLMediaFormatKey MLMediaFormat_Key_CSD_Avc;
```

A key describing the codec specific data buffer for AVC (h.264). 

Codec-specific data in the format is automatically submitted to the codec upon start(); you MUST NOT submit this data explicitly.

The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_CSD_Hevc {#mlmediaformatkey-mlmediaformat-key-csd-hevc}

```cpp
MLMediaFormatKey MLMediaFormat_Key_CSD_Hevc;
```

A key describing the codec specific data buffer for HEVC (h.265). 

Codec-specific data in the format is automatically submitted to the codec upon start(); you MUST NOT submit this data explicitly.

The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





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

The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





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

The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





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


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Crypto_Iv {#mlmediaformatkey-mlmediaformat-key-crypto-iv}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crypto_Iv;
```


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Crypto_Key {#mlmediaformatkey-mlmediaformat-key-crypto-key}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crypto_Key;
```


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





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


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Crypto_Skip_Byte_Block {#mlmediaformatkey-mlmediaformat-key-crypto-skip-byte-block}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Crypto_Skip_Byte_Block;
```


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_D263 {#mlmediaformatkey-mlmediaformat-key-d263}

```cpp
MLMediaFormatKey MLMediaFormat_Key_D263;
```


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





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

The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





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

  * [MLMediaFormat_Key_Tile_Width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-width)
  * [MLMediaFormat_Key_Tile_Height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-height)
  * [MLMediaFormat_Key_Grid_Rows](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-rows)




-----------

### MLMediaFormat_Key_Grid_Rows {#mlmediaformatkey-mlmediaformat-key-grid-rows}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Grid_Rows;
```

A key describing the number of grid rows in the content in a MIMETYPE_IMAGE_ANDROID_HEIC track. 

The associated value is an integer.

Refer to MIMETYPE_IMAGE_ANDROID_HEIC on decoding instructions of such tracks.



**See**: 

  * [MLMediaFormat_Key_Tile_Width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-width)
  * [MLMediaFormat_Key_Tile_Height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-height)
  * [MLMediaFormat_Key_Grid_Columns](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-columns)




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


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





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


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Mpeg2_Stream_Header {#mlmediaformatkey-mlmediaformat-key-mpeg2-stream-header}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Mpeg2_Stream_Header;
```


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





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


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





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


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





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


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





-----------

### MLMediaFormat_Key_Thumbnail_CSD_Hevc {#mlmediaformatkey-mlmediaformat-key-thumbnail-csd-hevc}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Thumbnail_CSD_Hevc;
```


The associated value is an [MLMediaFormatByteArray](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_format_byte_array.md). 





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

  * [MLMediaFormat_Key_Tile_Width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-width)
  * [MLMediaFormat_Key_Grid_Rows](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-rows)
  * [MLMediaFormat_Key_Grid_Columns](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-columns)




-----------

### MLMediaFormat_Key_Tile_Width {#mlmediaformatkey-mlmediaformat-key-tile-width}

```cpp
MLMediaFormatKey MLMediaFormat_Key_Tile_Width;
```

A key describing the width (in pixels) of each tile of the content in a MIMETYPE_IMAGE_ANDROID_HEIC track. The associated value is an integer. 

Refer to MIMETYPE_IMAGE_ANDROID_HEIC on decoding instructions of such tracks.



**See**: 

  * [MLMediaFormat_Key_Tile_Height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-tile-height)
  * [MLMediaFormat_Key_Grid_Rows](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-rows)
  * [MLMediaFormat_Key_Grid_Columns](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlmediaformatkey-mlmediaformat-key-grid-columns)




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

A key prefix used together with a [MLMediaCodecBitrateMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlmediacodecbitratemode) feature name describing a required or optional feature for a codec capabilities query. 

The associated value is an integer, where non-0 value means the feature is requested to be present, while 0 value means the feature is requested to be not present. 



**See**: 

  * MLMediaCodecList::findDecoderForFormat 
  * MLMediaCodecList::findEncoderForFormat 
  * MLMediaCodecBitrateMode::isFormatSupported \hide 




-----------


## Macros Documentation

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

## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2021 Magic Leap, Inc. All Rights Reserved.
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

#define MAX_FORMAT_STRING_SIZE 512
#define MAX_KEY_STRING_SIZE    64

typedef struct MLMediaFormatByteArray {
  uint8_t *ptr;
  size_t length;
} MLMediaFormatByteArray;

typedef enum MLMediaFormatAudioEncoding {
  MLMediaFormatAudioEncoding_PCM16Bits = 2,
  MLMediaFormatAudioEncoding_PCM8Bits  = 3,
  MLMediaFormatAudioEncoding_PCMFloat = 4,
  MLMediaFormatAudioEncoding_PCM32Bits = 201,
  MLMediaFormatAudioEncoding_Ensure32Bits = 0x7FFFFFFF
} MLMediaFormatAudioEncoding;

typedef const char *MLMediaFormatKey;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_AAC_Encoded_Target_Level;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_AAC_DRC_Boost_Factor;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_AAC_DRC_Attenuation_Factor;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_AAC_DRC_Heavy_Compression;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_AAC_DRC_Target_Reference_Level;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_AAC_Max_Output_Channel_Count;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_AAC_Profile;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_AAC_SBR_Mode;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Bit_Rate;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Bit_Rate_Mode;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Capture_Rate;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Channel_Count;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Channel_Mask;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Color_Format;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Duration;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_FLAC_Compression_Level;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Frame_Rate;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Height;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_I_Frame_Interval;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Intra_Refresh_Period;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Is_ADTS;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Is_Autoselect;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Is_Default;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Is_Forced_Subtitle;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Language;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Max_Height;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Max_Input_Size;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Max_Width;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Mime;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_PCM_Encoding;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Push_Blank_Buffers_On_Stop;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Repeat_Previous_Frame_After;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Sample_Rate;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Stride;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Temporal_Layering;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Width;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Crop_Left;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Crop_Right;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Crop_Bottom;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Crop_Top;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Operating_Rate;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Latency;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Parameter_Video_Bitrate;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Parameter_Request_Sync_Frame;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Parameter_Set_Suspend;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Parameter_Set_Suspend_Time;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Parameter_Drop_Before;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Parameter_Drop_After;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Parameter_Offset_Time;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Priority;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Max_B_Frames;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Intra_Refresh_Mode;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Intra_Refresh_CIR_Num;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Intra_Refresh_AIR_Num;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Intra_Refresh_AIR_Ref;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Profile;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Level;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Prepend_Header_To_Sync_Frames;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Color_Range;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Color_Standard;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Color_Transfer;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_HDR_Static_Info;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_CSD;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_CSD0;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_CSD1;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_CSD2;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_CSD_Avc;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_CSD_Hevc;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Album;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Albumart;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Albumartist;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Artist;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Audio_Presentation_Info;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Audio_Presentation_Presentation_Id;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Audio_Presentation_Program_Id;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Audio_Session_Id;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Author;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Bits_Per_Sample;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Cdtracknumber;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Compilation;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Complexity;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Composer;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Create_Input_Surface_Suspended;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Crypto_Default_Iv_Size;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Crypto_Encrypted_Byte_Block;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Crypto_Encrypted_Sizes;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Crypto_Iv;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Crypto_Key;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Crypto_Mode;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Crypto_Plain_Sizes;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Crypto_Skip_Byte_Block;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_D263;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Date;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Discnumber;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Display_Crop;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Display_Height;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Display_Width;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Encoder_Delay;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Encoder_Padding;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Esds;
ML_API extern MLMediaFormatKey MLMediaFormat_Key_Exif_Offset;
ML_API extern MLMediaFormatKey MLMediaFormat_Key_Exif_Size;
ML_API extern MLMediaFormatKey MLMediaFormat_Key_Frame_Count;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Genre;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Grid_Columns;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Grid_Rows;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Haptic_Channel_Count;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Hdr10_Plus_Info;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Icc_Profile;
ML_API extern MLMediaFormatKey MLMediaFormat_Key_Is_Sync_Frame;
ML_API extern MLMediaFormatKey MLMediaFormat_Key_Location;
ML_API extern MLMediaFormatKey MLMediaFormat_Key_Loop;
ML_API extern MLMediaFormatKey MLMediaFormat_Key_Lyricist;
ML_API extern MLMediaFormatKey MLMediaFormat_Key_Manufacturer;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Max_Bit_Rate;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Max_Fps_To_Encoder;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Max_Pts_Gap_To_Encoder;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Mpeg_User_Data;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Mpeg2_Stream_Header;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_PCM_Big_Endian;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Pssh;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Rotation;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Sar_Height;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Sar_Width;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Sei;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Slice_Height;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Target_Time;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Temporal_Layer_Count;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Temporal_Layer_Id;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Text_Format_Data;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Thumbnail_CSD_Hevc;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Thumbnail_Height;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Thumbnail_Time;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Thumbnail_Width;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Tile_Height;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Tile_Width;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Time_Us;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Title;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Track_Id;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Track_Index;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Valid_Samples;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Year;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_AAC_DRC_Effect_Type;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Quality;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Output_Reorder_Depth;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Is_Timed_Text;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Ca_System_Id;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Ca_Session_Id;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Ca_Private_Data;

ML_API extern MLMediaFormatKey MLMediaFormat_Key_Feature_;


ML_API MLResult ML_CALL MLMediaFormatCreateVideo(const char *mime_type, int width, int height, MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaFormatCreateAudio(const char *mime_type, int sample_rate, int channel_count, MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaFormatCreateSubtitle(const char *mime_type, const char *language, MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaFormatCreate(MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaFormatCreateCopy(MLHandle handle, MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaFormatDestroy(MLHandle handle);

ML_API MLResult ML_CALL MLMediaFormatObjectToString(MLHandle handle, char *out_string);

ML_API MLResult ML_CALL MLMediaFormatGetKeyValueInt32(MLHandle handle, MLMediaFormatKey name, int32_t *out_key);

ML_API MLResult ML_CALL MLMediaFormatGetKeyValueInt64(MLHandle handle, MLMediaFormatKey name, int64_t *out_key);

ML_API MLResult ML_CALL MLMediaFormatGetKeyValueFloat(MLHandle handle, MLMediaFormatKey name, float *out_key);

ML_API MLResult ML_CALL MLMediaFormatGetKeySize(MLHandle handle, MLMediaFormatKey name, size_t *out_size);

ML_API MLResult ML_CALL MLMediaFormatGetKeyString(MLHandle handle, MLMediaFormatKey name, char *out_string);

ML_API MLResult ML_CALL MLMediaFormatGetKeyByteBuffer(MLHandle handle, MLMediaFormatKey name, MLMediaFormatByteArray *out_buffer);

ML_API MLResult ML_CALL MLMediaFormatKeyByteBufferRelease(MLHandle handle, MLMediaFormatByteArray *buffer);

ML_API MLResult ML_CALL MLMediaFormatSetKeyInt32(MLHandle handle, MLMediaFormatKey name, int32_t key_value);

ML_API MLResult ML_CALL MLMediaFormatSetKeyInt64(MLHandle handle, MLMediaFormatKey name, int64_t key_value);

ML_API MLResult ML_CALL MLMediaFormatSetKeyFloat(MLHandle handle, MLMediaFormatKey name, float key_value);

ML_API MLResult ML_CALL MLMediaFormatSetKeySize(MLHandle handle, MLMediaFormatKey name, size_t key_size);

ML_API MLResult ML_CALL MLMediaFormatSetKeyString(MLHandle handle, MLMediaFormatKey name, const char *key_value);

ML_API MLResult ML_CALL MLMediaFormatSetKeyByteBuffer(MLHandle handle, MLMediaFormatKey name, const MLMediaFormatByteArray *buffer);

ML_EXTERN_C_END
```




