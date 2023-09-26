---
title: Anchor

---

# Anchor










## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Create {#mlresult-create}

Creates a new anchor based on a given pose that can expire after a predefined amount of time. The anchor is only valid when [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) is returned. 

```csharp
public static MLResult Create(
    Pose pose,
    long expirationSeconds,
    out Anchor anchor
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Pose](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md#readonly-pose-pose) |pose|Pose to base the anchor on.|
| long |expirationSeconds|Length of time before anchor expires. Can be a range from 0 to DateTime.MaxValue - DateTime.UtcNow. Passing a value of 0 creates an indefinite duration.|
| out [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) |anchor|[Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) being created.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if a parameter is invalid. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AnchorsInsufficientMapping](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-anchorsinsufficientmapping)  if the space has not been sufficiently mapped to allow this operation. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AnchorsInvalidExpirationTimestamp](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-anchorsinvalidexpirationtimestamp)  if the provided expiration suggestion was not valid. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AnchorsMaxAnchorLimitReached](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-anchorsmaxanchorlimitreached)  if the maximum number of anchors for the current space has been reached. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.AnchorsMinDistanceThresholdExceeded](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-anchorsmindistancethresholdexceeded)  if the minimum distance between anchors was not met. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Delete {#mlresult-delete}

```csharp
public MLResult Delete()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) DeleteAnchorWithId {#mlresult-deleteanchorwithid}

```csharp
public static MLResult DeleteAnchorWithId(
    string anchorId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |anchorId||






-----------

### override bool Equals {#override-bool-equals}

```csharp
public override bool Equals(
    object obj
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| object |obj||






-----------

### override int GetHashCode {#override-int-gethashcode}

```csharp
public override int GetHashCode()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Publish {#mlresult-publish}

```csharp
public MLResult Publish()
```






-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Update {#mlresult-update}

```csharp
public MLResult Update(
    long newExpirationTimeStamp
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| long |newExpirationTimeStamp||






-----------

### bool operator!= {#bool-operator}

```csharp
public static bool operator!=(
    Anchor one,
    Anchor two
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) |one||
| [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) |two||






-----------

### bool operator== {#bool-operator}

```csharp
public static bool operator==(
    Anchor one,
    Anchor two
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) |one||
| [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) |two||






-----------

## Public Attributes

### ExpirationTimeStamp {#readonly-ulong-expirationtimestamp}

The suggested expiration time for this anchor represented in seconds since the Unix epoch. This is implemented as an expiration timestamp in the future after which the associated anchor should be considered no longer valid and may be removed by the Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) system. 

```csharp

public readonly ulong ExpirationTimeStamp;

```






-----------

### Id {#string-id}

The anchor's unique ID. This is a unique identifier for a single Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) that is generated and managed by the Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) system. The ID is created when MLSpatialAnchorCreate is called. 

```csharp

public string Id => this.id.ToString();

```






-----------

### IsPersisted {#readonly-bool-ispersisted}

Indicates whether or not the anchor has been persisted via a call to #MLSpatialAnchorPublish. 

```csharp

public readonly bool IsPersisted;

```






-----------

### Pose {#readonly-pose-pose}

Pose. 

```csharp

public readonly Pose Pose;

```






-----------

### SpaceId {#string-spaceid}

The ID of the space that this anchor belongs to. This is only relevant if IsPersisted is true. 

```csharp

public string SpaceId => this.spaceId.ToString();

```






-----------


