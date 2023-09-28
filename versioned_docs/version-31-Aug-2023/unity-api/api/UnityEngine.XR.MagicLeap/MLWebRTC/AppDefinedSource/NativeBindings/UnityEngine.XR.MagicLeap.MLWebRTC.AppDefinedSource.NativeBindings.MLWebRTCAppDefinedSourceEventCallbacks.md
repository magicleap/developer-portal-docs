---
title: MLWebRTCAppDefinedSourceEventCallbacks
summary: the native representation of the mlwebrtc data channel callback events. 

---

# MLWebRTCAppDefinedSourceEventCallbacks




The native representation of the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) data channel callback events.   





## Public Methods

### [MLWebRTCAppDefinedSourceEventCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedSource/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedSource.NativeBindings.MLWebRTCAppDefinedSourceEventCallbacks.md) Create {#mlwebrtcappdefinedsourceeventcallbacks-create}

Factory method used to create a new MLWebRTCAppDefinedVideoSourceEventCallbacks object. 

```csharp
public static MLWebRTCAppDefinedSourceEventCallbacks Create(
    IntPtr context,
    OnSetEnabledDelegate onSetEnabled,
    OnDestroyedDelegate onDestroyed
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |context|Pointer to the context object to use for the callbacks.|
| OnSetEnabledDelegate |onSetEnabled||
| OnDestroyedDelegate |onDestroyed||






**Returns**: An MLWebRTCAppDefinedVideoSourceEventCallbacks object with the given handle.



-----------

## Public Attributes

### Context {#intptr-context}

Version of the struct. 

```csharp

public IntPtr Context;

```






-----------

### OnDestroyed {#ondestroyeddelegate-ondestroyed}

OnDestroyed event. 

```csharp

public OnDestroyedDelegate OnDestroyed;

```






-----------

### OnSetEnabled {#onsetenableddelegate-onsetenabled}

OnSetEnabled event. 

```csharp

public OnSetEnabledDelegate OnSetEnabled;

```






-----------

### Version {#uint-version}

Version of the struct. 

```csharp

public uint Version;

```






-----------


