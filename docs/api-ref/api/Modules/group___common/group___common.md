---
title: Common
summary: common apis types. 

---

# Common

Common APIs types. 

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLVec2f](/api-ref/api/Modules/group___common/struct_m_l_vec2f.md)**  |
| struct | **[MLXYZf](/api-ref/api/Modules/group___common/struct_m_l_x_y_zf.md)** <br></br>Internal structure used to simplify access of [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md). Do not create this structure directly and always use [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) instead.  |
| struct | **[MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md)**  |
| struct | **[MLQuaternionf](/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md)**  |
| struct | **[MLTransform](/api-ref/api/Modules/group___common/struct_m_l_transform.md)**  |
| struct | **[MLMat4f](/api-ref/api/Modules/group___common/struct_m_l_mat4f.md)**  |
| struct | **[MLRectf](/api-ref/api/Modules/group___common/struct_m_l_rectf.md)**  |
| struct | **[MLRecti](/api-ref/api/Modules/group___common/struct_m_l_recti.md)**  |
| struct | **[MLColor32](/api-ref/api/Modules/group___common/struct_m_l_color32.md)**  |
| struct | **[MLColor4f](/api-ref/api/Modules/group___common/struct_m_l_color4f.md)**  |
| struct | **[MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md)**  |
| struct | **[MLPose](/api-ref/api/Modules/group___common/struct_m_l_pose.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLVec2f](/api-ref/api/Modules/group___common/struct_m_l_vec2f.md) | **[MLVec2f](/api-ref/api/Modules/group___common/group___common.md#struct-mlvec2f)**  |
| typedef struct [MLXYZf](/api-ref/api/Modules/group___common/struct_m_l_x_y_zf.md) | **[MLXYZf](/api-ref/api/Modules/group___common/group___common.md#struct-mlxyzf)** <br></br>Internal structure used to simplify access of [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md). Do not create this structure directly and always use [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) instead.  |
| typedef struct [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[MLVec3f](/api-ref/api/Modules/group___common/group___common.md#struct-mlvec3f)**  |
| typedef struct [MLQuaternionf](/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md) | **[MLQuaternionf](/api-ref/api/Modules/group___common/group___common.md#struct-mlquaternionf)**  |
| typedef struct [MLTransform](/api-ref/api/Modules/group___common/struct_m_l_transform.md) | **[MLTransform](/api-ref/api/Modules/group___common/group___common.md#struct-mltransform)**  |
| typedef struct [MLMat4f](/api-ref/api/Modules/group___common/struct_m_l_mat4f.md) | **[MLMat4f](/api-ref/api/Modules/group___common/group___common.md#struct-mlmat4f)**  |
| typedef struct [MLRectf](/api-ref/api/Modules/group___common/struct_m_l_rectf.md) | **[MLRectf](/api-ref/api/Modules/group___common/group___common.md#struct-mlrectf)**  |
| typedef struct [MLRecti](/api-ref/api/Modules/group___common/struct_m_l_recti.md) | **[MLRecti](/api-ref/api/Modules/group___common/group___common.md#struct-mlrecti)**  |
| typedef struct [MLColor32](/api-ref/api/Modules/group___common/struct_m_l_color32.md) | **[MLColor32](/api-ref/api/Modules/group___common/group___common.md#struct-mlcolor32)**  |
| typedef struct [MLColor4f](/api-ref/api/Modules/group___common/struct_m_l_color4f.md) | **[MLColor4f](/api-ref/api/Modules/group___common/group___common.md#struct-mlcolor4f)**  |
| typedef struct [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) | **[MLUUID](/api-ref/api/Modules/group___common/group___common.md#struct-mluuid)**  |
| typedef int64_t | **[MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime)**  |
| typedef struct [MLPose](/api-ref/api/Modules/group___common/struct_m_l_pose.md) | **[MLPose](/api-ref/api/Modules/group___common/group___common.md#struct-mlpose)**  |


## Types Documentation

### MLVec2f {#struct-mlvec2f}

```cpp
typedef struct MLVec2f MLVec2f;
```


2D vector represented with X and Y floats. 



[More Info](/api-ref/api/Modules/group___common/struct_m_l_vec2f.md)



-----------

### MLXYZf {#struct-mlxyzf}

```cpp
typedef struct MLXYZf MLXYZf;
```

Internal structure used to simplify access of [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md). Do not create this structure directly and always use [MLVec3f](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) instead. 



[More Info](/api-ref/api/Modules/group___common/struct_m_l_x_y_zf.md)



-----------

### MLVec3f {#struct-mlvec3f}

```cpp
typedef struct MLVec3f MLVec3f;
```


3D vector represented with X, Y, and Z floats. 



[More Info](/api-ref/api/Modules/group___common/struct_m_l_vec3f.md)



-----------

### MLQuaternionf {#struct-mlquaternionf}

```cpp
typedef struct MLQuaternionf MLQuaternionf;
```


Quaternion stored as X, Y, Z, W floats. 



[More Info](/api-ref/api/Modules/group___common/struct_m_l_quaternionf.md)



-----------

### MLTransform {#struct-mltransform}

```cpp
typedef struct MLTransform MLTransform;
```


Information used to transform from one coordinate frame to another. 



[More Info](/api-ref/api/Modules/group___common/struct_m_l_transform.md)



-----------

### MLMat4f {#struct-mlmat4f}

```cpp
typedef struct MLMat4f MLMat4f;
```


An arbitrary 4x4 matrix represented with an array of floats. 



[More Info](/api-ref/api/Modules/group___common/struct_m_l_mat4f.md)



-----------

### MLRectf {#struct-mlrectf}

```cpp
typedef struct MLRectf MLRectf;
```


A 2D float rectangle. 



[More Info](/api-ref/api/Modules/group___common/struct_m_l_rectf.md)



-----------

### MLRecti {#struct-mlrecti}

```cpp
typedef struct MLRecti MLRecti;
```


A 2D integer rectangle. 



[More Info](/api-ref/api/Modules/group___common/struct_m_l_recti.md)



-----------

### MLColor32 {#struct-mlcolor32}

```cpp
typedef struct MLColor32 MLColor32;
```


Color represented by 4 unsigned bytes. 



[More Info](/api-ref/api/Modules/group___common/struct_m_l_color32.md)



-----------

### MLColor4f {#struct-mlcolor4f}

```cpp
typedef struct MLColor4f MLColor4f;
```


Color represented by 4 floats. 



[More Info](/api-ref/api/Modules/group___common/struct_m_l_color4f.md)



-----------

### MLUUID {#struct-mluuid}

```cpp
typedef struct MLUUID MLUUID;
```


Universally Unique Identifier. 



[More Info](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md)



-----------

### MLTime {#int64-t-mltime}

```cpp
typedef int64_t MLTime;
```


Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. 






-----------

### MLPose {#struct-mlpose}

```cpp
typedef struct MLPose MLPose;
```


Geometric relationship between two coordinate frames. 



[More Info](/api-ref/api/Modules/group___common/struct_m_l_pose.md)



-----------






