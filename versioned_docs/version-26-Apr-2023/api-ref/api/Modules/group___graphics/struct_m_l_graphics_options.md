---
title: MLGraphicsOptions
summary: the graphics options provided for client creation. 

---

# MLGraphicsOptions

**Module:** **[Graphics](/api-ref/api/Modules/group___graphics/group___graphics.md)**



The graphics options provided for client creation.  [More...](#detailed-description)


`#include <ml_graphics.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[graphics_flags](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md#uint32-t-graphics-flags)**  |
| [MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat) | **[color_format](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md#mlsurfaceformat-color-format)**  |
| [MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat) | **[depth_format](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md#mlsurfaceformat-depth-format)**  |

## Detailed Description

```cpp
struct MLGraphicsOptions;
```

The graphics options provided for client creation. 

[MLGraphicsOptions](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_options.md) defines the requested client configuration for creating GL/GLES or VK clients. 





-----------
## Public Attributes Documentation

### graphics_flags {#uint32-t-graphics-flags}

```cpp
uint32_t graphics_flags;
```


The combined graphics flags, as defined by [MLGraphicsFlags](/api-ref/api/Modules/group___graphics/group___graphics.md#enum-mlgraphicsflags). 





-----------

### color_format {#mlsurfaceformat-color-format}

```cpp
MLSurfaceFormat color_format;
```



| Type | Description |
|--|--|
| [MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat) | The definition of the supported color/depth surface formats.  |


The color surface format, defined in [MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enum-mlsurfaceformat). 





-----------

### depth_format {#mlsurfaceformat-depth-format}

```cpp
MLSurfaceFormat depth_format;
```



| Type | Description |
|--|--|
| [MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlsurfaceformat) | The definition of the supported color/depth surface formats.  |


The depth surface format, defined in [MLSurfaceFormat](/api-ref/api/Modules/group___graphics/group___graphics.md#enum-mlsurfaceformat). 





-----------

