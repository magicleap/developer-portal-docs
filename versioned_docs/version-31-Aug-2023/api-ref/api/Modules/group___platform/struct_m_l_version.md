---
title: MLVersion

---

# MLVersion

**Module:** **[Platform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md)**



 [More...](#detailed-description)


`#include <ml_api.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[major](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/struct_m_l_version.md#uint32-t-major)**  |
| uint32_t | **[minor](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/struct_m_l_version.md#uint32-t-minor)**  |
| uint32_t | **[revision](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/struct_m_l_version.md#uint32-t-revision)**  |
| char[MLVersion_BuildIdMaxLength] | **[build_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/struct_m_l_version.md#char-build-id)**  |

## Detailed Description

```cpp
struct MLVersion;
```


SDK version: '[major].[minor].[revision].[build_id]'. 





-----------
## Public Attributes Documentation

### major {#uint32-t-major}

```cpp
uint32_t major;
```


Major version. 





-----------

### minor {#uint32-t-minor}

```cpp
uint32_t minor;
```


Minor version. 





-----------

### revision {#uint32-t-revision}

```cpp
uint32_t revision;
```


Revision. 





-----------

### build_id {#char-build-id}

```cpp
char[MLVersion_BuildIdMaxLength] build_id;
```



| Type | Description |
|--|--|
| char[MLVersion_BuildIdMaxLength] | [MLVersion_BuildIdMaxLength] |


Build ID. 





-----------


