---
title: MLWorldCameraFrameBuffer
summary: a structure to encapsulate per plane info for each camera frame. 

---

# MLWorldCameraFrameBuffer

**Module:** **[Pixel Sensors](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[World Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md)**



A structure to encapsulate per plane info for each camera frame.  [More...](#detailed-description)


`#include <ml_world_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md#uint32-t-width)**  |
| uint32_t | **[height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md#uint32-t-height)**  |
| uint32_t | **[stride](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md#uint32-t-stride)**  |
| uint32_t | **[bytes_per_pixel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md#uint32-t-bytes-per-pixel)**  |
| uint32_t | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md#uint32-t-size)**  |
| uint8_t * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md#uint8-t-data)**  |

## Detailed Description

```cpp
struct MLWorldCameraFrameBuffer;
```

A structure to encapsulate per plane info for each camera frame. 




**API Level:**
  * 23




-----------
## Public Attributes Documentation

### width {#uint32-t-width}

```cpp
uint32_t width;
```


Width of the frame in pixels. 





-----------

### height {#uint32-t-height}

```cpp
uint32_t height;
```


Height of the frame in pixels. 





-----------

### stride {#uint32-t-stride}

```cpp
uint32_t stride;
```


Stride of the frame in bytes. 





-----------

### bytes_per_pixel {#uint32-t-bytes-per-pixel}

```cpp
uint32_t bytes_per_pixel;
```


Number of bytes used to represent a single value. 





-----------

### size {#uint32-t-size}

```cpp
uint32_t size;
```


Number of bytes in the frame. 





-----------

### data {#uint8-t-data}

```cpp
uint8_t * data;
```


Buffer data. 





-----------


