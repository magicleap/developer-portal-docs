---
title: MLXrPlaneSubsystem
summary: the magic leap implementation of the xrplanesubsystem. do not create this directly. use planessubsystemdescriptor.create instead. 

---

# MLXrPlaneSubsystem



**NameSpace:** 
[MagicLeapSupport](/unity-api/api/UnityEngine.XR.OpenXR.Features.MagicLeapSupport/UnityEngine.XR.OpenXR.Features.MagicLeapSupport.md) 


The Magic Leap implementation of the  XRPlaneSubsystem . Do not create this directly. Use  PlanesSubsystemDescriptor.Create()  instead.   


Inherits from: <br></br>XRPlaneSubsystem




## Public Fields

### Query {#planesquery-query}

```csharp

public static PlanesQuery Query { get; set; }

```






-----------

## Public Enums

### MLPlanesQueryFlags {#enums-mlplanesqueryflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0| Include no planes.   |
| Vertical | 1 << 0| Include planes whose normal is perpendicular to gravity.   |
| Horizontal | 1 << 1| Include planes whose normal is parallel to gravity.   |
| Arbitrary | 1 << 2| Include planes with arbitrary normals.   |
| AllOrientations | Vertical | Horizontal | Arbitrary| Include all plane orientations.   |
| SemanticCeiling | 1 << 6| Include planes semantically tagged as ceiling.   |
| SemanticFloor | 1 << 7| Include planes semantically tagged as floor.   |
| SemanticWall | 1 << 8| Include planes semantically tagged as wall.   |
| SemanticPlatform | 1 << 9| Include planes semantically tagged as platforms   |
| SemanticAll | SemanticCeiling | SemanticFloor | SemanticWall | SemanticPlatform| Include all planes that are semantically tagged.   |








-----------

