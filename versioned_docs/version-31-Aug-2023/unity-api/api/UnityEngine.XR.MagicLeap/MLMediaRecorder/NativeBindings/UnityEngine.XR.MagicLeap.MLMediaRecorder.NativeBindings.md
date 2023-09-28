---
title: NativeBindings
summary: see ml-media-recorder.h for additional comments. 

---

# NativeBindings




See ml&#95;media&#95;recorder.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderCreate {#mlresultcode-mlmediarecordercreate}

Create a new 

```csharp
public MLResult.Code MLMediaRecorderCreate(
    out ulong outHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |outHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderDestroy {#mlresultcode-mlmediarecorderdestroy}

Destroy a MediaRecorder object. 

```csharp
public MLResult.Code MLMediaRecorderDestroy(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderGetInputSurface {#mlresultcode-mlmediarecordergetinputsurface}

Gets the input surface to record from when using SURFACE video source. May only be called after MLMediaRecorderPrepare. Frames rendered to the producer before MLMediaRecorderStart() is called will be discarded. When using an input surface, there are no accessible input buffers, as buffers are automatically passed from the other modules to this surface. The returned input surface can also be passed as a destination surface to - a video/mixed reality video capture session when calling MLCameraPrepareCapture(). Captured raw video frames will be consumed directly as input to an encoder without copying. Caller of this API should release the surface using #MLMediaRecorderReleaseInputSurface() on the Surface handle after usage. 

```csharp
public MLResult.Code MLMediaRecorderGetInputSurface(
    ulong handle,
    out ulong outInputSurfaceHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out ulong |outInputSurfaceHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderGetMaxAmplitude {#mlresultcode-mlmediarecordergetmaxamplitude}

Returns the maximum absolute amplitude that was sampled since the last call to this method. Call this only after the MLMediaRecorderSetAudioSource(). 

```csharp
public MLResult.Code MLMediaRecorderGetMaxAmplitude(
    ulong handle,
    out int MaxAmp
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out int |MaxAmp||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderPrepare {#mlresultcode-mlmediarecorderprepare}

Prepares the recorder to begin capturing and encoding data for input mediaformat. This method must be called after setting up the desired audio and video sources, encoders, but before start(). 

```csharp
public MLResult.Code MLMediaRecorderPrepare(
    ulong handle,
    ulong formatHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ulong |formatHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderReleaseInputSurface {#mlresultcode-mlmediarecorderreleaseinputsurface}

Release the Surface that was returned by #MLMediaRecorderGetInputSurface. 

```csharp
public MLResult.Code MLMediaRecorderReleaseInputSurface(
    ulong handle,
    ulong inputSurfaceHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ulong |inputSurfaceHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderReset {#mlresultcode-mlmediarecorderreset}

Restarts the MediaRecorder to its idle state. After calling this method, you will have to configure it again as if it had just been constructed. 

```csharp
public MLResult.Code MLMediaRecorderReset(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderSetAudioEncoder {#mlresultcode-mlmediarecordersetaudioencoder}

Sets the audio encoder to be used for recording. If this method is not called, the output file will not contain an audio track. Call this after MLMediaRecorderSetOutputFormat() and before MLMediaRecorderPrepare(). 

```csharp
public MLResult.Code MLMediaRecorderSetAudioEncoder(
    ulong handle,
    AudioEncoder inAudioEncoder
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| [AudioEncoder](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-audioencoder) |inAudioEncoder|Available audio encoder formats |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderSetAudioSource {#mlresultcode-mlmediarecordersetaudiosource}

Set MediaRecorder audio source. cannot be called twice (without calling MLMediaRecorderReset() in between) because it triggers internal initialization. 

```csharp
public MLResult.Code MLMediaRecorderSetAudioSource(
    ulong handle,
    AudioSource inAudioSource
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| [AudioSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-audiosource) |inAudioSource|Audio source to put in the recorded media. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderSetEventCallbacks {#mlresultcode-mlmediarecorderseteventcallbacks}

Sets the MediaRecorderListener object that will receive MediaRecorder notifications. 

```csharp
public MLResult.Code MLMediaRecorderSetEventCallbacks(
    ulong handle,
    ref MLMediaRecorderEventCallbacks callbacks,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [MLMediaRecorderEventCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/NativeBindings/UnityEngine.XR.MagicLeap.MLMediaRecorder.NativeBindings.MLMediaRecorderEventCallbacks.md) |callbacks|Comment Needed! |
| IntPtr |data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderSetGeoLocation {#mlresultcode-mlmediarecordersetgeolocation}

Sets the GEO location for recording. 

```csharp
public MLResult.Code MLMediaRecorderSetGeoLocation(
    ulong handle,
    long inLatitude10000,
    long inLongitude10000
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| long |inLatitude10000||
| long |inLongitude10000||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderSetMaxDuration {#mlresultcode-mlmediarecordersetmaxduration}

Sets the maximum duration (in ms) of the recording session. Call this after MLMediaRecorderSetOutputFormat() and before MLMediaRecorderPrepare(). After recording reaches the specified duration, a notification will be sent via the callback with a MLMediaRecorderInfo code of MLMediaRecorderInfo&#95;MaxDurationReached and recording will be stopped. Stopping happens asynchronously, there is no guarantee that the recorder will have stopped by the time the listener is notified. 

```csharp
public MLResult.Code MLMediaRecorderSetMaxDuration(
    ulong handle,
    int inMaxDurationMsec
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| int |inMaxDurationMsec||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderSetMaxFileSize {#mlresultcode-mlmediarecordersetmaxfilesize}

Sets the maximum file size (in bytes) of the recording session. 

```csharp
public MLResult.Code MLMediaRecorderSetMaxFileSize(
    ulong handle,
    long inMaxFileSize
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| long |inMaxFileSize||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderSetOutputFileForFD {#mlresultcode-mlmediarecordersetoutputfileforfd}

Pass in the file descriptor of the file to be written. Call this after MLMediaRecorderSetOutputFormat() but before MLMediaRecorderprepare(). 

```csharp
public MLResult.Code MLMediaRecorderSetOutputFileForFD(
    ulong handle,
    int Fd
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| int |Fd||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderSetOutputFileForPath {#mlresultcode-mlmediarecordersetoutputfileforpath}

Sets the path of the output file to be produced. Call this after MLMediaRecorderSetOutputFormat() but before [MLMediaRecorder](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md) prepare(). 

```csharp
public MLResult.Code MLMediaRecorderSetOutputFileForPath(
    ulong handle,
    string path
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |path||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderSetOutputFormat {#mlresultcode-mlmediarecordersetoutputformat}

Sets the format of the output file produced during recording. 

```csharp
public MLResult.Code MLMediaRecorderSetOutputFormat(
    ulong handle,
    OutputFormat inFormat
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| [OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-outputformat) |inFormat|Possible output formats |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderSetVideoEncoder {#mlresultcode-mlmediarecordersetvideoencoder}

Sets the video encoder to be used for recording. If this method is not called, the output file will not contain an video track. Call this after MLMediaRecorderSetOutputFormat() and before MLMediaRecorderPrepare(). The video source is always set to camera by default. 

```csharp
public MLResult.Code MLMediaRecorderSetVideoEncoder(
    ulong handle,
    VideoEncoder inVideoEncoder
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| [VideoEncoder](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-videoencoder) |inVideoEncoder|Available video encoder formats |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderSetVideoSource {#mlresultcode-mlmediarecordersetvideosource}

Sets MediaRecorder default video source. cannot be called twice (without calling MLMediaRecorderReset() in between) because it triggers internal initialization. Current implementation supports only camera as video source from 

```csharp
public MLResult.Code MLMediaRecorderSetVideoSource(
    ulong handle,
    VideoSource inVideoSource
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| [VideoSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-videosource) |inVideoSource|Video source to put in the recorded media. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderStart {#mlresultcode-mlmediarecorderstart}

Begins capturing and encoding data to the specified file. Call this after MLMediaRecorderPrepare(). The apps should not start another recording session during recording. 

```csharp
public MLResult.Code MLMediaRecorderStart(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaRecorderStop {#mlresultcode-mlmediarecorderstop}

Stops recording. Call this after MLMediaRecorderStart(). Once recording is stopped, you will have to configure it again as if it has just been constructed. 

```csharp
public MLResult.Code MLMediaRecorderStop(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### delegate void OnErrorDelegate {#delegate-void-onerrordelegate}

Callback whenever MediaRecorder received a general error message. 

```csharp
public delegate void OnErrorDelegate(
    ulong handle,
    ref MLMediaRecorderOnError error
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [MLMediaRecorderOnError](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/NativeBindings/UnityEngine.XR.MagicLeap.MLMediaRecorder.NativeBindings.MLMediaRecorderOnError.md) |error|When the error or info type is track specific, it has the following layout: The left-most 16-bit is meant for error or info type and the right-most 4-bit is meant for track id. |






-----------

### delegate void OnInfoDelegate {#delegate-void-oninfodelegate}

Callback whenever MediaRecorder received a general info/warning message. 

```csharp
public delegate void OnInfoDelegate(
    ulong handle,
    ref MLMediaRecorderOnInfo info
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [MLMediaRecorderOnInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/NativeBindings/UnityEngine.XR.MagicLeap.MLMediaRecorder.NativeBindings.MLMediaRecorderOnInfo.md) |info|When the error or info type is track specific, it has the following layout: The left-most 16-bit is meant for error or info type and the right-most 4-bit is meant for track id. |






-----------

### delegate void OnTrackErrorDelegate {#delegate-void-ontrackerrordelegate}

Callback whenever MediaRecorder received a track-related error message. 

```csharp
public delegate void OnTrackErrorDelegate(
    ulong handle,
    ref MLMediaRecorderOnError trackError
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [MLMediaRecorderOnError](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/NativeBindings/UnityEngine.XR.MagicLeap.MLMediaRecorder.NativeBindings.MLMediaRecorderOnError.md) |trackError|When the error or info type is track specific, it has the following layout: The left-most 16-bit is meant for error or info type and the right-most 4-bit is meant for track id. |






-----------

### delegate void OnTrackInfoDelegate {#delegate-void-ontrackinfodelegate}

Callback whenever MediaRecorder received a track-related info/warning message. 

```csharp
public delegate void OnTrackInfoDelegate(
    ulong handle,
    ref MLMediaRecorderOnInfo trackInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [MLMediaRecorderOnInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/NativeBindings/UnityEngine.XR.MagicLeap.MLMediaRecorder.NativeBindings.MLMediaRecorderOnInfo.md) |trackInfo|When the error or info type is track specific, it has the following layout: The left-most 16-bit is meant for error or info type and the right-most 4-bit is meant for track id. |






-----------


