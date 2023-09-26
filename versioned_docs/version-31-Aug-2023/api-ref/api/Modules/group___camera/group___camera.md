---
title: Camera
summary: apis for accessing camera device and to do camera capture. 

---

# Camera

APIs for accessing Camera Device and to do Camera Capture.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLCameraMRConnectInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_m_r_connect_info.md)**  |
| struct | **[MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md)**  |
| struct | **[MLCameraCaptureStreamCaps](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md)** <br></br>A structure to encapsulate stream capabilities.  |
| struct | **[MLCameraCaptureStreamConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md)**  |
| struct | **[MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md)**  |
| struct | **[MLCameraPlaneInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md)**  |
| struct | **[MLCameraOutput](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_output.md)**  |
| struct | **[MLCameraIntrinsicCalibrationParameters](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md)** <br></br>Camera intrinsic parameter.  |
| struct | **[MLCameraResultExtras](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_result_extras.md)**  |
| struct | **[MLCameraDeviceAvailabilityInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_info.md)**  |
| struct | **[MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md)**  |
| struct | **[MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md)**  |
| struct | **[MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md)** <br></br>Capture callbacks to be implemented by client to receive capture status if callback mechanism is used.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext)**  |
| typedef struct [MLCameraMRConnectInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_m_r_connect_info.md) | **[MLCameraMRConnectInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameramrconnectinfo)**  |
| typedef struct [MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) | **[MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameraconnectcontext)**  |
| typedef struct [MLCameraCaptureStreamCaps](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md) | **[MLCameraCaptureStreamCaps](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameracapturestreamcaps)** <br></br>A structure to encapsulate stream capabilities.  |
| typedef struct [MLCameraCaptureStreamConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md) | **[MLCameraCaptureStreamConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameracapturestreamconfig)**  |
| typedef struct [MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) | **[MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameracaptureconfig)**  |
| typedef struct [MLCameraPlaneInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md) | **[MLCameraPlaneInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameraplaneinfo)**  |
| typedef struct [MLCameraOutput](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_output.md) | **[MLCameraOutput](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameraoutput)**  |
| typedef struct [MLCameraIntrinsicCalibrationParameters](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md) | **[MLCameraIntrinsicCalibrationParameters](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameraintrinsiccalibrationparameters)** <br></br>Camera intrinsic parameter.  |
| typedef struct [MLCameraResultExtras](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_result_extras.md) | **[MLCameraResultExtras](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameraresultextras)**  |
| typedef struct [MLCameraDeviceAvailabilityInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_info.md) | **[MLCameraDeviceAvailabilityInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameradeviceavailabilityinfo)**  |
| typedef struct [MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) | **[MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameradeviceavailabilitystatuscallbacks)**  |
| typedef struct [MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) | **[MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameradevicestatuscallbacks)**  |
| typedef struct [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) | **[MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameracapturecallbacks)** <br></br>Capture callbacks to be implemented by client to receive capture status if callback mechanism is used.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 4](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-anonymous-enum-4)** <br></br> { <br></br>[MLCAMERA_MAXSTREAMS](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcamera-maxstreams) = 2<br></br>} |
| enum | **[MLCameraIdentifier](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier)** <br></br> { <br></br>[MLCameraIdentifier_MAIN](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier-main) = 0,<br></br> [MLCameraIdentifier_CV](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier-cv),<br></br> [MLCameraIdentifier_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLCameraCaptureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype)** <br></br> { <br></br>[MLCameraCaptureType_Image](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-image) = 0,<br></br> [MLCameraCaptureType_Video](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-video),<br></br> [MLCameraCaptureType_Preview](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-preview),<br></br> [MLCameraCaptureType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Captures operation type.  |
| enum | **[MLCameraCaptureFrameRate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate)** <br></br> { <br></br>[MLCameraCaptureFrameRate_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate-none) = 0,<br></br> [MLCameraCaptureFrameRate_15FPS](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate-15fps),<br></br> [MLCameraCaptureFrameRate_30FPS](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate-30fps),<br></br> [MLCameraCaptureFrameRate_60FPS](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate-60fps),<br></br> [MLCameraCaptureFrameRate_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracaptureframerate-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Captures frame rate.  |
| enum | **[MLCameraMRQuality](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality)** <br></br> { <br></br>[MLCameraMRQuality_648x720](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-648x720) = 1,<br></br> [MLCameraMRQuality_972x1080](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-972x1080) = 2,<br></br> [MLCameraMRQuality_1944x2160](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-1944x2160) = 3,<br></br> [MLCameraMRQuality_960x720](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-960x720) = 4,<br></br> [MLCameraMRQuality_1440x1080](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-1440x1080) = 5,<br></br> [MLCameraMRQuality_2880x2160](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-2880x2160) = 6,<br></br> [MLCameraMRQuality_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrquality-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Video Quality enumeration for mixed reality capture.  |
| enum | **[MLCameraConnectFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag)** <br></br> { <br></br>[MLCameraConnectFlag_CamOnly](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag-camonly) = 0x0,<br></br> [MLCameraConnectFlag_VirtualOnly](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag-virtualonly) = 0x1,<br></br> [MLCameraConnectFlag_MR](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag-mr) = 0x2,<br></br> [MLCameraConnectFlag_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLCameraMRBlendType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrblendtype)** <br></br> { <br></br>[MLCameraMRBlendType_Additive](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrblendtype-additive) = 1,<br></br> [MLCameraMRBlendType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameramrblendtype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLCameraDisconnectReason](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradisconnectreason)** <br></br> { <br></br>[MLCameraDisconnect_DeviceLost](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradisconnect-devicelost) = 0,<br></br> [MLCameraDisconnect_PriorityLost](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradisconnect-prioritylost),<br></br> [MLCameraDisconnect_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradisconnect-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLCameraError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror)** <br></br> { <br></br>[MLCameraError_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-none) = 0,<br></br> [MLCameraError_Invalid](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-invalid),<br></br> [MLCameraError_Disabled](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-disabled),<br></br> [MLCameraError_DeviceFailed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-devicefailed),<br></br> [MLCameraError_ServiceFailed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-servicefailed),<br></br> [MLCameraError_CaptureFailed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-capturefailed),<br></br> [MLCameraError_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLCameraOutputFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat)** <br></br> { <br></br>[MLCameraOutputFormat_Unknown](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat-unknown),<br></br> [MLCameraOutputFormat_YUV_420_888](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat-yuv-420-888),<br></br> [MLCameraOutputFormat_JPEG](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat-jpeg),<br></br> [MLCameraOutputFormat_RGBA_8888](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat-rgba-8888),<br></br> [MLCameraOutputFormat_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraoutputformat-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Captured output format. These three parameters determine which formats are supported:  |
| enum | **[MLCameraDeviceStatusFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag)** <br></br> { <br></br>[MLCameraDeviceStatusFlag_Connected](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-connected) = 1 << 0,<br></br> [MLCameraDeviceStatusFlag_Idle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-idle) = 1 << 1,<br></br> [MLCameraDeviceStatusFlag_Streaming](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-streaming) = 1 << 2,<br></br> [MLCameraDeviceStatusFlag_Disconnected](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-disconnected) = 1 << 3,<br></br> [MLCameraDeviceStatusFlag_Error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-error) = 1 << 4,<br></br> [MLCameraDeviceStatusFlag_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[Anonymous Enum 5](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-anonymous-enum-5)** <br></br> { <br></br>[MLCamera_MaxImagePlanes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcamera-maximageplanes) = 3<br></br>} |
| enum | **[Anonymous Enum 6](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-anonymous-enum-6)** <br></br> { <br></br>[MLCameraIntrinsics_MaxDistortionCoefficients](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraintrinsics-maxdistortioncoefficients) = 5<br></br>}<br></br>Camera distortion vector size.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLCameraConnectContextInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameraconnectcontextinit)**([MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) * inout_context)<br></br>Initialize the connect context structure.  |
| void | **[MLCameraCaptureConfigInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameracaptureconfiginit)**([MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) * inout_config)<br></br>Initialize the capture config structure.  |
| void | **[MLCameraDeviceAvailabilityStatusCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameradeviceavailabilitystatuscallbacksinit)**([MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) * inout_device_availability_status_callbacks)<br></br>Initialize the callback structure.  |
| void | **[MLCameraDeviceStatusCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameradevicestatuscallbacksinit)**([MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) * inout_device_status_callbacks)<br></br>Initialize the callback structure.  |
| void | **[MLCameraCaptureCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameracapturecallbacksinit)**([MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) * inout_capture_callbacks)<br></br>Initialize the callback structure.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit)**(const [MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) * device_availability_status_callbacks, void * user_data)<br></br>Initialize ML Camera API, Register callback for device availability. If the user does not want to register device availability listener, MLCameraConnect can be called directly without [MLCameraInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit). MLCameraDeInit should be used for unregistering callbacks and releasing resources acquired in [MLCameraInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect)**(const [MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) * input_context, [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) * out_context)<br></br>Connect to camera device.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraGetNumSupportedStreams](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetnumsupportedstreams)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, uint32_t * out_num_supported_streams)<br></br>Query the no of streams supported by camera device.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraGetStreamCaps](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetstreamcaps)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, const uint32_t stream_index, uint32_t * inout_num_stream_caps, [MLCameraCaptureStreamCaps](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md) * inout_stream_caps)<br></br>Query the stream capabilities.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraDisconnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameradisconnect)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Disconnect from camera device.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraDeInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameradeinit)**()<br></br>Uninitialize ML Camera API, unregister callback for device availability. Should be called after all camera devices are disconnected. After MLCameraDeInit, MLCameraInit can be called or MLCameraConnect can be called.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraPreCaptureAEAWB](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraprecaptureaeawb)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Trigger AEAWB Convergence.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, const [MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) * config, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_request_handle)<br></br>Prepare for capture.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraUpdateCaptureSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraupdatecapturesettings)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Update capture setting.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraSetDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetdevicestatuscallbacks)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, const [MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) * device_status_callbacks, void * data)<br></br>Set the client-implemented callbacks to convey camera device status.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraSetCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetcapturecallbacks)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, const [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) * capture_callbacks, void * data)<br></br>Set the client-implemented callbacks to convey capture status.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraCaptureImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracaptureimage)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, uint32_t num_images)<br></br>Capture still image.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraCaptureVideoStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturevideostart)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Start video capture. Capture either encoded video or YUV/RGBA frames.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraCapturePreviewStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturepreviewstart)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Start preview provide raw frames through callback.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraCaptureVideoStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturevideostop)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Stop video capture.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraCapturePreviewStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturepreviewstop)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context)<br></br>Stop preview.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraGetDeviceStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetdevicestatus)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, uint32_t * out_device_status)<br></br>Poll camera device status.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraGetDeviceAvailabilityStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetdeviceavailabilitystatus)**([MLCameraIdentifier](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier) cam_id, bool * out_device_availability_status)<br></br>Poll camera device availability status.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraGetErrorCode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerageterrorcode)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, [MLCameraError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror) * out_error_code)<br></br>Obtain camera device error code.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics)**([MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_characteristics_handle)<br></br>Obtains handle for retrieving camera characteristics.  |

## Detailed Description

APIs for accessing Camera Device and to do Camera Capture. 




# Supported Camera Modes, Resolutions, Capture Type, Formats and FrameRates


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




**Shared Object:**
  * camera.magicleap*




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

Call [MLCameraPrepareCapture()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture) to configure frame rate. Use MLCameraCaptureFrameRate_None when configuring only Image capture. Use MLCameraCaptureFrameRate_60fps only when resolution of captures <= 3MP(2048x1536). Use MLCameraCaptureFrameRate_15FPS only when MLCameraConnectFlag is MLCameraConnectFlag_CamOnly. 





-----------

### MLCameraMRQuality {#enums-mlcameramrquality}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraMRQuality_648x720 |  1| Specifies 648 x 720 resolution. Aspect ratio: 9x10. |
| MLCameraMRQuality_972x1080 |  2| Specifies 972 x 1080 resolution. Aspect ratio: 9x10. |
| MLCameraMRQuality_1944x2160 |  3| Specifies 1944 x 2160 resolution. Aspect ratio: 9x10. MLCameraCaptureFrameRate_60FPS is not supported for this quality mode. |
| MLCameraMRQuality_960x720 |  4| Specifies 960 x 720 resolution. Aspect ratio: 4x3. |
| MLCameraMRQuality_1440x1080 |  5| Specifies 1440 x 1080 resolution. Aspect ratio: 4x3. |
| MLCameraMRQuality_2880x2160 |  6| Specifies 2880 x 2160 resolution. Aspect ratio: 4x3. MLCameraCaptureFrameRate_60FPS is not supported for this quality mode. |
| MLCameraMRQuality_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Video Quality enumeration for mixed reality capture. 

Use [MLCameraGetStreamCaps](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetstreamcaps) to get the resolution. 





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



* Camera type: [Main, CV].
* Mode: [Real, MR, Virtual].
* Capture type: [Preview, Video, Image].
These are formats supported:

<table className="doxtable">
  <tbody><tr>
      <th>Format </th><th>Camera Type </th><th>Mode </th><th>Capture Type </th></tr>
    <tr>
      <td>YUV </td><td>Main <br />
        CV </td><td>Real <br />
        Real </td><td>Preview, Video, Image <br />
        Video, Image </td></tr>
    <tr>
      <td>RGBA </td><td>Main <br />
        Main <br />
        CR </td><td>Real <br />
        MR, Virtual <br />
        Real </td><td>Video <br />
        Video, Image <br />
        Video </td></tr>
    <tr>
      <td>JPEG </td><td>Main </td><td>Real, MR, Virtual </td><td>Image </td></tr>
  </tbody></table>
  





-----------

### MLCameraDeviceStatusFlag {#enums-mlcameradevicestatusflag}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCameraDeviceStatusFlag_Connected |  1 << 0| Connected. |
| MLCameraDeviceStatusFlag_Idle |  1 << 1| Idle. |
| MLCameraDeviceStatusFlag_Streaming |  1 << 2| Opened. |
| MLCameraDeviceStatusFlag_Disconnected |  1 << 3| Disconnected. |
| MLCameraDeviceStatusFlag_Error |  1 << 4| Error. Call [MLCameraGetErrorCode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerageterrorcode) to obtain the error code. |
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


## Types Documentation

### MLCameraContext {#mlhandle-mlcameracontext}

```cpp
typedef MLHandle MLCameraContext;
```


Camera context to be used while connecting to camera. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle)



