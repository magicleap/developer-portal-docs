---
title: MLWebVTTData
summary: webvtt data structure. 

---

# MLWebVTTData

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



WebVTT data structure.  [More...](#detailed-description)


`#include <ml_media_webvtt.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int64_t | **[start_time_ms](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-start-time-ms)**  |
| int64_t | **[end_time_ms](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-end-time-ms)**  |
| char * | **[body](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#char-body)**  |
| char * | **[id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#char-id)**  |
| bool | **[snap_to_lines](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#bool-snap-to-lines)**  |
| [MLWebVTTOrientation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttorientation) | **[orientation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlwebvttorientation-orientation)**  |
| [MLWebVTTDirection](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttdirection) | **[direction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlwebvttdirection-direction)**  |
| float | **[relative_line_position](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-relative-line-position)**  |
| int32_t | **[line_number](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#int32-t-line-number)**  |
| float | **[text_position](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-text-position)**  |
| float | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-size)**  |
| [MLWebVTTAlign](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttalign) | **[align](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlwebvttalign-align)**  |

## Detailed Description

```cpp
struct MLWebVTTData;
```

WebVTT data structure. 




**API Level:**
  * 4




-----------
## Public Attributes Documentation

### start_time_ms {#int64-t-start-time-ms}

```cpp
int64_t start_time_ms;
```


Track cue start time in milliseconds. 





-----------

### end_time_ms {#int64-t-end-time-ms}

```cpp
int64_t end_time_ms;
```


Track cue end time in milliseconds. 





-----------

### body {#char-body}

```cpp
char * body;
```


WebVTT file body encoded as UTF-8. 





-----------

### id {#char-id}

```cpp
char * id;
```


A sequence of characters unique amongst all the WebVTT cue identifiers. 





-----------

### snap_to_lines {#bool-snap-to-lines}

```cpp
bool snap_to_lines;
```


A boolean indicating whether the line is an integer number of lines. 





-----------

### orientation {#mlwebvttorientation-orientation}

```cpp
MLWebVTTOrientation orientation;
```



| Type | Description |
|--|--|
| [MLWebVTTOrientation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttorientation) | Cue orientation setting.  |


Orientation of the cue. 





-----------

### direction {#mlwebvttdirection-direction}

```cpp
MLWebVTTDirection direction;
```



| Type | Description |
|--|--|
| [MLWebVTTDirection](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttdirection) | Cue direction setting.  |


The writing direction. 





-----------

### relative_line_position {#float-relative-line-position}

```cpp
float relative_line_position;
```


Relative cue line position. 





-----------

### line_number {#int32-t-line-number}

```cpp
int32_t line_number;
```


WebVTT cue line number. 





-----------

### text_position {#float-text-position}

```cpp
float text_position;
```


The indent of the cue box in the direction defined by the writing direction. 





-----------

### size {#float-size}

```cpp
float size;
```


WebVTT cue size. 





-----------

### align {#mlwebvttalign-align}

```cpp
MLWebVTTAlign align;
```



| Type | Description |
|--|--|
| [MLWebVTTAlign](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttalign) | Cue aligment setting.  |


WebVTT cue text alignment. 





-----------


