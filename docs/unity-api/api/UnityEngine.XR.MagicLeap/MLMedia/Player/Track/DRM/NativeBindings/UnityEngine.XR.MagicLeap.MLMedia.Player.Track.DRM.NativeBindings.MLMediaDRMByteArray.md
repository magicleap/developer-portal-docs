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

### void FreeResources {#void-freeresources}

```csharp
public void FreeResources()
```






-----------

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

## Public Attributes

### Length {#ulong-length}

Size of Data. 

```csharp

public ulong Length;

```






-----------

### Data {#intptr-data}

Byte array buffer. 

```csharp

public IntPtr Data;

```






-----------

