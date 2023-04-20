---
title: MLEyes

---

# MLEyes










## Public Methods

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
| out [State](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.State.md) |state||






-----------

### void StopTracking {#void-stoptracking}

```csharp
public static void StopTracking()
```






-----------

### void StartTracking {#void-starttracking}

Needs to be called in order to track eyes on the [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) device. Required to be called only after the user has granted the eye tracking permission. 

```csharp
public static void StartTracking()
```






-----------

