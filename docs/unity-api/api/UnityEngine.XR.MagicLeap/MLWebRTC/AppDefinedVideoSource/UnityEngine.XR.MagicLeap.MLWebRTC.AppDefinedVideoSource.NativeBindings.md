---
title: NativeBindings
summary: native bindings for the mlwebrtc.appdefinedvideosource class. 

---

# NativeBindings




[Native](/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) bindings for the [MLWebRTC.AppDefinedVideoSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedVideoSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource.md) class.   


Inherits from: <br></br>[MagicLeapNativeBindings](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) InitializeAppDefinedVideoSource {#mlresultcode-initializeappdefinedvideosource}

Initialized a given appDefinedVideoSource object and sets it's callbacks. 

```csharp
public static MLResult.Code InitializeAppDefinedVideoSource(
    MLWebRTC.AppDefinedVideoSource appDefinedVideoSource
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.AppDefinedVideoSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedVideoSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource.md) |appDefinedVideoSource|The [AppDefinedVideoSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedVideoSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedVideoSource.md) object to initialize.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the connection was successfully created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCSourceAppDefinedVideoSourcePushFrame {#mlresultcode-mlwebrtcsourceappdefinedvideosourcepushframe}

Creates the local source that links to the user's camera and mic. 

```csharp
public MLResult.Code MLWebRTCSourceAppDefinedVideoSourcePushFrame(
    ulong sourceHandle,
    in MLWebRTC.VideoSink.Frame.NativeBindings.MLWebRTCFrame frameNative
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sourceHandle|The handle to the local source to return to the caller.|
| in [MLWebRTC.VideoSink.Frame.NativeBindings.MLWebRTCFrame](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.NativeBindings.MLWebRTCFrame.md) |frameNative|Representation of the native frame structure. |






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the local source was successfully created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCSourceCreateAppDefinedVideoSource {#mlresultcode-mlwebrtcsourcecreateappdefinedvideosource}

Creates the local source that links to the user's camera and mic. 

```csharp
public MLResult.Code MLWebRTCSourceCreateAppDefinedVideoSource(
    in AppDefinedSource.NativeBindings.MLWebRTCAppDefinedSourceEventCallbacks callbacks,
    out ulong sourceHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [AppDefinedSource.NativeBindings.MLWebRTCAppDefinedSourceEventCallbacks](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedSource/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedSource.NativeBindings.MLWebRTCAppDefinedSourceEventCallbacks.md) |sourceHandle|The handle to the local source to return to the caller.|
| out ulong |sourceHandle||






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the local source was successfully created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

