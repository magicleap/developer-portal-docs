---
title: MLDepthCameraCapability
summary: structure to encapsulate a possible set of streams configuration. such set describes a possible way of setting #stream-configs in mldepthcamerasettings and may hold multiple mldepthcamerastreamcapability for different streams. 

---

# MLDepthCameraCapability

**Module:** **[Pixel Sensors](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Depth Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md)**



Structure to encapsulate a possible set of streams configuration. Such set describes a possible way of setting #stream_configs in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) and may hold multiple [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) for different streams.  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint8_t | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md#uint8-t-size)**  |
| [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) * | **[stream_capabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md#mldepthcamerastreamcapability-stream-capabilities)**  |

## Detailed Description

```cpp
struct MLDepthCameraCapability;
```

Structure to encapsulate a possible set of streams configuration. Such set describes a possible way of setting #stream_configs in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) and may hold multiple [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) for different streams. 

Whole [stream_capabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md#mldepthcamerastreamcapability-stream-capabilities) array describe a single configuration. Using only part of it is not recommended.

The capabilities supported by the depth camera can be queried with [MLDepthCameraGetCapabilities()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities).




**API Level:**
  * 29




-----------
## Public Attributes Documentation

### size {#uint8-t-size}

```cpp
uint8_t size;
```


Size of [stream_capabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md#mldepthcamerastreamcapability-stream-capabilities) array. 





-----------

### stream_capabilities {#mldepthcamerastreamcapability-stream-capabilities}

```cpp
MLDepthCameraStreamCapability * stream_capabilities;
```



| Type | Description |
|--|--|
| [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) * | Structure to encapsulate a possible configuration for a single stream. Can be used to understand possible values for a specific #stream_configs element in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md).  |


Array of [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) elements. 





-----------


