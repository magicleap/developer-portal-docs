---
title: MLWebRTCFramePlanes

---

# MLWebRTCFramePlanes










## Public Attributes

### ImagePlanes {#imageplaneinfonative-imageplanes}

The image planes making up the output image. Array length is constant, actual number of planes is specified by PlaneCount. 

```csharp

public ImagePlaneInfoNative [] ImagePlanes;

```

| Type | Description  | 
|--|--|
| [ImagePlaneInfoNative](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.NativeBindings.ImagePlaneInfoNative.md) [] | Representation of the native image plane structure.  |





-----------

### PlaneCount {#byte-planecount}

Number of output image planes. 3 for [OutputFormat.YUV&#95;420&#95;888](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.md#enums-yuv-420-888), 1 for [OutputFormat.RGBA&#95;8888](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.md#enums-rgba-8888)

```csharp

public byte PlaneCount;

```






-----------


