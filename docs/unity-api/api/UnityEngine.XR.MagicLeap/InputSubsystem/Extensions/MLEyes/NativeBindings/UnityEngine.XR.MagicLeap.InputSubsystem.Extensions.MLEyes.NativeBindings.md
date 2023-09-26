---
title: NativeBindings

---

# NativeBindings










## Public Methods

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLEyeTrackingGetStaticData {#mlresultcode-mleyetrackinggetstaticdata}

Gets static information about the eye tracker 

```csharp
public MLResult.Code MLEyeTrackingGetStaticData(
    ulong handle,
    ref MLEyeTrackingStaticData outData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|A handle to an Eye Tracker retrievced from GetEyeTrackerHandle()|
| ref [MLEyeTrackingStaticData](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/NativeBindings/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.NativeBindings.MLEyeTrackingStaticData.md) |outData|Target to populate the data about the eye tracker|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if the out&#95;data param was not valid (null). [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if eye tracking static data was successfully received. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed to retrieve eye tracking static data. 



-----------

### bool TryGetTrackingState {#bool-trygettrackingstate}

```csharp
public static bool TryGetTrackingState(
    InputDevice eyesDevice,
    out State state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |eyesDevice||
| out [State](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.State.md) |state||






-----------

