---
title: AudioSink
summary: class that represents an audio sink used by the mlwebrtc api. 

---

# AudioSink




Class that represents an audio sink used by the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.   


Inherits from: <br></br>[Sink](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.Sink.md)




## Public Fields

### CopyRawAudioDataToManagedMemory {#bool-copyrawaudiodatatomanagedmemory}

Raw audio data received in the OnAudioDataAvailable&#95;NativeCallbackThread delegate should be converted to float samples and copied from unmanaged to managed memory. Audio data received in OnAudioDataAvailable will always be available in managed memory. This is set to true by default. Disable this flag if you experience too many garbage collection invocations for MLAudio.Buffer.Samples & handle the audio data conversion from the unmanaged to managed and from Int to Float yourself. 

```csharp

public bool CopyRawAudioDataToManagedMemory { get; set; }

```






-----------

### CurrentServiceStatus {#servicestatus-currentservicestatus}

Current status of the underlying audio service. Apps should use this status to determine whether its safe to set the audio attriutes like soundfield parameters and volume. 

```csharp

public ServiceStatus CurrentServiceStatus { get; set; }

```

| Type | Description  | 
|--|--|
| [ServiceStatus](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.md#enums-servicestatus) | Status of the underlying Audio Service the buffers are submitted & soundfield attributes applied to.  |





-----------

### Mode {#buffernotifymode-mode}

Audio buffer notification mode for this [AudioSink](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.md)

```csharp

public BufferNotifyMode Mode { get; set; }

```

| Type | Description  | 
|--|--|
| [BufferNotifyMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.md#enums-buffernotifymode) | Behavior of the sink if audio buffer data is provided to the app in a callback.  |





-----------

## Public Methods

### [AudioSink](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.md) Create {#audiosink-create}

Creates an initialized [AudioSink](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.md) object. 

```csharp
public static AudioSink Create(
    out MLResult result,
    BufferNotifyMode mode =BufferNotifyMode.None
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |result|The [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) object of the inner platform call(s).|
| [BufferNotifyMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.md#enums-buffernotifymode) |mode|Behavior of the sink if audio buffer data is provided to the app in a callback. |






**Returns**: An initialized [AudioSink](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.md) object.



-----------

### override [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Destroy {#override-destroy}

Destroys this audio sink object. 

```csharp
public virtual override MLResult Destroy()
```






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 

**Reimplements**: [Destroy](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.Sink.md#abstract-destroy)



-----------

### delegate void OnAudioDataAvailableDelegate {#delegate-void-onaudiodataavailabledelegate}

Delegate to provide audio buffer data received for this audio sink. 

```csharp
public delegate void OnAudioDataAvailableDelegate(
    MLAudioOutput.Buffer buffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLAudioOutput.Buffer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.Buffer.md) |bufferFormat|Format of the audio buffer|
|  |buffer|Audio buffer|






-----------

### delegate void OnAudioServiceStatusChangedDelegate {#delegate-void-onaudioservicestatuschangeddelegate}

Delegate to provide the current audio service status. Apps should use this status to determine whether its safe to set the audio attriutes like soundfield parameters and volume. 

```csharp
public delegate void OnAudioServiceStatusChangedDelegate(
    ServiceStatus status
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ServiceStatus](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AudioSink/UnityEngine.XR.MagicLeap.MLWebRTC.AudioSink.md#enums-servicestatus) |status|The current status of the audio service|






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ResetPosition {#mlresult-resetposition}

Resets the world position of the audio sink for  spatialized  audio. 

```csharp
public MLResult ResetPosition()
```






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetCacheSize {#mlresult-setcachesize}

Sets the number of milliseconds of audio that should be cached in the buffers before dropping the packets. Dictates the audio latency when app recovers from lifecycle state transitions like standby & reality. Default is 200ms. 

```csharp
public MLResult SetCacheSize(
    uint millisecondsToCache
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |sinkHandle|The handle to the audio sink.|
|  |millisecondsToCache|How many milliseconds worth of audio to cache.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetDirectSendLevels {#mlresult-setdirectsendlevels}

Sets the direct send levels of the audio sink for the specified channel. 

```csharp
public MLResult SetDirectSendLevels(
    MLAudioOutput.SpatialSound.SendLevels sendLevels,
    int channel =-1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLAudioOutput.SpatialSound.SendLevels](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/SpatialSound/UnityEngine.XR.MagicLeap.MLAudioOutput.SpatialSound.SendLevels.md) |sendLevels|The send levels of the audio sink.|
| int |channel|Channel to set this spatialization property for. Passing -1 sets it for all available channels.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetDistanceProperties {#mlresult-setdistanceproperties}

Sets the distance properties of the audio sink for the specified channel. 

```csharp
public MLResult SetDistanceProperties(
    MLAudioOutput.SpatialSound.DistanceProperties distanceProperties,
    int channel =-1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLAudioOutput.SpatialSound.DistanceProperties](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/SpatialSound/UnityEngine.XR.MagicLeap.MLAudioOutput.SpatialSound.DistanceProperties.md) |distanceProperties|The distance properties of the audio sink.|
| int |channel|Channel to set this spatialization property for. Passing -1 sets it for all available channels.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetOrientation {#mlresult-setorientation}

Sets the world orientation of the audio sink for the specified channel. 

```csharp
public MLResult SetOrientation(
    Quaternion orientation,
    int channel =-1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Quaternion |orientation|The orientation of the audio sink.|
| int |channel|Channel to set this spatialization property for. Passing -1 sets it for all available channels.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetPosition {#mlresult-setposition}

Sets the world position of the audio sink for the specified channel. 

```csharp
public MLResult SetPosition(
    Vector3 position,
    int channel =-1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Vector3 |position|The position to set the audio sink to.|
| int |channel|Channel to set this spatialization property for. Passing -1 sets it for all available channels.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetRadiationProperties {#mlresult-setradiationproperties}

Sets the radiation properties of the audio sink for the specified channel. 

```csharp
public MLResult SetRadiationProperties(
    MLAudioOutput.SpatialSound.RadiationProperties radiationProperties,
    int channel =-1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLAudioOutput.SpatialSound.RadiationProperties](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/SpatialSound/UnityEngine.XR.MagicLeap.MLAudioOutput.SpatialSound.RadiationProperties.md) |radiationProperties|The radiation properties of the audio sink.|
| int |channel|Channel to set this spatialization property for. Passing -1 sets it for all available channels.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetRoomSendLevels {#mlresult-setroomsendlevels}

Sets the room send levels of the audio sink for the specified channel. 

```csharp
public MLResult SetRoomSendLevels(
    MLAudioOutput.SpatialSound.SendLevels sendLevels,
    int channel =-1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLAudioOutput.SpatialSound.SendLevels](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/SpatialSound/UnityEngine.XR.MagicLeap.MLAudioOutput.SpatialSound.SendLevels.md) |sendLevels|The send levels of the audio sink.|
| int |channel|Channel to set this spatialization property for. Passing -1 sets it for all available channels.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetStream {#mlresult-setstream}

Sets the stream of the audio sink. 

```csharp
public MLResult SetStream(
    MediaStream stream
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MediaStream](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) |stream|The stream to use.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetVolume {#mlresult-setvolume}

Sets the volume of the audio sink for the specified channel. The range of the volume is 0 to 8, with 0 for silence, 1 for unity gain, and 8 for 8x gain. 

```csharp
public MLResult SetVolume(
    float volume
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |volume|The volume of the audio sink.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

## Protected Methods

### SetTrack {#override-settrack}

Sets the track of the audio sink. 

```csharp
protected virtual override MLResult SetTrack(
    MLWebRTC.MediaStream.Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.MediaStream.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) |track|The track to use.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 

**Reimplements**: [SetTrack](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.Sink.md#abstract-settrack)



-----------

## Public Events

### OnAudioDataAvailable {#onaudiodataavailabledelegate-onaudiodataavailable}

Delegate invoked on the main thread to provide the audio buffer data for this sink. MLAudio.Buffer.NativeDataPtr is NOT valid for this delegate. Use the managed MLAudio.Buffer.Samples array instead. 

```csharp
public OnAudioDataAvailableDelegate OnAudioDataAvailable()
```






-----------

### OnAudioDataAvailable_NativeCallbackThread {#onaudiodataavailabledelegate-onaudiodataavailable-nativecallbackthread}

Delegate invoked on the native callback thread to provide the audio buffer data for this sink. MLAudio.Buffer.NativeDataPtr is valid for this delegate. 

```csharp
public OnAudioDataAvailableDelegate OnAudioDataAvailable_NativeCallbackThread()
```






-----------

### OnAudioServiceStatusChanged {#onaudioservicestatuschangeddelegate-onaudioservicestatuschanged}

Delegate invoked on the main thread to notify the app about the current status of the underlying audio service. Apps should use this tatus to determine whether its safe to set the audio attriutes like soundfield parameters and volume. 

```csharp
public OnAudioServiceStatusChangedDelegate OnAudioServiceStatusChanged()
```






-----------

## Public Enums

### BufferNotifyMode {#enums-buffernotifymode}

Behavior of the sink if audio buffer data is provided to the app in a callback. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | | Don't provide app with audio buffers, consume them in the underlying lib and play directly on the device.   |
| NotifyAndPlay | | Provide the app with audio buffers in a callback, AND also play the audio directly on the device. Ths is useful where apps want to use the buffers to calculate something (like RMS) but not take the responsibility of actually playing the audio.   |
| NotifyOnly | | Provide the app with audio buffers in a callback. The underlyin library will NOT play the audio. It is the app's responsibility to submit the audio buffers to the device.   |








-----------

### ServiceStatus {#enums-servicestatus}

Status of the underlying Audio Service the buffers are submitted & soundfield attributes applied to. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Initial | | The audio service has been initialized but not ready to accept updates to any attributes (soundfield or volume).   |
| Started | | The audio service has started. It is now safe to update the audio attributes (soundfield and volume).   |
| Failed | | Audio service has failed. This will cause disruption in audio playback. Audio attributes (soundfield or volume) should not be set after receiving this status update.   |
| Stopped | | Audio service has stopped. Audio attributes (soundfield or volume) should not be set after receiving this status update.   |
| Unknown | | Audio service status is unknown. Audio attributes (soundfield or volume) should not be set after receiving this status update.   |








-----------


