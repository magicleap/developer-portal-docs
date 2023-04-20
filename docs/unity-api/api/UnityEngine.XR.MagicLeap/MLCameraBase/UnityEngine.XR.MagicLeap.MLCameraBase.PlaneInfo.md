---
title: PlaneInfo
summary: contains both the data and information necessary to read the data for a specific buffer in a capture 

---

# PlaneInfo




Contains both the data and information necessary to read the data for a specific buffer in a capture   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

### [PlaneInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.PlaneInfo.md) Create {#planeinfo-create}

Create and return an initialized version of this struct. 

```csharp
public static PlaneInfo Create()
```






**Returns**: Returns a new YUVBuffer structure.



-----------

## Public Attributes

### Width {#uint-width}

Width of the output image in pixels 

```csharp

public uint Width;

```






-----------

### Stride {#uint-stride}

Stride of the output image in pixels 

```csharp

public uint Stride;

```






-----------

### Size {#uint-size}

Number of bytes in the image output data 

```csharp

public uint Size;

```






-----------

### PixelStride {#uint-pixelstride}

Distance between 2 consecutive pixels in bytes. 

```csharp

public uint PixelStride;

```






-----------

### IsValid {#bool-isvalid}

Indicate if this structure contains valid data 

```csharp

public bool IsValid;

```






-----------

### Height {#uint-height}

Height of the output image in pixels 

```csharp

public uint Height;

```






-----------

### DataPtr {#intptr-dataptr}

Pointer to the unmanaged memory where the actual image data is found. Only valid when received via the OnRawVideoFrameAvailableYUV&#95;NativeCallbackThread event. 

```csharp

public IntPtr DataPtr;

```






-----------

### Data {#byte-data}

Image Data (in managed memory) 

```csharp

public byte [] Data;

```






-----------

### BytesPerPixel {#uint-bytesperpixel}

Number of bytes used to represent a pixel 

```csharp

public uint BytesPerPixel;

```






-----------

