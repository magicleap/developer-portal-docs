---
title: MLDepthCameraData
summary: a structure to encapsulate output data for each camera sensor. 

---

# MLDepthCameraData

**Module:** **[Camera](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md)**



A structure to encapsulate output data for each camera sensor.  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#uint32-t-version)**  |
| int64_t | **[frame_number](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#int64-t-frame-number)**  |
| [MLTime](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[frame_timestamp](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mltime-frame-timestamp)**  |
| [MLDepthCameraFrameType](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraframetype) | **[frame_type](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcameraframetype-frame-type)**  |
| [MLTransform](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) | **[camera_pose](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mltransform-camera-pose)**  |
| [MLDepthCameraIntrinsics](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_intrinsics.md) | **[intrinsics](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcameraintrinsics-intrinsics)**  |
| [MLDepthCameraDepthImage](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthimage) * | **[depth_image](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcameradepthimage-depth-image)**  |
| [MLDepthCameraConfidenceBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraconfidencebuffer) * | **[confidence](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcameraconfidencebuffer-confidence)**  |
| [MLDepthCameraDepthFlagsBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer) * | **[flags](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcameradepthflagsbuffer-flags)**  |
| [MLDepthCameraAmbientRawDepthImage](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage) * | **[ambient_raw_depth_image](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcameraambientrawdepthimage-ambient-raw-depth-image)**  |

## Detailed Description

```cpp
struct MLDepthCameraData;
```

A structure to encapsulate output data for each camera sensor. 

This structure must be initialized by calling [MLDepthCameraDataInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mldepthcameradatainit) before use.




**API Level:**
  * 23 




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### frame_number {#int64-t-frame-number}

```cpp
int64_t frame_number;
```


A 64bit integer to index the frame number associated with this frame. 





-----------

### frame_timestamp {#mltime-frame-timestamp}

```cpp
MLTime frame_timestamp;
```


Frame timestamp specifies the time at which the frame was captured. 





-----------

### frame_type {#mldepthcameraframetype-frame-type}

```cpp
MLDepthCameraFrameType frame_type;
```



| Type | Description |
|--|--|
| [MLDepthCameraFrameType](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraframetype) | Enumeration of camera mode used when capturing a frame.  |


Depth camera mode used for capturing this frame. 





-----------

### camera_pose {#mltransform-camera-pose}

```cpp
MLTransform camera_pose;
```


Depth camera pose in the world co-ordinate system. 





-----------

### intrinsics {#mldepthcameraintrinsics-intrinsics}

```cpp
MLDepthCameraIntrinsics intrinsics;
```



| Type | Description |
|--|--|
| [MLDepthCameraIntrinsics](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_intrinsics.md) | Depth camera intrinsic parameters.  |


Camera intrinsic parameters. 





-----------

### depth_image {#mldepthcameradepthimage-depth-image}

```cpp
MLDepthCameraDepthImage * depth_image;
```



| Type | Description |
|--|--|
| [MLDepthCameraDepthImage](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthimage) * | Depth image.  |


Depth image. 





-----------

### confidence {#mldepthcameraconfidencebuffer-confidence}

```cpp
MLDepthCameraConfidenceBuffer * confidence;
```



| Type | Description |
|--|--|
| [MLDepthCameraConfidenceBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraconfidencebuffer) * | Confidence score.  |


Confidence score. 





-----------

### flags {#mldepthcameradepthflagsbuffer-flags}

```cpp
MLDepthCameraDepthFlagsBuffer * flags;
```



| Type | Description |
|--|--|
| [MLDepthCameraDepthFlagsBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer) * | Flags.  |


Depth flags. 





-----------

### ambient_raw_depth_image {#mldepthcameraambientrawdepthimage-ambient-raw-depth-image}

```cpp
MLDepthCameraAmbientRawDepthImage * ambient_raw_depth_image;
```



| Type | Description |
|--|--|
| [MLDepthCameraAmbientRawDepthImage](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage) * | Ambient raw depth image.  |


Ambient raw depth image. 





-----------


