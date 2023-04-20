---
title: SendLEDEffect

---

# SendLEDEffect







Inherits from: <br></br>IInputDeviceCommandInfo




## Public Fields

### typeStatic {#fourcc-typestatic}

```csharp

public FourCC typeStatic { get; set; }

```






-----------

### Type {#fourcc-type}

```csharp

public static FourCC Type { get; set; }

```






-----------

## Public Methods

### [SendLEDEffect](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/DeviceCommands/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.DeviceCommands.SendLEDEffect.md) Create {#sendledeffect-create}

```csharp
public static SendLEDEffect Create(
    LEDEffect ledEffect,
    LEDSpeed ledSpeed,
    LEDPattern ledPattern,
    LEDColor ledColor,
    uint durationMs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| LEDEffect |ledEffect||
| LEDSpeed |ledSpeed||
| LEDPattern |ledPattern||
| LEDColor |ledColor||
| uint |durationMs||






-----------

## Public Attributes

### speed {#uint-speed}

```csharp

public uint speed;

```






-----------

### pattern {#uint-pattern}

```csharp

public uint pattern;

```






-----------

### effect {#uint-effect}

```csharp

public uint effect;

```






-----------

### duration {#uint-duration}

```csharp

public uint duration;

```






-----------

### color {#uint-color}

```csharp

public uint color;

```






-----------

### baseCommand {#inputdevicecommand-basecommand}

```csharp

public InputDeviceCommand baseCommand;

```






-----------

