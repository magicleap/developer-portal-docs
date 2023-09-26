---
title: MLGestureClassification

---

# MLGestureClassification










## Public Methods

### void StartTracking {#void-starttracking}

```csharp
public static void StartTracking()
```






-----------

### void StopTracking {#void-stoptracking}

```csharp
public static void StopTracking()
```






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
| out [FingerAngleDeg](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLGestureClassification/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLGestureClassification.FingerAngleDeg.md) |allFingerAngles|The Angles between two fingers in degrees. |






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
| out [FingerState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLGestureClassification/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLGestureClassification.FingerState.md) |fingerStateData|Gesture classification state of a single finger. |






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

## Public Attributes

### LeftGestureInputDeviceName {#const-string-leftgestureinputdevicename}

```csharp

public const string LeftGestureInputDeviceName = "MagicLeapHandGesture - Left";

```






-----------

### RightGestureInputDeviceName {#const-string-rightgestureinputdevicename}

```csharp

public const string RightGestureInputDeviceName = "MagicLeapHandGesture - Right";

```






-----------

## Public Enums

### FingerType {#enums-fingertype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Thumb | 0|   |
| Index | |   |
| Middle | |   |
| Ring | |   |
| Pinky | |   |








-----------

### KeyPoseType {#enums-keyposetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | |   |
| OK | |   |
| C | |   |
| Pinch | |   |
| Finger | |   |
| L | |   |
| Thumb | |   |
| Fist | |   |
| Open | |   |








-----------

### PostureType {#enums-posturetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | |   |
| Pinch | |   |
| Point | |   |
| Grasp | |   |
| Open | |   |








-----------


