---
title: TouchpadGestureEvent
summary: the event data related to a magic leap touchpad gesture 

---

# TouchpadGestureEvent




The event data related to a Magic Leap Touchpad gesture   [More...](#detailed-description)  


Inherits from: <br></br>IEquatable< TouchpadGestureEvent >



## Detailed Description

```csharp
public struct TouchpadGestureEvent : IEquatable< TouchpadGestureEvent > 
```




**See**: XRGestureSubsystem



-----------



## Public Fields

### angle {#float-angle}

Angle from the center of the touchpad to the finger. 

```csharp

public float angle { get; set; }

```






-----------

### controllerId {#byte-controllerid}

The controller id associated with this gesture. 

```csharp

public byte controllerId { get; set; }

```






-----------

### direction {#inputsubsystemextensionstouchpadgesturedirection-direction}

Direction of gesture 

```csharp

public InputSubsystem.Extensions.TouchpadGesture.Direction direction { get; set; }

```

| Type | Description  | 
|--|--|
| [InputSubsystem.Extensions.TouchpadGesture.Direction](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/TouchpadGesture/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.TouchpadGesture.md#enums-direction) | Direction of touchpad gesture. Links to MLInputControllerTouchpadGestureDirection in ml&#95;input.h.  |





-----------

### distance {#float-distance}

For radial gestures, this is the absolute value of the angle. For scroll and pinch gestures, this is the absolute distance traveled in touchpad distance. The touchpad is defined as having extents of [-1.0,1.0] so this distance has a range of [0.0,2.0]. 

```csharp

public float distance { get; set; }

```






-----------

### id {#gestureid-id}

The GestureId associated with this gesture. 

```csharp

public GestureId id { get; set; }

```






-----------

### positionAndForce {#vector3-positionandforce}

Gesture position (x,y) and force (z). Position is in the [-1.0,1.0] range and force is in the [0.0,1.0] range. 

```csharp

public Vector3 positionAndForce { get; set; }

```






-----------

### radius {#float-radius}

For radial gestures, this is the radius of the gesture. The touchpad is defined as having extents of [-1.0,1.0] so this radius has a range of [0.0,2.0]. 

```csharp

public float radius { get; set; }

```






-----------

### speed {#float-speed}

Speed of gesture. Note that this takes on different meanings depending on the gesture type being performed: 

```csharp

public float speed { get; set; }

```






-----------

### state {#gesturestate-state}

The [state](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent.md#gesturestate-state) of the gesture. 

```csharp

public GestureState state { get; set; }

```






-----------

### type {#inputsubsystemextensionstouchpadgesturetype-type}

Type of gesture. 

```csharp

public InputSubsystem.Extensions.TouchpadGesture.Type type { get; set; }

```

| Type | Description  | 
|--|--|
| [InputSubsystem.Extensions.TouchpadGesture.Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/TouchpadGesture/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.TouchpadGesture.md#enums-type) | Recognized touchpad gesture types. Links to MLInputControllerTouchpadGestureType in ml&#95;input.h.  |





-----------

## Public Methods

### override bool Equals {#override-bool-equals}

```csharp
public override bool Equals(
    object obj
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| object |obj||






-----------

### bool Equals {#bool-equals}

```csharp
public bool Equals(
    TouchpadGestureEvent other
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [TouchpadGestureEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent.md) |other|The event data related to a Magic Leap Touchpad gesture |






-----------

### [TouchpadGestureEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent.md) GetDefault {#touchpadgestureevent-getdefault}

Gets a default-initialized [TouchpadGestureEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent.md). 

```csharp
public static TouchpadGestureEvent GetDefault()
```






**Returns**: A default [TouchpadGestureEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent.md).



-----------

### override int GetHashCode {#override-int-gethashcode}

```csharp
public override int GetHashCode()
```






-----------

### override string ToString {#override-string-tostring}

Generates a new string describing the gestures's properties suitable for debugging purposes. 

```csharp
public override string ToString()
```






**Returns**: A string describing the gestures's properties.



-----------

###  TouchpadGestureEvent {#functions-touchpadgestureevent}

Constructs a new [TouchpadGestureEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent.md). 

```csharp
public TouchpadGestureEvent(
    GestureId id,
    GestureState state,
    byte controllerId,
    float angle,
    InputSubsystem.Extensions.TouchpadGesture.Direction direction,
    float distance,
    Vector3 positionAndForce,
    float radius,
    float speed,
    InputSubsystem.Extensions.TouchpadGesture.Type type
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| GestureId |id|The GestureId associated with the gesture.|
| GestureState |state|The GestureState associated with the gesture.|
| byte |controllerId|The controller id associated with this gesture.|
| float |angle|The angel of the touch of the gesture.|
| [InputSubsystem.Extensions.TouchpadGesture.Direction](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/TouchpadGesture/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.TouchpadGesture.md#enums-direction) |direction|The direction of the touch of the gesture.|
| float |distance|The distance of the gesture.|
| Vector3 |positionAndForce|The Vector3 position and force of the gesture.|
| float |radius|The radius of the touch of the gesture.|
| float |speed|The speed of the gesture.|
| [InputSubsystem.Extensions.TouchpadGesture.Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/TouchpadGesture/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.TouchpadGesture.md#enums-type) |type|The MLInput.Controller.TouchpadGesture.GestureType type of the gesture.|






-----------

### bool operator!= {#bool-operator}

```csharp
public static bool operator!=(
    TouchpadGestureEvent lhs,
    TouchpadGestureEvent rhs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [TouchpadGestureEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent.md) |lhs|The event data related to a Magic Leap Touchpad gesture |
| [TouchpadGestureEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent.md) |rhs|The event data related to a Magic Leap Touchpad gesture |






-----------

### bool operator== {#bool-operator}

```csharp
public static bool operator==(
    TouchpadGestureEvent lhs,
    TouchpadGestureEvent rhs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [TouchpadGestureEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent.md) |lhs|The event data related to a Magic Leap Touchpad gesture |
| [TouchpadGestureEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent.md) |rhs|The event data related to a Magic Leap Touchpad gesture |






-----------

## Public Attributes

### m_Angle {#float-m-angle}

```csharp

public float m_Angle;

```






-----------

### m_ControllerId {#byte-m-controllerid}

```csharp

public byte m_ControllerId;

```






-----------

### m_Direction {#inputsubsystemextensionstouchpadgesturedirection-m-direction}

```csharp

public InputSubsystem.Extensions.TouchpadGesture.Direction m_Direction;

```

| Type | Description  | 
|--|--|
| [InputSubsystem.Extensions.TouchpadGesture.Direction](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/TouchpadGesture/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.TouchpadGesture.md#enums-direction) | Direction of touchpad gesture. Links to MLInputControllerTouchpadGestureDirection in ml&#95;input.h.  |





-----------

### m_Distance {#float-m-distance}

```csharp

public float m_Distance;

```






-----------

### m_Id {#gestureid-m-id}

```csharp

public GestureId m_Id;

```






-----------

### m_PositionAndForce {#vector3-m-positionandforce}

```csharp

public Vector3 m_PositionAndForce;

```






-----------

### m_Radius {#float-m-radius}

```csharp

public float m_Radius;

```






-----------

### m_Speed {#float-m-speed}

```csharp

public float m_Speed;

```






-----------

### m_State {#gesturestate-m-state}

```csharp

public GestureState m_State;

```






-----------

### m_Type {#inputsubsystemextensionstouchpadgesturetype-m-type}

```csharp

public InputSubsystem.Extensions.TouchpadGesture.Type m_Type;

```

| Type | Description  | 
|--|--|
| [InputSubsystem.Extensions.TouchpadGesture.Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/TouchpadGesture/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.TouchpadGesture.md#enums-type) | Recognized touchpad gesture types. Links to MLInputControllerTouchpadGestureType in ml&#95;input.h.  |





-----------


