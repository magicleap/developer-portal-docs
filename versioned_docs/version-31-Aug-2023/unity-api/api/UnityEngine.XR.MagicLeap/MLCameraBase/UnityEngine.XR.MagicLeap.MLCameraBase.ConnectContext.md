---
title: ConnectContext
summary: camera connection settings. 

---

# ConnectContext




Camera connection settings.   





## Public Methods

### [ConnectContext](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ConnectContext.md) Create {#connectcontext-create}

Create and return an initialized version of this struct. 

```csharp
public static ConnectContext Create()
```






**Returns**: A new instance of this struct.



-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### CamId {#identifier-camid}

logical camera idenitifier 

```csharp

public Identifier CamId;

```

| Type | Description  | 
|--|--|
| [Identifier](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-identifier) | Logical Camera identifiers available for access.  |





-----------

### EnableVideoStabilization {#bool-enablevideostabilization}

Video Stabilization enable/disable, true - enable; false - disabled 

```csharp

public bool EnableVideoStabilization;

```






-----------

### Flags {#connectflag-flags}

The Context in which the camera should operate in. 

```csharp

public ConnectFlag Flags;

```

| Type | Description  | 
|--|--|
| [ConnectFlag](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#enums-connectflag) | Flags to describe various modules in camera pipeline.  |





-----------

### MixedRealityConnectInfo {#mrconnectinfo-mixedrealityconnectinfo}

MR capture connection settings. Ignored for camera only capture. 

```csharp

public MRConnectInfo MixedRealityConnectInfo;

```

| Type | Description  | 
|--|--|
| [MRConnectInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.MRConnectInfo.md) | Connection settings for MR capture.  |





-----------


