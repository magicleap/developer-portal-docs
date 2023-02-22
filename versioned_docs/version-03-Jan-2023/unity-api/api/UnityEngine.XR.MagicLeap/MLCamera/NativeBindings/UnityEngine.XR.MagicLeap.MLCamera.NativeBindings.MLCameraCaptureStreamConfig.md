---
title: MLCameraCaptureStreamConfig
summary: structure to encapsulate stream configurations 

---

# MLCameraCaptureStreamConfig




Structure to encapsulate stream configurations   





## Public Methods

### [MLCameraCaptureStreamConfig](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLCamera.NativeBindings.MLCameraCaptureStreamConfig.md) Create {#mlcameracapturestreamconfig-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraCaptureStreamConfig Create()
```






**Returns**: A new instance of this struct.



-----------

### [MLCameraCaptureStreamConfig](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLCamera.NativeBindings.MLCameraCaptureStreamConfig.md) Create {#mlcameracapturestreamconfig-create}

```csharp
public static MLCameraCaptureStreamConfig Create(
    MLCamera.CaptureStreamConfig config
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.CaptureStreamConfig](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.CaptureStreamConfig.md) |config||






-----------

## Public Attributes

### CaptureType {#capturetype-capturetype}

capture&#95;type Image Preview 

```csharp

public CaptureType CaptureType;

```

| Type | Description  | 
|--|--|
| [CaptureType](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-capturetype) | Capture operation type  |





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

### OutputFormat {#outputformat-outputformat}

output Format 

```csharp

public OutputFormat OutputFormat;

```

| Type | Description  | 
|--|--|
| [OutputFormat](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-outputformat) | Captured output format  |





-----------

### Width {#int-width}

Capture Resolution 

```csharp

public int Width;

```






-----------

