---
title: WebVTTData
summary: webvtt data structure. 

---

# WebVTTData




WebVTT data structure.   





## Public Attributes

### align {#webvttalign-align}

WebVTT cue text alignment. 

```csharp

public WebVTTAlign align;

```






-----------

### TextPosition {#float-textposition}

The indent of the cue box in the direction defined by the writing direction. 

```csharp

public float TextPosition;

```






-----------

### StartTimeMS {#long-starttimems}

[Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) cue start time in milliseconds. 

```csharp

public long StartTimeMS;

```






-----------

### SnapToLines {#bool-snaptolines}

A boolean indicating whether the line is an integer number of lines. 

```csharp

public bool SnapToLines;

```






-----------

### Size {#float-size}

WebVTT cue size. 

```csharp

public float Size;

```






-----------

### RelativeLinePosition {#float-relativelineposition}

Relative cue line position. 

```csharp

public float RelativeLinePosition;

```






-----------

### Orientation {#webvttorientation-orientation}

Orientation of the cue. 

```csharp

public WebVTTOrientation Orientation;

```






-----------

### LineNumber {#int-linenumber}

WebVTT cue line number. 

```csharp

public int LineNumber;

```






-----------

### Id {#string-id}

A sequence of characters unique amongst all the WebVTT cue identifiers. 

```csharp

public string Id;

```






-----------

### EndTimeMs {#long-endtimems}

[Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) cue end time in milliseconds. 

```csharp

public long EndTimeMs;

```






-----------

### Direction {#webvttdirection-direction}

The writing direction. 

```csharp

public WebVTTDirection Direction;

```






-----------

### Body {#string-body}

WebVTT file body encoded as UTF-8. 

```csharp

public string Body;

```






-----------

