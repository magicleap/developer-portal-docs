---
title: MLCameraIntrinsicCalibrationParameters
summary: intrinsiccalibrationparameters is a structure to provide instrisic calibration information. 

---

# MLCameraIntrinsicCalibrationParameters




IntrinsicCalibrationParameters is a structure to provide instrisic calibration information.   





## Public Attributes

### Distortion {#readonly-double-distortion}

Distortion vector. The distortion co-efficients are in the following order: [k1, k2, p1, p2, k3]. 

```csharp

public readonly double[] Distortion;

```






-----------

### FOV {#readonly-float-fov}

Field of view in degrees. 

```csharp

public readonly float FOV;

```






-----------

### FocalLength {#readonly-focallength}

Camera focal length. 

```csharp

public readonly MLVec2f FocalLength;

```

| Type | Description  | 
|--|--|
| readonly [MLVec2f](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec2f.md) | 2D vector represented with X and Y floats.  |





-----------

### Height {#readonly-uint-height}

Camera height. 

```csharp

public readonly uint Height;

```






-----------

### PrincipalPoint {#readonly-principalpoint}

Camera principal point. 

```csharp

public readonly MLVec2f PrincipalPoint;

```

| Type | Description  | 
|--|--|
| readonly [MLVec2f](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec2f.md) | 2D vector represented with X and Y floats.  |





-----------

### Version {#readonly-uint-version}

version contains the version number for this structure. 

```csharp

public readonly uint Version;

```






-----------

### Width {#readonly-uint-width}

Camera width. 

```csharp

public readonly uint Width;

```






-----------


