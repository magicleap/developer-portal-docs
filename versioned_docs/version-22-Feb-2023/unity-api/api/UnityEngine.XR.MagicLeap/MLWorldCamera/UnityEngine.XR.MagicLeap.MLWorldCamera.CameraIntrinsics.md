---
title: CameraIntrinsics
summary: world camera intrinsic parameters. 

---

# CameraIntrinsics




World camera intrinsic parameters.   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### FocalLength {#readonly-vector2-focallength}

Camera focal length. 

```csharp

public readonly Vector2 FocalLength;

```






-----------

### Fov {#readonly-float-fov}

Field of view in degrees. 

```csharp

public readonly float Fov;

```






-----------

### Height {#readonly-uint-height}

Camera height. 

```csharp

public readonly uint Height;

```






-----------

### PrincipalPoint {#readonly-vector2-principalpoint}

Camera principal point. 

```csharp

public readonly Vector2 PrincipalPoint;

```






-----------

### RadialDistortion {#readonly-double-radialdistortion}

Radial distortion vector. The radial distortion co-efficients are in the following order: [k1, k2, k3, k4]. 

```csharp

public readonly double [] RadialDistortion;

```






-----------

### TangentialDistortion {#readonly-double-tangentialdistortion}

Tangential distortion vector. The tangential distortion co-efficients are in the following order: [p1, p2]. 

```csharp

public readonly double [] TangentialDistortion;

```






-----------

### Width {#readonly-uint-width}

Camera width. 

```csharp

public readonly uint Width;

```






-----------


