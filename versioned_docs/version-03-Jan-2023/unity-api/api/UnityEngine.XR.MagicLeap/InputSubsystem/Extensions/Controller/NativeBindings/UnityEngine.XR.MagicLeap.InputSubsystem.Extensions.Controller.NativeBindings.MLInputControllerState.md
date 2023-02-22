---
title: MLInputControllerState
summary: links to mlinputconnecteddeviceslist in ml-input.h. 

---

# MLInputControllerState




Links to [MLInputConnectedDevicesList](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Controller/NativeBindings/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Controller.NativeBindings.MLInputConnectedDevicesList.md) in ml&#95;input.h.   





## Public Attributes

### ButtonStates {#byte-buttonstates}

Button states. 

```csharp

public byte [] ButtonStates;

```






-----------

### HardwareIndex {#byte-hardwareindex}

```csharp

public byte HardwareIndex;

```






-----------

### IsConnected {#byte-isconnected}

```csharp

public byte IsConnected;

```






-----------

### IsTouchesActive {#byte-istouchesactive}

```csharp

public byte [] IsTouchesActive;

```






-----------

### TouchesPositionAndForce {#magicleapnativebindingsmlvec3f-touchespositionandforce}

Current touch position (x,y) and force (z). Position is in the [-1.0,1.0] range and force is in the [0.0,1.0] range. 

```csharp

public MagicLeapNativeBindings.MLVec3f [] TouchesPositionAndForce;

```

| Type | Description  | 
|--|--|
| [MagicLeapNativeBindings.MLVec3f](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec3f.md) [] | 3D vector in native format.  |





-----------

### TouchpadGesture {#touchpadgesturemlinputcontrollertouchpadgesture-touchpadgesture}

```csharp

public TouchpadGesture.MLInputControllerTouchpadGesture TouchpadGesture;

```

| Type | Description  | 
|--|--|
| [TouchpadGesture.MLInputControllerTouchpadGesture](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/TouchpadGesture/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.TouchpadGesture.MLInputControllerTouchpadGesture.md) | Links to MLInputConnectedDevicesList in ml&#95;input.h.  |





-----------

### TouchpadGestureState {#touchpadgesturestate-touchpadgesturestate}

```csharp

public TouchpadGesture.State TouchpadGestureState;

```

| Type | Description  | 
|--|--|
| [TouchpadGesture.State](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/TouchpadGesture/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.TouchpadGesture.md#enums-state) | Gesture state. Links to MLInputControllerTouchpadGestureState in ml&#95;input.h.  |





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

