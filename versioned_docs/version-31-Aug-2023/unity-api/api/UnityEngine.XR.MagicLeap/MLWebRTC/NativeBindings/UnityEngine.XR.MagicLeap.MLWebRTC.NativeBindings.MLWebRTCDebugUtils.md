---
title: MLWebRTCDebugUtils
summary: the native representation of the mlwebrtc debug utilities object. 

---

# MLWebRTCDebugUtils




The native representation of the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) debug utilities object.   





## Public Methods

### [MLWebRTCDebugUtils](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.NativeBindings.MLWebRTCDebugUtils.md) Create {#mlwebrtcdebugutils-create}

Creates an initialized [MLWebRTCDebugUtils](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.NativeBindings.MLWebRTCDebugUtils.md) object. 

```csharp
public static MLWebRTCDebugUtils Create()
```






**Returns**: An initialized [MLWebRTCDebugUtils](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.NativeBindings.MLWebRTCDebugUtils.md) object.



-----------

## Public Attributes

### Context {#intptr-context}

Pointer to a context object. 

```csharp

public IntPtr Context;

```






-----------

### LogLevel {#androidlogpriority-loglevel}

The log level to respect for debugging. 

```csharp

public AndroidLogPriority LogLevel;

```

| Type | Description  | 
|--|--|
| [AndroidLogPriority](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md#enums-androidlogpriority) | Copy of android&#95;LogPriority from android/log.h.  |





-----------

### OnDebugMessage {#ondebugmessagedelegate-ondebugmessage}

The callback for when a debug message is received. 

```csharp

public OnDebugMessageDelegate OnDebugMessage;

```






-----------

### Version {#uint-version}

Version of the struct. 

```csharp

public uint Version;

```






-----------


