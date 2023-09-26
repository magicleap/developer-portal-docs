---
title: PlaneBoundaryCollection
summary: represents a collection of concave boundedplane boundaries obtained from magicleapplanesubsystem.getallboundariesforplanetrackableid. 

---

# PlaneBoundaryCollection




Represents a collection of concave  BoundedPlane  boundaries obtained from MagicLeapPlaneSubsystem.GetAllBoundariesForPlane(TrackableId).   [More...](#detailed-description)  


Inherits from: <br></br>IEquatable< PlaneBoundaryCollection >



## Detailed Description

```csharp
public struct PlaneBoundaryCollection : IEquatable< PlaneBoundaryCollection > 
```


**Details**

Each Magic Leap plane can have multiple plane boundaries. This collection represents the set of all boundaries associated with a particular plane. Note that unlike most boundaries associated with  BoundedPlane s, these are not necessarily convex. 

The plane boundaries are tied to native resources which are managed by the MagicLeapPlaneSubsystem. Typically, a  [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md)  is only valid until the next call to MagicLeapPlaneSubsystem.GetChanges(BoundedPlane, Allocator), so you should not hold onto an instance of this struct past a frame boundary. 


. 



**See**: MagicLeapPlaneSubsystem.GetPlaneBoundaries(TrackableId)



-----------



## Public Fields

### count {#int-count}

The number of boundaries in this collection. 

```csharp

public int count { get; set; }

```






-----------

### this[int index] {#planeboundary-thisint-index}

Attempts to get the plane boundary at index  and, if successful, copies it to _boundaryOut_ . _boundaryOut_  is resized or created using  if necessary. 

```csharp

public PlaneBoundary this[int index] { get; set; }

```

| Type | Description  | 
|--|--|
| [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) | Container for the boundary of a detected planar surface. This is specific to Magic Leap because the polygon describing the boundary may be concave, and may contain holes.  |

**Parameters**

| Type | Name  | Description  | 
|--|--|--|
|  |index|The index of the boundary to retrieve.|
|  |allocator|The Allocator to use if _boundaryOut_  must be recreated. Must be  Allocator.TempJob  or  Allocator.Persistent .|
|  |boundaryOut|A NativeArray to fill with boundary points. If the array is not the correct size, it is disposed and recreated. If this method returns  false ,  boundaryOut  is unchanged.|


**Exceptions**: 

  * `System.InvalidOperationException` Thrown if [valid](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md#bool-valid) is  false .
  * `System.InvalidOperationException` Thrown if _allocator_  is  Allocator.Temp  or  Allocator.None .
  * `System.ArgumentOutOfRangeException` Thrown if _index_  is less than zero or greater than or equal to [count](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md#int-count).






**Returns**:  true  if the boundary was successfully retrieved and _boundaryOut_  was populated; otherwise,  false .



-----------

### valid {#bool-valid}

Whether this collection is valid or not. Check for validity before using the index operator. 

```csharp

public bool valid { get; set; }

```






-----------

## Public Methods

### override bool Equals {#override-bool-equals}

IEquatable interface. Compares for equality. 

```csharp
public override bool Equals(
    object obj
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| object |obj|The object to compare for equality.|






**Returns**:  true  if _obj_  is of type [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) and compares equal with [Equals(PlaneBoundaryCollection)](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md#bool-equals).



-----------

### bool Equals {#bool-equals}

IEquatable interface. Comapres for equality. 

```csharp
public bool Equals(
    PlaneBoundaryCollection other
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) |other|The [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) to compare against.|






**Returns**:  true  if all fields of this [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) compare equal to _other_ .



-----------

### [Enumerator](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.Enumerator.md) GetEnumerator {#enumerator-getenumerator}

Get an enumerator, compatible with a duck-typed foreach. You typically would not call this directly, but is used by the compiler in a  foreach  statement. 

```csharp
public Enumerator GetEnumerator()
```






**Returns**: An [Enumerator](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.Enumerator.md) compatible with a duck-typed foreach.



-----------

### override int GetHashCode {#override-int-gethashcode}

Computes a hash code suitable for use in a  Dictionary  or  HashSet . 

```csharp
public override int GetHashCode()
```






**Returns**: A hash code suitable for use in a  Dictionary  or  HashSet .



-----------

### bool operator!= {#bool-operator}

Comapres for inequality. Same as  ! [Equals(PlaneBoundaryCollection)](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md#bool-equals). 

```csharp
public static bool operator!=(
    PlaneBoundaryCollection lhs,
    PlaneBoundaryCollection rhs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) |lhs|The left-hand side of the comparison.|
| [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) |rhs|The right-hand side of the comparison.|






**Returns**:  true  if any of the fields of this [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) are not equal to _other_ .



-----------

### bool operator== {#bool-operator}

Comapres for equality. Same as [Equals(PlaneBoundaryCollection)](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md#bool-equals). 

```csharp
public static bool operator==(
    PlaneBoundaryCollection lhs,
    PlaneBoundaryCollection rhs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) |lhs|The left-hand side of the comparison.|
| [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) |rhs|The right-hand side of the comparison.|






**Returns**:  true  if all fields of this [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) compare equal to _other_ .



-----------

## Public Attributes

### m_Boundaries {#nativearray-extensionsmlplaneboundary-m-boundaries}

```csharp

public NativeArray< Extensions.MLPlaneBoundary > m_Boundaries;

```






-----------

### m_Pose {#pose-m-pose}

```csharp

public Pose m_Pose;

```






-----------


