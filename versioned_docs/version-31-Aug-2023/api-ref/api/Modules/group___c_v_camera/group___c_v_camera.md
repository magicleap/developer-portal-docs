---
title: CV Camera
summary: apis for camera pose. 

---

# CV Camera

APIs for camera pose.  [More...](#detailed-description)

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLCVCameraID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#enums-mlcvcameraid)** <br></br> { <br></br>[MLCVCameraID_ColorCamera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#enums-mlcvcameraid-colorcamera) = 0,<br></br> [MLCVCameraID_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#enums-mlcvcameraid-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Camera id enum.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCVCameraTrackingCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#mlresult-mlcvcameratrackingcreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create CV Camera Tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCVCameraGetFramePose](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#mlresult-mlcvcameragetframepose)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) camera_handle, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) head_handle, [MLCVCameraID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#enums-mlcvcameraid) id, [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) camera_timestamp, [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) * out_transform)<br></br>Get the camera pose in the world coordinate system.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCVCameraTrackingDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#mlresult-mlcvcameratrackingdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) camera_handle)<br></br>Destroy Tracker after usage.  |

## Detailed Description

APIs for camera pose. 




**Shared Object:**
  * perception.magicleap*




-----------
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Tracker handle.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|On success. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |camera_handle|MLHandle previously created with MLCVCameraTrackingCreate. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |head_handle|MLHandle previously created with MLHeadTrackingCreate. |
| [MLCVCameraID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___c_v_camera/group___c_v_camera.md#enums-mlcvcameraid) |id|Camera id. |
| [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) |camera_timestamp|Time to request the pose. |
| [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) * |out_transform|Transform from camera to world origin.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|id parameter was not valid or out_transform parameter was not valid (null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained transform successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PoseNotFound|Pose is currently not available. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain transform due to internal error.|
**Required Permissions**:

  * None 


Use the timestamp provided from the #on_video_buffer_available callback from [ml_camera_v2.h](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__camera__v2_8h.md#files-ml-camera-v2.h). The camera tracker only caches a limited set of poses. Retrieve the camera pose as soon as the timestamp is available else the API may return MLResult_PoseNotFound.




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |camera_handle|MLHandle previously created with MLCVCameraTrackingCreate.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|On success. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 





**API Level:**
  * 5




-----------






