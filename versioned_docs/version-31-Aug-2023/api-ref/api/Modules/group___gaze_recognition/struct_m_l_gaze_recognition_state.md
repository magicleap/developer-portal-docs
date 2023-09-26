---
title: MLGazeRecognitionState
summary: information about the state of the gaze recognition system. this structure must be initialized by calling mlgazerecognitionstateinit before use. 

---

# MLGazeRecognitionState

**Module:** **[Gaze Recognition](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md)**



Information about the state of the Gaze Recognition system. This structure must be initialized by calling [MLGazeRecognitionStateInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstateinit) before use.  [More...](#detailed-description)


`#include <ml_gaze_recognition.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#uint32-t-version)**  |
| [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[timestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mltime-timestamp)**  |
| [MLGazeRecognitionError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionerror) | **[error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlgazerecognitionerror-error)**  |
| [MLGazeRecognitionBehavior](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionbehavior) | **[behavior](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlgazerecognitionbehavior-behavior)**  |
| [MLVec2f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec2f.md) | **[eye_left](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlvec2f-eye-left)**  |
| [MLVec2f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec2f.md) | **[eye_right](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlvec2f-eye-right)**  |
| float | **[onset_s](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-onset-s)**  |
| float | **[duration_s](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-duration-s)**  |
| float | **[velocity_degps](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-velocity-degps)**  |
| float | **[amplitude_deg](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-amplitude-deg)**  |
| float | **[direction_radial](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-direction-radial)**  |

## Detailed Description

```cpp
struct MLGazeRecognitionState;
```

Information about the state of the Gaze Recognition system. This structure must be initialized by calling [MLGazeRecognitionStateInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstateinit) before use. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### timestamp {#mltime-timestamp}

```cpp
MLTime timestamp;
```


The timestamp accociated with all data fields in this struct. 





-----------

### error {#mlgazerecognitionerror-error}

```cpp
MLGazeRecognitionError error;
```



| Type | Description |
|--|--|
| [MLGazeRecognitionError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionerror) | A set of possible error codes that the Gaze Recognition system can report.  |


Represents what gaze Recognition error (if any) is present. 





-----------

### behavior {#mlgazerecognitionbehavior-behavior}

```cpp
MLGazeRecognitionBehavior behavior;
```



| Type | Description |
|--|--|
| [MLGazeRecognitionBehavior](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionbehavior) | A set of mutually-exclusive behaviors that the Gaze Recognition system can report.  |


Represents what known gaze Recognition behavior is present. 





-----------

### eye_left {#mlvec2f-eye-left}

```cpp
MLVec2f eye_left;
```


A vector for eye-in-skull position of left eye, even if right eye is closed. 





-----------

### eye_right {#mlvec2f-eye-right}

```cpp
MLVec2f eye_right;
```


A vector for eye-in-skull position of right eye, even if left eye is closed. 





-----------

### onset_s {#float-onset-s}

```cpp
float onset_s;
```


Metadata field for onset of the current behavior, in seconds. Onset applies to all behaviors and marks the time when the current behavior began. 





-----------

### duration_s {#float-duration-s}

```cpp
float duration_s;
```


Metadata field for duration of the current behavior, in seconds. Duration applies to all gaze types. 





-----------

### velocity_degps {#float-velocity-degps}

```cpp
float velocity_degps;
```


Metadata field for velocity of the current movement, in degrees per second. Velocity field applies to saccades and pursuit, otherwise NaN. 





-----------

### amplitude_deg {#float-amplitude-deg}

```cpp
float amplitude_deg;
```


Metadata field for amplitude of the current movement, which is eye-position displacement in degrees of visual angle. Amplitude applies to saccades and pursuit, otherwise NaN. 





-----------

### direction_radial {#float-direction-radial}

```cpp
float direction_radial;
```


Metadata field for direction of the current movement, in radial degrees (0-360). Direction field applies to saccades and pursuit, otherwise NaN. 





-----------


