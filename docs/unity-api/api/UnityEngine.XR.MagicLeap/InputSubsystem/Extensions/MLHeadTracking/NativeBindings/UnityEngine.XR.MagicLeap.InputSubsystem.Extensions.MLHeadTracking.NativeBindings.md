---
title: NativeBindings

---

# NativeBindings










## Public Methods

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLHeadTrackingGetStaticData {#mlresultcode-mlheadtrackinggetstaticdata}

Returns static information about the Head Tracker 

```csharp
public MLResult.Code MLHeadTrackingGetStaticData(
    ulong handle,
    ref MLHeadTrackingStaticData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|A handle to the tracker retireved by GetHeadTrackerHandle()|
| ref [MLHeadTrackingStaticData](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/NativeBindings/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.NativeBindings.MLHeadTrackingStaticData.md) |data|Target to populate the data about that Head Tracker|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed to receive static data due to an invalid input parameter. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successfully received static data. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed to receive static data due to an unknown error. 



-----------

### bool TryGetMapEvents {#bool-trygetmapevents}

```csharp
public static bool TryGetMapEvents(
    InputDevice device,
    out MLHeadTracking.MapEvents mapEvents
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |device||
| out [MLHeadTracking.MapEvents](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md#enums-mapevents) |mapEvents|A set of all types of map events that can occur that a developer may have to handle. |






-----------

### bool TryGetState {#bool-trygetstate}

```csharp
public static bool TryGetState(
    InputDevice device,
    out MLHeadTracking.State state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |device||
| out [MLHeadTracking.State](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.State.md) |state|A structure containing information on the current state of the Head Tracking system. |






-----------

### bool TryGetStateEx {#bool-trygetstateex}

```csharp
public static bool TryGetStateEx(
    InputDevice device,
    out MLHeadTracking.StateEx state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |device||
| out [MLHeadTracking.StateEx](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.StateEx.md) |state|A structure containing information on the current state of the Head Tracking system. |






-----------

