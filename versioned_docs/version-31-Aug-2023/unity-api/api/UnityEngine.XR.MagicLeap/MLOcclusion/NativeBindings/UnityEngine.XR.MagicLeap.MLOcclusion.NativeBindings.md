---
title: NativeBindings
summary: see ml-occlusion.h for additional comments. 

---

# NativeBindings




See ml&#95;occlusion.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLOcclusionCreateClient {#mlresultcode-mlocclusioncreateclient}

```csharp
public MLResult.Code MLOcclusionCreateClient(
    in MLOcclusionSettings settings,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [MLOcclusionSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLOcclusion/NativeBindings/UnityEngine.XR.MagicLeap.MLOcclusion.NativeBindings.MLOcclusionSettings.md) |settings||
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLOcclusionDestroyClient {#mlresultcode-mlocclusiondestroyclient}

```csharp
public MLResult.Code MLOcclusionDestroyClient(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLOcclusionGetLatestMesh {#mlresultcode-mlocclusiongetlatestmesh}

```csharp
public MLResult.Code MLOcclusionGetLatestMesh(
    ulong handle,
    in MLOcclusionMeshQuery mesh&#95;query,
    out MLOcclusionMesh out&#95;mes&#95;data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| in [MLOcclusionMeshQuery](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLOcclusion/NativeBindings/UnityEngine.XR.MagicLeap.MLOcclusion.NativeBindings.MLOcclusionMeshQuery.md) |mesh&#95;query||
| out [MLOcclusionMesh](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLOcclusion/NativeBindings/UnityEngine.XR.MagicLeap.MLOcclusion.NativeBindings.MLOcclusionMesh.md) |out&#95;mes&#95;data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLOcclusionReleaseMesh {#mlresultcode-mlocclusionreleasemesh}

```csharp
public MLResult.Code MLOcclusionReleaseMesh(
    ulong handle,
    out MLOcclusionMesh out&#95;mes&#95;data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out [MLOcclusionMesh](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLOcclusion/NativeBindings/UnityEngine.XR.MagicLeap.MLOcclusion.NativeBindings.MLOcclusionMesh.md) |out&#95;mes&#95;data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLOcclusionUpdateSettings {#mlresultcode-mlocclusionupdatesettings}

```csharp
public MLResult.Code MLOcclusionUpdateSettings(
    ulong handle,
    in MLOcclusionSettings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| in [MLOcclusionSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLOcclusion/NativeBindings/UnityEngine.XR.MagicLeap.MLOcclusion.NativeBindings.MLOcclusionSettings.md) |settings||






-----------


