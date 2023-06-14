---
title: MLEyeCameraFrame
summary: a structure to encapsulate output data for each camera sensor. 

---

# MLEyeCameraFrame

**Module:** **[Pixel Sensors](/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Eye Camera](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md)**



A structure to encapsulate output data for each camera sensor.  [More...](#detailed-description)


`#include <ml_eye_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLEyeCameraIdentifier](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#enums-mleyecameraidentifier) | **[camera_id](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame.md#mleyecameraidentifier-camera-id)**  |
| int64_t | **[frame_number](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame.md#int64-t-frame-number)**  |
| [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[timestamp](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame.md#mltime-timestamp)**  |
| [MLEyeCameraFrameBuffer](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame_buffer.md) | **[frame_buffer](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame.md#mleyecameraframebuffer-frame-buffer)**  |

## Detailed Description

```cpp
struct MLEyeCameraFrame;
```

A structure to encapsulate output data for each camera sensor. 




**API Level:**
  * 26




-----------
## Public Attributes Documentation

### camera_id {#mleyecameraidentifier-camera-id}

```cpp
MLEyeCameraIdentifier camera_id;
```



| Type | Description |
|--|--|
| [MLEyeCameraIdentifier](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#enums-mleyecameraidentifier) | Camera Identifier.  |


Camera Identifier specifies which camera is associated with this frame. 





-----------

### frame_number {#int64-t-frame-number}

```cpp
int64_t frame_number;
```


Frame number associated with this frame. 





-----------

### timestamp {#mltime-timestamp}

```cpp
MLTime timestamp;
```


Frame timestamp specifies the time at which the frame was captured. 





-----------

### frame_buffer {#mleyecameraframebuffer-frame-buffer}

```cpp
MLEyeCameraFrameBuffer frame_buffer;
```



| Type | Description |
|--|--|
| [MLEyeCameraFrameBuffer](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame_buffer.md) | A structure to encapsulate per plane info for each camera frame.  |


Frame buffer data. 





-----------

