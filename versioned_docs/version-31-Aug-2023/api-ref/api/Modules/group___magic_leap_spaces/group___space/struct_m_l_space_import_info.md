---
title: MLSpaceImportInfo
summary: a structure containing information needed to import magic leap space. this structure must be initialized by calling mlspaceimportinfoinit before use. 

---

# MLSpaceImportInfo

**Module:** **[Magic Leap Spaces](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Space](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md)**



A structure containing information needed to import Magic Leap Space. This structure must be initialized by calling [MLSpaceImportInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit) before use.  [More...](#detailed-description)


`#include <ml_space.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md#uint32-t-version)**  |
| uint64_t | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md#uint64-t-size)**  |
| const char * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md#const-char-data)**  |

## Detailed Description

```cpp
struct MLSpaceImportInfo;
```

A structure containing information needed to import Magic Leap Space. This structure must be initialized by calling [MLSpaceImportInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit) before use. 




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

### size {#uint64-t-size}

```cpp
uint64_t size;
```


Binary data size in bytes. 





-----------

### data {#const-char-data}

```cpp
const char * data;
```


Binary data obtained from [MLSpaceExportSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceexportspace). 





-----------


