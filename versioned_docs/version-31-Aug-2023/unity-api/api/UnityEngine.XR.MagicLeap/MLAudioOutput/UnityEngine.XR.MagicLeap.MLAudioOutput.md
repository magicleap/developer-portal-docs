---
title: MLAudioOutput
summary: manages audio. 

---

# MLAudioOutput



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Manages Audio.   


Inherits from: <br></br>[MLAutoAPISingleton< MLAudioOutput >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)




## Public Fields

### AudioOutputDevice {#device-audiooutputdevice}

Gets the audio output device. 

```csharp

public static Device AudioOutputDevice { get; set; }

```

| Type | Description  | 
|--|--|
| [Device](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-device) | The currently active output device.  |





-----------

### MasterVolume {#float-mastervolume}

Gets the master volume for the device. 

```csharp

public static float MasterVolume { get; set; }

```






-----------

## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetSoundBypassesMasterVolume {#mlresult-getsoundbypassesmastervolume}

```csharp
public static MLResult GetSoundBypassesMasterVolume(
    out bool isBypassing
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out bool |isBypassing||






-----------

### delegate void MLAudioMediaEventDelegate {#delegate-void-mlaudiomediaeventdelegate}

The delegate for audio output media event. 

```csharp
public delegate void MLAudioMediaEventDelegate(
    MediaEvent mediaEvent
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MediaEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-mediaevent) |device|The new media event.|






-----------

### delegate void OnAudioOutputDeviceChangedDelegate {#delegate-void-onaudiooutputdevicechangeddelegate}

The delegate for audio output device changed event. 

