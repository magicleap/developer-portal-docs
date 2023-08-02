---
title: Depth Camera
summary: apis to access the depth camera data. 

---

# Depth Camera

**Module:** **[Pixel Sensors](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)**

APIs to access the depth camera data.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLDepthCameraSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md)** <br></br>A structure to encapsulate the camera settings.  |
| struct | **[MLDepthCameraIntrinsics](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md)** <br></br>Depth camera intrinsic parameters.  |
| struct | **[MLDepthCameraFrameBuffer](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| struct | **[MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md)** <br></br>A structure to encapsulate output data for each camera sensor.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLDepthCameraSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) | **[MLDepthCameraSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcamerasettings)** <br></br>A structure to encapsulate the camera settings.  |
| typedef struct [MLDepthCameraIntrinsics](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md) | **[MLDepthCameraIntrinsics](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcameraintrinsics)** <br></br>Depth camera intrinsic parameters.  |
| typedef struct [MLDepthCameraFrameBuffer](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraFrameBuffer](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcameraframebuffer)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraDepthImage](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameradepthimage)** <br></br>Depth image.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraConfidenceBuffer](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameraconfidencebuffer)** <br></br>Confidence score.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraDepthFlagsBuffer](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer)** <br></br>Flags.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraAmbientRawDepthImage](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage)** <br></br>Ambient raw depth image.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraRawDepthImage](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcamerarawdepthimage)** <br></br>Raw depth image.  |
| typedef struct [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) | **[MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcameradata)** <br></br>A structure to encapsulate output data for each camera sensor.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 8](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-anonymous-enum-8)** <br></br> { <br></br>[MLDepthCameraIntrinsics_MaxDistortionCoefficients](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraintrinsics-maxdistortioncoefficients) = 5<br></br>} |
| enum | **[MLDepthCameraMode](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameramode)** <br></br> { <br></br>[MLDepthCameraMode_None](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameramode-none) = 0,<br></br> [MLDepthCameraMode_LongRange](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameramode-longrange) = 1 << 0,<br></br> [MLDepthCameraMode_Ensure32Bits](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameramode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of depth camera modes.  |
| enum | **[MLDepthCameraFrameType](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraframetype)** <br></br> { <br></br>[MLDepthCameraFrameType_Unknown](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraframetype-unknown) = 0,<br></br> [MLDepthCameraFrameType_LongRange](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraframetype-longrange) = 1,<br></br> [MLDepthCameraFrameType_Ensure32Bits](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraframetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of camera mode used when capturing a frame.  |
| enum | **[MLDepthCameraFlags](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraflags)** <br></br> { <br></br>[MLDepthCameraFlags_None](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraflags-none) = 0,<br></br> [MLDepthCameraFlags_DepthImage](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraflags-depthimage) = 1 << 0,<br></br> [MLDepthCameraFlags_Confidence](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraflags-confidence) = 1 << 1,<br></br> [MLDepthCameraFlags_DepthFlags](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraflags-depthflags) = 1 << 2,<br></br> [MLDepthCameraFlags_AmbientRawDepthImage](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraflags-ambientrawdepthimage) = 1 << 3,<br></br> [MLDepthCameraFlags_RawDepthImage](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraflags-rawdepthimage) = 1 << 4,<br></br> [MLDepthCameraFlags_Ensure32Bits](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of flags to select data requested from depth camera.  |
| enum | **[MLDepthCameraDepthFlags](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags)** <br></br> { <br></br>[MLDepthCameraDepthFlags_Valid](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags-valid) = 0 << 0,<br></br> [MLDepthCameraDepthFlags_Invalid](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags-invalid) = 1 << 0,<br></br> [MLDepthCameraDepthFlags_Saturated](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags-saturated) = 1 << 1,<br></br> [MLDepthCameraDepthFlags_Inconsistent](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags-inconsistent) = 1 << 2,<br></br> [MLDepthCameraDepthFlags_LowSignal](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags-lowsignal) = 1 << 3,<br></br> [MLDepthCameraDepthFlags_FlyingPixel](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags-flyingpixel) = 1 << 4,<br></br> [MLDepthCameraDepthFlags_Masked](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags-masked) = 1 << 5,<br></br> [MLDepthCameraDepthFlags_SBI](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags-sbi) = 1 << 8,<br></br> [MLDepthCameraDepthFlags_StrayLight](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags-straylight) = 1 << 9,<br></br> [MLDepthCameraDepthFlags_ConnectedComponent](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags-connectedcomponent) = 1 << 10,<br></br> [MLDepthCameraDepthFlags_Ensure32Bits](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of flags to select data requested from depth camera.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLDepthCameraSettingsInit](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcamerasettingsinit)**([MLDepthCameraSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) * inout_handle)<br></br>Initialize the connect handle structure. Shall be called before calling [MLDepthCameraConnect()](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect).  |
| void | **[MLDepthCameraDataInit](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcameradatainit)**([MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) * inout_depth_camera_data)<br></br>Initialize [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) with version.  |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraConnect](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect)**(const [MLDepthCameraSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) * settings, [MLHandle](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Connect to depth camera.  |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraUpdateSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraupdatesettings)**([MLHandle](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLDepthCameraSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) * settings)<br></br>Update the depth camera settings.  |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraGetLatestDepthData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetlatestdepthdata)**([MLHandle](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t timeout_ms, [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) ** out_data)<br></br>Poll for Frames.  |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraReleaseDepthData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcamerareleasedepthdata)**([MLHandle](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) * depth_camera_data)<br></br>Releases specified [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) object.  |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraDisconnect](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameradisconnect)**([MLHandle](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Disconnect from depth camera.  |

## Detailed Description

APIs to access the depth camera data. 

\experimental This is an experimental API which may be modified or removed without any prior notice.

The API only supports reading data from the depth camera. Apps cannot start or stop the camera nor can it modify the camera settings, support for the same may be added in a future release. If the system is not actively using the depth camera then any calls to get the depth camera data will timeout. 





-----------
## Enums Documentation

### Anonymous Enum 8 {#enums-anonymous-enum-8}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraIntrinsics_MaxDistortionCoefficients |  5| Default distortion vector size. |








-----------

### MLDepthCameraMode {#enums-mldepthcameramode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraMode_None |  0| None. |
| MLDepthCameraMode_LongRange |  1 << 0| Long range mode. Under normal operations long range mode has a maximum frequency of 5fps and a range of up to 5m, in some cases this can go as far 7.5m. |
| MLDepthCameraMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of depth camera modes. 

Future release may add support to other modes. 





-----------

### MLDepthCameraFrameType {#enums-mldepthcameraframetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraFrameType_Unknown |  0| None. |
| MLDepthCameraFrameType_LongRange |  1| Frame captured using [MLDepthCameraMode_LongRange](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameramode-longrange) mode. |
| MLDepthCameraFrameType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of camera mode used when capturing a frame. 





-----------

### MLDepthCameraFlags {#enums-mldepthcameraflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraFlags_None |  0| None. |
| MLDepthCameraFlags_DepthImage |  1 << 0| Enable MLDepthCameraDepthImage. See [MLDepthCameraDepthImage](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameradepthimage) for more details. |
| MLDepthCameraFlags_Confidence |  1 << 1| Enable MLDepthCameraConfidenceBuffer. See [MLDepthCameraConfidenceBuffer](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameraconfidencebuffer) for more details. |
| MLDepthCameraFlags_DepthFlags |  1 << 2| Enable MLDepthCameraDepthFlagsBuffer. See [MLDepthCameraDepthFlagsBuffer](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer) for more details. |
| MLDepthCameraFlags_AmbientRawDepthImage |  1 << 3| Enable MLDepthCameraAmbientRawDepthImage. See [MLDepthCameraAmbientRawDepthImage](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage) for more details. |
| MLDepthCameraFlags_RawDepthImage |  1 << 4| Enable MLDepthCameraRawDepthImage. See [MLDepthCameraRawDepthImage](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcamerarawdepthimage) for more details. |
| MLDepthCameraFlags_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of flags to select data requested from depth camera. 





-----------

### MLDepthCameraDepthFlags {#enums-mldepthcameradepthflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraDepthFlags_Valid |  0 << 0| Valid pixel. Indicates that there is no additional flag data for this pixel. |
| MLDepthCameraDepthFlags_Invalid |  1 << 0| Invalid. This bit is set to one to indicate that one or more flags from below have been set. Depending on the use case the application can correlate the flag data and corresponding pixel data to determine how to handle the pixel data. |
| MLDepthCameraDepthFlags_Saturated |  1 << 1| Pixel saturated. The pixel intensity is either below the min or the max threshold value. |
| MLDepthCameraDepthFlags_Inconsistent |  1 << 2| Inconsistent data. Inconsistent data received when capturing frames. This can happen due to fast motion. |
| MLDepthCameraDepthFlags_LowSignal |  1 << 3| Low signal. Pixel has very low signal to noise ratio. One example of when this can happen is for pixels in far end of the range. |
| MLDepthCameraDepthFlags_FlyingPixel |  1 << 4| Flying pixel. This typically happens when there is step jump in the distance of adjoining pixels in the scene. Example: When you open a door looking into the room the edges along the door's edges can cause flying pixels. |
| MLDepthCameraDepthFlags_Masked |  1 << 5| Masked. If this bit is on it indicates that the corresponding pixel may not be within the illuminator's illumination cone. |
| MLDepthCameraDepthFlags_SBI |  1 << 8| SBI. This bit will be set when there is high noise. |
| MLDepthCameraDepthFlags_StrayLight |  1 << 9| Stray light. This could happen when there is another light source apart from the depth camera illuminator. This could also lead to MLDepthCameraDepthFlags_LowSignal. |
| MLDepthCameraDepthFlags_ConnectedComponent |  1 << 10| Connected component. If a small group of MLDepthCameraDepthFlags_Valid is sorrunded by a set of MLDepthCameraDepthFlags_Invalid then this bit will be set to 1. |
| MLDepthCameraDepthFlags_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of flags to select data requested from depth camera. 





-----------


## Types Documentation

### MLDepthCameraSettings {#struct-mldepthcamerasettings}

```cpp
typedef struct MLDepthCameraSettings MLDepthCameraSettings;
```

A structure to encapsulate the camera settings. 

This structure must be initialized by calling [MLDepthCameraSettingsInit](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcamerasettingsinit) before use.



[More Info](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md)


**API Level:**
  * 23




-----------

### MLDepthCameraIntrinsics {#struct-mldepthcameraintrinsics}

```cpp
typedef struct MLDepthCameraIntrinsics MLDepthCameraIntrinsics;
```

Depth camera intrinsic parameters. 



[More Info](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md)


**API Level:**
  * 23




-----------

### MLDepthCameraFrameBuffer {#struct-mldepthcameraframebuffer}

```cpp
typedef struct MLDepthCameraFrameBuffer MLDepthCameraFrameBuffer;
```

A structure to encapsulate per plane info for each camera frame. 



[More Info](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)


**API Level:**
  * 23




-----------

### MLDepthCameraDepthImage {#mldepthcameraframebuffer-mldepthcameradepthimage}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraDepthImage;
```

Depth image. 

Depth image stores the depth data from the depth camera. Depth is represented in meters and gives the radial distance of the real world location from the depth camera coordinate frame. See [MLDepthCameraIntrinsics](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md) and [MLDepthCameraData.camera_pose](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md#mltransform-camera-pose) for more details.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraConfidenceBuffer {#mldepthcameraframebuffer-mldepthcameraconfidencebuffer}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraConfidenceBuffer;
```

Confidence score. 

Confidence buffer stores the confidence values for each pixel in the MLDepthCameraDepthImage. The confidence score is derived from the sensor noise and it is not normalized. The higher the value the higher the confidence. Applications can determine what confidence threshold to use based on their use case.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraDepthFlagsBuffer {#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraDepthFlagsBuffer;
```

Flags. 

Each pixel in the MLDepthCameraDepthImage will have an associated set of flags.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md#void-data) to uint32_t data type. 



[More Info](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraAmbientRawDepthImage {#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraAmbientRawDepthImage;
```

Ambient raw depth image. 

This is the raw depth camera sensor data captured without the depth camera illumination and corresponds to the amount of ambient light incident on the sensor.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraRawDepthImage {#mldepthcameraframebuffer-mldepthcamerarawdepthimage}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraRawDepthImage;
```

Raw depth image. 

This is the raw depth camera sensor data captured with the depth camera illumination and corresponds to the amount of total light incident on the sensor.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraData {#struct-mldepthcameradata}

```cpp
typedef struct MLDepthCameraData MLDepthCameraData;
```

A structure to encapsulate output data for each camera sensor. 

This structure must be initialized by calling [MLDepthCameraDataInit](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcameradatainit) before use.



[More Info](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md)


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

Initialize the connect handle structure. Shall be called before calling [MLDepthCameraConnect()](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLDepthCameraSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) * |inout_handle|[MLDepthCameraSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) structure to initialize.|
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

Initialize [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) * |inout_depth_camera_data|Set up the version for inout_depth_camera_data. |



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
| const [MLDepthCameraSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) * |settings|A pointer to [MLDepthCameraSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) structure. |
| [MLHandle](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to camera handle to be used in later APIs.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_LicenseError|Necessary license is missing. |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Connected to camera device(s) successfully. |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect). |
| const [MLDepthCameraSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) * |settings|Pointer to [MLDepthCameraSettings](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Settings updated successfully. |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
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
| [MLHandle](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect). |
| uint64_t |timeout_ms|Timeout in milliseconds. |
| [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) ** |out_data|Depth camera data. Will be set to NULL if no valid data is available at this time.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Depth camera data fetched successfully. |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|Returned because no new frame available at this time. |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


Returns [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) with this latest data when available. The memory is owned by the system. Application should copy the data it needs to cache it and then release the memory by calling #MLDepthCameraReleaseCameraData.

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

Releases specified [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect). |
| [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) * |depth_camera_data|Pointer to a valid [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released depth camera data. |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|depth_camera_data parameter was not valid (NULL). |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
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
| [MLHandle](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Disconnected camera successfully. |
| [MLResult](/versioned_docs/version-14-Jun-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to disconnect camera.|
**Required Permissions**:

  * None 


This will disconnect from the depth camera.




**API Level:**
  * 23




-----------






