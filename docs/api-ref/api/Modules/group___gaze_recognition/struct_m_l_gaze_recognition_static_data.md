---
title: MLGazeRecognitionStaticData
summary: static information about the gaze recognition system. populate with mlgazerecognitiongetstaticdata. 

---

# MLGazeRecognitionStaticData

**Module:** **[Gaze Recognition](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md)**



Static information about the Gaze Recognition system. Populate with [MLGazeRecognitionGetStaticData()](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata).  [More...](#detailed-description)


`#include <ml_gaze_recognition.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#uint32-t-version)**  |
| float | **[eye_height_max](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-eye-height-max)**  |
| float | **[eye_width_max](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#float-eye-width-max)**  |
| [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[vergence](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlcoordinateframeuid-vergence)**  |

## Detailed Description

```cpp
struct MLGazeRecognitionStaticData;
```

Static information about the Gaze Recognition system. Populate with [MLGazeRecognitionGetStaticData()](/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata). 




**API Level:**
  * 27




-----------
## Public Attributes Documentation

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

