---
title: MLEyes

---

# MLEyes










## Public Methods

### void GetEyeDataInDeviceCoords {#void-geteyedataindevicecoords}

```csharp
public static void GetEyeDataInDeviceCoords(
    out DeviceCenteredEyeData deviceCenteredEyeData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [DeviceCenteredEyeData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.DeviceCenteredEyeData.md) |deviceCenteredEyeData||






-----------

### void GetStaticData {#void-getstaticdata}

```csharp
public static void GetStaticData(
    out StaticData staticData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [StaticData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.StaticData.md) |staticData||






-----------

### void StartTracking {#void-starttracking}

Needs to be called in order to track eyes on the [MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) device. Required to be called only after the user has granted the eye tracking permission. 

```csharp
public static void StartTracking()
```






-----------

### void StopTracking {#void-stoptracking}

```csharp
public static void StopTracking()
```






-----------

### bool TryGetState {#bool-trygetstate}

```csharp
public static bool TryGetState(
    InputDevice eyesDevice,
    out State state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |eyesDevice||
| out [State](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.State.md) |state||






-----------


