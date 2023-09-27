---
title: Parameters

---

# Parameters

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Audio Output](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_output.md)**

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
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

## Detailed Description


PARAMETERS. 





-----------


## Functions Documentation

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






