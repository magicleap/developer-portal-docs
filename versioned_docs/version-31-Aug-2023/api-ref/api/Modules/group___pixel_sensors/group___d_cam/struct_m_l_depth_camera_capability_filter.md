---
title: MLDepthCameraCapabilityFilter
summary: structure to encapsulate camera capabilities filtering. 

---

# MLDepthCameraCapabilityFilter

**Module:** **[Pixel Sensors](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Depth Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md)**



Structure to encapsulate camera capabilities filtering.  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md#uint32-t-version)**  |
| uint32_t | **[streams](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md#uint32-t-streams)** <br></br>Streams for which capabilities will be filtered.  |

## Detailed Description

```cpp
struct MLDepthCameraCapabilityFilter;
```

Structure to encapsulate camera capabilities filtering. 

The capabilities supported by the depth camera can be queried with [MLDepthCameraGetCapabilities()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities).




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

### streams {#uint32-t-streams}

```cpp
uint32_t streams;
```

Streams for which capabilities will be filtered. 

Can hold multiple [MLDepthCameraStream](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enum-mldepthcamerastream) values. 





-----------


