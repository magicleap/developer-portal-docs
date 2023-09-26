---
title: MLHeadsetFit
summary: mlheadsetfit summary placeholder. 

---

# MLHeadsetFit



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


[MLHeadsetFit](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLHeadsetFit/UnityEngine.XR.MagicLeap.MLHeadsetFit.md) Summary placeholder.   [More...](#detailed-description)  


Inherits from: <br></br>[MLAutoAPISingleton< MLHeadsetFit >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)



## Detailed Description

```csharp
public class MLHeadsetFit : MLAutoAPISingleton< MLHeadsetFit > 
```


**Details**

[MLHeadsetFit](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLHeadsetFit/UnityEngine.XR.MagicLeap.MLHeadsetFit.md) description goes here. 





-----------



## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetState {#mlresult-getstate}

Gets information about the user's current headset fit. 

```csharp
public static MLResult GetState(
    out State state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [State](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLHeadsetFit/UnityEngine.XR.MagicLeap.MLHeadsetFit.State.md) |state|Headset fit state |






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




**Reimplements**: [OnApplicationPause](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#void-onapplicationpause)



-----------

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

### Status {#enums-status}

Represents the different fit status that the system can report. If status is neither NotWorn nor Unknown, then headset is being worn. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unknown | 0| Headset fit status not available for unknown reason.   |
| NotWorn | | Headset not worn.   |
| GoodFit | | Good fit.   |
| BadFit | | Bad fit.   |








-----------


