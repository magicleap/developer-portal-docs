---
title: MLMediaRecorderOnError

---

# MLMediaRecorderOnError

**Module:** **[Media Recorder](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md)**






`#include <ml_media_recorder.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[track_id](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#uint32-t-track-id)**  |
| [MLMediaRecorderError](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordererror) | **[error](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlmediarecordererror-error)**  |
| int | **[extra](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#int-extra)**  |
| void * | **[data](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-data)**  |

## Public Attributes Documentation

### track_id {#uint32-t-track-id}

```cpp
uint32_t track_id;
```


Holds valid track id only for track specific errors (returned via on_track_error callback.). Holds 0 for the generic errors (returned via on_error callback). Refer to [MLMediaRecorderError](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enum-mlmediarecordererror) for the errors. 





-----------

### error {#mlmediarecordererror-error}

```cpp
MLMediaRecorderError error;
```



| Type | Description |
|--|--|
| [MLMediaRecorderError](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecordererror) | Video recorder error types.  |


The error of MLMediaRecorderError 





-----------

### extra {#int-extra}

```cpp
int extra;
```


The extra info 





-----------

### data {#void-data}

```cpp
void * data;
```


User data as passed to MLMediaRecorderSetEventCallbacks. 





-----------

