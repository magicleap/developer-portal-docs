---
title: MRConnectInfo
summary: connection settings for mr capture. 

---

# MRConnectInfo




Connection settings for MR capture.   





## Public Methods

### [MRConnectInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.MRConnectInfo.md) Create {#mrconnectinfo-create}

Create and return an initialized version of this struct. 

```csharp
public static MRConnectInfo Create()
```






**Returns**: A new instance of this struct.



-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### FrameRate {#captureframerate-framerate}

capture frame rate 

```csharp

public CaptureFrameRate FrameRate;

```

| Type | Description  | 
|--|--|
| [CaptureFrameRate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-captureframerate) | Capture Frame Rate Call MLCameraPrepareCapture to configure frame rate use FrameRate&#95;None when configuring only Image capture FrameRate&#95;60fps only supported when resolution of captures &lt;= 1080P.  |





-----------

### MRBlendType {#mrblendtype-mrblendtype}

blending type for mixed reality capture 

```csharp

public MRBlendType MRBlendType;

```

| Type | Description  | 
|--|--|
| [MRBlendType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-mrblendtype) | Comment Needed!  |





-----------

### MRQuality {#mrquality-mrquality}

video quality 

```csharp

public MRQuality MRQuality;

```

| Type | Description  | 
|--|--|
| [MRQuality](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-mrquality) | MR Video Quality enumeration  |





-----------


