---
title: MLGraphicsClipExtentsInfoArrayEx
summary: the clip extents array returned from mlgraphicsgetclipextentsex. 

---

# MLGraphicsClipExtentsInfoArrayEx

**Module:** **[Graphics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md)**



The clip extents array returned from [MLGraphicsGetClipExtentsEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclipextentsex).  [More...](#detailed-description)


`#include <ml_graphics.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md#uint32-t-version)**  |
| uint32_t | **[num_virtual_cameras](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md#uint32-t-num-virtual-cameras)**  |
| [MLGraphicsClipExtentsInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info.md) | **[full_extents](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md#mlgraphicsclipextentsinfo-full-extents)** <br></br>The combined extents for all the virtual cameras, can be used for conservative frustum culling of all visible content defined by the union of what is visible from all of the defined virtual cameras.  |
| [MLGraphicsClipExtentsInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info.md)[MLGraphicsVirtualCameraName_Count] | **[virtual_camera_extents](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info_array_ex.md#mlgraphicsclipextentsinfo-virtual-camera-extents)**  |

## Detailed Description

```cpp
struct MLGraphicsClipExtentsInfoArrayEx;
```

The clip extents array returned from [MLGraphicsGetClipExtentsEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclipextentsex). 

The clip extents array provides the conservative clip extents per metadata camera as defined by [MLGraphicsClipExtentsInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info.md).

This structure must be initialized by calling [MLGraphicsClipExtentsInfoArrayExInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsclipextentsinfoarrayexinit) before use.




**API Level:**
  * 4




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Struct API version. 





-----------

### num_virtual_cameras {#uint32-t-num-virtual-cameras}

```cpp
uint32_t num_virtual_cameras;
```


The number of virtual cameras. 





-----------

### full_extents {#mlgraphicsclipextentsinfo-full-extents}

```cpp
MLGraphicsClipExtentsInfo full_extents;
```

The combined extents for all the virtual cameras, can be used for conservative frustum culling of all visible content defined by the union of what is visible from all of the defined virtual cameras. 


| Type | Description |
|--|--|
| [MLGraphicsClipExtentsInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info.md) | The static clip extents defined for all possible eye positions.  |






-----------

### virtual_camera_extents {#mlgraphicsclipextentsinfo-virtual-camera-extents}

```cpp
MLGraphicsClipExtentsInfo[MLGraphicsVirtualCameraName_Count] virtual_camera_extents;
```



| Type | Description |
|--|--|
| [MLGraphicsClipExtentsInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info.md)[MLGraphicsVirtualCameraName_Count] | The static clip extents defined for all possible eye positions. [MLGraphicsVirtualCameraName_Count] |


The per virtual camera clip extents. 





-----------


