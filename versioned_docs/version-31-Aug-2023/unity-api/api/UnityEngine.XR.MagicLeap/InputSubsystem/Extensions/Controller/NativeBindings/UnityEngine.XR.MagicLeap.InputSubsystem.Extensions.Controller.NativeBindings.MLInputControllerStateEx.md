---
title: MLInputControllerStateEx
summary: contains information about the current state of an input controller. 

---

# MLInputControllerStateEx




Contains information about the current state of an input controller.   





## Public Attributes

### ButtonStates {#bool-buttonstates}

```csharp

public bool [] ButtonStates;

```






-----------

### Hand {#mlinputcontrollerhand-hand}

```csharp

public MLInputControllerHand Hand;

```






-----------

### HardwareIndex {#byte-hardwareindex}

```csharp

public byte HardwareIndex;

```






-----------

### IsConnected {#bool-isconnected}

```csharp

public bool IsConnected;

```






-----------

### IsTouchesActive {#bool-istouchesactive}

```csharp

public bool [] IsTouchesActive;

```






-----------

### TouchesPositionAndForce {#vector3-touchespositionandforce}

Current touch position (x,y) and force (z). Position is in the [-1.0,1.0] range and force is in the [0.0,1.0] range. 

```csharp

public Vector3 [] TouchesPositionAndForce;

```






-----------

### TouchpadGestureData {#touchpadgesturedata-touchpadgesturedata}

```csharp

public TouchpadGesture.Data TouchpadGestureData;

```






-----------

### TouchpadGestureState {#touchpadgesturestate-touchpadgesturestate}

```csharp

public TouchpadGesture.State TouchpadGestureState;

```

| Type | Description  | 
|--|--|
| [TouchpadGesture.State](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/TouchpadGesture/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.TouchpadGesture.md#enums-state) | Gesture state. Links to MLInputControllerTouchpadGestureState in ml&#95;input.h.  |





-----------

### TriggerNormalized {#float-triggernormalized}

Normalized trigger value [0.0,1.0] 

```csharp

public float TriggerNormalized;

```






-----------

### Type {#mlinputcontrollertype-type}

```csharp

public MLInputControllerType Type;

```






-----------

### Version {#uint-version}

```csharp

public uint Version;

```






-----------


