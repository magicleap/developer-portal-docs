---
title: IntrinsicCalibrationParameters
summary: camera intrinsic parameters. 

---

# IntrinsicCalibrationParameters




Camera intrinsic parameters.   





## Public Methods

###  IntrinsicCalibrationParameters {#functions-intrinsiccalibrationparameters}

```csharp
public IntrinsicCalibrationParameters(
    uint width,
    uint height,
    in Vector2 focalLength,
    in Vector2 principalPoint,
    float fov,
    double [] distortion
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |width||
| uint |height||
| in Vector2 |focalLength||
| in Vector2 |principalPoint||
| float |fov||
| double [] |distortion||






-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### Distortion {#readonly-double-distortion}

Distortion vector. The distortion co-efficients are in the following order: [k1, k2, p1, p2, k3] 

```csharp

public readonly double [] Distortion;

```






-----------

### FOV {#readonly-float-fov}

```csharp

public readonly float FOV;

```






-----------

### FocalLength {#readonly-vector2-focallength}

```csharp

public readonly Vector2 FocalLength;

```






-----------

### Height {#readonly-uint-height}

```csharp

public readonly uint Height;

```






-----------

### PrincipalPoint {#readonly-vector2-principalpoint}

```csharp

public readonly Vector2 PrincipalPoint;

```






-----------

### Width {#readonly-uint-width}

```csharp

public readonly uint Width;

```






-----------


