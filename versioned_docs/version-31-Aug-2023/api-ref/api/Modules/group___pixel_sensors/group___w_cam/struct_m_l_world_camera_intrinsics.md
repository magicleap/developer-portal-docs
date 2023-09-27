---
title: MLWorldCameraIntrinsics
summary: world camera intrinsic parameters. 

---

# MLWorldCameraIntrinsics

**Module:** **[Pixel Sensors](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[World Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md)**



World camera intrinsic parameters.  [More...](#detailed-description)


`#include <ml_world_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md#uint32-t-width)**  |
| uint32_t | **[height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md#uint32-t-height)**  |
| [MLVec2f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec2f.md) | **[focal_length](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md#mlvec2f-focal-length)**  |
| [MLVec2f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec2f.md) | **[principal_point](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md#mlvec2f-principal-point)**  |
| float | **[fov](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md#float-fov)**  |
| double[MLWorldCameraIntrinsics_MaxRadialDistortionCoefficients] | **[radial_distortion](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md#double-radial-distortion)** <br></br>Radial distortion vector. The radial distortion co-efficients are in the following order: [k1, k2, k3, k4].  |
| double[MLWorldCameraIntrinsics_MaxTangentialDistortionCoefficients] | **[tangential_distortion](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md#double-tangential-distortion)** <br></br>Tangential distortion vector. The tangential distortion co-efficients are in the following order: [p1, p2].  |

## Detailed Description

```cpp
struct MLWorldCameraIntrinsics;
```

World camera intrinsic parameters. 




**API Level:**
  * 23




-----------
## Public Attributes Documentation

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

### radial_distortion {#double-radial-distortion}

```cpp
double[MLWorldCameraIntrinsics_MaxRadialDistortionCoefficients] radial_distortion;
```

Radial distortion vector. The radial distortion co-efficients are in the following order: [k1, k2, k3, k4]. 


| Type | Description |
|--|--|
| double[MLWorldCameraIntrinsics_MaxRadialDistortionCoefficients] | [MLWorldCameraIntrinsics_MaxRadialDistortionCoefficients] |






-----------

### tangential_distortion {#double-tangential-distortion}

```cpp
double[MLWorldCameraIntrinsics_MaxTangentialDistortionCoefficients] tangential_distortion;
```

Tangential distortion vector. The tangential distortion co-efficients are in the following order: [p1, p2]. 


| Type | Description |
|--|--|
| double[MLWorldCameraIntrinsics_MaxTangentialDistortionCoefficients] | [MLWorldCameraIntrinsics_MaxTangentialDistortionCoefficients] |






-----------


