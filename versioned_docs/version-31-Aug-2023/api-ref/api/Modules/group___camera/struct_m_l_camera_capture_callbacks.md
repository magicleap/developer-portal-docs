---
title: MLCameraCaptureCallbacks
summary: capture callbacks to be implemented by client to receive capture status if callback mechanism is used. 

---

# MLCameraCaptureCallbacks

**Module:** **[Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md)**



Capture callbacks to be implemented by client to receive capture status if callback mechanism is used.  [More...](#detailed-description)


`#include <ml_camera_v2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md#uint32-t-version)**  |
| void(*)(const MLCameraResultExtras *extra, void *data) | **[on_capture_failed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md#void-on-capture-failed)** <br></br>Callback is invoked when a capture has failed when the camera device failed to produce a capture result for the request.  |
| void(*)(void *data) | **[on_capture_aborted](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md#void-on-capture-aborted)** <br></br>Callback is invoked when an ongoing video or preview capture or both are aborted due to an error. This is not valid for MR Capture.  |
| void(*)(MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) | **[on_capture_completed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md#void-on-capture-completed)** <br></br>Callback is invoked when capturing single frame is completed and result is available. For MRCapture null metadata handle.  |
| void(*)(const MLCameraOutput *output, const MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) | **[on_image_buffer_available](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md#void-on-image-buffer-available)** <br></br>Callback is invoked when a captured image buffer is available with [MLCameraCaptureType_Image](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-image).  |
| void(*)(const MLCameraOutput *output, const MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) | **[on_video_buffer_available](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md#void-on-video-buffer-available)** <br></br>Callback is invoked when a captured video frame buffer is available with [MLCameraCaptureType_Video](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-video).  |
| void(*)(const MLHandle buffer_handle, const MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) | **[on_preview_buffer_available](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md#void-on-preview-buffer-available)** <br></br>Callback is invoked when a preview video frame buffer is available with [MLCameraCaptureType_Preview](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-preview).  |

## Detailed Description

```cpp
struct MLCameraCaptureCallbacks;
```

Capture callbacks to be implemented by client to receive capture status if callback mechanism is used. 

This structure must be initialized by calling [MLCameraCaptureCallbacksInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameracapturecallbacksinit) before use. 





-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### on_capture_failed {#void-on-capture-failed}

```cpp
void(*)(const MLCameraResultExtras *extra, void *data) on_capture_failed;
```

Callback is invoked when a capture has failed when the camera device failed to produce a capture result for the request. 


| Type | Description |
|--|--|
| void(*)(const MLCameraResultExtras *extra, void *data) | )(const MLCameraResultExtras *extra, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |extra|Carries capture result information of current captured frame. |
|  |data|Custom data to be returned when callback is triggered. This data passed in [MLCameraSetCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetcapturecallbacks). |




-----------

### on_capture_aborted {#void-on-capture-aborted}

```cpp
void(*)(void *data) on_capture_aborted;
```

Callback is invoked when an ongoing video or preview capture or both are aborted due to an error. This is not valid for MR Capture. 


| Type | Description |
|--|--|
| void(*)(void *data) | )(void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |data|Custom data to be returned when callback is triggered. This data passed in [MLCameraSetCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetcapturecallbacks). |




-----------

### on_capture_completed {#void-on-capture-completed}

```cpp
void(*)(MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) on_capture_completed;
```

Callback is invoked when capturing single frame is completed and result is available. For MRCapture null metadata handle. 


| Type | Description |
|--|--|
| void(*)(MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) | )(MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |result_metadata_handle|Represents camera result metadata which could be used as input handle for camera result metadata related functions. |
|  |extra|Carries capture result information of current captured frame. |
|  |data|Custom data to be returned when callback is triggered. This data passed in [MLCameraSetCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetcapturecallbacks). |




-----------

### on_image_buffer_available {#void-on-image-buffer-available}

```cpp
void(*)(const MLCameraOutput *output, const MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) on_image_buffer_available;
```

Callback is invoked when a captured image buffer is available with [MLCameraCaptureType_Image](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-image). 


| Type | Description |
|--|--|
| void(*)(const MLCameraOutput *output, const MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) | )(const MLCameraOutput *output, const MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |output|Provides image properties and buffer pointer to image data. |
|  |result_metadata_handle|Handle to metadata of captured frame. |
|  |extra|Carries capture result information of current captured frame. |
|  |data|Custom data to be returned when callback is triggered. This data passed in [MLCameraSetCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetcapturecallbacks). |




-----------

### on_video_buffer_available {#void-on-video-buffer-available}

```cpp
void(*)(const MLCameraOutput *output, const MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) on_video_buffer_available;
```

Callback is invoked when a captured video frame buffer is available with [MLCameraCaptureType_Video](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-video). 


| Type | Description |
|--|--|
| void(*)(const MLCameraOutput *output, const MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) | )(const MLCameraOutput *output, const MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |output|Provides video frame properties and buffer pointer to video frame data. |
|  |result_metadata_handle|Handle to metadata of captured frame. |
|  |extra|Carries capture result information of current captured frame. |
|  |data|Custom data to be returned when callback is triggered. This data passed in [MLCameraSetCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetcapturecallbacks). |




-----------

### on_preview_buffer_available {#void-on-preview-buffer-available}

```cpp
void(*)(const MLHandle buffer_handle, const MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) on_preview_buffer_available;
```

Callback is invoked when a preview video frame buffer is available with [MLCameraCaptureType_Preview](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-preview). 


| Type | Description |
|--|--|
| void(*)(const MLHandle buffer_handle, const MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) | )(const MLHandle buffer_handle, const MLHandle result_metadata_handle, const MLCameraResultExtras *extra, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |buffer_handle|Handle of preview buffer allocated for preview. |
|  |result_metadata_handle|Handle to metadata of captured frame. |
|  |extra|Carries capture result information of current captured frame. |
|  |data|Custom data to be returned when callback is triggered. This data passed in [MLCameraSetCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetcapturecallbacks). |
This callback is not valid for MR Capture since it does not have preview support.





-----------


