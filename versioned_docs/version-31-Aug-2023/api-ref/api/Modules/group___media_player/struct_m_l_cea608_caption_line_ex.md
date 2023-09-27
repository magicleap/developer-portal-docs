---
title: MLCea608CaptionLineEx
summary: cea608 caption line structure. 

---

# MLCea608CaptionLineEx

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



Cea608 caption line structure.  [More...](#detailed-description)


`#include <ml_media_cea608_caption.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint16_t[2 *MLCea608_CCMaxColsPlus2] | **[display_chars](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_line_ex.md#uint16-t-display-chars)**  |
| [MLCea608CaptionStyleColor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_style_color.md) *[MLCea608_CCMaxColsPlus2] | **[mid_row_styles](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_line_ex.md#mlcea608captionstylecolor-mid-row-styles)**  |
| [MLCea608CaptionPAC](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_p_a_c.md) *[MLCea608_CCMaxColsPlus2] | **[pac_styles](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_line_ex.md#mlcea608captionpac-pac-styles)**  |

## Detailed Description

```cpp
struct MLCea608CaptionLineEx;
```

Cea608 caption line structure. 




**API Level:**
  * 8




-----------
## Public Attributes Documentation

### display_chars {#uint16-t-display-chars}

```cpp
uint16_t[2 *MLCea608_CCMaxColsPlus2] display_chars;
```



| Type | Description |
|--|--|
| uint16_t[2 *MLCea608_CCMaxColsPlus2] | [2 *MLCea608_CCMaxColsPlus2] |






-----------

### mid_row_styles {#mlcea608captionstylecolor-mid-row-styles}

```cpp
MLCea608CaptionStyleColor *[MLCea608_CCMaxColsPlus2] mid_row_styles;
```



| Type | Description |
|--|--|
| [MLCea608CaptionStyleColor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_style_color.md) *[MLCea608_CCMaxColsPlus2] | Cea608 caption style and color. [MLCea608_CCMaxColsPlus2] |






-----------

### pac_styles {#mlcea608captionpac-pac-styles}

```cpp
MLCea608CaptionPAC *[MLCea608_CCMaxColsPlus2] pac_styles;
```



| Type | Description |
|--|--|
| [MLCea608CaptionPAC](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_p_a_c.md) *[MLCea608_CCMaxColsPlus2] | Cea608 caption preamble address code. [MLCea608_CCMaxColsPlus2] |






-----------


