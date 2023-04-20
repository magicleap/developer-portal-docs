---
title: MLGraphicsRenderBufferInfo
summary: definition of a single buffer entry for all virtual cameras as defined in mlgraphicsrendertargetsinfo. 

---

# MLGraphicsRenderBufferInfo

**Module:** **[Graphics](/api-ref/api/Modules/group___graphics/group___graphics.md)**



Definition of a single buffer entry for all virtual cameras as defined in [MLGraphicsRenderTargetsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md).  [More...](#detailed-description)


`#include <ml_graphics.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLGraphicsRenderTarget](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md) | **[color](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md#mlgraphicsrendertarget-color)**  |
| [MLGraphicsRenderTarget](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md) | **[depth](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md#mlgraphicsrendertarget-depth)**  |

## Detailed Description

```cpp
struct MLGraphicsRenderBufferInfo;
```

Definition of a single buffer entry for all virtual cameras as defined in [MLGraphicsRenderTargetsInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md). 

Each buffer entry can contain a color / depth target and the target is valid if the handle != 0.

Note : When the client specifies the [MLGraphicsFlags_NoDepth](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsflags-nodepth) flag as part of client creation the depth targets will always be 0. 





-----------
## Public Attributes Documentation

### color {#mlgraphicsrendertarget-color}

```cpp
MLGraphicsRenderTarget color;
```



| Type | Description |
|--|--|
| [MLGraphicsRenderTarget](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md) | Definition of a single render target defined in [MLGraphicsRenderBufferInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md).  |


The color target for this entry. 





-----------

### depth {#mlgraphicsrendertarget-depth}

```cpp
MLGraphicsRenderTarget depth;
```



| Type | Description |
|--|--|
| [MLGraphicsRenderTarget](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_target.md) | Definition of a single render target defined in [MLGraphicsRenderBufferInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md).  |


The depth target for this entry. 





-----------

