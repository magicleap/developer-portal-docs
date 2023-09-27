---
title: Haptics

---

# Haptics










## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) StartBuzz {#mlresult-startbuzz}

Starts a buzz pattern. 

```csharp
public static MLResult StartBuzz(
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

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) StartPreDefined {#mlresult-startpredefined}

Starts a predefined pattern. 

```csharp
public static MLResult StartPreDefined(
    PreDefined.Type type
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PreDefined.Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.PreDefined.md#enums-type) |type|Predefined haptics pattern types. |






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Stop {#mlresult-stop}

Stops playing the current haptic pattern. 

```csharp
public static MLResult Stop()
```






-----------

## Public Enums

### Type {#enums-type}

Custom haptics pattern types. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Buzz | 1| Pattern is a buzz command.   |
| PreDefined | | Pattern is a pre-defined pattern.   |








-----------


