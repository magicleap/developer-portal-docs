---
title: MLWebRTCDataChannelMessage
summary: the native representation of the mlwebrtc data channel message. 

---

# MLWebRTCDataChannelMessage




The native representation of the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) data channel message.   





## Public Methods

### [MLWebRTCDataChannelMessage](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.NativeBindings.MLWebRTCDataChannelMessage.md) Create {#mlwebrtcdatachannelmessage-create}

Creates an initialized [MLWebRTCDataChannelMessage](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.NativeBindings.MLWebRTCDataChannelMessage.md) object. 

```csharp
public static MLWebRTCDataChannelMessage Create(
    string message
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |message|The string message to send.|






**Returns**: An initialized [MLWebRTCDataChannelMessage](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.NativeBindings.MLWebRTCDataChannelMessage.md) object.



-----------

### [MLWebRTCDataChannelMessage](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.NativeBindings.MLWebRTCDataChannelMessage.md) Create< T > {#mlwebrtcdatachannelmessage-create-t-}

Creates an initialized [MLWebRTCDataChannelMessage](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.NativeBindings.MLWebRTCDataChannelMessage.md) object. 

```csharp
public static MLWebRTCDataChannelMessage Create< T >(
    T [] message
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| T [] |message|The byte array message to send.|






**Returns**: An initialized [MLWebRTCDataChannelMessage](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.NativeBindings.MLWebRTCDataChannelMessage.md) object.



-----------

## Public Attributes

### Data {#intptr-data}

Pointer to the message in unmanaged memory. 

```csharp

public IntPtr Data;

```






-----------

### DataSize {#ulong-datasize}

Describes how large the unmanaged data is. 

```csharp

public ulong DataSize;

```






-----------

### IsBinary {#bool-isbinary}

Determines if the message is a string or byte array. 

```csharp

public bool IsBinary;

```






-----------

### Version {#uint-version}

Version of the struct. 

```csharp

public uint Version;

```






-----------


