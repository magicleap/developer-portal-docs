---
title: MLCameraCaptureConfig

---

# MLCameraCaptureConfig

**Module:** **[Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md)**



 [More...](#detailed-description)


`#include <ml_camera_v2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md#uint32-t-version)**  |
| [MLCameraCaptureFrameRate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate) | **[capture_frame_rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md#mlcameracaptureframerate-capture-frame-rate)** <br></br>Capture frame rate:   If only IMAGE stream configuration set to MLCameraCaptureFrameRate_None.   If setting to 60fps capture resolution should not be more than 1920x1080 for any of the streams.   For MR/virtual only capture, the frame rate should match the value selected in [MLCameraMRConnectInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_m_r_connect_info.md).  |
| uint32_t | **[num_streams](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md#uint32-t-num-streams)**  |
| [MLCameraCaptureStreamConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md)[MLCAMERA_MAXSTREAMS] | **[stream_config](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md#mlcameracapturestreamconfig-stream-config)**  |

## Detailed Description

```cpp
struct MLCameraCaptureConfig;
```


A structure to encapsulate capture configuration. 





-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### capture_frame_rate {#mlcameracaptureframerate-capture-frame-rate}

```cpp
MLCameraCaptureFrameRate capture_frame_rate;
```

Capture frame rate:   If only IMAGE stream configuration set to MLCameraCaptureFrameRate_None.   If setting to 60fps capture resolution should not be more than 1920x1080 for any of the streams.   For MR/virtual only capture, the frame rate should match the value selected in [MLCameraMRConnectInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_m_r_connect_info.md). 


| Type | Description |
|--|--|
| [MLCameraCaptureFrameRate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate) | Captures frame rate.  |






-----------

### num_streams {#uint32-t-num-streams}

```cpp
uint32_t num_streams;
```


Number of captured streams. 





-----------

### stream_config {#mlcameracapturestreamconfig-stream-config}

```cpp
MLCameraCaptureStreamConfig[MLCAMERA_MAXSTREAMS] stream_config;
```



| Type | Description |
|--|--|
| [MLCameraCaptureStreamConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md)[MLCAMERA_MAXSTREAMS] | [MLCAMERA_MAXSTREAMS] |


Stream configurations. 





-----------


