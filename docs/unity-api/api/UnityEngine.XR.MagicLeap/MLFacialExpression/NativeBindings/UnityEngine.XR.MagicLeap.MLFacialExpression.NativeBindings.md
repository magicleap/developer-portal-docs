---
title: NativeBindings
summary: see ml-facial-expression.h for additional comments. 

---

# NativeBindings




See ml&#95;facial&#95;expression.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLFacialExpressionCreateClient {#mlresultcode-mlfacialexpressioncreateclient}

Creates a Facial Expression Client handle. Although multiple client handles can be created they all represent the same facial expressions backend system. 

```csharp
public MLResult.Code MLFacialExpressionCreateClient(
    ref MLFacialExpressionSettings settings,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLFacialExpressionSettings](/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/NativeBindings/UnityEngine.XR.MagicLeap.MLFacialExpression.NativeBindings.MLFacialExpressionSettings.md) |settings|[Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/UnityEngine.XR.MagicLeap.MLFacialExpression.Settings.md) that configures the facial expressions system. |
| out ulong |handle|The handle to be created. |


**Details**

API Level 29

permissions com.magicleap.permission.FACIAL&#95;EXPRESSION (protection level: dangerous) 





**Returns**: [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam): One or more input parameters are not valid.
[MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok): Facial expressions client was successfully created.
[MLResult.Code.PerceptionSystemNotStarted](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-perceptionsystemnotstarted): Perception System has not been started.
[MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied): Necessary permission is missing. 
[MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure): Operation failed for unknown reason. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLFacialExpressionDestroyClient {#mlresultcode-mlfacialexpressiondestroyclient}

Destroy client handle and free client resources. 

```csharp
public MLResult.Code MLFacialExpressionDestroyClient(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Facial expression client handle created by MLFacialExpressionCreateClient. |


**Details**

API Level 29

permissions None 





**Returns**: [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam): One or more input parameters are not valid.
[MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok): Client handle was successfully destroyed.
[MLResult.Code.PerceptionSystemNotStarted](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-perceptionsystemnotstarted): Perception System has not been started.
[MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure): Operation failed for unknown reason. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLFacialExpressionGetEyeData {#mlresultcode-mlfacialexpressiongeteyedata}

Get facial expressions data. handle Facial expression client handle created by MLFacialExpressionCreateClient. 

```csharp
public MLResult.Code MLFacialExpressionGetEyeData(
    ulong handle,
    out MLFacialExpressionEyeData eye&#95;data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Facial expressions client handle created by MLFacialExpressionCreateClient. |
| out [MLFacialExpressionEyeData](/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/NativeBindings/UnityEngine.XR.MagicLeap.MLFacialExpression.NativeBindings.MLFacialExpressionEyeData.md) |out&#95;eye&#95;data|Eye expressions data. |


**Details**

API Level 29

permissions None 





**Returns**: [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam): One or more input parameters are not valid.
[MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok): Facial expressions data was retrieved successfully.
[MLResult.Code.PerceptionSystemNotStarted](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-perceptionsystemnotstarted): Perception System has not been started.
[MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure): Operation failed for unknown reason. 
[MLResult.Code.HeadsetFitIssue](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-headsetfitissue): Operation failed because unable to detect the eyes, check MLHeadsetFitStatus. 



-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLFacialExpressionUpdateSettings {#mlresultcode-mlfacialexpressionupdatesettings}

Update the Facial Expression system with new settings 

```csharp
public MLResult.Code MLFacialExpressionUpdateSettings(
    ulong handle,
    in MLFacialExpressionSettings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Handle Facial expressions client handle created by MLFacialExpressionCreateClient. |
| in [MLFacialExpressionSettings](/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/NativeBindings/UnityEngine.XR.MagicLeap.MLFacialExpression.NativeBindings.MLFacialExpressionSettings.md) |settings|[Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/UnityEngine.XR.MagicLeap.MLFacialExpression.Settings.md) New Facial Expression settings.. |


**Details**

API Level 29

permissions None 





**Returns**: [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam): One or more input parameters are not valid.
[MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok): Facial expression settings was updated successfully.
[MLResult.Code.PerceptionSystemNotStarted](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-perceptionsystemnotstarted): Perception System has not been started.
[MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure): Operation failed for unknown reason. 



-----------

