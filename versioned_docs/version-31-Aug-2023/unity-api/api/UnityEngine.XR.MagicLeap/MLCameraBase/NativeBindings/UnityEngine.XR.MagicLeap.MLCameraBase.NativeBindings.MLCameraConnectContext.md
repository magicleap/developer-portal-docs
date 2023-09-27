---
title: MLCameraConnectContext
summary: structure to encapsulate context for a cameraconnect request. 

---

# MLCameraConnectContext




Structure to encapsulate context for a CameraConnect Request.   





## Public Methods

### [MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraConnectContext.md) Create {#mlcameraconnectcontext-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraConnectContext Create(
    MLCamera.ConnectContext cameraContext
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCamera.ConnectContext](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ConnectContext.md) |cameraContext|Camera connection settings. |






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### CamId {#mlcameraidentifier-camid}

logical camera idenitifier 

```csharp

public MLCamera.Identifier CamId;

```

| Type | Description  | 
|--|--|
| [MLCamera.Identifier](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-identifier) | Logical Camera identifiers available for access.  |





-----------

### EnableVideoStab {#bool-enablevideostab}

Video Stabilization enable/disable 1 - enable 0 - disabled 

```csharp

public bool EnableVideoStab;

```






-----------

### Flags {#mlcameraconnectflag-flags}

The Context in which the camera should operate in. 

```csharp

public MLCamera.ConnectFlag Flags;

```

| Type | Description  | 
|--|--|
| [MLCamera.ConnectFlag](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-connectflag) | Flags to describe various modules in camera pipeline.  |





-----------

### MrInfo {#mlcameramrconnectinfo-mrinfo}

MR capture connection settings 

```csharp

public MLCameraMRConnectInfo MrInfo;

```

| Type | Description  | 
|--|--|
| [MLCameraMRConnectInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraMRConnectInfo.md) | Structure to encapsulate connection settings for MR capture.  |





-----------

### Version {#uint-version}

version contains the version number for this structure. 

```csharp

public uint Version;

```






-----------


