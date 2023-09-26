---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### bool CreateAudioOutput {#bool-createaudiooutput}

```csharp
public bool CreateAudioOutput()
```






-----------

### bool CreateOutputBuffer {#bool-createoutputbuffer}

```csharp
public bool CreateOutputBuffer(
    uint bufferSizeInBytes,
    uint channels,
    uint samplesPerSecond,
    uint bitsPerSample,
    uint validBitsPerSample,
    float maxPitch,
    uint cacheDuration
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |bufferSizeInBytes||
| uint |channels||
| uint |samplesPerSecond||
| uint |bitsPerSample||
| uint |validBitsPerSample||
| float |maxPitch||
| uint |cacheDuration||






-----------

### bool DestroyAudioOutput {#bool-destroyaudiooutput}

```csharp
public bool DestroyAudioOutput()
```






-----------

### bool OnUnityAudio {#bool-onunityaudio}

```csharp
public bool OnUnityAudio(
    float [] data,
    uint length
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float [] |data||
| uint |length||






-----------


