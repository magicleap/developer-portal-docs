---
title: State
summary: a structure containing information on the current state of the head tracking system. 

---

# State




A structure containing information on the current state of the Head Tracking system.   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### Confidence {#readonly-float-confidence}

A confidence value (from 0..1) representing the confidence in the current pose estimation. 

```csharp

public readonly float Confidence;

```






-----------

### Error {#readonly-error}

Represents what tracking error (if any) is present. 

```csharp

public readonly TrackingError Error;

```

| Type | Description  | 
|--|--|
| readonly [TrackingError](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md#enums-trackingerror) | A set of possible error conditions that can cause Head Tracking to be less than ideal.  |





-----------

### Mode {#readonly-mode}

What tracking mode the Head Tracking system is currently in. 

```csharp

public readonly TrackingMode Mode;

```

| Type | Description  | 
|--|--|
| readonly [TrackingMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md#enums-trackingmode) | A set of possible tracking modes the Head Tracking system can be in.  |





-----------


