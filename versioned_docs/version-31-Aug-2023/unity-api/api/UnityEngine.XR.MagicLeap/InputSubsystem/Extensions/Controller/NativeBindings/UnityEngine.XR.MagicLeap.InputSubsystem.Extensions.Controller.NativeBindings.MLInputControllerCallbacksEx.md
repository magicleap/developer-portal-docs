---
title: MLInputControllerCallbacksEx
summary: a structure containing callbacks for input controller events. the final parameter to all the callbacks is a void , which will point to whatever payload data the user provides in mlinputsetcontrollercallbacksex. individual callbacks which are not required by the client can be null. this structure must be initialized by calling mlinputcontrollercallbacksexinit before use. 

---

# MLInputControllerCallbacksEx




A structure containing callbacks for input controller events. The final parameter to all the callbacks is a void &#42;, which will point to whatever payload data the user provides in MLInputSetControllerCallbacksEx. Individual callbacks which are not required by the client can be NULL. This structure must be initialized by calling MLInputControllerCallbacksExInit() before use.   





## Public Methods

### [MLInputControllerCallbacksEx](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Controller/NativeBindings/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Controller.NativeBindings.MLInputControllerCallbacksEx.md) Create {#mlinputcontrollercallbacksex-create}

Create and return an initialized version of this struct. 

```csharp
public static MLInputControllerCallbacksEx Create()
```






-----------

## Public Attributes

### OnButtonClick {#onbuttonclickdelegate-onbuttonclick}

This callback will be invoked whenever a controller button is pressed and released within a short duration. 

```csharp

public OnButtonClickDelegate OnButtonClick;

```






-----------

### OnButtonDown {#onbuttondowndelegate-onbuttondown}

This callback will be invoked whenever a controller button is pressed. This callback will be called only for discrete gestures. 

```csharp

public OnButtonDownDelegate OnButtonDown;

```






-----------

### OnButtonUp {#onbuttonupdelegate-onbuttonup}

This callback will be invoked whenever a controller button is released. 

```csharp

public OnButtonUpDelegate OnButtonUp;

```






-----------

### OnConnect {#onconnectdelegate-onconnect}

This callback will be invoked whenever a controller is connected. 

```csharp

public OnConnectDelegate OnConnect;

```






-----------

### OnDisconnect {#ondisconnectdelegate-ondisconnect}

This callback will be invoked whenever a controller is disconnected. 

```csharp

public OnDisconnectDelegate OnDisconnect;

```






-----------

### OnTouchpadGesture {#ontouchpadgesturedelegate-ontouchpadgesture}

This callback will be invoked whenever a touch gesture is detected. This callback will be called for both discrete and continuous gestures. 

```csharp

public OnTouchpadGestureDelegate OnTouchpadGesture;

```






-----------

### OnTouchpadGestureContinue {#ontouchpadgesturecontinuedelegate-ontouchpadgesturecontinue}

This callback will be invoked whenever a continuation of a touch gesture is detected. This callback will be called only for continuous gestures. 

```csharp

public OnTouchpadGestureContinueDelegate OnTouchpadGestureContinue;

```






-----------

### OnTouchpadGestureEnd {#ontouchpadgestureenddelegate-ontouchpadgestureend}

This callback will be invoked whenever a continuous touch gesture ends. This callback will be called only for continuous gestures. 

```csharp

public OnTouchpadGestureEndDelegate OnTouchpadGestureEnd;

```






-----------

### OnTrigger {#ontriggerdelegate-ontrigger}

This callback will be invoked whenever a controller trigger state is changed. 

```csharp

public OnTriggerDelegate OnTrigger;

```






-----------

### Version {#uint-version}

Version of this structure. 

```csharp

public uint Version;

```






-----------


