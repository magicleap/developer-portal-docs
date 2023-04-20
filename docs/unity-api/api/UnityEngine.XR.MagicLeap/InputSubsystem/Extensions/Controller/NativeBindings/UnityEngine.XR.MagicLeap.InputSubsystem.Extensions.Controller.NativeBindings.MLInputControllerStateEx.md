---
title: MLInputControllerStateEx
summary: contains information about the current state of an input controller. 

---

# MLInputControllerStateEx




Contains information about the current state of an input controller.   





## Public Attributes

### Version {#uint-version}

```csharp

public uint Version;

```






-----------

### Type {#mlinputcontrollertype-type}

```csharp

public MLInputControllerType Type;

```






-----------

### TriggerNormalized {#float-triggernormalized}

Normalized trigger value [0.0,1.0] 

```csharp

public float TriggerNormalized;

```






-----------

### TouchpadGestureState {#touchpadgesturestate-touchpadgesturestate}

```csharp

public TouchpadGesture.State TouchpadGestureState;

```

| Type | Description  | 
|--|--|
| [TouchpadGesture.State](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/TouchpadGesture/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.TouchpadGesture.md#enums-state) | Gesture state. Links to MLInputControllerTouchpadGestureState in ml&#95;input.h.  |





-----------

### TouchpadGestureData {#touchpadgesturedata-touchpadgesturedata}

```csharp

public TouchpadGesture.Data TouchpadGestureData;

```






-----------

### TouchesPositionAndForce {#vector3-touchespositionandforce}

Current touch position (x,y) and force (z). Position is in the [-1.0,1.0] range and force is in the [0.0,1.0] range. 

```csharp

public Vector3 [] TouchesPositionAndForce;

```






-----------

### IsTouchesActive {#bool-istouchesactive}

```csharp

public bool [] IsTouchesActive;

```






-----------

### IsConnected {#bool-isconnected}

```csharp

public bool IsConnected;

```






-----------

### HardwareIndex {#byte-hardwareindex}

```csharp

public byte HardwareIndex;

```






-----------

### Hand {#mlinputcontrollerhand-hand}

```csharp

public MLInputControllerHand Hand;

```






-----------

### ButtonStates {#bool-buttonstates}

```csharp

public bool [] ButtonStates;

```






-----------

