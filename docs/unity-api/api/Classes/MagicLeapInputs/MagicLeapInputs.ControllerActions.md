---
title: ControllerActions

---

# ControllerActions










## Public Methods

### implicit operator InputActionMap {#implicit-operator-inputactionmap}

```csharp
public static implicit operator InputActionMap(
    ControllerActions set
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ControllerActions](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.ControllerActions.md) |set||






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
| [IControllerActions](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.IControllerActions.md) |instance||






-----------

### InputActionMap Get {#inputactionmap-get}

```csharp
public InputActionMap Get()
```






-----------

### void Enable {#void-enable}

```csharp
public void Enable()
```






-----------

### void Disable {#void-disable}

```csharp
public void Disable()
```






-----------

###  ControllerActions {#functions-controlleractions}

```csharp
public ControllerActions(
    @MagicLeapInputs wrapper
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| @[MagicLeapInputs](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.md) |wrapper||






-----------

## Public Attributes

### enabled {#bool-enabled}

```csharp

public bool enabled => Get().enabled;

```






-----------

### Velocity {#inputaction-velocity}

```csharp

public InputAction Velocity => m_Wrapper.m_Controller_Velocity;

```






-----------

### TriggerHold {#inputaction-triggerhold}

```csharp

public InputAction TriggerHold => m_Wrapper.m_Controller_TriggerHold;

```






-----------

### TriggerButton {#inputaction-triggerbutton}

```csharp

public InputAction TriggerButton => m_Wrapper.m_Controller_TriggerButton;

```






-----------

### Trigger {#inputaction-trigger}

```csharp

public InputAction Trigger => m_Wrapper.m_Controller_Trigger;

```






-----------

### TouchpadTouch {#inputaction-touchpadtouch}

```csharp

public InputAction TouchpadTouch => m_Wrapper.m_Controller_TouchpadTouch;

```






-----------

### TouchpadPosition {#inputaction-touchpadposition}

```csharp

public InputAction TouchpadPosition => m_Wrapper.m_Controller_TouchpadPosition;

```






-----------

### TouchpadForce {#inputaction-touchpadforce}

```csharp

public InputAction TouchpadForce => m_Wrapper.m_Controller_TouchpadForce;

```






-----------

### TouchpadClick {#inputaction-touchpadclick}

```csharp

public InputAction TouchpadClick => m_Wrapper.m_Controller_TouchpadClick;

```






-----------

### Rotation {#inputaction-rotation}

```csharp

public InputAction Rotation => m_Wrapper.m_Controller_Rotation;

```






-----------

### Position {#inputaction-position}

```csharp

public InputAction Position => m_Wrapper.m_Controller_Position;

```






-----------

### Menu {#inputaction-menu}

```csharp

public InputAction Menu => m_Wrapper.m_Controller_Menu;

```






-----------

### IsTracked {#inputaction-istracked}

```csharp

public InputAction IsTracked => m_Wrapper.m_Controller_IsTracked;

```






-----------

### Haptic {#inputaction-haptic}

```csharp

public InputAction Haptic => m_Wrapper.m_Controller_Haptic;

```






-----------

### Bumper {#inputaction-bumper}

```csharp

public InputAction Bumper => m_Wrapper.m_Controller_Bumper;

```






-----------

### AngularVelocity {#inputaction-angularvelocity}

```csharp

public InputAction AngularVelocity => m_Wrapper.m_Controller_AngularVelocity;

```






-----------

### AngularAcceleration {#inputaction-angularacceleration}

```csharp

public InputAction AngularAcceleration => m_Wrapper.m_Controller_AngularAcceleration;

```






-----------

### Acceleration {#inputaction-acceleration}

```csharp

public InputAction Acceleration => m_Wrapper.m_Controller_Acceleration;

```






-----------

