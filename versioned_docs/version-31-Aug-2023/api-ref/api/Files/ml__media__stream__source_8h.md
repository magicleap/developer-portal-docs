---
title: ml_media_stream_source.h

---

# ml_media_stream_source.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(MLHandle media_stream_source, void *context) | **[MLMediaStreamSourceOnBufferAvailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediastreamsourceonbufferavailable)** <br></br>Called when buffers becomes available.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaStreamSourceCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate)**([MLMediaStreamSourceOnBufferAvailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediastreamsourceonbufferavailable) on_buffer_available, void * context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new MediaStreamSource object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaStreamSourceDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcedestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_stream_source)<br></br>Destroy a MediaStreamSource object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaStreamSourceGetBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcegetbuffer)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_stream_source, size_t * out_id, uint8_t ** out_ptr, size_t * out_size)<br></br>Get a buffer where data can be written.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaStreamSourcePushBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcepushbuffer)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_stream_source, size_t id, size_t size)<br></br>Push a buffer.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaStreamSourcePushEOS](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcepusheos)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) media_stream_source)<br></br>Push End-Of-Stream event.  |


## Types Documentation

### MLMediaStreamSourceOnBufferAvailable {#void-mlmediastreamsourceonbufferavailable}

```cpp
typedef void(* MLMediaStreamSourceOnBufferAvailable) (MLHandle media_stream_source, void *context);
```

Called when buffers becomes available. 

**Parameters**

|  |   |   |
|--|--|--|
|  |media_stream_source|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaStreamSourceCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate). |
|  |context|User data as passed to [MLMediaStreamSourceCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate). |
Signal that at least one buffer is now available. Application should then call getBuffer() as much as possible until it returns false, or until no more data is currently available in the application.






-----------


## Functions Documentation

### MLMediaStreamSourceCreate {#mlresult-mlmediastreamsourcecreate}

```cpp
MLResult MLMediaStreamSourceCreate(
    MLMediaStreamSourceOnBufferAvailable on_buffer_available,
    void * context,
    MLHandle * out_handle
)
```

Create a new MediaStreamSource object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaStreamSourceOnBufferAvailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediastreamsourceonbufferavailable) |on_buffer_available|[MLMediaStreamSourceOnBufferAvailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediastreamsourceonbufferavailable) callback. |
| void * |context|User data to be passed to callbacks. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|The [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the new source object created. Only valid if result is [MLResult_Ok](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-mlresult-ok).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaStreamSourceDestroy {#mlresult-mlmediastreamsourcedestroy}

```cpp
MLResult MLMediaStreamSourceDestroy(
    MLHandle media_stream_source
)
```

Destroy a MediaStreamSource object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_stream_source|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MediaStreamSource object to destroy.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaStreamSourceGetBuffer {#mlresult-mlmediastreamsourcegetbuffer}

```cpp
MLResult MLMediaStreamSourceGetBuffer(
    MLHandle media_stream_source,
    size_t * out_id,
    uint8_t ** out_ptr,
    size_t * out_size
)
```

Get a buffer where data can be written. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_stream_source|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaStreamSourceCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate). |
| size_t * |out_id|An opaque ID that should be passed to [MLMediaStreamSourcePushBuffer()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcepushbuffer). |
| uint8_t ** |out_ptr|The location where to write data. |
| size_t * |out_size|Maximum bytes that can be written in `out_ptr`.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


If a buffer is available, true is returned and `out_id`, `out_ptr` and `out_size` are set. Application can then write up to `out_size` bytes into `out_ptr` and push that data using [MLMediaStreamSourcePushBuffer()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcepushbuffer).

If no buffer is available, false is returned and application should wait for [MLMediaStreamSourceOnBufferAvailable()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlmediastreamsourceonbufferavailable) to be called before retrying.





-----------

### MLMediaStreamSourcePushBuffer {#mlresult-mlmediastreamsourcepushbuffer}

```cpp
MLResult MLMediaStreamSourcePushBuffer(
    MLHandle media_stream_source,
    size_t id,
    size_t size
)
```

Push a buffer. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_stream_source|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaStreamSourceCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate). |
| size_t |id|The ID of the buffer as given by [MLMediaStreamSourceGetBuffer()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcegetbuffer). |
| size_t |size|The number of bytes actually written in the buffer.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Queue a buffer acquired from [MLMediaStreamSourceGetBuffer()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcegetbuffer) once data has been written.





-----------

### MLMediaStreamSourcePushEOS {#mlresult-mlmediastreamsourcepusheos}

```cpp
MLResult MLMediaStreamSourcePushEOS(
    MLHandle media_stream_source
)
```

Push End-Of-Stream event. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |media_stream_source|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) as returned by [MLMediaStreamSourceCreate()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediastreamsourcecreate).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


Signal that the end of stream is reached and no more data will be pushed.





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

typedef void (*MLMediaStreamSourceOnBufferAvailable) (MLHandle media_stream_source, void *context);

ML_API MLResult ML_CALL MLMediaStreamSourceCreate(MLMediaStreamSourceOnBufferAvailable on_buffer_available, void *context, MLHandle *out_handle);

ML_API MLResult ML_CALL MLMediaStreamSourceDestroy(MLHandle media_stream_source);

ML_API MLResult ML_CALL MLMediaStreamSourceGetBuffer(MLHandle media_stream_source, size_t *out_id, uint8_t **out_ptr, size_t *out_size);

ML_API MLResult ML_CALL MLMediaStreamSourcePushBuffer(MLHandle media_stream_source, size_t id, size_t size);

ML_API MLResult ML_CALL MLMediaStreamSourcePushEOS(MLHandle media_stream_source);

ML_EXTERN_C_END
```




