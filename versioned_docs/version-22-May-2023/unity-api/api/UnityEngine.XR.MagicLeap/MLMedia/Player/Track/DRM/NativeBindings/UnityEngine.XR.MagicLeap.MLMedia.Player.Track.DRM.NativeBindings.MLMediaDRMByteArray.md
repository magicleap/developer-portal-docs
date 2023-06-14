---
title: MLMediaDRMByteArray
summary: data type containing byte array buffer and the size. 

---

# MLMediaDRMByteArray




Data type containing byte array buffer and the size.   





## Public Fields

### Bytes {#byte-bytes}

```csharp

public byte [] Bytes { get; set; }

```






-----------

## Public Methods

### void AllocResources {#void-allocresources}

```csharp
public void AllocResources(
    byte [] data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |data||






-----------

### void FreeResources {#void-freeresources}

```csharp
public void FreeResources()
```






-----------

## Public Attributes

### Data {#intptr-data}

Byte array buffer. 

```csharp

public IntPtr Data;

```






-----------

### Length {#ulong-length}

Size of Data. 

```csharp

public ulong Length;

```






-----------


