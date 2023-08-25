---
title: MLOcclusion

---

# MLOcclusion



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 





Inherits from: <br></br>[MLAutoAPISingleton< MLOcclusion >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)




## Public Methods

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) GetLatestMesh {#mlresultcode-getlatestmesh}

```csharp
public static MLResult.Code GetLatestMesh(
    out OcclusionMesh mesh
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [OcclusionMesh](/unity-api/api/UnityEngine.XR.MagicLeap/MLOcclusion/UnityEngine.XR.MagicLeap.MLOcclusion.OcclusionMesh.md) |mesh||






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) UpdateSettings {#mlresultcode-updatesettings}

```csharp
public static MLResult.Code UpdateSettings(
    in Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLOcclusion/UnityEngine.XR.MagicLeap.MLOcclusion.Settings.md) |settings||






-----------

## Protected Methods

### StartAPI {#override-startapi}

Do API-specific creation/initialization of ML resources for this API, such as creating trackers, etc. Called automatically the first time  Instance  is accessed. Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StartAPI()
```




**Reimplements**: [StartAPI](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

API-specific cleanup. Will be called whenever [MLDevice](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md) is destroyed (at the latest, when the application is shutting down). Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

