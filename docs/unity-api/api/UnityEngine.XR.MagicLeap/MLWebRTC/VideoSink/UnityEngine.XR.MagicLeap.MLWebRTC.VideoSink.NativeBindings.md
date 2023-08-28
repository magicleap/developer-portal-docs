---
title: NativeBindings
summary: native bindings for the mlwebrtc.videosink class. 

---

# NativeBindings




[Native](/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) bindings for the [MLWebRTC.VideoSink](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.md) class.   


Inherits from: <br></br>[MagicLeapNativeBindings](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCVideoSinkAcquireNextAvailableFrame {#mlresultcode-mlwebrtcvideosinkacquirenextavailableframe}

Gets a newly available frame from a video sink. 

```csharp
public MLResult.Code MLWebRTCVideoSinkAcquireNextAvailableFrame(
    ulong sinkHandle,
    out ulong frameHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the video sink to get a new frame from.|
| out ulong |frameHandle|The handle to the new frame.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the new frame was successfully acquired. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCVideoSinkCreate {#mlresultcode-mlwebrtcvideosinkcreate}

Creates a video sink. 

```csharp
public MLResult.Code MLWebRTCVideoSinkCreate(
    out ulong sinkHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |sinkHandle|The handle to the video sink to return to the caller.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the video sink was successfully created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCVideoSinkDestroy {#mlresultcode-mlwebrtcvideosinkdestroy}

Destroys a video sink. 

```csharp
public MLResult.Code MLWebRTCVideoSinkDestroy(
    ulong sinkHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the video sink to destroy.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the video sink was successfully destroyed. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCVideoSinkIsNewFrameAvailable {#mlresultcode-mlwebrtcvideosinkisnewframeavailable}

Gets if a new frame is available for a video sink. 

```csharp
public MLResult.Code MLWebRTCVideoSinkIsNewFrameAvailable(
    ulong sinkHandle,
    out bool newFrameAvailable
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the video sink to check a new frame for.|
| out bool |newFrameAvailable|Used to return to the caller if a new frame is available.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the video sink was successfully queried. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCVideoSinkReleaseFrame {#mlresultcode-mlwebrtcvideosinkreleaseframe}

Releases a frame from a video sink. 

```csharp
public MLResult.Code MLWebRTCVideoSinkReleaseFrame(
    ulong sinkHandle,
    ulong frameHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the video sink to release the frame from.|
| ulong |frameHandle|The handle to the frame to release.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the frame was successfully released. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCVideoSinkSetSource {#mlresultcode-mlwebrtcvideosinksetsource}

Sets the source of a video sink. 

```csharp
public MLResult.Code MLWebRTCVideoSinkSetSource(
    ulong sinkHandle,
    ulong sourceHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |sinkHandle|The handle to the video sink to set the source to.|
| ulong |sourceHandle|The handle to the source to set onto the video sink.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the source was successfully set onto the video sink. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

