---
title: MLGraphicsRenderTargetsInfo
summary: the complete definition of all possible buffered entries along with associated metadata. 

---

# MLGraphicsRenderTargetsInfo

**Module:** **[Graphics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md)**



The complete definition of all possible buffered entries along with associated metadata.  [More...](#detailed-description)


`#include <ml_graphics.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| float | **[min_clip](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md#float-min-clip)**  |
| float | **[max_clip](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md#float-max-clip)**  |
| uint32_t | **[num_virtual_cameras](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md#uint32-t-num-virtual-cameras)** <br></br>The total number of virtual camera for this platform, i.e (num_virtual_cameras <= [MLGraphicsVirtualCameraName_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsvirtualcameraname-count)).  |
| [MLGraphicsRenderBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md)[MLGraphics_BufferCount] | **[buffers](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md#mlgraphicsrenderbufferinfo-buffers)**  |

## Detailed Description

```cpp
struct MLGraphicsRenderTargetsInfo;
```

The complete definition of all possible buffered entries along with associated metadata. 

Statically defined after successfully creating the client, the [MLGraphicsRenderTargetsInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md) provides the definition of all of the buffered entries along with the global metadata. The client can assume that once queried the definition will not change and therefore does not need to be queried more than once at runtime. 





-----------
## Public Attributes Documentation

### min_clip {#float-min-clip}

```cpp
float min_clip;
```


The enforced minimum clip distance for rendering content, in meters. 





-----------

### max_clip {#float-max-clip}

```cpp
float max_clip;
```


The un-enforced, but recommended maximum clip distance for rendering content, in meters. 





-----------

### num_virtual_cameras {#uint32-t-num-virtual-cameras}

```cpp
uint32_t num_virtual_cameras;
```

The total number of virtual camera for this platform, i.e (num_virtual_cameras <= [MLGraphicsVirtualCameraName_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsvirtualcameraname-count)). 





-----------

### buffers {#mlgraphicsrenderbufferinfo-buffers}

```cpp
MLGraphicsRenderBufferInfo[MLGraphics_BufferCount] buffers;
```



| Type | Description |
|--|--|
| [MLGraphicsRenderBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_buffer_info.md)[MLGraphics_BufferCount] | Definition of a single buffer entry for all virtual cameras as defined in [MLGraphicsRenderTargetsInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_render_targets_info.md). [MLGraphics_BufferCount] |


The buffer entries for all virtual cameras. 





-----------


