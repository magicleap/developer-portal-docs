---
title: MLTTMLData
summary: ttml data structure. 

---

# MLTTMLData

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



TTML data structure.  [More...](#detailed-description)


`#include <ml_media_ttml.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int64_t | **[start_time_ms](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-start-time-ms)**  |
| int64_t | **[end_time_ms](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-end-time-ms)**  |
| char * | **[text](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#char-text)**  |
| [MLTTMLLayoutAlignment](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllayoutalignment) | **[text_alignment](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmllayoutalignment-text-alignment)**  |
| [MLTTMLImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_image.md) | **[bitmap](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmlimage-bitmap)**  |
| float | **[line](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-line)** <br></br>The position of the [line_anchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md#mlttmlanchortype-line-anchor) of the cue box within the viewport in the direction orthogonal to the writing direction, or MLTTMLDimen_Unset.  |
| [MLTTMLLineType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype) | **[line_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmllinetype-line-type)** <br></br>The cue line type.  |
| [MLTTMLAnchorType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype) | **[line_anchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmlanchortype-line-anchor)**  |
| float | **[position](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-position)** <br></br>The fractional position of the [position_anchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md#mlttmlanchortype-position-anchor) of the cue box within the viewport in the direction orthogonal to [line](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-line), or MLTTMLDimen_Unset.  |
| [MLTTMLAnchorType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype) | **[position_anchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmlanchortype-position-anchor)**  |
| float | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-size)**  |
| float | **[bitmap_height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-bitmap-height)**  |
| bool | **[window_color_set](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#bool-window-color-set)**  |
| uint32_t | **[window_color](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#uint32-t-window-color)**  |
| [MLTTMLTextSizeType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype) | **[text_size_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmltextsizetype-text-size-type)**  |
| float | **[text_size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-text-size)**  |

## Detailed Description

```cpp
struct MLTTMLData;
```

TTML data structure. 




**API Level:**
  * 20




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

### text {#char-text}

```cpp
char * text;
```


The cue text encoded as UTF-8. Or null if this is an image cue. 





-----------

### text_alignment {#mlttmllayoutalignment-text-alignment}

```cpp
MLTTMLLayoutAlignment text_alignment;
```



| Type | Description |
|--|--|
| [MLTTMLLayoutAlignment](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllayoutalignment) | Cue text alignment within the cue box.  |


The alignment of the cue text within the cue box. 





-----------

### bitmap {#mlttmlimage-bitmap}

```cpp
MLTTMLImage bitmap;
```



| Type | Description |
|--|--|
| [MLTTMLImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_image.md) | Byte data for TTML image cues.  |


The cue image if this is an image cue, an empty image otherwise. 





-----------

### line {#float-line}

```cpp
float line;
```

The position of the [line_anchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md#mlttmlanchortype-line-anchor) of the cue box within the viewport in the direction orthogonal to the writing direction, or MLTTMLDimen_Unset. 

When set, the interpretation of the value depends on the value of [line_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmllinetype-line-type). For horizontal text and [line_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmllinetype-line-type) equal to [MLTTMLLineType_Fraction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype-fraction), this is the fractional vertical position relative to the top of the viewport. 





-----------

### line_type {#mlttmllinetype-line-type}

```cpp
MLTTMLLineType line_type;
```

The cue line type. 


| Type | Description |
|--|--|
| [MLTTMLLineType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype) | Cue line type.  |


[MLTTMLLineType_Fraction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype-fraction) indicates that [line](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-line) is a fractional position within the viewport.

[MLTTMLLineType_Number](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype-number) indicates that [line](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-line) is a line number, where the size of each line is taken to be the size of the first line of the cue. When [line](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-line) is greater than or equal to 0 lines count from the start of the viewport, with 0 indicating zero offset from the start edge. When [line](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-line) is negative lines count from the end of the viewport, with -1 indicating zero offset from the end edge. For horizontal text the line spacing is the height of the first line of the cue, and the start and end of the viewport are the top and bottom respectively.

Note that it's particularly important to consider the effect of [line_anchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlttmlanchortype-line-anchor) when using [MLTTMLLineType_Number](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmllinetype-number).

```cpp

(line == 0 && line_anchor == MLTTMLAnchorType_Start) 
```

 Positions a (potentially multi-line) cue at the very top of the viewport.

```cpp

(line == -1 && line_anchor == MLTTMLAnchorType_EndD) 
```

 Positions a (potentially multi-line) cue at the very bottom of the viewport.

```cpp

(line == 0 && line_anchor == MLTTMLAnchorType_End) 
```

 and ```cpp

(line == -1 && line_anchor == MLTTMLAnchorType_Start) 
```

 Position cues entirely outside of the viewport.

```cpp

(line == 1 && line_anchor == MLTTMLAnchorType_End) 
```

 Positions a cue so that only the last line is visible at the top of the viewport.

```cpp

(line == -2 && line_anchor == MLTTMLAnchorType_Start) 
```

 Position a cue so that only its first line is visible at the bottom of the viewport. 





-----------

### line_anchor {#mlttmlanchortype-line-anchor}

```cpp
MLTTMLAnchorType line_anchor;
```



| Type | Description |
|--|--|
| [MLTTMLAnchorType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype) | Cue anchor type.  |


The cue box anchor in the direction of line. 





-----------

### position {#float-position}

```cpp
float position;
```

The fractional position of the [position_anchor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_t_t_m_l_data.md#mlttmlanchortype-position-anchor) of the cue box within the viewport in the direction orthogonal to [line](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-line), or MLTTMLDimen_Unset. 

For horizontal text, this is the horizontal position relative to the left of the viewport. Note that positioning is relative to the left of the viewport even in the case of right-to-left text. 





-----------

### position_anchor {#mlttmlanchortype-position-anchor}

```cpp
MLTTMLAnchorType position_anchor;
```



| Type | Description |
|--|--|
| [MLTTMLAnchorType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmlanchortype) | Cue anchor type.  |


The cue box anchor in the direction of position. 





-----------

### size {#float-size}

```cpp
float size;
```


The cue box size in the writing direction, as a fraction of the viewport size or MLTTMLDimen_Unset. 





-----------

### bitmap_height {#float-bitmap-height}

```cpp
float bitmap_height;
```


The cue bitmap height as a fraction of the viewport size or MLTTMLDimen_Unset if the bitmap should be displayed at its natural height given the bitmap dimensions and the specified [size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#float-size). 





-----------

### window_color_set {#bool-window-color-set}

```cpp
bool window_color_set;
```


Specifies whether or not the [window_color](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#uint32-t-window-color) property is set. 





-----------

### window_color {#uint32-t-window-color}

```cpp
uint32_t window_color;
```


The cue window fill color in ARGB format. 





-----------

### text_size_type {#mlttmltextsizetype-text-size-type}

```cpp
MLTTMLTextSizeType text_size_type;
```



| Type | Description |
|--|--|
| [MLTTMLTextSizeType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype) | Cue text size type.  |


The cue default text size type, or [MLTTMLTextSizeType_Unset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlttmltextsizetype-unset) if this cue has no default text size. 





-----------

### text_size {#float-text-size}

```cpp
float text_size;
```


The cue default text size, or MLTTMLDimen_Unset if this cue has no default. 





-----------


