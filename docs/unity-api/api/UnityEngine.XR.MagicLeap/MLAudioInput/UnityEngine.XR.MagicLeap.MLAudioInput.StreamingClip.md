---
title: StreamingClip

---

# StreamingClip







Inherits from: <br></br>[Clip](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.Clip.md),<br></br>IDisposable




## Public Fields

### UnityAudioClip {#audioclip-unityaudioclip}

```csharp

public AudioClip UnityAudioClip { get; set; }

```






-----------

## Public Methods

### void ClearBuffer {#void-clearbuffer}

```csharp
public void ClearBuffer()
```






-----------

###  StreamingClip {#functions-streamingclip}

```csharp
public StreamingClip(
    MicCaptureType captureType,
    int lengthSec,
    int frequency
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MicCaptureType](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md#enums-miccapturetype) |captureType|The type of mic input to capture. |
| int |lengthSec||
| int |frequency||






-----------

###  StreamingClip {#functions-streamingclip}

```csharp
public StreamingClip(
    MicCaptureType captureType,
    uint samplesLengthInSeconds,
    uint sampleRate,
    uint channels
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MicCaptureType](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md#enums-miccapturetype) |captureType|The type of mic input to capture. |
| uint |samplesLengthInSeconds||
| uint |sampleRate||
| uint |channels||






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




**Reimplements**: [OnReceiveSamples](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.Clip.md#abstract-void-onreceivesamples)



-----------

