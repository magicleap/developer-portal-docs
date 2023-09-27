---
title: ml_media_types.h

---

# ml_media_types.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLPSSHEntry](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLPSSHEntry](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md) | **[MLPSSHEntry](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlpsshentry)**  |


## Types Documentation

### MLPSSHEntry {#struct-mlpsshentry}

```cpp
typedef struct MLPSSHEntry MLPSSHEntry;
```


PSSH entry. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md)



-----------




## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2017 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

ML_EXTERN_C_BEGIN

typedef struct MLPSSHEntry {
  MLUUID uuid;
  size_t size;
  uint8_t *data;
} MLPSSHEntry;

ML_EXTERN_C_END
```




