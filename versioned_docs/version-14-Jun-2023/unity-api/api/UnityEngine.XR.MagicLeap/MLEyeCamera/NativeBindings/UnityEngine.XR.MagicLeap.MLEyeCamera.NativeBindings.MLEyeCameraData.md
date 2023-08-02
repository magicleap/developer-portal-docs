---
title: MLEyeCameraData
summary: a structure to encapsulate all the eye camera data. 

---

# MLEyeCameraData




A structure to encapsulate all the eye camera data.   





## Public Attributes

### FrameCount {#readonly-byte-framecount}

Number of camera frames. 

```csharp

public readonly byte FrameCount;

```






-----------

### Frames {#readonly-intptr-frames}

Camera frame data. The number of frames is specified by FrameCount. 

```csharp

public readonly IntPtr Frames;

```






-----------

### Version {#readonly-uint-version}

version contains the version number for this structure. 

```csharp

public readonly uint Version;

```






-----------


