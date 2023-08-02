---
title: MLDepthCameraSettings
summary: a structure to encapsulate the camera settings. 

---

# MLDepthCameraSettings

**Module:** **[Pixel Sensors](/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Depth Camera](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md)**



A structure to encapsulate the camera settings.  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md#uint32-t-version)**  |
| uint32_t | **[flags](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md#uint32-t-flags)**  |
| uint32_t | **[mode](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md#uint32-t-mode)** <br></br>Depth camera mode.  |

## Detailed Description

```cpp
struct MLDepthCameraSettings;
```

A structure to encapsulate the camera settings. 

This structure must be initialized by calling [MLDepthCameraSettingsInit](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcamerasettingsinit) before use.




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

### flags {#uint32-t-flags}

```cpp
uint32_t flags;
```


Flags to configure the depth data. 





-----------

### mode {#uint32-t-mode}

```cpp
uint32_t mode;
```

Depth camera mode. 

See [MLDepthCameraMode](/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enum-mldepthcameramode) for more details.



:::note
The system may not be able to service all the requested modes at any given time. This parameter is treated as a hint and data will be provided for the requested modes if available. 
:::



-----------

