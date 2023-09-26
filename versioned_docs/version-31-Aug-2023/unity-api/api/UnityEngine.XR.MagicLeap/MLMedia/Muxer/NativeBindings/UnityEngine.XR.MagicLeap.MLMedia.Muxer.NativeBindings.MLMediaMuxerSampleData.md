---
title: MLMediaMuxerSampleData
summary: data type that encapsulates sample data to be written in to muxer. 

---

# MLMediaMuxerSampleData




Data type that encapsulates sample data to be written in to [Muxer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md).   





## Public Methods

### [MLMediaMuxerSampleData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Muxer.NativeBindings.MLMediaMuxerSampleData.md) Create {#mlmediamuxersampledata-create}

```csharp
public static MLMediaMuxerSampleData Create()
```






-----------

## Public Attributes

### Buffer {#byte-buffer}

Pointer to the sample buffer/data. 

```csharp

public byte [] Buffer;

```






-----------

### Flags {#codecbufferflags-flags}

The flag about the data. 

```csharp

public CodecBufferFlags Flags;

```

| Type | Description  | 
|--|--|
| [CodecBufferFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#enums-codecbufferflags) | Indicate the type of data when queuing the input buffer of muxer sample data  |





-----------

### Size {#uint-size}

Size of the sample buuffer/data. 

```csharp

public uint Size;

```






-----------

### Time {#ulong-time}

The buffer's time stamp in microseconds. 

```csharp

public ulong Time;

```






-----------

### TrackIndex {#uint-trackindex}

The track index number, to which to write the sample data into. This should be a value returned by [AddAudioTrack](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-addaudiotrack) or [AddVideoTrack](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Muxer/UnityEngine.XR.MagicLeap.MLMedia.Muxer.md#mlresult-addvideotrack)

```csharp

public uint TrackIndex;

```






-----------

### Version {#uint-version}

Version of this structure. 

```csharp

public uint Version;

```






-----------


