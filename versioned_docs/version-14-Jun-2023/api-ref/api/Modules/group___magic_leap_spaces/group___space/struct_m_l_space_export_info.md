---
title: MLSpaceExportInfo
summary: a structure containing information about the space export settings. this structure must be initialized by calling mlspaceexportinfoinit before use. 

---

# MLSpaceExportInfo

**Module:** **[Magic Leap Spaces](/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Space](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md)**



A structure containing information about the Space export settings. This structure must be initialized by calling [MLSpaceExportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceexportinfoinit) before use.  [More...](#detailed-description)


`#include <ml_space.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md#uint32-t-version)**  |
| [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) | **[space_id](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md#mluuid-space-id)**  |

## Detailed Description

```cpp
struct MLSpaceExportInfo;
```

A structure containing information about the Space export settings. This structure must be initialized by calling [MLSpaceExportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceexportinfoinit) before use. 




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

### space_id {#mluuid-space-id}

```cpp
MLUUID space_id;
```


[MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) of the Space that needs to be exported. 





-----------

