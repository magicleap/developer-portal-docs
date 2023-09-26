---
title: MLInputPreDefinedPattern
summary: a structure containing information about the pre-defined pattern to be played. 

---

# MLInputPreDefinedPattern




A structure containing information about the Pre-Defined pattern to be played.   


Inherits from: <br></br>IInputDeviceCommandInfo




## Public Methods

###  MLInputPreDefinedPattern {#functions-mlinputpredefinedpattern}

```csharp
public MLInputPreDefinedPattern(
    in PreDefined preDefinedPattern
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [PreDefined](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.PreDefined.md) |preDefinedPattern|A structure containing information about the Pre-Defined pattern to be played. |






-----------

## Public Attributes

### Pattern {#readonly-uint-pattern}

Pre-defined pattern to be played. 

```csharp

public readonly uint Pattern;

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


