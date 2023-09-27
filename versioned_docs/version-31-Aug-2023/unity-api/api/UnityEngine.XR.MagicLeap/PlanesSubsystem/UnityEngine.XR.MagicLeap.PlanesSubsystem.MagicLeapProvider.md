---
title: MagicLeapProvider

---

# MagicLeapProvider







Inherits from: <br></br>Provider




## Public Fields

### requestedPlaneDetectionMode {#override-planedetectionmode-requestedplanedetectionmode}

```csharp

public override PlaneDetectionMode requestedPlaneDetectionMode { get; set; }

```






-----------

## Public Methods

### override void Destroy {#override-void-destroy}

```csharp
public override void Destroy()
```






-----------

### unsafe [PlaneBoundaryCollection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) GetAllBoundariesForPlane {#unsafe-getallboundariesforplane}

```csharp
public unsafe PlaneBoundaryCollection GetAllBoundariesForPlane(
    in TrackableId trackableId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in TrackableId |trackableId||






-----------

### unsafe override void GetBoundary {#unsafe-override-void-getboundary}

```csharp
public unsafe override void GetBoundary(
    TrackableId trackableId,
    Allocator allocator,
    ref NativeArray< Vector2 > convexHullOut
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| TrackableId |trackableId||
| Allocator |allocator||
| ref NativeArray&lt; Vector2 &gt; |convexHullOut||






-----------

### unsafe override TrackableChanges&lt; BoundedPlane &gt; GetChanges {#unsafe-override-trackablechanges-boundedplane-getchanges}

```csharp
public unsafe override TrackableChanges< BoundedPlane > GetChanges(
    BoundedPlane defaultPlane,
    Allocator allocator
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| BoundedPlane |defaultPlane||
| Allocator |allocator||






-----------

###  MagicLeapProvider {#functions-magicleapprovider}

```csharp
public MagicLeapProvider()
```






-----------

### override void Start {#override-void-start}

```csharp
public override void Start()
```






-----------

### override void Stop {#override-void-stop}

```csharp
public override void Stop()
```






-----------

## Public Attributes

### currentPlaneDetectionMode {#override-planedetectionmode-currentplanedetectionmode}

```csharp

public override PlaneDetectionMode currentPlaneDetectionMode => _currentPlaneDetectionMode.ToPlaneDetectionMode();

```






-----------


