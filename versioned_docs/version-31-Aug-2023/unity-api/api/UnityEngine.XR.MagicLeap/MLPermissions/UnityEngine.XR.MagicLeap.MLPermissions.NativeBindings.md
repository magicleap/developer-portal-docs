---
title: NativeBindings
summary: permissions nativebindings are only used when running in the editor with magic leap app simulator 

---

# NativeBindings




Permissions NativeBindings are only used when running in the Editor with Magic Leap App Simulator   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLZIPermissionsIsGranted {#mlresultcode-mlzipermissionsisgranted}

Queries whther or not the application has been granted the given permission.    see [https://developer.android.com/training/permissions/requesting](https://developer.android.com/training/permissions/requesting)

```csharp
public MLResult.Code MLZIPermissionsIsGranted(
    string permissionName
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |permissionName|The name of the permission to query.|






**Returns**:  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  The permissionName parameter is not valid (or null)

 [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  The permission is granted.

 [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  The permission is denied.

 [MLResult.Code.Pending](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending)  The permission request has not been resolved.

 [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  There was an unknown error.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLZIPermissionsRequest {#mlresultcode-mlzipermissionsrequest}

Request the given permission asynchronously (non-blocking).   Client code can poll the permission state to see if the permission was granted, denied or still pending.    see [https://developer.android.com/training/permissions/requesting](https://developer.android.com/training/permissions/requesting)

```csharp
public MLResult.Code MLZIPermissionsRequest(
    string permissionName
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |permissionName|The name of the permission to request.|






**Returns**:  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  The permission&#95;name parameter is not valid (or null).

 [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  The query was successful.

 [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  There was an unknown error.



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLZIPermissionsStart {#mlresultcode-mlzipermissionsstart}

Start the ZI permissions-checking subsystem. This function should be called before any permissions-checking functions are called while running in the Editor. 

```csharp
public MLResult.Code MLZIPermissionsStart()
```






**Returns**:  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the permission system startup succeeded.

 [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if the permission system failed to startup. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLZIPermissionsStop {#mlresultcode-mlzipermissionsstop}

Stop the ZI permissions system. Call to clean up the ZI permission system at application termination. 

```csharp
public MLResult.Code MLZIPermissionsStop()
```






**Returns**:  MLResult.Code.OK  if the stop was successful.

 [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if the permissions system failed to stop. 



-----------


