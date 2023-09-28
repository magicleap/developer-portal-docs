---
title: Master Volume

---

# Master Volume

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Audio Output](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_output.md)** **/** **[Acoustics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md)**

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetMasterVolume](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiogetmastervolume)**(float * out_volume)<br></br>Returns the master volume for the audio system.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetMasterVolumeCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiosetmastervolumecallback)**([MLAudioMasterVolumeChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomastervolumechangedcallback) callback, void * context)<br></br>Registers a callback for changes to the master volume.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetOutputMute](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiogetoutputmute)**(bool * out_is_muted)<br></br>Indicates whether the output mute of the audio system is on or off.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetOutputMuteCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md#mlresult-mlaudiosetoutputmutecallback)**([MLAudioOutputMuteChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiooutputmutechangedcallback) callback, void * context)<br></br>Registers a callback for audio output mute change.  |

## Detailed Description


MASTER VOLUME. 





-----------


## Functions Documentation

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






