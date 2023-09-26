---
title: MLDepthCameraStreamConfig
summary: structure to encapsulate the camera config for a specific stream. 

---

# MLDepthCameraStreamConfig

**Module:** **[Pixel Sensors](/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Depth Camera](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md)**



Structure to encapsulate the camera config for a specific stream.  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[flags](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_config.md#uint32-t-flags)**  |
| uint32_t | **[exposure](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_config.md#uint32-t-exposure)**  |
| [MLDepthCameraFrameRate](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraframerate) | **[frame_rate](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_config.md#mldepthcameraframerate-frame-rate)**  |

## Detailed Description

```cpp
struct MLDepthCameraStreamConfig;
```

Structure to encapsulate the camera config for a specific stream. 




**API Level:**
  * 29




-----------
## Public Attributes Documentation

### flags {#uint32-t-flags}

```cpp
uint32_t flags;
```


Flags to configure the depth data. 





-----------

### exposure {#uint32-t-exposure}

```cpp
uint32_t exposure;
```


Exposure in microseconds. 





-----------

### frame_rate {#mldepthcameraframerate-frame-rate}

```cpp
MLDepthCameraFrameRate frame_rate;
```



| Type | Description |
|--|--|
| [MLDepthCameraFrameRate](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraframerate) | Enumeration of possible frame rates.  |


Frame rate. 





-----------

