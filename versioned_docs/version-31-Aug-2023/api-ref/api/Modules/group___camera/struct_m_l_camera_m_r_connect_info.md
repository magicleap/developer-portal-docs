---
title: MLCameraMRConnectInfo

---

# MLCameraMRConnectInfo

**Module:** **[Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md)**



 [More...](#detailed-description)


`#include <ml_camera_v2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLCameraMRQuality](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality) | **[quality](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_m_r_connect_info.md#mlcameramrquality-quality)**  |
| [MLCameraMRBlendType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrblendtype) | **[blend_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_m_r_connect_info.md#mlcameramrblendtype-blend-type)**  |
| [MLCameraCaptureFrameRate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate) | **[frame_rate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_m_r_connect_info.md#mlcameracaptureframerate-frame-rate)**  |

## Detailed Description

```cpp
struct MLCameraMRConnectInfo;
```


A structure to encapsulate connection settings for MR capture. 





-----------
## Public Attributes Documentation

### quality {#mlcameramrquality-quality}

```cpp
MLCameraMRQuality quality;
```



| Type | Description |
|--|--|
| [MLCameraMRQuality](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality) | Video Quality enumeration for mixed reality capture.  |


Video quality. 





-----------

### blend_type {#mlcameramrblendtype-blend-type}

```cpp
MLCameraMRBlendType blend_type;
```


Blending type for mixed reality capture. 





-----------

### frame_rate {#mlcameracaptureframerate-frame-rate}

```cpp
MLCameraCaptureFrameRate frame_rate;
```



| Type | Description |
|--|--|
| [MLCameraCaptureFrameRate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate) | Captures frame rate.  |


Capture frame rate. 





-----------


