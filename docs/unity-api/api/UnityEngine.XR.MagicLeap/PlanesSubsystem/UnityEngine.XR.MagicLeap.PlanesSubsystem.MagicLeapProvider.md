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

### override void Stop {#override-void-stop}

```csharp
public override void Stop()
```






-----------

### override void Start {#override-void-start}

```csharp
public override void Start()
```






-----------

###  MagicLeapProvider {#functions-magicleapprovider}

```csharp
public MagicLeapProvider()
```






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

### unsafe [PlaneBoundaryCollection](/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/PlaneBoundaryCollection/UnityEngine.XR.MagicLeap.PlanesSubsystem.PlaneBoundaryCollection.md) GetAllBoundariesForPlane {#unsafe-getallboundariesforplane}

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

### override void Destroy {#override-void-destroy}

```csharp
public override void Destroy()
```






-----------

## Public Attributes

### currentPlaneDetectionMode {#override-planedetectionmode-currentplanedetectionmode}

```csharp

public override PlaneDetectionMode currentPlaneDetectionMode => _currentPlaneDetectionMode.ToPlaneDetectionMode();

```






-----------

