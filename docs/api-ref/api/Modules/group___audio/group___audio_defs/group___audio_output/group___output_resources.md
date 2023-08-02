---
title: Resources

---

# Resources

**Module:** **[Audio](/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Audio Output](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_output.md)**

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateLoadedResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreateloadedresource)**(int file, bool dynamic_decode, [MLAudioResourceDiscardedCallback](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudioresourcediscardedcallback) callback, void * context, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_resource)<br></br>Creates a new audio resource that references a loaded audio file.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateStreamedResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreatestreamedresource)**(int file, [MLAudioResourceDiscardedCallback](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudioresourcediscardedcallback) callback, void * context, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_resource)<br></br>Creates a new audio resource that references a streamed audio file.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCheckResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocheckresource)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) resource, bool * out_is_ready)<br></br>Checks whether an audio resource has been discarded due to memory limits.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetResourceSize](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiogetresourcesize)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) resource, uint32_t * out_size_in_bytes)<br></br>Returns the size of the memory footprint for a loaded audio resource.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioRefreshResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiorefreshresource)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) resource, int file)<br></br>Refreshes an audio resource whose data was discarded due to memory limits.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioDestroyResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiodestroyresource)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) resource)<br></br>Destroys a previously created audio resource. If there are sounds that are currently playing the resource, they will be stopped, and an event callback will be issued for MLAudioSoundEvent_ResourceDestroyed.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateSoundWithLoadedResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreatesoundwithloadedresource)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) resource, bool auto_destroy, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound output that plays a loaded audio resource.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioCreateSoundWithStreamedResource](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___output_resources.md#mlresult-mlaudiocreatesoundwithstreamedresource)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) resource, bool auto_destroy, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new sound output that plays a streamed audio resource.  |

## Detailed Description


RESOURCES. 





-----------


## Functions Documentation

### MLAudioCreateLoadedResource {#mlresult-mlaudiocreateloadedresource}

```cpp
MLResult MLAudioCreateLoadedResource(
    int file,
    bool dynamic_decode,
    MLAudioResourceDiscardedCallback callback,
    void * context,
    MLHandle * out_resource
)
```

Creates a new audio resource that references a loaded audio file. 

**Parameters**

|  |   |   |
|--|--|--|
| int |file|File descriptor specifying the file to load. |
| bool |dynamic_decode|Not currently implemented. |
| [MLAudioResourceDiscardedCallback](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudioresourcediscardedcallback) |callback|MLAudioResourceDiscardedCallback function pointer. |
| void * |context|Generic data pointer passed back to callback. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_resource|MLHandle used in subsequent calls for this resource.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created new audio resource. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_FileNotRecognized|Failed because file was not recognized. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBitsPerSample|Failed due to invalid bits per sample. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet.|
**Required Permissions**:

  * None 


Creates a new audio resource that references the audio file specified by the 'file' argument, which it tries to load during resource creation. An optional MLAudioResourceDiscardedCallback will inform the client if the data later gets discarded due to memory limits (or if it fails to load during creation). After creation the resource can be played by passing its id to MLAudioCreateSoundWithLoadedResource.





-----------

### MLAudioCreateStreamedResource {#mlresult-mlaudiocreatestreamedresource}

```cpp
MLResult MLAudioCreateStreamedResource(
    int file,
    MLAudioResourceDiscardedCallback callback,
    void * context,
    MLHandle * out_resource
)
```

Creates a new audio resource that references a streamed audio file. 

**Parameters**

|  |   |   |
|--|--|--|
| int |file|File descriptor specifying the file to load. |
| [MLAudioResourceDiscardedCallback](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudioresourcediscardedcallback) |callback|MLAudioResourceDiscardedCallback Function pointer. |
| void * |context|Generic data pointer passed back to callback. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_resource|MLHandle used in subsequent calls for this resource.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created new audio resource. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because of feature has not been implemented yet.|
**Required Permissions**:

  * None 


Creates a new audio resource that references the audio file specified by the 'file' argument. An optional MLAudioResourceDiscardedCallback will inform the client if the file's file descriptor later gets discarded due to file descriptor limits (or if a file descriptor cannot be generated during resource creation). After creation the resource can be played by passing its id to MLAudioCreateSoundWithStreamedResource.





-----------

### MLAudioCheckResource {#mlresult-mlaudiocheckresource}

```cpp
MLResult MLAudioCheckResource(
    MLHandle resource,
    bool * out_is_ready
)
```

Checks whether an audio resource has been discarded due to memory limits. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |resource|MLHandle used to identify the resource. |
| bool * |out_is_ready|Indicates whether the resource is ready or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully checked audio resource. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because of feature has not been implemented yet. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


This call can be used instead of the MLAudioResourceDiscardedCallback to determine whether an audio resource has been discarded. Resources that are not being referenced by a sound will be discarded before resources that are being referenced by a sound. Resources that are being played by a sound will not be discarded. MLAudioCheckResource can be called just before the resource is needed, or at some other appropriate time for accessing data. However it should not be called constantly on a polling basis to instantly refresh resources that get discarded, since that would defeat the purpose of the memory limit.





-----------

### MLAudioGetResourceSize {#mlresult-mlaudiogetresourcesize}

```cpp
MLResult MLAudioGetResourceSize(
    MLHandle resource,
    uint32_t * out_size_in_bytes
)
```

Returns the size of the memory footprint for a loaded audio resource. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |resource|MLHandle used to identify the resource. |
| uint32_t * |out_size_in_bytes|The returned size of the footprint.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained resource size. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


This call tells the owner of a loaded resource what size memory footprint is used by the resource. For a loaded resource that is de-compressed when it gets loaded into memory, the value returned will be the de-compressed size. For a loaded resource that stays compressed when loaded, and gets decoded on the fly (not yet implemented), the value returned will be the compressed size. This call always returns the size of the resource's footprint, even when the resource is temporarily discarded and is using no memory. To determine if the size returned is actually being used in memory, call MLAudioCheckResource to find out if the resource is currently discarded. This call will return with an error if it is called for a streamed resource.




**API Level:**
  * 7




-----------

### MLAudioRefreshResource {#mlresult-mlaudiorefreshresource}

```cpp
MLResult MLAudioRefreshResource(
    MLHandle resource,
    int file
)
```

Refreshes an audio resource whose data was discarded due to memory limits. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |resource|MLHandle used to identify the resource. |
| int |file|File descriptor specifying the audio data to refresh.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully refreshed audio resource. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_FileNotRecognized|Failed because file was not recognized. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBitsPerSample|Failed due to invalid bits per sample. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBufferSize|Failed due to an invalid buffer size. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleFormat|Failed due to an invalid sample format. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidValidBits|Failed due to invalid valid bits. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


This call allows the client to 'refresh' a resource whose data has been discarded. This should be done just prior to the next time the data is needed, or some other convenient time when data access is appropriate, but not right after the data is discarded, as that would defeat the purpose of the memory limit.





-----------

### MLAudioDestroyResource {#mlresult-mlaudiodestroyresource}

```cpp
MLResult MLAudioDestroyResource(
    MLHandle resource
)
```

Destroys a previously created audio resource. If there are sounds that are currently playing the resource, they will be stopped, and an event callback will be issued for MLAudioSoundEvent_ResourceDestroyed. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |resource|MLHandle used to identify the resource.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed audio resource. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImplemented|Failed because feature has not been implemented yet. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 






-----------

### MLAudioCreateSoundWithLoadedResource {#mlresult-mlaudiocreatesoundwithloadedresource}

```cpp
MLResult MLAudioCreateSoundWithLoadedResource(
    MLHandle resource,
    bool auto_destroy,
    MLHandle * out_handle
)
```

Creates a new sound output that plays a loaded audio resource. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |resource|MLHandle specifying the resource to play. |
| bool |auto_destroy|If true, the sound output is destroyed when done playing. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created sound input. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_FileNotRecognized|Failed because file was not recognized. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBitsPerSample|Failed due to invalid bits per sample. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidChannelCount|Failed due to an invalid channel count. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidSampleRate|Failed due to an invalid sample rate. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


Creates a sound output to play a loaded audio file referenced as a resource. Loaded resources are created and loaded by calling MLAudioCreateLoadedResource. After sound creation the sound can be started by calling MLAudioStartSound. Supported file formats are all file types supported by the Multimedia Service, mono or stereo, sampled with a frequency in the range from 16 kHz - 48 kHz, and represented as 16, 24, or 32 bit integers or 32-bit floats.





-----------

### MLAudioCreateSoundWithStreamedResource {#mlresult-mlaudiocreatesoundwithstreamedresource}

```cpp
MLResult MLAudioCreateSoundWithStreamedResource(
    MLHandle resource,
    bool auto_destroy,
    MLHandle * out_handle
)
```

Creates a new sound output that plays a streamed audio resource. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |resource|MLHandle specifying the resource to play. |
| bool |auto_destroy|If true, the sound output is destroyed when done playing. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used in subsequent calls for this sound output.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed due to memory allocation failure. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created sound output. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_HandleNotFound|Failed due to a missing handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InternalConfigError|Failed due to an internal configurations error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_InvalidBufferSize|Failed due to an invalid buffer size. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceDiscarded|Failed because file was closed. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_ResourceNotFound|Failed because resource was not found.|
**Required Permissions**:

  * None 


Creates a sound output to play a streamed audio file referenced as a resource. Streamed resources are created by calling MLAudioCreateStreamedResource. After sound creation the sound can be started by calling MLAudioStartSound. Supported file formats are all file types supported by the Multimedia Service, mono or stereo, sampled with a frequency in the range from 16 kHz - 48 kHz, and represented as 16, 24, or 32 bit integers or 32-bit floats.





-----------





