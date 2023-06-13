---
title: ml_occlusion.h

---

# ml_occlusion.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLOcclusionSettings](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md)** <br></br>Mesh Settings for the underlying system.  |
| struct | **[MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md)** <br></br>Structure for occlusion mesh data.  |
| struct | **[MLOcclusionMeshQuery](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh_query.md)** <br></br>Structure for occlusion mesh query.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLOcclusionSettings](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) | **[MLOcclusionSettings](/api-ref/api/Modules/group___occlusion/group___occlusion.md#struct-mlocclusionsettings)** <br></br>Mesh Settings for the underlying system.  |
| typedef struct [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) | **[MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/group___occlusion.md#struct-mlocclusionmesh)** <br></br>Structure for occlusion mesh data.  |
| typedef struct [MLOcclusionMeshQuery](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh_query.md) | **[MLOcclusionMeshQuery](/api-ref/api/Modules/group___occlusion/group___occlusion.md#struct-mlocclusionmeshquery)** <br></br>Structure for occlusion mesh query.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLOcclusionSettingsInit](/api-ref/api/Modules/group___occlusion/group___occlusion.md#void-mlocclusionsettingsinit)**([MLOcclusionSettings](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) * inout_settings)<br></br>Initialize the occlusion settings with system defaults.  |
| void | **[MLOcclusionMeshInit](/api-ref/api/Modules/group___occlusion/group___occlusion.md#void-mlocclusionmeshinit)**([MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) * inout_mesh)<br></br>Initialize the occlusion mesh with system defaults.  |
| void | **[MLOcclusionMeshQueryInit](/api-ref/api/Modules/group___occlusion/group___occlusion.md#void-mlocclusionmeshqueryinit)**([MLOcclusionMeshQuery](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh_query.md) * inout_mesh_query)<br></br>Initialize the occlusion mesh query with system defaults.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLOcclusionCreateClient](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusioncreateclient)**(const [MLOcclusionSettings](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) * settings, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_client_handle)<br></br>Create the occlusion client.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLOcclusionDestroyClient](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusiondestroyclient)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) client_handle)<br></br>Free the client resources.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLOcclusionUpdateSettings](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusionupdatesettings)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLOcclusionSettings](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) * settings)<br></br>Update the occlusion settings at runtime.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLOcclusionGetLatestMesh](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusiongetlatestmesh)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLOcclusionMeshQuery](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh_query.md) * mesh_query, [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) * out_mesh_data)<br></br>Get the latest occlusion mesh.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLOcclusionReleaseMesh](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusionreleasemesh)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) * mesh_data)<br></br>Releases specified [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) object.  |


## Types Documentation

### MLOcclusionSettings {#struct-mlocclusionsettings}

```cpp
typedef struct MLOcclusionSettings MLOcclusionSettings;
```

Mesh Settings for the underlying system. 



[More Info](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md)


**API Level:**
  * 28




-----------

### MLOcclusionMesh {#struct-mlocclusionmesh}

```cpp
typedef struct MLOcclusionMesh MLOcclusionMesh;
```

Structure for occlusion mesh data. 



[More Info](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md)


**API Level:**
  * 28




-----------

### MLOcclusionMeshQuery {#struct-mlocclusionmeshquery}

```cpp
typedef struct MLOcclusionMeshQuery MLOcclusionMeshQuery;
```

Structure for occlusion mesh query. 



[More Info](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh_query.md)


**API Level:**
  * 28




-----------


## Functions Documentation

### MLOcclusionSettingsInit {#void-mlocclusionsettingsinit}

```cpp
static inline void MLOcclusionSettingsInit(
    MLOcclusionSettings * inout_settings
)
```

Initialize the occlusion settings with system defaults. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLOcclusionSettings](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) * |inout_settings|The initial settings to be used for occlusion.|
**Required Permissions**:

  * None 





**API Level:**
  * 28




-----------

### MLOcclusionMeshInit {#void-mlocclusionmeshinit}

```cpp
static inline void MLOcclusionMeshInit(
    MLOcclusionMesh * inout_mesh
)
```

Initialize the occlusion mesh with system defaults. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) * |inout_mesh|The initial mesh structure.|
**Required Permissions**:

  * None 





**API Level:**
  * 28




-----------

### MLOcclusionMeshQueryInit {#void-mlocclusionmeshqueryinit}

```cpp
static inline void MLOcclusionMeshQueryInit(
    MLOcclusionMeshQuery * inout_mesh_query
)
```

Initialize the occlusion mesh query with system defaults. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLOcclusionMeshQuery](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh_query.md) * |inout_mesh_query|The initial mesh query structure.|
**Required Permissions**:

  * None 





**API Level:**
  * 28




-----------

### MLOcclusionCreateClient {#mlresult-mlocclusioncreateclient}

```cpp
MLResult MLOcclusionCreateClient(
    const MLOcclusionSettings * settings,
    MLHandle * out_client_handle
)
```

Create the occlusion client. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLOcclusionSettings](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) * |settings|The initial settings to be used for occlusion. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_client_handle|The handle to the created client.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Occlusion client was not created due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Occlusion client was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Missing required permission(s). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Occlusion client was not created due to an unknown error.|
**Required Permissions**:

  * com.magicleap.permission.SPATIAL_MAPPING (protection level: dangerous) 





**API Level:**
  * 28




-----------

### MLOcclusionDestroyClient {#mlresult-mlocclusiondestroyclient}

```cpp
MLResult MLOcclusionDestroyClient(
    MLHandle client_handle
)
```

Free the client resources. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |client_handle|The client to destroy.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Occlusion client was not destroyed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Occlusion client was destroyed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 





**API Level:**
  * 28




-----------

### MLOcclusionUpdateSettings {#mlresult-mlocclusionupdatesettings}

```cpp
MLResult MLOcclusionUpdateSettings(
    MLHandle handle,
    const MLOcclusionSettings * settings
)
```

Update the occlusion settings at runtime. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|The handle to the created client. |
| const [MLOcclusionSettings](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md) * |settings|The updated settings to be used for occlusion.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Settings were not updated due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Settings were updated successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 





**API Level:**
  * 28




-----------

### MLOcclusionGetLatestMesh {#mlresult-mlocclusiongetlatestmesh}

```cpp
MLResult MLOcclusionGetLatestMesh(
    MLHandle handle,
    const MLOcclusionMeshQuery * mesh_query,
    MLOcclusionMesh * out_mesh_data
)
```

Get the latest occlusion mesh. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|The handle to the created client. |
| const [MLOcclusionMeshQuery](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh_query.md) * |mesh_query|The pointer to intialized [MLOcclusionMeshQuery](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh_query.md) struct. |
| [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) * |out_mesh_data|The pointer to intialized [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) struct.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|Current mesh must be released before acquiring the next one. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Mesh data was not returned due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Mesh data was returned successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 


Returns [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) with its latest data. When doing consecutive calls and there was no mesh update, the same data will be returned. The memory is owned by the system. Application should copy the data it needs to cache.

Every call to [MLOcclusionGetLatestMesh()](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusiongetlatestmesh) must be followed by a matching call to [MLOcclusionReleaseMesh()](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusionreleasemesh), otherwise this method will return an error.




**API Level:**
  * 28




-----------

### MLOcclusionReleaseMesh {#mlresult-mlocclusionreleasemesh}

```cpp
MLResult MLOcclusionReleaseMesh(
    MLHandle handle,
    MLOcclusionMesh * mesh_data
)
```

Releases specified [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|The handle to the created client. |
| [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) * |mesh_data|Pointer to a filled [MLOcclusionMesh](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_mesh.md) struct.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released mesh data. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an internal error.|
**Required Permissions**:

  * None 


This function should be called exactly once for each call to [MLOcclusionGetLatestMesh()](/api-ref/api/Modules/group___occlusion/group___occlusion.md#mlresult-mlocclusiongetlatestmesh). After a successful call, the contents of #mesh_data are no longer valid and should not be used.




**API Level:**
  * 28




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2023 Magic Leap, Inc. All Rights Reserved.
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

#include <string.h>

ML_EXTERN_C_BEGIN

typedef struct MLOcclusionSettings {
  uint32_t version;
  float min_distance;
  float max_distance;
} MLOcclusionSettings;

ML_STATIC_INLINE void MLOcclusionSettingsInit(MLOcclusionSettings *inout_settings) {
  if (inout_settings) {
    memset(inout_settings, 0, sizeof(MLOcclusionSettings));
    inout_settings->version = 1;
    inout_settings->min_distance = 0.3f;
    inout_settings->max_distance = 5.f;
  }
}

typedef struct MLOcclusionMesh {
  uint32_t version;
  MLTime timestamp;
  uint32_t index_count;
  uint32_t vertex_count;
  MLVec3f *vertex;
  uint32_t *index;
} MLOcclusionMesh;

ML_STATIC_INLINE void MLOcclusionMeshInit(MLOcclusionMesh *inout_mesh) {
  if (inout_mesh) {
    memset(inout_mesh, 0, sizeof(MLOcclusionMesh));
    inout_mesh->version = 1;
  }
}

typedef struct MLOcclusionMeshQuery {
  uint32_t version;
} MLOcclusionMeshQuery;

ML_STATIC_INLINE void MLOcclusionMeshQueryInit(MLOcclusionMeshQuery *inout_mesh_query) {
  if (inout_mesh_query) {
    memset(inout_mesh_query, 0, sizeof(MLOcclusionMeshQuery));
    inout_mesh_query->version = 1;
  }
}

ML_API MLResult ML_CALL MLOcclusionCreateClient(const MLOcclusionSettings *settings, MLHandle *out_client_handle);

ML_API MLResult ML_CALL MLOcclusionDestroyClient(MLHandle client_handle);

ML_API MLResult ML_CALL MLOcclusionUpdateSettings(MLHandle handle, const MLOcclusionSettings *settings);

ML_API MLResult ML_CALL MLOcclusionGetLatestMesh(MLHandle handle, const MLOcclusionMeshQuery* mesh_query, MLOcclusionMesh *out_mesh_data);

ML_API MLResult ML_CALL MLOcclusionReleaseMesh(MLHandle handle, MLOcclusionMesh *mesh_data);

ML_EXTERN_C_END
```



