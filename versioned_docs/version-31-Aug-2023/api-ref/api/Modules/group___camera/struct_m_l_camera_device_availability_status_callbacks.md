---
title: MLCameraDeviceAvailabilityStatusCallbacks

---

# MLCameraDeviceAvailabilityStatusCallbacks

**Module:** **[Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md)**



 [More...](#detailed-description)


`#include <ml_camera_v2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md#uint32-t-version)**  |
| void(*)(const MLCameraDeviceAvailabilityInfo *info) | **[on_device_available](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md#void-on-device-available)** <br></br>Callback is invoked when the camera becomes available.  |
| void(*)(const MLCameraDeviceAvailabilityInfo *info) | **[on_device_unavailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_availability_status_callbacks.md#void-on-device-unavailable)** <br></br>Callback is invoked when the camera becomes unavailable.  |

## Detailed Description

```cpp
struct MLCameraDeviceAvailabilityStatusCallbacks;
```


Device availability status callbacks to be implemented by client to receive device availability status. 





-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### on_device_available {#void-on-device-available}

```cpp
void(*)(const MLCameraDeviceAvailabilityInfo *info) on_device_available;
```

Callback is invoked when the camera becomes available. 


| Type | Description |
|--|--|
| void(*)(const MLCameraDeviceAvailabilityInfo *info) | )(const MLCameraDeviceAvailabilityInfo *info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |info|Information about the camera availability. |




-----------

### on_device_unavailable {#void-on-device-unavailable}

```cpp
void(*)(const MLCameraDeviceAvailabilityInfo *info) on_device_unavailable;
```

Callback is invoked when the camera becomes unavailable. 


| Type | Description |
|--|--|
| void(*)(const MLCameraDeviceAvailabilityInfo *info) | )(const MLCameraDeviceAvailabilityInfo *info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |info|Information about the camera availability |




-----------


