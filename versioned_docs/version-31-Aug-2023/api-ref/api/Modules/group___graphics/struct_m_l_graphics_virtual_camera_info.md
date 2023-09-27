---
title: MLGraphicsVirtualCameraInfo
summary: the per virtual camera information as defined in #mlgraphicsvirtualcamerainfoarray. 

---

# MLGraphicsVirtualCameraInfo

**Module:** **[Graphics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md)**



The per virtual camera information as defined in #MLGraphicsVirtualCameraInfoArray.  [More...](#detailed-description)


`#include <ml_graphics.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| float | **[left_half_angle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md#float-left-half-angle)**  |
| float | **[right_half_angle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md#float-right-half-angle)**  |
| float | **[top_half_angle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md#float-top-half-angle)**  |
| float | **[bottom_half_angle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md#float-bottom-half-angle)**  |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[sync_object](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md#mlhandle-sync-object)** <br></br>The handle of the sync object to signal after submitting all GPU work for the virtual camera.  |
| [MLMat4f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_mat4f.md) | **[projection](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md#mlmat4f-projection)**  |
| [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) | **[transform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md#mltransform-transform)** <br></br>The local space (relative to world) camera transform needed to render content, inverse is view matrix.  |
| [MLGraphicsVirtualCameraName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsvirtualcameraname) | **[virtual_camera_name](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md#mlgraphicsvirtualcameraname-virtual-camera-name)**  |

## Detailed Description

```cpp
struct MLGraphicsVirtualCameraInfo;
```

The per virtual camera information as defined in #MLGraphicsVirtualCameraInfoArray. 

For each virtual camera the client is provided the exact definition of the camera properties along with the matrices needed to construct the full transform chain. In general the transform chain for each virtual camera is defined as MATprojection * inv(MATtransform) for RHS multiplication.




Note: The projection model is asymmetric and clients should not assume any of the symmetric properties of projection. Additionally both the transform and projection will change per frame and cannot be assumed to be static. 





-----------
## Public Attributes Documentation

### left_half_angle {#float-left-half-angle}

```cpp
float left_half_angle;
```


The FOV left half angle, in radians. 





-----------

### right_half_angle {#float-right-half-angle}

```cpp
float right_half_angle;
```


The FOV right half angle, in radians. 





-----------

### top_half_angle {#float-top-half-angle}

```cpp
float top_half_angle;
```


The FOV top half angle, in radians. 





-----------

### bottom_half_angle {#float-bottom-half-angle}

```cpp
float bottom_half_angle;
```


The FOV bottom half angle, in radians. 





-----------

### sync_object {#mlhandle-sync-object}

```cpp
MLHandle sync_object;
```

The handle of the sync object to signal after submitting all GPU work for the virtual camera. 


| Type | Description |
|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |






-----------

### projection {#mlmat4f-projection}

```cpp
MLMat4f projection;
```


The projection matrix for the virtual camera. 





-----------

### transform {#mltransform-transform}

```cpp
MLTransform transform;
```

The local space (relative to world) camera transform needed to render content, inverse is view matrix. 





-----------

### virtual_camera_name {#mlgraphicsvirtualcameraname-virtual-camera-name}

```cpp
MLGraphicsVirtualCameraName virtual_camera_name;
```



| Type | Description |
|--|--|
| [MLGraphicsVirtualCameraName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#enums-mlgraphicsvirtualcameraname) | The metadata name associated with each virtual camera.  |


The name of the virtual camera. 





-----------


