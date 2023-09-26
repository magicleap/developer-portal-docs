---
title: MLMediaRecorder
summary: apis for video and audio recording. 

---

# MLMediaRecorder



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


APIs for video and audio recording.   [More...](#detailed-description)  




## Detailed Description

```csharp
public class MLMediaRecorder; 
```


**Details**

[MLMediaRecorder](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md) description goes here. 





-----------



## Public Fields

### Handle {#ulong-handle}

Handle to the underlying media recorder object. 

```csharp

public ulong Handle { get; set; }

```






-----------

### InputSurface {#mlnativesurface-inputsurface}

[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) surface object which should be used to get the native buffers to render the video frames onto for recorded. 

```csharp

public MLNativeSurface InputSurface = MagicLeapNativeBindings.InvalidHandle { get; set; }

```






-----------

## Public Methods

### [MLMediaRecorder](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md) Create {#mlmediarecorder-create}

Create a media recorder object 

```csharp
public static MLMediaRecorder Create()
```






**Returns**: Media recorder object if construction was successful, null otherwise



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetInputSurface {#mlresult-getinputsurface}

Gets the input surface to record from when using SURFACE video source. May only be called after MLMediaRecorderPrepare and MLMediaRecorderStart. Frames rendered to the producer before MLMediaRecorderStart() is called will be discarded. When using an input surface, there are no accessible input buffers, as buffers are automatically passed from the other modules to this surface. The returned input surface can also be passed as a destination surface to - a video/mixed reality video capture session when calling MLCameraPrepareCapture(). Captured raw video frames will be consumed directly as input to an encoder without copying. Caller of this API should release the surface using #MLMediaRecorderReleaseInputSurface() on the Surface handle after usage. 

```csharp
public MLResult GetInputSurface()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetMaxAmplitude {#mlresult-getmaxamplitude}

Returns the maximum absolute amplitude that was sampled since the last call to this method. Call this only after the [MLMediaRecorder.SetAudioSource()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-setaudiosource). 

```csharp
public MLResult GetMaxAmplitude(
    out int maxAmp
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out int |maxAmp||






-----------

### delegate void OnErrorDelegate {#delegate-void-onerrordelegate}

```csharp
public delegate void OnErrorDelegate(
    OnErrorData trackInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnErrorData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.OnErrorData.md) |trackInfo|Info received when the media recorder runs into an error. |






-----------

### delegate void OnInfoDelegate {#delegate-void-oninfodelegate}

```csharp
public delegate void OnInfoDelegate(
    OnInfoData info
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnInfoData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.OnInfoData.md) |info||






-----------

### delegate void OnTrackErrorDelegate {#delegate-void-ontrackerrordelegate}

```csharp
public delegate void OnTrackErrorDelegate(
    OnTrackErrorData trackInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnTrackErrorData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.OnTrackErrorData.md) |trackInfo|Info received when the media recorder runs into a track error. |






-----------

### delegate void OnTrackInfoDelegate {#delegate-void-ontrackinfodelegate}

```csharp
public delegate void OnTrackInfoDelegate(
    OnTrackInfoData info
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnTrackInfoData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.OnTrackInfoData.md) |info||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Prepare {#mlresult-prepare}

Prepares the recorder to begin capturing and encoding data for input mediaformat. Should be called after setting up the desired audio and video sources, encoders, but before [MLMediaRecorder.Start()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-start). 

```csharp
public MLResult Prepare(
    MLMediaFormat format
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) |format|Media format object to configure the video & audio track.|






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Reset {#mlresult-reset}

Restarts the MediaRecorder to its idle state. After calling this method, you will have to configure it again as if it had just been constructed. 

```csharp
public MLResult Reset()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetAudioEncoder {#mlresult-setaudioencoder}

Sets the audio encoder to be used for recording. If this method is not called, the output file will not contain an audio track. Call this after [MLMediaRecorder.SetOutputFormat()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-setoutputformat) and before [MLMediaRecorder.Prepare()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-prepare). 

```csharp
public MLResult SetAudioEncoder(
    AudioEncoder inAudioEncoder
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [AudioEncoder](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-audioencoder) |inAudioEncoder|Available audio encoder formats |






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetAudioSource {#mlresult-setaudiosource}

Set MediaRecorder audio source. Cannot be called twice without calling [MLMediaRecorder.Reset()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-reset) in between. 

```csharp
public MLResult SetAudioSource(
    AudioSource inAudioSource
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [AudioSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-audiosource) |inAudioSource|Audio source to put in the recorded media. |






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetGeoLocation {#mlresult-setgeolocation}

Sets the GEO location for recording. 

```csharp
public MLResult SetGeoLocation(
    long inLatitude10000,
    long inLongitude10000
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| long |inLatitude10000|the 10000 multiplies latitude of location.|
| long |inLongitude10000|the 10000 multiplies longitude of location.|






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetMaxDuration {#mlresult-setmaxduration}

Sets the maximum duration (in ms) of the recording session. Call this after [MLMediaRecorder.SetOutputFormat()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-setoutputformat) and before [MLMediaRecorder.Prepare()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-prepare). After recording reaches the specified duration, a notification will be sent via the callback with a [MLMediaRecorder.Info](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-info) code of [MLMediaRecorder.Info.MaxDurationReached](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-maxdurationreached) and recording will be stopped. Stopping happens asynchronously, there is no guarantee that the recorder will have stopped by the time the listener is notified. 

```csharp
public MLResult SetMaxDuration(
    int inMaxDurationMsec
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |inMaxDurationMsec||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetMaxFileSize {#mlresult-setmaxfilesize}

Sets the maximum file size (in bytes) of the recording session. Call this after [MLMediaRecorder.SetOutputFormat()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-setoutputformat) and before [MLMediaRecorder.Prepare()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-prepare). After recording reaches the specified filesize, a notification will be sent via the callback with a [MLMediaRecorder.Info](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-info) code of [MLMediaRecorder.Info.MaxFileSizeReached](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-maxfilesizereached) and recording will be stopped. happens asynchronously, there is no guarantee that the recorder will have stopped by the time the listener is notified. 

```csharp
public MLResult SetMaxFileSize(
    long inMaxFileSize
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| long |inMaxFileSize||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetOutputFileForFD {#mlresult-setoutputfileforfd}

Pass in the unmanaged file descriptor of the file to be written. Call this after [MLMediaRecorder.SetOutputFormat()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-setoutputformat) but before [MLMediaRecorder.Prepare()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-prepare). 

```csharp
public MLResult SetOutputFileForFD(
    int fd
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |fd|Unmanaged file descriptor of the output file.|






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetOutputFileForPath {#mlresult-setoutputfileforpath}

Sets the path of the output file to be produced. Call this after [MLMediaRecorder.SetOutputFormat()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-setoutputformat) but before [MLMediaRecorder.Prepare()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-prepare). 

```csharp
public MLResult SetOutputFileForPath(
    string path
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |path|Path to output file. Folders should exist already.|






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetOutputFormat {#mlresult-setoutputformat}

Sets the format of the output file produced during recording. 

```csharp
public MLResult SetOutputFormat(
    OutputFormat inFormat
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-outputformat) |inFormat|Possible output formats |






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetVideoEncoder {#mlresult-setvideoencoder}

Sets the video encoder to be used for recording. If this method is not called, the output file will not contain a video track. Call this after [MLMediaRecorder.SetOutputFormat()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-setoutputformat) and before [MLMediaRecorder.Prepare()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-prepare). The video source is always set to camera by default. 

```csharp
public MLResult SetVideoEncoder(
    VideoEncoder inVideoEncoder
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [VideoEncoder](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-videoencoder) |inVideoEncoder|Available video encoder formats |






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetVideoSource {#mlresult-setvideosource}

Sets MediaRecorder video source. Cannot be called twice without calling [MLMediaRecorder.Reset()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-reset) in between. 

```csharp
public MLResult SetVideoSource(
    VideoSource inVideoSource
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [VideoSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-videosource) |inVideoSource|Video source to put in the recorded media. |






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Start {#mlresult-start}

Begins capturing and encoding data to the specified file. Call this after [MLMediaRecorder.Prepare()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-prepare). The apps should not start another recording session during recording. 

```csharp
public MLResult Start()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Stop {#mlresult-stop}

Stops recording. Call this after [MLMediaRecorder.Start()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#mlresult-start). Once recording is stopped, you will have to configure it again as if it has just been constructed. 

```csharp
public MLResult Stop()
```






-----------

## Public Events

### OnError {#onerrordelegate-onerror}

MediaRecorder received a general error message. 

```csharp
public OnErrorDelegate OnError()
```






-----------

### OnInfo {#oninfodelegate-oninfo}

MediaRecorder received a general info/warning message. 

```csharp
public OnInfoDelegate OnInfo()
```






-----------

### OnTrackError {#ontrackerrordelegate-ontrackerror}

MediaRecorder received a track-related error message. 

```csharp
public OnTrackErrorDelegate OnTrackError()
```






-----------

### OnTrackInfo {#ontrackinfodelegate-ontrackinfo}

MediaRecorder received a track-related info/warning message. 

```csharp
public OnTrackInfoDelegate OnTrackInfo()
```






-----------

## Public Enums

### AudioEncoder {#enums-audioencoder}

Available audio encoder formats 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Default | 0|   |
| AMR_NB | | AMR NB.   |
| AMR_WB | | AMR WB.   |
| AAC | | AAC.   |
| HE_AAC | | HE AAC.   |
| AAC_ELD | | AAC ELD.   |
| VORBIS | | Vorbis.   |
| OPUS | | Opus.   |








-----------

### AudioSource {#enums-audiosource}

Audio source to put in the recorded media. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Voice | 0| Recording voice.   |
| World | | Recording ambient sounds.   |
| Virtual | | Recording digital sounds.   |
| Mixed | | Mixed reality mode: digital + ambient.   |








-----------

### Error {#enums-error}

Video recorder error types 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unknown | 1|   |
| ServerDied | 2|   |
| TrackGeneral | 100|   |
| VideoNoSyncFrame | 200|   |








-----------

### Event {#enums-event}

Media recorder events 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Error | 1| Media recorder error.   |
| Info | 2| Media recorder info.   |
| TrackError | 100| Media recorder track error.   |
| TrackInfo | 101| Media recorder track info.   |








-----------

### Info {#enums-info}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unknown | 1|   |
| MaxDurationReached | 800| Max duration of the clip is reached.   |
| MaxFileSizeReached | 801| Max file size is reached.   |
| MaxFileSizeApproaching | 802| Max file size is approaching.   |
| TrackCompletionStatus | 1000| Next output file has started.   |
| TrackProgressInTime | 1001| The info about progress in time.   |
| TrackType | 1002| track info.   |
| TrackDurationMs | 1003| The info about track duration.   |
| TrackMaxChunkDurationMs | 1004| The time to measure the max chunk duration.   |
| TrackEncodedFrames | 1005| The info about encoded frames.   |
| TrackInterChunkTimeUs | 1006| The time to measure how well the audio and video track data interleaved.   |
| TrackInitialDelayMs | 1007| The time to measure system response.   |
| TrackStartOffsetMs | 1008| The time used to compensate for initial A/V sync.   |
| TrackDataKBytes | 1009| Total number of bytes of the media data.   |








-----------

### OutputFormat {#enums-outputformat}

Possible output formats 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Default | 0|   |
| THREE_GPP | | 3gpp format.   |
| MPEG_4 | | MP4 format.   |
| AMR_NB | | AMR NB.   |
| AMR_WB | | AMR WB.   |
| AAC_ADIF | | AAC&#95;ADIF.   |
| AAC_ADTS | | AAC&#95;ADTS.   |
| RTP_AVP | | Stream over a socket, limited to a single stream.   |
| MPEG2TS | | H.264/AAC data encapsulated in MPEG2/TS.   |
| WEBM | | VP8/VORBIS data in a WEBM container.   |
| HEIF | | HEIC data in a HEIF container.   |
| OGG | | Opus data in a OGG container.   |








-----------

### VideoEncoder {#enums-videoencoder}

Available video encoder formats 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Default | 0|   |
| H263 | | H263. This format has support for software encoder.   |
| H264 | | H264. This format has support for hardware encoder.   |
| MPEG_4_SP | | MPEG4 SP. This format has support for software encoder.   |
| VP8 | | VP8. This format has support for software encoder.   |
| HEVC | | HEVC. This format has support for hardware encoder.   |








-----------

### VideoSource {#enums-videosource}

Video source to put in the recorded media. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Camera | 1| Camera video source.   |








-----------


