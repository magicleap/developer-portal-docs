---
title: ImagePlaneInfoNative
summary: representation of the native image plane structure. 

---

# ImagePlaneInfoNative




Representation of the native image plane structure.   





## Public Methods

###  ImagePlaneInfoNative {#functions-imageplaneinfonative}

Sets data from an MLWebRTC.VideoSink.Frame.ImagePlane object. 

```csharp
public ImagePlaneInfoNative(
    PlaneInfo planeInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PlaneInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.PlaneInfo.md) |planeInfo|Struct representing an image plane that comes from some captured camera frame. |






-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### BytesPerPixel {#uint-bytesperpixel}

The bytes per pixel of the image plane. 

```csharp

public uint BytesPerPixel;

```






-----------

### Height {#uint-height}

Height of the image plane. 

```csharp

public uint Height;

```






-----------

### ImageDataPtr {#intptr-imagedataptr}

Data of the image plane. 

```csharp

public IntPtr ImageDataPtr;

```






-----------

### Size {#uint-size}

Size of the image plane. 

```csharp

public uint Size;

```






-----------

### Stride {#uint-stride}

The stride of the image plane, representing how many bytes one row of the image plane contains. 

```csharp

public uint Stride;

```






-----------

### Width {#uint-width}

Width of the image plane. 

```csharp

public uint Width;

```






-----------


