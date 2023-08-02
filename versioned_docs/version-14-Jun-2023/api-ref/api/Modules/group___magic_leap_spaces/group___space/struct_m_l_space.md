---
title: MLSpace
summary: a structure containing information about a magic leap space. this structure must be initialized by calling mlspaceinit before use. 

---

# MLSpace

**Module:** **[Magic Leap Spaces](/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Space](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md)**



A structure containing information about a Magic Leap Space. This structure must be initialized by calling [MLSpaceInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit) before use.  [More...](#detailed-description)


`#include <ml_space.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md#uint32-t-version)**  |
| char[MLSpace_MaxSpaceNameLength] | **[space_name](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md#char-space-name)**  |
| [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) | **[space_id](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md#mluuid-space-id)**  |
| [MLSpaceType](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacetype) | **[space_type](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md#mlspacetype-space-type)**  |

## Detailed Description

```cpp
struct MLSpace;
```

A structure containing information about a Magic Leap Space. This structure must be initialized by calling [MLSpaceInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit) before use. 




**API Level:**
  * 26




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of the structure. 





-----------

### space_name {#char-space-name}

```cpp
char[MLSpace_MaxSpaceNameLength] space_name;
```



| Type | Description |
|--|--|
| char[MLSpace_MaxSpaceNameLength] | [MLSpace_MaxSpaceNameLength] |


Name of the Space. 





-----------

### space_id {#mluuid-space-id}

```cpp
MLUUID space_id;
```


Unique ID of the Space. 





-----------

### space_type {#mlspacetype-space-type}

```cpp
MLSpaceType space_type;
```



| Type | Description |
|--|--|
| [MLSpaceType](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacetype) | Space type. Indicates the type of the Space.  |


Type of the Space. 





-----------

