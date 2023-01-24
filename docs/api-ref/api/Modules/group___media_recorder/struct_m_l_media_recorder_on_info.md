---
title: MLMediaRecorderOnInfo

---

# MLMediaRecorderOnInfo

**Module:** **[Media Recorder](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md)**






`#include <ml_media_recorder.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[track_id](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#uint32-t-track-id)**  |
| [MLMediaRecorderInfo](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enums-mlmediarecorderinfo) | **[info](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#mlmediarecorderinfo-info)**  |
| int | **[extra](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#int-extra)**  |
| void * | **[data](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#void-data)**  |

## Public Attributes Documentation

### track_id {#uint32-t-track-id}

```cpp
uint32_t track_id;
```


Holds valid track id only for track specific info (returned via on_track_info callback.). Holds 0 for the generic info (returned via on_info callback). Refer to [MLMediaRecorderInfo](/api-ref/api/Modules/group___media_recorder/group___media_recorder.md#enum-mlmediarecorderinfo) for the info. 





-----------

### info {#mlmediarecorderinfo-info}

```cpp
MLMediaRecorderInfo info;
```


The info of MLMediaRecorderInfo 





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

