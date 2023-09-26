---
title: World Camera
summary: apis to access the world camera data. 

---

# World Camera

**Module:** **[Pixel Sensors](/api-ref/api/Modules/group___pixel_sensors/group___pixel_sensors.md)**

APIs to access the world camera data.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md)** <br></br>A structure to encapsulate the camera settings.  |
| struct | **[MLWorldCameraIntrinsics](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md)** <br></br>World camera intrinsic parameters.  |
| struct | **[MLWorldCameraFrameBuffer](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| struct | **[MLWorldCameraFrame](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md)** <br></br>A structure to encapsulate output data for each camera sensor.  |
| struct | **[MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md)** <br></br>A structure to encapsulate output data for each camera sensor.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) | **[MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#struct-mlworldcamerasettings)** <br></br>A structure to encapsulate the camera settings.  |
| typedef struct [MLWorldCameraIntrinsics](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md) | **[MLWorldCameraIntrinsics](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#struct-mlworldcameraintrinsics)** <br></br>World camera intrinsic parameters.  |
| typedef struct [MLWorldCameraFrameBuffer](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md) | **[MLWorldCameraFrameBuffer](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#struct-mlworldcameraframebuffer)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| typedef struct [MLWorldCameraFrame](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md) | **[MLWorldCameraFrame](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#struct-mlworldcameraframe)** <br></br>A structure to encapsulate output data for each camera sensor.  |
| typedef struct [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) | **[MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#struct-mlworldcameradata)** <br></br>A structure to encapsulate output data for each camera sensor.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 32](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-anonymous-enum-32)** <br></br> { <br></br>[MLWorldCameraIntrinsics_MaxRadialDistortionCoefficients](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraintrinsics-maxradialdistortioncoefficients) = 4,<br></br> [MLWorldCameraIntrinsics_MaxTangentialDistortionCoefficients](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraintrinsics-maxtangentialdistortioncoefficients) = 2<br></br>} |
| enum | **[MLWorldCameraIdentifier](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier)** <br></br> { <br></br>[MLWorldCameraIdentifier_None](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier-none) = 0,<br></br> [MLWorldCameraIdentifier_Left](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier-left) = 1 << 0,<br></br> [MLWorldCameraIdentifier_Right](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier-right) = 1 << 1,<br></br> [MLWorldCameraIdentifier_Center](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier-center) = 1 << 2,<br></br> [MLWorldCameraIdentifier_All](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier-all) = MLWorldCameraIdentifier_Left |
                                MLWorldCameraIdentifier_Right |
                                MLWorldCameraIdentifier_Center,<br></br> [MLWorldCameraIdentifier_Ensure32Bits](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraidentifier-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Camera Identifier.  |
| enum | **[MLWorldCameraMode](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode)** <br></br> { <br></br>[MLWorldCameraMode_Unknown](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode-unknown) = 0,<br></br> [MLWorldCameraMode_LowExposure](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode-lowexposure) = 1 << 0,<br></br> [MLWorldCameraMode_NormalExposure](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode-normalexposure) = 1 << 1,<br></br> [MLWorldCameraMode_Ensure32Bits](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of world camera modes.  |
| enum | **[MLWorldCameraFrameType](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraframetype)** <br></br> { <br></br>[MLWorldCameraFrameType_Unknown](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraframetype-unknown) = 0,<br></br> [MLWorldCameraFrameType_LowExposure](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraframetype-lowexposure) = 1,<br></br> [MLWorldCameraFrameType_NormalExposure](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraframetype-normalexposure) = 2,<br></br> [MLWorldCameraFrameType_Ensure32Bits](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameraframetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of camera mode used when capturing a frame.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLWorldCameraSettingsInit](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#void-mlworldcamerasettingsinit)**([MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) * inout_handle)<br></br>Initialize the camera settings structure. Shall be called before calling [MLWorldCameraConnect()](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect).  |
| void | **[MLWorldCameraDataInit](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#void-mlworldcameradatainit)**([MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) * inout_world_camera_data)<br></br>Initialize [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) with version.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect)**(const [MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) * settings, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Connect to world cameras.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraUpdateSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraupdatesettings)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) * settings)<br></br>Update the world camera settings.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraGetLatestWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameragetlatestworldcameradata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t timeout_ms, [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) ** out_data)<br></br>Poll for Frames.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraReleaseCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcamerareleasecameradata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) * world_camera_data)<br></br>Releases specified [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWorldCameraDisconnect](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameradisconnect)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Disconnect from world camera.  |

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
| MLWorldCameraFrameType_LowExposure |  1| Frame captured using [MLWorldCameraMode_LowExposure](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode-lowexposure) mode. |
| MLWorldCameraFrameType_NormalExposure |  2| Frame captured using [MLWorldCameraMode_NormalExposure](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#enums-mlworldcameramode-normalexposure) mode. |
| MLWorldCameraFrameType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Enumeration of camera mode used when capturing a frame. 





-----------


## Types Documentation

### MLWorldCameraSettings {#struct-mlworldcamerasettings}

```cpp
typedef struct MLWorldCameraSettings MLWorldCameraSettings;
```

A structure to encapsulate the camera settings. 

This structure must be initialized by calling [MLWorldCameraSettingsInit](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#void-mlworldcamerasettingsinit) before use.



[More Info](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md)


**API Level:**
  * 23




-----------

### MLWorldCameraIntrinsics {#struct-mlworldcameraintrinsics}

```cpp
typedef struct MLWorldCameraIntrinsics MLWorldCameraIntrinsics;
```

World camera intrinsic parameters. 



[More Info](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_intrinsics.md)


**API Level:**
  * 23




-----------

### MLWorldCameraFrameBuffer {#struct-mlworldcameraframebuffer}

```cpp
typedef struct MLWorldCameraFrameBuffer MLWorldCameraFrameBuffer;
```

A structure to encapsulate per plane info for each camera frame. 



[More Info](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame_buffer.md)


**API Level:**
  * 23




-----------

### MLWorldCameraFrame {#struct-mlworldcameraframe}

```cpp
typedef struct MLWorldCameraFrame MLWorldCameraFrame;
```

A structure to encapsulate output data for each camera sensor. 



[More Info](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_frame.md)


**API Level:**
  * 23




-----------

### MLWorldCameraData {#struct-mlworldcameradata}

```cpp
typedef struct MLWorldCameraData MLWorldCameraData;
```

A structure to encapsulate output data for each camera sensor. 

This structure must be initialized by calling [MLWorldCameraDataInit](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#void-mlworldcameradatainit) before use.



[More Info](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md)


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

Initialize the camera settings structure. Shall be called before calling [MLWorldCameraConnect()](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) * |inout_handle|[MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) structure to initialize.|
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

Initialize [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) * |inout_world_camera_data|Set up the version for inout_world_camera_data. |



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
| const [MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) * |settings|A pointer to [MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) structure. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to camera handle to be used in later APIs.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Connected to camera device(s) successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLWorldCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect). |
| const [MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md) * |settings|Pointer to [MLWorldCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_settings.md).|

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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLWorldCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect). |
| uint64_t |timeout_ms|Timeout in milliseconds. |
| [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) ** |out_data|World camera data. Will be set to NULL if no valid data is available at this time.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|World camera data fetched successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|Returned because no new frame available at this time. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


Returns [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) with this latest data when available. The memory is owned by the system. Application should copy the data it needs to cache and release the memory by calling [MLWorldCameraReleaseCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcamerareleasecameradata).

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

Releases specified [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLWorldCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect). |
| [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) * |world_camera_data|Pointer to a valid [MLWorldCameraData](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/struct_m_l_world_camera_data.md) object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released world camera data. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|world_camera_data parameter was not valid (NULL). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLWorldCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___w_cam/group___w_cam.md#mlresult-mlworldcameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Disconnected camera successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to disconnect camera.|
**Required Permissions**:

  * None 


This will disconnect from all the world camera currently connected.




**API Level:**
  * 23




-----------





