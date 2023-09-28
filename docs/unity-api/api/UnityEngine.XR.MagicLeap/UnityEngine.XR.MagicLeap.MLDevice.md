---
title: MLDevice
summary: magicleap device class responsible for updating all trackers when they register and are enabled. 

---

# MLDevice



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) device class responsible for updating all trackers when they register and are enabled.   


Inherits from: <br></br>MonoBehaviour




## Public Fields

### GestureSubsystemComponent {#gesturesubsystemcomponent-gesturesubsystemcomponent}

Gets the active XR[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) gestures subsystem. 

```csharp

public static GestureSubsystemComponent GestureSubsystemComponent { get; set; }

```






-----------

### Instance {#mldevice-instance}

Gets the [MLDevice](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md) singleton instance. 

```csharp

public static MLDevice Instance { get; set; }

```

| Type | Description  | 
|--|--|
| [MLDevice](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md) | [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) device class responsible for updating all trackers when they register and are enabled.  |





-----------

### PlatformLevel {#uint-platformlevel}

Gets the platform API level that the OS supports. 

```csharp

public static uint PlatformLevel { get; set; }

```






-----------

## Public Methods

### bool IsMagicLeapLoaderActive {#bool-ismagicleaploaderactive}

```csharp
public static bool IsMagicLeapLoaderActive()
```






-----------

### bool IsMagicLeapOrOpenXRLoaderActive {#bool-ismagicleaporopenxrloaderactive}

```csharp
public static bool IsMagicLeapOrOpenXRLoaderActive()
```






-----------

### bool IsOpenXRLoaderActive {#bool-isopenxrloaderactive}

```csharp
public static bool IsOpenXRLoaderActive()
```






-----------

### bool IsReady {#bool-isready}

Check if the underlying Unity XR[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) subsystem is initialized. 

```csharp
public static bool IsReady()
```






**Returns**: Value indicating whether the XR[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) subsystem is initialized.



-----------

### delegate void OnDestroyEventDelegate {#delegate-void-ondestroyeventdelegate}

Delegate to handle Update calls. 

```csharp
public delegate void OnDestroyEventDelegate()
```






-----------

### delegate void OnFocusEventDelegate {#delegate-void-onfocuseventdelegate}

Delegate to handle application focus events. 

