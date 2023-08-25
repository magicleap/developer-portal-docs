---
title: Intrinsics
summary: depth camera intrinsic parameters. 

---

# Intrinsics




Depth camera intrinsic parameters.   [More...](#detailed-description)  




## Detailed Description

```csharp
public struct Intrinsics; 
```


**Details**

API Level 292





-----------



## Public Methods

### List&lt; double &gt; GetDistortionList {#list-double-getdistortionlist}

Convenience method to retrieve a list of the Distortion coefficient values in the correct order. 

```csharp
public List< double > GetDistortionList()
```






**Returns**: 



-----------

## Public Attributes

### Distortion {#distortioncoefficients-distortion}

Set of distortion coefficients. 

```csharp

public DistortionCoefficients Distortion;

```

| Type | Description  | 
|--|--|
| [DistortionCoefficients](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.DistortionCoefficients.md) | The distortion coefficients are arranged in the following order: [k1, k2, p1, p2, k3]  |

**Details**

The distortion coefficients are arranged in the following order: [k1, k2, p1, p2, k3]





-----------

### FoV {#float-fov}

Field of View in degrees 

```csharp

public float FoV;

```






-----------

### FocalLength {#vector2-focallength}

Camera Focal Length 

```csharp

public Vector2 FocalLength;

```






-----------

### Height {#uint-height}

Camera Height 

```csharp

public uint Height;

```






-----------

### PrincipalPoint {#vector2-principalpoint}

Camera Principal Point 

```csharp

public Vector2 PrincipalPoint;

```






-----------

### Width {#uint-width}

Camera Width 

```csharp

public uint Width;

```






-----------

