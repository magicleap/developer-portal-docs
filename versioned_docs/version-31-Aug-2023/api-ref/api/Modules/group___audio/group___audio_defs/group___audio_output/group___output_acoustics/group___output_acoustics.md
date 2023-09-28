---
title: Acoustics

---

# Acoustics

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Audio Output](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_output.md)**

 [More...](#detailed-description)

## Modules

| Name           |
| -------------- |
| **[Spatial Sound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_spatial_sound.md)**  |
| **[Buffering](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_buffering.md)**  |
| **[Master Volume](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_master_volume.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioResetAcousticScene](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudioresetacousticscene)**()<br></br>Resets the Acoustic Scene associated with the caller.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioBeginAcousticSceneUpdate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiobeginacousticsceneupdate)**()<br></br>Signals beginning of grouped Acoustic parameter multi-update.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioEndAcousticSceneUpdate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudioendacousticsceneupdate)**()<br></br>Signals end of grouped Acoustic parameter multi-update.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetAcousticSceneMapEnable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenemapenable)**(bool is_enabled)<br></br>Enables/disables Acoustic Map data for the Acoustic Scene.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetAcousticSceneMapEnable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenemapenable)**(bool * out_is_enabled)<br></br>Indicates whether Acoustic Map data is enabled for the Acoustic Scene.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetAcousticSceneTransmissionDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenetransmissiondefault)**(const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * transmission)<br></br>Sets amount of sound transmitted through non-Acoustic Element objects.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetAcousticSceneTransmissionDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenetransmissiondefault)**([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * out_transmission)<br></br>Returns amount of sound transmitted through non-Acoustic Element objects.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetAcousticSceneDispersionDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenedispersiondefault)**(const [MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) * properties)<br></br>Sets the fallback room properties to be used when none are otherwise specified.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetAcousticSceneDispersionDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenedispersiondefault)**([MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) * out_properties)<br></br>Returns the default room properties used when none are otherwise specified.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioSetAcousticSceneReverbDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiosetacousticscenereverbdefault)**(const [MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) * properties)<br></br>Sets the fallback room properties to be used when none are otherwise specified.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetAcousticSceneReverbDefault](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetacousticscenereverbdefault)**([MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) * out_properties)<br></br>Returns the default room properties used when none are otherwise specified.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetChangedAcousticMap](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_acoustics/group___output_acoustics.md#mlresult-mlaudiogetchangedacousticmap)**(uint32_t prev_map_tag, uint8_t ** out_map_data, uint32_t * out_map_size_in_bytes, uint32_t * out_map_tag)<br></br>Returns the Acoustic Map if updated since previous call.  |

## Detailed Description


ACOUSTICS. 





-----------


## Functions Documentation

### MLAudioResetAcousticScene {#mlresult-mlaudioresetacousticscene}

```cpp
MLResult MLAudioResetAcousticScene()
```

Resets the Acoustic Scene associated with the caller. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If reset was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|No custom scene exists for client.|
**Required Permissions**:

  * None 


Removes all Acoustic Elements and restores default scene. Resets any modifications to the acoustic scene previously made by the caller.




**API Level:**
  * 20




-----------

### MLAudioBeginAcousticSceneUpdate {#mlresult-mlaudiobeginacousticsceneupdate}

```cpp
MLResult MLAudioBeginAcousticSceneUpdate()
```

Signals beginning of grouped Acoustic parameter multi-update. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


The multi-update parameters include global Acoustic Scene params and Acoustic Element params. Intended to be followed by a call to MLAcousticEndAcousticSceneUpdate signifying the end of the multi-update.




**API Level:**
  * 20




-----------

### MLAudioEndAcousticSceneUpdate {#mlresult-mlaudioendacousticsceneupdate}

```cpp
MLResult MLAudioEndAcousticSceneUpdate()
```

Signals end of grouped Acoustic parameter multi-update. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|No custom scene exists for client.|
**Required Permissions**:

  * None 


The multi-update parameters include global Acoustic Scene params and Acoustic Element params. Intended to be preceded by a call to MLAcousticBeginAcousticSceneUpdate signifying the beginning of the multi-update.




**API Level:**
  * 20




-----------

### MLAudioSetAcousticSceneMapEnable {#mlresult-mlaudiosetacousticscenemapenable}

```cpp
MLResult MLAudioSetAcousticSceneMapEnable(
    bool is_enabled
)
```

Enables/disables Acoustic Map data for the Acoustic Scene. 

**Parameters**

|  |   |   |
|--|--|--|
| bool |is_enabled|Determines whether Acoustic Map is enabled.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Acoustic Map data is a device-curated representation of the acoustics of the local physical environment. Enabling the Acoustic Map makes virtual objects sound as though they exist in the local environment.




**API Level:**
  * 20




-----------

### MLAudioGetAcousticSceneMapEnable {#mlresult-mlaudiogetacousticscenemapenable}

```cpp
MLResult MLAudioGetAcousticSceneMapEnable(
    bool * out_is_enabled
)
```

Indicates whether Acoustic Map data is enabled for the Acoustic Scene. 

**Parameters**

|  |   |   |
|--|--|--|
| bool * |out_is_enabled|Indicates whether Acoustic Map is enabled.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLAudioSetAcousticSceneTransmissionDefault {#mlresult-mlaudiosetacousticscenetransmissiondefault}

```cpp
MLResult MLAudioSetAcousticSceneTransmissionDefault(
    const MLAudioMultibandLevel * transmission
)
```

Sets amount of sound transmitted through non-Acoustic Element objects. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |transmission|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) to set the default transmission.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Transmission is specified using [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md), which includes gain and 3-band EQ. The values [1, (1, 1, 1)] represents fully transmissive while [0, (1, 1, 1)] or [1, (0, 0, 0)] represents fully obstructed.




**API Level:**
  * 20




-----------

### MLAudioGetAcousticSceneTransmissionDefault {#mlresult-mlaudiogetacousticscenetransmissiondefault}

```cpp
MLResult MLAudioGetAcousticSceneTransmissionDefault(
    MLAudioMultibandLevel * out_transmission
)
```

Returns amount of sound transmitted through non-Acoustic Element objects. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) * |out_transmission|[MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md) to return the default transmission.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Transmission is specified using [MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md), which includes gain and 3-band EQ. The values [1, (1, 1, 1)] represents fully transmissive while [0, (1, 1, 1)] or [1, (0, 0, 0)] represents fully obstructed.




