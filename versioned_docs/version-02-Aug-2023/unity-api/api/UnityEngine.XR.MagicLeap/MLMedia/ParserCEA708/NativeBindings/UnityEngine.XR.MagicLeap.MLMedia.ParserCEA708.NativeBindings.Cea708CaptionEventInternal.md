---
title: Cea708CaptionEventInternal
summary: internal cea708 caption event. mlcea708captionevent from ml-media-cea708-caption.h. 

---

# Cea708CaptionEventInternal




Internal CEA708 Caption Event.  MLCea708CaptionEvent  from  ml&#95;media&#95;cea708&#95;caption.h .   





## Public Attributes

### Object {#intptr-object}

Emitted CEA708 caption event specific data, based on the event type. If the type is  Cea708CaptionEmitCommand.Buffer , Object will point to a null terminated string of maximum size  MLCea708CaptionEmitCommandBufferMaxSize  bytes. If the type is  Cea708CaptionEmitCommand.Control , Object will point to one byte character. If the type is  Cea708CaptionEmitCommand.CWX , Object will point to an integer. If the type is  Cea708CaptionEmitCommand.CLW , Object will point to an integer. If the type is  Cea708CaptionEmitCommand.DSW , Object will point to an integer. If the type is  Cea708CaptionEmitCommand.HDW , Object will point to an integer. If the type is  Cea708CaptionEmitCommand.TGW , Object will point to an integer. If the type is  Cea708CaptionEmitCommand.DLW , Object will point to an integer. If the type is  Cea708CaptionEmitCommand.DLY , Object will point to an integer. If the type is  Cea708CaptionEmitCommand.DLC , Object will be NULL. If the type is  Cea708CaptionEmitCommand.RST , Object will be NULL. If the type is  Cea708CaptionEmitCommand.SPA , Object will point to  Cea708CaptionPenAttr . If the type is  Cea708CaptionEmitCommand.SPC , Object will point to  Cea708CaptionPenColor . If the type is  Cea708CaptionEmitCommand.SPL , Object will point to  Cea708CaptionPenLocation . If the type is  Cea708CaptionEmitCommand.SWA , Object will point to  Cea708CaptionWindowAttr . If the type is  Cea708CaptionEmitCommand.DFX , Object will point to  Cea708CaptionWindow . 

```csharp

public IntPtr Object;

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


