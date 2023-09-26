---
title: MLGazeRecognitionState
summary: information about the state of the gaze recognition system. this structure must be initialized by calling mlgazerecognitionstateinit before use. 

---

# MLGazeRecognitionState




Information about the state of the Gaze Recognition system. This structure must be initialized by calling MLGazeRecognitionStateInit() before use.   





## Public Methods

###  MLGazeRecognitionState {#functions-mlgazerecognitionstate}

```csharp
public MLGazeRecognitionState(
    uint setVersion
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |setVersion||






-----------

## Public Attributes

### AmplitudeDeg {#readonly-float-amplitudedeg}

Metadata field for amplitude of the current movement, which is eye-position displacement in degrees of visual angle. Amplitude applies to saccades and pursuit, otherwise NaN 

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

Metadata field for duration of the current behavior, in seconds. Duration applies to all gaze types. 

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

### EyeLeft {#readonly-mlvec2f-eyeleft}

A vector for eye-in-skull position of left eye, even if right eye is closed 

```csharp

public readonly MLVec2f EyeLeft;

```






-----------

### EyeRight {#readonly-mlvec2f-eyeright}

A vector for eye-in-skull position of right eye, even if left eye is closed. 

```csharp

public readonly MLVec2f EyeRight;

```






-----------

### OnsetS {#readonly-float-onsets}

Metadata field for onset of the current behavior, in seconds. Onset applies to all behaviors and marks the time when the current behavior began. 

```csharp

public readonly float OnsetS;

```






-----------

### Timestamp {#readonly-long-timestamp}

The timestamp accociated with all data fields in this struct, giving the headset clock. 

```csharp

public readonly long Timestamp;

```






-----------

### VelocityDegps {#readonly-float-velocitydegps}

Metadata field for velocity of the current movement, in degrees per second. Velocity field applies to saccades and pursuit, otherwise NaN 

```csharp

public readonly float VelocityDegps;

```






-----------

### Version {#readonly-uint-version}

Version of this structure. 

```csharp

public readonly uint Version;

```






-----------


