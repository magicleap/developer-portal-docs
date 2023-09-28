---
title: MLCameraConnectContext

---

# MLCameraConnectContext

**Module:** **[Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md)**



 [More...](#detailed-description)


`#include <ml_camera_v2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md#uint32-t-version)**  |
| [MLCameraIdentifier](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier) | **[cam_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md#mlcameraidentifier-cam-id)**  |
| [MLCameraConnectFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraconnectflag) | **[flags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md#mlcameraconnectflag-flags)**  |
| bool | **[enable_video_stab](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md#bool-enable-video-stab)**  |
| [MLCameraMRConnectInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_m_r_connect_info.md) | **[mr_info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_connect_context.md#mlcameramrconnectinfo-mr-info)** <br></br>MR capture connection settings.  |

## Detailed Description

```cpp
struct MLCameraConnectContext;
```


A structure to encapsulate context for a CameraConnect Request. 





-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version contains the version number for this structure. 





-----------

### cam_id {#mlcameraidentifier-cam-id}

```cpp
MLCameraIdentifier cam_id;
```


Logical camera identifier. 





-----------

### flags {#mlcameraconnectflag-flags}

```cpp
MLCameraConnectFlag flags;
```


Context in which the camera should operate in. 





-----------

### enable_video_stab {#bool-enable-video-stab}

```cpp
bool enable_video_stab;
```


Enable/disable video stabilization. 





-----------

### mr_info {#mlcameramrconnectinfo-mr-info}

```cpp
MLCameraMRConnectInfo mr_info;
```

MR capture connection settings. 

This field can be ignored if MLCameraConnectFlag_MR or MLCameraConnectFlag_VirtualOnly flag is not used. 





-----------


