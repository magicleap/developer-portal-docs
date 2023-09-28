---
title: NativeBindings
summary: see the mlmediaplayer native plugin ml-mediaplayer-plugin.cpp for additional comments. 

---

# NativeBindings




See the [MLMediaPlayer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLMediaPlayer.md) native plugin  "ml&#95;mediaplayer&#95;plugin.cpp"  for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### T [] ConvertArray< T > {#t-convertarray-t-}

Converts an unmanged array to a managed array of type T. 

```csharp
public static T [] ConvertArray< T >(
    IntPtr arrayPtr,
    ulong count
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |arrayPtr||
| ulong |count||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerAddTimedTextSourceForFD {#mlresultcode-mlmediaplayeraddtimedtextsourceforfd}

Add a timedtext source from a file descriptor. The file descriptor must be seekable. It is the caller's responsibility to close the file descriptor. It is safe to do so as soon as this call returns. 

```csharp
public MLResult.Code MLMediaPlayerAddTimedTextSourceForFD(
    ulong mediaPlayerHandle,
    int Fd,
    long Offset,
    long Length,
    string MimeType
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| int |Fd||
| long |Offset||
| long |Length||
| string |MimeType||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerAddTimedTextSourceForURI {#mlresultcode-mlmediaplayeraddtimedtextsourceforuri}

Add a timedtext source from a URI. 

```csharp
public MLResult.Code MLMediaPlayerAddTimedTextSourceForURI(
    ulong mediaPlayerHandle,
    string Uri,
    string MimeType
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| string |Uri||
| string |MimeType||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerCreate {#mlresultcode-mlmediaplayercreate}

Create a new 

```csharp
public MLResult.Code MLMediaPlayerCreate(
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerDestroy {#mlresultcode-mlmediaplayerdestroy}

Destroy a MediaPlayer object. 

```csharp
public MLResult.Code MLMediaPlayerDestroy(
    ulong mediaPlayerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetAudioHandle {#mlresultcode-mlmediaplayergetaudiohandle}

Get the handle of the audio stream. 

```csharp
public MLResult.Code MLMediaPlayerGetAudioHandle(
    ulong mediaPlayerHandle,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetBufferingSettings {#mlresultcode-mlmediaplayergetbufferingsettings}

Get current Buffering settings. 

```csharp
public MLResult.Code MLMediaPlayerGetBufferingSettings(
    ulong mediaPlayerHandle,
    IntPtr OutBufSettings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| IntPtr |OutBufSettings||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetBufferingUpdate {#mlresultcode-mlmediaplayergetbufferingupdate}

Return current buffering percentage. 

```csharp
public MLResult.Code MLMediaPlayerGetBufferingUpdate(
    ulong mediaPlayerHandle,
    IntPtr OutPercentage
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| IntPtr |OutPercentage||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetCurrentPosition {#mlresultcode-mlmediaplayergetcurrentposition}

Return current position of playback. 

```csharp
public MLResult.Code MLMediaPlayerGetCurrentPosition(
    ulong mediaPlayerHandle,
    out int ms
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| out int |ms||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetDefaultBufferingSettings {#mlresultcode-mlmediaplayergetdefaultbufferingsettings}

Get default Buffering settings. 

```csharp
public MLResult.Code MLMediaPlayerGetDefaultBufferingSettings(
    ulong mediaPlayerHandle,
    IntPtr OutBufSettings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| IntPtr |OutBufSettings||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetDuration {#mlresultcode-mlmediaplayergetduration}

Return media duration. 

```csharp
public MLResult.Code MLMediaPlayerGetDuration(
    ulong mediaPlayerHandle,
    out int durationMS
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| out int |durationMS||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetError {#mlresultcode-mlmediaplayergeterror}

Return last error received by internal 

```csharp
public MLResult.Code MLMediaPlayerGetError(
    ulong mediaPlayerHandle,
    IntPtr OutResult
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| IntPtr |OutResult||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetInfo {#mlresultcode-mlmediaplayergetinfo}

Return last info received by internal 

```csharp
public MLResult.Code MLMediaPlayerGetInfo(
    ulong mediaPlayerHandle,
    IntPtr OutCode,
    IntPtr OutExtra
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| IntPtr |OutCode||
| IntPtr |OutExtra||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetMetadata {#mlresultcode-mlmediaplayergetmetadata}

Return last metadata event information. 

```csharp
public MLResult.Code MLMediaPlayerGetMetadata(
    ulong mediaPlayerHandle,
    IntPtr OutTime,
    IntPtr OutSize,
    IntPtr OutBuffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| IntPtr |OutTime||
| IntPtr |OutSize||
| IntPtr |OutBuffer||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetMetrics {#mlresultcode-mlmediaplayergetmetrics}

Retrieve metrics recorded on the MediaPlayer. 

```csharp
public MLResult.Code MLMediaPlayerGetMetrics(
    ulong mediaPlayerHandle,
    out MLMediaPlayerMetrics metrics
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| out [MLMediaPlayerMetrics](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerMetrics.md) |metrics|MediaPlayer metrics data. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetSubtitleEx {#mlresultcode-mlmediaplayergetsubtitleex}

Return last subtitle event information. 

```csharp
public MLResult.Code MLMediaPlayerGetSubtitleEx(
    ulong mediaPlayerHandle,
    IntPtr OutSubtitleData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| IntPtr |OutSubtitleData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetTTMLData {#mlresultcode-mlmediaplayergetttmldata}

Get TTML data represented by a timed text handle. 

```csharp
public MLResult.Code MLMediaPlayerGetTTMLData(
    ulong mediaPlayerHandle,
    ulong timedTextHandle,
    ref IntPtr ttmlData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ulong |timedTextHandle||
| ref IntPtr |ttmlData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetTimedText {#mlresultcode-mlmediaplayergettimedtext}

Return last timed text event information. 

```csharp
public MLResult.Code MLMediaPlayerGetTimedText(
    ulong mediaPlayerHandle,
    IntPtr OutText,
    IntPtr OutStart,
    IntPtr OutEnd
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| IntPtr |OutText||
| IntPtr |OutStart||
| IntPtr |OutEnd||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetTrackCount {#mlresultcode-mlmediaplayergettrackcount}

Count the number of tracks found in the data source. 

```csharp
public MLResult.Code MLMediaPlayerGetTrackCount(
    ulong mediaPlayerHandle,
    out uint trackCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| out uint |trackCount||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetTrackDRMInfo {#mlresultcode-mlmediaplayergettrackdrminfo}

Get the DRM info of the selected media (either audio or video) track. This function has to be called only after [DataSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/DataSource/UnityEngine.XR.MagicLeap.MLMedia.DataSource.md) has been set and the MediaPlayer is completely prepared. 

```csharp
public MLResult.Code MLMediaPlayerGetTrackDRMInfo(
    ulong mediaPlayerHandle,
    ref MLMediaPlayerTrackInfo trackInfo,
    ref IntPtr drmInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ref [MLMediaPlayerTrackInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerTrackInfo.md) |trackInfo|MediaPlayer [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) Information. |
| ref IntPtr |drmInfo||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetVideoSize {#mlresultcode-mlmediaplayergetvideosize}

Return the size of the video frame. 

```csharp
public MLResult.Code MLMediaPlayerGetVideoSize(
    ulong mediaPlayerHandle,
    out int width,
    out int height
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| out int |width||
| out int |height||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetWebVTTData {#mlresultcode-mlmediaplayergetwebvttdata}

Get WebVTT data represented by a timed text handle. 

```csharp
public MLResult.Code MLMediaPlayerGetWebVTTData(
    ulong mediaPlayerHandle,
    ulong TimedText,
    ref IntPtr webVTTData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ulong |TimedText||
| ref IntPtr |webVTTData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerPause {#mlresultcode-mlmediaplayerpause}

Pause playback. Calling pause() is a NOOP if 

```csharp
public MLResult.Code MLMediaPlayerPause(
    ulong mediaPlayerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerPollStates {#mlresultcode-mlmediaplayerpollstates}

Poll the desired states from internal The "is&#95;XXX" states can be polled multiples times and the return value will be the same if internal state hasn't changed since last call. When polling the "has&#95;XXX" states however, internal state is set to false, since they mean : has &lt;state&gt; happened/changed since I last polled &lt;state&gt; 

```csharp
public MLResult.Code MLMediaPlayerPollStates(
    ulong mediaPlayerHandle,
    PollingStateFlags flags,
    out PollingStateFlags polledStates
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| [PollingStateFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-pollingstateflags) |flags|Comment Needed! |
| out [PollingStateFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-pollingstateflags) |polledStates|Comment Needed! |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerPrepare {#mlresultcode-mlmediaplayerprepare}

Prepare the player for playback, synchronously. After setting the data source and the #GraphicBufferProducer, you need to either call prepare() or prepareAsync(). For files, it is OK to call prepare(), which blocks until 

```csharp
public MLResult.Code MLMediaPlayerPrepare(
    ulong mediaPlayerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerPrepareAsync {#mlresultcode-mlmediaplayerprepareasync}

Prepare the player for playback, asynchronously. After setting the data's source and the #GraphicBufferProducer, you need to either call prepare() or prepareAsync(). For streams, you should call prepareAsync(), which returns immediately, rather than blocking until enough data has been buffered. Prepared state will then be obtained via the 'on&#95;prepared' callback if already registered (see MLMediaPlayerSetEventCallbacksEx), or polled for via the MLMediaPlayerPollStates() call with the MLMediaPlayerPollingStateFlag&#95;HasBeenPrepared flag set. 

```csharp
public MLResult.Code MLMediaPlayerPrepareAsync(
    ulong mediaPlayerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerPrepareTrackDRM {#mlresultcode-mlmediaplayerpreparetrackdrm}

Prepare DRM for the selected media (either audio or video) track 

```csharp
public MLResult.Code MLMediaPlayerPrepareTrackDRM(
    ulong mediaPlayerHandle,
    ref MLMediaPlayerTrackDRMSessionInfo drmSessionInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ref [MLMediaPlayerTrackDRMSessionInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerTrackDRMSessionInfo.md) |drmSessionInfo|DRM Session information for a MediaPlayer [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md). |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerReleaseDRM {#mlresultcode-mlmediaplayerreleasedrm}

Release DRM. 

```csharp
public MLResult.Code MLMediaPlayerReleaseDRM(
    ulong mediaPlayerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerReleaseSubtitleEx {#mlresultcode-mlmediaplayerreleasesubtitleex}

Release last subtitle event information. 

```csharp
public MLResult.Code MLMediaPlayerReleaseSubtitleEx(
    ulong mediaPlayerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerReset {#mlresultcode-mlmediaplayerreset}

Reset the 

```csharp
public MLResult.Code MLMediaPlayerReset(
    ulong mediaPlayerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerResetAsync {#mlresultcode-mlmediaplayerresetasync}

Reset the 

```csharp
public MLResult.Code MLMediaPlayerResetAsync(
    ulong mediaPlayerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSeekTo {#mlresultcode-mlmediaplayerseekto}

Seek to specified time position. Note that SeekTo is an async. function and returns immediately. Successful seek result has to be obtained either via the 'on&#95;seek&#95;complete' if already registered (see MLMediaPlayerSetEventCallbacksEx) or by polling for the flag 'MLMediaPlayerPollingStateFlag&#95;HasSeekCompleted' when calling MLMediaPlayerPollStates(). 

```csharp
public MLResult.Code MLMediaPlayerSeekTo(
    ulong mediaPlayerHandle,
    int Msec,
    SeekMode Mode
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| int |Msec||
| [SeekMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-seekmode) |Mode|Mode indicating where exactly to seek to. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSelectTrack {#mlresultcode-mlmediaplayerselecttrack}

Select a track. 

```csharp
public MLResult.Code MLMediaPlayerSelectTrack(
    ulong mediaPlayerHandle,
    uint trackIndex
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| uint |trackIndex||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetBufferingSettings {#mlresultcode-mlmediaplayersetbufferingsettings}

Set Buffering settings. 

```csharp
public MLResult.Code MLMediaPlayerSetBufferingSettings(
    ulong mediaPlayerHandle,
    NativeBindings.MLMediaPlayerBufferingSettings BufSettings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| [NativeBindings.MLMediaPlayerBufferingSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerBufferingSettings.md) |BufSettings|Indicate the buffering settings. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetDataSourceForFD {#mlresultcode-mlmediaplayersetdatasourceforfd}

Set a file descriptor as the data source. The file descriptor must be seekable. It is the caller's responsibility to close the file descriptor. It is safe to do so as soon as this call returns. 

```csharp
public MLResult.Code MLMediaPlayerSetDataSourceForFD(
    ulong mediaPlayerHandle,
    int Fd
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| int |Fd||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetDataSourceForPath {#mlresultcode-mlmediaplayersetdatasourceforpath}

Set a local file path as the data source. The path should be an absolute path and should reference a world-readable file. 

```csharp
public MLResult.Code MLMediaPlayerSetDataSourceForPath(
    ulong mediaPlayerHandle,
    string Path
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| string |Path||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetDataSourceForURI {#mlresultcode-mlmediaplayersetdatasourceforuri}

Set a URI string as the data source. Supported URI schemes are  file ,  http ,  https , and  rtsp . If looking to provide headers, use MLMediaPlayerSetRemoteDataSourceForURI(). 

```csharp
public MLResult.Code MLMediaPlayerSetDataSourceForURI(
    ulong mediaPlayerHandle,
    string Uri
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| string |Uri||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetEventCallbacksEx {#mlresultcode-mlmediaplayerseteventcallbacksex}

Set callbacks to notify clients about player events. This structure must be initialized by calling MLMediaPlayerEventCallbacksExInit() before use. Client needs to implement the callback functions declared in #MLMediaPlayerEventCallbacksEx, but can set to NULL the ones he does not care about. 

```csharp
public MLResult.Code MLMediaPlayerSetEventCallbacksEx(
    ulong mediaPlayerHandle,
    ref MLMediaPlayerEventCallbacksEx callbacks,
    IntPtr Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ref [MLMediaPlayerEventCallbacksEx](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerEventCallbacksEx.md) |callbacks|Callbacks for notifying client about |
| IntPtr |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetLooping {#mlresultcode-mlmediaplayersetlooping}

Set the looping mode of the player. 

```csharp
public MLResult.Code MLMediaPlayerSetLooping(
    ulong mediaPlayerHandle,
    bool loop
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| bool |loop||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetMediaDataSource {#mlresultcode-mlmediaplayersetmediadatasource}

Set the data source to use. 

```csharp
public MLResult.Code MLMediaPlayerSetMediaDataSource(
    ulong mediaPlayerHandle,
    ulong MediaDataSource
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ulong |MediaDataSource||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetMediaStreamSource {#mlresultcode-mlmediaplayersetmediastreamsource}

Set the data source to use. 

```csharp
public MLResult.Code MLMediaPlayerSetMediaStreamSource(
    ulong mediaPlayerHandle,
    ulong MediaStreamSource
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ulong |MediaStreamSource||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetNextPlayer {#mlresultcode-mlmediaplayersetnextplayer}

Set the 'next' 

```csharp
public MLResult.Code MLMediaPlayerSetNextPlayer(
    ulong mediaPlayerHandle,
    ulong NextMediaPlayer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ulong |NextMediaPlayer||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetOffsetDataSourceForFD {#mlresultcode-mlmediaplayersetoffsetdatasourceforfd}

Set a file descriptor as the data source with offset. The file descriptor must be seekable. It is the caller's responsibility to close the file descriptor. It is safe to do so as soon as this call returns. This API is useful for specifying playable media located in resource files. 

```csharp
public MLResult.Code MLMediaPlayerSetOffsetDataSourceForFD(
    ulong mediaPlayerHandle,
    int Fd,
    long Offset,
    long Length
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| int |Fd||
| long |Offset||
| long |Length||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetOnMediaSubtitleUpdateCallback {#mlresultcode-mlmediaplayersetonmediasubtitleupdatecallback}

Set callback to get notified when a subtitle update is available along with its data. 

```csharp
public MLResult.Code MLMediaPlayerSetOnMediaSubtitleUpdateCallback(
    ulong mediaPlayerHandle,
    OnMediaSubtitleUpdateDelegate OnMediaSubtitleCallback,
    IntPtr Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| OnMediaSubtitleUpdateDelegate |OnMediaSubtitleCallback||
| IntPtr |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetOnMediaTimedTextUpdateCallback {#mlresultcode-mlmediaplayersetonmediatimedtextupdatecallback}

Set callback to get invoked when a Timed Text update is available along with its data. 

```csharp
public MLResult.Code MLMediaPlayerSetOnMediaTimedTextUpdateCallback(
    ulong mediaPlayerHandle,
    OnTimedTextUpdateDelegate OnMediaTimedTextCallback,
    IntPtr Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| [OnTimedTextUpdateDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#delegate-void-ontimedtextupdatedelegate) |OnMediaTimedTextCallback|Delegate for the the OnTimedTextUpdate event. |
| IntPtr |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetRemoteDataSourceForURI {#mlresultcode-mlmediaplayersetremotedatasourceforuri}

Set a URI string as the remote data source. Supported URI schemes are  file ,  http ,  https , and  rtsp . 

```csharp
public MLResult.Code MLMediaPlayerSetRemoteDataSourceForURI(
    ulong mediaPlayerHandle,
    string Uri,
    out IntPtr Headers,
    uint Len
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| string |Uri||
| out IntPtr |Headers||
| uint |Len||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetSurface {#mlresultcode-mlmediaplayersetsurface}

Sets the [Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) surface to be used as the sink for displaying the video portion of the media. 

```csharp
public MLResult.Code MLMediaPlayerSetSurface(
    ulong mediaPlayerHandle,
    ulong surface
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ulong |surface||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetVideoScalingMode {#mlresultcode-mlmediaplayersetvideoscalingmode}

Set video scaling mode. 

```csharp
public MLResult.Code MLMediaPlayerSetVideoScalingMode(
    ulong mediaPlayerHandle,
    VideoScalingMode Mode
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| [VideoScalingMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-videoscalingmode) |Mode|VideoScalingMode. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerSetVolume {#mlresultcode-mlmediaplayersetvolume}

Set the volume on this player. 

```csharp
public MLResult.Code MLMediaPlayerSetVolume(
    ulong mediaPlayerHandle,
    float Volume
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| float |Volume||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerStart {#mlresultcode-mlmediaplayerstart}

Start or resumes playback. If playback had previously been paused, playback will continue from where it was paused. If playback had been stopped, or never started before, playback will start at the beginning. 

```csharp
public MLResult.Code MLMediaPlayerStart(
    ulong mediaPlayerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerStop {#mlresultcode-mlmediaplayerstop}

Stop playback after playback has been stopped or paused. 

```csharp
public MLResult.Code MLMediaPlayerStop(
    ulong mediaPlayerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerUnselectTrack {#mlresultcode-mlmediaplayerunselecttrack}

Unselect a track. 

```csharp
public MLResult.Code MLMediaPlayerUnselectTrack(
    ulong mediaPlayerHandle,
    uint trackIndex
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| uint |trackIndex||






-----------

### void MLUnityQueueMediaPlayerResetAndDestroy {#void-mlunityqueuemediaplayerresetanddestroy}

```csharp
public void MLUnityQueueMediaPlayerResetAndDestroy(
    ulong mediaPlayerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||






-----------

### delegate void OnBufferingUpdateDelegate {#delegate-void-onbufferingupdatedelegate}

Delegate for the OnBufferingUpdate event 

```csharp
public delegate void OnBufferingUpdateDelegate(
    ulong mediaPlayerHandle,
    ref MLMediaPlayerOnBufferingUpdateInfo updateInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ref [MLMediaPlayerOnBufferingUpdateInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerOnBufferingUpdateInfo.md) |updateInfo|MediaPlayer Buffering update callback Info. |






-----------

### delegate void OnCompletionDelegate {#delegate-void-oncompletiondelegate}

Delegate for the OnCompletion event 

```csharp
public delegate void OnCompletionDelegate(
    ulong mediaPlayerHandle,
    ref MLMediaPlayerOnCompletionInfo completionInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ref [MLMediaPlayerOnCompletionInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerOnCompletionInfo.md) |completionInfo|MediaPlayer Playback completion callback Info. |






-----------

### delegate void OnErrorDelegate {#delegate-void-onerrordelegate}

Delegate for the OnError event 

```csharp
public delegate void OnErrorDelegate(
    ulong mediaPlayerHandle,
    ref MLMediaPlayerOnErrorInfo errorInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ref [MLMediaPlayerOnErrorInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerOnErrorInfo.md) |errorInfo|MediaPlayer Error callback Info. |






-----------

### delegate void OnFrameAvailableDelegate {#delegate-void-onframeavailabledelegate}

Delegate for the OnFrameAvailable event 

```csharp
public delegate void OnFrameAvailableDelegate(
    ulong mediaPlayerHandle,
    IntPtr Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| IntPtr |Data||






-----------

### delegate void OnFramePackingDelegate {#delegate-void-onframepackingdelegate}

Delegate for the OnFramePacking event 

```csharp
public delegate void OnFramePackingDelegate(
    ulong mediaPlayerHandle,
    IntPtr framePackingInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| IntPtr |framePackingInfo||






-----------

### delegate void OnInfoDelegate {#delegate-void-oninfodelegate}

Delegate for the OnInfo event 

```csharp
public delegate void OnInfoDelegate(
    ulong mediaPlayerHandle,
    ref MLMediaPlayerOnInfoInfo info
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ref [MLMediaPlayerOnInfoInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerOnInfoInfo.md) |info|MediaPlayer Information callback Info. |






-----------

### void OnMediaSubtitleUpdate {#void-onmediasubtitleupdate}

Callback for the OnMediaSubtitleUpdate event. 

```csharp
public static void OnMediaSubtitleUpdate(
    ulong mediaPlayerHandle,
    MLMediaPlayerSubtitleData subtitleData,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| [MLMediaPlayerSubtitleData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerSubtitleData.md) |subtitleData|MediaPlayer subtitle data. |
| IntPtr |data||






-----------

### delegate void OnMediaSubtitleUpdateDelegate {#delegate-void-onmediasubtitleupdatedelegate}

Delegate for the OnMediaSubtitleUpdate event. 

```csharp
public delegate void OnMediaSubtitleUpdateDelegate(
    ulong mediaPlayerHandle,
    MLMediaPlayerSubtitleData subtitleData,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| [MLMediaPlayerSubtitleData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerSubtitleData.md) |subtitleData|MediaPlayer subtitle data. |
| IntPtr |data||






-----------

### delegate void OnPreparedDelegate {#delegate-void-onprepareddelegate}

Delegate for the OnPrepared event 

```csharp
public delegate void OnPreparedDelegate(
    ulong mediaPlayerHandle,
    ref MLMediaPlayerOnPreparedInfo preparedInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ref [MLMediaPlayerOnPreparedInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerOnPreparedInfo.md) |preparedInfo|MediaPlayer Playback prepared callback Info. |






-----------

### delegate void OnResetCompleteDelegate {#delegate-void-onresetcompletedelegate}

Delegate for the OnResetComplete event 

```csharp
public delegate void OnResetCompleteDelegate(
    ulong mediaPlayerHandle,
    ref MLMediaPlayerOnResetCompleteInfo resetCompleteInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ref [MLMediaPlayerOnResetCompleteInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerOnResetCompleteInfo.md) |resetCompleteInfo|MediaPlayer reset completion callback Info. |






-----------

### delegate void OnSeekCompleteDelegate {#delegate-void-onseekcompletedelegate}

Delegate for the OnSeekComplete event 

```csharp
public delegate void OnSeekCompleteDelegate(
    ulong mediaPlayerHandle,
    ref MLMediaPlayerOnSeekCompleteInfo seekCompleteInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ref [MLMediaPlayerOnSeekCompleteInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerOnSeekCompleteInfo.md) |seekCompleteInfo|MediaPlayer Playback seek completion callback Info. |






-----------

### void OnTimedTextUpdate {#void-ontimedtextupdate}

Callback for the OnTimedTextUpdate event. 

```csharp
public static void OnTimedTextUpdate(
    ulong mediaPlayerHandle,
    ulong timedTextHandle,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ulong |timedTextHandle||
| IntPtr |data||






-----------

### delegate void OnTimedTextUpdateDelegate {#delegate-void-ontimedtextupdatedelegate}

Delegate for the OnTimedTextUpdate event. 

```csharp
public delegate void OnTimedTextUpdateDelegate(
    ulong mediaPlayerHandle,
    ulong timedTextHandle,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ulong |timedTextHandle||
| IntPtr |data||






-----------

### delegate void OnTrackDRMInfoDelegate {#delegate-void-ontrackdrminfodelegate}

Delegate for the OnTrackDRMInfo event 

```csharp
public delegate void OnTrackDRMInfoDelegate(
    ulong mediaPlayerHandle,
    ref MLMediaPlayerOnTrackDRMInfo trackDrmInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ref [MLMediaPlayerOnTrackDRMInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerOnTrackDRMInfo.md) |trackDrmInfo|MediaPlayer [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) DRM Info callback Info. |






-----------

### delegate void OnVideoSizeChangedDelegate {#delegate-void-onvideosizechangeddelegate}

Delegate for the OnVideoSizeChanged event 

```csharp
public delegate void OnVideoSizeChangedDelegate(
    ulong mediaPlayerHandle,
    ref MLMediaPlayerOnVideoSizeChangedInfo videoSizeInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| ref [MLMediaPlayerOnVideoSizeChangedInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerOnVideoSizeChangedInfo.md) |videoSizeInfo|MediaPlayer Video Size Changed callback Info. |






-----------

## Public Enums

### TTMLAnchorType {#enums-ttmlanchortype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unset | 0xFFFFFFFF|   |
| Start | 0|   |
| Middle | 1|   |
| End | 2|   |








-----------

### TTMLLayoutAlignment {#enums-ttmllayoutalignment}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unspecified | 0xFFFFFFFF|   |
| Normal | 0|   |
| Center | 1|   |
| Opposite | 2|   |








-----------

### TTMLLineType {#enums-ttmllinetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unset | 0xFFFFFFFF|   |
| Fraciton | 0|   |
| Number | 1|   |








-----------

### TTMLTextSizeType {#enums-ttmltextsizetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unset | 0xFFFFFFFF|   |
| Fractional | 0|   |
| FractionalIgnorePadding | 1|   |
| Absolute | 2|   |








-----------

### WebVTTAlign {#enums-webvttalign}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Start | 0|   |
| Middle | |   |
| End | |   |
| Left | |   |
| Right | |   |








-----------

### WebVTTDirection {#enums-webvttdirection}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Default | 0|   |
| LeftToRight | |   |
| RightToLeft | |   |








-----------

### WebVTTOrientation {#enums-webvttorientation}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Horizontal | 0|   |
| Vertical | |   |








-----------