-----------

### MLCameraMRConnectInfo {#struct-mlcameramrconnectinfo}

```cpp
typedef struct MLCameraMRConnectInfo MLCameraMRConnectInfo;
```


A structure to encapsulate connection settings for MR capture. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_m_r_connect_info.md)



-----------

### MLCameraConnectContext {#struct-mlcameraconnectcontext}

```cpp
typedef struct MLCameraConnectContext MLCameraConnectContext;
```


A structure to encapsulate context for a CameraConnect Request. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md)



-----------

### MLCameraCaptureStreamCaps {#struct-mlcameracapturestreamcaps}

```cpp
typedef struct MLCameraCaptureStreamCaps MLCameraCaptureStreamCaps;
```

A structure to encapsulate stream capabilities. 

The capabilities for each stream supported by logical camera device can be queried with MLCameraGetStreamCaps.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md)


**API Level:**
  * 20




-----------

### MLCameraCaptureStreamConfig {#struct-mlcameracapturestreamconfig}

```cpp
typedef struct MLCameraCaptureStreamConfig MLCameraCaptureStreamConfig;
```


A structure to encapsulate stream configurations. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_config.md)



-----------

### MLCameraCaptureConfig {#struct-mlcameracaptureconfig}

```cpp
typedef struct MLCameraCaptureConfig MLCameraCaptureConfig;
```


