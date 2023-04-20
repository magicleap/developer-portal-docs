---
title: MLMeshingMeshInfo
summary: response structure for the mesh block info. 

---

# MLMeshingMeshInfo




Response structure for the mesh block info.   





## Public Attributes

### timestamp {#long-timestamp}

The response timestamp to a earlier request. 

```csharp

public long timestamp;

```






-----------

### dataCount {#uint-datacount}

The number of responses in data pointer. 

```csharp

public uint dataCount;

```






-----------

### data {#intptr-data}

The meshinfo returned by the system. 

```csharp

public IntPtr data;

```






-----------

