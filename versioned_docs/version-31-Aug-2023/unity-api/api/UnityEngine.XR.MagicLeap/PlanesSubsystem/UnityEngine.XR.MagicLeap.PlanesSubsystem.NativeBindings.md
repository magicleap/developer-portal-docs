---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPlanesCreate {#mlresultcode-mlplanescreate}

```csharp
public MLResult.Code MLPlanesCreate(
    out ulong planes&#95;tracker
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |planes&#95;tracker||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPlanesDestroy {#mlresultcode-mlplanesdestroy}

```csharp
public MLResult.Code MLPlanesDestroy(
    ulong planes&#95;tracker
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |planes&#95;tracker||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPlanesQueryBegin {#mlresultcode-mlplanesquerybegin}

```csharp
public MLResult.Code MLPlanesQueryBegin(
    ulong planes&#95;tracker,
    in Extensions.MLPlanesQuery query,
    out ulong request&#95;handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |planes&#95;tracker||
| in Extensions.MLPlanesQuery |query||
| out ulong |request&#95;handle||






-----------

### unsafe [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPlanesQueryGetResultsWithBoundaries {#unsafe-mlplanesquerygetresultswithboundaries}

```csharp
public unsafe MLResult.Code MLPlanesQueryGetResultsWithBoundaries(
    ulong planes&#95;tracker,
    ulong planes&#95;query,
    Extensions.MLPlane * out&#95;results,
    out uint out&#95;num&#95;results,
    ref Extensions.MLPlaneBoundariesList out&#95;boundaries
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |planes&#95;tracker||
| ulong |planes&#95;query||
| Extensions.MLPlane &#42; |out&#95;results||
| out uint |out&#95;num&#95;results||
| ref Extensions.MLPlaneBoundariesList |out&#95;boundaries||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLPlanesReleaseBoundariesList {#mlresultcode-mlplanesreleaseboundarieslist}

```csharp
public MLResult.Code MLPlanesReleaseBoundariesList(
    ulong planes&#95;tracker,
    ref Extensions.MLPlaneBoundariesList plane&#95;boundaries
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |planes&#95;tracker||
| ref Extensions.MLPlaneBoundariesList |plane&#95;boundaries||






-----------


