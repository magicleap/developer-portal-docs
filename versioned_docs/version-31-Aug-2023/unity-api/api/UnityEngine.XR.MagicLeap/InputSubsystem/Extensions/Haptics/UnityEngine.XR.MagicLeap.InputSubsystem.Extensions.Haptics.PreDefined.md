---
title: PreDefined
summary: a structure containing information about the pre-defined pattern to be played. 

---

# PreDefined




A structure containing information about the Pre-Defined pattern to be played.   


Inherits from: <br></br>[IHapticsCommand](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.IHapticsCommand.md)




## Public Methods

### [PreDefined](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.PreDefined.md) Create {#predefined-create}

```csharp
public static PreDefined Create(
    Type patternType
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.PreDefined.md#enums-type) |patternType|Predefined haptics pattern types. |






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) StartHaptics {#mlresult-starthaptics}

```csharp
public MLResult StartHaptics()
```




**Reimplements**: [StartHaptics](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.IHapticsCommand.md#mlresult-starthaptics)



-----------

## Public Attributes

### PatternType {#readonly-patterntype}

Pre-defined pattern to be played. 

```csharp

public readonly Type PatternType;

```

| Type | Description  | 
|--|--|
| readonly [Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.PreDefined.md#enums-type) | Predefined haptics pattern types.  |





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