**API Level:**
  * 20




-----------

### MLAudioSetAcousticSceneDispersionDefault {#mlresult-mlaudiosetacousticscenedispersiondefault}

```cpp
MLResult MLAudioSetAcousticSceneDispersionDefault(
    const MLAudioDispersionProperties * properties
)
```

Sets the fallback room properties to be used when none are otherwise specified. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) * |properties|[MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) to set the default dispersion properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Dispersion properties are specified using [MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md), which includes reflections gain ([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)) and reflections delay time.




**API Level:**
  * 20




-----------

### MLAudioGetAcousticSceneDispersionDefault {#mlresult-mlaudiogetacousticscenedispersiondefault}

```cpp
MLResult MLAudioGetAcousticSceneDispersionDefault(
    MLAudioDispersionProperties * out_properties
)
```

Returns the default room properties used when none are otherwise specified. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) * |out_properties|[MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md) to return the default dispersion properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Dispersion properties are specified using [MLAudioDispersionProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_dispersion_properties.md), which includes reflections gain ([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)) and reflections delay time.




**API Level:**
  * 20




-----------

### MLAudioSetAcousticSceneReverbDefault {#mlresult-mlaudiosetacousticscenereverbdefault}

```cpp
MLResult MLAudioSetAcousticSceneReverbDefault(
    const MLAudioReverbProperties * properties
)
```

Sets the fallback room properties to be used when none are otherwise specified. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) * |properties|[MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) to set the default reverb properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Reverb properties are specified using [MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md), which includes reflections gain ([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)), reflections delay time, reverb gain ([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)), reverb delay time, and frequency-dependent reverb decay times.




**API Level:**
  * 20




-----------

### MLAudioGetAcousticSceneReverbDefault {#mlresult-mlaudiogetacousticscenereverbdefault}

```cpp
MLResult MLAudioGetAcousticSceneReverbDefault(
    MLAudioReverbProperties * out_properties
)
```

Returns the default room properties used when none are otherwise specified. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) * |out_properties|[MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md) to return the default reverb properties.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


Reverb properties are specified using [MLAudioReverbProperties](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/struct_m_l_audio_reverb_properties.md), which includes reverb gain ([MLAudioMultibandLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/struct_m_l_audio_multiband_level.md)), reverb delay time, and frequency-dependent reverb decay times.




**API Level:**
  * 20




-----------

### MLAudioGetChangedAcousticMap {#mlresult-mlaudiogetchangedacousticmap}

```cpp
MLResult MLAudioGetChangedAcousticMap(
    uint32_t prev_map_tag,
    uint8_t ** out_map_data,
    uint32_t * out_map_size_in_bytes,
    uint32_t * out_map_tag
)
```

Returns the Acoustic Map if updated since previous call. 

**Parameters**

|  |   |   |
|--|--|--|
| uint32_t |prev_map_tag|The last map tag received in previous call. |
| uint8_t ** |out_map_data|Receives serialized Acoustic Map data if map tag is stale. |
| uint32_t * |out_map_size_in_bytes|Receives length of serialized Acoustic Map data in bytes. |
| uint32_t * |out_map_tag|Receives current map tag, to be passed in following call.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If call was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error.|
**Required Permissions**:

  * None 


The Acoustic Map is the system-managed representation of the acoustic environment.



:::note
Caller is responsible for deallocating the memory used by out_partner_crossfeed_handles and out_partner_crossfeed_outputs.
:::


**API Level:**
  * 20




-----------






