---
title: MLDepthCameraFrameBuffer
summary: a structure to encapsulate per plane info for each camera frame. 

---

# MLDepthCameraFrameBuffer

**Module:** **[Camera](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___camera/group___camera.md)**



A structure to encapsulate per plane info for each camera frame.  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[width](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#uint32-t-width)**  |
| uint32_t | **[height](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#uint32-t-height)**  |
| uint32_t | **[stride](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#uint32-t-stride)**  |
| uint32_t | **[bytes_per_unit](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#uint32-t-bytes-per-unit)**  |
| uint32_t | **[size](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#uint32-t-size)**  |
| void * | **[data](/versioned_docs/version-22-Feb-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#void-data)**  |

## Detailed Description

```cpp
struct MLDepthCameraFrameBuffer;
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


Width of the buffer in pixels. 





-----------

### height {#uint32-t-height}

```cpp
uint32_t height;
```


Height of the buffer in pixels. 





-----------

### stride {#uint32-t-stride}

```cpp
uint32_t stride;
```


Stride of the buffer in bytes. 





-----------

### bytes_per_unit {#uint32-t-bytes-per-unit}

```cpp
uint32_t bytes_per_unit;
```


Number of bytes used to represent a single value. 





-----------

### size {#uint32-t-size}

```cpp
uint32_t size;
```


Number of bytes in the buffer. 





-----------

### data {#void-data}

```cpp
void * data;
```


Buffer data. 





-----------


