---
title: StateEx
summary: a structure containing information on the current state of the head tracking system. 

---

# StateEx




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

public readonly TrackingErrorFlag Error;

```

| Type | Description  | 
|--|--|
| readonly [TrackingErrorFlag](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md#enums-trackingerrorflag) | A set of possible error conditions that can cause Head Tracking to be less than ideal.  |





-----------

### Status {#readonly-status}

Current status of the Head Tracking system. 

```csharp

public readonly HeadTrackingStatus Status;

```

| Type | Description  | 
|--|--|
| readonly [HeadTrackingStatus](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md#enums-headtrackingstatus) | A set of possible tracking status for the Head Tracking system.  |





-----------

