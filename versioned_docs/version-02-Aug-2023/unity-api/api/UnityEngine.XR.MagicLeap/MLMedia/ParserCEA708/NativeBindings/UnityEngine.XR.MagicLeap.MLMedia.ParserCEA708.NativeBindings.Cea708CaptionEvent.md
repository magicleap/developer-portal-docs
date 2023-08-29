---
title: Cea708CaptionEvent
summary: cea708 caption event. 

---

# Cea708CaptionEvent




CEA708 Caption Event.   





## Public Attributes

### Data {#intptr-data}

Emitted CEA708 caption event specific data, based on the event type. If the type is  Cea708CaptionEmitCommand.Buffer , Object will be a string. If the type is  Cea708CaptionEmitCommand.Control , Object will be a byte. If the type is  Cea708CaptionEmitCommand.CWX , Object will be an integer. If the type is  Cea708CaptionEmitCommand.CLW , Object will be an integer. If the type is  Cea708CaptionEmitCommand.DSW , Object will be an integer. If the type is  Cea708CaptionEmitCommand.HDW , Object will be an integer. If the type is  Cea708CaptionEmitCommand.TGW , Object will be an integer. If the type is  Cea708CaptionEmitCommand.DLW , Object will be an integer. If the type is  Cea708CaptionEmitCommand.DLY , Object will be an integer. If the type is  Cea708CaptionEmitCommand.DLC , Object will be null. If the type is  Cea708CaptionEmitCommand.RST , Object will be null. If the type is  Cea708CaptionEmitCommand.SPA , Object will be a  Cea708CaptionPenAttr . If the type is  Cea708CaptionEmitCommand.SPC , Object will be a  Cea708CaptionPenColor . If the type is  Cea708CaptionEmitCommand.SPL , Object will be a  Cea708CaptionPenLocation . If the type is  Cea708CaptionEmitCommand.SWA , Object will be a  Cea708CaptionWindowAttr . If the type is  Cea708CaptionEmitCommand.DFX , Object will be a  Cea708CaptionWindow . 

```csharp

public IntPtr Data;

```






-----------

### Type {#cea708captionemitcommand-type}

Emitted CEA708 caption event type. 

```csharp

public Cea708CaptionEmitCommand Type;

```

| Type | Description  | 
|--|--|
| [Cea708CaptionEmitCommand](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#int-cea708captionemitcommand) | CEA708 Caption Emit Commands constants.  MLCea708CaptionEmitCommand  from  ml&#95;media&#95;cea708&#95;caption.h .  |





-----------


