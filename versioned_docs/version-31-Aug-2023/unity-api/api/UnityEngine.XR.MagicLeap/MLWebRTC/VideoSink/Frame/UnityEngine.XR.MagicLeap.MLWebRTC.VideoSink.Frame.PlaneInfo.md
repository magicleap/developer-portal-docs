---
title: PlaneInfo
summary: struct representing an image plane that comes from some captured camera frame. 

---

# PlaneInfo




Struct representing an image plane that comes from some captured camera frame.   





## Public Fields

### BytesPerPixel {#uint-bytesperpixel}

Gets the bytes per pixel of the image plane. 

```csharp

public uint BytesPerPixel { get; set; }

```






-----------

### DataPtr {#intptr-dataptr}

Gets the pointer to the unmanaged memory where the actual image data is found. 

```csharp

public IntPtr DataPtr { get; set; }

```






-----------

### Height {#uint-height}

Gets the height of the image plane. 

```csharp

public uint Height { get; set; }

```






-----------

### Size {#uint-size}

Gets the size of the image plane, representing how many bytes in total the entire image plane contains. 

```csharp

public uint Size { get; set; }

```






-----------

### Stride {#uint-stride}

Gets the stride of the image plane, representing how many bytes one row of the image plane contains. 

```csharp

public uint Stride { get; set; }

```






-----------

### Width {#uint-width}

Gets the width of the image plane. 

```csharp

public uint Width { get; set; }

```






-----------

## Public Methods

### [PlaneInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.PlaneInfo.md) Create {#planeinfo-create}

Creates and returns an initialized version of this struct. 

```csharp
public static PlaneInfo Create(
    uint width,
    uint height,
    uint stride,
    uint bytesPerPixel,
    uint size,
    IntPtr dataPtr
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |width|Width of the image plane.|
| uint |height|Height of the image plane.|
| uint |stride|Stride of the image plane.|
| uint |bytesPerPixel|Bytes per pixel of the image plane.|
| uint |size|Size of the image plane.|
| IntPtr |dataPtr|Pointer to the image data for the image plane.|






**Returns**: An initialized version of this struct.



-----------

### override string ToString {#override-string-tostring}

Override to display the contents of a image plane as a string. 

```csharp
public override string ToString()
```






**Returns**: A string representation of this struct.



-----------

## Public Attributes

### MaxImagePlanes {#const-int-maximageplanes}

Max amount of image planes that can be in a single frame. 

```csharp

public const int MaxImagePlanes = 3;

```






-----------


