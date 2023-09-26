---
title: MLMediaPlayerEventCallbacksEx
summary: callbacks for notifying client about media player error events. 

---

# MLMediaPlayerEventCallbacksEx

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



Callbacks for notifying client about [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) error events.  [More...](#detailed-description)


`#include <ml_media_player.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md#uint32-t-version)**  |
| void(*)(MLHandle media_player, const MLMediaPlayerOnBufferingUpdateInfo *update_info) | **[on_buffering_update](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md#void-on-buffering-update)** <br></br>This callback function is invoked when buffered contents percentage changed.  |
| void(*)(MLHandle media_player, const MLMediaPlayerOnCompletionInfo *completion_info) | **[on_completion](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md#void-on-completion)** <br></br>This callback is invoked when media player played back until end of media and has now come to a stop.  |
| void(*)(MLHandle media_player, const MLMediaPlayerOnErrorInfo *error_info) | **[on_error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md#void-on-error)** <br></br>This callback function is invoked when media player encounters an error.  |
| void(*)(MLHandle media_player, const MLMediaPlayerOnInfoInfo *info) | **[on_info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md#void-on-info)** <br></br>This callback function is invoked when [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) generates informational events.  |
| void(*)(MLHandle media_player, const MLMediaPlayerOnPreparedInfo *prepared_info) | **[on_prepared](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md#void-on-prepared)** <br></br>This callback is invoked when the player has finished preparing media and is ready to playback.  |
| void(*)(MLHandle media_player, const MLMediaPlayerOnSeekCompleteInfo *seek_complete_info) | **[on_seek_complete](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md#void-on-seek-complete)** <br></br>This callback function is invoked when a seek operation has completed.  |
| void(*)(MLHandle media_player, const MLMediaPlayerOnVideoSizeChangedInfo *video_size_info) | **[on_video_size_changed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md#void-on-video-size-changed)** <br></br>This callback function is invoked when the internal surface has changed size.  |
| void(*)(MLHandle media_player, const MLMediaPlayerOnTrackDRMInfo *track_drm_info) | **[on_track_drm_info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md#void-on-track-drm-info)** <br></br>This callback function is invoked when source has DRM protected media track(s).  |
| void(*)(MLHandle media_player, const MLMediaPlayerOnResetCompleteInfo *reset_complete_info) | **[on_reset_complete](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md#void-on-reset-complete)** <br></br>This callback function is invoked when an async reset operation has completed.  |
| void(*)(MLHandle media_player, const MLMediaPlayerOnFramePackingInfo *frame_packing_info) | **[on_frame_packing](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_event_callbacks_ex.md#void-on-frame-packing)** <br></br>This callback function is invoked when a stereoscopic video frame packing change.  |

## Detailed Description

```cpp
struct MLMediaPlayerEventCallbacksEx;
```

Callbacks for notifying client about [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) error events. 

Those are async mechanisms that should not be used in parallel with their sync counterpart, i.e. poll-based queries for the same events using MLMediaPlayerPollStatespoll().




**API Level:**
  * 8




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```






-----------

### on_buffering_update {#void-on-buffering-update}

```cpp
void(*)(MLHandle media_player, const MLMediaPlayerOnBufferingUpdateInfo *update_info) on_buffering_update;
```

This callback function is invoked when buffered contents percentage changed. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_player, const MLMediaPlayerOnBufferingUpdateInfo *update_info) | )(MLHandle media_player, const MLMediaPlayerOnBufferingUpdateInfo *update_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_player|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) instance on which callback was set. |
|  |update_info|Pointer to [MLMediaPlayerOnBufferingUpdateInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_buffering_update_info.md). |




-----------

### on_completion {#void-on-completion}

```cpp
void(*)(MLHandle media_player, const MLMediaPlayerOnCompletionInfo *completion_info) on_completion;
```

This callback is invoked when media player played back until end of media and has now come to a stop. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_player, const MLMediaPlayerOnCompletionInfo *completion_info) | )(MLHandle media_player, const MLMediaPlayerOnCompletionInfo *completion_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_player|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) instance on which callback was set. |
|  |completion_info|Pointer to [MLMediaPlayerOnCompletionInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_completion_info.md). |
Note that this callback does not fire when 'looping = true', because [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) does not "stop" in that case, but rather loops to beginning of media.

To get notified when EOS is reached (when looping = true), set a proper callback function for the below on_info and look for the #MEDIA_PLAYER_INFO_LOOPING info code.





-----------

### on_error {#void-on-error}

```cpp
void(*)(MLHandle media_player, const MLMediaPlayerOnErrorInfo *error_info) on_error;
```

