---
title: ml_depth_camera.h

---

# ml_depth_camera.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLDepthCameraSettings](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md)** <br></br>A structure to encapsulate the camera settings.  |
| struct | **[MLDepthCameraIntrinsics](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_intrinsics.md)** <br></br>Depth camera intrinsic parameters.  |
| struct | **[MLDepthCameraFrameBuffer](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| struct | **[MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md)** <br></br>A structure to encapsulate output data for each camera sensor.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLDepthCameraSettings](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) | **[MLDepthCameraSettings](/api-ref/api/Modules/group___camera/group___camera.md#struct-mldepthcamerasettings)** <br></br>A structure to encapsulate the camera settings.  |
| typedef struct [MLDepthCameraIntrinsics](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_intrinsics.md) | **[MLDepthCameraIntrinsics](/api-ref/api/Modules/group___camera/group___camera.md#struct-mldepthcameraintrinsics)** <br></br>Depth camera intrinsic parameters.  |
| typedef struct [MLDepthCameraFrameBuffer](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraFrameBuffer](/api-ref/api/Modules/group___camera/group___camera.md#struct-mldepthcameraframebuffer)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| typedef [MLDepthCameraFrameBuffer](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraDepthImage](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthimage)** <br></br>Depth image.  |
| typedef [MLDepthCameraFrameBuffer](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraConfidenceBuffer](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraconfidencebuffer)** <br></br>Confidence score.  |
| typedef [MLDepthCameraFrameBuffer](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraDepthFlagsBuffer](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer)** <br></br>Flags.  |
| typedef [MLDepthCameraFrameBuffer](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraAmbientRawDepthImage](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage)** <br></br>Ambient raw depth image.  |
| typedef [MLDepthCameraFrameBuffer](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraRawDepthImage](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcamerarawdepthimage)** <br></br>Raw depth image.  |
| typedef struct [MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) | **[MLDepthCameraData](/api-ref/api/Modules/group___camera/group___camera.md#struct-mldepthcameradata)** <br></br>A structure to encapsulate output data for each camera sensor.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 8](/api-ref/api/Modules/group___camera/group___camera.md#enums-anonymous-enum-8)** <br></br> { <br></br>[MLDepthCameraIntrinsics_MaxDistortionCoefficients](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraintrinsics-maxdistortioncoefficients) = 5<br></br>} |
| enum | **[MLDepthCameraMode](/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameramode)** <br></br> { <br></br>[MLDepthCameraMode_LongRange](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameramode-longrange) = 1 << 0,<br></br> [MLDepthCameraMode_Ensure32Bits](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameramode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of depth camera modes.  |
| enum | **[MLDepthCameraFrameType](/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraframetype)** <br></br> { <br></br>[MLDepthCameraFrameType_Unknown](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframetype-unknown) = 0,<br></br> [MLDepthCameraFrameType_LongRange](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframetype-longrange) = 1,<br></br> [MLDepthCameraFrameType_Ensure32Bits](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of camera mode used when capturing a frame.  |
| enum | **[MLDepthCameraFlags](/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraflags)** <br></br> { <br></br>[MLDepthCameraFlags_DepthImage](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-depthimage) = 1 << 0,<br></br> [MLDepthCameraFlags_Confidence](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-confidence) = 1 << 1,<br></br> [MLDepthCameraFlags_DepthFlags](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-depthflags) = 1 << 2,<br></br> [MLDepthCameraFlags_AmbientRawDepthImage](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-ambientrawdepthimage) = 1 << 3,<br></br> [MLDepthCameraFlags_RawDepthImage](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-rawdepthimage) = 1 << 4,<br></br> [MLDepthCameraFlags_Ensure32Bits](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of flags to select data requested from depth camera.  |
| enum | **[MLDepthCameraDepthFlags](/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags)** <br></br> { <br></br>[MLDepthCameraDepthFlags_Valid](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-valid) = 0 << 0,<br></br> [MLDepthCameraDepthFlags_Invalid](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-invalid) = 1 << 0,<br></br> [MLDepthCameraDepthFlags_Saturated](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-saturated) = 1 << 1,<br></br> [MLDepthCameraDepthFlags_Inconsistent](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-inconsistent) = 1 << 2,<br></br> [MLDepthCameraDepthFlags_LowSignal](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-lowsignal) = 1 << 3,<br></br> [MLDepthCameraDepthFlags_FlyingPixel](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-flyingpixel) = 1 << 4,<br></br> [MLDepthCameraDepthFlags_Masked](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-masked) = 1 << 5,<br></br> [MLDepthCameraDepthFlags_SBI](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-sbi) = 1 << 8,<br></br> [MLDepthCameraDepthFlags_StrayLight](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-straylight) = 1 << 9,<br></br> [MLDepthCameraDepthFlags_ConnectedComponent](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-connectedcomponent) = 1 << 10,<br></br> [MLDepthCameraDepthFlags_Ensure32Bits](/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of flags to select data requested from depth camera.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLDepthCameraSettingsInit](/api-ref/api/Modules/group___camera/group___camera.md#void-mldepthcamerasettingsinit)**([MLDepthCameraSettings](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) * inout_handle)<br></br>Initialize the connect handle structure. Shall be called before calling [MLDepthCameraConnect()](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect).  |
| void | **[MLDepthCameraDataInit](/api-ref/api/Modules/group___camera/group___camera.md#void-mldepthcameradatainit)**([MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) * inout_depth_camera_data)<br></br>Initialize [MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) with version.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraConnect](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect)**(const [MLDepthCameraSettings](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) * settings, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Connect to depth camera.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraUpdateSettings](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraupdatesettings)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLDepthCameraSettings](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) * settings)<br></br>Update the depth camera settings.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraGetLatestDepthData](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameragetlatestdepthdata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t timeout_ms, [MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) ** out_data)<br></br>Poll for Frames.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraReleaseDepthData](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcamerareleasedepthdata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) * depth_camera_data)<br></br>Releases specified [MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraDisconnect](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameradisconnect)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Disconnect from depth camera.  |

## Enums Documentation

### Anonymous Enum 8 {#enums-anonymous-enum-8}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraIntrinsics_MaxDistortionCoefficients |  5| Default distortion vector size. |








-----------

### MLDepthCameraMode {#enums-mldepthcameramode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraMode_LongRange |  1 << 0| Long range mode. Under normal operations long range mode has a maximum frequency of 5fps and a range of up to 5m, in some cases this can go as far 7.5m. .|
| MLDepthCameraMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of depth camera modes. 

Future release may add support to other modes. 





-----------

### MLDepthCameraFrameType {#enums-mldepthcameraframetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraFrameType_Unknown |  0| None. |
| MLDepthCameraFrameType_LongRange |  1| Frame captured using [MLDepthCameraMode_LongRange](/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameramode-longrange) mode. .|
| MLDepthCameraFrameType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of camera mode used when capturing a frame. 





-----------

### MLDepthCameraFlags {#enums-mldepthcameraflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraFlags_DepthImage |  1 << 0| Enable MLDepthCameraDepthImage. See [MLDepthCameraDepthImage](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthimage) for more details. |
| MLDepthCameraFlags_Confidence |  1 << 1| Enable MLDepthCameraConfidenceBuffer. See [MLDepthCameraConfidenceBuffer](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraconfidencebuffer) for more details. |
| MLDepthCameraFlags_DepthFlags |  1 << 2| Enable MLDepthCameraDepthFlagsBuffer. See [MLDepthCameraDepthFlagsBuffer](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer) for more details. |
| MLDepthCameraFlags_AmbientRawDepthImage |  1 << 3| Enable MLDepthCameraAmbientRawDepthImage. See [MLDepthCameraAmbientRawDepthImage](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage) for more details. |
| MLDepthCameraFlags_RawDepthImage |  1 << 4| Enable MLDepthCameraRawDepthImage. See [MLDepthCameraRawDepthImage](/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcamerarawdepthimage) for more details. |
| MLDepthCameraFlags_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of flags to select data requested from depth camera. 





-----------

### MLDepthCameraDepthFlags {#enums-mldepthcameradepthflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraDepthFlags_Valid |  0 << 0| Valid pixel. Indicates that there is no additional flag data for this pixel. .|
| MLDepthCameraDepthFlags_Invalid |  1 << 0| Invalid. This bit is set to one to indicate that one or more flags from below have been set. Depending on the use case the application can correlate the flag data and corresponding pixel data to determine how to handle the pixel data. .|
| MLDepthCameraDepthFlags_Saturated |  1 << 1| Pixel saturated. The pixel intensity is either below the min or the max threshold value. .|
| MLDepthCameraDepthFlags_Inconsistent |  1 << 2| Inconsistent data. Inconsistent data received when capturing frames. This can happen due to fast motion. .|
| MLDepthCameraDepthFlags_LowSignal |  1 << 3| Low signal. Pixel has very low signal to noise ratio. One example of when this can happen is for pixels in far end of the range. .|
| MLDepthCameraDepthFlags_FlyingPixel |  1 << 4| Flying pixel. This typically happens when there is step jump in the distance of adjoining pixels in the scene. Example: When you open a door looking into the room the edges along the door's edges can cause flying pixels. .|
| MLDepthCameraDepthFlags_Masked |  1 << 5| Masked. If this bit is on it indicates that the corresponding pixel may not be within the projector's illumination cone. .|
| MLDepthCameraDepthFlags_SBI |  1 << 8| SBI. This bit will be set when there is high noise. .|
| MLDepthCameraDepthFlags_StrayLight |  1 << 9| Stray light. This could happen when there is another light source apart from the depth camera projector. This could also lead to MLDepthCameraDepthFlags_LowSignal. .|
| MLDepthCameraDepthFlags_ConnectedComponent |  1 << 10| Connected component. If a small group of MLDepthCameraDepthFlags_Valid is sorrunded by a set of MLDepthCameraDepthFlags_Invalid then this bit will be set to 1. .|
| MLDepthCameraDepthFlags_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of flags to select data requested from depth camera. 





-----------


## Types Documentation

### MLDepthCameraSettings {#struct-mldepthcamerasettings}

```cpp
typedef struct MLDepthCameraSettings MLDepthCameraSettings;
```

A structure to encapsulate the camera settings. 

This structure must be initialized by calling [MLDepthCameraSettingsInit](/api-ref/api/Modules/group___camera/group___camera.md#void-mldepthcamerasettingsinit) before use.



[More Info](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md)


**API Level:**
  * 23




-----------

### MLDepthCameraIntrinsics {#struct-mldepthcameraintrinsics}

```cpp
typedef struct MLDepthCameraIntrinsics MLDepthCameraIntrinsics;
```

Depth camera intrinsic parameters. 



[More Info](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_intrinsics.md)


**API Level:**
  * 23




-----------

### MLDepthCameraFrameBuffer {#struct-mldepthcameraframebuffer}

```cpp
typedef struct MLDepthCameraFrameBuffer MLDepthCameraFrameBuffer;
```

A structure to encapsulate per plane info for each camera frame. 



[More Info](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)


**API Level:**
  * 23




-----------

### MLDepthCameraDepthImage {#mldepthcameraframebuffer-mldepthcameradepthimage}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraDepthImage;
```

Depth image. 

Depth image stores the depth data from the depth camera. Depth is represented in meters and gives the radial distance of the real world location from the depth camera coordinate frame. See [MLDepthCameraIntrinsics](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_intrinsics.md) and [MLDepthCameraData.camera_pose](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mltransform-camera-pose) for more details.

Cast the [MLDepthCameraFrameBuffer.data](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraConfidenceBuffer {#mldepthcameraframebuffer-mldepthcameraconfidencebuffer}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraConfidenceBuffer;
```

Confidence score. 

Confidence buffer stores the confidence values for each pixel in the MLDepthCameraDepthImage. The confidence score is derived from the sensor noise and it is not normalized. The higher the value the higher the confidence. Applications can determine what confidence threshold to use based on their use case.

Cast the [MLDepthCameraFrameBuffer.data](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraDepthFlagsBuffer {#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraDepthFlagsBuffer;
```

Flags. 

Each pixel in the MLDepthCameraDepthImage will have an associated set of flags.

Cast the [MLDepthCameraFrameBuffer.data](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#void-data) to uint32_t data type. 



[More Info](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraAmbientRawDepthImage {#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraAmbientRawDepthImage;
```

Ambient raw depth image. 

This is the raw depth camera sensor data captured without the depth camera illumination and corresponds to the amount of ambient light incident on the sensor.

Cast the [MLDepthCameraFrameBuffer.data](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraRawDepthImage {#mldepthcameraframebuffer-mldepthcamerarawdepthimage}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraRawDepthImage;
```

Raw depth image. 

This is the raw depth camera sensor data captured with the depth camera illumination and corresponds to the amount of total light incident on the sensor.

Cast the [MLDepthCameraFrameBuffer.data](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraData {#struct-mldepthcameradata}

```cpp
typedef struct MLDepthCameraData MLDepthCameraData;
```

A structure to encapsulate output data for each camera sensor. 

This structure must be initialized by calling [MLDepthCameraDataInit](/api-ref/api/Modules/group___camera/group___camera.md#void-mldepthcameradatainit) before use.



[More Info](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md)


**API Level:**
  * 25




-----------


## Functions Documentation

### MLDepthCameraSettingsInit {#void-mldepthcamerasettingsinit}

```cpp
static inline void MLDepthCameraSettingsInit(
    MLDepthCameraSettings * inout_handle
)
```

Initialize the connect handle structure. Shall be called before calling [MLDepthCameraConnect()](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLDepthCameraSettings](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) * |inout_handle|[MLDepthCameraSettings](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) structure to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 23




-----------

### MLDepthCameraDataInit {#void-mldepthcameradatainit}

```cpp
static inline void MLDepthCameraDataInit(
    MLDepthCameraData * inout_depth_camera_data
)
```

Initialize [MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) * |inout_depth_camera_data|Set up the version for inout_depth_camera_data. |



**API Level:**
  * 25




-----------

### MLDepthCameraConnect {#mlresult-mldepthcameraconnect}

```cpp
MLResult MLDepthCameraConnect(
    const MLDepthCameraSettings * settings,
    MLHandle * out_handle
)
```

Connect to depth camera. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLDepthCameraSettings](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) * |settings|A pointer to [MLDepthCameraSettings](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) structure. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to camera handle to be used in later APIs.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_LicenseError|Necessary license is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Connected to camera device(s) successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * com.magicleap.permission.DEPTH_CAMERA (protection level: dangerous) 





**API Level:**
  * 23




-----------

### MLDepthCameraUpdateSettings {#mlresult-mldepthcameraupdatesettings}

```cpp
MLResult MLDepthCameraUpdateSettings(
    MLHandle handle,
    const MLDepthCameraSettings * settings
)
```

Update the depth camera settings. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect). |
| const [MLDepthCameraSettings](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) * |settings|Pointer to [MLDepthCameraSettings](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Settings updated successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 





**API Level:**
  * 23




-----------

### MLDepthCameraGetLatestDepthData {#mlresult-mldepthcameragetlatestdepthdata}

```cpp
MLResult MLDepthCameraGetLatestDepthData(
    MLHandle handle,
    uint64_t timeout_ms,
    MLDepthCameraData ** out_data
)
```

Poll for Frames. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect). |
| uint64_t |timeout_ms|Timeout in milliseconds. |
| [MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) ** |out_data|Depth camera data. Will be set to NULL if no valid data is available at this time.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Depth camera data fetched successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|Returned because no new frame available at this time. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


Returns [MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) with this latest data when available. The memory is owned by the system. Application should copy the data it needs to cache it and then release the memory by calling #MLDepthCameraReleaseCameraData.

This is a blocking call. API is not thread safe.

If there are no new depth data frames within the timeout_ms duration then the API will return MLResult_Timeout.




**API Level:**
  * 23




-----------

### MLDepthCameraReleaseDepthData {#mlresult-mldepthcamerareleasedepthdata}

```cpp
MLResult MLDepthCameraReleaseDepthData(
    MLHandle handle,
    MLDepthCameraData * depth_camera_data
)
```

Releases specified [MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect)|
| [MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) * |depth_camera_data|Pointer to a valid [MLDepthCameraData](/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released depth camera data. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|depth_camera_data parameter was not valid (NULL). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


This function should be called exactly once for each successfull call to #MLDepthCameraGetLatestCameraData.





-----------

### MLDepthCameraDisconnect {#mlresult-mldepthcameradisconnect}

```cpp
MLResult MLDepthCameraDisconnect(
    MLHandle handle
)
```

Disconnect from depth camera. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Disconnected camera successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to disconnect camera.|
**Required Permissions**:

  * None 


This will disconnect from the depth camera.




**API Level:**
  * 23




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2022 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#include "ml_api.h"
#include "ml_types.h"

#include <string.h>

ML_EXTERN_C_BEGIN

enum {
  MLDepthCameraIntrinsics_MaxDistortionCoefficients = 5
};

typedef enum MLDepthCameraMode {
  MLDepthCameraMode_LongRange = 1 << 0,
  MLDepthCameraMode_Ensure32Bits = 0x7FFFFFFF
} MLDepthCameraMode;

typedef enum MLDepthCameraFrameType {
  MLDepthCameraFrameType_Unknown = 0,
  MLDepthCameraFrameType_LongRange = 1,
  MLDepthCameraFrameType_Ensure32Bits = 0x7FFFFFFF
} MLDepthCameraFrameType;

typedef enum MLDepthCameraFlags {
  MLDepthCameraFlags_DepthImage = 1 << 0,
  MLDepthCameraFlags_Confidence = 1 << 1,
  MLDepthCameraFlags_DepthFlags = 1 << 2,
  MLDepthCameraFlags_AmbientRawDepthImage = 1 << 3,
  MLDepthCameraFlags_RawDepthImage = 1 << 4,
  MLDepthCameraFlags_Ensure32Bits = 0x7FFFFFFF
} MLDepthCameraFlags;

typedef enum MLDepthCameraDepthFlags {
  MLDepthCameraDepthFlags_Valid = 0 << 0,
  MLDepthCameraDepthFlags_Invalid = 1 << 0,
  MLDepthCameraDepthFlags_Saturated = 1 << 1,
  MLDepthCameraDepthFlags_Inconsistent = 1 << 2,
  MLDepthCameraDepthFlags_LowSignal = 1 << 3,
  MLDepthCameraDepthFlags_FlyingPixel = 1 << 4,
  MLDepthCameraDepthFlags_Masked = 1 << 5,
  MLDepthCameraDepthFlags_SBI = 1 << 8,
  MLDepthCameraDepthFlags_StrayLight = 1 << 9,
  MLDepthCameraDepthFlags_ConnectedComponent = 1 << 10,
  MLDepthCameraDepthFlags_Ensure32Bits = 0x7FFFFFFF
} MLDepthCameraDepthFlags;


typedef struct MLDepthCameraSettings {
  uint32_t version;
  uint32_t flags;
  uint32_t mode;
} MLDepthCameraSettings;

ML_STATIC_INLINE void MLDepthCameraSettingsInit(MLDepthCameraSettings *inout_handle) {
  if (inout_handle) {
    memset(inout_handle, 0, sizeof(MLDepthCameraSettings));
    inout_handle->version = 1;
    inout_handle->flags = MLDepthCameraFlags_DepthImage;
    inout_handle->mode = MLDepthCameraMode_LongRange;
  }
}

typedef struct MLDepthCameraIntrinsics {
  uint32_t width;
  uint32_t height;
  MLVec2f focal_length;
  MLVec2f principal_point;
  float fov;
  double distortion[MLDepthCameraIntrinsics_MaxDistortionCoefficients];
} MLDepthCameraIntrinsics;

typedef struct MLDepthCameraFrameBuffer {
  uint32_t width;
  uint32_t height;
  uint32_t stride;
  uint32_t bytes_per_unit;
  uint32_t size;
  void *data;
} MLDepthCameraFrameBuffer;

typedef MLDepthCameraFrameBuffer MLDepthCameraDepthImage;

typedef MLDepthCameraFrameBuffer MLDepthCameraConfidenceBuffer;

typedef MLDepthCameraFrameBuffer MLDepthCameraDepthFlagsBuffer;

typedef MLDepthCameraFrameBuffer MLDepthCameraAmbientRawDepthImage;

typedef MLDepthCameraFrameBuffer MLDepthCameraRawDepthImage;

typedef struct MLDepthCameraData {
  uint32_t version;
  int64_t frame_number;
  MLTime frame_timestamp;
  MLDepthCameraFrameType frame_type;
  MLTransform camera_pose;
  MLDepthCameraIntrinsics intrinsics;
  MLDepthCameraDepthImage *depth_image;
  MLDepthCameraConfidenceBuffer *confidence;
  MLDepthCameraDepthFlagsBuffer *flags;
  MLDepthCameraAmbientRawDepthImage *ambient_raw_depth_image;
  MLDepthCameraRawDepthImage *raw_depth_image;
} MLDepthCameraData;

ML_STATIC_INLINE void MLDepthCameraDataInit(MLDepthCameraData *inout_depth_camera_data) {
  if (inout_depth_camera_data) {
    memset(inout_depth_camera_data, 0, sizeof(MLDepthCameraData));
    inout_depth_camera_data->version = 2;
  }
}

ML_API MLResult ML_CALL MLDepthCameraConnect(const MLDepthCameraSettings *settings, MLHandle *out_handle);

ML_API MLResult ML_CALL MLDepthCameraUpdateSettings(MLHandle handle, const MLDepthCameraSettings *settings);

ML_API MLResult ML_CALL MLDepthCameraGetLatestDepthData(MLHandle handle, uint64_t timeout_ms, MLDepthCameraData **out_data);

ML_API MLResult ML_CALL MLDepthCameraReleaseDepthData(MLHandle handle, MLDepthCameraData *depth_camera_data);

ML_API MLResult ML_CALL MLDepthCameraDisconnect(MLHandle handle);

ML_EXTERN_C_END
```



