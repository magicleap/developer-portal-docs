---
title: ml_cv_camera.h

---

# ml_cv_camera.h



## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLCVCameraID](/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#enums-mlcvcameraid)** <br></br> { <br></br>[MLCVCameraID_ColorCamera](/api-ref/api/Files/ml__cv__camera_8h.md#enums-mlcvcameraid-colorcamera) = 0,<br></br> [MLCVCameraID_Ensure32Bits](/api-ref/api/Files/ml__cv__camera_8h.md#enums-mlcvcameraid-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Camera id enum.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCVCameraTrackingCreate](/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#mlresult-mlcvcameratrackingcreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create CV Camera Tracker.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCVCameraGetFramePose](/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#mlresult-mlcvcameragetframepose)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) camera_handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) head_handle, [MLCVCameraID](/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#enums-mlcvcameraid) id, [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) camera_timestamp, [MLTransform](/api-ref/api/Modules/group___common/struct_m_l_transform.md) * out_transform)<br></br>Get the camera pose in the world coordinate system.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCVCameraTrackingDestroy](/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#mlresult-mlcvcameratrackingdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) camera_handle)<br></br>Destroy Tracker after usage.  |

## Enums Documentation

### MLCVCameraID {#enums-mlcvcameraid}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCVCameraID_ColorCamera |  0| Default camera id. |
| MLCVCameraID_Ensure32Bits |  0x7FFFFFFF| Camera id. |



Camera id enum. 




**API Level:**
  * 5 




-----------



## Functions Documentation

### MLCVCameraTrackingCreate {#mlresult-mlcvcameratrackingcreate}

```cpp
MLResult MLCVCameraTrackingCreate(
    MLHandle * out_handle
)
```

Create CV Camera Tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Tracker handle.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|On success. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing.|
**Required Permissions**:

  * android.permission.CAMERA (protection level: dangerous) 





**API Level:**
  * 5




-----------

### MLCVCameraGetFramePose {#mlresult-mlcvcameragetframepose}

```cpp
MLResult MLCVCameraGetFramePose(
    MLHandle camera_handle,
    MLHandle head_handle,
    MLCVCameraID id,
    MLTime camera_timestamp,
    MLTransform * out_transform
)
```

Get the camera pose in the world coordinate system. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |camera_handle|MLHandle previously created with MLCVCameraTrackingCreate. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |head_handle|MLHandle previously created with MLHeadTrackingCreate. |
| [MLCVCameraID](/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#enums-mlcvcameraid) |id|Camera id. |
| [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) |camera_timestamp|Time to request the pose. |
| [MLTransform](/api-ref/api/Modules/group___common/struct_m_l_transform.md) * |out_transform|Transform from camera to world origin.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|id parameter was not valid or out_transform parameter was not valid (null). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained transform successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PoseNotFound|Pose is currently not available. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain transform due to internal error.|
**Required Permissions**:

  * None 


Use the timestamp provided from the #on_video_buffer_available callback from [ml_camera_v2.h](/api-ref/api/Files/ml__camera__v2_8h.md#files-ml-camera-v2.h). The camera tracker only caches a limited set of poses. Retrieve the camera pose as soon as the timestamp is available else the API may return MLResult_PoseNotFound.




**API Level:**
  * 5




-----------

### MLCVCameraTrackingDestroy {#mlresult-mlcvcameratrackingdestroy}

```cpp
MLResult MLCVCameraTrackingDestroy(
    MLHandle camera_handle
)
```

Destroy Tracker after usage. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |camera_handle|MLHandle previously created with MLCVCameraTrackingCreate.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|On success. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 





**API Level:**
  * 5




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2017 Magic Leap, Inc. All Rights Reserved.
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

ML_EXTERN_C_BEGIN

typedef enum MLCVCameraID {
  MLCVCameraID_ColorCamera = 0,
  MLCVCameraID_Ensure32Bits = 0x7FFFFFFF
} MLCVCameraID;

ML_API MLResult ML_CALL MLCVCameraTrackingCreate(MLHandle *out_handle);

ML_API MLResult ML_CALL MLCVCameraGetFramePose(MLHandle camera_handle, MLHandle head_handle, MLCVCameraID id, MLTime camera_timestamp, MLTransform *out_transform);

ML_API MLResult ML_CALL MLCVCameraTrackingDestroy(MLHandle camera_handle);

ML_EXTERN_C_END
```



