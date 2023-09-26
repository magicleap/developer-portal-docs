---
title: MLEyes

---

# MLEyes










## Public Methods

### void StartTracking {#void-starttracking}

Needs to be called in order to track eyes on the [MagicLeap](/versioned_docs/version-02-Aug-2023/unity-api/api/MagicLeap/MagicLeap.md) device. Required to be called only after the user has granted the eye tracking permission. 

```csharp
public static void StartTracking()
```






-----------

### void StopTracking {#void-stoptracking}

```csharp
public static void StopTracking()
```






-----------

### bool TryGetState {#bool-trygetstate}

```csharp
public static bool TryGetState(
    InputDevice eyesDevice,
    out State state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |eyesDevice||
| out [State](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.State.md) |state||






-----------


