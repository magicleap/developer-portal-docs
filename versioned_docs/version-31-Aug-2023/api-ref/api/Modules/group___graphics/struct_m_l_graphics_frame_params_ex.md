---
title: MLGraphicsFrameParamsEx
summary: the frame parameters requested for the next rendered frame. 

---

# MLGraphicsFrameParamsEx

**Module:** **[Graphics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md)**



The frame parameters requested for the next rendered frame.  [More...](#detailed-description)


`#include <ml_graphics.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md#uint32-t-version)**  |
| float | **[near_clip](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md#float-near-clip)**  |
| float | **[far_clip](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md#float-far-clip)**  |
| float | **[focus_distance](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md#float-focus-distance)** <br></br>Distance, in meters, to defined focus point for the client content. The focus distance should be calculated as the positive distance to the client determined object of interest (relative to the forward vector of the Lightwear).  |
| float | **[surface_scale](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md#float-surface-scale)** <br></br>The scale factor for the render surfaces, valid range is 0.0->1.0. The viewport returned from [MLGraphicsBeginFrameEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex) will be adjusted to the closest width/height match to the request that can be supported by the graphics system.  |
| bool | **[vignette](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md#bool-vignette)**  |
| bool | **[protected_surface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md#bool-protected-surface)** <br></br>Content for this frame is protected and should not be recorded or captured outside the graphics system.  |
| [MLGraphicsProjectionType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsprojectiontype) | **[projection_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md#mlgraphicsprojectiontype-projection-type)**  |
| [MLGraphicsEnvironmentBlendMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsenvironmentblendmode) | **[blend_mode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md#mlgraphicsenvironmentblendmode-blend-mode)**  |

## Detailed Description

```cpp
struct MLGraphicsFrameParamsEx;
```

The frame parameters requested for the next rendered frame. 

The parameters defined by [MLGraphicsFrameParamsEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex.md) are supplied to [MLGraphicsBeginFrameEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex) from the client to define the requested characteristics of the next rendered frame.

This structure must be initialized by calling [MLGraphicsFrameParamsExInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeparamsexinit) before use.




**API Level:**
  * 21




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Struct API version. 





-----------

### near_clip {#float-near-clip}

```cpp
float near_clip;
```


Requested near clip plane distance in meters. 





-----------

### far_clip {#float-far-clip}

```cpp
float far_clip;
```


Far clipping plane distance in meters. 





-----------

### focus_distance {#float-focus-distance}

```cpp
float focus_distance;
```

Distance, in meters, to defined focus point for the client content. The focus distance should be calculated as the positive distance to the client determined object of interest (relative to the forward vector of the Lightwear). 



:::note
Note that 0.0 is an invalid value. The platform will attempt to provide default values but setting to 0.0 is strongly discouraged. 
:::



-----------

### surface_scale {#float-surface-scale}

```cpp
float surface_scale;
```

The scale factor for the render surfaces, valid range is 0.0->1.0. The viewport returned from [MLGraphicsBeginFrameEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex) will be adjusted to the closest width/height match to the request that can be supported by the graphics system. 





-----------

### vignette {#bool-vignette}

```cpp
bool vignette;
```


Enable the platform level vignette for this frame. 





-----------

### protected_surface {#bool-protected-surface}

```cpp
bool protected_surface;
```

Content for this frame is protected and should not be recorded or captured outside the graphics system. 





-----------

### projection_type {#mlgraphicsprojectiontype-projection-type}

```cpp
MLGraphicsProjectionType projection_type;
```



| Type | Description |
|--|--|
| [MLGraphicsProjectionType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsprojectiontype) | Defines the requested projection matrix model for rendering.  |


Requested projection model for rendering. 





-----------

### blend_mode {#mlgraphicsenvironmentblendmode-blend-mode}

```cpp
MLGraphicsEnvironmentBlendMode blend_mode;
```



| Type | Description |
|--|--|
| [MLGraphicsEnvironmentBlendMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsenvironmentblendmode) | Defines how the final frame will be blended with environment.  |


Requested blend mode. 





-----------


