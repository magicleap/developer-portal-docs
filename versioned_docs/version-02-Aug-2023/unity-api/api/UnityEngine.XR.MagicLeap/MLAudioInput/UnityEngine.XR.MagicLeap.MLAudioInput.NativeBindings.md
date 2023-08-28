---
title: NativeBindings
summary: see ml-audio.h for additional comments. 

---

# NativeBindings




See ml&#95;audio.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLAudioCreateInputFromMicCapture {#mlresultcode-mlaudiocreateinputfrommiccapture}

Creates a new sound input that provides audio from the mics on the wearable. 

```csharp
public MLResult.Code MLAudioCreateInputFromMicCapture(
    MicCaptureType captureType,
    in MLAudioOutput.NativeBindings.MLAudioBufferFormat format,
    uint bufferSizeInBytes,
    MLAudioOnBufferDelegate callback,
    IntPtr context,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MicCaptureType](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md#enums-miccapturetype) |captureType|Specifies the type of mic capture created.|
| in [MLAudioOutput.NativeBindings.MLAudioBufferFormat](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/NativeBindings/UnityEngine.XR.MagicLeap.MLAudioOutput.NativeBindings.MLAudioBufferFormat.md) |format|MLAudioBufferFormat specifying the audio format of the stream.|
| uint |bufferSizeInBytes|Requested size in bytes for each of the two stream buffers.|
| MLAudioOnBufferDelegate |callback|Function to use for callback.|
| IntPtr |context|A generic data pointer passed back to the callback.|
| out ulong |handle|Handle used in subsequent calls for this sound input.|






**Returns**: MLResult.Result will be MLResult.AllocFailed due to memory allocation failure. MLResult.Result will be MLResult.InvalidParam due to an invalid parameter. MLResult.Result will be MLResult.Ok Successfully created new sound input that provides a mic capture stream. MLResult.Result will be MLResult.PermissionDenied due to lack of permission. MLResult.Result will be MLResult.UnspecifiedFailure due to an unknown error. MLResult.Result will be MLAudioResult.InternalConfigError due to an internal configuration error. MLResult.Result will be MLAudioResult.InvalidBitsPerSample due to an invalid bits per sample. MLResult.Result will be MLAudioResult.InvalidBufferSize due to an invalid buffer size. MLResult.Result will be MLAudioResult.InvalidChannelCount due to an invalid channel count. MLResult.Result will be MLAudioResult.InvalidSampleFormat due to an invalid sample format. MLResult.Result will be MLAudioResult.InvalidSampleRate due to an invalid sample rate. MLResult.Result will be MLAudioResult.InvalidValidBits due to an invalid valid bits per sample. MLResult.Result will be MLAudioResult.NotImplemented because feature has not been implemented yet. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLAudioGetBufferedInputDefaults {#mlresultcode-mlaudiogetbufferedinputdefaults}

Returns the preferred (i.e. best performing) settings for buffered input. 

```csharp
public MLResult.Code MLAudioGetBufferedInputDefaults(
    uint channelCount,
    uint samplesPerSecond,
    out MLAudioOutput.NativeBindings.MLAudioBufferFormat format,
    out uint recommendedSizeInBytes,
    out uint minimumSizeInBytes
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |channelCount|Number of audio channels (e.g. 2 for stereo).|
| uint |samplesPerSecond|Sample rate for the buffered input.|
| out [MLAudioOutput.NativeBindings.MLAudioBufferFormat](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/NativeBindings/UnityEngine.XR.MagicLeap.MLAudioOutput.NativeBindings.MLAudioBufferFormat.md) |format|Recommended Settings for MLAudioBufferFormat.|
| out uint |recommendedSizeInBytes|Recommended size for the buffers.|
| out uint |minimumSizeInBytes|Minimum allowable size for the buffers.|






**Returns**: MLResult.Result will be MLResult.AllocFailed due to memory allocation failure. MLResult.Result will be MLResult.InvalidParam due to an invalid parameter. MLResult.Result will be MLResult.Ok Successfully created new sound input that provides a "mixed capture" stream. MLResult.Result will be MLResult.PermissionDenied due to lack of permission. MLResult.Result will be MLResult.UnspecifiedFailure due to an unknown error. MLResult.Result will be MLAudioResult.InternalConfigError due to an internal configuration error. MLResult.Result will be MLAudioResult.InvalidBitsPerSample due to an invalid bits per sample. MLResult.Result will be MLAudioResult.InvalidBufferSize due to an invalid buffer size. MLResult.Result will be MLAudioResult.InvalidChannelCount due to an invalid channel count. MLResult.Result will be MLAudioResult.InvalidSampleFormat due to an invalid sample format. MLResult.Result will be MLAudioResult.InvalidSampleRate due to an invalid sample rate. MLResult.Result will be MLAudioResult.InvalidValidBits due to an invalid valid bits per sample. MLResult.Result will be MLAudioResult.NotImplemented because feature has not been implemented yet. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLAudioGetInputBuffer {#mlresultcode-mlaudiogetinputbuffer}

Returns a full buffer containing captured audio data. 

```csharp
public MLResult.Code MLAudioGetInputBuffer(
    ulong handle,
    out MLAudioOutput.NativeBindings.MLAudioBuffer buffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Used to identify the sound input.|
| out [MLAudioOutput.NativeBindings.MLAudioBuffer](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/NativeBindings/UnityEngine.XR.MagicLeap.MLAudioOutput.NativeBindings.MLAudioBuffer.md) |buffer|Contains the buffer to read from.|






**Returns**: MLResult.Result will be MLResult.InvalidParam due to an invalid parameter. MLResult.Result will be MLResult.Ok Successfully returned full buffer containing captured audio data. MLResult.Result will be MLResult.UnspecifiedFailure due to an unknown error. MLResult.Result will be MLResult.AudioBufferNotReady because buffer was not ready. MLResult.Result will be MLResult.AudioHandleNotFound due to a missing handle. MLResult.Result will be MLResult.AudioInternalConfigError due to an internal configurations error. MLResult.Result will be MLResult.NotImplemented because feature has not been implemented yet. MLResult.Result will be MLResult.OperationUnavailable because operation is unavailable. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLAudioGetMicMute {#mlresultcode-mlaudiogetmicmute}

Gets the mute state of the microphone. 

```csharp
public MLResult.Code MLAudioGetMicMute(
    out bool isMuted
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out bool |isMuted|The mute state of the microphone.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if successful. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to internal error. MLResult.Result will be  MLResult.Code.InvalidParam  if input parameter is invalid. MLResult.Result will be  MLResult.Code.PermissionDenied  if  AudioCaptureMic  permission is denied. MLResult.Result will be  MLResult.Code.AllocFailed  if failed due to internal error. MLResult.Result will be  MLResult.Code.NotImplemented . 



-----------

### IntPtr MLAudioGetResultString {#intptr-mlaudiogetresultstring}

Gets the result string for a MLResult.Code. 

```csharp
public IntPtr MLAudioGetResultString(
    MLResult.Code result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) |result|The MLResult.Code to be requested.|






**Returns**: A pointer to the result string.



-----------

### delegate void MLAudioMicMuteCallback {#delegate-void-mlaudiomicmutecallback}

The callback that occurs when the mute state changes for the microphone. 

```csharp
public delegate void MLAudioMicMuteCallback(
    bool muted,
    IntPtr callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |muted|The mute state of the microphone.|
| IntPtr |callback|A pointer to the callback.|






-----------

### delegate void MLAudioOnBufferDelegate {#delegate-void-mlaudioonbufferdelegate}

The callback that occurs when an input buffer is available. 

```csharp
public delegate void MLAudioOnBufferDelegate(
    ulong handle,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Handle used to identify the sound input.|
| IntPtr |callback|A pointer to the callback.|






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLAudioReleaseInputBuffer {#mlresultcode-mlaudioreleaseinputbuffer}

Releases a buffer once it has been read. 

```csharp
public MLResult.Code MLAudioReleaseInputBuffer(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Used to identify the sound input.|






**Returns**: MLResult.Result will be MLResult.Ok Successfully released buffer. MLResult.Result will be MLResult.UnspecifiedFailure due to an unknown error. MLResult.Result will be MLResult.AudioBufferNotReady because buffer was not ready. MLResult.Result will be MLResult.AudioHandleNotFound due to a missing handle. MLResult.Result will be MLResult.AudioInternalConfigError due to an internal configurations error. MLResult.Result will be MLResult.NotImplemented because feature has not been implemented yet. MLResult.Result will be MLResult.OperationUnavailable because operation is unavailable. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLAudioSetMicMute {#mlresultcode-mlaudiosetmicmute}

Sets the mute state of the microphone. 

```csharp
public MLResult.Code MLAudioSetMicMute(
    bool muted
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |muted|The mute state of the microphone.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if successful. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to internal error. MLResult.Result will be  MLResult.Code.PermissionDenied  if  AudioCaptureMic  permission is denied. MLResult.Result will be  MLResult.Code.NotImplemented . 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLAudioSetMicMuteCallback {#mlresultcode-mlaudiosetmicmutecallback}

Register a callback for when the mute state changes for the microphone. 

```csharp
public MLResult.Code MLAudioSetMicMuteCallback(
    MLAudioMicMuteCallback callback,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| MLAudioMicMuteCallback |callback|A pointer to the callback.|
| IntPtr |data|A generic data pointer passed back to the callback.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if successful. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to internal error. MLResult.Result will be  MLResult.Code.PermissionDenied  if  AudioCaptureMic  permission is denied. MLResult.Result will be  MLResult.Code.AllocFailed  if failed due to internal error. MLResult.Result will be  MLResult.Code.NotImplemented . 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLAudioStartInput {#mlresultcode-mlaudiostartinput}

Starts capture for a sound input. 

```csharp
public MLResult.Code MLAudioStartInput(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Used to identify the sound input.|






**Returns**: MLResult.Result will be MLResult.Ok Successfully started capture for sound input. MLResult.Result will be MLResult.PermissionDenied due to lack of permission. MLResult.Result will be MLResult.UnspecifiedFailure due to an unknown error. MLResult.Result will be MLResult.AudioHandleNotFound due to a missing handle. MLResult.Result will be MLResult.NotImplemented because feature has not been implemented yet. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLAudioStopInput {#mlresultcode-mlaudiostopinput}

Stops capture for a sound input. 

```csharp
public MLResult.Code MLAudioStopInput(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Used to identify the sound input.|






**Returns**: MLResult.Result will be MLResult.Ok Successfully stopped capture for sound input. MLResult.Result will be MLResult.PermissionDenied due to lack of permission. MLResult.Result will be MLResult.UnspecifiedFailure due to an unknown error. MLResult.Result will be MLResult.AudioHandleNotFound due to a missing handle. MLResult.Result will be MLResult.NotImplemented because feature has not been implemented yet. 



-----------


