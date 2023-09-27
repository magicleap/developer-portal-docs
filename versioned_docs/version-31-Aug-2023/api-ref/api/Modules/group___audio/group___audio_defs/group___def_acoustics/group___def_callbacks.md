---
title: Callbacks
summary: callbacks. 

---

# Callbacks

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)**

CALLBACKS. 

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(MLHandle handle, MLAudioSoundEvent event, void *context) | **[MLAudioSoundEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiosoundeventcallback)** <br></br>Callback to notify when a sound event has occurred.  |
| typedef void(*)(MLAudioMediaEvent event, void *context) | **[MLAudioMediaEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomediaeventcallback)** <br></br>Callback to notify when a media event has occurred.  |
| typedef void(*)(MLHandle handle, void *context) | **[MLAudioBufferCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiobuffercallback)** <br></br>Callback to notify when an audio buffer is available for reading or writing.  |
| typedef void(*)(MLHandle resource, void *context) | **[MLAudioResourceDiscardedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudioresourcediscardedcallback)** <br></br>Callback to notify when audio resource data is being discarded to make room for other resource data. Resources that are not being referenced by a sound will be discarded before resources that are being referenced by a sound. Resources that are being played by a sound will not be discarded.  |
| typedef void(*)(float new_volume, void *context) | **[MLAudioMasterVolumeChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomastervolumechangedcallback)** <br></br>Callback to notify when master volume has been changed.  |
| typedef void(*)(bool is_muted, void *context) | **[MLAudioOutputMuteChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiooutputmutechangedcallback)** <br></br>Callback to notify when the global Output Mute has changed.  |
| typedef void(*)(MLAudioOutputDevice current_device, void *context) | **[MLAudioOutputDeviceChangedCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiooutputdevicechangedcallback)** <br></br>Callback to notify when the output device has changed.  |
| typedef void(*)(bool is_muted, void *context) | **[MLAudioMicMuteCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiomicmutecallback)** <br></br>Callback to notify when global mic mute has been changed.  |
| typedef void(*)(MLHandle handle, MLAudioTraitAnalysisTarget target, float value, void *context) | **[MLAudioTraitAnalysisCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiotraitanalysiscallback)** <br></br>Callback to provide a changed value for a running trait analysis.  |
| typedef void(*)(MLHandle handle, MLAudioSpectralAnalysisTarget target, MLAudioSpectralAnalysis values, void *context) | **[MLAudioSpectralAnalysisCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiospectralanalysiscallback)** <br></br>Callback to provide a changed value for a running spectral analysis.  |


## Types Documentation

### MLAudioSoundEventCallback {#void-mlaudiosoundeventcallback}

```cpp
typedef void(* MLAudioSoundEventCallback) (MLHandle handle, MLAudioSoundEvent event, void *context);
```

Callback to notify when a sound event has occurred. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioMediaEventCallback {#void-mlaudiomediaeventcallback}

```cpp
typedef void(* MLAudioMediaEventCallback) (MLAudioMediaEvent event, void *context);
```

Callback to notify when a media event has occurred. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioBufferCallback {#void-mlaudiobuffercallback}

```cpp
typedef void(* MLAudioBufferCallback) (MLHandle handle, void *context);
```

Callback to notify when an audio buffer is available for reading or writing. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioResourceDiscardedCallback {#void-mlaudioresourcediscardedcallback}

```cpp
typedef void(* MLAudioResourceDiscardedCallback) (MLHandle resource, void *context);
```

Callback to notify when audio resource data is being discarded to make room for other resource data. Resources that are not being referenced by a sound will be discarded before resources that are being referenced by a sound. Resources that are being played by a sound will not be discarded. 




:::note

  * The callback will be called on a separate thread. 
  * The audio data should not be refreshed until needed again. 

:::



-----------

### MLAudioMasterVolumeChangedCallback {#void-mlaudiomastervolumechangedcallback}

```cpp
typedef void(* MLAudioMasterVolumeChangedCallback) (float new_volume, void *context);
```

Callback to notify when master volume has been changed. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioOutputMuteChangedCallback {#void-mlaudiooutputmutechangedcallback}

```cpp
typedef void(* MLAudioOutputMuteChangedCallback) (bool is_muted, void *context);
```

Callback to notify when the global Output Mute has changed. 




:::note

  * The global Output Mute is changed by using voice commands or a bluetooth keyboard with a mute/unmute button. 
  * The callback will be called on a separate thread. 

:::



-----------

### MLAudioOutputDeviceChangedCallback {#void-mlaudiooutputdevicechangedcallback}

```cpp
typedef void(* MLAudioOutputDeviceChangedCallback) (MLAudioOutputDevice current_device, void *context);
```

Callback to notify when the output device has changed. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioMicMuteCallback {#void-mlaudiomicmutecallback}

```cpp
typedef void(* MLAudioMicMuteCallback) (bool is_muted, void *context);
```

Callback to notify when global mic mute has been changed. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioTraitAnalysisCallback {#void-mlaudiotraitanalysiscallback}

```cpp
typedef void(* MLAudioTraitAnalysisCallback) (MLHandle handle, MLAudioTraitAnalysisTarget target, float value, void *context);
```

Callback to provide a changed value for a running trait analysis. 




:::note
The callback will be called on a separate thread. 
:::



-----------

### MLAudioSpectralAnalysisCallback {#void-mlaudiospectralanalysiscallback}

```cpp
typedef void(* MLAudioSpectralAnalysisCallback) (MLHandle handle, MLAudioSpectralAnalysisTarget target, MLAudioSpectralAnalysis values, void *context);
```

Callback to provide a changed value for a running spectral analysis. 




:::note
The callback will be called on a separate thread. 
:::



-----------







