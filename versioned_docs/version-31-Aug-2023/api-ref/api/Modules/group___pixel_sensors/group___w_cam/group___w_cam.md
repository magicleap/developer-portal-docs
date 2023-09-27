---
title: World Camera
summary: apis to access the world camera data. 

---

# World Camera

**Module:** **[Pixel Sensors](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)**

APIs to access the world camera data.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md)** <br></br>A structure to encapsulate the camera settings.  |
| struct | **[MLWorldCameraIntrinsics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md)** <br></br>World camera intrinsic parameters.  |
| struct | **[MLWorldCameraFrameBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| struct | **[MLWorldCameraFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md)** <br></br>A structure to encapsulate output data for each camera sensor.  |
| struct | **[MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md)** <br></br>A structure to encapsulate output data for each camera sensor.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) | **[MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#struct-mlworldcamerasettings)** <br></br>A structure to encapsulate the camera settings.  |
| typedef struct [MLWorldCameraIntrinsics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md) | **[MLWorldCameraIntrinsics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#struct-mlworldcameraintrinsics)** <br></br>World camera intrinsic parameters.  |
| typedef struct [MLWorldCameraFrameBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md) | **[MLWorldCameraFrameBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#struct-mlworldcameraframebuffer)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| typedef struct [MLWorldCameraFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md) | **[MLWorldCameraFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#struct-mlworldcameraframe)** <br></br>A structure to encapsulate output data for each camera sensor.  |
| typedef struct [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) | **[MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#struct-mlworldcameradata)** <br></br>A structure to encapsulate output data for each camera sensor.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 32](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-anonymous-enum-32)** <br></br> { <br></br>[MLWorldCameraIntrinsics_MaxRadialDistortionCoefficients](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraintrinsics-maxradialdistortioncoefficients) = 4,<br></br> [MLWorldCameraIntrinsics_MaxTangentialDistortionCoefficients](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraintrinsics-maxtangentialdistortioncoefficients) = 2<br></br>} |
| enum | **[MLWorldCameraIdentifier](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier)** <br></br> { <br></br>[MLWorldCameraIdentifier_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier-none) = 0,<br></br> [MLWorldCameraIdentifier_Left](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier-left) = 1 << 0,<br></br> [MLWorldCameraIdentifier_Right](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier-right) = 1 << 1,<br></br> [MLWorldCameraIdentifier_Center](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier-center) = 1 << 2,<br></br> [MLWorldCameraIdentifier_All](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier-all) = MLWorldCameraIdentifier_Left |
                                MLWorldCameraIdentifier_Right |
                                MLWorldCameraIdentifier_Center,<br></br> [MLWorldCameraIdentifier_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Camera Identifier.  |
| enum | **[MLWorldCameraMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode)** <br></br> { <br></br>[MLWorldCameraMode_Unknown](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode-unknown) = 0,<br></br> [MLWorldCameraMode_LowExposure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode-lowexposure) = 1 << 0,<br></br> [MLWorldCameraMode_NormalExposure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode-normalexposure) = 1 << 1,<br></br> [MLWorldCameraMode_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of world camera modes.  |
| enum | **[MLWorldCameraFrameType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraframetype)** <br></br> { <br></br>[MLWorldCameraFrameType_Unknown](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraframetype-unknown) = 0,<br></br> [MLWorldCameraFrameType_LowExposure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraframetype-lowexposure) = 1,<br></br> [MLWorldCameraFrameType_NormalExposure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraframetype-normalexposure) = 2,<br></br> [MLWorldCameraFrameType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraframetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of camera mode used when capturing a frame.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLWorldCameraSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#void-mlworldcamerasettingsinit)**([MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) * inout_handle)<br></br>Initialize the camera settings structure. Shall be called before calling [MLWorldCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect).  |
| void | **[MLWorldCameraDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#void-mlworldcameradatainit)**([MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) * inout_world_camera_data)<br></br>Initialize [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) with version.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect)**(const [MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) * settings, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Connect to world cameras.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraUpdateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraupdatesettings)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) * settings)<br></br>Update the world camera settings.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraGetLatestWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameragetlatestworldcameradata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t timeout_ms, [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) ** out_data)<br></br>Poll for Frames.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraReleaseCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcamerareleasecameradata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) * world_camera_data)<br></br>Releases specified [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraDisconnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameradisconnect)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Disconnect from world camera.  |

## Detailed Description

APIs to access the world camera data. 

Magic Leap 2 has three world cameras which it uses for environment tracking. The three cameras area located on the left, center, and right side of the headset. This API will provide a way to query for the frames from these world cameras, at this point the app will not be able to configure the world camera parameters.

\experimental This is an experimental API which may be modified or removed without any prior notice. 





-----------
## Enums Documentation

### Anonymous Enum 32 {#enums-anonymous-enum-32}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWorldCameraIntrinsics_MaxRadialDistortionCoefficients |  4| Default radial distortion vector size. |
| MLWorldCameraIntrinsics_MaxTangentialDistortionCoefficients |  2| Default tangential distortion vector size. |








-----------

### MLWorldCameraIdentifier {#enums-mlworldcameraidentifier}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWorldCameraIdentifier_None |  0| None. |
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
| MLWorldCameraMode_LowExposure |  1 << 0| Low exposure mode. This mode is currently only available when the controller is being tracked. |
| MLWorldCameraMode_NormalExposure |  1 << 1| Normal exposure mode. |
| MLWorldCameraMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of world camera modes. 





-----------

### MLWorldCameraFrameType {#enums-mlworldcameraframetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWorldCameraFrameType_Unknown |  0| None. |
| MLWorldCameraFrameType_LowExposure |  1| Frame captured using [MLWorldCameraMode_LowExposure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode-lowexposure) mode. |
| MLWorldCameraFrameType_NormalExposure |  2| Frame captured using [MLWorldCameraMode_NormalExposure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode-normalexposure) mode. |
| MLWorldCameraFrameType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of camera mode used when capturing a frame. 





-----------


## Types Documentation

### MLWorldCameraSettings {#struct-mlworldcamerasettings}

```cpp
typedef struct MLWorldCameraSettings MLWorldCameraSettings;
```

A structure to encapsulate the camera settings. 

This structure must be initialized by calling [MLWorldCameraSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#void-mlworldcamerasettingsinit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md)


**API Level:**
  * 23




-----------

### MLWorldCameraIntrinsics {#struct-mlworldcameraintrinsics}

```cpp
typedef struct MLWorldCameraIntrinsics MLWorldCameraIntrinsics;
```

World camera intrinsic parameters. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md)


**API Level:**
  * 23




-----------

### MLWorldCameraFrameBuffer {#struct-mlworldcameraframebuffer}

```cpp
typedef struct MLWorldCameraFrameBuffer MLWorldCameraFrameBuffer;
```

A structure to encapsulate per plane info for each camera frame. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md)


**API Level:**
  * 23




-----------

### MLWorldCameraFrame {#struct-mlworldcameraframe}

```cpp
typedef struct MLWorldCameraFrame MLWorldCameraFrame;
```

A structure to encapsulate output data for each camera sensor. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md)


**API Level:**
  * 23




-----------

### MLWorldCameraData {#struct-mlworldcameradata}

```cpp
typedef struct MLWorldCameraData MLWorldCameraData;
```

A structure to encapsulate output data for each camera sensor. 

This structure must be initialized by calling [MLWorldCameraDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#void-mlworldcameradatainit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md)


**API Level:**
  * 23




-----------


## Functions Documentation

### MLWorldCameraSettingsInit {#void-mlworldcamerasettingsinit}

```cpp
static inline void MLWorldCameraSettingsInit(
    MLWorldCameraSettings * inout_handle
)
```

Initialize the camera settings structure. Shall be called before calling [MLWorldCameraConnect()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) * |inout_handle|[MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) structure to initialize.|
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

Initialize [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) * |inout_world_camera_data|Set up the version for inout_world_camera_data. |



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
| const [MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) * |settings|A pointer to [MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) structure. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to camera handle to be used in later APIs.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Connected to camera device(s) successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLWorldCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect). |
| const [MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) * |settings|Pointer to [MLWorldCameraSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Settings updated successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLWorldCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect). |
| uint64_t |timeout_ms|Timeout in milliseconds. |
| [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) ** |out_data|World camera data. Will be set to NULL if no valid data is available at this time.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|World camera data fetched successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|Returned because no new frame available at this time. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


Returns [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) with this latest data when available. The memory is owned by the system. Application should copy the data it needs to cache and release the memory by calling [MLWorldCameraReleaseCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcamerareleasecameradata).

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

Releases specified [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLWorldCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect). |
| [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) * |world_camera_data|Pointer to a valid [MLWorldCameraData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released world camera data. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|world_camera_data parameter was not valid (NULL). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLWorldCameraConnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Disconnected camera successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to disconnect camera.|
**Required Permissions**:

  * None 


This will disconnect from all the world camera currently connected.




**API Level:**
  * 23




-----------






