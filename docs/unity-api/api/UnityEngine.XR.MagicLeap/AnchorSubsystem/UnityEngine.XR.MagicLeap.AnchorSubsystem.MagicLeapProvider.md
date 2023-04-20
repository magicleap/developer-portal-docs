---
title: MagicLeapProvider

---

# MagicLeapProvider







Inherits from: <br></br>Provider




## Public Methods

### override bool TryRemoveAnchor {#override-bool-tryremoveanchor}

```csharp
public override bool TryRemoveAnchor(
    TrackableId trackableId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| TrackableId |trackableId||






-----------

### override unsafe bool TryAddAnchor {#override-unsafe-bool-tryaddanchor}

```csharp
public override unsafe bool TryAddAnchor(
    Pose pose,
    out XRAnchor xrAnchor
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Pose |pose||
| out XRAnchor |xrAnchor||






-----------

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

### override unsafe TrackableChanges&lt; XRAnchor &gt; GetChanges {#override-unsafe-trackablechanges-xranchor-getchanges}

```csharp
public override unsafe TrackableChanges< XRAnchor > GetChanges(
    XRAnchor defaultAnchor,
    Allocator allocator
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| XRAnchor |defaultAnchor||
| Allocator |allocator||






-----------

### override void Destroy {#override-void-destroy}

```csharp
public override void Destroy()
```






-----------

