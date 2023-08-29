---
title: Buzz
summary: a structure containing information about the buzz command to be played. 

---

# Buzz




A structure containing information about the [Buzz](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) command to be played.   


Inherits from: <br></br>[IHapticsCommand](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.IHapticsCommand.md)




## Public Methods

### [Buzz](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) Create {#buzz-create}

```csharp
public static Buzz Create(
    ushort startHz,
    ushort endHz,
    ushort durationMs,
    byte amplitude
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ushort |startHz||
| ushort |endHz||
| ushort |durationMs||
| byte |amplitude||






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) StartHaptics {#mlresult-starthaptics}

```csharp
public MLResult StartHaptics()
```




**Reimplements**: [StartHaptics](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.IHapticsCommand.md#mlresult-starthaptics)



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

