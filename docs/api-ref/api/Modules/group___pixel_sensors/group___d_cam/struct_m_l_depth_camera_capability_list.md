---
title: MLDepthCameraCapabilityList
summary: structure to encapsulate a list of possible stream configurations. 

---

# MLDepthCameraCapabilityList

**Module:** **[Pixel Sensors](/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Depth Camera](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md)**



Structure to encapsulate a list of possible stream configurations.  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint8_t | **[size](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md#uint8-t-size)**  |
| [MLDepthCameraCapability](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md) * | **[capabilities](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md#mldepthcameracapability-capabilities)**  |

## Detailed Description

```cpp
struct MLDepthCameraCapabilityList;
```

Structure to encapsulate a list of possible stream configurations. 

User should be able to use any of the capabilities from the list. They are grouped in usable sets of configurations - one set may contain different [MLDepthCameraStreamCapability](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) for different streams. For more information see [MLDepthCameraCapability](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md).




**API Level:**
  * 29




-----------
## Public Attributes Documentation

### size {#uint8-t-size}

```cpp
uint8_t size;
```


Size of [capabilities](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md#mldepthcameracapability-capabilities) array. 





-----------

### capabilities {#mldepthcameracapability-capabilities}

```cpp
MLDepthCameraCapability * capabilities;
```



| Type | Description |
|--|--|
| [MLDepthCameraCapability](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md) * | Structure to encapsulate a possible set of streams configuration. Such set describes a possible way of setting #stream_configs in [MLDepthCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) and may hold multiple [MLDepthCameraStreamCapability](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) for different streams.  |


Array of [MLDepthCameraCapability](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md) elements. 





-----------

