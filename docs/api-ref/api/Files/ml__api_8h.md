---
title: ml_api.h

---

# ml_api.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLVersion](/api-ref/api/Modules/group___platform/struct_m_l_version.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef uint64_t | **[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle)** <br></br>Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |
| typedef struct [MLVersion](/api-ref/api/Modules/group___platform/struct_m_l_version.md) | **[MLVersion](/api-ref/api/Modules/group___platform/group___platform.md#struct-mlversion)**  |
| typedef int32_t | **[MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult)**  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 0](/api-ref/api/Modules/group___platform/group___platform.md#enums-anonymous-enum-0)** <br></br> { <br></br>[ML_INVALID_HANDLE](/api-ref/api/Files/ml__api_8h.md#enums-ml-invalid-handle) = 0xFFFFFFFFFFFFFFFF<br></br>} |
| enum | **[Anonymous Enum 1](/api-ref/api/Modules/group___platform/group___platform.md#enums-anonymous-enum-1)** <br></br> { <br></br>[MLVersion_BuildIdMaxLength](/api-ref/api/Files/ml__api_8h.md#enums-mlversion-buildidmaxlength) = 128<br></br>} |
| enum | **[Anonymous Enum 2](/api-ref/api/Modules/group___platform/group___platform.md#enums-anonymous-enum-2)** <br></br> { <br></br>[MLResultAPIPrefix_Global](/api-ref/api/Files/ml__api_8h.md#enums-mlresultapiprefix-global) = ( 0  << 16)<br></br>} |
| enum | **[MLResultGlobal](/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresultglobal)** <br></br> { <br></br>[MLResult_Ok](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-ok) = MLResultAPIPrefix_Global,<br></br> [MLResult_Pending](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-pending),<br></br> [MLResult_Timeout](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-timeout),<br></br> [MLResult_Locked](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-locked),<br></br> [MLResult_UnspecifiedFailure](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-unspecifiedfailure),<br></br> [MLResult_InvalidParam](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-invalidparam),<br></br> [MLResult_AllocFailed](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-allocfailed),<br></br> [MLResult_PermissionDenied](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-permissiondenied),<br></br> [MLResult_NotImplemented](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-notimplemented),<br></br> [MLResult_ClientLimitExceeded](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-clientlimitexceeded),<br></br> [MLResult_PoseNotFound](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-posenotfound),<br></br> [MLResult_IncompatibleSKU](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-incompatiblesku),<br></br> [MLResult_PerceptionSystemNotStarted](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-perceptionsystemnotstarted),<br></br> [MLResult_IllegalState](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-illegalstate),<br></br> [MLResult_LicenseError](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-licenseerror),<br></br> [MLResult_InvalidTimestamp](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-invalidtimestamp),<br></br> [MLResult_Unauthenticated](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-unauthenticated),<br></br> [MLResult_Ensure32Bits](/api-ref/api/Files/ml__api_8h.md#enums-mlresult-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| const char * | **[MLGetResultString](/api-ref/api/Modules/group___platform/group___platform.md#const-char-mlgetresultstring)**([MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result_code)<br></br>Returns an ASCII string for MLResultGlobal codes.  |
| const char * | **[MLGlobalGetResultString](/api-ref/api/Modules/group___platform/group___platform.md#const-char-mlglobalgetresultstring)**([MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result_code)<br></br>Returns an ASCII string for MLResult codes.  |
| bool | **[MLHandleIsValid](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Check if a handle is valid.  |
| const char * | **[MLGetVersionName](/api-ref/api/Modules/group___platform/group___platform.md#const-char-mlgetversionname)**()<br></br>Get SDK version as c-style string.  |
| [MLVersion](/api-ref/api/Modules/group___platform/struct_m_l_version.md) | **[MLGetVersion](/api-ref/api/Modules/group___platform/group___platform.md#mlversion-mlgetversion)**()<br></br>Get SDK version as a struct with major, minor, revision, and build_id.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ML_API](/api-ref/api/Files/ml__api_8h.md#defines-ml-api)**  |
|  | **[ML_CALL](/api-ref/api/Files/ml__api_8h.md#defines-ml-call)**  |
|  | **[ML_DEPRECATED_MSG](/api-ref/api/Files/ml__api_8h.md#defines-ml-deprecated-msg)**(msg)  |
|  | **[ML_DEPRECATED](/api-ref/api/Files/ml__api_8h.md#defines-ml-deprecated)**  |
|  | **[ML_STATIC_INLINE](/api-ref/api/Files/ml__api_8h.md#defines-ml-static-inline)**  |
|  | **[ML_EXTERN_C_BEGIN](/api-ref/api/Files/ml__api_8h.md#defines-ml-extern-c-begin)**  |
|  | **[ML_EXTERN_C_END](/api-ref/api/Files/ml__api_8h.md#defines-ml-extern-c-end)**  |
|  | **[MLRESULT_PREFIX](/api-ref/api/Modules/group___platform/group___platform.md#defines-mlresult-prefix)**(val)  |

## Enums Documentation

### Anonymous Enum 0 {#enums-anonymous-enum-0}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ML_INVALID_HANDLE |  0xFFFFFFFFFFFFFFFF| Value of an invalid handle. To test if a handle is invalid use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid). |








-----------

### Anonymous Enum 1 {#enums-anonymous-enum-1}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLVersion_BuildIdMaxLength |  128| Maximum character length of [MLVersion](/api-ref/api/Modules/group___platform/struct_m_l_version.md) build ID. |








-----------

### Anonymous Enum 2 {#enums-anonymous-enum-2}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResultAPIPrefix_Global |  ( 0  << 16)| Defines the prefix for global MLResult codes. |








-----------

### MLResultGlobal {#enums-mlresultglobal}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResult_Ok |  MLResultAPIPrefix_Global| Operation completed successfully. |
| MLResult_Pending | | Asynchronous operation has not completed. |
| MLResult_Timeout | | Operation has timed out. |
| MLResult_Locked | | Request to lock a shared resource that is already locked. |
| MLResult_UnspecifiedFailure | | Operation failed due to an unspecified internal error. |
| MLResult_InvalidParam | | Operation failed due to an invalid parameter being supplied. |
| MLResult_AllocFailed | | Operation failed because memory failed to be allocated. |
| MLResult_PermissionDenied | | Operation failed because a required permission has not been granted. |
| MLResult_NotImplemented | | Operation failed because it is not currently implemented. |
| MLResult_ClientLimitExceeded | | Operation failed because the client count exceeded the number of clients available. |
| MLResult_PoseNotFound | | Operation failed because the requested pose is not available. |
| MLResult_IncompatibleSKU | | Operation failed because feature isn't supported on current device version. |
| MLResult_PerceptionSystemNotStarted | | Operation failed because the Perception System was not started. |
| MLResult_IllegalState | | Operation failed because it has been invoked at the wrong time. |
| MLResult_LicenseError | | Operation failed because of missing/incompatible license. |
| MLResult_InvalidTimestamp | | Operation failed because the timestamp parameter was outside the expected range. |
| MLResult_Unauthenticated | | Operation failed because the user authentication did not pass. |
| MLResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Global MLResult codes that any API can optionally return. 





-----------


## Types Documentation

### MLHandle {#uint64-t-mlhandle}

```cpp
typedef uint64_t MLHandle;
```

Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not. 






-----------

### MLVersion {#struct-mlversion}

```cpp
typedef struct MLVersion MLVersion;
```


SDK version: '[major].[minor].[revision].[build_id]'. 



[More Info](/api-ref/api/Modules/group___platform/struct_m_l_version.md)



-----------

### MLResult {#int32-t-mlresult}

```cpp
typedef int32_t MLResult;
```


MLResult type that all functions in the APIs return. 






-----------


## Functions Documentation

### MLGetResultString {#const-char-mlgetresultstring}

```cpp
static inline const char * MLGetResultString(
    MLResult result_code
)
```

Returns an ASCII string for MLResultGlobal codes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result_code|The input MLResult enum from ML API functions. |
**Required Permissions**:

  * None 




**Return**: ASCII string containing readable version of result code.



-----------

### MLGlobalGetResultString {#const-char-mlglobalgetresultstring}

```cpp
const char * MLGlobalGetResultString(
    MLResult result_code
)
```

Returns an ASCII string for MLResult codes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result_code|The input MLResult enum from ML API functions. |
**Required Permissions**:

  * None 




**Return**: ASCII string containing readable version of result code.


**API Level:**
  * 20




-----------

### MLHandleIsValid {#bool-mlhandleisvalid}

```cpp
static inline bool MLHandleIsValid(
    MLHandle handle
)
```

Check if a handle is valid. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|The handle to check. |
**Required Permissions**:

  * None 




**Return**: `true` if the handle is valid.



-----------

### MLGetVersionName {#const-char-mlgetversionname}

```cpp
static inline const char * MLGetVersionName()
```

Get SDK version as c-style string. 

**Required Permissions**:

  * None 




**Return**: SDK version as c-style string.



-----------

### MLGetVersion {#mlversion-mlgetversion}

```cpp
static inline MLVersion MLGetVersion()
```

Get SDK version as a struct with major, minor, revision, and build_id. 

**Required Permissions**:

  * None 




**Return**: SDK version as a struct.



-----------



## Macros Documentation

### ML_API {#defines-ml-api}

```cpp
#define ML_API 
```






-----------

### ML_CALL {#defines-ml-call}

```cpp
#define ML_CALL 
```






-----------

### ML_DEPRECATED_MSG {#defines-ml-deprecated-msg}

```cpp
#define ML_DEPRECATED_MSG(
    msg
)
__attribute__((deprecated(msg)))
```


**Parameters**

|  |   |   |
|--|--|--|
|  |msg||




-----------

### ML_DEPRECATED {#defines-ml-deprecated}

```cpp
#define ML_DEPRECATED __attribute__((deprecated))
```






-----------

### ML_STATIC_INLINE {#defines-ml-static-inline}

```cpp
#define ML_STATIC_INLINE static inline
```






-----------

### ML_EXTERN_C_BEGIN {#defines-ml-extern-c-begin}

```cpp
#define ML_EXTERN_C_BEGIN 
```






-----------

### ML_EXTERN_C_END {#defines-ml-extern-c-end}

```cpp
#define ML_EXTERN_C_END 
```






-----------

### MLRESULT_PREFIX {#defines-mlresult-prefix}

```cpp
#define MLRESULT_PREFIX(
    val
)
(val << 16)
```


**Parameters**

|  |   |   |
|--|--|--|
|  |val||
Macro to set a the prefix bytes of an API specific MLResult code. 





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

#include <stdint.h>
#include <stdbool.h>
#include <stddef.h>

#if defined(_MSC_VER) && _MSC_VER
#ifdef ML_EXPORT
#define ML_API __declspec(dllexport)
#else
#define ML_API __declspec(dllimport)
#endif
#define ML_CALL __cdecl
#if defined(ML_NO_DEPRECATION_WARNING)
#define ML_DEPRECATED_MSG(msg)
#define ML_DEPRECATED
#if !defined(ML_NO_DEPRECATION_DISABLED_MSG)
#pragma message("Magic Leap C SDK - API deprecation warnings are disabled.")
#endif
#else
#define ML_DEPRECATED_MSG(msg) __declspec(deprecated(msg))
#define ML_DEPRECATED __declspec(deprecated)
#endif
#define ML_STATIC_INLINE __inline
#else
#define ML_API
#define ML_CALL
#if defined(ML_NO_DEPRECATION_WARNING)
#define ML_DEPRECATED_MSG(msg)
#define ML_DEPRECATED
#if !defined(ML_NO_DEPRECATION_DISABLED_MSG)
#pragma message("Magic Leap C SDK - API deprecation warnings are disabled.")
#endif
#else
#define ML_DEPRECATED_MSG(msg) __attribute__((deprecated(msg)))
#define ML_DEPRECATED __attribute__((deprecated))
#endif
#define ML_STATIC_INLINE static inline
#endif

#ifdef __cplusplus
#define ML_EXTERN_C_BEGIN extern "C" {
#define ML_EXTERN_C_END }
#else
#define ML_EXTERN_C_BEGIN
#define ML_EXTERN_C_END
#endif

#include "ml_coordinate_frame_uid.h"
#include "ml_version.h"

ML_EXTERN_C_BEGIN

typedef uint64_t MLHandle;

enum {
  ML_INVALID_HANDLE = 0xFFFFFFFFFFFFFFFF
};

enum {
  MLVersion_BuildIdMaxLength = 128
};

typedef struct MLVersion {
  uint32_t major;
  uint32_t minor;
  uint32_t revision;
  char build_id[MLVersion_BuildIdMaxLength];
} MLVersion;

#define MLRESULT_PREFIX(val) (val << 16)

enum {
  MLResultAPIPrefix_Global = MLRESULT_PREFIX(0),
};

typedef enum MLResultGlobal {
  MLResult_Ok = MLResultAPIPrefix_Global,
  MLResult_Pending,
  MLResult_Timeout,
  MLResult_Locked,
  MLResult_UnspecifiedFailure,
  MLResult_InvalidParam,
  MLResult_AllocFailed,
  MLResult_PermissionDenied,
  MLResult_NotImplemented,
  MLResult_ClientLimitExceeded,
  MLResult_PoseNotFound,
  MLResult_IncompatibleSKU,
  MLResult_PerceptionSystemNotStarted,
  MLResult_IllegalState,
  MLResult_LicenseError,
  MLResult_InvalidTimestamp,
  MLResult_Unauthenticated,
  MLResult_Ensure32Bits = 0x7FFFFFFF
} MLResultGlobal;

typedef int32_t MLResult;

ML_STATIC_INLINE const char* ML_CALL MLGetResultString(MLResult result_code) {
  switch (result_code) {
    case MLResult_Ok: return "MLResult_Ok";
    case MLResult_Pending: return "MLResult_Pending";
    case MLResult_Timeout: return "MLResult_Timeout";
    case MLResult_Locked: return "MLResult_Locked";
    case MLResult_UnspecifiedFailure: return "MLResult_UnspecifiedFailure";
    case MLResult_InvalidParam: return "MLResult_InvalidParam";
    case MLResult_AllocFailed: return "MLResult_AllocFailed";
    case MLResult_PermissionDenied: return "MLResult_PermissionDenied";
    case MLResult_NotImplemented: return "MLResult_NotImplemented";
    case MLResult_ClientLimitExceeded: return "MLResult_ClientLimitExceeded";
    case MLResult_IncompatibleSKU: return "MLResult_IncompatibleSKU";
    case MLResult_PoseNotFound: return "MLResult_PoseNotFound";
    case MLResult_PerceptionSystemNotStarted: return "MLResult_PerceptionSystemNotStarted";
    case MLResult_IllegalState: return "MLResult_IllegalState";
    case MLResult_LicenseError: return "MLResult_LicenseError";
    case MLResult_InvalidTimestamp: return "MLResult_InvalidTimestamp";
    case MLResult_Unauthenticated: return "MLResult_Unauthenticated";
    default: return "Unknown";
  }
}

ML_API  const char* ML_CALL MLGlobalGetResultString(MLResult result_code);

ML_STATIC_INLINE bool MLHandleIsValid(MLHandle handle) {
  return handle != ML_INVALID_HANDLE;
}

ML_STATIC_INLINE const char *ML_CALL MLGetVersionName() {
  return MLSDK_VERSION_NAME;
}

ML_STATIC_INLINE MLVersion MLGetVersion() {
  MLVersion version = {MLSDK_VERSION_MAJOR,
                       MLSDK_VERSION_MINOR,
                       MLSDK_VERSION_REVISION,
                       MLSDK_VERSION_BUILD_ID};
  return version;
}

ML_EXTERN_C_END
```



