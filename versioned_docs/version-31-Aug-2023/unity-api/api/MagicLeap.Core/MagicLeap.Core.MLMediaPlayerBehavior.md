---
title: MLMediaPlayerBehavior

---

# MLMediaPlayerBehavior



**NameSpace:** 
[Core](/versioned_docs/version-31-Aug-2023/unity-api/api/MagicLeap.Core/MagicLeap.Core.md) 





Inherits from: <br></br>MonoBehaviour




## Public Fields

### DurationInMiliseconds {#long-durationinmiliseconds}

```csharp

public long DurationInMiliseconds = false { get; set; }

```






-----------

### IsBuffering {#bool-isbuffering}

```csharp

public bool IsBuffering { get; set; }

```






-----------

### IsSeeking {#bool-isseeking}

```csharp

public bool IsSeeking = false { get; set; }

```






-----------

### MediaPlayer {#mlmediaplayer-mediaplayer}

MediaPlayer reference 

```csharp

public MLMedia.Player MediaPlayer { get; set; }

```

| Type | Description  | 
|--|--|
| [MLMedia.Player](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) | Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file.  |





-----------

## Public Methods

### void Pause {#void-pause}

Pauses the video. 

```csharp
public void Pause()
```






-----------

### void Play {#void-play}

Plays the video. 

```csharp
public void Play()
```






-----------

### void PrepareMLMediaPlayer {#void-preparemlmediaplayer}

Prepares the MLMediaPlayer with a source. 

```csharp
public void PrepareMLMediaPlayer()
```






-----------

### void Reset {#void-reset}

Resets the video. 

```csharp
public void Reset()
```






-----------

### void Seek {#void-seek}

Handler when Timeline Slider has changed value. Moves the play head by a specific percentage of the whole duration. 

```csharp
public void Seek(
    float ms
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |ms|Miliseconds to seek to|






-----------

### void SeekTo {#void-seekto}

Moves the play head to a specific percentage of the whole duration. 

```csharp
public void SeekTo(
    float ms
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |ms||






-----------

### void SelectTrack {#void-selecttrack}

```csharp
public void SelectTrack(
    MLMedia.Player.Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) |track|[Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) from the prepared source that can be selected by the media player. |






-----------

### void StopMLMediaPlayer {#void-stopmlmediaplayer}

Stops Media Player and destroys it's instance. 

```csharp
public void StopMLMediaPlayer()
```






-----------

### void UnselectTrack {#void-unselecttrack}

```csharp
public void UnselectTrack(
    MLMedia.Player.Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) |track|[Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) from the prepared source that can be selected by the media player. |






-----------

## Public Attributes

### IsPlaying {#bool-isplaying}

```csharp

public bool IsPlaying => _mediaPlayer is { IsPlaying: true };

```






-----------

### IsPrepared {#bool-isprepared}

```csharp

public bool IsPrepared => _mediaPlayer is { IsPrepared: true };

```






-----------

### pathSourceType {#pathsourcetype-pathsourcetype}

```csharp

public PathSourceType pathSourceType;

```






-----------

### source {#string-source}

```csharp

public string source;

```






-----------

## Public Events

### OnBufferingUpdate {#action-float-onbufferingupdate}

```csharp
public Action< float > OnBufferingUpdate()
```






-----------

### OnCaptionsText {#action-string-oncaptionstext}

```csharp
public Action< string > OnCaptionsText()
```






-----------

### OnCompletion {#action-oncompletion}

```csharp
public Action OnCompletion()
```






-----------

### OnInfo {#action-oninfo}

```csharp
public Action< MLMedia.Player.Info > OnInfo()
```






-----------

### OnIsBufferingChanged {#action-bool-onisbufferingchanged}

```csharp
public Action< bool > OnIsBufferingChanged()
```






-----------

### OnPause {#action-onpause}

```csharp
public Action OnPause()
```






-----------

### OnPlay {#action-onplay}

```csharp
public Action OnPlay()
```






-----------

### OnPrepared {#action-onprepared}

```csharp
public Action OnPrepared()
```






-----------

### OnReset {#action-onreset}

```csharp
public Action OnReset()
```






-----------

### OnSeekComplete {#action-onseekcomplete}

```csharp
public Action OnSeekComplete()
```






-----------

### OnStop {#action-onstop}

```csharp
public Action OnStop()
```






-----------

### OnTrackFound {#action-ontrackfound}

```csharp
public Action< MLMedia.Player.Track > OnTrackFound()
```






-----------

### OnTrackSelected {#action-ontrackselected}

```csharp
public Action< MLMedia.Player.Track > OnTrackSelected()
```






-----------

### OnUpdateElapsedTime {#action-long-onupdateelapsedtime}

```csharp
public Action< long > OnUpdateElapsedTime()
```






-----------

### OnUpdateTimeline {#action-float-onupdatetimeline}

```csharp
public Action< float > OnUpdateTimeline()
```






-----------

### OnVideoRendererInitialized {#action-onvideorendererinitialized}

```csharp
public Action< MLNativeSurfaceYcbcrRenderer > OnVideoRendererInitialized()
```






-----------

## Public Enums

### PathSourceType {#enums-pathsourcetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Web | |   |
| StreamingAssets | |   |
| LocalPath | |   |








-----------


