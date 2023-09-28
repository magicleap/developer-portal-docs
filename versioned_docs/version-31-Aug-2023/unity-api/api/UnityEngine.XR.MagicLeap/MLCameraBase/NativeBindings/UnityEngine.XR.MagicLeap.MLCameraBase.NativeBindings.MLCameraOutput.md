---
title: MLCameraOutput
summary: captured output 

---

# MLCameraOutput




Captured output   





## Public Methods

### [MLCameraOutput](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraOutput.md) Create {#mlcameraoutput-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraOutput Create()
```






**Returns**: Returns a new MLCamera.Output structure.



-----------

### [MLCamera.CameraOutput](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.CameraOutput.md) CreateFrameInfo {#mlcameracameraoutput-createframeinfo}

```csharp
public MLCamera.CameraOutput CreateFrameInfo(
    bool copyToManagedMemory,
    byte byteArraysToUse[][] =null
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |copyToManagedMemory||
| byte |byteArraysToUse[][]||






-----------

## Public Attributes

### Format {#mlcameraoutputformat-format}

Supported output format specified by [MLCamera.OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-outputformat)

```csharp

public MLCamera.OutputFormat Format;

```

| Type | Description  | 
|--|--|
| [MLCamera.OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-outputformat) | Captured output format  |





-----------

### PlaneCount {#byte-planecount}

Number of output image planes: 

```csharp

public byte PlaneCount;

```


**Details**



* 1 for compressed output such as JPEG stream,
* 3 for separate color component output such as  YUV/YCbCr/RGB. 





-----------

### Planes {#mlcameraplaneinfo-planes}

Output image plane info. The number of output planes is specified by PlaneCount. 

```csharp

public MLCameraPlaneInfo [] Planes;

```

| Type | Description  | 
|--|--|
| [MLCameraPlaneInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraPlaneInfo.md) [] | Per plane info for captured output  |





-----------

### Version {#uint-version}

version contains the version number for this structure. 

```csharp

public uint Version;

```






-----------


