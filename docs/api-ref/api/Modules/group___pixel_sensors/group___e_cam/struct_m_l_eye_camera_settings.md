---
title: MLEyeCameraSettings
summary: a structure to encapsulate the camera settings. 

---

# MLEyeCameraSettings

**Module:** **[Pixel Sensors](/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Eye Camera](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md)**



A structure to encapsulate the camera settings.  [More...](#detailed-description)


`#include <ml_eye_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md#uint32-t-version)**  |
| uint32_t | **[cameras](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md#uint32-t-cameras)** <br></br>Eye cameras that need to be enabled.  |

## Detailed Description

```cpp
struct MLEyeCameraSettings;
```

A structure to encapsulate the camera settings. 

This structure must be initialized by calling [MLEyeCameraSettingsInit](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#void-mleyecamerasettingsinit) before use.




**API Level:**
  * 26




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### cameras {#uint32-t-cameras}

```cpp
uint32_t cameras;
```

Eye cameras that need to be enabled. 

See [MLEyeCameraIdentifier](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#enum-mleyecameraidentifier) for more details. If you want to request frames from different eye camera then "OR" the cameras of interest to the app. 





-----------

