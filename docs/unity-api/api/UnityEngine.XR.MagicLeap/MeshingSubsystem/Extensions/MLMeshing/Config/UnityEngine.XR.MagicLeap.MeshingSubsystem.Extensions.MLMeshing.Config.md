---
title: Config

---

# Config










## Public Fields

### meshingSettings {#settings-meshingsettings}

```csharp

public static Settings meshingSettings { get; set; }

```






-----------

### density {#float-density}

```csharp

public static float density { get; set; }

```






-----------

### batchSize {#int-batchsize}

```csharp

public static int batchSize { get; set; }

```






-----------

## Public Methods

### void SetCustomMeshBlockRequests {#void-setcustommeshblockrequests}

```csharp
public static void SetCustomMeshBlockRequests(
    OnMeshBlockRequests onBlockRequests
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| OnMeshBlockRequests |onBlockRequests||






-----------

### void SetBounds {#void-setbounds}

```csharp
public static void SetBounds(
    Transform transform,
    Vector3 extents
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Transform |transform||
| Vector3 |extents||






-----------

### void SetBounds {#void-setbounds}

```csharp
public static void SetBounds(
    Vector3 position,
    Quaternion rotation,
    Vector3 extents
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Vector3 |position||
| Quaternion |rotation||
| Vector3 |extents||






-----------

### void ReleaseConfidence {#void-releaseconfidence}

```csharp
public static void ReleaseConfidence(
    MeshId meshId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| MeshId |meshId||






-----------

### IntPtr AcquireConfidence {#intptr-acquireconfidence}

```csharp
public static IntPtr AcquireConfidence(
    MeshId meshId,
    out int count
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| MeshId |meshId||
| out int |count||






-----------

## Public Enums

### Flags {#enums-flags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0|   |
| PointCloud | 1 << 0|   |
| ComputeNormals | 1 << 1|   |
| ComputeConfidence | 1 << 2|   |
| Planarize | 1 << 3|   |
| RemoveMeshSkirt | 1 << 4|   |
| IndexOrderCW | 1 << 5|   |








-----------

