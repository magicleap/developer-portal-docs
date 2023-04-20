---
title: MLWorldCameraFrameBuffer
summary: a structure to encapsulate per plane info for each camera frame. 

---

# MLWorldCameraFrameBuffer




A structure to encapsulate per plane info for each camera frame.   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### Width {#readonly-uint-width}

Width of the output image in pixels. 

```csharp

public readonly uint Width;

```






-----------

### Stride {#readonly-uint-stride}

Stride of the output image in bytes. 

```csharp

public readonly uint Stride;

```






-----------

### Size {#readonly-uint-size}

Number of bytes in the frame. 

```csharp

public readonly uint Size;

```






-----------

### Height {#readonly-uint-height}

Height of the output image in pixels. 

```csharp

public readonly uint Height;

```






-----------

### Data {#readonly-intptr-data}

Buffer data. 

```csharp

public readonly IntPtr Data;

```






-----------

### BytesPerPixel {#readonly-uint-bytesperpixel}

Number of bytes used to represent a pixel. 

```csharp

public readonly uint BytesPerPixel;

```






-----------

