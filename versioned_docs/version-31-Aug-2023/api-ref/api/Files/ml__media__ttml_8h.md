---
title: ml_media_ttml.h

---

# ml_media_ttml.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLTTMLImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_image.md)** <br></br>Byte data for TTML image cues.  |
| struct | **[MLTTMLData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md)** <br></br>TTML data structure.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLTTMLImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_image.md) | **[MLTTMLImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlttmlimage)** <br></br>Byte data for TTML image cues.  |
| typedef struct [MLTTMLData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md) | **[MLTTMLData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlttmldata)** <br></br>TTML data structure.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLTTMLLayoutAlignment](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllayoutalignment)** <br></br> { <br></br>[MLTTMLLayoutAlignment_Unspecified](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmllayoutalignment-unspecified) = 0x7FFFFFFF,<br></br> [MLTTMLLayoutAlignment_Normal](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmllayoutalignment-normal) = 0,<br></br> [MLTTMLLayoutAlignment_Center](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmllayoutalignment-center) = 1,<br></br> [MLTTMLLayoutAlignment_Opposite](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmllayoutalignment-opposite) = 2,<br></br> [MLTTMLLayoutAlignment_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmllayoutalignment-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue text alignment within the cue box.  |
| enum | **[MLTTMLLineType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype)** <br></br> { <br></br>[MLTTMLLineType_Unset](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmllinetype-unset) = 0x7FFFFFFF,<br></br> [MLTTMLLineType_Fraction](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmllinetype-fraction) = 0,<br></br> [MLTTMLLineType_Number](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmllinetype-number) = 1,<br></br> [MLTTMLLineType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmllinetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue line type.  |
| enum | **[MLTTMLAnchorType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype)** <br></br> { <br></br>[MLTTMLAnchorType_Unset](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmlanchortype-unset) = 0x7FFFFFFF,<br></br> [MLTTMLAnchorType_Start](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmlanchortype-start) = 0,<br></br> [MLTTMLAnchorType_Middle](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmlanchortype-middle) = 1,<br></br> [MLTTMLAnchorType_End](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmlanchortype-end) = 2,<br></br> [MLTTMLAnchorType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmlanchortype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue anchor type.  |
| enum | **[MLTTMLTextSizeType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype)** <br></br> { <br></br>[MLTTMLTextSizeType_Unset](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmltextsizetype-unset) = 0x7FFFFFFF,<br></br> [MLTTMLTextSizeType_Fractional](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmltextsizetype-fractional) = 0,<br></br> [MLTTMLTextSizeType_Fractional_Ignore_Padding](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmltextsizetype-fractional-ignore-padding) = 1,<br></br> [MLTTMLTextSizeType_Absolute](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmltextsizetype-absolute) = 2,<br></br> [MLTTMLTextSizeType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__ttml_8h.md#enums-mlttmltextsizetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cue text size type.  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const float | **[MLTTMLDimen_Unset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#const-float-mlttmldimen-unset)** <br></br>An unset position, width or size which is negative of maximum finite value of float (-FLT_MAX).  |

## Enums Documentation

### MLTTMLLayoutAlignment {#enums-mlttmllayoutalignment}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLTTMLLayoutAlignment_Unspecified |  0x7FFFFFFF| An unspecified alignment value. |
| MLTTMLLayoutAlignment_Normal |  0| Normal alignment relative to text direction. |
| MLTTMLLayoutAlignment_Center |  1| Centered alignment. |
| MLTTMLLayoutAlignment_Opposite |  2| Opposite alignment relative to text direction. |
| MLTTMLLayoutAlignment_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue text alignment within the cue box. 




**API Level:**
  * 20




-----------

### MLTTMLLineType {#enums-mlttmllinetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLTTMLLineType_Unset |  0x7FFFFFFF| An unset line type value. |
| MLTTMLLineType_Fraction |  0| Line position is fractional position within the viewport. |
| MLTTMLLineType_Number |  1| Line position is number of lines, interpretation also depends on the line anchor type. |
| MLTTMLLineType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue line type. 




**API Level:**
  * 20




-----------

### MLTTMLAnchorType {#enums-mlttmlanchortype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLTTMLAnchorType_Unset |  0x7FFFFFFF| An unset anchor type value. |
| MLTTMLAnchorType_Start |  0| Anchors the left (for horizontal positions) or top (for vertical positions) edge of the cue box. |
| MLTTMLAnchorType_Middle |  1| Anchors the middle of the cue box. |
| MLTTMLAnchorType_End |  2| Anchors the right (for horizontal positions) or bottom (for vertical positions) edge of the cue box. |
| MLTTMLAnchorType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue anchor type. 




**API Level:**
  * 20




-----------

### MLTTMLTextSizeType {#enums-mlttmltextsizetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLTTMLTextSizeType_Unset |  0x7FFFFFFF| An unset text size type value. |
| MLTTMLTextSizeType_Fractional |  0| Text size is measured as a fraction of the viewport size minus the view padding. |
| MLTTMLTextSizeType_Fractional_Ignore_Padding |  1| Text size is measured as a fraction of the viewport size, ignoring the view padding. |
| MLTTMLTextSizeType_Absolute |  2| Text size is measured in number of pixels. |
| MLTTMLTextSizeType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cue text size type. 




**API Level:**
  * 20




-----------


## Types Documentation

### MLTTMLImage {#struct-mlttmlimage}

```cpp
typedef struct MLTTMLImage MLTTMLImage;
```

Byte data for TTML image cues. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_image.md)


**API Level:**
  * 20




-----------

### MLTTMLData {#struct-mlttmldata}

```cpp
typedef struct MLTTMLData MLTTMLData;
```

TTML data structure. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md)


**API Level:**
  * 20




-----------



## Attributes Documentation

### MLTTMLDimen_Unset {#const-float-mlttmldimen-unset}

```cpp
static const float MLTTMLDimen_Unset = -3.402823466e+38F;
```

An unset position, width or size which is negative of maximum finite value of float (-FLT_MAX). 




**API Level:**
  * 20




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

ML_EXTERN_C_BEGIN

static const float MLTTMLDimen_Unset = -3.402823466e+38F;

typedef enum MLTTMLLayoutAlignment {
  MLTTMLLayoutAlignment_Unspecified  = 0x7FFFFFFF,
  MLTTMLLayoutAlignment_Normal       = 0,
  MLTTMLLayoutAlignment_Center       = 1,
  MLTTMLLayoutAlignment_Opposite     = 2,
  MLTTMLLayoutAlignment_Ensure32Bits = 0x7FFFFFFF
} MLTTMLLayoutAlignment;

typedef enum MLTTMLLineType {
  MLTTMLLineType_Unset        = 0x7FFFFFFF,
  MLTTMLLineType_Fraction     = 0,
  MLTTMLLineType_Number       = 1,
  MLTTMLLineType_Ensure32Bits = 0x7FFFFFFF
} MLTTMLLineType;

typedef enum MLTTMLAnchorType {
  MLTTMLAnchorType_Unset        = 0x7FFFFFFF,
  MLTTMLAnchorType_Start        = 0,
  MLTTMLAnchorType_Middle       = 1,
  MLTTMLAnchorType_End          = 2,
  MLTTMLAnchorType_Ensure32Bits = 0x7FFFFFFF
} MLTTMLAnchorType;

typedef enum MLTTMLTextSizeType {
  MLTTMLTextSizeType_Unset                     = 0x7FFFFFFF,
  MLTTMLTextSizeType_Fractional                = 0,
  MLTTMLTextSizeType_Fractional_Ignore_Padding = 1,
  MLTTMLTextSizeType_Absolute                  = 2,
  MLTTMLTextSizeType_Ensure32Bits              = 0x7FFFFFFF
} MLTTMLTextSizeType;

typedef struct MLTTMLImage {
  size_t size;
  uint8_t *data;
} MLTTMLImage;

typedef struct MLTTMLData {
  int64_t start_time_ms;
  int64_t end_time_ms;
  char *text;
  MLTTMLLayoutAlignment text_alignment;
  MLTTMLImage bitmap;
  float line;
  MLTTMLLineType line_type;
  MLTTMLAnchorType line_anchor;
  float position;
  MLTTMLAnchorType position_anchor;
  float size;
  float bitmap_height;
  bool window_color_set;
  uint32_t window_color;
  MLTTMLTextSizeType text_size_type;
  float text_size;
} MLTTMLData;

ML_EXTERN_C_END
```




