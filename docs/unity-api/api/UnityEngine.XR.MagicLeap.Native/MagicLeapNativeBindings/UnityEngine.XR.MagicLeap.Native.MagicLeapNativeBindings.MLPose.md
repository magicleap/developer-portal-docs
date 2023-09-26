---
title: MLPose
summary: geometric relationship between two coordinate frames. 

---

# MLPose




Geometric relationship between two coordinate frames.   





## Public Attributes

### AngularAcceleration {#mlvec3f-angularacceleration}

Angular accleration in radians per second squared. 

```csharp

public MLVec3f AngularAcceleration;

```

| Type | Description  | 
|--|--|
| [MLVec3f](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec3f.md) | 3D vector in native format.  |





-----------

### AngularVelocity {#mlvec3f-angularvelocity}

Angular velocity in radians per second. 

```csharp

public MLVec3f AngularVelocity;

```

| Type | Description  | 
|--|--|
| [MLVec3f](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec3f.md) | 3D vector in native format.  |





-----------

### HasDerivatives {#bool-hasderivatives}

Indicate if this pose has derivative values. 

```csharp

public bool HasDerivatives;

```






-----------

### LinearAcceleration {#mlvec3f-linearacceleration}

The linear acceleration in meters per second squared. 

```csharp

public MLVec3f LinearAcceleration;

```

| Type | Description  | 
|--|--|
| [MLVec3f](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec3f.md) | 3D vector in native format.  |





-----------

### LinearVelocity {#mlvec3f-linearvelocity}

The linear velocity in meters per second. 

```csharp

public MLVec3f LinearVelocity;

```

| Type | Description  | 
|--|--|
| [MLVec3f](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec3f.md) | 3D vector in native format.  |





-----------

### OriginTimeNs {#long-origintimens}

Time when this relationship was measured. 

```csharp

public long OriginTimeNs;

```






-----------

### PredictTimeNs {#long-predicttimens}

Time to which this relationship has been predicted. May be equal to origin&#95;time&#95;ns. 

```csharp

public long PredictTimeNs;

```






-----------

### Transform {#mltransform-transform}

6-DoF transformation between the two coordinate frames that can be directly used to express source frame coordinates in destination frame coordinates. 

```csharp

public MLTransform Transform;

```

| Type | Description  | 
|--|--|
| [MLTransform](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) | Information used to transform from one coordinate frame to another.  |





-----------

