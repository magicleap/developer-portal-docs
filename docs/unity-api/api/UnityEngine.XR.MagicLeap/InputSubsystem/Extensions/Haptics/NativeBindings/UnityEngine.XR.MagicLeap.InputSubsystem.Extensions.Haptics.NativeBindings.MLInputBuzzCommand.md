---
title: MLInputBuzzCommand
summary: a structure containing information about the buzz command to be played. 

---

# MLInputBuzzCommand




A structure containing information about the [Buzz](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) command to be played.   


Inherits from: <br></br>IInputDeviceCommandInfo




## Public Methods

###  MLInputBuzzCommand {#functions-mlinputbuzzcommand}

```csharp
public MLInputBuzzCommand(
    in Buzz buzzCommand
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [Buzz](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) |buzzCommand|A structure containing information about the [Buzz](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) command to be played. |






-----------

## Public Attributes

### typeStatic {#fourcc-typestatic}

```csharp

public FourCC typeStatic => commandType;

```






-----------

### Version {#readonly-uint-version}

Version of this structure. 

```csharp

public readonly uint Version;

```






-----------

### StartHz {#readonly-ushort-starthz}

Start frequency of the buzz command (0 - 1250). 

```csharp

public readonly ushort StartHz;

```






-----------

### EndHz {#readonly-ushort-endhz}

End frequency of the buzz command (0 - 1250). 

```csharp

public readonly ushort EndHz;

```






-----------

### DurationMs {#readonly-uint-durationms}

Duration of the buzz command in milliseconds (ms). 

```csharp

public readonly uint DurationMs;

```






-----------

### Amplitude {#readonly-byte-amplitude}

amplitude of the buzz command, as a percentage (0 - 100). 

```csharp

public readonly byte Amplitude;

```






-----------

