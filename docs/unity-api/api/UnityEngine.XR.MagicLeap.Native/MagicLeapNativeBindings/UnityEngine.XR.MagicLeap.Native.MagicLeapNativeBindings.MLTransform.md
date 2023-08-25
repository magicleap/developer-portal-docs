---
title: MLTransform
summary: information used to transform from one coordinate frame to another. 

---

# MLTransform




Information used to transform from one coordinate frame to another.   





## Public Methods

### [MLTransform](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) Identity {#mltransform-identity}

Returns an initialized [MLTransform](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) with default values. 

```csharp
public static MLTransform Identity()
```






**Returns**: An initialized [MLTransform](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md).



-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### Position {#mlvec3f-position}

The translation to apply to get the coordinate frame in the proper location. 

```csharp

public MLVec3f Position;

```

| Type | Description  | 
|--|--|
| [MLVec3f](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec3f.md) | 3D vector in native format.  |





-----------

### Rotation {#mlquaternionf-rotation}

The rotation of the coordinate frame to apply after the translation. 

```csharp

public MLQuaternionf Rotation;

```

| Type | Description  | 
|--|--|
| [MLQuaternionf](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLQuaternionf.md) | Quaternion in native format.  |





-----------

