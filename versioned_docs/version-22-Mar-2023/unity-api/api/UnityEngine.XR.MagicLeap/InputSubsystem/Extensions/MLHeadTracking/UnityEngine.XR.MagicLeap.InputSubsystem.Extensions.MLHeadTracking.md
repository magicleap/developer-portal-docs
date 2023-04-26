---
title: MLHeadTracking

---

# MLHeadTracking










## Public Methods

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
| out [MapEvents](/versioned_docs/version-22-Mar-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md#enums-mapevents) |mapEvents|A set of all types of map events that can occur that a developer may have to handle. |






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
| out [State](/versioned_docs/version-22-Mar-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.State.md) |headTrackingState|A structure containing information on the current state of the Head Tracking system. |






-----------

## Public Enums

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

### TrackingMode {#enums-trackingmode}

A set of possible tracking modes the Head Tracking system can be in. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Mode6DOF | | Full 6 degrees of freedom tracking (position and orientation).   |
| ModeUnavailable | | Head tracking is unavailable.   |








-----------


