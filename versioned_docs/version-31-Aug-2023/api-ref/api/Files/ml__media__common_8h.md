---
title: ml_media_common.h

---

# ml_media_common.h



## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLMediaSeekMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediaseekmode)** <br></br> { <br></br>[MLMediaSeekMode_Previous_Sync](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__common_8h.md#enums-mlmediaseekmode-previous-sync),<br></br> [MLMediaSeekMode_Next_Sync](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__common_8h.md#enums-mlmediaseekmode-next-sync),<br></br> [MLMediaSeekMode_Closest_Sync](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__common_8h.md#enums-mlmediaseekmode-closest-sync),<br></br> [MLMediaSeekMode_Closest](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__common_8h.md#enums-mlmediaseekmode-closest),<br></br> [MLMediaSeekMode_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__common_8h.md#enums-mlmediaseekmode-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Enums Documentation

### MLMediaSeekMode {#enums-mlmediaseekmode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaSeekMode_Previous_Sync | | Seek to the previous key frame. |
| MLMediaSeekMode_Next_Sync | | Seek to the next key frame. |
| MLMediaSeekMode_Closest_Sync | | Seek to the closest key frame. |
| MLMediaSeekMode_Closest | | Seek to the closest frame, more accurate but slower. |
| MLMediaSeekMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Mode indicating where exactly to seek to. 





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

typedef enum MLMediaSeekMode {
  MLMediaSeekMode_Previous_Sync,
  MLMediaSeekMode_Next_Sync,
  MLMediaSeekMode_Closest_Sync,
  MLMediaSeekMode_Closest,
  MLMediaSeekMode_Ensure32Bits = 0x7FFFFFFF
} MLMediaSeekMode;

ML_EXTERN_C_END
```




