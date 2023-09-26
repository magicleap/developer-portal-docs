---
title: NativeBindings
summary: see ml-gaze-recognition.h for additional comments. 

---

# NativeBindings




See ml&#95;gaze&#95;recognition.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLGazeRecognitionCreate {#mlresultcode-mlgazerecognitioncreate}

Create Gaze Recognition. 

```csharp
public MLResult.Code MLGazeRecognitionCreate(
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |handle|A pointer to an #MLHandle which will contain a handle to Gaze Recognition. If this operation fails, out&#95;handle will be #ML&#95;INVALID&#95;HANDLE. |






**Returns**:  MLResult&#95;InvalidParam  The out&#95;handle parameter was not valid (null).  MLResult&#95;Ok  Gaze Recognition was successfully created.  MLResult&#95;UnspecifiedFaiure  Gaze Recognition was not created successfully.  MLResult&#95;PermissionDenied 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLGazeRecognitionDestroy {#mlresultcode-mlgazerecognitiondestroy}

Destroy Gaze Recognition. 

```csharp
public MLResult.Code MLGazeRecognitionDestroy(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|A handle to Gaze Recognition created by MLGazeRecognitionCreate()|






**Returns**:  MLResult&#95;Ok  The Gaze Recognition was successfully destroyed.  MLResult&#95;UnspecifiedFailure  The Gaze Recognition was not successfully destroyed.  MLResult&#95;InvalidParam  The Gaze Recognition handle was not valid. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLGazeRecognitionGetState {#mlresultcode-mlgazerecognitiongetstate}

Get information about the user's gaze. 

```csharp
public MLResult.Code MLGazeRecognitionGetState(
    ulong handle,
    ref MLGazeRecognitionState state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|A handle to Gaze Recognition created byvMLGazeRecognitionCreate().|
| ref [MLGazeRecognitionState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGazeRecognition/NativeBindings/UnityEngine.XR.MagicLeap.MLGazeRecognition.NativeBindings.MLGazeRecognitionState.md) |state|Information about the gaze.|






**Returns**:  MLResult&#95;InvalidParam  The state parameter was not valid (null).  MLResult&#95;Ok  gaze Recognition static was successfully received.  MLResult&#95;UnspecifiedFailure  Failed to receive gaze Recognition state data. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLGazeRecognitionGetStaticData {#mlresultcode-mlgazerecognitiongetstaticdata}

Get static information about Gaze Recognition. 

```csharp
public MLResult.Code MLGazeRecognitionGetStaticData(
    ulong handle,
    ref MLGazeRecognitionStaticData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|A handle to Gaze Recognition created by MLGazeRecognitionCreate().|
| ref [MLGazeRecognitionStaticData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGazeRecognition/NativeBindings/UnityEngine.XR.MagicLeap.MLGazeRecognition.NativeBindings.MLGazeRecognitionStaticData.md) |data|Target to populate the data about Gaze Recognition..|






**Returns**:  MLResult&#95;InvalidParam  The data parameter was not valid (null).  MLResult&#95;Ok gaze Recognition  data was successfully received.  MLResult&#95;UnspecifiedFailure  Failed to receive gaze Recognition static data. 



-----------


