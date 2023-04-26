---
title: Camera
summary: apis for accessing camera device and to do camera capture. 

---

# Camera

APIs for accessing Camera Device and to do Camera Capture.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLCameraMRConnectInfo](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_m_r_connect_info.md)**  |
| struct | **[MLCameraConnectContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md)**  |
| struct | **[MLCameraCaptureStreamCaps](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md)** <br></br>A structure to encapsulate stream capabilities.  |
| struct | **[MLCameraCaptureStreamConfig](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md)**  |
| struct | **[MLCameraCaptureConfig](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md)**  |
| struct | **[MLCameraPlaneInfo](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md)**  |
| struct | **[MLCameraOutput](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_output.md)**  |
| struct | **[MLCameraIntrinsicCalibrationParameters](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md)** <br></br>Camera intrinsic parameter.  |
| struct | **[MLCameraResultExtras](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_result_extras.md)**  |
| struct | **[MLCameraDeviceAvailabilityInfo](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_info.md)**  |
| struct | **[MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md)**  |
| struct | **[MLCameraDeviceStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md)**  |
| struct | **[MLCameraCaptureCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md)** <br></br>Capture callbacks to be implemented by client to receive capture status if callback mechanism is used.  |
| struct | **[MLDepthCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md)** <br></br>A structure to encapsulate the camera settings.  |
| struct | **[MLDepthCameraIntrinsics](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_intrinsics.md)** <br></br>Depth camera intrinsic parameters.  |
| struct | **[MLDepthCameraFrameBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| struct | **[MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md)** <br></br>A structure to encapsulate output data for each camera sensor.  |
| struct | **[MLWorldCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md)** <br></br>A structure to encapsulate the camera settings.  |
| struct | **[MLWorldCameraIntrinsics](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_intrinsics.md)** <br></br>World camera intrinsic parameters.  |
| struct | **[MLWorldCameraFrameBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_frame_buffer.md)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| struct | **[MLWorldCameraFrame](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_frame.md)** <br></br>A structure to encapsulate output data for each camera sensor.  |
| struct | **[MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md)** <br></br>A structure to encapsulate output data for each camera sensor.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext)**  |
| typedef struct [MLCameraMRConnectInfo](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_m_r_connect_info.md) | **[MLCameraMRConnectInfo](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameramrconnectinfo)**  |
| typedef struct [MLCameraConnectContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) | **[MLCameraConnectContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameraconnectcontext)**  |
| typedef struct [MLCameraCaptureStreamCaps](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md) | **[MLCameraCaptureStreamCaps](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameracapturestreamcaps)** <br></br>A structure to encapsulate stream capabilities.  |
| typedef struct [MLCameraCaptureStreamConfig](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md) | **[MLCameraCaptureStreamConfig](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameracapturestreamconfig)**  |
| typedef struct [MLCameraCaptureConfig](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) | **[MLCameraCaptureConfig](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameracaptureconfig)**  |
| typedef struct [MLCameraPlaneInfo](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md) | **[MLCameraPlaneInfo](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameraplaneinfo)**  |
| typedef struct [MLCameraOutput](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_output.md) | **[MLCameraOutput](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameraoutput)**  |
| typedef struct [MLCameraIntrinsicCalibrationParameters](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md) | **[MLCameraIntrinsicCalibrationParameters](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameraintrinsiccalibrationparameters)** <br></br>Camera intrinsic parameter.  |
| typedef struct [MLCameraResultExtras](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_result_extras.md) | **[MLCameraResultExtras](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameraresultextras)**  |
| typedef struct [MLCameraDeviceAvailabilityInfo](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_info.md) | **[MLCameraDeviceAvailabilityInfo](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameradeviceavailabilityinfo)**  |
| typedef struct [MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) | **[MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameradeviceavailabilitystatuscallbacks)**  |
| typedef struct [MLCameraDeviceStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) | **[MLCameraDeviceStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameradevicestatuscallbacks)**  |
| typedef struct [MLCameraCaptureCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) | **[MLCameraCaptureCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameracapturecallbacks)** <br></br>Capture callbacks to be implemented by client to receive capture status if callback mechanism is used.  |
| typedef struct [MLDepthCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) | **[MLDepthCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mldepthcamerasettings)** <br></br>A structure to encapsulate the camera settings.  |
| typedef struct [MLDepthCameraIntrinsics](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_intrinsics.md) | **[MLDepthCameraIntrinsics](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mldepthcameraintrinsics)** <br></br>Depth camera intrinsic parameters.  |
| typedef struct [MLDepthCameraFrameBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraFrameBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mldepthcameraframebuffer)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraDepthImage](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthimage)** <br></br>Depth image.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraConfidenceBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraconfidencebuffer)** <br></br>Confidence score.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraDepthFlagsBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer)** <br></br>Flags.  |
| typedef [MLDepthCameraFrameBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md) | **[MLDepthCameraAmbientRawDepthImage](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage)** <br></br>Ambient raw depth image.  |
| typedef struct [MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) | **[MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mldepthcameradata)** <br></br>A structure to encapsulate output data for each camera sensor.  |
| typedef struct [MLWorldCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md) | **[MLWorldCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlworldcamerasettings)** <br></br>A structure to encapsulate the camera settings.  |
| typedef struct [MLWorldCameraIntrinsics](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_intrinsics.md) | **[MLWorldCameraIntrinsics](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlworldcameraintrinsics)** <br></br>World camera intrinsic parameters.  |
| typedef struct [MLWorldCameraFrameBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_frame_buffer.md) | **[MLWorldCameraFrameBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlworldcameraframebuffer)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| typedef struct [MLWorldCameraFrame](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_frame.md) | **[MLWorldCameraFrame](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlworldcameraframe)** <br></br>A structure to encapsulate output data for each camera sensor.  |
| typedef struct [MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) | **[MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlworldcameradata)** <br></br>A structure to encapsulate output data for each camera sensor.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 4](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-anonymous-enum-4)** <br></br> { <br></br>[MLCAMERA_MAXSTREAMS](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcamera-maxstreams) = 2<br></br>} |
| enum | **[MLCameraIdentifier](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier)** <br></br> { <br></br>[MLCameraIdentifier_MAIN](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier-main) = 0,<br></br> [MLCameraIdentifier_CV](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier-cv),<br></br> [MLCameraIdentifier_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLCameraCaptureType](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype)** <br></br> { <br></br>[MLCameraCaptureType_Image](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-image) = 0,<br></br> [MLCameraCaptureType_Video](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-video),<br></br> [MLCameraCaptureType_Preview](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-preview),<br></br> [MLCameraCaptureType_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Captures operation type.  |
| enum | **[MLCameraCaptureFrameRate](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate)** <br></br> { <br></br>[MLCameraCaptureFrameRate_None](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate-none) = 0,<br></br> [MLCameraCaptureFrameRate_15FPS](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate-15fps),<br></br> [MLCameraCaptureFrameRate_30FPS](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate-30fps),<br></br> [MLCameraCaptureFrameRate_60FPS](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate-60fps),<br></br> [MLCameraCaptureFrameRate_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Captures frame rate.  |
| enum | **[MLCameraMRQuality](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality)** <br></br> { <br></br>[MLCameraMRQuality_648x720](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-648x720) = 1,<br></br> [MLCameraMRQuality_972x1080](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-972x1080) = 2,<br></br> [MLCameraMRQuality_1944x2160](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-1944x2160) = 3,<br></br> [MLCameraMRQuality_960x720](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-960x720) = 4,<br></br> [MLCameraMRQuality_1440x1080](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-1440x1080) = 5,<br></br> [MLCameraMRQuality_2880x2160](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-2880x2160) = 6,<br></br> [MLCameraMRQuality_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Video Quality enumeration for mixed reality capture.  |
| enum | **[MLCameraConnectFlag](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag)** <br></br> { <br></br>[MLCameraConnectFlag_CamOnly](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag-camonly) = 0x0,<br></br> [MLCameraConnectFlag_VirtualOnly](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag-virtualonly) = 0x1,<br></br> [MLCameraConnectFlag_MR](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag-mr) = 0x2,<br></br> [MLCameraConnectFlag_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLCameraMRBlendType](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrblendtype)** <br></br> { <br></br>[MLCameraMRBlendType_Additive](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrblendtype-additive) = 1,<br></br> [MLCameraMRBlendType_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrblendtype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLCameraDisconnectReason](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradisconnectreason)** <br></br> { <br></br>[MLCameraDisconnect_DeviceLost](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradisconnect-devicelost) = 0,<br></br> [MLCameraDisconnect_PriorityLost](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradisconnect-prioritylost),<br></br> [MLCameraDisconnect_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradisconnect-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLCameraError](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror)** <br></br> { <br></br>[MLCameraError_None](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-none) = 0,<br></br> [MLCameraError_Invalid](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-invalid),<br></br> [MLCameraError_Disabled](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-disabled),<br></br> [MLCameraError_DeviceFailed](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-devicefailed),<br></br> [MLCameraError_ServiceFailed](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-servicefailed),<br></br> [MLCameraError_CaptureFailed](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-capturefailed),<br></br> [MLCameraError_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLCameraOutputFormat](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat)** <br></br> { <br></br>[MLCameraOutputFormat_Unknown](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat-unknown),<br></br> [MLCameraOutputFormat_YUV_420_888](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat-yuv-420-888),<br></br> [MLCameraOutputFormat_JPEG](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat-jpeg),<br></br> [MLCameraOutputFormat_RGBA_8888](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat-rgba-8888),<br></br> [MLCameraOutputFormat_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Captured output format. These three parameters determine which formats are supported:  |
| enum | **[MLCameraDeviceStatusFlag](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag)** <br></br> { <br></br>[MLCameraDeviceStatusFlag_Connected](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-connected) = 1 << 0,<br></br> [MLCameraDeviceStatusFlag_Idle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-idle) = 1 << 1,<br></br> [MLCameraDeviceStatusFlag_Streaming](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-streaming) = 1 << 2,<br></br> [MLCameraDeviceStatusFlag_Disconnected](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-disconnected) = 1 << 3,<br></br> [MLCameraDeviceStatusFlag_Error](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-error) = 1 << 4,<br></br> [MLCameraDeviceStatusFlag_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[Anonymous Enum 5](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-anonymous-enum-5)** <br></br> { <br></br>[MLCamera_MaxImagePlanes](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcamera-maximageplanes) = 3<br></br>} |
| enum | **[Anonymous Enum 6](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-anonymous-enum-6)** <br></br> { <br></br>[MLCameraIntrinsics_MaxDistortionCoefficients](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraintrinsics-maxdistortioncoefficients) = 5<br></br>}<br></br>Camera distortion vector size.  |
| enum | **[Anonymous Enum 8](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-anonymous-enum-8)** <br></br> { <br></br>[MLDepthCameraIntrinsics_MaxDistortionCoefficients](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraintrinsics-maxdistortioncoefficients) = 5<br></br>} |
| enum | **[MLDepthCameraMode](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameramode)** <br></br> { <br></br>[MLDepthCameraMode_LongRange](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameramode-longrange) = 1 << 0,<br></br> [MLDepthCameraMode_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameramode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of depth camera modes.  |
| enum | **[MLDepthCameraFrameType](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraframetype)** <br></br> { <br></br>[MLDepthCameraFrameType_Unknown](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraframetype-unknown) = 0,<br></br> [MLDepthCameraFrameType_LongRange](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraframetype-longrange) = 1,<br></br> [MLDepthCameraFrameType_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraframetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of camera mode used when capturing a frame.  |
| enum | **[MLDepthCameraFlags](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraflags)** <br></br> { <br></br>[MLDepthCameraFlags_DepthImage](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraflags-depthimage) = 1 << 0,<br></br> [MLDepthCameraFlags_Confidence](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraflags-confidence) = 1 << 1,<br></br> [MLDepthCameraFlags_DepthFlags](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraflags-depthflags) = 1 << 2,<br></br> [MLDepthCameraFlags_AmbientRawDepthImage](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraflags-ambientrawdepthimage) = 1 << 3,<br></br> [MLDepthCameraFlags_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameraflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of flags to select data requested from depth camera.  |
| enum | **[MLDepthCameraDepthFlags](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags)** <br></br> { <br></br>[MLDepthCameraDepthFlags_Valid](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags-valid) = 0 << 0,<br></br> [MLDepthCameraDepthFlags_Invalid](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags-invalid) = 1 << 0,<br></br> [MLDepthCameraDepthFlags_Saturated](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags-saturated) = 1 << 1,<br></br> [MLDepthCameraDepthFlags_Inconsistent](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags-inconsistent) = 1 << 2,<br></br> [MLDepthCameraDepthFlags_LowSignal](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags-lowsignal) = 1 << 3,<br></br> [MLDepthCameraDepthFlags_FlyingPixel](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags-flyingpixel) = 1 << 4,<br></br> [MLDepthCameraDepthFlags_Masked](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags-masked) = 1 << 5,<br></br> [MLDepthCameraDepthFlags_SBI](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags-sbi) = 1 << 8,<br></br> [MLDepthCameraDepthFlags_StrayLight](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags-straylight) = 1 << 9,<br></br> [MLDepthCameraDepthFlags_ConnectedComponent](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags-connectedcomponent) = 1 << 10,<br></br> [MLDepthCameraDepthFlags_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameradepthflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of flags to select data requested from depth camera.  |
| enum | **[Anonymous Enum 27](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-anonymous-enum-27)** <br></br> { <br></br>[MLWorldCameraIntrinsics_MaxRadialDistortionCoefficients](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraintrinsics-maxradialdistortioncoefficients) = 4,<br></br> [MLWorldCameraIntrinsics_MaxTangentialDistortionCoefficients](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraintrinsics-maxtangentialdistortioncoefficients) = 2<br></br>} |
| enum | **[MLWorldCameraIdentifier](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraidentifier)** <br></br> { <br></br>[MLWorldCameraIdentifier_Left](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraidentifier-left) = 1 << 0,<br></br> [MLWorldCameraIdentifier_Right](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraidentifier-right) = 1 << 1,<br></br> [MLWorldCameraIdentifier_Center](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraidentifier-center) = 1 << 2,<br></br> [MLWorldCameraIdentifier_All](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraidentifier-all) = MLWorldCameraIdentifier_Left |
                                MLWorldCameraIdentifier_Right |
                                MLWorldCameraIdentifier_Center,<br></br> [MLWorldCameraIdentifier_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraidentifier-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Camera Identifier.  |
| enum | **[MLWorldCameraMode](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameramode)** <br></br> { <br></br>[MLWorldCameraMode_Unknown](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameramode-unknown) = 0,<br></br> [MLWorldCameraMode_LowExposure](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameramode-lowexposure) = 1 << 0,<br></br> [MLWorldCameraMode_NormalExposure](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameramode-normalexposure) = 1 << 1,<br></br> [MLWorldCameraMode_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameramode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of world camera modes.  |
| enum | **[MLWorldCameraFrameType](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraframetype)** <br></br> { <br></br>[MLWorldCameraFrameType_Unknown](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraframetype-unknown) = 0,<br></br> [MLWorldCameraFrameType_LowExposure](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraframetype-lowexposure) = 1,<br></br> [MLWorldCameraFrameType_NormalExposure](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraframetype-normalexposure) = 2,<br></br> [MLWorldCameraFrameType_Ensure32Bits](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameraframetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of camera mode used when capturing a frame.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLCameraConnectContextInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameraconnectcontextinit)**([MLCameraConnectContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) * inout_context)<br></br>Initialize the connect context structure.  |
| void | **[MLCameraCaptureConfigInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameracaptureconfiginit)**([MLCameraCaptureConfig](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) * inout_config)<br></br>Initialize the capture config structure.  |
| void | **[MLCameraDeviceAvailabilityStatusCallbacksInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameradeviceavailabilitystatuscallbacksinit)**([MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) * inout_device_availability_status_callbacks)<br></br>Initialize the callback structure.  |
| void | **[MLCameraDeviceStatusCallbacksInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameradevicestatuscallbacksinit)**([MLCameraDeviceStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) * inout_device_status_callbacks)<br></br>Initialize the callback structure.  |
| void | **[MLCameraCaptureCallbacksInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameracapturecallbacksinit)**([MLCameraCaptureCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) * inout_capture_callbacks)<br></br>Initialize the callback structure.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit)**(const [MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) * device_availability_status_callbacks, void * user_data)<br></br>Initialize ML Camera API, Register callback for device availability. If the user does not want to register device availability listener, MLCameraConnect can be called directly without [MLCameraInit()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit). MLCameraDeInit should be used for unregistering callbacks and releasing resources acquired in [MLCameraInit()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit).  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraConnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect)**(const [MLCameraConnectContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) * input_context, [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) * out_context)<br></br>Connect to camera device.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraGetNumSupportedStreams](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetnumsupportedstreams)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, uint32_t * out_num_supported_streams)<br></br>Query the no of streams supported by camera device.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraGetStreamCaps](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetstreamcaps)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, const uint32_t stream_index, uint32_t * inout_num_stream_caps, [MLCameraCaptureStreamCaps](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md) * inout_stream_caps)<br></br>Query the stream capabilities.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraDisconnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameradisconnect)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Disconnect from camera device.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraDeInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameradeinit)**()<br></br>Uninitialize ML Camera API, unregister callback for device availability. Should be called after all camera devices are disconnected. After MLCameraDeInit, MLCameraInit can be called or MLCameraConnect can be called.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraPreCaptureAEAWB](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraprecaptureaeawb)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Trigger AEAWB Convergence.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraPrepareCapture](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, const [MLCameraCaptureConfig](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) * config, [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_request_handle)<br></br>Prepare for capture.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraUpdateCaptureSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraupdatecapturesettings)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Update capture setting.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraSetDeviceStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetdevicestatuscallbacks)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, const [MLCameraDeviceStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) * device_status_callbacks, void * data)<br></br>Set the client-implemented callbacks to convey camera device status.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraSetCaptureCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetcapturecallbacks)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, const [MLCameraCaptureCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) * capture_callbacks, void * data)<br></br>Set the client-implemented callbacks to convey capture status.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraCaptureImage](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracaptureimage)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, uint32_t num_images)<br></br>Capture still image.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraCaptureVideoStart](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturevideostart)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Start video capture. Capture either encoded video or YUV/RGBA frames.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraCapturePreviewStart](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturepreviewstart)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Start preview provide raw frames through callback.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraCaptureVideoStop](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturevideostop)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Stop video capture.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraCapturePreviewStop](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturepreviewstop)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Stop preview.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraGetDeviceStatus](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetdevicestatus)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, uint32_t * out_device_status)<br></br>Poll camera device status.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraGetDeviceAvailabilityStatus](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetdeviceavailabilitystatus)**([MLCameraIdentifier](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier) cam_id, bool * out_device_availability_status)<br></br>Poll camera device availability status.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraGetErrorCode](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerageterrorcode)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, [MLCameraError](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror) * out_error_code)<br></br>Obtain camera device error code.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraGetCameraCharacteristics](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics)**([MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_characteristics_handle)<br></br>Obtains handle for retrieving camera characteristics.  |
| void | **[MLDepthCameraSettingsInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mldepthcamerasettingsinit)**([MLDepthCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) * inout_handle)<br></br>Initialize the connect handle structure. Shall be called before calling [MLDepthCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect).  |
| void | **[MLDepthCameraDataInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mldepthcameradatainit)**([MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) * inout_depth_camera_data)<br></br>Initialize [MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) with version.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraConnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect)**(const [MLDepthCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) * settings, [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Connect to depth camera.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraUpdateSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraupdatesettings)**([MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLDepthCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) * settings)<br></br>Update the depth camera settings.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraGetLatestDepthData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameragetlatestdepthdata)**([MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t timeout_ms, [MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) ** out_data)<br></br>Poll for Frames.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraReleaseDepthData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcamerareleasedepthdata)**([MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) * depth_camera_data)<br></br>Releases specified [MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) object.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLDepthCameraDisconnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameradisconnect)**([MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Disconnect from depth camera.  |
| void | **[MLWorldCameraSettingsInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlworldcamerasettingsinit)**([MLWorldCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md) * inout_handle)<br></br>Initialize the connect handle structure. Shall be called before calling [MLWorldCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlworldcameraconnect).  |
| void | **[MLWorldCameraDataInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlworldcameradatainit)**([MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) * inout_world_camera_data)<br></br>Initialize [MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) with version.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraConnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlworldcameraconnect)**(const [MLWorldCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md) * settings, [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Connect to world cameras.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraUpdateSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlworldcameraupdatesettings)**([MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLWorldCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md) * settings)<br></br>Update the world camera settings.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraGetLatestWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlworldcameragetlatestworldcameradata)**([MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t timeout_ms, [MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) ** out_data)<br></br>Poll for Frames.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraReleaseCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlworldcamerareleasecameradata)**([MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) * world_camera_data)<br></br>Releases specified [MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) object.  |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraDisconnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlworldcameradisconnect)**([MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Disconnect from world camera.  |

## Detailed Description

APIs for accessing Camera Device and to do Camera Capture. 

APIs to access the world cameras.

APIs to access the depth camera data.

<div>
  <table className="doxtable">
    <tbody><tr>
        <th>Camera </th><th>Mode </th><th>Resolution </th><th>Capture Type </th><th>Formats </th><th>FrameRate </th></tr>
      <tr>
        <td rowSpan={48}>Main</td><td rowSpan={12}>Cam_Only</td><td rowSpan={3}>640x480<br />
          1280x720<br />
          1280x960<br />
          1440x1080<br />
          1920x1080<br />
          2048x1536 </td><td rowSpan={1}>Preview</td><td rowSpan={1}>YUV</td><td rowSpan={1}>15/30/60 </td></tr>
      <tr>
        <td rowSpan={1}>Image</td><td rowSpan={1}>YUV/JPEG</td><td rowSpan={1}>15/30/60 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>YUV/RGB/Compressed</td><td rowSpan={1}>15/30/60 </td></tr>
      <tr>
        <td rowSpan={3}><br />
          2880x2160<br />
          3840x2160<br />
          4096x3072<br />
          <br />
        </td><td rowSpan={1}>Preview</td><td rowSpan={1}>YUV</td><td rowSpan={1}>15/30 </td></tr>
      <tr>
        <td rowSpan={1}>Image</td><td rowSpan={1}>YUV/JPEG</td><td rowSpan={1}>15/30 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>YUV/RGB/Compressed</td><td rowSpan={1}>15/30 </td></tr>
    </tbody></table>
  <p>Note:<br />
    15Fps only supported in Auto Exposure Mode. <br />
    When multiple streams are configured frame rate is constrained by max resolution. <br />
    FrameRate_None can be used when only Image capture_type is used.</p>
    <br></br>
    </div>


<div>
  <table className="doxtable">
    <tbody><tr>
        <th>Camera </th><th>Mode </th><th>Resolution </th><th>Capture Type </th><th>Formats </th><th>FrameRate </th></tr>
      <tr>
        <td rowSpan={48}>CV</td><td rowSpan={24}>Cam_Only</td><td rowSpan={2}>640x480<br />
          1280x720<br />
          1280x960<br />
          1440x1080<br />
          1920x1080<br />
          2048x1536 </td><td rowSpan={1}>Image</td><td rowSpan={1}>YUV</td><td rowSpan={1}>15/30/60 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>YUV/RGB</td><td rowSpan={1}>15/30/60 </td></tr>
      <tr>
        <td rowSpan={2}><br />
          2880x2160<br />
          3840x2160<br />
          4096x3072<br />
          <br />
        </td><td rowSpan={1}>Image</td><td rowSpan={1}>YUV</td><td rowSpan={1}>15/30 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>YUV/RGB </td><td rowSpan={1}>15/30 </td></tr>
    </tbody></table>
  <p>Note:<br />
   15Fps only supported in Auto Exposure Mode <br />
   FrameRate_None can be used when only Image capture_type is used.</p>
<br></br>
</div>

<div>
  <table className="doxtable">
    <tbody><tr>
        <th>Camera </th><th>Mode </th><th>Resolution </th><th>Capture Type </th><th>Formats </th><th>FrameRate </th></tr>
      <tr>
        <td rowSpan={48}>CV</td><td rowSpan={24}>Cam_Only</td><td rowSpan={2}>640x480<br />
          1280x720<br />
          1280x960<br />
          1440x1080<br />
          1920x1080<br />
          2048x1536 </td><td rowSpan={1}>Image</td><td rowSpan={1}>YUV</td><td rowSpan={1}>15/30/60 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>YUV/RGB</td><td rowSpan={1}>15/30/60 </td></tr>
      <tr>
        <td rowSpan={2}><br />
          2880x2160<br />
          3840x2160<br />
          4096x3072<br />
          <br />
        </td><td rowSpan={1}>Image</td><td rowSpan={1}>YUV</td><td rowSpan={1}>15/30 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>YUV/RGB </td><td rowSpan={1}>15/30 </td></tr>
    </tbody></table>
  <p>Note:<br />
   15Fps only supported in Auto Exposure Mode <br />
   FrameRate_None can be used when only Image capture_type is used.</p>
    <br></br>
</div>

<div>
<table className="doxtable">
      <tbody><tr>
          <th>Camera </th><th>Mode </th><th>Resolution </th><th>Capture Type </th><th>Formats </th><th>FrameRate </th></tr>
        <tr>
          <td rowSpan={48}>Main</td><td rowSpan={24}>MR/Virtual_Only</td><td rowSpan={2}>648x720 </td><td rowSpan={1}>Image</td><td rowSpan={1}>RBG/JPEG</td><td rowSpan={1}>30/60 </td></tr>
        <tr>
          <td rowSpan={1}>Video</td><td rowSpan={1}>RGB/Compressed</td><td rowSpan={1}>30/60 </td></tr>
        <tr>
          <td rowSpan={2}>960x720 </td><td rowSpan={1}>Image</td><td rowSpan={1}>RBG/JPEG</td><td rowSpan={1}>30/60 </td></tr>
        <tr>
          <td rowSpan={1}>Video</td><td rowSpan={1}>RGB/Compressed</td><td rowSpan={1}>30/60 </td></tr>
        <tr>
          <td rowSpan={2}>972x1080 </td><td rowSpan={1}>Image</td><td rowSpan={1}>RBG/JPEG</td><td rowSpan={1}>30/60 </td></tr>
        <tr>
          <td rowSpan={1}>Video</td><td rowSpan={1}>RGB/Compressed</td><td rowSpan={1}>30/60 </td></tr>
        <tr>
          <td rowSpan={2}>1440x1080</td><td rowSpan={1}>Image</td><td rowSpan={1}>RBG/JPEG</td><td rowSpan={1}>30/60 </td></tr>
        <tr>
          <td rowSpan={1}>Video</td><td rowSpan={1}>RGB/Compressed</td><td rowSpan={1}>30/60 </td></tr>
        <tr>
          <td rowSpan={2}>1944x2160</td><td rowSpan={1}>Image</td><td rowSpan={1}>RBG/JPEG</td><td rowSpan={1}>30 </td></tr>
        <tr>
          <td rowSpan={1}>Video</td><td rowSpan={1}>RGB/Compressed</td><td rowSpan={1}>30 </td></tr>
        <tr>
          <td rowSpan={2}>2880x2160</td><td rowSpan={1}>Image</td><td rowSpan={1}>RBG/JPEG</td><td rowSpan={1}>30 </td></tr>
        <tr>
          <td rowSpan={1}>Video</td><td rowSpan={1}>RGB/Compressed</td><td rowSpan={1}>30 </td></tr>
      </tbody>
      </table>
      </div>

Note: Quality and frame rate provided during connection should match the resolution and framerate in PrepareCapture. 

Stringify the error codes returned by these APIs, call MLMediaResultGetString.


The API only supports reading data from the depth camera. Apps cannot start or stop the camera nor can it modify the camera settings, support for the same may be added in a future release. If the system is not actively using the depth camera then any calls to get the depth camera data will timeout.


This is an experimental API which may be modified or removed without any prior notice. 




**Shared Object:**
  * camera.magicleap 
# Supported Camera Modes, Resolutions, Capture Type, Formats and FrameRates

**Shared Object:**
  * perception.magicleap  This is an experimental API which may be modified or removed without any prior notice.

**Shared Object:**
  * perception.magicleap Magic Leap 2 has three world cameras which it uses for environment tracking. The three cameras area located on the left, center, and right side of the headset. This API will provide a way to query for the frames from these world cameras, at this point the app will not be able to configure the world camera parameters.




-----------
## Enums Documentation

### Anonymous Enum 4 {#enums-anonymous-enum-4}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCAMERA_MAXSTREAMS |  2| Max No of streams supported by logical camera. |








-----------

### MLCameraIdentifier {#enums-mlcameraidentifier}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraIdentifier_MAIN |  0| x86 logical camera. |
| MLCameraIdentifier_CV | | CV logical camera. |
| MLCameraIdentifier_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Logical camera identifiers available for access. 





-----------

### MLCameraCaptureType {#enums-mlcameracapturetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraCaptureType_Image |  0| To capture an image. |
| MLCameraCaptureType_Video | | To capture a video. |
| MLCameraCaptureType_Preview | | To capture a video and access the raw buffer of the frames. |
| MLCameraCaptureType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Captures operation type. 





-----------

### MLCameraCaptureFrameRate {#enums-mlcameracaptureframerate}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraCaptureFrameRate_None |  0| None, used for still capture. |
| MLCameraCaptureFrameRate_15FPS | | Specified 15FPS. |
| MLCameraCaptureFrameRate_30FPS | | Specified 30FPS. |
| MLCameraCaptureFrameRate_60FPS | | Specified 60FPS. |
| MLCameraCaptureFrameRate_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Captures frame rate. 

Call [MLCameraPrepareCapture()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture) to configure frame rate. Use MLCameraCaptureFrameRate_None when configuring only Image capture. Use MLCameraCaptureFrameRate_60fps only when resolution of captures <= 3MP(2048x1536). Use MLCameraCaptureFrameRate_15FPS only when MLCameraConnectFlag is MLCameraConnectFlag_CamOnly. 





-----------

### MLCameraMRQuality {#enums-mlcameramrquality}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraMRQuality_648x720 |  1| Specifies 648 x 720 resolution. Aspect ratio: 9x10. .|
| MLCameraMRQuality_972x1080 |  2| Specifies 972 x 1080 resolution. Aspect ratio: 9x10. .|
| MLCameraMRQuality_1944x2160 |  3| Specifies 1944 x 2160 resolution. Aspect ratio: 9x10. MLCameraCaptureFrameRate_60FPS is not supported for this quality mode. .|
| MLCameraMRQuality_960x720 |  4| Specifies 960 x 720 resolution. Aspect ratio: 4x3. .|
| MLCameraMRQuality_1440x1080 |  5| Specifies 1440 x 1080 resolution. Aspect ratio: 4x3. .|
| MLCameraMRQuality_2880x2160 |  6| Specifies 2880 x 2160 resolution. Aspect ratio: 4x3. MLCameraCaptureFrameRate_60FPS is not supported for this quality mode. .|
| MLCameraMRQuality_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Video Quality enumeration for mixed reality capture. 

Use [MLCameraGetStreamCaps](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetstreamcaps) to get the resolution. 





-----------

### MLCameraConnectFlag {#enums-mlcameraconnectflag}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraConnectFlag_CamOnly |  0x0| Camera only frame capture. |
| MLCameraConnectFlag_VirtualOnly |  0x1| Virtual only capture. Only supported for MLCameraIdentifier_MAIN. |
| MLCameraConnectFlag_MR |  0x2| Mixed Reality capture. Only supported for MLCameraIdentifier_MAIN. |
| MLCameraConnectFlag_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Flags to describe various modules in camera pipeline. 





-----------

### MLCameraMRBlendType {#enums-mlcameramrblendtype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraMRBlendType_Additive |  1| Additive blend type. It simply adds pixel values of real world and virtual layer. |
| MLCameraMRBlendType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Virtual and real content blending modes. 





-----------

### MLCameraDisconnectReason {#enums-mlcameradisconnectreason}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraDisconnect_DeviceLost |  0| Device lost. |
| MLCameraDisconnect_PriorityLost | | Priority lost. |
| MLCameraDisconnect_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Camera disconnect reason. 





-----------

### MLCameraError {#enums-mlcameraerror}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraError_None |  0| |
| MLCameraError_Invalid | | Invalid/Unknown Error. |
| MLCameraError_Disabled | | Camera disabled. |
| MLCameraError_DeviceFailed | | Camera device failed. |
| MLCameraError_ServiceFailed | | Camera service failed. |
| MLCameraError_CaptureFailed | | Capture failed. |
| MLCameraError_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Camera errors. 





-----------

### MLCameraOutputFormat {#enums-mlcameraoutputformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraOutputFormat_Unknown | | |
| MLCameraOutputFormat_YUV_420_888 | | YUV planar format. |
| MLCameraOutputFormat_JPEG | | Compressed output stream. |
| MLCameraOutputFormat_RGBA_8888 | | RGB32 format. |
| MLCameraOutputFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Captured output format. These three parameters determine which formats are supported: 



* Camera type: [Main, CV]
* Mode: [Real, MR, Virtual]
* Capture type: [Preview, Video, Image]
These are formats supported: YUV : [Main] [Real] [Preview, Video, Image] / [ CV ] [Real] [Video, Image] RGBA : [Main] [Real] [Video] / [Main] [MR, Virtual] [Video, Image] / [ CV ] [Real] [Video] JPEG : [Main] [Real, MR, Virtual] [Image] 





-----------

### MLCameraDeviceStatusFlag {#enums-mlcameradevicestatusflag}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraDeviceStatusFlag_Connected |  1 << 0| Connected. |
| MLCameraDeviceStatusFlag_Idle |  1 << 1| Idle. |
| MLCameraDeviceStatusFlag_Streaming |  1 << 2| Opened. |
| MLCameraDeviceStatusFlag_Disconnected |  1 << 3| Disconnected. |
| MLCameraDeviceStatusFlag_Error |  1 << 4| Error. Call [MLCameraGetErrorCode](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerageterrorcode) to obtain the error code. |
| MLCameraDeviceStatusFlag_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Client can implement polling mechanism to retrieve device status and use these masks to view device status. 





-----------

### Anonymous Enum 5 {#enums-anonymous-enum-5}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCamera_MaxImagePlanes |  3| Number of planes representing the image color space. |








-----------

### Anonymous Enum 6 {#enums-anonymous-enum-6}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraIntrinsics_MaxDistortionCoefficients |  5| Default distortion vector size. |



Camera distortion vector size. 




**API Level:**
  * 20 




-----------

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
| MLDepthCameraFrameType_LongRange |  1| Frame captured using [MLDepthCameraMode_LongRange](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mldepthcameramode-longrange) mode. .|
| MLDepthCameraFrameType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of camera mode used when capturing a frame. 





-----------

### MLDepthCameraFlags {#enums-mldepthcameraflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLDepthCameraFlags_DepthImage |  1 << 0| Enable MLDepthCameraDepthImage. See [MLDepthCameraDepthImage](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthimage) for more details. |
| MLDepthCameraFlags_Confidence |  1 << 1| Enable MLDepthCameraConfidenceBuffer. See [MLDepthCameraConfidenceBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraconfidencebuffer) for more details. |
| MLDepthCameraFlags_DepthFlags |  1 << 2| Enable MLDepthCameraDepthFlagsBuffer. See [MLDepthCameraDepthFlagsBuffer](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer) for more details. |
| MLDepthCameraFlags_AmbientRawDepthImage |  1 << 3| Enable MLDepthCameraAmbientRawDepthImage. See [MLDepthCameraAmbientRawDepthImage](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage) for more details. |
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

### Anonymous Enum 27 {#enums-anonymous-enum-27}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWorldCameraIntrinsics_MaxRadialDistortionCoefficients |  4| Default radial distortion vector size. |
| MLWorldCameraIntrinsics_MaxTangentialDistortionCoefficients |  2| Default tangential distortion vector size. |








-----------

### MLWorldCameraIdentifier {#enums-mlworldcameraidentifier}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWorldCameraIdentifier_Left |  1 << 0| Left World camera. |
| MLWorldCameraIdentifier_Right |  1 << 1| Right World camera. |
| MLWorldCameraIdentifier_Center |  1 << 2| Center World camera. |
| MLWorldCameraIdentifier_All |  MLWorldCameraIdentifier_Left |
                                MLWorldCameraIdentifier_Right |
                                MLWorldCameraIdentifier_Center| All World cameras. |
| MLWorldCameraIdentifier_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Camera Identifier. 

Enumeration of all the available world camera sensors. 





-----------

### MLWorldCameraMode {#enums-mlworldcameramode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWorldCameraMode_Unknown |  0| None. |
| MLWorldCameraMode_LowExposure |  1 << 0| Low exposure mode. .This mode is currently only available when the controller is being tracked. |
| MLWorldCameraMode_NormalExposure |  1 << 1| Normal exposure mode. .|
| MLWorldCameraMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of world camera modes. 





-----------

### MLWorldCameraFrameType {#enums-mlworldcameraframetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWorldCameraFrameType_Unknown |  0| None. |
| MLWorldCameraFrameType_LowExposure |  1| Frame captured using [MLWorldCameraMode_LowExposure](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameramode-lowexposure) mode. .|
| MLWorldCameraFrameType_NormalExposure |  2| Frame captured using [MLWorldCameraMode_NormalExposure](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlworldcameramode-normalexposure) mode. .|
| MLWorldCameraFrameType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of camera mode used when capturing a frame. 





-----------


## Types Documentation

### MLCameraContext {#mlhandle-mlcameracontext}

```cpp
typedef MLHandle MLCameraContext;
```


Camera context to be used while connecting to camera. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle)



-----------

### MLCameraMRConnectInfo {#struct-mlcameramrconnectinfo}

```cpp
typedef struct MLCameraMRConnectInfo  MLCameraMRConnectInfo;
```


A structure to encapsulate connection settings for MR capture. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_m_r_connect_info.md)



-----------

### MLCameraConnectContext {#struct-mlcameraconnectcontext}

```cpp
typedef struct MLCameraConnectContext  MLCameraConnectContext;
```


A structure to encapsulate context for a CameraConnect Request. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md)



