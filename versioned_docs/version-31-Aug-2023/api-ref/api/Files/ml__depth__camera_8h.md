---
title: ml_depth_camera.h

---

# ml_depth_camera.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLDepthCameraStreamConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_config.md)** <br></br>Structure to encapsulate the camera config for a specific stream.  |
| struct | **[MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md)** <br></br>Structure to encapsulate the camera settings.  |
| struct | **[MLDepthCameraIntrinsics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md)** <br></br>Depth camera intrinsic parameters.  |
| struct | **[MLDepthCameraFrameBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)** <br></br>Structure to encapsulate per plane info for each camera frame.  |
| struct | **[MLDepthCameraFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame.md)** <br></br>Structure to encapsulate output data for each camera sensor.  |
| struct | **[MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md)** <br></br>Structure to encapsulate output data for each camera stream.  |
| struct | **[MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md)** <br></br>Structure to encapsulate a possible configuration for a single stream. Can be used to understand possible values for a specific #stream_configs element in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md).  |
| struct | **[MLDepthCameraCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md)** <br></br>Structure to encapsulate a possible set of streams configuration. Such set describes a possible way of setting #stream_configs in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) and may hold multiple [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) for different streams.  |
| struct | **[MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md)** <br></br>Structure to encapsulate a list of possible stream configurations.  |
| struct | **[MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md)** <br></br>Structure to encapsulate camera capabilities filtering.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLDepthCameraStreamConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_config.md) | **[MLDepthCameraStreamConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcamerastreamconfig)** <br></br>Structure to encapsulate the camera config for a specific stream.  |
| typedef struct [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) | **[MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcamerasettings)** <br></br>Structure to encapsulate the camera settings.  |
| typedef struct [MLDepthCameraIntrinsics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md) | **[MLDepthCameraIntrinsics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcameraintrinsics)** <br></br>Depth camera intrinsic parameters.  |
| typedef struct [MLDepthCameraFrameBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraFrameBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcameraframebuffer)** <br></br>Structure to encapsulate per plane info for each camera frame.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraDepthImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameradepthimage)** <br></br>Depth image.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraConfidenceBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameraconfidencebuffer)** <br></br>Confidence score.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraDepthFlagsBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer)** <br></br>Flags.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraAmbientRawDepthImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage)** <br></br>Ambient raw depth image.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraRawDepthImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcamerarawdepthimage)** <br></br>Raw depth image.  |
| typedef struct [MLDepthCameraFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame.md) | **[MLDepthCameraFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcameraframe)** <br></br>Structure to encapsulate output data for each camera sensor.  |
| typedef struct [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) | **[MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcameradata)** <br></br>Structure to encapsulate output data for each camera stream.  |
| typedef struct [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) | **[MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcamerastreamcapability)** <br></br>Structure to encapsulate a possible configuration for a single stream. Can be used to understand possible values for a specific #stream_configs element in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md).  |
| typedef struct [MLDepthCameraCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md) | **[MLDepthCameraCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcameracapability)** <br></br>Structure to encapsulate a possible set of streams configuration. Such set describes a possible way of setting #stream_configs in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) and may hold multiple [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) for different streams.  |
| typedef struct [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md) | **[MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcameracapabilitylist)** <br></br>Structure to encapsulate a list of possible stream configurations.  |
| typedef struct [MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md) | **[MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#struct-mldepthcameracapabilityfilter)** <br></br>Structure to encapsulate camera capabilities filtering.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 8](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-anonymous-enum-8)** <br></br> { <br></br>[MLDepthCameraIntrinsics_MaxDistortionCoefficients](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraintrinsics-maxdistortioncoefficients) = 5<br></br>} |
| enum | **[MLDepthCameraStream](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcamerastream)** <br></br> { <br></br>[MLDepthCameraStream_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcamerastream-none) = 0,<br></br> [MLDepthCameraStream_LongRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcamerastream-longrange) = 1 << 0,<br></br> [MLDepthCameraStream_ShortRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcamerastream-shortrange) = 1 << 1,<br></br> [MLDepthCameraStream_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcamerastream-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of depth camera streams.  |
| enum | **[MLDepthCameraFrameType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraframetype)** <br></br> { <br></br>[MLDepthCameraFrameType_LongRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframetype-longrange) = 0,<br></br> [MLDepthCameraFrameType_ShortRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframetype-shortrange) = 1,<br></br> [MLDepthCameraFrameType_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframetype-count) = 2,<br></br> [MLDepthCameraFrameType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of camera stream used when capturing a frame.  |
| enum | **[MLDepthCameraFrameRate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraframerate)** <br></br> { <br></br>[MLDepthCameraFrameRate_1FPS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframerate-1fps) = 0,<br></br> [MLDepthCameraFrameRate_5FPS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframerate-5fps) = 1,<br></br> [MLDepthCameraFrameRate_25FPS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframerate-25fps) = 2,<br></br> [MLDepthCameraFrameRate_30FPS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframerate-30fps) = 3,<br></br> [MLDepthCameraFrameRate_50FPS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframerate-50fps) = 4,<br></br> [MLDepthCameraFrameRate_60FPS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframerate-60fps) = 5,<br></br> [MLDepthCameraFrameRate_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraframerate-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of possible frame rates.  |
| enum | **[MLDepthCameraFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameraflags)** <br></br> { <br></br>[MLDepthCameraFlags_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-none) = 0,<br></br> [MLDepthCameraFlags_DepthImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-depthimage) = 1 << 0,<br></br> [MLDepthCameraFlags_Confidence](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-confidence) = 1 << 1,<br></br> [MLDepthCameraFlags_DepthFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-depthflags) = 1 << 2,<br></br> [MLDepthCameraFlags_AmbientRawDepthImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-ambientrawdepthimage) = 1 << 3,<br></br> [MLDepthCameraFlags_RawDepthImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-rawdepthimage) = 1 << 4,<br></br> [MLDepthCameraFlags_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameraflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of flags to select data requested from depth camera.  |
| enum | **[MLDepthCameraDepthFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcameradepthflags)** <br></br> { <br></br>[MLDepthCameraDepthFlags_Valid](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-valid) = 0 << 0,<br></br> [MLDepthCameraDepthFlags_Invalid](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-invalid) = 1 << 0,<br></br> [MLDepthCameraDepthFlags_Saturated](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-saturated) = 1 << 1,<br></br> [MLDepthCameraDepthFlags_Inconsistent](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-inconsistent) = 1 << 2,<br></br> [MLDepthCameraDepthFlags_LowSignal](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-lowsignal) = 1 << 3,<br></br> [MLDepthCameraDepthFlags_FlyingPixel](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-flyingpixel) = 1 << 4,<br></br> [MLDepthCameraDepthFlags_Masked](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-masked) = 1 << 5,<br></br> [MLDepthCameraDepthFlags_SBI](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-sbi) = 1 << 8,<br></br> [MLDepthCameraDepthFlags_StrayLight](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-straylight) = 1 << 9,<br></br> [MLDepthCameraDepthFlags_ConnectedComponent](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-connectedcomponent) = 1 << 10,<br></br> [MLDepthCameraDepthFlags_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__depth__camera_8h.md#enums-mldepthcameradepthflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of flags to select data requested from depth camera.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLDepthCameraSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcamerasettingsinit)**([MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) * inout_handle)<br></br>Initialize the connect handle structure. Shall be called before calling [MLDepthCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect).  |
| void | **[MLDepthCameraDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcameradatainit)**([MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) * inout_depth_camera_data)<br></br>Initialize [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) with version.  |
| void | **[MLDepthCameraCapabilityFilterInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcameracapabilityfilterinit)**([MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md) * inout_handle)<br></br>Initialize the capabilities filtering structure. Shall be called before calling [MLDepthCameraGetCapabilities()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect)**(const [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) * settings, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Connect to depth camera.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraUpdateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraupdatesettings)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) * settings)<br></br>Update the depth camera settings.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraGetCapabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md) * filter, [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md) * out_caps)<br></br>Query the depth camera stream capabilities.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraReleaseCapabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcamerareleasecapabilities)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md) * out_caps)<br></br>Release resources allocated with [MLDepthCameraGetCapabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraGetLatestDepthData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetlatestdepthdata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t timeout_ms, [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) * out_data)<br></br>Poll for Frames.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraReleaseDepthData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcamerareleasedepthdata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) * depth_camera_data)<br></br>Releases specified [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraDisconnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameradisconnect)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Disconnect from depth camera.  |

## Enums Documentation

### Anonymous Enum 8 {#enums-anonymous-enum-8}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraIntrinsics_MaxDistortionCoefficients |  5| Default distortion vector size. |








-----------

### MLDepthCameraStream {#enums-mldepthcamerastream}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraStream_None |  0| None. |
| MLDepthCameraStream_LongRange |  1 << 0| Long range stream. Under normal operations long range stream has a maximum frequency of 5fps and a range from 1m up to 5m, in some cases this can go as far 7.5m. |
| MLDepthCameraStream_ShortRange |  1 << 1| Short range stream. Under normal operations short range stream has a maximum frequency of 60fps and a range from 0.2m up to 0.9m. |
| MLDepthCameraStream_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of depth camera streams. 




**API Level:**
  * 29




-----------

### MLDepthCameraFrameType {#enums-mldepthcameraframetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraFrameType_LongRange |  0| Frame captured using [MLDepthCameraStream_LongRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcamerastream-longrange) stream. |
| MLDepthCameraFrameType_ShortRange |  1| Frame captured using [MLDepthCameraStream_ShortRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#enums-mldepthcamerastream-shortrange) stream. |
| MLDepthCameraFrameType_Count |  2| |
| MLDepthCameraFrameType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of camera stream used when capturing a frame. 




**API Level:**
  * 29




-----------

### MLDepthCameraFrameRate {#enums-mldepthcameraframerate}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraFrameRate_1FPS |  0| |
| MLDepthCameraFrameRate_5FPS |  1| |
| MLDepthCameraFrameRate_25FPS |  2| |
| MLDepthCameraFrameRate_30FPS |  3| |
| MLDepthCameraFrameRate_50FPS |  4| |
| MLDepthCameraFrameRate_60FPS |  5| |
| MLDepthCameraFrameRate_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of possible frame rates. 




**API Level:**
  * 29




-----------

### MLDepthCameraFlags {#enums-mldepthcameraflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraFlags_None |  0| None. |
| MLDepthCameraFlags_DepthImage |  1 << 0| Enable MLDepthCameraDepthImage. See [MLDepthCameraDepthImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameradepthimage) for more details. |
| MLDepthCameraFlags_Confidence |  1 << 1| Enable MLDepthCameraConfidenceBuffer. See [MLDepthCameraConfidenceBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameraconfidencebuffer) for more details. |
| MLDepthCameraFlags_DepthFlags |  1 << 2| Enable MLDepthCameraDepthFlagsBuffer. See [MLDepthCameraDepthFlagsBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer) for more details. |
| MLDepthCameraFlags_AmbientRawDepthImage |  1 << 3| Enable MLDepthCameraAmbientRawDepthImage. See [MLDepthCameraAmbientRawDepthImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage) for more details. |
| MLDepthCameraFlags_RawDepthImage |  1 << 4| Enable MLDepthCameraRawDepthImage. See [MLDepthCameraRawDepthImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mldepthcameraframebuffer-mldepthcamerarawdepthimage) for more details. |
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
| MLDepthCameraDepthFlags_ConnectedComponent |  1 << 10| Connected component. If a small group of MLDepthCameraDepthFlags_Valid is surrounded by a set of MLDepthCameraDepthFlags_Invalid then this bit will be set to 1. |
| MLDepthCameraDepthFlags_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of flags to select data requested from depth camera. 





-----------


## Types Documentation

### MLDepthCameraStreamConfig {#struct-mldepthcamerastreamconfig}

```cpp
typedef struct MLDepthCameraStreamConfig MLDepthCameraStreamConfig;
```

Structure to encapsulate the camera config for a specific stream. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_config.md)


**API Level:**
  * 29




-----------

### MLDepthCameraSettings {#struct-mldepthcamerasettings}

```cpp
typedef struct MLDepthCameraSettings MLDepthCameraSettings;
```

Structure to encapsulate the camera settings. 

This structure must be initialized by calling [MLDepthCameraSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcamerasettingsinit) before use.

These are supported configurations: 
Streams Exposure limits [us] Frame rate [FPS] Long Range 250 - 2000 1, 5 Short Range 50 - 375 On 50Hz PLC: 5, 25, 50On 60Hz PLC: 5, 30, 60  Use [MLDepthCameraGetCapabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities) to get a list of available configurations. \note The system may not be able to service all the requested streams at any given time. This parameter is treated as a hint and data will be provided for the requested streams if available. \note The API only supports a single stream. In a future release support for multiple streams will be added. @par API Level:\n 29 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md)



-----------

### MLDepthCameraIntrinsics {#struct-mldepthcameraintrinsics}

```cpp
typedef struct MLDepthCameraIntrinsics MLDepthCameraIntrinsics;
```

Depth camera intrinsic parameters. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md)


