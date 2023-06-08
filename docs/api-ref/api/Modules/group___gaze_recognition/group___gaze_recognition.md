---
title: Gaze Recognition
summary: apis for the gaze recognition system. 

---

# Gaze Recognition

APIs for the Gaze Recognition system.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLGazeRecognitionStaticData](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md)** <br></br>Static information about the Gaze Recognition system. Populate with [MLGazeRecognitionGetStaticData()](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata).  |
| struct | **[MLGazeRecognitionState](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md)** <br></br>Information about the state of the Gaze Recognition system. This structure must be initialized by calling [MLGazeRecognitionStateInit()](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstateinit) before use.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLGazeRecognitionStaticData](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) | **[MLGazeRecognitionStaticData](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#struct-mlgazerecognitionstaticdata)** <br></br>Static information about the Gaze Recognition system. Populate with [MLGazeRecognitionGetStaticData()](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata).  |
| typedef struct [MLGazeRecognitionState](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) | **[MLGazeRecognitionState](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#struct-mlgazerecognitionstate)** <br></br>Information about the state of the Gaze Recognition system. This structure must be initialized by calling [MLGazeRecognitionStateInit()](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstateinit) before use.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLGazeRecognitionError](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionerror)** <br></br> { <br></br>[MLGazeRecognitionError_None](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionerror-none),<br></br> [MLGazeRecognitionError_Generic](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionerror-generic),<br></br> [MLGazeRecognitionError_Ensure32Bits](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionerror-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible error codes that the Gaze Recognition system can report.  |
| enum | **[MLGazeRecognitionBehavior](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionbehavior)** <br></br> { <br></br>[MLGazeRecognition_Unknown](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognition-unknown) = 0,<br></br> [MLGazeRecognition_EyesClosed](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognition-eyesclosed) = 1,<br></br> [MLGazeRecognition_Blink](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognition-blink) = 2,<br></br> [MLGazeRecognition_Fixation](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognition-fixation) = 3,<br></br> [MLGazeRecognition_Pursuit](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognition-pursuit) = 4,<br></br> [MLGazeRecognition_Saccade](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognition-saccade) = 5,<br></br> [MLGazeRecognition_BlinkLeft](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognition-blinkleft) = 6,<br></br> [MLGazeRecognition_BlinkRight](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognition-blinkright) = 7,<br></br> [MLGazeRecognition_Ensure32Bits](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognition-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of mutually-exclusive behaviors that the Gaze Recognition system can report.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLGazeRecognitionStaticDataInit](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstaticdatainit)**([MLGazeRecognitionStaticData](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) * inout_state)<br></br>Initialize [MLGazeRecognitionStaticData](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) with version.  |
| void | **[MLGazeRecognitionStateInit](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstateinit)**([MLGazeRecognitionState](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) * inout_state)<br></br>Initialize [MLGazeRecognitionState](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) with version.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGazeRecognitionCreate](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitioncreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create Gaze Recognition.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGazeRecognitionDestroy](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiondestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroy Gaze Recognition.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGazeRecognitionGetStaticData](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLGazeRecognitionStaticData](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) * out_data)<br></br>Get static information about Gaze Recognition.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGazeRecognitionGetState](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLGazeRecognitionState](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) * out_state)<br></br>Get information about the user's gaze.  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#uint32-t-version)**  |
| float | **[eye_height_max](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-eye-height-max)**  |
| float | **[eye_width_max](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-eye-width-max)**  |
| [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[vergence](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlcoordinateframeuid-vergence)**  |
| uint32_t | **[version](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#uint32-t-version)**  |
| [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[timestamp](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mltime-timestamp)**  |
| [MLGazeRecognitionError](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionerror) | **[error](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlgazerecognitionerror-error)**  |
| [MLGazeRecognitionBehavior](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionbehavior) | **[behavior](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlgazerecognitionbehavior-behavior)**  |
| [MLVec2f](/api-ref/api/Modules/group___common/struct_m_l_vec2f.md) | **[eye_left](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlvec2f-eye-left)**  |
| [MLVec2f](/api-ref/api/Modules/group___common/struct_m_l_vec2f.md) | **[eye_right](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlvec2f-eye-right)**  |
| float | **[onset_s](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-onset-s)**  |
| float | **[duration_s](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-duration-s)**  |
| float | **[velocity_degps](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-velocity-degps)**  |
| float | **[amplitude_deg](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-amplitude-deg)**  |
| float | **[direction_radial](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-direction-radial)**  |

## Detailed Description

APIs for the Gaze Recognition system. 




**Shared Object:**
  * perception.magicleap*




-----------
## Enums Documentation

### MLGazeRecognitionError {#enums-mlgazerecognitionerror}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGazeRecognitionError_None | | No error, tracking is nominal. |
| MLGazeRecognitionError_Generic | | Gaze Recognition system failed. |
| MLGazeRecognitionError_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



A set of possible error codes that the Gaze Recognition system can report. 




**API Level:**
  * 20




-----------

### MLGazeRecognitionBehavior {#enums-mlgazerecognitionbehavior}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGazeRecognition_Unknown |  0| Unknown. |
| MLGazeRecognition_EyesClosed |  1| Both eyes closed. |
| MLGazeRecognition_Blink |  2| Blink detected. Both eyes open, close, and open. |
| MLGazeRecognition_Fixation |  3| User is fixating, eye position is stable. |
| MLGazeRecognition_Pursuit |  4| User is pursuing, eye velocity is low but nonzero. |
| MLGazeRecognition_Saccade |  5| User is making a saccade, eye velocity is high. |
| MLGazeRecognition_BlinkLeft |  6| Left eye blink, right eye open. |
| MLGazeRecognition_BlinkRight |  7| Right eye blink, left eye open. |
| MLGazeRecognition_Ensure32Bits |  0x7FFFFFFF| |



A set of mutually-exclusive behaviors that the Gaze Recognition system can report. 




**API Level:**
  * 24




-----------


## Types Documentation

### MLGazeRecognitionStaticData {#struct-mlgazerecognitionstaticdata}

```cpp
typedef struct MLGazeRecognitionStaticData MLGazeRecognitionStaticData;
```

Static information about the Gaze Recognition system. Populate with [MLGazeRecognitionGetStaticData()](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata). 



[More Info](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md)


**API Level:**
  * 27




-----------

### MLGazeRecognitionState {#struct-mlgazerecognitionstate}

```cpp
typedef struct MLGazeRecognitionState MLGazeRecognitionState;
```

Information about the state of the Gaze Recognition system. This structure must be initialized by calling [MLGazeRecognitionStateInit()](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#void-mlgazerecognitionstateinit) before use. 



[More Info](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md)


**API Level:**
  * 20




-----------


## Functions Documentation

### MLGazeRecognitionStaticDataInit {#void-mlgazerecognitionstaticdatainit}

```cpp
static inline void MLGazeRecognitionStaticDataInit(
    MLGazeRecognitionStaticData * inout_state
)
```

Initialize [MLGazeRecognitionStaticData](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLGazeRecognitionStaticData](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) * |inout_state|Sets up the version for inout_state and nulls pointer for the [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md).|
**Required Permissions**:

  * None 





**API Level:**
  * 27




-----------

### MLGazeRecognitionStateInit {#void-mlgazerecognitionstateinit}

```cpp
static inline void MLGazeRecognitionStateInit(
    MLGazeRecognitionState * inout_state
)
```

Initialize [MLGazeRecognitionState](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLGazeRecognitionState](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) * |inout_state|Sets up the version for inout_state and zeros all the fields.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLGazeRecognitionCreate {#mlresult-mlgazerecognitioncreate}

```cpp
MLResult MLGazeRecognitionCreate(
    MLHandle * out_handle
)
```

Create Gaze Recognition. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain a handle to Gaze Recognition. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The out_handle parameter was not valid (null). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Gaze Recognition was successfully created. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|The application lacks permission. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFaiure|Gaze Recognition was not created successfully.|
**Required Permissions**:

  * com.magicleap.permission.EYE_TRACKING (protection level: dangerous) 





**API Level:**
  * 20




-----------

### MLGazeRecognitionDestroy {#mlresult-mlgazerecognitiondestroy}

```cpp
MLResult MLGazeRecognitionDestroy(
    MLHandle handle
)
```

Destroy Gaze Recognition. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to Gaze Recognition created by [MLGazeRecognitionCreate()](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitioncreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The Gaze Recognition handle was not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The Gaze Recognition was successfully destroyed. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The Gaze Recognition was not successfully destroyed.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLGazeRecognitionGetStaticData {#mlresult-mlgazerecognitiongetstaticdata}

```cpp
MLResult MLGazeRecognitionGetStaticData(
    MLHandle handle,
    MLGazeRecognitionStaticData * out_data
)
```

Get static information about Gaze Recognition. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to Gaze Recognition created by [MLGazeRecognitionCreate()](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitioncreate). |
| [MLGazeRecognitionStaticData](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_static_data.md) * |out_data|Target to populate the data about Gaze Recognition.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The out_data parameter was not valid (null). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Gaze Recognition static data was successfully received. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to receive Gaze Recognition static data.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLGazeRecognitionGetState {#mlresult-mlgazerecognitiongetstate}

```cpp
MLResult MLGazeRecognitionGetState(
    MLHandle handle,
    MLGazeRecognitionState * out_state
)
```

Get information about the user's gaze. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to Gaze Recognition created by [MLGazeRecognitionCreate()](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitioncreate). |
| [MLGazeRecognitionState](/api-ref/api/Modules/group___gaze_recognition/struct_m_l_gaze_recognition_state.md) * |out_state|Information about the gaze.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The out_state parameter was not valid (null). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|gaze Recognition state was successfully received. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to receive gaze Recognition state data.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------


## Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### eye_height_max {#float-eye-height-max}

```cpp
float eye_height_max;
```


The maximum value for the height of the eye_left and eye_right vector. 





-----------

### eye_width_max {#float-eye-width-max}

```cpp
float eye_width_max;
```


The maximum value for the width of the eye_left and eye_right vector. 





-----------

### vergence {#mlcoordinateframeuid-vergence}

```cpp
MLCoordinateFrameUID vergence;
```


Location of the 3D vergence point, intersection of 3D gaze vectors. 





-----------

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
| [MLGazeRecognitionError](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionerror) | A set of possible error codes that the Gaze Recognition system can report.  |


Represents what gaze Recognition error (if any) is present. 





-----------

### behavior {#mlgazerecognitionbehavior-behavior}

```cpp
MLGazeRecognitionBehavior behavior;
```



| Type | Description |
|--|--|
| [MLGazeRecognitionBehavior](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#enums-mlgazerecognitionbehavior) | A set of mutually-exclusive behaviors that the Gaze Recognition system can report.  |


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




