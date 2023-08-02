---
title: MLAPIBase

---

# MLAPIBase



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 





Inherited by: <br></br>[UnityEngine.XR.MagicLeap.MLCameraBase](/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md), <br></br>[UnityEngine.XR.MagicLeap.MLWebView](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md), <br></br>[UnityEngine.XR.MagicLeap.MLWorldCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md)




## Public Methods

###  MLAPIBase {#functions-mlapibase}

```csharp
public MLAPIBase()
```






-----------

## Protected Methods

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




**Reimplemented by**: [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md#override-void-onapplicationpause), [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md#override-void-onapplicationpause), [OnApplicationPause](/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#override-void-onapplicationpause)



-----------

### Update {#void-update}

Update function that will run once per Unity frame. 

```csharp
protected virtual void Update()
```






-----------

## Protected Attributes

### APILock {#readonly-object-apilock}

Lock used to keep api calls synchronous. 

```csharp

protected readonly object APILock = new object();

```






-----------

### Handle {#ulong-handle}

The native handle ID for this API instance. Will be invalid until the API is started. 

```csharp

protected ulong Handle = Native.MagicLeapNativeBindings.InvalidHandle;

```






-----------

