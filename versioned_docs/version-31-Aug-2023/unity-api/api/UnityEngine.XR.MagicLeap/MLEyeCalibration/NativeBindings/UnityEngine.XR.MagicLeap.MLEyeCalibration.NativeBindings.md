---
title: NativeBindings
summary: see ml-eye-calibration.h for additional comments. 

---

# NativeBindings




See ml&#95;eye&#95;calibration.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLEyeCalibrationCreateClient {#mlresultcode-mleyecalibrationcreateclient}

Creates an eye calibration client. 

```csharp
public MLResult.Code MLEyeCalibrationCreateClient(
    out ulong OutHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |OutHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLEyeCalibrationDestroyClient {#mlresultcode-mleyecalibrationdestroyclient}

Destroys an eye calibration client. 

```csharp
public MLResult.Code MLEyeCalibrationDestroyClient(
    ulong Handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLEyeCalibrationGetState {#mlresultcode-mleyecalibrationgetstate}

Gets information about the user's current eye calibration. 

```csharp
public MLResult.Code MLEyeCalibrationGetState(
    ulong Handle,
    out MLEyeCalibrationState OutState
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [MLEyeCalibrationState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCalibration/NativeBindings/UnityEngine.XR.MagicLeap.MLEyeCalibration.NativeBindings.MLEyeCalibrationState.md) |OutState||






-----------