-----------

### MLCameraCaptureStreamCaps {#struct-mlcameracapturestreamcaps}

```cpp
typedef struct MLCameraCaptureStreamCaps  MLCameraCaptureStreamCaps;
```

A structure to encapsulate stream capabilities. 

The capabilities for each stream supported by logical camera device can be queried with MLCameraGetStreamCaps.



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md)


**API Level:**
  * 20 




-----------

### MLCameraCaptureStreamConfig {#struct-mlcameracapturestreamconfig}

```cpp
typedef struct MLCameraCaptureStreamConfig  MLCameraCaptureStreamConfig;
```


A structure to encapsulate stream configurations. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md)



-----------

### MLCameraCaptureConfig {#struct-mlcameracaptureconfig}

```cpp
typedef struct MLCameraCaptureConfig  MLCameraCaptureConfig;
```


A structure to encapsulate capture configuration. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md)



-----------

### MLCameraPlaneInfo {#struct-mlcameraplaneinfo}

```cpp
typedef struct MLCameraPlaneInfo  MLCameraPlaneInfo;
```


Per plane info for captured output. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md)



-----------

### MLCameraOutput {#struct-mlcameraoutput}

```cpp
typedef struct MLCameraOutput  MLCameraOutput;
```


A structure to encapsulate captured output. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_output.md)



