---
title: MLCameraMRConnectInfo
summary: structure to encapsulate connection settings for mr capture. 

---

# MLCameraMRConnectInfo




Structure to encapsulate connection settings for MR capture.   





## Public Methods

### [MLCameraMRConnectInfo](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLCamera.NativeBindings.MLCameraMRConnectInfo.md) Create {#mlcameramrconnectinfo-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraMRConnectInfo Create(
    MRConnectInfo connectInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MRConnectInfo](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.MRConnectInfo.md) |connectInfo|Connection settings for MR capture. |






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### FrameRate {#captureframerate-framerate}

capture frame rate 

```csharp

public CaptureFrameRate FrameRate;

```

| Type | Description  | 
|--|--|
| [CaptureFrameRate](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-captureframerate) | Capture Frame Rate Call MLCameraPrepareCapture to configure frame rate use FrameRate&#95;None when configuring only Image capture FrameRate&#95;60fps only supported when resolution of captures &lt;= 1080P.  |





-----------

### MrBlendType {#mrblendtype-mrblendtype}

blending type for mixed reality capture 

```csharp

public MRBlendType MrBlendType;

```

| Type | Description  | 
|--|--|
| [MRBlendType](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-mrblendtype) | Comment Needed!  |





-----------

### MrQuality {#mrquality-mrquality}

MR video quality 

```csharp

public MRQuality MrQuality;

```

| Type | Description  | 
|--|--|
| [MRQuality](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-mrquality) | MR Video Quality enumeration  |





-----------

