---
title: PlanesQuery

---

# PlanesQuery










## Public Attributes

### BoundsCenter {#vector3-boundscenter}

The center of the bounding box which defines where planes extraction should occur. 

```csharp

public Vector3 BoundsCenter;

```






-----------

### BoundsExtents {#vector3-boundsextents}

The size of the bounding box where planes extraction will occur. 

```csharp

public Vector3 BoundsExtents;

```






-----------

### BoundsRotation {#quaternion-boundsrotation}

The rotation of the bounding box where planes extraction will occur. 

```csharp

public Quaternion BoundsRotation;

```






-----------

### Flags {#planessubsystemextensionsmlplanesqueryflags-flags}

The flags to apply to this query. 

```csharp

public PlanesSubsystem.Extensions.MLPlanesQueryFlags Flags;

```






-----------

### MaxResults {#uint-maxresults}

The maximum number of results that should be returned. 

```csharp

public uint MaxResults;

```






-----------

### MinPlaneArea {#float-minplanearea}

The minimum area (in squared meters) of planes to be returned. This value cannot be lower than 0.04 (lower values will be capped to this minimum). 

```csharp

public float MinPlaneArea;

```






-----------


