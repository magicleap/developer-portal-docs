---
title: MLMediaPlayerBufferingSettings

---

# MLMediaPlayerBufferingSettings

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



 [More...](#detailed-description)


`#include <ml_media_player.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMediaPlayerBufferingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerbufferingmode) | **[initial_buffering_mode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md#mlmediaplayerbufferingmode-initial-buffering-mode)**  |
| [MLMediaPlayerBufferingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaplayerbufferingmode) | **[rebuffering_mode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md#mlmediaplayerbufferingmode-rebuffering-mode)**  |
| int32_t | **[initial_watermark_ms](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md#int32-t-initial-watermark-ms)**  |
| int32_t | **[initial_watermark_kb](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md#int32-t-initial-watermark-kb)**  |
| int32_t | **[rebuffering_watermark_low_ms](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md#int32-t-rebuffering-watermark-low-ms)** <br></br>When cached data is below this mark, playback will be paused for buffering until data reaches |mRebufferingWatermarkHighMs| or end of stream.  |
| int32_t | **[rebuffering_watermark_high_ms](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md#int32-t-rebuffering-watermark-high-ms)**  |
| int32_t | **[rebuffering_watermark_low_kb](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md#int32-t-rebuffering-watermark-low-kb)** <br></br>When cached data is below this mark, playback will be paused for buffering until data reaches |mRebufferingWatermarkHighKB| or end of stream.  |
| int32_t | **[rebuffering_watermark_high_kb](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_buffering_settings.md#int32-t-rebuffering-watermark-high-kb)**  |

## Detailed Description

```cpp
struct MLMediaPlayerBufferingSettings;
```


Indicate the buffering settings. 





-----------
## Public Attributes Documentation

### initial_buffering_mode {#mlmediaplayerbufferingmode-initial-buffering-mode}

```cpp
MLMediaPlayerBufferingMode initial_buffering_mode;
```


For prepare. 





-----------

### rebuffering_mode {#mlmediaplayerbufferingmode-rebuffering-mode}

```cpp
MLMediaPlayerBufferingMode rebuffering_mode;
```


For playback. 





-----------

### initial_watermark_ms {#int32-t-initial-watermark-ms}

```cpp
int32_t initial_watermark_ms;
```


Time based. 





-----------

### initial_watermark_kb {#int32-t-initial-watermark-kb}

```cpp
int32_t initial_watermark_kb;
```


Size based. 





-----------

### rebuffering_watermark_low_ms {#int32-t-rebuffering-watermark-low-ms}

```cpp
int32_t rebuffering_watermark_low_ms;
```

When cached data is below this mark, playback will be paused for buffering until data reaches |mRebufferingWatermarkHighMs| or end of stream. 





-----------

### rebuffering_watermark_high_ms {#int32-t-rebuffering-watermark-high-ms}

```cpp
int32_t rebuffering_watermark_high_ms;
```


When cached data is above this mark, buffering will be paused. 





-----------

### rebuffering_watermark_low_kb {#int32-t-rebuffering-watermark-low-kb}

```cpp
int32_t rebuffering_watermark_low_kb;
```

When cached data is below this mark, playback will be paused for buffering until data reaches |mRebufferingWatermarkHighKB| or end of stream. 





-----------

### rebuffering_watermark_high_kb {#int32-t-rebuffering-watermark-high-kb}

```cpp
int32_t rebuffering_watermark_high_kb;
```


When cached data is above this mark, buffering will be paused. 





-----------


