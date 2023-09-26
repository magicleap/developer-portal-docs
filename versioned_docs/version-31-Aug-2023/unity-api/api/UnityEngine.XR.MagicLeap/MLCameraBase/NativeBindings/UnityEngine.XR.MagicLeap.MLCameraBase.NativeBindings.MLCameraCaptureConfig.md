---
title: MLCameraCaptureConfig
summary: structure to encapsulate capture configuration 

---

# MLCameraCaptureConfig




Structure to encapsulate capture configuration   





## Public Methods

### [MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraCaptureConfig.md) Create {#mlcameracaptureconfig-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraCaptureConfig Create()
```






**Returns**: A new instance of this struct.



-----------

### [MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraCaptureConfig.md) Create {#mlcameracaptureconfig-create}

Create and initialize this native struct based on values exposed in MLCamera.MLCameraCaptureConfig   . 

```csharp
public static MLCameraCaptureConfig Create(
    MLCamera.CaptureConfig config
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.CaptureConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.CaptureConfig.md) |config||






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### CaptureFrameRate {#mlcameracaptureframerate-captureframerate}

capture frame rate 

```csharp

public MLCamera.CaptureFrameRate CaptureFrameRate;

```

| Type | Description  | 
|--|--|
| [MLCamera.CaptureFrameRate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-captureframerate) | Capture Frame Rate Call MLCameraPrepareCapture to configure frame rate use FrameRate&#95;None when configuring only Image capture FrameRate&#95;60fps only supported when resolution of captures &lt;= 1080P.  |





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
| [MLCameraCaptureStreamConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraCaptureStreamConfig.md) [] | Structure to encapsulate stream configurations  |





-----------

### Version {#uint-version}

version contains the version number for this structure. 

```csharp

public uint Version;

```






-----------


