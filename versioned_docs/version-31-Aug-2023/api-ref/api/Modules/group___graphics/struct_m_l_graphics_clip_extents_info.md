---
title: MLGraphicsClipExtentsInfo
summary: the static clip extents defined for all possible eye positions. 

---

# MLGraphicsClipExtentsInfo

**Module:** **[Graphics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md)**



The static clip extents defined for all possible eye positions.  [More...](#detailed-description)


`#include <ml_graphics.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLGraphicsVirtualCameraName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsvirtualcameraname) | **[virtual_camera_name](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info.md#mlgraphicsvirtualcameraname-virtual-camera-name)**  |
| [MLMat4f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_mat4f.md) | **[projection](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info.md#mlmat4f-projection)** <br></br>The projection matrix, defined with infinite far clip plane distance. If the client is using a different projection model the matrix will need to be adjusted to match the client model prior to frustum culling.  |
| [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) | **[transform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_clip_extents_info.md#mltransform-transform)**  |

## Detailed Description

```cpp
struct MLGraphicsClipExtentsInfo;
```

The static clip extents defined for all possible eye positions. 

Defines the conservative clip extents for the camera name that can be used for early update frustum culling in the client update path (prior to calling [MLGraphicsBeginFrameEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex)).




Note: The client will need to obtain a headpose to combine with the provided matrices (transform and projection) to define the frustum. The general definition for camera from world (for the specified camera name) is MATprojection * inv(MATtransform) * inv(MATheadpose) for RHS multiplication. 





-----------
## Public Attributes Documentation

### virtual_camera_name {#mlgraphicsvirtualcameraname-virtual-camera-name}

```cpp
MLGraphicsVirtualCameraName virtual_camera_name;
```



| Type | Description |
|--|--|
| [MLGraphicsVirtualCameraName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsvirtualcameraname) | The metadata name associated with each virtual camera.  |


The virtual camera meta data name. 





-----------

### projection {#mlmat4f-projection}

```cpp
MLMat4f projection;
```

The projection matrix, defined with infinite far clip plane distance. If the client is using a different projection model the matrix will need to be adjusted to match the client model prior to frustum culling. 





-----------

### transform {#mltransform-transform}

```cpp
MLTransform transform;
```


The camera to world transform (i.e. local space relative to the head). 





-----------


