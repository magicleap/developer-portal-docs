---
title: BufferFormat
summary: buffer format settings for input and output streams. 

---

# BufferFormat




[Buffer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.Buffer.md) format settings for input and output streams.   





## Public Fields

### BitsPerSample {#uint-bitspersample}

Number of bits per sample. 

```csharp

public uint BitsPerSample { get; set; }

```






-----------

### ChannelCount {#uint-channelcount}

Number of channels. 

```csharp

public uint ChannelCount { get; set; }

```






-----------

### ChannelFormat {#channelformattype-channelformat}

Channel format. 

```csharp

public ChannelFormatType ChannelFormat { get; set; }

```

| Type | Description  | 
|--|--|
| [ChannelFormatType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-channelformattype) | Possible channel formats for input and output streams.  |





-----------

### SampleFormat {#sampleformattype-sampleformat}

Integer or float. 

```csharp

public SampleFormatType SampleFormat { get; set; }

```

| Type | Description  | 
|--|--|
| [SampleFormatType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-sampleformattype) | Possible sample formats for input and output streams.  |





-----------

### SamplesPerSecond {#uint-samplespersecond}

Sample rate. 

```csharp

public uint SamplesPerSecond { get; set; }

```






-----------

### ValidBitsPerSample {#uint-validbitspersample}

Number of bits used per sample. 

```csharp

public uint ValidBitsPerSample { get; set; }

```






-----------

## Public Methods

###  BufferFormat {#functions-bufferformat}

```csharp
public BufferFormat(
    uint channelCount,
    uint samplesPerSecond,
    uint bitsPerSample,
    SampleFormatType sampleFormat =SampleFormatType.Float,
    ChannelFormatType channelFormat =ChannelFormatType.Default
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |channelCount||
| uint |samplesPerSecond||
| uint |bitsPerSample||
| [SampleFormatType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-sampleformattype) |sampleFormat|Possible sample formats for input and output streams. |
| [ChannelFormatType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-channelformattype) |channelFormat|Possible channel formats for input and output streams. |






-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------


