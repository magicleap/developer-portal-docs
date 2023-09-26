---
title: NativeBindings
summary: native bindings for the mlwebrtc.frame struct. 

---

# NativeBindings




Native bindings for the MLWebRTC.Frame struct.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLWebRTCFrameGetData {#mlresultcode-mlwebrtcframegetdata}

Gets frame data. 

```csharp
public MLResult.Code MLWebRTCFrameGetData(
    ulong frameHandle,
    ref MLWebRTCFrame frame
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |frameHandle|The handle to the frame to query.|
| ref [MLWebRTCFrame](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.NativeBindings.MLWebRTCFrame.md) |frame|Pointer to the frame data.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if the dimensions were successfully obtained. MLResult.Result will be  MLResult.Code.PermissionDenied  if necessary permission is missing. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if failed due to other internal error. 



-----------


