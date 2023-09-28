---
title: MLWebView
summary: api for mlwebview that allows an application to instantiate a hardware accelerated webview and interact with itvia mouse and keyboard events. 

---

# MLWebView



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


API for [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) that allows an application to instantiate a hardware accelerated WebView and interact with it(via "mouse" and "keyboard" events).   [More...](#detailed-description)  


Inherits from: <br></br>[MLAPIBase](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAPIBase.md)



## Detailed Description

```csharp
public class MLWebView : MLAPIBase 
```


**Details**

[MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) class exposes static functions that allows an application to instantiate a hardware accelerated WebView and interact with it(via "mouse" and "keyboard" events). 





-----------



## Public Fields

### AcceptPopup {#bool-acceptpopup}

Flag to indicate if the application accepts the popup 

```csharp

public bool AcceptPopup = false { get; set; }

```






-----------

### IgnoreCertificateError {#bool-ignorecertificateerror}

Flag to indicate if urls issuing certificate errors should be loaded or not 

```csharp

public bool IgnoreCertificateError { get; set; }

```






-----------

### WebViewHandle {#ulong-webviewhandle}

Retrieves the assigned web view handle. 

```csharp

public ulong WebViewHandle { get; set; }

```






**Returns**: The assigned web view handle, [MagicLeapNativeBindings.InvalidHandle](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md#const-ulong-invalidhandle) if it has not been created.



-----------

## Public Methods

### bool CanGoBack {#bool-cangoback}

Checks if the "Back" action is currently valid. 

```csharp
public bool CanGoBack()
```






**Returns**: True if can use the "Back" action.



-----------

### bool CanGoForward {#bool-cangoforward}

Checks if the "Forward" action is currently valid. 

```csharp
public bool CanGoForward()
```






**Returns**: True if can use the "Forward" action.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ClearCache {#mlresult-clearcache}

Clear the webview cache. 

```csharp
public MLResult ClearCache()
```






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if cache cleared successfully

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if clearing cache failed due to an internal error.



-----------

### [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) Create {#mlwebview-create}

Create a [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) will be ready to use once this function returns with MLResult&#95;OK. 

```csharp
public static MLWebView Create(
    uint width,
    uint height,
    bool isPopup =false,
    ulong popupId =0
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |width|Width of the WebView in pixels.|
| uint |height|Height of the WebView in pixels.|
| bool |isPopup||
| ulong |popupId||






**Returns**: [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) instance if creation was successful, null otherwise.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Destroy {#mlresult-destroy}

Destroy a [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) will be terminated by this function call and the shall no longer be valid. 

```csharp
public MLResult Destroy()
```






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if was destroyed successfully.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if an error occurred destroying the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md).

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .



-----------

### Vector2Int GetScrollOffset {#vector2int-getscrolloffset}

Get the scroll offset of the webview. 

```csharp
public Vector2Int GetScrollOffset()
```






**Returns**: Vector2Int representing the horizontal and vertical offset of the webview, in pixels.



-----------

### Vector2Int GetScrollSize {#vector2int-getscrollsize}

Get the entire scrollable size of the webview. This should be typically called afer OnLoadEnd to determine the scollable size of the main frame of the loaded page.Some pages might dynamically resize and this should be called before each frame draw to correctly determine the scrollable size of the webview. 

```csharp
public Vector2Int GetScrollSize()
```






**Returns**: Vector2Int representing the entire width and height of the webview, in pixels.



-----------

### string GetURL {#string-geturl}

Get the current URL. 

```csharp
public string GetURL()
```






**Returns**: Current URL.



-----------

### double GetZoomFactor {#double-getzoomfactor}

Get the current zoom factor. The default zoom factor is 1.0. 

```csharp
public double GetZoomFactor()
```






**Returns**: Current numeric value for zoom factor.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GoBack {#mlresult-goback}

Trigger a "Back" action in the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). Query #MLWebViewCanGoBack before calling this method. If there is no valid page to go back to, this method will be no-op. 

```csharp
public MLResult GoBack()
```






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if WebView Back action was initiated or cannot go back any further.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GoForward {#mlresult-goforward}

Trigger a "Forward" action in the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). Query MLWebViewCanGoForward before calling this method. If there is no valid page to go forward to, this method will be no-op. 

```csharp
public MLResult GoForward()
```






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if WebView Forward action was initiated or cannot go forward any further.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GoTo {#mlresult-goto}

Go to a URL with the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). Note that success with this call only indicates that a load will be attempted. Caller can be notified about issues loading the URL via the event r on&#95;load&#95;error. 

```csharp
public MLResult GoTo(
    string url
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |url|URL that will be loaded.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if WebView is attempting to load the specified URL.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) InjectChar {#mlresult-injectchar}

Sends a printable char keyboard event to [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). 

```csharp
public MLResult InjectChar(
    char charUtf
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| char |charUtf32|printable char utf code|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if key event was injected.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) InjectKeyDown {#mlresult-injectkeydown}

Sends a key down/pressed event to [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). 

```csharp
public MLResult InjectKeyDown(
    MLWebView.KeyCode keyCode,
    uint modifierMask
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView.KeyCode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-keycode) |keyCode|[MLWebView.KeyCode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-keycode).|
| uint |modifierMask|Should be one or combination of [MLWebView.EventFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-eventflags).|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if key event was injected.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) InjectKeyUp {#mlresult-injectkeyup}

Sends a key up/release event to [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). 

```csharp
public MLResult InjectKeyUp(
    MLWebView.KeyCode keyCode,
    uint modifierMask
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView.KeyCode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-keycode) |keyCode|[MLWebView.KeyCode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-keycode).|
| uint |modifierMask|Should be one or combination of [MLWebView.EventFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-eventflags).|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if key event was injected.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) InjectMouseButtonDown {#mlresult-injectmousebuttondown}

Sends a mouse button down/pressed event on a specific location on screen. 

```csharp
public MLResult InjectMouseButtonDown(
    uint xPosition,
    uint yPosition,
    EventFlags modifiers
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |xPosition|Horizontal position of the cursor.|
| uint |yPosition|Vertical position of the cursor.|
| [EventFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-eventflags) |modifiers|Should be one or combination of EventFlags.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if successful.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) InjectMouseButtonUp {#mlresult-injectmousebuttonup}

Sends a mouse button up/released event on a specific location on screen. 

```csharp
public MLResult InjectMouseButtonUp(
    uint xPosition,
    uint yPosition,
    EventFlags modifiers
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |xPosition|Horizontal position of the cursor.|
| uint |yPosition|Vertical position of the cursor.|
| [EventFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-eventflags) |modifiers|Should be one or combination of EventFlags.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if successful.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) InjectMouseMove {#mlresult-injectmousemove}

Moves the WebView mouse. 

```csharp
public MLResult InjectMouseMove(
    uint xPosition,
    uint yPosition,
    EventFlags modifiers
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |xPosition|Horizontal position of the cursor.|
| uint |yPosition|Vertical position of the cursor. |
| [EventFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-eventflags) |modifiers|Should be one or combination of EventFlags.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if internal mouse was moved.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .



-----------

### delegate void OnBeforePopupDelegate {#delegate-void-onbeforepopupdelegate}

The delegate for the webview before popup event. 

```csharp
public delegate void OnBeforePopupDelegate(
    MLWebView webView,
    string url,
    bool popupAccepted
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|
| string |url|The URL for the popup to load.|
| bool |popupAccepted||






-----------

### delegate void OnBeforeResourceLoadDelegate {#delegate-void-onbeforeresourceloaddelegate}

The delegate for the before reasource loaded event. 

```csharp
public delegate void OnBeforeResourceLoadDelegate(
    MLWebView webView,
    string resourceURL
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|
| string |resourceURL|The url of the resource about to be loaded.|






-----------

### delegate void OnCertificateErrorDelegate {#delegate-void-oncertificateerrordelegate}

The delegate for the certificate error event. 

```csharp
public delegate void OnCertificateErrorDelegate(
    MLWebView webView,
    int errorCode,
    string url,
    string errorMessage,
    string details,
    bool certificateErrorIgnored
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|
| int |errorCode|Error code for ssl error.|
| string |url|The url associated to the certificate error.|
| string |errorMessage|Certificate error short description.|
| string |details|Certificate error details.|
| bool |certificateErrorIgnored||






-----------

### delegate void OnDestroyDelegate {#delegate-void-ondestroydelegate}

The delegate for the webview destroy event. 

```csharp
public delegate void OnDestroyDelegate(
    MLWebView webView
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|






-----------

### delegate void OnKeyboardDismissDelegate {#delegate-void-onkeyboarddismissdelegate}

The delegate for the keyboard dismiss event. 

```csharp
public delegate void OnKeyboardDismissDelegate(
    MLWebView webView
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|






-----------

### delegate void OnLoadEndDelegate {#delegate-void-onloadenddelegate}

The delegate for the reasource loaded event. 

```csharp
public delegate void OnLoadEndDelegate(
    MLWebView webView,
    bool isMainFrame,
    int httpStatusCode
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|
| bool |isMainFrame|Whether this event was for the main frame.|
| int |httpStatusCode|The standard http status code.|






-----------

### delegate void OnLoadErrorDelegate {#delegate-void-onloaderrordelegate}

The delegate for the reasource load error event. 

```csharp
public delegate void OnLoadErrorDelegate(
    MLWebView webView,
    bool isMainFrame,
    int httpStatusCode,
    string errorStr,
    string failedUrl
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|
| bool |isMainFrame|True if this event was for the main frame.|
| int |httpStatusCode|Http status code for the URL load failure.|
| string |errorStr|The stringified version of the error code.|
| string |failedUrl|The url that caused the load error.|






-----------

### delegate void OnPopupClosedDelegate {#delegate-void-onpopupcloseddelegate}

The delegate fpr the webview popup closed event. 

```csharp
public delegate void OnPopupClosedDelegate(
    MLWebView webView,
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|
| ulong |handle|The webview handle of the popup being closed.|






-----------

### delegate void OnPopupOpenedDelegate {#delegate-void-onpopupopeneddelegate}

The delegate for the webview popup opened event. 

```csharp
public delegate void OnPopupOpenedDelegate(
    MLWebView webView,
    ulong popupID,
    string url
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|
| ulong |popupID|The ID of the popup.|
| string |url|The URL associated with the popup.|






-----------

### delegate void OnServiceConnectedDelegate {#delegate-void-onserviceconnecteddelegate}

The delegate for the webview service connected event. 

```csharp
public delegate void OnServiceConnectedDelegate(
    MLWebView webView
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|






-----------

### delegate void OnServiceDisconnectedDelegate {#delegate-void-onservicedisconnecteddelegate}

The delegate for the webview service disconnected event. 

```csharp
public delegate void OnServiceDisconnectedDelegate(
    MLWebView webView
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|






-----------

### delegate void OnServiceFailedDelegate {#delegate-void-onservicefaileddelegate}

The delegate for the webview service failed event. 

```csharp
public delegate void OnServiceFailedDelegate(
    MLWebView webView,
    MLResult result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|
| [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |result|The [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) code associated with the failure.|






-----------

### delegate void OnShowKeyboardDelegate {#delegate-void-onshowkeyboarddelegate}

The delegate for the keyboard show event. 

```csharp
public delegate void OnShowKeyboardDelegate(
    MLWebView webView,
    InputFieldData keyboardShowData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) associated with this callback.|
| [InputFieldData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.InputFieldData.md) |keyboardShowData|Data about the clicked input field.|






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Pause {#mlresult-pause}

Pause the webview. Call MLWebViewResume to resume. This method provides a multiple pause types to the webview. 

```csharp
public MLResult Pause(
    PauseType pauseType
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PauseType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-pausetype) |pauseType|The type of pause to be used.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if paused successfully.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle or PauseType value.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if failed due to an internal error.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use. See an asynchronous mode of MLWebViewCreate.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Reload {#mlresult-reload}

Trigger a "Reload" action in the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). 

```csharp
public MLResult Reload()
```






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if WebView Reload action was initiated.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) RemoveAllCookies {#mlresult-removeallcookies}

Remove all webview cookies. 

```csharp
public MLResult RemoveAllCookies()
```






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if all cookies removed successfully.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if removing all cookies failed due to an internal error.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ResetZoom {#mlresult-resetzoom}

Reset zoom level to 1.0. 

```csharp
public MLResult ResetZoom()
```






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) zoom was reset.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if it failed to reset zoom due to an internal error.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Resume {#mlresult-resume}

Resumes a webview after a previous call of Pause. Resume webview to the normal operation for all webview pause types. 

```csharp
public MLResult Resume()
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
|  |handle|The webview being accessed.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if resumed successfully.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if failed due to an internal error.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use. See an asynchronous mode of MLWebViewCreate.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ScrollBy {#mlresult-scrollby}

Triggers a mouse "Scroll" event. 

```csharp
public MLResult ScrollBy(
    uint xPixels,
    uint yPixels
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |xPixels|The number of pixels to scroll on the x axis.|
| uint |yPixels|The number of pixels to scroll on the y axis.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) was scrolled.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ZoomIn {#mlresult-zoomin}

Zoom in one level. 

```csharp
public MLResult ZoomIn()
```






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) zoomed in.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .

MLResult.Code.WebViewResultZoomLimitReached if cannot zoom in any further.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if it failed to reset zoom due to an internal error.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ZoomOut {#mlresult-zoomout}

Zoom out one level. 

```csharp
public MLResult ZoomOut()
```






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) zoomed out.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) .

MLResult.Code.WebViewResultZoomLimitReached if cannot zoom out any further.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if it failed to reset zoom due to an internal error.



-----------

## Public Events

### OnBeforePopup {#onbeforepopupdelegate-onbeforepopup}

Event raised when WebView checks if a URL is OK to load in a popup. 

```csharp
public OnBeforePopupDelegate OnBeforePopup()
```






-----------

### OnBeforeResourceLoaded {#onbeforeresourceloaddelegate-onbeforeresourceloaded}

Event raised just before resources are loaded. 

```csharp
public OnBeforeResourceLoadDelegate OnBeforeResourceLoaded()
```






-----------

### OnCertificateErrorLoaded {#oncertificateerrordelegate-oncertificateerrorloaded}

Event raised when there was an error during certification loading. 

```csharp
public OnCertificateErrorDelegate OnCertificateErrorLoaded()
```






-----------

### OnErrorLoaded {#onloaderrordelegate-onerrorloaded}

Event raised when there was an error during loading. 

```csharp
public OnLoadErrorDelegate OnErrorLoaded()
```






-----------

### OnKeyboardDismissed {#onkeyboarddismissdelegate-onkeyboarddismissed}

Event rasied if Keyboard should be dismissed. 

```csharp
public OnKeyboardDismissDelegate OnKeyboardDismissed()
```






-----------

### OnKeyboardShown {#onshowkeyboarddelegate-onkeyboardshown}

Event raised if user clicked inputfield and keyboard should be displayed. 

```csharp
public OnShowKeyboardDelegate OnKeyboardShown()
```






-----------

### OnLoadEnded {#onloadenddelegate-onloadended}

Event raised when resources finish loading. 

```csharp
public OnLoadEndDelegate OnLoadEnded()
```






-----------

### OnPopupClosed {#onpopupcloseddelegate-onpopupclosed}

Event raised when Webview is closing a popup. 

```csharp
public OnPopupClosedDelegate OnPopupClosed()
```






-----------

### OnPopupOpened {#onpopupopeneddelegate-onpopupopened}

Event raised when WebView opened a popup. 

```csharp
public OnPopupOpenedDelegate OnPopupOpened()
```






-----------

### OnServiceConnected {#onserviceconnecteddelegate-onserviceconnected}

Event raised when WebView service is connected. 

```csharp
public OnServiceConnectedDelegate OnServiceConnected()
```






-----------

### OnServiceDisconnected {#onservicedisconnecteddelegate-onservicedisconnected}

Event raised when WebView service is disconnected. 

```csharp
public OnServiceDisconnectedDelegate OnServiceDisconnected()
```






-----------

### OnServiceFailed {#onservicefaileddelegate-onservicefailed}

Event raised when WebView service fails to connect. 

```csharp
public OnServiceFailedDelegate OnServiceFailed()
```






-----------

### OnWebViewDestroyed {#ondestroydelegate-onwebviewdestroyed}

Event raised when WebView is destroyed. 

```csharp
public OnDestroyDelegate OnWebViewDestroyed()
```






-----------

## Public Enums

### EventFlags {#enums-eventflags}

Flags to set special key states during input. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0| No flag is applied.   |
| CapsLockOn | 1 << 0| Caps Lock is on.   |
| ShiftDown | 1 << 1| Shift is pressed.   |
| ControlDown | 1 << 2| Control is pressed.   |
| AltDown | 1 << 3| Alt is pressed.   |
| LeftMouseButton | 1 << 4| Left mouse button is pressed.   |
| MiddleMouseButton | 1 << 5| Middle mouse button is pressed.   |
| RightMouseButton | 1 << 6| Right mouse button is pressed.   |
| CommandDown | 1 << 7| Command key is pressed.   |
| NumLockOn | 1 << 8| NumLock is on.   |
| IsKeyPad | 1 << 9| Was key struck on KeyPad.   |
| IsLeft | 1 << 10| Is left key.   |
| IsRight | 1 << 11| Is right key.   |
| AltGRDown | 1 << 12| AltGR is pressed.   |








-----------

### KeyCode {#enums-keycode}

Enums for all possible ML Key Codes. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unknown | 0|   |
| Home | 3|   |
| Back | 4|   |
| DpadLeft | 21|   |
| DpadRight | 22|   |
| Delete | 67|   |
| Focus | 80|   |
| Plus | 81|   |
| Menu | 82|   |
| Forward | 125|   |
| Trigger | 500|   |
| Capture | 501|   |
| Bumper | 502|   |
| Reality | 503|   |
| Battery | 504|   |
| MLBack | 508|   |
| HomeTap | MLBack|   |
| HomeMediumTap | 509|   |
| Popple | 510|   |
| MouseLeft | 511|   |
| MouseRight | 512|   |
| MouseWheel | 513|   |
| MouseExtra | 514|   |
| MouseSide | 515|   |
| VkbCancel | 1001|   |
| VkbSubmit | 1002|   |
| VkbPrevious | 1003|   |
| VkbNext | 1004|   |
| VkbClear | 1005|   |
| VkbClose | 1006|   |
| VkbCustom1 | 1007|   |
| VkbCustom2 | 1008|   |
| VkbCustom3 | 1009|   |
| VkbCustom4 | 1010|   |
| VkbHidePassword | 1012|   |
| VkbShowPassword | 1013|   |








-----------

### PauseType {#enums-pausetype}

The type of the webview pause. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MultiMedia | | Pause all multimedia activities of the webview.   |
| Timers | | Pause javascript timers of the webview.   |
| Discard | | Pause and discard the webview rendering process. But keep alive the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.   |








-----------

### TextInputFlags {#enums-textinputflags}

Flags related to a text entry field passed when on&#95;show&#95;keyboard is called. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0| Nonne of flasg are applied.   |
| AutocompleteOn | 1 << 0| Autocompletion is on.   |
| AutocompleteOff | 1 << 1| Autocompletion is off.   |
| AutocorrectOn | 1 << 2| Autocorrection is on.   |
| AutocorrectOff | 1 << 3| Autocorrection is off.   |
| SpellcheckOn | 1 << 4| Spellcheck is on.   |
| SpellcheckOff | 1 << 5| Spellcheck is of.   |
| AutocapitalizeNone | 1 << 6| Autocapitalize is off.   |
| AutocapitalizeCharacters | 1 << 7| Autocapitalize characters.   |
| AutocapitalizeWords | 1 << 8| Autocapitalize words.   |
| AutocapitalizeSentences | 1 << 9| Autocapitalize sentences.   |
| HaveNextFocusableElement | 1 << 10| Have next focusable element.   |
| HavePreviousFocusableElement | 1 << 11| Have previous focusable element.   |
| HasBeenPasswordField | 1 << 12| has been a password field.   |








-----------

### TextInputType {#enums-textinputtype}

The type of text entry selected when onShowKeyboard is called. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | | None.   |
| Text | | Text.   |
| Password | | Password.   |
| Search | | Search.   |
| Email | | Email.   |
| Number | | Number   |
| Telephone | | Telephone.   |
| URL | | URL.   |
| Date | | Date.   |
| DateTime | | Date Time.   |
| DateTimeLocal | | Date Time Local.   |
| Month | | Month.   |
| Time | | Time.   |
| Week | | Week.   |
| TextArea | | Text Area.   |
| ContentEditable | | Content Editable.   |
| DateTimeField | | Date Time Field.   |








-----------


