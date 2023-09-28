---
title: Player
summary: media player script that allows playback of a streaming video either from file or web url this script will update the main texture parameter of the renderer attached as a sibling with the video frame from playback. audio is also handled through this class and will playback audio from the file. 

---

# Player




Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file.   


Inherits from: <br></br>[IMLMediaPlayer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md)




## Public Fields

### AudioDRM {#trackdrm-audiodrm}

```csharp

public Track.DRM AudioDRM { get; set; }

```

| Type | Description  | 
|--|--|
| [Track.DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) | MediaDRM to obtain the content keys for decrypting protected media streams.  |





-----------

### IsPlaying {#bool-isplaying}

Indicates if the media player is currently playing. 

```csharp

public bool IsPlaying { get; set; }

```






-----------

### IsPrepared {#bool-isprepared}

Indicates if the media player has been prepared. 

```csharp

public bool IsPrepared { get; set; }

```






-----------

### Source {#string-source}

The uri/path that the media player is currently set with. 

```csharp

public string Source { get; set; }

```






-----------

### VideoDRM {#trackdrm-videodrm}

```csharp

public Track.DRM VideoDRM { get; set; }

```

| Type | Description  | 
|--|--|
| [Track.DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) | MediaDRM to obtain the content keys for decrypting protected media streams.  |





-----------

### VideoRenderer {#mlnativesurfaceycbcrrenderer-videorenderer}

Media player video renderer 

```csharp

public MLNativeSurfaceYcbcrRenderer VideoRenderer { get; set; }

```






-----------

## Public Methods

### void CreateVideoRenderer {#void-createvideorenderer}

