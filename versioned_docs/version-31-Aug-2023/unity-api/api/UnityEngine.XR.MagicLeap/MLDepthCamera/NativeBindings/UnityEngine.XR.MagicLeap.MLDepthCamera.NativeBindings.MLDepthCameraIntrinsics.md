---
title: MLDepthCameraIntrinsics

---

# MLDepthCameraIntrinsics










## Public Methods

### [MLDepthCameraIntrinsics](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraIntrinsics.md) Init {#mldepthcameraintrinsics-init}

```csharp
public static MLDepthCameraIntrinsics Init(
    Intrinsics managed
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Intrinsics](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Intrinsics.md) |managed|Depth camera intrinsic parameters. |






-----------

### [Intrinsics](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Intrinsics.md) ToManaged {#intrinsics-tomanaged}

```csharp
public static Intrinsics ToManaged(
    MLDepthCameraIntrinsics nativeIntrinsics
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLDepthCameraIntrinsics](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraIntrinsics.md) |nativeIntrinsics||






-----------

## Public Attributes

### Distortion {#double-distortion}

```csharp

public double [] Distortion;

```






-----------

### FoV {#float-fov}

```csharp

public float FoV;

```






-----------

### FocalLength {#mlvec2f-focallength}

```csharp

public MLVec2f FocalLength;

```

| Type | Description  | 
|--|--|
| [MLVec2f](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec2f.md) | 2D vector represented with X and Y floats.  |





-----------

### Height {#uint-height}

```csharp

public uint Height;

```






-----------

### MaxDistortionCoefficients {#const-int-maxdistortioncoefficients}

```csharp

public const int MaxDistortionCoefficients = 5;

```






-----------

### PrincipalPoint {#mlvec2f-principalpoint}

```csharp

public MLVec2f PrincipalPoint;

```

| Type | Description  | 
|--|--|
| [MLVec2f](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec2f.md) | 2D vector represented with X and Y floats.  |





-----------

### Width {#uint-width}

```csharp

public uint Width;

```






-----------


