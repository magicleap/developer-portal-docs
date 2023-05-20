---
title: MLCameraPlaneInfo

---

# MLCameraPlaneInfo

**Module:** **[Camera](/api-ref/api/Modules/group___camera/group___camera.md)**



 [More...](#detailed-description)


`#include <ml_camera_v2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md#uint32-t-version)**  |
| uint32_t | **[width](/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md#uint32-t-width)**  |
| uint32_t | **[height](/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md#uint32-t-height)**  |
| uint32_t | **[stride](/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md#uint32-t-stride)**  |
| uint32_t | **[bytes_per_pixel](/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md#uint32-t-bytes-per-pixel)**  |
| uint32_t | **[pixel_stride](/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md#uint32-t-pixel-stride)**  |
| uint8_t * | **[data](/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md#uint8-t-data)**  |
| uint32_t | **[size](/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md#uint32-t-size)**  |

## Detailed Description

```cpp
struct MLCameraPlaneInfo;
```


Per plane info for captured output. 





-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

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

### data {#uint8-t-data}

```cpp
uint8_t * data;
```


Image data. 





-----------

### size {#uint32-t-size}

```cpp
uint32_t size;
```


Number of bytes in the image output data. 





-----------

