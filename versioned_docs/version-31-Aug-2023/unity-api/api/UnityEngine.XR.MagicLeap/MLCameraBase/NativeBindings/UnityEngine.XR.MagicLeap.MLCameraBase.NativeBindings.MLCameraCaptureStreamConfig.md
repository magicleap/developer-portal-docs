---
title: MLCameraCaptureStreamConfig
summary: structure to encapsulate stream configurations 

---

# MLCameraCaptureStreamConfig




Structure to encapsulate stream configurations   





## Public Methods

### [MLCameraCaptureStreamConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraCaptureStreamConfig.md) Create {#mlcameracapturestreamconfig-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraCaptureStreamConfig Create()
```






**Returns**: A new instance of this struct.



-----------

### [MLCameraCaptureStreamConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraCaptureStreamConfig.md) Create {#mlcameracapturestreamconfig-create}

```csharp
public static MLCameraCaptureStreamConfig Create(
    MLCamera.CaptureStreamConfig config
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.CaptureStreamConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.CaptureStreamConfig.md) |config||






-----------

## Public Attributes

### CaptureType {#mlcameracapturetype-capturetype}

capture&#95;type Image Preview 

```csharp

public MLCamera.CaptureType CaptureType;

```

| Type | Description  | 
|--|--|
| [MLCamera.CaptureType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-capturetype) | Capture operation type  |





-----------

### Height {#int-height}

Resolution height 

```csharp

public int Height;

```






-----------

### MediaRecorderSurfaceHandle {#ulong-mediarecordersurfacehandle}

media recorder surface, only valid for capture type video &#42; set to ML&#95;INVALID&#95;HANDLE for yuv/rgba video capture 

```csharp

public ulong MediaRecorderSurfaceHandle;

```






-----------

### OutputFormat {#mlcameraoutputformat-outputformat}

output Format 

```csharp

public MLCamera.OutputFormat OutputFormat;

```

| Type | Description  | 
|--|--|
| [MLCamera.OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-outputformat) | Captured output format  |





-----------

### Width {#int-width}

Capture Resolution 

```csharp

public int Width;

```






-----------


