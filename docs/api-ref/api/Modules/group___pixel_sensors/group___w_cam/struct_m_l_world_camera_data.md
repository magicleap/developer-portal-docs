---
title: MLWorldCameraData
summary: a structure to encapsulate output data for each camera sensor. 

---

# MLWorldCameraData

**Module:** **[Pixel Sensors](/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[World Camera](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md)**



A structure to encapsulate output data for each camera sensor.  [More...](#detailed-description)


`#include <ml_world_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md#uint32-t-version)**  |
| uint8_t | **[frame_count](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md#uint8-t-frame-count)**  |
| [MLWorldCameraFrame](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md) * | **[frames](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md#mlworldcameraframe-frames)**  |

## Detailed Description

```cpp
struct MLWorldCameraData;
```

A structure to encapsulate output data for each camera sensor. 

This structure must be initialized by calling [MLWorldCameraDataInit](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#void-mlworldcameradatainit) before use.




**API Level:**
  * 23




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

### frames {#mlworldcameraframe-frames}

```cpp
MLWorldCameraFrame * frames;
```



| Type | Description |
|--|--|
| [MLWorldCameraFrame](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md) * | A structure to encapsulate output data for each camera sensor.  |


Camera frame data. The number of frames is specified by frame_count. 





-----------

