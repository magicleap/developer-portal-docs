---
title: NativeBindings
summary: native bindings for the mlwebrtc class. 

---

# NativeBindings




[Native](/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) bindings for the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) class.   


Inherits from: <br></br>[MagicLeapNativeBindings](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### IntPtr MLWebRTCGetResultString {#intptr-mlwebrtcgetresultstring}

Gets the string value of [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) specific result codes. 

```csharp
public IntPtr MLWebRTCGetResultString(
    MLResult.Code result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) |result|The [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) specific result code.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the instance was successfully destroyed. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCInstanceCreate {#mlresultcode-mlwebrtcinstancecreate}

Creates the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance. 

```csharp
public MLResult.Code MLWebRTCInstanceCreate()
```






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the instance was successfully created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCInstanceCreateWithDebugUtils {#mlresultcode-mlwebrtcinstancecreatewithdebugutils}

Creates the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance with more debug logs. 

```csharp
public MLResult.Code MLWebRTCInstanceCreateWithDebugUtils(
    in MLWebRTCDebugUtils debugUtils
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [MLWebRTCDebugUtils](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.NativeBindings.MLWebRTCDebugUtils.md) |debugUtils|The [MLWebRTCDebugUtils](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.NativeBindings.MLWebRTCDebugUtils.md) object to initialize with.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the instance was successfully created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCInstanceDestroy {#mlresultcode-mlwebrtcinstancedestroy}

Destroys the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance. 

```csharp
public MLResult.Code MLWebRTCInstanceDestroy()
```






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the instance was successfully destroyed. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



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
| [AndroidLogPriority](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md#enums-androidlogpriority) |logLevel|The log level of the debug utils.|
| string |message|The debug message.|
| IntPtr |context|Pointer to a context object.|






-----------

