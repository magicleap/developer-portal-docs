---
title: MLWorldCameraFrame
summary: a structure to encapsulate output data for each camera sensor. 

---

# MLWorldCameraFrame

**Module:** **[Pixel Sensors](/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[World Camera](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md)**



A structure to encapsulate output data for each camera sensor.  [More...](#detailed-description)


`#include <ml_world_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLWorldCameraIdentifier](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier) | **[id](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md#mlworldcameraidentifier-id)**  |
| int64_t | **[frame_number](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md#int64-t-frame-number)**  |
| [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[timestamp](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md#mltime-timestamp)**  |
| [MLWorldCameraIntrinsics](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md) | **[intrinsics](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md#mlworldcameraintrinsics-intrinsics)**  |
| [MLTransform](/api-ref/api/Modules/group___common/struct_m_l_transform.md) | **[camera_pose](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md#mltransform-camera-pose)**  |
| [MLWorldCameraFrameBuffer](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md) | **[frame_buffer](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md#mlworldcameraframebuffer-frame-buffer)**  |
| [MLWorldCameraFrameType](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraframetype) | **[frame_type](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md#mlworldcameraframetype-frame-type)**  |

## Detailed Description

```cpp
struct MLWorldCameraFrame;
```

A structure to encapsulate output data for each camera sensor. 




**API Level:**
  * 23




-----------
## Public Attributes Documentation

### id {#mlworldcameraidentifier-id}

```cpp
MLWorldCameraIdentifier id;
```



| Type | Description |
|--|--|
| [MLWorldCameraIdentifier](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier) | Camera Identifier.  |


Camera Identifier specifies which camera is associated with this frame. 





-----------

### frame_number {#int64-t-frame-number}

```cpp
int64_t frame_number;
```


A 64bit integer to index the frame number associated with this frame. 





-----------

### timestamp {#mltime-timestamp}

```cpp
MLTime timestamp;
```


Frame timestamp specifies the time at which the frame was captured. 





-----------

### intrinsics {#mlworldcameraintrinsics-intrinsics}

```cpp
MLWorldCameraIntrinsics intrinsics;
```



| Type | Description |
|--|--|
| [MLWorldCameraIntrinsics](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md) | World camera intrinsic parameters.  |


Camera intrinsic parameters. 





-----------

### camera_pose {#mltransform-camera-pose}

```cpp
MLTransform camera_pose;
```


World camera pose in the world co-ordinate system. 





-----------

### frame_buffer {#mlworldcameraframebuffer-frame-buffer}

```cpp
MLWorldCameraFrameBuffer frame_buffer;
```



| Type | Description |
|--|--|
| [MLWorldCameraFrameBuffer](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md) | A structure to encapsulate per plane info for each camera frame.  |


Frame buffer data. 





-----------

### frame_type {#mlworldcameraframetype-frame-type}

```cpp
MLWorldCameraFrameType frame_type;
```



| Type | Description |
|--|--|
| [MLWorldCameraFrameType](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraframetype) | Enumeration of camera mode used when capturing a frame.  |


World camera mode used for capturing the camera frames. 





-----------

