---
title: MLMeshingVirtualCameraBufferInfo
summary: per virtual camera information needed to render depth. 

---

# MLMeshingVirtualCameraBufferInfo

**Module:** **[Graphics Utilities](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/group___graphics_utilities.md)**



Per virtual camera information needed to render depth.  [More...](#detailed-description)


`#include <ml_graphics_utils.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMat4f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_mat4f.md) | **[projection](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_virtual_camera_buffer_info.md#mlmat4f-projection)**  |
| [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) | **[transform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics_utilities/struct_m_l_meshing_virtual_camera_buffer_info.md#mltransform-transform)**  |

## Detailed Description

```cpp
struct MLMeshingVirtualCameraBufferInfo;
```

Per virtual camera information needed to render depth. 



:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal.
:::



-----------
## Public Attributes Documentation

### projection {#mlmat4f-projection}

```cpp
MLMat4f projection;
```


The projection matrix for the camera. 





-----------

### transform {#mltransform-transform}

```cpp
MLTransform transform;
```


The local space (relative to world) camera transform needed to render content, inverse is view matrix. 





-----------


