---
title: Track
summary: track from the prepared source that can be selected by the media player. 

---

# Track




[Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) from the prepared source that can be selected by the media player.   





## Public Fields

### AudioChannelLayout {#mlaudiooutputchannellayouts-audiochannellayout}

```csharp

public MLAudioOutput.ChannelLayouts AudioChannelLayout { get; set; }

```

| Type | Description  | 
|--|--|
| [MLAudioOutput.ChannelLayouts](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-channellayouts) | Definition of some of the known Channel Layouts. These layouts are based on [ChannelMask](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-channelmask)


composite of individual channel masks.  |





-----------

### Index {#uint-index}

```csharp

public uint Index { get; set; }

```






-----------

### Language {#string-language}

```csharp

public string Language { get; set; }

```






-----------

### MediaFormat {#mlmediaformat-mediaformat}

```csharp

public MLMediaFormat MediaFormat { get; set; }

```

| Type | Description  | 
|--|--|
| [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) | APIs for creating and retrieving media format information.  |





-----------

### MimeType {#string-mimetype}

```csharp

public string MimeType { get; set; }

```






-----------

### TrackType {#type-tracktype}

```csharp

public Type TrackType { get; set; }

```

| Type | Description  | 
|--|--|
| [Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md#enums-type) | Media player track types.  |





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


