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

### override void GetBoundary {#override-void-getboundary}

```csharp
public override void GetBoundary(
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

### override unsafe TrackableChanges&lt; BoundedPlane &gt; GetChanges {#override-unsafe-trackablechanges-boundedplane-getchanges}

```csharp
public override unsafe TrackableChanges< BoundedPlane > GetChanges(
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


