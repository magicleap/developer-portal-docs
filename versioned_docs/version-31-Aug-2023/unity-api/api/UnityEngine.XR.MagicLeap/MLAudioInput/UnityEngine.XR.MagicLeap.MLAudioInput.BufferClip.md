---
title: BufferClip

---

# BufferClip







Inherits from: <br></br>[Clip](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.Clip.md),<br></br>IDisposable




## Public Fields

### BufferPosition {#int-bufferposition}

```csharp

public int BufferPosition { get; set; }

```






-----------

## Public Methods

###  BufferClip {#functions-bufferclip}

```csharp
public BufferClip(
    MicCaptureType captureType,
    int lengthSec,
    int frequency
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MicCaptureType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md#enums-miccapturetype) |captureType|The type of mic input to capture. |
| int |lengthSec||
| int |frequency||






-----------

###  BufferClip {#functions-bufferclip}

```csharp
public BufferClip(
    MicCaptureType captureType,
    uint samplesLengthInSeconds,
    uint sampleRate,
    uint channels
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MicCaptureType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md#enums-miccapturetype) |captureType|The type of mic input to capture. |
| uint |samplesLengthInSeconds||
| uint |sampleRate||
| uint |channels||






-----------

### AudioClip FlushToClip {#audioclip-flushtoclip}

```csharp
public AudioClip FlushToClip()
```






-----------

### int GetData {#int-getdata}

```csharp
public int GetData(
    float [] samples,
    int readPosition,
    out int nextReadPosition
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float [] |samples||
| int |readPosition||
| out int |nextReadPosition||






-----------

### int GetData {#int-getdata}

```csharp
public int GetData(
    float [] samples,
    int readPosition
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float [] |samples||
| int |readPosition||






-----------

## Protected Methods

### OnReceiveSamples {#override-void-onreceivesamples}

Gets called from a thread when new samples are recorded. 

```csharp
protected virtual override void OnReceiveSamples(
    float [] samples
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float [] |samples||




**Reimplements**: [OnReceiveSamples](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.Clip.md#abstract-void-onreceivesamples)



-----------

## Public Events

### OnReceivedSamples {#action-float-onreceivedsamples}

```csharp
public Action< float[]> OnReceivedSamples()
```






-----------


