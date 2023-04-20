---
title: MLDepthCameraIntrinsics

---

# MLDepthCameraIntrinsics










## Public Methods

### [Intrinsics](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Intrinsics.md) ToManaged {#intrinsics-tomanaged}

```csharp
public static Intrinsics ToManaged(
    MLDepthCameraIntrinsics nativeIntrinsics
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLDepthCameraIntrinsics](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraIntrinsics.md) |nativeIntrinsics||






-----------

### [MLDepthCameraIntrinsics](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraIntrinsics.md) Init {#mldepthcameraintrinsics-init}

```csharp
public static MLDepthCameraIntrinsics Init(
    Intrinsics managed
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Intrinsics](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Intrinsics.md) |managed|Depth camera intrinsic parameters. |






-----------

## Public Attributes

### Width {#uint-width}

```csharp

public uint Width;

```






-----------

### PrincipalPoint {#mlvec2f-principalpoint}

```csharp

public MLVec2f PrincipalPoint;

```

| Type | Description  | 
|--|--|
| [MLVec2f](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec2f.md) | 2D vector represented with X and Y floats.  |





-----------

### MaxDistortionCoefficients {#const-int-maxdistortioncoefficients}

```csharp

public const int MaxDistortionCoefficients = 5;

```






-----------

### Height {#uint-height}

```csharp

public uint Height;

```






-----------

### FocalLength {#mlvec2f-focallength}

```csharp

public MLVec2f FocalLength;

```

| Type | Description  | 
|--|--|
| [MLVec2f](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec2f.md) | 2D vector represented with X and Y floats.  |





-----------

### FoV {#float-fov}

```csharp

public float FoV;

```






-----------

### Distortion {#double-distortion}

```csharp

public double [] Distortion;

```






-----------

