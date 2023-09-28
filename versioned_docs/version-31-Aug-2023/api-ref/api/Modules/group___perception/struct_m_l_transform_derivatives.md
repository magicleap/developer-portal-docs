---
title: MLTransformDerivatives
summary: velocity and acceleration derivatives for a related transform. 

---

# MLTransformDerivatives

**Module:** **[Perception](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md)**



Velocity and acceleration derivatives for a related transform.  [More...](#detailed-description)


`#include <ml_snapshot.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md#uint32-t-version)**  |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[linear_velocity_m_s](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md#mlvec3f-linear-velocity-m-s)**  |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[linear_acceleration_m_s2](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md#mlvec3f-linear-acceleration-m-s2)**  |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[angular_velocity_r_s](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md#mlvec3f-angular-velocity-r-s)**  |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[angular_acceleration_r_s2](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md#mlvec3f-angular-acceleration-r-s2)**  |

## Detailed Description

```cpp
struct MLTransformDerivatives;
```

Velocity and acceleration derivatives for a related transform. 




**API Level:**
  * 8




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### linear_velocity_m_s {#mlvec3f-linear-velocity-m-s}

```cpp
MLVec3f linear_velocity_m_s;
```


Linear velocity in meters per second, expressed in destination frame coordinates. 





-----------

### linear_acceleration_m_s2 {#mlvec3f-linear-acceleration-m-s2}

```cpp
MLVec3f linear_acceleration_m_s2;
```


Linear acceleration in meters per second squared, expressed in destination frame coordinates. 





-----------

### angular_velocity_r_s {#mlvec3f-angular-velocity-r-s}

```cpp
MLVec3f angular_velocity_r_s;
```


Angular velocity in radians per second, expressed in destination frame coordinates. 





-----------

### angular_acceleration_r_s2 {#mlvec3f-angular-acceleration-r-s2}

```cpp
MLVec3f angular_acceleration_r_s2;
```


Angular acceleration in radians per second squared, expressed in destination frame coordinates. 





-----------


