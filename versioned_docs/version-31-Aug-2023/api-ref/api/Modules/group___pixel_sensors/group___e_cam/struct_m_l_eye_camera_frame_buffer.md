---
title: MLEyeCameraFrameBuffer
summary: a structure to encapsulate per plane info for each camera frame. 

---

# MLEyeCameraFrameBuffer

**Module:** **[Pixel Sensors](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)** **/** **[Eye Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md)**



A structure to encapsulate per plane info for each camera frame.  [More...](#detailed-description)


`#include <ml_eye_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame_buffer.md#uint32-t-width)**  |
| uint32_t | **[height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame_buffer.md#uint32-t-height)**  |
| uint32_t | **[stride](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame_buffer.md#uint32-t-stride)**  |
| uint32_t | **[bytes_per_pixel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame_buffer.md#uint32-t-bytes-per-pixel)**  |
| uint32_t | **[pixel_stride](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame_buffer.md#uint32-t-pixel-stride)**  |
| uint32_t | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame_buffer.md#uint32-t-size)**  |
| uint8_t * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame_buffer.md#uint8-t-data)**  |

## Detailed Description

```cpp
struct MLEyeCameraFrameBuffer;
```

A structure to encapsulate per plane info for each camera frame. 




**API Level:**
  * 26




-----------
## Public Attributes Documentation

### width {#uint32-t-width}

```cpp
uint32_t width;
```


Width of the output image in pixels. 





-----------

### height {#uint32-t-height}

```cpp
uint32_t height;
```


Height of the output image in pixels. 





-----------

### stride {#uint32-t-stride}

```cpp
uint32_t stride;
```


Stride of the output image in bytes. 





-----------

### bytes_per_pixel {#uint32-t-bytes-per-pixel}

```cpp
uint32_t bytes_per_pixel;
```


Number of bytes used to represent a pixel. 





-----------

### pixel_stride {#uint32-t-pixel-stride}

```cpp
uint32_t pixel_stride;
```


Distance between 2 consecutive pixels in bytes. 





-----------

### size {#uint32-t-size}

```cpp
uint32_t size;
```


Number of bytes in the image output data. 





-----------

### data {#uint8-t-data}

```cpp
uint8_t * data;
```


Image data. 





-----------


