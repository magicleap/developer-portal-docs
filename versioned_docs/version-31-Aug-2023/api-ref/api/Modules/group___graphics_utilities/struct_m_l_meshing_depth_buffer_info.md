---
title: MLMeshingDepthBufferInfo
summary: to be passed to populatedepth. 

---

# MLMeshingDepthBufferInfo

**Module:** **[Graphics Utilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md)**



To be passed to PopulateDepth.  [More...](#detailed-description)


`#include <ml_graphics_utils.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[flags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md#uint32-t-flags)**  |
| uint32_t | **[buffer_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md#uint32-t-buffer-count)**  |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[color_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md#mlhandle-color-id)** <br></br>The handle (ID) of the color surface to render to for the buffer. Expects handle of a Texture2d Array [DEBUG_ONLY].  |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[depth_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md#mlhandle-depth-id)**  |
| [MLRectf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_rectf.md) | **[viewport](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md#mlrectf-viewport)**  |
| [MLGraphicsProjectionType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsprojectiontype) | **[projection_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md#mlgraphicsprojectiontype-projection-type)**  |
| [MLMeshingVirtualCameraBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_virtual_camera_buffer_info.md)[MLGraphicsVirtualCameraName_Count] | **[buffers](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_depth_buffer_info.md#mlmeshingvirtualcamerabufferinfo-buffers)**  |

## Detailed Description

```cpp
struct MLMeshingDepthBufferInfo;
```

To be passed to PopulateDepth. 



:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal.
:::



-----------
## Public Attributes Documentation

### flags {#uint32-t-flags}

```cpp
uint32_t flags;
```


Optional flags for Populate Depth. 





-----------

### buffer_count {#uint32-t-buffer-count}

```cpp
uint32_t buffer_count;
```


The number of buffers to render to for the frame. 





-----------

### color_id {#mlhandle-color-id}

```cpp
MLHandle color_id;
```

The handle (ID) of the color surface to render to for the buffer. Expects handle of a Texture2d Array [DEBUG_ONLY]. 


| Type | Description |
|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |






-----------

### depth_id {#mlhandle-depth-id}

```cpp
MLHandle depth_id;
```



| Type | Description |
|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |


The handle (ID) of the depth surface to render to for the buffer. Expects handle of a Texture2d Array. 





-----------

### viewport {#mlrectf-viewport}

```cpp
MLRectf viewport;
```


The origin and extents to render to for the camera. 





-----------

### projection_type {#mlgraphicsprojectiontype-projection-type}

```cpp
MLGraphicsProjectionType projection_type;
```



| Type | Description |
|--|--|
| [MLGraphicsProjectionType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsprojectiontype) | Defines the requested projection matrix model for rendering.  |


Controls use of far_clip and directionality of z in projection model. 





-----------

### buffers {#mlmeshingvirtualcamerabufferinfo-buffers}

```cpp
MLMeshingVirtualCameraBufferInfo[MLGraphicsVirtualCameraName_Count] buffers;
```



| Type | Description |
|--|--|
| [MLMeshingVirtualCameraBufferInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_virtual_camera_buffer_info.md)[MLGraphicsVirtualCameraName_Count] | Per virtual camera information needed to render depth. [MLGraphicsVirtualCameraName_Count] |


The array of buffers to render to for the frame. 





-----------


