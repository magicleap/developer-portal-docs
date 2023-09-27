---
title: MLDepthCameraSettings
summary: structure to encapsulate the camera settings. 

---

# MLDepthCameraSettings

**Module:** **[Pixel Sensors](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Depth Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md)**



Structure to encapsulate the camera settings.  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md#uint32-t-version)**  |
| uint32_t | **[streams](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md#uint32-t-streams)** <br></br>Depth camera stream.  |
| [MLDepthCameraStreamConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_config.md)[MLDepthCameraFrameType_Count] | **[stream_configs](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md#mldepthcamerastreamconfig-stream-configs)** <br></br>Controls for each of the depth camera streams.  |

## Detailed Description

```cpp
struct MLDepthCameraSettings;
```

Structure to encapsulate the camera settings. 

This structure must be initialized by calling [MLDepthCameraSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcamerasettingsinit) before use.

These are supported configurations: 
Streams Exposure limits [us] Frame rate [FPS] Long Range 250 - 2000 1, 5 Short Range 50 - 375 On 50Hz PLC: 5, 25, 50On 60Hz PLC: 5, 30, 60  Use [MLDepthCameraGetCapabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities) to get a list of available configurations. \note The system may not be able to service all the requested streams at any given time. This parameter is treated as a hint and data will be provided for the requested streams if available. \note The API only supports a single stream. In a future release support for multiple streams will be added. @par API Level:\n 29 





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

Depth camera stream. 

See [MLDepthCameraStream](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enum-mldepthcamerastream) for more details. 





-----------

### stream_configs {#mldepthcamerastreamconfig-stream-configs}

```cpp
MLDepthCameraStreamConfig[MLDepthCameraFrameType_Count] stream_configs;
```

Controls for each of the depth camera streams. 


| Type | Description |
|--|--|
| [MLDepthCameraStreamConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_config.md)[MLDepthCameraFrameType_Count] | Structure to encapsulate the camera config for a specific stream. [MLDepthCameraFrameType_Count] |


Only controls for streams enabled via [streams](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md#uint32-t-streams) field will be read. Use [MLDepthCameraFrameType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enum-mldepthcameraframetype) enumeration for indexing. 





-----------


