---
title: AppDefinedSource
summary: class that represents an app defined source that can be used by the mlwebrtc api. 

---

# AppDefinedSource




Class that represents an app defined source that can be used by the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.   [More...](#detailed-description)  


Inherits from: <br></br>[Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md)

Inherited by: <br></br>[UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedAudioSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedAudioSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedAudioSource.md), <br></br>[UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedVideoSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource.md)



## Detailed Description

```csharp
public class AppDefinedSource : Track 
```


**Details**

Class that represents a source used by the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API. 





-----------



## Public Methods

###  AppDefinedSource {#functions-appdefinedsource}

```csharp
public AppDefinedSource(
    string trackId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |trackId||






-----------

## Protected Methods

### OnSourceDestroy {#abstract-void-onsourcedestroy}

Instance method that is called when the source is destroyed via  [MLWebRTC.MediaStream.Track.DestroyLocal()](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md#mlresult-destroylocal) . 

```csharp
protected virtual abstract void OnSourceDestroy()
```




**Reimplemented by**: [OnSourceDestroy](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.MLCameraVideoSource.md#override-void-onsourcedestroy)



-----------

### OnSourceSetEnabled {#abstract-void-onsourcesetenabled}

Instance method that is called when the source is enabled or disabled via  [MLWebRTC.MediaStream.Track.SetEnabled()](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md#mlresult-setenabled) 

```csharp
protected virtual abstract void OnSourceSetEnabled(
    bool enabled
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |enabled|True if enabled.|




**Reimplemented by**: [OnSourceSetEnabled](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.MLCameraVideoSource.md#override-void-onsourcesetenabled)



-----------

## Protected Attributes

### gcHandle {#gchandle-gchandle}

Gets the GCHandle of this managed object. 

```csharp

protected GCHandle gcHandle;

```






-----------

