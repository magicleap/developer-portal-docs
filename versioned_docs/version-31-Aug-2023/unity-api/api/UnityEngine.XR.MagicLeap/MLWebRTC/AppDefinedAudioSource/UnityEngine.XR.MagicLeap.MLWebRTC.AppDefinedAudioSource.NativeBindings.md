---
title: NativeBindings
summary: native bindings for the mlwebrtc.appdefinedaudiosource class. 

---

# NativeBindings




[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) bindings for the [MLWebRTC.AppDefinedAudioSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedAudioSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedAudioSource.md) class.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) InitializeAppDefinedAudioSource {#mlresultcode-initializeappdefinedaudiosource}

Initialized a given [AppDefinedAudioSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedAudioSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedAudioSource.md) object and sets it's callbacks. 

```csharp
public static MLResult.Code InitializeAppDefinedAudioSource(
    MLWebRTC.AppDefinedAudioSource appDefinedAudioSource
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.AppDefinedAudioSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedAudioSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedAudioSource.md) |appDefinedAudioSource|The [AppDefinedAudioSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/AppDefinedAudioSource/UnityEngine.XR.MagicLeap.MLWebRTC.AppDefinedAudioSource.md) object to initialize.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the connection was successfully created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCSourceAppDefinedAudioSourcePushData {#mlresultcode-mlwebrtcsourceappdefinedaudiosourcepushdata}

Creates the local source that links to the user's camera and mic. 

```csharp
public MLResult.Code MLWebRTCSourceAppDefinedAudioSourcePushData(
    ulong sourceHandle,
    in MLAudioOutput.NativeBindings.MLAudioBuffer audioBuffer,
    in MLAudioOutput.NativeBindings.MLAudioBufferFormat audioBufferFormat
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sourceHandle|The handle to the local source to return to the caller.|
| in [MLAudioOutput.NativeBindings.MLAudioBuffer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/NativeBindings/UnityEngine.XR.MagicLeap.MLAudioOutput.NativeBindings.MLAudioBuffer.md) |audioBuffer||
| in [MLAudioOutput.NativeBindings.MLAudioBufferFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/NativeBindings/UnityEngine.XR.MagicLeap.MLAudioOutput.NativeBindings.MLAudioBufferFormat.md) |audioBufferFormat||






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the local source was successfully created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) PushData {#mlresultcode-pushdata}

```csharp
public static MLResult.Code PushData(
    ulong sourceHandle,
    byte [] audioBuffer,
    in MLAudioOutput.BufferFormat audioBufferFormat
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sourceHandle||
| byte [] |audioBuffer||
| in [MLAudioOutput.BufferFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.BufferFormat.md) |audioBufferFormat|[Buffer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.Buffer.md) format settings for input and output streams. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) PushData {#mlresultcode-pushdata}

```csharp
public static MLResult.Code PushData(
    ulong sourceHandle,
    float [] audioBuffer,
    in MLAudioOutput.BufferFormat audioBufferFormat
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sourceHandle||
| float [] |audioBuffer||
| in [MLAudioOutput.BufferFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.BufferFormat.md) |audioBufferFormat|[Buffer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.Buffer.md) format settings for input and output streams. |






-----------


