---
title: IYcbcrConversionSamplerProvider

---

# IYcbcrConversionSamplerProvider










## Public Methods

### abstract bool OverrideYcbcrConversionSampler {#abstract-bool-overrideycbcrconversionsampler}

Invoked by the [YcbcrRenderer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.md) plugin on Unity's render thread. Apps wanting to override the [VkSamplerYcbcrConversionCreateInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.VkSamplerYcbcrConversionCreateInfo.md) for the hardware buffer rendering should implement this interface. 

```csharp
public virtual abstract bool OverrideYcbcrConversionSampler(
    ref VkAndroidHardwareBufferFormatPropertiesANDROID hwBufferFormatProperties,
    ref VkSamplerYcbcrConversionCreateInfo sampler
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [VkAndroidHardwareBufferFormatPropertiesANDROID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.VkAndroidHardwareBufferFormatPropertiesANDROID.md) |hwBufferFormatProperties|[VkAndroidHardwareBufferFormatPropertiesANDROID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.VkAndroidHardwareBufferFormatPropertiesANDROID.md) of the currently acquired AHardwareBuffer|
| ref [VkSamplerYcbcrConversionCreateInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.VkSamplerYcbcrConversionCreateInfo.md) |sampler|[VkSamplerYcbcrConversionCreateInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.VkSamplerYcbcrConversionCreateInfo.md) of the previous frame|






**Returns**: true if the input sampler values were changed



-----------


