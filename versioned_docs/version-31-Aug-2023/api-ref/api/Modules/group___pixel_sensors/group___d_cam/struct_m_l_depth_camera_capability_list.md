---
title: MLDepthCameraCapabilityList
summary: structure to encapsulate a list of possible stream configurations. 

---

# MLDepthCameraCapabilityList

**Module:** **[Pixel Sensors](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Depth Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md)**



Structure to encapsulate a list of possible stream configurations.  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint8_t | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md#uint8-t-size)**  |
| [MLDepthCameraCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md) * | **[capabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md#mldepthcameracapability-capabilities)**  |

## Detailed Description

```cpp
struct MLDepthCameraCapabilityList;
```

Structure to encapsulate a list of possible stream configurations. 

User should be able to use any of the capabilities from the list. They are grouped in usable sets of configurations - one set may contain different [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) for different streams. For more information see [MLDepthCameraCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md).




**API Level:**
  * 29




-----------
## Public Attributes Documentation

### size {#uint8-t-size}

```cpp
uint8_t size;
```


Size of [capabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md#mldepthcameracapability-capabilities) array. 





-----------

### capabilities {#mldepthcameracapability-capabilities}

```cpp
MLDepthCameraCapability * capabilities;
```



| Type | Description |
|--|--|
| [MLDepthCameraCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md) * | Structure to encapsulate a possible set of streams configuration. Such set describes a possible way of setting #stream_configs in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) and may hold multiple [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) for different streams.  |


Array of [MLDepthCameraCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md) elements. 





-----------


