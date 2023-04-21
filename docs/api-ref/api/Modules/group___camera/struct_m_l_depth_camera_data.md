---
title: MLDepthCameraData
summary: a structure to encapsulate output data for each camera sensor. 

---

# MLDepthCameraData

**Module:** **[Camera](/api-ref/api/Modules/group___camera/group___camera.md)**



A structure to encapsulate output data for each camera sensor.  [More...](#detailed-description)


`#include <ml_depth_camera.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#uint32-t-version)**  |
| int64_t | **[frame_number](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#int64-t-frame-number)**  |
| [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[frame_timestamp](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mltime-frame-timestamp)**  |
| [MLDepthCameraFrameType](/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraframetype) | **[frame_type](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcameraframetype-frame-type)**  |
| [MLTransform](/api-ref/api/Modules/group___common/struct_m_l_transform.md) | **[camera_pose](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mltransform-camera-pose)**  |
| [MLDepthCameraIntrinsics](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_intrinsics.md) | **[intrinsics](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcameraintrinsics-intrinsics)**  |
| [MLDepthCameraDepthImage](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthimage) * | **[depth_image](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcameradepthimage-depth-image)**  |
| [MLDepthCameraConfidenceBuffer](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraconfidencebuffer) * | **[confidence](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcameraconfidencebuffer-confidence)**  |
| [MLDepthCameraDepthFlagsBuffer](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer) * | **[flags](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcameradepthflagsbuffer-flags)**  |
| [MLDepthCameraAmbientRawDepthImage](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage) * | **[ambient_raw_depth_image](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcameraambientrawdepthimage-ambient-raw-depth-image)** <br></br>Ambient raw depth image. This is the raw sensor data captured when the projector is off.  |
| [MLDepthCameraRawDepthImage](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcamerarawdepthimage) * | **[raw_depth_image](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mldepthcamerarawdepthimage-raw-depth-image)** <br></br>Raw depth image. This is the raw sensor data captured when the projector is on.  |

## Detailed Description

```cpp
struct MLDepthCameraData;
```

A structure to encapsulate output data for each camera sensor. 

This structure must be initialized by calling [MLDepthCameraDataInit](/api-ref/api/Modules/group___camera/group___camera.md#void-mldepthcameradatainit) before use.




**API Level:\n 25**
  * 




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
| [MLDepthCameraFrameType](/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraframetype) | Enumeration of camera mode used when capturing a frame.  |


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
| [MLDepthCameraIntrinsics](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_intrinsics.md) | Depth camera intrinsic parameters.  |


Camera intrinsic parameters. 





-----------

### depth_image {#mldepthcameradepthimage-depth-image}

```cpp
MLDepthCameraDepthImage * depth_image;
```



| Type | Description |
|--|--|
| [MLDepthCameraDepthImage](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthimage) * | Depth image.  |


Depth image. 





-----------

### confidence {#mldepthcameraconfidencebuffer-confidence}

```cpp
MLDepthCameraConfidenceBuffer * confidence;
```



| Type | Description |
|--|--|
| [MLDepthCameraConfidenceBuffer](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraconfidencebuffer) * | Confidence score.  |


Confidence score. 





-----------

### flags {#mldepthcameradepthflagsbuffer-flags}

```cpp
MLDepthCameraDepthFlagsBuffer * flags;
```



| Type | Description |
|--|--|
| [MLDepthCameraDepthFlagsBuffer](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer) * | Flags.  |


Depth flags. 





-----------

### ambient_raw_depth_image {#mldepthcameraambientrawdepthimage-ambient-raw-depth-image}

```cpp
MLDepthCameraAmbientRawDepthImage * ambient_raw_depth_image;
```

Ambient raw depth image. This is the raw sensor data captured when the projector is off. 


| Type | Description |
|--|--|
| [MLDepthCameraAmbientRawDepthImage](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage) * | Ambient raw depth image.  |






-----------

### raw_depth_image {#mldepthcamerarawdepthimage-raw-depth-image}

```cpp
MLDepthCameraRawDepthImage * raw_depth_image;
```

Raw depth image. This is the raw sensor data captured when the projector is on. 


| Type | Description |
|--|--|
| [MLDepthCameraRawDepthImage](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcamerarawdepthimage) * | Raw depth image.  |






-----------

