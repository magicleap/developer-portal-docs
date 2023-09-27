---
title: Params
summary: a collection of filters for spatial anchor queries. filters that have been set will be combined via logical conjunction. e. g. results must match the ids filter and fall within the radius constraint when both have been set. this struct must be initialized by calling #mlspatialanchorqueryfilterinit before use. 

---

# Params




A collection of filters for Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) queries. Filters that have been set will be combined via logical conjunction. E. g. results must match the ids filter AND fall within the radius constraint when both have been set. This struct must be initialized by calling #MLSpatialAnchorQueryFilterInit before use.   





## Public Methods

###  Params {#functions-params}

```csharp
public Params(
    Vector3 Center,
    float Radius,
    uint MaxResults,
    bool Sorted
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Vector3 |Center||
| float |Radius||
| uint |MaxResults||
| bool |Sorted||






-----------

###  Params {#functions-params}

```csharp
public Params(
    Vector3 Center,
    float Radius,
    Anchor [] Anchors,
    uint MaxResults,
    bool Sorted
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Vector3 |Center||
| float |Radius||
| [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) [] |Anchors||
| uint |MaxResults||
| bool |Sorted||






-----------

###  Params {#functions-params}

```csharp
public Params(
    Vector3 Center,
    float Radius,
    string [] AnchorIds,
    uint MaxResults,
    bool Sorted
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Vector3 |Center||
| float |Radius||
| string [] |AnchorIds||
| uint |MaxResults||
| bool |Sorted||






-----------

## Public Attributes

### AnchorIds {#readonly-string-anchorids}

A list of Spatial Anchors Ids query for. Only the array of anchors or the array of strings will be used for querying. 

```csharp

public readonly string [] AnchorIds;

```






-----------

### Anchors {#readonly-anchors}

A list of Spatial Anchors to query for. Only the array of anchors or the array of strings will be used for querying. 

```csharp

public readonly Anchor [] Anchors;

```






-----------

### Center {#readonly-vector3-center}

The center point of where a spatial query will originate. 

```csharp

public readonly Vector3 Center;

```






-----------

### MaxResults {#readonly-uint-maxresults}

The upper bound of expected results. Set to 0 for unbounded results. 

```csharp

public readonly uint MaxResults;

```






-----------

### Radius {#readonly-float-radius}

The radius in meters used for a spatial query, relative to the specified center. Only anchors inside this radius will be returned. Set to 0 for unbounded results. 

```csharp

public readonly float Radius;

```






-----------

### Sorted {#readonly-bool-sorted}

Indicate whether the results will be returned sorted by distance from center. Sorting results by distance will incur a performance penalty. 

```csharp

public readonly bool Sorted;

```






-----------