A structure to encapsulate capture configuration. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md)



-----------

### MLCameraPlaneInfo {#struct-mlcameraplaneinfo}

```cpp
typedef struct MLCameraPlaneInfo MLCameraPlaneInfo;
```


Per plane info for captured output. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_plane_info.md)



-----------

### MLCameraOutput {#struct-mlcameraoutput}

```cpp
typedef struct MLCameraOutput MLCameraOutput;
```


A structure to encapsulate captured output. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_output.md)



-----------

### MLCameraIntrinsicCalibrationParameters {#struct-mlcameraintrinsiccalibrationparameters}

```cpp
typedef struct MLCameraIntrinsicCalibrationParameters MLCameraIntrinsicCalibrationParameters;
```

Camera intrinsic parameter. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_intrinsic_calibration_parameters.md)


**API Level:**
  * 20




-----------

### MLCameraResultExtras {#struct-mlcameraresultextras}

```cpp
typedef struct MLCameraResultExtras MLCameraResultExtras;
```


A structure to encapsulate various indices for a capture result. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_result_extras.md)



-----------

### MLCameraDeviceAvailabilityInfo {#struct-mlcameradeviceavailabilityinfo}

```cpp
typedef struct MLCameraDeviceAvailabilityInfo MLCameraDeviceAvailabilityInfo;
```


