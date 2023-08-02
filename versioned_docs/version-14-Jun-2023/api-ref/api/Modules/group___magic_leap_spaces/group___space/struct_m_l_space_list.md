---
title: MLSpaceList
summary: a structure containing list of mlspace. this structure must be initialized by calling mlspacelistinit before use. 

---

# MLSpaceList

**Module:** **[Magic Leap Spaces](/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Space](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md)**



A structure containing list of [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md). This structure must be initialized by calling [MLSpaceListInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelistinit) before use.  [More...](#detailed-description)


`#include <ml_space.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md#uint32-t-version)**  |
| uint32_t | **[space_count](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md#uint32-t-space-count)**  |
| [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) * | **[spaces](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md#mlspace-spaces)**  |

## Detailed Description

```cpp
struct MLSpaceList;
```

A structure containing list of [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md). This structure must be initialized by calling [MLSpaceListInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelistinit) before use. 




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

### space_count {#uint32-t-space-count}

```cpp
uint32_t space_count;
```


Number of Magic Leap Spaces. 





-----------

### spaces {#mlspace-spaces}

```cpp
MLSpace * spaces;
```



| Type | Description |
|--|--|
| [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) * | A structure containing information about a Magic Leap Space. This structure must be initialized by calling [MLSpaceInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit) before use.  |


List of Magic Leap Spaces. 





-----------