This callback function is invoked when media player encounters an error. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_player, const MLMediaPlayerOnErrorInfo *error_info) | )(MLHandle media_player, const MLMediaPlayerOnErrorInfo *error_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_player|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) instance on which callback was set. |
|  |erro_info|Pointer to [MLMediaPlayerOnErrorInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_error_info.md). |




-----------

### on_info {#void-on-info}

```cpp
void(*)(MLHandle media_player, const MLMediaPlayerOnInfoInfo *info) on_info;
```

This callback function is invoked when [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) generates informational events. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_player, const MLMediaPlayerOnInfoInfo *info) | )(MLHandle media_player, const MLMediaPlayerOnInfoInfo *info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_player|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) instance on which callback was set. |
|  |info|Pointer to [MLMediaPlayerOnInfoInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_info_info.md). |




-----------

### on_prepared {#void-on-prepared}

```cpp
void(*)(MLHandle media_player, const MLMediaPlayerOnPreparedInfo *prepared_info) on_prepared;
```

This callback is invoked when the player has finished preparing media and is ready to playback. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_player, const MLMediaPlayerOnPreparedInfo *prepared_info) | )(MLHandle media_player, const MLMediaPlayerOnPreparedInfo *prepared_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_player|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) instance on which callback was set. |
|  |prepared_info|Pointer to [MLMediaPlayerOnPreparedInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_prepared_info.md). |




-----------

### on_seek_complete {#void-on-seek-complete}

```cpp
void(*)(MLHandle media_player, const MLMediaPlayerOnSeekCompleteInfo *seek_complete_info) on_seek_complete;
```

This callback function is invoked when a seek operation has completed. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_player, const MLMediaPlayerOnSeekCompleteInfo *seek_complete_info) | )(MLHandle media_player, const MLMediaPlayerOnSeekCompleteInfo *seek_complete_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_player|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) instance on which callback was set. |
|  |seek_complete_info|Pointer to [MLMediaPlayerOnSeekCompleteInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_seek_complete_info.md). |




-----------

### on_video_size_changed {#void-on-video-size-changed}

```cpp
void(*)(MLHandle media_player, const MLMediaPlayerOnVideoSizeChangedInfo *video_size_info) on_video_size_changed;
```

This callback function is invoked when the internal surface has changed size. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_player, const MLMediaPlayerOnVideoSizeChangedInfo *video_size_info) | )(MLHandle media_player, const MLMediaPlayerOnVideoSizeChangedInfo *video_size_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_player|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) instance on which callback was set. |
|  |video_size_info|Pointer to [MLMediaPlayerOnVideoSizeChangedInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_video_size_changed_info.md). |




-----------

### on_track_drm_info {#void-on-track-drm-info}

```cpp
void(*)(MLHandle media_player, const MLMediaPlayerOnTrackDRMInfo *track_drm_info) on_track_drm_info;
```

This callback function is invoked when source has DRM protected media track(s). 


| Type | Description |
|--|--|
| void(*)(MLHandle media_player, const MLMediaPlayerOnTrackDRMInfo *track_drm_info) | )(MLHandle media_player, const MLMediaPlayerOnTrackDRMInfo *track_drm_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_player|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) instance on which callback was set. |
|  |track_drm_info|Pointer to [MLMediaPlayerOnTrackDRMInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_track_d_r_m_info.md). |




-----------

### on_reset_complete {#void-on-reset-complete}

```cpp
void(*)(MLHandle media_player, const MLMediaPlayerOnResetCompleteInfo *reset_complete_info) on_reset_complete;
```

This callback function is invoked when an async reset operation has completed. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_player, const MLMediaPlayerOnResetCompleteInfo *reset_complete_info) | )(MLHandle media_player, const MLMediaPlayerOnResetCompleteInfo *reset_complete_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_player|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) instance on which callback was set. |
|  |reset_complete_info|pointer to [MLMediaPlayerOnResetCompleteInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_on_reset_complete_info.md). |




-----------

### on_frame_packing {#void-on-frame-packing}

```cpp
void(*)(MLHandle media_player, const MLMediaPlayerOnFramePackingInfo *frame_packing_info) on_frame_packing;
```

This callback function is invoked when a stereoscopic video frame packing change. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_player, const MLMediaPlayerOnFramePackingInfo *frame_packing_info) | )(MLHandle media_player, const MLMediaPlayerOnFramePackingInfo *frame_packing_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_player|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a [Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md) instance on which callback was set. |
|  |mode|A MLMediaFramePackingMode. |
|  |flags|A MLMediaFramePackingFlags. |




-----------


