---
title: MLCameraPlaneInfo
summary: per plane info for captured output 

---

# MLCameraPlaneInfo




Per plane info for captured output   





## Public Methods

### [MLCameraPlaneInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraPlaneInfo.md) Create {#mlcameraplaneinfo-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraPlaneInfo Create()
```






**Returns**: Returns a new MLCamera.PlaneInfo structure.



-----------

### [MLCamera.PlaneInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.PlaneInfo.md) CreatePlaneInfo {#mlcameraplaneinfo-createplaneinfo}

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

## Public Attributes

### BytesPerPixel {#uint-bytesperpixel}

Number of bytes used to represent a pixel 

```csharp

public uint BytesPerPixel;

```






-----------

### Data {#intptr-data}

Image data 

```csharp

public IntPtr Data;

```






-----------

### Height {#uint-height}

Height of the output image in pixels 

```csharp

public uint Height;

```






-----------

### PixelsStride {#uint-pixelsstride}

```csharp

public uint PixelsStride;

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

### Version {#uint-version}

version contains the version number for this structure. 

```csharp

public uint Version;

```






-----------

### Width {#uint-width}

Width of the output image in pixels 

```csharp

public uint Width;

```






-----------


