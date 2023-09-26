---
title: CustomPattern
summary: or a pre-defined pattern, this object will hold a list of the haptics to be played with their specified durations. 

---

# CustomPattern




A custom haptics pattern can be played by combining [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) haptic command and/or a pre-defined pattern, this object will hold a list of the haptics to be played with their specified durations.   


Inherits from: <br></br>[IHapticsCommand](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.IHapticsCommand.md)




## Public Methods

### void Add {#void-add}

```csharp
public void Add(
    in Buzz buzz
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) |buzz|A structure containing information about the [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) command to be played. |






-----------

### void Add {#void-add}

```csharp
public void Add(
    in PreDefined preDefined,
    uint durationMs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [PreDefined](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.PreDefined.md) |preDefined|A structure containing information about the Pre-Defined pattern to be played. |
| uint |durationMs||






-----------

### bool Remove {#bool-remove}

```csharp
public bool Remove(
    in Buzz buzz
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) |buzz|A structure containing information about the [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) command to be played. |






-----------

### bool Remove {#bool-remove}

```csharp
public bool Remove(
    in PreDefined preDefined,
    uint durationMs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [PreDefined](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.PreDefined.md) |preDefined|A structure containing information about the Pre-Defined pattern to be played. |
| uint |durationMs||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) StartHaptics {#mlresult-starthaptics}

```csharp
public MLResult StartHaptics()
```




**Reimplements**: [StartHaptics](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.IHapticsCommand.md#mlresult-starthaptics)



-----------


