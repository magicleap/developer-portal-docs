---
title: MLGazeRecognition
summary: this api can be used to get info about gaze. 

---

# MLGazeRecognition



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


This API can be used to get info about gaze.   [More...](#detailed-description)  


Inherits from: <br></br>[MLAutoAPISingleton< MLGazeRecognition >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)



## Detailed Description

```csharp
public class MLGazeRecognition : MLAutoAPISingleton< MLGazeRecognition > 
```


**Details**

Runs once per Unity Update loop. 





-----------



## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetState {#mlresult-getstate}

Get information about the user's gaze. 

```csharp
public static MLResult GetState(
    out State state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [State](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGazeRecognition/UnityEngine.XR.MagicLeap.MLGazeRecognition.State.md) |state|Information about the gaze.|






**Returns**:  MLResult&#95;InvalidParam  The state parameter was not valid (null).  MLResult&#95;Ok  gaze Recognition static was successfully received.  MLResult&#95;UnspecifiedFailure  Failed to receive gaze Recognition state data. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetStaticData {#mlresult-getstaticdata}

Get static information about Gaze Recognition. 

```csharp
public static MLResult GetStaticData(
    out StaticData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [StaticData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGazeRecognition/UnityEngine.XR.MagicLeap.MLGazeRecognition.StaticData.md) |data|Target to populate the data about Gaze Recognition..|






**Returns**:  MLResult&#95;InvalidParam  The data parameter was not valid (null).  MLResult&#95;Ok gaze Recognition  data was successfully received.  MLResult&#95;UnspecifiedFailure  Failed to receive gaze Recognition static data. 



-----------

## Protected Methods

### StartAPI {#override-startapi}

Start the API. 

```csharp
protected virtual override MLResult.Code StartAPI()
```




**Reimplements**: [StartAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

Stop the API. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

## Public Enums

### Behavior {#enums-behavior}

A set of mutually-exclusive behaviors that the Gaze Recognition system can report. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unknown | | Unknown.   |
| EyesClosed | | Both eyes closed.   |
| Blink | | Blink detected.   |
| Fixation | | User is fixating, eye position is stable.   |
| Pursuit | | User is pursuing, eye velocity is low but nonzero.   |
| Saccade | | User is making a saccade, eye velocity is high.   |
| WinkLeft | | User is winking with the left eye   |
| WinkRight | | User is winking with the right eye   |








-----------

### Error {#enums-error}

A set of possible error codes that the Gaze Recognition system can report. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | | No error, tracking is nominal.   |
| Generic | | Gaze Recognition system failed.   |








-----------


