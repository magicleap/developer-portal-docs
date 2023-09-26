---
title: ml_media_cea708_caption.h

---

# ml_media_cea708_caption.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLCea708CaptionColor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_color.md)** <br></br>Cea708 Caption Color.  |
| struct | **[MLCea708CaptionPenAttr](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_attr.md)** <br></br>Cea708 Caption Pen Attributes.  |
| struct | **[MLCea708CaptionPenColor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_color.md)** <br></br>Cea708 Caption Pen Color.  |
| struct | **[MLCea708CaptionPenLocation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_location.md)** <br></br>Cea708 Caption Pen Location.  |
| struct | **[MLCea708CaptionWindowAttr](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window_attr.md)** <br></br>Cea708 Caption Window Attributes.  |
| struct | **[MLCea708CaptionWindow](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window.md)** <br></br>Cea708 Caption Window.  |
| struct | **[MLCea708CaptionEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_event.md)** <br></br>Cea708 Caption Event.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLCea708CaptionColor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_color.md) | **[MLCea708CaptionColor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captioncolor)** <br></br>Cea708 Caption Color.  |
| typedef struct [MLCea708CaptionPenAttr](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_attr.md) | **[MLCea708CaptionPenAttr](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captionpenattr)** <br></br>Cea708 Caption Pen Attributes.  |
| typedef struct [MLCea708CaptionPenColor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_color.md) | **[MLCea708CaptionPenColor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captionpencolor)** <br></br>Cea708 Caption Pen Color.  |
| typedef struct [MLCea708CaptionPenLocation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_location.md) | **[MLCea708CaptionPenLocation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captionpenlocation)** <br></br>Cea708 Caption Pen Location.  |
| typedef struct [MLCea708CaptionWindowAttr](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window_attr.md) | **[MLCea708CaptionWindowAttr](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captionwindowattr)** <br></br>Cea708 Caption Window Attributes.  |
| typedef struct [MLCea708CaptionWindow](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window.md) | **[MLCea708CaptionWindow](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captionwindow)** <br></br>Cea708 Caption Window.  |
| typedef struct [MLCea708CaptionEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_event.md) | **[MLCea708CaptionEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlcea708captionevent)** <br></br>Cea708 Caption Event.  |
| typedef void(*)(MLHandle cc_handle, const MLCea708CaptionEvent *event, void *data) | **[MLMediaCea708ParserEmitEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediacea708parseremiteventcallback)** <br></br>Callback signature called when Cea708 parser emits event.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 17](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-anonymous-enum-17)** <br></br> { <br></br>[MLCea708CaptionWindows_Max](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionwindows-max) = 8<br></br>}<br></br>Cea708 Caption maximum windows constant.  |
| enum | **[Anonymous Enum 18](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-anonymous-enum-18)** <br></br> { <br></br>[MLCea708CaptionEmitCommandBuffer_MaxSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommandbuffer-maxsize) = 20<br></br>}<br></br>Maximum size for Cea708 Caption Emit command buffers.  |
| enum | **[MLCea708CaptionEmitCommand](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommand)** <br></br> { <br></br>[MLCea708CaptionEmitCommand_Buffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-buffer) = 1,<br></br> [MLCea708CaptionEmitCommand_Control](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-control) = 2,<br></br> [MLCea708CaptionEmitCommand_CWX](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-cwx) = 3,<br></br> [MLCea708CaptionEmitCommand_CLW](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-clw) = 4,<br></br> [MLCea708CaptionEmitCommand_DSW](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-dsw) = 5,<br></br> [MLCea708CaptionEmitCommand_HDW](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-hdw) = 6,<br></br> [MLCea708CaptionEmitCommand_TGW](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-tgw) = 7,<br></br> [MLCea708CaptionEmitCommand_DLW](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-dlw) = 8,<br></br> [MLCea708CaptionEmitCommand_DLY](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-dly) = 9,<br></br> [MLCea708CaptionEmitCommand_DLC](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-dlc) = 10,<br></br> [MLCea708CaptionEmitCommand_RST](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-rst) = 11,<br></br> [MLCea708CaptionEmitCommand_SPA](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-spa) = 12,<br></br> [MLCea708CaptionEmitCommand_SPC](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-spc) = 13,<br></br> [MLCea708CaptionEmitCommand_SPL](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-spl) = 14,<br></br> [MLCea708CaptionEmitCommand_SWA](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-swa) = 15,<br></br> [MLCea708CaptionEmitCommand_DFX](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-dfx) = 16,<br></br> [MLCea708CaptionEmitCommand_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommand-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea708 Caption Emit Commands constants.  |
| enum | **[MLCea708CaptionEmitCommandControl](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionemitcommandcontrol)** <br></br> { <br></br>[MLCea708CaptionEmitCommandControl_ETX](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommandcontrol-etx) = 0x03,<br></br> [MLCea708CaptionEmitCommandControl_BS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommandcontrol-bs) = 0x08,<br></br> [MLCea708CaptionEmitCommandControl_FF](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommandcontrol-ff) = 0x0c,<br></br> [MLCea708CaptionEmitCommandControl_HCR](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommandcontrol-hcr) = 0x0e,<br></br> [MLCea708CaptionEmitCommandControl_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionemitcommandcontrol-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea708 Caption Emit Command Control constants.  |
| enum | **[MLCea708CaptionColorOpacity](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captioncoloropacity)** <br></br> { <br></br>[MLCea708CaptionColorOpacity_SOLID](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captioncoloropacity-solid) = 0,<br></br> [MLCea708CaptionColorOpacity_FLASH](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captioncoloropacity-flash) = 1,<br></br> [MLCea708CaptionColorOpacity_TRANSLUCENT](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captioncoloropacity-translucent) = 2,<br></br> [MLCea708CaptionColorOpacity_TRANSPARENT](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captioncoloropacity-transparent) = 3,<br></br> [MLCea708CaptionColorOpacity_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captioncoloropacity-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea708 Caption Color Opacity constants.  |
| enum | **[MLCea708CaptionPenSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionpensize)** <br></br> { <br></br>[MLCea708CaptionPenSize_SMALL](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionpensize-small) = 0,<br></br> [MLCea708CaptionPenSize_STANDARD](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionpensize-standard) = 1,<br></br> [MLCea708CaptionPenSize_LARGE](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionpensize-large) = 2,<br></br> [MLCea708CaptionPenSize_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionpensize-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea708 Caption Pen Size constants.  |
| enum | **[MLCea708CaptionPenOffset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlcea708captionpenoffset)** <br></br> { <br></br>[MLCea708CaptionPenOffset_SUBSCRIPT](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionpenoffset-subscript) = 0,<br></br> [MLCea708CaptionPenOffset_NORMAL](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionpenoffset-normal) = 1,<br></br> [MLCea708CaptionPenOffset_SUPERSCRIPT](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionpenoffset-superscript) = 2,<br></br> [MLCea708CaptionPenOffset_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__cea708__caption_8h.md#enums-mlcea708captionpenoffset-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Cea708 Caption Pen Offset constants.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCea708ParserCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parsercreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create Cea708 parser object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCea708ParserParse](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parserparse)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle, const uint8_t * subtitle_data, uint32_t subtitle_data_size)<br></br>Provide Cea708 parser with subtitle raw data for parsing.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCea708ParserDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parserdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle)<br></br>Release Cea708 parser object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCea708ParserSetEmitEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacea708parsersetemiteventcallback)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) cc_handle, [MLMediaCea708ParserEmitEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediacea708parseremiteventcallback) on_emit_event_callback, void * data)<br></br>Set callback to get notified when a caption event has generated.  |

## Enums Documentation

### Anonymous Enum 17 {#enums-anonymous-enum-17}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionWindows_Max |  8| |



Cea708 Caption maximum windows constant. 




**API Level:**
  * 8




-----------

### Anonymous Enum 18 {#enums-anonymous-enum-18}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionEmitCommandBuffer_MaxSize |  20| |



Maximum size for Cea708 Caption Emit command buffers. 




**API Level:**
  * 8




-----------

### MLCea708CaptionEmitCommand {#enums-mlcea708captionemitcommand}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionEmitCommand_Buffer |  1| Buffer. |
| MLCea708CaptionEmitCommand_Control |  2| Control. |
| MLCea708CaptionEmitCommand_CWX |  3| SetCurrentWindow tells the caption decoder which window the following commands describe: * SetWindowAttributes* SetPenAttributes* SetPenColor* SetPenLocation. If the window specified has not already been created with a DefineWindow command then, SetCurrentWindow and the window property commands can be safely ignored. |
| MLCea708CaptionEmitCommand_CLW |  4| ClearWindows clears all the windows specified in the 8 bit window bitmap. |
| MLCea708CaptionEmitCommand_DSW |  5| DisplayWindows displays all the windows specified in the 8 bit window bitmap. |
| MLCea708CaptionEmitCommand_HDW |  6| HideWindows hides all the windows specified in the 8 bit window bitmap. |
| MLCea708CaptionEmitCommand_TGW |  7| ToggleWindows hides all displayed windows, and displays all hidden windows specified in the 8 bit window bitmap. |
| MLCea708CaptionEmitCommand_DLW |  8| DeleteWindows deletes all the windows specified in the 8 bit window bitmap. If the current window, as specified by the last SetCurrentWindow command, is deleted then the current window becomes undefined and the window attribute commands should have no effect until after the next SetCurrentWindow or DefineWindow command. |
| MLCea708CaptionEmitCommand_DLY |  9| Delay suspends all processing of the current service, except for DelayCancel and Reset scanning. |
| MLCea708CaptionEmitCommand_DLC |  10| DelayCancel terminates any active delay and resumes normal command processing. DelayCancel should be scanned for during a Delay. |
| MLCea708CaptionEmitCommand_RST |  11| Reset deletes all windows, cancels any active delay, and clears the buffer before the Reset command. Reset should be scanned for during a Delay. |
| MLCea708CaptionEmitCommand_SPA |  12| The SetPenAttributes command specifies how certain attributes of subsequent characters are to be rendered in the current window, until the next SetPenAttributes command. |
| MLCea708CaptionEmitCommand_SPC |  13| SetPenColor sets the foreground, background, and edge color for the subsequent characters. |
| MLCea708CaptionEmitCommand_SPL |  14| SetPenLocation sets the location of for the next bit of appended text in the current window. It has two parameters, row and column. |
| MLCea708CaptionEmitCommand_SWA |  15| SetWindowAttributes Sets the window attributes of the current window. |
| MLCea708CaptionEmitCommand_DFX |  16| DefineWindow0-7 creates one of the eight windows used by a caption decoder. |
| MLCea708CaptionEmitCommand_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea708 Caption Emit Commands constants. 




**API Level:**
  * 8




-----------

### MLCea708CaptionEmitCommandControl {#enums-mlcea708captionemitcommandcontrol}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionEmitCommandControl_ETX |  0x03| End of Text. |
| MLCea708CaptionEmitCommandControl_BS |  0x08| |
| MLCea708CaptionEmitCommandControl_FF |  0x0c| |
| MLCea708CaptionEmitCommandControl_HCR |  0x0e| |
| MLCea708CaptionEmitCommandControl_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea708 Caption Emit Command Control constants. 




**API Level:**
  * 8




-----------

### MLCea708CaptionColorOpacity {#enums-mlcea708captioncoloropacity}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionColorOpacity_SOLID |  0| |
| MLCea708CaptionColorOpacity_FLASH |  1| |
| MLCea708CaptionColorOpacity_TRANSLUCENT |  2| |
| MLCea708CaptionColorOpacity_TRANSPARENT |  3| |
| MLCea708CaptionColorOpacity_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea708 Caption Color Opacity constants. 




**API Level:**
  * 8




-----------

### MLCea708CaptionPenSize {#enums-mlcea708captionpensize}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionPenSize_SMALL |  0| |
| MLCea708CaptionPenSize_STANDARD |  1| |
| MLCea708CaptionPenSize_LARGE |  2| |
| MLCea708CaptionPenSize_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea708 Caption Pen Size constants. 




**API Level:**
  * 8




-----------

### MLCea708CaptionPenOffset {#enums-mlcea708captionpenoffset}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLCea708CaptionPenOffset_SUBSCRIPT |  0| |
| MLCea708CaptionPenOffset_NORMAL |  1| |
| MLCea708CaptionPenOffset_SUPERSCRIPT |  2| |
| MLCea708CaptionPenOffset_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Cea708 Caption Pen Offset constants. 




**API Level:**
  * 8




-----------


## Types Documentation

### MLCea708CaptionColor {#struct-mlcea708captioncolor}

```cpp
typedef struct MLCea708CaptionColor MLCea708CaptionColor;
```

Cea708 Caption Color. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_color.md)


**API Level:**
  * 8




-----------

### MLCea708CaptionPenAttr {#struct-mlcea708captionpenattr}

```cpp
typedef struct MLCea708CaptionPenAttr MLCea708CaptionPenAttr;
```

Cea708 Caption Pen Attributes. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_attr.md)


**API Level:**
  * 8




-----------

### MLCea708CaptionPenColor {#struct-mlcea708captionpencolor}

```cpp
typedef struct MLCea708CaptionPenColor MLCea708CaptionPenColor;
```

Cea708 Caption Pen Color. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_color.md)


**API Level:**
  * 8




-----------

### MLCea708CaptionPenLocation {#struct-mlcea708captionpenlocation}

```cpp
typedef struct MLCea708CaptionPenLocation MLCea708CaptionPenLocation;
```

Cea708 Caption Pen Location. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_pen_location.md)


**API Level:**
  * 8




-----------

### MLCea708CaptionWindowAttr {#struct-mlcea708captionwindowattr}

```cpp
typedef struct MLCea708CaptionWindowAttr MLCea708CaptionWindowAttr;
```

Cea708 Caption Window Attributes. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window_attr.md)


**API Level:**
  * 8




-----------

### MLCea708CaptionWindow {#struct-mlcea708captionwindow}

```cpp
typedef struct MLCea708CaptionWindow MLCea708CaptionWindow;
```

Cea708 Caption Window. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_window.md)


**API Level:**
  * 8




-----------

### MLCea708CaptionEvent {#struct-mlcea708captionevent}

```cpp
typedef struct MLCea708CaptionEvent MLCea708CaptionEvent;
```

Cea708 Caption Event. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_event.md)


**API Level:**
  * 8




-----------

### MLMediaCea708ParserEmitEventCallback {#void-mlmediacea708parseremiteventcallback}

```cpp
typedef void(* MLMediaCea708ParserEmitEventCallback) (MLHandle cc_handle, const MLCea708CaptionEvent *event, void *data);
```

Callback signature called when Cea708 parser emits event. 

**Parameters**

|  |   |   |
|--|--|--|
|  |cc_handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) is a Cea708 Parser instance for which callback was called. |
|  |event|[MLCea708CaptionEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_cea708_caption_event.md) conveys caption event to listener. |
|  |data|Custom data to be returned when callback is fired. |




**API Level:**
  * 8




-----------


## Functions Documentation

### MLMediaCea708ParserCreate {#mlresult-mlmediacea708parsercreate}

```cpp
MLResult MLMediaCea708ParserCreate(
    MLHandle * out_handle
)
```

Create Cea708 parser object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will contain the handle to the Cea708 parser. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|The operation failed with memory allocation error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|out_handle is null. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Internal Cea708 parser object was created successfully. |
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

### MLMediaCea708ParserParse {#mlresult-mlmediacea708parserparse}

```cpp
MLResult MLMediaCea708ParserParse(
    MLHandle cc_handle,
    const uint8_t * subtitle_data,
    uint32_t subtitle_data_size
)
```

Provide Cea708 parser with subtitle raw data for parsing. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a Cea708 parser. |
| const uint8_t * |subtitle_data|Subtitle data of [MLMediaPlayerSubtitleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md). |
| uint32_t |subtitle_data_size|Subtitle data size of [MLMediaPlayerSubtitleData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_player_subtitle_data.md).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|the input parameter(s) is(are) wrong. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|the operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NoInit|Cea708 parser was not properly built or initialized.|
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

### MLMediaCea708ParserDestroy {#mlresult-mlmediacea708parserdestroy}

```cpp
MLResult MLMediaCea708ParserDestroy(
    MLHandle cc_handle
)
```

Release Cea708 parser object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a Cea708 parser.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|cc_handle is wrong or not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|internal Cea708 parser object was released successfully.|
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

### MLMediaCea708ParserSetEmitEventCallback {#mlresult-mlmediacea708parsersetemiteventcallback}

```cpp
MLResult MLMediaCea708ParserSetEmitEventCallback(
    MLHandle cc_handle,
    MLMediaCea708ParserEmitEventCallback on_emit_event_callback,
    void * data
)
```

Set callback to get notified when a caption event has generated. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |cc_handle|A handle to a Cea708 parser. |
| [MLMediaCea708ParserEmitEventCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediacea708parseremiteventcallback) |on_emit_event_callback|Function pointer for event callback. See [MLMediaCea708ParserEmitEventCallback()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediacea708parseremiteventcallback) callback declaration and comments for explanation on expected callback parameters. This can be 'NULL' to unset the callback. |
| void * |data|Custom data to be returned when callback is fired.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Passed `cc_handle` handle was not found. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Callback was successfully set.|
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

enum {
  MLCea708CaptionWindows_Max = 8
};

enum {
  MLCea708CaptionEmitCommandBuffer_MaxSize = 20,
};

typedef enum MLCea708CaptionEmitCommand {
  MLCea708CaptionEmitCommand_Buffer     = 1,
  MLCea708CaptionEmitCommand_Control    = 2,
  MLCea708CaptionEmitCommand_CWX        = 3,
  MLCea708CaptionEmitCommand_CLW        = 4,
  MLCea708CaptionEmitCommand_DSW        = 5,
  MLCea708CaptionEmitCommand_HDW        = 6,
  MLCea708CaptionEmitCommand_TGW        = 7,
  MLCea708CaptionEmitCommand_DLW        = 8,
  MLCea708CaptionEmitCommand_DLY        = 9,
  MLCea708CaptionEmitCommand_DLC        = 10,
  MLCea708CaptionEmitCommand_RST        = 11,
  MLCea708CaptionEmitCommand_SPA        = 12,
  MLCea708CaptionEmitCommand_SPC        = 13,
  MLCea708CaptionEmitCommand_SPL        = 14,
  MLCea708CaptionEmitCommand_SWA        = 15,
  MLCea708CaptionEmitCommand_DFX        = 16,
  MLCea708CaptionEmitCommand_Ensure32Bits = 0x7FFFFFFF
} MLCea708CaptionEmitCommand;

typedef enum MLCea708CaptionEmitCommandControl {
  MLCea708CaptionEmitCommandControl_ETX    = 0x03,
  MLCea708CaptionEmitCommandControl_BS     = 0x08,
  MLCea708CaptionEmitCommandControl_FF     = 0x0c,
  MLCea708CaptionEmitCommandControl_HCR    = 0x0e,
  MLCea708CaptionEmitCommandControl_Ensure32Bits = 0x7FFFFFFF
} MLCea708CaptionEmitCommandControl;

typedef enum MLCea708CaptionColorOpacity {
  MLCea708CaptionColorOpacity_SOLID           = 0,
  MLCea708CaptionColorOpacity_FLASH           = 1,
  MLCea708CaptionColorOpacity_TRANSLUCENT     = 2,
  MLCea708CaptionColorOpacity_TRANSPARENT     = 3,
  MLCea708CaptionColorOpacity_Ensure32Bits = 0x7FFFFFFF
} MLCea708CaptionColorOpacity;

typedef struct MLCea708CaptionColor {
  MLCea708CaptionColorOpacity opacity;
  int32_t red;
  int32_t green;
  int32_t blue;
} MLCea708CaptionColor;

typedef enum MLCea708CaptionPenSize {
  MLCea708CaptionPenSize_SMALL     = 0,
  MLCea708CaptionPenSize_STANDARD  = 1,
  MLCea708CaptionPenSize_LARGE     = 2,
  MLCea708CaptionPenSize_Ensure32Bits = 0x7FFFFFFF
} MLCea708CaptionPenSize;

typedef enum MLCea708CaptionPenOffset {
  MLCea708CaptionPenOffset_SUBSCRIPT     = 0,
  MLCea708CaptionPenOffset_NORMAL        = 1,
  MLCea708CaptionPenOffset_SUPERSCRIPT   = 2,
  MLCea708CaptionPenOffset_Ensure32Bits = 0x7FFFFFFF
} MLCea708CaptionPenOffset;

typedef struct MLCea708CaptionPenAttr {
  MLCea708CaptionPenSize pen_size;
  MLCea708CaptionPenOffset pen_offset;
  int32_t text_tag;
  int32_t font_tag;
  int32_t edge_type;
  bool underline;
  bool italic;
} MLCea708CaptionPenAttr;

typedef struct MLCea708CaptionPenColor {
  MLCea708CaptionColor foreground_color;
  MLCea708CaptionColor background_color;
  MLCea708CaptionColor edge_color;
} MLCea708CaptionPenColor;

typedef struct MLCea708CaptionPenLocation {
  int32_t row;
  int32_t column;
} MLCea708CaptionPenLocation;

typedef struct MLCea708CaptionWindowAttr {
  MLCea708CaptionColor fill_color;
  MLCea708CaptionColor border_color;
  int32_t border_type;
  bool word_wrap;
  int32_t print_direction;
  int32_t scroll_direction;
  int32_t justify;
  int32_t effect_direction;
  int32_t effect_speed;
  int32_t display_effect;
} MLCea708CaptionWindowAttr;

typedef struct MLCea708CaptionWindow {
  int32_t id;
  bool visible;
  bool row_lock;
  bool column_lock;
  int32_t priority;
  bool relative_positioning;
  int32_t anchor_vertical;
  int32_t anchor_horizontal;
  int32_t anchor_id;
  int32_t row_count;
  int32_t column_count;
  int32_t pen_style;
  int32_t window_style;
} MLCea708CaptionWindow;

typedef struct MLCea708CaptionEvent {
  MLCea708CaptionEmitCommand type;
  const void *obj;
} MLCea708CaptionEvent;

ML_API MLResult ML_CALL MLMediaCea708ParserCreate(MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaCea708ParserParse(MLHandle cc_handle, const uint8_t *subtitle_data, uint32_t subtitle_data_size);

ML_API MLResult ML_CALL MLMediaCea708ParserDestroy(MLHandle cc_handle);

typedef void(*MLMediaCea708ParserEmitEventCallback)(MLHandle cc_handle, const MLCea708CaptionEvent *event, void *data);

ML_API MLResult ML_CALL MLMediaCea708ParserSetEmitEventCallback(MLHandle cc_handle, MLMediaCea708ParserEmitEventCallback on_emit_event_callback, void *data);

ML_EXTERN_C_END
```




