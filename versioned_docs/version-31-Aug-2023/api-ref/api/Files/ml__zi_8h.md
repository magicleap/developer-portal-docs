---
title: ml_zi.h

---

# ml_zi.h



## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIIsServerConfigured](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlziisserverconfigured)**(bool * out_is_configured)<br></br>Checks to see if the Zero Iteration server is running and configured properly to use by a host application.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZISetProgramLabel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzisetprogramlabel)**(const char * in_label)<br></br>Set the human-readable label of the current project or library, to be used in UI display and diagnostic logs to indicate what is running.  |



## Functions Documentation

### MLZIIsServerConfigured {#mlresult-mlziisserverconfigured}

```cpp
MLResult MLZIIsServerConfigured(
    bool * out_is_configured
)
```

Checks to see if the Zero Iteration server is running and configured properly to use by a host application. 

**Parameters**

|  |   |   |
|--|--|--|
| bool * |out_is_configured|Pointer to a bool indicating whether the ZI server is running and is configured properly.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|is_configured parameter is not valid (null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If query was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|The ZI server could not be reached. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|There was an unknown error submitting the query.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLZISetProgramLabel {#mlresult-mlzisetprogramlabel}

```cpp
MLResult MLZISetProgramLabel(
    const char * in_label
)
```

Set the human-readable label of the current project or library, to be used in UI display and diagnostic logs to indicate what is running. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |in_label|Pointer to a C string indicating the label to use for the running program, or NULL or "" to reset the label. The string is copied. It is interpreted as UTF-8.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If label was accepted (always).|
**Required Permissions**:

  * None 


When unset, The Lab and the ZI runtime refer to a program running under ZI by its process / executable name.

A label must be set before the program calls one of the MLGraphicsCreate() functions in order to be reflected.




**API Level:**
  * 20




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2021 Magic Leap, Inc. All Rights Reserved.
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

ML_API MLResult ML_CALL MLZIIsServerConfigured(bool *out_is_configured);

ML_API MLResult ML_CALL MLZISetProgramLabel(const char *in_label);

ML_EXTERN_C_END
```




