---
title: MLEyeTrackingStateEx

---

# MLEyeTrackingStateEx










## Public Attributes

### VergenceConfidence {#readonly-float-vergenceconfidence}

A quality metric confidence value 0.0 - 1.0 to indicate accuracy of fixation. 

```csharp

public readonly float VergenceConfidence;

```






-----------

### Timestamp {#readonly-long-timestamp}

Timestamp for all the data fields in this struct 

```csharp

public readonly long Timestamp;

```






-----------

### RightCenterConfidence {#readonly-float-rightcenterconfidence}

A quality metric confidence value 0.0 - 1.0 to indicate accuracy of right eye center. 

```csharp

public readonly float RightCenterConfidence;

```






-----------

### RightBlink {#readonly-bool-rightblink}

  true   if right eye is inside a blink. When not wearing the device, values can be arbitrary. 

```csharp

public readonly bool RightBlink;

```






-----------

### LeftCenterConfidence {#readonly-float-leftcenterconfidence}

A quality metric confidence value 0.0 - 1.0 to indicate accuracy of left eye center. 

```csharp

public readonly float LeftCenterConfidence;

```






-----------

### LeftBlink {#readonly-bool-leftblink}

  true   if left eye is inside a blink. When not wearing the device, values can be arbitrary. 

```csharp

public readonly bool LeftBlink;

```






-----------

### Error {#readonly-uint-error}

Represents what eye tracking error (if any) is present. 

```csharp

public readonly uint Error;

```






-----------

