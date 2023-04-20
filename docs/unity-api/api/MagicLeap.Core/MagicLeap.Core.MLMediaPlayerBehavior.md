---
title: MLMediaPlayerBehavior

---

# MLMediaPlayerBehavior



**NameSpace:** 
[Core](/unity-api/api/MagicLeap.Core/MagicLeap.Core.md) 





Inherits from: <br></br>MonoBehaviour




## Public Fields

### MediaPlayer {#mlmediaplayer-mediaplayer}

MediaPlayer reference 

```csharp

public MLMedia.Player MediaPlayer { get; set; }

```

| Type | Description  | 
|--|--|
| [MLMedia.Player](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) | Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file.  |





-----------

### IsSeeking {#bool-isseeking}

```csharp

public bool IsSeeking = false { get; set; }

```






-----------

### IsBuffering {#bool-isbuffering}

```csharp

public bool IsBuffering { get; set; }

```






-----------

### DurationInMiliseconds {#long-durationinmiliseconds}

```csharp

public long DurationInMiliseconds = false { get; set; }

```






-----------

## Public Methods

### void StopMLMediaPlayer {#void-stopmlmediaplayer}

Stops Media Player and destroys it's instance. 

```csharp
public void StopMLMediaPlayer()
```






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

### void Reset {#void-reset}

Resets the video. 

```csharp
public void Reset()
```






-----------

### void PrepareMLMediaPlayer {#void-preparemlmediaplayer}

Prepares the MLMediaPlayer with a source. 

```csharp
public void PrepareMLMediaPlayer()
```






-----------

### void Play {#void-play}

Plays the video. 

```csharp
public void Play()
```






-----------

### void Pause {#void-pause}

Pauses the video. 

```csharp
public void Pause()
```






-----------

## Public Attributes

### source {#string-source}

```csharp

public string source;

```






-----------

### pathSourceType {#pathsourcetype-pathsourcetype}

```csharp

public PathSourceType pathSourceType;

```






-----------

### IsPrepared {#bool-isprepared}

```csharp

public bool IsPrepared => _mediaPlayer is { IsPrepared: true };

```






-----------

### IsPlaying {#bool-isplaying}

```csharp

public bool IsPlaying => _mediaPlayer is { IsPlaying: true };

```






-----------

## Public Events

### OnVideoRendererInitialized {#action-onvideorendererinitialized}

```csharp
public Action< MLNativeSurfaceYcbcrRenderer > OnVideoRendererInitialized()
```






-----------

### OnUpdateTimeline {#action-float-onupdatetimeline}

```csharp
public Action< float > OnUpdateTimeline()
```






-----------

### OnUpdateElapsedTime {#action-long-onupdateelapsedtime}

```csharp
public Action< long > OnUpdateElapsedTime()
```






-----------

### OnTrackSelected {#action-ontrackselected}

```csharp
public Action< MLMedia.Player.Track > OnTrackSelected()
```






-----------

### OnStop {#action-onstop}

```csharp
public Action OnStop()
```






-----------

### OnSeekComplete {#action-onseekcomplete}

```csharp
public Action OnSeekComplete()
```






-----------

### OnReset {#action-onreset}

```csharp
public Action OnReset()
```






-----------

### OnPrepared {#action-onprepared}

```csharp
public Action OnPrepared()
```






-----------

### OnPlay {#action-onplay}

```csharp
public Action OnPlay()
```






-----------

### OnPause {#action-onpause}

```csharp
public Action OnPause()
```






-----------

### OnIsBufferingChanged {#action-bool-onisbufferingchanged}

```csharp
public Action< bool > OnIsBufferingChanged()
```






-----------

### OnInfo {#action-oninfo}

```csharp
public Action< MLMedia.Player.Info > OnInfo()
```






-----------

### OnCompletion {#action-oncompletion}

```csharp
public Action OnCompletion()
```






-----------

### OnCaptionsText {#action-string-oncaptionstext}

```csharp
public Action< string > OnCaptionsText()
```






-----------

### OnBufferingUpdate {#action-float-onbufferingupdate}

```csharp
public Action< float > OnBufferingUpdate()
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

