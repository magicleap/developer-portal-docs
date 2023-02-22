---
title: MLCameraConnectContext
summary: structure to encapsulate context for a cameraconnect request. 

---

# MLCameraConnectContext




Structure to encapsulate context for a CameraConnect Request.   





## Public Methods

### [MLCameraConnectContext](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLCamera.NativeBindings.MLCameraConnectContext.md) Create {#mlcameraconnectcontext-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraConnectContext Create(
    ConnectContext cameraContext
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ConnectContext](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ConnectContext.md) |cameraContext|Camera connection settings. |






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### CamId {#identifier-camid}

logical camera idenitifier 

```csharp

public Identifier CamId;

```

| Type | Description  | 
|--|--|
| [Identifier](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-identifier) | Logical Camera identifiers available for access.  |





-----------

### EnableVideoStab {#bool-enablevideostab}

Video Stabilization enable/disable 1 - enable 0 - disabled 

```csharp

public bool EnableVideoStab;

```






-----------

### Flags {#connectflag-flags}

The Context in which the camera should operate in. 

```csharp

public ConnectFlag Flags;

```

| Type | Description  | 
|--|--|
| [ConnectFlag](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-connectflag) | Flags to describe various modules in camera pipeline.  |





-----------

### MrInfo {#mlcameramrconnectinfo-mrinfo}

MR capture connection settings 

```csharp

public MLCameraMRConnectInfo MrInfo;

```

| Type | Description  | 
|--|--|
| [MLCameraMRConnectInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLCamera.NativeBindings.MLCameraMRConnectInfo.md) | Structure to encapsulate connection settings for MR capture.  |





-----------

### Version {#uint-version}

version contains the version number for this structure. 

```csharp

public uint Version;

```






-----------