-----------

### MLCameraIntrinsicCalibrationParameters {#struct-mlcameraintrinsiccalibrationparameters}

```cpp
typedef struct MLCameraIntrinsicCalibrationParameters  MLCameraIntrinsicCalibrationParameters;
```

Camera intrinsic parameter. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md)


**API Level:**
  * 20 




-----------

### MLCameraResultExtras {#struct-mlcameraresultextras}

```cpp
typedef struct MLCameraResultExtras  MLCameraResultExtras;
```


A structure to encapsulate various indices for a capture result. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_result_extras.md)



-----------

### MLCameraDeviceAvailabilityInfo {#struct-mlcameradeviceavailabilityinfo}

```cpp
typedef struct MLCameraDeviceAvailabilityInfo  MLCameraDeviceAvailabilityInfo;
```


A structure to represent info on camera availability. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_info.md)



-----------

### MLCameraDeviceAvailabilityStatusCallbacks {#struct-mlcameradeviceavailabilitystatuscallbacks}

```cpp
typedef struct MLCameraDeviceAvailabilityStatusCallbacks  MLCameraDeviceAvailabilityStatusCallbacks;
```


Device availability status callbacks to be implemented by client to receive device availability status. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md)



-----------

### MLCameraDeviceStatusCallbacks {#struct-mlcameradevicestatuscallbacks}

