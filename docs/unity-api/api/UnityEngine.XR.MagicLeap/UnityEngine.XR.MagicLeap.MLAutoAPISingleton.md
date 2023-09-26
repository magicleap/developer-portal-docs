---
title: MLAutoAPISingleton
summary: mlautoapisingleton class contains a template for singleton apis 

---

# MLAutoAPISingleton



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


[MLAutoAPISingleton](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md) class contains a template for singleton APIs   [More...](#detailed-description)  


Inherits from: <br></br>[MLLazySingleton< T >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)



## Detailed Description

```csharp
public template <T > class MLAutoAPISingleton : MLLazySingleton< T > 
```


**Template Parameters**: 

  * `T` The type of the class to create a singleton for. 






-----------



## Public Fields

### IsStarted {#bool-isstarted}

Indicates if the API has started successfully. 

```csharp

public static bool IsStarted { get; set; }

```






-----------

## Protected Methods

### Initialize {#sealed-override-void-initialize}

This is the only way to initialize this class. 

```csharp
protected virtual sealed override void Initialize()
```




**Reimplements**: [Initialize](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md#void-initialize)



-----------

### OnApplicationFocus {#void-onapplicationfocus}

Callback sent to all [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) APIs on application focus event. 

```csharp
protected virtual void OnApplicationFocus(
    bool hasFocus
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |hasFocus|True if the application has focus, else False. |






-----------

### OnApplicationPause {#void-onapplicationpause}

Callback sent to all [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) APIs on application pause. 

```csharp
protected virtual void OnApplicationPause(
    bool pauseStatus
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |pauseStatus|True if the application is paused, else False. |




**Reimplemented by**: [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md#override-void-onapplicationpause), [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCalibration/UnityEngine.XR.MagicLeap.MLEyeCalibration.md#override-void-onapplicationpause), [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/MLHeadsetFit/UnityEngine.XR.MagicLeap.MLHeadsetFit.md#override-void-onapplicationpause), [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/MLCVCamera/UnityEngine.XR.MagicLeap.MLCVCamera.md#override-void-onapplicationpause), [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#override-void-onapplicationpause), [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md#override-void-onapplicationpause), [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#override-void-onapplicationpause)



-----------

### OnDeviceActive {#void-ondeviceactive}

Callback sent to all [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) APIs when device enters active mode. 

```csharp
protected virtual void OnDeviceActive()
```






-----------

### OnDeviceReality {#void-ondevicereality}

Callback sent to all [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) APIs when device enters reality mode. 

```csharp
protected virtual void OnDeviceReality()
```






-----------

### OnDeviceStandby {#void-ondevicestandby}

Callback sent to all [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) APIs when device enters standby mode. 

```csharp
protected virtual void OnDeviceStandby()
```






-----------

### StartAPI {#abstract-startapi}

Do API-specific creation/initialization of ML resources for this API, such as creating trackers, etc. Called automatically the first time  Instance  is accessed. Error checking on the return value is performed in the base class. 

```csharp
protected virtual abstract MLResult.Code StartAPI()
```




**Reimplemented by**: [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLNotifications/UnityEngine.XR.MagicLeap.MLNotifications.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLGazeRecognition/UnityEngine.XR.MagicLeap.MLGazeRecognition.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/UnityEngine.XR.MagicLeap.MLEyeCamera.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLCVCamera/UnityEngine.XR.MagicLeap.MLCVCamera.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCalibration/UnityEngine.XR.MagicLeap.MLEyeCalibration.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLPermissions/UnityEngine.XR.MagicLeap.MLPermissions.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLHeadsetFit/UnityEngine.XR.MagicLeap.MLHeadsetFit.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLOcclusion/UnityEngine.XR.MagicLeap.MLOcclusion.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/UnityEngine.XR.MagicLeap.MLFacialExpression.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md#override-startapi), [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#override-startapi)



-----------

### StopAPI {#abstract-stopapi}

API-specific cleanup. Will be called whenever [MLDevice](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md) is destroyed (at the latest, when the application is shutting down). Error checking on the return value is performed in the base class. 

```csharp
protected virtual abstract MLResult.Code StopAPI()
```




**Reimplemented by**: [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLNotifications/UnityEngine.XR.MagicLeap.MLNotifications.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/UnityEngine.XR.MagicLeap.MLEyeCamera.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLGazeRecognition/UnityEngine.XR.MagicLeap.MLGazeRecognition.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCalibration/UnityEngine.XR.MagicLeap.MLEyeCalibration.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLCVCamera/UnityEngine.XR.MagicLeap.MLCVCamera.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLPermissions/UnityEngine.XR.MagicLeap.MLPermissions.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLOcclusion/UnityEngine.XR.MagicLeap.MLOcclusion.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLHeadsetFit/UnityEngine.XR.MagicLeap.MLHeadsetFit.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/UnityEngine.XR.MagicLeap.MLFacialExpression.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#override-stopapi), [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#override-stopapi)



-----------

### Update {#void-update}

Update function that will run once per Unity frame. 

```csharp
protected virtual void Update()
```




**Reimplemented by**: [Update](/unity-api/api/UnityEngine.XR.MagicLeap/MLPermissions/UnityEngine.XR.MagicLeap.MLPermissions.md#override-void-update), [Update](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md#override-void-update), [Update](/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#override-void-update), [Update](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md#override-void-update), [Update](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md#override-void-update)



-----------

## Protected Attributes

### APILock {#readonly-object-apilock}

Lock used to keep api calls synchronous. 

```csharp

protected readonly object APILock = new object();

```






-----------

### DllNotFoundError {#readonly-string-dllnotfounderror}

```csharp

protected readonly string DllNotFoundError = $"Failed to start {typeof(T).Name} API. This API is only available on device or when running inside the Unity editor with Magic Leap App Simulator enabled.";

```






-----------

### Handle {#ulong-handle}

The native handle ID for this API instance. Will be invalid until the API is started. 

```csharp

protected ulong Handle = Native.MagicLeapNativeBindings.InvalidHandle;

```






-----------

