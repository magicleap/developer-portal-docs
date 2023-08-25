---
title: IntentCallbacks
summary: a structure containing callbacks for voice intent events. the final parameter to all the callbacks is a intptr, which will point to whatever payload data the user provides in mlvoiceintentsetcallbacks. individual callbacks which are not required by the client can be null. 

---

# IntentCallbacks




A structure containing callbacks for voice intent events. The final parameter to all the callbacks is a IntPtr, which will point to whatever payload data the user provides in [MLVoiceIntentSetCallbacks()](/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.md#mlresultcode-mlvoiceintentsetcallbacks). Individual callbacks which are not required by the client can be NULL.   [More...](#detailed-description)  




## Detailed Description

```csharp
public struct IntentCallbacks; 
```


**Details**

This structure must be initialized by calling [IntentCallbacks.Create()](/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.IntentCallbacks.md#intentcallbacks-create) before use. 





-----------



## Public Methods

### [IntentCallbacks](/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.IntentCallbacks.md) Create {#intentcallbacks-create}

Creates an initialized [IntentCallbacks](/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.IntentCallbacks.md) object. 

```csharp
public static IntentCallbacks Create()
```






**Returns**: An initialized [IntentCallbacks](/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.IntentCallbacks.md) object.



-----------

## Public Attributes

### OnEvent {#onvoiceeventdelegate-onevent}

[Native](/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) OnVoiceEvent. 

```csharp

public OnVoiceEventDelegate OnEvent;

```

| Type | Description  | 
|--|--|
| [OnVoiceEventDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.md#delegate-void-onvoiceeventdelegate) | This callback will be invoked whenever a voice intent event is detected.  |





-----------

### Version {#uint-version}

Version of the struct. 

```csharp

public uint Version;

```






-----------

