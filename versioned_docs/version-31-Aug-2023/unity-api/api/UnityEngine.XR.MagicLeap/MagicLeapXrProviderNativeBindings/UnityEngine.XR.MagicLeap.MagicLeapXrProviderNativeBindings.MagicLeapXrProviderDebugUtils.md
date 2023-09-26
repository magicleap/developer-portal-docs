---
title: MagicLeapXrProviderDebugUtils
summary: the native representation of the magicleapxrprovider debug utilities object. 

---

# MagicLeapXrProviderDebugUtils




The native representation of the [MagicLeapXrProvider](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MagicLeapXrProvider.md) debug utilities object.   





## Public Methods

### [MagicLeapXrProviderDebugUtils](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MagicLeapXrProviderNativeBindings/UnityEngine.XR.MagicLeap.MagicLeapXrProviderNativeBindings.MagicLeapXrProviderDebugUtils.md) Create {#magicleapxrproviderdebugutils-create}

Creates an initialized MLWebRTCDebugUtils object. 

```csharp
public static MagicLeapXrProviderDebugUtils Create()
```






**Returns**: An initialized MLWebRTCDebugUtils object.



-----------

## Public Attributes

### Context {#intptr-context}

Pointer to a context object. 

```csharp

public IntPtr Context;

```






-----------

### LogLevel {#loglevel-loglevel}

The log level to respect for debugging. 

```csharp

public LogLevel LogLevel;

```






-----------

### OnDebugMessage {#ondebugmessagedelegate-ondebugmessage}

The callback for when a debug message is received. 

```csharp

public OnDebugMessageDelegate OnDebugMessage;

```

| Type | Description  | 
|--|--|
| [OnDebugMessageDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MagicLeapXrProviderNativeBindings/UnityEngine.XR.MagicLeap.MagicLeapXrProviderNativeBindings.md#delegate-void-ondebugmessagedelegate) | Delegate describing the callback necessary to monitor when an debug message is received.  |





-----------


