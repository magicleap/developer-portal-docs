---
title: MLSpaceImportInfo
summary: a structure containing information needed to import magic leap space. this structure must be initialized by calling mlspaceimportinfoinit before use. 

---

# MLSpaceImportInfo

**Module:** **[Magic Leap Spaces](/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Space](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md)**



A structure containing information needed to import Magic Leap Space. This structure must be initialized by calling [MLSpaceImportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit) before use.  [More...](#detailed-description)


`#include <ml_space.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md#uint32-t-version)**  |
| uint64_t | **[size](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md#uint64-t-size)**  |
| const char * | **[data](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md#const-char-data)**  |

## Detailed Description

```cpp
struct MLSpaceImportInfo;
```

A structure containing information needed to import Magic Leap Space. This structure must be initialized by calling [MLSpaceImportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit) before use. 




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


Binary data obtained from [MLSpaceExportSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceexportspace). 





-----------

