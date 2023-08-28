---
title: MLWebRTCDataChannelEventCallbacks
summary: the native representation of the mlwebrtc data channel callback events. 

---

# MLWebRTCDataChannelEventCallbacks




The native representation of the MLWebRTC data channel callback events.   





## Public Methods

### [MLWebRTCDataChannelEventCallbacks](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.NativeBindings.MLWebRTCDataChannelEventCallbacks.md) Create {#mlwebrtcdatachanneleventcallbacks-create}

Creates an initialized MLWebRTCDataChannelEventCallbacks object. 

```csharp
public static MLWebRTCDataChannelEventCallbacks Create(
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |context|The context object to use.|






**Returns**: An initialized MLWebRTCDataChannelEventCallbacks object.



-----------

## Public Attributes

### Context {#intptr-context}

Context pointer used with the dataChannelCounter field to determine which data channel that callbacks are associated with. 

```csharp

public IntPtr Context;

```






-----------

### OnClosed {#oncloseddelegate-onclosed}

Native OnClosed event. 

```csharp

public OnClosedDelegate OnClosed;

```






-----------

### OnMessage {#onmessagedelegate-onmessage}

Native OnMessage event. 

```csharp

public OnMessageDelegate OnMessage;

```






-----------

### OnOpen {#onopeneddelegate-onopen}

Native OnOpen event. 

```csharp

public OnOpenedDelegate OnOpen;

```






-----------

### Version {#uint-version}

Version of the struct. 

```csharp

public uint Version;

```






-----------


