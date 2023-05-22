---
title: MLEyeCalibration
summary: mleyecalibration summary placeholder. 

---

# MLEyeCalibration



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


[MLEyeCalibration](/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCalibration/UnityEngine.XR.MagicLeap.MLEyeCalibration.md) Summary placeholder.   [More...](#detailed-description)  


Inherits from: <br></br>[MLAutoAPISingleton< MLEyeCalibration >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)



## Detailed Description

```csharp
public class MLEyeCalibration : MLAutoAPISingleton< MLEyeCalibration > 
```


**Details**

[MLEyeCalibration](/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCalibration/UnityEngine.XR.MagicLeap.MLEyeCalibration.md) description goes here. 





-----------



## Public Methods

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetState {#mlresult-getstate}

Gets information about the user's current eye calibration. 

```csharp
public static MLResult GetState(
    out State state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [State](/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCalibration/UnityEngine.XR.MagicLeap.MLEyeCalibration.State.md) |state|A struct representing the eye calibration state. |






-----------

## Protected Methods

### OnApplicationPause {#override-void-onapplicationpause}

Handle Unity application pause and resume 

```csharp
protected virtual override void OnApplicationPause(
    bool pauseStatus
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |pauseStatus|If the application is now paused or not|




**Reimplements**: [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#void-onapplicationpause)



-----------

### StartAPI {#override-startapi}

Start the API. 

```csharp
protected virtual override MLResult.Code StartAPI()
```




**Reimplements**: [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

Stop the API. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

## Public Enums

### Status {#enums-status}

A set of possible eye calibration codes that the eye calibration system can report. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | | No valid calibration was found for eyes.   |
| Coarse | | Calibration is of lower accuracy.   |
| Fine | | Calibration is of higher accuracy.   |








-----------

