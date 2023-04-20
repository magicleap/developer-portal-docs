---
title: ml_media_data_source.h

---

# ml_media_data_source.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef int64_t(*)(MLHandle media_data_source, size_t position, size_t size, uint8_t *buffer, void *context) | **[MLMediaDataSourceReadAt](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-mlmediadatasourcereadat)** <br></br>Called to request data from the given position.  |
| typedef int64_t(*)(MLHandle media_data_source, void *context) | **[MLMediaDataSourceGetSize](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-mlmediadatasourcegetsize)** <br></br>Called to get the size of the data source.  |
| typedef void(*)(MLHandle media_data_source, void *context) | **[MLMediaDataSourceClose](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediadatasourceclose)** <br></br>Called before deleting |this|. The other methods may return errors if they're called after calling close().  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDataSourceCreate](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate)**([MLMediaDataSourceReadAt](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-mlmediadatasourcereadat) read_at, [MLMediaDataSourceGetSize](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-mlmediadatasourcegetsize) get_size, [MLMediaDataSourceClose](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediadatasourceclose) close, void * context, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new MediaDataSource object.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaDataSourceDestroy](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcedestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_data_source)<br></br>Destroy a #MediaDataSource object.  |


## Types Documentation

### MLMediaDataSourceReadAt {#int64-t-mlmediadatasourcereadat}

```cpp
typedef int64_t(* MLMediaDataSourceReadAt) (MLHandle media_data_source, size_t position, size_t size, uint8_t *buffer, void *context);
```

Called to request data from the given position. 

**Parameters**

|  |   |   |
|--|--|--|
|  |media_data_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate). |
|  |position|The position in the data source to read from. |
|  |size|The number of bytes to read. |
|  |buffer|The buffer to read the data into. |
|  |context|User data as passed to [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate).|
Implementations should should write up to `size` bytes into `buffer`, and return the number of bytes written.

Return 0 to indicate that end of stream is reached. Return -1 on error.




**Return**: The number of bytes read, or -1 if there was an error. 



-----------

### MLMediaDataSourceGetSize {#int64-t-mlmediadatasourcegetsize}

```cpp
typedef int64_t(* MLMediaDataSourceGetSize) (MLHandle media_data_source, void *context);
```

Called to get the size of the data source. 

**Parameters**

|  |   |   |
|--|--|--|
|  |media_data_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate). |
|  |context|User data as passed to [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate).|



**Return**: the size of data source in bytes, or -1 if the size is unknown. 



-----------

### MLMediaDataSourceClose {#void-mlmediadatasourceclose}

```cpp
typedef void(* MLMediaDataSourceClose) (MLHandle media_data_source, void *context);
```

Called before deleting |this|. The other methods may return errors if they're called after calling close(). 

**Parameters**

|  |   |   |
|--|--|--|
|  |media_data_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate). |
|  |context|User data as passed to [MLMediaDataSourceCreate()](/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediadatasourcecreate). |





-----------


## Functions Documentation

### MLMediaDataSourceCreate {#mlresult-mlmediadatasourcecreate}

```cpp
MLResult MLMediaDataSourceCreate(
    MLMediaDataSourceReadAt read_at,
    MLMediaDataSourceGetSize get_size,
    MLMediaDataSourceClose close,
    void * context,
    MLHandle * out_handle
)
```

Create a new MediaDataSource object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaDataSourceReadAt](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-mlmediadatasourcereadat) |read_at|MLMediaDataSourceReadAt callback. |
| [MLMediaDataSourceGetSize](/api-ref/api/Modules/group___media_player/group___media_player.md#int64-t-mlmediadatasourcegetsize) |get_size|MLMediaDataSourceGetSize callback. |
| [MLMediaDataSourceClose](/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediadatasourceclose) |close|MLMediaDataSourceClose callback. |
| void * |context|User data to be passed to callbacks. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|The [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the new source object created. Only valid if result is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|if operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaDataSourceDestroy {#mlresult-mlmediadatasourcedestroy}

```cpp
MLResult MLMediaDataSourceDestroy(
    MLHandle media_data_source
)
```

Destroy a #MediaDataSource object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_data_source|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the #MediaDataSource object to destroy.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|if operation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






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
#include "ml_types.h"

ML_EXTERN_C_BEGIN

typedef int64_t (*MLMediaDataSourceReadAt) (MLHandle media_data_source, size_t position, size_t size, uint8_t *buffer, void *context);

typedef int64_t (*MLMediaDataSourceGetSize) (MLHandle media_data_source, void *context);

typedef void (*MLMediaDataSourceClose) (MLHandle media_data_source, void *context);

ML_API MLResult ML_CALL MLMediaDataSourceCreate(MLMediaDataSourceReadAt read_at, MLMediaDataSourceGetSize get_size, MLMediaDataSourceClose close, void *context, MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaDataSourceDestroy(MLHandle media_data_source);

ML_EXTERN_C_END
```



