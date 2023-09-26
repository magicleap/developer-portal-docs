---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLOpenXRSetGlobalDimmerFrameEndInfoParams {#mlresultcode-mlopenxrsetglobaldimmerframeendinfoparams}

```csharp
public MLResult.Code MLOpenXRSetGlobalDimmerFrameEndInfoParams(
    XrGlobalDimmerFrameEndInfoML globalDimmerFrameEndInfoML
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [XrGlobalDimmerFrameEndInfoML](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGlobalDimmer/NativeBindings/UnityEngine.XR.MagicLeap.MLGlobalDimmer.NativeBindings.XrGlobalDimmerFrameEndInfoML.md) |globalDimmerFrameEndInfoML||






-----------

### void UnityMagicLeap_RenderingSetGlobalDimmerValue {#void-unitymagicleap-renderingsetglobaldimmervalue}

Sets the GlobalDimmer value via the Magic Leap XR Plugin 

```csharp
public void UnityMagicLeap_RenderingSetGlobalDimmerValue(
    float dimmerValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |dimmerValue|Level of opacity, between 0 and 1, of global dimmer.|






-----------

## Public Attributes

### XR_TYPE_GLOBAL_DIMMER_FRAME_END_INFO_ML {#const-int-xr-type-global-dimmer-frame-end-info-ml}

```csharp

public const int XR_TYPE_GLOBAL_DIMMER_FRAME_END_INFO_ML = 1000136000;

```






-----------


