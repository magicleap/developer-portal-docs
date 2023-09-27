---
title: MLCameraCaptureStreamCaps
summary: a structure to encapsulate stream capabilities. 

---

# MLCameraCaptureStreamCaps

**Module:** **[Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md)**



A structure to encapsulate stream capabilities.  [More...](#detailed-description)


`#include <ml_camera_v2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLCameraCaptureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype) | **[capture_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md#mlcameracapturetype-capture-type)**  |
| int32_t | **[width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md#int32-t-width)**  |
| int32_t | **[height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md#int32-t-height)**  |

## Detailed Description

```cpp
struct MLCameraCaptureStreamCaps;
```

A structure to encapsulate stream capabilities. 

The capabilities for each stream supported by logical camera device can be queried with MLCameraGetStreamCaps.




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### capture_type {#mlcameracapturetype-capture-type}

```cpp
MLCameraCaptureType capture_type;
```



| Type | Description |
|--|--|
| [MLCameraCaptureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype) | Captures operation type.  |


Capture type: video, image, or preview. 





-----------

### width {#int32-t-width}

```cpp
int32_t width;
```


Resolution width. 





-----------

### height {#int32-t-height}

```cpp
int32_t height;
```


Resolution height. 





-----------