```cpp
typedef struct MLCameraDeviceStatusCallbacks  MLCameraDeviceStatusCallbacks;
```


Device status callbacks to be implemented by client to receive device status if callback mechanism is used. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md)



-----------

### MLCameraCaptureCallbacks {#struct-mlcameracapturecallbacks}

```cpp
typedef struct MLCameraCaptureCallbacks  MLCameraCaptureCallbacks;
```

Capture callbacks to be implemented by client to receive capture status if callback mechanism is used. 

This structure must be initialized by calling [MLCameraCaptureCallbacksInit()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameracapturecallbacksinit) before use. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md)



-----------

### MLDepthCameraSettings {#struct-mldepthcamerasettings}

```cpp
typedef struct MLDepthCameraSettings  MLDepthCameraSettings;
```

A structure to encapsulate the camera settings. 

This structure must be initialized by calling [MLDepthCameraSettingsInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mldepthcamerasettingsinit) before use.



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md)


**API Level:**
  * 23 




-----------

### MLDepthCameraIntrinsics {#struct-mldepthcameraintrinsics}

```cpp
typedef struct MLDepthCameraIntrinsics  MLDepthCameraIntrinsics;
```

Depth camera intrinsic parameters. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_intrinsics.md)


**API Level:**
  * 23 




