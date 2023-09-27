---
title: Graphics Utilities
summary: optional graphics utility functionality. 

---

# Graphics Utilities

Optional graphics utility functionality.  [More...](#detailed-description)

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
| enum | **[MLMeshingPopulateDepthFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#enums-mlmeshingpopulatedepthflags)** <br></br> { <br></br>[MLMeshingPopulateDepthFlags_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#enums-mlmeshingpopulatedepthflags-none),<br></br> [MLMeshingPopulateDepthFlags_EnableVisualization](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#enums-mlmeshingpopulatedepthflags-enablevisualization),<br></br> [MLMeshingPopulateDepthFlags_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#enums-mlmeshingpopulatedepthflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Flags for [MLMeshingDepthBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md).  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsEnumerateRequiredVkDeviceExtensionsForMediaHandleImport](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlgraphicsenumeraterequiredvkdeviceextensionsformediahandleimport)**(VkExtensionProperties * out_required_extension_properties, uint32_t * out_extension_property_count)<br></br>Returns a list of required VkDevice extension names.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsImportVkImageFromMediaHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlgraphicsimportvkimagefrommediahandle)**(const VkDevice vulkan_logical_device, uint64_t media_handle, [MLGraphicsImportedMediaSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_graphics_imported_media_surface.md) * out_imported_surface_info)<br></br>Import a surface as a VkImage from a media api handle.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMeshingPopulateDepth](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md#mlresult-mlmeshingpopulatedepth)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) client_handle, const [MLMeshingDepthBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md) * info, const [MLMeshingMesh](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md) * meshes)<br></br>Populates the depth buffer (passed as a Texture2D array) with the meshes given by a user. It has to be called after MLGraphicsBeginFrame which provides the handles for the depth/color buffers.  |

## Detailed Description

Optional graphics utility functionality. 



:::caution Attention
EXPERIMENTAL. 
:::



**Shared Object:**
  * graphics_utils.magicleap*

* The graphics utility library is not necessary to create an application using the ML SDK. It contains a collection of useful code that can optionally be used to make development easier.




-----------
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






