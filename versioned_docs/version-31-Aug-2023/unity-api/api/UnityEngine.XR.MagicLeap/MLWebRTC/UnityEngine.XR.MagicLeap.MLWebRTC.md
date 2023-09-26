---
title: MLWebRTC
summary: mlwebrtc class contains the api to interface with the webrtc c api. 

---

# MLWebRTC



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


[MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) class contains the API to interface with the WebRTC C API.   


Inherits from: <br></br>[MLAutoAPISingleton< MLWebRTC >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)




## Protected Methods

### StartAPI {#override-startapi}

Creates a WebRTC instance. 

```csharp
protected virtual override MLResult.Code StartAPI()
```






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was created successfully. 

**Reimplements**: [StartAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

Calls Disconnect(), destroys the WebRTC sinks and WebRTC instance. 

```csharp
protected virtual override MLResult.Code StopAPI()
```






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 

**Reimplements**: [StopAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

### Update {#override-void-update}

Update loop used to process any connection events. 

```csharp
protected virtual override void Update()
```




**Reimplements**: [Update](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#void-update)



-----------

## Public Enums

### AndroidLogPriority {#enums-androidlogpriority}

Copy of android&#95;LogPriority from android/log.h. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unkown | 0|   |
| Default | |   |
| Verbose | |   |
| Debug | |   |
| Info | |   |
| Warn | |   |
| Error | |   |
| Fatal | |   |
| Silent | |   |








-----------

### ProxyType {#enums-proxytype}

Protocol for the forward proxy. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Https | |   |
| Socks5 | |   |








-----------


