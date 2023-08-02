---
title: ml_media_cea608_caption.h

---

# ml_media_cea608_caption.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLCea608CaptionStyleColor](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_style_color.md)** <br></br>Cea608 caption style and color.  |
| struct | **[MLCea608CaptionPAC](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_p_a_c.md)** <br></br>Cea608 caption preamble address code.  |
| struct | **[MLCea608CaptionLineEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_line_ex.md)** <br></br>Cea608 caption line structure.  |
| struct | **[MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md)** <br></br>Cea608 caption segment structure.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLCea608CaptionStyleColor](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_style_color.md) | **[MLCea608CaptionStyleColor](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea608captionstylecolor)** <br></br>Cea608 caption style and color.  |
| typedef struct [MLCea608CaptionPAC](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_p_a_c.md) | **[MLCea608CaptionPAC](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea608captionpac)** <br></br>Cea608 caption preamble address code.  |
| typedef struct [MLCea608CaptionLineEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_line_ex.md) | **[MLCea608CaptionLineEx](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea608captionlineex)** <br></br>Cea608 caption line structure.  |
| typedef struct [MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md) | **[MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea608captionsegmentex)** <br></br>Cea608 caption segment structure.  |
| typedef void(*)(MLHandle cc_handle, const MLCea608CaptionSegmentEx *cc_seg, void *data) | **[MLMediaCCParserDisplayChangedCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaccparserdisplaychangedcallback)** <br></br>Callback signature called when Cea608 displayable is changed.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLCea608CaptionDimension](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captiondimension)** <br></br> { <br></br>[MLCea608_CCMaxRows](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608-ccmaxrows) = 15,<br></br> [MLCea608_CCMaxCols](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608-ccmaxcols) = 32,<br></br> [MLCea608_CCMaxRowsPlus2](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608-ccmaxrowsplus2) = 17,<br></br> [MLCea608_CCMaxColsPlus2](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608-ccmaxcolsplus2) = 34,<br></br> [MLCea608_CCMaxRowsCols_Ensure32Bits](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608-ccmaxrowscols-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea608 Caption Dimension constants.  |
| enum | **[MLCea608CaptionColor](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captioncolor)** <br></br> { <br></br>[MLCea608CaptionColor_White](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608captioncolor-white) = 0,<br></br> [MLCea608CaptionColor_Green](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608captioncolor-green) = 1,<br></br> [MLCea608CaptionColor_Blue](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608captioncolor-blue) = 2,<br></br> [MLCea608CaptionColor_Cyan](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608captioncolor-cyan) = 3,<br></br> [MLCea608CaptionColor_Red](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608captioncolor-red) = 4,<br></br> [MLCea608CaptionColor_Yellow](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608captioncolor-yellow) = 5,<br></br> [MLCea608CaptionColor_Magenta](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608captioncolor-magenta) = 6,<br></br> [MLCea608CaptionColor_Invalide](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608captioncolor-invalide) = 7,<br></br> [MLCea608CaptionColor_Ensure32Bits](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608captioncolor-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea608 caption color code.  |
| enum | **[MLCea608CaptionStyle](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea608captionstyle)** <br></br> { <br></br>[MLCea608CaptionStyle_Italics](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608captionstyle-italics) = 0x00000001,<br></br> [MLCea608CaptionStyle_Underline](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608captionstyle-underline) = 0x00000002,<br></br> [MLCea608CaptionStyle_Ensure32Bits](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608captionstyle-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea608 caption style code.  |
| enum | **[Anonymous Enum 16](/api-ref/api/Modules/group___media_player/group___media_player.md#enums-anonymous-enum-16)** <br></br> { <br></br>[MLCea608_TS](/api-ref/api/Files/ml__media__cea608__caption_8h.md#enums-mlcea608-ts) = 0x00A0<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCCParserCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparsercreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create internal closed caption parser object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCCParserGetDisplayableEx](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparsergetdisplayableex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle, const uint8_t * subtitle_data, int32_t subtitle_data_size, const [MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md) ** out_cc_seg)<br></br>Return closed caption for display.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCCParserDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparserdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle)<br></br>Release internal CC parser object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCCParserSetDisplayChangedCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparsersetdisplaychangedcallback)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle, [MLMediaCCParserDisplayChangedCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaccparserdisplaychangedcallback) on_display_changed_callback, void * data)<br></br>Set callback to get notified when a caption displayable has changed.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCCParserParse](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediaccparserparse)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle, const uint8_t * subtitle_data, uint32_t subtitle_data_size)<br></br>Provide Cea608 parser with subtitle raw data for parsing. If the callback has been set by MLMediaCCParserSetDisplayChangedCallback, then its issued to notify the CC Data.  |

## Enums Documentation

### MLCea608CaptionDimension {#enums-mlcea608captiondimension}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea608_CCMaxRows |  15| |
| MLCea608_CCMaxCols |  32| |
| MLCea608_CCMaxRowsPlus2 |  17| |
| MLCea608_CCMaxColsPlus2 |  34| |
| MLCea608_CCMaxRowsCols_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea608 Caption Dimension constants. 




**API Level:**
  * 2




-----------

### MLCea608CaptionColor {#enums-mlcea608captioncolor}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea608CaptionColor_White |  0| |
| MLCea608CaptionColor_Green |  1| |
| MLCea608CaptionColor_Blue |  2| |
| MLCea608CaptionColor_Cyan |  3| |
| MLCea608CaptionColor_Red |  4| |
| MLCea608CaptionColor_Yellow |  5| |
| MLCea608CaptionColor_Magenta |  6| |
| MLCea608CaptionColor_Invalide |  7| |
| MLCea608CaptionColor_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea608 caption color code. 




**API Level:**
  * 2




-----------

### MLCea608CaptionStyle {#enums-mlcea608captionstyle}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea608CaptionStyle_Italics |  0x00000001| |
| MLCea608CaptionStyle_Underline |  0x00000002| |
| MLCea608CaptionStyle_Ensure32Bits |  0x7FFFFFFF| |



Cea608 caption style code. 




**API Level:**
  * 2




-----------

### Anonymous Enum 16 {#enums-anonymous-enum-16}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea608_TS |  0x00A0| NO-BREAK SPACE. |








-----------


## Types Documentation

### MLCea608CaptionStyleColor {#struct-mlcea608captionstylecolor}

```cpp
typedef struct MLCea608CaptionStyleColor MLCea608CaptionStyleColor;
```

Cea608 caption style and color. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_style_color.md)


**API Level:**
  * 2




-----------

### MLCea608CaptionPAC {#struct-mlcea608captionpac}

```cpp
typedef struct MLCea608CaptionPAC MLCea608CaptionPAC;
```

Cea608 caption preamble address code. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_p_a_c.md)


**API Level:**
  * 2




-----------

### MLCea608CaptionLineEx {#struct-mlcea608captionlineex}

```cpp
typedef struct MLCea608CaptionLineEx MLCea608CaptionLineEx;
```

Cea608 caption line structure. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_line_ex.md)


**API Level:**
  * 8




-----------

### MLCea608CaptionSegmentEx {#struct-mlcea608captionsegmentex}

```cpp
typedef struct MLCea608CaptionSegmentEx MLCea608CaptionSegmentEx;
```

Cea608 caption segment structure. 



[More Info](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md)


**API Level:**
  * 8




-----------

### MLMediaCCParserDisplayChangedCallback {#void-mlmediaccparserdisplaychangedcallback}

```cpp
typedef void(* MLMediaCCParserDisplayChangedCallback) (MLHandle cc_handle, const MLCea608CaptionSegmentEx *cc_seg, void *data);
```

Callback signature called when Cea608 displayable is changed. 

**Parameters**

|  |   |   |
|--|--|--|
|  |cc_handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a CC Parser instance for which callback was called. |
|  |cc_seg|[MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md) conveys caption displayble to be rendered. |
|  |data|Custom data to be returned when callback is fired. |




**API Level:**
  * 8




-----------


## Functions Documentation

### MLMediaCCParserCreate {#mlresult-mlmediaccparsercreate}

```cpp
MLResult MLMediaCCParserCreate(
    MLHandle * out_handle
)
```

Create internal closed caption parser object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain the handle to the CC parser. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Internal closed caption parser object was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 2




-----------

### MLMediaCCParserGetDisplayableEx {#mlresult-mlmediaccparsergetdisplayableex}

```cpp
MLResult MLMediaCCParserGetDisplayableEx(
    MLHandle cc_handle,
    const uint8_t * subtitle_data,
    int32_t subtitle_data_size,
    const MLCea608CaptionSegmentEx ** out_cc_seg
)
```

Return closed caption for display. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a CC parser. |
| const uint8_t * |subtitle_data|Subtitle data of [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md) structure returned from MLMediaPlayerGetSubtitleEx function. |
| int32_t |subtitle_data_size|Subtitle data size of [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md) structure returned from MLMediaPlayerGetSubtitleEx function. |
| const [MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md) ** |out_cc_seg|The returned [MLCea608CaptionSegmentEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md) pointer for CC display. NOTE that user doesn't own this memory.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|one of the arguements is incorrect. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|CC is ready to display and content is stored in out_ccSeg. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|CC parser was not properly built or initialized. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NotEnoughData|more data is required and no displayable CC for now.|
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

### MLMediaCCParserDestroy {#mlresult-mlmediaccparserdestroy}

```cpp
MLResult MLMediaCCParserDestroy(
    MLHandle cc_handle
)
```

Release internal CC parser object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a CC parser.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|internal CC parser object was released successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 2




-----------

### MLMediaCCParserSetDisplayChangedCallback {#mlresult-mlmediaccparsersetdisplaychangedcallback}

```cpp
MLResult MLMediaCCParserSetDisplayChangedCallback(
    MLHandle cc_handle,
    MLMediaCCParserDisplayChangedCallback on_display_changed_callback,
    void * data
)
```

Set callback to get notified when a caption displayable has changed. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a CC parser. |
| [MLMediaCCParserDisplayChangedCallback](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaccparserdisplaychangedcallback) |on_display_changed_callback|Function pointer for display changed callback. See [MLMediaCCParserDisplayChangedCallback()](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediaccparserdisplaychangedcallback) callback typedef declaration and comments for explanation on expected callback parameters. This can be 'NULL' to unset the callback. |
| void * |data|Custom data to be returned when callback is fired.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Passed `cc_handle` handle was not found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Callback was successfully set. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Setting this callback saves application from handling raw subtitle data. Caption will be delivered in this callback at displayable time.




**API Level:**
  * 8




-----------

### MLMediaCCParserParse {#mlresult-mlmediaccparserparse}

```cpp
MLResult MLMediaCCParserParse(
    MLHandle cc_handle,
    const uint8_t * subtitle_data,
    uint32_t subtitle_data_size
)
```

Provide Cea608 parser with subtitle raw data for parsing. If the callback has been set by MLMediaCCParserSetDisplayChangedCallback, then its issued to notify the CC Data. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a Cea608 parser. |
| const uint8_t * |subtitle_data|Subtitle data of [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md). |
| uint32_t |subtitle_data_size|Subtitle data size of [MLMediaPlayerSubtitleData](/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|the input parameter(s) is(are) wrong. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|the operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Cea708 parser was not properly built or initialized.|
**Required Permissions**:

  * None 





**API Level:**
  * 8




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

typedef enum MLCea608CaptionDimension {
  MLCea608_CCMaxRows = 15,
  MLCea608_CCMaxCols = 32,
  MLCea608_CCMaxRowsPlus2 = 17,
  MLCea608_CCMaxColsPlus2 = 34,
  MLCea608_CCMaxRowsCols_Ensure32Bits = 0x7FFFFFFF
} MLCea608CaptionDimension;

typedef enum MLCea608CaptionColor {
  MLCea608CaptionColor_White        = 0,
  MLCea608CaptionColor_Green        = 1,
  MLCea608CaptionColor_Blue         = 2,
  MLCea608CaptionColor_Cyan         = 3,
  MLCea608CaptionColor_Red          = 4,
  MLCea608CaptionColor_Yellow       = 5,
  MLCea608CaptionColor_Magenta      = 6,
  MLCea608CaptionColor_Invalide     = 7,
  MLCea608CaptionColor_Ensure32Bits = 0x7FFFFFFF
} MLCea608CaptionColor;

typedef enum MLCea608CaptionStyle {
  MLCea608CaptionStyle_Italics      = 0x00000001,
  MLCea608CaptionStyle_Underline    = 0x00000002,
  MLCea608CaptionStyle_Ensure32Bits = 0x7FFFFFFF
} MLCea608CaptionStyle;

typedef struct MLCea608CaptionStyleColor {
  uint32_t style;
  uint32_t color;
} MLCea608CaptionStyleColor;

typedef struct MLCea608CaptionPAC {
  MLCea608CaptionStyleColor styleColor;
  uint32_t row;
  uint32_t col;
} MLCea608CaptionPAC;

enum {
  MLCea608_TS = 0x00A0
};

typedef struct MLCea608CaptionLineEx {
  uint16_t display_chars[2 * MLCea608_CCMaxColsPlus2];
  MLCea608CaptionStyleColor *mid_row_styles[MLCea608_CCMaxColsPlus2];
  MLCea608CaptionPAC *pac_styles[MLCea608_CCMaxColsPlus2];
} MLCea608CaptionLineEx;

typedef struct MLCea608CaptionSegmentEx {
  uint32_t version;
  MLCea608CaptionLineEx *cc_line[MLCea608_CCMaxRowsPlus2];
} MLCea608CaptionSegmentEx;

ML_API MLResult ML_CALL MLMediaCCParserCreate(MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaCCParserGetDisplayableEx(MLHandle cc_handle, const uint8_t *subtitle_data, int32_t subtitle_data_size, const MLCea608CaptionSegmentEx **out_cc_seg);

ML_API MLResult ML_CALL MLMediaCCParserDestroy(MLHandle cc_handle);

typedef void(*MLMediaCCParserDisplayChangedCallback)(MLHandle cc_handle, const MLCea608CaptionSegmentEx *cc_seg, void *data);

ML_API MLResult ML_CALL MLMediaCCParserSetDisplayChangedCallback(MLHandle cc_handle, MLMediaCCParserDisplayChangedCallback on_display_changed_callback, void *data);

ML_API MLResult ML_CALL MLMediaCCParserParse(MLHandle cc_handle, const uint8_t *subtitle_data, uint32_t subtitle_data_size);

ML_EXTERN_C_END
```



