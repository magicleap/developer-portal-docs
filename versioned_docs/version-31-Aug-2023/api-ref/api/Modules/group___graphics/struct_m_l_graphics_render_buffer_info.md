---
title: MLGraphicsRenderBufferInfo
summary: definition of a single buffer entry for all virtual cameras as defined in mlgraphicsrendertargetsinfo. 

---

# MLGraphicsRenderBufferInfo

**Module:** **[Graphics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md)**



Definition of a single buffer entry for all virtual cameras as defined in [MLGraphicsRenderTargetsInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md).  [More...](#detailed-description)


`#include <ml_graphics.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLGraphicsRenderTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md) | **[color](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md#mlgraphicsrendertarget-color)**  |
| [MLGraphicsRenderTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md) | **[depth](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md#mlgraphicsrendertarget-depth)**  |

## Detailed Description

```cpp
struct MLGraphicsRenderBufferInfo;
```

Definition of a single buffer entry for all virtual cameras as defined in [MLGraphicsRenderTargetsInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md). 

Each buffer entry can contain a color / depth target and the target is valid if the handle != 0.

Note : When the client specifies the [MLGraphicsFlags_NoDepth](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsflags-nodepth) flag as part of client creation the depth targets will always be 0. 





-----------
## Public Attributes Documentation

### color {#mlgraphicsrendertarget-color}

```cpp
MLGraphicsRenderTarget color;
```



| Type | Description |
|--|--|
| [MLGraphicsRenderTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md) | Definition of a single render target defined in [MLGraphicsRenderBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md).  |


The color target for this entry. 





-----------

### depth {#mlgraphicsrendertarget-depth}

```cpp
MLGraphicsRenderTarget depth;
```



| Type | Description |
|--|--|
| [MLGraphicsRenderTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md) | Definition of a single render target defined in [MLGraphicsRenderBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md).  |


The depth target for this entry. 





-----------


