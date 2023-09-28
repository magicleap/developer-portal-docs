---
title: MLDepthCameraStreamCapability
summary: structure to encapsulate a possible configuration for a single stream. can be used to understand possible values for a specific #stream-configs element in mldepthcamerasettings. 

---

# MLDepthCameraStreamCapability

**Module:** **[Pixel Sensors](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Depth Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md)**



Structure to encapsulate a possible configuration for a single stream. Can be used to understand possible values for a specific #stream_configs element in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md).  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLDepthCameraStream](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcamerastream) | **[stream](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md#mldepthcamerastream-stream)**  |
| uint32_t | **[min_exposure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md#uint32-t-min-exposure)**  |
| uint32_t | **[max_exposure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md#uint32-t-max-exposure)**  |
| [MLDepthCameraFrameRate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraframerate) | **[frame_rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md#mldepthcameraframerate-frame-rate)**  |

## Detailed Description

```cpp
struct MLDepthCameraStreamCapability;
```

Structure to encapsulate a possible configuration for a single stream. Can be used to understand possible values for a specific #stream_configs element in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md). 

The capabilities supported by the depth camera can be queried with [MLDepthCameraGetCapabilities()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities).




**API Level:**
  * 29




-----------
## Public Attributes Documentation

### stream {#mldepthcamerastream-stream}

```cpp
MLDepthCameraStream stream;
```



| Type | Description |
|--|--|
| [MLDepthCameraStream](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcamerastream) | Enumeration of depth camera streams.  |


Stream for which this capability can be applied. 





-----------

### min_exposure {#uint32-t-min-exposure}

```cpp
uint32_t min_exposure;
```


Minimum sensor exposure in microseconds. 





-----------

### max_exposure {#uint32-t-max-exposure}

```cpp
uint32_t max_exposure;
```


Maximum sensor exposure in microseconds. 





-----------

### frame_rate {#mldepthcameraframerate-frame-rate}

```cpp
MLDepthCameraFrameRate frame_rate;
```



| Type | Description |
|--|--|
| [MLDepthCameraFrameRate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraframerate) | Enumeration of possible frame rates.  |


Frame rate. 





-----------


