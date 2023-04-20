---
title: Track
summary: track from the prepared source that can be selected by the media player. 

---

# Track




[Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) from the prepared source that can be selected by the media player.   





## Public Fields

### TrackType {#type-tracktype}

```csharp

public Type TrackType { get; set; }

```

| Type | Description  | 
|--|--|
| [Type](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md#enums-type) | Media player track types.  |





-----------

### MimeType {#string-mimetype}

```csharp

public string MimeType { get; set; }

```






-----------

### MediaFormat {#mlmediaformat-mediaformat}

```csharp

public MLMediaFormat MediaFormat { get; set; }

```

| Type | Description  | 
|--|--|
| [MLMediaFormat](/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) | APIs for creating and retrieving media format information.  |





-----------

### Language {#string-language}

```csharp

public string Language { get; set; }

```






-----------

### Index {#uint-index}

```csharp

public uint Index { get; set; }

```






-----------

### AudioChannelLayout {#mlaudiooutputchannellayouts-audiochannellayout}

```csharp

public MLAudioOutput.ChannelLayouts AudioChannelLayout { get; set; }

```

| Type | Description  | 
|--|--|
| [MLAudioOutput.ChannelLayouts](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-channellayouts) | Definition of some of the known Channel Layouts. These layouts are based on [ChannelMask](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-channelmask)


composite of individual channel masks.  |





-----------

## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Enums

### Type {#enums-type}

Media player track types. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unknown | 0| Unknown.   |
| Video | | Video.   |
| Audio | | Audio.   |
| TimedText | | Timed text.   |
| Subtitle | | Subtitle.   |
| Metadata | | Metadata.   |








-----------

