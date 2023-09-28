---
title: MLTTMLImage
summary: byte data for ttml image cues. 

---

# MLTTMLImage




Byte data for TTML image cues.   





## Public Fields

### Data {#byte-data}

Byte data of the image. 

```csharp

public byte [] Data { get; set; }

```






-----------

### Size {#uint-size}

Image size in bytes. 

```csharp

public uint Size { get; set; }

```






-----------

## Public Methods

### [MLTTMLImage](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.MLTTMLImage.md) Create {#mlttmlimage-create}

Create and return an initialized version of this struct. 

```csharp
public static MLTTMLImage Create()
```






-----------

### [MLTTMLImage](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.MLTTMLImage.md) Create {#mlttmlimage-create}

```csharp
public static MLTTMLImage Create(
    byte [] outBuffer,
    uint imageSize
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |outBuffer||
| uint |imageSize||






-----------


