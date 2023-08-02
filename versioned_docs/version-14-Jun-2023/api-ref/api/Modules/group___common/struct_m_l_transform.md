---
title: MLTransform

---

# MLTransform

**Module:** **[Common](/api-ref/api/Modules/group___common/group___common.md)**



 [More...](#detailed-description)


`#include <ml_types.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLQuaternionf](/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) | **[rotation](/api-ref/api/Modules/group___common/struct_m_l_transform.md#mlquaternionf-rotation)**  |
| [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[position](/api-ref/api/Modules/group___common/struct_m_l_transform.md#mlvec3f-position)**  |

## Detailed Description

```cpp
struct MLTransform;
```


Information used to transform from one coordinate frame to another. 





-----------
## Public Attributes Documentation

### rotation {#mlquaternionf-rotation}

```cpp
MLQuaternionf rotation;
```


The rotation of the coordinate frame to apply after the translation. 





-----------

### position {#mlvec3f-position}

```cpp
MLVec3f position;
```


The translation to apply to get to the coordinate frame in the proper location. 





-----------