```csharp
public void CreateVideoRenderer(
    uint width,
    uint height
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |width||
| uint |height||






-----------

### void Destroy {#void-destroy}

```csharp
public void Destroy()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetDurationMS {#mlresult-getdurationms}

```csharp
public MLResult GetDurationMS(
    out int duration
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out int |duration||






-----------

### int GetDurationMilliseconds {#int-getdurationmilliseconds}

Gets the duration of the video in milliseconds 

```csharp
public int GetDurationMilliseconds()
```






**Returns**: Duration of the video, -1 on failure. 

**Reimplements**: [GetDurationMilliseconds](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#int-getdurationmilliseconds)



-----------

### ulong GetFrameDropThresholdMs {#ulong-getframedropthresholdms}

```csharp
public ulong GetFrameDropThresholdMs()
```






-----------

### int GetHeight {#int-getheight}

Get the height of the video in pixels 

```csharp
public int GetHeight()
```






**Returns**: The height of the video, -1 on failure. 

**Reimplements**: [GetHeight](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#int-getheight)



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetPositionMS {#mlresult-getpositionms}

```csharp
public MLResult GetPositionMS(
    out int position
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out int |position||






-----------

### int GetPositionMilliseconds {#int-getpositionmilliseconds}

Gets the current position of the video in milliseconds 

```csharp
public int GetPositionMilliseconds()
```






**Returns**: Position of the playback of the video, -1 on failure. 

**Reimplements**: [GetPositionMilliseconds](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#int-getpositionmilliseconds)



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetSpatialAudioChannelPosition {#mlresult-getspatialaudiochannelposition}

```csharp
public MLResult GetSpatialAudioChannelPosition(
    uint channel,
    out Vector3 position
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |channel||
| out Vector3 |position||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetSpatialAudioEnable {#mlresult-getspatialaudioenable}

```csharp
public MLResult GetSpatialAudioEnable(
    out bool enabled
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out bool |enabled||






-----------

### bool GetState {#bool-getstate}

```csharp
public bool GetState(
    PollingStateFlags stateFlags
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PollingStateFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-pollingstateflags) |stateFlags|Comment Needed! |






-----------

### int GetVideoBitrate {#int-getvideobitrate}

```csharp
public int GetVideoBitrate()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetVideoSize {#mlresult-getvideosize}

```csharp
public MLResult GetVideoSize(
    out int width,
    out int height
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out int |width||
| out int |height||






-----------

### int GetWidth {#int-getwidth}

Get the width of the video in pixels 

```csharp
public int GetWidth()
```






**Returns**: The width of the video, -1 on failure. 

**Reimplements**: [GetWidth](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#int-getwidth)



-----------

### delegate void OnBufferingUpdateDelegate {#delegate-void-onbufferingupdatedelegate}

Delegate for the the OnBufferingUpdate event. 

```csharp
public delegate void OnBufferingUpdateDelegate(
    MLMedia.Player mediaPlayer,
    float percent
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) |percent|The percent of buffering completed for the set source.|
| float |percent||






-----------

### delegate void OnCaptionsTextDelegate {#delegate-void-oncaptionstextdelegate}

Delegate for the any OnCaptionsText event. 

```csharp
public delegate void OnCaptionsTextDelegate(
    MLMedia.Player mediaPlayer,
    string text
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) |mediaPlayer|Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file. |
| string |text||






-----------

### delegate void OnDRMTrackInfoDelegate {#delegate-void-ondrmtrackinfodelegate}

Delegate for the any OnDRMTrackInfo event. 

```csharp
public delegate void OnDRMTrackInfoDelegate(
    MLMedia.Player mediaPlayer,
    MLMedia.Player.Track.DRM.Info trackDRMInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) |mediaPlayer|Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file. |
| [MLMedia.Player.Track.DRM.Info](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Info.md) |trackDRMInfo|MediaPlayer [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md)[Info](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Info.md) for a Media [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md). |






-----------

### delegate void OnErrorDelegate {#delegate-void-onerrordelegate}

Delegate for the any OnError event. 

```csharp
public delegate void OnErrorDelegate(
    MLMedia.Player mediaPlayer,
    MLResult.Code errorCode
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) |mediaPlayer|Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file. |
| [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) |errorCode|Identifier of Magic Leap API results |






-----------

### delegate void OnInfoDelegate {#delegate-void-oninfodelegate}

Delegate for the the OnInfo event. 

```csharp
public delegate void OnInfoDelegate(
    MLMedia.Player mediaPlayer,
    MLMedia.Player.Info info
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) |info|The info event that has occured.|
| [MLMedia.Player.Info](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-info) |info|Indicates various trigger various media player actions.  MLMediaPlayerInfo  from  ml&#95;media&#95;player.h . |






-----------

### delegate void OnMediaPlayerGeneralDelegate {#delegate-void-onmediaplayergeneraldelegate}

Delegate for the any OnMediaPlayerGeneral events (events that only return the mediaPlayer reference) 

```csharp
public delegate void OnMediaPlayerGeneralDelegate(
    MLMedia.Player mediaPlayer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) |mediaPlayer|Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file. |






-----------

### delegate void OnTimedTextUpdateDelegate {#delegate-void-ontimedtextupdatedelegate}

Delegate for the the OnTimedTextUpdate event. 

```csharp
public delegate void OnTimedTextUpdateDelegate(
    MLMedia.Player mediaPlayer,
    ulong timedText
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) |mediaPlayer|Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file. |
| ulong |timedText||






-----------

### delegate void OnTrackFoundDelegate {#delegate-void-ontrackfounddelegate}

Delegate for the any OnTrackFound event. 

```csharp
public delegate void OnTrackFoundDelegate(
    MLMedia.Player mediaPlayer,
    Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) |mediaPlayer|Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file. |
| [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) |track|[Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) from the prepared source that can be selected by the media player. |






-----------

### delegate void OnTrackSelectedDelegate {#delegate-void-ontrackselecteddelegate}

Delegate for the any OnTrackSelected event. 

```csharp
public delegate void OnTrackSelectedDelegate(
    MLMedia.Player mediaPlayer,
    Track selectedTrack
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) |mediaPlayer|Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file. |
| [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) |selectedTrack|[Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) from the prepared source that can be selected by the media player. |






-----------

### delegate void OnVideoSizeChangedDelegate {#delegate-void-onvideosizechangeddelegate}

Delegate for the any OnVideoSizeChanged event. 

```csharp
public delegate void OnVideoSizeChangedDelegate(
    MLMedia.Player mediaPlayer,
    int width,
    int height
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) |mediaPlayer|Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file. |
| int |width||
| int |height||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Pause {#mlresult-pause}

Pauses the video. 

```csharp
public MLResult Pause()
```






**Returns**:  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplements**: [Pause](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#mlresult-pause)



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Play {#mlresult-play}

Plays the video. 

```csharp
public MLResult Play()
```






**Returns**:  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplements**: [Play](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#mlresult-play)



-----------

###  Player {#functions-player}

Constructor for the media player object. 

```csharp
public Player(
    out MLResult result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |result|The native result for creating the media player.|






**Returns**: An initialized media player object.



-----------

### void PollForMetaData {#void-pollformetadata}

```csharp
public void PollForMetaData()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) PollState {#mlresult-pollstate}

```csharp
public MLResult PollState(
    PollingStateFlags stateFlags,
    out PollingStateFlags state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PollingStateFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-pollingstateflags) |stateFlags|Comment Needed! |
| out [PollingStateFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-pollingstateflags) |state|Comment Needed! |






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) PollStates {#mlresult-pollstates}

```csharp
public MLResult PollStates(
    out PollingStateFlags states
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [PollingStateFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-pollingstateflags) |states|Comment Needed! |






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) PreparePlayer {#mlresult-prepareplayer}

```csharp
public MLResult PreparePlayer()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) PreparePlayerAsync {#mlresult-prepareplayerasync}

```csharp
public MLResult PreparePlayerAsync()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Reset {#mlresult-reset}

```csharp
public MLResult Reset()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ResetAsync {#mlresult-resetasync}

```csharp
public MLResult ResetAsync()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Resume {#mlresult-resume}

Resume the video. 

```csharp
public MLResult Resume()
```






**Returns**:  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplements**: [Resume](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#mlresult-resume)



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Seek {#mlresult-seek}

Seeks the specified time in the video. 

```csharp
public MLResult Seek(
    int positionSeconds,
    SeekMode seekMode
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |positionSeconds|Absolute time to seek to.|
| [SeekMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-seekmode) |seekMode|Mode indicating where exactly to seek to. |






**Returns**:  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplements**: [Seek](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#mlresult-seek)



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SelectTrack {#mlresult-selecttrack}

```csharp
public MLResult SelectTrack(
    int index
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |index||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SelectTrack {#mlresult-selecttrack}

```csharp
public MLResult SelectTrack(
    Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) |track|[Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) from the prepared source that can be selected by the media player. |






-----------

### void SetFrameDropThresholdMs {#void-setframedropthresholdms}

```csharp
public void SetFrameDropThresholdMs(
    ulong threshold
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |threshold||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetLooping {#mlresult-setlooping}

Sets the loop flag for the video. 

```csharp
public MLResult SetLooping(
    bool loop
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |loop|Flag to loop|






**Returns**:  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplements**: [SetLooping](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#mlresult-setlooping)



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetSourcePath {#mlresult-setsourcepath}

Sets the source path that the media player will play content from. 

```csharp
public MLResult SetSourcePath(
    string source
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |source|Path of the media that's on the device.|






**Returns**:  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded.  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed due to an invalid input parameter.  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error.  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.MediaGenericNoInit](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-mediagenericnoinit)  if media player was not properly built or initialized.  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if attempting to access web content without appropriate network permissions 

**Reimplements**: [SetSourcePath](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#mlresult-setsourcepath)



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetSourceURI {#mlresult-setsourceuri}

Sets the source path that the media player will play content from. 

```csharp
public MLResult SetSourceURI(
    string source
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |source|URI of the media.|






**Returns**:  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded.  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed due to an invalid input parameter.  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error.  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.MediaGenericNoInit](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-mediagenericnoinit)  if media player was not properly built or initialized.  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if attempting to access web content without appropriate network permissions 

**Reimplements**: [SetSourceURI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#mlresult-setsourceuri)



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetSpatialAudioChannelPosition {#mlresult-setspatialaudiochannelposition}

```csharp
public MLResult SetSpatialAudioChannelPosition(
    uint channel,
    Vector3 position
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |channel||
| Vector3 |position||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetSpatialAudioEnable {#mlresult-setspatialaudioenable}

```csharp
public MLResult SetSpatialAudioEnable(
    bool enable
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |enable||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetStreamingSourcePath {#mlresult-setstreamingsourcepath}

```csharp
public MLResult SetStreamingSourcePath(
    string path
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |path||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetVolume {#mlresult-setvolume}

Sets the volume of the video. 

```csharp
public MLResult SetVolume(
    float vol
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |vol|Volume between 0 and 1.|






**Returns**:  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplements**: [SetVolume](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#mlresult-setvolume)



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Stop {#mlresult-stop}

Stops the video in the editor. 

```csharp
public MLResult Stop()
```






**Returns**:  [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplements**: [Stop](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md#mlresult-stop)



-----------

### void UnlinkDataSource {#void-unlinkdatasource}

```csharp
public void UnlinkDataSource()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) UnselectTrack {#mlresult-unselecttrack}

```csharp
public MLResult UnselectTrack(
    Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) |track|[Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) from the prepared source that can be selected by the media player. |






-----------

## Public Attributes

### TTMLMime {#const-string-ttmlmime}

```csharp

public const string TTMLMime = "application/ttml+xml";

```






-----------

### VTTMime {#const-string-vttmime}

```csharp

public const string VTTMime = "text/vtt";

```






-----------

## Public Events

### OnBufferingUpdate {#onbufferingupdatedelegate-onbufferingupdate}

Event used to listen for when the media player is buffering. 

```csharp
public OnBufferingUpdateDelegate OnBufferingUpdate()
```






-----------

### OnCEA608 {#oncaptionstextdelegate-oncea608}

```csharp
public OnCaptionsTextDelegate OnCEA608()
```






-----------

### OnCEA708 {#oncaptionstextdelegate-oncea708}

```csharp
public OnCaptionsTextDelegate OnCEA708()
```






-----------

### OnCompletion {#onmediaplayergeneraldelegate-oncompletion}

Event used to listen for the media player has completed playing it's source. 

```csharp
public OnMediaPlayerGeneralDelegate OnCompletion()
```






-----------

### OnDRMTrackInfo {#ondrmtrackinfodelegate-ondrmtrackinfo}

```csharp
public OnDRMTrackInfoDelegate OnDRMTrackInfo()
```






-----------

### OnError {#onerrordelegate-onerror}

Event used to listen for when the media player has an error. 

```csharp
public OnErrorDelegate OnError()
```






-----------

### OnFrameAvailable {#onmediaplayergeneraldelegate-onframeavailable}

Event used to listen for when the media player frame is available (used for rendering purposes). 

```csharp
public OnMediaPlayerGeneralDelegate OnFrameAvailable()
```






-----------

### OnFramePacking {#onmediaplayergeneraldelegate-onframepacking}

Event used to listen for when the frames are packed. 

```csharp
public OnMediaPlayerGeneralDelegate OnFramePacking()
```






-----------

### OnInfo {#oninfodelegate-oninfo}

Event used to listen for when information about the media player, see the [MLMedia.Player.Info](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-info) enum for the types of information given. 

```csharp
public OnInfoDelegate OnInfo()
```






-----------

### OnMediaSubtitleUpdate {#onmediaplayergeneraldelegate-onmediasubtitleupdate}

Event used to listen for when subtitles are updated. 

```csharp
public OnMediaPlayerGeneralDelegate OnMediaSubtitleUpdate()
```






-----------

### OnPause {#onmediaplayergeneraldelegate-onpause}

Event used to listen for when [Pause()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#mlresult-pause) has been called. 

```csharp
public OnMediaPlayerGeneralDelegate OnPause()
```






-----------

### OnPlay {#onmediaplayergeneraldelegate-onplay}

Event used to listen for when [Play()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#mlresult-play) has been called. 

```csharp
public OnMediaPlayerGeneralDelegate OnPlay()
```






-----------

### OnPrepared {#onmediaplayergeneraldelegate-onprepared}

Event used to listen for when the media player has finished preparing. 

```csharp
public OnMediaPlayerGeneralDelegate OnPrepared()
```






-----------

### OnResetComplete {#onmediaplayergeneraldelegate-onresetcomplete}

Event used to listen for when the media player resets. 

```csharp
public OnMediaPlayerGeneralDelegate OnResetComplete()
```






-----------

### OnSeekComplete {#onmediaplayergeneraldelegate-onseekcomplete}

Event used to listen for when the media player has finished seeking. 

```csharp
public OnMediaPlayerGeneralDelegate OnSeekComplete()
```






-----------

### OnStop {#onmediaplayergeneraldelegate-onstop}

Event used to listen for when [Stop()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#mlresult-stop) has been called. 

```csharp
public OnMediaPlayerGeneralDelegate OnStop()
```






-----------

### OnTimedText {#oncaptionstextdelegate-ontimedtext}

Event used to listen for when timed text apppears. 

```csharp
public OnCaptionsTextDelegate OnTimedText()
```






-----------

### OnTrackFound {#ontrackfounddelegate-ontrackfound}

```csharp
public OnTrackFoundDelegate OnTrackFound()
```






-----------

### OnTrackSelected {#ontrackselecteddelegate-ontrackselected}

```csharp
public OnTrackSelectedDelegate OnTrackSelected()
```






-----------

### OnVideoSizeChanged {#onvideosizechangeddelegate-onvideosizechanged}

Event used to listen for when the video size changes. 

```csharp
public OnVideoSizeChangedDelegate OnVideoSizeChanged()
```






-----------

## Public Enums

### AudioChannel {#enums-audiochannel}

Enumeration of the available audio channel indices in 5.1 SMPTE order. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FrontLeft | 0| Front left channel index.   |
| FrontRight | 1| Front right channel index.   |
| FrontCenter | 2| Front center channel index.   |
| LowFrequencyEffects | 3| Low frequency effects channel index.   |
| SurroundLeft | 4| Surround left channel index.   |
| SurroundRight | 5| Surround right channel index.   |








-----------

### BufferingMode {#enums-bufferingmode}

Comment Needed! 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | | Do not support buffering.   |
| TimeOnly | | Support only time based buffering.   |
| SizeOnly | | Support only size based buffering.   |
| TimeThenSize | | Support both time and size based buffering, time based calculation precedes size based. Size based calculation will be used only when time information is not available for the stream.   |








-----------

### Cea608CaptionColor {#enums-cea608captioncolor}

CEA608 caption color code.  MLCea608CaptionColor  from  ml&#95;media&#95;cea608&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| White | 0| CEA608 caption color is white.   |
| Green | 1| CEA608 caption color is green.   |
| Blue | 2| CEA608 caption color is blue.   |
| Cyan | 3| CEA608 caption color is cyan.  &gt;  |
| Red | 4| CEA608 caption color is red.   |
| Yellow | 5| CEA608 caption color is yellow.   |
| Magenta | 6| CEA608 caption color is magenta.   |
| Invalid | 7| CEA608 caption color is invalid.   |








-----------

### Cea608CaptionDimension {#enums-cea608captiondimension}

CEA608 caption Dimension constants.  MLCea608CaptionDimension  from  ml&#95;media&#95;cea608&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MaxRows | 15| Max number of rows.   |
| MaxCols | 32| Max number of columns.   |
| MaxRowsPlus2 | 17| Max number of plus 2.   |
| MaxColsPlus2 | 34| Max number of columns plus 2.   |








-----------

### Cea608CaptionStyle {#enums-cea608captionstyle}

CEA608 caption style code.  MLCea608CaptionStyle  from  ml&#95;media&#95;cea608&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Normal | 0x00000000| CEA608 caption style code is normal.   |
| Italics | 0x00000001| CEA608 caption style code is italics.   |
| Underline | 0x00000002| CEA608 caption style code is underline.   |








-----------

### Cea708CaptionColorOpacity {#enums-cea708captioncoloropacity}

CEA708 Caption Color Opacity constants.  MLCea708CaptionColorOpacity  from  ml&#95;media&#95;cea708&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Solid | 0| Solid opacity.   |
| Flash | 1| Flashing opacity.   |
| Translucent | 2| Translucent opacity.   |
| Transparent | 3| Transparent opacity.   |








-----------

### Cea708CaptionEmitCommand {#enums-cea708captionemitcommand}

CEA708 Caption Emit Commands constants.  MLCea708CaptionEmitCommand  from  ml&#95;media&#95;cea708&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Buffer | 1| Buffer command.   |
| Control | 2| Control command.   |
| CWX | 3| SetCurrentWindow tells the caption decoder which window the following commands describe:  

* SetWindowAttributes
* SetPenAttributes
* SetPenColor
* SetPenLocation. If the window specified has not already been created with a DefineWindow command then, SetCurrentWindow and the window property commands can be safely ignored.  |
| CLW | 4| ClearWindows clears all the windows specified in the 8 bit window bitmap.   |
| DSW | 5| DisplayWindows displays all the windows specified in the 8 bit window bitmap.   |
| HDW | 6| HideWindows hides all the windows specified in the 8 bit window bitmap.   |
| TGW | 7| ToggleWindows hides all displayed windows, and displays all hidden windows specified in the 8 bit window bitmap.   |
| DLW | 8| DeleteWindows deletes all the windows specified in the 8 bit window bitmap. If the current window, as specified by the last SetCurrentWindow command, is deleted then the current window becomes undefined and the window attribute commands should have no effect until after the next SetCurrentWindow or DefineWindow command.   |
| DLY | 9| Delay suspends all processing of the current service, except for DelayCancel and Reset scanning.   |
| DLC | 10| DelayCancel terminates any active delay and resumes normal command processing. DelayCancel should be scanned for during a Delay.   |
| RST | 11| Reset deletes all windows, cancels any active delay, and clears the buffer before the Reset command. Reset should be scanned for during a Delay.   |
| SPA | 12| The SetPenAttributes command specifies how certain attributes of subsequent characters are to be rendered in the current window, until the next SetPenAttributes command.   |
| SPC | 13| SetPenColor sets the foreground, background, and edge color for the subsequent characters.   |
| SPL | 14| SetPenLocation sets the location of for the next bit of appended text in the current window. It has two parameters, row and column.   |
| SWA | 15| SetWindowAttributes Sets the window attributes of the current window.   |
| DFX | 16| DefineWindow0-7 creates one of the eight windows used by a caption decoder.   |








-----------

### Cea708CaptionEmitCommandControl {#enums-cea708captionemitcommandcontrol}

CEA708 Caption Emit Command Control constants.  MLCea708CaptionEmitCommandControl  from  ml&#95;media&#95;cea708&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ETX | 0x03| End of text.   |
| BS | 0x08| Back space.   |
| FF | 0x0c| This code is equivalent to CEA708 CLW command   |
| HCR | 0x0e| Carriage return.   |








-----------

### Cea708CaptionPenOffset {#enums-cea708captionpenoffset}

CEA708 Caption Pen Offset constants.  MLCea708CaptionPenOffset  from  ml&#95;media&#95;cea708&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Subscript | 0| Subscript offset.   |
| Normal | 1| Normal offset.   |
| Superscript | 2| Superscript offset.   |








-----------

### Cea708CaptionPenSize {#enums-cea708captionpensize}

CEA708 Caption Pen Size constants.  MLCea708CaptionPenSize  from  ml&#95;media&#95;cea708&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Small | 0| Small pen size.   |
| Standard | 1| Standard pen size.   |
| Large | 2| Large pen size.   |








-----------

### FramePackingFlags {#enums-framepackingflags}

Frame Packing Arrangement flags for stereoscopic videos. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0| No flags.   |
| RightViewFirst | 1| Right view first.   |
| LeftFlipped | 2| Left view flipped.   |
| RightFlipped | 4| Right view flipped.   |
| Anaglyph_RedCyan | 8| Anaglyph red/cyan.   |
| AnaglyphGreenMagenta | 16| Anaglyph green/magenta.   |








-----------

### FramePackingMode {#enums-framepackingmode}

Frame Packing Arrangement for stereoscopic videos. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0| Not a stereoscopic video.   |
| Checkboard | | Checkboard.   |
| ColumnInterleaved | | Column interleaved.   |
| RowInterleaved | | Row interleaved.   |
| SideBySideQuincunx | | Side by side quincunx.   |
| SideBySide | | Side by side.   |
| TopBottom | | Top bottom.   |
| MultiviewFrameByFrame | | Multiview frame by frame.   |
| FrameByFrame | | Frame by frame.   |
| Anaglyph | | Anaglyph.   |








-----------

### Info {#enums-info}

Indicates various trigger various media player actions.  MLMediaPlayerInfo  from  ml&#95;media&#95;player.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unknown | 1| Unknown status   |
| StartedAsNext | 2| The player was started because it was used as the next player.   |
| RenderingStart | 3| The player just pushed the very first video frame for rendering.   |
| Looping | 4| The player just reached EOS and started from beginning loop.   |
| Started | 5| The player acknowledgement that it has started playing.   |
| Paused | 6| The player acknowledgement that it has paused.   |
| Stopped | 7| The player acknowledgement that it has stopped playing.   |
| StartedBySharedPlayer | 8| The player acknowledgement that it has started playing as result of shared player's request.   |
| PausedBySharedPlayer | 9| The player acknowledgement that it has paused playing as result of shared player's request.   |
| SeekBySharedPlayer | 10| The player acknowledgement that it is seeking as result of shared player's request.   |
| StoppedBySharedPlayer | 11| The player acknowledgement that it has stopped playing as result of shared player's request.   |
| SyncStart | 12| The Media player has started sync'ing with other shared players.   |
| SyncComplete | 13| The Media player has completed sync'ing with other shared players.   |
| VideoTrackLagging | 700| The video is too complex for the decoder: it can't decode frames fast enough.   |
| BufferingStart | 701| Media player is temporarily pausing playback.   |
| BufferingEnd | 702| Media player is resuming playback after filling buffers.   |
| NetworkBandwidth | 703| Network bandwidth info.   |
| BehindLiveWindow | 704| The player is Behind Live Window.   |
| PowerStatePause | 705| Media player is paused because device is in sleep or standby state.   |
| PowerStateResume | 706| Media player has resumed playback because device has returned from sleep or standby state.   |
| BufferedDuration | 707| Duration in milliseconds of buffered content.   |
| BadInterleaving | 800| Bad interleaving means that a media has been improperly interleaved.   |
| NotSeekable | 801| The media is not seekable e.g live stream.   |
| MetadataUpdate | 802| New media metadata is available.   |
| PlayAudioError | 804| Audio can not be played.   |
| PlayVideoError | 805| Video can not be played.   |
| TimedTextError | 900| Media timed text error.   |








-----------

### PollingStateFlags {#enums-pollingstateflags}

Comment Needed! 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| IsPlaying | 1 << 0| Playing.   |
| IsLooping | 1 << 1| Looping.   |
| HasBeenPrepared | 1 << 2| Prepared.   |
| HasPlaybackCompleted | 1 << 3| Playback completed.   |
| HasSeekCompleted | 1 << 4| Seek completed.   |
| HasSizeChanged | 1 << 5| Size changed.   |
| HasBufferingUpdated | 1 << 6| Buffering updated.   |
| HasReceivedInfo | 1 << 7| Received info.   |
| HasReceivedError | 1 << 8| Recieved error.   |
| HasTimedTextUpdated | 1 << 9| Timed text updated.   |
| HasSubtitleUpdated | 1 << 10| Subtitle updated.   |
| HasMetadataUpdated | 1 << 11| Metadata updated.   |
| HasDrmInfoUpdated | 1 << 12| DRM info updated.   |
| HasResetCompleted | 1 << 13| Async Reset completed.   |
| All | ~0u| All states.   |








-----------

### SeekMode {#enums-seekmode}

Mode indicating where exactly to seek to. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PreviousSync | 0| Seek to the previous key frame.   |
| NextSync | | Seek to the next key frame.   |
| ClosestSync | | Seek to the closest key frame.   |
| Closest | | Seek to the closest frame, more accurate but slower.   |








-----------

### VideoScalingMode {#enums-videoscalingmode}

VideoScalingMode. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ScaleToFit | 1| Scale to fit.   |
| ScaleToFitWithCropping | 2| Scale to fit with cropping.   |








-----------


