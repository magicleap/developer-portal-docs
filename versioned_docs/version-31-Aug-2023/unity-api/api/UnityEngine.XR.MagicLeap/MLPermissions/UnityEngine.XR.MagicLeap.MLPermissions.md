---
title: MLPermissions

---

# MLPermissions



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 





Inherits from: <br></br>[MLAutoAPISingleton< MLPermissions >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)




## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) CheckPermission {#mlresult-checkpermission}

```csharp
public static MLResult CheckPermission(
    string permission
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |permission||






-----------

### delegate void OnPermissionDeniedAndDontAskAgainDelegate {#delegate-void-onpermissiondeniedanddontaskagaindelegate}

```csharp
public delegate void OnPermissionDeniedAndDontAskAgainDelegate(
    string permission
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |permission||






-----------

### delegate void OnPermissionDeniedDelegate {#delegate-void-onpermissiondenieddelegate}

```csharp
public delegate void OnPermissionDeniedDelegate(
    string permission
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |permission||






-----------

### delegate void OnPermissionGrantedDelegate {#delegate-void-onpermissiongranteddelegate}

```csharp
public delegate void OnPermissionGrantedDelegate(
    string permission
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |permission||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) RequestPermission {#mlresult-requestpermission}

```csharp
public static MLResult RequestPermission(
    string permission,
    Callbacks callbacks
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |permission||
| [Callbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPermissions/UnityEngine.XR.MagicLeap.MLPermissions.Callbacks.md) |callbacks||






-----------

## Protected Methods

### StartAPI {#override-startapi}

Do API-specific creation/initialization of ML resources for this API, such as creating trackers, etc. Called automatically the first time  Instance  is accessed. Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StartAPI()
```




**Reimplements**: [StartAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

API-specific cleanup. Will be called whenever [MLDevice](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md) is destroyed (at the latest, when the application is shutting down). Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

### Update {#override-void-update}

Update function that will run once per Unity frame. 

```csharp
protected virtual override void Update()
```




**Reimplements**: [Update](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#void-update)



-----------


