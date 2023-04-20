---
title: GestureSubsystemComponent

---

# GestureSubsystemComponent



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 





Inherits from: <br></br>MonoBehaviour



## Detailed Description

```csharp
public class GestureSubsystemComponent : MonoBehaviour 
```


**Details**

Controls the lifecycle and configuration options for a Magic Leap gesture subsystem. There is only one active Magic Leap Gestures. The event callbacks will inform code of when gesture events occur. 





-----------



## Public Fields

### gestureSubsystem {#gesturesubsystem-gesturesubsystem}

Get the  MagicLeapGestureSubsystem  whose lifetime this component manages. 

```csharp

public GestureSubsystem gestureSubsystem { get; set; }

```

| Type | Description  | 
|--|--|
| [GestureSubsystem](/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/UnityEngine.XR.MagicLeap.GestureSubsystem.md) | [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) implementation of the  XRGestureSubsystem . Do not create this directly. Use the  SubsystemManager  instead.  |





-----------

### controllerGesturesEnabled {#bool-controllergesturesenabled}

```csharp

public bool controllerGesturesEnabled { get; set; }

```






-----------

## Public Events

### onTouchpadGestureChanged {#action-ontouchpadgesturechanged}

This event is invoked whenever a MagicLeapTouchpadGestureEvent is received by the gestures subsystem. 

```csharp
public Action< GestureSubsystem.Extensions.TouchpadGestureEvent > onTouchpadGestureChanged()
```






-----------

### onActivate {#action-activategestureevent-onactivate}

This event is invoked whenever a ActivateGestureEvent is received by the gestures subsystem. 

```csharp
public Action< ActivateGestureEvent > onActivate()
```






-----------

