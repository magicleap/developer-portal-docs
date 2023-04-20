---
title: PreDefined
summary: a structure containing information about the pre-defined pattern to be played. 

---

# PreDefined




A structure containing information about the Pre-Defined pattern to be played.   


Inherits from: <br></br>[IHapticsCommand](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.IHapticsCommand.md)




## Public Methods

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) StartHaptics {#mlresult-starthaptics}

```csharp
public MLResult StartHaptics()
```




**Reimplements**: [StartHaptics](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.IHapticsCommand.md#mlresult-starthaptics)



-----------

### [PreDefined](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.PreDefined.md) Create {#predefined-create}

```csharp
public static PreDefined Create(
    Type patternType
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Type](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.PreDefined.md#enums-type) |patternType|Predefined haptics pattern types. |






-----------

## Public Attributes

### PatternType {#readonly-patterntype}

Pre-defined pattern to be played. 

```csharp

public readonly Type PatternType;

```

| Type | Description  | 
|--|--|
| readonly [Type](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.PreDefined.md#enums-type) | Predefined haptics pattern types.  |





-----------

## Public Enums

### Type {#enums-type}

Predefined haptics pattern types. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| A | | Pre-Defined pattern used for VKB hover.   |
| B | | Pre-Defined pattern used for VKB select.   |
| C | | Pre-Defined pattern used for homemenu hover.   |








-----------

