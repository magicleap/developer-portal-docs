---
title: NativeBindings
summary: native bindings for the mlwebrtc.audiosink class. 

---

# NativeBindings




[Native](/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) bindings for the [MLWebRTC.AudioSink](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.md) class.   


Inherits from: <br></br>[MagicLeapNativeBindings](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkCreate {#mlresultcode-mlwebrtcaudiosinkcreate}

Creates an audio sink. 

```csharp
public MLResult.Code MLWebRTCAudioSinkCreate(
    out ulong sinkHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |sinkHandle|The handle to the audio sink to return to the caller.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the audio sink was successfully created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkCreateEx {#mlresultcode-mlwebrtcaudiosinkcreateex}

Creates an audio sink with the provided params. 

```csharp
public MLResult.Code MLWebRTCAudioSinkCreateEx(
    ref MLWebRTCAudioSinkParams sinkParams,
    out ulong sinkHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLWebRTCAudioSinkParams](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkParams.md) |sinkParams|Parameters to use to create the audio sink.|
| out ulong |sinkHandle|The handle to the audio sink to return to the caller.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the audio sink was successfully created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkDestroy {#mlresultcode-mlwebrtcaudiosinkdestroy}

Destroys an audio sink. 

```csharp
public MLResult.Code MLWebRTCAudioSinkDestroy(
    ulong sinkHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the audio sink.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.MismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkResetPosition {#mlresultcode-mlwebrtcaudiosinkresetposition}

Resets the world position of an audio sink for  spatialized  audio. 

```csharp
public MLResult.Code MLWebRTCAudioSinkResetPosition(
    ulong sinkHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the audio sink.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.MismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkSetCacheSize {#mlresultcode-mlwebrtcaudiosinksetcachesize}

Sets the number of milliseconds of audio that should be cached in the buffers before dropping the packets. Dictates the audio latency when app recovers from lifecycle state transitions like standby & reality. Default is 200ms. 

```csharp
public MLResult.Code MLWebRTCAudioSinkSetCacheSize(
    ulong sinkHandle,
    uint millisecondsToCache
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the audio sink.|
| uint |millisecondsToCache|How many milliseconds worth of audio to cache.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.MismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkSetDirectSoundLevels {#mlresultcode-mlwebrtcaudiosinksetdirectsoundlevels}

Sets the direct spatial sound send levels of an audio sink channel. 

```csharp
public MLResult.Code MLWebRTCAudioSinkSetDirectSoundLevels(
    ulong sinkHandle,
    ref MLWebRTCAudioSinkSoundLevels soundLevels
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the audio sink.|
| ref [MLWebRTCAudioSinkSoundLevels](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkSoundLevels.md) |soundLevels|The sound levels & channel to set the audio sink spatialization for.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if spatialization settings were set successfully. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an incorrect param was sent. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkSetPosition {#mlresultcode-mlwebrtcaudiosinksetposition}

Sets the world position of an audio sink for  spatialized  audio. 

```csharp
public MLResult.Code MLWebRTCAudioSinkSetPosition(
    ulong sinkHandle,
    in MagicLeapNativeBindings.MLVec3f position
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the audio sink.|
| in MagicLeapNativeBindings.MLVec3f |position|The position to set the audio sink to.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.MismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkSetPositionEx {#mlresultcode-mlwebrtcaudiosinksetpositionex}

Sets the world position of an audio sink channel. 

```csharp
public MLResult.Code MLWebRTCAudioSinkSetPositionEx(
    ulong sinkHandle,
    ref MLWebRTCAudioSinkPosition position
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the audio sink.|
| ref [MLWebRTCAudioSinkPosition](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkPosition.md) |position|The position & channel to set the audio sink spatialization for.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if spatialization settings were set successfully. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an incorrect param was sent. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkSetRoomSoundLevels {#mlresultcode-mlwebrtcaudiosinksetroomsoundlevels}

Sets the room spatial sound send levels of an audio sink channel. 

```csharp
public MLResult.Code MLWebRTCAudioSinkSetRoomSoundLevels(
    ulong sinkHandle,
    ref MLWebRTCAudioSinkSoundLevels soundLevels
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the audio sink.|
| ref [MLWebRTCAudioSinkSoundLevels](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkSoundLevels.md) |soundLevels|The sound levels & channel to set the audio sink spatialization for.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if spatialization settings were set successfully. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an incorrect param was sent. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkSetSoundDistanceProperties {#mlresultcode-mlwebrtcaudiosinksetsounddistanceproperties}

Sets the distance properties of an audio sink channel. 

```csharp
public MLResult.Code MLWebRTCAudioSinkSetSoundDistanceProperties(
    ulong sinkHandle,
    ref MLWebRTCAudioSinkSoundDistance soundDistance
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the audio sink.|
| ref [MLWebRTCAudioSinkSoundDistance](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkSoundDistance.md) |soundDistance|The sound distance & channel to set the audio sink spatialization for.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if spatialization settings were set successfully. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an incorrect param was sent. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkSetSoundOrientation {#mlresultcode-mlwebrtcaudiosinksetsoundorientation}

Sets the world orientation of an audio sink channel. 

```csharp
public MLResult.Code MLWebRTCAudioSinkSetSoundOrientation(
    ulong sinkHandle,
    ref MLWebRTCAudioSinkOrientation orientation
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the audio sink.|
| ref [MLWebRTCAudioSinkOrientation](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkOrientation.md) |orientation|The orientation & channel to set the audio sink spatialization for.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if spatialization settings were set successfully. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an incorrect param was sent. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkSetSoundRadiationProperties {#mlresultcode-mlwebrtcaudiosinksetsoundradiationproperties}

Sets the radiation properties of an audio sink channel. 

```csharp
public MLResult.Code MLWebRTCAudioSinkSetSoundRadiationProperties(
    ulong sinkHandle,
    ref MLWebRTCAudioSinkSoundRadiation soundRadiation
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the audio sink.|
| ref [MLWebRTCAudioSinkSoundRadiation](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkSoundRadiation.md) |soundRadiation|The sound radiation & channel to set the audio sink spatialization for.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if spatialization settings were set successfully. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an incorrect param was sent. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkSetSoundVolume {#mlresultcode-mlwebrtcaudiosinksetsoundvolume}

Sets the volume of an audio sink. 

```csharp
public MLResult.Code MLWebRTCAudioSinkSetSoundVolume(
    ulong sinkHandle,
    float volume
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the audio sink.|
| float |volume|The sink volume.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the volume was set successfully. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an incorrect param was sent. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCAudioSinkSetSource {#mlresultcode-mlwebrtcaudiosinksetsource}

Sets the source of an audio sink. 

```csharp
public MLResult.Code MLWebRTCAudioSinkSetSource(
    ulong sinkHandle,
    ulong sourceHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the audio sink.|
| ulong |sourceHandle|The handle to the source to set onto the audio sink.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.MismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

