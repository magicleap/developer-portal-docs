---
title: MLAudioInput
summary: manages audio. 

---

# MLAudioInput



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Manages Audio.   


Inherits from: <br></br>[MLAutoAPISingleton< MLAudioInput >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)




## Public Fields

### MicrophoneMuted {#bool-microphonemuted}

Gets or sets a value indicating whether the microphone is muted. 

```csharp

public static bool MicrophoneMuted { get; set; }

```






-----------

## Public Methods

### int GetChannels {#int-getchannels}

Gets the channels of the capture type. 

```csharp
public static int GetChannels(
    MicCaptureType captureType
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MicCaptureType](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md#enums-miccapturetype) |captureType|The type of mic input to capture. |






-----------

### int GetSampleRate {#int-getsamplerate}

Gets the sample rate preferences of the device based on the capture type. 

```csharp
public static int GetSampleRate(
    MicCaptureType captureType
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MicCaptureType](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md#enums-miccapturetype) |captureType|The type of mic input to capture. |






-----------

### delegate void OnMicrophoneMuteChangedDelegate {#delegate-void-onmicrophonemutechangeddelegate}

The delegate for the microphone mute changed event. 

```csharp
public delegate void OnMicrophoneMuteChangedDelegate(
    bool muted
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |muted|The new mute state of the microphone.|






-----------

## Protected Methods

### StopAPI {#override-stopapi}

Called by [MLAutoAPISingleton](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md) on destruction 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

### Update {#override-void-update}

Called every device frame 

```csharp
protected virtual override void Update()
```




**Reimplements**: [Update](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#void-update)



-----------

## Public Events

### OnMicrophoneMuteChanged {#onmicrophonemutechangeddelegate-onmicrophonemutechanged}

Raised whenever the global microphone mute gets changed. 

```csharp
public static OnMicrophoneMuteChangedDelegate OnMicrophoneMuteChanged()
```






-----------

## Public Enums

### MicCaptureType {#enums-miccapturetype}

The type of mic input to capture. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| VoiceComm | | User voice, suitable for communications. Mono, 16 bit integer, 16k sampling rate.   |
| VoiceCapture | | High fidelity user voice, suitable for recording. Mono, 16 bit integer, 48k sampling rate.   |
| WorldCapture | 4| Mic mix representing the user's surroundings. Stereo, 16 bit integer, 48k sampling rate.   |








-----------

