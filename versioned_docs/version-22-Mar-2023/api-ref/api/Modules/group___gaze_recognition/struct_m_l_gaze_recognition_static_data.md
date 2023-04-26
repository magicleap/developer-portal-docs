---
title: MLGazeRecognitionStaticData
summary: static information about the gaze recognition system. populate with mlgazerecognitiongetstaticdata. 

---

# MLGazeRecognitionStaticData

**Module:** **[Gaze Recognition](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md)**



Static information about the Gaze Recognition system. Populate with [MLGazeRecognitionGetStaticData()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata).  [More...](#detailed-description)


`#include <ml_gaze_recognition.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#uint32-t-version)**  |
| [MLCoordinateFrameUID](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[vergence](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlcoordinateframeuid-vergence)**  |

## Detailed Description

```cpp
struct MLGazeRecognitionStaticData;
```

Static information about the Gaze Recognition system. Populate with [MLGazeRecognitionGetStaticData()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___gaze_recognition/group___gaze_recognition.md#mlresult-mlgazerecognitiongetstaticdata). 




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

### vergence {#mlcoordinateframeuid-vergence}

```cpp
MLCoordinateFrameUID vergence;
```


Location of the 3D vergence point, intersection of 3D gaze vectors. 





-----------


