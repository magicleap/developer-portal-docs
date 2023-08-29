---
title: NativeBindings
summary: native bindings for the mlwebrtc.audiosink class. 

---

# NativeBindings




Native bindings for the MLWebRTC.AudioSink class.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkCreate {#mlresultcode-mlwebrtcaudiosinkcreate}

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






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if the audio sink was successfully created. MLResult.Result will be  MLResult.Code.PermissionDenied  if necessary permission is missing. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkCreateEx {#mlresultcode-mlwebrtcaudiosinkcreateex}

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
| ref [MLWebRTCAudioSinkParams](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkParams.md) |sinkParams|Parameters to use to create the audio sink.|
| out ulong |sinkHandle|The handle to the audio sink to return to the caller.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if the audio sink was successfully created. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkDestroy {#mlresultcode-mlwebrtcaudiosinkdestroy}

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






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if destroying all handles was successful. MLResult.Result will be  MLResult.Code.MismatchingHandle  if an incorrect handle was sent. MLResult.Result will be  MLResult.Code.PermissionDenied  if necessary permission is missing. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkResetPosition {#mlresultcode-mlwebrtcaudiosinkresetposition}

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






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if destroying all handles was successful. MLResult.Result will be  MLResult.Code.MismatchingHandle  if an incorrect handle was sent. MLResult.Result will be  MLResult.Code.PermissionDenied  if necessary permission is missing. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkSetCacheSize {#mlresultcode-mlwebrtcaudiosinksetcachesize}

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






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if destroying all handles was successful. MLResult.Result will be  MLResult.Code.MismatchingHandle  if an incorrect handle was sent. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkSetDirectSoundLevels {#mlresultcode-mlwebrtcaudiosinksetdirectsoundlevels}

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
| ref [MLWebRTCAudioSinkSoundLevels](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkSoundLevels.md) |soundLevels|The sound levels & channel to set the audio sink spatialization for.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if spatialization settings were set successfully. MLResult.Result will be  MLResult.Code.WebRTCResultInstanceNotCreated  if MLWebRTC instance was not created. MLResult.Result will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. MLResult.Result will be  MLResult.Code.InvalidParam  if an incorrect param was sent. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkSetPosition {#mlresultcode-mlwebrtcaudiosinksetposition}

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
| in [MagicLeapNativeBindings.MLVec3f](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec3f.md) |position|The position to set the audio sink to.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if destroying all handles was successful. MLResult.Result will be  MLResult.Code.MismatchingHandle  if an incorrect handle was sent. MLResult.Result will be  MLResult.Code.PermissionDenied  if necessary permission is missing. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkSetPositionEx {#mlresultcode-mlwebrtcaudiosinksetpositionex}

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
| ref [MLWebRTCAudioSinkPosition](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkPosition.md) |position|The position & channel to set the audio sink spatialization for.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if spatialization settings were set successfully. MLResult.Result will be  MLResult.Code.WebRTCResultInstanceNotCreated  if MLWebRTC instance was not created. MLResult.Result will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. MLResult.Result will be  MLResult.Code.InvalidParam  if an incorrect param was sent. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkSetRoomSoundLevels {#mlresultcode-mlwebrtcaudiosinksetroomsoundlevels}

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
| ref [MLWebRTCAudioSinkSoundLevels](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkSoundLevels.md) |soundLevels|The sound levels & channel to set the audio sink spatialization for.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if spatialization settings were set successfully. MLResult.Result will be  MLResult.Code.WebRTCResultInstanceNotCreated  if MLWebRTC instance was not created. MLResult.Result will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. MLResult.Result will be  MLResult.Code.InvalidParam  if an incorrect param was sent. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkSetSoundDistanceProperties {#mlresultcode-mlwebrtcaudiosinksetsounddistanceproperties}

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
| ref [MLWebRTCAudioSinkSoundDistance](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkSoundDistance.md) |soundDistance|The sound distance & channel to set the audio sink spatialization for.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if spatialization settings were set successfully. MLResult.Result will be  MLResult.Code.WebRTCResultInstanceNotCreated  if MLWebRTC instance was not created. MLResult.Result will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. MLResult.Result will be  MLResult.Code.InvalidParam  if an incorrect param was sent. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkSetSoundOrientation {#mlresultcode-mlwebrtcaudiosinksetsoundorientation}

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
| ref [MLWebRTCAudioSinkOrientation](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkOrientation.md) |orientation|The orientation & channel to set the audio sink spatialization for.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if spatialization settings were set successfully. MLResult.Result will be  MLResult.Code.WebRTCResultInstanceNotCreated  if MLWebRTC instance was not created. MLResult.Result will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. MLResult.Result will be  MLResult.Code.InvalidParam  if an incorrect param was sent. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkSetSoundRadiationProperties {#mlresultcode-mlwebrtcaudiosinksetsoundradiationproperties}

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
| ref [MLWebRTCAudioSinkSoundRadiation](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.NativeBindings.MLWebRTCAudioSinkSoundRadiation.md) |soundRadiation|The sound radiation & channel to set the audio sink spatialization for.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if spatialization settings were set successfully. MLResult.Result will be  MLResult.Code.WebRTCResultInstanceNotCreated  if MLWebRTC instance was not created. MLResult.Result will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. MLResult.Result will be  MLResult.Code.InvalidParam  if an incorrect param was sent. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkSetSoundVolume {#mlresultcode-mlwebrtcaudiosinksetsoundvolume}

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






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if the volume was set successfully. MLResult.Result will be  MLResult.Code.WebRTCResultInstanceNotCreated  if MLWebRTC instance was not created. MLResult.Result will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. MLResult.Result will be  MLResult.Code.InvalidParam  if an incorrect param was sent. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCAudioSinkSetSource {#mlresultcode-mlwebrtcaudiosinksetsource}

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






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if destroying all handles was successful. MLResult.Result will be  MLResult.Code.MismatchingHandle  if an incorrect handle was sent. MLResult.Result will be  MLResult.Code.PermissionDenied  if necessary permission is missing. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to other internal error. 



-----------


