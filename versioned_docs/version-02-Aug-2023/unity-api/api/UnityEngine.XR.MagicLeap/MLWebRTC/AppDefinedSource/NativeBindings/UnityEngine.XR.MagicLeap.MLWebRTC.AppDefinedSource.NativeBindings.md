---
title: NativeBindings
summary: native bindings for the mlwebrtc.appdefinedvideosource class. 

---

# NativeBindings




Native bindings for the MLWebRTC.AppDefinedVideoSource class.   





## Public Methods

### delegate void OnDestroyedDelegate {#delegate-void-ondestroyeddelegate}

A delegate that describes the requirements of the OnDestroyed callback. 

```csharp
public delegate void OnDestroyedDelegate(
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |context|Pointer to a context object.|






-----------

### delegate void OnSetEnabledDelegate {#delegate-void-onsetenableddelegate}

A delegate that describes the requirements of the OnSetEnabled callback. 

```csharp
public delegate void OnSetEnabledDelegate(
    bool enabled,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |enabled|True if the source was enabled.|
| IntPtr |context|Pointer to a context object.|






-----------


