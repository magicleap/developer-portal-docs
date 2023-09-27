---
title: MLCea708CaptionEvent
summary: cea708 caption event. 

---

# MLCea708CaptionEvent

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



Cea708 Caption Event.  [More...](#detailed-description)


`#include <ml_media_cea708_caption.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLCea708CaptionEmitCommand](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand) | **[type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_event.md#mlcea708captionemitcommand-type)**  |
| const void * | **[obj](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_event.md#const-void-obj)** <br></br>Emitted Cea708 caption event specific data, based on the event type.  |

## Detailed Description

```cpp
struct MLCea708CaptionEvent;
```

Cea708 Caption Event. 




**API Level:**
  * 8




-----------
## Public Attributes Documentation

### type {#mlcea708captionemitcommand-type}

```cpp
MLCea708CaptionEmitCommand type;
```



| Type | Description |
|--|--|
| [MLCea708CaptionEmitCommand](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand) | Cea708 Caption Emit Commands constants.  |


Emitted Cea708 caption event type. 





-----------

### obj {#const-void-obj}

```cpp
const void * obj;
```

Emitted Cea708 caption event specific data, based on the event type. 

If the type is MLCea708CaptionEmitCommand_Buffer, obj will point to a null terminated string of maximum size MLCea708CaptionEmitCommandBuffer_MaxSize bytes. If the type is MLCea708CaptionEmitCommand_Control, obj will point to one byte character. If the type is MLCea708CaptionEmitCommand_CWX, obj will point to an integer. If the type is MLCea708CaptionEmitCommand_CLW, obj will point to an integer. If the type is MLCea708CaptionEmitCommand_DSW, obj will point to an integer. If the type is MLCea708CaptionEmitCommand_HDW, obj will point to an integer. If the type is MLCea708CaptionEmitCommand_TGW, obj will point to an integer. If the type is MLCea708CaptionEmitCommand_DLW, obj will point to an integer. If the type is MLCea708CaptionEmitCommand_DLY, obj will point to an integer. If the type is MLCea708CaptionEmitCommand_DLC, obj will be NULL. If the type is MLCea708CaptionEmitCommand_RST, obj will be NULL. If the type is MLCea708CaptionEmitCommand_SPA, obj will point to [MLCea708CaptionPenAttr](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_attr.md). If the type is MLCea708CaptionEmitCommand_SPC, obj will point to [MLCea708CaptionPenColor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_color.md). If the type is MLCea708CaptionEmitCommand_SPL, obj will point to [MLCea708CaptionPenLocation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_location.md). If the type is MLCea708CaptionEmitCommand_SWA, obj will point to [MLCea708CaptionWindowAttr](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window_attr.md). If the type is MLCea708CaptionEmitCommand_DFX, obj will point to [MLCea708CaptionWindow](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window.md). 





-----------


