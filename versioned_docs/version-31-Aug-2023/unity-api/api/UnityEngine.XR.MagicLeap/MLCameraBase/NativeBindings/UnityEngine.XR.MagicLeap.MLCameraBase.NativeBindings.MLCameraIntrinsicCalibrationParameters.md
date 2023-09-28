---
title: MLCameraIntrinsicCalibrationParameters
summary: intrinsiccalibrationparameters is a structure to provide instrisic calibration information 

---

# MLCameraIntrinsicCalibrationParameters




[IntrinsicCalibrationParameters](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.IntrinsicCalibrationParameters.md) is a structure to provide instrisic calibration information   





## Public Attributes

### Distortion {#readonly-double-distortion}

Distortion vector. The distortion co-efficients are in the following order: [k1, k2, p1, p2, k3] 

```csharp

public readonly double [] Distortion;

```






-----------

### FOV {#readonly-float-fov}

Field of view in degrees 

```csharp

public readonly float FOV;

```






-----------

### FocalLength {#readonly-mlvec2f-focallength}

Camera focal length. 

```csharp

public readonly MLVec2f FocalLength;

```






-----------

### Height {#readonly-uint-height}

Camera height. 

```csharp

public readonly uint Height;

```






-----------

### PrincipalPoint {#readonly-mlvec2f-principalpoint}

Camera principal point. 

```csharp

public readonly MLVec2f PrincipalPoint;

```






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


