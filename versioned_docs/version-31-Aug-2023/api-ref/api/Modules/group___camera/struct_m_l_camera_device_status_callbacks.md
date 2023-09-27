---
title: MLCameraDeviceStatusCallbacks

---

# MLCameraDeviceStatusCallbacks

**Module:** **[Camera](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md)**



 [More...](#detailed-description)


`#include <ml_camera_v2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md#uint32-t-version)**  |
| void(*)(void *data) | **[on_device_streaming](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md#void-on-device-streaming)** <br></br>Callback is invoked when the camera is streaming.  |
| void(*)(void *data) | **[on_device_idle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md#void-on-device-idle)** <br></br>Callback is invoked when the camera stops streaming.  |
| void(*)(MLCameraDisconnectReason reason, void *data) | **[on_device_disconnected](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md#void-on-device-disconnected)** <br></br>Callback is invoked when the camera is disconnected.  |
| void(*)(MLCameraError error, void *data) | **[on_device_error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_device_status_callbacks.md#void-on-device-error)** <br></br>Callback is invoked when the camera encountered errors.  |

## Detailed Description

```cpp
struct MLCameraDeviceStatusCallbacks;
```


Device status callbacks to be implemented by client to receive device status if callback mechanism is used. 





-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### on_device_streaming {#void-on-device-streaming}

```cpp
void(*)(void *data) on_device_streaming;
```

Callback is invoked when the camera is streaming. 


| Type | Description |
|--|--|
| void(*)(void *data) | )(void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |data|Custom data to be returned when callback is triggered. This data passed in [MLCameraSetDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetdevicestatuscallbacks). |




-----------

### on_device_idle {#void-on-device-idle}

```cpp
void(*)(void *data) on_device_idle;
```

Callback is invoked when the camera stops streaming. 


| Type | Description |
|--|--|
| void(*)(void *data) | )(void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |data|Custom data to be returned when callback is triggered. This data passed in [MLCameraSetDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetdevicestatuscallbacks). |




-----------

### on_device_disconnected {#void-on-device-disconnected}

```cpp
void(*)(MLCameraDisconnectReason reason, void *data) on_device_disconnected;
```

Callback is invoked when the camera is disconnected. 


| Type | Description |
|--|--|
| void(*)(MLCameraDisconnectReason reason, void *data) | )(MLCameraDisconnectReason reason, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |reason|Represents the reason for disconnection. |
|  |data|Custom data to be returned when callback is triggered. This data passed in [MLCameraSetDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetdevicestatuscallbacks). |




-----------

### on_device_error {#void-on-device-error}

```cpp
void(*)(MLCameraError error, void *data) on_device_error;
```

Callback is invoked when the camera encountered errors. 


| Type | Description |
|--|--|
| void(*)(MLCameraError error, void *data) | )(MLCameraError error, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |error|Represents the error type when happened. |
|  |data|Custom data to be returned when callback is triggered. This data passed in [MLCameraSetDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerasetdevicestatuscallbacks). |



Invalid: The camera device is not available.



Disabled: The camera device can't be opened due to a device policy.



Device error: The camera device encountered a fatal error such as the Headset device has lost connection or the hardware comm bus is busy and not be able to response and caused a timeout.



Service error: The camera service has encountered a fatal error and could not provide service.



Capture failed: The capture request has failed. on_capture_failed or on_capture_buffer_lost callbacks will be invoked when this error happens.





-----------


