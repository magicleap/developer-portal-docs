---
title: Muxer
summary: apis for mediamuxer to facilitate muxing of elementary streams. 

---

# Muxer




APIs for MediaMuxer to facilitate muxing of elementary streams.   [More...](#detailed-description)  




## Detailed Description

```csharp
public class Muxer; 
```


**Details**

MediaMuxer description goes here. 





-----------



## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) AddAudioTrack {#mlresult-addaudiotrack}

Add a new audio track. This should be called before [Start](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-start) and after [Configure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-configure).  [GetSupportedMimes](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-getsupportedmimes) can be used to query for all the supported MIME types for a given audio output format. 

```csharp
public MLResult AddAudioTrack(
    string mimeType,
    int sampleRate,
    int channels,
    out int addedTrackIndex
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |mimeType|The audio content's MIME type.|
| int |sampleRate|The audio's sample rate.|
| int |channels|The number of audio channels.|
| out int |addedTrackIndex|Index of the added audio track.|






**Returns**: [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) with Code "Ok" if the operation completed successfully without errors. Check [MLResult.IsOk](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#bool-isok) for status.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) AddVideoTrack {#mlresult-addvideotrack}

Add a new video track. This should be called before [Start](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-start) and after [Configure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-configure).  [GetSupportedMimes](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-getsupportedmimes) can be used to query for all the supported MIME types for a given video output format. 

```csharp
public MLResult AddVideoTrack(
    string mimeType,
    int width,
    int height,
    out int addedTrackIndex
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |mimeType|The video content's MIME type.|
| int |width|The video content's width in pixels.|
| int |height|The video content's height in pixels.|
| out int |addedTrackIndex|Index of the added video track.|






**Returns**: [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) with Code "Ok" if the operation completed successfully without errors. Check [MLResult.IsOk](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#bool-isok) for status.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Configure {#mlresult-configure}

Configure the [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md) for a given output format with output path. 

```csharp
public MLResult Configure(
    OutputFormat format,
    string filePath
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#enums-outputformat) |format|The format of the muxed output media file. Value should be one returned from [GetSupportedOutputFormats](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-getsupportedoutputformats)|
| string |filePath||






**Returns**: [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) with Code "Ok" if the operation completed successfully without errors. Check [MLResult.IsOk](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#bool-isok) for status.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetSupportedMimes {#mlresult-getsupportedmimes}

Get a list of all the supported mime-types for a given Media [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md) Output Format. 

```csharp
public MLResult GetSupportedMimes(
    OutputFormat format,
    out string [] results
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#enums-outputformat) |format|[OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#enums-outputformat) for which to retrieve supported MIME types.|
| out string [] |results|Array that will contain the supported MIME type names.|






**Returns**: [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) with Code "Ok" if the operation completed successfully without errors. Check [MLResult.IsOk](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#bool-isok) for status.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetSupportedOutputFormats {#mlresult-getsupportedoutputformats}

Get a list of all the supported Media [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md) Output Formats. 

```csharp
public MLResult GetSupportedOutputFormats(
    out OutputFormat [] results
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#enums-outputformat) [] |results|Array of [OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#enums-outputformat) that will contain the supported formats.|






**Returns**: [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) with Code "Ok" if the operation completed successfully without errors. Check [MLResult.IsOk](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#bool-isok) for status.



-----------

###  Muxer {#functions-muxer}

```csharp
public Muxer()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetLocation {#mlresult-setlocation}

Set and store the geodata (latitude and longitude) in the output file.    This should be called before [Start](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-start) and after [Configure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-configure).   The geodata is stored in udta box if the output format is [OutputFormat.MPEG4](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#enums-mpeg4),   and is ignored for other output formats.    The geodata is stored according to ISO-6709 standard. 

```csharp
public MLResult SetLocation(
    float latitude,
    float longitude
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |latitude|The latitude in degrees. Its value must be in the range [-90, 90].|
| float |longitude|The longitude in degrees. Its value must be in the range [-180, 180].|






**Returns**: [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) with Code "Ok" if the operation completed successfully without errors. Check [MLResult.IsOk](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#bool-isok) for status.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetOrientationHint {#mlresult-setorientationhint}

Set the orientation hint for output video playback.    This should be called before [Start](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-start) and after [Configure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-configure)    Calling this method will not rotate the video frame when muxer is generating the file, but add a composition matrix containing the rotation angle in the output video if the output format is [OutputFormat.MPEG4](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#enums-mpeg4) so that a video player can choose the proper orientation for playback.    Note that some video players may choose to ignore the composition matrix in a video during playback. By default, the rotation degree is 0. 

```csharp
public MLResult SetOrientationHint(
    int degrees
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |degrees|The rotation angle. Must be 0, 90, 180 or 270.|






**Returns**: [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) with Code "Ok" if the operation completed successfully without errors. Check [MLResult.IsOk](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#bool-isok) for status.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Start {#mlresult-start}

Start muxing. Make sure all the tracks have been added ([AddAudioTrack](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-addaudiotrack) or [AddVideoTrack](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-addvideotrack)) before calling this.   If the [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md) has already been  Stopped , it cannot be re- Started . 

```csharp
public MLResult Start()
```






**Returns**: [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) with Code "Ok" if the operation completed successfully without errors. Check [MLResult.IsOk](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#bool-isok) for status.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Stop {#mlresult-stop}

Stop muxing. Once the muxer  Stops , it can not be re- Started . 

```csharp
public MLResult Stop()
```






**Returns**: [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) with Code "Ok" if the operation completed successfully without errors. Check [MLResult.IsOk](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#bool-isok) for status.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) WriteSampleData {#mlresult-writesampledata}

Writes an encoded sample into the muxer.    The application needs to make sure that the samples are written into the right tracks.   Also, it needs to make sure the samples for each track are written in chronological order   (e.g. in the order they are provided by the encoder.)

```csharp
public MLResult WriteSampleData(
    int trackIndex,
    byte [] data,
    long time,
    CodecBufferFlags flags
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |trackIndex|The track index number to write the sample data into. This should be one of the number returned by [AddAudioTrack](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-addaudiotrack) and [AddVideoTrack](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-addvideotrack)|
| byte [] |data|Buffer of data to write to the muxer|
| long |time|Timestamp in microseconds|
| [CodecBufferFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#enums-codecbufferflags) |flags| MLMediaCodecBufferFlag . Supported values:  KeyFrame ,  EOS , and  MuxerData |






**Returns**: [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) with Code "Ok" if the operation completed successfully without errors. Check [MLResult.IsOk](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#bool-isok) for status.



-----------

## Public Enums

### CodecBufferFlags {#enums-codecbufferflags}

Indicate the type of data when queuing the input buffer of muxer sample data 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| KeyFrame | 1| The (encoded) buffer contains the data for a key frame.   |
| EOS | 4| Signals the end of stream, i.e. no buffers will be available after this.   |
| MuxerData | 16| Buffer contains muxer data - Supported only for Exif data block.   |








-----------

### OutputFormat {#enums-outputformat}

Output formats for MediaMuxer.   Use Muxer.GetSupportedOutputFormats(out OutputFormat[]) to query for all supported output formats for the [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md). 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MPEG4 | 0| MP4 format   |
| WEBM | 1| VP8/VORBIS data in a WEBM container   |
| ThreeGPP | 2| 3gpp format   |
| HEIF | 3| HEIC data in a HEIF container   |
| OGG | 4| Opus audio data in an OGG container   |








-----------


