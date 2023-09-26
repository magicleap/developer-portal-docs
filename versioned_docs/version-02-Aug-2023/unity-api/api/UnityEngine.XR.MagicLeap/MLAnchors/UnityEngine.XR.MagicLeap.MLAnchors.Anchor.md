---
title: Anchor

---

# Anchor










## Public Fields

### Id {#string-id}

The anchor's unique ID. This is a unique identifier for a single Spatial Anchor that is generated and managed by the Spatial Anchor system. The ID is created when MLSpatialAnchorCreate is called. 

```csharp

public string Id { get; set; }

```






-----------

### SpaceId {#string-spaceid}

The ID of the space that this anchor belongs to. This is only relevant if IsPersisted is true. 

```csharp

public string SpaceId { get; set; }

```






-----------

## Public Methods

### [MLResult](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Create {#mlresult-create}

Creates a new anchor based on a given pose that can expire after a predefined amount of time. The anchor is only valid when MLResult.Code.Ok is returned. 

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
| [Pose](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md#readonly-pose-pose) |pose|Pose to base the anchor on.|
| long |expirationSeconds|Length of time before anchor expires. Can be a range from 0 to DateTime.MaxValue - DateTime.UtcNow. Passing a value of 0 creates an indefinite duration.|
| out [Anchor](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) |anchor|Anchor being created.|






**Returns**: MLResult.Result will be  MLResult.Code.Ok  if successful. MLResult.Result will be  MLResult.Code.InvalidParam  if a parameter is invalid. MLResult.Result will be  MLResult.Code.AnchorsInsufficientMapping  if the space has not been sufficiently mapped to allow this operation. MLResult.Result will be  MLResult.Code.AnchorsInvalidExpirationTimestamp  if the provided expiration suggestion was not valid. MLResult.Result will be  MLResult.Code.AnchorsMaxAnchorLimitReached  if the maximum number of anchors for the current space has been reached. MLResult.Result will be  MLResult.Code.AnchorsMinDistanceThresholdExceeded  if the minimum distance between anchors was not met. 



-----------

### [MLResult](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Delete {#mlresult-delete}

```csharp
public MLResult Delete()
```






-----------

### [MLResult](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) DeleteAnchorWithId {#mlresult-deleteanchorwithid}

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

### [MLResult](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Publish {#mlresult-publish}

```csharp
public MLResult Publish()
```






-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

### [MLResult](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Update {#mlresult-update}

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
| [Anchor](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) |one||
| [Anchor](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) |two||






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
| [Anchor](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) |one||
| [Anchor](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) |two||






-----------

## Public Attributes

### ExpirationTimeStamp {#readonly-ulong-expirationtimestamp}

The suggested expiration time for this anchor represented in seconds since the Unix epoch. This is implemented as an expiration timestamp in the future after which the associated anchor should be considered no longer valid and may be removed by the Spatial Anchor system. 

```csharp

public readonly ulong ExpirationTimeStamp;

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


