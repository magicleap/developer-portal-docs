---
title: MLAudioPlayback

---

# MLAudioPlayback



**NameSpace:** 
[MagicLeap](/versioned_docs/version-14-Jun-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 








## Protected Fields

### Instance {#mlaudioplayback-instance}

```csharp

protected static MLAudioPlayback Instance { get; set; }

```






-----------

## Public Methods

### void CreateAudioBuffer {#void-createaudiobuffer}

Creates the audio buffer with the default cache size. Needs to be called from the main thread. 

```csharp
public static void CreateAudioBuffer()
```






-----------

### void CreateAudioBuffer {#void-createaudiobuffer}

Creates the audio buffer with the specified cache size. Needs to be called from the main thread. 

```csharp
public static void CreateAudioBuffer(
    uint cacheDurationInSeconds
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |cacheDurationInSeconds||






-----------

### void DestroyAudioBuffer {#void-destroyaudiobuffer}

```csharp
public static void DestroyAudioBuffer()
```






-----------

### void SubmitBuffer {#void-submitbuffer}

Submit unity audio buffers to the playback plugin so that it gets submitted to MLAudio apis. 

```csharp
public static void SubmitBuffer(
    float [] data,
    int channels
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float [] |data|Audio buffer|
| int |channels|Number of channels in the buffer|






-----------

