---
title: State

---

# State










## Public Attributes

### Error {#readonly-bool-error}

Represents what eye tracking error (if any) is present. 

```csharp

public readonly bool Error;

```






-----------

### FixationConfidence {#readonly-float-fixationconfidence}

A quality metric confidence value 0.0 - 1.0 to indicate accuracy of fixation. 

```csharp

public readonly float FixationConfidence;

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

### Timestamp {#readonly-timestamp}

Timestamp for all the data fields in this struct 

```csharp

public readonly MLTime Timestamp;

```

| Type | Description  | 
|--|--|
| readonly [MLTime](/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) | Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time.  |





-----------

