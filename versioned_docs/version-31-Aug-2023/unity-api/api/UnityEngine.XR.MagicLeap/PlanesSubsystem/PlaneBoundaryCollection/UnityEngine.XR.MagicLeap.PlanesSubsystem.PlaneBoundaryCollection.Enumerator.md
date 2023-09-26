---
title: Enumerator
summary: an enumerator which can be used by a foreach statement to iterate over the elements in a planeboundarycollection. 

---

# Enumerator




An enumerator which can be used by a  foreach  statement to iterate over the elements in a [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md).   





## Public Fields

### Current {#planeboundary-current}

The current element in the enumerator. 

```csharp

public PlaneBoundary Current { get; set; }

```

| Type | Description  | 
|--|--|
| [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) | Container for the boundary of a detected planar surface. This is specific to Magic Leap because the polygon describing the boundary may be concave, and may contain holes.  |





-----------

## Public Methods

### void Dispose {#void-dispose}

Disposes of the enumerator. 

```csharp
public void Dispose()
```






-----------

### bool MoveNext {#bool-movenext}

Moves to the next element in the collection. 

```csharp
public bool MoveNext()
```






**Returns**:  true  if the next element is valid, or  false  if the [Enumerator](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.Enumerator.md) is already at the end of the collection.



-----------

### void Reset {#void-reset}

Resets the enumerator. 

```csharp
public void Reset()
```






-----------

## Public Attributes

### m_Collection {#planeboundarycollection-m-collection}

```csharp

public PlaneBoundaryCollection m_Collection;

```

| Type | Description  | 
|--|--|
| [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) | Represents a collection of concave  BoundedPlane  boundaries obtained from MagicLeapPlaneSubsystem.GetAllBoundariesForPlane(TrackableId).  |





-----------

### m_Index {#int-m-index}

```csharp

public int m_Index;

```






-----------


