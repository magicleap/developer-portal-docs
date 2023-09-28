---
title: GestureSubsystem
summary: magicleap implementation of the xrgesturesubsystem. do not create this directly. use the subsystemmanager instead. 

---

# GestureSubsystem



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) implementation of the  XRGestureSubsystem . Do not create this directly. Use the  SubsystemManager  instead.   [More...](#detailed-description)  


Inherits from: <br></br>XRGestureSubsystem



## Detailed Description

```csharp
public class GestureSubsystem : XRGestureSubsystem 
```


**Details**

[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) implementation of the  XRGestureSubsystem . Do not create this directly. Use  XRGestureSubsystemDescriptor.RegisterDescriptor()  instead. 





-----------



## Public Fields

### touchpadGestureEvents {#list-touchpadgestureevents}

A collection of all MagicLeapTouchpadGestureEvents managed by this subsystem. This is cleared every frame and refreshed with new gesture events. 

```csharp

public List< Extensions.TouchpadGestureEvent > touchpadGestureEvents { get; set; }

```

| Type | Description  | 
|--|--|
| List&lt; [Extensions.TouchpadGestureEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent.md) &gt; | The event data related to a Magic Leap Touchpad gesture  |





-----------


