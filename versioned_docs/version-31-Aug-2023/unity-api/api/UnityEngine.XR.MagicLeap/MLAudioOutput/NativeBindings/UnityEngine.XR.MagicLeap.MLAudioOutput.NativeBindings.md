---
title: NativeBindings
summary: see ml-audio.h for additional comments. 

---

# NativeBindings




See ml&#95;audio.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioGetMasterVolume {#mlresultcode-mlaudiogetmastervolume}

Gets the value of the master volume. 

```csharp
public MLResult.Code MLAudioGetMasterVolume(
    out float volume
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out float |volume|The value of the master volume.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if input parameter is invalid. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.NotImplemented](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-notimplemented) . 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioGetOutputDevice {#mlresultcode-mlaudiogetoutputdevice}

Gets the current audio output device. 

```csharp
public MLResult.Code MLAudioGetOutputDevice(
    out MLAudioOutput.Device device
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [MLAudioOutput.Device](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-device) |device|The audio output device.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if input parameter is invalid. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.NotImplemented](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-notimplemented) . 



-----------

### IntPtr MLAudioGetResultString {#intptr-mlaudiogetresultstring}

Gets the result string for a [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code). 

```csharp
public IntPtr MLAudioGetResultString(
    MLResult.Code result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) |result|The [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) to be requested.|






**Returns**: A pointer to the result string.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioGetSoundBypassesMasterVolume {#mlresultcode-mlaudiogetsoundbypassesmastervolume}

Queries whether a sound output is exempt from attenuation due to master volume. This call reports whether the output from a sound output is bypassing master volume, making it effectively "always audible" (assuming it is neither muted nor set to zero volume on a per-sound basis). This option can only be set on medical-enabled devices(60601 compliant), and will only work for non-spatial sounds.Non-spatial sound parameters such as volume, mute, pitch and looping are still in effect for sounds that are bypassing master volume. 

```csharp
public MLResult.Code MLAudioGetSoundBypassesMasterVolume(
    ulong audioHandle,
    out bool isBypassing
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |audioHandle||
| out bool |isBypassing||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioGetSpatialSoundEnable {#mlresultcode-mlaudiogetspatialsoundenable}

Enables/disables 3D audio processing for a sound output. 

```csharp
public MLResult.Code MLAudioGetSpatialSoundEnable(
    ulong handle,
    out bool enabled
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|MLHandle used to identify the sound output.|
| out bool |enabled|Indicates whether 3D processing is on or off.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AudioHandleNotFound](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-audiohandlenotfound)  if handle was not found. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AudioInternalConfigError](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-audiointernalconfigerror)  if internal config error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.NotImplemented](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-notimplemented) . 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioGetSpatialSoundPosition {#mlresultcode-mlaudiogetspatialsoundposition}

Returns the 3D position for one channel of a sound output. 

```csharp
public MLResult.Code MLAudioGetSpatialSoundPosition(
    ulong handle,
    uint channel,
    out MagicLeapNativeBindings.MLVec3f position
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|MLHandle used to identify the sound output.|
| uint |channel|Selects the channel whose position is being set.|
| out MagicLeapNativeBindings.MLVec3f |position|Struct to set the position|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AudioHandleNotFound](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-audiohandlenotfound)  if handle was not found. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AudioInternalConfigError](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-audiointernalconfigerror)  if internal config error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.NotImplemented](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-notimplemented) . 



-----------

### delegate void MLAudioMasterVolumeChangedCallback {#delegate-void-mlaudiomastervolumechangedcallback}

The callback that occurs when the master volume changes. 

```csharp
public delegate void MLAudioMasterVolumeChangedCallback(
    float volume,
    IntPtr callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |volume|The value of the master volume.|
| IntPtr |callback|A pointer to the callback.|






-----------

### delegate void MLAudioMediaEventCallback {#delegate-void-mlaudiomediaeventcallback}

Callback to notify when a media event has occurred. 

```csharp
public delegate void MLAudioMediaEventCallback(
    MediaEvent mediaEvent,
    IntPtr callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MediaEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-mediaevent) |volume|The new media event.|
| IntPtr |callback|A pointer to the callback.|






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioSetMasterVolumeCallback {#mlresultcode-mlaudiosetmastervolumecallback}

Registers a callback for when the master volume changes. 

```csharp
public MLResult.Code MLAudioSetMasterVolumeCallback(
    MLAudioMasterVolumeChangedCallback callback,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| MLAudioMasterVolumeChangedCallback |callback|A pointer to the callback.|
| IntPtr |data|A generic data pointer passed back to the callback.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AllocFailed](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-allocfailed)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.NotImplemented](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-notimplemented) . 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioSetMediaEventCallback {#mlresultcode-mlaudiosetmediaeventcallback}

Registers a callback for user-issued media control events. Events that can result in a callback being called include: pressing a play button; pressing a stop button; pressing a pause button; pressing a next track button, pressing a previous track button; The particular event type (MLAudioMediaEvent) that caused the callback is passed to the callback as its first argument. The 'context' argument is passed back to the callback as its second argument. 

```csharp
public MLResult.Code MLAudioSetMediaEventCallback(
    MLAudioMediaEventCallback callback,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| MLAudioMediaEventCallback |callback||
| IntPtr |context||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioSetSoundBypassesMasterVolume {#mlresultcode-mlaudiosetsoundbypassesmastervolume}

Setting this option on a sound output causes its output to bypass master volume, making it effectively "always audible" (assuming it is neither muted nor set to zero volume on a per-sound basis). This option can only be set on medical-enabled devices (60601 compliant), and will only work for non-spatial sounds.Non-spatial sound parameters such as volume, mute, pitch and looping are still in effect for sounds that are bypassing master volume. 

```csharp
public MLResult.Code MLAudioSetSoundBypassesMasterVolume(
    ulong audioHandle,
    bool isBypassing
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |audioHandle||
| bool |isBypassing||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioSetSpatialSoundEnable {#mlresultcode-mlaudiosetspatialsoundenable}

Enables/disables 3D audio processing for a sound output. 

```csharp
public MLResult.Code MLAudioSetSpatialSoundEnable(
    ulong handle,
    bool enable
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|MLHandle used to identify the sound output.|
| bool |enable|Determines whether 3D processing is on or off.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AudioHandleNotFound](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-audiohandlenotfound)  if handle was not found. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AudioInternalConfigError](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-audiointernalconfigerror)  if internal config error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.NotImplemented](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-notimplemented) . 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioSetSpatialSoundPosition {#mlresultcode-mlaudiosetspatialsoundposition}

Sets the 3D position for one channel of a sound output. 

```csharp
public MLResult.Code MLAudioSetSpatialSoundPosition(
    ulong handle,
    uint channel,
    ref MagicLeapNativeBindings.MLVec3f position
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|MLHandle used to identify the sound output.|
| uint |channel|Selects the channel whose position is being set.|
| ref MagicLeapNativeBindings.MLVec3f |position|Struct to set the position|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AudioHandleNotFound](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-audiohandlenotfound)  if handle was not found. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AudioInternalConfigError](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-audiointernalconfigerror)  if internal config error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.NotImplemented](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-notimplemented) . 



-----------


