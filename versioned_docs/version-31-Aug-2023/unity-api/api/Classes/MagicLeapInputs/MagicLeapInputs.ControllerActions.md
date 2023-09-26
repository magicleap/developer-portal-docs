---
title: ControllerActions

---

# ControllerActions










## Public Methods

###  ControllerActions {#functions-controlleractions}

```csharp
public ControllerActions(
    @MagicLeapInputs wrapper
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| @[MagicLeapInputs](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.md) |wrapper||






-----------

### void Disable {#void-disable}

```csharp
public void Disable()
```






-----------

### void Enable {#void-enable}

```csharp
public void Enable()
```






-----------

### InputActionMap Get {#inputactionmap-get}

```csharp
public InputActionMap Get()
```






-----------

### void SetCallbacks {#void-setcallbacks}

```csharp
public void SetCallbacks(
    IControllerActions instance
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [IControllerActions](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.IControllerActions.md) |instance||






-----------

### implicit operator InputActionMap {#implicit-operator-inputactionmap}

```csharp
public static implicit operator InputActionMap(
    ControllerActions set
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ControllerActions](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.ControllerActions.md) |set||






-----------

## Public Attributes

### Acceleration {#inputaction-acceleration}

```csharp

public InputAction Acceleration => m_Wrapper.m_Controller_Acceleration;

```






-----------

### AngularAcceleration {#inputaction-angularacceleration}

```csharp

public InputAction AngularAcceleration => m_Wrapper.m_Controller_AngularAcceleration;

```






-----------

### AngularVelocity {#inputaction-angularvelocity}

```csharp

public InputAction AngularVelocity => m_Wrapper.m_Controller_AngularVelocity;

```






-----------

### Bumper {#inputaction-bumper}

```csharp

public InputAction Bumper => m_Wrapper.m_Controller_Bumper;

```






-----------

### Haptic {#inputaction-haptic}

```csharp

public InputAction Haptic => m_Wrapper.m_Controller_Haptic;

```






-----------

### IsTracked {#inputaction-istracked}

```csharp

public InputAction IsTracked => m_Wrapper.m_Controller_IsTracked;

```






-----------

### Menu {#inputaction-menu}

```csharp

public InputAction Menu => m_Wrapper.m_Controller_Menu;

```






-----------

### PointerPosition {#inputaction-pointerposition}

```csharp

public InputAction PointerPosition => m_Wrapper.m_Controller_PointerPosition;

```






-----------

### PointerRotation {#inputaction-pointerrotation}

```csharp

public InputAction PointerRotation => m_Wrapper.m_Controller_PointerRotation;

```






-----------

### Position {#inputaction-position}

```csharp

public InputAction Position => m_Wrapper.m_Controller_Position;

```






-----------

### Rotation {#inputaction-rotation}

```csharp

public InputAction Rotation => m_Wrapper.m_Controller_Rotation;

```






-----------

### TouchpadClick {#inputaction-touchpadclick}

```csharp

public InputAction TouchpadClick => m_Wrapper.m_Controller_TouchpadClick;

```






-----------

### TouchpadForce {#inputaction-touchpadforce}

```csharp

public InputAction TouchpadForce => m_Wrapper.m_Controller_TouchpadForce;

```






-----------

### TouchpadPosition {#inputaction-touchpadposition}

```csharp

public InputAction TouchpadPosition => m_Wrapper.m_Controller_TouchpadPosition;

```






-----------

### TouchpadTouch {#inputaction-touchpadtouch}

```csharp

public InputAction TouchpadTouch => m_Wrapper.m_Controller_TouchpadTouch;

```






-----------

### TrackingState {#inputaction-trackingstate}

```csharp

public InputAction TrackingState => m_Wrapper.m_Controller_TrackingState;

```






-----------

### Trigger {#inputaction-trigger}

```csharp

public InputAction Trigger => m_Wrapper.m_Controller_Trigger;

```






-----------

### TriggerButton {#inputaction-triggerbutton}

```csharp

public InputAction TriggerButton => m_Wrapper.m_Controller_TriggerButton;

```






-----------

### TriggerHold {#inputaction-triggerhold}

```csharp

public InputAction TriggerHold => m_Wrapper.m_Controller_TriggerHold;

```






-----------

### Velocity {#inputaction-velocity}

```csharp

public InputAction Velocity => m_Wrapper.m_Controller_Velocity;

```






-----------

### enabled {#bool-enabled}

```csharp

public bool enabled => Get().enabled;

```






-----------


