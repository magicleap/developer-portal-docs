---
title: Cea708CaptionEvent
summary: cea708 caption event. 

---

# Cea708CaptionEvent




CEA708 Caption Event.   





## Public Attributes

### Data {#intptr-data}

Emitted CEA708 caption event specific data, based on the event type. If the type is  [Cea708CaptionEmitCommand.Buffer](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-buffer) , Object will be a string. If the type is  [Cea708CaptionEmitCommand.Control](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-control) , Object will be a byte. If the type is  [Cea708CaptionEmitCommand.CWX](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-cwx) , Object will be an integer. If the type is  [Cea708CaptionEmitCommand.CLW](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-clw) , Object will be an integer. If the type is  [Cea708CaptionEmitCommand.DSW](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-dsw) , Object will be an integer. If the type is  [Cea708CaptionEmitCommand.HDW](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-hdw) , Object will be an integer. If the type is  [Cea708CaptionEmitCommand.TGW](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-tgw) , Object will be an integer. If the type is  [Cea708CaptionEmitCommand.DLW](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-dlw) , Object will be an integer. If the type is  [Cea708CaptionEmitCommand.DLY](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-dly) , Object will be an integer. If the type is  [Cea708CaptionEmitCommand.DLC](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-dlc) , Object will be null. If the type is  [Cea708CaptionEmitCommand.RST](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-rst) , Object will be null. If the type is  [Cea708CaptionEmitCommand.SPA](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-spa) , Object will be a  [Cea708CaptionPenAttr](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.NativeBindings.Cea708CaptionPenAttr.md) . If the type is  [Cea708CaptionEmitCommand.SPC](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-spc) , Object will be a  [Cea708CaptionPenColor](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.NativeBindings.Cea708CaptionPenColor.md) . If the type is  [Cea708CaptionEmitCommand.SPL](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-spl) , Object will be a  [Cea708CaptionPenLocation](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.NativeBindings.Cea708CaptionPenLocation.md) . If the type is  [Cea708CaptionEmitCommand.SWA](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-swa) , Object will be a  [Cea708CaptionWindowAttr](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.NativeBindings.Cea708CaptionWindowAttr.md) . If the type is  [Cea708CaptionEmitCommand.DFX](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-dfx) , Object will be a  [Cea708CaptionWindow](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.NativeBindings.Cea708CaptionWindow.md) . 

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
| [Cea708CaptionEmitCommand](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.md#enums-cea708captionemitcommand) | CEA708 Caption Emit Commands constants.  MLCea708CaptionEmitCommand  from  ml&#95;media&#95;cea708&#95;caption.h .  |





-----------

