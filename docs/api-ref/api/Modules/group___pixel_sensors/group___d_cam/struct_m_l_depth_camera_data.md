---
title: MLDepthCameraData
summary: structure to encapsulate output data for each camera stream. 

---

# MLDepthCameraData

**Module:** **[Pixel Sensors](/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Depth Camera](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md)**



Structure to encapsulate output data for each camera stream.  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md#uint32-t-version)**  |
| uint8_t | **[frame_count](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md#uint8-t-frame-count)**  |
| [MLDepthCameraFrame](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame.md) * | **[frames](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md#mldepthcameraframe-frames)**  |

## Detailed Description

```cpp
struct MLDepthCameraData;
```

Structure to encapsulate output data for each camera stream. 

This structure must be initialized by calling [MLDepthCameraDataInit](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcameradatainit) before use.




**API Level:**
  * 29




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### frame_count {#uint8-t-frame-count}

```cpp
uint8_t frame_count;
```


Number of camera frames populated. 





-----------

### frames {#mldepthcameraframe-frames}

```cpp
MLDepthCameraFrame * frames;
```



| Type | Description |
|--|--|
| [MLDepthCameraFrame](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame.md) * | Structure to encapsulate output data for each camera sensor.  |


Camera frame data. The number of frames is specified by frame_count. 





-----------

