---
title: MLMediaRecorderEventCallbacks

---

# MLMediaRecorderEventCallbacks

**Module:** **[Media Recorder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md)**






`#include <ml_media_recorder.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#uint32-t-version)**  |
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnInfo *info) | **[on_info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-on-info)** <br></br>MediaRecorder received a general info/warning message.  |
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnInfo *track_info) | **[on_track_info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-on-track-info)** <br></br>MediaRecorder received a track-related info/warning message.  |
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnError *error) | **[on_error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-on-error)** <br></br>MediaRecorder received a general error message.  |
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnError *track_error) | **[on_track_error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-on-track-error)** <br></br>MediaRecorder received a track-related error message.  |

## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```






-----------

### on_info {#void-on-info}

```cpp
void(*)(MLHandle media_recorder, const MLMediaRecorderOnInfo *info) on_info;
```

MediaRecorder received a general info/warning message. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnInfo *info) | )(MLHandle media_recorder, const MLMediaRecorderOnInfo *info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_recorder|Handle is a MediaRecorder instance on which callback was set. |
|  |pointer|to [MLMediaRecorderOnInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_info.md). |




-----------

### on_track_info {#void-on-track-info}

```cpp
void(*)(MLHandle media_recorder, const MLMediaRecorderOnInfo *track_info) on_track_info;
```

MediaRecorder received a track-related info/warning message. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnInfo *track_info) | )(MLHandle media_recorder, const MLMediaRecorderOnInfo *track_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_recorder|Handle is a MediaRecorder instance on which callback was set. |
|  |track_info|pointer to [MLMediaRecorderOnInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_info.md). |




-----------

### on_error {#void-on-error}

```cpp
void(*)(MLHandle media_recorder, const MLMediaRecorderOnError *error) on_error;
```

MediaRecorder received a general error message. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnError *error) | )(MLHandle media_recorder, const MLMediaRecorderOnError *error) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_recorder|Handle is a MediaRecorder instance on which callback was set. |
|  |pointer|to [MLMediaRecorderOnError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_recorder/struct_m_l_media_recorder_on_error.md). |




-----------

### on_track_error {#void-on-track-error}

```cpp
void(*)(MLHandle media_recorder, const MLMediaRecorderOnError *track_error) on_track_error;
```

MediaRecorder received a track-related error message. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_recorder, const MLMediaRecorderOnError *track_error) | )(MLHandle media_recorder, const MLMediaRecorderOnError *track_error) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_recorder|Handle is a MediaRecorder instance on which callback was set. |
|  |pointer|to MLMediaRecorderError. |




-----------


