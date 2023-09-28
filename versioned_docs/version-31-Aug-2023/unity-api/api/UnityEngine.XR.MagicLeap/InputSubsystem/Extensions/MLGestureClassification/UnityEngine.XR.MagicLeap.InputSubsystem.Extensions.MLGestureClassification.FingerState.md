---
title: FingerState
summary: gesture classification state of a single finger. 

---

# FingerState




Gesture classification state of a single finger.   





## Public Attributes

### AngleToPalm {#float-angletopalm}

Absolute angle to palm (angular). -1.0 if the value is not valid. 

```csharp

public float AngleToPalm;

```






-----------

### IsExtended {#bool-isextended}

State of finger. 

```csharp

public bool IsExtended;

```






-----------

### LengthM {#float-lengthm}

Finger length in meters. 

```csharp

public float LengthM;

```






-----------

### NormalizedExtension {#float-normalizedextension}

State of finger extension range 0.0 to 1.0. (0.0 folded, 1.0 fully extended) 

```csharp

public float NormalizedExtension;

```






-----------

### PostureData {#posturefingerdata-posturedata}

Gesture classification posture related finger data. 

```csharp

public PostureFingerData PostureData;

```

| Type | Description  | 
|--|--|
| [PostureFingerData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLGestureClassification/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLGestureClassification.PostureFingerData.md) | Gesture classification posture related finger data.  |





-----------


