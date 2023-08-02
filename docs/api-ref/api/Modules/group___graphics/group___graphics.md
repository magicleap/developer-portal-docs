---
title: Graphics
summary: the apis for the graphics system. 

---

# Graphics

The APIs for the graphics system.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLGraphicsOptions](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md)** <br></br>The graphics options provided for client creation.  |
| struct | **[MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md)** <br></br>The frame parameters requested for the next rendered frame.  |
| struct | **[MLGraphicsClipExtentsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info.md)** <br></br>The static clip extents defined for all possible eye positions.  |
| struct | **[MLGraphicsClipExtentsParams](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_params.md)** <br></br>The clip extents parameters.  |
| struct | **[MLGraphicsClipExtentsInfoArrayEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md)** <br></br>The clip extents array returned from [MLGraphicsGetClipExtentsEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclipextentsex).  |
| struct | **[MLGraphicsRenderTarget](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md)** <br></br>Definition of a single render target defined in [MLGraphicsRenderBufferInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md).  |
| struct | **[MLGraphicsRenderBufferInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md)** <br></br>Definition of a single buffer entry for all virtual cameras as defined in [MLGraphicsRenderTargetsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md).  |
| struct | **[MLGraphicsRenderTargetsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md)** <br></br>The complete definition of all possible buffered entries along with associated metadata.  |
| struct | **[MLGraphicsVirtualCameraInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md)** <br></br>The per virtual camera information as defined in #MLGraphicsVirtualCameraInfoArray.  |
| struct | **[MLGraphicsFrameInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md)** <br></br>Information about the current render frame populated by [MLGraphicsBeginFrameEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex). This struct must be populated by calling [MLGraphicsFrameInfoInit()](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeinfoinit) before being used in a call to [MLGraphicsBeginFrameEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex).  |
| struct | **[MLGraphicsClientPerformanceInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md)** <br></br>Performance timing information for the graphics client.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLGraphicsOptions](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md) | **[MLGraphicsOptions](/api-ref/api/Modules/group___graphics/group___graphics.md#struct-mlgraphicsoptions)** <br></br>The graphics options provided for client creation.  |
| typedef struct [MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) | **[MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/group___graphics.md#struct-mlgraphicsframeparamsex)** <br></br>The frame parameters requested for the next rendered frame.  |
| typedef struct [MLGraphicsClipExtentsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info.md) | **[MLGraphicsClipExtentsInfo](/api-ref/api/Modules/group___graphics/group___graphics.md#struct-mlgraphicsclipextentsinfo)** <br></br>The static clip extents defined for all possible eye positions.  |
| typedef struct [MLGraphicsClipExtentsParams](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_params.md) | **[MLGraphicsClipExtentsParams](/api-ref/api/Modules/group___graphics/group___graphics.md#struct-mlgraphicsclipextentsparams)** <br></br>The clip extents parameters.  |
| typedef struct [MLGraphicsClipExtentsInfoArrayEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md) | **[MLGraphicsClipExtentsInfoArrayEx](/api-ref/api/Modules/group___graphics/group___graphics.md#struct-mlgraphicsclipextentsinfoarrayex)** <br></br>The clip extents array returned from [MLGraphicsGetClipExtentsEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclipextentsex).  |
| typedef struct [MLGraphicsRenderTarget](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md) | **[MLGraphicsRenderTarget](/api-ref/api/Modules/group___graphics/group___graphics.md#struct-mlgraphicsrendertarget)** <br></br>Definition of a single render target defined in [MLGraphicsRenderBufferInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md).  |
| typedef struct [MLGraphicsRenderBufferInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md) | **[MLGraphicsRenderBufferInfo](/api-ref/api/Modules/group___graphics/group___graphics.md#struct-mlgraphicsrenderbufferinfo)** <br></br>Definition of a single buffer entry for all virtual cameras as defined in [MLGraphicsRenderTargetsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md).  |
| typedef struct [MLGraphicsRenderTargetsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md) | **[MLGraphicsRenderTargetsInfo](/api-ref/api/Modules/group___graphics/group___graphics.md#struct-mlgraphicsrendertargetsinfo)** <br></br>The complete definition of all possible buffered entries along with associated metadata.  |
| typedef struct [MLGraphicsVirtualCameraInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md) | **[MLGraphicsVirtualCameraInfo](/api-ref/api/Modules/group___graphics/group___graphics.md#struct-mlgraphicsvirtualcamerainfo)** <br></br>The per virtual camera information as defined in #MLGraphicsVirtualCameraInfoArray.  |
| typedef struct [MLGraphicsFrameInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md) | **[MLGraphicsFrameInfo](/api-ref/api/Modules/group___graphics/group___graphics.md#struct-mlgraphicsframeinfo)** <br></br>Information about the current render frame populated by [MLGraphicsBeginFrameEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex). This struct must be populated by calling [MLGraphicsFrameInfoInit()](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeinfoinit) before being used in a call to [MLGraphicsBeginFrameEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex).  |
| typedef struct [MLGraphicsClientPerformanceInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md) | **[MLGraphicsClientPerformanceInfo](/api-ref/api/Modules/group___graphics/group___graphics.md#struct-mlgraphicsclientperformanceinfo)** <br></br>Performance timing information for the graphics client.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLGraphicsFlags](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsflags)** <br></br> { <br></br>[MLGraphicsFlags_NoDepth](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsflags-nodepth) = 1 << 0,<br></br> [MLGraphicsFlags_DebugMode](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsflags-debugmode) = 1 << 2,<br></br> [MLGraphicsFlags_Headlock](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsflags-headlock) = 1 << 3,<br></br> [MLGraphicsFlags_Default](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsflags-default) = 0,<br></br> [MLGraphicsFlags_Ensure32Bits](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>The graphics flags used as part of client creation.  |
| enum | **[MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat)** <br></br> { <br></br>[MLSurfaceFormat_Unknown](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat-unknown) = 0,<br></br> [MLSurfaceFormat_RGBA8UNorm](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat-rgba8unorm),<br></br> [MLSurfaceFormat_RGBA8UNormSRGB](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat-rgba8unormsrgb),<br></br> [MLSurfaceFormat_RGB10A2UNorm](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat-rgb10a2unorm),<br></br> [MLSurfaceFormat_RGBA16Float](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat-rgba16float),<br></br> [MLSurfaceFormat_D32Float](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat-d32float),<br></br> [MLSurfaceFormat_D24NormS8](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat-d24norms8),<br></br> [MLSurfaceFormat_D32FloatS8](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat-d32floats8),<br></br> [MLSurfaceFormat_Ensure32Bits](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>The definition of the supported color/depth surface formats.  |
| enum | **[MLGraphicsVirtualCameraName](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsvirtualcameraname)** <br></br> { <br></br>[MLGraphicsVirtualCameraName_Combined](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsvirtualcameraname-combined) = -1,<br></br> [MLGraphicsVirtualCameraName_Left](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsvirtualcameraname-left) = 0,<br></br> [MLGraphicsVirtualCameraName_Right](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsvirtualcameraname-right),<br></br> [MLGraphicsVirtualCameraName_Count](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsvirtualcameraname-count),<br></br> [MLGraphicsVirtualCameraName_Ensure32Bits](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsvirtualcameraname-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>The metadata name associated with each virtual camera.  |
| enum | **[Anonymous Enum 10](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-anonymous-enum-10)** <br></br> { <br></br>[MLGraphics_BufferCount](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphics-buffercount) = 3<br></br>} |
| enum | **[MLGraphicsProjectionType](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsprojectiontype)** <br></br> { <br></br>[MLGraphicsProjectionType_SignedZ](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsprojectiontype-signedz) = 0,<br></br> [MLGraphicsProjectionType_ReversedInfiniteZ](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsprojectiontype-reversedinfinitez) = 1,<br></br> [MLGraphicsProjectionType_UnsignedZ](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsprojectiontype-unsignedz) = 2,<br></br> [MLGraphicsProjectionType_Ensure32Bits](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsprojectiontype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Defines the requested projection matrix model for rendering.  |
| enum | **[MLGraphicsEnvironmentBlendMode](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsenvironmentblendmode)** <br></br> { <br></br>[MLGraphicsEnvironmentBlendMode_Additive](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsenvironmentblendmode-additive) = 0,<br></br> [MLGraphicsEnvironmentBlendMode_Alpha_Blend](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsenvironmentblendmode-alpha-blend) = 1,<br></br> [MLGraphicsEnvironmentBlendMode_Ensure32Bits](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsenvironmentblendmode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Defines how the final frame will be blended with environment.  |
| enum | **[Anonymous Enum 11](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-anonymous-enum-11)** <br></br> { <br></br>[MLGraphicsBlobCache_DefaultMaxEntryBytes](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsblobcache-defaultmaxentrybytes) = 512 * 1024,<br></br> [MLGraphicsBlobCache_DefaultMaxTotalBytes](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsblobcache-defaultmaxtotalbytes) = 8 * 1024 * 1024<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLGraphicsFrameParamsExInit](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeparamsexinit)**([MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) * inout_frame_params)<br></br>Initializes a [MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) with the default parameters.  |
| void | **[MLGraphicsClipExtentsParamsInit](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsclipextentsparamsinit)**([MLGraphicsClipExtentsParams](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_params.md) * inout_params)<br></br>Initializes default values for [MLGraphicsClipExtentsParams](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_params.md).  |
| void | **[MLGraphicsClipExtentsInfoArrayExInit](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsclipextentsinfoarrayexinit)**([MLGraphicsClipExtentsInfoArrayEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md) * inout_array)<br></br>Initializes default values for [MLGraphicsClipExtentsInfoArrayEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md).  |
| void | **[MLGraphicsFrameInfoInit](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeinfoinit)**([MLGraphicsFrameInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md) * inout_frame_info)<br></br>Initializes default values for [MLGraphicsFrameInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsEnableBlobCacheGL](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsenableblobcachegl)**(const char * filename, uint32_t max_entry_bytes, uint32_t max_total_bytes)<br></br>Enable shader blob cache for OpenGL.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsCreateClientGL](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicscreateclientgl)**(const [MLGraphicsOptions](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md) * options, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) opengl_context, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_graphics_client)<br></br>Create the GL/GLES graphics client.  |
| uint32_t | **[MLGraphicsGLFormatFromMLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#uint32-t-mlgraphicsglformatfrommlsurfaceformat)**([MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat) format)<br></br>Convert MLSurfaceFormat to OpenGL internal format.  |
| [MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat) | **[MLGraphicsMLSurfaceFormatFromGLFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#mlsurfaceformat-mlgraphicsmlsurfaceformatfromglformat)**(uint32_t format)<br></br>Convert OpenGL internal format to MLSurfaceFormat.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsCreateClientVk](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicscreateclientvk)**(const [MLGraphicsOptions](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md) * options, const VkInstance vulkan_instance, const VkPhysicalDevice vulkan_physical_device, const VkDevice vulkan_logical_device, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_graphics_client)<br></br>Create the VK graphics client.  |
| VkFormat | **[MLGraphicsVkFormatFromMLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#vkformat-mlgraphicsvkformatfrommlsurfaceformat)**(const [MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat) format)<br></br>Convert MLSurfaceFormat to VkFormat.  |
| [MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat) | **[MLGraphicsMLSurfaceFormatFromVkFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#mlsurfaceformat-mlgraphicsmlsurfaceformatfromvkformat)**(const VkFormat format)<br></br>Convert VkFormat to MLSurfaceFormat.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsDestroyClient](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsdestroyclient)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * inout_graphics_client)<br></br>Destroy a GL/GLES or VK client.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) graphics_client, const [MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) * params, [MLGraphicsFrameInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md) * out_frame_info)<br></br>Request to begin rendering a new frame in the graphics system.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsSignalSyncObjectGL](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicssignalsyncobjectgl)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) graphics_client, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) sync_object)<br></br>Signal the sync object provided for each virtual camera for GL/GLES clients.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsGetClipExtentsEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclipextentsex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) graphics_client, const [MLGraphicsClipExtentsParams](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_params.md) * params, [MLGraphicsClipExtentsInfoArrayEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md) * out_array)<br></br>Get the conservative clip extents information for each virtual camera.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsGetRenderTargets](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetrendertargets)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) graphics_client, [MLGraphicsRenderTargetsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md) * out_targets)<br></br>Get a list of all buffered entries.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsEndFrame](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsendframe)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) graphics_client, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Submit a completed frame to the graphics system.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLGraphicsGetClientPerformanceInfo](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclientperformanceinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) graphics_client, [MLGraphicsClientPerformanceInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md) * out_info)<br></br>Obtain latest performance metrics for the client.  |

## Detailed Description

The APIs for the graphics system. 


All timing, alignment, etc. of the CPU domain of the client with the asynchronous composition is also handled automatically by the API through the blocking behavior in [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex).

Note : In the current definition of the API, perception must have already been started prior to interacting with the graphics system and the perception lifetime is managed separate of the graphics system. 




**Shared Object:**
  * graphics.magicleap*




-----------
## Enums Documentation

### MLGraphicsFlags {#enums-mlgraphicsflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGraphicsFlags_NoDepth |  1 << 0| The client will not provide a depth buffer to the graphics system as part of rendering. Therefore the handle returned for all depth related resources from the graphics APIs will be invalid. |
| MLGraphicsFlags_DebugMode |  1 << 2| Create a debug client with a debug configuration that provides extended logcat error logging. Useful to debug failures in API calls to the graphics system. |
| MLGraphicsFlags_Headlock |  1 << 3| The client will lock all the content to the user's head pose. When enabled all of the content rendered by the app and system notifications will be in head locked mode. Use this mode with caution. |
| MLGraphicsFlags_Default |  0| When #graphics_flags is set to default, the client configuration returned is the default configuration (color/depth, origin lower left, non-debug, no headlock). |
| MLGraphicsFlags_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



The graphics flags used as part of client creation. 

The flags are used to define the #graphics_flags member of the [MLGraphicsOptions](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md) as part of the definition to create the client. 





-----------

### MLSurfaceFormat {#enums-mlsurfaceformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLSurfaceFormat_Unknown |  0| Invalid format for color/depth. |
| MLSurfaceFormat_RGBA8UNorm | | 32bit linear color format (RGBA8). |
| MLSurfaceFormat_RGBA8UNormSRGB | | Gamma 2.2 32bit sRGB color format (RGBA8). Clients requesting this format are required to encode the final color into this surface as defined by the IEC 61966-2-1 specification. |
| MLSurfaceFormat_RGB10A2UNorm | | 32bit linear color format (R10G10B10A2). |
| MLSurfaceFormat_RGBA16Float | | 64bit linear color format (R16G16B16A16). |
| MLSurfaceFormat_D32Float | | 32bit floating point depth buffer (D32F). |
| MLSurfaceFormat_D24NormS8 | | 24bit linear depth format with 8bit stencil (D24S8). |
| MLSurfaceFormat_D32FloatS8 | | 32bit floating point depth format with 8bit stencil (D32FS8). |
| MLSurfaceFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



The definition of the supported color/depth surface formats. 

Formats that can be specified for the color_format and depth_format in [MLGraphicsOptions](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md). For the best quality the recommended color format is [MLSurfaceFormat_RGBA8UNormSRGB](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat-rgba8unormsrgb), and for depth (when defined) either [MLSurfaceFormat_D32Float](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat-d32float) or [MLSurfaceFormat_D32FloatS8](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat-d32floats8). 





-----------

### MLGraphicsVirtualCameraName {#enums-mlgraphicsvirtualcameraname}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGraphicsVirtualCameraName_Combined |  -1| Name of the combined camera, the union of all virtual cameras. |
| MLGraphicsVirtualCameraName_Left |  0| Name of virtual camera for left display. |
| MLGraphicsVirtualCameraName_Right | | Name of virtual camera for right display. |
| MLGraphicsVirtualCameraName_Count | | The maximum number of render virtual cameras. |
| MLGraphicsVirtualCameraName_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



The metadata name associated with each virtual camera. 

APIs within the graphics system will return information specific to a single virtual camera or both. The metadata name informs the client how to correlate the outputs of the API to a specific camera or both cameras. 





-----------

### Anonymous Enum 10 {#enums-anonymous-enum-10}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGraphics_BufferCount |  3| The number of buffered entries for each virtual camera. |




Definitions for Graphics system maximums. 





-----------

### MLGraphicsProjectionType {#enums-mlgraphicsprojectiontype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGraphicsProjectionType_SignedZ |  0| Projection model with signed Z. |
| MLGraphicsProjectionType_ReversedInfiniteZ |  1| Projection model reversed infinite Z. |
| MLGraphicsProjectionType_UnsignedZ |  2| Projection model with unsigned Z. |
| MLGraphicsProjectionType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Defines the requested projection matrix model for rendering. 

Provided as part of the [MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md), defines the requested projection model for the intrinsic definition returned for each virtual camera from [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex).

The signed Z projection model is optimized for OpenGL use and transforms points into a left-hand, right-up-forward, Z range -1 (near) to 1 (far) projected coordinate space.

The reverse infinite Z projection model maps the Z range from 1 (near) to 0 (infinity).

Vulkan clients should use the unsigned Z projection model to ensure that NDC points end up in Z range 0 (near) to 1 (far). 





-----------

### MLGraphicsEnvironmentBlendMode {#enums-mlgraphicsenvironmentblendmode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGraphicsEnvironmentBlendMode_Additive |  0| Ignore frame alpha and prohibit generation of segmented dimmer. |
| MLGraphicsEnvironmentBlendMode_Alpha_Blend |  1| Use the resulting alpha after compostion potentially generating dimmer. |
| MLGraphicsEnvironmentBlendMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Defines how the final frame will be blended with environment. 

For now only used for controlling the segmented dimmer behavior. 





-----------

### Anonymous Enum 11 {#enums-anonymous-enum-11}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLGraphicsBlobCache_DefaultMaxEntryBytes |  512 * 1024| |
| MLGraphicsBlobCache_DefaultMaxTotalBytes |  8 * 1024 * 1024| |




Default values suitable for use with [MLGraphicsEnableBlobCacheGL()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsenableblobcachegl). 





-----------


## Types Documentation

### MLGraphicsOptions {#struct-mlgraphicsoptions}

```cpp
typedef struct MLGraphicsOptions MLGraphicsOptions;
```

The graphics options provided for client creation. 

[MLGraphicsOptions](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md) defines the requested client configuration for creating GL/GLES or VK clients. 



[More Info](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md)



-----------

### MLGraphicsFrameParamsEx {#struct-mlgraphicsframeparamsex}

```cpp
typedef struct MLGraphicsFrameParamsEx MLGraphicsFrameParamsEx;
```

The frame parameters requested for the next rendered frame. 

The parameters defined by [MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) are supplied to [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex) from the client to define the requested characteristics of the next rendered frame.

This structure must be initialized by calling [MLGraphicsFrameParamsExInit()](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeparamsexinit) before use.



[More Info](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md)


**API Level:**
  * 21




-----------

### MLGraphicsClipExtentsInfo {#struct-mlgraphicsclipextentsinfo}

```cpp
typedef struct MLGraphicsClipExtentsInfo MLGraphicsClipExtentsInfo;
```

The static clip extents defined for all possible eye positions. 

Defines the conservative clip extents for the camera name that can be used for early update frustum culling in the client update path (prior to calling [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex)).




Note: The client will need to obtain a headpose to combine with the provided matrices (transform and projection) to define the frustum. The general definition for camera from world (for the specified camera name) is MATprojection * inv(MATtransform) * inv(MATheadpose) for RHS multiplication. 



[More Info](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info.md)



-----------

### MLGraphicsClipExtentsParams {#struct-mlgraphicsclipextentsparams}

```cpp
typedef struct MLGraphicsClipExtentsParams MLGraphicsClipExtentsParams;
```

The clip extents parameters. 

The parameters defined by [MLGraphicsClipExtentsParams](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_params.md) are supplied to [MLGraphicsGetClipExtentsEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclipextentsex) from the client to define the requested characteristics of the clip extents.



[More Info](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_params.md)


**API Level:**
  * 4




-----------

### MLGraphicsClipExtentsInfoArrayEx {#struct-mlgraphicsclipextentsinfoarrayex}

```cpp
typedef struct MLGraphicsClipExtentsInfoArrayEx MLGraphicsClipExtentsInfoArrayEx;
```

The clip extents array returned from [MLGraphicsGetClipExtentsEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclipextentsex). 

The clip extents array provides the conservative clip extents per metadata camera as defined by [MLGraphicsClipExtentsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info.md).

This structure must be initialized by calling [MLGraphicsClipExtentsInfoArrayExInit()](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsclipextentsinfoarrayexinit) before use.



[More Info](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md)


**API Level:**
  * 4




-----------

### MLGraphicsRenderTarget {#struct-mlgraphicsrendertarget}

```cpp
typedef struct MLGraphicsRenderTarget MLGraphicsRenderTarget;
```

Definition of a single render target defined in [MLGraphicsRenderBufferInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md). 

Each render target defines one of the buffered entries color/depth surfaces (with maximum count defined by [MLGraphics_BufferCount](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphics-buffercount)). Clients can assume that the handle provided here will be in the list of handles returned from [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex). 



[More Info](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md)



-----------

### MLGraphicsRenderBufferInfo {#struct-mlgraphicsrenderbufferinfo}

```cpp
typedef struct MLGraphicsRenderBufferInfo MLGraphicsRenderBufferInfo;
```

Definition of a single buffer entry for all virtual cameras as defined in [MLGraphicsRenderTargetsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md). 

Each buffer entry can contain a color / depth target and the target is valid if the handle != 0.

Note : When the client specifies the [MLGraphicsFlags_NoDepth](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsflags-nodepth) flag as part of client creation the depth targets will always be 0. 



[More Info](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md)



-----------

### MLGraphicsRenderTargetsInfo {#struct-mlgraphicsrendertargetsinfo}

```cpp
typedef struct MLGraphicsRenderTargetsInfo MLGraphicsRenderTargetsInfo;
```

The complete definition of all possible buffered entries along with associated metadata. 

Statically defined after successfully creating the client, the [MLGraphicsRenderTargetsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md) provides the definition of all of the buffered entries along with the global metadata. The client can assume that once queried the definition will not change and therefore does not need to be queried more than once at runtime. 



[More Info](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md)



-----------

### MLGraphicsVirtualCameraInfo {#struct-mlgraphicsvirtualcamerainfo}

```cpp
typedef struct MLGraphicsVirtualCameraInfo MLGraphicsVirtualCameraInfo;
```

The per virtual camera information as defined in #MLGraphicsVirtualCameraInfoArray. 

For each virtual camera the client is provided the exact definition of the camera properties along with the matrices needed to construct the full transform chain. In general the transform chain for each virtual camera is defined as MATprojection * inv(MATtransform) for RHS multiplication.




Note: The projection model is asymmetric and clients should not assume any of the symmetric properties of projection. Additionally both the transform and projection will change per frame and cannot be assumed to be static. 



[More Info](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md)



-----------

### MLGraphicsFrameInfo {#struct-mlgraphicsframeinfo}

```cpp
typedef struct MLGraphicsFrameInfo MLGraphicsFrameInfo;
```

Information about the current render frame populated by [MLGraphicsBeginFrameEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex). This struct must be populated by calling [MLGraphicsFrameInfoInit()](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeinfoinit) before being used in a call to [MLGraphicsBeginFrameEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex). 



[More Info](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md)


**API Level:**
  * 27




-----------

### MLGraphicsClientPerformanceInfo {#struct-mlgraphicsclientperformanceinfo}

```cpp
typedef struct MLGraphicsClientPerformanceInfo MLGraphicsClientPerformanceInfo;
```

Performance timing information for the graphics client. 

Populated by [MLGraphicsGetClientPerformanceInfo](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclientperformanceinfo), the performance information contains all metrics tracked by the graphics system for the specified client. Metrics are calculated using a sliding window and can be used to adjust the client workload characteristics (i.e. scale, fidelity, etc).




Note: The internal metrics are also provided, informing the client of both the CPU and GPU cost of the internal operations of the graphics system (in the client process). 



[More Info](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md)



-----------


## Functions Documentation

### MLGraphicsFrameParamsExInit {#void-mlgraphicsframeparamsexinit}

```cpp
static inline void MLGraphicsFrameParamsExInit(
    MLGraphicsFrameParamsEx * inout_frame_params
)
```

Initializes a [MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) with the default parameters. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) * |inout_frame_params|The object to initialize with default settings.|
**Required Permissions**:

  * None 





**API Level:**
  * 22




-----------

### MLGraphicsClipExtentsParamsInit {#void-mlgraphicsclipextentsparamsinit}

```cpp
static inline void MLGraphicsClipExtentsParamsInit(
    MLGraphicsClipExtentsParams * inout_params
)
```

Initializes default values for [MLGraphicsClipExtentsParams](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_params.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLGraphicsClipExtentsParams](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_params.md) * |inout_params|The object to initialize with default settings. |



**API Level:**
  * 4




-----------

### MLGraphicsClipExtentsInfoArrayExInit {#void-mlgraphicsclipextentsinfoarrayexinit}

```cpp
static inline void MLGraphicsClipExtentsInfoArrayExInit(
    MLGraphicsClipExtentsInfoArrayEx * inout_array
)
```

Initializes default values for [MLGraphicsClipExtentsInfoArrayEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLGraphicsClipExtentsInfoArrayEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md) * |inout_array|The object to initialize with default settings. |



**API Level:**
  * 4




-----------

### MLGraphicsFrameInfoInit {#void-mlgraphicsframeinfoinit}

```cpp
static inline void MLGraphicsFrameInfoInit(
    MLGraphicsFrameInfo * inout_frame_info
)
```

Initializes default values for [MLGraphicsFrameInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLGraphicsFrameInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md) * |inout_frame_info|The object to initialize with default settings. |



**API Level:**
  * 27




-----------

### MLGraphicsEnableBlobCacheGL {#mlresult-mlgraphicsenableblobcachegl}

```cpp
MLResult MLGraphicsEnableBlobCacheGL(
    const char * filename,
    uint32_t max_entry_bytes,
    uint32_t max_total_bytes
)
```

Enable shader blob cache for OpenGL. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |filename|Absolute path to a file to use for caching. Location must be writeable by application. |
| uint32_t |max_entry_bytes|Reserved for future use. Maximum size for a single blob entry. Currently defaults to 512KB. |
| uint32_t |max_total_bytes|Reserved for future use. Maximum total file size for the blob. Currently defaults to 8MB.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to enable blob cache due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully enabled blob cache.|
**Required Permissions**:

  * None 


OpenGL can cache & reuse shaders and other driver artifacts using a blob cache, speeding up loading & processing of shaders significantly on subseqent occurrences. This behavior persists across runs of the app as well, speeding up load times. This function is used to enable the blob caching using the specified file. The file path must be writeable by the application. The file will be created if it doesn't already exist.





-----------

### MLGraphicsCreateClientGL {#mlresult-mlgraphicscreateclientgl}

```cpp
MLResult MLGraphicsCreateClientGL(
    const MLGraphicsOptions * options,
    MLHandle opengl_context,
    MLHandle * out_graphics_client
)
```

Create the GL/GLES graphics client. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLGraphicsOptions](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md) * |options|The graphics options for resource creation. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |opengl_context|The OpenGL context to use for resource creation. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_graphics_client|The handle to the created graphics client. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to create graphics client due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created graphics client. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to create graphics client due to an unknown error.|
**Required Permissions**:

  * None 


Create a graphics client for use with GL/GLES APIs using the provided options and specified opengl context. It is required that the opengl context specified here is only bound on the thread used to render the client frame and is the same context used to render the frame using the provided information from [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex).





-----------

### MLGraphicsGLFormatFromMLSurfaceFormat {#uint32-t-mlgraphicsglformatfrommlsurfaceformat}

```cpp
uint32_t MLGraphicsGLFormatFromMLSurfaceFormat(
    MLSurfaceFormat format
)
```

Convert MLSurfaceFormat to OpenGL internal format. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat) |format|The MLSurfaceFormat to convert. |
**Required Permissions**:

  * None 




**Return**: The returned internal format.



-----------

### MLGraphicsMLSurfaceFormatFromGLFormat {#mlsurfaceformat-mlgraphicsmlsurfaceformatfromglformat}

```cpp
MLSurfaceFormat MLGraphicsMLSurfaceFormatFromGLFormat(
    uint32_t format
)
```

Convert OpenGL internal format to MLSurfaceFormat. 

**Parameters**

|  |   |   |
|--|--|--|
| uint32_t |format|The internal format to convert. |
**Required Permissions**:

  * None 




**Return**: The returned MLSurfaceFormat.



-----------

### MLGraphicsCreateClientVk {#mlresult-mlgraphicscreateclientvk}

```cpp
MLResult MLGraphicsCreateClientVk(
    const MLGraphicsOptions * options,
    const VkInstance vulkan_instance,
    const VkPhysicalDevice vulkan_physical_device,
    const VkDevice vulkan_logical_device,
    MLHandle * out_graphics_client
)
```

Create the VK graphics client. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLGraphicsOptions](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md) * |options|The graphics options for resource creation. |
| const VkInstance |vulkan_instance|The Vulkan instance used to create the physical and logical device. |
| const VkPhysicalDevice |vulkan_physical_device|The Vulkan physical device used to create the specified logical device. |
| const VkDevice |vulkan_logical_device|The Vulkan logical device to use for resource creation. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_graphics_client|The handle to the created graphics client. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to create client due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created client. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to create client due to an unknown error.|
**Required Permissions**:

  * None 


Create a graphics client for use with VK API using the provided options and specified physical and logical device. The color and depth surfaces are created internally, then exported to the application context. The initial layout of these surfaces is VK_IMAGE_LAYOUT_UNDEFINED. It is the application's responsibility to perform a layout transition of the surfaces before usage.





-----------

### MLGraphicsVkFormatFromMLSurfaceFormat {#vkformat-mlgraphicsvkformatfrommlsurfaceformat}

```cpp
VkFormat MLGraphicsVkFormatFromMLSurfaceFormat(
    const MLSurfaceFormat format
)
```

Convert MLSurfaceFormat to VkFormat. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat) |format|The MLSurfaceFormat to convert. |
**Required Permissions**:

  * None 




**Return**: The returned VkFormat.



-----------

### MLGraphicsMLSurfaceFormatFromVkFormat {#mlsurfaceformat-mlgraphicsmlsurfaceformatfromvkformat}

```cpp
MLSurfaceFormat MLGraphicsMLSurfaceFormatFromVkFormat(
    const VkFormat format
)
```

Convert VkFormat to MLSurfaceFormat. 

**Parameters**

|  |   |   |
|--|--|--|
| const VkFormat |format|The VkFormat to convert. |
**Required Permissions**:

  * None 




**Return**: The returned MLSurfaceFormat.



-----------

### MLGraphicsDestroyClient {#mlresult-mlgraphicsdestroyclient}

```cpp
MLResult MLGraphicsDestroyClient(
    MLHandle * inout_graphics_client
)
```

Destroy a GL/GLES or VK client. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |inout_graphics_client|The graphics client to destroy.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to destroy client due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed client. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to destroy client due to an unknown error.|
**Required Permissions**:

  * None 


Destroying the client will invalidate all resources associated with the client handle and invalidate the provided handle.





-----------

### MLGraphicsBeginFrameEx {#mlresult-mlgraphicsbeginframeex}

```cpp
MLResult MLGraphicsBeginFrameEx(
    MLHandle graphics_client,
    const MLGraphicsFrameParamsEx * params,
    MLGraphicsFrameInfo * out_frame_info
)
```

Request to begin rendering a new frame in the graphics system. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |graphics_client|The graphics client to query. |
| const [MLGraphicsFrameParamsEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) * |params|The frame parameters for the frame. |
| [MLGraphicsFrameInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md) * |out_frame_info|Information returned for use when rendering the frame. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to start frame due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully started frame. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|Failed to start frame due to blocking timeout limit being reached. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to start frame due to an unknown error.|
**Required Permissions**:

  * None 


Called to request the start of a new render frame and should be called as close as possible to the start of rendering to minimize the motion to photon latency. Only one frame can be rendered at a time and must be submitted by providing the returned handle to [MLGraphicsEndFrame](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsendframe) prior to another call to [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex). The call to begin/end frame should be made on the render thread alone of the client. It is required that a successful call to [MLGraphicsFrameInfoInit](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeinfoinit) be made before calling [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex). Faiure to call [MLGraphicsFrameInfoInit](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeinfoinit) before calling [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex) will return a result of MLResult_NotImplemented.

Note : Calls to [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex) can and will block the calling process. There are several reasons that lead to a block, including, the client is executing faster than the defined timing requested (and the block re-aligns the client timing), the client is not yet visible in the system, and the compositor has not yet moved to the next buffered entry (i.e. wraparound cases from fast client rendering). The call to [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex) will timeout the block and return when the conditions to unblock have not been satisfied for the internal timeout period. The most common occurrence of the timeout is when the application is not currently visible.




**API Level:**
  * 22




-----------

### MLGraphicsSignalSyncObjectGL {#mlresult-mlgraphicssignalsyncobjectgl}

```cpp
MLResult MLGraphicsSignalSyncObjectGL(
    MLHandle graphics_client,
    MLHandle sync_object
)
```

Signal the sync object provided for each virtual camera for GL/GLES clients. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |graphics_client|The graphics client owning the sync object. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |sync_object|The sync object to be signaled.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to signal object due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully signaled object. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to signal object due to an unknown error.|
**Required Permissions**:

  * None 


Required for each frame, after rendering each virtual camera (or multiple if stereo rendering) to signal the sync object in order to inform the graphics system that the rendering for the camera(s) has completed. All sync objects can be signaled after rendering all cameras, but results in lower fidelity in the graphics system.

Note: Vulkan clients are required to cast the sync object to VkSemaphore and add it to the signal semaphore list when submitting the last command buffer for the virtual camera(s).





-----------

### MLGraphicsGetClipExtentsEx {#mlresult-mlgraphicsgetclipextentsex}

```cpp
MLResult MLGraphicsGetClipExtentsEx(
    MLHandle graphics_client,
    const MLGraphicsClipExtentsParams * params,
    MLGraphicsClipExtentsInfoArrayEx * out_array
)
```

Get the conservative clip extents information for each virtual camera. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |graphics_client|The graphics client to query. |
| const [MLGraphicsClipExtentsParams](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_params.md) * |params|The clip extents parameters. |
| [MLGraphicsClipExtentsInfoArrayEx](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md) * |out_array|The clip extents info array with all information required for update of each virtual camera. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain extents due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained extents. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain extents due to an unknown error.|
**Required Permissions**:

  * None 



Clients should call this function once a frame to get the most accurate clip extents.



:::caution Attention
EXPERIMENTAL.
:::



**API Level:**
  * 4




-----------

### MLGraphicsGetRenderTargets {#mlresult-mlgraphicsgetrendertargets}

```cpp
MLResult MLGraphicsGetRenderTargets(
    MLHandle graphics_client,
    MLGraphicsRenderTargetsInfo * out_targets
)
```

Get a list of all buffered entries. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |graphics_client|The graphics client to query. |
| [MLGraphicsRenderTargetsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md) * |out_targets|The render target info array. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain target due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain handle due to an unknown error.|
**Required Permissions**:

  * None 


Called after client initialization to obtain the definition of all buffered entries along with the associated metadata. Like #MLGraphicsGetClipExtents can be assumed that the output is unchanging for the lifetime of the client.





-----------

### MLGraphicsEndFrame {#mlresult-mlgraphicsendframe}

```cpp
MLResult MLGraphicsEndFrame(
    MLHandle graphics_client,
    MLHandle handle
)
```

Submit a completed frame to the graphics system. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |graphics_client|The graphics client to update. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|The handle provided from the call to MLGraphicsBeginFrameEx.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to end frame due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully ended frame. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to end frame due to an unknown error.|
**Required Permissions**:

  * None 


Submit a completed frame to the graphics system using the handle provided from [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex). Prior to submiting the frame the client must signal the sync objects provided by [MLGraphicsBeginFrameEx](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex), for GL/GLES clients with [MLGraphicsSignalSyncObjectGL](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicssignalsyncobjectgl) or for VK clients including that sync object as part of the signal semaphore list. For VK clients, the color and depth surfaces can be in any image layout when calling [MLGraphicsEndFrame](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsendframe).





-----------

### MLGraphicsGetClientPerformanceInfo {#mlresult-mlgraphicsgetclientperformanceinfo}

```cpp
MLResult MLGraphicsGetClientPerformanceInfo(
    MLHandle graphics_client,
    MLGraphicsClientPerformanceInfo * out_info
)
```

Obtain latest performance metrics for the client. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |graphics_client|The graphics client in which to query the performance. |
| [MLGraphicsClientPerformanceInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md) * |out_info|Current performance information for the client. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain client performance metrics due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained client performance metrics. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain client performance metrics due to an unknown error.|
**Required Permissions**:

  * None 


Can be called any time after the client has begun rendering frames to obtain the internally tracked performance metrics for the client and graphics system. Updated internally once per completed frame.





-----------





