---
title: NativeBindings
summary: see ml-facial-expression.h for additional comments. 

---

# NativeBindings




See ml&#95;facial&#95;expression.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLFacialExpressionCreateClient {#mlresultcode-mlfacialexpressioncreateclient}

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
| ref [MLFacialExpressionSettings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/NativeBindings/UnityEngine.XR.MagicLeap.MLFacialExpression.NativeBindings.MLFacialExpressionSettings.md) |settings|Settings that configures the facial expressions system. |
| out ulong |handle|The handle to be created. |


**Details**

API Level 29

permissions com.magicleap.permission.FACIAL&#95;EXPRESSION (protection level: dangerous) 





**Returns**: MLResult.Code.InvalidParam: One or more input parameters are not valid.

 MLResult.Code.Ok: Facial expressions client was successfully created.

 MLResult.Code.PerceptionSystemNotStarted: Perception System has not been started.

 MLResult.Code.PermissionDenied: Necessary permission is missing. 

 MLResult.Code.UnspecifiedFailure: Operation failed for unknown reason. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLFacialExpressionDestroyClient {#mlresultcode-mlfacialexpressiondestroyclient}

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





**Returns**: MLResult.Code.InvalidParam: One or more input parameters are not valid.

 MLResult.Code.Ok: Client handle was successfully destroyed.

 MLResult.Code.PerceptionSystemNotStarted: Perception System has not been started.

 MLResult.Code.UnspecifiedFailure: Operation failed for unknown reason. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLFacialExpressionGetEyeData {#mlresultcode-mlfacialexpressiongeteyedata}

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
| out [MLFacialExpressionEyeData](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/NativeBindings/UnityEngine.XR.MagicLeap.MLFacialExpression.NativeBindings.MLFacialExpressionEyeData.md) |out&#95;eye&#95;data|Eye expressions data. |


**Details**

API Level 29

permissions None





**Returns**: MLResult.Code.InvalidParam: One or more input parameters are not valid.

 MLResult.Code.Ok: Facial expressions data was retrieved successfully.

 MLResult.Code.PerceptionSystemNotStarted: Perception System has not been started.

 MLResult.Code.UnspecifiedFailure: Operation failed for unknown reason. 

 MLResult.Code.HeadsetFitIssue: Operation failed because unable to detect the eyes, check MLHeadsetFitStatus. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLFacialExpressionUpdateSettings {#mlresultcode-mlfacialexpressionupdatesettings}

Update the Facial Expression system with new settings. 

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
| in [MLFacialExpressionSettings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/NativeBindings/UnityEngine.XR.MagicLeap.MLFacialExpression.NativeBindings.MLFacialExpressionSettings.md) |settings|Settings New Facial Expression settings.. |


**Details**

API Level 29

permissions None 





**Returns**: MLResult.Code.InvalidParam: One or more input parameters are not valid.

 MLResult.Code.Ok: Facial expression settings was updated successfully.

 MLResult.Code.PerceptionSystemNotStarted: Perception System has not been started.

 MLResult.Code.UnspecifiedFailure: Operation failed for unknown reason. 



-----------


