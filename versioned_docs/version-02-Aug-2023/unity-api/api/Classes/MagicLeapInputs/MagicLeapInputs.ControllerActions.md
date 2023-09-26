---
title: ControllerActions

---

# ControllerActions










## Public Fields

### Acceleration {#inputaction-acceleration}

```csharp

public InputAction Acceleration { get; set; }

```






-----------

### AngularAcceleration {#inputaction-angularacceleration}

```csharp

public InputAction AngularAcceleration { get; set; }

```






-----------

### AngularVelocity {#inputaction-angularvelocity}

```csharp

public InputAction AngularVelocity { get; set; }

```






-----------

### Bumper {#inputaction-bumper}

```csharp

public InputAction Bumper { get; set; }

```






-----------

### Haptic {#inputaction-haptic}

```csharp

public InputAction Haptic { get; set; }

```






-----------

### IsTracked {#inputaction-istracked}

```csharp

public InputAction IsTracked { get; set; }

```






-----------

### Menu {#inputaction-menu}

```csharp

public InputAction Menu { get; set; }

```






-----------

### Position {#inputaction-position}

```csharp

public InputAction Position { get; set; }

```






-----------

### Rotation {#inputaction-rotation}

```csharp

public InputAction Rotation { get; set; }

```






-----------

### TouchpadClick {#inputaction-touchpadclick}

```csharp

public InputAction TouchpadClick { get; set; }

```






-----------

### TouchpadForce {#inputaction-touchpadforce}

```csharp

public InputAction TouchpadForce { get; set; }

```






-----------

### TouchpadPosition {#inputaction-touchpadposition}

```csharp

public InputAction TouchpadPosition { get; set; }

```






-----------

### TouchpadTouch {#inputaction-touchpadtouch}

```csharp

public InputAction TouchpadTouch { get; set; }

```






-----------

### Trigger {#inputaction-trigger}

```csharp

public InputAction Trigger { get; set; }

```






-----------

### TriggerButton {#inputaction-triggerbutton}

```csharp

public InputAction TriggerButton { get; set; }

```






-----------

### TriggerHold {#inputaction-triggerhold}

```csharp

public InputAction TriggerHold { get; set; }

```






-----------

### Velocity {#inputaction-velocity}

```csharp

public InputAction Velocity { get; set; }

```






-----------

### enabled {#bool-enabled}

```csharp

public bool enabled { get; set; }

```






-----------

## Public Methods

### void AddCallbacks {#void-addcallbacks}

```csharp
public void AddCallbacks(
    IControllerActions instance
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [IControllerActions](/versioned_docs/version-02-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.IControllerActions.md) |instance||






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
| @[MagicLeapInputs](/versioned_docs/version-02-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.md) |wrapper||






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

### void RemoveCallbacks {#void-removecallbacks}

```csharp
public void RemoveCallbacks(
    IControllerActions instance
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [IControllerActions](/versioned_docs/version-02-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.IControllerActions.md) |instance||






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
| [IControllerActions](/versioned_docs/version-02-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.IControllerActions.md) |instance||






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
| [ControllerActions](/versioned_docs/version-02-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.ControllerActions.md) |set||






-----------


