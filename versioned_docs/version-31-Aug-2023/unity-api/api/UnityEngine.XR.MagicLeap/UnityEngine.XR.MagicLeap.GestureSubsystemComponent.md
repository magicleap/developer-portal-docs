---
title: GestureSubsystemComponent

---

# GestureSubsystemComponent



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 





Inherits from: <br></br>MonoBehaviour



## Detailed Description

```csharp
public class GestureSubsystemComponent : MonoBehaviour 
```


**Details**

Controls the lifecycle and configuration options for a Magic Leap gesture subsystem. There is only one active Magic Leap Gestures. The event callbacks will inform code of when gesture events occur. 





-----------



## Public Fields

### controllerGesturesEnabled {#bool-controllergesturesenabled}

```csharp

public bool controllerGesturesEnabled { get; set; }

```






-----------

### gestureSubsystem {#gesturesubsystem-gesturesubsystem}

Get the  MagicLeapGestureSubsystem  whose lifetime this component manages. 

```csharp

public GestureSubsystem gestureSubsystem { get; set; }

```

| Type | Description  | 
|--|--|
| [GestureSubsystem](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/UnityEngine.XR.MagicLeap.GestureSubsystem.md) | [MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) implementation of the  XRGestureSubsystem . Do not create this directly. Use the  SubsystemManager  instead.  |





-----------

## Public Events

### onActivate {#action-activategestureevent-onactivate}

This event is invoked whenever a ActivateGestureEvent is received by the gestures subsystem. 

```csharp
public Action< ActivateGestureEvent > onActivate()
```






-----------

### onTouchpadGestureChanged {#action-ontouchpadgesturechanged}

This event is invoked whenever a MagicLeapTouchpadGestureEvent is received by the gestures subsystem. 

```csharp
public Action< GestureSubsystem.Extensions.TouchpadGestureEvent > onTouchpadGestureChanged()
```






-----------


