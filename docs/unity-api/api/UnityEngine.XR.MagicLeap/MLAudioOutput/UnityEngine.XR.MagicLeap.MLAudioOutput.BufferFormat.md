---
title: BufferFormat
summary: buffer format settings for input and output streams. 

---

# BufferFormat




[Buffer](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.Buffer.md) format settings for input and output streams.   





## Public Fields

### ValidBitsPerSample {#uint-validbitspersample}

Number of bits used per sample. 

```csharp

public uint ValidBitsPerSample { get; set; }

```






-----------

### SamplesPerSecond {#uint-samplespersecond}

Sample rate. 

```csharp

public uint SamplesPerSecond { get; set; }

```






-----------

### SampleFormat {#sampleformattype-sampleformat}

Integer or float. 

```csharp

public SampleFormatType SampleFormat { get; set; }

```

| Type | Description  | 
|--|--|
| [SampleFormatType](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-sampleformattype) | Possible sample formats for input and output streams.  |





-----------

### ChannelFormat {#channelformattype-channelformat}

Channel format. 

```csharp

public ChannelFormatType ChannelFormat { get; set; }

```

| Type | Description  | 
|--|--|
| [ChannelFormatType](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-channelformattype) | Possible channel formats for input and output streams.  |





-----------

### ChannelCount {#uint-channelcount}

Number of channels. 

```csharp

public uint ChannelCount { get; set; }

```






-----------

### BitsPerSample {#uint-bitspersample}

Number of bits per sample. 

```csharp

public uint BitsPerSample { get; set; }

```






-----------

## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

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
| [SampleFormatType](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-sampleformattype) |sampleFormat|Possible sample formats for input and output streams. |
| [ChannelFormatType](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-channelformattype) |channelFormat|Possible channel formats for input and output streams. |






-----------

