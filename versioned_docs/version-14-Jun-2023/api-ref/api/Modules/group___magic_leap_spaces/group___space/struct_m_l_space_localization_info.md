---
title: MLSpaceLocalizationInfo
summary: a collection of parameters to be used for localization request. this structure must be initialized by calling mlspacelocalizationinfoinit before use. 

---

# MLSpaceLocalizationInfo

**Module:** **[Magic Leap Spaces](/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Space](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md)**



A collection of parameters to be used for localization request. This structure must be initialized by calling [MLSpaceLocalizationInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationinfoinit) before use.  [More...](#detailed-description)


`#include <ml_space.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md#uint32-t-version)**  |
| [MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) | **[space_id](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md#mluuid-space-id)**  |

## Detailed Description

```cpp
struct MLSpaceLocalizationInfo;
```

A collection of parameters to be used for localization request. This structure must be initialized by calling [MLSpaceLocalizationInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationinfoinit) before use. 




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


[MLUUID](/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) of the Space into which the device attempts to localize into. 





-----------

