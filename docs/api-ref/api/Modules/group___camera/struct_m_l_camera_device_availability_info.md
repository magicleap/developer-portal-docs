---
title: MLCameraDeviceAvailabilityInfo

---

# MLCameraDeviceAvailabilityInfo

**Module:** **[Camera](/api-ref/api/Modules/group___camera/group___camera.md)**



 [More...](#detailed-description)


`#include <ml_camera_v2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLCameraIdentifier](/api-ref/api/Modules/group___camera/group___camera.md#enums-mlcameraidentifier) | **[cam_id](/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_info.md#mlcameraidentifier-cam-id)**  |
| void * | **[user_data](/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_info.md#void-user-data)**  |

## Detailed Description

```cpp
struct MLCameraDeviceAvailabilityInfo;
```


A structure to represent info on camera availability. 





-----------
## Public Attributes Documentation

### cam_id {#mlcameraidentifier-cam-id}

```cpp
MLCameraIdentifier cam_id;
```


Identifier for the camera that the callback applies. 





-----------

### user_data {#void-user-data}

```cpp
void * user_data;
```


The context pointer supplied to [MLCameraInit()](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerainit) call. 





-----------

