---
title: ParserCEA708
summary: cea708 parser. 

---

# ParserCEA708




CEA708 Parser.   [More...](#detailed-description)  




## Detailed Description

```csharp
public class ParserCEA708; 
```


**Details**

Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file. 





-----------



## Public Methods

### delegate void OnEmitEventDelegate {#delegate-void-onemiteventdelegate}

```csharp
public delegate void OnEmitEventDelegate(
    Cea708CaptionEmitCommand command,
    object obj
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Cea708CaptionEmitCommand](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-cea708captionemitcommand) |command|CEA708 Caption Emit Commands constants.  MLCea708CaptionEmitCommand  from  ml&#95;media&#95;cea708&#95;caption.h . |
| object |obj||






-----------

### delegate void OnTextDelegate {#delegate-void-ontextdelegate}

```csharp
public delegate void OnTextDelegate(
    string text
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |text||






-----------

### void ParseAsync {#void-parseasync}

```csharp
public void ParseAsync(
    IntPtr data,
    uint dataSize
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |data||
| uint |dataSize||






-----------

###  ParserCEA708 {#functions-parsercea708}

```csharp
public ParserCEA708()
```






-----------

## Public Attributes

### Mime {#const-string-mime}

```csharp

public const string Mime = "text/cea-708";

```






-----------

## Public Events

### OnEmitEvent {#onemiteventdelegate-onemitevent}

```csharp
public OnEmitEventDelegate OnEmitEvent()
```






-----------

### OnText {#ontextdelegate-ontext}

```csharp
public OnTextDelegate OnText()
```






-----------

## Public Enums

### Cea708CaptionColorOpacity {#enums-cea708captioncoloropacity}

CEA708 Caption Color Opacity constants.  MLCea708CaptionColorOpacity  from  ml&#95;media&#95;cea708&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Solid | 0| Solid opacity.   |
| Flash | 1| Flashing opacity.   |
| Translucent | 2| Translucent opacity.   |
| Transparent | 3| Transparent opacity.   |








-----------

### Cea708CaptionEmitCommand {#enums-cea708captionemitcommand}

CEA708 Caption Emit Commands constants.  MLCea708CaptionEmitCommand  from  ml&#95;media&#95;cea708&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Buffer | 1| Buffer command.   |
| Control | 2| Control command.   |
| CWX | 3| SetCurrentWindow tells the caption decoder which window the following commands describe:  

* SetWindowAttributes
* SetPenAttributes
* SetPenColor
* SetPenLocation. If the window specified has not already been created with a DefineWindow command then, SetCurrentWindow and the window property commands can be safely ignored.  |
| CLW | 4| ClearWindows clears all the windows specified in the 8 bit window bitmap.   |
| DSW | 5| DisplayWindows displays all the windows specified in the 8 bit window bitmap.   |
| HDW | 6| HideWindows hides all the windows specified in the 8 bit window bitmap.   |
| TGW | 7| ToggleWindows hides all displayed windows, and displays all hidden windows specified in the 8 bit window bitmap.   |
| DLW | 8| DeleteWindows deletes all the windows specified in the 8 bit window bitmap. If the current window, as specified by the last SetCurrentWindow command, is deleted then the current window becomes undefined and the window attribute commands should have no effect until after the next SetCurrentWindow or DefineWindow command.   |
| DLY | 9| Delay suspends all processing of the current service, except for DelayCancel and Reset scanning.   |
| DLC | 10| DelayCancel terminates any active delay and resumes normal command processing. DelayCancel should be scanned for during a Delay.   |
| RST | 11| Reset deletes all windows, cancels any active delay, and clears the buffer before the Reset command. Reset should be scanned for during a Delay.   |
| SPA | 12| The SetPenAttributes command specifies how certain attributes of subsequent characters are to be rendered in the current window, until the next SetPenAttributes command.   |
| SPC | 13| SetPenColor sets the foreground, background, and edge color for the subsequent characters.   |
| SPL | 14| SetPenLocation sets the location of for the next bit of appended text in the current window. It has two parameters, row and column.   |
| SWA | 15| SetWindowAttributes Sets the window attributes of the current window.   |
| DFX | 16| DefineWindow0-7 creates one of the eight windows used by a caption decoder.   |








-----------

### Cea708CaptionEmitCommandControl {#enums-cea708captionemitcommandcontrol}

CEA708 Caption Emit Command Control constants.  MLCea708CaptionEmitCommandControl  from  ml&#95;media&#95;cea708&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ETX | 0x03| End of text.   |
| BS | 0x08| Back space.   |
| FF | 0x0c| This code is equivalent to CEA708 CLW command   |
| HCR | 0x0e| Carriage return.   |








-----------

### Cea708CaptionPenOffset {#enums-cea708captionpenoffset}

CEA708 Caption Pen Offset constants.  MLCea708CaptionPenOffset  from  ml&#95;media&#95;cea708&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Subscript | 0| Subscript offset.   |
| Normal | 1| Normal offset.   |
| Superscript | 2| Superscript offset.   |








-----------

### Cea708CaptionPenSize {#enums-cea708captionpensize}

CEA708 Caption Pen Size constants.  MLCea708CaptionPenSize  from  ml&#95;media&#95;cea708&#95;caption.h . 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Small | 0| Small pen size.   |
| Standard | 1| Standard pen size.   |
| Large | 2| Large pen size.   |








-----------


