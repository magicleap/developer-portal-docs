---
title: NativeBindings
summary: see ml-media-muxer.h for additional comments. 

---

# NativeBindings




See ml&#95;media&#95;muxer.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaMuxerAddTrack {#mlresultcode-mlmediamuxeraddtrack}

Add a track with given format information. 

```csharp
public MLResult.Code MLMediaMuxerAddTrack(
    ulong muxerHandle,
    ulong formatHandle,
    out UIntPtr OutTrackIndex
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |muxerHandle||
| ulong |formatHandle||
| out UIntPtr |OutTrackIndex||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaMuxerConfigure {#mlresultcode-mlmediamuxerconfigure}

Configure the [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md)

```csharp
public MLResult.Code MLMediaMuxerConfigure(
    ulong muxerHandle,
    int Format,
    string Path
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |muxerHandle||
| int |Format||
| string |Path||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaMuxerCreate {#mlresultcode-mlmediamuxercreate}

Create a [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md)

```csharp
public MLResult.Code MLMediaMuxerCreate(
    out ulong muxerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |muxerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaMuxerGetSupportedMimes {#mlresultcode-mlmediamuxergetsupportedmimes}

Get a list of all the supported mime-types for a given Media [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md) Output Format on the Platform. User doesn't own the memory/buffer returned from this API and MUST NOT be freeing or releasing the out&#95;mime&#95;list. 

```csharp
public MLResult.Code MLMediaMuxerGetSupportedMimes(
    ulong muxerHandle,
    OutputFormat Format,
    out IntPtr OutMimeList,
    out int OutMimeListSize
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |muxerHandle||
| [OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#enums-outputformat) |Format|Output formats for MediaMuxer.

 Use Muxer.GetSupportedOutputFormats(out OutputFormat[]) to query for all supported output formats for the [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md). |
| out IntPtr |OutMimeList||
| out int |OutMimeListSize||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaMuxerGetSupportedOutputFormats {#mlresultcode-mlmediamuxergetsupportedoutputformats}

Get a list of all the supported Media [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md) Output Formats on the Platform. User doesn't own the memory/buffer returned from this API and MUST NOT be freeing or releasing the out&#95;format&#95;list. 

```csharp
public MLResult.Code MLMediaMuxerGetSupportedOutputFormats(
    ulong muxerHandle,
    out IntPtr OutFormatList,
    out int OutFormatListSize
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |muxerHandle||
| out IntPtr |OutFormatList||
| out int |OutFormatListSize||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaMuxerRelease {#mlresultcode-mlmediamuxerrelease}

Release the [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md)

```csharp
public MLResult.Code MLMediaMuxerRelease(
    ulong muxerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |muxerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaMuxerSetLocation {#mlresultcode-mlmediamuxersetlocation}

Set and store the geodata (latitude and longitude) in the output file. This should be called before #MLMediaMuxerStart() and after #MLMediaMuxerConfigure. The geodata is stored in udta box if the output format is MLMediaMuxerOutputFormat&#95;MPEG4, and is ignored for other output formats. The geodata is stored according to ISO-6709 standard. 

```csharp
public MLResult.Code MLMediaMuxerSetLocation(
    ulong muxerHandle,
    float Latitude,
    float Longitude
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |muxerHandle||
| float |Latitude||
| float |Longitude||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaMuxerSetOrientationHint {#mlresultcode-mlmediamuxersetorientationhint}

Set the orientation hint for output video playback. This should be called before #MLMediaMuxerStart() and after #MLMediaMuxerConfigure. Calling this method will not rotate the video frame when muxer is generating the file, but add a composition matrix containing the rotation angle in the output video if the output format is MLMediaMuxerOutputFormat&#95;MPEG4 so that a video player can choose the proper orientation for playback. Note that some video players may choose to ignore the composition matrix in a video during playback. By default, the rotation degree is 0. 

```csharp
public MLResult.Code MLMediaMuxerSetOrientationHint(
    ulong muxerHandle,
    int Degrees
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |muxerHandle||
| int |Degrees||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaMuxerStart {#mlresultcode-mlmediamuxerstart}

Start muxing. Make sure all the tracks have been added (#MLMediaMuxerAddTrack) before calling this. 

```csharp
public MLResult.Code MLMediaMuxerStart(
    ulong muxerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |muxerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaMuxerStop {#mlresultcode-mlmediamuxerstop}

Stop muxing. Once the muxer stops, it can not be restarted. 

```csharp
public MLResult.Code MLMediaMuxerStop(
    ulong muxerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |muxerHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaMuxerWriteSampleData {#mlresultcode-mlmediamuxerwritesampledata}

Writes an encoded sample into the muxer. The application needs to make sure that the samples are written into the right tracks. Also, it needs to make sure the samples for each track are written in chronological order (e. g. in the order they are provided by the encoder. ) For MPEG4 media format, the duration of the last sample in a track can be set by passing an additional empty buffer) with #MLMediaCodecBufferFlag&#95;EOS flag and a suitable presentation timestamp set in time&#95;us (of [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Muxer.NativeBindings.MLMediaMuxerSampleData.md) structure) as the last sample of that track. This last sample's presentation timestamp shall be a sum of the presentation timestamp and the duration preferred for the original last sample. If no explicit END&#95;OF&#95;STREAM sample was passed, then the duration of the last sample would be the same as that of the sample before that. The buffer can be reused once this method returns. 

```csharp
public MLResult.Code MLMediaMuxerWriteSampleData(
    ulong muxerHandle,
    in MLMediaMuxerSampleData Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |muxerHandle||
| in [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Muxer.NativeBindings.MLMediaMuxerSampleData.md) |Data|Data type that encapsulates sample data to be written in to [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md). |






-----------


