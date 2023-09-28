---
title: MLMediaTTML
summary: mlmediattml summary placeholder. 

---

# MLMediaTTML



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


[MLMediaTTML](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md) Summary placeholder.   [More...](#detailed-description)  




## Detailed Description

```csharp
public class MLMediaTTML; 
```


**Details**

[MLMediaTTML](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md) description goes here. 





-----------



## Public Attributes

### MLTTMLDimen_Unset {#const-float-mlttmldimen-unset}

An unset position, width, or size. 

```csharp

public const float MLTTMLDimen_Unset = -3.402823466e+38F;

```






-----------

## Public Enums

### MLTTMLAnchorType {#enums-mlttmlanchortype}

The cue box anchor in the direction of position. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unset | 0x7FFFFFFF| An unset anchor type value.   |
| Start | 0| Anchors the left (for horizontal positions) or top (for vertical positions) edge of the cue box.   |
| Middle | 1| Anchors the middle of the cue box.   |
| End | 2| Anchors the right (for horizontal positions) or bottom (for vertical positions) edge of the cue box.   |








-----------

### MLTTMLLayoutAlignment {#enums-mlttmllayoutalignment}

The alignment of the cue text within the cue box. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unspecified | 0x7FFFFFFF| An unspecified alignment value.   |
| Normal | 0| Normal alignment relative to text direction.   |
| Center | 1| Centered alignment.   |
| Opposite | 2| Opposite alignment relative to text direction.   |








-----------

### MLTTMLLineType {#enums-mlttmllinetype}

The cue line type. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unset | 0x7FFFFFFF| An unset line type value.   |
| Fraction | 0| Line position is fractional position within the viewport.   |
| Number | 1| Line position is number of lines, interpretation also depends on the line anchor type.   |








-----------

### MLTTMLTextSizeType {#enums-mlttmltextsizetype}

The cue default text size type; 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unset | 0x7FFFFFFF| An unset text size type value.   |
| Fractional | 0| Text size is measured as a fraction of the viewport size minus the view padding.   |
| FractionalIgnorePadding | 1| Text size is measured as a fraction of the viewport size, ignoring the view padding   |
| Absolute | 2| Text size is measured in number of pixels.   |








-----------


