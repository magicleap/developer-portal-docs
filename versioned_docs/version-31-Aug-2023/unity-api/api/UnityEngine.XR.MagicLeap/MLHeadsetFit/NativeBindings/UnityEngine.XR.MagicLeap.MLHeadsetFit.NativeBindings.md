---
title: NativeBindings
summary: see ml-headset-fit.h for additional comments. 

---

# NativeBindings




See ml&#95;headset&#95;fit.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLHeadsetFitCreateClient {#mlresultcode-mlheadsetfitcreateclient}

Creates a headset fit client. 

```csharp
public MLResult.Code MLHeadsetFitCreateClient(
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLHeadsetFitDestroyClient {#mlresultcode-mlheadsetfitdestroyclient}

Destroys headset fit client. 

```csharp
public MLResult.Code MLHeadsetFitDestroyClient(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLHeadsetFitGetState {#mlresultcode-mlheadsetfitgetstate}

Gets information about the user's current headset fit. 

```csharp
public MLResult.Code MLHeadsetFitGetState(
    ulong handle,
    out MLHeadsetFitState state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out [MLHeadsetFitState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLHeadsetFit/NativeBindings/UnityEngine.XR.MagicLeap.MLHeadsetFit.NativeBindings.MLHeadsetFitState.md) |state||






-----------