A structure to represent info on camera availability. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_info.md)



-----------

### MLCameraDeviceAvailabilityStatusCallbacks {#struct-mlcameradeviceavailabilitystatuscallbacks}

```cpp
typedef struct MLCameraDeviceAvailabilityStatusCallbacks MLCameraDeviceAvailabilityStatusCallbacks;
```


Device availability status callbacks to be implemented by client to receive device availability status. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md)



-----------

### MLCameraDeviceStatusCallbacks {#struct-mlcameradevicestatuscallbacks}

```cpp
typedef struct MLCameraDeviceStatusCallbacks MLCameraDeviceStatusCallbacks;
```


Device status callbacks to be implemented by client to receive device status if callback mechanism is used. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md)



-----------

### MLCameraCaptureCallbacks {#struct-mlcameracapturecallbacks}

```cpp
typedef struct MLCameraCaptureCallbacks MLCameraCaptureCallbacks;
```

Capture callbacks to be implemented by client to receive capture status if callback mechanism is used. 

This structure must be initialized by calling [MLCameraCaptureCallbacksInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#void-mlcameracapturecallbacksinit) before use. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md)



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
| [MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) * |inout_context|[MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) structure to initialize.|
**Required Permissions**:

  * None 


Shall be called before calling [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).




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
| [MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) * |inout_config|[MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) structure to initialize.|
**Required Permissions**:

  * None 


Shall be called before calling [MLCameraPrepareCapture()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture).




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
| [MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) * |inout_device_availability_status_callbacks|Device availability status callbacks structure to initialize.|
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
| [MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) * |inout_device_status_callbacks|Device status callbacks structure to initialize.|
**Required Permissions**:

  * None 


Shall be called before calling [MLCameraSetDeviceStatusCallbacks()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetdevicestatuscallbacks).




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
| [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) * |inout_capture_callbacks|Capture status callbacks structure to initialize.|
**Required Permissions**:

  * None 


Shall be called before calling [MLCameraSetCaptureCallbacks()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetcapturecallbacks).




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

Initialize ML Camera API, Register callback for device availability. If the user does not want to register device availability listener, MLCameraConnect can be called directly without [MLCameraInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit). MLCameraDeInit should be used for unregistering callbacks and releasing resources acquired in [MLCameraInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit). 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLCameraDeviceAvailabilityStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md) * |device_availability_status_callbacks|Callback to notify camera availability status. |
| void * |user_data|Pointer to user context data (can be NULL).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Camera is initialized and callbacks registered successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing.|
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
| const [MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) * |input_context|[MLCameraConnectContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md) structure. |
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) * |out_context|Camera context to be used in later APIs.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Connected to camera device successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|camera device already connected. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing.|
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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| uint32_t * |out_num_supported_streams|Number of streams supported by device.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|API call completed successfully.|
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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| const uint32_t |stream_index|Index of the stream for which to query capabilities. The index should be in the range [0 , num_supported_streams) where the num_supported_streams is from [MLCameraGetNumSupportedStreams()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetnumsupportedstreams). |
| uint32_t * |inout_num_stream_caps|When the parameter inout_stream_caps is null, this is an output parameter which will hold the number of capabilities supported by the stream on function return. Otherwise this is an input parameter specifying the number of capabilities to retrieve, namely the size of the array pointed to by inout_stream_caps on return. The value should be in the range of [0, number-of-caps-retrieved]. |
| [MLCameraCaptureStreamCaps](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md) * |inout_stream_caps|This is either null or pointing to an array of [MLCameraCaptureStreamCaps()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#struct-mlcameracapturestreamcaps) on return. Note that caller is responsible for allocating and releasing the array.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|API call completed successfully.|
**Required Permissions**:

  * None 


Retrieves either the number of capabilities supported by the given stream or an array of capabilities for the given stream. To get the number of capabilities supported by the given stream, this API should be called with num_stream_caps being valid pointer and out_stream_caps being NULL. To retrieve the array of capabilities for the given stream, this API should be called with a valid num_stream_caps (that contains the size of the out_stream_caps) and out_stream_caps being a preallocated array of [MLCameraCaptureStreamCaps](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_stream_caps.md) of size specified by num_stream_caps.




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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Disconnected Camera device successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Camera device already disconnected or camera device is streaming.|
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
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Deinitialization completed successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|DeInit called when camera device is connected.|
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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid camera context. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|AEAWB convergence done. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Unspecified failure. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|Timed out waiting for AEAWB convergence. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Camera device not configured using [MLCameraPrepareCapture()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture) or camera device is streaming.|
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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| const [MLCameraCaptureConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_config.md) * |config|Capture configuration. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_request_handle|Handle to the capture request metadata. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to prepare for capture due to invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Prepared for capture successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to prepare for capture due to internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Camera device in streaming state.|
**Required Permissions**:

  * None 


This API prepares for capture per specified [MLCameraCaptureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameracapturetype) by creating a capture request, and a handle to which is returned to the user, who can choose to manipulate the request data (metadata) via APIs defined in [ml_camera_metadata_v2.h](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__camera__metadata__v2_8h.md#files-ml-camera-metadata-v2.h) before performing the capture.

Shall be called after [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).

Note: When preparing capture the width and height parameters should match one of the values returned from [MLCameraGetStreamCaps](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetstreamcaps).




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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Camera not streaming video or not in preview.|
**Required Permissions**:

  * None 


This API updates the capture settings for an active preview/video stream. The API can be used to update capture settings like exposure compensation manual exposure settings like exposure time, iso setting.The capture settings can be changed in metadata handle returned by [MLCameraPrepareCapture()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture) and then this API can be called to apply the capture settings.




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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| const [MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md) * |device_status_callbacks|Camera device status callbacks. |
| void * |data|User metadata.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set device status callbacks successfully.|
**Required Permissions**:

  * None 


Client needs to implement the callbacks defined by [MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md). The library passes the camera device status to the client via those callbacks.




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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| const [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md) * |capture_callbacks|Capture status callbacks. |
| void * |data|User metadata.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set Capture callbacks successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error occurred.|
**Required Permissions**:

  * None 


Client needs to implement the callbacks defined by [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). The library passes the capture status to the client via those callbacks.

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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| uint32_t |num_images|Number of images to capture valid range is 1-10.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context or invalid num_images. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Triggered image capture successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|MLMediaGenericResult_InvalidOperation Capture device in invalid state or image stream not configured by [MLCameraPrepareCapture()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Internal error occurred.|
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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Started video capture successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Capture device in invalid state or video stream not configured by [MLCameraPrepareCapture()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to start video recording due to internal error.|
**Required Permissions**:

  * None 


YUV/RGBA frames are provides through callback.For encoded video capture valid encoder input surface should be configured.The captured video YUV/RGBA frames will be returned to the application via on_video_buffer_available.

[MLCameraCaptureVideoStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturevideostop) needs to be called to stop the capture.




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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Started preview successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to start preview due to internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Capture device in invalid state or preview stream not configured by [MLCameraPrepareCapture()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture).|
**Required Permissions**:

  * None 


The captured preview YUV frames will be returned to the application via on_preview_buffer_available.

[MLCameraCapturePreviewStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameracapturepreviewstop) needs to be called to stop the capture.




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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Stopped video capture successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to stop video recording due to internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Capture device in invalid state or video stream not streaming.|
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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid context. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Stopped video capture successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to stop preview due to internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Capture device in invalid state or preview stream not streaming.|
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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| uint32_t * |out_device_status|Device status.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain device status due to invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained device status successfully.|
**Required Permissions**:

  * None 


Use [MLCameraDeviceStatusFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag) to view specific status bit. Call [MLCameraGetErrorCode()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerageterrorcode) to obtain the error code if [MLCameraDeviceStatusFlag_Error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameradevicestatusflag-error) bit is set.

Note: This API can still be used even if [MLCameraSetDeviceStatusCallbacks()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetdevicestatuscallbacks) has been called.




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
| [MLCameraIdentifier](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier) |cam_id|Camera Id for which the availability status is to be queried. |
| bool * |out_device_availability_status|Device availability status.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain device status due to invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained device status successfully.|
**Required Permissions**:

  * None 


Use [MLCameraGetDeviceAvailabilityStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetdeviceavailabilitystatus) to view specific status.

Note: This API can still be used even if availability status callback is not registered through [MLCameraInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit) call.




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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| [MLCameraError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraerror) * |out_error_code|Camera device error code.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain device error code due to invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained camera device error code successfully.|
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
| [MLCameraContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlhandle-mlcameracontext) |context|Camera context obtained from [MLCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameraconnect). |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_characteristics_handle|Handle to access camera characteristic metadata. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain camera characteristic handle due to invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained camera characteristic handle successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


This API provides the handle for retrieving camera characteristics via APIs defined in [ml_camera_metadata_v2.h](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__camera__metadata__v2_8h.md#files-ml-camera-metadata-v2.h).




**API Level:**
  * 20




-----------






