---
title: ml_coordinate_frame_uid.h

---

# ml_coordinate_frame_uid.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlcoordinateframeuid)**  |


## Types Documentation

### MLCoordinateFrameUID {#struct-mlcoordinateframeuid}

```cpp
typedef struct MLCoordinateFrameUID MLCoordinateFrameUID;
```


A unique identifier which represents a coordinate frame. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md)



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

#include "ml_api.h"

ML_EXTERN_C_BEGIN

typedef struct MLCoordinateFrameUID {
  uint64_t data[2];
} MLCoordinateFrameUID;

ML_EXTERN_C_END
```




