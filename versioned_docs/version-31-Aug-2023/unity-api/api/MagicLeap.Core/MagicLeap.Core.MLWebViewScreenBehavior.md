---
title: MLWebViewScreenBehavior
summary: this class is used to render web view on the texture and propagate input to web view. 

---

# MLWebViewScreenBehavior



**NameSpace:** 
[Core](/versioned_docs/version-31-Aug-2023/unity-api/api/MagicLeap.Core/MagicLeap.Core.md) 


This class is used to Render Web View on the texture and propagate input to Web View.   


Inherits from: <br></br>MonoBehaviour




## Public Fields

### IsConnected {#bool-isconnected}

Is WebView service connected. 

```csharp

public bool IsConnected { get; set; }

```






-----------

## Public Methods

### bool CreateWebViewWindow {#bool-createwebviewwindow}

Creates the WebView window. 

```csharp
public bool CreateWebViewWindow()
```






**Returns**: True if created WebView window with success.



-----------

### void DestroyWebViewWindow {#void-destroywebviewwindow}

Destroys the WebView window. 

```csharp
public void DestroyWebViewWindow()
```






-----------

### void GetWebViewSize {#void-getwebviewsize}

```csharp
public void GetWebViewSize(
    out uint width,
    out uint height
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out uint |width||
| out uint |height||






-----------

### void ServiceConnected {#void-serviceconnected}

```csharp
public void ServiceConnected()
```






-----------

### void ServiceDisconnected {#void-servicedisconnected}

```csharp
public void ServiceDisconnected()
```






-----------

### void Start {#void-start}

```csharp
public void Start()
```






-----------

## Public Attributes

### WebView {#mlwebview-webview}

```csharp

public MLWebView WebView = null;

```

| Type | Description  | 
|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) | API for [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) that allows an application to instantiate a hardware accelerated WebView and interact with it(via "mouse" and "keyboard" events).  |





-----------

### scrollingMode {#scrollingmode-scrollingmode}

```csharp

public ScrollingMode scrollingMode = ScrollingMode.Touchpad;

```






-----------

## Public Enums

### ScrollingMode {#enums-scrollingmode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Touchpad | |   |
| TriggerDrag | |   |








-----------


