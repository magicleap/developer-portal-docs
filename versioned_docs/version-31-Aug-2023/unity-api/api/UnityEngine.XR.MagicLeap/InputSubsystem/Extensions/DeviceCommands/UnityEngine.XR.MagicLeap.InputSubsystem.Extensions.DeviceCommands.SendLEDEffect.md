---
title: SendLEDEffect

---

# SendLEDEffect







Inherits from: <br></br>IInputDeviceCommandInfo




## Public Fields

### Type {#fourcc-type}

```csharp

public static FourCC Type { get; set; }

```






-----------

### typeStatic {#fourcc-typestatic}

```csharp

public FourCC typeStatic { get; set; }

```






-----------

## Public Methods

### [SendLEDEffect](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/DeviceCommands/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.DeviceCommands.SendLEDEffect.md) Create {#sendledeffect-create}

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

### baseCommand {#inputdevicecommand-basecommand}

```csharp

public InputDeviceCommand baseCommand;

```






-----------

### color {#uint-color}

```csharp

public uint color;

```






-----------

### duration {#uint-duration}

```csharp

public uint duration;

```






-----------

### effect {#uint-effect}

```csharp

public uint effect;

```






-----------

### pattern {#uint-pattern}

```csharp

public uint pattern;

```






-----------

### speed {#uint-speed}

```csharp

public uint speed;

```






-----------


