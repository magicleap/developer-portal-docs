---
title: MLMediaCodecOutputFrameListener
summary: callbacks for notifying when an output frame is available for consumption or has been rendered on the output surface. 

---

# MLMediaCodecOutputFrameListener

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



Callbacks for notifying when an output frame is available for consumption or has been rendered on the output surface.  [More...](#detailed-description)


`#include <ml_media_codec.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md#uint32-t-version)**  |
| void(*)(MLHandle media_codec, const MLMediaCodecFrameRenderedInfo *info) | **[on_frame_rendered](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_output_frame_listener.md#void-on-frame-rendered)** <br></br>This callback is invoked when an output frame has rendered on the output surface.  |

## Detailed Description

```cpp
struct MLMediaCodecOutputFrameListener;
```

Callbacks for notifying when an output frame is available for consumption or has been rendered on the output surface. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### on_frame_rendered {#void-on-frame-rendered}

```cpp
void(*)(MLHandle media_codec, const MLMediaCodecFrameRenderedInfo *info) on_frame_rendered;
```

This callback is invoked when an output frame has rendered on the output surface. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_codec, const MLMediaCodecFrameRenderedInfo *info) | )(MLHandle media_codec, const MLMediaCodecFrameRenderedInfo *info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_codec|MLMediaCodec instance for which callback was called. |
|  |presentation_time_us|The presentation time (media time) in microseconds of the frame rendered. |
|  |system_time_nano|System time when the frame was rendered. |
|  |info|Output Frame rendered info as [MLMediaCodecFrameRenderedInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_frame_rendered_info.md). |
The presentation time (media time) of the frame rendered is is usually the same as specified in [MLMediaCodecQueueInputBuffer()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecqueueinputbuffer); however, some codecs may alter the media time by applying some time-based transformation, such as frame rate conversion. In that case, presentation time corresponds to the actual output frame rendered.

This callback is for informational purposes only: to get precise render timing samples, and can be significantly delayed and batched. Some frames may have been rendered even if there was no callback generated. This can be set to NULL if client is not interested in receiving this callback.



:::note
Client should _not_ call MLMediaCodec APIs from within this callback.
:::



-----------


