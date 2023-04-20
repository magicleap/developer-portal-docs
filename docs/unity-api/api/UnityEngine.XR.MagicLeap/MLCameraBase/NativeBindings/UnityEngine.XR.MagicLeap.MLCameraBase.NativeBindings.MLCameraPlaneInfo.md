---
title: MLCameraPlaneInfo
summary: per plane info for captured output 

---

# MLCameraPlaneInfo




Per plane info for captured output   





## Public Methods

### [MLCamera.PlaneInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.PlaneInfo.md) CreatePlaneInfo {#mlcameraplaneinfo-createplaneinfo}

```csharp
public MLCamera.PlaneInfo CreatePlaneInfo(
    bool copyToManagedMemory,
    byte [] byteArrayToUse =null
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |copyToManagedMemory||
| byte [] |byteArrayToUse||






-----------

### [MLCameraPlaneInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraPlaneInfo.md) Create {#mlcameraplaneinfo-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraPlaneInfo Create()
```






**Returns**: Returns a new MLCamera.PlaneInfo structure.



-----------

## Public Attributes

### Width {#uint-width}

Width of the output image in pixels 

```csharp

public uint Width;

```






-----------

### Version {#uint-version}

version contains the version number for this structure. 

```csharp

public uint Version;

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

### PixelsStride {#uint-pixelsstride}

```csharp

public uint PixelsStride;

```






-----------

### Height {#uint-height}

Height of the output image in pixels 

```csharp

public uint Height;

```






-----------

### Data {#intptr-data}

Image data 

```csharp

public IntPtr Data;

```






-----------

### BytesPerPixel {#uint-bytesperpixel}

Number of bytes used to represent a pixel 

```csharp

public uint BytesPerPixel;

```






-----------

