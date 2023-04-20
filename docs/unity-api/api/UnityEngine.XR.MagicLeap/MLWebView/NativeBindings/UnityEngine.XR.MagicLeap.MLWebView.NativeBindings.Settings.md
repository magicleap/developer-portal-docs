---
title: Settings
summary: struct to define webview initialization. 

---

# Settings




Struct to define webview initialization.   





## Public Methods

### [Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/NativeBindings/UnityEngine.XR.MagicLeap.MLWebView.NativeBindings.Settings.md) Create {#settings-create}

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

### Width {#uint-width}

Horizontal size of webview in pixels. 

```csharp

public uint Width;

```






-----------

### Version {#uint-version}

Version of this struct. 

```csharp

public uint Version;

```






-----------

### Height {#uint-height}

Vertical size of webview in pixels. 

```csharp

public uint Height;

```






-----------

### Context {#intptr-context}

jobject to android. content. Context instance for Android up-calls. 

```csharp

public IntPtr Context;

```






-----------

### Callbacks {#eventcallbacks-callbacks}

Event callbacks for interacting with webview. 

```csharp

public EventCallbacks Callbacks;

```

| Type | Description  | 
|--|--|
| [EventCallbacks](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/NativeBindings/UnityEngine.XR.MagicLeap.MLWebView.NativeBindings.EventCallbacks.md) | Event handler for [MLWebView](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) callbacks. This structure must be initialized by calling #MLWebViewEventCallbacksInit before use.  |





-----------

### ApplicationVm {#intptr-applicationvm}

JavaVM&#42; pointer to use for Android up-calls. 

```csharp

public IntPtr ApplicationVm;

```






-----------

