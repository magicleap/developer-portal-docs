---
title: PlayerTests

---

# PlayerTests










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

### MediaPlayer {#mediaplayer-mediaplayer}

```csharp

public Media.Player MediaPlayer { get; set; }

```






-----------

## Public Methods

### void MediaPlayer_Create {#void-mediaplayer-create}

```csharp
public void MediaPlayer_Create()
```






-----------

### void MediaPlayer_Prepare {#void-mediaplayer-prepare}

```csharp
public void MediaPlayer_Prepare()
```






-----------

### void StopMLMediaPlayer {#void-stopmlmediaplayer}

Stops Media Player and destroys it's instance. 

```csharp
public void StopMLMediaPlayer()
```






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


