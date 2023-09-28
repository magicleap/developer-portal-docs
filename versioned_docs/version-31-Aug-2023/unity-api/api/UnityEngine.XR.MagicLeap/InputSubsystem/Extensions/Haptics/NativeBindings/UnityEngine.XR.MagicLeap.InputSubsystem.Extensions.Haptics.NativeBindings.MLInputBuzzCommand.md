---
title: MLInputBuzzCommand
summary: a structure containing information about the buzz command to be played. 

---

# MLInputBuzzCommand




A structure containing information about the [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) command to be played.   


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
| in [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) |buzzCommand|A structure containing information about the [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) command to be played. |






-----------

## Public Attributes

### Amplitude {#readonly-byte-amplitude}

amplitude of the buzz command, as a percentage (0 - 100). 

```csharp

public readonly byte Amplitude;

```






-----------

### DurationMs {#readonly-uint-durationms}

Duration of the buzz command in milliseconds (ms). 

```csharp

public readonly uint DurationMs;

```






-----------

### EndHz {#readonly-ushort-endhz}

End frequency of the buzz command (0 - 1250). 

```csharp

public readonly ushort EndHz;

```






-----------

### StartHz {#readonly-ushort-starthz}

Start frequency of the buzz command (0 - 1250). 

```csharp

public readonly ushort StartHz;

```






-----------

### Version {#readonly-uint-version}

Version of this structure. 

```csharp

public readonly uint Version;

```






-----------

### typeStatic {#fourcc-typestatic}

```csharp

public FourCC typeStatic => commandType;

```






-----------


