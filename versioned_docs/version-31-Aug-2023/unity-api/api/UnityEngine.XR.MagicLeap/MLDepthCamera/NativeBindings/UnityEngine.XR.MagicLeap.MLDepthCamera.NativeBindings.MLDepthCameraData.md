---
title: MLDepthCameraData
summary: structure to encapsulate output data for each camera stream. this structure must be initialized before use. 

---

# MLDepthCameraData




Structure to encapsulate output data for each camera stream. This structure must be initialized before use.   





## Public Methods

### [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraData.md) Init {#mldepthcameradata-init}

```csharp
public static MLDepthCameraData Init()
```






-----------

## Public Attributes

### FrameCount {#byte-framecount}

Number of camera frames populated. 

```csharp

public byte FrameCount;

```






-----------

### Frames {#intptr-frames}

Camera frame data. The number of frames is specified by frame&#95;count. 

```csharp

public IntPtr Frames;

```






-----------

### Version {#uint-version}

Version of this structure. 

```csharp

public uint Version;

```






-----------


