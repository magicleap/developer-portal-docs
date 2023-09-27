---
title: NativeBindings

---

# NativeBindings










## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLHeadTrackingGetStaticData {#mlresultcode-mlheadtrackinggetstaticdata}

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
| ref [MLHeadTrackingStaticData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/NativeBindings/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.NativeBindings.MLHeadTrackingStaticData.md) |data|Target to populate the data about that Head Tracker|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed to receive static data due to an invalid input parameter. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successfully received static data. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed to receive static data due to an unknown error. 



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
| out [MLHeadTracking.MapEvents](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md#enums-mapevents) |mapEvents|A set of all types of map events that can occur that a developer may have to handle. |






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
| out [MLHeadTracking.State](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.State.md) |state|A structure containing information on the current state of the Head Tracking system. |






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
| out [MLHeadTracking.StateEx](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.StateEx.md) |state|A structure containing information on the current state of the Head Tracking system. |






-----------


