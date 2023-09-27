---
title: MLTTMLData
summary: ttml data structure. 

---

# MLTTMLData




TTML data structure.   





## Public Methods

### [MLTTMLData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/NativeBindings/UnityEngine.XR.MagicLeap.MLMediaTTML.NativeBindings.MLTTMLData.md) Create {#mlttmldata-create}

Create and return an initialized version of this struct. 

```csharp
public static MLTTMLData Create()
```






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### Bitmap {#mlttmlimage-bitmap}

The cue image if this is an image cue, an empty image otherwise. 

```csharp

public MLTTMLImage Bitmap;

```

| Type | Description  | 
|--|--|
| [MLTTMLImage](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/NativeBindings/UnityEngine.XR.MagicLeap.MLMediaTTML.NativeBindings.MLTTMLImage.md) | Byte data for TTML image cues.  |





-----------

### BitmapHeight {#float-bitmapheight}

The cue bitmap height as a fraction of the viewport size or [MLMediaTTML.MLTTMLDimen&#95;Unset](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#const-float-mlttmldimen-unset)   if the bitmap should be displayed at its natural height given the bitmap dimensions and the specified #size. 

```csharp

public float BitmapHeight;

```






-----------

### EndTimeMs {#long-endtimems}

Track cue end time in milliseconds. 

```csharp

public long EndTimeMs;

```






-----------

### Line {#float-line}

The position of the #line&#95;anchor of the cue box within the viewport in the direction orthogonal to the writing direction, or [MLMediaTTML.MLTTMLDimen&#95;Unset](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#const-float-mlttmldimen-unset), [LineType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/NativeBindings/UnityEngine.XR.MagicLeap.MLMediaTTML.NativeBindings.MLTTMLData.md#mlttmllinetype-linetype), [MLTTMLLineType.Fraction](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#enums-fraction)   . When set, the interpretation of the value depends on the value of #line&#95;type. For horizontal text and  equal to , this is the fractional vertical position relative to the top of the viewport. 

```csharp

public float Line;

```






-----------

### LineAnchor {#mlttmlanchortype-lineanchor}

The cue box anchor in the direction of line. 

```csharp

public MLTTMLAnchorType LineAnchor;

```

| Type | Description  | 
|--|--|
| [MLTTMLAnchorType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#enums-mlttmlanchortype) | The cue box anchor in the direction of position.  |





-----------

### LineType {#mlttmllinetype-linetype}

The cue line type. [MLTTMLLineType.Fraction](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#enums-fraction), [MLTTMLLineType.Number](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#enums-number), [LineAnchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/NativeBindings/UnityEngine.XR.MagicLeap.MLMediaTTML.NativeBindings.MLTTMLData.md#mlttmlanchortype-lineanchor), [MLTTMLLineType.Number](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#enums-number)   indicates that #line is a fractional position within the viewport.  indicates that #line is a line number, where the size of each line is taken to be the size of the first line of the cue. When #line is greater than or equal to 0 lines count from the start of the viewport, with 0 indicating zero offset from the start edge. When #line is negative lines count from the end of the viewport, with -1 indicating zero offset from the end edge. For horizontal text the line spacing is the height of the first line of the cue, and the start and end of the viewport are the top and bottom respectively. Note that it's particularly important to consider the effect of  when using . 

```csharp

public MLTTMLLineType LineType;

```

| Type | Description  | 
|--|--|
| [MLTTMLLineType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#enums-mlttmllinetype) | The cue line type.  |





-----------

### Position {#float-position}

The fractional position of the #position&#95;anchor of the cue box within the viewport in the direction orthogonal to #line, or [MLMediaTTML.MLTTMLDimen&#95;Unset](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#const-float-mlttmldimen-unset)   . For horizontal text, this is the horizontal position relative to the left of the viewport. Note that positioning is relative to the left of the viewport even in the case of right-to-left text. 

```csharp

public float Position;

```






-----------

### PositionAnchor {#mlttmlanchortype-positionanchor}

The cue box anchor in the direction of position. 

```csharp

public MLTTMLAnchorType PositionAnchor;

```

| Type | Description  | 
|--|--|
| [MLTTMLAnchorType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#enums-mlttmlanchortype) | The cue box anchor in the direction of position.  |





-----------

### Size {#float-size}

The cue box size in the writing direction, as a fraction of the viewport size or [MLMediaTTML.MLTTMLDimen&#95;Unset](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#const-float-mlttmldimen-unset)   . 

```csharp

public float Size;

```






-----------

### StartTimeMs {#long-starttimems}

Track cue start time in milliseconds. 

```csharp

public long StartTimeMs;

```






-----------

### Text {#string-text}

The cue text encoded as UTF-8. Or null if this is an image cue. 

```csharp

public string Text;

```






-----------

### TextAlignment {#mlttmllayoutalignment-textalignment}

The alignment of the cue text within the cue box. 

```csharp

public MLTTMLLayoutAlignment TextAlignment;

```

| Type | Description  | 
|--|--|
| [MLTTMLLayoutAlignment](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#enums-mlttmllayoutalignment) | The alignment of the cue text within the cue box.  |





-----------

### TextSize {#float-textsize}

The cue default text size, or [MLMediaTTML.MLTTMLDimen&#95;Unset](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#const-float-mlttmldimen-unset)   if this cue has no default. 

```csharp

public float TextSize;

```






-----------

### TextSizeType {#mlttmltextsizetype-textsizetype}

The cue default text size type, or or Unset   if this cue has no default text size. 

```csharp

public MLTTMLTextSizeType TextSizeType;

```

| Type | Description  | 
|--|--|
| [MLTTMLTextSizeType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md#enums-mlttmltextsizetype) | The cue default text size type;  |





-----------

### WindowColor {#uint-windowcolor}

The cue window fill color in ARGB format. 

```csharp

public uint WindowColor;

```






-----------

### WindowColorSet {#bool-windowcolorset}

Specifies whether or not the [WindowColor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/NativeBindings/UnityEngine.XR.MagicLeap.MLMediaTTML.NativeBindings.MLTTMLData.md#uint-windowcolor)   property is set. 

```csharp

public bool WindowColorSet;

```






-----------


