---
title: CameraOutput
summary: planes in a capture number of planes for jpeg and rgba captures  1 number of planes for yuv captures  3 

---

# CameraOutput




Contains the information and data of each of the available buffers/planes in a capture Number of planes for JPEG and RGBA captures = 1 Number of planes for YUV captures = 3   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### Format {#outputformat-format}

```csharp

public OutputFormat Format;

```

| Type | Description  | 
|--|--|
| [OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-outputformat) | Captured output format  |





-----------

### Planes {#planeinfo-planes}

```csharp

public PlaneInfo [] Planes;

```

| Type | Description  | 
|--|--|
| [PlaneInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.PlaneInfo.md) [] | Contains both the data and information necessary to read the data for a specific buffer in a capture  |





-----------


