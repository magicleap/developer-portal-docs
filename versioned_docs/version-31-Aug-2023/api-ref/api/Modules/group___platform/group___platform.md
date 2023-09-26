---
title: Platform
summary: apis for information regarding the platform. 

---

# Platform

APIs for information regarding the platform.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLVersion](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/struct_m_l_version.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef uint64_t | **[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle)** <br></br>Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |
| typedef struct [MLVersion](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/struct_m_l_version.md) | **[MLVersion](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#struct-mlversion)**  |
| typedef int32_t | **[MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult)**  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 0](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-anonymous-enum-0)** <br></br> { <br></br>[ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle) = 0xFFFFFFFFFFFFFFFF<br></br>} |
| enum | **[Anonymous Enum 1](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-anonymous-enum-1)** <br></br> { <br></br>[MLVersion_BuildIdMaxLength](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlversion-buildidmaxlength) = 128<br></br>} |
| enum | **[Anonymous Enum 2](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-anonymous-enum-2)** <br></br> { <br></br>[MLResultAPIPrefix_Global](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresultapiprefix-global) = ( 0  << 16)<br></br>} |
| enum | **[MLResultGlobal](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresultglobal)** <br></br> { <br></br>[MLResult_Ok](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-ok) = MLResultAPIPrefix_Global,<br></br> [MLResult_Pending](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-pending),<br></br> [MLResult_Timeout](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-timeout),<br></br> [MLResult_Locked](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-locked),<br></br> [MLResult_UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-unspecifiedfailure),<br></br> [MLResult_InvalidParam](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-invalidparam),<br></br> [MLResult_AllocFailed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-allocfailed),<br></br> [MLResult_PermissionDenied](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-permissiondenied),<br></br> [MLResult_NotImplemented](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-notimplemented),<br></br> [MLResult_ClientLimitExceeded](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-clientlimitexceeded),<br></br> [MLResult_PoseNotFound](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-posenotfound),<br></br> [MLResult_IncompatibleSKU](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-incompatiblesku),<br></br> [MLResult_PerceptionSystemNotStarted](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-perceptionsystemnotstarted),<br></br> [MLResult_IllegalState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-illegalstate),<br></br> [MLResult_LicenseError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-licenseerror),<br></br> [MLResult_InvalidTimestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-invalidtimestamp),<br></br> [MLResult_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| const char * | **[MLGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#const-char-mlgetresultstring)**([MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result_code)<br></br>Returns an ASCII string for MLResultGlobal codes.  |
| const char * | **[MLGlobalGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#const-char-mlglobalgetresultstring)**([MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result_code)<br></br>Returns an ASCII string for MLResult codes.  |
| bool | **[MLHandleIsValid](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Check if a handle is valid.  |
| const char * | **[MLGetVersionName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#const-char-mlgetversionname)**()<br></br>Get SDK version as c-style string.  |
| [MLVersion](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/struct_m_l_version.md) | **[MLGetVersion](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#mlversion-mlgetversion)**()<br></br>Get SDK version as a struct with major, minor, revision, and build_id.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPlatformGetAPILevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#mlresult-mlplatformgetapilevel)**(uint32_t * out_api_level)<br></br>Query the OS for which Platform API Level is supported.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MLRESULT_PREFIX](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#defines-mlresult-prefix)**(val)  |
|  | **[ML_PLATFORM_API_LEVEL](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#defines-ml-platform-api-level)**  |

## Detailed Description

APIs for information regarding the platform. 




**Shared Object:**
  * capi.magicleap*

**Shared Object:**
  * platform.magicleap*




-----------
## Enums Documentation

### Anonymous Enum 0 {#enums-anonymous-enum-0}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ML_INVALID_HANDLE |  0xFFFFFFFFFFFFFFFF| Value of an invalid handle. To test if a handle is invalid use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid). |








-----------

### Anonymous Enum 1 {#enums-anonymous-enum-1}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLVersion_BuildIdMaxLength |  128| Maximum character length of [MLVersion](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/struct_m_l_version.md) build ID. |








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
| MLResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Global MLResult codes that any API can optionally return. 





-----------


## Types Documentation

### MLHandle {#uint64-t-mlhandle}

```cpp
typedef uint64_t MLHandle;
```

Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not. 






-----------

### MLVersion {#struct-mlversion}

```cpp
typedef struct MLVersion MLVersion;
```


SDK version: '[major].[minor].[revision].[build_id]'. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/struct_m_l_version.md)



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
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result_code|The input MLResult enum from ML API functions. |
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
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result_code|The input MLResult enum from ML API functions. |
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|The handle to check. |
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

### MLPlatformGetAPILevel {#mlresult-mlplatformgetapilevel}

```cpp
MLResult MLPlatformGetAPILevel(
    uint32_t * out_api_level
)
```

Query the OS for which Platform API Level is supported. 

**Parameters**

|  |   |   |
|--|--|--|
| uint32_t * |out_api_level|Pointer to an integer that will store the API level.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Operation completed successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|out_platform_level was not valid (null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedError|Operation failed.|
**Required Permissions**:

  * None 






-----------



## Macros Documentation

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

### ML_PLATFORM_API_LEVEL {#defines-ml-platform-api-level}

```cpp
#define ML_PLATFORM_API_LEVEL 30
```


Current API Level supported by this Magic Leap SDK. 





-----------




