---
title: MLWebRTCNativeFrameInfo

---

# MLWebRTCNativeFrameInfo










## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### Height {#uint-height}

Height of the native frame 

```csharp

public uint Height;

```






-----------

### NativeBufferHandle {#ulong-nativebufferhandle}

[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) buffer handle can be acquired from [MLNativeSurface](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLNativeSurface/UnityEngine.XR.MagicLeap.MLNativeSurface.md) using MLNativeSurfaceAcquireNextAvailableFrame. Application should never release the native&#95;buffer&#95;handle once it is acquired. If [MLWebRTCFrame](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.NativeBindings.MLWebRTCFrame.md) is created by application to send the frame through webrtc, webrtc will release the native&#95;buffer&#95;handle using MLNativeSurfaceReleaseFrame after encoding. Application should not release the native&#95;buffer&#95;handle send by webrtc for rendering whether it is local or remote sink. 

```csharp

public ulong NativeBufferHandle;

```






-----------

### SurfaceHandle {#ulong-surfacehandle}

Surface handle, from which native handle is acquired Surface handle can be created using MLNativeSurfaceCreate 

```csharp

public ulong SurfaceHandle;

```






-----------

### Transform {#float-transform}

The 4x4 column-major tranformation matrix for the native frame 

```csharp

public float [] Transform;

```






-----------

### Width {#uint-width}

Width of the native frame 

```csharp

public uint Width;

```






-----------