-----------

### MLDepthCameraFrameBuffer {#struct-mldepthcameraframebuffer}

```cpp
typedef struct MLDepthCameraFrameBuffer  MLDepthCameraFrameBuffer;
```

A structure to encapsulate per plane info for each camera frame. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)


**API Level:**
  * 23 




-----------

### MLDepthCameraDepthImage {#mldepthcameraframebuffer-mldepthcameradepthimage}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraDepthImage;
```

Depth image. 

Depth image stores the depth data from the depth camera. Depth is represented in meters and gives the radial distance of the real world location from the depth camera coordinate frame. See [MLDepthCameraIntrinsics](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_intrinsics.md) and [MLDepthCameraData.camera_pose](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md#mltransform-camera-pose) for more details.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraConfidenceBuffer {#mldepthcameraframebuffer-mldepthcameraconfidencebuffer}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraConfidenceBuffer;
```

Confidence score. 

Confidence buffer stores the confidence values for each pixel in the MLDepthCameraDepthImage. The confidence score is derived from the sensor noise and it is not normalized. The higher the value the higher the confidence. Applications can determine what confidence threshold to use based on their use case.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraDepthFlagsBuffer {#mldepthcameraframebuffer-mldepthcameradepthflagsbuffer}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraDepthFlagsBuffer;
```

Flags. 

Each pixel in the MLDepthCameraDepthImage will have an associated set of flags.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#void-data) to uint32_t data type. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraAmbientRawDepthImage {#mldepthcameraframebuffer-mldepthcameraambientrawdepthimage}

```cpp
typedef MLDepthCameraFrameBuffer MLDepthCameraAmbientRawDepthImage;
```

Ambient raw depth image. 

This is the raw depth camera sensor data captured without the depth camera illumination and corresponds to the amount of ambient light incident on the sensor.

Cast the [MLDepthCameraFrameBuffer.data](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md#void-data) to float data type. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_frame_buffer.md)



-----------

### MLDepthCameraData {#struct-mldepthcameradata}

```cpp
typedef struct MLDepthCameraData  MLDepthCameraData;
```

A structure to encapsulate output data for each camera sensor. 

This structure must be initialized by calling [MLDepthCameraDataInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mldepthcameradatainit) before use.



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md)


**API Level:**
  * 23 




-----------

### MLWorldCameraSettings {#struct-mlworldcamerasettings}

```cpp
typedef struct MLWorldCameraSettings  MLWorldCameraSettings;
```

A structure to encapsulate the camera settings. 

This structure must be initialized by calling [MLWorldCameraSettingsInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlworldcamerasettingsinit) before use.



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md)


**API Level:**
  * 23 




-----------

### MLWorldCameraIntrinsics {#struct-mlworldcameraintrinsics}

```cpp
typedef struct MLWorldCameraIntrinsics  MLWorldCameraIntrinsics;
```

World camera intrinsic parameters. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_intrinsics.md)


**API Level:**
  * 23 




-----------

### MLWorldCameraFrameBuffer {#struct-mlworldcameraframebuffer}

```cpp
typedef struct MLWorldCameraFrameBuffer  MLWorldCameraFrameBuffer;
```

A structure to encapsulate per plane info for each camera frame. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_frame_buffer.md)


**API Level:**
  * 23 




-----------

### MLWorldCameraFrame {#struct-mlworldcameraframe}

```cpp
typedef struct MLWorldCameraFrame  MLWorldCameraFrame;
```

A structure to encapsulate output data for each camera sensor. 



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_frame.md)


**API Level:**
  * 23 




-----------

### MLWorldCameraData {#struct-mlworldcameradata}

```cpp
typedef struct MLWorldCameraData  MLWorldCameraData;
```

A structure to encapsulate output data for each camera sensor. 

This structure must be initialized by calling [MLWorldCameraDataInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlworldcameradatainit) before use.



[More Info](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md)


**API Level:**
  * 23 




-----------


## Functions Documentation

### MLCameraConnectContextInit {#void-mlcameraconnectcontextinit}

```cpp
static inline void MLCameraConnectContextInit(
    MLCameraConnectContext * inout_context
)
```

Initialize the connect context structure. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraConnectContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) * |inout_context|[MLCameraConnectContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) structure to initialize.|
**Required Permissions**:

  * None 


Shall be called before calling [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).




**API Level:**
  * 20




-----------

### MLCameraCaptureConfigInit {#void-mlcameracaptureconfiginit}

```cpp
static inline void MLCameraCaptureConfigInit(
    MLCameraCaptureConfig * inout_config
)
```

Initialize the capture config structure. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraCaptureConfig](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) * |inout_config|[MLCameraCaptureConfig](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) structure to initialize.|
**Required Permissions**:

  * None 


Shall be called before calling [MLCameraPrepareCapture()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture).




**API Level:**
  * 20




-----------

### MLCameraDeviceAvailabilityStatusCallbacksInit {#void-mlcameradeviceavailabilitystatuscallbacksinit}

```cpp
static inline void MLCameraDeviceAvailabilityStatusCallbacksInit(
    MLCameraDeviceAvailabilityStatusCallbacks * inout_device_availability_status_callbacks
)
```

Initialize the callback structure. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) * |inout_device_availability_status_callbacks|Device availability status callbacks structure to initialize.|
**Required Permissions**:

  * None 


Shall be called before calling MLCameraSetDeviceAvailabilityStatusCallbacks().




**API Level:**
  * 20




-----------

### MLCameraDeviceStatusCallbacksInit {#void-mlcameradevicestatuscallbacksinit}

```cpp
static inline void MLCameraDeviceStatusCallbacksInit(
    MLCameraDeviceStatusCallbacks * inout_device_status_callbacks
)
```

Initialize the callback structure. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraDeviceStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) * |inout_device_status_callbacks|Device status callbacks structure to initialize.|
**Required Permissions**:

  * None 


Shall be called before calling [MLCameraSetDeviceStatusCallbacks()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetdevicestatuscallbacks).




**API Level:**
  * 20




-----------

### MLCameraCaptureCallbacksInit {#void-mlcameracapturecallbacksinit}

```cpp
static inline void MLCameraCaptureCallbacksInit(
    MLCameraCaptureCallbacks * inout_capture_callbacks
)
```

Initialize the callback structure. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraCaptureCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) * |inout_capture_callbacks|Capture status callbacks structure to initialize.|
**Required Permissions**:

  * None 


Shall be called before calling [MLCameraSetCaptureCallbacks()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetcapturecallbacks).




**API Level:**
  * 20




-----------

### MLCameraInit {#mlresult-mlcamerainit}

```cpp
MLResult MLCameraInit(
    const MLCameraDeviceAvailabilityStatusCallbacks * device_availability_status_callbacks,
    void * user_data
)
```

Initialize ML Camera API, Register callback for device availability. If the user does not want to register device availability listener, MLCameraConnect can be called directly without [MLCameraInit()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit). MLCameraDeInit should be used for unregistering callbacks and releasing resources acquired in [MLCameraInit()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit). 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) * |device_availability_status_callbacks|Callback to notify camera availability status. |
| void * |user_data|Pointer to user context data (can be NULL).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Camera is initialized and callbacks registered successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing.|
**Required Permissions**:

  * android.permission.CAMERA (protection level: dangerous) 





**API Level:**
  * 20




-----------

### MLCameraConnect {#mlresult-mlcameraconnect}

```cpp
MLResult MLCameraConnect(
    const MLCameraConnectContext * input_context,
    MLCameraContext * out_context
)
```

Connect to camera device. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLCameraConnectContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) * |input_context|[MLCameraConnectContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) structure. |
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) * |out_context|Camera context to be used in later APIs.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Connected to camera device successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|camera device already connected. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing.|
**Required Permissions**:

  * android.permission.CAMERA (protection level: dangerous) 





**API Level:**
  * 20




-----------

### MLCameraGetNumSupportedStreams {#mlresult-mlcameragetnumsupportedstreams}

```cpp
MLResult MLCameraGetNumSupportedStreams(
    MLCameraContext context,
    uint32_t * out_num_supported_streams
)
```

Query the no of streams supported by camera device. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| uint32_t * |out_num_supported_streams|Number of streams supported by device.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|API call completed successfully.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraGetStreamCaps {#mlresult-mlcameragetstreamcaps}

```cpp
MLResult MLCameraGetStreamCaps(
    MLCameraContext context,
    const uint32_t stream_index,
    uint32_t * inout_num_stream_caps,
    MLCameraCaptureStreamCaps * inout_stream_caps
)
```

Query the stream capabilities. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| const uint32_t |stream_index|Index of the stream for which to query capabilities. The index should be in the range [0 , num_supported_streams) where the num_supported_streams is from [MLCameraGetNumSupportedStreams()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetnumsupportedstreams). |
| uint32_t * |inout_num_stream_caps|When the parameter inout_stream_caps is null, this is an output parameter which will hold the number of capabilities supported by the stream on function return. Otherwise this is an input parameter specifying the number of capabilities to retrieve, namely the size of the array pointed to by inout_stream_caps on return. The value should be in the range of [0, number-of-caps-retrieved]. |
| [MLCameraCaptureStreamCaps](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md) * |inout_stream_caps|This is either null or pointing to an array of [MLCameraCaptureStreamCaps()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameracapturestreamcaps) on return. Note that caller is responsible for allocating and releasing the array.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|API call completed successfully.|
**Required Permissions**:

  * None 


Retrieves either the number of capabilities supported by the given stream or an array of capabilities for the given stream. To get the number of capabilities supported by the given stream, this API should be called with num_stream_caps being valid pointer and out_stream_caps being NULL. To retrieve the array of capabilities for the given stream, this API should be called with a valid num_stream_caps (that contains the size of the out_stream_caps) and out_stream_caps being a preallocated array of [MLCameraCaptureStreamCaps](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md) of size specified by num_stream_caps.




**API Level:**
  * 20




-----------

### MLCameraDisconnect {#mlresult-mlcameradisconnect}

```cpp
MLResult MLCameraDisconnect(
    MLCameraContext context
)
```

Disconnect from camera device. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Disconnected Camera device successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Camera device already disconnected or camera device is streaming.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraDeInit {#mlresult-mlcameradeinit}

```cpp
MLResult MLCameraDeInit()
```

Uninitialize ML Camera API, unregister callback for device availability. Should be called after all camera devices are disconnected. After MLCameraDeInit, MLCameraInit can be called or MLCameraConnect can be called. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Deinitialization completed successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|DeInit called when camera device is connected.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraPreCaptureAEAWB {#mlresult-mlcameraprecaptureaeawb}

```cpp
MLResult MLCameraPreCaptureAEAWB(
    MLCameraContext context
)
```

Trigger AEAWB Convergence. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid camera context. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|AEAWB convergence done. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Unspecified failure. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|Timed out waiting for AEAWB convergence. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Camera device not configured using [MLCameraPrepareCapture()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture) or camera device is streaming.|
**Required Permissions**:

  * None 


This API triggers AEAWB sequence and returns when AEAWB convergence has been achieved. The Users can either trigger and converge AEAWB metadata settings or use this API.




**API Level:**
  * 20




-----------

### MLCameraPrepareCapture {#mlresult-mlcamerapreparecapture}

```cpp
MLResult MLCameraPrepareCapture(
    MLCameraContext context,
    const MLCameraCaptureConfig * config,
    MLHandle * out_request_handle
)
```

Prepare for capture. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| const [MLCameraCaptureConfig](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) * |config|Capture configuration. |
| [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_request_handle|Handle to the capture request metadata. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to prepare for capture due to invalid input parameter. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Prepared for capture successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to prepare for capture due to internal error. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Camera device in streaming state.|
**Required Permissions**:

  * None 


This API prepares for capture per specified [MLCameraCaptureType](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype) by creating a capture request, and a handle to which is returned to the user, who can choose to manipulate the request data (metadata) via APIs defined in [ml_camera_metadata_v2.h](/versioned_docs/version-22-Mar-2023/api-ref/api/Files/ml__camera__metadata__v2_8h.md#files-ml-camera-metadata-v2.h) before performing the capture.

Shall be called after [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).

Note: When preparing capture the width and height parameters should match one of the values returned from [MLCameraGetStreamCaps](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetstreamcaps).




**API Level:**
  * 20




-----------

### MLCameraUpdateCaptureSettings {#mlresult-mlcameraupdatecapturesettings}

```cpp
MLResult MLCameraUpdateCaptureSettings(
    MLCameraContext context
)
```

Update capture setting. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Camera not streaming video or not in preview.|
**Required Permissions**:

  * None 


This API updates the capture settings for an active preview/video stream. The API can be used to update capture settings like exposure compensation manual exposure settings like exposure time, iso setting.The capture settings can be changed in metadata handle returned by [MLCameraPrepareCapture()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture) and then this API can be called to apply the capture settings.




**API Level:**
  * 20




-----------

### MLCameraSetDeviceStatusCallbacks {#mlresult-mlcamerasetdevicestatuscallbacks}

```cpp
MLResult MLCameraSetDeviceStatusCallbacks(
    MLCameraContext context,
    const MLCameraDeviceStatusCallbacks * device_status_callbacks,
    void * data
)
```

Set the client-implemented callbacks to convey camera device status. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| const [MLCameraDeviceStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) * |device_status_callbacks|Camera device status callbacks. |
| void * |data|User metadata.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set device status callbacks successfully.|
**Required Permissions**:

  * None 


Client needs to implement the callbacks defined by [MLCameraDeviceStatusCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md). The library passes the camera device status to the client via those callbacks.




**API Level:**
  * 20




-----------

### MLCameraSetCaptureCallbacks {#mlresult-mlcamerasetcapturecallbacks}

```cpp
MLResult MLCameraSetCaptureCallbacks(
    MLCameraContext context,
    const MLCameraCaptureCallbacks * capture_callbacks,
    void * data
)
```

Set the client-implemented callbacks to convey capture status. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| const [MLCameraCaptureCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) * |capture_callbacks|Capture status callbacks. |
| void * |data|User metadata.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set Capture callbacks successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error occurred.|
**Required Permissions**:

  * None 


Client needs to implement the callbacks defined by [MLCameraCaptureCallbacks](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). The library passes the capture status to the client via those callbacks.

Shall be called before capture operation for preview/image/video.




**API Level:**
  * 20




-----------

### MLCameraCaptureImage {#mlresult-mlcameracaptureimage}

```cpp
MLResult MLCameraCaptureImage(
    MLCameraContext context,
    uint32_t num_images
)
```

Capture still image. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| uint32_t |num_images|Number of images to capture valid range is 1-10.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context or invalid num_images. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Triggered image capture successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|MLMediaGenericResult_InvalidOperation Capture device in invalid state or image stream not configured by [MLCameraPrepareCapture()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error occurred.|
**Required Permissions**:

  * None 


The output image will be returned in capture callback on_image_buffer_available.

This is a blocking call, it will return after the end of on_image_buffer_available callback execution.




**API Level:**
  * 20




-----------

### MLCameraCaptureVideoStart {#mlresult-mlcameracapturevideostart}

```cpp
MLResult MLCameraCaptureVideoStart(
    MLCameraContext context
)
```

Start video capture. Capture either encoded video or YUV/RGBA frames. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context input parameter. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Started video capture successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Capture device in invalid state or video stream not configured by [MLCameraPrepareCapture()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to start video recording due to internal error.|
**Required Permissions**:

  * None 


YUV/RGBA frames are provides through callback.For encoded video capture valid encoder input surface should be configured.The captured video YUV/RGBA frames will be returned to the application via on_video_buffer_available.

[MLCameraCaptureVideoStop](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturevideostop) needs to be called to stop the capture.




**API Level:**
  * 20




-----------

### MLCameraCapturePreviewStart {#mlresult-mlcameracapturepreviewstart}

```cpp
MLResult MLCameraCapturePreviewStart(
    MLCameraContext context
)
```

Start preview provide raw frames through callback. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Started preview successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to start preview due to internal error. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Capture device in invalid state or preview stream not configured by [MLCameraPrepareCapture()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture).|
**Required Permissions**:

  * None 


The captured preview YUV frames will be returned to the application via on_preview_buffer_available.

[MLCameraCapturePreviewStop](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturepreviewstop) needs to be called to stop the capture.




**API Level:**
  * 20




-----------

### MLCameraCaptureVideoStop {#mlresult-mlcameracapturevideostop}

```cpp
MLResult MLCameraCaptureVideoStop(
    MLCameraContext context
)
```

Stop video capture. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Stopped video capture successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to stop video recording due to internal error. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Capture device in invalid state or video stream not streaming.|
**Required Permissions**:

  * None 


User should allow some time, i.e., >500ms, after MLCameraCaptureVideoStart and before calling this API, as captured frames are being encoded. Otherwise, MLResult_UnspecifiedFailure will be returned.




**API Level:**
  * 20




-----------

### MLCameraCapturePreviewStop {#mlresult-mlcameracapturepreviewstop}

```cpp
MLResult MLCameraCapturePreviewStop(
    MLCameraContext context
)
```

Stop preview. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Stopped video capture successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to stop preview due to internal error. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Capture device in invalid state or preview stream not streaming.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraGetDeviceStatus {#mlresult-mlcameragetdevicestatus}

```cpp
MLResult MLCameraGetDeviceStatus(
    MLCameraContext context,
    uint32_t * out_device_status
)
```

Poll camera device status. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| uint32_t * |out_device_status|Device status.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain device status due to invalid input parameter. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained device status successfully.|
**Required Permissions**:

  * None 


Use [MLCameraDeviceStatusFlag](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag) to view specific status bit. Call [MLCameraGetErrorCode()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerageterrorcode) to obtain the error code if [MLCameraDeviceStatusFlag_Error](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-error) bit is set.

Note: This API can still be used even if [MLCameraSetDeviceStatusCallbacks()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetdevicestatuscallbacks) has been called.




**API Level:**
  * 20




-----------

### MLCameraGetDeviceAvailabilityStatus {#mlresult-mlcameragetdeviceavailabilitystatus}

```cpp
MLResult MLCameraGetDeviceAvailabilityStatus(
    MLCameraIdentifier cam_id,
    bool * out_device_availability_status
)
```

Poll camera device availability status. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraIdentifier](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier) |cam_id|Camera Id for which the availability status is to be queried. |
| bool * |out_device_availability_status|Device availability status.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain device status due to invalid input parameter. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained device status successfully.|
**Required Permissions**:

  * None 


Use [MLCameraGetDeviceAvailabilityStatus](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetdeviceavailabilitystatus) to view specific status.

Note: This API can still be used even if availability status callback is not registered through [MLCameraInit](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit) call.




**API Level:**
  * 20




-----------

### MLCameraGetErrorCode {#mlresult-mlcamerageterrorcode}

```cpp
MLResult MLCameraGetErrorCode(
    MLCameraContext context,
    MLCameraError * out_error_code
)
```

Obtain camera device error code. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| [MLCameraError](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror) * |out_error_code|Camera device error code.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain device error code due to invalid input parameter. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained camera device error code successfully.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraGetCameraCharacteristics {#mlresult-mlcameragetcameracharacteristics}

```cpp
MLResult MLCameraGetCameraCharacteristics(
    MLCameraContext context,
    MLHandle * out_characteristics_handle
)
```

Obtains handle for retrieving camera characteristics. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLCameraContext](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_characteristics_handle|Handle to access camera characteristic metadata. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain camera characteristic handle due to invalid input parameter. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained camera characteristic handle successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


This API provides the handle for retrieving camera characteristics via APIs defined in [ml_camera_metadata_v2.h](/versioned_docs/version-22-Mar-2023/api-ref/api/Files/ml__camera__metadata__v2_8h.md#files-ml-camera-metadata-v2.h).




**API Level:**
  * 20




-----------

### MLDepthCameraSettingsInit {#void-mldepthcamerasettingsinit}

```cpp
static inline void MLDepthCameraSettingsInit(
    MLDepthCameraSettings * inout_handle
)
```

Initialize the connect handle structure. Shall be called before calling [MLDepthCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLDepthCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) * |inout_handle|[MLDepthCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) structure to initialize.|
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

Initialize [MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) * |inout_depth_camera_data|Set up the version for inout_depth_camera_data. |



**API Level:**
  * 23




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
| const [MLDepthCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) * |settings|A pointer to [MLDepthCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) structure. |
| [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to camera handle to be used in later APIs.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Connected to camera device(s) successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_LicenseError|Necessary license is missing. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect). |
| const [MLDepthCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md) * |settings|Pointer to [MLDepthCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_settings.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Settings updated successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
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
| [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect). |
| uint64_t |timeout_ms|Timeout in milliseconds. |
| [MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) ** |out_data|Depth camera data. Will be set to NULL if no valid data is available at this time.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Depth camera data fetched successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|Returned because no new frame available at this time. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


Returns [MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) with this latest data when available. The memory is owned by the system. Application should copy the data it needs to cache it and then release the memory by calling #MLDepthCameraReleaseCameraData.

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

Releases specified [MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect)|
| [MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) * |depth_camera_data|Pointer to a valid [MLDepthCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_depth_camera_data.md) object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released depth camera data. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|depth_camera_data parameter was not valid (NULL). |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
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
| [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLDepthCameraConnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mldepthcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Disconnected camera successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to disconnect camera.|
**Required Permissions**:

  * None 


This will disconnect from the depth camera.




**API Level:**
  * 23




-----------

### MLWorldCameraSettingsInit {#void-mlworldcamerasettingsinit}

```cpp
static inline void MLWorldCameraSettingsInit(
    MLWorldCameraSettings * inout_handle
)
```

Initialize the connect handle structure. Shall be called before calling [MLWorldCameraConnect()](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlworldcameraconnect). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLWorldCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md) * |inout_handle|[MLWorldCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md) structure to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 23




-----------

### MLWorldCameraDataInit {#void-mlworldcameradatainit}

```cpp
static inline void MLWorldCameraDataInit(
    MLWorldCameraData * inout_world_camera_data
)
```

Initialize [MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) * |inout_world_camera_data|Set up the version for inout_world_camera_data. |



**API Level:**
  * 23




-----------

### MLWorldCameraConnect {#mlresult-mlworldcameraconnect}

```cpp
MLResult MLWorldCameraConnect(
    const MLWorldCameraSettings * settings,
    MLHandle * out_handle
)
```

Connect to world cameras. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLWorldCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md) * |settings|A pointer to [MLWorldCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md) structure. |
| [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to camera handle to be used in later APIs.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Connected to camera device(s) successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_LicenseError|Necessary license is missing. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * android.permission.CAMERA (protection level: dangerous) 





**API Level:**
  * 23




-----------

### MLWorldCameraUpdateSettings {#mlresult-mlworldcameraupdatesettings}

```cpp
MLResult MLWorldCameraUpdateSettings(
    MLHandle handle,
    const MLWorldCameraSettings * settings
)
```

Update the world camera settings. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLWorldCameraConnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlworldcameraconnect)|
| const [MLWorldCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md) * |settings|Pointer to [MLWorldCameraSettings](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_settings.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Settings updated successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 





**API Level:**
  * 23




-----------

### MLWorldCameraGetLatestWorldCameraData {#mlresult-mlworldcameragetlatestworldcameradata}

```cpp
MLResult MLWorldCameraGetLatestWorldCameraData(
    MLHandle handle,
    uint64_t timeout_ms,
    MLWorldCameraData ** out_data
)
```

Poll for Frames. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLWorldCameraConnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlworldcameraconnect)|
| uint64_t |timeout_ms|Timeout in milliseconds. |
| [MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) ** |out_data|World camera data. Will be set to NULL if no valid data is available at this time.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|World camera data fetched successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|Returned because no new frame available at this time. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


Returns [MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) with this latest data when available. The memory is owned by the system. Application should copy the data it needs to cache and release the memory by calling [MLWorldCameraReleaseCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlworldcamerareleasecameradata).

This is a blocking call. API is not thread safe.

If there are no new camera frames within the timeout_ms duration then the API will return MLResult_Timeout.




**API Level:**
  * 23




-----------

### MLWorldCameraReleaseCameraData {#mlresult-mlworldcamerareleasecameradata}

```cpp
MLResult MLWorldCameraReleaseCameraData(
    MLHandle handle,
    MLWorldCameraData * world_camera_data
)
```

Releases specified [MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLWorldCameraConnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlworldcameraconnect)|
| [MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) * |world_camera_data|Pointer to a valid [MLWorldCameraData](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/struct_m_l_world_camera_data.md) object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released world camera data. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|world_camera_data parameter was not valid (NULL). |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


This function should be called exactly once for each successfull call to #MLWorldCameraGetLatestCameraData.





-----------

### MLWorldCameraDisconnect {#mlresult-mlworldcameradisconnect}

```cpp
MLResult MLWorldCameraDisconnect(
    MLHandle handle
)
```

Disconnect from world camera. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLWorldCameraConnect](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlworldcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Disconnected camera successfully. |
| [MLResult](/versioned_docs/version-22-Mar-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to disconnect camera.|
**Required Permissions**:

  * None 


This will disconnect from all the world camera currently connected.




**API Level:**
  * 23




-----------






