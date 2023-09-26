---
title: MLHeadTracking

---

# MLHeadTracking










## Public Methods

### void GetStaticData {#void-getstaticdata}

```csharp
public static void GetStaticData(
    out MagicLeapNativeBindings.MLCoordinateFrameUID outUID
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [MagicLeapNativeBindings.MLCoordinateFrameUID](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) |outUID|A unique identifier which represents a coordinate frame. The unique identifier is comprised of two values. |






-----------

### bool TryGetMapEvents {#bool-trygetmapevents}

```csharp
public static bool TryGetMapEvents(
    InputDevice headDevice,
    out MapEvents mapEvents
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |headDevice||
| out [MapEvents](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md#enums-mapevents) |mapEvents|A set of all types of map events that can occur that a developer may have to handle. |






-----------

### bool TryGetState {#bool-trygetstate}

```csharp
public static bool TryGetState(
    InputDevice headDevice,
    out State headTrackingState
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |headDevice||
| out [State](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.State.md) |headTrackingState|A structure containing information on the current state of the Head Tracking system. |






-----------

### bool TryGetStateEx {#bool-trygetstateex}

```csharp
public static bool TryGetStateEx(
    InputDevice headDevice,
    out StateEx headTrackingState
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |headDevice||
| out [StateEx](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.StateEx.md) |headTrackingState|A structure containing information on the current state of the Head Tracking system. |






-----------

## Public Enums

### HeadTrackingStatus {#enums-headtrackingstatus}

A set of possible tracking status for the Head Tracking system. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Invalid | 0| Head tracking is unavailable.   |
| Initializing | 1| Head tracking is initializing.   |
| Relocalizing | 2| Head tracking is relocalizing.   |
| Valid | 100| Valid head tracking data is available.   |








-----------

### MapEvents {#enums-mapevents}

A set of all types of map events that can occur that a developer may have to handle. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Lost | (1 << 0)| Map was lost. It could possibly recover.   |
| Recovered | (1 << 1)| Previous map was recovered.   |
| RecoveryFailed | (1 << 2)| Failed to recover previous map.   |
| NewSession | (1 << 3)| New map session created.   |








-----------

### TrackingError {#enums-trackingerror}

A set of possible error conditions that can cause Head Tracking to be less than ideal. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | | No error, tracking is nominal.   |
| NotEnoughFeatures | | There are not enough features in the environment.   |
| LowLight | | Lighting in the environment is not sufficient to track accurately.   |
| Unknown | | Head tracking failed for an unknown reason.   |








-----------

### TrackingErrorFlag {#enums-trackingerrorflag}

A set of possible error conditions that can cause Head Tracking to be less than ideal. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0| No error, tracking is nominal.   |
| Unknown | 1 << 0| Head tracking failed for an unknown reason.   |
| NotEnoughFeatures | 1 << 1| There are not enough features in the environment.   |
| LowLight | 1 << 2| Lighting in the environment is not sufficient to track accurately.   |
| ExcessiveMotion | 1 << 3| Head tracking failed due to excessive motion.   |








-----------

### TrackingMode {#enums-trackingmode}

A set of possible tracking modes the Head Tracking system can be in. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Mode6DOF | | Full 6 degrees of freedom tracking (position and orientation).   |
| ModeUnavailable | | Head tracking is unavailable.   |








-----------

