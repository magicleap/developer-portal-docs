---
title: Mic Muting

---

# Mic Muting

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Audio Output](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_output.md)** **/** **[Audio Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___audio_input.md)**

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetMicMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_mic_muting.md#mlresult-mlaudiosetmicmute)**(bool is_muted)<br></br>Mutes or un-mutes all microphone capture.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetMicMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_mic_muting.md#mlresult-mlaudiogetmicmute)**(bool * out_is_muted)<br></br>Returns whether all microphone capture is muted or not.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetMicMuteCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_mic_muting.md#mlresult-mlaudiosetmicmutecallback)**([MLAudioMicMuteCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomicmutecallback) callback, void * context)<br></br>Registers a callback for changes to the global mic mute.  |

## Detailed Description


MIC MUTING. 





-----------


## Functions Documentation

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






