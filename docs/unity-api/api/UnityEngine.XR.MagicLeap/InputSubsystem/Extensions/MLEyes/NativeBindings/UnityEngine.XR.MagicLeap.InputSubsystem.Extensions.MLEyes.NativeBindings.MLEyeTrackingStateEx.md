---
title: MLEyeTrackingStateEx

---

# MLEyeTrackingStateEx










## Public Methods

### [MLEyeTrackingStateEx](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/NativeBindings/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.NativeBindings.MLEyeTrackingStateEx.md) Init {#mleyetrackingstateex-init}

```csharp
public static MLEyeTrackingStateEx Init()
```






-----------

## Public Attributes

### Error {#readonly-uint-error}

Represents what eye tracking error (if any) is present. 

```csharp

public readonly uint Error;

```






-----------

### LeftBlink {#readonly-bool-leftblink}

  true   if left eye is inside a blink. When not wearing the device, values can be arbitrary. 

```csharp

public readonly bool LeftBlink;

```






-----------

### LeftCenterConfidence {#readonly-float-leftcenterconfidence}

A quality metric confidence value 0.0 - 1.0 to indicate accuracy of left eye center. 

```csharp

public readonly float LeftCenterConfidence;

```






-----------

### LeftEyeOpenness {#readonly-float-lefteyeopenness}

Openness of the left eye   Output is 0.0 - 1.0, with 0.0 being fully closed and 1.0 fully open. 

```csharp

public readonly float LeftEyeOpenness;

```






-----------

### RightBlink {#readonly-bool-rightblink}

  true   if right eye is inside a blink. When not wearing the device, values can be arbitrary. 

```csharp

public readonly bool RightBlink;

```






-----------

### RightCenterConfidence {#readonly-float-rightcenterconfidence}

A quality metric confidence value 0.0 - 1.0 to indicate accuracy of right eye center. 

```csharp

public readonly float RightCenterConfidence;

```






-----------

### RightEyeOpenness {#readonly-float-righteyeopenness}

Openness of the right eye   Output is 0.0 - 1.0, with 0.0 being fully closed and 1.0 fully open. 

```csharp

public readonly float RightEyeOpenness;

```






-----------

### Timestamp {#readonly-long-timestamp}

Timestamp for all the data fields in this struct 

```csharp

public readonly long Timestamp;

```






-----------

### VergenceConfidence {#readonly-float-vergenceconfidence}

A quality metric confidence value 0.0 - 1.0 to indicate accuracy of fixation. 

```csharp

public readonly float VergenceConfidence;

```






-----------

### Version {#readonly-uint-version}

Struct version 

```csharp

public readonly uint Version;

```






-----------

