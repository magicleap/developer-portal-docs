---
title: MLPlane

---

# MLPlane

**Module:** **[Planes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/group___planes.md)**



 [More...](#detailed-description)


`#include <ml_planes.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[position](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md#mlvec3f-position)**  |
| [MLQuaternionf](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) | **[rotation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md#mlquaternionf-rotation)**  |
| float | **[width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md#float-width)**  |
| float | **[height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md#float-height)**  |
| uint32_t | **[flags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md#uint32-t-flags)**  |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___planes/struct_m_l_plane.md#mlhandle-id)** <br></br>Plane ID. All inner planes within an outer plane will have the same ID (outer plane's ID). These IDs are persistent across plane queries unless a map merge occurs. On a map merge, IDs could be different.  |

## Detailed Description

```cpp
struct MLPlane;
```


A plane with width and height. 





-----------
## Public Attributes Documentation

### position {#mlvec3f-position}

```cpp
MLVec3f position;
```


Plane center. 





-----------

### rotation {#mlquaternionf-rotation}

```cpp
MLQuaternionf rotation;
```


Plane rotation. 





-----------

### width {#float-width}

```cpp
float width;
```


Plane width. 





-----------

### height {#float-height}

```cpp
float height;
```


Plane height. 





-----------

### flags {#uint32-t-flags}

```cpp
uint32_t flags;
```


Flags which describe this plane. 





-----------

### id {#mlhandle-id}

```cpp
MLHandle id;
```

Plane ID. All inner planes within an outer plane will have the same ID (outer plane's ID). These IDs are persistent across plane queries unless a map merge occurs. On a map merge, IDs could be different. 


| Type | Description |
|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |






-----------