```csharp
public delegate void OnFocusEventDelegate(
    bool hasFocus
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |hasFocus|Whether app is focus gained or lost.|






-----------

### delegate void OnPauseEventDelegate {#delegate-void-onpauseeventdelegate}

Delegate to handle application pause events. 

```csharp
public delegate void OnPauseEventDelegate(
    bool paused
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |paused|Whether app is paused or resumed.|






-----------

### delegate void OnQuitEventDelegate {#delegate-void-onquiteventdelegate}

Delegate to handle application quit events. 

```csharp
public delegate void OnQuitEventDelegate()
```






-----------

### delegate void OnStartEventDelegate {#delegate-void-onstarteventdelegate}

Delegate to handle Update calls. 

```csharp
public delegate void OnStartEventDelegate()
```






-----------

### delegate void OnUpdateEventDelegate {#delegate-void-onupdateeventdelegate}

Delegate to handle Update calls. 

```csharp
public delegate void OnUpdateEventDelegate()
```






-----------

### void RegisterApplicationFocus {#void-registerapplicationfocus}

Unrgister a [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) API application focus callback to be called OnApplicationFocus of this behavior. 

```csharp
public static void RegisterApplicationFocus(
    OnFocusEventDelegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnFocusEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md#delegate-void-onfocuseventdelegate) |callback|Callback to register.|






-----------

### void RegisterApplicationPause {#void-registerapplicationpause}

Unrgister a [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) API application pause callback to be called OnApplicationPause of this behavior. 

```csharp
public static void RegisterApplicationPause(
    OnPauseEventDelegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnPauseEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md#delegate-void-onpauseeventdelegate) |callback|Callback to register.|






-----------

### void RegisterApplicationQuit {#void-registerapplicationquit}

Register a [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) API application quit callback to be called on OnApplicationQuit of this behavior. 

```csharp
public static void RegisterApplicationQuit(
    OnQuitEventDelegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnQuitEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md#delegate-void-onquiteventdelegate) |callback|Callback to register|






-----------

### void RegisterDestroy {#void-registerdestroy}

Register a [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) API Update callback to be called on Destroy of this behavior. 

```csharp
public static void RegisterDestroy(
    OnDestroyEventDelegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnDestroyEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md#delegate-void-ondestroyeventdelegate) |callback|Callback to register.|






-----------

### void RegisterEndOfFrameUpdate {#void-registerendofframeupdate}

Register a function to be executed per frame at the end of every frame, after all cameras and GUI is rendered but before displaying the frame on screen 

```csharp
public static void RegisterEndOfFrameUpdate(
    Action endOfFrameFunction
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Action |endOfFrameFunction|The function.|






-----------

### void RegisterGestureSubsystem {#void-registergesturesubsystem}

Attempts to register the Unity [GestureSubsystem](/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/UnityEngine.XR.MagicLeap.GestureSubsystem.md). 

```csharp
public static void RegisterGestureSubsystem()
```






-----------

### void RegisterStart {#void-registerstart}

Register a [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) API Update callback to be called on Start of this behavior. 

```csharp
public static void RegisterStart(
    OnStartEventDelegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnStartEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md#delegate-void-onstarteventdelegate) |callback|Callback to register.|






-----------

### void RegisterUpdate {#void-registerupdate}

Register a [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) API Update callback to be called on Update of this behavior. 

```csharp
public static void RegisterUpdate(
    OnUpdateEventDelegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnUpdateEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md#delegate-void-onupdateeventdelegate) |callback|Callback to register.|






-----------

### void UnregisterApplicationFocus {#void-unregisterapplicationfocus}

Unregister a previously registered [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) API application focus callback. 

```csharp
public static void UnregisterApplicationFocus(
    OnFocusEventDelegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnFocusEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md#delegate-void-onfocuseventdelegate) |callback|Callback to unregister.|






-----------

### void UnregisterApplicationPause {#void-unregisterapplicationpause}

Unregister a previously registered [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) API application pause callback. 

```csharp
public static void UnregisterApplicationPause(
    OnPauseEventDelegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnPauseEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md#delegate-void-onpauseeventdelegate) |callback|Callback to unregister.|






-----------

### void UnregisterApplicationQuit {#void-unregisterapplicationquit}

Unregister a previously registered MagicLeapAPI application quit callback. 

```csharp
public static void UnregisterApplicationQuit(
    OnQuitEventDelegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnQuitEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md#delegate-void-onquiteventdelegate) |callback|Callback to unregister|






-----------

### void UnregisterDestroy {#void-unregisterdestroy}

Unregister a [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) API from being called when OnDestroy for this behavior is called. 

```csharp
public static void UnregisterDestroy(
    OnDestroyEventDelegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnDestroyEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md#delegate-void-ondestroyeventdelegate) |callback|Callback to register.|






-----------

### void UnregisterEndOfFrameUpdate {#void-unregisterendofframeupdate}

Unregister a function to no longer be executed at the end of the frame 

```csharp
public static void UnregisterEndOfFrameUpdate(
    Action endOfFrameFunction
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Action |endOfFrameFunction|The function.|






-----------

### void UnregisterGestureSubsystem {#void-unregistergesturesubsystem}

Attempts to unregister the [GestureSubsystem](/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/UnityEngine.XR.MagicLeap.GestureSubsystem.md). 

```csharp
public static void UnregisterGestureSubsystem()
```






-----------

### void UnregisterStart {#void-unregisterstart}

Unregister a previously registered [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) API Update callback. 

```csharp
public static void UnregisterStart(
    OnStartEventDelegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnStartEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md#delegate-void-onstarteventdelegate) |callback|Callback to unregister.|






-----------

### void UnregisterUpdate {#void-unregisterupdate}

Unregister a previously registered [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) API Update callback. 

```csharp
public static void UnregisterUpdate(
    OnUpdateEventDelegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OnUpdateEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md#delegate-void-onupdateeventdelegate) |callback|Callback to unregister.|






-----------

## Protected Methods

### Awake {#void-awake}

Initializes the Magic Leap device state. 

```csharp
protected void Awake()
```






-----------

### OnDestroy {#void-ondestroy}

Cleans up any resources the object has open. 

```csharp
protected void OnDestroy()
```






-----------

### Start {#void-start}

Starts the EndOfFrameUpdate coroutine and dispatches the Start event. 

```csharp
protected void Start()
```






-----------

### Update {#void-update}

Calls OnUpdateActions event and dispatches all queued callbacks. 

```csharp
protected void Update()
```






-----------

## Public Attributes

### DefaultNearClipDistance {#const-float-defaultnearclipdistance}

Hardcoded value with the default near clip plane distance to use. 

```csharp

public const float DefaultNearClipDistance = 0.37f;

```






-----------

### MagicLeapDeviceName {#const-string-magicleapdevicename}

[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) platform Unity name. 

```csharp

public const string MagicLeapDeviceName = "MagicLeap";

```






-----------

### MainThreadId {#int-mainthreadid}

```csharp

public static int MainThreadId => Instance.mainThreadId;

```






-----------

### MinimumNearClipDistance {#const-float-minimumnearclipdistance}

Hardcoded value approximating minimum near clip plane distance allowed by the platform. 

```csharp

public const float MinimumNearClipDistance = 0.37f;

```






-----------

