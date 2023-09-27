---
title: MLCameraMRConnectInfo
summary: structure to encapsulate connection settings for mr capture. 

---

# MLCameraMRConnectInfo




Structure to encapsulate connection settings for MR capture.   





## Public Methods

### [MLCameraMRConnectInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraMRConnectInfo.md) Create {#mlcameramrconnectinfo-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraMRConnectInfo Create(
    MLCamera.MRConnectInfo connectInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.MRConnectInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.MRConnectInfo.md) |connectInfo|Connection settings for MR capture. |






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### FrameRate {#mlcameracaptureframerate-framerate}

capture frame rate 

```csharp

public MLCamera.CaptureFrameRate FrameRate;

```

| Type | Description  | 
|--|--|
| [MLCamera.CaptureFrameRate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-captureframerate) | Capture Frame Rate Call MLCameraPrepareCapture to configure frame rate use FrameRate&#95;None when configuring only Image capture FrameRate&#95;60fps only supported when resolution of captures &lt;= 1080P.  |





-----------

### MrBlendType {#mlcameramrblendtype-mrblendtype}

blending type for mixed reality capture 

```csharp

public MLCamera.MRBlendType MrBlendType;

```

| Type | Description  | 
|--|--|
| [MLCamera.MRBlendType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-mrblendtype) | Comment Needed!  |





-----------

### MrQuality {#mlcameramrquality-mrquality}

MR video quality 

```csharp

public MLCamera.MRQuality MrQuality;

```

| Type | Description  | 
|--|--|
| [MLCamera.MRQuality](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-mrquality) | MR Video Quality enumeration  |





-----------