**API Level:**
  * 29




-----------

### MLDepthCameraFrameBuffer {#struct-mldepthcameraframebuffer}

```cpp
typedef struct MLDepthCameraFrameBuffer MLDepthCameraFrameBuffer;
```

Structure to encapsulate per plane info for each camera frame. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)


**API Level:**
  * 29




-----------

### MLDepthCameraDepthImage {#mldepthcameraframebuffer-mldepthcameradepthimage}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraDepthImage;
```

Depth image. 

Depth image stores the depth data from the depth camera. Depth is represented in meters and gives the radial distance of the real world location from the depth camera coordinate frame. See [MLDepthCameraIntrinsics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_intrinsics.md) and MLDepthCameraData.camera_pose for more details.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraConfidenceBuffer {#mldepthcameraframebuffer-mldepthcameraconfidencebuffer}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraConfidenceBuffer;
```

Confidence score. 

Confidence buffer stores the confidence values for each pixel in the MLDepthCameraDepthImage. The confidence score is derived from the sensor noise and it is not normalized. The higher the value the higher the confidence. Applications can determine what confidence threshold to use based on their use case.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraDepthFlagsBuffer {#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraDepthFlagsBuffer;
```

Flags. 

Each pixel in the MLDepthCameraDepthImage will have an associated set of flags.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md#void-data) to uint32_t data type. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraAmbientRawDepthImage {#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraAmbientRawDepthImage;
```

Ambient raw depth image. 

This is the raw depth camera sensor data captured without the depth camera illumination and corresponds to the amount of ambient light incident on the sensor.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraRawDepthImage {#mldepthcameraframebuffer-mldepthcamerarawdepthimage}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraRawDepthImage;
```

Raw depth image. 

This is the raw depth camera sensor data captured with the depth camera illumination and corresponds to the amount of total light incident on the sensor.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraFrame {#struct-mldepthcameraframe}

```cpp
typedef struct MLDepthCameraFrame MLDepthCameraFrame;
```

Structure to encapsulate output data for each camera sensor. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_frame.md)


**API Level:**
  * 29




-----------

### MLDepthCameraData {#struct-mldepthcameradata}

```cpp
typedef struct MLDepthCameraData MLDepthCameraData;
```

Structure to encapsulate output data for each camera stream. 

This structure must be initialized by calling [MLDepthCameraDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#void-mldepthcameradatainit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md)


**API Level:**
  * 29




-----------

### MLDepthCameraStreamCapability {#struct-mldepthcamerastreamcapability}

```cpp
typedef struct MLDepthCameraStreamCapability MLDepthCameraStreamCapability;
```

Structure to encapsulate a possible configuration for a single stream. Can be used to understand possible values for a specific #stream_configs element in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md). 

The capabilities supported by the depth camera can be queried with [MLDepthCameraGetCapabilities()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities).



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md)


**API Level:**
  * 29




-----------

### MLDepthCameraCapability {#struct-mldepthcameracapability}

```cpp
typedef struct MLDepthCameraCapability MLDepthCameraCapability;
```

Structure to encapsulate a possible set of streams configuration. Such set describes a possible way of setting #stream_configs in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) and may hold multiple [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) for different streams. 

Whole #stream_capabilities array describe a single configuration. Using only part of it is not recommended.

The capabilities supported by the depth camera can be queried with [MLDepthCameraGetCapabilities()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities).



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md)


**API Level:**
  * 29




-----------

### MLDepthCameraCapabilityList {#struct-mldepthcameracapabilitylist}

```cpp
typedef struct MLDepthCameraCapabilityList MLDepthCameraCapabilityList;
```

Structure to encapsulate a list of possible stream configurations. 

User should be able to use any of the capabilities from the list. They are grouped in usable sets of configurations - one set may contain different [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_stream_capability.md) for different streams. For more information see [MLDepthCameraCapability](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability.md).



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md)


**API Level:**
  * 29




-----------

### MLDepthCameraCapabilityFilter {#struct-mldepthcameracapabilityfilter}

```cpp
typedef struct MLDepthCameraCapabilityFilter MLDepthCameraCapabilityFilter;
```

Structure to encapsulate camera capabilities filtering. 

The capabilities supported by the depth camera can be queried with [MLDepthCameraGetCapabilities()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities).



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md)


**API Level:**
  * 29




-----------


## Functions Documentation

### MLDepthCameraSettingsInit {#void-mldepthcamerasettingsinit}

```cpp
static inline void MLDepthCameraSettingsInit(
    MLDepthCameraSettings * inout_handle
)
```

Initialize the connect handle structure. Shall be called before calling [MLDepthCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) * |inout_handle|[MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) structure to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 29




-----------

### MLDepthCameraDataInit {#void-mldepthcameradatainit}

```cpp
static inline void MLDepthCameraDataInit(
    MLDepthCameraData * inout_depth_camera_data
)
```

Initialize [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) * |inout_depth_camera_data|Set up the version for inout_depth_camera_data. |



**API Level:**
  * 29




-----------

### MLDepthCameraCapabilityFilterInit {#void-mldepthcameracapabilityfilterinit}

```cpp
static inline void MLDepthCameraCapabilityFilterInit(
    MLDepthCameraCapabilityFilter * inout_handle
)
```

Initialize the capabilities filtering structure. Shall be called before calling [MLDepthCameraGetCapabilities()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md) * |inout_handle|[MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md) structure to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 29




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
| const [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) * |settings|A pointer to [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) structure. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to camera handle to be used in later APIs.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Connected to camera device(s) successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * com.magicleap.permission.DEPTH_CAMERA (protection level: dangerous) 





**API Level:**
  * 29




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect). |
| const [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md) * |settings|Pointer to [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_settings.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Settings updated successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 





**API Level:**
  * 29




-----------

### MLDepthCameraGetCapabilities {#mlresult-mldepthcameragetcapabilities}

```cpp
MLResult MLDepthCameraGetCapabilities(
    MLHandle handle,
    const MLDepthCameraCapabilityFilter * filter,
    MLDepthCameraCapabilityList * out_caps
)
```

Query the depth camera stream capabilities. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect). |
| const [MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md) * |filter|Pointer to initialized [MLDepthCameraCapabilityFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_filter.md) structure. Used for filtering. |
| [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md) * |out_caps|Pointer to initialized [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md) structure.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|API call completed successfully.|
**Required Permissions**:

  * None 


Retrieves the capabilities supported by the depth camera based on the provided filter. Overview of the capabilities can be seen in the [configuration table].

After each call, a corresponding call to [MLDepthCameraReleaseCapabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcamerareleasecapabilities) should be made to release allocated resources.




**API Level:**
  * 29




-----------

### MLDepthCameraReleaseCapabilities {#mlresult-mldepthcamerareleasecapabilities}

```cpp
MLResult MLDepthCameraReleaseCapabilities(
    MLHandle handle,
    MLDepthCameraCapabilityList * out_caps
)
```

Release resources allocated with [MLDepthCameraGetCapabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect). |
| [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md) * |out_caps|Pointer to [MLDepthCameraCapabilityList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_capability_list.md) filled by the call to [MLDepthCameraGetCapabilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameragetcapabilities).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|API call completed successfully.|
**Required Permissions**:

  * None 





**API Level:**
  * 29




-----------

### MLDepthCameraGetLatestDepthData {#mlresult-mldepthcameragetlatestdepthdata}

```cpp
MLResult MLDepthCameraGetLatestDepthData(
    MLHandle handle,
    uint64_t timeout_ms,
    MLDepthCameraData * out_data
)
```

Poll for Frames. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect). |
| uint64_t |timeout_ms|Timeout in milliseconds. |
| [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) * |out_data|Depth camera data. Should be an initialized [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Depth camera data fetched successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|Returned because no new frame available at this time. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


Returns [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) with this latest data when available. The memory is owned by the system. Application should copy the data it needs to cache it and then release the memory by calling #MLDepthCameraReleaseCameraData.

This is a blocking call. API is not thread safe.

If there are no new depth data frames within the timeout_ms duration then the API will return MLResult_Timeout.




**API Level:**
  * 29




-----------

### MLDepthCameraReleaseDepthData {#mlresult-mldepthcamerareleasedepthdata}

```cpp
MLResult MLDepthCameraReleaseDepthData(
    MLHandle handle,
    MLDepthCameraData * depth_camera_data
)
```

Releases specified [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect). |
| [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) * |depth_camera_data|Pointer to a valid [MLDepthCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/struct_m_l_depth_camera_data.md) object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released depth camera data. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|depth_camera_data parameter was not valid (NULL). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___d_cam/group___d_cam.md#mlresult-mldepthcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Disconnected camera successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to disconnect camera.|
**Required Permissions**:

  * None 


This will disconnect from the depth camera.




**API Level:**
  * 29




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

typedef enum MLDepthCameraStream {
  MLDepthCameraStream_None = 0,
  MLDepthCameraStream_LongRange = 1 << 0,
  MLDepthCameraStream_ShortRange = 1 << 1,
  MLDepthCameraStream_Ensure32Bits = 0x7FFFFFFF
} MLDepthCameraStream;

typedef enum MLDepthCameraFrameType {
  MLDepthCameraFrameType_LongRange = 0,
  MLDepthCameraFrameType_ShortRange = 1,
  MLDepthCameraFrameType_Count = 2,
  MLDepthCameraFrameType_Ensure32Bits = 0x7FFFFFFF
} MLDepthCameraFrameType;

typedef enum MLDepthCameraFrameRate {
  MLDepthCameraFrameRate_1FPS = 0,
  MLDepthCameraFrameRate_5FPS = 1,
  MLDepthCameraFrameRate_25FPS = 2,
  MLDepthCameraFrameRate_30FPS = 3,
  MLDepthCameraFrameRate_50FPS = 4,
  MLDepthCameraFrameRate_60FPS = 5,
  MLDepthCameraFrameRate_Ensure32Bits = 0x7FFFFFFF
} MLDepthCameraFrameRate;

typedef enum MLDepthCameraFlags {
  MLDepthCameraFlags_None = 0,
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

typedef struct MLDepthCameraStreamConfig {
  uint32_t flags;
  uint32_t exposure;
  MLDepthCameraFrameRate frame_rate;
} MLDepthCameraStreamConfig;

typedef struct MLDepthCameraSettings {
  uint32_t version;
  uint32_t streams;
  MLDepthCameraStreamConfig stream_configs[MLDepthCameraFrameType_Count];
} MLDepthCameraSettings;

ML_STATIC_INLINE void MLDepthCameraSettingsInit(MLDepthCameraSettings *inout_handle) {
  if (inout_handle) {
    memset(inout_handle, 0, sizeof(MLDepthCameraSettings));
    inout_handle->version = 2;
    inout_handle->streams = MLDepthCameraStream_LongRange;

    MLDepthCameraStreamConfig *config = &inout_handle->stream_configs[MLDepthCameraFrameType_LongRange];
    config->flags = MLDepthCameraFlags_DepthImage;
    config->exposure = 1600;
    config->frame_rate = MLDepthCameraFrameRate_5FPS;

    config = &inout_handle->stream_configs[MLDepthCameraFrameType_ShortRange];
    config->flags = MLDepthCameraFlags_DepthImage;
    config->exposure = 375;
    config->frame_rate = MLDepthCameraFrameRate_5FPS;
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

typedef struct MLDepthCameraFrame {
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
} MLDepthCameraFrame;

typedef struct MLDepthCameraData {
  uint32_t version;
  uint8_t frame_count;
  MLDepthCameraFrame *frames;
} MLDepthCameraData;

ML_STATIC_INLINE void MLDepthCameraDataInit(MLDepthCameraData *inout_depth_camera_data) {
  if (inout_depth_camera_data) {
    memset(inout_depth_camera_data, 0, sizeof(MLDepthCameraData));
    inout_depth_camera_data->version = 3;
  }
}

typedef struct MLDepthCameraStreamCapability {
  MLDepthCameraStream stream;
  uint32_t min_exposure;
  uint32_t max_exposure;
  MLDepthCameraFrameRate frame_rate;
} MLDepthCameraStreamCapability;


typedef struct MLDepthCameraCapability {
  uint8_t size;
  MLDepthCameraStreamCapability *stream_capabilities;
} MLDepthCameraCapability;

typedef struct MLDepthCameraCapabilityList {
  uint8_t size;
  MLDepthCameraCapability *capabilities;
} MLDepthCameraCapabilityList;

typedef struct MLDepthCameraCapabilityFilter {
  uint32_t version;
  uint32_t streams;
} MLDepthCameraCapabilityFilter;

ML_STATIC_INLINE void MLDepthCameraCapabilityFilterInit(MLDepthCameraCapabilityFilter *inout_handle) {
  if (inout_handle) {
    memset(inout_handle, 0, sizeof(MLDepthCameraCapabilityFilter));
    inout_handle->version = 1;
  }
}

ML_API MLResult ML_CALL MLDepthCameraConnect(const MLDepthCameraSettings *settings, MLHandle *out_handle);

ML_API MLResult ML_CALL MLDepthCameraUpdateSettings(MLHandle handle, const MLDepthCameraSettings *settings);

ML_API MLResult ML_CALL MLDepthCameraGetCapabilities(MLHandle handle, const MLDepthCameraCapabilityFilter *filter, MLDepthCameraCapabilityList *out_caps);

ML_API MLResult ML_CALL MLDepthCameraReleaseCapabilities(MLHandle handle, MLDepthCameraCapabilityList *out_caps);

ML_API MLResult ML_CALL MLDepthCameraGetLatestDepthData(MLHandle handle, uint64_t timeout_ms, MLDepthCameraData *out_data);

ML_API MLResult ML_CALL MLDepthCameraReleaseDepthData(MLHandle handle, MLDepthCameraData *depth_camera_data);

ML_API MLResult ML_CALL MLDepthCameraDisconnect(MLHandle handle);

ML_EXTERN_C_END
```




