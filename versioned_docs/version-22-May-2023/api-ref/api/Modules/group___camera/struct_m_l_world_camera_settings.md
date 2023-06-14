---
title: MLWorldCameraSettings
summary: a structure to encapsulate the camera settings. 

---

# MLWorldCameraSettings

**Module:** **[Camera](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/group___camera.md)**



A structure to encapsulate the camera settings.  [More...](#detailed-description)


`#include <ml_world_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md#uint32-t-version)**  |
| uint32_t | **[mode](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md#uint32-t-mode)** <br></br>World camera mode.  |
| uint32_t | **[cameras](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md#uint32-t-cameras)** <br></br>World cameras that need to be enabled.  |

## Detailed Description

```cpp
struct MLWorldCameraSettings;
```

A structure to encapsulate the camera settings. 

This structure must be initialized by calling [MLWorldCameraSettingsInit](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlworldcamerasettingsinit) before use.




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

### mode {#uint32-t-mode}

```cpp
uint32_t mode;
```

World camera mode. 

See [MLWorldCameraMode](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/group___camera.md#enum-mlworldcameramode) for more details. If you want to request frames from different camera modes then "OR" the modes of interest to the app. The mode will apply for all the cameras.



:::note
The system may not be able to service all the requested camera modes. This parameter is treated as a hint and data will be provided for the requested camera modes when available. 
:::



-----------

### cameras {#uint32-t-cameras}

```cpp
uint32_t cameras;
```

World cameras that need to be enabled. 

See [MLWorldCameraIdentifier](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/group___camera.md#enum-mlworldcameraidentifier) for more details. If you want to request frames from different world camera then "OR" the cameras of interest to the app.



:::note
The system may not be able to service all the requested cameras. This parameter is treated as a hint and data will be provided from the requested world cameras when available. 
:::



-----------


