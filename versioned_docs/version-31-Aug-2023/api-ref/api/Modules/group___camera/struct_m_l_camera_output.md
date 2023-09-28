---
title: MLCameraOutput

---

# MLCameraOutput

**Module:** **[Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md)**



 [More...](#detailed-description)


`#include <ml_camera_v2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_output.md#uint32-t-version)**  |
| uint8_t | **[plane_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_output.md#uint8-t-plane-count)** <br></br>Number of output image planes:   1 for compressed output such as JPEG stream,   3 for separate color component output such as YUV/RGB.  |
| [MLCameraPlaneInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md)[MLCamera_MaxImagePlanes] | **[planes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_output.md#mlcameraplaneinfo-planes)**  |
| [MLCameraOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat) | **[format](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_output.md#mlcameraoutputformat-format)**  |

## Detailed Description

```cpp
struct MLCameraOutput;
```


A structure to encapsulate captured output. 





-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### plane_count {#uint8-t-plane-count}

```cpp
uint8_t plane_count;
```

Number of output image planes:   1 for compressed output such as JPEG stream,   3 for separate color component output such as YUV/RGB. 





-----------

### planes {#mlcameraplaneinfo-planes}

```cpp
MLCameraPlaneInfo[MLCamera_MaxImagePlanes] planes;
```



| Type | Description |
|--|--|
| [MLCameraPlaneInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md)[MLCamera_MaxImagePlanes] | [MLCamera_MaxImagePlanes] |


Output image plane info. The number of output planes is specified by plane_count. 





-----------

### format {#mlcameraoutputformat-format}

```cpp
MLCameraOutputFormat format;
```



| Type | Description |
|--|--|
| [MLCameraOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat) | Captured output format. These three parameters determine which formats are supported:  |


Supported output format specified by MLCameraOutputFormat. 





-----------


