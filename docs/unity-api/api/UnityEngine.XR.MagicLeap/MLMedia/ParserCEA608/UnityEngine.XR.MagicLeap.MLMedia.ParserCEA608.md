---
title: ParserCEA608
summary: cea608 parser. 

---

# ParserCEA608




CEA608 Parser.   [More...](#detailed-description)  




## Detailed Description

```csharp
public class ParserCEA608; 
```


**Details**

Media player script that allows playback of a streaming video (either from file or web URL) This script will update the main texture parameter of the Renderer attached as a sibling with the video frame from playback. Audio is also handled through this class and will playback audio from the file. 





-----------



## Public Methods

###  ParserCEA608 {#functions-parsercea608}

```csharp
public ParserCEA608()
```






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

### delegate void OnCaptionLinesDelegate {#delegate-void-oncaptionlinesdelegate}

```csharp
public delegate void OnCaptionLinesDelegate(
    CaptionLine [] lines
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [CaptionLine](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA608/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA608.CaptionLine.md) [] |lines||






-----------

## Public Attributes

### Mime {#const-string-mime}

```csharp

public const string Mime = "text/cea-608";

```






-----------

## Public Events

### OnText {#ontextdelegate-ontext}

```csharp
public OnTextDelegate OnText()
```






-----------

### OnCaptionLines {#oncaptionlinesdelegate-oncaptionlines}

```csharp
public OnCaptionLinesDelegate OnCaptionLines()
```






-----------

## Public Enums

### CaptionStyle {#enums-captionstyle}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Italics | 0x00000001|   |
| Underline | 0x00000002|   |








-----------

### CaptionDimension {#enums-captiondimension}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MaxRows | 15|   |
| MaxCols | 32|   |
| MaxRowsPlus2 | 17|   |
| MaxColsPlus2 | 34|   |








-----------

### CaptionColor {#enums-captioncolor}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| White | 0|   |
| Green | |   |
| Blue | |   |
| Cyan | |   |
| Red | |   |
| Yellow | |   |
| Magenta | |   |
| Invalide | |   |








-----------

