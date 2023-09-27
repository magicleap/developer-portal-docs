---
title: FrameBuffer
summary: per-plane info for each depth camera frame. 

---

# FrameBuffer




Per-plane info for each depth camera frame.   [More...](#detailed-description)  




## Detailed Description

```csharp
public struct FrameBuffer; 
```


**Details**

API Level 29





-----------



## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### BytesPerUnit {#uint-bytesperunit}

Number of bytes used to represent a single value. 

```csharp

public uint BytesPerUnit;

```






-----------

### Data {#byte-data}

Buffer data. 

```csharp

public byte [] Data;

```






-----------

### Height {#uint-height}

Height of the buffer in pixels. 

```csharp

public uint Height;

```






-----------

### Stride {#uint-stride}

Stride of the buffer in bytes. 

```csharp

public uint Stride;

```






-----------

### Width {#uint-width}

Width of the buffer in pixels. 

```csharp

public uint Width;

```






-----------


