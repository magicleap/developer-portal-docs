---
title: StateEx
summary: a structure containing information on the current state of the head tracking system. 

---

# StateEx




A structure containing information on the current state of the Head Tracking system.   





## Public Attributes

### Confidence {#readonly-float-confidence}

A confidence value (from 0..1) representing the confidence in the current pose estimation. 

```csharp

public readonly float Confidence;

```






-----------

### Error {#readonly-uint-error}

Represents what tracking error (if any) is present. 

```csharp

public readonly uint Error;

```






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

### Version {#readonly-uint-version}

Version of this structure. 

```csharp

public readonly uint Version;

```






-----------

