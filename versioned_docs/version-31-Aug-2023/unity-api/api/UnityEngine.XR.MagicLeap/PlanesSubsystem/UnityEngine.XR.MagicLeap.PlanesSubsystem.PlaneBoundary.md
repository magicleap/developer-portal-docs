---
title: PlaneBoundary
summary: container for the boundary of a detected planar surface. this is specific to magic leap because the polygon describing the boundary may be concave, and may contain holes. 

---

# PlaneBoundary




Container for the boundary of a detected planar surface. This is specific to Magic Leap because the polygon describing the boundary may be concave, and may contain holes.   


Inherits from: <br></br>IEquatable< PlaneBoundary >




## Public Fields

### holeCount {#int-holecount}

The number of holes in this boundary. 

```csharp

public int holeCount { get; set; }

```






-----------

### polygonVertexCount {#int-polygonvertexcount}

The number of vertices in this boundary's polygon. 

```csharp

public int polygonVertexCount { get; set; }

```






-----------

### valid {#bool-valid}

Whether this [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) is valid. You should check for validity before invoking GetPolygon(Allocator, NativeArray&lt;Vector2&gt;), [GetPolygon(Allocator)](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#nativearray-vector2-getpolygon), [GetHole(int, Allocator)](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#nativearray-vector2-gethole), or GetHole(int, Allocator, NativeArray&lt;Vector2&gt;). 

```csharp

public bool valid { get; set; }

```






-----------

## Public Methods

### void CreateOrResizeNativeArrayIfNecessary< T > {#void-createorresizenativearrayifnecessary-t-}

```csharp
public static void CreateOrResizeNativeArrayIfNecessary< T >(
    int length,
    Allocator allocator,
    ref NativeArray< T > array
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |length||
| Allocator |allocator||
| ref NativeArray&lt; T &gt; |array||






-----------

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






**Returns**:  true  if _obj_  is of type [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) and compares equal with [Equals(PlaneBoundary)](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#bool-equals).



-----------

### bool Equals {#bool-equals}

IEquatable interface. Compares for equality. 

```csharp
public bool Equals(
    PlaneBoundary other
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) |other|The [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) to compare against.|






**Returns**:  true  if all fields of this [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) compare equal to _other_ .



-----------

### override int GetHashCode {#override-int-gethashcode}

Computes a hash code suitable for use in a  Dictionary  or  HashSet . 

```csharp
public override int GetHashCode()
```






**Returns**: A hash code suitable for use in a  Dictionary  or  HashSet .



-----------

### NativeArray&lt; Vector2 &gt; GetHole {#nativearray-vector2-gethole}

Get the polygon representing a hole in this boundary. The 2D vertices are in plane-space. 

```csharp
public NativeArray< Vector2 > GetHole(
    int index,
    Allocator allocator
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |index|The index of the hole. Must be less than [holeCount](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#int-holecount).|
| Allocator |allocator|The allocator to use for the returned NativeArray. Must be  Allocator.TempJob  or  Allocator.Persistent .|


**Exceptions**: 

  * `System.InvalidOperationException` Thrown if [valid](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#bool-valid) is false.
  * `System.InvalidOperationException` Thrown if _allocator_  is  Allocator.Temp  or  Allocator.None .
  * `System.ArgumentOutOfRangeException` Thrown if _index_  is less than 0 or greater than or equal to [holeCount](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#int-holecount).






**Returns**: A new NativeArray allocated with _allocator_  containing a set of 2D vertices in plane-space describing the hole at _index_ .



-----------

### unsafe void GetHole {#unsafe-void-gethole}

Get the polygon representing a hole in this boundary. The 2D vertices are in plane-space. 

```csharp
public unsafe void GetHole(
    int index,
    Allocator allocator,
    ref NativeArray< Vector2 > polygonOut
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |index|The index of the hole. Must be less than [holeCount](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#int-holecount).|
| Allocator |allocator|The allocator to use if _polygonOut_  must be resized. Must be  Allocator.TempJob  or  Allocator.Persistent .|
| ref NativeArray&lt; Vector2 &gt; |polygonOut|The resulting polygon describing the hole at _index_ .|


**Exceptions**: 

  * `System.InvalidOperationException` Thrown if [valid](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#bool-valid) is false.
  * `System.InvalidOperationException` Thrown if _allocator_  is  Allocator.Temp  or  Allocator.None .
  * `System.ArgumentOutOfRangeException` Thrown if _index_  is less than 0 or greater than or equal to [holeCount](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#int-holecount).






-----------

### unsafe void GetPolygon {#unsafe-void-getpolygon}

Gets the polygon representing a plane's boundary, and, if successful, copies it to _polygonOut_ . _polygonOut_  is resized or created using  if necessary. The 2D vertices are in plane-space. 

```csharp
public unsafe void GetPolygon(
    Allocator allocator,
    ref NativeArray< Vector2 > polygonOut
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Allocator |index|The index of the boundary to retrieve.|
| ref NativeArray&lt; Vector2 &gt; |allocator|The Allocator to use if _polygonOut_  must be recreated. Must be  Allocator.TempJob  or  Allocator.Persistent .|
|  |polygonOut|A NativeArray to fill with boundary points. If the array is not the correct size, it is disposed and recreated.|


**Exceptions**: 

  * `System.InvalidOperationException` Thrown if [valid](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#bool-valid) is  false .
  * `System.InvalidOperationException` Thrown if _allocator_  is  Allocator.Temp  or  Allocator.None .






-----------

### NativeArray&lt; Vector2 &gt; GetPolygon {#nativearray-vector2-getpolygon}

Gets the polygon representing this boundary. The 2D vertices are in plane-space. 

```csharp
public NativeArray< Vector2 > GetPolygon(
    Allocator allocator
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Allocator |allocator|The allocator to use for the returned NativeArray. Must be  Allocator.TempJob  or  Allocator.Persistent .|


**Exceptions**: 

  * `System.InvalidOperationException` Thrown if [valid](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#bool-valid) is  false .
  * `System.InvalidOperationException` Thrown if _allocator_  is  Allocator.Temp  or  Allocator.None .






**Returns**: A new NativeArray containing a set of 2D points in plane-space representing a boundary for a plane. The caller is responsible for disposing the NativeArray.



-----------

### unsafe void TransformMLPolygon {#unsafe-void-transformmlpolygon}

```csharp
public static unsafe void TransformMLPolygon(
    Extensions.MLPolygon mlPolygon,
    Pose pose,
    Allocator allocator,
    ref NativeArray< Vector2 > polygonOut
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Extensions.MLPolygon |mlPolygon||
| Pose |pose||
| Allocator |allocator||
| ref NativeArray&lt; Vector2 &gt; |polygonOut||






-----------

### bool operator!= {#bool-operator}

Compares for inequality. Same as  ! [Equals(PlaneBoundary)](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#bool-equals). 

```csharp
public static bool operator!=(
    PlaneBoundary lhs,
    PlaneBoundary rhs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) |lhs|The left-hand side of the comparison.|
| [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) |rhs|The right-hand side of the comparison.|






**Returns**:  true  if any of the fields of this [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) are not equal to _other_ .



-----------

### bool operator== {#bool-operator}

Compares for equality. Same as [Equals(PlaneBoundary)](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md#bool-equals). 

```csharp
public static bool operator==(
    PlaneBoundary lhs,
    PlaneBoundary rhs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) |lhs|The left-hand side of the comparison.|
| [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) |rhs|The right-hand side of the comparison.|






**Returns**:  true  if all fields of this [PlaneBoundary](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundary.md) compare equal to _other_ .



-----------

## Public Attributes

### m_Boundary {#extensionsmlplaneboundary-m-boundary}

```csharp

public Extensions.MLPlaneBoundary m_Boundary;

```






-----------

### m_Pose {#pose-m-pose}

```csharp

public Pose m_Pose;

```






-----------


