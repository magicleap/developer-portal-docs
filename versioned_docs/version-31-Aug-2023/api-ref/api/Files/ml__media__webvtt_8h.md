---
title: ml_media_webvtt.h

---

# ml_media_webvtt.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLWebVTTData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_web_v_t_t_data.md)** <br></br>WebVTT data structure.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLWebVTTData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_web_v_t_t_data.md) | **[MLWebVTTData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlwebvttdata)** <br></br>WebVTT data structure.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLWebVTTOrientation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttorientation)** <br></br> { <br></br>[MLWebVTTOrientation_Horizontal](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttorientation-horizontal) = 0,<br></br> [MLWebVTTOrientation_Vertical](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttorientation-vertical) = 1,<br></br> [MLWebVTTOrientation_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttorientation-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue orientation setting.  |
| enum | **[MLWebVTTDirection](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttdirection)** <br></br> { <br></br>[MLWebVTTDirection_Default](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttdirection-default) = 0,<br></br> [MLWebVTTDirection_LeftToRight](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttdirection-lefttoright) = 1,<br></br> [MLWebVTTDirection_RightToLeft](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttdirection-righttoleft) = 2,<br></br> [MLWebVTTDirection_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttdirection-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue direction setting.  |
| enum | **[MLWebVTTAlign](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlwebvttalign)** <br></br> { <br></br>[MLWebVTTAlign_Start](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttalign-start) = 0,<br></br> [MLWebVTTAlign_Middle](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttalign-middle) = 1,<br></br> [MLWebVTTAlign_End](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttalign-end) = 2,<br></br> [MLWebVTTAlign_Left](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttalign-left) = 3,<br></br> [MLWebVTTAlign_Right](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttalign-right) = 4,<br></br> [MLWebVTTAlign_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__webvtt_8h.md#enums-mlwebvttalign-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue aligment setting.  |

## Enums Documentation

### MLWebVTTOrientation {#enums-mlwebvttorientation}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWebVTTOrientation_Horizontal |  0| |
| MLWebVTTOrientation_Vertical |  1| |
| MLWebVTTOrientation_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue orientation setting. 




**API Level:**
  * 4




-----------

### MLWebVTTDirection {#enums-mlwebvttdirection}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWebVTTDirection_Default |  0| |
| MLWebVTTDirection_LeftToRight |  1| |
| MLWebVTTDirection_RightToLeft |  2| |
| MLWebVTTDirection_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue direction setting. 




**API Level:**
  * 4




-----------

### MLWebVTTAlign {#enums-mlwebvttalign}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWebVTTAlign_Start |  0| |
| MLWebVTTAlign_Middle |  1| |
| MLWebVTTAlign_End |  2| |
| MLWebVTTAlign_Left |  3| |
| MLWebVTTAlign_Right |  4| |
| MLWebVTTAlign_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue aligment setting. 




**API Level:**
  * 4




-----------


## Types Documentation

### MLWebVTTData {#struct-mlwebvttdata}

```cpp
typedef struct MLWebVTTData MLWebVTTData;
```

WebVTT data structure. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_web_v_t_t_data.md)


**API Level:**
  * 4




-----------




## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2017 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#include "ml_api.h"
#include "ml_types.h"

ML_EXTERN_C_BEGIN

typedef enum MLWebVTTOrientation {
  MLWebVTTOrientation_Horizontal   = 0,
  MLWebVTTOrientation_Vertical     = 1,
  MLWebVTTOrientation_Ensure32Bits = 0x7FFFFFFF
} MLWebVTTOrientation;

typedef enum MLWebVTTDirection {
  MLWebVTTDirection_Default      = 0,
  MLWebVTTDirection_LeftToRight  = 1,
  MLWebVTTDirection_RightToLeft  = 2,
  MLWebVTTDirection_Ensure32Bits = 0x7FFFFFFF
} MLWebVTTDirection;

typedef enum MLWebVTTAlign {
  MLWebVTTAlign_Start        = 0,
  MLWebVTTAlign_Middle       = 1,
  MLWebVTTAlign_End          = 2,
  MLWebVTTAlign_Left         = 3,
  MLWebVTTAlign_Right        = 4,
  MLWebVTTAlign_Ensure32Bits = 0x7FFFFFFF
} MLWebVTTAlign;

typedef struct MLWebVTTData {
  int64_t             start_time_ms;
  int64_t             end_time_ms;
  char                *body;
  char                *id;
  bool                snap_to_lines;
  MLWebVTTOrientation orientation;
  MLWebVTTDirection   direction;
  float               relative_line_position;
  int32_t             line_number;
  float               text_position;
  float               size;
  MLWebVTTAlign       align;
} MLWebVTTData;

ML_EXTERN_C_END
```




