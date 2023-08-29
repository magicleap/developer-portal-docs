---
title: NativeBindings
summary: native bindings for the mlwebrtc class. 

---

# NativeBindings




Native bindings for the MLWebRTC class.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### IntPtr MLWebRTCGetResultString {#intptr-mlwebrtcgetresultstring}

Gets the string value of MLWebRTC specific result codes. 

```csharp
public IntPtr MLWebRTCGetResultString(
    MLResult.Code result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) |result|The MLWebRTC specific result code.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if the instance was successfully destroyed. MLResult.Result will be  MLResult.Code.PermissionDenied  if necessary permission is missing. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCInstanceCreate {#mlresultcode-mlwebrtcinstancecreate}

Creates the MLWebRTC instance. 

```csharp
public MLResult.Code MLWebRTCInstanceCreate()
```






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if the instance was successfully created. MLResult.Result will be  MLResult.Code.PermissionDenied  if necessary permission is missing. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCInstanceCreateWithDebugUtils {#mlresultcode-mlwebrtcinstancecreatewithdebugutils}

Creates the MLWebRTC instance with more debug logs. 

```csharp
public MLResult.Code MLWebRTCInstanceCreateWithDebugUtils(
    in MLWebRTCDebugUtils debugUtils
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [MLWebRTCDebugUtils](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.NativeBindings.MLWebRTCDebugUtils.md) |debugUtils|The MLWebRTCDebugUtils object to initialize with.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if the instance was successfully created. MLResult.Result will be  MLResult.Code.PermissionDenied  if necessary permission is missing. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCInstanceDestroy {#mlresultcode-mlwebrtcinstancedestroy}

Destroys the MLWebRTC instance. 

```csharp
public MLResult.Code MLWebRTCInstanceDestroy()
```






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if the instance was successfully destroyed. MLResult.Result will be  MLResult.Code.PermissionDenied  if necessary permission is missing. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to other internal error. 



-----------

### delegate void OnDebugMessageDelegate {#delegate-void-ondebugmessagedelegate}

Delegate describing the callback necessary to monitor when an debug message is received. 

```csharp
public delegate void OnDebugMessageDelegate(
    AndroidLogPriority logLevel,
    string message,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [AndroidLogPriority](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md#uint-androidlogpriority) |logLevel|The log level of the debug utils.|
| string |message|The debug message.|
| IntPtr |context|Pointer to a context object.|






-----------


