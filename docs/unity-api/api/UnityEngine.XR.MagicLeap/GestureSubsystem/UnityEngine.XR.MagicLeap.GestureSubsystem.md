---
title: GestureSubsystem
summary: magicleap implementation of the xrgesturesubsystem. do not create this directly. use the subsystemmanager instead. 

---

# GestureSubsystem



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) implementation of the  XRGestureSubsystem . Do not create this directly. Use the  SubsystemManager  instead.   


Inherits from: <br></br>XRGestureSubsystem




## Public Fields

### touchpadGestureEvents {#list-touchpadgestureevents}

A collection of all MagicLeapTouchpadGestureEvents managed by this subsystem. This is cleared every frame and refreshed with new gesture events. 

```csharp

public List< Extensions.TouchpadGestureEvent > touchpadGestureEvents { get; set; }

```

| Type | Description  | 
|--|--|
| List&lt; [Extensions.TouchpadGestureEvent](/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent.md) &gt; | The event data related to a Magic Leap Touchpad gesture  |





-----------

## Protected Methods

### CreateProvider {#override-provider-createprovider}

Creates the provider interface. 

```csharp
protected override Provider CreateProvider()
```






**Returns**: The provider interface for [MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md)



-----------

