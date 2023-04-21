---
title: MLCea608CaptionSegmentEx
summary: cea608 caption segment structure. 

---

# MLCea608CaptionSegmentEx

**Module:** **[Media Player](/api-ref/api/Modules/group___media_player/group___media_player.md)**



Cea608 caption segment structure.  [More...](#detailed-description)


`#include <ml_media_cea608_caption.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md#uint32-t-version)**  |
| [MLCea608CaptionLineEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_line_ex.md) *[MLCea608_CCMaxRowsPlus2] | **[cc_line](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_segment_ex.md#mlcea608captionlineex-cc-line)**  |

## Detailed Description

```cpp
struct MLCea608CaptionSegmentEx;
```

Cea608 caption segment structure. 




**API Level:\n 8**
  * 




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```






-----------

### cc_line {#mlcea608captionlineex-cc-line}

```cpp
MLCea608CaptionLineEx *[MLCea608_CCMaxRowsPlus2] cc_line;
```



| Type | Description |
|--|--|
| [MLCea608CaptionLineEx](/api-ref/api/Modules/group___media_player/struct_m_l_cea608_caption_line_ex.md) *[MLCea608_CCMaxRowsPlus2] | Cea608 caption line structure. [MLCea608_CCMaxRowsPlus2] |






-----------

