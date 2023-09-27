---
title: MLSpatialAnchorQueryFilter
summary: a collection of filters for spatial anchor queries. filters that have been set will be combined via logical conjunction. e. g. results must match the ids filter and fall within the radius constraint when both have been set. this struct must be initialized by calling #mlspatialanchorqueryfilterinit before use. 

---

# MLSpatialAnchorQueryFilter




A collection of filters for Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) queries. Filters that have been set will be combined via logical conjunction. E. g. results must match the ids filter AND fall within the radius constraint when both have been set. This struct must be initialized by calling #MLSpatialAnchorQueryFilterInit before use.   





## Public Attributes

### Center {#readonly-mlvec3f-center}

The center point of where a spatial query will originate. 

```csharp

public readonly MLVec3f Center;

```






-----------

### Ids {#readonly-intptr-ids}

A list of Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) IDs to query for. 

```csharp

public readonly IntPtr Ids;

```






-----------

### IdsCount {#readonly-uint-idscount}

The number of IDs provided. 

```csharp

public readonly uint IdsCount;

```






-----------

### MaxResults {#readonly-uint-maxresults}

The upper bound of expected results. Set to 0 for unbounded results. 

```csharp

public readonly uint MaxResults;

```






-----------

### RadiusM {#readonly-float-radiusm}

The radius in meters used for a spatial query, relative to the specified center. Only anchors inside this radius will be returned. Set to 0 for unbounded results. 

```csharp

public readonly float RadiusM;

```






-----------

### Sorted {#readonly-bool-sorted}

Indicate whether the results will be returned sorted by distance from center. Sorting results by distance will incur a performance penalty. 

```csharp

public readonly bool Sorted;

```






-----------

### Version {#readonly-uint-version}

Version of the structure. 

```csharp

public readonly uint Version;

```






-----------


