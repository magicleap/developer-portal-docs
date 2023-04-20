---
title: TTMLData
summary: ttmldata data structure. 

---

# TTMLData




[TTMLData](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.TTMLData.md) data structure.   





## Public Attributes

### windowColorSet {#bool-windowcolorset}

Whether the cue box has a window color. 

```csharp

public bool windowColorSet;

```






-----------

### windowColor {#uint-windowcolor}

The cue window fill color in ARGB format. 

```csharp

public uint windowColor;

```






-----------

### textSizeType {#ttmltextsizetype-textsizetype}

The cue default text size type, or MLTTMLTextSizeType&#95;Unset if this cue has no default text size. 

```csharp

public TTMLTextSizeType textSizeType;

```






-----------

### textSize {#float-textsize}

The cue default text size, or MLTTMLDimen&#95;Unset if this cue has no default. 

```csharp

public float textSize;

```






-----------

### textAlignment {#ttmllayoutalignment-textalignment}

The alignment of the cue text within the cue box. 

```csharp

public TTMLLayoutAlignment textAlignment;

```






-----------

### text {#string-text}

The cue text encoded as UTF-8. Or null if this is an image cue. 

```csharp

public string text;

```






-----------

### startTimeMs {#long-starttimems}

[Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) cue start time in milliseconds. 

```csharp

public long startTimeMs;

```






-----------

### size {#float-size}

The cue box size in the writing direction, as a fraction of the viewport size. 

```csharp

public float size;

```






-----------

### positionAnchor {#ttmlanchortype-positionanchor}

The cue box anchor in the direction of position. 

```csharp

public TTMLAnchorType positionAnchor;

```






-----------

### position {#float-position}

The cue position within the viewport in the direction orthogonal to line. 

```csharp

public float position;

```






-----------

### lineType {#ttmllinetype-linetype}

The cue line type. 

```csharp

public TTMLLineType lineType;

```






-----------

### lineAnchor {#ttmlanchortype-lineanchor}

The cue box anchor in the direction of line. 

```csharp

public TTMLAnchorType lineAnchor;

```






-----------

### line {#float-line}

The cue position within the viewport in the direction orthogonal to the writing direction. 

```csharp

public float line;

```






-----------

### endTimeMs {#long-endtimems}

[Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md) cue end time in milliseconds. 

```csharp

public long endTimeMs;

```






-----------

### bitmapHeight {#float-bitmapheight}

The cue bitmap height as a fraction of the viewport size. 

```csharp

public float bitmapHeight;

```






-----------

### bitmap {#ttmlimage-bitmap}

The cue image if this is an image cue, an empty image otherwise. 

```csharp

public TTMLImage bitmap;

```

| Type | Description  | 
|--|--|
| [TTMLImage](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.TTMLImage.md) | [TTMLData](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.TTMLData.md) data structure.  |





-----------

