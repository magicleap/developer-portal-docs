---
title: MLCameraIntrinsicCalibrationParameters
summary: camera intrinsic parameter. 

---

# MLCameraIntrinsicCalibrationParameters

**Module:** **[Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md)**



Camera intrinsic parameter.  [More...](#detailed-description)


`#include <ml_camera_v2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md#uint32-t-version)**  |
| uint32_t | **[width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md#uint32-t-width)**  |
| uint32_t | **[height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md#uint32-t-height)**  |
| [MLVec2f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec2f.md) | **[focal_length](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md#mlvec2f-focal-length)**  |
| [MLVec2f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec2f.md) | **[principal_point](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md#mlvec2f-principal-point)**  |
| float | **[fov](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md#float-fov)**  |
| double[MLCameraIntrinsics_MaxDistortionCoefficients] | **[distortion](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md#double-distortion)** <br></br>Distortion vector. The distortion co-efficients are in the following order:   [k1, k2, p1, p2, k3].  |

## Detailed Description

```cpp
struct MLCameraIntrinsicCalibrationParameters;
```

Camera intrinsic parameter. 




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

### width {#uint32-t-width}

```cpp
uint32_t width;
```


Camera width. 





-----------

### height {#uint32-t-height}

```cpp
uint32_t height;
```


Camera height. 





-----------

### focal_length {#mlvec2f-focal-length}

```cpp
MLVec2f focal_length;
```


Camera focal length. 





-----------

### principal_point {#mlvec2f-principal-point}

```cpp
MLVec2f principal_point;
```


Camera principal point. 





-----------

### fov {#float-fov}

```cpp
float fov;
```


Field of view in degrees. 





-----------

### distortion {#double-distortion}

```cpp
double[MLCameraIntrinsics_MaxDistortionCoefficients] distortion;
```

Distortion vector. The distortion co-efficients are in the following order:   [k1, k2, p1, p2, k3]. 


| Type | Description |
|--|--|
| double[MLCameraIntrinsics_MaxDistortionCoefficients] | [MLCameraIntrinsics_MaxDistortionCoefficients] |






-----------


