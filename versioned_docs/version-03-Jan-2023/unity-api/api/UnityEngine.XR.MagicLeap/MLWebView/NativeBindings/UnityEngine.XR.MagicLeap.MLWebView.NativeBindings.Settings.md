---
title: Settings
summary: struct to define webview initialization. 

---

# Settings




Struct to define webview initialization.   





## Public Methods

### [Settings](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/NativeBindings/UnityEngine.XR.MagicLeap.MLWebView.NativeBindings.Settings.md) Create {#settings-create}

Create and return an initialized version of this struct. 

```csharp
public static Settings Create(
    GCHandle gcHandle,
    uint width,
    uint height
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| GCHandle |gcHandle||
| uint |width||
| uint |height||






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### ApplicationVm {#intptr-applicationvm}

JavaVM&#42; pointer to use for Android up-calls. 

```csharp

public IntPtr ApplicationVm;

```






-----------

### Callbacks {#eventcallbacks-callbacks}

Event callbacks for interacting with webview. 

```csharp

public EventCallbacks Callbacks;

```

| Type | Description  | 
|--|--|
| [EventCallbacks](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/NativeBindings/UnityEngine.XR.MagicLeap.MLWebView.NativeBindings.EventCallbacks.md) | Event handler for [MLWebView](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) callbacks. This structure must be initialized by calling #MLWebViewEventCallbacksInit before use.  |





-----------

### Context {#intptr-context}

jobject to android. content. Context instance for Android up-calls. 

```csharp

public IntPtr Context;

```






-----------

### Height {#uint-height}

Vertical size of webview in pixels. 

```csharp

public uint Height;

```






-----------

### Version {#uint-version}

Version of this struct. 

```csharp

public uint Version;

```






-----------

### Width {#uint-width}

Horizontal size of webview in pixels. 

```csharp

public uint Width;

```






-----------

