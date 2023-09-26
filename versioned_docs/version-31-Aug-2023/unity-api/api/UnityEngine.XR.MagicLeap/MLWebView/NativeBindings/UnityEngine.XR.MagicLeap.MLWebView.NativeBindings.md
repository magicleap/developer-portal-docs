---
title: NativeBindings
summary: see ml-webview.h for additional comments. 

---

# NativeBindings




See ml&#95;webview.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### IntPtr GetAppContext {#intptr-getappcontext}

Returns pointer to App Context that is required by WebView API. 

```csharp
public IntPtr GetAppContext()
```






**Returns**: pointer to JavaVM



-----------

### IntPtr GetJavaVM {#intptr-getjavavm}

Returns pointer to JavaVM that is required by WebView API. 

```csharp
public IntPtr GetJavaVM()
```






**Returns**: pointer to JavaVM



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewAcquireNextAvailableFrame {#mlresultcode-mlwebviewacquirenextavailableframe}

Acquires next available frame buffer for rendering. 

```csharp
public MLResult.Code MLWebViewAcquireNextAvailableFrame(
    ulong handle,
    out IntPtr hwBuffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| out IntPtr |bufferHandle|The buffer that is ready to be rendered. A value of 0 indicates no frame is ready.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if frame is ready.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its nable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewCanGoBack {#mlresultcode-mlwebviewcangoback}

Checks if the "Back" action is currently valid. 

```csharp
public MLResult.Code MLWebViewCanGoBack(
    ulong handle,
    out bool outCanGoBack
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| out bool |outCanGoBack|True if "Back" has a valid page to go to.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if status of going "Back" was acquired.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewCanGoForward {#mlresultcode-mlwebviewcangoforward}

Checks if the "Forward" action is currently valid. 

```csharp
public MLResult.Code MLWebViewCanGoForward(
    ulong handle,
    out bool outCanGoForward
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| out bool |outCanGoForward|True if "Forward" has a valid page to go to.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if status of going "Forward" was acquired.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewClearCache {#mlresultcode-mlwebviewclearcache}

Clear the webview cache. 

```csharp
public MLResult.Code MLWebViewClearCache(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if cache cleared successfully

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if clearing cache failed due to an internal error.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewCreate {#mlresultcode-mlwebviewcreate}

Create a [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) will be ready to use once this function returns with MLResult&#95;OK. 

```csharp
public MLResult.Code MLWebViewCreate(
    out ulong handle,
    ref Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |handle|Handle that is ready to use with all other [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) API calls.|
| ref [Settings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/NativeBindings/UnityEngine.XR.MagicLeap.MLWebView.NativeBindings.Settings.md) |settings|The initialization paramaters for the webview.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) is ready for use.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if Unable to create the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md).

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if the parameter was null pointer.

[MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied) its missing the permission(s).



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewDestroy {#mlresultcode-mlwebviewdestroy}

Destroy a [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) will be terminated by this function call and the handle shall no longer be valid. 

```csharp
public MLResult.Code MLWebViewDestroy(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if was destroyed successfully.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if an error occurred destroying the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md).

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewGetFrameTransformMatrix {#mlresultcode-mlwebviewgetframetransformmatrix}

Retrieves the 4x4 texture coordinate transform matrix used by all [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) frames. This transform matrix maps 2D homogeneous texture coordinates of the form (s, t, 0, 1) with s and t in the inclusive range [0, 1] to the texture coordinate that should be used to sample that location from the texture. Sampling the texture outside of the range of this transform is undefined. The matrix is stored in column-major order so that it may be passed directly to OpenGL ES via the glLoadMatrixf or glUniformMatrix4fv functions. 

```csharp
public MLResult.Code MLWebViewGetFrameTransformMatrix(
    ulong handle,
    out MLMat4f outMtx
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| out [MLMat4f](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLMat4f.md) |outMtx|The retrieved matrix.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if constant matrix was retrieved.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewGetScrollOffset {#mlresultcode-mlwebviewgetscrolloffset}

Get the scroll offset of the webview. 

```csharp
public MLResult.Code MLWebViewGetScrollOffset(
    ulong handle,
    out int x,
    out int y
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| out int |x|The number representing the horizontal offset of the webview, in pixels.|
| out int |y|The number representing the vertical offset of the webview, in pixels.|


**Details**


TODO: To be removed due to deprecation. 





**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) scroll offset values were retrieved.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewGetScrollSize {#mlresultcode-mlwebviewgetscrollsize}

Get the entire scrollable size of the webview. This should be typically called afer HandleOnLoadEnd to determine the scollable size of the main frame of the loaded page.Some pages might dynamically resize and this should be called before each frame draw to correctly determine the scrollable size of the webview. 

```csharp
public MLResult.Code MLWebViewGetScrollSize(
    ulong handle,
    out int width,
    out int height
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| out int |width|The number representing the entire width of the webview, in pixels.|
| out int |height|The number representing the entire height of the webview, in pixels.|


**Details**


TODO: To be removed due to deprecation. 





**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) scroll size values were retrieved.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewGetUrl {#mlresultcode-mlwebviewgeturl}

Get the current URL. Set outUrl to NULL to get the length of the current URL. 

```csharp
public MLResult.Code MLWebViewGetUrl(
    ulong handle,
    out uint inoutSize,
    IntPtr outUrl
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| out uint |inoutSize|The size that has been allocated in outUrl to hold the URL. This will be set to the actual length of URL if inoutSize and size needed for the URL are different.|
| IntPtr |outUrl|The URL up to inoutSize of characters.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if WebView URL was acquired.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewGetZoomFactor {#mlresultcode-mlwebviewgetzoomfactor}

Get the current zoom factor. The default zoom factor is 1.0. 

```csharp
public MLResult.Code MLWebViewGetZoomFactor(
    ulong handle,
    out double outZoomFactor
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| out double |outZoomFactor|Current numeric value for zoom factor.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if outZoomFactor parameter was updated with the current zoom value.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if failed to get the zoom factor due to an internal error.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewGoBack {#mlresultcode-mlwebviewgoback}

Trigger a "Back" action in the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). Query MLWebViewCanGoBack before calling this method. If there is no valid page to go back to, this method will be no-op. 

```csharp
public MLResult.Code MLWebViewGoBack(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if WebView Back action was initiated or cannot go back any further.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. MLWebViewResume should be called before this function.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewGoForward {#mlresultcode-mlwebviewgoforward}

Trigger a "Forward" action in the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). Query #MLWebViewCanGoForward before calling this method. If there is no valid page to go forward to, this method will be no-op. 

```csharp
public MLResult.Code MLWebViewGoForward(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if WebView Forward action was initiated or cannot go forward any further.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. MLWebViewResume should be called before this function.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewGoTo {#mlresultcode-mlwebviewgoto}

Go to a URL with the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). Note that success with this call only indicates that a load will be attempted. Caller can be notified about issues loading the URL via the event handler on&#95;load&#95;error. 

```csharp
public MLResult.Code MLWebViewGoTo(
    ulong handle,
    string url
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| string |url|URL that will be loaded.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if WebView is attempting to load the specified URL.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. MLWebViewResume should be called before this function.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewInjectChar {#mlresultcode-mlwebviewinjectchar}

Sends a printable char keyboard event to [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). 

```csharp
public MLResult.Code MLWebViewInjectChar(
    ulong handle,
    uint charUtf32
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| uint |charUtf32|printable char utf code|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if key event was injected.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewInjectKeyDown {#mlresultcode-mlwebviewinjectkeydown}

Sends a key down/pressed event to [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). 

```csharp
public MLResult.Code MLWebViewInjectKeyDown(
    ulong handle,
    MLWebView.KeyCode keyCode,
    uint modifierMask
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| [MLWebView.KeyCode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-keycode) |keyCode|[MLWebView.KeyCode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-keycode).|
| uint |modifierMask|Should be one or combination of [MLWebView.EventFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-eventflags).|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if key event was injected.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewInjectKeyUp {#mlresultcode-mlwebviewinjectkeyup}

Sends a key up/release event to [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). 

```csharp
public MLResult.Code MLWebViewInjectKeyUp(
    ulong handle,
    MLWebView.KeyCode keyCode,
    uint modifierMask
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| [MLWebView.KeyCode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-keycode) |keyCode|[MLWebView.KeyCode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-keycode).|
| uint |modifierMask|Should be one or combination of [MLWebView.EventFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-eventflags).|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if key event was injected.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewInjectMouseButtonDown {#mlresultcode-mlwebviewinjectmousebuttondown}

Sends a mouse button down/pressed event on a specific location on screen. 

```csharp
public MLResult.Code MLWebViewInjectMouseButtonDown(
    ulong handle,
    ref CursorState cursorState
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| ref [CursorState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/NativeBindings/UnityEngine.XR.MagicLeap.MLWebView.NativeBindings.CursorState.md) |cursorState|Information about the mouse button event.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if successful.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewInjectMouseButtonUp {#mlresultcode-mlwebviewinjectmousebuttonup}

Sends a mouse button up/released event on a specific location on screen. 

```csharp
public MLResult.Code MLWebViewInjectMouseButtonUp(
    ulong handle,
    ref CursorState cursorState
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| ref [CursorState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/NativeBindings/UnityEngine.XR.MagicLeap.MLWebView.NativeBindings.CursorState.md) |cursorState|Information about the mouse button event.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if successful.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewInjectMouseMove {#mlresultcode-mlwebviewinjectmousemove}

Moves the WebView mouse. 

```csharp
public MLResult.Code MLWebViewInjectMouseMove(
    ulong handle,
    ref CursorState cursorState
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| ref [CursorState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/NativeBindings/UnityEngine.XR.MagicLeap.MLWebView.NativeBindings.CursorState.md) |cursorState|Information about the mouse movement.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if internal mouse was moved.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewPause {#mlresultcode-mlwebviewpause}

Pause the webview. Call MLWebViewResume to resume. This method provides a multiple pause types to the webview. 

```csharp
public MLResult.Code MLWebViewPause(
    ulong handle,
    MLWebView.PauseType pauseType
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| [MLWebView.PauseType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-pausetype) |pauseType|The type of pause to be used.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if paused successfully.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle or PauseType value.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if failed due to an internal error.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use. See an asynchronous mode of MLWebViewCreate.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewReleaseFrame {#mlresultcode-mlwebviewreleaseframe}

Release a frame acquired by #MLWebViewAcquireNextAvailableFrame. 

```csharp
public MLResult.Code MLWebViewReleaseFrame(
    ulong handle,
    IntPtr hwBuffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.&lt;|
| IntPtr |bufferHandle|The frame being released.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if frame was successfully released.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if error occurred releasing the frame.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewReload {#mlresultcode-mlwebviewreload}

Trigger a "Reload" action in the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). 

```csharp
public MLResult.Code MLWebViewReload(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if WebView Reload action was initiated.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. MLWebViewResume should be called before this function.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewRemoveAllCookies {#mlresultcode-mlwebviewremoveallcookies}

Remove all webview cookies. 

```csharp
public MLResult.Code MLWebViewRemoveAllCookies(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if all cookies removed successfully.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if removing all cookies failed due to an internal error.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewResetZoom {#mlresultcode-mlwebviewresetzoom}

Reset zoom level to 1.0. 

```csharp
public MLResult.Code MLWebViewResetZoom(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) zoom was reset.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if it failed to reset zoom due to an internal error.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewResume {#mlresultcode-mlwebviewresume}

Resumes a webview after a previous call of the MLWebViewPause. Resume webview to the normal operation for all webview pause types. 

```csharp
public MLResult.Code MLWebViewResume(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if resumed successfully.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if failed due to an internal error.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use. See an asynchronous mode of MLWebViewCreate.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewScrollBy {#mlresultcode-mlwebviewscrollby}

Triggers a mouse "Scroll" event. 

```csharp
public MLResult.Code MLWebViewScrollBy(
    ulong handle,
    uint xPixels,
    uint yPixels
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|
| uint |xPixels|The number of pixels to scroll on the x axis.|
| uint |yPixels|The number of pixels to scroll on the y axis.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) was scrolled.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewSetEventCallbacks {#mlresultcode-mlwebviewseteventcallbacks}

Specify the event handler for an [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md). 

```csharp
public MLResult.Code MLWebViewSetEventCallbacks(
    ulong handle,
    EventCallbacks callbacks,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) to link the event handler.|
| [EventCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/NativeBindings/UnityEngine.XR.MagicLeap.MLWebView.NativeBindings.EventCallbacks.md) |callbacks|The event handler to link to the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md).|
| IntPtr |userData|Data that will be passed to your event handler when triggered.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if event handler was set.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewZoomIn {#mlresultcode-mlwebviewzoomin}

Zoom in one level. 

```csharp
public MLResult.Code MLWebViewZoomIn(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) zoomed in.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

MLResult.Code.WebViewResultZoomLimitReached if cannot zoom in any further.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if it failed to reset zoom due to an internal error.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebViewZoomOut {#mlresultcode-mlwebviewzoomout}

Zoom out one level. 

```csharp
public MLResult.Code MLWebViewZoomOut(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|The webview being accessed.|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) zoomed out.

[MLResult.Code.IllegalState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-illegalstate) if WebView was paused. See MLWebViewPause.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if its unable to find the specified [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle.

MLResult.Code.WebViewResultZoomLimitReached if cannot zoom out any further.

[MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure) if it failed to reset zoom due to an internal error.

[MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending) if the [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) handle is not ready to use.



-----------

### delegate bool OnBeforePopupCallback {#delegate-bool-onbeforepopupcallback}

The delegate for the webview before popup event. 

```csharp
public delegate bool OnBeforePopupCallback(
    string url,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |url||
| IntPtr |userData||






-----------

### delegate void OnBeforeResourceLoadCallback {#delegate-void-onbeforeresourceloadcallback}

The delegate for the before reasource loaded event. 

```csharp
public delegate void OnBeforeResourceLoadCallback(
    string resourceUrl,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |resourceUrl|The url of the resource about to be loaded.|
| IntPtr |userData|User defined data.|






-----------

### delegate bool OnCertificateErrorCallback {#delegate-bool-oncertificateerrorcallback}

The delegate for the certificate error event. 

```csharp
public delegate bool OnCertificateErrorCallback(
    int errorCode,
    string url,
    string errorMessage,
    string details,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |errorCode|Error code for ssl error.|
| string |url|The url associated to the certificate error.|
| string |errorMessage|Certificate error short description.|
| string |details|Certificate error details.|
| IntPtr |userData|User defined data.|






-----------

### delegate void OnDestroyCallback {#delegate-void-ondestroycallback}

The delegate for the webview destroy event. 

```csharp
public delegate void OnDestroyCallback(
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |userData|User defined data.|






-----------

### delegate void OnKeyboardDismissCallback {#delegate-void-onkeyboarddismisscallback}

The delegate for the keyboard dismiss event. 

```csharp
public delegate void OnKeyboardDismissCallback(
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |userData|User defined data.|






-----------

### delegate void OnLoadEndCallback {#delegate-void-onloadendcallback}

The delegate for the reasource loaded event. 

```csharp
public delegate void OnLoadEndCallback(
    bool isMainFrame,
    int httpStatusCode,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |isMainFrame|Whether this event was for the main frame.|
| int |httpStatusCode|The standard http status code.|
| IntPtr |userData|User defined data.|






-----------

### delegate void OnLoadErrorCallback {#delegate-void-onloaderrorcallback}

The delegate for the reasource load error event. 

```csharp
public delegate void OnLoadErrorCallback(
    bool isMainFrame,
    int httpStatusCode,
    string errorStr,
    string failedUrl,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |isMainFrame|True if this event was for the main frame.|
| int |httpStatusCode|Http status code for the URL load failure.|
| string |errorStr|The stringified version of the error code.|
| string |failedUrl|The url that caused the load error.|
| IntPtr |userData|User defined data.|






-----------

### delegate void OnPopupClosedCallback {#delegate-void-onpopupclosedcallback}

The delegate for the webview popup closed event.    This callback is used to notify the application of a popup that is being closed. For example, this can happen if window.close() is used. This is not always called. If the application closes the popup itself, then this function is not called. An application should call MLWebViewDestroy as soon as possible on the popup's handle after receiving this callback. 

```csharp
public delegate void OnPopupClosedCallback(
    ulong handle,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| IntPtr |userData||






-----------

### delegate void OnPopupOpenedCallback {#delegate-void-onpopupopenedcallback}

The delegate for the webview popup opened event. 

```csharp
public delegate void OnPopupOpenedCallback(
    ulong popupID,
    string url,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |popupID||
| string |url||
| IntPtr |userData||






-----------

### delegate void OnServiceConnectedCallback {#delegate-void-onserviceconnectedcallback}

The delegate for the webview service connected event. 

```csharp
public delegate void OnServiceConnectedCallback(
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |userData||






-----------

### delegate void OnServiceDisconnectedCallback {#delegate-void-onservicedisconnectedcallback}

The delegate for the webview service disconnected event. 

```csharp
public delegate void OnServiceDisconnectedCallback(
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |userData||






-----------

### delegate void OnServiceFailedCallback {#delegate-void-onservicefailedcallback}

The delegate for the webview service failed event. 

```csharp
public delegate void OnServiceFailedCallback(
    MLResult result,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |result|Magic Leap API return value. |
| IntPtr |userData||






-----------

### delegate void OnShowKeyboardCallback {#delegate-void-onshowkeyboardcallback}

The delegate for the keyboard show event. 

```csharp
public delegate void OnShowKeyboardCallback(
    int x,
    int y,
    int width,
    int height,
    TextInputFlags textInputFlags,
    TextInputType textInputType,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |x|Horizontal position of the input field.|
| int |y|Vertical position of the input field.|
| int |width|Width of the input field.|
| int |height|Height of the input field.|
| [TextInputFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-textinputflags) |textInputFlags|One or combination of TextInputFlags.|
| [TextInputType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-textinputtype) |textInputType|One of TextInputType.|
| IntPtr |userData|User defined data.|






-----------


