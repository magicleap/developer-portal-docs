---
title: EventCallbacks
summary: event handler for mlwebview callbacks. this structure must be initialized by calling #mlwebvieweventcallbacksinit before use. 

---

# EventCallbacks




Event handler for [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) callbacks. This structure must be initialized by calling #MLWebViewEventCallbacksInit before use.   





## Public Methods

### [EventCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/NativeBindings/UnityEngine.XR.MagicLeap.MLWebView.NativeBindings.EventCallbacks.md) Create {#eventcallbacks-create}

Create and return an initialized version of this struct. userDataPointer to user data to be used to reference the originating web view tab

```csharp
public static EventCallbacks Create(
    GCHandle gcHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| GCHandle |gcHandle||






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### OnBeforePopup {#onbeforepopupcallback-onbeforepopup}

This callback is used to ask the application if is OK to load a URL. 

```csharp

public OnBeforePopupCallback OnBeforePopup;

```






-----------

### OnBeforeResourceLoad {#onbeforeresourceloadcallback-onbeforeresourceload}

Called to notify when a resource will loadeded. 

```csharp

public OnBeforeResourceLoadCallback OnBeforeResourceLoad;

```






-----------

### OnCertificateError {#oncertificateerrorcallback-oncertificateerror}

Called when there is any certificate error. 

```csharp

public OnCertificateErrorCallback OnCertificateError;

```






-----------

### OnDestroy {#ondestroycallback-ondestroy}

Called when webview is destroyed. 

```csharp

public OnDestroyCallback OnDestroy;

```






-----------

### OnKeyboardDismiss {#onkeyboarddismisscallback-onkeyboarddismiss}

Called when user deselects an input field and the keyboard should be dismissed. 

```csharp

public OnKeyboardDismissCallback OnKeyboardDismiss;

```






-----------

### OnLoadEnd {#onloadendcallback-onloadend}

Called to notify load completion. 

```csharp

public OnLoadEndCallback OnLoadEnd;

```






-----------

### OnLoadError {#onloaderrorcallback-onloaderror}

Called if there was any error during loading. These errors could be due to connectivity, certificate errors etc. 

```csharp

public OnLoadErrorCallback OnLoadError;

```






-----------

### OnPopupClosed {#onpopupclosedcallback-onpopupclosed}

This callback is used to notify the application of a closing popup. 

```csharp

public OnPopupClosedCallback OnPopupClosed;

```






-----------

### OnPopupOpened {#onpopupopenedcallback-onpopupopened}

This callback is used to notify application that popup is opened. 

```csharp

public OnPopupOpenedCallback OnPopupOpened;

```






-----------

### OnServiceConnected {#onserviceconnectedcallback-onserviceconnected}

This callback is used to pass notify user of service connection. 

```csharp

public OnServiceConnectedCallback OnServiceConnected;

```






-----------

### OnServiceDisconnected {#onservicedisconnectedcallback-onservicedisconnected}

This callback is used to notify user that service is disconnect. 

```csharp

public OnServiceDisconnectedCallback OnServiceDisconnected;

```






-----------

### OnServiceFailed {#onservicefailedcallback-onservicefailed}

This callback is used to notify user that service failed to connect. 

```csharp

public OnServiceFailedCallback OnServiceFailed;

```






-----------

### OnShowKeyboard {#onshowkeyboardcallback-onshowkeyboard}

Called when user selects an input field. 

```csharp

public OnShowKeyboardCallback OnShowKeyboard;

```






-----------

### UserData {#intptr-userdata}

User data passed to every callback. 

```csharp

public IntPtr UserData;

```






-----------

### Version {#uint-version}

Version of this struct 

```csharp

public uint Version;

```






-----------


