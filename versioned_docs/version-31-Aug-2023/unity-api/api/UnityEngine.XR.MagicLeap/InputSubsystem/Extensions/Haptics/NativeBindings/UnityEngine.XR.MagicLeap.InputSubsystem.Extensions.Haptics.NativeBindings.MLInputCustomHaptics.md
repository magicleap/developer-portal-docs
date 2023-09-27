---
title: MLInputCustomHaptics
summary: or a pre-defined pattern, this structure will hold info of a pattern to be added to the custom haptics array. 

---

# MLInputCustomHaptics




A structure containing information about the [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) command and/or pre-defined pattern to be played. A custom haptics pattern can be played by combining [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) haptic command and/or a pre-defined pattern, this structure will hold info of a pattern to be added to the custom haptics array.   





## Public Methods

###  MLInputCustomHaptics {#functions-mlinputcustomhaptics}

```csharp
public MLInputCustomHaptics(
    in Buzz buzzHaptics
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) |buzzHaptics|A structure containing information about the [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) command to be played. |






-----------

###  MLInputCustomHaptics {#functions-mlinputcustomhaptics}

```csharp
public MLInputCustomHaptics(
    in PreDefined preDefinedPatternHaptics,
    uint durationMs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [PreDefined](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.PreDefined.md) |preDefinedPatternHaptics|A structure containing information about the Pre-Defined pattern to be played. |
| uint |durationMs||






-----------

## Public Attributes

### Buzz {#readonly-buzz}

Potential buzz pattern to use. 

```csharp

public readonly MLInputBuzzCommand Buzz;

```

| Type | Description  | 
|--|--|
| readonly [MLInputBuzzCommand](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/NativeBindings/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.NativeBindings.MLInputBuzzCommand.md) | A structure containing information about the [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) command to be played.  |





-----------

### DurationMs {#readonly-uint-durationms}

Duration of the pattern in millisecond (ms) This field will set the time for which a pattern is played: -If the inherited duration of a pre-defined pattern is greater, then it will be cut short and the next pattern will start playing. -If the inherited duration of a pre-defined pattern is smaller, then it will not repeat itself and will wait for the #duration to complete before starting to play the next pattern. -Buzz command's duration will supersede the #duration. Above caveat is true in case buzz command' 

```csharp

public readonly uint DurationMs;

```






-----------

### PreDefined {#readonly-predefined}

Potential predefined pattern to use. 

```csharp

public readonly MLInputPreDefinedPattern PreDefined;

```

| Type | Description  | 
|--|--|
| readonly [MLInputPreDefinedPattern](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/NativeBindings/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.NativeBindings.MLInputPreDefinedPattern.md) | A structure containing information about the Pre-Defined pattern to be played.  |





-----------

### Type {#readonly-type}

Type of the pattern to be set. 

```csharp

public readonly Type Type;

```

| Type | Description  | 
|--|--|
| readonly [Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.md#enums-type) | Custom haptics pattern types.  |





-----------


