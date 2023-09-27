---
title: MLWebRTCDataChannelEventCallbacks
summary: the native representation of the mlwebrtc data channel callback events. 

---

# MLWebRTCDataChannelEventCallbacks




The native representation of the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) data channel callback events.   





## Public Methods

### [MLWebRTCDataChannelEventCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.NativeBindings.MLWebRTCDataChannelEventCallbacks.md) Create {#mlwebrtcdatachanneleventcallbacks-create}

Creates an initialized [MLWebRTCDataChannelEventCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.NativeBindings.MLWebRTCDataChannelEventCallbacks.md) object. 

```csharp
public static MLWebRTCDataChannelEventCallbacks Create(
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |context|The context object to use.|






**Returns**: An initialized [MLWebRTCDataChannelEventCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.NativeBindings.MLWebRTCDataChannelEventCallbacks.md) object.



-----------

## Public Attributes

### Context {#intptr-context}

Context pointer used with the dataChannelCounter field to determine which data channel that callbacks are associated with. 

```csharp

public IntPtr Context;

```






-----------

### OnClosed {#oncloseddelegate-onclosed}

[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) OnClosed event. 

```csharp

public OnClosedDelegate OnClosed;

```

| Type | Description  | 
|--|--|
| [OnClosedDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.md#delegate-void-oncloseddelegate) | Delegate that describes the requirements of the OnClosed callback.  |





-----------

### OnMessage {#onmessagedelegate-onmessage}

[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) OnMessage event. 

```csharp

public OnMessageDelegate OnMessage;

```






-----------

### OnOpen {#onopeneddelegate-onopen}

[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) OnOpen event. 

```csharp

public OnOpenedDelegate OnOpen;

```

| Type | Description  | 
|--|--|
| [OnOpenedDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.md#delegate-void-onopeneddelegate) | Delegate that describes the requirements of the OnOpened callback.  |





-----------

### Version {#uint-version}

Version of the struct. 

```csharp

public uint Version;

```






-----------


