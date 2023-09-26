---
title: MLGraphicsImportedMediaSurface
summary: handles to and information about an imported surface. 

---

# MLGraphicsImportedMediaSurface

**Module:** **[Graphics Utilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md)**



Handles to and information about an imported surface.  [More...](#detailed-description)


`#include <ml_graphics_utils.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| VkImage | **[imported_image](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md#vkimage-imported-image)**  |
| VkDeviceMemory | **[imported_memory](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md#vkdevicememory-imported-memory)**  |
| VkFormat | **[format](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md#vkformat-format)** <br></br>The Vulkan format corresponding to the imported surface’s format, or VK_FORMAT_UNDEFINED if there isn’t an equivalent Vulkan format.  |
| uint64_t | **[external_format](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md#uint64-t-external-format)**  |
| VkFormatFeatureFlags | **[format_features](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md#vkformatfeatureflags-format-features)**  |
| VkComponentMapping | **[sampler_ycbcr_conversion_components](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md#vkcomponentmapping-sampler-ycbcr-conversion-components)**  |
| VkSamplerYcbcrModelConversion | **[suggested_ycbcr_model](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md#vksamplerycbcrmodelconversion-suggested-ycbcr-model)**  |
| VkSamplerYcbcrRange | **[suggested_ycbcr_range](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md#vksamplerycbcrrange-suggested-ycbcr-range)**  |
| VkChromaLocation | **[suggested_x_chroma_offset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md#vkchromalocation-suggested-x-chroma-offset)**  |
| VkChromaLocation | **[suggested_y_chroma_offset](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md#vkchromalocation-suggested-y-chroma-offset)**  |

## Detailed Description

```cpp
struct MLGraphicsImportedMediaSurface;
```

Handles to and information about an imported surface. 

Populated by [MLGraphicsImportVkImageFromMediaHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlgraphicsimportvkimagefrommediahandle). Provides all information, necessary for creating a VkImageView and VkSampler for the imported surface.

Refer to the Vulkan specification's equivalent parameters in VkAndroidHardwareBufferFormatPropertiesANDROID. Also refer to usage of VkExternalFormatANDROID and VkSamplerYcbcrConversionCreateInfo. 





-----------
## Public Attributes Documentation

### imported_image {#vkimage-imported-image}

```cpp
VkImage imported_image;
```


The VkImage bound to the imported surface. 





-----------

### imported_memory {#vkdevicememory-imported-memory}

```cpp
VkDeviceMemory imported_memory;
```


The VkDevice memory representing the imported surface. 





-----------

### format {#vkformat-format}

```cpp
VkFormat format;
```

The Vulkan format corresponding to the imported surface’s format, or VK_FORMAT_UNDEFINED if there isn’t an equivalent Vulkan format. 





-----------

### external_format {#uint64-t-external-format}

```cpp
uint64_t external_format;
```


An implementation-defined external format identifier for use with VkExternalFormatANDROID. 





-----------

### format_features {#vkformatfeatureflags-format-features}

```cpp
VkFormatFeatureFlags format_features;
```


Describes the capabilities of this external format. 





-----------

### sampler_ycbcr_conversion_components {#vkcomponentmapping-sampler-ycbcr-conversion-components}

```cpp
VkComponentMapping sampler_ycbcr_conversion_components;
```


The component swizzle that should be used in VkSamplerYcbcrConversionCreateInfo. 





-----------

### suggested_ycbcr_model {#vksamplerycbcrmodelconversion-suggested-ycbcr-model}

```cpp
VkSamplerYcbcrModelConversion suggested_ycbcr_model;
```


Suggested color model to use in the VkSamplerYcbcrConversionCreateInfo. 





-----------

### suggested_ycbcr_range {#vksamplerycbcrrange-suggested-ycbcr-range}

```cpp
VkSamplerYcbcrRange suggested_ycbcr_range;
```


Suggested numerical value range to use in VkSamplerYcbcrConversionCreateInfo. 





-----------

### suggested_x_chroma_offset {#vkchromalocation-suggested-x-chroma-offset}

```cpp
VkChromaLocation suggested_x_chroma_offset;
```


Suggested X chroma offset to use in VkSamplerYcbcrConversionCreateInfo. 





-----------

### suggested_y_chroma_offset {#vkchromalocation-suggested-y-chroma-offset}

```cpp
VkChromaLocation suggested_y_chroma_offset;
```


Suggested Y chroma offset to use in VkSamplerYcbcrConversionCreateInfo. 





-----------


