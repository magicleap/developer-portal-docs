---
title: NativeBindings
summary: see ml-spatial-anchor.h for additional comments. 

---

# NativeBindings




See ml&#95;spatial&#95;anchor.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSpatialAnchorCreate {#mlresultcode-mlspatialanchorcreate}

Create a new local Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) at the desired location. On success, out&#95;anchor will be returned with the desired transform and a newly generated ID. Any unpublished anchor will be lost if the Headpose session is lost. See #MLHeadTrackingGetMapEvents for more details. 

```csharp
public MLResult.Code MLSpatialAnchorCreate(
    ulong handle,
    in MLSpatialAnchorCreateInfo createInfo,
    out MLSpatialAnchor anchor
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| in [MLSpatialAnchorCreateInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/NativeBindings/UnityEngine.XR.MagicLeap.MLAnchors.NativeBindings.MLSpatialAnchorCreateInfo.md) |createInfo|A structure used to populate anchor creation info when creating a new Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md). |
| out [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/NativeBindings/UnityEngine.XR.MagicLeap.MLAnchors.NativeBindings.MLSpatialAnchor.md) |anchor|A structure representing a user-defined Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md). |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSpatialAnchorDelete {#mlresultcode-mlspatialanchordelete}

Delete an existing Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md). If successful, this will delete the anchor from persistent storage based on the currently selected mapping mode. 

```csharp
public MLResult.Code MLSpatialAnchorDelete(
    ulong handle,
    MLUUIDBytes anchorId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| [MLUUIDBytes](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLUUIDBytes.md) |anchorId|Universally unique identifier, byte array. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSpatialAnchorGetLocalizationInfo {#mlresultcode-mlspatialanchorgetlocalizationinfo}

Get the current localization status of the device. 

```csharp
public MLResult.Code MLSpatialAnchorGetLocalizationInfo(
    ulong handle,
    ref MLSpatialAnchorLocalizationInfo localizationInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/NativeBindings/UnityEngine.XR.MagicLeap.MLAnchors.NativeBindings.MLSpatialAnchorLocalizationInfo.md) |localizationInfo|A structure containing information about the device's localization state. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSpatialAnchorPublish {#mlresultcode-mlspatialanchorpublish}

Publish an existing local Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) to the persistent backend. Depending on the currently selected mapping mode, this can store the anchor locally or in the cloud. This call will fail if the device is not localized to a space. This call will fail if the device is not localized to a space. Any unpublished anchor will be lost if the Headpose session is lost.See #MLHeadTrackingGetMapEvents for more details 

```csharp
public MLResult.Code MLSpatialAnchorPublish(
    ulong handle,
    MLUUIDBytes anchorId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| [MLUUIDBytes](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLUUIDBytes.md) |anchorId|Universally unique identifier, byte array. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSpatialAnchorQueryCreate {#mlresultcode-mlspatialanchorquerycreate}

Create a new query for Spatial Anchors in the current space. It is the responsibility of the caller to call [MLSpatialAnchorQueryDestroy](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/NativeBindings/UnityEngine.XR.MagicLeap.MLAnchors.NativeBindings.md#mlresultcode-mlspatialanchorquerydestroy) with the query handle returned from this function after the results are no longer needed. 

```csharp
public MLResult.Code MLSpatialAnchorQueryCreate(
    ulong handle,
    in MLSpatialAnchorQueryFilter queryFilter,
    out ulong queryHandle,
    out uint resultsCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| in [MLSpatialAnchorQueryFilter](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/NativeBindings/UnityEngine.XR.MagicLeap.MLAnchors.NativeBindings.MLSpatialAnchorQueryFilter.md) |queryFilter|A collection of filters for Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) queries. Filters that have been set will be combined via logical conjunction. E. g. results must match the ids filter AND fall within the radius constraint when both have been set. This struct must be initialized by calling #MLSpatialAnchorQueryFilterInit before use. |
| out ulong |queryHandle||
| out uint |resultsCount||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSpatialAnchorQueryDestroy {#mlresultcode-mlspatialanchorquerydestroy}

Destroy a previously created query handle and release its associated resources. 

```csharp
public MLResult.Code MLSpatialAnchorQueryDestroy(
    ulong handle,
    ulong queryHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ulong |queryHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSpatialAnchorQueryGetResult {#mlresultcode-mlspatialanchorquerygetresult}

Get the result of a previous Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) query. Putting index bounds on the results allows the caller to only receive a subset of the total number of results generated by the query. This is useful as a form of pagination in the case of a large number of anchors in the current space. Indexing is zero-based so if there are N results in the query, then it is required that 0 &lt;= first&#95;index &lt;= last&#95;index &lt; N. 

```csharp
public MLResult.Code MLSpatialAnchorQueryGetResult(
    ulong handle,
    ulong queryHandle,
    uint firstIndex,
    uint lastIndex,
    MLSpatialAnchor [] results
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ulong |queryHandle||
| uint |firstIndex||
| uint |lastIndex||
| [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/NativeBindings/UnityEngine.XR.MagicLeap.MLAnchors.NativeBindings.MLSpatialAnchor.md) [] |results|A structure representing a user-defined Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md). |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSpatialAnchorTrackerCreate {#mlresultcode-mlspatialanchortrackercreate}

Create a Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) tracker. 

```csharp
public MLResult.Code MLSpatialAnchorTrackerCreate(
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSpatialAnchorTrackerDestroy {#mlresultcode-mlspatialanchortrackerdestroy}

Destroy a previously created Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) tracker. 

```csharp
public MLResult.Code MLSpatialAnchorTrackerDestroy(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSpatialAnchorUpdate {#mlresultcode-mlspatialanchorupdate}

Update a Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md)'s properties. The only property that can currently be updated is the expirationTimeStamp. 

```csharp
public MLResult.Code MLSpatialAnchorUpdate(
    ulong handle,
    in MLSpatialAnchor anchor
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| in [MLSpatialAnchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/NativeBindings/UnityEngine.XR.MagicLeap.MLAnchors.NativeBindings.MLSpatialAnchor.md) |anchor|A structure representing a user-defined Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md). |






-----------