```csharp
public delegate void OnAudioOutputDeviceChangedDelegate(
    Device device
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Device](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-device) |device|The new audio output device.|






-----------

### delegate void OnMasterVolumeChangedDelegate {#delegate-void-onmastervolumechangeddelegate}

The delegate for the master volume changed event. 

```csharp
public delegate void OnMasterVolumeChangedDelegate(
    float volume
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |volume|The new master volume value.|






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetSoundBypassesMasterVolume {#mlresult-setsoundbypassesmastervolume}

```csharp
public static MLResult SetSoundBypassesMasterVolume(
    bool isBypassing
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |isBypassing||






-----------

## Protected Methods

### StopAPI {#override-stopapi}

Called by [MLAutoAPISingleton](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md) on destruction 

```csharp
protected virtual override MLResult.Code StopAPI()
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
|  |isSafeToAccessManagedObjects|Not Implemented|




**Reimplements**: [StopAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

### Update {#override-void-update}

Called every device frame 

```csharp
protected virtual override void Update()
```




**Reimplements**: [Update](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#void-update)



-----------

## Public Events

### OnAudioOutputDeviceChanged {#onaudiooutputdevicechangeddelegate-onaudiooutputdevicechanged}

Raised whenever the audio output device gets changed. 

```csharp
public static OnAudioOutputDeviceChangedDelegate OnAudioOutputDeviceChanged()
```






-----------

### OnMasterVolumeChanged {#onmastervolumechangeddelegate-onmastervolumechanged}

Raised whenever the master volume gets changed. 

```csharp
public static OnMasterVolumeChangedDelegate OnMasterVolumeChanged()
```






-----------

### OnMediaEvent {#mlaudiomediaeventdelegate-onmediaevent}

Raised whenever the media event happens. 

```csharp
public static MLAudioMediaEventDelegate OnMediaEvent()
```






-----------

## Public Enums

### ChannelFormatType {#enums-channelformattype}

Possible channel formats for input and output streams. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Default | |   |
| AmbisonicAmbix | |   |








-----------

### ChannelLayouts {#enums-channellayouts}

Definition of some of the known Channel Layouts. These layouts are based on [ChannelMask](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#enums-channelmask)   composite of individual channel masks. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | ChannelMask.None|   |
| Mono | ChannelMask.FrontLeft| Mask shortcut for Mono audio output.   |
| Stereo | ChannelMask.FrontLeft | ChannelMask.FrontRight| Mask shortcut for Stereo audio output.   |
| StereoFrontCenter | Stereo | ChannelMask.FrontCenter| Mask shortcut for Stereo and Front Center audio output.   |
| Quad | ChannelMask.FrontLeft | ChannelMask.FrontRight |
                   ChannelMask.BackLeft | ChannelMask.BackRight| Mask shortcut for Quad audio output.   |
| QuadFrontCenter | Quad | ChannelMask.FrontCenter| Mask shortcut for Quad and Front Center audio output.   |
| Surround | ChannelMask.FrontLeft | ChannelMask.FrontRight | ChannelMask.FrontCenter
                       | ChannelMask.BackCenter| Mask shortcut for surround audio output.   |
| FivePointOne | ChannelMask.FrontLeft | ChannelMask.FrontRight | ChannelMask.FrontCenter
                           | ChannelMask.BackLeft | ChannelMask.BackRight
                           | ChannelMask.LowFrequencyEffects| Mask shortcut for 5.1 audio output.   |
| FivePointOneBackCenter | FivePointOne | ChannelMask.BackCenter| Mask shortcut for 5.1 and Back Center audio output.   |
| SevenPointOne | FivePointOne | ChannelMask.FrontLeftOfCenter | ChannelMask.FrontRightOfCenter| Mask shortcut for 7.1 audio output.   |
| SevenPointOneSurround | FivePointOne | ChannelMask.SideLeft | ChannelMask.SideRight| Mask shortcut for 7.1 surround audio output.   |








-----------

### ChannelMask {#enums-channelmask}

Audio output channels mask for track type. Bits order matches the C API. These masks are an ORed composite of individual channel masks. For example MLAudioOutput.ChannelLayout.Stereo is composed of MLAudioOutput.ChannelMask.FrontLeft and MLAudioOutput.ChannelMask.FrontRight. Reference: 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0|   |
| FrontLeft | 0x1|   |
| FrontRight | 0x2|   |
| FrontCenter | 0x4|   |
| LowFrequencyEffects | 0x8|   |
| BackLeft | 0x10|   |
| BackRight | 0x20|   |
| FrontLeftOfCenter | 0x40|   |
| FrontRightOfCenter | 0x80|   |
| BackCenter | 0x100|   |
| SideLeft | 0x200|   |
| SideRight | 0x400|   |
| TopCenter | 0x800|   |
| TopFrontLeft | 0x1000|   |
| TopFrontCenter | 0x2000|   |
| TopFrontRight | 0x4000|   |
| TopBackLeft | 0x8000|   |
| TopBackCenter | 0x10000|   |
| TopBackRight | 0x20000|   |




**Details**



* [https://android.googlesource.com/platform/frameworks/base/+/b267554/media/java/android/media/AudioFormat.java](https://android.googlesource.com/platform/frameworks/base/+/b267554/media/java/android/media/AudioFormat.java)
* [https://trac.ffmpeg.org/wiki/AudioChannelManipulation#Listchannelnamesandstandardchannellayouts](https://trac.ffmpeg.org/wiki/AudioChannelManipulation#Listchannelnamesandstandardchannellayouts)





-----------

### Device {#enums-device}

The currently active output device. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Wearable | | Built-in speakers in the wearable.   |
| AnalogJack | | 3.5mm jack on the belt pack.   |








-----------

### MediaEvent {#enums-mediaevent}

Possible media control events initiated by the user. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Play | | Indicates a user command to play   |
| Stop | | Indicates a user command to stop.   |
| Pause | | Indicates a user command to pause.   |
| NextTrack | | Indicates a user command to go to next track.   |
| PrevTrack | | Indicates a user command to go to previous track.   |








-----------

### SampleFormatType {#enums-sampleformattype}

Possible sample formats for input and output streams. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Int | |   |
| Float | |   |








-----------


