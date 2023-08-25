---
title: MLPose

---

# MLPose

**Module:** **[Common](/api-ref/api/Modules/group___common/group___common.md)**



 [More...](#detailed-description)


`#include <ml_types.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLTransform](/api-ref/api/Modules/group___common/struct_m_l_transform.md) | **[transform](/api-ref/api/Modules/group___common/struct_m_l_pose.md#mltransform-transform)** <br></br>6-DoF transformation between the two coordinate frames that can be directly used to express source frame coordinates in destination frame coordinates.  |
| bool | **[has_derivatives](/api-ref/api/Modules/group___common/struct_m_l_pose.md#bool-has-derivatives)** <br></br>Indicate if this pose has derivative values.  |
| [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[linear_velocity](/api-ref/api/Modules/group___common/struct_m_l_pose.md#mlvec3f-linear-velocity)** <br></br>The linear velocity in meters per second.  |
| [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[linear_acceleration](/api-ref/api/Modules/group___common/struct_m_l_pose.md#mlvec3f-linear-acceleration)** <br></br>The linear acceleration in meters per second squared.  |
| [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[angular_velocity](/api-ref/api/Modules/group___common/struct_m_l_pose.md#mlvec3f-angular-velocity)** <br></br>Angular velocity in radians per second.  |
| [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[angular_acceleration](/api-ref/api/Modules/group___common/struct_m_l_pose.md#mlvec3f-angular-acceleration)** <br></br>Angular accleration in radians per second squared.  |
| [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[origin_time_ns](/api-ref/api/Modules/group___common/struct_m_l_pose.md#mltime-origin-time-ns)**  |
| [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[predict_time_ns](/api-ref/api/Modules/group___common/struct_m_l_pose.md#mltime-predict-time-ns)** <br></br>Time to which this relationship has been predicted. May be equal to origin_time_ns.  |

## Detailed Description

```cpp
struct MLPose;
```


Geometric relationship between two coordinate frames. 





-----------
## Public Attributes Documentation

### transform {#mltransform-transform}

```cpp
MLTransform transform;
```

6-DoF transformation between the two coordinate frames that can be directly used to express source frame coordinates in destination frame coordinates. 





-----------

### has_derivatives {#bool-has-derivatives}

```cpp
bool has_derivatives;
```

Indicate if this pose has derivative values. 





-----------

### linear_velocity {#mlvec3f-linear-velocity}

```cpp
MLVec3f linear_velocity;
```

The linear velocity in meters per second. 





-----------

### linear_acceleration {#mlvec3f-linear-acceleration}

```cpp
MLVec3f linear_acceleration;
```

The linear acceleration in meters per second squared. 





-----------

### angular_velocity {#mlvec3f-angular-velocity}

```cpp
MLVec3f angular_velocity;
```

Angular velocity in radians per second. 





-----------

### angular_acceleration {#mlvec3f-angular-acceleration}

```cpp
MLVec3f angular_acceleration;
```

Angular accleration in radians per second squared. 





-----------

### origin_time_ns {#mltime-origin-time-ns}

```cpp
MLTime origin_time_ns;
```


Time when this relationship was measured. 





-----------

### predict_time_ns {#mltime-predict-time-ns}

```cpp
MLTime predict_time_ns;
```

Time to which this relationship has been predicted. May be equal to origin_time_ns. 





-----------

