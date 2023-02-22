---
title: ConnectContext
summary: camera connection settings. 

---

# ConnectContext




Camera connection settings.   





## Public Methods

### [ConnectContext](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.ConnectContext.md) Create {#connectcontext-create}

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
| [Identifier](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-identifier) | Logical Camera identifiers available for access.  |





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
| [ConnectFlag](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-connectflag) | Flags to describe various modules in camera pipeline.  |





-----------

### MixedRealityConnectInfo {#mrconnectinfo-mixedrealityconnectinfo}

MR capture connection settings. Ignored for camera only capture. 

```csharp

public MRConnectInfo MixedRealityConnectInfo;

```

| Type | Description  | 
|--|--|
| [MRConnectInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.MRConnectInfo.md) | Connection settings for MR capture.  |





-----------

