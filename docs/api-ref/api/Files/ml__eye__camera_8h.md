---
title: ml_eye_camera.h

---

# ml_eye_camera.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md)** <br></br>A structure to encapsulate the camera settings.  |
| struct | **[MLEyeCameraFrameBuffer](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame_buffer.md)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| struct | **[MLEyeCameraFrame](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame.md)** <br></br>A structure to encapsulate output data for each camera sensor.  |
| struct | **[MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md)** <br></br>A structure to encapsulate all the eye camera data.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) | **[MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#struct-mleyecamerasettings)** <br></br>A structure to encapsulate the camera settings.  |
| typedef struct [MLEyeCameraFrameBuffer](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame_buffer.md) | **[MLEyeCameraFrameBuffer](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#struct-mleyecameraframebuffer)** <br></br>A structure to encapsulate per plane info for each camera frame.  |
| typedef struct [MLEyeCameraFrame](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame.md) | **[MLEyeCameraFrame](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#struct-mleyecameraframe)** <br></br>A structure to encapsulate output data for each camera sensor.  |
| typedef struct [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) | **[MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#struct-mleyecameradata)** <br></br>A structure to encapsulate all the eye camera data.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLEyeCameraIdentifier](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#enums-mleyecameraidentifier)** <br></br> { <br></br>[MLEyeCameraIdentifier_None](/api-ref/api/Files/ml__eye__camera_8h.md#enums-mleyecameraidentifier-none) = 0,<br></br> [MLEyeCameraIdentifier_LeftTemple](/api-ref/api/Files/ml__eye__camera_8h.md#enums-mleyecameraidentifier-lefttemple) = 1 << 0,<br></br> [MLEyeCameraIdentifier_LeftNasal](/api-ref/api/Files/ml__eye__camera_8h.md#enums-mleyecameraidentifier-leftnasal) = 1 << 1,<br></br> [MLEyeCameraIdentifier_RightNasal](/api-ref/api/Files/ml__eye__camera_8h.md#enums-mleyecameraidentifier-rightnasal) = 1 << 2,<br></br> [MLEyeCameraIdentifier_RightTemple](/api-ref/api/Files/ml__eye__camera_8h.md#enums-mleyecameraidentifier-righttemple) = 1 << 3,<br></br> [MLEyeCameraIdentifier_All](/api-ref/api/Files/ml__eye__camera_8h.md#enums-mleyecameraidentifier-all) = MLEyeCameraIdentifier_LeftTemple |
                              MLEyeCameraIdentifier_LeftNasal  |
                              MLEyeCameraIdentifier_RightNasal |
                              MLEyeCameraIdentifier_RightTemple,<br></br> [MLEyeCameraIdentifier_Ensure32Bits](/api-ref/api/Files/ml__eye__camera_8h.md#enums-mleyecameraidentifier-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Camera Identifier.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLEyeCameraSettingsInit](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#void-mleyecamerasettingsinit)**([MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) * inout_settings)<br></br>Initialize the camera settings structure. Shall be called before calling [MLEyeCameraConnect()](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameraconnect).  |
| void | **[MLEyeCameraDataInit](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#void-mleyecameradatainit)**([MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) * inout_eye_camera_data)<br></br>Initialize [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) with version.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLEyeCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameraconnect)**(const [MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) * settings, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Connect to eye cameras.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLEyeCameraUpdateSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameraupdatesettings)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) * settings)<br></br>Update the eye camera settings.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLEyeCameraGetLatestCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameragetlatestcameradata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t timeout_ms, [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) * out_data)<br></br>Poll for Frames.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLEyeCameraReleaseCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecamerareleasecameradata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) * eye_camera_data)<br></br>Releases specified [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLEyeCameraDisconnect](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameradisconnect)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Disconnect from eye camera(s).  |

## Enums Documentation

### MLEyeCameraIdentifier {#enums-mleyecameraidentifier}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLEyeCameraIdentifier_None |  0| None. |
| MLEyeCameraIdentifier_LeftTemple |  1 << 0| Left temple eye camera. |
| MLEyeCameraIdentifier_LeftNasal |  1 << 1| Left nasal eye camera. |
| MLEyeCameraIdentifier_RightNasal |  1 << 2| Right nasal eye camera. |
| MLEyeCameraIdentifier_RightTemple |  1 << 3| Right temple eye camera. |
| MLEyeCameraIdentifier_All |  MLEyeCameraIdentifier_LeftTemple |
                              MLEyeCameraIdentifier_LeftNasal  |
                              MLEyeCameraIdentifier_RightNasal |
                              MLEyeCameraIdentifier_RightTemple| All Eye cameras. |
| MLEyeCameraIdentifier_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Camera Identifier. 

Enumeration of all the available eye camera sensors. 





-----------


## Types Documentation

### MLEyeCameraSettings {#struct-mleyecamerasettings}

```cpp
typedef struct MLEyeCameraSettings MLEyeCameraSettings;
```

A structure to encapsulate the camera settings. 

This structure must be initialized by calling [MLEyeCameraSettingsInit](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#void-mleyecamerasettingsinit) before use.



[More Info](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md)


**API Level:**
  * 26




-----------

### MLEyeCameraFrameBuffer {#struct-mleyecameraframebuffer}

```cpp
typedef struct MLEyeCameraFrameBuffer MLEyeCameraFrameBuffer;
```

A structure to encapsulate per plane info for each camera frame. 



[More Info](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame_buffer.md)


**API Level:**
  * 26




-----------

### MLEyeCameraFrame {#struct-mleyecameraframe}

```cpp
typedef struct MLEyeCameraFrame MLEyeCameraFrame;
```

A structure to encapsulate output data for each camera sensor. 



[More Info](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_frame.md)


**API Level:**
  * 26




-----------

### MLEyeCameraData {#struct-mleyecameradata}

```cpp
typedef struct MLEyeCameraData MLEyeCameraData;
```

A structure to encapsulate all the eye camera data. 

This structure must be initialized by calling [MLEyeCameraDataInit](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#void-mleyecameradatainit) before use.



[More Info](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md)


**API Level:**
  * 26




-----------


## Functions Documentation

### MLEyeCameraSettingsInit {#void-mleyecamerasettingsinit}

```cpp
static inline void MLEyeCameraSettingsInit(
    MLEyeCameraSettings * inout_settings
)
```

Initialize the camera settings structure. Shall be called before calling [MLEyeCameraConnect()](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameraconnect). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) * |inout_settings|[MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) structure to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLEyeCameraDataInit {#void-mleyecameradatainit}

```cpp
static inline void MLEyeCameraDataInit(
    MLEyeCameraData * inout_eye_camera_data
)
```

Initialize [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) * |inout_eye_camera_data|Set up the version for inout_eye_camera_data. |



**API Level:**
  * 26




-----------

### MLEyeCameraConnect {#mlresult-mleyecameraconnect}

```cpp
MLResult MLEyeCameraConnect(
    const MLEyeCameraSettings * settings,
    MLHandle * out_handle
)
```

Connect to eye cameras. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) * |settings|A pointer to [MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) structure. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to camera handle to be used in later APIs.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Connected to camera device(s) successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * com.magicleap.permission.EYE_CAMERA (protection level: dangerous) 





**API Level:**
  * 26




-----------

### MLEyeCameraUpdateSettings {#mlresult-mleyecameraupdatesettings}

```cpp
MLResult MLEyeCameraUpdateSettings(
    MLHandle handle,
    const MLEyeCameraSettings * settings
)
```

Update the eye camera settings. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLEyeCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameraconnect). |
| const [MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md) * |settings|Pointer to [MLEyeCameraSettings](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_settings.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Settings updated successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLEyeCameraGetLatestCameraData {#mlresult-mleyecameragetlatestcameradata}

```cpp
MLResult MLEyeCameraGetLatestCameraData(
    MLHandle handle,
    uint64_t timeout_ms,
    MLEyeCameraData * out_data
)
```

Poll for Frames. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLEyeCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameraconnect). |
| uint64_t |timeout_ms|Timeout in milliseconds. |
| [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) * |out_data|Eye camera data. Will be set to NULL if no valid data is available at this time.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Camera frames fetched successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|Returned because no new frame available at this time. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


Returns [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) with this latest data when available. The memory is owned by the system. Application should copy the data it needs to cache and release the memory by calling [MLEyeCameraReleaseCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecamerareleasecameradata).

This is a blocking call. API is not thread safe.

If there are no new camera frames within the timeout_ms duration then the API will return MLResult_Timeout.




**API Level:**
  * 26




-----------

### MLEyeCameraReleaseCameraData {#mlresult-mleyecamerareleasecameradata}

```cpp
MLResult MLEyeCameraReleaseCameraData(
    MLHandle handle,
    MLEyeCameraData * eye_camera_data
)
```

Releases specified [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLEyeCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameraconnect). |
| [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) * |eye_camera_data|Pointer to a valid [MLEyeCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/struct_m_l_eye_camera_data.md) object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released eye camera data. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to internal error.|
**Required Permissions**:

  * None 


This function should be called exactly once for each call to [MLEyeCameraGetLatestCameraData](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameragetlatestcameradata).




**API Level:**
  * 26




-----------

### MLEyeCameraDisconnect {#mlresult-mleyecameradisconnect}

```cpp
MLResult MLEyeCameraDisconnect(
    MLHandle handle
)
```

Disconnect from eye camera(s). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Camera handle obtained from [MLEyeCameraConnect](/api-ref/api/Modules/group___pixel_sensors/group___e_cam/group___e_cam.md#mlresult-mleyecameraconnect).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Invalid handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Disconnected camera(s) successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to disconnect camera(s).|
**Required Permissions**:

  * None 


This will disconnect from all the eye camera(s) currently connected.




**API Level:**
  * 26




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

typedef enum MLEyeCameraIdentifier{
  MLEyeCameraIdentifier_None = 0,
  MLEyeCameraIdentifier_LeftTemple = 1 << 0,
  MLEyeCameraIdentifier_LeftNasal = 1 << 1,
  MLEyeCameraIdentifier_RightNasal = 1 << 2,
  MLEyeCameraIdentifier_RightTemple = 1 << 3,
  MLEyeCameraIdentifier_All = MLEyeCameraIdentifier_LeftTemple |
                              MLEyeCameraIdentifier_LeftNasal  |
                              MLEyeCameraIdentifier_RightNasal |
                              MLEyeCameraIdentifier_RightTemple,
  MLEyeCameraIdentifier_Ensure32Bits = 0x7FFFFFFF
} MLEyeCameraIdentifier;

typedef struct MLEyeCameraSettings {
  uint32_t version;
  uint32_t cameras;
} MLEyeCameraSettings;

ML_STATIC_INLINE void MLEyeCameraSettingsInit(MLEyeCameraSettings *inout_settings) {
  if (inout_settings) {
    memset(inout_settings, 0, sizeof(MLEyeCameraSettings));
    inout_settings->version = 1;
    inout_settings->cameras = MLEyeCameraIdentifier_All;
  }
}

typedef struct MLEyeCameraFrameBuffer {
  uint32_t width;
  uint32_t height;
  uint32_t stride;
  uint32_t bytes_per_pixel;
  uint32_t pixel_stride;
  uint32_t size;
  uint8_t *data;
} MLEyeCameraFrameBuffer;

typedef struct MLEyeCameraFrame {
  MLEyeCameraIdentifier camera_id;
  int64_t frame_number;
  MLTime timestamp;
  MLEyeCameraFrameBuffer frame_buffer;
} MLEyeCameraFrame;

typedef struct MLEyeCameraData {
  uint32_t version;
  uint8_t frame_count;
  MLEyeCameraFrame *frames;
} MLEyeCameraData;

ML_STATIC_INLINE void MLEyeCameraDataInit(MLEyeCameraData *inout_eye_camera_data) {
  if (inout_eye_camera_data) {
    memset(inout_eye_camera_data, 0, sizeof(MLEyeCameraData));
    inout_eye_camera_data->version = 1;
  }
}

ML_API MLResult ML_CALL MLEyeCameraConnect(const MLEyeCameraSettings *settings, MLHandle *out_handle);


ML_API MLResult ML_CALL MLEyeCameraUpdateSettings(MLHandle handle, const MLEyeCameraSettings *settings);

ML_API MLResult ML_CALL MLEyeCameraGetLatestCameraData(MLHandle handle, uint64_t timeout_ms, MLEyeCameraData *out_data);

ML_API MLResult ML_CALL MLEyeCameraReleaseCameraData(MLHandle handle, MLEyeCameraData *eye_camera_data);

ML_API MLResult ML_CALL MLEyeCameraDisconnect(MLHandle handle);

ML_EXTERN_C_END
```



