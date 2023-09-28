---
title: PlaneInfo
summary: contains both the data and information necessary to read the data for a specific buffer in a capture 

---

# PlaneInfo




Contains both the data and information necessary to read the data for a specific buffer in a capture   





## Public Methods

### [PlaneInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.PlaneInfo.md) Create {#planeinfo-create}

Create and return an initialized version of this struct. 

```csharp
public static PlaneInfo Create()
```






**Returns**: Returns a new YUVBuffer structure.



-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### BytesPerPixel {#uint-bytesperpixel}

Number of bytes used to represent a pixel 

```csharp

public uint BytesPerPixel;

```






-----------

### Data {#byte-data}

Image Data (in managed memory) 

```csharp

public byte [] Data;

```






-----------

### DataPtr {#intptr-dataptr}

Pointer to the unmanaged memory where the actual image data is found. Only valid when received via the OnRawVideoFrameAvailableYUV&#95;NativeCallbackThread event. 

```csharp

public IntPtr DataPtr;

```






-----------

### Height {#uint-height}

Height of the output image in pixels 

```csharp

public uint Height;

```






-----------

### IsValid {#bool-isvalid}

Indicate if this structure contains valid data 

```csharp

public bool IsValid;

```






-----------

### PixelStride {#uint-pixelstride}

Distance between 2 consecutive pixels in bytes. 

```csharp

public uint PixelStride;

```






-----------

### Size {#uint-size}

Number of bytes in the image output data 

```csharp

public uint Size;

```






-----------

### Stride {#uint-stride}

Stride of the output image in pixels 

```csharp

public uint Stride;

```






-----------

### Width {#uint-width}

Width of the output image in pixels 

```csharp

public uint Width;

```






-----------


