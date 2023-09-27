---
title: MLGraphicsRenderTarget
summary: definition of a single render target defined in mlgraphicsrenderbufferinfo. 

---

# MLGraphicsRenderTarget

**Module:** **[Graphics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md)**



Definition of a single render target defined in [MLGraphicsRenderBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md).  [More...](#detailed-description)


`#include <ml_graphics.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md#uint32-t-width)**  |
| uint32_t | **[height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md#uint32-t-height)**  |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md#mlhandle-id)**  |
| [MLSurfaceFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat) | **[format](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md#mlsurfaceformat-format)**  |

## Detailed Description

```cpp
struct MLGraphicsRenderTarget;
```

Definition of a single render target defined in [MLGraphicsRenderBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md). 

Each render target defines one of the buffered entries color/depth surfaces (with maximum count defined by [MLGraphics_BufferCount](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphics-buffercount)). Clients can assume that the handle provided here will be in the list of handles returned from [MLGraphicsBeginFrameEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex). 





-----------
## Public Attributes Documentation

### width {#uint32-t-width}

```cpp
uint32_t width;
```


The width of the target. 





-----------

### height {#uint32-t-height}

```cpp
uint32_t height;
```


The height of the target. 





-----------

### id {#mlhandle-id}

```cpp
MLHandle id;
```



| Type | Description |
|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |


The handle (ID) of the 2D texture array, each layer represents a virtual camera. 





-----------

### format {#mlsurfaceformat-format}

```cpp
MLSurfaceFormat format;
```



| Type | Description |
|--|--|
| [MLSurfaceFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat) | The definition of the supported color/depth surface formats.  |


The surface format of the target. 





-----------


