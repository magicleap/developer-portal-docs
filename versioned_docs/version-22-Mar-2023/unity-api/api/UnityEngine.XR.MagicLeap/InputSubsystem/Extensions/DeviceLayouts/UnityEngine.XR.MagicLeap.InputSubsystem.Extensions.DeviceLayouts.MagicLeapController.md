---
title: MagicLeapController

---

# MagicLeapController







Inherits from: <br></br>XRController




## Public Fields

### bumper {#axiscontrol-bumper}

```csharp

public AxisControl bumper { get; set; }

```






-----------

### bumperButton {#buttoncontrol-bumperbutton}

```csharp

public ButtonControl bumperButton { get; set; }

```






-----------

### menu {#buttoncontrol-menu}

```csharp

public ButtonControl menu { get; set; }

```






-----------

### touchpadClick {#buttoncontrol-touchpadclick}

```csharp

public ButtonControl touchpadClick { get; set; }

```






-----------

### touchpadPosition {#vector2control-touchpadposition}

```csharp

public Vector2Control touchpadPosition { get; set; }

```






-----------

### touchpadTouch {#buttoncontrol-touchpadtouch}

```csharp

public ButtonControl touchpadTouch { get; set; }

```






-----------

### trigger {#axiscontrol-trigger}

```csharp

public AxisControl trigger { get; set; }

```






-----------

### triggerButton {#buttoncontrol-triggerbutton}

```csharp

public ButtonControl triggerButton { get; set; }

```






-----------

## Public Methods

### bool StartVibe {#bool-startvibe}

```csharp
public bool StartVibe(
    VibePattern pattern,
    VibeIntensity vibeIntensity
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| VibePattern |pattern||
| VibeIntensity |vibeIntensity||






-----------

## Protected Methods

### FinishSetup {#override-void-finishsetup}

```csharp
protected override void FinishSetup()
```






-----------


