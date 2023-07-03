---
title: Meshing2
summary: apis for the meshing system. 

---

# Meshing2

APIs for the Meshing system.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLMeshingSettings](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md)**  |
| struct | **[MLMeshingExtents](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_extents.md)**  |
| struct | **[MLMeshingBlockInfo](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_info.md)**  |
| struct | **[MLMeshingMeshInfo](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_info.md)**  |
| struct | **[MLMeshingBlockRequest](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_request.md)**  |
| struct | **[MLMeshingMeshRequest](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_request.md)**  |
| struct | **[MLMeshingBlockMesh](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md)**  |
| struct | **[MLMeshingMesh](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLMeshingSettings](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) | **[MLMeshingSettings](/api-ref/api/Modules/group___meshing2/group___meshing2.md#struct-mlmeshingsettings)**  |
| typedef struct [MLMeshingExtents](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_extents.md) | **[MLMeshingExtents](/api-ref/api/Modules/group___meshing2/group___meshing2.md#struct-mlmeshingextents)**  |
| typedef struct [MLMeshingBlockInfo](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_info.md) | **[MLMeshingBlockInfo](/api-ref/api/Modules/group___meshing2/group___meshing2.md#struct-mlmeshingblockinfo)**  |
| typedef struct [MLMeshingMeshInfo](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_info.md) | **[MLMeshingMeshInfo](/api-ref/api/Modules/group___meshing2/group___meshing2.md#struct-mlmeshingmeshinfo)**  |
| typedef struct [MLMeshingBlockRequest](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_request.md) | **[MLMeshingBlockRequest](/api-ref/api/Modules/group___meshing2/group___meshing2.md#struct-mlmeshingblockrequest)**  |
| typedef struct [MLMeshingMeshRequest](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_request.md) | **[MLMeshingMeshRequest](/api-ref/api/Modules/group___meshing2/group___meshing2.md#struct-mlmeshingmeshrequest)**  |
| typedef struct [MLMeshingBlockMesh](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md) | **[MLMeshingBlockMesh](/api-ref/api/Modules/group___meshing2/group___meshing2.md#struct-mlmeshingblockmesh)**  |
| typedef struct [MLMeshingMesh](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md) | **[MLMeshingMesh](/api-ref/api/Modules/group___meshing2/group___meshing2.md#struct-mlmeshingmesh)**  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLMeshingFlags](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingflags)** <br></br> { <br></br>[MLMeshingFlags_PointCloud](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingflags-pointcloud) = 1 << 0,<br></br> [MLMeshingFlags_ComputeNormals](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingflags-computenormals) = 1 << 1,<br></br> [MLMeshingFlags_ComputeConfidence](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingflags-computeconfidence) = 1 << 2,<br></br> [MLMeshingFlags_Planarize](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingflags-planarize) = 1 << 3,<br></br> [MLMeshingFlags_RemoveMeshSkirt](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingflags-removemeshskirt) = 1 << 4,<br></br> [MLMeshingFlags_IndexOrderCW](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingflags-indexordercw) = 1 << 5,<br></br> [MLMeshingFlags_Ensure32Bits](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingflags-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMeshingLOD](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshinglod)** <br></br> { <br></br>[MLMeshingLOD_Minimum](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshinglod-minimum),<br></br> [MLMeshingLOD_Medium](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshinglod-medium),<br></br> [MLMeshingLOD_Maximum](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshinglod-maximum),<br></br> [MLMeshingLOD_Ensure32Bits](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshinglod-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMeshingResult](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingresult)** <br></br> { <br></br>[MLMeshingResult_Success](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingresult-success),<br></br> [MLMeshingResult_Failed](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingresult-failed),<br></br> [MLMeshingResult_Pending](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingresult-pending),<br></br> [MLMeshingResult_PartialUpdate](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingresult-partialupdate),<br></br> [MLMeshingResult_Ensure32Bits](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingresult-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMeshingMeshState](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingmeshstate)** <br></br> { <br></br>[MLMeshingMeshState_New](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingmeshstate-new),<br></br> [MLMeshingMeshState_Updated](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingmeshstate-updated),<br></br> [MLMeshingMeshState_Deleted](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingmeshstate-deleted),<br></br> [MLMeshingMeshState_Unchanged](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingmeshstate-unchanged),<br></br> [MLMeshingMeshState_Ensure32Bits](/api-ref/api/Modules/group___meshing2/group___meshing2.md#enums-mlmeshingmeshstate-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMeshingCreateClient](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingcreateclient)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_client_handle, const [MLMeshingSettings](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) * settings)<br></br>Create the meshing client.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMeshingDestroyClient](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingdestroyclient)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) client_handle)<br></br>Free the client resources.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMeshingInitSettings](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshinginitsettings)**([MLMeshingSettings](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) * out_settings)<br></br>Initialize the meshing settings with system defaults.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMeshingUpdateSettings](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingupdatesettings)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) client_handle, const [MLMeshingSettings](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) * settings)<br></br>Update the meshing settings at runtime.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMeshingRequestMeshInfo](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingrequestmeshinfo)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) client_handle, const [MLMeshingExtents](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_extents.md) * extents, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_request_handle)<br></br>Request the Mesh Info which includes CFUIDs and bounding extents of the blocks.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMeshingGetMeshInfoResult](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshinggetmeshinforesult)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) client_handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLMeshingMeshInfo](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_info.md) * out_info)<br></br>Get the Result of a previous MeshInfo request.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMeshingRequestMesh](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingrequestmesh)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) client_handle, const [MLMeshingMeshRequest](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_request.md) * request, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_request_handle)<br></br>Request the Mesh for all CFUIDs populated in request.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMeshingGetMeshResult](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshinggetmeshresult)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) client_handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLMeshingMesh](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md) * out_mesh)<br></br>Get the Result of a previous Mesh request.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMeshingFreeResource](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshingfreeresource)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) client_handle, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * request_handle)<br></br>Free resources created by the meshing APIS. Needs to be called whenever MLMeshingGetMeshInfoResult, MLMeshingGetMeshResult return a success.  |

## Detailed Description

APIs for the Meshing system. 




**Shared Object:**
  * perception.magicleap*

* The Meshing system is for generating a mesh representation of the real world. 




-----------
## Enums Documentation

### MLMeshingFlags {#enums-mlmeshingflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMeshingFlags_PointCloud |  1 << 0| If set, will return a point cloud instead of a triangle mesh. |
| MLMeshingFlags_ComputeNormals |  1 << 1| If set, the system will compute the normals for the triangle vertices. |
| MLMeshingFlags_ComputeConfidence |  1 << 2| If set, the system will compute the confidence values. |
| MLMeshingFlags_Planarize |  1 << 3| If set, the system will planarize the returned mesh (planar regions will be smoothed out). |
| MLMeshingFlags_RemoveMeshSkirt |  1 << 4| If set, the mesh skirt (overlapping area between two mesh blocks) will be removed. |
| MLMeshingFlags_IndexOrderCW |  1 << 5| If set, winding order of indices will be be changed from counter clockwise to clockwise. This could be useful for face culling process in different engines. |
| MLMeshingFlags_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Request flags for the meshing system. 





-----------

### MLMeshingLOD {#enums-mlmeshinglod}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMeshingLOD_Minimum | | Minimum Level of Detail (LOD) for the mesh. |
| MLMeshingLOD_Medium | | Medium Level of Detail (LOD) for the mesh. |
| MLMeshingLOD_Maximum | | Maximum Level of Detail (LOD) for the mesh. |
| MLMeshingLOD_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Level of detail of the block mesh. 





-----------

### MLMeshingResult {#enums-mlmeshingresult}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMeshingResult_Success | | Mesh request has succeeded. |
| MLMeshingResult_Failed | | Mesh request has failed. |
| MLMeshingResult_Pending | | Mesh request is pending. |
| MLMeshingResult_PartialUpdate | | There are partial updates on the mesh request. |
| MLMeshingResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Result of a mesh request. 





-----------

### MLMeshingMeshState {#enums-mlmeshingmeshstate}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMeshingMeshState_New | | Mesh has been created. |
| MLMeshingMeshState_Updated | | Mesh has been updated. |
| MLMeshingMeshState_Deleted | | Mesh has been deleted. |
| MLMeshingMeshState_Unchanged | | Mesh is unchanged. |
| MLMeshingMeshState_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




State of a block mesh. 





-----------


## Types Documentation

### MLMeshingSettings {#struct-mlmeshingsettings}

```cpp
typedef struct MLMeshingSettings MLMeshingSettings;
```


Mesh Settings for the underlying system. 



[More Info](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md)



-----------

### MLMeshingExtents {#struct-mlmeshingextents}

```cpp
typedef struct MLMeshingExtents MLMeshingExtents;
```


Axis aligned bounding box for querying updated mesh info. 



[More Info](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_extents.md)



-----------

### MLMeshingBlockInfo {#struct-mlmeshingblockinfo}

```cpp
typedef struct MLMeshingBlockInfo MLMeshingBlockInfo;
```


Representation of a mesh block. 



[More Info](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_info.md)



-----------

### MLMeshingMeshInfo {#struct-mlmeshingmeshinfo}

```cpp
typedef struct MLMeshingMeshInfo MLMeshingMeshInfo;
```


Response structure for the mesh block info. 



[More Info](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_info.md)



-----------

### MLMeshingBlockRequest {#struct-mlmeshingblockrequest}

```cpp
typedef struct MLMeshingBlockRequest MLMeshingBlockRequest;
```


Request structure to get the actual mesh for a block. 



[More Info](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_request.md)



-----------

### MLMeshingMeshRequest {#struct-mlmeshingmeshrequest}

```cpp
typedef struct MLMeshingMeshRequest MLMeshingMeshRequest;
```


Request structure to get the actual mesh for a set of blocks. 



[More Info](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_request.md)



-----------

### MLMeshingBlockMesh {#struct-mlmeshingblockmesh}

```cpp
typedef struct MLMeshingBlockMesh MLMeshingBlockMesh;
```


Final structure for a block mesh. 



[More Info](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_block_mesh.md)



-----------

### MLMeshingMesh {#struct-mlmeshingmesh}

```cpp
typedef struct MLMeshingMesh MLMeshingMesh;
```


Result of a Mesh request. See [MLMeshingGetMeshResult()](/api-ref/api/Modules/group___meshing2/group___meshing2.md#mlresult-mlmeshinggetmeshresult) for details. 



[More Info](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md)



-----------


## Functions Documentation

### MLMeshingCreateClient {#mlresult-mlmeshingcreateclient}

```cpp
MLResult MLMeshingCreateClient(
    MLHandle * out_client_handle,
    const MLMeshingSettings * settings
)
```

Create the meshing client. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_client_handle|The handle to the created client. |
| const [MLMeshingSettings](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) * |settings|The initial settings to be used for meshing.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Meshing Client was not created due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Meshing Client was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Missing required permission(s). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Meshing Client was not created due to an unknown error.|
**Required Permissions**:

  * com.magicleap.permission.SPATIAL_MAPPING (protection level: dangerous) 


Note that this will be the only function in the meshing API that will return MLResult_PermissionDenied. Trying to call the other functions with an invalid MLHandle will result in MLResult_InvalidParam.





-----------

### MLMeshingDestroyClient {#mlresult-mlmeshingdestroyclient}

```cpp
MLResult MLMeshingDestroyClient(
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
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Meshing Client was not destroyed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Meshing Client was destroyed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 






-----------

### MLMeshingInitSettings {#mlresult-mlmeshinginitsettings}

```cpp
MLResult MLMeshingInitSettings(
    MLMeshingSettings * out_settings
)
```

Initialize the meshing settings with system defaults. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMeshingSettings](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) * |out_settings|The initial settings to be used for meshing.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Mesh Settings were not initialized due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Mesh Settings were initialized successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 






-----------

### MLMeshingUpdateSettings {#mlresult-mlmeshingupdatesettings}

```cpp
MLResult MLMeshingUpdateSettings(
    MLHandle client_handle,
    const MLMeshingSettings * settings
)
```

Update the meshing settings at runtime. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |client_handle|The handle to the created client. |
| const [MLMeshingSettings](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md) * |settings|The updated settings to be used for meshing.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Mesh Settings were not updated due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Mesh Settings were updated successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 






-----------

### MLMeshingRequestMeshInfo {#mlresult-mlmeshingrequestmeshinfo}

```cpp
MLResult MLMeshingRequestMeshInfo(
    MLHandle client_handle,
    const MLMeshingExtents * extents,
    MLHandle * out_request_handle
)
```

Request the Mesh Info which includes CFUIDs and bounding extents of the blocks. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |client_handle|The handle to the created client. |
| const [MLMeshingExtents](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_extents.md) * |extents|The region of interest for meshing. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_request_handle|The handle for the current request. Needs to be passed to query the result of the request.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Mesh info was not requested due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Mesh Info was requested successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 






-----------

### MLMeshingGetMeshInfoResult {#mlresult-mlmeshinggetmeshinforesult}

```cpp
MLResult MLMeshingGetMeshInfoResult(
    MLHandle client_handle,
    MLHandle request_handle,
    MLMeshingMeshInfo * out_info
)
```

Get the Result of a previous MeshInfo request. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |client_handle|The handle to the created client. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|The handle populated in a prev MLMeshingGetMeshInfo. |
| [MLMeshingMeshInfo](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_info.md) * |out_info|The final result which will be populated only if the result is successful.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Mesh Settings were not updated due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Mesh Info was populated successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Peding|Mesh Info is pending update. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 






-----------

### MLMeshingRequestMesh {#mlresult-mlmeshingrequestmesh}

```cpp
MLResult MLMeshingRequestMesh(
    MLHandle client_handle,
    const MLMeshingMeshRequest * request,
    MLHandle * out_request_handle
)
```

Request the Mesh for all CFUIDs populated in request. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |client_handle|The handle to the created client. |
| const [MLMeshingMeshRequest](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh_request.md) * |request|The request for meshes of interest. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_request_handle|The handle for the current request. Needs to be passed to query the result of the request.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Meshes were not requested due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Meshes were requested successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 






-----------

### MLMeshingGetMeshResult {#mlresult-mlmeshinggetmeshresult}

```cpp
MLResult MLMeshingGetMeshResult(
    MLHandle client_handle,
    MLHandle request_handle,
    MLMeshingMesh * out_mesh
)
```

Get the Result of a previous Mesh request. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |client_handle|The handle to the created client. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|The handle populated in a prev MLMeshingGetMesh. |
| [MLMeshingMesh](/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_mesh.md) * |out_mesh|The final result which will be populated only if the result is successful.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Meshes were not updated due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Meshes was populated successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Peding|Meshes pending update. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 






-----------

### MLMeshingFreeResource {#mlresult-mlmeshingfreeresource}

```cpp
MLResult MLMeshingFreeResource(
    MLHandle client_handle,
    MLHandle * request_handle
)
```

Free resources created by the meshing APIS. Needs to be called whenever MLMeshingGetMeshInfoResult, MLMeshingGetMeshResult return a success. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |client_handle|The handle to the created client. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |request_handle|The handle populated in a prev request.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Resources were not freed due to an invalid parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Resources were freed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 






-----------





