---
title: State
summary: information about the state of the gaze recognition system. 

---

# State




Information about the state of the Gaze Recognition system.   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### AmplitudeDeg {#readonly-float-amplitudedeg}

Metadata field for amplitude of the current movement, which is eye-position displacement in degrees of visual angle. Amplitude applies to saccades and pursuit, otherwise NaN. 

```csharp

public readonly float AmplitudeDeg;

```






-----------

### Behavior {#readonly-behavior}

Represents what known gaze Recognition behavior is present. 

```csharp

public readonly Behavior Behavior;

```

| Type | Description  | 
|--|--|
| readonly [Behavior](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGazeRecognition/UnityEngine.XR.MagicLeap.MLGazeRecognition.md#enums-behavior) | A set of mutually-exclusive behaviors that the Gaze Recognition system can report.  |





-----------

### DirectionRadial {#readonly-float-directionradial}

Metadata field for direction of the current movement, in radial degrees (0-360). Direction field applies to saccades and pursuit, otherwise NaN 

```csharp

public readonly float DirectionRadial;

```






-----------

### DurationS {#readonly-float-durations}

Metadata field for duration of the current behavior (gaze type), in seconds. Duration applies to all gaze types 

```csharp

public readonly float DurationS;

```






-----------

### Error {#readonly-error}

Represents what gaze Recognition error (if any) is present. 

```csharp

public readonly Error Error;

```

| Type | Description  | 
|--|--|
| readonly [Error](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGazeRecognition/UnityEngine.XR.MagicLeap.MLGazeRecognition.md#enums-error) | A set of possible error codes that the Gaze Recognition system can report.  |





-----------

### EyeLeft {#readonly-vector2-eyeleft}

A vector for eye-in-skull position of left eye, even if right eye is closed 

```csharp

public readonly Vector2 EyeLeft;

```






-----------

### EyeRight {#readonly-vector2-eyeright}

A vector for eye-in-skull position of right eye, even if left eye is closed. 

```csharp

public readonly Vector2 EyeRight;

```






-----------

### OnsetS {#readonly-float-onsets}

Metadata field for onset of the current behavior, in seconds. Onset applies to all behaviors and marks the time when the current behavior began. 

```csharp

public readonly float OnsetS;

```






-----------

### TimeStamp {#readonly-timestamp}

The timestamp accociated with all data fields in this struct, giving the headset clock. 

```csharp

public readonly MLTime TimeStamp;

```

| Type | Description  | 
|--|--|
| readonly [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) | Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. If [OpenXR](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) is used, [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) is synonymous with the XrTime type.  |





-----------

### VelocityDegps {#readonly-float-velocitydegps}

Metadata field for velocity of the current movement, in degrees per second. Velocity field applies to saccades and pursuit, otherwise NaN 

```csharp

public readonly float VelocityDegps;

```






-----------


