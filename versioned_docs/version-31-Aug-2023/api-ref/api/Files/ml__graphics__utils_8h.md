---
title: ml_graphics_utils.h

---

# ml_graphics_utils.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLGraphicsImportedMediaSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md)** <br></br>Handles to and information about an imported surface.  |
| struct | **[MLMeshingVirtualCameraBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_virtual_camera_buffer_info.md)** <br></br>Per virtual camera information needed to render depth.  |
| struct | **[MLMeshingDepthBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md)** <br></br>To be passed to PopulateDepth.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLGraphicsImportedMediaSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md) | **[MLGraphicsImportedMediaSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#struct-mlgraphicsimportedmediasurface)** <br></br>Handles to and information about an imported surface.  |
| typedef struct [MLMeshingVirtualCameraBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_virtual_camera_buffer_info.md) | **[MLMeshingVirtualCameraBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#struct-mlmeshingvirtualcamerabufferinfo)** <br></br>Per virtual camera information needed to render depth.  |
| typedef struct [MLMeshingDepthBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md) | **[MLMeshingDepthBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#struct-mlmeshingdepthbufferinfo)** <br></br>To be passed to PopulateDepth.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLMeshingPopulateDepthFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#enums-mlmeshingpopulatedepthflags)** <br></br> { <br></br>[MLMeshingPopulateDepthFlags_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__graphics__utils_8h.md#enums-mlmeshingpopulatedepthflags-none),<br></br> [MLMeshingPopulateDepthFlags_EnableVisualization](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__graphics__utils_8h.md#enums-mlmeshingpopulatedepthflags-enablevisualization),<br></br> [MLMeshingPopulateDepthFlags_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__graphics__utils_8h.md#enums-mlmeshingpopulatedepthflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Flags for [MLMeshingDepthBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md).  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsEnumerateRequiredVkDeviceExtensionsForMediaHandleImport](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlgraphicsenumeraterequiredvkdeviceextensionsformediahandleimport)**(VkExtensionProperties * out_required_extension_properties, uint32_t * out_extension_property_count)<br></br>Returns a list of required VkDevice extension names.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsImportVkImageFromMediaHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlgraphicsimportvkimagefrommediahandle)**(const VkDevice vulkan_logical_device, uint64_t media_handle, [MLGraphicsImportedMediaSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md) * out_imported_surface_info)<br></br>Import a surface as a VkImage from a media api handle.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMeshingPopulateDepth](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlmeshingpopulatedepth)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) client_handle, const [MLMeshingDepthBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md) * info, const [MLMeshingMesh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md) * meshes)<br></br>Populates the depth buffer (passed as a Texture2D array) with the meshes given by a user. It has to be called after MLGraphicsBeginFrame which provides the handles for the depth/color buffers.  |

## Enums Documentation

### MLMeshingPopulateDepthFlags {#enums-mlmeshingpopulatedepthflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMeshingPopulateDepthFlags_None | | None. |
| MLMeshingPopulateDepthFlags_EnableVisualization | | If set, will fill the color buffer. |
| MLMeshingPopulateDepthFlags_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Flags for [MLMeshingDepthBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md). 



:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal.
:::



-----------


## Types Documentation

### MLGraphicsImportedMediaSurface {#struct-mlgraphicsimportedmediasurface}

```cpp
typedef struct MLGraphicsImportedMediaSurface MLGraphicsImportedMediaSurface;
```

Handles to and information about an imported surface. 

Populated by [MLGraphicsImportVkImageFromMediaHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlgraphicsimportvkimagefrommediahandle). Provides all information, necessary for creating a VkImageView and VkSampler for the imported surface.

Refer to the Vulkan specification's equivalent parameters in VkAndroidHardwareBufferFormatPropertiesANDROID. Also refer to usage of VkExternalFormatANDROID and VkSamplerYcbcrConversionCreateInfo. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md)



-----------

### MLMeshingVirtualCameraBufferInfo {#struct-mlmeshingvirtualcamerabufferinfo}

```cpp
typedef struct MLMeshingVirtualCameraBufferInfo MLMeshingVirtualCameraBufferInfo;
```

Per virtual camera information needed to render depth. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_virtual_camera_buffer_info.md)

:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal.
:::



-----------

### MLMeshingDepthBufferInfo {#struct-mlmeshingdepthbufferinfo}

```cpp
typedef struct MLMeshingDepthBufferInfo MLMeshingDepthBufferInfo;
```

To be passed to PopulateDepth. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md)

:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal.
:::



-----------


## Functions Documentation

### MLGraphicsEnumerateRequiredVkDeviceExtensionsForMediaHandleImport {#mlresult-mlgraphicsenumeraterequiredvkdeviceextensionsformediahandleimport}

```cpp
MLResult MLGraphicsEnumerateRequiredVkDeviceExtensionsForMediaHandleImport(
    VkExtensionProperties * out_required_extension_properties,
    uint32_t * out_extension_property_count
)
```

Returns a list of required VkDevice extension names. 

**Parameters**

|  |   |   |
|--|--|--|
| VkExtensionProperties * |out_required_extension_properties|Either NULL or a pointer to an array of VkExtensionProperties. |
| uint32_t * |out_extension_property_count|A pointer to an integer related to the number of extensions required or queried.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The query failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The list of extensions or number of required extensions was returned successfully.|
**Required Permissions**:

  * None 


If out_required_extension_properties is NULL then the number of required extension is returned in out_extension_property_count. Otherwise, out_extension_property_count must point to a variable set to the number of elements in the out_required_extension_properties array, and on return the variable is overwritten with the number of strings actually written to out_required_extension_properties.





-----------

### MLGraphicsImportVkImageFromMediaHandle {#mlresult-mlgraphicsimportvkimagefrommediahandle}

```cpp
MLResult MLGraphicsImportVkImageFromMediaHandle(
    const VkDevice vulkan_logical_device,
    uint64_t media_handle,
    MLGraphicsImportedMediaSurface * out_imported_surface_info
)
```

Import a surface as a VkImage from a media api handle. 

**Parameters**

|  |   |   |
|--|--|--|
| const VkDevice |vulkan_logical_device|The Vulkan logical device to use for resource creation. |
| uint64_t |media_handle|The media api handle referring to the surface to import. |
| [MLGraphicsImportedMediaSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md) * |out_imported_surface_info|A struct containing the resulting resource handles and information for sampler creation.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Import was not performed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Surface was imported successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Import was not performed due to an unknown error.|
**Required Permissions**:

  * None 


Creates VkImage and VkDeviceMemory objects refrencing a surface referred to by a handle obtained from a media API. The resulting image will be owned by the VkDevice provided.This VkDevice must be created with the extensions specified by MLGraphicsEnumerateRequiredVkDeviceExtensionsForMediaHandleImport enabled. This call does not depend on a Graphics Client and can be used independent of other graphics APIs.





-----------

### MLMeshingPopulateDepth {#mlresult-mlmeshingpopulatedepth}

```cpp
MLResult MLMeshingPopulateDepth(
    MLHandle client_handle,
    const MLMeshingDepthBufferInfo * info,
    const MLMeshingMesh * meshes
)
```

Populates the depth buffer (passed as a Texture2D array) with the meshes given by a user. It has to be called after MLGraphicsBeginFrame which provides the handles for the depth/color buffers. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |client_handle|The handle to the created client. |
| const [MLMeshingDepthBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md) * |info|The per virtual camera info for rendering depth. |
| const [MLMeshingMesh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md) * |meshes|The meshes for which the depth info needs to be populated.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Depth buffers were not populated due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Depth buffer was populated successfully.|
**Required Permissions**:

  * None 




:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal.
:::



-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2017 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#include "ml_api.h"
#include "ml_types.h"
#include "ml_graphics.h"
#include "ml_meshing2.h"

ML_EXTERN_C_BEGIN

typedef enum MLMeshingPopulateDepthFlags {
  MLMeshingPopulateDepthFlags_None,
  MLMeshingPopulateDepthFlags_EnableVisualization,
  MLMeshingPopulateDepthFlags_Ensure32Bits = 0x7FFFFFFF
} MLMeshingPopulateDepthFlags;

#ifdef VK_VERSION_1_0

typedef struct MLGraphicsImportedMediaSurface {
  VkImage                       imported_image;
  VkDeviceMemory                imported_memory;
  VkFormat                      format;
  uint64_t                      external_format;
  VkFormatFeatureFlags          format_features;
  VkComponentMapping            sampler_ycbcr_conversion_components;
  VkSamplerYcbcrModelConversion suggested_ycbcr_model;
  VkSamplerYcbcrRange           suggested_ycbcr_range;
  VkChromaLocation              suggested_x_chroma_offset;
  VkChromaLocation              suggested_y_chroma_offset;
} MLGraphicsImportedMediaSurface;
#endif

typedef ML_DEPRECATED struct MLMeshingVirtualCameraBufferInfo {
  MLMat4f projection;
  MLTransform transform;
} MLMeshingVirtualCameraBufferInfo;

typedef ML_DEPRECATED struct MLMeshingDepthBufferInfo {
  uint32_t flags;
  uint32_t buffer_count;
  MLHandle color_id;
  MLHandle depth_id;
  MLRectf viewport;
  MLGraphicsProjectionType projection_type;
  MLMeshingVirtualCameraBufferInfo buffers[MLGraphicsVirtualCameraName_Count];
} MLMeshingDepthBufferInfo;

#ifdef VK_VERSION_1_0

ML_API MLResult ML_CALL MLGraphicsEnumerateRequiredVkDeviceExtensionsForMediaHandleImport(VkExtensionProperties *out_required_extension_properties, uint32_t *out_extension_property_count);

ML_API MLResult ML_CALL MLGraphicsImportVkImageFromMediaHandle(const VkDevice vulkan_logical_device, uint64_t media_handle, MLGraphicsImportedMediaSurface *out_imported_surface_info);
#endif

ML_DEPRECATED
ML_API MLResult ML_CALL MLMeshingPopulateDepth(MLHandle client_handle, const MLMeshingDepthBufferInfo *info, const MLMeshingMesh *meshes);

ML_EXTERN_C_END
```




