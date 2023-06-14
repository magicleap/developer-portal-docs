---
title: MLSpaceLocalizationInfo
summary: a collection of parameters to be used for localization request. this structure must be initialized by calling mlspacelocalizationinfoinit before use. 

---

# MLSpaceLocalizationInfo

**Module:** **[Space](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___space/group___space.md)**



A collection of parameters to be used for localization request. This structure must be initialized by calling [MLSpaceLocalizationInfoInit](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___space/group___space.md#void-mlspacelocalizationinfoinit) before use.  [More...](#detailed-description)


`#include <ml_space.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___space/struct_m_l_space_localization_info.md#uint32-t-version)**  |
| [MLUUID](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) | **[space_id](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___space/struct_m_l_space_localization_info.md#mluuid-space-id)**  |

## Detailed Description

```cpp
struct MLSpaceLocalizationInfo;
```

A collection of parameters to be used for localization request. This structure must be initialized by calling [MLSpaceLocalizationInfoInit](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___space/group___space.md#void-mlspacelocalizationinfoinit) before use. 




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


[MLUUID](/versioned_docs/version-22-May-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) of the Space into which the device attempts to localize into. 





-----------


