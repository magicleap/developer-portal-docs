---
title: MLCameraCaptureStreamConfig

---

# MLCameraCaptureStreamConfig

**Module:** **[Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md)**



 [More...](#detailed-description)


`#include <ml_camera_v2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLCameraCaptureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype) | **[capture_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md#mlcameracapturetype-capture-type)**  |
| int32_t | **[width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md#int32-t-width)**  |
| int32_t | **[height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md#int32-t-height)**  |
| [MLCameraOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat) | **[output_format](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md#mlcameraoutputformat-output-format)**  |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[native_surface_handle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md#mlhandle-native-surface-handle)** <br></br>Native surface.  |

## Detailed Description

```cpp
struct MLCameraCaptureStreamConfig;
```


A structure to encapsulate stream configurations. 





-----------
## Public Attributes Documentation

### capture_type {#mlcameracapturetype-capture-type}

```cpp
MLCameraCaptureType capture_type;
```



| Type | Description |
|--|--|
| [MLCameraCaptureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype) | Captures operation type.  |


Capture type. 





-----------

### width {#int32-t-width}

```cpp
int32_t width;
```


Specifies resolution width. 





-----------

### height {#int32-t-height}

```cpp
int32_t height;
```


Specifies resolution height. 





-----------

### output_format {#mlcameraoutputformat-output-format}

```cpp
MLCameraOutputFormat output_format;
```



| Type | Description |
|--|--|
| [MLCameraOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat) | Captured output format. These three parameters determine which formats are supported:  |


Specifies output format. 





-----------

### native_surface_handle {#mlhandle-native-surface-handle}

```cpp
MLHandle native_surface_handle;
```

Native surface. 


| Type | Description |
|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |


Used for compressed video recording. Handle returned by MLMediaRecorderGetInputSurface should be provided. Maximum video recording resolution supported is 4K(3840x2160). Only valid for capture type [MLCameraCaptureType_Video](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-video). Set to ML_INVALID_HANDLE for yuv/rgba video capture. 





-----------


