---
title: MLSpaceExportOutData
summary: a structure containing information about the exported space. 

---

# MLSpaceExportOutData

**Module:** **[Magic Leap Spaces](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Space](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md)**



A structure containing information about the exported Space.  [More...](#detailed-description)


`#include <ml_space.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint64_t | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md#uint64-t-size)**  |
| const char * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md#const-char-data)** <br></br>Space data. This is binary data and typically does not include a terminating null character.  |

## Detailed Description

```cpp
struct MLSpaceExportOutData;
```

A structure containing information about the exported Space. 




**API Level:**
  * 26




-----------
## Public Attributes Documentation

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

Space data. This is binary data and typically does not include a terminating null character. 





-----------


