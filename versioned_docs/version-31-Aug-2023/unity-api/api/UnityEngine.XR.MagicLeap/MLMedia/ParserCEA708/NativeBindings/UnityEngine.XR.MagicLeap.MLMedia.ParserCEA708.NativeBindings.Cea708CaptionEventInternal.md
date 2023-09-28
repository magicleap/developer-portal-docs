---
title: Cea708CaptionEventInternal
summary: internal cea708 caption event. mlcea708captionevent from ml-media-cea708-caption.h. 

---

# Cea708CaptionEventInternal




Internal CEA708 Caption Event.  MLCea708CaptionEvent  from  ml&#95;media&#95;cea708&#95;caption.h .   





## Public Attributes

### Object {#intptr-object}

Emitted CEA708 caption event specific data, based on the event type. If the type is  [Cea708CaptionEmitCommand.Buffer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-buffer) , Object will point to a null terminated string of maximum size  MLCea708CaptionEmitCommandBufferMaxSize  bytes. If the type is  [Cea708CaptionEmitCommand.Control](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-control) , Object will point to one byte character. If the type is  [Cea708CaptionEmitCommand.CWX](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-cwx) , Object will point to an integer. If the type is  [Cea708CaptionEmitCommand.CLW](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-clw) , Object will point to an integer. If the type is  [Cea708CaptionEmitCommand.DSW](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-dsw) , Object will point to an integer. If the type is  [Cea708CaptionEmitCommand.HDW](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-hdw) , Object will point to an integer. If the type is  [Cea708CaptionEmitCommand.TGW](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-tgw) , Object will point to an integer. If the type is  [Cea708CaptionEmitCommand.DLW](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-dlw) , Object will point to an integer. If the type is  [Cea708CaptionEmitCommand.DLY](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-dly) , Object will point to an integer. If the type is  [Cea708CaptionEmitCommand.DLC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-dlc) , Object will be NULL. If the type is  [Cea708CaptionEmitCommand.RST](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-rst) , Object will be NULL. If the type is  [Cea708CaptionEmitCommand.SPA](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-spa) , Object will point to  [Cea708CaptionPenAttr](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.NativeBindings.Cea708CaptionPenAttr.md) . If the type is  [Cea708CaptionEmitCommand.SPC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-spc) , Object will point to  [Cea708CaptionPenColor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.NativeBindings.Cea708CaptionPenColor.md) . If the type is  [Cea708CaptionEmitCommand.SPL](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-spl) , Object will point to  [Cea708CaptionPenLocation](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.NativeBindings.Cea708CaptionPenLocation.md) . If the type is  [Cea708CaptionEmitCommand.SWA](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-swa) , Object will point to  [Cea708CaptionWindowAttr](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.NativeBindings.Cea708CaptionWindowAttr.md) . If the type is  [Cea708CaptionEmitCommand.DFX](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-dfx) , Object will point to  [Cea708CaptionWindow](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.NativeBindings.Cea708CaptionWindow.md) . 

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
| [Cea708CaptionEmitCommand](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-cea708captionemitcommand) | CEA708 Caption Emit Commands constants.  MLCea708CaptionEmitCommand  from  ml&#95;media&#95;cea708&#95;caption.h .  |





-----------


