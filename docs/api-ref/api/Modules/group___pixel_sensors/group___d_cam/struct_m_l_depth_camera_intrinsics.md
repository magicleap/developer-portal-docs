---
title: MLDepthCameraIntrinsics
summary: depth camera intrinsic parameters. 

---

# MLDepthCameraIntrinsics

**Module:** **[Pixel Sensors](/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Depth Camera](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md)**



Depth camera intrinsic parameters.  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[width](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md#uint32-t-width)**  |
| uint32_t | **[height](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md#uint32-t-height)**  |
| [MLVec2f](/api-ref/api/Modules/group___common/struct_m_l_vec2f.md) | **[focal_length](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md#mlvec2f-focal-length)**  |
| [MLVec2f](/api-ref/api/Modules/group___common/struct_m_l_vec2f.md) | **[principal_point](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md#mlvec2f-principal-point)**  |
| float | **[fov](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md#float-fov)**  |
| double[MLDepthCameraIntrinsics_MaxDistortionCoefficients] | **[distortion](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md#double-distortion)** <br></br>Distortion vector. The distortion co-efficients are in the following order: [k1, k2, p1, p2, k3].  |

## Detailed Description

```cpp
struct MLDepthCameraIntrinsics;
```

Depth camera intrinsic parameters. 




**API Level:**
  * 29




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

### distortion {#double-distortion}

```cpp
double[MLDepthCameraIntrinsics_MaxDistortionCoefficients] distortion;
```

Distortion vector. The distortion co-efficients are in the following order: [k1, k2, p1, p2, k3]. 


| Type | Description |
|--|--|
| double[MLDepthCameraIntrinsics_MaxDistortionCoefficients] | [MLDepthCameraIntrinsics_MaxDistortionCoefficients] |






-----------

