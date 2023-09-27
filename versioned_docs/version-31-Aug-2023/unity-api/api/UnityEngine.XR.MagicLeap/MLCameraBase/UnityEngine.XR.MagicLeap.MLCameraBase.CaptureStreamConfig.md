---
title: CaptureStreamConfig

---

# CaptureStreamConfig










## Public Methods

### [CaptureStreamConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.CaptureStreamConfig.md) Create {#capturestreamconfig-create}

```csharp
public static CaptureStreamConfig Create(
    StreamCapability streamCapability,
    OutputFormat outputFormat,
    MLNativeSurface recorderSurface =null
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [StreamCapability](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.StreamCapability.md) |streamCapability||
| [OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-outputformat) |outputFormat|Captured output format |
| [MLNativeSurface](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLNativeSurface/UnityEngine.XR.MagicLeap.MLNativeSurface.md) |recorderSurface||






-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### CaptureType {#capturetype-capturetype}

Capture Type 

```csharp

public CaptureType CaptureType;

```

| Type | Description  | 
|--|--|
| [CaptureType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-capturetype) | Capture operation type  |





-----------

### Height {#int-height}

Resolution height 

```csharp

public int Height;

```






-----------

### OutputFormat {#outputformat-outputformat}

output Format 

```csharp

public OutputFormat OutputFormat;

```

| Type | Description  | 
|--|--|
| [OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-outputformat) | Captured output format  |





-----------

### Surface {#mlnativesurface-surface}

Media recorder surface, only valid for capture type video &#42; set to ML&#95;INVALID&#95;HANDLE for yuv/rgba video capture 

```csharp

public MLNativeSurface Surface;

```






-----------

### Width {#int-width}

Capture Resolution 

```csharp

public int Width;

```






-----------


