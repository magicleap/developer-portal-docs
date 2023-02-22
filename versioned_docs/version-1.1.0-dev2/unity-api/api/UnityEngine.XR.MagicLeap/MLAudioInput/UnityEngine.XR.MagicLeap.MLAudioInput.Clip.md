---
title: Clip
summary: streams audio input data into an audioclip. 

---

# Clip




Streams audio input data into an AudioClip.   


Inherits from: <br></br>IDisposable

Inherited by: <br></br>[UnityEngine.XR.MagicLeap.MLAudioInput.BufferClip](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.BufferClip.md), <br></br>[UnityEngine.XR.MagicLeap.MLAudioInput.StreamingClip](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.StreamingClip.md)




## Public Methods

###  Clip {#functions-clip}

```csharp
public Clip(
    MicCaptureType captureType,
    uint samplesLengthInSeconds,
    uint channels
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MicCaptureType](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md#enums-miccapturetype) |captureType|The type of mic input to capture. |
| uint |samplesLengthInSeconds||
| uint |channels||






-----------

### void Dispose {#void-dispose}

Stops streaming data. 

```csharp
public void Dispose()
```






-----------

## Protected Methods

### OnReceiveSamples {#abstract-void-onreceivesamples}

Gets called from a thread when new samples are recorded. 

```csharp
protected virtual abstract void OnReceiveSamples(
    float [] samples
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float [] |samples||




**Reimplemented by**: [OnReceiveSamples](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.StreamingClip.md#override-void-onreceivesamples), [OnReceiveSamples](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.BufferClip.md#override-void-onreceivesamples)



-----------

