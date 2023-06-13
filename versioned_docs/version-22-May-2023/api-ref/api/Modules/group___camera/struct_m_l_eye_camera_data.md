---
title: MLEyeCameraData
summary: a structure to encapsulate all the eye camera data. 

---

# MLEyeCameraData

**Module:** **[Camera](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/group___camera.md)**



A structure to encapsulate all the eye camera data.  [More...](#detailed-description)


`#include <ml_eye_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/struct_m_l_eye_camera_data.md#uint32-t-version)**  |
| uint8_t | **[frame_count](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/struct_m_l_eye_camera_data.md#uint8-t-frame-count)**  |
| [MLEyeCameraFrame](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/struct_m_l_eye_camera_frame.md) * | **[frames](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/struct_m_l_eye_camera_data.md#mleyecameraframe-frames)**  |

## Detailed Description

```cpp
struct MLEyeCameraData;
```

A structure to encapsulate all the eye camera data. 

This structure must be initialized by calling [MLEyeCameraDataInit](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mleyecameradatainit) before use.




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

### frame_count {#uint8-t-frame-count}

```cpp
uint8_t frame_count;
```


Number of camera frames. 





-----------

### frames {#mleyecameraframe-frames}

```cpp
MLEyeCameraFrame * frames;
```



| Type | Description |
|--|--|
| [MLEyeCameraFrame](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___camera/struct_m_l_eye_camera_frame.md) * | A structure to encapsulate output data for each camera sensor.  |


Camera frame data. The number of frames is specified by frame_count. 





-----------


