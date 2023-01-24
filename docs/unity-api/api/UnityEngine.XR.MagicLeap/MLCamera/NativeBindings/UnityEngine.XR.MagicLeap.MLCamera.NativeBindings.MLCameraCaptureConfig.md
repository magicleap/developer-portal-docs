---
title: MLCameraCaptureConfig
summary: structure to encapsulate capture configuration 

---

# MLCameraCaptureConfig




Structure to encapsulate capture configuration   





## Public Methods

### [MLCameraCaptureConfig](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLCamera.NativeBindings.MLCameraCaptureConfig.md) Create {#mlcameracaptureconfig-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraCaptureConfig Create()
```






**Returns**: A new instance of this struct.



-----------

### [MLCameraCaptureConfig](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLCamera.NativeBindings.MLCameraCaptureConfig.md) Create {#mlcameracaptureconfig-create}

Create and initialize this native struct based on values exposed in MLCamera.MLCameraCaptureConfig   . 

```csharp
public static MLCameraCaptureConfig Create(
    CaptureConfig config
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [CaptureConfig](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.CaptureConfig.md) |config||






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### CaptureFrameRate {#captureframerate-captureframerate}

capture frame rate 

```csharp

public CaptureFrameRate CaptureFrameRate;

```

| Type | Description  | 
|--|--|
| [CaptureFrameRate](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-captureframerate) | Capture Frame Rate Call MLCameraPrepareCapture to configure frame rate use FrameRate&#95;None when configuring only Image capture FrameRate&#95;60fps only supported when resolution of captures &lt;= 1080P.  |





-----------

### NumStreams {#uint-numstreams}

no of capture streams. 

```csharp

public uint NumStreams;

```






-----------

### StreamConfig {#mlcameracapturestreamconfig-streamconfig}

Stream configurations 

```csharp

public MLCameraCaptureStreamConfig [] StreamConfig;

```

| Type | Description  | 
|--|--|
| [MLCameraCaptureStreamConfig](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLCamera.NativeBindings.MLCameraCaptureStreamConfig.md) [] | Structure to encapsulate stream configurations  |





-----------

### Version {#uint-version}

version contains the version number for this structure. 

```csharp

public uint Version;

```






-----------

