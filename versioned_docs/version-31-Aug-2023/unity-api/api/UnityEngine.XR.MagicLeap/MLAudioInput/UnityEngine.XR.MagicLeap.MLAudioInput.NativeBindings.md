---
title: NativeBindings
summary: see ml-audio.h for additional comments. 

---

# NativeBindings




See ml&#95;audio.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioCreateInputFromMicCapture {#mlresultcode-mlaudiocreateinputfrommiccapture}

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
| [MicCaptureType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md#enums-miccapturetype) |captureType|Specifies the type of mic capture created.|
| in [MLAudioOutput.NativeBindings.MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/NativeBindings/UnityEngine.XR.MagicLeap.MLAudioOutput.NativeBindings.MLAudioBufferFormat.md) |format|MLAudioBufferFormat specifying the audio format of the stream.|
| uint |bufferSizeInBytes|Requested size in bytes for each of the two stream buffers.|
| MLAudioOnBufferDelegate |callback|Function to use for callback.|
| IntPtr |context|A generic data pointer passed back to the callback.|
| out ulong |handle|Handle used in subsequent calls for this sound input.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.AllocFailed due to memory allocation failure. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.InvalidParam due to an invalid parameter. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.Ok Successfully created new sound input that provides a mic capture stream. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.PermissionDenied due to lack of permission. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.UnspecifiedFailure due to an unknown error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InternalConfigError due to an internal configuration error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InvalidBitsPerSample due to an invalid bits per sample. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InvalidBufferSize due to an invalid buffer size. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InvalidChannelCount due to an invalid channel count. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InvalidSampleFormat due to an invalid sample format. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InvalidSampleRate due to an invalid sample rate. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InvalidValidBits due to an invalid valid bits per sample. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.NotImplemented because feature has not been implemented yet. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioGetBufferedInputDefaults {#mlresultcode-mlaudiogetbufferedinputdefaults}

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
| out [MLAudioOutput.NativeBindings.MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/NativeBindings/UnityEngine.XR.MagicLeap.MLAudioOutput.NativeBindings.MLAudioBufferFormat.md) |format|Recommended Settings for MLAudioBufferFormat.|
| out uint |recommendedSizeInBytes|Recommended size for the buffers.|
| out uint |minimumSizeInBytes|Minimum allowable size for the buffers.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.AllocFailed due to memory allocation failure. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.InvalidParam due to an invalid parameter. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.Ok Successfully created new sound input that provides a "mixed capture" stream. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.PermissionDenied due to lack of permission. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.UnspecifiedFailure due to an unknown error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InternalConfigError due to an internal configuration error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InvalidBitsPerSample due to an invalid bits per sample. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InvalidBufferSize due to an invalid buffer size. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InvalidChannelCount due to an invalid channel count. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InvalidSampleFormat due to an invalid sample format. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InvalidSampleRate due to an invalid sample rate. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.InvalidValidBits due to an invalid valid bits per sample. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLAudioResult.NotImplemented because feature has not been implemented yet. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioGetInputBuffer {#mlresultcode-mlaudiogetinputbuffer}

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
| out [MLAudioOutput.NativeBindings.MLAudioBuffer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/NativeBindings/UnityEngine.XR.MagicLeap.MLAudioOutput.NativeBindings.MLAudioBuffer.md) |buffer|Contains the buffer to read from.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.InvalidParam due to an invalid parameter. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.Ok Successfully returned full buffer containing captured audio data. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.UnspecifiedFailure due to an unknown error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.AudioBufferNotReady because buffer was not ready. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.AudioHandleNotFound due to a missing handle. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.AudioInternalConfigError due to an internal configurations error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.NotImplemented because feature has not been implemented yet. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.OperationUnavailable because operation is unavailable. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioGetMicMute {#mlresultcode-mlaudiogetmicmute}

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






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if input parameter is invalid. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if  AudioCaptureMic  permission is denied. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AllocFailed](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-allocfailed)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.NotImplemented](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-notimplemented) . 



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

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioReleaseInputBuffer {#mlresultcode-mlaudioreleaseinputbuffer}

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






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.Ok Successfully released buffer. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.UnspecifiedFailure due to an unknown error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.AudioBufferNotReady because buffer was not ready. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.AudioHandleNotFound due to a missing handle. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.AudioInternalConfigError due to an internal configurations error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.NotImplemented because feature has not been implemented yet. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.OperationUnavailable because operation is unavailable. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioSetMicMute {#mlresultcode-mlaudiosetmicmute}

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






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if  AudioCaptureMic  permission is denied. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.NotImplemented](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-notimplemented) . 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioSetMicMuteCallback {#mlresultcode-mlaudiosetmicmutecallback}

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






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if  AudioCaptureMic  permission is denied. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AllocFailed](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-allocfailed)  if failed due to internal error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.NotImplemented](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-notimplemented) . 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioStartInput {#mlresultcode-mlaudiostartinput}

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






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.Ok Successfully started capture for sound input. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.PermissionDenied due to lack of permission. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.UnspecifiedFailure due to an unknown error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.AudioHandleNotFound due to a missing handle. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.NotImplemented because feature has not been implemented yet. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLAudioStopInput {#mlresultcode-mlaudiostopinput}

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






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.Ok Successfully stopped capture for sound input. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.PermissionDenied due to lack of permission. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.UnspecifiedFailure due to an unknown error. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.AudioHandleNotFound due to a missing handle. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be MLResult.NotImplemented because feature has not been implemented yet. 



-----------


