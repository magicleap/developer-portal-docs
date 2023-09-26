---
title: MagicLeapCamera
summary: monobehaviour class representing the magic leap camera 

---

# MagicLeapCamera



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


MonoBehaviour class representing the Magic Leap camera   


Inherits from: <br></br>MonoBehaviour




## Public Fields

### EnforceFarClip {#bool-enforcefarclip}

```csharp

public bool EnforceFarClip { get; set; }

```






-----------

### ProtectedSurface {#bool-protectedsurface}

Getter/Setter for setting the Protected surface attribute. 

```csharp

public bool ProtectedSurface { get; set; }

```






-----------

### RecenterXROriginAtStart {#bool-recenterxroriginatstart}

```csharp

public bool RecenterXROriginAtStart { get; set; }

```






-----------

### StereoConvergencePoint {#transform-stereoconvergencepoint}

Getter/Setter for the stereo convergence point 

```csharp

public Transform StereoConvergencePoint { get; set; }

```






-----------

## Public Methods

### float ClampToClippingPlanes {#float-clamptoclippingplanes}

Clamp a given value to the near and far clip planes 

```csharp
public float ClampToClippingPlanes(
    float value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |value|Value to clamp|






**Returns**: Clamped value



-----------

### void ValidateFarClip {#void-validatefarclip}

Validate the Far Clip plane 

```csharp
public void ValidateFarClip()
```






-----------

