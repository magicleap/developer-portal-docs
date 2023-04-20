---
title: NativeBindings

---

# NativeBindings










## Public Methods

### bool TryGetHandPosture {#bool-trygethandposture}

```csharp
public static bool TryGetHandPosture(
    InputDevice handDevice,
    out PostureType Posture
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |handDevice||
| out PostureType |Posture||






-----------

### bool TryGetHandKeyPose {#bool-trygethandkeypose}

```csharp
public static bool TryGetHandKeyPose(
    InputDevice handDevice,
    out KeyPoseType KeyPose
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |handDevice||
| out KeyPoseType |KeyPose||






-----------

### bool TryGetFingerState {#bool-trygetfingerstate}

```csharp
public static bool TryGetFingerState(
    InputDevice handDevice,
    FingerType finger,
    out FingerState fingerStateData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |handDevice||
| FingerType |finger||
| out [FingerState](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLGestureClassification/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLGestureClassification.FingerState.md) |fingerStateData|Gesture classification state of a single finger. |






-----------

### bool TryGetFingerAngles {#bool-trygetfingerangles}

```csharp
public static bool TryGetFingerAngles(
    InputDevice handDevice,
    out FingerAngleDeg allFingerAngles
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |handDevice||
| out [FingerAngleDeg](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLGestureClassification/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLGestureClassification.FingerAngleDeg.md) |allFingerAngles|The Angles between two fingers in degrees. |






-----------

